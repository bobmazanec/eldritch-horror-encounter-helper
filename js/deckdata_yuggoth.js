deckData.OtherWorld["Yuggoth"] = [
  {
    "cardId": 10,
    "expansionId": "Eldritch Horror",
    "intro": "You find a room filled with strange metal cylinders. Inside of each cylinder is a living brain that can communicate through a speaker box. You ask them for help (<img src=\"images/Influence.webp\">).",
    "choices": {
      "Pass": {
        "intro": "They describe how to operate the mi-go's machinery to travel between worlds. Based on what they say, you try to operate the alien devices (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You return home; close this Gate.",
          "Fail": "The machine shows you horrid vistas you would never want to visit; lose 1 Sanity."
        }
      },
      "Fail": {
        "intro": "The disembodied brains demand that you stay. They tell you terrible secrets they've learned about the fate of the Earth. Lose 2 Sanity unless you spend 1 Clue.",
        "choices": {
          "Lose 2 Sanity": "",
          "Spend 1 Clue": ""
        }
      }
    }
  },
  {
    "cardId": 13,
    "expansionId": "Eldritch Horror",
    "intro": "You discover a waxen mask and artificial hands. Your mind reels as you realize that the old man you had spoken to earlier was actually some terrible creature disguised as a human (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "You realize now that the old man's words carry a secondary meaning. You attempt to decrypt what he said (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You understand the man's implied instructions; close this Gate.",
          "Fail": "His words lead you in circles; become Delayed."
        }
      },
      "Fail": {
        "intro": "What was the nature of that blasphemous horror behind the mask? You consult your notes, trying to find what might disguise itself this way (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "You find the data you need; close this Gate.",
          "Fail": "Fear of the unknowable eats at your thoughts; lose 3 Sanity."
        }
      }
    }
  },
  {
    "cardId": 15,
    "expansionId": "Eldritch Horror",
    "intro": "You discover a fetid creature with wings and webbed feet. The beast is strange, like something from your wildest dreams. You may spend 1 Clue to resolve the pass effect. If you do not spend the Clue, resolve the fail effect.",
    "choices": {
      "Spend 1 Clue to resolve the pass effect": {
        "intro": "You believe you've read of a way to use this beast to travel through space (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You remember that by drinking space-mead you can safely use this byakhee to return home; close this Gate.",
          "Fail": "You drink something you shouldn't have; gain a Hallucinations Condition."
        }
      },
      "Resolve the fail effect": {
        "intro": "The creature is terrifying, but if you can keep your calm, you will be able to overpower it (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "You subdue the creature and use it to return home; close this Gate.",
          "Fail": "Lose 1 Health."
        }
      }
    }
  },
  {
    "cardId": 22,
    "expansionId": "Eldritch Horror",
    "intro": "The mi-go refuse to go near the city of green pyramids. You summon your courage and explore this abandoned area (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "You find lost treasure! Gain 1 Artifact. You hear sounds coming from within the pyramids and look for a place to hide (<img src=\"images/Observation.webp\">-1).",
        "choices": {
          "Pass": "You stay out of sight until the threat is gone; close this Gate.",
          "Fail": "You wake up uncertain of what's happened; gain an Amnesia Condition."
        }
      },
      "Fail": {
        "intro": "You run from the pyramids as fast as you can. Until the mi-go return, you need to rely on your own means of survival (<img src=\"images/Strength.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "You succumb to the harsh elements of this strange world; lose 1 Health and 1 Sanity."
        }
      }
    }
  },
  {
    "cardId": 27,
    "expansionId": "Forsaken Lore",
    "intro": "You find a dead mi-go that was carrying a large container of the strange metal known as tok'l. Although valuable, the substance is also extremely heavy, and the container proves difficult to move (<img src=\"images/Strength.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You hope to trade the tok'l to the mi-go in exchange for their help (<img src=\"images/Influence.webp\">-1).",
        "choices": {
          "Pass": "The strange, winged crustaceans agree and return you home; close this Gate.",
          "Fail": "The mi-go use a device to steal both the container and your memories; gain an Amnesia Condition."
        }
      },
      "Fail": {
        "intro": "The container proves too heavy to carry. Gain a Back Injury Condition. You take only a small sample to study (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "The alien substance gives you insight into the arcane arts; gain 1 Spell.",
          "Fail": ""
        }
      }
    }
  },
  {
    "cardId": 35,
    "expansionId": "Mountains of Madness",
    "intro": "Strange luminescent murals have been painted on the dark stone. They depict a family of Outer Gods. You may spend 1 Focus to learn the story being shown. If you spend the Focus, resolve the pass effect. If you do not spend the Focus, resolve the fail effect.",
    "choices": {
      "Spend 1 Focus to learn the story being shown": {
        "intro": "The children of Cxaxuluth fled Yuggoth to avoid being eaten by their father. You can use their path to return home. Close this Gate. However, some of the glowing paint got on your skin (<img src=\"images/Observation.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "Your flesh rots; lose 2 Sanity and gain an Infection Condition."
        }
      },
      "Do not spend the Focus": {
        "intro": "As you pass the murals, radiation burns appear on your skin. Lose 1 Health. You struggle to keep going (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You find Cxaxuluth surrounded by extra-dimensional energy, and you use the energy to return home; close this Gate.",
          "Fail": ""
        }
      }
    }
  },
  {
    "cardId": 39,
    "expansionId": "Strange Remnants",
    "intro": "You discover a series of large blue objects with disks attached by metal rods. You believe the mi-go transmit information using these disks and try to learn what you can about Yuggoth (<img src=\"images/Lore.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You receive a telepathic image of a way home. Close this Gate. The disk begins to alter your brain (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You use this to your benefit; gain 1 Boon Condition.",
          "Fail": "The changes are irreversible; lose 1 Sanity and gain a Head Injury Condition."
        }
      },
      "Fail": {
        "intro": "A man named Taylor will teach you to use the disks if you help him find tok'l. You may gain an Agreement Condition to close this Gate.",
        "choices": {
          "Gain an Agreement Condition to close this Gate": "",
          "Do not close this Gate": "He uses Azathoth's true name against you; lose 2 Sanity and gain an Amnesia Condition."
        }
      }
    }
  },
  {
    "cardId": 45,
    "expansionId": "Under the Pyramids",
    "intro": "You find yourself on the cloud-covered moon, Nithon, looking down upon the surface of Yuggoth. You try to find the pyramids on the planet's surface (<img src=\"images/Observation.webp\">).",
    "choices": {
      "Pass": {
        "intro": "As soon as you glimpse the pyramids, a terrible green light shoots up from their apex. You feel the light tearing your mind apart (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "The light sends you home; close this Gate.",
          "Fail": "The light devastates your mind; lose 2 Sanity."
        }
      },
      "Fail": {
        "intro": "Mi-go scientists spot you and beam messages into your brain. You try to interpret these alien ideas (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You gain occult insight; gain 1 Spell.",
          "Fail": "The thoughts disturb your senses; gain 1 Madness Condition."
        }
      }
    }
  },
  {
    "cardId": 66,
    "expansionId": "Cities in Ruin",
    "intro": "You find yourself in an abandoned mine on Thog, one of the moons of Yuggoth. Somewhere in the distance you can hear the distinctive cries of shoggoths. The sound terrifies you to your core and you fight the urge to flee (<img src=\"images/Will.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You find abandoned equipment that can be used to return you home. Close this Gate. Before you go, you search the area (<img src=\"images/Observation.webp\">-1).",
        "choices": {
          "Pass": "You find a series of revelatory murals; gain 2 Clues.",
          "Fail": "You stumble in the dark; discard 2 Item possessions."
        }
      },
      "Fail": {
        "intro": "You run blindly and find yourself surrounded by strange fungi (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You use the mushrooms to repair reality; close this Gate.",
          "Fail": "You suffer a terrible delusional trauma as a result of the mushrooms; lose 3 Sanity."
        }
      }
    }
  }
];
