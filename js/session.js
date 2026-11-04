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

const SessionStorageKey = "Eldritch Horror Encounter Helper Session";

let gameUIState = createEmptyGameUIState();
let isTrackingGameUIState = false;
let isLoadingGame = false;

function createEmptyGameUIState() {
  return {
    shownIds: [],
    removedIds: [],
    disabledSpaces: [],
    devastatedCities: [],
    hiddenSections: []
  };
}

function loadGame() {
  try {
    const serializedGame = localStorage.getItem(SessionStorageKey);
    if (serializedGame === null) {
      alert("There is no saved game to load.");
      return;
    }

    const savedGame = JSON.parse(serializedGame);
    if (
      !savedGame ||
      typeof savedGame.ancientOne !== "string" ||
      !Array.isArray(savedGame.expansionsUsed) ||
      !Array.isArray(savedGame.preludesUsed) ||
      !savedGame.decks ||
      typeof savedGame.decks !== "object"
    ) {
      throw new Error("The saved game is missing required state.");
    }

    const uiState = savedGame.uiState || createEmptyGameUIState();
    uiState.hiddenSections = uiState.hiddenSections || [];
    ["shownIds", "removedIds", "disabledSpaces", "devastatedCities", "hiddenSections"].forEach(key => {
      if (!Array.isArray(uiState[key])) {
        throw new Error(`The saved game has invalid UI state: ${key}.`);
      }
    });
    const history = savedGame.history ?? [];
    if (
      !Array.isArray(history) ||
      history.some(item =>
        !item ||
        typeof item.html !== "string" ||
        typeof item.className !== "string"
      )
    ) {
      throw new Error("The saved game has invalid history.");
    }

    for (const [deckName, deckState] of Object.entries(savedGame.decks)) {
      if (
        !deckState ||
        !Array.isArray(deckState.drawStack) ||
        !Array.isArray(deckState.discardPile)
      ) {
        throw new Error(`The saved game has invalid state for the ${deckName} deck.`);
      }
    }

    ancientOne = savedGame.ancientOne;
    expansionsUsed = savedGame.expansionsUsed;
    preludesUsed = savedGame.preludesUsed;
    numCitiesDevastated = Number.isInteger(savedGame.numCitiesDevastated)
      ? savedGame.numCitiesDevastated
      : uiState.devastatedCities.length;
    secretsOfThePastRumorInPlay = Boolean(savedGame.secretsOfThePastRumorInPlay);
    gameUIState = {
      shownIds: [...uiState.shownIds],
      removedIds: [...uiState.removedIds],
      disabledSpaces: [...uiState.disabledSpaces],
      devastatedCities: [...uiState.devastatedCities],
      hiddenSections: [...uiState.hiddenSections]
    };

    Object.keys(decks).forEach(deckName => delete decks[deckName]);
    for (const [deckName, deckState] of Object.entries(savedGame.decks)) {
      const restoredDeck = new deck(deckName, []);
      restoredDeck.drawStack = deckState.drawStack;
      restoredDeck.discardPile = deckState.discardPile;
      decks[deckName] = restoredDeck;
    }

    isLoadingGame = true;
    document.getElementById("expansion-selection-section").remove();
    document.getElementById("game-setup-section").hidden = true;
    document.getElementById("mainView").style.display = "block";
    initializeGame(true);
    restoreGameUIState();
    restoreHistory(history);
    if (secretsOfThePastRumorInPlay) {
      updateSecretsOfThePastButton();
    }
    isLoadingGame = false;
    saveGame();
  } catch (error) {
    isLoadingGame = false;
    console.error("Unable to load the saved game.", error);
    alert("Unable to load the saved game. Check the browser console for details.");
  }
}

function recordDevastatedCity(cityName) {
  if (!isTrackingGameUIState || gameUIState.devastatedCities.includes(cityName)) {
    return;
  }

  gameUIState.devastatedCities.push(cityName);
  saveGame();
}

