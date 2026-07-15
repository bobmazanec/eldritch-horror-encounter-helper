require 'debug'
require 'json'
require 'nokogiri'
require 'yaml'

require './string_extensions'

def add_encounter_step(text)
  # JSON appears to be emitted in order set, so set things in this general
  # order so the JSON reads kinda like the cards:
  # intro
  # choices
  #   pass
  #   fail

  step = {} # assume Hash for now
  choices = {}

  if md = text.match(/(?<intro>.*?\(.*?)\s+(?<pass_fail>If you (pass|fail)([,;]| gain)\s+.*)/)
    # The "\(" part is to match the "(<skill icon>" part of the tests;
    # sadly, some of the closing parentheses are missing in the HTML
    #
    # e.g., something like
    #   [...] (...<span title="Observation">...). 
    #   If you pass, gain 1 <a...>Item</a> Asset from the reserve or 1 random Item Asset from the deck.
    #   If you fail, [...]; gain a <a...>Detained</a> Condition.
    # (HTML trimmed & newlines added for clarity)
    # becomes
    # {
    #   "intro": "[...]; test Observation.",
    #   "choices": {
    #     "Pass": "Gain 1 Item Asset from the reserve or 1 random Item Asset from the deck.",
    #     "Fail": "[...]; gain a Detained Condition."
    #   }
    # }
    # Pass or Fail might be omitted and left ""
    step["intro"] = md[:intro]

    pass_fail = md[:pass_fail]

    fail = if md_fail = pass_fail&.match(/If you fail[,;] (?<fail>.*)/)
      pass_fail.delete_suffix! md_fail[0] # Remove "If you fail, [...]"

      md_fail[:fail]
    else
      ""
    end

    pass = if md_pass = pass_fail&.match(/If you pass[,;]?\s+(?<pass>.*)/)
      md_pass[:pass].strip_html.capitalize_first_letter
    else
      ""
    end

    step["choices"] = {
      "Pass": add_encounter_step(pass),
      "Fail": add_encounter_step(fail)
    }
  elsif matches = text.match(/(?<intro>.+ You may.+ to (?<narrative>.+\.)) If you .+?, (?<result>.+)/)
    # e.g., something like
    #   [...]. You may become <a...>Delayed</a> to spend the night in this spot.
    #   If you become Delayed, [...] you wake with profound new insights;
    #   spawn <a...>2 Clues</a>.
    # (HTML trimmed & newlines added for clarity)
    # becomes
    # {
    #   "intro": "[...]. You may become Delayed to spend the night in this spot.",
    #   "choices": {
    #     "Spend the night in this spot.": "[...] you wake with profound new insights; spawn 2 Clues.",
    #     "Don't": ""
    #   }
    # }
    step["intro"] = matches[:intro]

    do_it = matches[:narrative].strip_html.capitalize_first_letter

    choices[do_it] = matches[:result].strip_html.capitalize_first_letter
    choices["Don't"] = ""
    step["choices"] = choices
  elsif matches = text.match(/(?<intro>.+ You may (?<action>.+\.)) If you .+?, (?<result>.+)/)
    # e.g., something like
    #   [...] You may gain a <a...>Debt</a> Condition.
    #   If you gain the Condition, he shares what he knows; gain 1 <a...>Task</a> Unique Asset.
    # (HTML trimmed & newlines added for clarity)
    # becomes
    # {
    #   "intro": "[...] You may gain a Debt Condition.",
    #   "choices": {
    #     "Gain a Debt Condition.": "He shares what he knows; gain 1 Task Unique Asset.",
    #     "Don't": ""
    # }
    step["intro"] = matches[:intro]

    do_it = matches[:action].strip_html.capitalize_first_letter

    step["choices"] = {
      do_it => add_encounter_step(matches[:result]),
      "Don't" => ""
    }
  elsif you_may = text.match(/You may (?<action>.+)( to (?<effect>.+))/)
    # e.g., something like
    # [...] You may spend <span...><span...><img...></span></span> <a...>1 Clue</a> to gain 1 <a...>Artifact</a>.
    # (HTML trimmed & newlines added for clarity)
    # becomes
    # {
    #   "intro": "[...] You may spend 1 Clue to gain 1 Artifact.",
    #   "choices": {
    #     "Spend 1 Clue to gain 1 Artifact.": "",
    #     "Don't": ""
    #   }
    # }
    # Neither choice has a further result/consequence, but include the choices to maintain suspense & consistency
    action = you_may[:effect]

    do_it = action.strip_html.capitalize_first_letter
    
    intro = text
    did_it = ""

    if md2 = text.match(/#{you_may[:action].strip_html}, (?<result>.+)$/)
      intro = text.delete_suffix md2[0]
      did_it = add_encounter_step md2[:result]
    end

    step["intro"] = intro
    step["choices"] = {
      do_it => did_it,
      "Don't" => ""
    }
  elsif matches = text.match(/(?<intro>.+[aA]mbushes[^.!]*? you.)(?<result>.*)/)
    # e.g., something like
    #   [...] A <a...>Monster</a> ambushes you!
    #   If you defeat it, gain this <a...>Clue</a>
    # (HTML trimmed & newlines added for clarity)
    # becomes
    # {
    #   "intro": "[...] A Monster ambushes you!",
    #   "choices": {
    #     "Resolved combat encounter": "[...] If you defeat it, gain this Clue"
    # }
    step["intro"] = matches[:intro]
    step["choices"] = {
      "Resolved combat encounter": add_encounter_step(matches[:result])
    }
  else
    step = text.strip_html.capitalize_first_letter
  end

  step["intro"] = step["intro"].strip_html.capitalize_first_letter if step.is_a?(Hash)

  step
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
      entry[:encounter] = add_encounter_step cells[2].inner_html.strip

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
