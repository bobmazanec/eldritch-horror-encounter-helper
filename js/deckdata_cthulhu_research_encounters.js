deckData.Research["Cthulhu"] = [
  {
    "cardId": 1,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "The librarian tells you that the book you're looking for was checked out by someone named Mr. Marsh. You scout the city to find him before he leaves town (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You manage to steal the book from his hotel room; gain this Clue.",
        "Fail": "Move this Clue to the nearest Sea space."
      }
    },
    "Wilderness": {
      "intro": "In a remote area, you discover an ancient ritual underway stop to observe. A Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "The cultists abandon their ritual; gain this Clue.",
            "Did not defeat it": "You are incorporated into the ceremony; gain a Cursed Condition."
          }
        }
      }
    },
    "Sea": {
      "intro": "You wake up on a reef with no sign of your ship. An enormous star spawn rises from the sea and places its thought into your mind. You may gain a Dark Pact Condition to gain this Clue and a Mists of Releh Spell.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and a Mists of Releh Spell": "",
        "Do not gain this Clue and a Mists of Releh Spell": {
          "intro": "Discard this Clue and a Star Spawn Monster ambushes you.",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 2,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "You recognize allusions to Cthulhu in a sculptor's recent works. You speak to the artist about his inspirations (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "Gain this Clue and 1 additional Clue.",
        "Fail": "He tells you a terrible vision of the future; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "This cavern collapsed thousands of years ago. Your excavations reveal ritual carvings that you think correspond to modern cults (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You gain insight into the cult of Cthulhu; gain this Clue and 1 additional Clue.",
        "Fail": "You contemplate how long the worshipers of Cthulhu have waited for their master; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "Looking across the water, you see visions of an ancient island city populated by horrible creatures. The city is horrible to behold (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You learn about R'lyeh; gain this Clue and 1 additional Clue.",
        "Fail": "Your mind cannot stand the sight; gain a Hallucinations Condition."
      }
    }
  },
  {
    "cardId": 3,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "The police ask for help in tracking down a cultist sect (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You help them launch a midnight raid; gain this Clue and 1 additional Clue.",
        "Fail": "The cult foils your investigation and rob your hotel; discard 1 Item Asset."
      }
    },
    "Wilderness": {
      "intro": "You uncover an ancient stone statue of Cthulhu carved from an unknown green stone. Just looking at it threatens your mental stability (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You examine the statue thoroughly; gain this Clue.",
        "Fail": "You stare at the horrific carving in horror; gain a Hallucinations Condition."
      }
    },
    "Sea": {
      "intro": "In the middle of the night you see an army of deep ones climbing in and out of the water (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You wait until they're gone and then search the area; gain the Grotesque Statue Artifact.",
        "Fail": {
          "intro": "Lose 3 Sanity and a Deep One Monster ambushes you.",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 4,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "A man tells you about his terrible dreams of underwater cities. You suspect you understand the source of such nightmares (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You warn him about his heritage; gain this Clue.",
        "Fail": {
          "intro": "A Deep One Monster ambushes you.",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You try to track down an old hermit who supposedly knows the secrets of Cthulhu's cults (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "The man is insane, but his stories prove accurate; gain this Clue.",
        "Fail": "The man has been taken by pirates; move this Clue to the nearest Sea space;"
      }
    },
    "Sea": {
      "intro": "Your ship encounters another vessel engaged in deep-sea excavation. You sneak aboard their craft to see what they've found (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You see strangely-crafted golden jewelry; gain this Clue.",
        "Fail": "The divers catch you and throw you into their brig; gain a Detained Condition."
      }
    }
  },
  {
    "cardId": 5,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "You dream of a city built from massive green stones set at non-Euclidean angles. You try to retain as many details as you can to investigate when you wake up (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You identify the location by the stars overhead; gain this Clue and 1 additional Clue.",
        "Fail": "The details of the dream are too horrible to remember; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You try to interpret the strange constellations in the night sky above you (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You understand the occult phenomenon that is coming to pass; gain this Clue and retreat Doom by 1.",
        "Fail": "The stars tell you nothing; move this Clue to the nearest Sea space."
      }
    },
    "Sea": {
      "intro": "Some dark shape is moving under the waves (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You avoid the creature; gain this Clue.",
        "Fail": {
          "intro": "Your ship is thrown into the air; a Star Spawn Monster ambushes you!",
          "choices": {
            "Resolved the combat": {
              "intro": "",
              "choices": {
                "Defeated it": "Retreat Doom by 1.",
                "Did not defeat it": ""
              }
            }
          }
        }
      }
    }
  },
  {
    "cardId": 6,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "After the police raid a local Order of Dagon, you have a chance to search the temple (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find ledgers and historical documents; gain this Clue and a Mists of Releh Spell.",
        "Fail": "You feel the statues and icons in the building staring at you; gain a Paranoia Condition."
      }
    },
    "Wilderness": {
      "intro": "Cultists have snuck into your camp, trying to steal your equipment (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You catch one of them and get a chance to question him; gain this Clue.",
        "Fail": "Discard 2 Item Assets and move this Clue to the nearest Sea space."
      }
    },
    "Sea": {
      "intro": "You listen intently as the island natives tell a folktale (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You recognize it as a description of how the elder things fought Cthulhu; gain this Clue and retreat Doom by 1.",
        "Fail": "The story has a damaging effect on your mind; gain a Hallucinations Condition."
      }
    }
  },
  {
    "cardId": 7,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "The cult of Cthulhu anticipated your arrival. A Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "Gain this Clue.",
            "Did not defeat it": "You cannot recall how you escaped; gain an Amnesia Condition and move this Clue to the nearest Sea space."
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You have a vivid dream of R'lyeh and fear that you won't be able to wake up if you can't find your way out of the city (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "The dream provides you insight into R'lyeh; gain this Clue and 1 additional Clue.",
        "Fail": "You remain unconscious for a day; lose 2 Sanity and become Delayed."
      }
    },
    "Sea": {
      "intro": "As you stare across the water, a webbed hand reaches from below the surface and grabs your leg! A Deep One Monster ambushes you.",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "Gain this Clue and 1 additional Clue.",
            "Did not defeat it": "Gain a Leg Injury Condition."
          }
        }
      }
    }
  },
  {
    "cardId": 8,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "You see dozens of people with the distinct features of deep one hybrids. They watch you constantly, and you'll have to fight to escape (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You identify more families descended from deep ones; gain this Clue.",
        "Fail": "They attack and turn you over to the police; lose 1 Health and gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "The mi-go have lured you into the wild to put an end to your investigation. You try to drive the creatures off before they can do any lasting damage (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "Gain this Clue.",
        "Fail": "Become Delayed and move this Clue to the nearest Sea space."
      }
    },
    "Sea": {
      "intro": "During the night, you hear the sounds of the crew battleing some unseen enemy. Suddenly, you are face-to-face with one of the fish-like monstrosities! Gain this Clue and lose 1 Sanity. A Deep One Monster ambushes you.",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You find an odd relic; gain the Ruby of R'lyeh Artifact.",
            "Did not defeat it": ""
          }
        }
      }
    }
  },
  {
    "cardId": 9,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "Your guide leads you into a blind alley and attacks you. A Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You take a medallion adorned with dragons and octopuses; gain this Clue.",
            "Did not defeat it": "You wake up on a ship; gain an Amnesia Condition and move to the nearest Sea space."
          }
        }
      }
    },
    "Wilderness": {
      "intro": "One of the serpent people contacts you telepathically to make a deal and share information about the deep ones. You may gain a Dark Pact Condition to gain this Clue.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue": "",
        "Do not gain this Clue": "You soon regret it; lose 2 Sanity and gain a Poisoned Condition."
      }
    },
    "Sea": {
      "intro": "A man stands on the reef, holding a golden sword and surrounded by the corpses of deep ones. About to boast, he is interrupted by a Star Spawn that rises from the water and devours him. Discard this Clue and gain the Sword of Y'ha-talla Artifact, then a Star Spawn Monster ambushes you!",
      "choices": {
        "Resolved the combat": ""
      }
    }
  },
  {
    "cardId": 10,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "You hear a piteous croak and see a deep one examining itself in the mirror. A Deep One Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Will.webp\"> test": "He speaks to you just long enough to share who he used to be; gain this Clue.",
            "Failed the <img src=\"images/Will.webp\"> test": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You follow the trail of thieves who have stolen some golden jewelry (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You recover the loot while they sleep; gain this Clue.",
        "Fail": "A priest of Dagon reaches them first, and you don't recall much after that; gain an Amnesia Condition and move this Clue to the nearest Sea space."
      }
    },
    "Sea": {
      "intro": "Cultists have taken the ship. Only one of them stands between you and an escape craft. If you have a Dark Pact Condition, the man bows obediently, offering his help; gain this Clue. If you do not have a Dark Pact Condition, a Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": ""
      }
    }
  },
  {
    "cardId": 11,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "In your dreams, you explore a city under the ocean. Deep ones guide you to a lavish throne room where the mighty Dagon offers you a bargain. You may gain a Dark Pact Condition.",
      "choices": {
        "Gain a Dark Pact Condition": "You wake up next to a strange text; gain 1 Tome Artifact.",
        "Do not": ""
      }
    },
    "Wilderness": {
      "intro": "You search the night sky to see where the stars are aligned (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You see the patterns; gain this Clue and discard 1 Eldritch token from a space of your choice.",
        "Fail": "You carelessly stumble into a ravine; lose 2 Health and gain a Leg Injury Condition."
      }
    },
    "Sea": {
      "intro": "A passenger has fallen asleep on the deck and is talking in his sleep. You try to hear what he's saying (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You hear him praise Dagon; gain this Clue. If there is an Eldritch token on your space, his unconscious prayers were heard; a Deep One Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        },
        "Fail": ""
      }
    }
  },
  {
    "cardId": 12,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "The police are forced to release the ringleader cult. You argue to keep him in custody (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "You are able to interrogate him; gain this Clue.",
        "Fail": "He visits your dreams before he disappears; lose 1 Sanity and move this Clue to the nearest Sea space."
      }
    },
    "Wilderness": {
      "intro": "Cultists dance around a statue of Cthulhu. You try to steal the idol without being seen (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You bring it back for study; gain this Clue.",
        "Fail": "The cultists assault you before vanishing into the night; lose 2 Health and move this Clue to the nearest Sea space."
      }
    },
    "Sea": {
      "intro": "In your dream, you've become a deep one and hear Cthulhu in your head. If you have a Dark Pact Condition, lose 3 Health and 3 Sanity. You try to focus on hearing Cthulhu's message (<img src=\"images/Will.webp\">-2).",
      "choices": {
        "Pass": "Gain this Clue and 1 additional Clue.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 13,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "When you touch the strange stone idol, you feel it trying to drain your life force (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You know how Cthulhu draws strength from his followers; gain this Clue.",
        "Fail": "Part of your life experiences disappear; lose 1 Sanity and discard all Improvement tokens."
      }
    },
    "Wilderness": {
      "intro": "A truck filled with deep one hybrids has followed you. As they get close, the smell becomes hard to endure (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You stay quiet and eavesdrop on their conversation; gain this Clue.",
        "Fail": "They catch you and put you on a ship; lose 1 Sanity and move to the nearest Sea space."
      }
    },
    "Sea": {
      "intro": "A cultist calls for help. A Deep One Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Will.webp\"> test": {
              "intro": "The creature kills the cultist, who was holding an odd item; gain 1 Magical Artifact.",
              "choices": {
                "Defeated the Monster": "",
                "Did not defeat the Monster": "You are traumatized; gain a Hallucinations Condition."
              }
            },
            "Failed the <img src=\"images/Will.webp\"> test": {
              "intro": "",
              "choices": {
                "Defeated the Monster": "",
                "Did not defeat the Monster": "You are traumatized; gain a Hallucinations Condition."
              }
            }
          }
        }
      }
    }
  },
  {
    "cardId": 14,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "Gangsters have locked you and an informant in a warehouse with a creature from the sea. A Deep One Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Will.webp\"> test": "You have a conversation with the informant before the deep one kills him; gain this Clue.",
            "Failed the <img src=\"images/Will.webp\"> test": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "An old man has locked himself in a cell in the wilds because he fears becoming a deep one. You speak to him in the final stages of the change. Lose 1 Sanity. You listen carefully as he describes what he sees (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "Discard 1 Eldritch token from a space of your choice.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "A sailor tells you about a new island that has started to emerge in the South Pacific. Advance Doom by 1. The story is facinating, but as he continues, the tale grows more difficult to listen to. You may spend 2 Sanity to listen until the end.",
      "choices": {
        "Spend 2 Sanity to listen until the end": "The tale proves useful to your investigation; gain this Clue.",
        "Do not listen until the end": ""
      }
    }
  },
  {
    "cardId": 15,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "After reading the journalist's notes about Cthulhu worship, you dream about the great old one. When you wake up, you're on an island you've never seen before. Lose 2 Sanity and move to the nearest Sea space."
    },
    "Wilderness": {
      "intro": "You wake up to find a circle of candles and shells around your tent. A green statue of Cthulhu has been placed just inside the circle. Gain a Cursed Condition. You're terrified to touch the idol (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You take it for later study; gain this Clue.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "The ship's doctor says that you've been in a coma and that there is no Cthulhu or cult (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You aren't fooled and get him to reveal secrets about the cult; gain this Clue.",
        "Fail": "You doubt your identity and experiences; gain a Paranoia Condition and discard all Improvement tokens."
      }
    }
  },
  {
    "cardId": 16,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "You talk to elderly sailors at a rest home (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "The retired sailors tell you an abundance of Cthulhu lore; gain this Clue.",
        "Fail": {
          "intro": "Someone notices your frequent visits; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You find an elder thing searching through your belongings. It takes particular notice of a map you've drawn. Discard 1 Eldritch token from a space of your choice. You try to communicate with it (<img src=\"images/Lore.webp\">-2).",
      "choices": {
        "Pass": "",
        "Fail": "It throws you aside; lose 1 Health and gain a Back Injury Condition."
      }
    },
    "Sea": {
      "intro": "Cthulhu's gaze falls upon this island. If there is an Eldritch token on your space, discard all Improvement tokens. You search the caverns on the island (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find stone tablets that tell the story of R'lyeh; gain this Clue.",
        "Fail": {
          "intro": "You awaken a star spawn in the depths of the cave; a Star Spawn Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 17,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "You hope to buy a controversial, new painting that depicts a creature rising from the sea (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You study the details and then destroy it; gain this Clue.",
        "Fail": "Another buyer offers you a different deal; advance Doom by 2 unless you gain a Dark Pact Condition."
      }
    },
    "Wilderness": {
      "intro": "You pay your penny at the carnival to see a sideshow exhibit, a \"fish-man\". After the show you attempt to sneak into the tent (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You hear the deep one talking to itself; gain this Clue.",
        "Fail": {
          "intro": "The creature notices you snooping around; a Deep One Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "At the highest point of the island, the stones seem to be organized in a particular pattern (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You see a central stone is marked with an elder sign; gain this Clue and 1 additional Clue.",
        "Fail": {
          "intro": "You accidentally disturb the protective ward; a Star Spawn Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 18,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "You are visited by an old man named Marsh. He seems to know a lot about you and he offers you a deal. You may gain a Dark Pact Condition to gain this Clue.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue": "",
        "Do not gain this Clue": "Marsh brought more members of his family; lose 3 Health."
      }
    },
    "Wilderness": {
      "intro": "In an underground chamber you find the bodies of both serpent people and deep ones. Just as you wonder if there were any survivors, you are assaulted. A Deep One Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You find secrets of arcane science in the serpent people's laboratory; gain 1 Spell.",
            "Did not defeat it": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "A creature that has climbed aboard the ship seems somehow familiar. Discard 1 defeated investigator token from the game board, then a Deep One Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "The fate of your colleague haunts you; lose 1 Sanity and gain this Clue.",
            "Did not defeat it": "Advance Doom by 1."
          }
        }
      }
    }
  },
  {
    "cardId": 19,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "About to step back into your hotel room, something seems off to you (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You notice that someone has picked the lock, and the police help arrest the cultists waiting for you; gain this Clue.",
        "Fail": {
          "intro": "You walk into a trap; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You finally reach the wreckage of the plane. There are no survivors, and it looks as if someone already stole the ocean maps you were seeking. Lose 1 Sanity and move this Clue to the nearest Sea space."
    },
    "Sea": {
      "intro": "The deep ones are searching the island for you and can sense the mark of the great old one (<img src=\"images/Observation.webp\">-1). Roll 2 less dice if you have a Dark Pact Condition.",
      "choices": {
        "Pass": "You somehow escape with your findings; gain this Clue and 1 additional Clue.",
        "Fail": "You endure a grisly ordeal; resolve the effect on each Condition you have."
      }
    }
  },
  {
    "cardId": 20,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "You read the logs of 18th century merchant ships trading with the deep ones. You become obsessed with the vivid tales of the lost cities and foul rituals (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You manage to gather the dates and facts with a clear head; gain this Clue.",
        "Fail": "Lose 2 Sanity and gain a Hallucinations Condition."
      }
    },
    "Wilderness": {
      "intro": "With the cult nowhere to be seen, you hope to take their stone idol without being noticed (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You escape with the idol; gain this Clue.",
        "Fail": "You sink into quicksand, and some of your possessions are irretrievably lost before you escape; discard 2 Item possessions."
      }
    },
    "Sea": {
      "intro": "You try to undo a hex cast by a passenger (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue and 1 additional Clue.",
        "Fail": "You can only redirect the hex to yourself; lose 3 Health and 3 Sanity unless you shuffle a solved Mystery into the deck."
      }
    }
  },
  {
    "cardId": 21,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "You see a photograph of a large stone tablet found on an obscure Pacific island. You try to translate the arcane writing carved into the tablet (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You learn how to prepare for Cthulhu's return; improve 1 skill of your choice.",
        "Fail": "You cannot interpret the text; advance Doom by 1."
      }
    },
    "Wilderness": {
      "intro": "You explore an abandoned village that appears to have torn itself apart (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discover the residents had faught over an ornate, golden knife; gain this Clue.",
        "Fail": "You find a golden knife too beautiful to leave behind and cut yourself in your ferver to claim it; lose 1 Health and gain a Cursed Condition."
      }
    },
    "Sea": {
      "intro": "The high priest of Dagon summoned the Lurker at the Threshold to this island to make a desperate bargain. You can make a deal of your own, however. Shuffle a solved Mystery into the deck unless you gain a Dark Pact Condition."
    }
  },
  {
    "cardId": 22,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "The anthropologist you were supposed to meet has gone missing. His office has been torn apart and reeks of sea water and blood. Lose 1 Sanity and move this Clue to the nearest Sea space."
    },
    "Wilderness": {
      "intro": "An altar to Cthulhu is perched over an underground river. If you get too close, it may collapse (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a safe path to study the altar; gain this Clue.",
        "Fail": "The ground slides into the water; gain a Leg Injury Condition and move this Clue to the nearest Sea space."
      }
    },
    "Sea": {
      "intro": "The captain says that there's been an occult-related murder. You are warned that the victim's cabin is an extremely gruesome scene. You may spend 3 Sanity to search the room.",
      "choices": {
        "Spend 3 Sanity to search the room": "You discover a tome that pertains to your investigation; gain the De Vermis Mysteriis Artifact.",
        "Do not search the room": ""
      }
    }
  },
  {
    "cardId": 23,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "A doctor has you committed to his asylum, and you appeal to the local authorities to free you as soon as possible (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "You identify the doctor as a priest of Dagon; gain this Clue.",
        "Fail": "Your release takes too long; lose 2 Health and gain an Amnesia Condition."
      }
    },
    "Wilderness": {
      "intro": "Everyone in this village has the Innsmouth look. You'll have to sneak away if you hope to leave (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You escape; gain this Clue.",
        "Fail": "You're stuck in your hiding place and must endure hearing their blasphemous rituals at night; lose 1 Sanity and gain a Paranoia Condition."
      }
    },
    "Sea": {
      "intro": "The ship's captain is acting suspiciously. You spy on his cabin at night (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find him bartering with a deep one and question him later; gain this Clue.",
        "Fail": {
          "intro": "A Deep One Monster ambushes you!",
          "choices": {
            "Resolved the combat": {
              "intro": "",
              "choices": {
                "Defeated it": "",
                "Did not defeat it": "The captain's plan cannot be stopped; advance Doom by 1."
              }
            }
          }
        }
      }
    }
  },
  {
    "cardId": 24,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "You ask police inspector John Legrasse about his experiences with the cults (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "He gives you a file with information; gain this Clue.",
        "Fail": "A cult member overhears him shouting at you, and you suffer with horrific dreams that night; lose 1 Sanity and gain a Hallucinations Condition."
      }
    },
    "Wilderness": {
      "intro": "Since you last replenished your supplies, you've had trouble focusing. You search for a possible explanation (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discover a small, gold disk was slipped in with your provisions; gain this Clue.",
        "Fail": "Your mental state deteriorates; lose 2 Sanity and gain a Hallucinations Condition."
      }
    },
    "Sea": {
      "intro": "From the island, you see the creature throw the ship away like a toy and then fly toward you. A Star Spawn Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Will.webp\"> test": {
              "intro": "You sense a bond between it and Cthulhu; gain this Clue.",
              "choices": {
                "Defeated the Monster": "You know its master felt the defeat; retreat Doom by 1.",
                "Did not defeat the Monster": ""
              }
            },
            "Failed the <img src=\"images/Will.webp\"> test": {
              "intro": "",
              "choices": {
                "Defeated the Monster": "You know its master felt the defeat; retreat Doom by 1.",
                "Did not defeat the Monster": ""
              }
            }
          }
        }
      }
    }
  }
];
