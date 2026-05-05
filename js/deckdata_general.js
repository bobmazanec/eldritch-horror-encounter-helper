deckData.General = [
  {
    cardId: 1,
    expansionId: Core,
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

    Wilderness: "The remains of a long-dead explorer lie before you. Some of his gear still seems salvageable, and he won't miss it. You dig through the dead man's pockets; gain 1 random Item Asset from the deck and lose Sanity 1 Sanity."
  }, {
    cardId: 8,
    expansionId: Core,
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
  }, {
    cardId: 15,
    expansionId: ForsakenLore,
    City: {
      intro: "Grifters have chosen you to be their next mark. You plan on turning the tables with a few tricks of your own; test Observation-1.",
      choices: {
        Pass: "You end up with the money and an impressive reputation; improve Influence.",
        Fail: "They swindle you; discard 1 Item possession and 1 Trinket possession."
      }
    },

    Sea: {
      intro: "During a flash of lightning in the night, you see an enormous creature silhouetted against the sky. The image chills you to the core; test Will.",
      choices: {
        Pass: "",
        Fail: "Lose 1 Sanity and gain a Paranoia Condition."
      }
    },

    Wilderness: {
      intro: "You discover a shrine with a natural spring that you do not remember from your maps; test Lore-2.",
      choices: {
        Pass: "You recall an old story about a well of life; gain 1 Elixir Artifact.",
        Fail: "You don't notice native wildlife making off with your gear as you search your maps; discard 1 Trinket possession."
      }
    }
  }, {
    cardId: 19,
    expansionId: MountainsOfMadness,
    City: {
      intro: "To find the city's legendary magic shop requires knowledge of ley lines; test Lore-1.",
      choices: {
        Pass: "The owner will sell you only a single curio; gain 1 random Magical Asset from the deck.",
        Fail: "Your search seems to have led you through another world; move to a random space."
      }
    },

    Sea: {
      intro: "In the middle of the night, you're horrified to see the ghost of a sailor who died in your cabin; teset Will.",
      choices: {
        Pass: "The spirit shows you a loose board in the floor; gain 1 Old Journal Unique Asset.",
        Fail: "You run from the room in terror; lose 2 Sanity."
      }
    },

    Wilderness: {
      intro: "The winds turn bitterly cold and a storm descends upon you before you can build a shelter. The ordeal pushes your endurance to the limit; test Strength.",
      choices: {
        Pass: "",
        Fail: "You collapse, and the elements take their toll; lose 1 Health and gain a Hypothermia Condition."
      }
    }
  }
];
