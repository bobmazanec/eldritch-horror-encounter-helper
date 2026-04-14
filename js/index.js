'use strict';

const encounterData = {
  "location": {
    "city": {
      "Arkham": {
        deck: "Americas",
        byExapansion: [
          {
            expansionId: 0,
            encounters: [
              {
                cardId: 1,
                intro: "In the restricted section of Miskatonic University's library, you study an esoteric tome. Gain 1 Incantation Spell. You try to decode a note written in the margin; test Lore.",
                pass: "",
                fail: "The words put strange visions into your mind; gain a Hallucinations Condition."
              }
            ]
          }
        ]
      }
    }
  }
};

function addEncounterResult(elementToReplace, encounter, key) {
  const result = encounter[key];
  readAlound(result);

  let resultElement = document.createElement("p");
  resultElement.classList.add("encounter-result");
  resultElement.textContent = key;

  elementToReplace.insertAdjacentElement("beforebegin", resultElement);
  
  resultElement = document.createElement("p");
  resultElement.classList.add("encounter-result");
  resultElement.textContent = result;
  
  elementToReplace.insertAdjacentElement("beforebegin", resultElement);
  elementToReplace.remove();
}

function createEncounterElement(deckName, cardId, cityName, encounter) {
  const encounterElement = document.createElement("div");
  encounterElement.classList.add("encounter");

  const headerElement = document.createElement("h3");
  headerElement.textContent = `${deckName} ${cardId}: ${cityName}`;
  encounterElement.appendChild(headerElement);

  const introElement = document.createElement("p");
  introElement.textContent = encounter.intro;
  encounterElement.appendChild(introElement); 

  encounterElement.appendChild(createPassFailButtons(encounterElement, encounter));
  encounterElement.appendChild(document.createElement("hr"));
  return encounterElement;
}

function createPassFailButtons(encounterElement, encounter) {
  const buttonContainer = document.createElement("div");

  const passButton = document.createElement("button");

  passButton.textContent = "Pass";
  passButton.onclick = () => {
    addEncounterResult(buttonContainer, encounter, "pass");
    endEncounter();
  };

  const failButton = document.createElement("button");
  failButton.textContent = "Fail";
  failButton.onclick = () => {
    addEncounterResult(buttonContainer, encounter, "fail");
    endEncounter();
  };

  buttonContainer.appendChild(passButton);
  buttonContainer.appendChild(failButton);
  return buttonContainer;
}

function disableEncounterButtons() {
  updateEncounterButtons(true);
}

function enableEncounterButtons() {
  updateEncounterButtons(false);
}

function endEncounter() {
  enableEncounterButtons();
}

function updateEncounterButtons(disabled) {
  document.querySelectorAll("button.encounter").forEach(button => {
    button.disabled = disabled;
  });
}

function presentEncounter(deckName, cityName, encounter) {
  disableEncounterButtons();

  const encounterElement = createEncounterElement(deckName, encounter.cardId, cityName, encounter)
  document.getElementById("encounterList").prepend(encounterElement);
  readAlound(encounter.intro);
}

function readAlound(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function readCityEncounter(cityName) {
  const city = encounterData.location.city[cityName];

  presentEncounter(city.deck, cityName, city.byExapansion[0].encounters[0]);
}
