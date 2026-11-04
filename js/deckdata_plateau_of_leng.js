deckData.OtherWorld["Plateau of Leng"] = [
  {
    "cardId": 30,
    "expansionId": "Forsaken Lore",
    "intro": "As you make your way through a web-filled valley, you see an enormous purple spider crawling toward your path. You hope to sneak past the creature (<img src=\"images/Observation.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "As you leave the spider behind, you discover the corpse of a previous victim. You find the unfortunate man's journal and translate the strange symbols on the pages (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You discover a safe path home; close this Gate.",
          "Fail": "You misinterpret the directions; gain a Lost in Time and Space Condition."
        }
      },
      "Fail": {
        "intro": "The spider sees you and attacks (<img src=\"images/Strength.webp\">-1)!",
        "choices": {
          "Pass": "You rescue someone else trapped in its web; gain 1 random Ally Asset from the deck.",
          "Fail": "You're bitten by the spider; lose 1 Health and gain a Poisoned Condition."
        }
      }
    }
  },
  {
    "cardId": 31,
    "expansionId": "Mountains of Madness",
    "intro": "A large band of tcho-tchos surrounds you. Before they can attack, you remember seeing some black lotus flowers growing nearby. Resolve the pass effect to tell the tcho-tchos the location of the rare blooms or resolve the fail effect to flee from them.",
    "choices": {
      "Resolve the pass effect to tell the tcho-tchos the location of the rare blooms": {
        "intro": "They agree to help you if you lead them to the lotus flowers, but some of them are acting shifty (<img src=\"images/Influence.webp\">-1).",
        "choices": {
          "Pass": "They help you return home; close this Gate.",
          "Fail": "They betray you and cut you with a poisoned blade; gain 1 Illness Condition."
        }
      },
      "Resolve the fail effect to flee from them": {
        "intro": "As you escape, they blow a black powder in your face. Gain a Hallucinations Condition. You struggle to resist the horrifying illusions conjured by the poison (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You return to earth and destroy the portal; close this Gate.",
          "Fail": ""
        }
      }
    }
  },
  {
    "cardId": 32,
    "expansionId": "Mountains of Madness",
    "intro": "A robed figure tells you that he's going to devour you and use your soul to fuel his arcane might. You want to run away but as you listen to his words, you feel a cold paralysis overtake you. You struggle to resist the effects of his spell (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "You strike the wizard, disrupting his magic. The portal starts to fade. Running toward the portal, something gets caught on your clothes (<img src=\"images/Observation.webp\">).",
        "choices": {
          "Pass": "Close this Gate.",
          "Fail": "You don't notice the Amulet of the Hound; gain a Hunted Condition. Close this Gate."
        }
      },
      "Fail": {
        "intro": "Your body goes numb with cold. Gain a Hypothermia Condition unless you spend 1 Focus.",
        "choices": {
          "Gain a Hypothermia Condition": "Lose 1 Health and 1 Sanity.",
          "Spend 1 Focus": "You are able to wipe away the symbols he's drawn on the rocks and escape; close this Gate."
        }
      }
    }
  },
  {
    "cardId": 33,
    "expansionId": "Mountains of Madness",
    "intro": "Something on the horizon attracts your attention. Before you can identify it, a blinding snowstorm picks up. Through the snow, you are no longer sure of the direction you're going. Resolve the pass effect to press forward or resolve the fail effect to turn back.",
    "choices": {
      "Resolve the pass effect to press forward": {
        "intro": "Pushing through the storm, you see a mountain ahead of you and Leng disappearing behind you. You attempt to climb the steep slope (<img src=\"images/Strength.webp\">-1).",
        "choices": {
          "Pass": "You reach the top and realize you've climbed Mt. Everest; close this Gate and improve <img src=\"images/Will.webp\">. Move to The Himalayas.",
          "Fail": "Move to The Himalayas."
        }
      },
      "Resolve the fail effect to turn back": {
        "intro": "The storm seems to follow you and you begin to sense an eerie presence. Suddenly, you stumble onto the deck of a ship and beg for the crew's help (<img src=\"images/Influence.webp\">-1).",
        "choices": {
          "Pass": "They make sure nothing else comes through; close this Gate. Move to space 13.",
          "Fail": "Move to space 13."
        }
      }
    }
  },
  {
    "cardId": 34,
    "expansionId": "Mountains of Madness",
    "intro": "As you approach the Pharos of Leng, the ground before you cracks open. You see an amorphous black shape slowly bubbling up from the ground. Something about the living mass reminds of a passage from an ancient text (<img src=\"images/Lore.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "Recognizing the shape as one of Nyogtha's tendrils, you run to the tower. The strange energies there return you to Earth. Close this Gate. When you go, a small piece of Nyogtha tries to go with you (<img src=\"images/Observation.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "Gain 1 Pursuit Condition."
        }
      },
      "Fail": {
        "intro": "The shape pulls you underground. Lose 1 Health. You see a little bit of light and climb toward it (<img src=\"images/Strength.webp\">).",
        "choices": {
          "Pass": "You climb out back on Earth; close this Gate.",
          "Fail": "The ground crushes you; gain 1 Injury Condition."
        }
      }
    }
  },
  {
    "cardId": 55,
    "expansionId": "The Dreamlands",
    "intro": "Exploring a crude stone hut, you are discovered by a brutish man with horns and cloven hooves. He corners you, threatening to deliver you to the moon-beasts. You try to bribe the strange man to let you go (<img src=\"images/Influence.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "The creature greedily accepts your offer. He tells you how to return home and destroy the doorway between worlds. Close this Gate. As he guides you, he secretly tries to steal some of your belongings (<img src=\"images/Observation.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "Lose 1 Sanity and discard 1 Item possession."
        }
      },
      "Fail": {
        "intro": "You are thrown onto a slave ship. Lose 2 Sanity. A sailor offers to free you in exchange for secrets. You may spend 2 Clues to close this Gate.",
        "choices": {
          "Spend 2 Clues to close this Gate": "",
          "Do not close this Gate": "You escape but cannot recall how; gain an Amnesia Condition."
        }
      }
    }
  }
];
