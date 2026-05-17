'use strict';

function addOtherworldlyDreamsIIIButton(buttonId) {
  removeElementWithId("otherworldly-dreams-III");
  showId(buttonId);
}

function addChoiceButtons(encounterElement, encounterStep) {
  const buttonContainer = document.createElement("div");

  for (const label in encounterStep.choices) {
    const button = document.createElement("button");
    button.textContent = label;
    button.onclick = () => {
      addEncounterStep(encounterElement, encounterStep.choices[label], buttonContainer, label);
    };

    buttonContainer.appendChild(button);
  }
  
  encounterElement.appendChild(buttonContainer);
}

function addDreamQuestEncounterButton() {
  addTopCardButton("Dream-Quest", "dream-quest-buttons", "dream-quest", startDreamQuestEncounter, card => {
    return `Start ${card.space} Dream-Quest Encounter`;
  })
}

function addEncounterAction(buttonContainer, action) {
  const actionElement = document.createElement("p");
  actionElement.classList.add("encounter-action");
  actionElement.textContent = action;

  buttonContainer.insertAdjacentElement("beforebegin", actionElement);
  buttonContainer.remove();
}

function addEncounterListElement(headerText) {
  const encounterElement = document.createElement("div");
  encounterElement.appendChild(document.createElement("hr"));

  const headerElement = document.createElement("h3");
  headerElement.textContent = headerText;
  encounterElement.appendChild(headerElement);

  document.getElementById("encounterList").prepend(encounterElement);

  return encounterElement;
}

function addEncounterStep(encounterElement, encounterStep, priorButtonContainer = null, action = null) {
  if (action && priorButtonContainer) {
    addEncounterAction(priorButtonContainer, action);
  }

  addEncounterStepText(encounterElement, encounterStep);

  if (encounterStep.choices) {
    addChoiceButtons(encounterElement, encounterStep);
  } else {
    endEncounter();
  }
}

function addEncounterStepText(encounterElement, encounterStep) {
  let textItems;
  if (Array.isArray(encounterStep) || typeof(encounterStep) == "string") {
    textItems = encounterStep;
  } else {
    textItems = encounterStep.intro;
  }
  [textItems].flat().forEach(textItem => {
    const textElement = document.createElement("p");
    textElement.textContent = textItem;
    encounterElement.appendChild(textElement);
    readAlound(textItem);
  });
}

function addExpeditionEncounterButton(deckName) {
  addTopCardButton(deckName, "expedition-buttons", "expedition", startExpeditionEncounter, card => {
    return `Start ${card.space} Expedition Encounter`;
  });
}

function addMysticRuinsEncounterButton(_) {
  addTopCardButton("Mystic Ruins", "mystic-ruins-buttons", "mystic-ruins", startMysticRuinsEncounter, card => {
    return `Start ${card.space} Mystic Ruins Encounter`;
  })
}

function addRuinsInTheHeartOfTheJungle() {
  removeElementWithId("cosmic-alignment-II");
  showId("ruins-in-the-heart-of-the-jungle");
}

function addRuinsUnderTheStars() {
  removeElementWithId("cosmic-alignment-II");
  showId("ruins-under-the-stars");
}

function addSpecialEncounterButtons(deckNames) {
  const buttonContainer = document.getElementById("special-encounters");

  deckNames.forEach(deckName => {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("encounter");
    button.onclick = () => startSpecialEncounter(deckName);
    button.textContent = `Start ${deckName} Encounter`;
    buttonContainer.appendChild(button);
  });
}

function addTopCardButton(deckName, buttonContainerId, buttonClass, onClick, buttonTextFunction) {
  const card = decks[deckName].topCard();

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("top-card");
  button.classList.add(buttonClass);
  button.dataset.deckName = deckName;

  if (card) {
    button.classList.add("encounter");
    button.onclick = onClick;
    button.textContent = buttonTextFunction(card);
  } else {
    button.disabled = true;
    button.textContent = `The ${deckName} deck is empty`;
  }

  document.getElementById(buttonContainerId).appendChild(button);
}

function buildDreamQuestDeck() {
  createDeckBySpaces("Dream-Quest");
}

