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

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("encounter");
  button.classList.add(buttonClass);
  button.dataset.deckName = deckName;
  linkedCards[deckName] = card;
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

function buildExpeditionDecks() {
  const allExpeditionCards = buildDeckBySpaces(deckData.Expedition);
  if (useSecondExpeditionDeck()) {
    const halfwayPoint = Math.ceil(allExpeditionCards.length / 2);
    decks["Expedition-1"] = allExpeditionCards.slice(0, halfwayPoint);
    decks["Expedition-2"] = allExpeditionCards.slice(halfwayPoint);
  } else {
    decks["Expedition"] = allExpeditionCards;
  }   
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

function getLinkedCard(button) {
  const deckName = button.dataset.deckName;
  const card = linkedCards[deckName];

  button.remove();
  delete linkedCards[deckName];

  return card;
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

function resolveSecretsOfThePastReckoningFor(button) {
  const card = getLinkedCard(button);
  const space = card.space;
  const deckName = button.dataset.deckName;
  decks[deckName] = decks[deckName].filter(c => c.space !== space);
}

function resolveSecretsOfThePastReckoning() {
  const buttons = Array.from(document.getElementsByClassName("encounter expedition"));
  let expeditionDeckIsEmpty = false;
  
  buttons.forEach(button => {
    const deckName = button.dataset.deckName;

    resolveSecretsOfThePastReckoningFor(button);

    if (decks[deckName].length === 0) {
      expeditionDeckIsEmpty = true;
    } else {
      addExpeditionEncounterButton(deckName);
    }
  });

  if (expeditionDeckIsEmpty) {
    const article = useSecondExpeditionDeck() ? "An" : "The";
    alert(`${article} Expedition deck is empty - investigators lose the game.`);
  }
  updateSecretsOfThePastButton();
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

function shuffleDreamQuestDeck() {
  shuffleTopCardDeck("Dream-Quest", "dream-quest encounter", addDreamQuestEncounterButton);
}

function shuffleExpeditionDeck() {
  shuffleTopCardDeck("Expedition", "expedition encounter", addExpeditionEncounterButton);
}

function shuffleMysticRuinsDeck() {
  shuffleTopCardDeck("Mystic Ruins", "mystic-ruins encounter", addMysticRuinsEncounterButton);
}

function shuffleTopCardDeck(deckLabel, classList, addButtonFunction) {
  const buttons = Array.from(document.getElementsByClassName(classList));

  buttons.forEach(button => {
    const deckName = button.dataset.deckName;
    getLinkedCard(button);
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
  const card = getLinkedCard(event.target);

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
  const card = getLinkedCard(button);

  addExpeditionEncounterButton(button.dataset.deckName);

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
  const card = getLinkedCard(event.target);

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

function useMysticRuinsDeck() {
  // True if either of the Ancient Ones or Preludes,
  return (
    ["Antediluvium", "Syzygy"].includes(ancientOne) ||
    ["In Cosmic Alignment", "The Stars Align"].some(
      prelude => preludesUsed.includes(prelude)
    )
  );
}

function useSecondExpeditionDeck() {
  return preludesUsed.includes("Litany of Secrets");
}

buildSimpleDecks();
buildExpeditionDecks();
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
