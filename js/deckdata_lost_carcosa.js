deckData.OtherWorld["Lost Carcosa"] = [
  {
    "cardId": 4,
    "expansionId": "Eldritch Horror",
    "intro": "Turning the corner, you suddenly find yourself on stage. Other actors speak their dialogue and look at you expectantly. Someone offstage passes you a script, but the text is difficult to interpret (<img src=\"images/Lore.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "The audience applauds your performance and curtain falls. Close this Gate. You consider sticking around for the second show in hopes of picking up details you missed the first time. You may become Delayed to gain 2 Clues.",
        "choices": {
          "Become Delayed to gain 2 Clues": "",
          "Do not gain 2 Clues": ""
        }
      },
      "Fail": {
        "intro": "The other actors glare at you, waiting for you to speak. You hope that by simple acting with confidence they'll believe it's someone else's line (<img src=\"images/Influence.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "The show comes to a stop, and everyone silently leaves the theater; advance Doom by 1."
        }
      }
    }
  },
  {
    "cardId": 12,
    "expansionId": "Eldritch Horror",
    "intro": "You grow frustrated walking through the empty streets, able to hear people talking and laughing nearby, but unable to catch up to them. You try to focus and distinguish specific words from the mingling conversations (<img src=\"images/Observation.webp\">).",
    "choices": {
      "Pass": {
        "intro": "The words you hear sound familiar to something you've read. You try to recall their significance (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You use the words to close this Gate.",
          "Fail": "The words insinuate themselves into every conversation you hear; gain a Paranoia Condition."
        }
      },
      "Fail": "The words remain unintelligible, and you realize that you've become lost in the city while chasing after these voices. You walk, lost, through Carcosa's darkest alleyways and consider timestakingly retracing your steps. Lose 2 Sanity unless you become Delayed."
    }
  },
  {
    "cardId": 17,
    "expansionId": "Eldritch Horror",
    "intro": "Staring out at the cloudy water of Lake Hali, you are horrified to see the entire lake rippling, as if something at the bottom is about to surface. You are seized by a terrible panic that paralyzes you (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "Through sheer will, you force yourself to run toward the door you entered through. You find the doorway has been replaced by a blank wall. You try to recall an incantation from your studies that will open the lost portal (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "Close this Gate.",
          "Fail": "You frantically scratch at the wallpaper; lose 1 Sanity."
        }
      },
      "Fail": {
        "intro": "Suddenly, a flurry of tentacles bursts out of the water. One of the flailing limbs grabs you and tries to pull you into the water. You attempt to bind the creature with powerful magic (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "You run for your life; close this Gate.",
          "Fail": "You are dragged into the water; lose 2 Health."
        }
      }
    }
  },
  {
    "cardId": 24,
    "expansionId": "Eldritch Horror",
    "intro": "At an elaborate masquerade, you talk to decadent party-goers who are all maneuvering to be declared as the proper heir to the crown (<img src=\"images/Influence.webp\">).",
    "choices": {
      "Pass": {
        "intro": "Believing that you can help him, a guest attempts to bribe you. Gain 1 Artifact. Seeing this, the Queen demands that you unmask. She questions you relentlessly in an attempt to discover what you've learned. Become Delayed unless you spend 2 Clues.",
        "choices": {
          "Become Delayed": "",
          "Spend 2 Clues": "You gain her favor; close this Gate."
        }
      },
      "Fail": {
        "intro": "You suddenly realize you are speaking to the Phantom of Truth. Lose 1 Sanity. Fear threatens to overwhelm you when you realize he is not wearing a mask (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "Gain a Paranoia Condition."
        }
      }
    }
  },
  {
    "cardId": 28,
    "expansionId": "Forsaken Lore",
    "intro": "A strange-looking man named Wilde offers to repair your reputation in exchange for information. You may spend 1 Clue to resolve the pass effect. If you do not spend the Clue, resolve the fail effect.",
    "choices": {
      "Spend 1 Clue to resolve the pass effect": {
        "intro": "Your reputation is repaired. Improve <img src=\"images/Influence.webp\">. Wilde then tells you that you are the Last King of America. You try to resist this delusion (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "Wilde troubles you no further and sends you home; close this Gate.",
          "Fail": "You become highly suspicious of threats to your throne; gain a Paranoia Condition."
        }
      },
      "Resolve the fail effect": {
        "intro": "After turning down the offer, you find yourself the target of a smear campaign engineered by Wilde. You are certain that you command enough respect to resist his efforts (<img src=\"images/Influence.webp\">-1).",
        "choices": {
          "Pass": "",
          "Fail": "People on the street openly glare at you; lose 1 Sanity and discard all Ally Assets."
        }
      }
    }
  },
  {
    "cardId": 42,
    "expansionId": "Strange Remnants",
    "intro": "The streets are filled with revelers wearing masks. In perfect, unnerving unison they turn to you and ask, \"Have you seen the Yellow Sign?\" Resolve the pass effect to tell them you have seen the sign; or resolve the fail effect to say you have not.",
    "choices": {
      "Resolve the pass effect to tell them you have seen the sign": {
        "intro": "You are suddenly dressed like the revelers and your sanity is slipping away (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You gain rare insight into Carcosa; gain 1 Glamour Spell and close this Gate.",
          "Fail": "The city consumes your mind; lose 2 Sanity and gain 1 Madness Condition."
        }
      },
      "Resolve the fail effect to say you have not": {
        "intro": "The mob turns on you, and you hide (<img src=\"images/Observation.webp\">-1).",
        "choices": {
          "Pass": "You later emerge to find torn and bloody masks and an object; gain 1 Relic Unique Asset and close this Gate.",
          "Fail": "The crowd finds you; lose 2 Sanity and gain a Head Injury Condition."
        }
      }
    }
  },
  {
    "cardId": 43,
    "expansionId": "Under the Pyramids",
    "intro": "You find yourself lost in a tower with stairs going all directions. The walls, the ceiling, and the floor all look alike to you. You try to make sense of this strange labyrinth and find your way to the top of the tower (<img src=\"images/Lore.webp\">).",
    "choices": {
      "Pass": {
        "intro": "In the upper chamber, a masked figure wrapped in tatters sits on a throne. It looks at you, filling your thoughts with chaos (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "You harness its power to return yourself home; close this Gate.",
          "Fail": "Your mind shatters; lose 2 Sanity."
        }
      },
      "Fail": {
        "intro": "You eventually encounter a much older version of yourself. You ask this other you for help (<img src=\"images/Influence.webp\">).",
        "choices": {
          "Pass": "The other you shows you the path; close this Gate.",
          "Fail": "Your double despises you; gain a Despair Condition."
        }
      }
    }
  },
  {
    "cardId": 49,
    "expansionId": "Signs of Carcosa",
    "intro": "You have been told to never speak the name of Hastur, especially here in Carcosa. Resolve the pass effect to ignore this advice; or resolve the fail effect to say \"The Unspeakable One\" instead.",
    "choices": {
      "Resolve the pass effect to ignore this advice": {
        "intro": "You speak his name and Hastur floods your mind. You try to focus on a chant to protect yourself (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "Hastur leaves you and closes this doorway; close this Gate.",
          "Fail": "Your mind shatters; gain 1 Madness Condition."
        }
      },
      "Resolve the fail effect to say \"The Unspeakable One\" instead": {
        "intro": "The more you avoid saying the name, the more afraid you become (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You walk through the doorway without fear, and it closes behind you; close this Gate.",
          "Fail": "You become afraid of speaking at all; impair <img src=\"images/Influence.webp\">."
        }
      }
    }
  },
  {
    "cardId": 50,
    "expansionId": "Signs of Carcosa",
    "intro": "You find pages of a play that feature you as a character. Resolve the pass effect to resist saying the lines written on the page; or resolve the fail effect to say your lines as they are written.",
    "choices": {
      "Resolve the pass effect to resist saying the lines written on the page": {
        "intro": "You struggle to resist the compulsion to say the lines (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "You prove that your will is strong and Carcosa begins to fade away; close this Gate.",
          "Fail": "Everything you do to resist is exactly as the script described; lose 2 Sanity."
        }
      },
      "Resolve the fail effect to say your lines as they are written": {
        "intro": "The script requires you to say strange words from dead languages (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "The words allow you to close this tear in reality; close this Gate.",
          "Fail": "You feel unable to play the role of yourself; impair <img src=\"images/Will.webp\">."
        }
      }
    }
  },
  {
    "cardId": 51,
    "expansionId": "Signs of Carcosa",
    "intro": "You find the lair of the Feaster from Afar. Its den is lined with stacks of bodies that all have had their brains removed through a hole in their skull. When the creature itself arrives, a wave of terror threatens to overwhelm you (<img src=\"images/Will.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "When the Feaster hunts in your world, you follow. Close this Gate. You try to warn its prey (<img src=\"images/Influence.webp\">-1).",
        "choices": {
          "Pass": "You save a life; gain 1 random Ally Asset from the deck.",
          "Fail": "You get blamed for the deaths; gain a Wanted Condition."
        }
      },
      "Fail": {
        "intro": "Seeing the beast shatters your mind. Gain 1 Madness Condition. You try to draw a warding symbol to protect yourself (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You can safely return home; close this Gate.",
          "Fail": "You stay in hiding for weeks, starving; impair <img src=\"images/Strength.webp\">."
        }
      }
    }
  },
  {
    "cardId": 52,
    "expansionId": "Signs of Carcosa",
    "intro": "Inside a well-appointed library, you sit down for a game of chess. Your opponent is quite old and wrapped in a silken robe. It will take a sharp mind to win the game (<img src=\"images/Lore.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "As you win, your opponent vanishes, and a door appears. Close this Gate. Before leaving, you examine the library's books (<img src=\"images/Observation.webp\">-1).",
        "choices": {
          "Pass": "You find a book about the future; gain 2 Clues.",
          "Fail": "You unlearn what you knew; impair <img src=\"images/Lore.webp\">."
        }
      },
      "Fail": {
        "intro": "You lose game after game. Lose 2 Sanity. You despair watching your opponent grow younger as you grow older (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "You overturn the board and escape; close this Gate.",
          "Fail": "The game leaves you in ruins; gain a Blight Condition."
        }
      }
    }
  },
  {
    "cardId": 53,
    "expansionId": "Signs of Carcosa",
    "intro": "In this world, there are two suns, and you cast two shadows. Strangely, one of your shadows seems to be moving independently from you. You can barely stand to watch this disturbing phenomenon (<img src=\"images/Will.webp\">).",
    "choices": {
      "Pass": {
        "intro": "Your other shadow teaches you a new ability. Gain 1 Talent Condition. When the suns set, you try to remember the way you came (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You return home; close this Gate.",
          "Fail": "You spend the night lost and alone; lose 2 Sanity."
        }
      },
      "Fail": {
        "intro": "You look away, but now something is chasing you. Gain 1 Pursuit Condition. As the suns grow closer, the heat and light become painful (<img src=\"images/Strength.webp\">-1).",
        "choices": {
          "Pass": "You find your way home; close this Gate.",
          "Fail": "The light blinds you; impair <img src=\"images/Observation.webp\">."
        }
      }
    }
  },
  {
    "cardId": 54,
    "expansionId": "Signs of Carcosa",
    "intro": "Thick fog is rolling in from Lake Hali, making it impossible to see. You try to navigate your way through the mist to find the doorway back to your world (<img src=\"images/Observation.webp\">).",
    "choices": {
      "Pass": {
        "intro": "Voices in the fog whisper secrets to you. Gain 1 Clue. You find the doorway, but it is sealed by the Yellow Sign (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "You pass without fear; close this Gate.",
          "Fail": "You are overcome by terror; lose 2 Sanity."
        }
      },
      "Fail": {
        "intro": "The fog clears, and you see the Yellow Sign. Gain 1 Madness Condition. You try to harness the power of the sigil (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "You return home; close this Gate.",
          "Fail": "The sign brands itself into your flesh; gain 1 Bane Condition."
        }
      }
    }
  },
  {
    "cardId": 56,
    "expansionId": "The Dreamlands",
    "intro": "You find a garden of perfectly sculpted marble statues. At the garden's center, you find a cloudy pool. You may spend 1 Focus to closely examine the pool. If you spend the Focus, resolve the pass effect. If you do not spend the Focus, resolve the fail effect.",
    "choices": {
      "Spend 1 Focus to closely examine the pool": {
        "intro": "You learn how to use the pool to turn living things to marble. Discard 1 Monster of your choice on any space. You can also restore them. You revive a woman who may be able to help you (<img src=\"images/Influence.webp\">).",
        "choices": {
          "Pass": "She can get you home; close this Gate.",
          "Fail": ""
        }
      },
      "Do not spend the Focus": {
        "intro": "You awake to discover that you have been standing in the garden as a statue for untold years. Lose 1 Sanity. A marble rabbit comes to life before you, and you chase it when it starts to hop away (<img src=\"images/Observation.webp\">-1).",
        "choices": {
          "Pass": "It leads you home; close this Gate.",
          "Fail": ""
        }
      }
    }
  }
];
