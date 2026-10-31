'use strict';

let dialog;


function addChoiceButton(buttonContainer, text, onClick) {
  const button = document.createElement("button");
  button.innerHTML = text;
  button.onclick = onClick;

  buttonContainer.appendChild(button);
}

function addChoiceButtons(outerEncounterHeaderText, encounterStep, outerEncounterStep = null, continuationFunction = null) {
  const buttonContainer = document.createElement("div");

  if (!encounterStep.choices) {
    // Done with the 'inner' encounter; switch back to the 'outer'
    encounterStep = outerEncounterStep;
  }

  if (!encounterStep || !encounterStep.choices) {
      addChoiceButton(buttonContainer, "Continue", (event) => {
        endEncounter(event, continuationFunction);
      });
  } else {
    if (encounterStep === outerEncounterStep) {
      // Switching back to 'outer' - display the outer encounter header
      dialog.innerHTML += `<p><strong>${outerEncounterHeaderText}</strong></p>`;
      outerEncounterStep = null;
    }
    for (const label in encounterStep.choices) {
      addChoiceButton(buttonContainer, label, () => {
        addEncounterStep(outerEncounterHeaderText, encounterStep.choices[label], buttonContainer, label, outerEncounterStep);
      });
    }
  }
  
  dialog.appendChild(buttonContainer);
  dialog.querySelector("button")?.focus();
}

function addDreamQuestEncounterButton() {
  addTopCardButton(DreamQuest, "dream-quest-deck", "dream-quest", startDreamQuestEncounter, card => {
    return `Start <strong>${card.location}</strong> Dream-Quest Encounter`;
  });
}

function addEncounterAction(buttonContainer, action) {
  const actionElement = document.createElement("p");
  actionElement.classList.add("encounter-action");
  actionElement.textContent = action;

  buttonContainer.insertAdjacentElement("beforebegin", actionElement);
  buttonContainer.remove();
}

function addEncounterStep(
  outerEncounterHeaderText, encounterStep,
  priorButtonContainer = null,
  action = null,
  outerEncounterStep = null,
  afterContinueFunction = null
) {
  if (action && priorButtonContainer) {
    addEncounterAction(priorButtonContainer, action);
  }

  addEncounterStepText(outerEncounterHeaderText, encounterStep);

  let nestSpawnOfAbhoth = false;

  if (
    ancientOne === Abhoth &&
    encounterStep &&
    encounterStep.intro
  ) {
    if (includesCultistAmbush(encounterStep.intro)) {
      nestSpawnOfAbhoth = true;
    } else {
      if (includesMonsterAmbush(encounterStep.intro)) {
        encounterStep = {
          choices: {
            "Drew a Cultist Monster": {
              // Insert text to trigger Spawn of Abhoth
              intro: "A Cultist Monster ambushes you!",
              introVisible: false,
              choices: encounterStep.choices
            },

            "Did not draw a Cultist Monster": {
              intro: "",
              choices: encounterStep.choices
            }
          }
        }
      }
    }
  }

  if (nestSpawnOfAbhoth) {
    const spawnOfAbhoth = 'Spawn of Abhoth';

    // Copy the card to avoid modifying the original
    const card = {};
    Object.assign(card, drawCard(spawnOfAbhoth));

    // Make sure card intro is an array, with inner encounter's header prepended
    card.intro = [
      `<strong>${spawnOfAbhoth} ${card.cardId}</strong>`
    ].concat(
      Array(card.intro).flat()
    );

    // Add the encounter step for the Spawn of Abhoth card,
    // passing the combat resolution info for use when the inner encounter is resolved
    addEncounterStep(
      outerEncounterHeaderText, card,
      null, null,
      encounterStep.choices["Resolved the combat"]
    );
  } else {
    addChoiceButtons(
      outerEncounterHeaderText, encounterStep, outerEncounterStep,
      afterContinueFunction
    );
  }
}

function addEncounterStepText(outerEncounterHeaderText, encounterStep) {
  if (encounterStep.introVisible === false) return;
  
  let textItems;
  if (Array.isArray(encounterStep) || typeof(encounterStep) == "string") {
    textItems = encounterStep;
  } else {
    textItems = encounterStep.intro;
  }
  [textItems].flat().forEach(textItem => {
    const textElement = document.createElement("p");
    textElement.innerHTML = textItem;
    dialog.appendChild(textElement);
    readAlound(textElement.innerHTML);
  });
}

