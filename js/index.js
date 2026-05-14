'use strict';

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
  hideId("cosmic-alignment-II");
  showId("ruins-in-the-heart-of-the-jungle");
}

function addRuinsUnderTheStars() {
  hideId("cosmic-alignment-II");
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
  if (decks[deckName].length === 0) {
   createDeckAndDiscardPile(deckName, discardPiles[deckName]);
   shuffleArray(decks[deckName]);
  }

  const card = decks[deckName][0];

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("encounter");
  button.classList.add("top-card");
  button.classList.add(buttonClass);
  button.dataset.deckName = deckName;
  button.onclick = onClick;
  button.textContent = buttonTextFunction(card);

  document.getElementById(buttonContainerId).appendChild(button);
}

function buildDeck(cards) {
  const deck = [];

  cards.forEach(card => {
    if (expansionsUsed.includes(card.expansionId)) {
      deck.push(card);
    }
  });

  return shuffleArray(deck);
}

function buildDeckBySpaces(cardsBySpaces) {
  const allCards = [];

  for (const space in cardsBySpaces) {
    const cards = cardsBySpaces[space];
    cards.forEach(card => {
      card.space = space;
      allCards.push(card)
    });
  };

  return buildDeck(allCards);
}

function buildDreamQuestDeck() {
  const deckName = "Dream-Quest";
  createDeckAndDiscardPile(
    deckName,
    buildDeckBySpaces(deckData[deckName])
  );
}

function buildExpeditionDecks() {
  const allExpeditionCards = buildDeckBySpaces(deckData.Expedition);
  if (useSecondExpeditionDeck()) {
    const halfwayPoint = Math.ceil(allExpeditionCards.length / 2);

    createDeckAndDiscardPile("Expedition-1", allExpeditionCards.slice(0, halfwayPoint));
    createDeckAndDiscardPile("Expedition-2", allExpeditionCards.slice(halfwayPoint));
  } else {
    createDeckAndDiscardPile("Expedition", allExpeditionCards);
  }   
}

function buildMysticRuinsDeck() {
  const deckName = "Mystic Ruins";
  createDeckAndDiscardPile(
    deckName,
    buildDeckBySpaces(deckData[deckName])
  );
}

function buildResearchDeck() {
  createDeckAndDiscardPile(
    "Research",
    buildDeck(deckData.Research[ancientOne])
  );
}

function buildSimpleDecks() {
  [
    "America", "Asia/Australia",
    "Devestation", "Dreamlands",
    "Europe",
    "General",
    "OtherWorld"
  ].forEach((deckName) => {
    createDeckAndDiscardPile(deckName, buildDeck(deckData[deckName]))
  });
}

function buildSpecialEncounterDecks() {
  const deckNames = [];
  const specialDecks = deckData.Special[ancientOne];

  for (const deckName in specialDecks) {
    const deck = buildDeck(specialDecks[deckName])

    if (deck.length > 0) {
      deckNames.push(deckName);
      createDeckAndDiscardPile(deckName, deck);
    }
  }

  return deckNames;
}

