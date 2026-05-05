deckData.Europe = [
  {
    cardId: 1,
    expansionId: Core,
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
  }, {
    cardId: 2,
    expansionId: Core,
    Istanbul: "People from every walk of life can be found enjoying the cleansing steam of the Turkish baths. Inside, you'll eventually find an expert in any give field. You may become Delayed to improve 1 skill of your choice.",

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
  }, {
    cardId: 12,
    expansionId: ForsakenLore,
    Istanbul: {
      intro: "You defend a young scribe being attacked by an angry mob. Test Strength.",
      choices: {
        Pass: "The man offers to introduce you to many important politicians; improve Influence.",
        Fail: "The mob beats you quite badly; lose 1 Health and gain an Internal Injury Condition."
      }
    },

    London: {
      intro: "You interrupt a group of cultists about to sacrifice a large muscular man. A Cultist Monster ambushes you!",
      choices: {
        "Resolved combat encounter": {
          choices: {
            "Defeated it": "The man you rescued introduces himself as \"Bulldog\" Drummond and tells you of his adventures; spawn 1 Clue.",
            "Did not defeat it": ""
          }
        }
      }
    },

    Rome: {
      intro: "You discover the ancient recipe to create Mithridate, a powerful concoction to protect you from harm. Interpreting it as best you can, you assemble the ingredients. Test Lore-1.",
      choices: {
        Pass: "The Mithridate works; gain a Blessed Condition.",
        Fail: "The foul brew makes you sick; gain a Poisoned Condition."
      }
    }
  }, {
    cardId: 20,
    expansionId: MountainsOfMadness,
    Istanbul: {
      intro: "A dying man admits that he was loyal to the Sultanate and hid his wealth in Ottoman lira. He explains how to find the money, but dies before you can take notes. You may spend 1 Focus to remember what he said.",
      choices: {
        "Remember what he said": "you discover the hidden funds; improve Influence.",
        "Don't": ""
      }
    },

    London: {
      intro: "H. G. Wells shows you items from the future, after the Ancient Ones have destroyed humanity. You cannot bear to look at them. Test Will.",
      choices: {
        Pass: "You see a way to avoid that future; gain 1 Task Unique Asset.",
        Fail: "Lose 1 Sanity and gain 1 Madness Condition."
      }
    },

    Rome: {
      intro: "You ask an American priest to tell you the reason for his visit. Test Influence-1.",
      choices: {
        Pass: "He talks about the Starry Wisdom Church; gain the Father Merluzzo Unique Asset.",
        Fail: "He leaves, and the room grows dark; gain a Cursed Condition."
      }
    }
  }
];
