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

function addExpeditionEncounterButton() {
  addTopCardButton("Expedition", "expedition-buttons", "expedition", startExpeditionEncounter, card => {
    return `Start ${card.space} Expedition Encounter`;
  })
}

function addMysticRuinsEncounterButton() {
  addTopCardButton("Mystic Ruins", "mystic-ruins-buttons", "mystic-ruins", startMysticRuinsEncounter, card => {
    return `Start ${card.space} Mystic Ruins Encounter`;
  })
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
  const card = drawCard(deckName);
  const cardIdent = `${card.space} ${card.cardId}`

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("encounter");
  button.classList.add(buttonClass);
  button.dataset.cardIdent = cardIdent;
  linkedCard[cardIdent] = card;
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
  decks["Dream-Quest"] = buildDeckBySpaces(deckData["Dream-Quest"]);
}

function buildExpeditionDeck() {
  decks["Expedition"] = buildDeckBySpaces(deckData.Expedition);
}

function buildMysticRuinsDeck() {
  decks["Mystic Ruins"] = buildDeckBySpaces(deckData["Mystic Ruins"]);
}

function buildResearchDeck() {
  decks["Research"] = buildDeck(deckData.Research[ancientOne])
}

function buildSimpleDecks() {
  [
    "America", "Asia/Australia",
    "Devestation", "Dreamlands",
    "Europe",
    "General",
    "OtherWorld"
  ].forEach(deckName => {
    decks[deckName] = buildDeck(deckData[deckName]);
  });
}

function buildSpecialEncounterDecks() {
  const deckNames = [];
  const specialDecks = deckData.Special[ancientOne];

  for (const deckName in specialDecks) {
    const deck = buildDeck(specialDecks[deckName])

    if (deck.length > 0) {
      deckNames.push(deckName);
      decks[deckName] = deck;
    }
  }

  return deckNames;
}

function disableEncounterButtons() {
  updateEncounterButtons(true);
}

function drawCard(deckName) {
  const deck = decks[deckName];
  const card = deck.shift();

  deck.push(card); // return it to the bottom

  return card;
}

function enableEncounterButtons() {
  updateEncounterButtons(false);
}

function endEncounter(buttonContainer, encounter, action, key) {
  enableEncounterButtons();
}

function getLinkedCard(event) {
  const button = event.target;
  const cardIdent = button.dataset.cardIdent;
  const card = linkedCard[cardIdent];

  button.remove();
  delete linkedCard[cardIdent];

  return card;
}

function readAlound(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function removeDreamlandsButtons() {
  document.getElementById("dreamlands").remove();
}

function showOrHideDevestationEncounterButton() {
  const div = document.getElementById("devestation");
  if (decks.Devestation.length === 0) {
    div.style.display = "none";
  }
}

function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

  return arr;
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
  const card = getLinkedCard(event);

  addDreamQuestEncounterButton();

  startEncounter(
    `Dream-Quest - ${card.space}: ${card.cardId}`,
    card
  );
}

function startEncounter(headerText, encounter) {
  disableEncounterButtons();

  const encounterElement = document.createElement("div");
  encounterElement.classList.add("encounter");

  encounterElement.appendChild(document.createElement("hr"));

  const headerElement = document.createElement("h3");
  headerElement.textContent = headerText;
  encounterElement.appendChild(headerElement);

  addEncounterStep(encounterElement, encounter);

  document.getElementById("encounterList").prepend(encounterElement);
}

function startExpeditionEncounter(event) {
  const card = getLinkedCard(event);

  addExpeditionEncounterButton();

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
  const card = getLinkedCard(event);

  addMysticRuinsEncounterButton();

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

function useDreamlandsBoard() {
  return (
    ancientOne == "Hypnos" ||
    preludesUsed.includes("Otherworldly Dreams")
  );
}

function useMysticRuinsDeck() {
  // True if either of the Ancient Ones or Preludes,
  return (
    ["Antediluvium", "Syzygy"].includes(ancientOne) ||
    ["In Cosmic Alignment", "The Stars Align"].some(
      prelude => preludesUsed.includes(prelude)
    )
  );
}

buildSimpleDecks();
buildExpeditionDeck();
buildResearchDeck();

if (useDreamlandsBoard()) {
  buildDreamQuestDeck();
  addDreamQuestEncounterButton();
} else {
  removeDreamlandsButtons();
}

if (useMysticRuinsDeck()) {
  buildMysticRuinsDeck();
  addMysticRuinsEncounterButton();
}

showOrHideDevestationEncounterButton();

addExpeditionEncounterButton();
addSpecialEncounterButtons(buildSpecialEncounterDecks());
