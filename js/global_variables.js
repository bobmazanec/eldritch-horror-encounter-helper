// Eldritch Horror Encounter Helper
// Present Eldritch Horror encounters step-by-step
// Copyright (C) 2026 Bob Mazanec
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License along
// with this program; if not, write to the Free Software Foundation, Inc.,
// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

// Ancient Ones
const ElderThings = "Elder Things";
const Hypnos = "Hypnos";
const NephrenKa = "Nephren-Ka";

// Cards
const SecretsOfThePast = "Secrets of the Past";
const TheCrawlingChaos = "The Crawling Chaos";

// Deck names
const AntarcticaResearch = "Antarctica Research";
const Devastation = "Devastation";
const DreamQuest = "Dream-Quest";
const Expedition = "Expedition";
const General = "General Encounter";
const MysticRuins = "Mystic Ruins";
const OtherWorld = "OtherWorld";
const Research = "Research";

// Expansions
const Core = "Eldritch Horror";
const CitiesInRuin = "Cities in Ruin";
const ForsakenLore = "Forsaken Lore";
const MasksOfNyarlathotep = "Masks of Nyarlathotep";
const MountainsOfMadness = "Mountains of Madness";
const SignsOfCarcosa = "Signs of Carcosa";
const StrangeRemnants = "Strange Remnants";
const TheDreamlands = "The Dreamlands";
const UnderThePyramids = "Under the Pyramids";

// Preludes
const DoomsayerFromAntarctica = "Doomsayer from Antarctica";
const InCosmicAlignment = "In Cosmic Alignment";
const InTheLightlessChamber = "In the Lightless Chamber";
const LitanyOfSecrets = "Litany of Secrets";
const OtherworldlyDreams = "Otherworldly Dreams";
const TheStarsAlign = "The Stars Align";

// Spaces
const TheHeartOfAfrica = "The Heart of Africa";

const ancientOne = ElderThings;
const expansionsUsed = [Core, CitiesInRuin, ForsakenLore, MasksOfNyarlathotep, SignsOfCarcosa, StrangeRemnants, TheDreamlands, MountainsOfMadness, UnderThePyramids];
const preludesUsed = [OtherworldlyDreams, InCosmicAlignment, InTheLightlessChamber, LitanyOfSecrets, TheStarsAlign];

let numCitiesDevastated = 0;
const deckData = {
  OtherWorld: {},
  Research: {},
  Special: {}
};
const decks = {};
let   secretsOfThePastRumorInPlay = false;
