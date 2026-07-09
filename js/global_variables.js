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

const Core = 0;
const ForsakenLore = 1;
const MountainsOfMadness = 2;
const StrangeRemnants = 3;
const UnderThePyramids = 4;
const SignsOfCarcosa = 5;
const CitiesInRuin = 6;
const TheDreamlands = 7;
const MasksOfNyarlathotep = 8;

const ancientOne = "Hypnos";
const expansionsUsed = ["Eldritch_Horror", "Cities_in_Ruin", "Forsaken_Lore", "Masks_of_Nyarlathotep", "Mountains_of_Madness", "Signs_of_Carcosa", "Strange_Remnants", "The_Dreamlands", "Under_the_Pyramids", Core, CitiesInRuin, ForsakenLore, MasksOfNyarlathotep, MountainsOfMadness, SignsOfCarcosa, StrangeRemnants, TheDreamlands, UnderThePyramids];
const preludesUsed = ["Litany of Secrets", "Otherworldly Dreams", "In Cosmic Alignment"];

const deckData = {
  Research: {}
};
const decks = {};
const discardPiles = {};
let   secretsOfThePastRumorInPlay = false;
