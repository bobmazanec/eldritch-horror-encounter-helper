# require 'debug'
require 'json'
require 'nokogiri'

require './add_encounter_step'

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
