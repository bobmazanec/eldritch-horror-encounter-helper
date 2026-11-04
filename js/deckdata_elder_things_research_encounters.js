deckData.Research["Elder Things"] = [
  {
    "cardId": 1,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "Professor Ellery is working on a device that blocks the psychic dominance of the elder things, but he needs funding in order to produce a prototype. You may gain a Debt Condition to gain this Clue and 1 additional Clue.",
      "choices": {
        "Gain a Debt Condition to gain this Clue and 1 additional Clue": "",
        "Do not gain this Clue and 1 additional Clue": ""
      }
    },
    "Wilderness": {
      "intro": "You find someone wandering in the wild and notice that he is shackled. You attempt to remove the chains (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "He tells you of an elder thing camp and leads you there; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "You strain your back trying to remove the chains; gain a Back Injury Condition."
      }
    },
    "Sea": {
      "intro": "Leaning against the deck railing at night, you hear a disturbing piping noise from the sea. You try to convince the captain to steer clear of it (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "The captain increases speed to leave the noise behind; gain this Clue.",
        "Fail": "The sound unnerves you and the crew; lose 1 Sanity."
      }
    }
  },
  {
    "cardId": 2,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The city is alive with rumors of alien beings (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find a reliable source that points you towards a suspected hide-out; gain this Clue.",
        "Fail": {
          "intro": "Your source betrays you; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": {
              "intro": "",
              "choices": {
                "Defeated it": "",
                "Did not defeat it": "You see the elder things have begun an invasion; advance Doom by 1."
              }
            }
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You stumble across a mi-go camp (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You discover a captured elder thing and realize the two sides are fighting; gain this Clue and 1 additional Clue.",
        "Fail": "The mi-go realize you are there; gain a Hunted Condition."
      }
    },
    "Sea": {
      "intro": "You discover an elder thing has been smuggled aboard your ship. You attempt to uncover its purpose (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You realize it is studying magic; gain this Clue and 1 Spell.",
        "Fail": "The elder thing throws you overboard; lose 1 Health and gain a Hypothermia Condition."
      }
    }
  },
  {
    "cardId": 3,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You pore over an ancient tome for hours, searching for references to the elder things (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You uncover a reference to a previously unknown god; gain this Clue and 1 random Tome Asset from the deck.",
        "Fail": "You search until morning and sleep through the next day; become Delayed."
      }
    },
    "Wilderness": {
      "intro": "You uncover ancient ruins of unknown provenance and take you time studying them (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You suspect the ruins are the remains of a destroyed city built by the elder things; gain this Clue.",
        "Fail": "You tarry too long; you become Delayed."
      }
    },
    "Sea": {
      "intro": "You realize that the ship's captain is a thrall of the elder things and try to free him from their dominance. You may discard 1 Spell to gain this Clue and 1 additional Clue.",
      "choices": {
        "Discard 1 Spell to gain this Clue and 1 additional Clue": "",
        "Do not gain this Clue and 1 additional Clue": "The captain reacts poorly; lose 1 Health and gain 1 Injury Condition."
      }
    }
  },
  {
    "cardId": 4,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "A survivor of the Miskatonic Expedition is spotted drinking at a local bar. You join him in the hopes that he'll open up to you (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "He tells you everything he knows; gain this Clue and 1 additional Clue.",
        "Fail": "You drink too much; gain an Amnesia Condition."
      }
    },
    "Wilderness": {
      "intro": "You've fled into the wild in the hopes of escaping pursuit. The only way across a treacherous ravine is a rickety old rope bridge (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You steel yourself and escape; gain this Clue and 1 Pursuit Condition.",
        "Fail": "Fear overwhelms you, and you fall; lose 1 Sanity and gain 1 Injury Condition."
      }
    },
    "Sea": {
      "intro": "A cave in the side of the island's cliff houses an ornate shrine. You search for a path that leads to the cave (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You learn more about the shackled god of the elder things; gain this Clue.",
        "Fail": "You fall into the sea and have to swim back; gain a Hypothermia Condition."
      }
    }
  },
  {
    "cardId": 5,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You suspect the mayor is not in his right mind and search for evidence to convince the police (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "The mayor is removed from office; gain this Clue.",
        "Fail": {
          "intro": "He has one of his supporters \"take care of you;\" a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You find an altar surrounded by carvings in a ruined city (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You realize this settlement must have worshiped the Dark God; gain this Clue and 1 additional Clue.",
        "Fail": "The carvings creep into your mind; gain 1 Madness Condition."
      }
    },
    "Sea": {
      "intro": "One of the passengers is not what he seems (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You realize that he is an agent of the elder things and steal a map from his cabin; gain this Clue.",
        "Fail": "He realizes you are watching him and disappears, leaving you wondering if he existed at all; lose 2 Sanity."
      }
    }
  },
  {
    "cardId": 6,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The chief of police has allowed you to lead a raid on a suspected elder thing hideout (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You free a group of slaves chained in the basement; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "You barely escape with your life; lose 1 Sanity and gain 1 Injury Condition."
      }
    },
    "Wilderness": {
      "intro": "You watch as a group of elder things assaults a mi-go patrol (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You take note of how they fight; gain this Clue and improve <img src=\"images/Lore.webp\">.",
        "Fail": "You get too close to the action and are seared by a stray shot from a beam weapon; lose 1 Health and gain 1 Injury Condition."
      }
    },
    "Sea": {
      "intro": "In the ship's cargo hold, you discover a jar containing a volatile black slime. Gain this Clue. Another jar is broken and empty. A Proto-Shoggoth Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You are able to study the material at your leisure; gain 1 additional Clue.",
            "Did not defeat it": ""
          }
        }
      }
    }
  },
  {
    "cardId": 7,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You've managed to locate a survivor of the Miskatonic Expedition in a local sanitarium. He is willing to tell you what he saw beyond the mountains. Gain this Clue. You can hardly bear to listen to the horrifying tale (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You may spend 2 Sanity to gain 1 additional Clue.",
          "choices": {
            "Spend 2 Sanity to gain 1 additional Clue": "",
            "Do not gain 1 additional Clue": ""
          }
        },
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "While setting up camp near the ancient ruins, the members of your expedition begin to behave oddly. Gain this Clue. You recognize the corrupting power of the elder things and are forced to flee; discard 1 Ally Asset."
    },
    "Sea": {
      "intro": "You discover a derelict vessel adrift on the open ocean. You go aboard to investigate and discover that a member of the crew has gone insane and murdered the rest; a Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Lore.webp\"> test": "You free him from mind control, gain this Clue.",
            "Failed the <img src=\"images/Lore.webp\"> test": ""
          }
        }
      }
    }
  },
  {
    "cardId": 8,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "A series of grisly beheadings has the city in an uproar (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "Your investigation leads you to a laboratory where alien beings are being created, gain this Clue.",
        "Fail": "Your investigation makes you the next target; gain 1 Pursuit Condition."
      }
    },
    "Wilderness": {
      "intro": "A member of your crew went into a nearby cavern and hasn't been seen for hours (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You discover that he had fallen down a chasm and rescue him and his research; gain this Clue and 1 additional Clue.",
        "Fail": "He is never seen again; lose 1 Sanity and discard 1 Ally Asset."
      }
    },
    "Sea": {
      "intro": "The storm that surrounds the island doesn't seem natural. You are convinced some device of the elder things is causing the strange weather. You may discard 1 Spell to dispel the storm and explore the island.",
      "choices": {
        "Discard 1 Spell to dispel the storm and explore the island": "You retrieve alien objects for study; gain this Clue.",
        "Do not dispel the storm and explore the island": ""
      }
    }
  },
  {
    "cardId": 9,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The homeless have been disappearing. You stake out the city park in the hopes of discovering where they've all gone (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You uncover an elder thing internment camp; gain this Clue.",
        "Fail": {
          "intro": "You find the missing citizens, but they attack you; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You've been lost in the ruins for days. In the heart of the abandoned city you discover a fountain and a basin of water (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You resist drinking from the fountain and find your way out; gain this Clue.",
        "Fail": "You are too thirsty to resist and drink the foul water; gain 1 Illness Condition."
      }
    },
    "Sea": {
      "intro": "You hope to uncover a link in a human smuggling ring used by the elder things (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You discover a map that shows a hidden route to Antarctica; gain this Clue and 1 additional Clue.",
        "Fail": {
          "intro": "The smugglers return while you're still there; an Elder Thing Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 10,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You discover that a number of Professor Lake's research notes are up for auction this very night! The information inside may be vital, and you bid more than you can afford (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You may gain a Debt Condition to gain 1 Old Journal Unique Asset and 1 Tome Artifact.",
          "choices": {
            "Gain a Debt Condition to gain 1 Old Journal Unique Asset and 1 Tome Artifact": "",
            "Do not gain 1 Old Journal Unique Asset and 1 Tome Artifact": ""
          }
        },
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "There is an ancient tablet at the bottom of the ravine whose secrets you require. You look for a way down to retrieve it (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You retrieve the tablet safely; gain this Clue.",
        "Fail": "The path you've discovered is treacherous; lose 1 Health and gain 1 Injury Condition."
      }
    },
    "Sea": {
      "intro": "You've followed the map this far. The tablet must be here somewhere (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discover a tablet regarding the Dark God; gain this Clue.",
        "Fail": "You take too much time searching and overexert yourself rowing back to the ship; discard 1 Focus and gain a Back Injury Condition."
      }
    }
  },
  {
    "cardId": 11,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You meet your companion in an abandoned warehouse only to find that he has betrayed you. Discard 1 Ally Asset, then an Elder Thing Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Strength.webp\"> test": "You question your former companion at length; gain this Clue and retreat Doom by 1.",
            "Failed the <img src=\"images/Strength.webp\"> test": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "Captured by the mi-go, you are surprised to find that they wish to communicate with you. Lose 1 Sanity. They offer you weapons to fight the elder things in exchange for a favor; you may gain a Dark Pact Condition to gain the Alien Device Artifact.",
      "choices": {
        "Gain a Dark Pact Condition to gain the Alien Device Artifact": "",
        "Do not gain the Alien Device Artifact": ""
      }
    },
    "Sea": {
      "intro": "Standing between you and an elder thing tablet is a monstrous-looking penguin. You may discard 1 Item or Trinket possession to distract the penguin and reach the tablet.",
      "choices": {
        "Discard 1 Item possession to distract the penguin and reach the tablet": "Gain this Clue.",
        "Discard 1 Trinket possession to distract the penguin and reach the tablet": "Gain this Clue.",
        "Do not distract the penguin and reach the tablet": {
          "intro": "A Giant Penguin Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 12,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The city is completely under the sway of the elder things, but the library contains a copy of Professor Dyer's expedition report. You must hide your fear to get past the librarian (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "Gain this Clue.",
        "Fail": "An angry mob forms to pursue you; gain 1 Pursuit Condition."
      }
    },
    "Wilderness": {
      "intro": "You hear a rustling in the tall grass and move to investigate (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You are able to spy on a group of elder things and learn more about their biology; gain this Clue.",
        "Fail": "They pursue you, and you twist your ankle in your haste to flee; lose 1 Sanity and gain a Leg Injury Condition."
      }
    },
    "Sea": {
      "intro": "The sunken wreckage contains an ancient relic. You just have to swim down to retrieve it (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "You are able to secure it and bring it on board; gain the Eltdown Shards Artifact.",
        "Fail": "You push yourself to the brink of exhaustion; lose 1 Health and gain a Hypothermia Condition."
      }
    }
  },
  {
    "cardId": 13,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You've found an incantation that can disrupt the magical hold on the minds of the dominated citizens (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You put the magic to great use; gain 1 Spell and retreat Doom by 1.",
        "Fail": "The magic backfires; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You've been tracking a shoggoth for days, hoping that it will lead you to the missing citizens (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find an elder thing camp and report it to the authorities; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "You become lost in the woods; discard 1 Focus and become Delayed."
      }
    },
    "Sea": {
      "intro": "You've met Captain Douglas aboard his ship in the hopes that he can provide new information on the elder things (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He tells you what he knows; gain this Clue.",
        "Fail": "He doesn't trust you and throws you overboard; lose 1 Health and gain a Hypothermia Condition."
      }
    }
  },
  {
    "cardId": 14,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "A mob is gathering outside of the city council, angry over the disappearance of several citizens. You attempt to calm the crowd (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "You listen to the crowd about their concerns; gain this Clue.",
        "Fail": "Things take a turn for the worse; lose 1 Health and 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You find an ancient mural and attempt to decipher it (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You discover the ritual is meant to summon creatures from another world; gain the Dhol Chants Artifact.",
        "Fail": "You wake up in a clearing with no memory of how you got there; gain an Amnesia Condition."
      }
    },
    "Sea": {
      "intro": "Some members of the crew have been acting suspiciously since you left port. You sneak out of your cabin at night to observe them (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You see them communicating with one of the elder things; gain this Clue.",
        "Fail": {
          "intro": "They catch you on deck; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 15,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You pursue the thrall to the roof of the hotel. He jumps off the edge and lands on the roof of an adjacent building. You gather yourself for a mighty leap (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You make the jump and tackle him; gain this Clue.",
        "Fail": "You don't make the jump; lose 2 Health."
      }
    },
    "Wilderness": {
      "intro": "You find yourself in a vast, empty wasteland. A formless darkness swirls about you, and a sonorous voice commands you to set it free (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You wake up in bed with knowledge of the Dark God; gain this Clue and 1 Spell.",
        "Fail": "You are unable to resist; advance Doom by 1."
      }
    },
    "Sea": {
      "intro": "You've found the relic, but it is locked behind a runic alien device (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You decipher the runes and are able to retrieve the precious gemstone; gain the Crystal of the Elder Things Artifact.",
        "Fail": {
          "intro": "You unleash the relic's guardian; a Shoggoth Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 16,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You've become increasingly desperate in your fight against the elder things and are exploring darker measures. A member of the Silver Twilight Lodge offers you aid in combating the mind control of the elder things. You may gain a Dark Pact Condition to improve <img src=\"images/Will.webp\"> and 1 other skill of your choice.",
      "choices": {
        "Gain a Dark Pact Condition to improve <img src=\"images/Will.webp\"> and 1 other skill of your choice": "",
        "Do not improve <img src=\"images/Will.webp\"> and 1 other skill of your choice": ""
      }
    },
    "Wilderness": {
      "intro": "A group of elder things is passing by your camp, unaware of your presence. You attempt to pursue them without being noticed (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You follow them to their camp; gain this Clue.",
        "Fail": "You begin to suspect that you are being led into an elaborate trap; gain a Paranoia Condition."
      }
    },
    "Sea": {
      "intro": "You have been caught in a storm and fear that you have been blown off course (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You spot your island destination in a flash of lightning and correct your course; gain this Clue.",
        "Fail": "You sail right by your destination and must circle back; become Delayed."
      }
    }
  },
  {
    "cardId": 17,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The cab driver strikes you as suspicious, but you cannot determine why (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You realize the carved soapstone hanging from his mirror is a relic of the elder things; gain this Clue.",
        "Fail": "You feel an alien presence invading your mind, and you awake in an alley; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You find an elder thing outpost hidden in a cave. You may discard 1 Item possession and 1 Spell to create a magical explosive device and seal the cave.",
      "choices": {
        "Discard 1 Item possession and 1 Spell to create a magical explosive device and seal the cave": "Retreat Doom by 2.",
        "Do not create a magical explosive device and seal the cave": {
          "intro": "An Elder Thing Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "You corner an elder thing in the cargo hold. It turns its gaze upon you, and you feel it constricting your mind (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You resist its mind control, but the elder thing escapes; gain this Clue and improve <img src=\"images/Will.webp\">.",
        "Fail": "You escape, but your allies are not so lucky; discard 1 Ally Asset."
      }
    }
  },
  {
    "cardId": 18,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The mayor is speaking in codes, and you are convinced he is a target of mind control (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You discover the mayor is a sorcerer battling the elder thing incursion; gain this Clue and 1 Spell.",
        "Fail": {
          "intro": "You misinterpret his warning; a Shoggoth Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "The shoggoth pipes and burbles as it charges towards you like a nightmarish freight train. You must remain calm to avoid it (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You evade the creature and it breaks off its pursuit; gain this Clue.",
        "Fail": "You flee aimless into the wild; lose 1 Sanity and gain 1 Madness Condition."
      }
    },
    "Sea": {
      "intro": "You've traveled to an island rumored to be the home of a cult of magicians (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You stumble across their arcane vault and take your pick; gain 1 Magical Artifact and improve <img src=\"images/Lore.webp\">.",
        "Fail": "The cultists wipe all memory of the island from your mind; gain an Amnesia Condition."
      }
    }
  },
  {
    "cardId": 19,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "The warehouse is supposed to be abandoned, but strange noises have been heard from inside (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You discover a makeshift prison for humans and alert the authorities, gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "You find nothing; advance Doom by 1."
      }
    },
    "Wilderness": {
      "intro": "The mi-go find you in the ruins of an ancient city. If you have a Dark Pact Condition, flip that Condition. Shaken by your encounter, you take refuge in a still-standing building for the night (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You notice an elder thing carving; gain this Clue.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "A rogue elder thing enters your cabin and communicates that it will help you if you hide it from the other elder things; you may gain a Dark Pact Condition to gain this Clue and improve <img src=\"images/Will.webp\">.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and improve <img src=\"images/Will.webp\">": "",
        "Do not gain this Clue and improve <img src=\"images/Will.webp\">": {
          "intro": "The creature attacks; an Elder Thing Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 20,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You notice strange lights coming from the local radio station. You investigate and find an elder thing device broadcasting an unknown signal (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You successfully disable the device; gain this Clue and 1 random Magical Asset from the deck.",
        "Fail": "Your meddling causes a psychic backlash; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "A massive windstorm rages through the camp, damaging your equipment. Discard 1 Item possession. In the aftermath, you attempt to salvage what you can (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You notice the tracks of elder things outside your camp; gain this Clue.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "Something has the penguins of the island in a frenzy (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You notice a newly carved image of the Dark God on a cave wall; gain this Clue.",
        "Fail": {
          "intro": "You find out the penguins are blind and vicious; a Giant Penguin Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 21,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "A local newspaper runs a story endorsing further expeditions into the antarctic. You try to sneak into the newsroom (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You meet the author of the article and interrogate him; gain this Clue.",
        "Fail": "The police are called and arrest you; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "You've been exploring the ancient city for hours. The sun has set, but you continue your investigation (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find a series of hieroglyphs; gain this Clue.",
        "Fail": "You don't notice a trap before it is too late; lose 1 Sanity and gain 1 Illness Condition."
      }
    },
    "Sea": {
      "intro": "Your ship is tossed about in the storm, and you tumble overboard, barely managing to catch yourself on the railing (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You notice the lights of a city under the ocean; gain this Clue.",
        "Fail": "You plunge into the cold water; gain a Hypothermia Condition."
      }
    }
  },
  {
    "cardId": 22,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You attend a meeting of the American Archaeological Society. Something about the way they speak and act seems alien (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You resist their hypnosis; gain this Clue.",
        "Fail": "You agree that humans and aliens can live in harmony; lose 3 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You have located a staging ground for abducted humans, waiting to be shipped to Antarctica. You attempt to free the captives, but they relent. A Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You learn the victims are under the control of the elder things; gain this Clue.",
            "Did not defeat it": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "You've led a small landing party onto a stray glacier. With a rumble, the ice cracks beneath you (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You keep calm and discover alien carvings inside the ice; gain this Clue.",
        "Fail": "You fall into the icy water; discard 1 Item Asset and gain a Hypothermia Condition."
      }
    }
  },
  {
    "cardId": 23,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "Professor Pabodie has offered to sell his innovative drill to you in order to further your investigation (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You convince him to donate it instead; gain this Clue.",
        "Fail": {
          "intro": "He wants more than you anticipated; you may gain a Debt Condition to gain this Clue.",
          "choices": {
            "Gain a Debt Condition to gain this Clue": "",
            "Do not gain this Clue": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You plumb the depths of the cave and discover an old book on a small altar (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You notice runes of warding around the book and dispel them; gain this Clue and 1 random Tome Asset from the deck.",
        "Fail": "You set off the wards; gain a Cursed Condition."
      }
    },
    "Sea": {
      "intro": "Locked in a wall of ice is an obsidian tablet covered in pictographs. You must be careful when retrieving the tablet for study (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You recover the tablet and are able to translate its text; gain this Clue.",
        "Fail": "You accidentally destroy the tablet with your pickax; discard this Clue."
      }
    }
  },
  {
    "cardId": 24,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You have gone to consult with Dr. Ambrose Dexter, a professor of the occult, but his findings are difficult to interpret (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "He allows you access to his library; gain this Clue and 1 random Tome Asset from the deck.",
        "Fail": "His mind is no longer his own and he hexes you; gain 1 Bane Condition."
      }
    },
    "Wilderness": {
      "intro": "In the dead of night, a member of the group suddenly attacks you (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You are able to restrain him and break the control of the elder things; gain this Clue.",
        "Fail": "You cannot stop him from following you; discard 1 Ally Asset."
      }
    },
    "Sea": {
      "intro": "Your ship has run aground on an uncharted island. You take the opportunity to explore while you wait for the tide (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find a cache of soapstones; gain this Clue.",
        "Fail": "You miss the tide and have to swim back to the ship; gain a Hypothermia Condition."
      }
    }
  }
];
