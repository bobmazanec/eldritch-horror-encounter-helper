require 'debug'
require 'json'
require 'nokogiri'
require 'yaml'

require './string_extensions'

def add_encounter_step(dest, text)
  # JSON appears to be emitted in order set, so set things in this general
  # order so the JSON reads kinda like the cards:
  # intro
  # choices
  #   pass
  #   fail
    
  choices = {}

  if md = text.match(/(?<intro>.*\)[.!])(?<pass_fail>\s+If you (pass|fail),.*)?/)
    # e.g., something like
    #   You make sure no one is watching before sneaking out of the shop with your stolen goods (...<span title="Observation">...). 
    #   If you pass, gain 1 <a...>Item</a> Asset from the reserve or 1 random Item Asset from the deck.
    #   If you fail, you are caught by the store owner and arrested; gain a <a...>Detained</a> Condition.
    # (HTML trimmed & newlines added for clarity)
    # becomes
    # {
    #   "intro": "You make sure no one is watching before sneaking out of the shop with your stolen goods; test Observation.",
    #   "choices": {
    #     "Pass": "Gain 1 Item Asset from the reserve or 1 random Item Asset from the deck.",
    #     "Fail": "You are caught by the store owner and arrested; gain a Detained Condition."
    #   }
    # }
    # Pass or Fail might be omitted and left ""
    dest["intro"] = md[:intro]

    pass_fail = md[:pass_fail]

    fail = if md_fail = pass_fail&.match(/If you fail, (?<fail>.*)/)
      pass_fail.delete_suffix! md_fail[0] # Remove "If you fail, [...]"

      md_fail[:fail]
    else
      ""
    end

    choices["Pass"] = if md_pass = pass_fail&.match(/If you pass, (?<pass>.*)/)
      md_pass[:pass].strip_html.capitalize_first_letter
    else
      ""
    end

    choices["Fail"] = fail.strip_html.capitalize_first_letter

    dest["choices"] = choices
  elsif matches = text.match(/(?<intro>.+ You may.+ to (?<narrative>.+\.)) If you .+?, (?<result>.+)/)
    # e.g., something like
    #   A school of dolphins has surrounded your ship, trying to keep you here. You may become <a...>Delayed</a> to spend the night in this spot.
    #   If you become Delayed, the Elder God Nodens visits your dreams, and you wake with profound new insights;
    #   spawn <a...>2 Clues</a>.
    # (HTML trimmed & newlines added for clarity)
    # becomes
    # {
    #   "intro": "A school of dolphins has surrounded your ship, trying to keep you here. You may become Delayed to spend the night in this spot.",
    #   "choices": {
    #     "Spend the night in this spot.": "The Elder God Nodens visits your dreams, and you wake with profound new insights; spawn 2 Clues.",
    #     "Don't": ""
    #   }
    # }
    dest["intro"] = matches[:intro]

    do_it = matches[:narrative].strip_html.capitalize_first_letter

    choices[do_it] = matches[:result].strip_html.capitalize_first_letter
    choices["Don't"] = ""
    dest["choices"] = choices
  elsif matches = text.match(/(?<intro>.+ You may (?<gain_condition>.+\.)) If you .+?, (?<result>.+)/)
    dest["intro"] = matches[:intro]

    do_it = matches[:gain_condition].strip_html.capitalize_first_letter

    choices[do_it] = matches[:result].strip_html.capitalize_first_letter
    choices["Don't"] = ""
    dest["choices"] = choices
  elsif you_may = text.match(/You may (?<action>.+)( to (?<effect>.+))/)
    action = you_may[:effect]

    do_it = action.strip_html.capitalize_first_letter
    
    choices[do_it] = ""
    choices["Don't"] = ""
    intro = text

    if md2 = text.match(/#{you_may[:action].strip_html}, (?<result>.+)$/)
      intro = text.delete_suffix md2[0]
      choices[do_it] = md2[:result].strip_html.capitalize_first_letter
    end

    dest["intro"] = intro
    dest["choices"] = choices
  else
    dest["intro"] = text
  end

  dest["intro"] = dest["intro"].strip_html
end

def process_city_wilderness_sea_cards(filename, deck_data_key)
  doc = Nokogiri::HTML(File.open(("wiki-html/#{filename}.html")))
  tables = {}
  tables[:city], tables[:wilderness], tables[:sea] = doc.css('h3 + table')
  entries_by_type = {}

  %i(city wilderness sea).each do |space_type|
    entries = {}

    tables[space_type].css('tbody tr:has(td)').each do |row|
      entry = {}

      cells = row.css('td')
      card_id = cells[0].text.strip.to_i

      raise "#{filename}: #{space_type}:#{card_id} already exists" if entries_by_type.has_key?(card_id)

      entry[:expansion_id] = cells[1].at_css('a')['href'].split('/').last
      entry[:encounter] = {}
      add_encounter_step entry[:encounter], cells[2].inner_html.strip

      entries[card_id] = entry
    end

    entries_by_type[space_type] = entries
  end

  city_count = entries_by_type[:city].size
  sea_count = entries_by_type[:sea].size
  wilderness_count = entries_by_type[:wilderness].size

  raise "#{filename}: Non-equal entry counts - City:#{city_count}, Wilderness:#{wilderness_count}, Sea:#{sea_count}" \
  unless (city_count == wilderness_count && city_count == sea_count)

  cards = []
  entries_by_type[:city].keys.sort.each do |card_id|
    city_entry = entries_by_type[:city][card_id]
    city_expansion = city_entry[:expansion_id]
    
    raise "#{filename}: Sea missing card ##{card_id}" unless sea_entry = entries_by_type[:sea][card_id]
    raise "#{filename}: Wilderness missing card ##{card_id}" unless wilderness_entry = entries_by_type[:wilderness][card_id]

    raise "#{filename}: Card ##{card_id} expansion mismatch" unless city_expansion == wilderness_entry[:expansion_id] && city_expansion == sea_entry[:expansion_id]

    card = {}
    card[:cardId] = card_id
    card[:expansionId] = city_expansion
    card[:City] = city_entry[:encounter]
    card[:Wilderness] = wilderness_entry[:encounter]
    card[:Sea] = sea_entry[:encounter]

    cards << card
  end

  puts "deckData.#{deck_data_key} = " + JSON.pretty_generate(cards) + ";"
end
