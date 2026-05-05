deckData.OtherWorld = [
  {
    cardId: 7,
    expansionId: Core,
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
      Fail: "The gods of dreams exile you back to the waking world and punish you for your overreaching ambition. Your dream and the waking world become indistinguishable. Become Delayed and gain a Hallucinations Condition."
    }
  }, {
    cardId: 10,
    expansionId: Core,
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
    expansionId: Core,
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
    cardId: 30,
    expansionId: ForsakenLore,
    location: "Plateau of Leng",
    intro: "As you make your way through a web-filled valley, you see an enormous purple spider crawling toward your path. You hope to sneak past the creature; test Observation-1.",
    choices: {
      Pass: {
        intro: "As you leave the spider behind, you discover the corpse of a previous victim. You find the unfortunate man's journal and translate the strange symbols on the pages; test Lore.",
        choices: {
          Pass: "You discover a safe path home; close this Gate.",
          Fail: "You misinterpret the directions; gain a Lost in Time and Space Condition."
        }
      },
      Fail: {
        intro: "The spider sees you and attacks; test Strength-1!",
        choices: {
          Pass: "You rescue someone else trapped in its web; gain 1 random Ally Asset from the deck.",
          Fail: "You're bitten by the spider; lose 1 Health and gain a Poisoned Condition."
        }
      }
    }
  }, {
    cardId: 55,
    expansionId: TheDreamlands,
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
        intro: [
          "You are thrown onto a slave ship. Lose Sanity 2 Sanity.",
          "A sailor offers to free you in exchange for secrets. You may spend Clue 2 Clues to close this Gate."
        ],
        choices: {
          "Close this Gate": "",
          "Don't": "You escape but cannot recall how; gain an Amnesia Condition."
        }
      }
    }
  }
];
