deckData.Research = {
  Azathoth: [
    {
      expansionId: Core,
      cardId: 1,
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
    }, {
      cardId: 2,
      expansionId: Core,
      City: {
        intro: "A few hours before the performance of the opera Massa di Requiem per Shuggay you have a chance to examine the libretto; test Lore",
        choices: {
          Pass: "You recognize that it's a ritual that honors Azathoth and stop the performance; gain this Clue.",
          Fail: "The performance calls to Azathoth; place 1 Eldritch token on the green space of the Omen track."
        }
      },

      Sea: {
        intro: "Your ship is destroyed by a glowing rock that fell from the sky! Gain this Clue. You struggle to reach wreckage that can keep you afloat; test Strength.",
        choices: {
          Pass: "",
          Fail: "The undertow pulls you underwater; lose Health 2 Health."
        }
      },

      Wilderness: {
        intro: "Mi-go have dug up the meteor that you were seeking. Curious, you attempt to spy on them; test Observation.",
        choices: {
          Pass: "You see them use the stones as a power source; gain this Clue and 1 additional Clue.",
          Fail: "They shoot you with a weapon that leaves you unconscious for hours; gain an Amnesia Condition."
        }
      }
    }, {
      cardId: 13,
      expansionId: ForsakenLore,
      City: "Inside the restricted section of the library, the book you sought is suddenly engulfed in green flames. To claim the ancient text, you will have to bow to the will of Tulzscha. You may spend Sanity 2 Sanity and gain a Dark Pact Condition to gain this Clue and 1 Tome Artifact.",

      Sea: {
        intro: "You attempt to subdue a madman who is threatening the captain of the ship; test Strength-1.",
        choices: {
          Pass: "You detain the man and search his cabin; gain this Clue.",
          Fail: "The lunatic disappears, and the ship is badly damaged by an explosion; move this Clue to an adjacent space and become Delayed."
        }
      },

      Wilderness: {
        intro: "You track a family under the control of the shan back to their farm; test Observation.",
        choices: {
          Pass: "You observe them and learn of their plans; gain this Clue.",
          Fail: "They take notice, beating you and leaving in the wild; lose Health 1 Health and gain an Internal Injury Condition."
        }
      }
    }
  ],

  "Yog-Sothoth": [
    {
      cardId: 1,
      expansionId: Core,
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
          "Resolved combat encounter": {
            choices: {
              "Defeated it": "You manage to reach safety; gain this Clue.",
              "Did not defeat it": ""
            }
          }
        }
      }
    }, {
      cardId: 2,
      expansionId: Core,
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
    }, {
      cardId: 23,
      expansionId: ForsakenLore,
      City: "You read an article about the disappearance of the legendary Dunwich Horror. The creature evidently left its home village for some other destination. If you are on a space containing a Gate, the legend reveals itself before you; the Dunwich Horror Epic Monster ambushes you!",

      Sea: {
        intro: "A small native population lives on this island. Their high priest tells you that the One From Beyond warned him of your arrival. A Cultist Monster ambushes you!",
        choices: {
          "Resolved combat encounter": {
            choices: {
              "Defeated it": "you study the carvings on his primitive shrine; gain this Clue.",
              "Did not defeat it": ""
            }
          }
        }
      },

      Wilderness: {
        intro: "A flock of whip-poor-wills gathers around you, which is significant in some folktales; test Lore.",
        choices: {
          Pass: "You recall that these birds are an omen of death; gain this Clue.",
          Fail: "You remember too late that they claim the souls of the dead, and you are buried under a landslide; lose Health 2 Health and gain an Internal Injury Condition."
        }
      }
    }
  ]
};
