#!/bin/bash -e

ANCIENT_ONES=(
  Azathoth
  Abhoth
  Antediluvium
  Atlach-Nacha
  Cthulhu
  "Elder Things"
  Hastur
  Hypnos
  Ithaqua
  Nephren-Ka
  Nyarlathotep
  Shub-Niggurath
  "Shudde M'ell"
  Syzygy
  Yig
  Yog-Sothoth
)

echo General...
./general_encounter_to_js > ../js/deckdata_general.js

for ((i = 0; i < ${#ANCIENT_ONES[@]}; i++))
do
  ao=${ANCIENT_ONES[$i]}
  ao_lower=${ao,,}
  output_filebase=${ao_lower/ /_}
  echo $ao Research...
  ./research_encounter_to_js "$ao" > ../js/deckdata_research_${output_filebase}.js
done
