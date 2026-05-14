deckData["Asia/Australia"] = [
  {
    cardId: 1,
    expansionId: Core,
    Shanghai: {
      intro: "You search through old copies of The Shanghai Courier to find strange or unexplained stories; test Observation.",
      choices: {
        Pass: "You discover a pattern of arcane activity in the city; improve Lore.",
        Fail: "Lose 1 Sanity as no pattern emerges from all this horror."
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
        Pass: "Each Monster on a space of your choice loses 2 Health as the mysterious group casts their spells.",
        Fail: "The Dragon Lords lash out at you; gain a Back Injury Condition."
      }
    }
  }, {
    cardId: 2,
    expansionId: Core,
    Shanghai: {
      intro: "You may become Delayed to explore some submerged pyramids off the coast of Okinawa.",
      choices: {
        "Explore some submerged pyramids off the coast of Okinawa": 'You discover ancient writing that claims to "harm one\'s enemies;" 1 Monster of your choice on any space loses 3 Health.',
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
  }, {
    cardId: 10,
    expansionId: ForsakenLore,
    Shanghai: {
      intro: "The Green Gang has hidden 200-years worth of stolen treasures in a vault. Despite the risk, you try to break in; test Observation.",
      choices: {
        Pass: "You discover several magical texts; improve Lore.",
        Fail: "You are caught and punished without mercy; lose 1 Health and gain an Internal Injury Condition."
      }
    },

    Sydney: {
      intro: "In a game of cards, the stakes are raised and you bet a prized possession. You watch the other players carefully for any tells; test Observation-1.",
      choices: {
        Pass: "You call a bluff; gain 1 random Weapon Asset from the deck.",
        Fail: "Another player outwits you and claims your prize; discard 1 Item or Trinket possession."
      }
    },

    Tokyo: {
      intro: "Your hotel room is haunted by a yūrei. You are terrified as the white-clad woman howls and passes through you; test Will.",
      choices: {
        Pass: "",
        Fail: "Her lingering presence is a blight on your soul; lose 1 Sanity and gain a Cursed Condition."
      }
    }
  }, {
    cardId: 20,
    expansionId: MountainsOfMadness,
    Shanghai: {
      intro: "You awake in the middle of the night to hungry ghosts trying to devour your soul. Test Will).",
      choices: {
        Pass: "They stop and beg you to perform a service to set them free; gain 1 Task Unique Asset.",
        Fail: "You grow more like them; lose 1 Sanity and gain a Hunger Condition."
      }
    },

    Sydney: {
      intro: "A small demon known as a yara-ma-yha-who tries to eat you. You may spend 1 Focus to stay calm and not run away.",
      choices: {
        "Stay calm and not run away": "the beast swallows you whole, and when it spits you out later, your skin has turned red and you are stronger; improve Strength.",
        "Don't": ""
      }
    },

    Tokyo: {
      intro: "An American is using mathematics to travel between dimensions. As you try to find him, a dark figure offers you help. Test Observation-2; you may gain a Dark Pact Condition to roll 3 additional dice.",
      choices: {
        Pass: "Gain the Dr. Hiram Upham Unique Asset.",
        Fail: "The search leaves you exhausted; lose 1 Sanity."
      }
    }
  }
];
