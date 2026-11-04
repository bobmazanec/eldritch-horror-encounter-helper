deckData.OtherWorld["The Past"] = [
  {
    "cardId": 5,
    "expansionId": "Eldritch Horror",
    "intro": "Through the slits in the closet door you see yourself as a small child, sitting up in bed. \"Who's there?\" asks a frightened voice. You try to calmly persuade your younger self that you're a friend (<img src=\"images/Influence.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "The child calms down, but eyes you suspiciously. \"Listen carefully to what I say,\" you tell yourself. \"It might save your life...\" You may become Delayed to gain 2 Clues.",
        "choices": {
          "Become Delayed to gain 2 Clues": "Close this Gate.",
          "Do not gain 2 Clues": "Close this Gate."
        }
      },
      "Fail": {
        "intro": "The child screams out for help, and a man bursts into your bedroom. Your father aims his shotgun at your chest, and you attempt to wrestle it away (<img src=\"images/Strength.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "You are peppered with buckshot; lose 6 Health."
        }
      }
    }
  },
  {
    "cardId": 6,
    "expansionId": "Eldritch Horror",
    "intro": "You find yourself standing in front of antique scientific equipment. According to the papers the year is 1771. You read through the notes and try to interpret the nature of the experiments (<img src=\"images/Lore.webp\">).",
    "choices": {
      "Pass": {
        "intro": "Joseph Curwen was using this lab to revive dead wizards from their ashes and interrogate them for arcane knowledge. Using his notes, you close this Gate. The rest of his results may also prove useful. You may become Delayed to gain 1 Spell.",
        "choices": {
          "Become Delayed to gain 1 Spell": "",
          "Do not gain 1 Spell": ""
        }
      },
      "Fail": {
        "intro": "These notes make no sense to you. Your reading is interrupted by a terrible moaning sound, and you find malformed creatures trapped in deep wells under the stone floor. The sight of them tears at your mind (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "Lose 3 Sanity."
        }
      }
    }
  },
  {
    "cardId": 26,
    "expansionId": "Forsaken Lore",
    "intro": "Through the shifting sands of the desert, you spot a deranged-looking man. You try to follow him, but he abruptly disappears. You search the wind-swept landscape for any sign of him (<img src=\"images/Observation.webp\">).",
    "choices": {
      "Pass": {
        "intro": "You find the man inside a cave, examining a mural. You think you recognize Abdul Alhazred and the Nameless City (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "The Mad Arab returns you to your home; close this Gate.",
          "Fail": "You leave the cave, forsaken; gain a Cursed Condition."
        }
      },
      "Fail": {
        "intro": "You wander in the unrelenting heat of the desert, forcing yourself to keep going (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You eventually find an object in the sands; gain 1 Artifact.",
          "Fail": "You collapse in despair; lose 2 Health and gain a Hallucinations Condition."
        }
      }
    }
  },
  {
    "cardId": 48,
    "expansionId": "Under the Pyramids",
    "intro": "You find yourself in Providence, Rhode Island over sixty years ago. The police have surrounded what looks like a church. Resolve the pass effect to help the police; or resolve the fail effect to protect the church.",
    "choices": {
      "Resolve the pass effect to help the police": {
        "intro": "After the police arrest the cult's leader, he demands to speak to you about arcane secrets (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "He deems you worthy; gain the Enoch Bowen Unique Asset.",
          "Fail": "You are disheartened by your own weakness, impair <img src=\"images/Will.webp\">."
        }
      },
      "Resolve the fail effect to protect the church": {
        "intro": "You fight to drive away the police (<img src=\"images/Strength.webp\">-1).",
        "choices": {
          "Pass": "You gain the gratitude of the Church of Starry Wisdom; gain the Enoch Bowen Unique Asset.",
          "Fail": "They throw you in prison; gain a Detained Condition."
        }
      }
    }
  },
  {
    "cardId": 64,
    "expansionId": "Cities in Ruin",
    "intro": "You appear on the continent of Mu the day it was destroyed and pulled beneath the ocean. Resolve the pass effect to discover what you can before the island is destroyed; or resolve the fail effect to reverse the magic that pulled you here.",
    "choices": {
      "Resolve the pass effect to discover what you can before the island is destroyed": {
        "intro": "The carnage around you is traumatic to witness (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You find ancient sorcerers trying to save Mu who are willing to use their power to repair the tear in reality; close this Gate.",
          "Fail": "The horror is too much to bear; lose 2 Sanity."
        }
      },
      "Resolve the fail effect to reverse the magic that pulled you here": {
        "intro": "You try to manipulate the residual energy of the magic (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "You harness the power to repair the damage to time and space; close this Gate.",
          "Fail": "Your error makes you partly responsible for the destruction of Mu; gain 1 Bane Condition."
        }
      }
    }
  },
  {
    "cardId": 67,
    "expansionId": "Masks of Nyarlathotep",
    "intro": "On the other side of the portal, you find yourself in an empty city with enormous primitive buildings made of green stone. As the city begins to shake and flood, you realize where you are and try to manipulate the portal to escape (<img src=\"images/Lore.webp\">).",
    "choices": {
      "Pass": {
        "intro": "You escape R'lyeh and seal the doorway. Close this Gate. Afterwards, you suffer from dreams of the city (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "These visions reveal hidden secrets; gain 1 Clue.",
          "Fail": "You cannot endure the nightmares; lose 2 Sanity."
        }
      },
      "Fail": {
        "intro": "You tumble down into a fissure that opens. You may spend 1 Resource to use your supplies to climb back up to the doorway.",
        "choices": {
          "Spend 1 Resource to use your supplies to climb back up to the doorway": "",
          "Do not use your supplies to climb back up to the doorway": "You are stranded in this alien city for days; lose 3 Sanity."
        }
      }
    }
  },
  {
    "cardId": 68,
    "expansionId": "Masks of Nyarlathotep",
    "intro": "You are shocked to see a younger version of yourself participating in the cult ritual that opened this portal, despite you having no memory of doing so. Resolve the pass effect to observe the ritual; or resolve the fail effect to interrupt it.",
    "choices": {
      "Resolve the pass effect to observe the ritual": {
        "intro": "You watch in horror as the cultists invoke their gods and then steal your memory (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You learn what you need to seal this portal; close this Gate.",
          "Fail": "You succumb to the memory loss again; gain an Amnesia Condition."
        }
      },
      "Resolve the fail effect to interrupt it": {
        "intro": "Before the ritual is complete you try to sabotage a critical element (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "The doorway never opens; close this Gate.",
          "Fail": "You make yourself vulnerable to blasphemous powers; gain 1 Bane Condition."
        }
      }
    }
  },
  {
    "cardId": 69,
    "expansionId": "Masks of Nyarlathotep",
    "intro": "The people of Arkham are prowling the streets hunting a witch. You notice they use old-fashioned words and dress in outdated clothes. You realize the year is 1692. Soon you come face to face with the dreaded Keziah Mason (<img src=\"images/Will.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You capture her and are rewarded with training. Gain 1 Talent Condition. Mason escapes, leaving a strange symbol on the wall (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You can use this glyph; close this Gate.",
          "Fail": "Mason has her revenge; gain 1 Bane Condition."
        }
      },
      "Fail": {
        "intro": "She binds you to her master. Gain a Corruption Condition. You try to manipulate the goat-legged being into helping you (<img src=\"images/Influence.webp\">).",
        "choices": {
          "Pass": "He does so; close this Gate.",
          "Fail": "Both your body and soul are transformed; gain 1 Bane Condition."
        }
      }
    }
  }
];
