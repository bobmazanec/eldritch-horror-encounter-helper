# eldritch-horror-encounter-helper

Present Eldritch Horror encounters step-by-step so players cannot see possible outcomes before choosing how to proceed.

It is inspired by [Eldritch Horror Card Clerk+](https://metapone.github.io/eldritch-horror-card-clerk-plus/).

## Running the Application
With all required files in place (see below), open `index.html` in a web browser.

### This Application Requires More Data

This application's source code is **not** ready to deploy and run.

The `js/deckdata_*.js` files referenced in its `index.html` are assumed to contain an encoding of encounter text copyrighted by [Fantasy Flight Games](https://www.fantasyflightgames.com/en/products/eldritch-horror/). These files are **not** in its source code repository.

Use the script `html2json/parse_html_to_deck_data.rb` to generate the required `js/deckdata_*.js` files from HTML pages saved from the [Eldritch Horror Wiki](https://eldritch-horror.fandom.com/wiki/Eldritch_Horror_Wiki). See the `html2json/README.md` file for instructions on how to fetch the HTML pages and run the parser.