function recordDisabledSpace(space) {
  if (!isTrackingGameUIState || gameUIState.disabledSpaces.includes(space)) {
    return;
  }

  gameUIState.disabledSpaces.push(space);
  saveGame();
}

function recordRemovedElement(element) {
  if (!isTrackingGameUIState) {
    return;
  }

  const ids = [
    ...(element.id ? [element.id] : []),
    ...Array.from(element.querySelectorAll("[id]"), child => child.id)
  ];
  let changed = false;

  ids.forEach(id => {
    gameUIState.shownIds = gameUIState.shownIds.filter(shownId => shownId !== id);
    if (!gameUIState.removedIds.includes(id)) {
      gameUIState.removedIds.push(id);
      changed = true;
    }
  });

  if (changed) {
    saveGame();
  }
}

function recordShownId(id) {
  if (!isTrackingGameUIState) {
    return;
  }

  gameUIState.removedIds = gameUIState.removedIds.filter(removedId => removedId !== id);
  if (!gameUIState.shownIds.includes(id)) {
    gameUIState.shownIds.push(id);
    saveGame();
  }
}

function resetGameUIState() {
  gameUIState = createEmptyGameUIState();
  isTrackingGameUIState = false;
}

function recordSectionVisibility(sectionName, isVisible) {
  if (!isTrackingGameUIState) {
    return;
  }

  gameUIState.hiddenSections = gameUIState.hiddenSections.filter(name => name !== sectionName);
  if (!isVisible) {
    gameUIState.hiddenSections.push(sectionName);
  }
  saveGame();
}

function restoreGameUIState() {
  document.querySelectorAll("fieldset.visibility input[data-section]").forEach(checkbox => {
    if (gameUIState.hiddenSections.includes(checkbox.dataset.section)) {
      checkbox.checked = false;
      document.querySelector(checkbox.dataset.selector).classList.add("section-hidden");
    }
  });

  gameUIState.shownIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = "block";
    }
  });

  gameUIState.removedIds.forEach(id => {
    document.getElementById(id)?.remove();
  });

  gameUIState.devastatedCities.forEach(cityName => {
    const cityId = cityName.toLowerCase().replaceAll(/\s+/g, "-");
    document.getElementById(`devastate-${cityId}`)?.remove();
    document.getElementById(cityId)?.remove();
  });

  gameUIState.disabledSpaces.forEach(disableExpeditionEncounterButtonsFor);
}

function restoreHistory(history) {
  const historyContainer = document.getElementById("history");
  historyContainer.replaceChildren();

  history.forEach(item => {
    const historyElement = document.createElement("div");
    historyElement.className = item.className;
    historyElement.innerHTML = item.html;
    historyContainer.appendChild(historyElement);
  });
}

function saveGame() {
  if (isLoadingGame) {
    return;
  }

  try {
    const decksState = {};
    for (const [deckName, deck] of Object.entries(decks)) {
      decksState[deckName] = {
        drawStack: deck.drawStack,
        discardPile: deck.discardPile
      };
    }

    // Newest first, matching the order displayed on the page
    const history = Array.from(document.getElementById("history").children).map(element => ({
      className: element.className,
      html: element.innerHTML
    }));

    const saveItem = {
      ancientOne,
      expansionsUsed,
      preludesUsed,
      decks: decksState,
      numCitiesDevastated,
      secretsOfThePastRumorInPlay,
      uiState: gameUIState,
      history
    };
    localStorage.setItem(SessionStorageKey, JSON.stringify(saveItem));
  } catch (error) {
    console.error("Unable to save the current game.", error);
  }
}

function startTrackingGameUIState() {
  isTrackingGameUIState = true;
}

function updateLoadGameButton() {
  const button = document.getElementById("load-game-button");
  if (!button) {
    return;
  }

  try {
    button.hidden = localStorage.getItem(SessionStorageKey) === null;
  } catch (error) {
    console.error("Unable to check for a saved game.", error);
    button.hidden = true;
  }
}

function goHome() {
  window.location.reload();
}
