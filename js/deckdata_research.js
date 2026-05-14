deckData.Research = {
  Antediluvium: [
    {
      expansionId: MasksOfNyarlathotep,
      cardId: 1,
      City: {
        intro: "A statue in the city square has an unusual inscription; test Lore-1.",
        choices: {
          Pass: "You intuit the glyphs to be empowered by temporal magic; gain this Clue and 1 Spell.",
          Fail: "Your curiosity alerts the Order of Rising Stars to the location of the glyphs; advance Doom by 1."
        }
      },

      Sea: {
        intro: "Unusual flotsam smashes into the side of the ship, and something small catches your eye. As you pull the unusual object aboard the ship, you know instantly that it was never meant for mortal hands and that by taking it you will set yourself along a dark path from which there is no return. You may gain a Dark Pact Condition to gain the Grotesque Statue Artifact.",
        choices: {
          "Gain the Grotesque Statue Artifact": "",
          "Don't": ""
        }
      },

      Wilderness: {
        intro: "You notice that the soil has been disturbed in this area; test Observation.",
        choices: {
          Pass: "You discover that an ancient burial site has been desecrated; gain this Clue.",
          Fail: "You twist your ankle in the dirt; lose 1 Health."
        }
      }
    }, {
      cardId: 2,
      expansionId: MasksOfNyarlathotep,
      City: {
        intro: "Three men eat together at a diner. You attempt to pick out which belongs to the Order; test Observation.",
        choices: {
          Pass: "You ambush him after his meal and grill him for information on the Order; gain this Clue.",
          Fail: "You attack an innocent person; gain a Detained Condition."
        }
      },

      Sea: {
        intro: "The only way to activate the strange island shrine and uncover its nefarious purpose is with a sacrifice of blood. You may gain a Dark Pact Condition to gain this Clue and 1 additional Clue.",
        choices: {
          "Gain this Clue Clue and 1 additional Clue": "",
          "Don't": ""
        }
      },

      Wilderness: {
        intro: "Suddenly, you cannot move or speak, and you are surrounded by chanting Order members; test Will-1.",
        choices: {
          Pass: "You manage to escape with their strange words etched into your mind; gain this Clue and 1 Spell.",
          Fail: "Your vision fades to black; place 2 Sanity on the Ancient One sheet."
        }
      }
    }
  ],

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
          Fail: "You are exposed to the terrible energy emanating from the substance; lose 1 Health."
        }
      }
    }, {
      cardId: 2,
      expansionId: Core,
      City: {
        intro: "A few hours before the performance of the opera Massa di Requiem per Shuggay you have a chance to examine the libretto; test Lore.",
        choices: {
          Pass: "You recognize that it's a ritual that honors Azathoth and stop the performance; gain this Clue.",
          Fail: "The performance calls to Azathoth; place 1 Eldritch token on the green space of the Omen track."
        }
      },

      Sea: {
        intro: "Your ship is destroyed by a glowing rock that fell from the sky! Gain this Clue. You struggle to reach wreckage that can keep you afloat; test Strength.",
        choices: {
          Pass: "",
          Fail: "The undertow pulls you underwater; lose 2 Health."
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
      City: "Inside the restricted section of the library, the book you sought is suddenly engulfed in green flames. To claim the ancient text, you will have to bow to the will of Tulzscha. You may spend 2 Sanity and gain a Dark Pact Condition to gain this Clue and 1 Tome Artifact.",

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
          Fail: "They take notice, beating you and leaving in the wild; lose 1 Health and gain an Internal Injury Condition."
        }
      }
    }
  ],

  Hypnos: [
    {
      cardId: 1,
      expansionId: TheDreamlands,
      City: {
        intro: "You pore over the pages from the dream journals of patients from an asylum; test Lore-1.",
        choices: {
          Pass: "You notice a series of dots in the margins; gain this Clue and 1 additional Clue. Each of the journals has different markings. You record the markings in case it someday proves useful.",
          Fail: ""
        }
      },

      Sea: {
        intro: "One of the crew is sleepwalking on the deck and normal means do not wake him; test Lore-1.",
        choices: {
          Pass: "You realize that he is hypnotized and restrain him until he regains his faculties; gain this Clue and retreat Doom by 1.",
          Fail: {
            intro: "He struggles against you; a Cultist Monster ambushes you!",
            choices: {
              "Resolved combat encounter": ""
            }
          }
        }
      },

      Wilderness: {
        intro: "You scan the night sky as you prepare to make camp for the evening; test Observation-1.",
        choices: {
          Pass: "You notice a constellation that matches one that you saw in your dreams; gain this Clue.",
          Fail: "A pulsing golden star enraptures you with its malevolent luminescence; lose 1 Sanity."
        }
      }
    }, {
      cardId: 2,
      expansionId: Core,
      City: {
        intro: "A gentleman in flowing white silks claims to know what you seek; test Influence-1.",
        choices: {
          Pass: "You convince him to share what he knows; gain this Clue and, if you are on the Dreamlands side board, gain 1 Task Unique Asset.",
          Fail: {
            intro: "He morphs into a hideous nightmare; a Ghoul Monster ambushes you!",
            choices: {
              "Resolved combat encounter": ""
            }
          }
        }
      },

      Sea: {
        intro: "Without warning, you feel yourself being drawn into the unknown; test Will-1.",
        choices: {
          Pass: "You notice a sliver of red-gold light in the sky; gain this Clue.",
          Fail: "You are propelled through the cosmos until you come to rest amongst distant stars; gain a Lost in Time and Space Condition."
        }
      },

      Wilderness: {
        intro: "You chase an ashen figure through the muck of a wooded fen; test Observation-1.",
        choices: {
          Pass: "You get a look at the figure's empty black eyes before you wake; gain this Clue and 1 additional Clue.",
          Fail: "Your injuries from the dream remain when you wake; lose 1 Health and gain 1 Injury Condition."
        }
      }
    }
  ],

  Syzygy: [
    {
      expansionId: StrangeRemnants,
      cardId: 1,
      City: {
        intro: "Gazing at the sun, you have a sudden epiphany regarding the effects of a planetary occultation on dimensional stability and become distracted; test Observation.",
        choices: {
          Pass: "Gain this Clue.",
          Fail: "You hit your head on a low-hanging street sign and forget all about it; gain a Head Injury Condition."
        }
      },

      Sea: {
        intro: "As you lift the ancient astrolabe from its pedestal, the island begins to sink; test Observation-1.",
        choices: {
          Pass: "You disable the mechanism; gain this Clue and 1 Relic Unique Asset.",
          Fail: "The current rips it from your grasp as you escape; move this Clue to the nearest space containing a Gate."
        }
      },

      Wilderness: {
        intro: "Your observations of movements in the night sky indicate that a minor alignment of stars will open a rift to another time. Gain this Clue. You think you know how to stop it; test Lore-1.",
        choices: {
          Pass: "",
          Fail: "No ritual you perform nor incantation you utter can prevent the rift from opening; spawn 1 Gate."
        }
      }
    }, {
      cardId: 2,
      expansionId: StrangeRemnants,
      City: {
        intro: "A local collector is rumored to have the item you seek; test Influence.",
        choices: {
          Pass: "You convince him that lending it to you will serve the greater good; gain 1 Relic Unique Asset.",
          Fail: "He feels threatened by your interest in his property and summons the authorities; gain a Detained Condition."
        }
      },

      Sea: {
        intro: "Suddenly, your ship is no longer sailing on the ocean, but in a sea of stars; test Will-1.",
        choices: {
          Pass: "You keep your composure and observe the positions of the stars; gain this Clue and 1 additional Clue.",
          Fail: "The alien ocean is terrifying; lose 1 Sanity and gain a Hallucinations Condition."
        }
      },

      Wilderness: {
        intro: "In your haste to survey the unusual forest clearing, you nearly miss a subtle placement of smooth stones; test Observation.",
        choices: {
          Pass: "You deduce that they are positioned to counter the destabilizing effects of a lunar eclipse; gain this Clue.",
          Fail: "You trip over them and fall; gain 1 Injury Condition."
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
          Fail: "You remember too late that they claim the souls of the dead, and you are buried under a landslide; lose 2 Health and gain an Internal Injury Condition."
        }
      }
    }
  ]
};
