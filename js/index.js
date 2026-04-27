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
            byCity: {
              Arkham: {
                intro: "In the restricted section of Miskatonic University's library, you study an esoteric tome. Gain 1 Incantation Spell. You try to decode a note written in the margin; test Lore.",
                choices: {
                  Pass: "",
                  Fail: "The words put strange visions into your mind; gain a Hallucinations Condition."
                }
              },

              "Buenos Aires": {
                intro: "In an ancient underground chamber, you study strange scientific and magic paraphernalia once used by the Serpent Men; test Lore.",
                choices: {
                  Pass: "You manipulate the devices to transform yourself and gain a Blessed Condition.",
                  Fail: "The devices remain utterly alien; lose 2 Sanity."
                }
              },

              "San Francisco": {
                intro: "Inspector Jack Manion is looking for information about the Tongs in Chinatown. If you can help him, he'll teach you the basics of police work in exchange. You may spend 1 Clue to improve Observation.",
              }
            }
          }, {
            cardId: 2,
            byCity: {
              Arkham: {
                intro: "During the night, you have a nightmare about the old witch, Keziah Mason. In the dream, she shares her power with you; gain 1 Incantation Spell. When you wake up, you fear that the old witch will someday ask you for a favor in return; test Will+1.",
                choices: {
                  Pass: "",
                  Fail: "Gain a Paranoia Condition."
                }
              },

              "Buenos Aires": {
                intro: "You sneak into the temple and overhear the rough croaking of deep ones chanting. You recognize familiar elements to the words they are intoning; Test Lore.",
                choices: {
                  Pass: "Gain 1 Ritual Spell.",
                  Fail: "It's nothing more than horrific noise; lose Sanity 1 Sanity."
                }
              },

              "San Francisco": {
                intro: "You find the husk of a squid-like creature in a tunnel. Just seeing it terrifies you; test Will-1",
                choices: {
                  Pass: "You identify the cthonian; improve 1 skill of your choice as scientists clamor to contribute to its study.",
                  Fail: "You run headlong through the tunnel; gain a Leg Injury Condition."
                }
              }
            }
          }, {
            cardId: 4,
            byCity: {
              Arkham: {
                intro: "An anonymous patient in the asylum pleads with you to share what you've learned. You may spend 1 Clue to share what you know.",
                choices: {
                  "Share what you know": "The man begins chanting in a long-dead language; gain 1 Incantation Spell.",
                  "Don't": ""
                }
              },

              "Buenos Aires": {
                intro: "A student has been studying the university's copy of the Necronomicon and is eager to share what he's learned in exchange for hearing what you know. You may spend 1 Clue to share what you know and gain 1 Ritual Spell."
              },

              "San Francisco": {
                intro: "You speak to a military prisoner on Alcatraz Island. He tells you his story of deserting after encountering a horrific creature; test Will.",
                choices: {
                  Pass: "He thanks you for believing him and blesses your name; gain a Blessed Condition.",
                  Fail: "The story throws you into a hysterical fit, and the guards arrest you; gain a Detained Condition."
                }
              }
            }
          }, {
            cardId: 7,
            byCity: {
              Arkham: {
                intro: "The administrators of Arkham's Historical Society take great pains to show you their extensive collection of historical documents. You may become Delayed to gain 2 Spells.",
              },

              "Buenos Aires": {
                intro: "At the hospital you find a bald, old man with leathery skin and a flat face. He speaks very slowly, but his story is fascinating. You may become Delayed to gain 2 Spells as he recounts all the details of his time worshiping the Father of Serpents."
              },

              "San Francisco": {
                intro: "The Examiner hires you to spend a night in the Winchester Mystery House. They provide you with experts in detecting the supernatural. Improve Observation. The odd architecture and the building's history threaten to unhinge your mind as the evening passes; test Will-1.",
                choices: {
                  Pass: "",
                  Fail: "Lose Sanity 2 Sanity."
                }
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

  "Asia/Australia": {
    byExpansion: [
      {
        expansionId: Base,
        cards: [
          {
            cardId: 1,
            byCity: {
              Shanghai: {
                intro: "You search through old copies of The Shanghai Courier to find strange or unexplained stories; test Observation.",
                choices: {
                  Pass: "You discover a pattern of arcane activity in the city; improve Lore.",
                  Fail: "Lose Sanity 1 Sanity as no pattern emerges from all this horror."
                }
              },

              Sydney: {
                intro: "You dream of crossing a vast desert hunted by an enormous winged creature. In the dream, you turn to face your fears; test Will",
                choices: {
                  Pass: "You wake up feeling more alive than ever; improve Strength.",
                  Fail: "The fear lingers; lose 1 Sanity."
                }
              },

              Tokyo: {
                intro: "You ask the enigmatic Dragon Lords to rid the world of potential threats to Japan; test Influence.",
                choices: {
                  Pass: "Each Monster on a space of your choice loses Health 2 Health as the mysterious group casts their spells.",
                  Fail: "The Dragon Lords lash out at you; gain a Back Injury Condition."
                }
              }
            }
          }, {
            cardId: 2,
            byCity: {
              Shanghai: {
                intro: "You may become Delayed to explore some submerged pyramids off the coast of Okinawa.",
                choices: {
                  "Explore some submerged pyramids off the coast of Okinawa": 'You discover ancient writing that claims to "harm one\'s enemies;" 1 Monster of your choice on any space loses Health 3 Health.',
                  "Don't": ""
                }
              },

              Sydney: {
                intro: "You may become Delayed to explore the depths of the Great Barrier Reef.",
                choices: {
                  "Explore the depths of the Great Barrier Reef": 'You discover a hidden chamber filled with ancient artifacts; gain 2 Spells.',
                  "Don't": ""
                }
              },

              Tokyo: {
                intro: "You may become Delayed to investigate the mysterious disappearances in the city.",
                choices: {
                  "Investigate the mysterious disappearances in the city": "You uncover a conspiracy involving the Dragon Lords; gain 1 Clue.",
                  "Don't": ""
                }
              }
            }
          }
        ]
      },
      {
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
            byCity: {
              Istanbul: {
                intro: "Inside the loud hustle and bustle of the Grand Bazaar, you negotiate to find a skilled instructor to tutor you; test Influence-1. ",
                choices: {
                  Pass: "Improve 1 skill of your choice.",
                  Fail: "The instructor teaches you nothing; gain a Debt Condition to pay for his lessons."
                }
              },

              London: {
                intro: "The Silver Twilight Lodge is locked up tight. You look over the old building for a possible entrance; test Observation.",
                choices: {
                  Pass: "The Lodge members are delighted by your ingenuity and offer their favor; gain a Blessed Condition.",
                  Fail: "You waste fruitless hours searching and become Delayed."
                }
              },

              Rome: {
                intro: "The Vatican Library is so vast! You ask a librarian for a recommendation; test Influence.",
                choices: {
                  Pass: "He leads you to a codex that recounts how worshipers of Shub-Niggurath were driven out of Rome, and the story renews your confidence; improve Will.",
                  Fail: ""
                }
              }
            }
          }, {
            cardId: 2,
            byCity: {
              Istanbul: {
                intro: "People from every walk of life can be found enjoying the cleansing steam of the Turkish baths. Inside, you'll eventually find an expert in any give field. You may become Delayed to improve 1 skill of your choice."
              },

              London: {
                intro: "Inside the Herefordshire Asylum, a patient asks you if you've seen the Yellow Sign. You listen to his story of the King in Yellow; test Observation.",
                choices: {
                  Pass: "Spawn Clue 2 Clues.",
                  Fail: "His gibberish imprints itself onto your subconscious; gain a Hallucinations Condition."
                }
              },

              Rome: {
                intro: "You have an inspirational dream in which you are a proud Roman quaestor. Improve Will. Your reverie is interrupted by a band of small, primitive men running wild outside. You try to negotiate with this lost tribe of Miri Nigri; test Influence.",
                choices: {
                  Pass: "",
                  Fail: "Lose Health 1 Health and 1 Sanity as they continue their pursuit of some ancient grudge."
                }
              }
            }
          }
        ]
      }
    ]
  },

  Expedition: {
    byExpansion: [
      {
        expansionId: Base,
        bySpace: {
          "The Amazon": [
            {
              cardId: 1,
              intro: "You see the vine-covered temple ahead of you, but you're going to have to fight your way through a thick tangle of venomous snakes between yourself and the entrance; test Strength.",
              choices: {
                Pass: {
                  intro: "You enter the Temple of Yig. Retreat Doom by 1. Strange runes are inscribed on the wall in a serpentine design. You must interpret their meaning to avoid their hypnotic effect; test Lore.",
                  choices: {
                    Pass: "",
                    Fail: "The runes' hypnotic effect takes hold; gain a Paranoia Condition."
                  }
                },
                Fail: {
                  intro: "You've been bit! Lose Health 1 Health and gain an Internal Injury Condition. Something about the snakes is odd. You try to identify what makes them unique; test Observation-1.",
                  choices: {
                    Pass: "You notice a crescent on the snake's head; retreat Doom by 1.",
                    Fail: ""
                  }
                }
              }
            }, {
              cardId: 2,
              intro: "As you slip into a deep trance and touch the odd stone, the jungle around you subtle changes in appearance. You look for hints regarding this new jungle terrain; test Observation.",
              choices: {
                Pass: {
                  intro: "You are in some other dimension. You use your arcane skills to return home; test Lore.",
                  choices: {
                    Pass: "You wake up back in the jungle next to a strange item; gain 1 Artifact.",
                    Fail: "The journey back unsettles you; lose 2 Sanity."
                  }
                },
                Fail: {
                  intro: "A towering, larva-like thing grabs you with its tendrils. You struggle fiercely to break free; test Strength-1.",
                  choices: {
                    Pass: "You retrieve a sample of the creature; gain 2 Clues.",
                    Fail: "It throws you high into the air; gain a Back Injury Condition."
                  }
                }
              }
            }            
          ],

          Antarctica: [
            {
              cardId: 1,
              intro: "Flying over the area, you see evidence of an ancient stone city. You land your plane as close as you can and climb across the ice to reach the strange architecture; test Strength).",
              choices: {
                pass: {
                  intro: "The murals inside the city tell the story of the elder things. Retreat Doom Doom by 1. However, your studies take a toll on your mind; test Will",
                  choices: {
                    Pass: "",
                    Fail: "You block everything you've learned from your mind; gain an Amnesia Condition."
                  }
                },
                Fail: {
                  intro: "You fall through the ice into a stone chamber. Lose Health 1 Health and gain a Back Injury Condition. You search the dark chamber; test Observation-1.",
                  choices: {
                    Pass: "",
                    Fail: "You find the husk of an elder thing for study; retreat Doom by 1."
                  }
                }
              }
            }, {
              cardId: 2,
              intro: "You hear a faint sound echoing up from the caves that lead down in to the darkness. You listen carefully to discern the sound's origin; test Observation.",
              choices: {
                Pass: {
                  intro: "You identify the sound of shoggoths. You escape, but can barely keep yourself conscious waiting for a rescue; test Will.",
                  choices: {
                    Pass: "You spot something on the cave floor; gain 1 Artifact.",
                    Fail: "You pass out and hear the sounds of shoggoths everywhere you go; gain a Hallucinations Condition."
                  }
                },
                Fail: {
                  intro: '"Tekeli-li! Tekeli-li!" You recognize it too late. The shoggoths overwhelm you; test Strength-1.',
                  choices: {
                    Pass: "You overcome the threat; gain 2 Clues.",
                    Fail: "You escape by jumping off a ledge; gain a Leg Injury Condition."
                  }
                }
              }
            }
          ]
        }
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
            bySpaceType: {
              City: {
                intro: "You make sure no one is watching before sneaking out of the shop with your stolen goods; test Observation.",
                choices: {
                  Pass: "Gain 1 Item Asset from the reserve or 1 random Item Asset from the deck.",
                  Fail: "You are caught by the store owner and arrested; gain a Detained Condition."
                }
              },

              Sea: {
                intro: "You find the floating detritus of some sunken ship and search for any survivors or salvageable objects; test Observation.",
                choices: {
                  Pass: "You discover a floating trunk; gain 1 Artifact.",
                  Fail: "You waste hours without result; become Delayed."
                }
              },

              Wilderness: {
                intro: "The remains of a long-dead explorer lie before you. Some of his gear still seems salvageable, and he won't miss it. You dig through the dead man's pockets; gain 1 random Item Asset from the deck and lose Sanity 1 Sanity."
              }
            }
          }, {
            cardId: 8,
            bySpaceType: {
              City: {
                intro: "A night of drinking and good cheer helps raise your spirits. Recover Sanity 2 Sanity. While you are celebrating, you hardly notice that you are being robbed; test Observation",
                choices: {
                  Pass: "",
                  Fail: "Discard 1 Item possession."
                }
              },

              Sea: {
                intro: "You find a terrified stowaway aboard the ship. You attempt to comfort him and coax him into telling you his story; test Influence.",
                choices: {
                  Pass: "He tells you about horrifying beasts and unbelievable worlds; gain 1 Clue.",
                  Fail: ""
                }
              },

              Wilderness: {
                intro: "Past where your campfire allows you to see, you hear voices chanting. You try to draw a protective sigil in the ground; test Lore.",
                choices: {
                  Pass: "The next morning you find evidence of cult activity that you can use to identify the cult members; gain 1 Clue or improve Influence.",
                  Fail: "Gain a Cursed Condition."
                }
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
  },

  OtherWorld: {
    byExpansion: [
      {
        expansionId: Base,
        cards: [
          {
            cardId: 7,
            location: "The Dreamlands",
            intro: "In the cavern of flame, the bearded priests Nasht and Kaman-Thah warn you that it is too dangerous to continue. You insist that you possess the knowledge you need and are resolved to enter the Dreamlands; test Will-1. Roll 1 additional die for each Clue you have.",
            choices: {
              Pass: {
                intro: "After gaining access to the Dreamlands, you find yourself fighting moonbeasts on a black galley sailing to the moon; test Strength.",
                choices: {
                  Pass: "You steal their treasure and area able to barter with it; close this Gate.",
                  Fail: "You become lost in a forest on the moon; lose Health 2 Health and become Delayed."
                }
              },
              Fail: {
                intro: "The gods of dreams exile you back to the waking world and punish you for your overreaching ambition. Your dream and the waking world become indistinguishable. Become Delayed and gain a Hallucinations Condition."
              }
            }
          }, {
            cardId: 10,
            location: "Yuggoth",
            intro: "You discover a waxen mask and artificial hands. Your mind reels as you realize that the old man you had spoken to earlier was actually some terrible creature disguised as a human. Test Will.",
            choices: {
              Pass: {
                intro: "You realize now that the old man's words carry a secondary meaning. You attempt to decrypt what he said. Test Lore.",
                choices: {
                  Pass: "You understand the man's implied instructions; close this Gate.",
                  Fail: "His words lead you in circles; become Delayed."
                }
              },
              Fail: {
                intro: "What was the nature of that blasphemous horror behind the mask? You consult your notes, trying to find what might disguise itself this way. Test Lore-1.",
                choices: {
                  Pass: "You find the data you need; close this Gate.",
                  Fail: "Fear of the unknowable easts at your thoughts; lose Sanity 3 Sanity."
                }
              }
            }
          }, {
            cardId: 15,
            location: "Yuggoth",
            intro: "You discover a fetid creature with wings and webbed feet. The beast is strange, like something from your wildest dreams. You may spend 1 Clue to resolve the pass effect. If you do not spend the Clue, resolve the fail effect.",
            choices: {
              "Resolve the pass effect": {
                intro: "You believe you've read of a way to use this beast to travel through space; test Lore",
                choices: {
                  Pass: "You remember that by drinking space-mead you can safely use this byakhee to return home; close this Gate.",
                  Fail: "You drink something you shouldn't have; gain a Hallucinations Condition."
                }
              },
              "Resolve the fail effect": {
                intro: "The creature is terrifying, but if you can keep your calm, you will be able to overpower it; test Will.",
                choices: {
                  Pass: "You subdue the creature and use it to return home; close this Gate.",
                  Fail: "Lose Health 1 Health."
                }
              }
            }
          }, {
            cardId: 55,
            location: "Plateau of Leng",
            intro: "Exploring a crude stone hut, you are discovered by a brutish man with horns and cloven hooves. He corners you, threatening to deliver you to the moon-beasts. You try to bribe the strange man to let you go; test Influence - 1.",
            choices: {
              Pass: {
                intro: "The creature greedily accepts your offer. He tells you how to return home and destroy the doorway between worlds. Close this Gate. As he guides you, he secretly tries to steal some of your belongings. Test Observation.",
                choices: {
                  Pass: "",
                  Fail: "Lose Sanity 1 Sanity and discard 1 Item possession."
                }
              },
              Fail: {
                intro: "You are thrown onto a slave ship. Lose Sanity 2 Sanity. A sailor offers to free you in exchange for secrets. You may spend Clue 2 Clues to close this Gate.",
                choices: {
                  "Close this Gate": "",
                  "Don't": "You escape but cannot recall how; gain an Amnesia Condition."
                }
              }
            }
          }
        ]
      }
    ]
  },

  Research: {
    byAncientOne: {
      Azathoth: {
        byExpansion: [
          {
            expansionId: Base,
            cards: [
              {
                cardId: 1,
                bySpaceType: {
                  City: {
                    intro: "Inside a warehouse, you hear a clanging sound and discover a creature that resembles a metallic crate walking around on several legs. You try to follow the thing back to the cult's lair; test Observation-1.",
                    choices: {
                      Pass: "Gain this Clue and 1 additional Clue.",
                      Fail: ""
                    }
                  },

                  Sea: {
                    intro: "You overhear the navigator say that the stars are not as they should be. The ship is utterly lost. You believe you understand the significance of the new alignment of stars; test Lore.",
                    choices: {
                      Pass: "Gain this Clue and 1 additional Clue.",
                      Fail: "You become Delayed."
                    }
                  },

                  Wilderness: {
                    intro: "A meteor exploded in the air, scattering a glowing green powder. You try to find a sufficient amount of the compound; test Observation-1.",
                    choices: {
                      Pass: "Gain this Clue and move the Omen token to any space on the track without advancing Doom.",
                      Fail: "You are exposed to the terrible energy emanating from the substance; lose Health 1 Health."
                    }
                  }
                }
              }, {
                cardId: 2,
                bySpaceType: {
                  City: {
                    intro: "A few hours before the performance of the opera Massa di Requiem per Shuggay you have a chance to examine the libretto; test Lore",
                    choices: {
                      Pass: "You recognize that it's a ritual that honors Azathoth and stop the performance; gain this Clue.",
                      Fail: "The performance calls to Azathoth; place 1 Eldritch token on the green space of the Omen track."
                    }
                  },

                  Sea: {
                    intro: "Your ship is destroyed by a glowing rock that fell from the sky! Gain this Clue. You struggle to reach wreckage that can keep you afloat; test Strength",
                    choices: {
                      Pass: "",
                      Fail: "the undertow pulls you underwater; lose Health 2 Health."
                    }
                  },

                  Wilderness: {
                    intro: "Mi-go have dug up the meteor that you were seeking. Curious, you attempt to spy on them; test Observation.",
                    choices: {
                      Pass: "You see them use the stones as a power source; gain this Clue and 1 additional Clue.",
                      Fail: "They shoot you with a weapon that leaves you unconscious for hours; gain an Amnesia Condition."
                    }
                  }
                }
              }
            ]
          }
        ]
      },

      "Yog-Sothoth": {
        byExpansion: [
          {
            expansionId: Base,
            cards: [
              {
                cardId: 1,
                bySpaceType: {
                  City: {
                    intro: "Randolph Carter claims that the Silver Twilight Lodge stole a unique family treasure. You investigate the local Lodge; test Observation.",
                    choices: {
                      Pass: "You gain the opportunity to examine the stolen treasure; gain this Clue and you may discard a Spell to gain the Silver Key Artifact.",
                      Fail: "The Lodge frames you for the theft; gain a Detained Condition."
                    }
                  },

                  Sea: {
                    intro: "A strange fog covers the water, but no one else seems to see it; test Observation",
                    choices: {
                      Pass: "You find that the fog originates from a circle of stones on the beach of a small island; gain this Clue.",
                      Fail: "The mist impairs your vision; discard this Clue unless you discard 1 Spell."
                    }
                  },

                  Wilderness: {
                    intro: "Talking to one of the locals, you realize that his village and its surrounding farms are inhabited by worshipers of Yog-Sothoth. A Cultist Monster ambushes you!",
                    choices: {
                      "Defeat the Cultist Monster": "You manage to reach safety; gain this Clue.",
                      "Don't": ""
                    }
                  }
                }
              }, {
                cardId: 2,
                bySpaceType: {
                  City: {
                    intro: "An old man approaches you and begs you to make a solemn vow to deliver a book to his grandson, Wilbur, in a town called Dunwich. You may gain a Dark Pact Condition to gain this Clue and the Necronomicon Artifact.",
                    choices: {
                      "Gain this Clue and the Necronomicon Artifact": "",
                      "Don't": "Discard this Clue."
                    }
                  },

                  Sea: {
                    intro: "You see a white ship on the horizon, its sails apparently unaffected by the strong winds you feel racing across the waves. You use a telescope to examine the craft; test Observation-1.",
                    choices: {
                      Pass: "You see the ship passing through a fog bank into another world; gain this Clue and 1 additional Clue.",
                      Fail: ""
                    }
                  },

                  Wilderness: {
                    intro: "You watch several mi-go operate alien technology. Gain this Clue. If you have at least 1 Spell, the mi-go are suddenly aware of your presence and turn their strange devices toward you; test Observation",
                    choices: {
                      Pass: "",
                      Fail: "Their devices erode your sense of reason; lose 1 Sanity and gain a Paranoia Condition."
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
};

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

  addEncounterStepText(encounterElement, encounterStep.intro || encounterStep);

  if (encounterStep.choices) {
    addChoiceButtons(encounterElement, encounterStep);
  } else {
    endEncounter();
  }
}

function addExpeditionEncounterButton() {
  const card = drawCard("Expedition");

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("encounter");
  button.classList.add("expedition");
  linkedCard[button] = card;
  button.onclick = startExpeditionEncounter;
  button.textContent = `Start ${card.space} Expedition Encounter`;

  document.getElementById("expedition-buttons").appendChild(button);
}

function addEncounterStepText(encounterElement, text) {
  const textElement = document.createElement("p");
  textElement.textContent = text;
  encounterElement.appendChild(textElement);
  readAlound(text);
}

function buildExpeditionDeck() {
  const deck = new Array();
  for (const space in deckData.Expedition.byExpansion[0].bySpace) {
    const cards = deckData.Expedition.byExpansion[0].bySpace[space];
    cards.forEach(card => {
      card.expansionId = 0;
      card.space = space;
      deck.push(card)
    });
  };

  shuffleArray(deck);
  decks["Expedition"] = deck;
}

function buildResearchDeck() {
  const deck = new Array();
  deckData.Research.byAncientOne[ancientOne].byExpansion.forEach(expansion => {
    expansion.cards.forEach(card => {
      deck.push(card);
    })
  });

  shuffleArray(deck);
  decks["Research"] = deck;
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

function readAlound(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

function startCityEncounter(deckName, cityName) {
  const cards = deckData[deckName].byExpansion[0].cards;
  const card = cards[Math.floor(Math.random() * cards.length)];

  startEncounter(
    `${deckName} ${card.cardId}: ${cityName}`,
    card.byCity[cityName]
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
  const button = event.target;
  const card = linkedCard[button];

  button.remove();
  delete linkedCard[button];

  addExpeditionEncounterButton();

  startEncounter(
    `Expedition - ${card.space}: ${card.cardId}`,
    card
  );
}

function startGeneralEncounter(spaceType) {
  const cards = deckData.General.byExpansion[0].cards;
  const card = cards[Math.floor(Math.random() * cards.length)];

  startEncounter(
    `General ${card.cardId}: ${spaceType}`,
    card.bySpaceType[spaceType]
  );
}

function startResearchEncounter(spaceType) {
  const card = drawCard("Research");

  startEncounter(
    `Research - ${ancientOne} ${card.cardId}: ${spaceType}`,
    card.bySpaceType[spaceType]
  );
}

function startOtherWorldEncounter() {
  const cards = deckData.OtherWorld.byExpansion[0].cards;
  const card = cards[Math.floor(Math.random() * cards.length)];

  startEncounter(
    `Other World ${card.cardId}: ${card.location}`,
    card
  );
}

function updateEncounterButtons(disabled) {
  document.querySelectorAll("button.encounter").forEach(button => {
    button.disabled = disabled;
  });
}

const ancientOne = "Yog-Sothoth";
const decks = [];
const linkedCard = {};

buildExpeditionDeck();
buildResearchDeck();

addExpeditionEncounterButton();