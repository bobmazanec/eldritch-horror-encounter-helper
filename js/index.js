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
                intro: "An anonymous patient in the asylum pleads with you to share what you've learned. You may spend 1 Clue to share what you know.",
                pass: "The man begins chanting in a long-dead language; gain 1 Incantation Spell.",
                fail: ""
              },
              {
                cardId: 7,
                type: "choiceless",
                intro: "The administrators of Arkham's Historical Society take great pains to show you their extensive collection of historical documents. You may become Delayed to gain 2 Spells.",
              }
            ]
          }
        ]
      }
    }
  },

  "otherWorld": {
    encounters: [
      {
        cardId: 7,
        location: "The Dreamlands",
        intro: "In the cavern of flame, the bearded priests Nasht and Kaman-Thah warn you that it is too dangerous to continue. You insist that you possess the knowledge you need and are resolved to enter the Dreamlands; test Will-1. Roll 1 additional die for each Clue you have.",

        pass: {
          type: "pass-fail",
          intro: "After gaining access to the Dreamlands, you find yourself fighting moonbeasts on a black galley sailing to the moon; test Strength.",
          pass: "You steal their treasure and area able to barter with it; close this Gate.",
          fail: "You become lost in a forest on the moon; lose Health 2 Health and become Delayed."
        },
        fail: {
          type: "choiceless",
          intro: "The gods of dreams exile you back to the waking world and punish you for your overreaching ambition. Your dream and the waking world become indistinguishable. Become Delayed and gain a Hallucinations Condition."
        }
      }
    ]
  }
};

function addEncounterAction(buttonContainer, action) {
  const actionElement = document.createElement("p");
  actionElement.classList.add("encounter-action");
  actionElement.textContent = action;

  buttonContainer.insertAdjacentElement("beforebegin", actionElement);
}

function addEncounterResult(buttonContainer, encounter, action, key) {
  if (!buttonContainer) { return }

  addEncounterAction(buttonContainer, action);

  const result = encounter[key];
  readAlound(result);

  const resultElement = document.createElement("p");
  resultElement.classList.add("encounter-result");
  resultElement.textContent = result;
  
  buttonContainer.insertAdjacentElement("beforebegin", resultElement);
  buttonContainer.remove();
}

function addEncounterStep(encounterElement, encounter, nextStepFunction) {
  addIntroElement(encounterElement, encounter.intro);
  if (encounter.type === "choiceless") {
    endEncounter();
  } else {
    addActionButtons(encounterElement, encounter, nextStepFunction);
  }
}

function addIntroElement(encounterElement, intro) {
  const introElement = document.createElement("p");
  introElement.textContent = intro;
  encounterElement.appendChild(introElement);
  readAlound(intro);
}

function addActionButtons(encounterElement, encounter, nextStepFunction) {
  const buttonContainer = document.createElement("div");

  const button1 = document.createElement("button");
  const text1 = encounter.type === "may-do" ? "Do it" : "Pass";

  button1.textContent = text1;
  button1.onclick = () => {
    nextStepFunction(buttonContainer, encounter, text1, "pass");
  };

  const button2 = document.createElement("button");
  const text2 = encounter.type === "may-do" ? "Don't do it" : "Fail";
  button2.textContent = text2;
  button2.onclick = () => {
    nextStepFunction(buttonContainer, encounter, text2, "fail");
  };

  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);
  
  encounterElement.appendChild(buttonContainer);
}

function continueComplexEncounter(buttonContainer, encounter, action, key) {
  addEncounterAction(buttonContainer, action);
  addEncounterStep(buttonContainer.parentElement, encounter[key], endSimpleEncounter);
  buttonContainer.remove();
}

function disableEncounterButtons() {
  updateEncounterButtons(true);
}

function enableEncounterButtons() {
  updateEncounterButtons(false);
}

function endEncounter(buttonContainer, encounter, action, key) {
  addEncounterResult(buttonContainer, encounter, action, key);
  enableEncounterButtons();
}

function endSimpleEncounter(buttonContainer, encounter, action, key) {
  endEncounter(buttonContainer, encounter, action, key);
}

function readAlound(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function startCityEncounter(cityName) {
  const city = encounterData.location.city[cityName];
  const encounters = city.byExapansion[0].encounters;
  const encounter = encounters[Math.floor(Math.random() * encounters.length)];

  startEncounter(
    `${city.deckName} ${encounter.cardId}: ${cityName}`,
    endSimpleEncounter,
    encounter
  );
}

function startEncounter(headerText, nextStepFunction, encounter) {
  disableEncounterButtons();

  const encounterElement = document.createElement("div");
  encounterElement.classList.add("encounter");

  encounterElement.appendChild(document.createElement("hr"));

  const headerElement = document.createElement("h3");
  headerElement.textContent = headerText;
  encounterElement.appendChild(headerElement);

  addEncounterStep(encounterElement, encounter, nextStepFunction);

  document.getElementById("encounterList").prepend(encounterElement);
}

function startOtherWorldEncounter() {
  const encounters = encounterData.otherWorld.encounters;
  const encounter = encounters[Math.floor(Math.random() * encounters.length)];

  startEncounter(
    `Other World ${encounter.cardId}: ${encounter.location}`,
    continueComplexEncounter,
    encounter
  );
}

function updateEncounterButtons(disabled) {
  document.querySelectorAll("button.encounter").forEach(button => {
    button.disabled = disabled;
  });
}