function createDeckAndDiscardPile(deckName, deck) {
  decks[deckName] = deck;
  discardPiles[deckName] = [];
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

function discard(deckName, card) {
  discardPiles[deckName].unshift(card);
}

function drawCard(deckName) {
  let deck = decks[deckName];
  if (deck.length === 0) {
    deck = discardPiles[deckName]; 
    shuffleArray(deck)
    createDeckAndDiscardPile(deckName, deck);
  }

  const card = deck.shift();

  discard(deckName, card);

  return card;
}

function drawCardFromButtonDeck(button) {
  button.remove();
  return drawCard(button.dataset.deckName);
}

function enableEncounterButtons() {
  updateEncounterButtons(false);
}

function endEncounter(buttonContainer, encounter, action, key) {
  enableEncounterButtons();
}

function hideId(id) {
  document.getElementById(id).style.display = "none";
}

function numUniqueSpacesInDeck(deckName) {
  const spaces = new Set();

  decks[deckName].forEach(card => {
    spaces.add(card.space);
  });

  return spaces.size;
}

function readAlound(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function removeDreamlandsButtons() {
  document.getElementById("dreamlands").remove();
}

function removeMysticRuinsButtons() {
  document.getElementById("mystic-ruins-buttons").remove();
}

function resolveCosmicAlignmentAdventureII(event, space, nextId) {
  showId(nextId);
  resolveMysticRuinsEncounterForSpace(event, space);
}

function resolveCosmicAlignmentAdventureIII(event, space) {
  resolveExpeditionEncounterForSpace(event, space);
}

function resolveExpeditionEncounterForSpace(event, space) {
  hideId(event.target.id);

  let deckName = "Expedition";
  if (useSecondExpeditionDeck()) {
    deckName += "-1"
  }

  let card = searchForCardForSpace(deckName, space);
  shuffleTopCardDeck(deckName, addExpeditionEncounterButton);
  if (!card) {
    deckName = "Expedition-2";
    card = searchForCardForSpace(deckName, space);
    shuffleTopCardDeck(deckName, addExpeditionEncounterButton);
  }

  discard(deckName, card);

  startExpeditionEncounterWith(card);
}

function resolveMysticRuinsEncounterForSpace(event, space) {
  hideId(event.target.id);

  const deckName = "Mystic Ruins";

  const card = searchForCardForSpace(deckName, space);

  shuffleMysticRuinsDeck();
  discard(deckName, card);

  startMysticRuinsEncounterWith(card);
}

function resolveSecretsOfThePastReckoning() {
  const buttons = Array.from(document.getElementsByClassName("encounter expedition"));
  const cardSpaces = new Set();
  const deckNames = [];
  
  buttons.forEach((button) => {
    // Draws the card from the button's deck
    // & removes the button from the DOM
    cardSpaces.add(drawCardFromButtonDeck(button).space);

    deckNames.push(button.dataset.deckName);
  });

  let expeditionDeckIsEmpty = false;

  deckNames.forEach((deckName) => {
    // Remove cards whose space matches the drawn card('s/s')
    decks[deckName] = decks[deckName].filter(
      (card) => !cardSpaces.has(card.space)
    );

    if (decks[deckName].length === 0) {
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

function searchForCardForSpaceInDeck(deck, space) {
  // Per the rules, "Search" means to start at the *bottom* of the deck
  const cardIndex = deck.findLastIndex(card => card.space === space);

  if (cardIndex === -1) {
    return null;
  }

  const card = deck.splice(cardIndex, 1)[0]; // remove the card from the deck
  return card;  
}

function searchForCardForSpace(deckName, space) {
  const deck = decks[deckName];
  let card = searchForCardForSpaceInDeck(deck, space);

  if (!card) {
    const discardPile = discardPiles[deckName];
    card = searchForCardForSpaceInDeck(discardPile, space);
  }

  return card;
}

function showId(id) {
  document.getElementById(id).style.display = "block";
}

function showOrHideDevestationEncounterButton() {
  if (decks.Devestation.length === 0) {
    hideId("devestation");
  }
}

function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

  return arr;
}

function shuffleDreamQuestDeck() {
  shuffleTopCardDeck("Dream-Quest", addDreamQuestEncounterButton);
}

function shuffleExpeditionDeck() {
  shuffleTopCardDeck("Expedition", addExpeditionEncounterButton);
}

function shuffleMysticRuinsDeck() {
  shuffleTopCardDeck("Mystic Ruins", addMysticRuinsEncounterButton);
}

function shuffleTopCardDeck(deckLabel, addButtonFunction) {
  const buttons = Array.from(document.querySelectorAll(`button.top-card[data-deck-name="${deckLabel}"]`));

  buttons.forEach(button => {
    button.remove();
    const deckName = button.dataset.deckName;
    shuffleArray(decks[deckName]);
    addButtonFunction(deckName);
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
  const card = drawCardFromButtonDeck(event.target);

  addDreamQuestEncounterButton();

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
  const button = event.target;
  const card = drawCardFromButtonDeck(button);
  
  addExpeditionEncounterButton(button.dataset.deckName);
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
  const card = drawCardFromButtonDeck(event.target);

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

showOrHideDevestationEncounterButton();

if (useSecondExpeditionDeck()) {
  addExpeditionEncounterButton("Expedition-1");
  addExpeditionEncounterButton("Expedition-2");
  document.getElementById("shuffle-expedition").textContent += "s";
} else {
  addExpeditionEncounterButton("Expedition");
}
updateSecretsOfThePastButton();

addSpecialEncounterButtons(buildSpecialEncounterDecks());
