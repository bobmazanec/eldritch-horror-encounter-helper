deckData.Special = {
  "Yog-Sothoth": {
    "The Key and the Gate": [
      {
        cardId: 1,
        expansionId: Core,
        intro: "A mass of glowing spheres, mouths, and tentacles burst forth from the portal. You feel a terrible intelligence searching your mind for signs of corruption. If you have a Dark Pact Condition, you are devoured. The Lurker then fills your thoughts with forbidden knowledge; test Will-1.",
        choices: {
          Pass: {
            intro: "You exercise extreme mental discipline to regain control of your mind. By examining the images the Lurker has chosen to reveal, you believe that you can bind it between dimensions; test Lore.",
            choices: {
              Pass: {
                intro: "You may discard 1 Spell to place 1 Eldritch token on the Ancient One sheet.",
                choices: {
                  "Place 1 Eldritch token on the Ancient One sheet": "",
                  "Don't": "Lose 3 Sanity."
                }
              },
              Fail: "Lose 3 Sanity."
            }
          },
          Fail: [
            "In one horrifying flash, your mind is flooded with knowledge of all places and all times as your molecules are torn apart.",
            "You are devoured."
          ]
        }
      }, {
        cardId: 2,
        expansionId: Core,
        intro: "Yog-Sothoth's avatar 'Umr-At-Tawil, stands before the Ultimate Gate. He is a tall figure, wrapped in gray fabric, and you can hear his thoughts thundering in your head. He warns you to proceed no further if you are afraid; test Will-1.",
        choices: {
          Pass: {
            intro: "'Umr-At-Tawil guides you through the gates to encounter Yog-Sothoth; test Influence. You may spend any number of Clues to add 1 success to your test result for each Clue spent.",
            choices: {
              "Your test result is 3 or greater": "You are allowed to return home; place Eldritch token 1 Eldritch token on the Ancient One sheet.",
              "Your test result is less than 3": "Yog-Sothoth threatens to trap you on the doomed planet Yaddith; lose 3 Sanity."
            }
          },
          Fail: [
            "'Umr-At-Tawil holds a large metallic sphere that radiates powerful pulses of energy. The rhythmic waves shake you to your core, tearing your body to pieces.",
            "You are devoured."
          ]
        }
      }, {
        cardId: 7,
        expansionId: ForsakenLore,
        intro: "The landscape around you changes constantly as Yog-Sothoth drags you through all worlds and all times. You search desperately for anything familiar to find your way home; test Observation-1.",
        choices: {
          Pass: {
            intro: "You sense your loved ones and mentally reach out to them for help (Influence). Roll 1 less die for each investigator that has been defeated or devoured.",
            choices: {
              Pass: "Your body is snapped back to reality, place Eldritch token 1 Eldritch token on the Ancient One sheet.",
              Fail: "You drift further through worlds beyond; gain a Lost in Time and Space Condition."
            }
          },
          Fail: [
            "When your vision clears, you find yourself on a frozen plateau. No starts look down from the night sky. For a tragically brief time, you are the only living thing in the universe.",
            "You are devoured."
          ]
        }
      }, {
        cardId: 8,
        expansionId: ForsakenLore,
        intro: "You are surprised to discover the indistinct silhouette of a man on the other side of the gate. Without knowing his identity, you try to convince him to help you navigate these strange other worlds; test Influence-1.",
        choices: {
          Pass: {
            intro: "He introduces himself as Randolph Carter and offers you his Silver Key. You try to harness its power (Lore). You may gain a Dark Pact Condition to roll 3 additional dice.",
            choices: {
              "Your test result is 3 or greater": "The key works; place Eldritch token 1 Eldritch token on the Ancient One sheet.",
              "Your test result is less than 3": "You're hopelessly lost; gain a Lost in Time and Space Condition."
            }
          },
          Fail: [
            "He introduces himself as the wizard Zkauba, and he uses his arcane powers to steal your experiences.",
            "Discard all of your Clues, Spells, and Improvement tokens."
          ]
        }
      }
    ],

    "Void Between Worlds": [
      {
        cardId: 1,
        expansionId: ForsakenLore,
        intro: "From this bizarre place between worlds, you can catch a glimpse of all worlds and all times. You have an epiphany and search for a member of the Inner Circle of the Silver Twilight Lodge to observe; test Observation-1.",
        choices: {
          Pass: {
            intro: "You watch the wizard study, hoping to learn a ritual that will return you home; test Lore.",
            choices: {
              Pass: "You open a mystic gateway to return you home; close this Gate and place Eldritch token 1 Eldritch token on the active Mystery",
              Fail: "You tamper with powers beyond your control; gain a Cursed Condition."
            }
          },
          Fail: {
            intro: "The more you search, the less familiar the images seem. Soon you are surrounded by images of alien worlds you hardly recognize; test Lore-1.",
            choices: {
              Pass: "",
              Fail: "Gain a Lost in Time and Space Condition."
            }
          }
        }
      }, {
        cardId: 2,
        expansionId: ForsakenLore,
        intro: "A small portal opens up before you and you see the laboratory of Crawford Tillinghast. You try to persuade him to make the portal large enough for you to pass through; test Influence.",
        choices: {
          Pass: {
            intro: "As you step through the portal, a creature also tries to pass through, and you must use the machine to close the portal; test Lore-1.",
            choices: {
              Pass: "Close this Gate and place Eldritch token 1 Eldritch token on the active Mystery.",
              Fail: {
                intro: "The creature escapes and attacks you; a Monster ambushes you!",
                choices: {
                    "Resolved combat encounter": ""
                }
              }
            }
          },
          Fail: "Tillinghast laughs maniacally and send you hurtling through a multitude of worlds, shattering your perceptions of reality. Gain a Hallucinations Condition and a Lost in Time and Space Condition."
        }
      }
    ]
  }
};
