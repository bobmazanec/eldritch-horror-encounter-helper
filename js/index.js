'use strict';

const Base = 0;
const ForsakenLore = 1;

const deckData = {
  America: {
    byExpansion: [
      {
        expansionId: Base,
        cards: [
          {
            cardId: 1,
            encounters: {
              Arkham: {
                type: "pass-fail",
                intro: "In the restricted section of Miskatonic University's library, you study an esoteric tome. Gain 1 Incantation Spell. You try to decode a note written in the margin; test Lore.",
                pass: "",
                fail: "The words put strange visions into your mind; gain a Hallucinations Condition."
              },

              "Buenos Aires": {
                type: "pass-fail",
                intro: "In an ancient underground chamber, you study strange scientific and magic paraphernalia once used by the Serpent Men; test Lore.",
                pass: "You manipulate the devices to transform yourself and gain a Blessed Condition.",
                fail: "The devices remain utterly alien; lose Sanity 2 Sanity."
              },

              "San Francisco": {
                type: "choiceless",
                intro: "Inspector Jack Manion is looking for information about the Tongs in Chinatown. If you can help him, he'll teach you the basics of police work in exchange. You may spend Clue 1 Clue to improve Observation."
              }
            }
          }, {
            cardId: 2,
            encounters: {
              Arkham: {
                type: "pass-fail",
                intro: "During the night, you have a nightmare about the old witch, Keziah Mason. In the dream, she shares her power with you; gain 1 Incantation Spell. When you wake up, you fear that the old witch will someday ask you for a favor in return; test Will+1.",
                pass: "",
                fail: "Gain a Paranoia Condition."
              },

              "Buenos Aires": {
                type: "pass-fail",
                intro: "You sneak into the temple and overhear the rough croaking of deep ones chanting. You recognize familiar elements to the words they are intoning; Test Lore.",
                pass: "Gain 1 Ritual Spell.",
                fail: "It's nothing more than horrific noise; lose Sanity 1 Sanity."
              },

              "San Francisco": {
                type: "pass-fail",
                intro: "You find the husk of a squid-like creature in a tunnel. Just seeing it terrifies you; test Will-1",
                pass: "You identify the cthonian; improve 1 skill of your choice as scientists clamor to contribute to its study.",
                fail: "You run headlong through the tunnel; gain a Leg Injury Condition."
              }
            }
          }, {
            cardId: 4,
            encounters: {
              Arkham: {
                type: "may-do",
                intro: "An anonymous patient in the asylum pleads with you to share what you've learned. You may spend 1 Clue to share what you know.",
                pass: "The man begins chanting in a long-dead language; gain 1 Incantation Spell.",
                fail: ""
              },

              "Buenos Aires": {
                type: "choiceless",
                intro: "A student has been studying the university's copy of the Necronomicon and is eager to share what he's learned in exchange for hearing what you know. You may spend Clue 1 Clue to share what you know and gain 1 Ritual Spell."
              },

              "San Francisco": {
                type: "pass-fail",
                intro: "You speak to a military prisoner on Alcatraz Island. He tells you his story of deserting after encountering a horrific creature; test Will.",
                pass: "He thanks you for believing him and blesses your name; gain a Blessed Condition.",
                fail: "The story throws you into a hysterical fit, and the guards arrest you; gain a Detained Condition."
              }
            }
          }, {
            cardId: 7,
            encounters: {
              Arkham: {
                type: "choiceless",
                intro: "The administrators of Arkham's Historical Society take great pains to show you their extensive collection of historical documents. You may become Delayed to gain 2 Spells.",
              },

              "Buenos Aires": {
                type: "choiceless",
                intro: "At the hospital you find a bald, old man with leathery skin and a flat face. He speaks very slowly, but his story is fascinating. You may become Delayed to gain 2 Spells as he recounts all the details of his time worshiping the Father of Serpents."
              },

              "San Francisco": {
                type: "pass-fail",
                intro: "The Examiner hires you to spend a night in the Winchester Mystery House. They provide you with experts in detecting the supernatural. Improve Observation. The odd architecture and the building's history threaten to unhinge your mind as the evening passes; test Will-1.",
                fail: "Lose Sanity 2 Sanity."
              }
            }
          }
        ]
      }, {
        expansionId: ForsakenLore,
        cards: [
        ]
      }
    ]
  },

  Europe: {
    byExpansion: [
      {
        expansionId: Base,
        cards: [
          {
            cardId: 1,
            encounters: {
              Istanbul: {
                type: "pass-fail",
                intro: "Inside the loud hustle and bustle of the Grand Bazaar, you negotiate to find a skilled instructor to tutor you; test Influence-1. ",
                pass: "Improve 1 skill of your choice.",
                fail: "The instructor teaches you nothing; gain a Debt Condition to pay for his lessons."
              },

              London: {
                type: "pass-fail",
                intro: "The Silver Twilight Lodge is locked up tight. You look over the old building for a possible entrance; test Observation.",
                pass: "The Lodge members are delighted by your ingenuity and offer their favor; gain a Blessed Condition.",
                fail: "You waste fruitless hours searching and become Delayed."
              },

              Rome: {
                type: "pass-fail",
                intro: "The Vatican Library is so vast! You ask a librarian for a recommendation; test Influence.",
                pass: "He leads you to a codex that recounts how worshipers of Shub-Niggurath were driven out of Rome, and the story renews your confidence; improve Will.",
                fail: ""
              }
            }
          }, {
            cardId: 2,
            encounters: {
              Istanbul: {
                type: "choiceless",
                intro: "People from every walk of life can be found enjoying the cleansing steam of the Turkish baths. Inside, you'll eventually find an expert in any give field. You may become Delayed to improve 1 skill of your choice."
              },

              London: {
                type: "pass-fail",
                intro: "Inside the Herefordshire Asylum, a patient asks you if you've seen the Yellow Sign. You listen to his story of the King in Yellow; test Observation.",
                pass: "Spawn Clue 2 Clues.",
                fail: "His gibberish imprints itself onto your subconscious; gain a Hallucinations Condition."
              },

              Rome: {
                type: "pass-fail",
                intro: "You have an inspirational dream in which you are a proud Roman quaestor. Improve Will. Your reverie is interrupted by a band of small, primitive men running wild outside. You try to negotiate with this lost tribe of Miri Nigri; test Influence.",
                pass: "",
                fail: "Lose Health 1 Health and 1 Sanity as they continue their pursuit of some ancient grudge."
              }
            }
          }
        ]
      }
    ]
  },

  General: {
    byExpansion: [
      {
        expansionId: Base,
        cards: [
          {
            cardId: 1,
            encounters: {
              City: {
                type: "pass-fail",
                intro: "You make sure no one is watching before sneaking out of the shop with your stolen goods; test Observation.",
                pass: "Gain 1 Item Asset from the reserve or 1 random Item Asset from the deck.",
                fail: "You are caught by the store owner and arrested; gain a Detained Condition."
              },

              Sea: {
                type: "pass-fail",
                intro: "You find the floating detritus of some sunken ship and search for any survivors or salvageable objects; test Observation.",
                pass: "You discover a floating trunk; gain 1 Artifact.",
                fail: "You waste hours without result; become Delayed."
              },

              Wilderness: {
                type: "choiceless",
                intro: "The remains of a long-dead explorer lie before you. Some of his gear still seems salvageable, and he won't miss it. You dig through the dead man's pockets; gain 1 random Item Asset from the deck and lose Sanity 1 Sanity."
              }
            }
          }, {
            cardId: 8,
            encounters: {
              City: {
                type: "pass-fail",
                intro: "A night of drinking and good cheer helps raise your spirits. Recover Sanity 2 Sanity. While you are celebrating, you hardly notice that you are being robbed; test Observation",
                pass: "",
                fail: "Discard 1 Item possession."
              },

              Sea: {
                type: "pass-fail",
                intro: "You find a terrified stowaway aboard the ship. You attempt to comfort him and coax him into telling you his story; test Influence.",
                pass: "He tells you about horrifying beasts and unbelievable worlds; gain 1 Clue."
              },

              Wilderness: {
                type: "pass-fail",
                intro: "Past where your campfire allows you to see, you hear voices chanting. You try to draw a protective sigil in the ground; test Lore.",
                pass: "The next morning you find evidence of cult activity that you can use to identify the cult members; gain 1 Clue or improve Influence.",
                fail: "Gain a Cursed Condition."
              }
            }
          }
        ]
      }, {
        expansionId: ForsakenLore,
        cards: [
          // ...
        ]
      }
    ]
  }
};