function buildExpeditionDecks() {
  const allExpeditionCards = getCardsBySpaces(deckData.Expedition);
  const wholeDeck = new deck("Expedition", allExpeditionCards);
  wholeDeck.shuffle();
  
  if (useSecondExpeditionDeck()) {
    const deckHalves = wholeDeck.splitDeckInTwo();
    createDeck("Expedition-1", deckHalves.shift());
    createDeck("Expedition-2", deckHalves.shift());
  } else {
    decks["Expedition"] = wholeDeck;
  }
}

function buildMysticRuinsDeck() {
  createDeckBySpaces("Mystic Ruins");
}

function buildResearchDeck() {
  createDeck("Research", filterByExpansion(deckData.Research[ancientOne]));
}

function createDeck(deckName, cards) {
  decks[deckName] = new deck(deckName, cards);
}

function filterByExpansion(cards) {
  return cards.filter(
    card => expansionsUsed.includes(card.expansionId)
  );
}

function buildSimpleDecks() {
  [
    "America", "Asia/Australia",
    "Devestation", "Dreamlands",
    "Europe",
    "General",
    "OtherWorld"
  ].forEach(deckName => {
    createDeck(deckName, filterByExpansion(deckData[deckName]));
  });
}

function buildSpecialEncounterDecks() {
  const deckNames = [];
  const specialDecks = deckData.Special[ancientOne];

  for (const deckName in specialDecks) {
    const cards = filterByExpansion(specialDecks[deckName]);

    if (cards.length > 0) {
      createDeck(deckName, cards);
      deckNames.push(deckName);
    }
  }

  return deckNames;
}

function createDeckBySpaces(deckName) {
  createDeck(
    deckName,
    getCardsBySpaces(deckData[deckName])
  );
}

function disableEncounterButtons() {
  updateEncounterButtons(true);
}

function disableEncounterButtonsFor(space) {
  const buttons = document.querySelectorAll(`button[data-space="${space}"]`);
  buttons.forEach((button) => {
    // Disable it, and remove 'encounter' class
    // so it will not be re-enabled
    button.disabled = true;
    button.classList.remove("encounter");
    button.innerHTML += `<br>[No encounter cards remain for ${space}]`;
  });
}

function drawCard(deckName) {
  return decks[deckName].drawCard();
}

function enableEncounterButtons() {
  updateEncounterButtons(false);
}

function endEncounter(buttonContainer, encounter, action, key) {
  enableEncounterButtons();
}

function findCardForSpace(space) { return (card) => card.space === space; }

function getCardsBySpaces(rawCardsBySpaces) {
  const allCards = [];

  for (const space in rawCardsBySpaces) {
    const cards = filterByExpansion(rawCardsBySpaces[space]);
    cards.forEach(card => {
      card.space = space;
      allCards.push(card)
    });
  };

  return allCards;
}

function numUniqueSpacesInDeck(deckName) {
  const spaces = new Set(decks[deckName].map(card => card.space));
  return spaces.size;
}

