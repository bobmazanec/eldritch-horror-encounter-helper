'use strict';

function addOtherworldlyDreamsIIIButton(buttonId) {
  removeElementWithId("otherworldly-dreams-III");
  showId(buttonId);
}

function addChoiceButtons(historyElement, encounterStep) {
  const buttonContainer = document.createElement("div");

  for (const label in encounterStep.choices) {
    const button = document.createElement("button");
    button.textContent = label;
    button.onclick = () => {
      addEncounterStep(historyElement, encounterStep.choices[label], buttonContainer, label);
    };

    buttonContainer.appendChild(button);
  }
  
  historyElement.appendChild(buttonContainer);
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

function addEncounterStep(historyElement, encounterStep, priorButtonContainer = null, action = null) {
  if (action && priorButtonContainer) {
    addEncounterAction(priorButtonContainer, action);
  }

  addEncounterStepText(historyElement, encounterStep);

  if (encounterStep.choices) {
    addChoiceButtons(historyElement, encounterStep);
  } else {
    endEncounter();
  }
}

function addEncounterStepText(historyElement, encounterStep) {
  let textItems;
  if (Array.isArray(encounterStep) || typeof(encounterStep) == "string") {
    textItems = encounterStep;
  } else {
    textItems = encounterStep.intro;
  }
  [textItems].flat().forEach(textItem => {
    const textElement = document.createElement("p");
    textElement.textContent = textItem;
    historyElement.appendChild(textElement);
    readAlound(textItem);
  });
}

function addExpeditionEncounterButton(deckName) {
  addTopCardButton(deckName, "expedition-buttons", "expedition", startExpeditionEncounter, card => {
    return `Start ${card.space} Expedition Encounter`;
  });
}

function addHistoryElement(headerText) {
  const historyElement = document.createElement("div");
  historyElement.appendChild(document.createElement("hr"));

  const headerElement = document.createElement("h3");
  headerElement.textContent = headerText;
  historyElement.appendChild(headerElement);

  document.getElementById("history").prepend(historyElement);

  return historyElement;
}

function addModifiedExpeditionDeckHistoryItem(title, spacesRemoved = new Set()) {
  const plural = useSecondExpeditionDeck() ? "s" : "";

  const historyElement = addHistoryElement(`${title} and shuffled the Expedition deck${plural}`);
  const textNode = document.createElement("div");

  textNode.innerHTML = `Check Expedition token location${plural}`
  
  if (spacesRemoved.size > 0) {
    textNode.innerHTML += '<br>Removed Expedition cards for';
    historyElement.appendChild(textNode);
    if (spacesRemoved.size == 1) {
      textNode.innerHTML += ' ' + spacesRemoved.values().next().value;
    } else {
      const ul = document.createElement('ul');
      Array
        .from(spacesRemoved)
        .sort()
        .forEach(space => {
          const li = document.createElement('li');
          li.textContent = space;
          ul.appendChild(li)
        });
      textNode.appendChild(ul);
    }
  }

  historyElement.appendChild(textNode);
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

function devestateCity(event, cityName) {
  event.target.disabled = true;
  const encounterButtonId = cityName.toLowerCase().replaceAll(/\s+/g, "-");
  const encounterButton = document.getElementById(encounterButtonId);

  encounterButton.textContent = "Start Devestation Encounter";
  encounterButton.onclick = startDevestationEncounter;

  const historyElement = addHistoryElement(`${cityName} is Devestated!`);
  const textNode = document.createElement("p");
  historyElement.appendChild(textNode);
  textNode.textContent = `Remove any Clues in ${cityName}`;

  removeExpeditionCardsFor(cityName, historyElement);
  removeMysticRuinsCardsFor(cityName, historyElement);
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

function getTopExpeditionCardSpaces(expeditionDecks) {
  return expeditionDecks.reduce(
    (spaces, deck) => {
      if (!deck.isEmpty()) {
        spaces.add(deck.topCard().space);
      }
      return spaces;
    },
    new Set()
  );
}

function numUniqueSpacesInDeck(deckName) {
  const spaces = new Set(decks[deckName].map(card => card.space));
  return spaces.size;
}

function putCrawlingChaosMythosIntoPlay(event) {
  event.target.remove();
  showId("resolve-crawling-chaos-reckoning");
  showId("solve-crawling-chaos");

  addHistoryElement("Put 'The Crawling Chaos' Mythos card into play");
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

function removeExpeditionCardsFor(cityName, historyElement) {
  const buttons = Array.from(document.getElementsByClassName("encounter expedition"));
  const expeditionDecks = buttons.map(button => removeTopCardButton(button));

  let removedCards = false;

  expeditionDecks.forEach(deck => {
    removedCards |= deck.removeCardsFromDrawStack(
      card => card.space === cityName
    );

    addExpeditionEncounterButton(deck.name);
  });

  if (removedCards) {
    const plural = useSecondExpeditionDeck() ? "s" : "";
    const textNode = document.createElement("p");

    historyElement.appendChild(textNode);
    textNode.textContent = `Removed ${cityName} from Expedition deck${plural} - check token location${plural}`;
  }
}

function removeMysticRuinsCardsFor(cityName, historyElement) {
  const button = document.querySelector("button.top-card.mystic-ruins");
  const deck = removeTopCardButton(button);
  const removedCards = deck.removeCardsFromDrawStack(
    // e.g., "Stonehenge (London)"
    card => card.space.includes(cityName)
  );
  addMysticRuinsEncounterButton(deck.name);

  if (removedCards) {
    const textNode = document.createElement("p");

    historyElement.appendChild(textNode);
    textNode.textContent = `Removed ${cityName} from Mystic Ruins deck - check token location`;
  }
}

function removeMysticRuinsButtons() {
  removeElementWithId("mystic-ruins-buttons");
}

function removeTopCardButton(button) {
  button.remove();
  return decks[button.dataset.deckName];
}

function removeTopExpeditionCardSpaceCards(expeditionDecks) {
  const cardSpaces = getTopExpeditionCardSpaces(expeditionDecks);

  // Remove cards whose space matches the top card('s/s')
  expeditionDecks.forEach(deck => {
    deck.removeCardsFromDrawStack(
      card => cardSpaces.has(card.space)
    );
  });
  
  return cardSpaces;
}

function resolveCosmicAlignmentAdventureII(event, space, nextId) {
  showId(nextId);
  resolveMysticRuinsEncounterForSpace(event, space);
}

function resolveCosmicAlignmentAdventureIII(event) {
  resolveExpeditionEncounterForSpace(event, event.target.dataset.space);
}

function resolveCrawlingChaosMythosReckoning() {
  const buttons = Array.from(document.getElementsByClassName("encounter expedition"));
  const expeditionDecks = buttons.map(button => removeTopCardButton(button));
  
  expeditionDecks.forEach(deck => {
    deck.drawCard();  // simply draw & discard
    addExpeditionEncounterButton(deck.name);
  });

  const plural = useSecondExpeditionDeck() ? "s" : "";

  const historyElement = addHistoryElement(`Discarded top Expedition card${plural}`);
  const textNode = document.createElement("p");

  textNode.textContent = `Check Expedition token location${plural}`
  historyElement.appendChild(textNode);
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

function resolveLeopardManSpawn(event) {
  event.target.remove();

  const buttons = Array.from(document.querySelectorAll("#expedition-buttons button.expedition.encounter"));
  let foundCard = false;

  buttons.forEach(button => {
    button.remove();
    const deck = decks[button.dataset.deckName];

    // Do not discard the found card, since it is being moved in the deck
    const card = deck.searchForCard(findCardForSpace("The Heart of Africa"), false);

    foundCard |= !!card;

    deck.shuffle();
    deck.putCardOnTop(card);

    addExpeditionEncounterButton(deck.name);
  });

  const plural = useSecondExpeditionDeck() ? "s" : "";

  addModifiedExpeditionDeckHistoryItem(
    `Resolved Leopard Man Spawn effect: ` +
    (foundCard ? `Moved` : "Unable to move") +
    ` Expedition token${plural} to The Heart of Africa`
  );
}

function resolveMysticRuinsEncounterForSpace(event, space) {
  event.target.remove();

  const deck = decks["Mystic Ruins"];
  const card = deck.searchForCard(findCardForSpace(space));

  shuffleMysticRuinsDeck();

  startMysticRuinsEncounterWith(card);
}

function resolveOtherworldlyDreamsAdventureIII(event, space) {
  resolveDreamQuestEncounterForSpace(event, space);
}

function resolveSecretsOfThePastReckoning() {
  const buttons = Array.from(document.querySelectorAll("button.expedition"));
  const cardSpaces = new Set();
  const deckNames = [];

  let expeditionDeckIsEmpty = false;
  
  buttons.forEach((button) => {
    const deck = removeTopCardButton(button);
    const card = deck.topCard();
    
    if (card) {
      cardSpaces.add(card.space);
      deckNames.push(deck.name);
    }
    expeditionDeckIsEmpty |= deck.isEmpty();
  });

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

  addModifiedExpeditionDeckHistoryItem("Resolved 'Secrets of the Past' Mythos Reckoning", cardSpaces)

  cardSpaces.forEach((space) => disableEncounterButtonsFor(space));

  if (expeditionDeckIsEmpty) {
    const article = useSecondExpeditionDeck() ? "An" : "The";
    alert(`${article} Expedition deck is empty - investigators lose the game.`);
  }
  updateSecretsOfThePastButton();
}

function resolveTheWorldShakesMythos(event) {
  event.target.remove();

  const buttons = Array.from(document.getElementsByClassName("encounter expedition"));
  const expeditionDecks = buttons.map(button => removeTopCardButton(button));
  const spacesRemoved = removeTopExpeditionCardSpaceCards(expeditionDecks);

  expeditionDecks.forEach(deck => addExpeditionEncounterButton(deck.name));
  updateSecretsOfThePastButton();

  addModifiedExpeditionDeckHistoryItem("Resolved 'The World Shakes' Mythos", spacesRemoved)
}

function resolveUpheavalDisaster(event) {
  event.target.parentElement.remove();

  const buttons = Array.from(document.getElementsByClassName("encounter expedition"));
  const expeditionDecks = buttons.map(button => removeTopCardButton(button));
  let spacesRemoved = new Set();

  for (let i = 0; i < 3; i++) {
    const cardSpacesRemoved = removeTopExpeditionCardSpaceCards(expeditionDecks);

    cardSpacesRemoved.forEach(space => disableEncounterButtonsFor(space));
    spacesRemoved = spacesRemoved.union(cardSpacesRemoved);
  }

  expeditionDecks.forEach(deck => addExpeditionEncounterButton(deck.name));
  updateSecretsOfThePastButton();

  addModifiedExpeditionDeckHistoryItem("Resolved 'Upheaval' Disaster", spacesRemoved)
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
  const historyElement = addHistoryElement(`Shuffled the ${deckLabel} deck${plural}`);

  const textNode = document.createElement("p");
  textNode.textContent = `Check ${deckLabel} token location${plural}`;
  historyElement.appendChild(textNode);
}

function solveCrawlingChaosMythosRumor() {
  removeElementWithId("crawling-chaos");
  addHistoryElement("Solved 'The Crawling Chaos' Rumor");
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

  const historyElement = addHistoryElement(headerText);
  historyElement.classList.add("encounter");

  addEncounterStep(historyElement, encounter);
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

function useCitiesInRuin() {
  return expansionsUsed.includes(CitiesInRuin);
}

function useMountainsOfMadness() {
  return expansionsUsed.includes(MountainsOfMadness);
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
  removeElementWithId("cities-in-ruin");
}

if (useCitiesInRuin()) {
  document.querySelectorAll("div .disaster").forEach(node => {
    node.style.display = "block";
  });
} else {
  removeElementWithId("spawn-leopard-man");
}

if (useMountainsOfMadness()) {
  showId("add-crawling-chaos");
} else {
  removeElementWithId("crawling-chaos");
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
