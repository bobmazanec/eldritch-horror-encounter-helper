#!/usr/bin/env ruby
# frozen_string_literal: true

require 'json'
require 'cgi'
require 'fileutils'
require 'nokogiri'

INPUT_DIR = File.expand_path('./wiki-html', __dir__)
OUTPUT_DIR = File.expand_path('../js', __dir__)

class EncounterParser
  CONDITIONAL_MARKER = /If you (pass|fail|do not|don't|do),/i
  COMBAT_RESULT_MARKER = /\b(?:If you (?:do not )?defeat\b|If you are (?:not )?defeated\b|Whether you defeat\b|For each success you roll on the [^,]+ test,|If you (?:pass|fail)\b[^.?!;]*(?:\btests?\b|\blose\b[^.?!;]*\b(?:Health|Sanity)\b)|If you lose\b[^.?!;]*\b(?:Health|Sanity)\b[^.?!;]*\btests?\b|Afterward,?\b)/i
  SKILL_NAMES = %w[Strength Will Lore Observation Influence].freeze
  # Punctuation-free placeholders keep skill icons intact through sentence splitting until output.
  SKILL_ICON_START = "\u{E000}"
  SKILL_ICON_END = "\u{E001}"
  SKILL = "#{SKILL_ICON_START}?(?:#{SKILL_NAMES.join('|')})#{SKILL_ICON_END}?".freeze
  RESEARCH_FILES = %w[
    Abhoth_Research_Encounters
    Antarctica_Research_Encounters
    Antediluvium_Research_Encounters
    Atlach-Nacha_Research_Encounters
    Azathoth_Research_Encounters
    Cthulhu_Research_Encounters
    Elder_Things_Research_Encounters
    Hastur_Research_Encounters
    Hypnos_Research_Encounters
    Ithaqua_Research_Encounters
    Nephren-Ka_Research_Encounters
    Nyarlathotep_Research_Encounters
    Shub-Niggurath_Research_Encounters
    Shudde_M'ell_Research_Encounters
    Syzygy_Research_Encounters
    Yig_Research_Encounters
    Yog-Sothoth_Research_Encounters
  ].freeze
  OTHER_WORLD_FILES = %w[
    City_of_the_Great_Race
    Great_Hall_of_Celaeno
    Lost_Carcosa
    Plateau_of_Leng
    The_Abyss
    The_Dreamlands_(Other_World)
    The_Future
    The_Past
    The_Underworld_(Other_World)
    Unknown_Kadath_(Other_World)
    Yuggoth
  ].freeze
  COMPLEX_LOCATION_FILES = {
    'Dream-Quest_Encounter' => 'Dream-Quest',
    'Expedition_Encounters' => 'Expedition',
    'Mystic_Ruins_Encounter' => 'Mystic Ruins'
  }.freeze
  LOCATION_ENCOUNTER_FILES = %w[Location_Encounter].freeze
  LOCATION_ENCOUNTER_DECKS = [
    'America',
    'Europe',
    'Asia/Australia',
    'Outpost',
    'Mountain',
    'Egypt',
    'Africa',
    'Dreamlands'
  ].freeze
  SPECIAL_ENCOUNTER_FILES = %w[Special_Encounters].freeze
  THREE_LOCATION_FILES = %w[General_Encounter].freeze
  STANDARD_FILES = %w[Devastation].freeze
  FILE_TYPES = {
    research: RESEARCH_FILES,
    other_world: OTHER_WORLD_FILES,
    complex_location: COMPLEX_LOCATION_FILES.keys,
    location_encounter: LOCATION_ENCOUNTER_FILES,
    special_encounter: SPECIAL_ENCOUNTER_FILES,
    three_location: THREE_LOCATION_FILES,
    standard: STANDARD_FILES
  }.freeze

  def initialize
    FileUtils.mkdir_p(OUTPUT_DIR)
  end

  def run
    processed_count = 0
    generated_count = 0

    FILE_TYPES.each do |file_type, file_names|
      file_names.each do |file_name|
        path = File.join(INPUT_DIR, "#{file_name}.html")
        processed_count += 1
        file_result = process_file(path, file_type)
        next unless file_result

        file_result = file_result.transform_values { |value| restore_skill_icons(value) }
        output_path = write_output_for_file(path, file_result, file_type)
        generated_count += 1
        puts "#{File.basename(path)} -> #{File.basename(output_path)}"
      end
    end

    puts "Processed/generated: #{processed_count}/#{generated_count} files"
  end

  private

  def restore_skill_icons(value)
    pattern = /#{SKILL_ICON_START}(#{SKILL_NAMES.join('|')})#{SKILL_ICON_END}/
    case value
    when String
      value.gsub(pattern) { %(<img src="images/#{Regexp.last_match(1)}.webp">) }
    when Array
      value.map { |item| restore_skill_icons(item) }
    when Hash
      value.each_with_object({}) { |(k, v), acc| acc[restore_skill_icons(k)] = restore_skill_icons(v) }
    else
      value
    end
  end

  def process_file(path, file_type)
    html = File.read(path)
  rescue Errno::ENOENT
    raise "Missing configured input file: #{path}"
  else
    doc = Nokogiri::HTML(html)
    content = doc.at_css('#mw-content-text') || doc
    file_name = File.basename(path, '.html')
    table_infos = extract_table_infos(content)
    return if table_infos.empty?

    page_title = normalize_space(extract_text(doc.at_css('h1#firstHeading')))
    send("process_#{file_type}_file", file_name, page_title, table_infos)
  end

  def process_research_file(file_name, _page_title, table_infos)
    ancient_one = file_name.sub(/_Research_Encounters\z/i, '').tr('_', ' ')
    cards = merge_location_tables_to_cards(table_infos)
    if ancient_one.casecmp('Antarctica').zero?
      cards = cards.map do |card|
        card.each_with_object({}) do |(key, value), acc|
          acc[key.is_a?(String) && key.end_with?(' Research') ? key.sub(/\s+Research\z/, '') : key] = value
        end
      end
    end

    { deck_data: {}, deck_data_research: { ancient_one => normalize_ambush_shapes(cards) } }
  end

  def process_other_world_file(file_name, page_title, table_infos)
    location = other_world_location_name(file_name, page_title)
    { deck_data: { location => parse_table_as_cards(table_infos.first[:table], nil) }, deck_data_research: {} }
  end

  def process_three_location_file(file_name, page_title, table_infos)
    deck_name = deck_name_for(file_name, page_title)
    cards = merge_location_tables_to_cards(table_infos)
    { deck_data: { deck_name => cards }, deck_data_research: {} }
  end

  def process_location_encounter_file(_file_name, _page_title, table_infos)
    { deck_data: normalize_ambush_shapes(build_location_encounter_decks(table_infos)), deck_data_research: {} }
  end

  def process_special_encounter_file(file_name, page_title, table_infos)
    deck_data_special = {}
    table_infos.each do |table_info|
      deck_name = normalize_space(table_info[:heading])
      deck_name = page_title if deck_name.empty?
      deck_name = file_name.tr('_', ' ') if deck_name.empty?
      ancient_one = normalize_space(table_info[:ancient_one].to_s)
      ancient_one = 'Unknown' if ancient_one.empty?

      deck_data_special[ancient_one] ||= {}
      deck_data_special[ancient_one][deck_name] = parse_table_as_cards(table_info[:table], nil)
    end

    { deck_data: {}, deck_data_research: {}, deck_data_special: deck_data_special }
  end

  def process_complex_location_file(file_name, page_title, table_infos)
    deck_name = deck_name_for(file_name, page_title)
    cards = table_infos.each_with_index.flat_map do |table_info, index|
      location_key = canonical_location_name(table_info[:heading])
      parse_table_as_cards(table_info[:table], location_key.empty? ? "Location#{index + 1}" : location_key)
    end

    { deck_data: { deck_name => cards }, deck_data_research: {} }
  end

  def process_standard_file(file_name, page_title, table_infos)
    deck_data = {}
    table_infos.each_with_index do |table_info, index|
      deck_name = build_deck_name(page_title, file_name, table_info[:heading], table_infos.length, index)
      location_key = nil
      cards = parse_table_as_cards(table_info[:table], location_key)
      deck_data[deck_name] = cards
    end

    { deck_data: deck_data, deck_data_research: {} }
  end

  def deck_name_for(file_name, page_title)
    page_title.empty? ? file_name.tr('_', ' ') : page_title
  end

  def other_world_location_name(file_name, page_title)
    source_name = page_title.empty? ? file_name.tr('_', ' ') : page_title
    normalize_space(source_name.sub(/\s+\(Other World\)\z/i, ''))
  end

  def extract_table_infos(content)
    infos = []
    current_h2_heading = nil
    current_h3_heading = nil
    current_ancient_one = nil

    content.css('h2, h3, p, table.wikitable').each do |node|
      case node.name
      when 'h2'
        current_h2_heading = normalize_space(extract_text(node.at_css('.mw-headline') || node))
        current_h3_heading = nil
        current_ancient_one = nil
      when 'h3'
        current_h3_heading = normalize_space(extract_text(node.at_css('.mw-headline') || node))
        current_ancient_one = nil
      when 'p'
        if normalize_space(node.text).match?(/\brelated to\b/i)
          link = node.css('a[title]').last
          current_ancient_one = normalize_space(link['title']) if link
        end
      when 'table'
        headers = extract_headers(node)
        next if headers.empty?

        infos << {
          heading: current_h3_heading || current_h2_heading,
          section_heading: current_h2_heading,
          table: node,
          headers: headers,
          ancient_one: current_ancient_one
        }
      end
    end

    infos
  end

  def extract_headers(table)
    table.css('tr').first&.css('th')&.map { |th| normalize_space(extract_text(th)) } || []
  end

  def build_deck_name(page_title, file_name, heading, table_count, index)
    page_title.empty? ? file_name.tr('_', ' ') : page_title
  end

  def merge_location_tables_to_cards(table_infos, raw_headings: false)
    merge_tables_to_cards(table_infos) do |table_info, index|
      location_key = raw_headings ? normalize_space(table_info[:heading]) : canonical_location_name(table_info[:heading])
      location_key.empty? ? "Location#{index + 1}" : location_key
    end
  end

  def build_location_encounter_decks(table_infos)
    by_section = table_infos.group_by do |table_info|
      canonical_location_encounter_section_name(table_info[:section_heading])
    end

    deck_data = {}

    section_names = LOCATION_ENCOUNTER_DECKS + (by_section.keys - LOCATION_ENCOUNTER_DECKS).sort
    section_names.each do |section_name|
      section_tables = by_section[section_name]
      next if section_tables.nil? || section_tables.empty?

      deck_data[section_name] = merge_location_tables_to_cards(section_tables, raw_headings: true)
    end

    deck_data
  end

  def merge_tables_to_cards(table_infos)
    by_id = {}

    table_infos.each_with_index do |table_info, index|
      location_key = yield(table_info, index)

      parse_table_rows(table_info[:table]).each do |row|
        card_id = row[:card_id]
        next unless card_id

        by_id[card_id] ||= {
          'cardId' => card_id,
          'expansionId' => row[:expansion_id]
        }

        by_id[card_id]['expansionId'] ||= row[:expansion_id]
        by_id[card_id][location_key] = build_location_payload(row)
      end
    end

    by_id.values.sort_by { |card| card['cardId'] }
  end

  def canonical_location_encounter_section_name(heading)
    normalize_space(heading).sub(/\s+Encounters?\z/i, '')
  end

  def parse_table_as_cards(table, location_key)
    parse_table_rows(table).map do |row|
      card = {
        'cardId' => row[:card_id],
        'expansionId' => row[:expansion_id]
      }

      payload = build_location_payload(row)
      if location_key
        card[location_key] = payload
      else
        card.merge!(payload)
      end

      card
    end.compact.sort_by { |card| card['cardId'] || 0 }
  end

  def parse_table_rows(table)
    rows = []
    table.css('tr').drop(1).each do |tr|
      tds = tr.css('td')
      next if tds.empty?

      parsed = parse_row_cells(tds)
      rows << parsed if parsed
    end
    rows
  end

  def parse_row_cells(tds)
    return nil if tds.length < 3

    card_id = normalize_space(extract_text(tds[0])).to_i
    return nil if card_id <= 0

    expansion_id = extract_expansion_id(tds[1])

    if tds.length >= 5
      {
        card_id: card_id,
        expansion_id: expansion_id,
        intro_text: clean_text(extract_text(tds[2], skill_icons: true)),
        pass_text: clean_text(extract_text(tds[3], skill_icons: true)),
        fail_text: clean_text(extract_text(tds[4], skill_icons: true))
      }
    else
      {
        card_id: card_id,
        expansion_id: expansion_id,
        encounter_text: clean_text(extract_text(tds[2], skill_icons: true))
      }
    end
  end

  def build_location_payload(row)
    if row[:intro_text]
      pass_key, fail_key = pass_fail_action_keys(row[:intro_text])
      pass_value = choice_value_from_text(row[:pass_text])
      fail_value = choice_value_from_text(row[:fail_text])
      intro_text = row[:intro_text]

      if pass_value.is_a?(String)
        trimmed = clean_text(pass_value.sub(/\s+If you fail[;,].+\z/im, ''))
        pass_value = trimmed unless trimmed.empty?
      end

      pass_value = resolve_fail_effect_placeholders(pass_value, fail_value)

      payload = {
        'intro' => intro_text,
        'choices' => {
          pass_key => pass_value,
          fail_key => fail_value
        }
      }

      apply_shared_choice_follow_up!(payload)

      finalize_pass_fail_payload(payload)
    else
      parse_single_text_encounter(row[:encounter_text])
    end
  end

  def inline_optional_choice_with_test(text)
    clean = clean_text(text)
    match = clean.match(/\A(.+?)\s+If you fail,\s*(.+)\z/i)
    return nil unless match

    optional = optional_choice_with_test(match[1])
    return nil unless optional

    choices = optional[:choices].transform_values do |value|
      value.empty? ? value : encounter_step(value, { 'Pass' => '', 'Fail' => choice_value_from_text(match[2]) })
    end
    encounter_step(optional[:intro], choices)
  end

  def optional_choice_with_test(text)
    optional = parse_generic_may_to_choice(clean_text(text))
    return nil unless optional && optional[:choices].length == 2

    values = optional[:choices].values
    return nil unless values.all?(String) && !values[0].empty? && values[1].empty?
    return nil unless values[0].match?(/\((?:#{SKILL}|Agility|Luck)[^)]*\)/i)

    {
      intro: clean_text(optional[:intro]),
      choices: optional[:choices]
    }
  end

  def inline_pass_or_gain_condition(text)
    clean = clean_text(text)
    match = clean.match(/\A(.*?)\s*If you pass or gain the Condition,\s*(.+?)(?:\s*If you fail,\s*(.+))?\z/i)
    return nil unless match

    fail_effect = clean_text(match[3].to_s)
    {
      intro: clean_text(match[1]),
      effect: clean_text(match[2]),
      fail_effect: fail_effect.empty? ? nil : fail_effect
    }
  end

  def apply_shared_choice_follow_up!(payload)
    return unless payload.is_a?(Hash)

    choices = payload['choices']
    return unless choices.is_a?(Hash)

    string_choices = choices.select { |_key, value| value.is_a?(String) }
    return if string_choices.length < 2

    follow_ups = {}
    string_choices.each do |key, value|
      follow_up = shared_choice_follow_up_from_value(value)
      next if follow_up.empty?

      follow_ups[key] = follow_up
    end

    return unless follow_ups.length == 1

    source_key, shared_follow_up = follow_ups.first

    string_choices.each do |key, value|
      next if key == source_key

      clean_value = clean_text(value)
      next if clean_value.include?(shared_follow_up)

      if clean_value.empty?
        choices[key] = shared_follow_up
      else
        separator = clean_value.match?(/[.!?]\z/) ? ' ' : '. '
        choices[key] = clean_text("#{clean_value}#{separator}#{shared_follow_up}")
      end
    end
  end

  def finalize_pass_fail_payload(payload)
    payload = normalize_nested_pass_otherwise(payload)
    apply_shared_choice_follow_up!(payload)
    payload
  end

  def shared_choice_follow_up_from_value(value)
    clean = clean_text(value)
    return '' if clean.empty?

    match = clean.match(/\A(.+?[.!?])\s*((?:If|When|Unless|Then if)\b.+)\z/i)
    return '' unless match

    prefix = clean_text(match[1])
    follow_up = clean_text(match[2])
    return '' if prefix.empty? || follow_up.empty?

    normalized_follow_up = follow_up.sub(/\AThen,?\s+/i, '')
    capitalize_result_text(clean_text(normalized_follow_up))
  end

  def normalize_nested_pass_otherwise(payload)
    return payload unless payload.is_a?(Hash)

    choices = payload['choices']
    return payload unless choices.is_a?(Hash)

    pass_branch = choices['Pass']
    top_fail = choices['Fail']
    return payload unless pass_branch.is_a?(Hash)

    nested_choices = pass_branch['choices']
    return payload unless nested_choices.is_a?(Hash)

    nested_pass = nested_choices['Pass']
    nested_fail = nested_choices['Fail']
    return payload unless nested_pass.is_a?(String) && nested_fail.is_a?(String)

    payload
  end

  def fail_text_for_value(value)
    return clean_text(value) if value.is_a?(String)
    clean_text(value['intro'])
  end

  def fail_branch_copy(fail_value, intro_text = nil)
    if fail_value.is_a?(Hash)
      normalized = normalize_encounter_value(fail_value)
      normalized = normalized.dup
      normalized['intro'] = intro_text if intro_text
      normalized
    end
  end

  def resolve_fail_effect_placeholders(value, fail_value)
    case value
    when Hash
      value.each_with_object({}) do |(key, subvalue), acc|
        acc[key] = key == 'intro' ? subvalue : resolve_fail_effect_placeholders(subvalue, fail_value)
      end
    when String
      return value unless value.match?(/\bresolve the fail effect\b/i)

      interpolated_intro = replace_fail_effect_placeholder(value, fail_text_for_value(fail_value))
      fail_value.is_a?(Hash) ? fail_branch_copy(fail_value, interpolated_intro) : interpolated_intro
    end
  end

  def replace_fail_effect_placeholder(text, card_fail_text)
    base = clean_text(text)
    fail_sentence = clean_text(card_fail_text)
    fail_clause = clause_fit_text(fail_sentence)

    replaced = base.gsub(/Otherwise,\s*resolve the fail effect\.?/i, "Otherwise, #{fail_clause}")
    replaced = replaced.gsub(/,\s*resolve the fail effect\.?/i, ", #{fail_clause}")
    replaced = replaced.gsub(/,\s*resolve the fail effect\.?/i, ". #{fail_sentence}")
    replaced = replaced.gsub(/;\s*resolve the fail effect\.?/i, "; #{fail_clause}")
    replaced = fail_sentence if replaced.match?(/\Aresolve the fail effect\.?\z/i)

    replaced.gsub(/\.\./, '.')
  end

  def clause_fit_text(text)
    clean = clean_text(text)
    return clean if clean.empty?

    clean.sub(/\A([A-Z])(?![A-Z])/) { Regexp.last_match(1).downcase }
  end

  def choice_value_from_text(text)
    direct_action_choice = direct_action_choice_object(text)
    return normalize_encounter_value(direct_action_choice) if direct_action_choice

    inline_optional = parse_optional_choice(text)
    if inline_optional && inline_optional[:choices].is_a?(Hash)
      inline_intro = clean_text(inline_optional[:intro].to_s)
      if !inline_intro.empty? && (inline_intro.match?(/\bYou may\b/i) || inline_intro.match?(/\bunless you spend\b/i))
        return normalize_encounter_value(encounter_step(capitalize_result_text(inline_intro), inline_optional[:choices]))
      end
    end

    gate_unless_obj = spawn_gate_unless_object(text)
    return normalize_encounter_value(gate_unless_obj) if gate_unless_obj

    skill_obj = skill_test_conditional_object(text)
    return normalize_encounter_value(skill_obj) if skill_obj

    test_result_obj = test_result_conditional_object(text)
    return normalize_encounter_value(test_result_obj) if test_result_obj

    return normalize_encounter_value(parse_effect_object(text)) if nested_conditionals?(text)

    ambush_obj = ambush_choice_object(text)
    return normalize_encounter_value(ambush_obj) if ambush_obj

    simplify_effect_text(text)
  end

  def direct_action_choice_object(text)
    clean = clean_text(text)
    match = clean.match(/\A(.+?[.;])\s*((?:gain|improve)\s+.+?)\s+or\s+((?:gain|improve)\s+.+?)\.?\z/i)
    return nil unless match

    intro = capitalize_result_text(clean)
    first_action = capitalize_result_text(clean_text(match[2]))
    second_action = capitalize_result_text(clean_text(match[3]))
    return nil if intro.empty? || first_action.empty? || second_action.empty?

    encounter_step(intro, {
      first_action => '',
      second_action => ''
    })
  end

  def spawn_gate_unless_object(text)
    clean = clean_text(text)
    match = clean.match(/\A(.*?\bSpawn\s+1\s+Gate\s+unless\s+you\s+(.+?)\.?)\s*If you spawn the Gate,\s*(.+)\z/i)
    return nil unless match

    intro = clean_text(match[1])
    action = capitalize_result_text(clean_text(match[2]))
    spawn_effect = capitalize_result_text(clean_text(match[3]))
    return nil if intro.empty? || action.empty? || spawn_effect.empty?

    encounter_step(intro, {
      'Spawn 1 Gate' => spawn_effect,
      action => ''
    })
  end

  def parse_single_text_encounter(text)
    pass_or_gain_condition = inline_pass_or_gain_condition(text)
    if pass_or_gain_condition
      choices = {
        'Pass or gain the Condition' => simplify_effect_text(pass_or_gain_condition[:effect])
      }
      fail_effect = pass_or_gain_condition[:fail_effect]
      choices['Fail'] = simplify_effect_text(fail_effect) if fail_effect
      return normalize_encounter_value(encounter_step(pass_or_gain_condition[:intro], choices))
    end

    ambush_with_trailing_optional = parse_ambush_with_trailing_optional_choice(text)
    return normalize_encounter_value(ambush_with_trailing_optional) if ambush_with_trailing_optional

    inline_test = inline_optional_choice_with_test(text)
    return normalize_encounter_value(inline_test) if inline_test

    optional_choice = parse_optional_choice(text)
    if optional_choice
      intro = optional_choice[:intro]
      intro = clean_text(text) if intro.nil? || intro.empty?
      return normalize_encounter_value(encounter_step(intro, optional_choice[:choices]))
    end

    parsed = parse_effect_object(text)
    if parsed.is_a?(Hash) && parsed['choices'].is_a?(Hash)
      merged_ambush = merge_fail_clause_into_ambush(parsed)
      return normalize_encounter_value(merged_ambush) if merged_ambush

      if parsed['choices'].key?('Pass') || parsed['choices'].key?('Fail')
        parsed = normalize_encounter_value(parsed)
        return finalize_pass_fail_payload(parsed)
      end
    end

    ambush_choice = ambush_choice_object(text)
    return normalize_encounter_value(ambush_choice) if ambush_choice

    { 'intro' => parsed['intro'] }
  end

  def merge_fail_clause_into_ambush(parsed)
    return nil unless parsed.is_a?(Hash)

    choices = parsed['choices']
    return nil unless choices.is_a?(Hash)
    return nil unless choices.keys == ['Fail']

    ambush_value = ambush_choice_object(parsed['intro'])
    return nil unless ambush_value.is_a?(Hash)

    combat_branch = ambush_value.dig('choices', 'Resolved the combat')
    return nil unless combat_branch.is_a?(Hash)

    combat_choices = combat_branch['choices']
    return nil unless combat_choices.is_a?(Hash)

    do_not_defeat_key = combat_choices.keys.find { |key| key.start_with?('Did not defeat') }
    return nil unless do_not_defeat_key
    return nil unless combat_choices[do_not_defeat_key].to_s.empty?

    merged = ambush_value.dup
    merged['choices'] = ambush_value['choices'].dup
    combat_copy = combat_branch.dup
    combat_copy['choices'] = combat_choices.dup
    combat_copy['choices'][do_not_defeat_key] = choices['Fail']
    merged['choices']['Resolved the combat'] = combat_copy
    merged
  end

  def parse_ambush_with_trailing_optional_choice(text)
    clean = clean_text(text)
    return nil if clean.empty?

    ambush_match = clean.match(/\bambushes\s+you\b[!.]?|\bspawn\b.+?\bencounter\s+it\b[!.]?/i)
    return nil unless ambush_match

    ambush_intro = capitalize_result_text(clean_text(clean[0...ambush_match.end(0)]))
    trailing_text = clean_text(clean[ambush_match.end(0)..] || '')
    return nil if trailing_text.empty?

    optional = parse_optional_choice(trailing_text)
    return nil unless optional && optional[:choices].is_a?(Hash)

    nested_intro = clean_text(optional[:intro].to_s)
    nested_intro = trailing_text if nested_intro.empty?

    encounter_step(ambush_intro, {
      'Resolved the Combat' => {
        'intro' => nested_intro,
        'choices' => optional[:choices]
      }
    })
  end

  def parse_optional_choice(text)
    clean = clean_text(text)

    # Keep explicit pass/fail encounters in pass/fail structure.
    return nil if clean.match?(/If you\s+pass(?:\s+[^,]*)?,|If you\s+fail(?:\s+[^,]*)?,/i)

    gated_optional = clean.match(/\A(.*?)If you have\s+(.+?\bCondition),\s*(.+?)\s*;\s*(You may\s+.+?to\s+.+?\.)\s*If you do not have\s+(.+?\bCondition),\s*(.+)\z/i)
    if gated_optional
      intro_prefix = clean_text(gated_optional[1])
      condition_text = clean_text(gated_optional[2])
      have_context = clean_text(gated_optional[3])
      may_sentence = capitalize_result_text(clean_text(gated_optional[4]))
      no_condition_text = clean_text(gated_optional[6])

      have_branch = parse_single_text_encounter(may_sentence)
      top_intro = clean_text([intro_prefix, "If you have #{condition_text}, #{have_context}."].reject(&:empty?).join(' '))

      return {
        intro: top_intro,
        choices: {
          capitalize_result_text("Have #{condition_text}") => have_branch,
          capitalize_result_text("Do not have #{condition_text}") => choice_value_from_text(no_condition_text)
        }
      }
    end

    gate_encounter_match = clean.match(/\A(.+?\b(?:encounter that Gate|encounter it)\.)\s*If you close that Gate,\s*(.+?)(?:\.\s*If you do not close that Gate,\s*(.+))?\z/i)
    if gate_encounter_match
      intro = clean_text(gate_encounter_match[1])
      closed_text = clean_text(gate_encounter_match[2])
      not_closed_text = clean_text(gate_encounter_match[3].to_s)

      return {
        intro: intro,
        choices: {
          'Resolved the Other World Encounter' => {
            intro: '',
            choices: {
              'Closed that Gate' => choice_value_from_text(closed_text),
              'Did not close that Gate' => choice_value_from_text(not_closed_text)
            }
          }
        }
      }
    end

    other_world_close_gate_match = clean.match(/\A(.+?\bDraw and resolve an Other World Encounter\.)\s*If the effect allows you to\s+["“]?close this Gate,["”]?\s*(.+)\z/i)
    if other_world_close_gate_match
      intro = clean_text(other_world_close_gate_match[1])
      allowed_effect = capitalize_result_text(clean_text(other_world_close_gate_match[2]))

      return {
        intro: intro,
        choices: {
          'Resolved the Other World Encounter' => {
            intro: '',
            choices: {
              'The effect allows you to "close this Gate,"' => choice_value_from_text(allowed_effect),
              'The effect does not' => ''
            }
          }
        }
      }
    end

    condition_unless_spend = clean.match(/\A(.*?\b(gain\s+(?:an?\s+)?[^.]+?\s+Condition)\s+unless you spend\s+(\d+\s+Focus)\.)\s*If you spend\s+(?:the\s+)?Focus,\s*(.+?)\s*If you do not spend\s+(?:the\s+)?Focus,\s*(.+)\z/i)
    if condition_unless_spend
      intro = clean_text(condition_unless_spend[1])
      condition_key = capitalize_result_text(clean_text(condition_unless_spend[2]))
      spend_key = capitalize_result_text("Spend #{clean_text(condition_unless_spend[3])}")
      spend_value = choice_value_from_text(condition_unless_spend[4])
      no_spend_value = choice_value_from_text(condition_unless_spend[5])

      return optional_choice_step(intro, condition_key, no_spend_value, spend_key, spend_value)
    end

    unless_spend_choice = clean.match(/\A(.+?)\s+unless you spend\s+(\d+\s+(?:Health|Focus|Sanity|Clue|Resource))\.?(?:\s*If you spend\s+(?:the\s+)?(?:Health|Focus|Sanity|Clue|Resource),\s*(.+))?\z/i)
    if unless_spend_choice
      intro_prefix = clean_text(unless_spend_choice[1])
      action_text = intro_prefix.split(/[.!?;]\s+/).last
      amount_text = clean_text(unless_spend_choice[2])
      spend_text = clean_text(unless_spend_choice[3].to_s)
      spend_value = spend_text.empty? ? '' : choice_value_from_text(spend_text)

      return optional_choice_step(
        clean_text("#{intro_prefix} unless you spend #{amount_text}."),
        capitalize_result_text(action_text),
        '',
        capitalize_result_text("Spend #{amount_text}"),
        spend_value
      )
    end

    unless_spend_follow_up = clean.match(/\A(.*?\bunless you spend\s+(\d+\s+Clues?\.)\s*)If you spend\s+(?:the\s+)?Clues?,\s*(.+)\z/i)
    if unless_spend_follow_up
      intro = clean_text(unless_spend_follow_up[1])
      spend_key = capitalize_result_text("Spend #{clean_text(unless_spend_follow_up[2]).sub(/[.]\z/, '')}")
      spend_value = choice_value_from_text(unless_spend_follow_up[3])
      action_match = intro.match(/\b([A-Z][^.?!]*?)\s+unless you spend\b/i)
      action_key = capitalize_result_text(clean_text(action_match[1].sub(/\AYou\s+/i, ''))) if action_match

      return optional_choice_step(intro, action_key || 'Do not', '', spend_key, spend_value)
    end

    shared_may_choice = clean.match(/\A(.*?\bYou may\s+([^\.]+?\bto\s+[^\.]+)\.)\s*Whether you\s+.+?\s+or not,\s*(.+)\z/i)
    if shared_may_choice
      intro = clean_text(shared_may_choice[1])
      choice_text = capitalize_result_text(clean_text(shared_may_choice[2]))
      action_text = clause_fit_text(clean_text(shared_may_choice[2].sub(/\A.+?\bto\s+/i, '')))
      shared_value = choice_value_from_text(shared_may_choice[3])

      return optional_choice_step(intro, choice_text, shared_value, capitalize_result_text("Do not #{action_text}"), shared_value)
    end

    generic_may_to_choice = parse_generic_may_to_choice(clean)
    return generic_may_to_choice if generic_may_to_choice

    gain_condition_do_dont = clean.match(/\A(.*?\bYou may gain\s+(an?\s+.+?\bCondition)[.;])\s*If you do,\s*(.+?)\s*If you\s+(?:do not|don't),\s*(.+)\z/i)
    if gain_condition_do_dont
      intro = clean_text(gain_condition_do_dont[1])
      condition_text = clean_text(gain_condition_do_dont[2])
      do_value = choice_value_from_text(gain_condition_do_dont[3])
      dont_value = choice_value_from_text(gain_condition_do_dont[4])
      gain_key = capitalize_result_text("Gain #{condition_text}")

      return optional_choice_step(intro, gain_key, do_value, "Don't", dont_value)
    end

    gain_clue_follow_up = clean.match(/\A(.*?\bYou may gain this Clue[.;])\s*If you (?:gain|gained) the Clue,\s*(.+)\z/i)
    if gain_clue_follow_up
      intro = clean_text(gain_clue_follow_up[1])
      follow_up_text = clean_text(gain_clue_follow_up[2])
      follow_up_value = choice_value_from_text(follow_up_text)

      return optional_choice_step(intro, 'Gain this Clue', follow_up_value, "Don't", '')
    end

    if clean.match?(/If you gain the Condition,/i)
      before, after = clean.split(/If you gain the Condition,\s*/i, 2)
      before = clean_text(before)
      after = clean_text(after)

      if before.match?(/unless you gain\s+.+\bCondition\.\z/i) && !after.empty?
        return {
          intro: before,
          choices: {
            'Gain the Condition' => simplify_effect_text(after),
            "Don't" => ''
          }
        }
      end
    end

    match = clean.match(/You may\s+(.+?)(?:\.|;|$)/i)
    return nil unless match

    clause = clean_text(match[1])
    split_match = nil
    clause.to_enum(:scan, /\s+to\s+/i).each do
      candidate = Regexp.last_match
      right = clean_text(clause[candidate.end(0)..] || '')
      split_match ||= candidate
      if right.match?(/\A[a-z]/)
        split_match = candidate
        break
      end
    end

    unless split_match
      direct_follow_up = clean.match(/\A(.*?\bYou may\s+.+?[.;])\s*If you\s+(?:(do not|don't)\s+)?(.+?)(?:,|;)\s*(.+)\z/i)
      return nil unless direct_follow_up

      intro = clean_text(direct_follow_up[1])
      follow_up_text = clean_text(direct_follow_up[4])
      return nil if follow_up_text.empty?

      may_clause = clean_text(direct_follow_up[1].to_s.sub(/\A.*?\bYou may\s+/i, '').sub(/[.;]\z/, ''))
      return nil if may_clause.empty?

      positive_key = capitalize_result_text(may_clause)
      negative_key = 'Do not'
      negative_flag = !direct_follow_up[2].to_s.empty?

      return {
        intro: intro,
        choices: {
          positive_key => (negative_flag ? '' : choice_value_from_text(follow_up_text)),
          negative_key => (negative_flag ? choice_value_from_text(follow_up_text) : '')
        }
      }
    end

    cost = clean_text(clause[0...split_match.begin(0)])
    result = clean_text(clause[split_match.end(0)..])
    return nil if result.empty?

    custom_key = capitalize_result_text(result)
    remaining = clean_text(text[match.end(0)..] || '')

    custom_value = if remaining.match?(/If you\s+/i)
                     cost.empty? ? result : "#{cost} to #{result}"
                   else
                     ''
                   end

    {
      intro: nil,
      choices: {
        custom_key => custom_value,
        "Don't" => ''
      }
    }
  end

  def parse_generic_may_to_choice(clean)
    candidates = []

    clean.to_enum(:scan, /You may\s+(.+?)(?:\.|$)/i).each do
      match = Regexp.last_match
      clause = clean_text(match[1])
      next if clause.empty?

      split_match = nil
      clause.to_enum(:scan, /\s+to\s+/i).each do
        candidate = Regexp.last_match
        right = clean_text(clause[candidate.end(0)..] || '')
        split_match ||= candidate
        if right.match?(/\A[a-z]/)
          split_match = candidate
          break
        end
      end
      next unless split_match

      cost = clean_text(clause[0...split_match.begin(0)])
      result = clean_text(clause[split_match.end(0)..])
      next if cost.empty? || result.empty?

      inline_follow_up = ''
      if result.include?(';')
        base_result, base_follow_up = result.split(';', 2)
        base_result = clean_text(base_result)
        base_follow_up = clean_text(base_follow_up)
        if !base_result.empty? && !base_follow_up.empty?
          result = base_result
          inline_follow_up = capitalize_result_text(base_follow_up)
        end
      end

      score = optional_effect_score(cost)
      candidates << {
        match: match,
        cost: cost,
        result: result,
        inline_follow_up: inline_follow_up,
        score: score
      }
    end

    return nil if candidates.empty?

    chosen = candidates.max_by { |item| [item[:score], item[:match].begin(0)] }
    return nil if chosen[:score] <= 0

    cost = chosen[:cost]
    result = chosen[:result]
    inline_follow_up = chosen[:inline_follow_up]
    remaining = clean_text(clean[chosen[:match].end(0)..] || '')
    return nil if !remaining.empty? && !remaining.match?(/\AIf you\s+/i)

    effects = split_optional_effects(cost)
    effects = [cost] if effects.empty?

    choices = {}
    effects.each do |effect|
      choices[capitalize_result_text("#{effect} to #{result}")] = inline_follow_up
    end

    do_not_target = optional_do_not_target(result)
    do_not_key = movement_negative_choice_key(cost, result) || capitalize_result_text("Do not #{do_not_target}")
    choices[do_not_key] = ''

    shared_inline_follow_up = optional_shared_inline_follow_up(inline_follow_up)
    choices[do_not_key] = shared_inline_follow_up if !shared_inline_follow_up.empty?

    intro_text = clean
    follow_ups = parse_optional_follow_ups(remaining)
    if follow_ups
      intro_text = clean_text(clean[0...chosen[:match].end(0)])

      if follow_ups[:yes]
        yes_trigger = clean_text(follow_ups[:yes][:trigger])
        yes_value = choice_value_from_text(follow_ups[:yes][:text])
        shared_yes_value = optional_shared_inline_follow_up(follow_ups[:yes][:text])

        if follow_ups[:no].nil? && optional_follow_up_applies_to_all_choices?(yes_trigger, effects)
          effects.each do |effect|
            choices[capitalize_result_text("#{effect} to #{result}")] = yes_value
          end
          choices[do_not_key] = yes_value
        elsif effects.length == 1
          choices[capitalize_result_text("#{effects.first} to #{result}")] = yes_value
        else
          effects.each do |effect|
            next unless optional_effect_matches_trigger?(effect, yes_trigger)

            choices[capitalize_result_text("#{effect} to #{result}")] = yes_value
          end
        end

        if follow_ups[:no].nil? && clean_text(choices[do_not_key].to_s).empty? && !shared_yes_value.empty?
          choices[do_not_key] = shared_yes_value
        end
      end

      if follow_ups[:no]
        no_value = choice_value_from_text(follow_ups[:no][:text])
        choices[do_not_key] = no_value
      end
    end

    {
      intro: intro_text,
      choices: choices
    }
  end

  def movement_negative_choice_key(cost_text, result_text)
    cost = clean_text(cost_text)
    result = clean_text(result_text)
    return nil if cost.empty? || result.empty?

    verb_match = cost.match(/\A([a-z]+)\b/i)
    return nil unless verb_match

    verb = clean_text(verb_match[1])
    return nil unless verb.match?(/\A(?:move|travel|go|journey|walk|sail|fly|advance)\b/i)
    return nil if result.match?(/\A(?:gain|become|spend|discard|lose|pay|draw|take|recover|choose|resolve|close|open|defeat|remove|add)\b/i)

    action_verbs = /(?:gain|search|seek|look|check|inspect|investigate|observe|explore|find|recover|return|rescue|retrieve|travel|go|move|attempt|wait|hide|escape|attack|speak|talk|reach|discover|counsel|help|rest|study|follow|recruit|advance|discard|take|close|open|resolve|defeat|remove|add|pay|spend|lose|become)/i

    action_match = result.to_enum(:scan, /\bto\s+(#{action_verbs})\b/i).to_a.last
    if action_match
      clause_index = result.rindex(/\bto\s+(?:#{action_verbs})\b/i)
      return capitalize_result_text("Do not #{result[clause_index + 3..].strip}") if clause_index
    end

    if result.match?(/\A(?:search|seek|look|check|inspect|investigate|observe|explore|find|recover|return|rescue|retrieve|travel|go|move|attempt|wait|hide|escape|attack|speak|talk|reach|discover|counsel|help|rest|study|follow|reach|recruit|attempt)\b/i)
      return capitalize_result_text("Do not #{result}")
    end

    capitalize_result_text("Do not #{verb}")
  end

  def optional_do_not_target(result_text)
    result = clean_text(result_text)
    return result if result.empty?

    destination_style = result.match(/\A(?:the|a|an|this|that|these|those|any)\b.+?\bto\s+(.+)\z/i)
    return clean_text(destination_style[1]) if destination_style

    result
  end

  def optional_shared_inline_follow_up(follow_up_text)
    follow_up = clean_text(follow_up_text)
    return '' if follow_up.empty?

    shared = follow_up.match(/\.\s*(If\s+(?!you\b).+)\z/i)
    return '' unless shared

    capitalize_result_text(clean_text(shared[1]))
  end

  def optional_effect_score(cost_text)
    cost = clean_text(cost_text)
    score = 0

    score += 3 if cost.match?(/\b(spend|gain|become|discard|spawn|advance|lose|move|flip|pay|drink)\b/i)
    score += 2 if cost.match?(/\b(Health|Sanity|Clue|Focus|Resource|Condition|Gate|Monster|Asset)\b/i)
    score += 1 if cost.match?(/\b\d+\b/)
    score -= 2 if cost.match?(/\b(know|able|want|need|hope|try)\b/i)

    score
  end

  def split_optional_effects(cost_text)
    parts = clean_text(cost_text).split(/\s+or\s+/i).map { |part| clean_text(part) }.reject(&:empty?)
    return parts if parts.length < 2

    first = parts.first
    verb_match = first.match(/\A([a-z]+)\b/i)
    return parts unless verb_match

    verb = clean_text(verb_match[1])
    action_verbs = %w[spend gain become discard spawn advance lose move flip pay recover choose defeat]
    normalized = parts.map.with_index do |part, idx|
      next part if idx.zero?
      next part if part.downcase.start_with?(verb.downcase + ' ')
      part_verb = part.match(/\A([a-z]+)\b/i)
      next part if part_verb && action_verbs.include?(clean_text(part_verb[1]).downcase)

      "#{verb} #{part}"
    end

    quantity_match = normalized.first.match(/\A#{Regexp.escape(verb)}\s+(\d+)\b/i)
    if quantity_match
      quantity = quantity_match[1]
      normalized.map!.with_index do |part, idx|
        next part if idx.zero?
        next part unless part.match(/\A#{Regexp.escape(verb)}\s+/i)
        next part if part.match(/\A#{Regexp.escape(verb)}\s+\d+\b/i)

        rest = clean_text(part.sub(/\A#{Regexp.escape(verb)}\s+/i, ''))
        "#{verb} #{quantity} #{rest}"
      end
    end

    if normalized.any? { |part| part.match?(/\bpossession\b/i) }
      normalized.map! do |part|
        if part.match?(/\bdiscard\s+\d+\s+(item|trinket|artifact|relic)\b/i) && !part.match?(/\bpossession\b/i)
          "#{part} possession"
        else
          part
        end
      end
    end

    normalized
  end

  def optional_effect_matches_trigger?(effect_text, trigger_text)
    effect = clean_text(effect_text).downcase
    trigger = clean_text(trigger_text).downcase
    return false if effect.empty? || trigger.empty?

    if trigger.include?('asset') || trigger.include?('possession')
      return effect.match?(/\b(item|trinket|asset|possession)\b/i)
    end

    return effect.include?('condition') if trigger.include?('condition')
    return effect.include?('health') if trigger.include?('health')
    return effect.include?('sanity') if trigger.include?('sanity')
    return effect.include?('focus') if trigger.include?('focus')
    return effect.include?('clue') if trigger.include?('clue')

    trigger_tokens = trigger.scan(/[a-z]+/) - %w[if you do not don't a an the to and or gain spend lose discard]
    trigger_tokens.any? { |token| effect.include?(token) }
  end

  def optional_follow_up_applies_to_all_choices?(trigger_text, effects)
    trigger = clean_text(trigger_text).downcase
    return false if trigger.empty?

    return false if trigger.match?(/\b(spend|gain|become|discard|spawn|advance|lose|move|flip|pay|do not|don't)\b/i)
    return false if effects.any? { |effect| optional_effect_matches_trigger?(effect, trigger) }

    trigger.match?(/\A(?:have|has|are|were)\b/i)
  end

  def parse_optional_follow_ups(remaining)
    text = clean_text(remaining)
    return nil if text.empty?

    dual = text.match(/\AIf you\s+([^,;]+)[,;]\s*(.+?)\s*If you\s+(?:do not|don't)\s+([^,;]+)[,;]\s*(.+)\z/i)
    if dual
      return {
        yes: { trigger: clean_text(dual[1]), text: clean_text(dual[2]) },
        no: { trigger: clean_text(dual[3]), text: clean_text(dual[4]) }
      }
    end

    single = text.match(/\AIf you\s+([^,;]+)[,;]\s*(.+)\z/i)
    return nil unless single

    trigger = clean_text(single[1])
    branch = trigger.match?(/\A(?:do not|don't)\b/i) ? :no : :yes
    {
      yes: (branch == :yes ? { trigger: trigger, text: clean_text(single[2]) } : nil),
      no: (branch == :no ? { trigger: trigger, text: clean_text(single[2]) } : nil)
    }
  end

  def pass_fail_action_keys(intro_text)
    clean = clean_text(intro_text)

    condition_match = clean.match(/You may gain\s+(an?\s+.+?\bCondition)\s+to\s+resolve\s+the\s+pass\s+effect[.;]?\s*If you do not gain the Condition,\s*resolve\s+the\s+fail\s+effect[.;]?/i)
    if condition_match
      gain_key = capitalize_result_text("Gain #{clean_text(condition_match[1])}")
      return [gain_key, "Don't"]
    end

    spend_focus_pass_fail = clean.match(/\A.*?\bYou may\s+(.+?\bto\s+.+?)[.;]\s*If you spend the Focus,\s*resolve the pass effect\.\s*If you do not spend the Focus,\s*resolve the fail effect\.?\z/i)
    if spend_focus_pass_fail
      return [
        capitalize_result_text(clean_text(spend_focus_pass_fail[1])),
        'Do not spend the Focus'
      ]
    end
    
    spend_clue_pass_fail = clean.match(/\A.*?\bYou may\s+(.+?\bto\s+resolve the pass effect)[.;]\s*If you do not spend the Clue,\s*resolve the fail effect\.?\z/i)
    if spend_clue_pass_fail
      return [
        capitalize_result_text(clean_text(spend_clue_pass_fail[1])),
        'Resolve the fail effect'
      ]
    end

    action_first_match = clean.match(/(?:\A|\.\s*)([^.?!]+?\s+to resolve the pass effect)\s*;\s*or\s+(.+?\s+to resolve the fail effect)\.?\z/i)
    if action_first_match
      return [
        capitalize_result_text(clean_text(action_first_match[1])),
        capitalize_result_text(clean_text(action_first_match[2]))
      ]
    end

    match = clean.match(/Resolve the pass effect to\s+(.+?)(?:;\s*|\s+)or resolve the fail effect to\s+(.+?)(?:[.]|$)/i)
    return ['Pass', 'Fail'] unless match
    pass_action = capitalize_result_text("Resolve the pass effect to #{clean_text(match[1]).sub(/[.;]\z/, '')}")
    fail_action = capitalize_result_text("Resolve the fail effect to #{clean_text(match[2]).sub(/[.;]\z/, '')}")
    return ['Pass', 'Fail'] if pass_action.empty? || fail_action.empty?

    [pass_action, fail_action]
  end

  def nested_conditionals?(text)
    text && text.scan(CONDITIONAL_MARKER).length > 1
  end

  def parse_effect_object(text, depth = 0)
    clean = clean_text(text)
    return encounter_step('', {}) if clean.empty?
    return encounter_step(clean, {}) if depth > 4

    skill_obj = skill_test_conditional_object(clean)
    return skill_obj if skill_obj

    markers = conditional_markers(clean)
    return encounter_step(clean, {}) if markers.empty?

    intro = clean_text(clean[0...markers.first[:index]])
    choices = {}

    conditional_chunks(clean, markers).each do |marker, chunk|
      key = conditional_key(marker[:kind])
      next if chunk.empty?

      choices[key] = ambush_choice_object(chunk) || skill_test_conditional_object(chunk) || simplify_effect_text(chunk)
    end

    encounter_step(intro, choices)
  end

  def skill_test_conditional_object(text)
    clean = clean_text(text)
    return nil unless clean.match?(/\(#{SKILL}([+-]\d+)?\)/)
    return nil unless clean.match?(/If you\s+pass(?:\s+[^,]*)?,|If you\s+fail(?:\s+[^,]*)?,/i)

    markers = pass_fail_markers(clean)
    return nil if markers.empty?

    intro = clean_text(clean[0...markers.first[:index]])
    pass_effect = ''
    fail_effect = ''

    conditional_chunks(clean, markers).each do |marker, chunk|
      value = ambush_choice_object(chunk) || test_result_conditional_object(chunk) || choice_value_from_text(chunk)

      if marker[:kind] == 'pass'
        pass_effect = value
      elsif marker[:kind] == 'fail'
        fail_effect = value
      end
    end

    if pass_effect.to_s.empty? && !fail_effect.to_s.empty?
      test_result_match = intro.match(/\A(.*?)(If your test result (?:is|if) \d+ or (?:greater|more),\s*.+)\z/i)
      if test_result_match
        intro = clean_text(test_result_match[1])
        pass_effect = simplify_effect_text(clean_text(test_result_match[2]))
      end
    end

    # Split "If you fail;" (semicolon variant) out of pass text when the fail marker used a semicolon.
    if fail_effect.to_s.empty? && pass_effect.is_a?(String)
      fail_split = clean_text(pass_effect).match(/\A(.+?[.!?])\s*If you fail;\s*(.+)\z/i)
      if fail_split
        pass_effect = clean_text(fail_split[1])
        fail_effect = capitalize_result_text(clean_text(fail_split[2]))
      end
    end

    shared_effect_match = [pass_effect, fail_effect].find do |effect|
      effect.is_a?(String) && effect.match?(/\A.+?[.!?]\s*Whether you pass or not,\s*.+\z/i)
    end
    if shared_effect_match
      shared_match = clean_text(shared_effect_match).match(/\A(.+?[.!?])\s*Whether you pass or not,\s*(.+)\z/i)
      if shared_match
        source_is_pass = shared_effect_match.equal?(pass_effect)
        source_prefix = clean_text(shared_match[1])
        shared_effect = capitalize_result_text(clean_text(shared_match[2]))
        if source_is_pass
          pass_effect = clean_text("#{source_prefix} #{shared_effect}")
          fail_effect = fail_effect.to_s.empty? ? shared_effect : clean_text("#{fail_effect} #{shared_effect}")
        else
          fail_effect = clean_text("#{source_prefix} #{shared_effect}")
          pass_effect = pass_effect.to_s.empty? ? shared_effect : clean_text("#{pass_effect} #{shared_effect}")
        end
      end
    end

    fail_marker = markers.find { |marker| marker[:kind] == 'fail' }
    if fail_marker && fail_marker[:match][0].match?(/\bor do(?: not|n't)\b/i)
      pass_effect = apply_fail_effect_to_declined_choice(pass_effect, fail_effect)
    end

    encounter_step(intro, { 'Pass' => pass_effect, 'Fail' => fail_effect })
  end

  # "If you fail or do not <action>, <effect>" applies the fail effect to the pass branch's declined option too.
  def apply_fail_effect_to_declined_choice(pass_effect, fail_effect)
    return pass_effect unless pass_effect.is_a?(Hash) && pass_effect['choices'].is_a?(Hash)
    return pass_effect if fail_effect.to_s.empty?

    declined_key = pass_effect['choices'].keys.find { |key| key.match?(/\ADo not\b/i) }
    return pass_effect unless declined_key && pass_effect['choices'][declined_key].to_s.empty?

    updated = pass_effect.dup
    updated['choices'] = pass_effect['choices'].merge(declined_key => fail_effect)
    updated
  end

  def test_result_conditional_object(text)
    clean = clean_text(text)
    return nil unless clean.match?(/If your test result (?:is|if) \d+ or (?:greater|more),/i)

    otherwise_match = clean.match(/\A(.*?)(If your test result (?:is|if) \d+ or (?:greater|more),\s*(.+?))\s*Otherwise,\s*(.+)\z/i)
    if otherwise_match
      intro = clean_text(otherwise_match[1])
      pass_text = clean_text(otherwise_match[2])
      fail_text = clean_text(otherwise_match[4])
      return nil if pass_text.empty? || fail_text.empty?

      pass_with_otherwise = clean_text("#{pass_text} Otherwise, #{fail_text}")

      return encounter_step(intro, {
        'Pass' => simplify_effect_text(pass_with_otherwise),
        'Fail' => simplify_effect_text(fail_text)
      })
    end
  end

  def encounter_step(intro, choices)
    {
      'intro' => intro,
      'choices' => choices
    }
  end

  def optional_choice_step(intro, positive_key, positive_value, negative_key, negative_value)
    {
      intro: intro,
      choices: {
        positive_key => positive_value,
        negative_key => negative_value
      }
    }
  end

  def ambush_choice_object(text)
    clean = clean_text(text)
    return nil if clean.empty?

    match = clean.match(/\bambushes\s+you\b[!.]?|\bspawn\b.+?\bencounter\s+it\b[!.]?/i)
    return nil unless match

    intro = capitalize_result_text(clean_text(clean[0...match.end(0)]))
    after_text = clean_text(clean[match.end(0)..] || '')

    then_follow_up = after_text.match(/\AThen,?\s*(.+)\z/i)
    if then_follow_up
      after = capitalize_result_text(clean_text(then_follow_up[1]))
      return encounter_step(intro, { 'Resolved the combat' => after })
    end

    follow_up_index = after_text =~ COMBAT_RESULT_MARKER
    if follow_up_index
      non_combat_follow_up = clean_text(after_text[0...follow_up_index] || '')
      intro = clean_text([intro, non_combat_follow_up].reject(&:empty?).join(' '))
      after = combat_result_choice_object(clean_text(after_text[follow_up_index..] || '')) ||
              dual_skill_combat_choices(after_text[follow_up_index..]) ||
              combat_condition_choices(after_text[follow_up_index..]) ||
              past_tense_combat_conditions(after_text[follow_up_index..])
    else
      intro = clean_text([intro, after_text].reject(&:empty?).join(' '))
      after = ''
    end

    encounter_step(intro, { 'Resolved the combat' => after })
  end

  def past_tense_combat_conditions(text)
    clean = capitalize_result_text(clean_text(text))
    clean
      .gsub(/\bIf you do not defeat\b/i, 'If you did not defeat')
      .gsub(/\bIf you defeat\b/i, 'If you defeated')
      .gsub(/\bIf you pass\b/i, 'If you passed')
      .gsub(/\bIf you fail\b/i, 'If you failed')
      .gsub(/\bIf you lose\b/i, 'If you lost')
  end

  def dual_skill_combat_choices(text)
    clean = clean_text(text)
    match = clean.match(/\AIf you pass the (#{SKILL}) or (#{SKILL}) test,\s*(.+?)\s*If you pass both tests,\s*(.+)\z/i)
    return nil unless match

    first_skill = match[1]
    second_skill = match[2]
    shared_result = combat_result_branch_value(match[3])
    bonus_result = combat_result_branch_value(match[4])

    first_pass = "Passed the #{first_skill} test"
    first_fail = "Failed the #{first_skill} test"
    second_pass = "Passed the #{second_skill} test"
    second_fail = "Failed the #{second_skill} test"

    encounter_step('', {
      first_pass => encounter_step(shared_result, {
        second_pass => bonus_result,
        second_fail => ''
      }),
      first_fail => encounter_step('', {
        second_pass => shared_result,
        second_fail => ''
      })
    })
  end

  def combat_condition_choices(text)
    clean = clean_text(text)
    conditions = []
    pattern = /If you\s+(do not defeat|defeat|pass|fail|lose)\s+(.+?),\s*/i

    clean.to_enum(:scan, pattern).each do
      match = Regexp.last_match
      conditions << {
        start: match.begin(0),
        finish: match.end(0),
        action: match[1].downcase,
        subject: clean_text(match[2])
      }
    end

    return nil if conditions.empty? || conditions.first[:start] != 0

    conditions.each_with_index do |condition, index|
      effect_end = conditions[index + 1]&.dig(:start) || clean.length
      condition[:effect] = clean_text(clean[condition[:finish]...effect_end])
    end

    build_combat_condition_choice(conditions)
  end

  def build_combat_condition_choice(conditions)
    condition = conditions.first
    return nil unless condition

    positive_key, negative_key = combat_condition_keys(condition[:action], condition[:subject])
    return nil unless positive_key && negative_key

    if ['fail', 'do not defeat'].include?(condition[:action])
      positive_value = ''
      negative_value = combat_result_branch_value(condition[:effect])
    else
      positive_value = combat_result_branch_value(condition[:effect])
      negative_value = ''
    end

    paired_condition = conditions[1]
    if paired_condition && same_combat_condition_subject?(condition, paired_condition)
      paired_key = combat_condition_result_key(paired_condition[:action], paired_condition[:subject])
      return nil unless paired_key

      branch_values = {
        combat_condition_result_key(condition[:action], condition[:subject]) => combat_result_branch_value(condition[:effect]),
        paired_key => combat_result_branch_value(paired_condition[:effect])
      }
      positive_value = branch_values[positive_key]
      negative_value = branch_values[negative_key]
      negative_key = paired_key
      negative_value = branch_values[negative_key]
      remaining_conditions = conditions.drop(2)
    else
      remaining_conditions = conditions.drop(1)
    end

    if remaining_conditions.any?
      nested = build_combat_condition_choice(remaining_conditions)
      return nil unless nested

      positive_value = encounter_step(positive_value, nested['choices'])
      negative_value = encounter_step(negative_value, nested['choices'].dup)
    end

    encounter_step('', {
      positive_key => positive_value,
      negative_key => negative_value
    })
  end

  def same_combat_condition_subject?(first, second)
    first[:subject].casecmp(second[:subject]).zero?
  end

  def combat_condition_keys(action, subject)
    case action
    when 'pass'
      ["Passed #{subject}", "Failed #{subject}"]
    when 'fail'
      ["Passed #{subject}", "Failed #{subject}"]
    when 'lose'
      ["Lost #{subject}", "Did not lose #{subject}"]
    when 'defeat'
      ["Defeated #{subject}", "Did not defeat #{subject}"]
    when 'do not defeat'
      ["Defeated #{subject}", "Did not defeat #{subject}"]
    end
  end

  def combat_condition_result_key(action, subject)
    case action
    when 'pass' then "Passed #{subject}"
    when 'fail' then "Failed #{subject}"
    end
  end

  def combat_result_choice_object(text)
    clean = clean_text(text)
    return nil if clean.empty?

    defeat_and_not_defeat = clean.match(/\AIf you defeat((?: the Monster| it)?)\s*[,;]\s*(.+?)\s*If you do not defeat((?: the Monster| it)?)\s*[,;]\s*(.+)\z/i)
    if defeat_and_not_defeat
      defeat_key = combat_result_choice_key('Defeat', defeat_and_not_defeat[1])
      not_defeat_key = combat_result_choice_key('Do not defeat', defeat_and_not_defeat[3])
      defeat_value = combat_result_branch_value(defeat_and_not_defeat[2])
      not_defeat_value = combat_result_branch_value(defeat_and_not_defeat[4])

      return encounter_step('', {
        defeat_key => defeat_value,
        not_defeat_key => not_defeat_value
      })
    end

    defeat_only = clean.match(/\AIf you defeat((?: the Monster| it)?)\s*[,;]\s*(.+)\z/i)
    if defeat_only
      defeat_key = combat_result_choice_key('Defeat', defeat_only[1])
      not_defeat_key = combat_result_choice_key('Do not defeat', defeat_only[1])

      return encounter_step('', {
        defeat_key => combat_result_branch_value(defeat_only[2]),
        not_defeat_key => ''
      })
    end

    not_defeat_only = clean.match(/\AIf you do not defeat((?: the Monster| it)?)\s*[,;]\s*(.+)\z/i)
    if not_defeat_only
      defeat_key = combat_result_choice_key('Defeat', not_defeat_only[1])
      not_defeat_key = combat_result_choice_key('Do not defeat', not_defeat_only[1])

      return encounter_step('', {
        defeat_key => '',
        not_defeat_key => combat_result_branch_value(not_defeat_only[2])
      })
    end

    whether_defeat = clean.match(/\AWhether you defeat((?: the Monster| it)?)\s+or not\s*[,;]\s*(.+)\z/i)
    if whether_defeat
      defeat_key = combat_result_choice_key('Defeat', whether_defeat[1])
      not_defeat_key = combat_result_choice_key('Do not defeat', whether_defeat[1])
      shared_value = combat_result_branch_value(whether_defeat[2])

      return encounter_step('', {
        defeat_key => shared_value,
        not_defeat_key => shared_value
      })
    end

    nil
  end

  def combat_result_branch_value(text)
    clean = capitalize_result_text(clean_text(text))
    ambush_choice_object(clean) || skill_test_conditional_object(clean) || test_result_conditional_object(clean) || simplify_effect_text(clean)
  end

  def combat_result_choice_key(prefix, object_suffix)
    suffix = clean_text(object_suffix)
    past_tense_prefix = case prefix
                        when 'Defeat' then 'Defeated'
                        when 'Do not defeat' then 'Did not defeat'
                        end
    return past_tense_prefix if suffix.empty?

    "#{past_tense_prefix} #{suffix}"
  end

  def normalize_encounter_value(value)
    if value.is_a?(String)
      clean = clean_text(value)
      return value if clean.match?(/\AIf you (?:do not )?defeat\b|\AIf you are (?:not )?defeated\b|\AWhether you defeat\b/i)

      ambush_value = ambush_choice_object(value)
      return normalize_encounter_value(ambush_value) if ambush_value

      return value
    end

    return value unless value.is_a?(Hash)

    if value.key?('intro') && value['choices'].is_a?(Hash)
      normalized_choices = {}
      value['choices'].each do |key, subvalue|
        normalized_key = normalize_choice_key(key)
        normalized_choices[normalized_key] = normalize_encounter_value(subvalue)
      end

      normalized_value = encounter_step(value['intro'], normalized_choices)

      apply_shared_choice_follow_up!(normalized_value)
      normalize_nested_ambush_fail_shape(normalized_value)

      return normalized_value
    end

    value.each_with_object({}) do |(k, v), acc|
      acc[k] = normalize_encounter_value(v)
    end
  end

  def normalize_choice_key(key)
    str = key.to_s
    return 'Pass' if str.casecmp('pass').zero?
    return 'Fail' if str.casecmp('fail').zero?

    str
  end

  def normalize_nested_ambush_fail_shape(value)
    return value unless value.is_a?(Hash)

    choices = value['choices']
    return value unless choices.is_a?(Hash)

    pass_branch = choices['Pass']
    fail_branch = choices['Fail']
    return value unless pass_branch.is_a?(Hash) && fail_branch.is_a?(Hash)

    nested_choices = pass_branch['choices']
    return value unless nested_choices.is_a?(Hash)

    nested_fail = nested_choices['Fail']
    return value unless nested_fail.is_a?(String)
  end

  def normalize_ambush_shapes(value)
    case value
    when Array
      value.map { |item| normalize_ambush_shapes(item) }
    when Hash
      normalize_nested_ambush_fail_shape(value)
      value.each do |key, subvalue|
        value[key] = normalize_ambush_shapes(subvalue)
      end
      value
    else
      value
    end
  end


  def pass_fail_markers(text)
    markers = []
    regex = /If you\s+(pass|fail)(?:\s+[^,]*)?,/i
    text.to_enum(:scan, regex).each do
      match = Regexp.last_match
      markers << {
        index: match.begin(0),
        kind: match[1].downcase,
        match: match
      }
    end
    markers
  end

  def conditional_markers(text)
    markers = []
    text.to_enum(:scan, CONDITIONAL_MARKER).each do
      match = Regexp.last_match
      markers << {
        index: match.begin(0),
        kind: match[1].downcase,
        match: match
      }
    end
    markers
  end

  def conditional_chunks(text, markers)
    markers.each_with_index.map do |marker, index|
      start_pos = marker[:match].end(0)
      end_pos = index + 1 < markers.length ? markers[index + 1][:index] : text.length
      [marker, clean_text(text[start_pos...end_pos])]
    end
  end

  def conditional_key(kind)
    return 'Pass' if kind == 'pass'
    return 'Fail' if kind == 'fail'
  end

  def simplify_effect_text(text)
    clean = clean_text(text)
    clean = clean.sub(/^If you pass,\s*/i, '')
    clean = clean.sub(/^If you fail[,;]\s*/i, '')
    clean = clean.sub(/^If you don't,\s*/i, '')
    clean = clean.sub(/^If you do not,\s*/i, '')
    clean = clean.sub(/^If you do,\s*/i, '')
    capitalize_result_text(clean.strip)
  end

  def capitalize_result_text(text)
    chars = text.chars
    idx = chars.index { |ch| ch =~ /[A-Za-z]/ }
    return text unless idx

    chars[idx] = chars[idx].upcase
    chars.join
  end

  def extract_expansion_id(set_td)
    # Prefer explicit expansion labels from figure captions, links, or image alt text.
    figcaption = clean_text(extract_text(set_td.at_css('figcaption')))
    return figcaption unless figcaption.empty?

    normalize_space(set_td.at_css('a')&.[]('title'))
  end

  def canonical_location_name(heading)
    text = normalize_space(heading)
    return '' if text.empty?

    text = text.gsub(/\s+Encounters?/i, '')
    text.strip
  end

  def extract_text(node, skill_icons: false)
    return '' unless node

    node = node.dup
    node.css('sup.reference, .mw-editsection, script, style, .reference').remove
    node.css('[style]').each do |n|
      n.remove if n['style'].to_s.downcase.include?('display: none')
    end

    # Replace wiki skill icons with local skill images.
    node.css('span[title], a[title]').each do |n|
      next unless skill_icons

      title = normalize_space(n['title'])
      next unless SKILL_NAMES.include?(title)
      next unless n.at_css('img')

      n.replace("#{SKILL_ICON_START}#{title}#{SKILL_ICON_END}")
    end

    text = extract_text_preserving_italics(node)
    text = CGI.unescapeHTML(text)
    normalize_space(text)
  end

  def extract_text_preserving_italics(node)
    return '' unless node

    if node.text?
      node.text
    else
      inner = node.children.map { |child| extract_text_preserving_italics(child) }.join
      if %w[i em].include?(node.name.to_s.downcase)
        "<i>#{inner}</i>"
      else
        inner
      end
    end
  end

  def clean_text(text)
    clean = normalize_space(text)
    clean = clean.tr("\u2014\u2013", '-')
    clean = clean.gsub(/\((#{SKILL})\)\s*([+-])\s*(\d+)\)/, '(\1\2\3)')

    clean
      .gsub(/\s+([,.;:!?])/, '\\1')
      .strip
  end

  def normalize_space(text)
    text.to_s
      .gsub("\u00A0", ' ')
      .gsub(/\s+/, ' ')
      .strip
  end

  def write_output_for_file(html_path, file_result, file_type)
    base_name = File.basename(html_path, '.html')
    output_file = File.join(OUTPUT_DIR, "deckdata_#{base_name.downcase}.js")
    location_bucketed_key = COMPLEX_LOCATION_FILES[base_name]

    lines = []

    if file_type == :other_world
      location, cards = file_result[:deck_data].first
      lines << "deckData.OtherWorld[#{location.to_json}] = #{JSON.pretty_generate(cards)};"
      lines << ''
      File.write(output_file, lines.join("\n"))
      return output_file
    end

    if location_bucketed_key
      all_cards = file_result[:deck_data].values.flat_map { |cards| cards }
      bucketed = bucket_cards_by_location(all_cards)
      lines << "deckData['#{location_bucketed_key}'] = #{JSON.pretty_generate(bucketed)};"
      lines << ''
      File.write(output_file, lines.join("\n"))
      return output_file
    end

    if file_result[:deck_data_special]&.any?
      sorted = file_result[:deck_data_special].keys.sort.each_with_object({}) do |ao, acc|
        acc[ao] = file_result[:deck_data_special][ao].keys.sort.each_with_object({}) do |dn, inner|
          inner[dn] = file_result[:deck_data_special][ao][dn]
        end
      end
      lines << "deckData.Special = #{JSON.pretty_generate(sorted)};"
      lines << ''
      File.write(output_file, lines.join("\n"))
      return output_file
    end

    file_result[:deck_data].keys.sort.each do |deck_name|
      lines << "deckData[#{deck_name.to_json}] = #{JSON.pretty_generate(file_result[:deck_data][deck_name])};"
      lines << ''
    end

    file_result[:deck_data_research].keys.sort.each do |ancient_one|
      lines << "deckData.Research[#{ancient_one.to_json}] = #{JSON.pretty_generate(file_result[:deck_data_research][ancient_one])};"
      lines << ''
    end

    File.write(output_file, lines.join("\n"))
    output_file
  end

  def bucket_cards_by_location(cards)
    by_location = {}

    cards.each do |card|
      card_id = card['cardId']
      expansion_id = card['expansionId']

      location_keys = card.keys - ['cardId', 'expansionId']
      location_keys.each do |location|
        payload = card[location]
        next unless payload.is_a?(Hash)

        by_location[location] ||= []
        by_location[location] << {
          'cardId' => card_id,
          'expansionId' => expansion_id
        }.merge(payload)
      end
    end

    by_location.keys.sort.each_with_object({}) do |location, acc|
      acc[location] = by_location[location].sort_by { |card| card['cardId'] || 0 }
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  begin
    EncounterParser.new.run
  rescue LoadError => e
    warn "Missing dependency: #{e.message}"
    warn "Install with: gem install nokogiri"
    exit 1
  end
end
