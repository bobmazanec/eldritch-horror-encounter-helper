deckData.OtherWorld["Great Hall of Celaeno"] = [
  {
    "cardId": 1,
    "expansionId": "Eldritch Horror",
    "intro": "You are stunned to see a familiar face reading through tomes of dark sorcery. You try to catch a glimpse of what he's reading without alerting him to your presence (<img src=\"images/Observation.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You learn what he's been reading and realize that he has opened a portal between worlds; close this Gate. Afterward, you examine the book that he was reading (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "Gain 1 Clue or 1 Spell.",
          "Fail": "You've never encountered such horrors before; lose 2 Sanity."
        }
      },
      "Fail": {
        "intro": "He spots you and unleashes a torrent of arcane energy that tears at your mind. Lose 3 Sanity unless you spend 1 Clue.",
        "choices": {
          "Lose 3 Sanity": "",
          "Spend 1 Clue": ""
        }
      }
    }
  },
  {
    "cardId": 11,
    "expansionId": "Eldritch Horror",
    "intro": "You are forbidden to enter the library unless you bear the necessary sigil. You draw the symbol to the best of your knowledge (<img src=\"images/Lore.webp\">).",
    "choices": {
      "Pass": {
        "intro": "After you enter the Great Hall, you realize you must have confidence in your actions so others do not suspect you of trespassing (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "You recover the book you are looking for; close this Gate.",
          "Fail": "Your fear gives you away and you are held captive; become Delayed."
        }
      },
      "Fail": {
        "intro": "Your drawing proves insufficient and you find yourself back on Earth, struggling to retain your memories of what happened. Gain an Amnesia Condition unless you spend 1 Clue.",
        "choices": {
          "Gain an Amnesia Condition": "",
          "Spend 1 Clue": ""
        }
      }
    }
  },
  {
    "cardId": 16,
    "expansionId": "Eldritch Horror",
    "intro": "The book you are looking for is not on its proper shelf. You search the surrounding area, but after long hours you have lost the will to keep searching (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "The tome was hidden at the back of the shelf. Opening it up you find a series of handwritten instructions scrawled in the margin. You follow the instructions to the best of your understanding (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "Close this Gate.",
          "Fail": "You become frustrated; lose 1 Sanity."
        }
      },
      "Fail": {
        "intro": "You cannot find the book, but perhaps you unknowingly already have the information you need. You may spend 1 Clue to close this Gate.",
        "choices": {
          "Spend 1 Clue to close this Gate": "",
          "Do not close this Gate": "You become Delayed."
        }
      }
    }
  },
  {
    "cardId": 20,
    "expansionId": "Eldritch Horror",
    "intro": "The book you are reading describes complex rituals in very abstract terms. You do your best to comprehend the dense material (<img src=\"images/Lore.webp\">).",
    "choices": {
      "Pass": {
        "intro": "You gradually begin to see a pattern emerge. Gain 1 Spell. After staring so long at the book, however, you've forgotten how to get back home. You ask others in the library for help (<img src=\"images/Influence.webp\">-1).",
        "choices": {
          "Pass": "An alien creature comes to your aid; close this Gate.",
          "Fail": "You wander the Great Hall; become Delayed."
        }
      },
      "Fail": {
        "intro": "The opaque descriptions twist your mind with horrid imagery. Gain a Hallucinations Condition. In your unsteady state, you are overcome by vertigo as you descend the stairs to leave. You must focus to keep your footing (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "Lose 2 Health."
        }
      }
    }
  },
  {
    "cardId": 37,
    "expansionId": "Strange Remnants",
    "intro": "Something terrible happened in this section of the library. The walls are scorched, most of the books are ruined, and the shelves seem on the brink of collapse. The smell of burnt flesh threatens to overwhelm you (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "You endure the scent and find the book you seek! Gain 1 random Tome Asset from the deck. The text includes a cryptic warning (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You disarm the arcane trap; close this Gate.",
          "Fail": "You burst into flames; lose 2 Health."
        }
      },
      "Fail": {
        "intro": "You choke on the smoke and fumes. Gain an Internal Injury Condition. As you cough, a shelf starts to topple (<img src=\"images/Strength.webp\">).",
        "choices": {
          "Pass": "You keep it standing, and the keepers of these tomes are grateful; close this Gate.",
          "Fail": "You are crushed; lose 2 Health."
        }
      }
    }
  },
  {
    "cardId": 46,
    "expansionId": "Under the Pyramids",
    "intro": "As you wander through the labyrinthine shelves, the lights are suddenly extinguished. You can hear scraping noises in the darkness, paralyzing you with fear. You try to summon the courage to find your way in the dark (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "Moving through the aisles, you try to recall the layout of the library (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You find your way to an exit; close this Gate.",
          "Fail": "You fear that you will never find your way out again; gain a Despair Condition."
        }
      },
      "Fail": {
        "intro": "You stay where you are and soon some creature claws at you in the dark (<img src=\"images/Strength.webp\">).",
        "choices": {
          "Pass": "You drive the beast away and it leaves behind a book; gain 1 Tome Unique Asset.",
          "Fail": "The beast bites you; gain 1 Injury Condition."
        }
      }
    }
  },
  {
    "cardId": 61,
    "expansionId": "Cities in Ruin",
    "intro": "You encounter an elderly version of yourself who claims to have spent years studying in the library. Your other self shows you several obscure books and tries to teach you a lifetime of occult knowledge (<img src=\"images/Lore.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You grasp the important lessons. Close this Gate. However, your other self indicates that there is still a great deal for you to learn, if you are willing to stay and continue your studies. You may become Delayed to gain 2 Clues.",
        "choices": {
          "Become Delayed to gain 2 Clues": "",
          "Do not gain 2 Clues": ""
        }
      },
      "Fail": {
        "intro": "Speaking to your future self is too bizarre to endure. Gain 1 Madness Condition. You try to do as the other you instructs (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "You succeed; close this Gate.",
          "Fail": "You make an error that results in the death of the other you; lose 2 Sanity."
        }
      }
    }
  },
  {
    "cardId": 65,
    "expansionId": "Cities in Ruin",
    "intro": "A hooded figure invites you to sit. His pen is poised to write, and he looks to you expectantly, waiting for you to tell him a story. You may spend 1 Clue to resolve the pass effect. If you do not spend the Clue, resolve the fail effect.",
    "choices": {
      "Spend 1 Clue to resolve the pass effect": {
        "intro": "The figure nods and writes the next chapter of your story, restoring reality to its original state. Close this Gate. You are afraid to read any further (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "You see how your character develops; gain 1 Talent Condition.",
          "Fail": "You see how you die; lose 1 Sanity."
        }
      },
      "Resolve the fail effect": {
        "intro": "The figure invents a story about your failure. Lose 2 Sanity. At the conclusion of the tale, he inscribes a phrase in an alien language (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You interpret the words and speak them aloud to mend the tear in reality; close this Gate.",
          "Fail": ""
        }
      }
    }
  }
];