function readAlound(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function removeElementWithId(id) {
  document.getElementById(id).remove();
}

function removeDreamlandsButtons() {
  removeElementWithId("dreamlands");
}

function removeMysticRuinsButtons() {
  removeElementWithId("mystic-ruins-buttons");
}

function removeTopCardButton(button) {
  button.remove();
  return decks[button.dataset.deckName];
}

function resolveCosmicAlignmentAdventureII(event, space, nextId) {
  showId(nextId);
  resolveMysticRuinsEncounterForSpace(event, space);
}

function resolveCosmicAlignmentAdventureIII(event) {
  resolveExpeditionEncounterForSpace(event, event.target.dataset.space);
}

function resolveOtherworldlyDreamsAdventureIII(event, space) {
  resolveDreamQuestEncounterForSpace(event, space);
}

function resolveDreamQuestEncounterForSpace(event, space) {
  event.target.remove();

  const deck = decks["Dream-Quest"];
  const card = deck.searchForCard(findCardForSpace(space));

  shuffleDreamQuestDeck();

  startDreamQuestEncounterWith(card);
}

function resolveExpeditionEncounterForSpace(event, space) {
  event.target.remove();

  let deckName = "Expedition";
  if (useSecondExpeditionDeck()) {
    deckName += "-1"
  }

  let deck = decks[deckName];
  let card = deck.searchForCard(findCardForSpace(space));

  shuffleTopCardDeck(deckName, 'expedition', addExpeditionEncounterButton, deckName);
  if (!card) {
    deckName = "Expedition-2";
    let deck = decks[deckName];
    card = deck.searchForCard(findCardForSpace(space));
    shuffleTopCardDeck(deckName, 'expedition', addExpeditionEncounterButton, deckName);
  }

  startExpeditionEncounterWith(card);
}

function resolveMysticRuinsEncounterForSpace(event, space) {
  event.target.remove();

  const deck = decks["Mystic Ruins"];
  const card = deck.searchForCard(findCardForSpace(space));

  shuffleMysticRuinsDeck();

  startMysticRuinsEncounterWith(card);
}

function resolveSecretsOfThePastReckoning() {
  const buttons = Array.from(document.getElementsByClassName("encounter expedition"));
  const cardSpaces = new Set();
  const deckNames = [];
  
  buttons.forEach((button) => {
    const deck = removeTopCardButton(button);
    cardSpaces.add(deck.topCard().space);

    deckNames.push(deck.name);
  });

  let expeditionDeckIsEmpty = false;

  deckNames.forEach(deckName => {
    const deck = decks[deckName];

    // Remove cards whose space matches the drawn card('s/s')
    deck.removeCardsFromDrawStack(
      card => cardSpaces.has(card.space)
    );

    if (deck.isEmpty()) {
      expeditionDeckIsEmpty = true;
    } else {
      addExpeditionEncounterButton(deckName);
    }
  });

  cardSpaces.forEach((space) => disableEncounterButtonsFor(space));

  if (expeditionDeckIsEmpty) {
    const article = useSecondExpeditionDeck() ? "An" : "The";
    alert(`${article} Expedition deck is empty - investigators lose the game.`);
  }
  updateSecretsOfThePastButton();
}

function showId(id) {
  document.getElementById(id).style.display = "block";
}

function shuffleDreamQuestDeck() {
  shuffleTopCardDeck("Dream-Quest", 'dream-quest', addDreamQuestEncounterButton);
}

function shuffleExpeditionDeck() {
  shuffleTopCardDeck("Expedition", 'expedition', addExpeditionEncounterButton);
}

function shuffleMysticRuinsDeck() {
  shuffleTopCardDeck("Mystic Ruins", 'mystic-ruins', addMysticRuinsEncounterButton);
}

function shuffleTopCardDeck(deckLabel, deckClass, addButtonFunction, deckName = null) {
  let selector = `button.top-card.${deckClass}`;
  if (deckName) {
    selector += `[data-deck-name="${deckName}"]`;
  }
  const buttons = Array.from(document.querySelectorAll(selector));

  buttons.forEach(button => {
    button.remove();
    const deck = removeTopCardButton(button);
    deck.shuffle();
    addButtonFunction(deck.name);
  });

  const plural = buttons.length === 1 ? "" : "s";
  addEncounterListElement(`Shuffled the ${deckLabel} deck${plural}`);
}

function startCityEncounter(deckName, cityName) {
  const card = drawCard(deckName);

  startEncounter(
    `${deckName} ${card.cardId}: ${cityName}`,
    card[cityName]
  );
}

function startDevestationEncounter(spaceType) {
  const card = drawCard("Devestation");

  startEncounter(
    `Devestation: ${card.cardId}`,
    card
  );
}

function startDreamQuestEncounter(event) {
  const deck = removeTopCardButton(event.target);
  const card = deck.drawCard();

  addDreamQuestEncounterButton();

  startDreamQuestEncounterWith(card);
}

function startDreamQuestEncounterWith(card) {
  startEncounter(
    `Dream-Quest - ${card.space}: ${card.cardId}`,
    card
  );
}

function startEncounter(headerText, encounter) {
  disableEncounterButtons();

  const encounterElement = addEncounterListElement(headerText);
  encounterElement.classList.add("encounter");

  addEncounterStep(encounterElement, encounter);
}

function startExpeditionEncounter(event) {
  const deck = removeTopCardButton(event.target);
  const card = deck.drawCard();
  
  addExpeditionEncounterButton(deck.name);
  updateSecretsOfThePastButton();

  startExpeditionEncounterWith(card);
}

function startExpeditionEncounterWith(card) {
  startEncounter(
    `Expedition - ${card.space}: ${card.cardId}`,
    card
  );
}

function startGeneralEncounter(spaceType) {
  const card = drawCard("General");

  startEncounter(
    `General ${card.cardId}: ${spaceType}`,
    card[spaceType]
  );
}

function startMysticRuinsEncounter(event) {
  const deck = removeTopCardButton(event.target);
  const card = deck.drawCard();

  addMysticRuinsEncounterButton();

  startMysticRuinsEncounterWith(card);
}

function startMysticRuinsEncounterWith(card) {
  startEncounter(
    `Mystic Ruins - ${card.space}: ${card.cardId}`,
    card
  );
}

function startOtherWorldEncounter() {
  const card = drawCard("OtherWorld");

  startEncounter(
    `Other World ${card.cardId}: ${card.location}`,
    card
  );
}

function startResearchEncounter(spaceType) {
  const card = drawCard("Research");

  startEncounter(
    `Research - ${ancientOne} ${card.cardId}: ${spaceType}`,
    card[spaceType]
  );
}

function startSpecialEncounter(deckName) {
  const card = drawCard(deckName);

  startEncounter(
    `${deckName} ${card.cardId}`,
    card
  );
}

function updateEncounterButtons(disabled) {
  document.querySelectorAll("button.encounter").forEach(button => {
    button.disabled = disabled;
  });
}

function updateSecretsOfThePastButton() {
  let text = "Resolve the 'Secrets of the Past' Mythos card's Reckoning effect<br>";

  if (useSecondExpeditionDeck()) {
    const spaces1 = numUniqueSpacesInDeck("Expedition-1");
    const spaces2 = numUniqueSpacesInDeck("Expedition-2");
    text += `The Expedition decks have ${spaces1} and ${spaces2} unique spaces remaining, respectively`;
  } else {
    const spaces = numUniqueSpacesInDeck("Expedition");
    const plural = spaces === 1 ? "" : "s";
    text += `The Expedition deck has ${spaces} unique space${plural} remaining`;
  }

  document.getElementById("secrets-of-the-past").innerHTML = text;
}

function useDreamlandsBoard() {
  return (
    ancientOne == "Hypnos" ||
    preludesUsed.includes("Otherworldly Dreams")
  );
}

function useCosmicAlignmentAdventure() {
  return preludesUsed.includes("In Cosmic Alignment");
}

function useMysticRuinsDeck() {
  // True if either of the Ancient Ones or Preludes,
  return (
    ["Antediluvium", "Syzygy"].includes(ancientOne) ||
    preludesUsed.includes("The Stars Align") ||
    useCosmicAlignmentAdventure()
  );
}

function useOtherworldlyDreamsAdventure() {
  return preludesUsed.includes("Otherworldly Dreams");
}

function useSecondExpeditionDeck() {
  return preludesUsed.includes("Litany of Secrets");
}

buildSimpleDecks();
buildExpeditionDecks();
buildResearchDeck();

if (useCosmicAlignmentAdventure()) {
  showId("add-ruins-in-the-heart-of-the-jungle");
  showId("add-ruins-under-the-stars");
}

if (useOtherworldlyDreamsAdventure()) {
  showId("add-aboard-the-black-galley");
  showId("add-beyond-the-river-skai");
  showId("add-the-blessings-of-nodens");
}

if (useDreamlandsBoard()) {
  buildDreamQuestDeck();
  addDreamQuestEncounterButton();
} else {
  removeDreamlandsButtons();
}

if (useMysticRuinsDeck()) {
  buildMysticRuinsDeck();
  addMysticRuinsEncounterButton();
} else {
  removeMysticRuinsButtons();
}

if (preludesUsed.includes("Otherwordly Dreams")) {
  addOtherworldlyDreamsButtons();
}

if (decks.Devestation.isEmpty()) {
  removeElementWithId("devestation");
}

if (useSecondExpeditionDeck()) {
  addExpeditionEncounterButton("Expedition-1");
  addExpeditionEncounterButton("Expedition-2");
  document.getElementById("shuffle-expedition").textContent += "s";
} else {
  addExpeditionEncounterButton("Expedition");
}
updateSecretsOfThePastButton();

addSpecialEncounterButtons(buildSpecialEncounterDecks());
