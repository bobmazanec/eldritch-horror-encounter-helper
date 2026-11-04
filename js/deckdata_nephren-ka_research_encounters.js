deckData.Research["Nephren-Ka"] = [
  {
    "cardId": 1,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You are hired to deliver a strange package to a retired professor on the edge of town (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You see the package shift, and carefully open it to reveal a poisonous asp; gain this Clue.",
        "Fail": "You see the professor's name in the following morning's obituaries; advance Doom by 1."
      }
    },
    "Wilderness": {
      "intro": "You meet a confused looking traveler on the road and offer your assistance (<img src=\"images/Influence.webp\">-2).",
      "choices": {
        "Pass": "The traveler claims to have been exploring a dark passage deep within the Great Pyramid of Giza only moments before; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "A violent gale roars across the sea, and you think you hear a strange chant upon the wind. Suddenly, the water turns to sand, and your ship appears to be stranded (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You manage to dispel the illusion; gain this Clue.",
        "Fail": "Move to The Sahara Desert and become Delayed."
      }
    }
  },
  {
    "cardId": 2,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "At a well hidden pawn shop, the proprietor offers, for a fair price, to bestow upon you the magic of her ruby-encrusted scarab amulet (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue and 1 Glamour Spell.",
        "Fail": "She calls you greedy and turns the power of the amulet against you instead; impair <img src=\"images/Lore.webp\">."
      }
    },
    "Wilderness": {
      "intro": "A dark wind brings soft whispers of death and famine to your ears, simultaneously offering you the power to prevent it. You may gain a Dark Pact Condition to gain this Clue and improve <img src=\"images/Observation.webp\"> and <img src=\"images/Strength.webp\">.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and improve <img src=\"images/Observation.webp\"> and <img src=\"images/Strength.webp\">": "",
        "Do not gain this Clue and improve <img src=\"images/Observation.webp\"> and <img src=\"images/Strength.webp\">": "The wind murmurs of evil to come; gain 1 Bane Condition."
      }
    },
    "Sea": {
      "intro": "A ship belonging to the Brotherhood of the Beast is carrying catalysts to be used in Nephren-Ka's resurrection. You try to sneak into the ship's cargo hold (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You discover a carefully wrapped treasure; gain 1 Relic Artifact.",
        "Fail": "You are captured; gain a Detained Condition."
      }
    }
  },
  {
    "cardId": 3,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You search through police files for old records on Church of Starry Wisdom activity (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You learn that they funded a dig in Egypt; gain this Clue, and you may shuffle the Expedition Encounter deck.",
        "Fail": "The police grow suspicious and refuse you further aid; impair <img src=\"images/Influence.webp\">."
      }
    },
    "Wilderness": {
      "intro": "Washing your face in a pool of still water, your reflection shows you not in life, but in death (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You swallow your fear and study the reflection, noting a dark pyramid rising ominously in the background; gain this Clue.",
        "Fail": "You recoil, and the image vanishes; advance Doom by 1."
      }
    },
    "Sea": {
      "intro": "You notice a shady passenger aboard the ship, and sneak into his cabin to snoop (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find documents linking him to the Brotherhood of the Beast; gain this Clue and 1 additional Clue.",
        "Fail": {
          "intro": "He catches you red-handed; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 4,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You wake to find hieroglyphs scratched into your door, and try to understand their meaning (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You recognize the symbols for death and fire, and leave through the window; gain this Clue.",
        "Fail": "The door bursts into flame when you try to leave, burning you badly; lose 1 Health."
      }
    },
    "Wilderness": {
      "intro": "Rumors of Brotherhood of the Beast activity lead you to several outlying farms, but the area appears to be completely abandoned. You take a look around to see if you can figure out why (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You realize that the harvest has been decimated by swarms of locusts; gain this Clue.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "The disembodied head of an Egyptian pharaoh speaks to you in your dreams. \"You are mine!\" he says, and you can feel your memories vanishing. If you have a Dark Pact Condition, discard all of your Clues. If you do not have a Dark Pact Condition, you wake up, heart racing; gain this Clue."
    }
  },
  {
    "cardId": 5,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You find markings in the margin of a timeworn text on resurrection. You ask the librarian for a list of who has checked out the book (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "She finds the names for you; gain this Clue.",
        "Fail": {
          "intro": "She refuses, and you are attacked during the night; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You hurriedly search the cultist's campsite while they are away (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a scroll detailing Nephren-Ka's reign and fall, along with an object he allegedly used to control his subjects; gain this Clue and 1 Relic Unique Asset.",
        "Fail": {
          "intro": "A Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "During the long days at sea, you study the history of ancient pharaohs and try to commit their genealogy to memory (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You uncover the secrets of Nephren-Ka's past; gain this Clue and improve <img src=\"images/Lore.webp\">.",
        "Fail": "The hours wasted studying drain you; lose 1 Sanity."
      }
    }
  },
  {
    "cardId": 6,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You visit with a world renowned cartographer, and he gladly shows you the maps he has drawn of the passages and chambers within the Great Pyramids. Gain this Clue. You hastily make copies of the maps for your own collection (<img src=\"images/Observation.webp\">-2).",
      "choices": {
        "Pass": "The copies prove useful; gain 1 additional Clue.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "You attempt to stay hidden while following members of the Brotherhood of the Beast to their ritual site (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You see them slaughter a goat and then resurrect it; gain this Clue.",
        "Fail": "You stumble into their poisoned spike trap; lose 1 Health and gain 1 Illness Condition."
      }
    },
    "Sea": {
      "intro": "Looking out over the water, you strain to identify a large, floating mass in the distance (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You see that thousands of dead fish have floated to the surface of the water; gain this Clue.",
        "Fail": "You are so distracted that you fall over the railing and crash to the lower decks; lose 1 Health."
      }
    }
  },
  {
    "cardId": 7,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You bump into a young man, knocking him off his feet (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You catch him grabbing your wallet, and he promises to help you if you do not turn him over to the police; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "You realize later that you have been robbed; impair <img src=\"images/Influence.webp\">."
      }
    },
    "Wilderness": {
      "intro": "Your skin is beginning to rot where an apparition of Nephren-Ka touched you in a dream. You may spend 2 Health to carve the infection from your arm.",
      "choices": {
        "Spend 2 Health to carve the infection from your arm": "The flesh crumbles to sand; gain this Clue.",
        "Do not carve the infection from your arm": "Gain a Diseased Condition."
      }
    },
    "Sea": {
      "intro": "You gaze wistfully at the stars, wishing only that they would provide you with the answers that you crave (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You see a shooting star cross the sky, and you feel empowered; improve <img src=\"images/Will.webp\">.",
        "Fail": "The burden of your quest crushes your spirit; gain a Despair Condition."
      }
    }
  },
  {
    "cardId": 8,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "Seemingly from nowhere, the city is engulfed suddenly in a tremendous sandstorm. You tell yourself that you have to keep moving (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You manage to find shelter until the storm passes; gain this Clue.",
        "Fail": "You collapse in the street, blinded by the stinging sands; impair <img src=\"images/Observation.webp\">."
      }
    },
    "Wilderness": {
      "intro": "A dark power compels you to travel through the unknown for miles. You come at last to a shrine covered in hieroglyphs, upon which lies the source of the calling. If you have a Dark Pact Condition, the power compels you to smash the object to bits; discard this Clue. If you do not have a Dark Pact Condition, you take it; gain 1 Relic Unique Asset."
    },
    "Sea": {
      "intro": "The ghost of a priest wronged in life by the Dark Pharaoh visits you at night. He offers to lend you his strength, if you can contain it (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue and 1 Glamour Spell.",
        "Fail": "Your body breaks under the strain; impair <img src=\"images/Strength.webp\">."
      }
    }
  },
  {
    "cardId": 9,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "The Brotherhood of the Beast has you marked as a thrcat in this city, and you try to keep a low profile while you spy on them (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You remain undetected, and witness them turning the city's water supply black; gain this Clue.",
        "Fail": {
          "intro": "A Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "The Brotherhood of the Beast is known to partake in occult practices in the area, and you search for the spot (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You locate the ritual site and destroy it; gain this Clue and retreat Doom by 1.",
        "Fail": "The cult's work goes uninterrupted; spawn 1 Monster on the Active Expedition space."
      }
    },
    "Sea": {
      "intro": "Your ship is being tailed. You chart a course using sea channels to outpace them (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "One of the crew is impressed and joins your entourage; gain 1 Character Unique Asset.",
        "Fail": "The unknown ship will not relent; gain 1 Bane Condition."
      }
    }
  },
  {
    "cardId": 10,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You inspect the municipal library's transcribed copy of the <i>Rw nw prt m hrw</i>, the Book of the Dead, after the book was found on the body of a dead cultist (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You realize that all of the pages regarding resurrection have been torn out; gain this Clue and 1 additional Clue.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "You discover a warning written in hieroglyphs on the lid of a now broken sarcophagus. You try to translate (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You learn that a piece of Nephren-Ka's body was housed in this tomb, far from the rest, that it might never be whole again; gain this Clue.",
        "Fail": "You fall ill after being exposed to the stale air; gain a Diseased Condition."
      }
    },
    "Sea": {
      "intro": "A vision of an ancient pyramid rising out of the desert sand comes to you in your dreams. Gain this Clue. When you wake, you try to convince the captain to change course (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You may shuffle the Expedition Encounter deck.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 11,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "A team has returned from the pyramids with many treasures, but claim the objects are cursed. You insist that you can handle them safely (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "They let you take one to study; gain this Clue and 1 Relic Unique Asset.",
        "Fail": "They dispose of the dangerous treasures; discard this Clue."
      }
    },
    "Wilderness": {
      "intro": "A set of hastily scrawled treasure maps, recently recovered from a raid on the Brotherhood of the Beast, lead you to a secluded area reported to house some of the Dark Pharaoh's cursed treasure. It is well hidden from anyone unsure of what to look for. You may become Delayed to gain 1 Relic Artifact.",
      "choices": {
        "Become Delayed to gain 1 Relic Artifact": "",
        "Do not gain 1 Relic Artifact": ""
      }
    },
    "Sea": {
      "intro": "Dozens of voices speak to you when you close your eyes. You attempt to find a correlation to what they say (<img src=\"images/Observation.webp\">); roll 1 fewer die for each Relic possession you have.",
      "choices": {
        "Pass": "The voices whisper of Nephren-Ka's resurrection; gain this Clue.",
        "Fail": "Lose 1 Sanity and gain 1 Bane Condition."
      }
    }
  },
  {
    "cardId": 12,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "An archaeologist probes you for information about a recent dig (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You realize he belongs to the Brotherhood of the Beast and that they are searching for something; gain this Clue.",
        "Fail": "You speak without reservation, and hear later that the dig site was raided; spawn 1 Monster on the Active Expedition space."
      }
    },
    "Wilderness": {
      "intro": "You are captured and strapped to a stone altar by the Brotherhood of the Beast. You struggle against your restraints (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "You break free and escape; gain this Clue.",
        "Fail": "They bleed you as part of a sinister ceremony; lose 2 Health."
      }
    },
    "Sea": {
      "intro": "One of the passengers, craving adventure, wishes to join you, but owes a sum of money to a shady group from Cairo. You try to pay it off lest it end in violence (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "The debt is exacted from you as well; lose 1 Health."
      }
    }
  },
  {
    "cardId": 13,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You attend a banquet for the reveal of a beautiful jewel uncovered recently in Cairo. When you leave, you are startled to find the jewel in your coat pocket. You think at first to return it, but it begins to whisper praise and promises of power in your ear. You may gain a Dark Pact Condition to gain this Clue and the Shining Trapezohedron Artifact.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and the Shining Trapezohedron Artifact": "",
        "Do not gain this Clue and the Shining Trapezohedron Artifact": ""
      }
    },
    "Wilderness": {
      "intro": "After an inexplicable firestorm, you search the burnt earth for what might have caused it (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find the remnants of a shattered gem amongst a pile of smoldering rags; gain this Clue and 1 additional Clue.",
        "Fail": "Exposure to the smoke burns your eyes; impair <img src=\"images/Observation.webp\">."
      }
    },
    "Sea": {
      "intro": "The first mate offers to give you something he found if you can solve his riddle (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue and 1 Relic Unique Asset.",
        "Fail": "He teases you relentlessly for the rest of the journey for being unable to solve the riddle; lose 1 Sanity."
      }
    }
  },
  {
    "cardId": 14,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "The Brotherhood of the Beast offers to let you attend one of their meetings, provided that you pledge your allegiance to the Dark Pharaoh. You may gain a Dark Pact Condition to gain this Clue and 1 Relic Artifact.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and 1 Relic Artifact": "",
        "Do not gain this Clue and 1 Relic Artifact": {
          "intro": "A Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You try to convince your companions that the Brotherhood of the Beast is searching for a way to resurrect the Dark Pharaoh. (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "They acquiesce, and you work together to come up with a plan; retreat Doom by 1.",
        "Fail": "They berate you for your naiveté; impair <img src=\"images/Will.webp\">."
      }
    },
    "Sea": {
      "intro": "The crew will offer you a share of the loot they recovered from the Brotherhood of the Beast if you can remove the hex that lies upon it (<img src=\"images/Lore.webp\">-1). If you pass; gain this Clue and improve <img src=\"images/Influence.webp\">.",
      "choices": {
        "Pass": "",
        "Fail": "You accidentally free a trapped monstrosity; spawn 1 Monster on the Active Expedition space."
      }
    }
  },
  {
    "cardId": 15,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "The library is rumored to have one of the lost manuscripts of the Necronomicon, but their filing system is absolutely atrocious (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You cannot find the book, but its proximity erodes your mental state; impair <img src=\"images/Will.webp\">.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "Someone has etched a series of hieroglyphs into the earth. You translate them to the best of your knowledge (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "The markings depict a sunken pyramid rising up from the sand; gain this Clue.",
        "Fail": {
          "intro": "A hooded man attacks you without warning; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "You seek audience with an oracle said to have lived in the time of the pharaohs (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "She speaks of the Dark Pharaoh, Nephren-Ka, and the places where he conducted his cruel experiments and sacrificial ceremonies; gain this Clue, and you may shuffle the Expedition Encounter deck.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 16,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "The young Egyptologist's interest is peaked by your arcane ability, and she offers to teach you a blessing from the Book of the Dead if you share your knowledge with her (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue and 1 Glamour Spell.",
        "Fail": "Her teachings prove too difficult to comprehend; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You observe the cultists from a distance, but have trouble identifying their faces (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You notice key members of both the Brotherhood of the Beast and the Church of Starry Wisdom; gain this Clue and 1 additional Clue.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "You barter with the captain to tell you what he knows about the Brotherhood of the Beast (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He agrees, but only if you help the crew with their duties; gain this Clue and improve <img src=\"images/Strength.webp\">.",
        "Fail": "He suspects you are one of the cult yourself, and rifles through your things; if you have a Relic possession, gain a Detained Condition."
      }
    }
  },
  {
    "cardId": 17,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "A large crowd has gathered around a man who has handcuffed himself to a street lamp. The crowd cheers with glee as he miraculously escapes his bindings (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You manage to deduce how he did it, and he introduces himself as Erich Weiss; gain the Erich Weiss Unique Asset.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "After tailing a suspicious man for several hours, he turns suddenly to make sure he is alone. You try to remain completely still (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You observe him meeting with a tall, imposing man dressed in gold; gain this Clue.",
        "Fail": "He catches sight of you and flees; discard this Clue."
      }
    },
    "Sea": {
      "intro": "You plead with the captain for passage, but he is distrustful (<img src=\"images/Influence.webp\">); roll 1 fewer die for each Ally Asset you have.",
      "choices": {
        "Pass": "You discover that he recently came into the possession of a piece of the Dark Pharaoh's treasure; gain this Clue.",
        "Fail": "He charges an exorbitant price; impair <img src=\"images/Influence.webp\">."
      }
    }
  },
  {
    "cardId": 18,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "An eccentric collector offers you a piece of his collection of Egyptian heirlooms, provided that you can distinguish it from amidst a room full of clever replicas (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "Gain this Clue and 1 Relic Unique Asset.",
        "Fail": "His private security throws you out onto the street; lose 1 Health."
      }
    },
    "Wilderness": {
      "intro": "A looming, faceless apparition offers to lend you its power, foretelling of an eternity of misery and sorrow under the cruel reign of Nephren-Ka, the Dark Pharaoh. You may gain a Dark Pact Condition to retreat Doom by 1.",
      "choices": {
        "Gain a Dark Pact Condition to retreat Doom by 1": "",
        "Do not retreat Doom by 1": "Advance Doom by 1."
      }
    },
    "Sea": {
      "intro": "An account of Nephren-Ka's atrocities was written in code after all traditional records were stricken from existence. You attempt to translate during your time at sea (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You learn that he ruled from within a dark pyramid; gain this Clue.",
        "Fail": "The work makes you seasick; lose 1 Sanity."
      }
    }
  },
  {
    "cardId": 19,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "A package from someone named Abdul Reis el Drogman is addressed to a local merchant. To your horror, a corpse bursts from the package upon delivery. A Mummy Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Strength.webp\"> test": "The grateful merchant rewards you handsomely; gain this Clue and improve <img src=\"images/Influence.webp\">.",
            "Failed the <img src=\"images/Strength.webp\"> test": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You follow a group of cultists to a back country shrine, where they leave an offering to the Dark Pharaoh. As more cultists arrive, you decide it best to leave, but you try to find your way back the next day (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You ransack their offering; gain 1 Relic Unique Asset.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "After a run-in with the Church of Starry Wisdom, a spectral terror appears in the sky, its burning eye flaring as it spins a dark hex upon you. You attempt to disrupt its awful power (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "The terror fades; gain this Clue.",
        "Fail": "Flip that Condition."
      }
    }
  },
  {
    "cardId": 20,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You watch the house of a known Starry Wisdom Cult member, and wait for him to leave (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find his journal, and learn that the cult worships a winged creature with burning eyes; gain this Clue.",
        "Fail": "You prick your finger on a trap he left behind; gain a Diseased Condition."
      }
    },
    "Wilderness": {
      "intro": "You inspect the charred remains of a ritual sacrifice, hoping to discover information about the perpetrators (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find the hieroglyph \"ankh\" carved into the skull; gain this Clue.",
        "Fail": "The sight of the human sacrifice is too much to bear; lose 2 Sanity."
      }
    },
    "Sea": {
      "intro": "The crash of thunder rolls loudly across the water, waking you from a deep slumber. At the foot of your bed, a swarthy man in pharaonic garb stands, watching. He does not speak, but he extends his hand. You may gain a Dark Pact Condition to gain this Clue and 1 additional Clue.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and 1 additional Clue": "",
        "Do not gain this Clue and 1 additional Clue": ""
      }
    }
  },
  {
    "cardId": 21,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "The Order of the Silver Twilight claims to have conducted surveillance on the Church of Starry Wisdom, and that it would be mutually beneficial to join them. You may gain a Dark Pact Condition to learn of the Church's ties in Cairo.",
      "choices": {
        "Gain a Dark Pact Condition to learn of the Church's ties in Cairo": "Gain this Clue and 1 additional Clue.",
        "Do not learn of the Church's ties in Cairo": ""
      }
    },
    "Wilderness": {
      "intro": "Locusts have destroyed the foliage in the area, leaving you without enough rations (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You realize that the locusts were summoned by the Brotherhood of the Beast; gain this Clue.",
        "Fail": "You split what meager rations you have remaining; if you have an Ally Asset, lose 2 Health."
      }
    },
    "Sea": {
      "intro": "An unnatural storm rages, and a colossal wave tosses you overboard. As the sailors scramble to pull you up, you feel something brush against your side. A Spawn of Sebak Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Will.webp\"> test": "You get a good look at the crocodilian beast before being rescued; gain this Clue.",
            "Failed the <img src=\"images/Will.webp\"> test": ""
          }
        }
      }
    }
  },
  {
    "cardId": 22,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You search the weathered papyrus scrolls for information about Nephren-Ka, but the ancient Egyptians tried to expunge all records of the Dark Pharaoh from existence, so information is scarce at best (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a brief mention of his rule; gain this Clue.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "You come across a forgotten sack at an abandoned campsite. Lifting the flap to peer inside, you find a deadly asp coiled atop a stack of papers (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You snatch the papers quickly and shut the flap; gain this Clue.",
        "Fail": "You startle the snake, and it bites you; gain 1 Illness Condition."
      }
    },
    "Sea": {
      "intro": "You notice an oblong box being loaded onto the ship. After the voyage commences, you try to find it in the cargo hold (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discover a mummified corpse in the box and dispose of it; gain this Clue.",
        "Fail": {
          "intro": "You are attacked that night; a Mummy Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 23,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You knock on the door of the plain blue house indicated in the unsigned letter you received earlier in the day. Nobody answers, but you enter and search the house anyway (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find documents linking the Church of Starry Wisdom with a dig site in Egypt; gain this Clue.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "The stones of the long forgotten temple have been smeared with glyphs written in blood. You recognize them as hieroglyphs and translate (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "The message reads \"the time has come;\" gain this Clue.",
        "Fail": "You translate the message as \"the end has come;\" gain 1 Madness Condition."
      }
    },
    "Sea": {
      "intro": "The sailors warns you to stay off the deck at night. Curious, you sneak above deck, only to witness a member of the Brotherhood of the Beast undergo a monstrous transformation. Gain this Clue. A Mummy Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated the Monster": "Gain 1 additional Clue.",
            "Did not defeat the Monster": ""
          }
        }
      }
    }
  },
  {
    "cardId": 24,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "Since touching the idol at the Egypt exhibit, you have heard whispers when you are alone (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You translate the words before the voices stop; gain this Clue and 1 additional Clue.",
        "Fail": "The voices only grow louder; lose 1 Sanity for each Relic possession you have."
      }
    },
    "Wilderness": {
      "intro": "You barter with a recluse to tell you what he knows about the Brotherhood of the Beast (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He tells you that the Brotherhood is looking for a suitable vessel for the return of Nephren-Ka; gain this Clue.",
        "Fail": "He bites your arm; lose 1 Health and gain 1 Illness Condition."
      }
    },
    "Sea": {
      "intro": "You watch the crew carefully during the lengthy voyage (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You deduce that some of them to belong to the Brotherhood of the Beast and keep your distance; gain this Clue.",
        "Fail": "You fall ill under mysterious circumstances; gain a Diseased Condition."
      }
    }
  }
];
