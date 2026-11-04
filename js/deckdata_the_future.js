deckData.OtherWorld["The Future"] = [
  {
    "cardId": 2,
    "expansionId": "Eldritch Horror",
    "intro": "You stand in Times Square, New York, but not as you know it. The streets are empty, and the buildings have crumbled to dust. It appears that you will fail to save the world, and you try desperately not to fall into despair (<img src=\"images/Will.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You get to your feet and find what is left of the central library. The books you find there prove useful; close this Gate. Deep in the basement of the library, you dig through the archives, searching for clues about the downfall of man (<img src=\"images/Observation.webp\">).",
        "choices": {
          "Pass": "Gain 2 Clues.",
          "Fail": ""
        }
      },
      "Fail": {
        "intro": "As you kneel sobbing on the cracked pavement, a shadow of a man falls over you. \"You caused this,\" the man says calmly. His gold headdress looks somehow familiar (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "You accept the truth in his words; lose 6 Sanity."
        }
      }
    }
  },
  {
    "cardId": 8,
    "expansionId": "Eldritch Horror",
    "intro": "You find yourself in a familiar city, but there's no electricity. The only light comes from the greenish moon, and the only sound is distant screaming. You can feel your reason being overrun by fear (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "Resisting the urge to panic, you find a large metal and glass machine that has electricity sparking across its surface. You try to learn how to operate the device (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You return to your own time; close this Gate.",
          "Fail": "You receive an electrical shock; lose 2 Health."
        }
      },
      "Fail": {
        "intro": "Without thinking, you start walking with a long line of people. You hear screams from the people ahead of you. You try to escape, but the area is being guarded (<img src=\"images/Strength.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "You return home with no memory of what happened; gain an Amnesia Condition."
        }
      }
    }
  },
  {
    "cardId": 29,
    "expansionId": "Forsaken Lore",
    "intro": "You find yourself in an unknown place. Large beetle-like creatures swarm over the landscape. You search the charred surroundings to find some central location from which they originate (<img src=\"images/Observation.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You reach a city and discover a written form of language (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You realize that this is the Great Race of Yith in the far future and convince them to send you home; close this Gate.",
          "Fail": "The toxic atmosphere takes a toll on you before you can find an escape; gain a Poisoned Condition."
        }
      },
      "Fail": {
        "intro": "One of the beetles tries to dominate your mind (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You retain your personality but gain memories of other times; gain 1 Clue.",
          "Fail": "You trade bodies with the beetle temporarily; gain a Lost in Time and Space Condition."
        }
      }
    }
  },
  {
    "cardId": 47,
    "expansionId": "Under the Pyramids",
    "intro": "You find yourself in the near future, imprisoned in a compound with hundreds of plague victims. Resolve the pass effect to stay among the sick and try to help them; or resolve the fail effect to try to sneak out.",
    "choices": {
      "Resolve the pass effect to stay among the sick and try to help them": {
        "intro": "You try to resist giving in to the disease (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "One of the other inmates helps you to return to your own time to prevent this fate; close this Gate.",
          "Fail": "You succumb to the symptoms; gain 1 Illness Condition."
        }
      },
      "Resolve the fail effect to try to sneak out": {
        "intro": "You try to sneak past the compound's guards in the night (<img src=\"images/Observation.webp\">-1).",
        "choices": {
          "Pass": "You find a machine that sends plague victims into the past; close this Gate.",
          "Fail": "The guards leave you badly wounded; gain 1 Injury Condition."
        }
      }
    }
  },
  {
    "cardId": 57,
    "expansionId": "The Dreamlands",
    "intro": "You find yourself wading through the endless river of time, indecipherable visions of past, present, and future dragging at your legs, trying to pull you under. You steel yourself and try to make headway against the raging current (<img src=\"images/Strength.webp\">).",
    "choices": {
      "Pass": {
        "intro": "You hold fast, and the myriad avenues of the future blossom into being. Close this Gate. The present is already forming around you, only your own path is yet unwritten (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You emerge triumphant; gain 1 Boon Condition.",
          "Fail": "You drift aimlessly into the sea; gain a Lost in Time and Space Condition."
        }
      },
      "Fail": {
        "intro": "You hurtle through the ages, arriving abruptly at the moment of your death (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You resolve that nothing is immutable and emerge unscathed; recover 1 Sanity.",
          "Fail": "Your mind collapses under the weight of predestination; lose 6 Sanity."
        }
      }
    }
  },
  {
    "cardId": 70,
    "expansionId": "Masks of Nyarlathotep",
    "intro": "This far flung future is much like the lost ancient civilizations, filled with wizards and the worship of blasphemous gods. You are told this land is called Zothique. You ask one of the wizards to seal the portal that lead you here (<img src=\"images/Influence.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "The wizard obliges. Close this Gate. In return, he asks you to interpret an ancient book (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "You recognize the significance of this text; gain 1 Tome Artifact.",
          "Fail": "The book is disturbing but not useful; lose 2 Sanity."
        }
      },
      "Fail": {
        "intro": "The wizard summons dark visions. Gain a Hallucinations Condition. You struggle to endure these sights (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "You see how to seal this portal; close this Gate.",
          "Fail": {
            "intro": "The visions become real; a Monster ambushes you!",
            "choices": {
              "Resolved the combat": ""
            }
          }
        }
      }
    }
  },
  {
    "cardId": 71,
    "expansionId": "Masks of Nyarlathotep",
    "intro": "You discover an era of technological marvels. Using a small handheld device, people are able to communicate with others around the globe and access vast amounts of knowledge. You try to figure out how to use one of these devices (<img src=\"images/Lore.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You find the means to seal this doorway. Close this Gate. There is plenty of other information, but much of it is lies (<img src=\"images/Observation.webp\">-1).",
        "choices": {
          "Pass": "You identify the truth; gain 2 Clues.",
          "Fail": "You give more than you can afford to a struggling Nigerian prince; gain a Debt Condition."
        }
      },
      "Fail": {
        "intro": "Your search leads to darkness and horrors. Lose 1 Sanity. You find images and descriptions of cults and their blasphemous rites (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "You learn what you need; close this Gate.",
          "Fail": "You become their victim; gain a Cursed Condition."
        }
      }
    }
  },
  {
    "cardId": 72,
    "expansionId": "Masks of Nyarlathotep",
    "intro": "A future version of you lies in a rancid hotel room slowly dying of vicious wounds while mumbling incoherently. You try to speak to this other you, but it is difficult to face that this is your ultimate fare (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "The other you points to a letter that describes how to seal the portal. Close this Gate. The letter also contains an ancient rite (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You perform the rite correctly; gain 1 Spell.",
          "Fail": "The rite changes you; gain a Corruption Condition."
        }
      },
      "Fail": {
        "intro": "You think that if you provide your future self with supplies, you may recover and seal this portal. You may spend 1 Resource to close this Gate.",
        "choices": {
          "Spend 1 Resource to close this Gate": "You cannot endure knowing that this will be your fate. Gain an Amnesia Condition.",
          "Do not close this Gate": "You cannot endure knowing that this will be your fate. Gain an Amnesia Condition."
        }
      }
    }
  }
];
