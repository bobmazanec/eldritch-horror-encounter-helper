deckData.Research["Ithaqua"] = [
  {
    "cardId": 1,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The city is blanketed in snow, and you search for any sign of your contact (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find him in a half-buried pub, and he shares what he's learned; gain this Clue and 1 additional Clue.",
        "Fail": "You stay out in the cold for too long; lose 1 Health and gain a Hypothermia Condition."
      }
    },
    "Wilderness": {
      "intro": "You are buried to your waist in a sudden deluge of snow and must dig yourself out to continue your journey (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You reach the rumored shrine and examine it; gain this Clue.",
        "Fail": "You are stuck until a rescue team finds you; lose 1 Sanity and gain a Hypothermia Condition."
      }
    },
    "Sea": {
      "intro": "The seas have become more treacherous as the temperature drops, but you press on to reach your goal (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find the ship wreck you were searching for; gain this Clue.",
        "Fail": "An iceberg strikes the hull, and you're forced to abandon ship; lose 1 Health and 1 Sanity."
      }
    }
  },
  {
    "cardId": 2,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You've been trapped by the blizzard for days, and your mind begins to waver (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You occupy yourself by rereading your notes and notice something you hadn't before; gain this Clue.",
        "Fail": "Your mind crumbles before you can escape your shelter; gain 1 Madness Condition."
      }
    },
    "Wilderness": {
      "intro": "You find webbed footprints in the snow and attempt to track the creature (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You follow the wendigo's tracks to its lair; gain this Clue and 1 additional Clue.",
        "Fail": {
          "intro": "The tracks turn back on themselves; a Wendigo Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "You hear a noise on the deck, and when you investigate you are surprised to find a stowaway with a feral look in his eye (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He calms down and tells you what he's seen; gain this Clue.",
        "Fail": "He attacks you before the crew throws him in the brig; lose 1 Health."
      }
    }
  },
  {
    "cardId": 3,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The power has gone out, and you search in the darkness for a source of light (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find a lantern and a loose floor board hiding an ancient scroll; gain this Clue.",
        "Fail": "You stumble in the dark and hurt yourself; lose 1 Sanity and gain a Leg Injury Condition."
      }
    },
    "Wilderness": {
      "intro": "You converse with an Algonquian medicine man who believes you can commune with the wendigo, the evil spirits of greed and gluttony, by meditating in the extreme cold. You may gain a Hypothermia Condition to gain this Clue.",
      "choices": {
        "Gain a Hypothermia Condition to gain this Clue": "",
        "Do not gain this Clue": ""
      }
    },
    "Sea": {
      "intro": "You explore a massive iceberg and discover a stone tablet frozen deep inside. You cannot make out the writing without liberating it from the ice (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "The tablet tells of the Wind-Walker; gain this Clue and 1 additional Clue.",
        "Fail": "You accidentally destroy the tablet; discard this Clue."
      }
    }
  },
  {
    "cardId": 4,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The blizzard has buried the city in snow. You negotiate for full access to the city's library in exchange for your assistance (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": {
          "intro": "Digging out the snow and searching the library will take some time; you may become Delayed to gain this Clue and 1 additional Clue.",
          "choices": {
            "Become Delayed to gain this Clue and 1 additional Clue": "",
            "Do not gain this Clue and 1 additional Clue": ""
          }
        },
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "You hear an eerie howling on the wind at night (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You identify the sound of the wendigo and move your camp; gain this Clue.",
        "Fail": {
          "intro": "What you thought was the howling wind proves to be much more dangerous; a Wendigo Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "A ship carrying vital medical supplies has capsized in icy waters. You may gain a Hypothermia Condition to dive into the surf and retrieve the medicine.",
      "choices": {
        "Gain a Hypothermia Condition to dive into the surf and retrieve the medicine": "The ship's crew shares the supplies and their stories; gain this Clue and 1 Provisions Unique Asset.",
        "Do not dive into the surf and retrieve the medicine": ""
      }
    }
  },
  {
    "cardId": 5,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "Searching the library's more esoteric books, you come across a passage relating to the previous ice age (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You identify the mark of the wizard Eibon in the page's margin; gain this Clue.",
        "Fail": "Something about the passage infects your thoughts; gain 1 Madness Condition."
      }
    },
    "Wilderness": {
      "intro": "You must reach the shelter of the clifftop cave before being caught in the oncoming blizzard (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "You find cave paintings inside that tell the history of Hyperborea; gain this Clue and 1 additional Clue.",
        "Fail": "You're too slow and the wind and snow take their toll; lose 2 Health."
      }
    },
    "Sea": {
      "intro": "The spirit of the wendigo assails you in your slumber, spreading its lustful nature (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You banish the spirit from your dreams and awake with new purpose; gain this Clue.",
        "Fail": "You begin to feel a gnawing hunger that rapidly intensifies; gain a Hunger Condition."
      }
    }
  },
  {
    "cardId": 6,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You meet a man driven mad by hunger. You attempt to reason with him, but he is beyond help. A Wendigo Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You search his belongings and find a totem related to the Wind-Walker; gain this Clue.",
            "Did not defeat it": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You strike out to investigate the reports of monstrous creatures in the wild (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discover fresh tracks that belong to the gnoph-keh; gain this Clue.",
        "Fail": "You become disoriented in the snow-covered wilderness and give up hope; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "You take shelter from the snow in a cave while exploring a small island (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find elaborate cave paintings that depict the Elder God Nodens banishing Ithaqua to another world; gain this Clue and 1 additional Clue.",
        "Fail": "The storm grows worse, and you cannot return to the ship for some time; become Delayed."
      }
    }
  },
  {
    "cardId": 7,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You receive an anonymous letter offering information that could be important to your cause. You arrive at the designated meeting place only to walk into a trap. A Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You recognize the creature as a worshiper of Ithaqua; gain this Clue.",
            "Did not defeat it": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You follow a suspected murdered in the wilds, expecting to gather some evidence (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "He leads you to shrine with beastly totems; gain this Clue and 1 additional Clue.",
        "Fail": "He lures you into a trap and you barely escape with your life; lose 1 Health and gain 1 Injury Condition."
      }
    },
    "Sea": {
      "intro": "Out here on the open seas, it is clear that something unnatural is affecting the weather. Between the abnormally bright northern lights and the ice sheets forming over even the deepest oceans, you know some foul magic is at work. Gain this Clue."
    }
  },
  {
    "cardId": 8,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "At the crime scene, you find the victim has been mauled as if by some savage animal (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You inspect the wounds and recognize human teeth marks; gain this Clue.",
        "Fail": {
          "intro": "The killer returns while you are distracted; a Wendigo Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You meet with your informant well outside the city limits (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "He tells you this unnatural weather is caused by Hyperborean magic; gain this Clue and 1 additional Clue.",
        "Fail": "He betrays you and sells your secrets to the wizard Eibon; advance Doom by 1."
      }
    },
    "Sea": {
      "intro": "Supplies have gone missing from the galley (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find a man suffering from extreme hunger and muttering about Algonquian folktales; gain this Clue.",
        "Fail": "There are not enough rations and hunger begins to gnaw at the crew; lose 1 Health and gain a Hunger Condition."
      }
    }
  },
  {
    "cardId": 9,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You search through the library's occult literature for any hints at the cause of the strange weather (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You are unable to find any thing that can explain the sudden storm, but you do learn much about the occult; improve <img src=\"images/Lore.webp\">.",
        "Fail": "The search is tiring and fruitless; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "The snow has piled high and finding your way will be difficult (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You reach the rumored shrine and discover it empowers Ithaqua; gain this Clue.",
        "Fail": "Snow continues to fall and you lose your way; move 1 space along a Train or Uncharted path and become Delayed."
      }
    },
    "Sea": {
      "intro": "In your cabin, you are visited by a vision of the wizard Ux Loddhan. He offers to help your cause in exchange for an undefined favor. You may gain a Dark Pact Condition to gain this Clue and 1 additional Clue.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and 1 additional Clue": "",
        "Do not gain this Clue and 1 additional Clue": ""
      }
    }
  },
  {
    "cardId": 10,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "A supply truck has gone missing in the snow storm while carrying food and medicine (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find the truck in a ditch and assist in transporting the supplies; retreat Doom by 1.",
        "Fail": "You become lost in the blizzard; lose 1 Sanity and become Delayed."
      }
    },
    "Wilderness": {
      "intro": "As you trek through the wild, the storm grows lighter and the sky changes overhead (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You realize that you have somehow entered the Dreamlands and explore the snowy plateau; gain this Clue.",
        "Fail": "You seem to have lost your way and must turn back; become Delayed unless you spend 1 Clue or 1 Focus."
      }
    },
    "Sea": {
      "intro": "This part of the ocean has begun to freeze over, and you scan the horizon for a clause (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You notice an eerie glow below the surface of the water; gain this Clue.",
        "Fail": "The water around the ship freezes solid; become Delayed."
      }
    }
  },
  {
    "cardId": 11,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You find an extremely rare text in the city's library, but you are not allowed to borrow the book. You offer all that you can afford (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "Gain 1 Tome Artifact.",
        "Fail": {
          "intro": "You remember everything you can; you may spend 1 Focus to gain this Clue.",
          "choices": {
            "Spend 1 Focus to gain this Clue": "",
            "Do not gain this Clue": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "A mysterious man appears in your dreams and offers you knowledge about the Wind-Walker. You may gain a Dark Pact to follow the man further into the Dreamlands.",
      "choices": {
        "Gain a Dark Pact to follow the man further into the Dreamlands": "You learn much and awake clutching an old book; gain the Livre d'Ivon Artifact.",
        "Do not follow the man further into the Dreamlands": ""
      }
    },
    "Sea": {
      "intro": "The Elder God Nodens visits you in your dreams and offers you the knowledge you need to prevent Ithaqua from breaking free if you have the necessary resolve (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue and improve <img src=\"images/Observation.webp\">.",
        "Fail": "The Elder God's presence is too much for your mind to bear; lose 2 Sanity."
      }
    }
  },
  {
    "cardId": 12,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The creatures from the north have grown more aggressive due to the storm. This city, like many others, is under the assault of the beastly gnoph-keh. A Gnoph-keh Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You protect the city and its citizens; gain this Clue and 1 random Ally Asset from the deck.",
            "Did not defeat it": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "Rumors have led you to this place. Supposedly, the shrine you will find here is the cause of the growing storm (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discover the ritual ground where someone has made a sacrifice to the Wind-Walker; gain this Clue.",
        "Fail": "You begin to lose your mind to the cold; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "A winter storm seems to be following the ship. You search the cargo hold for some reason for the phenomenon (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find an iron-bound chest surrounded by frost and ice; gain the Heart of Winter Artifact.",
        "Fail": "The weather grows colder; lose 1 Health and 1 Sanity"
      }
    }
  },
  {
    "cardId": 13,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You hear screams from a nearby home and rush to investigate. The door has been left ajar and you find a man holding a bloody knife (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You act quickly and subdue the madman, saving his victim; gain 1 random Ally Asset from the deck.",
        "Fail": "You are too scared to act and watch as he consumes the flesh of his victim; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "People have been going missing from nearby villages. You follow some tracks you believe will lead you to the reason for the disappearances (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find the mangled corpses of the missing persons far from any village; gain this Clue and lose 1 Sanity.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "You discover human bones in a cage in the cargo hold. While investigating, a beastly figure tackles you. A Wendigo Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Will.webp\"> test": "You keep your calm and trap the creature in the cage; gain this Clue.",
            "Failed the <img src=\"images/Will.webp\"> test": ""
          }
        }
      }
    }
  },
  {
    "cardId": 14,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "A stranger approaches you on the street, but something seems wrong (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You notice the mad hunger in his eyes and flee; gain this Clue.",
        "Fail": "He lunges at you and takes a bite out of your arm; lose 1 Health and gain a Paranoia Condition."
      }
    },
    "Wilderness": {
      "intro": "You have been asked to assist on an archaeological dig where you discover an ancient relic (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You identify it as a tool used by the wizards of Hyperborea; gain the Hyperborean Crystal Artifact.",
        "Fail": "You are of no help, and your confidence is shaken; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "You discover one of the sailors performing some ritual on the ship's deck at night. You follow him to his cabin and question him (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "He is resistant to your interrogation, but you manage to learn of his allegiance to the wizard Eibon; gain this Clue.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 15,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "A robed figure is attacking a woman in the park, and you spring to the rescue. A Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You interrogate him until the police arrive; gain this Clue.",
            "Did not defeat it": "You cannot stop the woman from being sacrificed to the spirit of the wendigo; lose 2 Sanity."
          }
        }
      }
    },
    "Wilderness": {
      "intro": "According to an anonymous tip, this cave is somehow related to the abnormal weather (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find cave paintings depicting Ithaqua and Nodens locked in combat; gain this Clue.",
        "Fail": "You do not notice the cave is inhabited by gnoph-keh until too late; lose 2 Health."
      }
    },
    "Sea": {
      "intro": "If you've interpreted the runes correctly, this ritual should create a barrier that will slow the advance of the storm (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue and retreat Doom by 1.",
        "Fail": "The magic channels the cold of the storm through you; lose 1 Health and gain a Hypothermia Condition."
      }
    }
  },
  {
    "cardId": 16,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The blizzard has trapped you in the city's library. The storm will not let up until morning, and you take the time to rest and prepare for the challenges ahead. Recover 1 Health and 1 Sanity or discard a Hypothermia Condition."
    },
    "Wilderness": {
      "intro": "You are aghast to see a gaunt but familiar face. Discard 1 defeated investigator token from the game board. Then a Wendigo Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You fear hunger might overtake you as well; lose 1 Sanity and gain this Clue.",
            "Did not defeat it": "Advance Doom by 1."
          }
        }
      }
    },
    "Sea": {
      "intro": "A massive, bird-like creature descends on your ship, tossing the crew overboard (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You manage to fend off the beast, and one of the sailors identifies it as a shantak; gain this Clue.",
        "Fail": "The beast grabs you in its talons and carries you away before tossing you into the waters below; lose 2 Health and move to an adjacent space."
      }
    }
  },
  {
    "cardId": 17,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "A series of grisly murders has led you to suspect the mayor. You search his office for signs of corruption (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You uncover a totem to the Wind-Walker in a hidden drawer; gain this Clue.",
        "Fail": "The mayor returns and calls the police; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "According to the map, the alien ruins should be here. You begin to dig out the snow in search of the ancient city (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You uncover alien structures and find a scroll preserved in a stone chest; gain the Pnakotic Manuscripts Artifact.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "One of the sailors wears a strange amulet that seems somehow familiar to you (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You recognize it as a relic of Hyperborea and ask where he got it; gain this Clue.",
        "Fail": "You cannot identify its origin, but the pendant appears in your dreams, held by a wizard; lose 1 Sanity."
      }
    }
  },
  {
    "cardId": 18,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "In your dreams, you request the assistance from the mighty Nodens. You may gain a Dark Pact Condition to gain this Clue.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue": "",
        "Do not gain this Clue": "The weather grows worse and worse, covering the world in ice and snow; gain a Hypothermia Condition and advance Doom by 1."
      }
    },
    "Wilderness": {
      "intro": "You trek into the wilds in search of a cause for the abnormal weather. After some time, you find a strange totem half buried in the snow (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You uncover the totem and study it at length, identifying it as a relic that empowers Ithaqua; gain this Clue.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "An ice sheet has spread across the surface of the ocean. You lead an expedition onto the ice (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You discover a portal to another world at the center of the ice sheet; gain this Clue.",
        "Fail": "You fall through a patch of thin ice; lose 1 Health and gain a Hypothermia Condition."
      }
    }
  },
  {
    "cardId": 19,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You find an account of the wizard Ommum-Vog, but it is in a language that you do not immediately recognize (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "The text is illuminating; gain this Clue and 1 Spell.",
        "Fail": "You spend too long searching for a translation and sleep late the next day; become Delayed."
      }
    },
    "Wilderness": {
      "intro": "You find a beastly totem buried in the snow. Gain this Clue. While examining the curio, a horrifying creature attacks. A Gnoph-keh Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "The encounter has readied you for the challenges to come; improve <img src=\"images/Strength.webp\">.",
            "Did not defeat it": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "As the ship steers into the eye of the storm, the weather clears, and the stars you see overhead are not as they should be (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You realize the ship has somehow entered the Dreamlands; gain this Clue.",
        "Fail": "The storm has transported the ship far away; move to a random Sea space."
      }
    }
  },
  {
    "cardId": 20,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "At a scholar's estate sale, you find a number of journals detailing the history of Hyperborea and the wizard Eibon. The books are expensive but highly illuminating. You may gain a Debt Condition to gain this Clue and 1 Old Journal Unique Asset.",
      "choices": {
        "Gain a Debt Condition to gain this Clue and 1 Old Journal Unique Asset": "",
        "Do not gain this Clue and 1 Old Journal Unique Asset": ""
      }
    },
    "Wilderness": {
      "intro": "The cold has been worst in this area, and you search for the cause (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a shrine that empowers Ithaqua and learn its weaknesses; gain this Clue and improve <img src=\"images/Will.webp\">.",
        "Fail": {
          "intro": "The cold becomes unbearable, and you are forced to turn back; gain a Hypothermia Condition unless you spend 1 Focus.",
          "choices": {
            "Gain a Hypothermia Condition": "",
            "Spend 1 Focus": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "As the temperature drops, the ocean spray freezes on the deck and railing of the ship, and the waters surrounding the ship turn to ice. The captain steers the ship away from the storm (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "For a moment, you believe you see a robed figure standing on the ice; gain this Clue.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 21,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You chase a suspected killer through the winding alleys. The suspect ducks into an abandoned warehouse, and you lose sight of him (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You manage to corner him and notice the wild bloodlust in his eyes; gain this Clue.",
        "Fail": "He escapes into the population; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "Something has the wildlife in an uproar (<img src=\"images/Observation.webp\">-2).",
      "choices": {
        "Pass": "You discover something buried in the snow; gain this Clue and 1 Magical Artifact.",
        "Fail": "Just being in this place sets you on edge; lose 2 Sanity unless you move to an adjacent space."
      }
    },
    "Sea": {
      "intro": "In the captain's cabin, you find an ancient-looking tome (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "The book tells of the magic of Hyperborea; gain this Clue and 1 Spell.",
        "Fail": "The captain returns while you are puzzling over the book and throws you in the brig; gain a Detained Condition."
      }
    }
  },
  {
    "cardId": 22,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "In your dreams, you are a feral creature that hungers for human flesh (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You manage to control your urges and explore the ancient Dreamlands; gain this Clue and improve <img src=\"images/Will.webp\">.",
        "Fail": "Your impulses bleed into the waking world; lose 1 Sanity and gain a Hunger Condition."
      }
    },
    "Wilderness": {
      "intro": "Someone is performing some ritual sacrifice to empower the Wind-Walker. Further more he seems to be unaffected by the terrible cold. A Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You disrupt the ritual and examine the scene; gain this Clue.",
            "Did not defeat it": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "The island was being used to perform some ritual but seen to have been deserted (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find beastly tracks in the snow and quickly gather your findings and leave; gain this Clue.",
        "Fail": {
          "intro": "A terrible creature attacks during a snow flurry; a Gnoph-keh Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 23,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You meet with a scholar who claims to know the reason for the unnatural weather. You try to convince him to join your cause (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "His insight proves useful; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "He hexes you with powerful magic; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "In your dreams, you travel to the northern plateau and confront Ithaqua (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "You are able to fend off the Ancient One; gain this Clue and retreat Doom by 1.",
        "Fail": "Ithaqua's might leaves you cold and desperate; gain a Hunger Condition and a Hypothermia Condition."
      }
    },
    "Sea": {
      "intro": "Due to the weather, every passenger must work on deck to keep the ship on course. Improve <img src=\"images/Strength.webp\">. One of the sailors is very knowledgeable about tales of ancient times, and you try to convince him to tell you what he knows while you work (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 24,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The police have captured a man suspected-of killing and eating his neighbors. You are asked to observe the interrogation (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You can tell the man in not in his right mind and suspect he has been possessed by a wendigo spirit; gain this Clue.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "In this place, with the night sky overhead, you can commune with the Elder God Hypnos (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "Hypnos grants you a vision of the Wind-Walker and the knowledge you need to stop it; gain this Clue and 1 Spell.",
        "Fail": {
          "intro": "The Elder God punishes you for your arrogance; gain 1 Bane Condition unless you spend 1 Focus.",
          "choices": {
            "Gain 1 Bane Condition": "",
            "Spend 1 Focus": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "You explore a massive iceberg floating on the open ocean (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You discover a citadel built from ice and recognize this as the lair of Rhim Shaikorth; gain this Clue.",
        "Fail": "A huge white worm bursts from the snow and freezes your companion in solid ice; discard 1 Ally Asset."
      }
    }
  }
];
