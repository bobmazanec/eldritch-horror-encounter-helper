# eldritch-horror-encounter-helper

Present Eldritch Horror encounters step-by-step so players cannot see possible outcomes before choosing how to proceed.

It is inspired by [Eldritch Horror Card Clerk+](https://metapone.github.io/eldritch-horror-card-clerk-plus/).

## Running the Application
With all required files in place (see below), open `index.html` in a web browser.

### This Application Requires More Data

This application's source code is **not** ready to deploy and run.

The `js/deckdata_*.js` files referenced in its `index.html` are assumed to contain an encoding of encounter text copyrighted by [Fantasy Flight Games](https://www.fantasyflightgames.com/en/products/eldritch-horror/). These files are **not** in its source code repository.

This application's development history includes excerpts of this encounter text, excerpted/derived from various pages in the [Eldritch Horror Wiki](https://eldritchhorror.fandom.com/wiki/Eldritch_Horror_Wiki).

## Generating Required Files and/or Developing the Generation Scripts
### You Need Ruby
The scripts for generating the encounter decks' `.js` files are written in [Ruby](https://www.ruby-lang.org).
They were developed using v4.0.4, mostly because that's the version that came from generating a Ruby Devcontainer.
Open the dev container and/or install your own Ruby environment as you like.

### Install gems
If you are **not** using a Ruby Devcontainer, you will need to install the required gems. In the project directory, run:
```
$ bundle install
```