function addExpeditionEncounterButton(deckName) {
  addTopCardButton(deckName, "expedition-deck", "expedition", startExpeditionEncounter, card => {
    return `Start <strong>${card.location}</strong> Expedition Encounter`;
  });
}

function addHistoryElement(html, className = null) {
  const historyElement = document.createElement("div");

  if (className) {
    historyElement.classList.add(className);
  }

  historyElement.appendChild(document.createElement("hr"));

  historyElement.innerHTML += html;

  document.getElementById("history").prepend(historyElement);

  saveGame();

  return historyElement;
}

function addMysticRuinsEncounterButton(_) {
  addTopCardButton(MysticRuins, "mystic-ruins-deck", "mystic-ruins", startMysticRuinsEncounter, card => {
    return `Start <strong>${card.location}</strong> Mystic Ruins Encounter`;
  })
}

function addOtherworldlyDreamsButtons() {
  showId("otherworldly-dreams-III");
}

function addOtherworldlyDreamsIIIButton(buttonId) {
  removeElementWithId("otherworldly-dreams-III");
  showId(buttonId);
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
  if (deckNames.length === 0) {
    removeElementWithId("special-encounters-section");
    return;
  }

  const div = document.getElementById("special-decks");

  const aoImg = document.createElement("img");
  aoImg.src = makeImageName(`images/${ancientOne}.webp`);

  aoImg.style = "display: block";
  div.appendChild(aoImg);

  deckNames.forEach(deckName => {
    const img = document.createElement("img");
    img.src = makeImageName(`images/${deckName}.webp`);

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("encounter");
    button.onclick = () => startSpecialEncounter(deckName);

    button.appendChild(img);
    button.innerHTML += `<br>Start <strong>${deckName}</strong> Encounter`;
    div.appendChild(button);
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

    const img = document.createElement("img");
    img.src = `images/${buttonClass}/${makeImageName(card.location)}.webp`;
    button.appendChild(img);
    button.innerHTML += "<br>" + buttonTextFunction(card);
  } else {
    button.textContent = `The ${deckName} deck is empty`;
  }
  
  button.disabled = true;
  enableEncounterButton(button); // if appropriate

  document.getElementById(buttonContainerId).appendChild(button);
}

function affectTopCardDeck(deckLabel, deckClass, addButtonFunction, verb, deckActionFunction, afterAffectFunction = null) {
  let selector = `button.top-card.${deckClass}`;
  const buttons = Array.from(document.querySelectorAll(selector));

  buttons.forEach(button => {
    button.remove();
    const deck = removeTopCardButton(button);
    deckActionFunction(deck);
    addButtonFunction(deck.name);
  });
  
  const plural = buttons.length === 1 ? "" : "s";
  showDialog(
    `${verb} the ${deckLabel} deck${plural}`,
    `Check ${deckLabel} token location${plural}`,
    afterAffectFunction
  );
}

function buildDreamQuestDeck() {
  createDeckByLocation(DreamQuest);
}

function buildExpeditionDecks() {
  const allExpeditionCards = getCardsByLocation(deckData.Expedition);
  const wholeDeck = new deck(Expedition, allExpeditionCards);
  wholeDeck.shuffle();
  
  if (useSecondExpeditionDeck()) {
    const deckHalves = wholeDeck.splitDeckInTwo();
    createDeck(`${Expedition}-1`, deckHalves.shift());
    createDeck(`${Expedition}-2`, deckHalves.shift());
  } else {
    decks[Expedition] = wholeDeck;
  }
}

function buildMysticRuinsDeck() {
  createDeckByLocation(MysticRuins);
}

function buildOtherWorldDeck() {
  createDeckByLocation(OtherWorld);
}

function buildResearchDeck() {
  createDeck(Research, filterByExpansion(deckData.Research[ancientOne]));

  if (useAntarcticaBoard()) {
    createDeck(AntarcticaResearch, filterByExpansion(deckData.Research.Antarctica));
  }
}

function buildSimpleDecks() {
  [
    "Africa", "America", "Asia/Australia",
    Devastation, "Dreamlands",
    "Egypt", "Europe",
    General,
    "Mountain",
    "Outpost",
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

function createDeck(deckName, cards) {
  decks[deckName] = new deck(deckName, cards);
}

function createDeckByLocation(deckName) {
  createDeck(
    deckName,
    getCardsByLocation(deckData[deckName])
  );
}

function cycleEncounterDialogButtonFocus(event) {
  if (event.key !== "Tab") return;

  const buttons = Array.from(dialog.querySelectorAll("button:not(:disabled)"));
  if (buttons.length === 0) return;

  const currentIndex = buttons.indexOf(document.activeElement);
  const direction = event.shiftKey ? -1 : 1;
  const nextIndex = currentIndex === -1
    ? (event.shiftKey ? buttons.length - 1 : 0)
    : (currentIndex + direction + buttons.length) % buttons.length;

  event.preventDefault();
  buttons[nextIndex].focus();
}

function devastateCity(event, cityName) {
  recordDevastatedCity(cityName);

  // Removing would mess up the grid layout
  removeUIElement(event.currentTarget);

  const encounterButtonId = cityName.toLowerCase().replaceAll(/\s+/g, "-");
  removeElementWithId(encounterButtonId);

  const textNode = document.createElement("p");
  textNode.innerHTML = `Remove any Clues in <strong>${cityName}</strong>`;

  if (++numCitiesDevastated === 9) {
    alert(`All 9 named Cities are devastated - investigators lose the game.`);
  }

  removeExpeditionCardsFor(cityName, textNode);
  removeMysticRuinsCardsFor(cityName, textNode);

  saveGame();
  showDialog(`${cityName} is Devastated!`, textNode.innerHTML);
}

function disableEncounterButtons() {
  updateEncounterButtons(button => button.disabled = true);
}

function disableEncounterButtonsFor(space) {
  recordDisabledSpace(space);

  const buttons = document.querySelectorAll(`button[data-space="${space}"]`);
  buttons.forEach((button) => {
    // Disable it, and remove 'encounter' class
    // so it will not be re-enabled
    button.disabled = true;
    button.classList.add("no-cards-available");
    button.innerHTML += `<br>[No encounter cards remain for ${space}]`;
  });
}

function discardTopCard(deckLabel, deckClass, addButtonFunction) {
  affectTopCardDeck(
    deckLabel, deckClass, addButtonFunction,
    'Discarded top card from', deck => deck.drawCard()
  );
}

function discardTopDreamQuestCard() {
  discardTopCard(DreamQuest, 'dream-quest', addDreamQuestEncounterButton);
}

function discardTopExpeditionCard() {
  discardTopCard(Expedition, 'expedition', addExpeditionEncounterButton);
}

function drawCard(deckName) {
  return decks[deckName].drawCard();
}

function enableEncounterButton(button) {
  if (
    button.classList.contains("no-cards-available") ||
    (
      button.classList.contains("expedition") &&
      secretsOfThePastRumorInPlay
    )
  ) {
    return;
  }

  button.disabled = false;
}

function enableEncounterButtons() {
  updateEncounterButtons(enableEncounterButton);
}

function endEncounter(event, continuationFunction = null) {
  event.target.remove();
  dialog.close();
  addHistoryElement(dialog.innerHTML, "encounter");
  if (continuationFunction) continuationFunction();
}

function filterByExpansion(cards) {
  return cards.filter(
    card => expansionsUsed.includes(card.expansionId)
  );
}

function findCardForLocation(location) { return (card) => card.location === location; }

function getCardsByLocation(rawCardsByLocation) {
  const allCards = [];

  for (const location in rawCardsByLocation) {
    const cards = filterByExpansion(rawCardsByLocation[location]);
    cards.forEach(card => {
      card.location = location;
      allCards.push(card)
    });
  };

  return allCards;
}

function getTopExpeditionCardLocations(expeditionDecks) {
  return expeditionDecks.reduce(
    (spaces, deck) => {
      if (!deck.isEmpty()) {
        spaces.add(deck.topCard().location);
      }
      return spaces;
    },
    new Set()
  );
}

function includesCultistAmbush(encounterStep) {
  return includesMatch(encounterStep, /cultist monster ambushes/i);
}

function includesMatch(encounterStep, regex) {
  return Array(encounterStep).flat().find(
    (text) => text.match(regex)
  ) !== undefined;
}

function includesMonsterAmbush(encounterStep) {
  return includesMatch(encounterStep, /a monster ambushes/i);
}

function initializeGame(restoreDecks = false) {
  if (!restoreDecks) {
    resetGameUIState();
    buildSimpleDecks();
    buildDreamQuestDeck();
    buildExpeditionDecks();
    buildMysticRuinsDeck();
    buildOtherWorldDeck();
    buildResearchDeck();
  }

  addDreamQuestEncounterButton();
  addMysticRuinsEncounterButton();

  if (ancientOne !== Hypnos) {
    // "Discard the top card of the Dream-Quest deck" available only in Hyphos Research encounters
    removeElementWithId("discard-top-dream-quest");
  }

  showId("add-secrets-of-the-past");

  if (useCosmicAlignmentAdventure()) {
    showId("cosmic-alignment");
    showId("add-ruins-in-the-heart-of-the-jungle");
    showId("add-ruins-under-the-stars");
  }

  if (useOtherworldlyDreamsAdventure()) {
    showId("otherworldly-dreams");
    showId("add-aboard-the-black-galley");
    showId("add-beyond-the-river-skai");
    showId("add-the-blessings-of-nodens");
  }

  if (preludesUsed.includes(OtherworldlyDreams)) {
    addOtherworldlyDreamsButtons();
  }

  if (useMountainsOfMadness()) {
    showId("add-crawling-chaos");
  } else {
    removeElementWithId("crawling-chaos");
  }

  if (useSecondExpeditionDeck()) {
    addExpeditionEncounterButton(`${Expedition}-1`);
    addExpeditionEncounterButton(`${Expedition}-2`);
    document.getElementById("discard-top-expedition").textContent += "s";
    document.getElementById("shuffle-expedition").textContent += "s";
  } else {
    addExpeditionEncounterButton(Expedition);
  }

  if (expansionsUsed.includes(UnderThePyramids)) {
    // Monterrey Jack and his Active ability might be in play
    showId("discard-top-expedition");
  }

  const specialDeckNames = restoreDecks
    ? Object.keys(deckData.Special[ancientOne] || {}).filter(deckName => decks[deckName])
    : buildSpecialEncounterDecks();
  addSpecialEncounterButtons(specialDeckNames);

  setupSectionVisibility({
    Adventure: { selector: "#adventures-section", isVisible: useCosmicAlignmentAdventure() || useOtherworldlyDreamsAdventure() },
    Africa: { selector: "#africa-section", isVisible: useEgyptBoard() },
    America: { selector: "#america-section", isVisible: true },
    "Antarctica Research": { selector: "#antarctica-research-section", isVisible: useAntarcticaBoard() },
    "Asia/Australia": { selector: "#asia-australia-section", isVisible: true },
    Devastation: { selector: "#devastation-section", isVisible: useCitiesInRuin() },
    Disaster: { selector: "#disaster-section", isVisible: useCitiesInRuin() },
    "Dream-Quest": { selector: "#dream-quest-section", isVisible: useDreamlandsBoard() },
    "The Dreamlands": { selector: "#dreamlands-section", isVisible: useDreamlandsBoard() },
    Egypt: { selector: "#egypt-section", isVisible: useEgyptBoard() },
    Europe: { selector: "#europe-section", isVisible: true },
    Expedition: { selector: "#expedition-section", isVisible: true },
    General: { selector: "#general-section", isVisible: true },
    Monster: { selector: "#monsters-section", isVisible: useCitiesInRuin() },
    Mountain: { selector: "#mountain-section", isVisible: useAntarcticaBoard() },
    "Mystic Ruins": { selector: "#mystic-ruins-section", isVisible: useMysticRuinsDeck() },
    Mythos: { selector: "#mythos-section", isVisible: true },
    "Other World": { selector: "#other-world-section", isVisible: true },
    Outpost: { selector: "#outpost-section", isVisible: useAntarcticaBoard() },
    Research: { selector: "#research-section", isVisible: true },
    Special: { selector: "#special-encounters-section", isVisible: document.getElementById("special-encounters-section") != null }
  });

  dialog = document.getElementById("encounter-dialog");
  dialog.addEventListener("keydown", cycleEncounterDialogButtonFocus);
  startTrackingGameUIState();
  saveGame();
}
function makeImageName(name) {
  return name.replace(/\s+/g, "_");
}

function numUniqueLocationsInDeck(deckName) {
  const locations = new Set(decks[deckName].map(card => card.location));
  return locations.size;
}

function putCrawlingChaosRumorIntoPlay(event) {
  removeUIElement(event.currentTarget);
  showId("resolve-crawling-chaos-reckoning");
  showId("solve-crawling-chaos");

  addHistoryElement(`<strong>Put <em>${TheCrawlingChaos}</em> Rumor into play</strong>`);
}

function putSecretsOfThePastRumorIntoPlay(event) {
  removeUIElement(event.currentTarget);
  showId("resolve-secrets-of-the-past");
  showId("solve-secrets-of-the-past");
  updateSecretsOfThePastButton();

  secretsOfThePastRumorInPlay = true;

  // Disable, then re-enable if approriate
  disableEncounterButtons();
  enableEncounterButtons();

  addHistoryElement(`<strong>Put <em>${SecretsOfThePast}</em> Rumor into play</strong>`);
}

function readAlound(text) {
  const spokenText = text.replace(
    /<img\b[^>]*?\bsrc="images\/([^.]*)\.[^"]*"[^>]*>\s*(?:([+-])\s*(\d+))?/gi,
    (_match, skill, sign, modifier) => {
      if (!sign) return skill;
      return `${skill} ${sign === "+" ? "plus" : "minus"} ${modifier}`;
    }
  );
  const utterance = new SpeechSynthesisUtterance(spokenText);
  speechSynthesis.speak(utterance);
}

function removeElementWithId(id) {
  removeUIElement(document.getElementById(id));
}

function removeExpeditionCardsFor(cityName, historyElement) {
  const buttons = Array.from(document.querySelectorAll("button.expedition.top-card"));
  const expeditionDecks = buttons.map(button => removeTopCardButton(button));

  let removedCards = false;

  expeditionDecks.forEach(deck => {
    removedCards |= deck.removeCardsFromDrawStack(
      card => card.location === cityName
    );

    addExpeditionEncounterButton(deck.name);
  });

  if (removedCards) {
    const plural = useSecondExpeditionDeck() ? "s" : "";
    const textNode = document.createElement("p");

    historyElement.appendChild(textNode);
    textNode.innerHTML = `Removed <strong>${cityName}</strong> from Expedition deck${plural} - check token location${plural}`;
  }
}

function removeMysticRuinsCardsFor(cityName, historyElement) {
  const button = document.querySelector("button.top-card.mystic-ruins");
  const deck = removeTopCardButton(button);
  const removedCards = deck.removeCardsFromDrawStack(
    // e.g., "Stonehenge (London)"
    card => card.location.includes(cityName)
  );
  addMysticRuinsEncounterButton(deck.name);

  if (removedCards) {
    const textNode = document.createElement("p");

    historyElement.appendChild(textNode);
    textNode.innerHTML = `Removed <strong>${cityName}</strong> from Mystic Ruins deck - check token location`;
  }
}

function removeTopCardButton(button) {
  button.remove();
  return decks[button.dataset.deckName];
}

function removeTopExpeditionCardSpaceCards(expeditionDecks) {
  const cardLocations = getTopExpeditionCardLocations(expeditionDecks);

  // Remove cards whose location matches the top card('s/s')
  expeditionDecks.forEach(deck => {
    deck.removeCardsFromDrawStack(
      card => cardLocations.has(card.location)
    );
  });
  
  return cardLocations;
}

function removeUIElement(element) {
  recordRemovedElement(element);
  element.remove();
}

function resolveCosmicAlignmentAdventureII(event, location, nextId) {
  showId(nextId);
  resolveMysticRuinsEncounterForSpace(event, location);
}

function resolveCosmicAlignmentAdventureIII(event) {
  removeUIElement(event.currentTarget.parentElement);
  resolveExpeditionEncounterForSpace(event, event.currentTarget.dataset.space);
}

function resolveCrawlingChaosRumorReckoning() {
  const buttons = Array.from(document.querySelectorAll("button.expedition.top-card"));
  const expeditionDecks = buttons.map(button => removeTopCardButton(button));
  
  expeditionDecks.forEach(deck => {
    deck.drawCard();  // simply draw & discard
    addExpeditionEncounterButton(deck.name);
  });

  const plural = useSecondExpeditionDeck() ? "s" : "";

  showDialog(
    `Resolved <em>${TheCrawlingChaos}</em> Reckoning effect`,
    `<p>Discarded top Expedition card${plural}</p>` +
    `<p>Check Expedition token location${plural}</p>`
  );
}

function resolveDreamQuestEncounterForSpace(event, space) {
  removeUIElement(event.currentTarget);

  const deck = decks[DreamQuest];
  const card = deck.searchForCard(findCardForLocation(space));

  shuffleDreamQuestDeck();

  startDreamQuestEncounterWith(card);
}

function resolveExpeditionEncounterForSpace(event, space) {
  removeUIElement(event.currentTarget);

  let deckName = Expedition;
  if (useSecondExpeditionDeck()) {
    deckName += "-1"
  }

  let deck = decks[deckName];
  let card = deck.searchForCard(findCardForLocation(space));

  if (!card && useSecondExpeditionDeck()) {
    deck = decks[`${Expedition}-2`];
    card = deck.searchForCard(findCardForLocation(space));
  }

  shuffleExpeditionDeck(
    () => startExpeditionEncounterWith(card)
  );
}

function resolveLeopardManSpawn(event) {
  const buttons = Array.from(document.querySelectorAll("#expedition-section button.expedition.top-card"));
  let foundCard = false;

  buttons.forEach(button => {
    button.remove();
    const deck = decks[button.dataset.deckName];

    // Do not discard the found card, since it is being moved in the deck
    const card = deck.searchForCard(findCardForLocation(TheHeartOfAfrica), false);

    foundCard |= !!card;

    deck.shuffle();
    deck.putCardOnTop(card);

    addExpeditionEncounterButton(deck.name);
  });

  const plural = useSecondExpeditionDeck() ? "s" : "";

  showDialog(
    'Resolved <em>Leopard Man</em> Spawn effect',
    (foundCard ? `Moved` : "Unable to move") +
    ` Expedition token${plural} to <strong>${TheHeartOfAfrica}</strong>`
  );
}

function resolveMysticRuinsEncounterForSpace(event, space) {
  removeUIElement(event.currentTarget);

  const deck = decks[MysticRuins];
  const card = deck.searchForCard(findCardForLocation(space));

  shuffleMysticRuinsDeck(
    () => startMysticRuinsEncounterWith(card, true)
  );
}

function resolveOtherworldlyDreamsAdventureIII(event, space) {
  removeUIElement(event.currentTarget.parentElement);
  resolveDreamQuestEncounterForSpace(event, space);
}

function resolveSecretsOfThePastRumorReckoning() {
  const buttons = Array.from(document.querySelectorAll("button.expedition.top-card"));
  const cardSpaces = new Set();
  const deckNames = [];

  let expeditionDeckIsEmpty = false;
  
  buttons.forEach((button) => {
    const deck = removeTopCardButton(button);
    const card = deck.topCard();
    
    if (card) {
      cardSpaces.add(card.location);
      deckNames.push(deck.name);
    }
    expeditionDeckIsEmpty |= deck.isEmpty();
  });

  deckNames.forEach(deckName => {
    const deck = decks[deckName];

    // Remove cards whose space matches the drawn card('s/s')
    deck.removeCardsFromDrawStack(
      card => cardSpaces.has(card.location)
    );

    if (deck.isEmpty()) {
      expeditionDeckIsEmpty = true;
    } else {
      deck.shuffle();
      addExpeditionEncounterButton(deckName);
    }
  });
  
  enableEncounterButtons();

  showExpeditionDeckChange(`Resolved <em>${SecretsOfThePast}</em> Rumor Reckoning`, cardSpaces)

  cardSpaces.forEach((space) => disableEncounterButtonsFor(space));

  if (expeditionDeckIsEmpty) {
    const article = useSecondExpeditionDeck() ? "An" : "The";
    alert(`${article} Expedition deck is empty - investigators lose the game.`);
  }
  updateSecretsOfThePastButton();
}

function resolveTheWorldShakesMythos(event) {
  removeUIElement(event.currentTarget.parentElement);

  const buttons = Array.from(document.getElementsByClassName("expedition top-card"));
  const expeditionDecks = buttons.map(button => removeTopCardButton(button));
  const spacesRemoved = removeTopExpeditionCardSpaceCards(expeditionDecks);

  spacesRemoved.forEach(space => disableEncounterButtonsFor(space));

  expeditionDecks.forEach(deck => {
    deck.shuffle();
    addExpeditionEncounterButton(deck.name);
  });
  updateSecretsOfThePastButton();

  showExpeditionDeckChange("Resolved <em>The World Shakes</em> Event", spacesRemoved)
}

function resolveUpheavalDisaster(event) {
  removeUIElement(event.currentTarget);

  const buttons = Array.from(document.getElementsByClassName("encounter top-card expedition"));
  const expeditionDecks = buttons.map(button => removeTopCardButton(button));
  let spacesRemoved = new Set();

  for (let i = 0; i < 3; i++) {
    const cardSpacesRemoved = removeTopExpeditionCardSpaceCards(expeditionDecks);

    cardSpacesRemoved.forEach(space => disableEncounterButtonsFor(space));
    spacesRemoved = spacesRemoved.union(cardSpacesRemoved);
  }

  expeditionDecks.forEach(deck => {
    deck.shuffle();
    addExpeditionEncounterButton(deck.name);
  });
  updateSecretsOfThePastButton();

  showExpeditionDeckChange("Resolved 'Upheaval' Disaster", spacesRemoved)
}

function setupSectionVisibility(sectionVisibility) {
  const fieldset = document.querySelector("fieldset.visibility");
  const template = document.getElementById("sectionVisibilityItemTemplate");

  fieldset.querySelector("#hide-all-sections").addEventListener("click", () => {
    fieldset.querySelectorAll("input[type='checkbox'][data-section]").forEach(checkbox => {
      if (checkbox.checked) {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event("change"));
      }
    });
  });

  Object.entries(sectionVisibility).forEach(([sectionName, config]) => {
    const sectionElement = document.querySelector(config.selector);

    if (!sectionElement) {
      return;
    }

    if (config.isVisible) {
      const label = template.content.firstElementChild.cloneNode(true);
      const checkbox = label.querySelector("input");
      label.append(` ${sectionName}`);
      checkbox.dataset.section = sectionName;
      checkbox.dataset.selector = config.selector;
      checkbox.addEventListener("change", () => {
        sectionElement.classList.toggle("section-hidden", !checkbox.checked);
        recordSectionVisibility(sectionName, checkbox.checked);
      });
      fieldset.appendChild(label);
    } else {
      sectionElement.classList.add("section-hidden");
    }
  });

  fieldset.append(
    document.createElement("br"),
    fieldset.querySelector("#hide-all-sections")
  );
}

function showDialog(headerText, encounter, afterContinueFunction = null) {
  dialog.innerHTML = "";

  const headerElement = document.createElement("strong");
  headerElement.innerHTML = headerText;
  dialog.appendChild(headerElement);

  addEncounterStep(
    headerText, encounter,
    null, null, null,
    afterContinueFunction
  );

  dialog.showModal();
}

function showExpeditionDeckChange(title, spacesRemoved = new Set()) {
  const plural = useSecondExpeditionDeck() ? "s" : "";
  const textNode = document.createElement("div");
  
  if (spacesRemoved.size > 0) {
    textNode.innerHTML += 'Removed Expedition cards for';
    if (spacesRemoved.size == 1) {
      textNode.innerHTML += ' <strong>' + spacesRemoved.values().next().value + '</strong><br>';
    } else {
      const ul = document.createElement('ul');
      Array
        .from(spacesRemoved)
        .sort()
        .forEach(space => {
          const li = document.createElement('li');
          li.innerHTML = '<strong>' + space + '</strong>';
          ul.appendChild(li)
        });
      textNode.appendChild(ul);
    }
  }

  textNode.innerHTML += `Shuffled the Expedition deck${plural}—check Expedition token location${plural}`

  showDialog(title, textNode.innerHTML);
}

function showId(id) {
  recordShownId(id);
  document.getElementById(id).style.display = "block";
}

function shuffleDreamQuestDeck() {
  shuffleTopCardDeck(DreamQuest, 'dream-quest', addDreamQuestEncounterButton);
}

function shuffleExpeditionDeck(afterShuffleFunction = null) {
  shuffleTopCardDeck(Expedition, 'expedition', addExpeditionEncounterButton, afterShuffleFunction);
}

function shuffleMysticRuinsDeck(afterShuffleFunction = null) {
  shuffleTopCardDeck(MysticRuins, 'mystic-ruins', addMysticRuinsEncounterButton, afterShuffleFunction);
}

function shuffleTopCardDeck(deckLabel, deckClass, addButtonFunction, afterShuffleFunction = null) {
  affectTopCardDeck(
    deckLabel, deckClass, addButtonFunction,
    'Shuffled', deck => deck.shuffle(),
    afterShuffleFunction
  );
}

function solveCrawlingChaosRumor() {
  removeElementWithId("crawling-chaos");
  addHistoryElement(`<strong>Solved <em>${TheCrawlingChaos}</em> Rumor</strong>`);
}

function solveSecretsOfThePast(event) {
  removeElementWithId("secrets-of-the-past");

  // Update state before adding the history element, which saves the game
  secretsOfThePastRumorInPlay = false;

  addHistoryElement(`<strong>Solved <em>${SecretsOfThePast}</em> Rumor</strong>`);
  
  enableEncounterButtons();
}

function startDevastationEncounter(spaceType) {
  const card = drawCard(Devastation);

  showDialog(
    `Devastation: ${card.cardId}`,
    card
  );
}

function startDreamQuestEncounter(event) {
  const deck = removeTopCardButton(event.currentTarget);
  const card = deck.drawCard();

  addDreamQuestEncounterButton();

  startDreamQuestEncounterWith(card);
}

function startDreamQuestEncounterWith(card) {
  showDialog(
    `Dream-Quest - ${card.location}: ${card.cardId}`,
    card
  );
}

function startExpeditionEncounter(event) {
  const deck = removeTopCardButton(event.currentTarget);
  const card = deck.drawCard();
  
  addExpeditionEncounterButton(deck.name);
  updateSecretsOfThePastButton();

  startExpeditionEncounterWith(card);
}

function startExpeditionEncounterWith(card) {
  showDialog(
    `Expedition - ${card.location}: ${card.cardId}`,
    card
  );
}

function startGeneralEncounter(spaceType) {
  const card = drawCard(General);

  showDialog(
    `General ${card.cardId}: ${spaceType}`,
    card[spaceType]
  );
}

function startLocationEncounter(deckName, cityName) {
  const card = drawCard(deckName);

  showDialog(
    `${deckName} ${card.cardId}: ${cityName}`,
    card[cityName]
  );
}

function startMysticRuinsEncounter(event) {
  const deck = removeTopCardButton(event.currentTarget);
  const card = deck.drawCard();

  addMysticRuinsEncounterButton();

  startMysticRuinsEncounterWith(card);
}

function startMysticRuinsEncounterWith(card) {
  showDialog(
    `Mystic Ruins - ${card.location}: ${card.cardId}`,
    card
  );
}

function startOtherWorldEncounter() {
  const card = drawCard(OtherWorld);

  showDialog(
    `Other World ${card.cardId}: ${card.location}`,
    card
  );
}

function startResearchEncounter(spaceType) {
  const card = drawCard(Research);

  showDialog(
    `Research - ${ancientOne} ${card.cardId}: ${spaceType}`,
    card[spaceType]
  );
}

function startSpecialEncounter(deckName) {
  const card = drawCard(deckName);

  showDialog(
    `${deckName} ${card.cardId}`,
    card
  );
}

function updateEncounterButtons(updateButton) {
  document
    .querySelectorAll("button.encounter")
    .forEach(updateButton);
}

function updateSecretsOfThePastButton() {
  const button = document.getElementById("resolve-secrets-of-the-past");
  if (!button) return;

  let text = `Resolve the <strong>${SecretsOfThePast}</strong> Rumor Reckoning effect<br>`;

  if (useSecondExpeditionDeck()) {
    const spaces1 = numUniqueLocationsInDeck(`Expedition-1`);
    const spaces2 = numUniqueLocationsInDeck(`Expedition-2`);
    text += `The Expedition decks have ${spaces1} and ${spaces2} unique spaces remaining, respectively`;
  } else {
    const spaces = numUniqueLocationsInDeck(Expedition);
    const plural = spaces === 1 ? "" : "s";
    text += `The Expedition deck has ${spaces} unique space${plural} remaining`;
  }

  button.innerHTML = text;
}

function useAntarcticaBoard() {
  return (
    ancientOne == ElderThings ||
    preludesUsed.includes(DoomsayerFromAntarctica)
  );
}

function useCitiesInRuin() {
  return expansionsUsed.includes(CitiesInRuin);
}

function useCosmicAlignmentAdventure() {
  return preludesUsed.includes(InCosmicAlignment);
}

function useDreamlandsBoard() {
  return (
    ancientOne == Hypnos ||
    preludesUsed.includes(OtherworldlyDreams)
  );
}

function useEgyptBoard() {
  return (
    expansionsUsed.includes(UnderThePyramids) && (
      ancientOne == NephrenKa ||
      preludesUsed.includes(InTheLightlessChamber) ||
      preludesUsed.includes(UnderThePyramids)
    )
  );
}

function useMountainsOfMadness() {
  return expansionsUsed.includes(MountainsOfMadness);
}

function useMysticRuinsDeck() {
  // True if either of the Ancient Ones or Preludes,
  return (
    [Antediluvium, Syzygy].includes(ancientOne) ||
    preludesUsed.includes(TheStarsAlign) ||
    useCosmicAlignmentAdventure()
  );
}

function useOtherworldlyDreamsAdventure() {
  return preludesUsed.includes(OtherworldlyDreams);
}

function useSecondExpeditionDeck() {
  return preludesUsed.includes(LitanyOfSecrets);
}


renderExpansionSelection();
