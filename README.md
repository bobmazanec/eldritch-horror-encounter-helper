# eldritch-horror-encounter-helper

Present Eldritch Horror encounters step-by-step so players cannot see possible outcomes before choosing how to proceed.

It is inspired by [Eldritch Horror Card Clerk+](https://metapone.github.io/eldritch-horror-card-clerk-plus/).

## Running the Application
With all required files in place (see below), open `index.html` in a web browser.

Game progress is saved automatically in the browser as you play. Use **Load Last Session** on the opening screen to resume the saved game, including deck state, changed buttons, and history.

## Encounter Data

The `js/deckdata_*.js` files contain an encoding of encounter text copyrighted by [Fantasy Flight Games](https://www.fantasyflightgames.com/en/products/eldritch-horror/). These files are generated from HTML pages saved from the [Eldritch Horror Wiki](https://eldritch-horror.fandom.com/wiki/Eldritch_Horror_Wiki). These generated files are current with the relevant wiki pages as of __31 October 2026__.

Use `html2json/parse_html_to_deck_data.rb`to  generate the `js/deckdata_*.js` files . See the `html2json/README.md` file for instructions on how to fetch the HTML pages and run the parser.
