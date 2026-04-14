'use strict';

const encounterData = {
  "location": {
    "city": {
      "Arkham": {
        deckName: "Americas",
        byExapansion: [
          {
            expansionId: 0,
            encounters: [
              {
                cardId: 1,
                type: "pass-fail",
                intro: "In the restricted section of Miskatonic University's library, you study an esoteric tome. Gain 1 Incantation Spell. You try to decode a note written in the margin; test Lore.",
                pass: "",
                fail: "The words put strange visions into your mind; gain a Hallucinations Condition."
              },
              {
                cardId: 2,
                type: "pass-fail",
                intro: "During the night, you have a nightmare about the old witch, Keziah Mason. In the dream, she shares her power with you; gain 1 Incantation Spell. When you wake up, you fear that the old witch will someday ask you for a favor in return; test Will+1.",
                pass: "",
                fail: "Gain a Paranoia Condition."
              },
              {
                cardId: 4,
                type: "may-do",
                intro: "An anonymous patient in the asylum pleads with you to share what you've learned. You may spend Clue 1 Clue to share what you know.",
                pass: "The man begins chanting in a long-dead language; gain 1 Incantation Spell.",
                fail: ""
              }
            ]
          }
        ]
      }
    }
  }
};

function addEncounterResult(elementToReplace, encounter, action, key) {
  const result = encounter[key];
  readAlound(result);

  let resultElement = document.createElement("p");
  resultElement.classList.add("encounter-result");
  resultElement.textContent = action;

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

  encounterElement.appendChild(createEncounterActionButtons(encounterElement, encounter));
  encounterElement.appendChild(document.createElement("hr"));
  return encounterElement;
}

function createEncounterActionButtons(encounterElement, encounter) {
  const buttonContainer = document.createElement("div");

  const button1 = document.createElement("button");
  const text1 = encounter.type === "may-do" ? "Do it" : "Pass";

  button1.textContent = text1;
  button1.onclick = () => {
    addEncounterResult(buttonContainer, encounter, text1, "pass");
    endEncounter();
  };

  const button2 = document.createElement("button");
  const text2 = encounter.type === "may-do" ? "Don't do it" : "Fail";
  button2.textContent = text2;
  button2.onclick = () => {
    addEncounterResult(buttonContainer, encounter, text2, "fail");
    endEncounter();
  };

  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);
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
  const encounters = city.byExapansion[0].encounters;
  const encounter = encounters[Math.floor(Math.random() * encounters.length)];

  presentEncounter(city.deckName, cityName, encounter);
}
