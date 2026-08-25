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

const Core = "Eldritch Horror";
const CitiesInRuin = "Cities in Ruin";
const ForsakenLore = "Forsaken Lore";
const MasksOfNyarlathotep = "Masks of Nyarlathotep";
const MountainsOfMadness = "Mountains of Madness";
const SignsOfCarcosa = "Signs of Carcosa";
const StrangeRemnants = "Strange Remnants";
const TheDreamlands = "The Dreamlands";
const UnderThePyramids = "Under the Pyramids";

const InCosmicAlignment = "In Cosmic Alignment";
const InTheLightlessChamber = "In the Lightless Chamber";
const LitanyOfSecrets = "Litany of Secrets";
const OtherworldlyDreams = "Otherworldly Dreams";

const ancientOne = "Azathoth";
const expansionsUsed = [Core, CitiesInRuin, ForsakenLore, MasksOfNyarlathotep, SignsOfCarcosa, StrangeRemnants, TheDreamlands, MountainsOfMadness, UnderThePyramids];
const preludesUsed = [OtherworldlyDreams /*, InCosmicAlignment, InTheLightlessChamber, LitanyOfSecrets*/];

const deckData = {
  OtherWorld: {},
  Research: {},
  Special: {}
};
const decks = {};
let   secretsOfThePastRumorInPlay = false;
