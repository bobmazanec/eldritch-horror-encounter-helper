# Wiki HTML to JSON

A Ruby command-line parser that converts wiki encounter tables from HTML into JavaScript deck data.

The parser reads HTML files from `html/`, extracts encounter cards, normalizes their text and branching choices, and writes generated JavaScript files to `js/`.

## Requirements

- Ruby (developed and tested with Ruby 3.0.2, but hopefully works with any Ruby 2.5+)
- The `nokogiri` gem

Install the only external dependency with:

```sh
gem install nokogiri
```

The other required libraries (`json`, `cgi`, and `fileutils`) are part of Ruby's standard library.

## Usage

### Fetch the source HTML files
The script is designed to parse HTML from the [Eldritch Horror Wiki](https://eldritch-horror.fandom.com/wiki/Eldritch_Horror_Wiki) in the `.wiki-html/` directory. The repository does not include these files, so you must fetch them yourself.

The files are linked (some indirectly) from the wiki's [Encounters](https://eldritchhorror.fandom.com/wiki/Encounters) page.

Save them manually from the browser; or use `wget` or some similar tool.
The script expects filenames based on the wiki page title, for example: `Location_Encounter.html`, `Dream-Quest_Encounter.html`, etc.

#### Some Special Cases
- The parser does not handle Defeated Investigator Encounters as they are readily available to players.
- Save [Shudde M'Ell Research Encounters](https://eldritchhorror.fandom.com/wiki/Shudde_M%27ell_Research_Encounters) as `./wiki-html/Shudde_M'ell_Research_Encounters.html` (note the apostrophe in the filename instead of the URL encoded value)
- [Other World Encounters](https://eldritchhorror.fandom.com/wiki/Other_World_Encounters) contains only a summary of Other World encounters. Save the linked pages for each Other World location, e.g., `./wiki-html/The_Dreamlands_(Other_World).html`, `./wiki-html/The_Past.html`, etc.

### Run the script
Run the parser from its directory:

```sh
ruby parse_html_to_deck_data.rb
```

The command:

1. Processes hard-coded filenames, expected to be in `wiki-html/`.
2. Parses each file using its headings and wiki tables.
4. Writes a matching `deckdata_*.js` file in `../js/`.
5. Prints each input/output pair and a processed/generated count.

A successful run currently processes 35 HTML files and reports output similar to:

```text
Processed/generated: 35/35 files
```

The script creates `../js/` if it does not exist. It does not remove old files from that directory, so delete obsolete generated files manually when an input file is removed or renamed.

## Input Format

Input pages are expected to resemble MediaWiki HTML and may contain:

- A `#mw-content-text` content container
- `h2` and `h3` headings identifying decks or locations
- Wiki tables with a header row and encounter rows
- Card ID and expansion/set information in the first two columns
- Either one encounter-text column or separate introduction, pass, and fail columns

## Generated Data

Generated files are JavaScript fragments intended to be loaded by `../index.html` that has already created a `deckData` object. They are neither standalone JSON documents nor standalone JavaScript programs.

Location-based cards can additionally contain location keys whose values are encounter payloads. The parser sorts cards and generated deck keys for stable output.

The parser also normalizes common encounter structures, including skill tests, pass/fail effects, optional actions, ambush combat results, movement choices, and nested choices. Skill icons in encounter text are emitted as local images.

The parser generally maintains most of the original card and encounter text from the HTML; however, it does make some changes and additions to facilitate presenting only the portions of the encounter relevant to the player's choices and/or test results.

## Regenerating Data

After changing an HTML source file or parser logic, regenerate the JavaScript data:

```sh
ruby parse_html_to_deck_data.rb
```


```sh
ruby parse_html_to_deck_data.rb && git diff --quiet -- js
```

## Troubleshooting

### `Missing dependency: cannot load such file -- nokogiri`

Install Nokogiri and run the parser again:

```sh
gem install nokogiri
```

### `No html files found`

Run the command from the repository with source pages in the `html/` directory. The script resolves `html/` and `js/` relative to its own location, so changing the working directory is not required when invoking it by path.

### A source page produces no output

Check that the page contains at least one table with header cells in its first row. Tables without headers are ignored.

## Development

After starting to develop this by hand, I quickly began to see how many regular expressions and special cases I would have to generate and handle. I switched to a mostly prompt-driven approach using Microsoft Copilot to generate the parser code, making a few manual edits along the way.

 Use `ruby -c parse_html_to_deck_data.rb` to check its syntax.

The project currently uses regeneration and diffing as its primary end-to-end validation. There is no separate automated test suite.

## Code Coverage
I also prompted Copilot to generate `coverage_report.rb`. It uses the `coverage` gem to record the parser's execution as it processes the input files.

Run the coverage script to measure the parser while it processes all configured input files and writes an HTML report to `./coverage/index.html`:

```sh
ruby coverage_report.rb
```

This runs the parser and generates the JS output files. Use the generated report to guide manual and/or prompt-driven edits and refactoring. On its own, the coverage script does not exercise error handling.