const encounterData = {
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
      }, {
        cardId: 10,
        location: "Yuggoth",
        intro: "You discover a waxen mask and artificial hands. Your mind reels as you realize that the old man you had spoken to earlier was actually some terrible creature disguised as a human. Test Will.",
        pass: {
          type: "pass-fail",
          intro: "You realize now that the old man's words carry a secondary meaning. You attempt to decrypt what he said. Test Lore.",
          pass: "You understand the man's implied instructions; close this Gate.",
          fail: "His words lead you in circles; become Delayed."
        },
        fail: {
          type: "pass-fail",
          intro: "What was the nature of that blasphemous horror behind the mask? You consult your notes, trying to find what might disguise itself this way. Test Lore-1.",
          pass: "You find the data you need; close this Gate.",
          fail: "Fear of the unknowable easts at your thoughts; lose Sanity 3 Sanity."
        }
      }, {
        cardId: 15,
        location: "Yuggoth",
        type: "may-do",
        intro: "You discover a fetid creature with wings and webbed feet. The beast is strange, like something from your wildest dreams. You may spend 1 Clue to resolve the pass effect. If you do not spend the Clue, resolve the fail effect.",
        pass: {
          type: "pass-fail",
          intro: "You believe you've read of a way to use this beast to travel through space. Test Lore",
          pass: "You remember that by drinking space-mead you can safely use this byakhee to return home; close this Gate.",
          fail: "You drink something you shouldn't have; gain a Hallucinations Condition."
        },
        fail: {
          type: "pass-fail",
          intro: "The creature is terrifying, but if you can keep your calm, you will be able to overpower it. Test Will.",
          pass: "You subdue the creature and use it to return home; close this Gate.",
          fail: "Lose Health 1 Health."
        }
      }, {
        cardId: 55,
        location: "Plateau of Leng",
        intro: "Exploring a crude stone hut, you are discovered by a brutish man with horns and cloven hooves. He corners you, threatening to deliver you to the moon-beasts. You try to bribe the strange man to let you go. Test Influence - 1.",
        pass: {
          type: "pass-fail",
          intro: "The creature greedily accepts your offer. He tells you how to return home and destroy the doorway between worlds. Close this Gate. As he guides you, he secretly tries to steal some of your belongings. Test Observation.",
          pass: "",
          fail: "Lose Sanity 1 Sanity and discard 1 Item possession."
        },
        fail: {
          type: "may-do",
          intro: "You are thrown onto a slave ship. Lose Sanity 2 Sanity. A sailor offers to free you in exchange for secrets. You may spend Clue 2 Clues to close this Gate.",
          pass: "",
          fail: "You escape but cannot recall how; gain an Amnesia Condition."
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

function startCityEncounter(deckName, cityName) {
  const cards = deckData[deckName].byExpansion[0].cards;
  const card = cards[Math.floor(Math.random() * cards.length)];

  startEncounter(
    `${deckName} ${card.cardId}: ${cityName}`,
    endSimpleEncounter,
    card.encounters[cityName]
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

function startGeneralEncounter(spaceType) {
  const cards = deckData.General.byExpansion[0].cards;
  const card = cards[Math.floor(Math.random() * cards.length)];

  startEncounter(
    `General ${card.cardId}: ${spaceType}`,
    endSimpleEncounter,
    card.encounters[spaceType]
  );
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
