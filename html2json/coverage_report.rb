#!/usr/bin/env ruby
# frozen_string_literal: true

require 'cgi'
require 'coverage'
require 'fileutils'

source_path = File.expand_path('parse_html_to_deck_data.rb', __dir__)
report_dir = File.join(__dir__, 'coverage')
report_path = File.join(report_dir, 'index.html')

Coverage.start(lines: true)
load source_path
EncounterParser.new.run

line_hits = Coverage.result.fetch(source_path).fetch(:lines)
source_lines = File.readlines(source_path, chomp: true)
executable_lines = line_hits.count { |hits| !hits.nil? }
covered_lines = line_hits.count { |hits| hits.to_i.positive? }
percentage = (covered_lines * 100.0 / executable_lines).round(1)

rows = source_lines.each_with_index.map do |line, index|
  hits = line_hits[index]
  status = if hits.nil?
             'not-executable'
           elsif hits.zero?
             'missed'
           else
             'covered'
           end
  count = hits.nil? ? '' : hits

  <<~HTML
    <tr class="#{status}">
      <td>#{index + 1}</td><td>#{count}</td><td><code>#{CGI.escapeHTML(line)}</code></td>
    </tr>
  HTML
end.join

FileUtils.mkdir_p(report_dir)
File.write(report_path, <<~HTML)
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Coverage Report</title>
      <style>
        body { font-family: monospace; margin: 2rem; }
        table { border-collapse: collapse; width: 100%; }
        td { padding: 0.15rem 0.4rem; vertical-align: top; }
        td:first-child, td:nth-child(2) { text-align: right; color: #555; }
        code { white-space: pre-wrap; }
        .missed { background: #ffa4a6; }
        .covered { background: #dcfce7; }
      </style>
    </head>
    <body>
      <h1>Coverage Report</h1>
      <p>#{covered_lines}/#{executable_lines} executable lines covered (#{percentage}%)</p>
      <table>
        <tbody>#{rows}</tbody>
      </table>
    </body>
  </html>
HTML

puts "Coverage: #{covered_lines}/#{executable_lines} executable lines (#{percentage}%)"
puts "HTML report: #{report_path}"