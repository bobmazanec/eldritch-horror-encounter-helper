deckData.Research["Hastur"] = [
  {
    "cardId": 1,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You find a leather-bound first edition of <i>The King in Yellow</i> on display at the local Historical Society. You are advised that reading the play is dangerous, but are given permission to do so should you desire. You may gain a Dark Pact Condition to gain this Clue and 1 additional Clue.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and 1 additional Clue": "",
        "Do not gain this Clue and 1 additional Clue": ""
      }
    },
    "Wilderness": {
      "intro": "You spot a traveler behaving erratically on the road and attempt to follow from a distance (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "The stranger eventually stops and draws a strange sign in the dirt; gain this Clue.",
        "Fail": "You are spotted and the strange traveler is now following you instead; gain a Blight Condition."
      }
    },
    "Sea": {
      "intro": "You spot a black spire rising ominously from the water, and study it from a distance (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discern it to be alien in nature; gain this Clue.",
        "Fail": "You direct the ship closer to get a better look, and its dark energy erodes your mind; impair <img src=\"images/Lore.webp\"> or <img src=\"images/Will.webp\">."
      }
    }
  },
  {
    "cardId": 2,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You methodically check buildings downtown for the Yellow Sign (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find the sign etched onto one door with a knife, and take note of who comes and goes; gain this Clue and 1 additional Clue.",
        "Fail": "You are arrested for trespassing; gain 1 Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "You prepare to make camp for the night, and check the surrounding area for any sign of danger (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find the Yellow Sign etched upon a stone, and erase it; gain this Clue.",
        "Fail": "Your sleep is fraught with dreams of a mad king in tattered golden robes; gain a Blight Condition."
      }
    },
    "Sea": {
      "intro": "A chilling shriek echoes over the waves, and you spot a dark shadow descending upon the deck of the ship. A Byakhee Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You study its remains and learn a great deal from the alien physiology; gain this Clue and 1 Talent Condition.",
            "Did not defeat it": ""
          }
        }
      }
    }
  },
  {
    "cardId": 3,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You believe you have found a painting that leads to Lost Carcosa and study it carefully (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "Choose one⸺observe who comes and goes to gain this Clue and 1 additional Clue; or destroy it to close 1 Gate of your choice on any space.",
        "Fail": "You are trapped by the painting in your carelessness; move to the nearest space containing a Gate."
      }
    },
    "Wilderness": {
      "intro": "Someone has been following you ever since you started asking questions about the Yellow King. A Cultist Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Defeated it": "You see that your assailant has etched hundreds of Yellow Signs onto his body with a knife; gain this Clue.",
            "Did not defeat it": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "Since leaving port, something strange has been affecting the behavior of the crew one by one, as if they were afflicted by a spreading madness. One night, you are invited to dine with them and partake in the gifts of the king. You may gain a Blight Condition to gain this Clue.",
      "choices": {
        "Gain a Blight Condition to gain this Clue": "",
        "Do not gain this Clue": ""
      }
    }
  },
  {
    "cardId": 4,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "The Silver Twilight Lodge wants to help you quell the epidemic of insanity, but does not yet trust you enough to reveal its secrets (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "Choose one⸺trade information with the Lodge to gain this Clue and 1 additional Clue; or form a deeper trust to gain a Promise of Power Condition.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "You hear a monotonous chanting and track it to its source (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You spot a group of men kneeling before a black spire in the distance; gain this Clue.",
        "Fail": "You make too much noise, and whoever you were looking for is now looking for you as well; gain a Pursuit Condition."
      }
    },
    "Sea": {
      "intro": "The sailors wager useful information against your rations in a game of cards (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You learn that the captain often speaks of the Tattered King; gain this Clue.",
        "Fail": "You become malnourished on the voyage and down with scurvy; impair <img src=\"images/Strength.webp\">."
      }
    }
  },
  {
    "cardId": 5,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "A snaggletoothed fence claims to have recently sold a wealthy politician an oil painting that transports the viewer to the shores of a lake on another world. He will divulge the politician's identity, if you pay him a hefty sum. You may gain a Debt Condition to gain this Clue.",
      "choices": {
        "Gain a Debt Condition to gain this Clue": "",
        "Do not gain this Clue": ""
      }
    },
    "Wilderness": {
      "intro": "You spy on a known disciple of the Yellow King as she works in her dilapidated but on the fringes of civilization (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You steal her journal; gain this Clue and 1 additional Clue.",
        "Fail": "She catches you, and word spreads quickly of a thief matching your description; impair <img src=\"images/Influence.webp\">."
      }
    },
    "Sea": {
      "intro": "The ship's captain offers to take you on as his protégé if you can convince him that the sickness has yet to reach you (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "Gain this Clue and 1 Talent Condition.",
        "Fail": "The captain believes himself to be the last sane person alive, and drowns himself; advance Doom by 1."
      }
    }
  },
  {
    "cardId": 6,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "At an elegant dinner party, you notice that the other guests are becoming bloated from the meal, yet they still shovel food into their mouths. You try to stop them (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "They are freed from their trance, and are grateful; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "They eat themselves to death; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You follow the bloodstained map to the best of your abilities (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find an abandoned house, filled with many fine silks and other fineries, all covered in blood; gain this Clue and 1 additional Clue.",
        "Fail": "You lose your way; become Delayed."
      }
    },
    "Sea": {
      "intro": "The night sky is blanketed by foreign stars with a strange black glow (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "Choose one⸺study their positions to gain this Clue; or perform a ritual that will return the sky to normal to retreat Doom by 1.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 7,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "The mafia offers to sell you information on recent occult dealings (<img src=\"images/Influence.webp\">-1); roll 2 additional dice if you have a Deal Condition.",
      "choices": {
        "Pass": "You work out a trade; gain this Clue or 1 Talent Condition.",
        "Fail": "Your offer is found to be inadequate, and they send men after you; gain 1 Injury Condition."
      }
    },
    "Wilderness": {
      "intro": "A man offers to share the glory of the Tattered King with you. You may gain this Clue. If you do not gain the Clue, you track the deranges man into the wilds (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find several terrified captives tied up in a clearing and release them; gain this Clue and retreat Doom by 1.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "The ship is suddenly blanketed by a thick fog and you struggle to see more than a few yards off the bow (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You spot a gargantuan black spire and divert the ship in time; gain this Clue and 1 additional Clue.",
        "Fail": "The ship slams into something large; lose 1 Health."
      }
    }
  },
  {
    "cardId": 8,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You endure hours of aimless rambling by a scholar of the occult, hoping to learn something about the fabled city of Carcosa (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You learn that the city can be reached through art; gain this Clue and 1 Talent Condition.",
        "Fail": "You are driven mad; gain 1 Madness Condition."
      }
    },
    "Wilderness": {
      "intro": "You speak with some farmers to learn the location of a renowned adventurer in the area (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "Choose one⸺learn from the man's wisdom to gain this Clue; or convince him to join you to gain 1 random Ally Asset from the deck.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "You search for a wreck reported to be carrying an object of great importance (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "Choose one⸺report the location to maritime authorities to gain this Clue and 1 additional Clue; or salvage the wreck to gain the Key to Carcosa Artifact.",
        "Fail": "The ship is never found; advance Doom by 1."
      }
    }
  },
  {
    "cardId": 9,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "A somewhat unsettling man offers to tell you the tale of the <i>King in Yellow</i> over dinner (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "He is impressed by your ability to retain your mental faculties; discard this Clue and gain the Hildred Castaigne Unique Asset.",
        "Fail": "The tale troubles you deeply; gain 1 Madness Condition."
      }
    },
    "Wilderness": {
      "intro": "Rumors of a kidnapping lead you to the edge of a vast wilderness, but saving the captive will require more than your strength alone. If you have an Ally Asset, you and your companions rescue the captive; gain this Clue. If you do not have an Ally Asset, you are injured in the attempt; lose 1 Health."
    },
    "Sea": {
      "intro": "A tantalizing voice whispers to you in your dreams of the wonders of Carcosa, you need only open your mind. You may spend 1 Sanity to gain this Clue.",
      "choices": {
        "Spend 1 Sanity to gain this Clue": "The voice says that only the unburdened may enter Carcosa; resolve the effect of each Deal Condition you have.",
        "Do not gain this Clue": "The voice says that only the unburdened may enter Carcosa; resolve the effect of each Deal Condition you have."
      }
    }
  },
  {
    "cardId": 10,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "A sharp featured young woman claiming to be a master of several questionably legal techniques has offered to join you, under the condition that you never try to unearth anything about her past. You may gain a Dark Pact to gain this Clue and the Corinna Jones Unique Asset.",
      "choices": {
        "Gain a Dark Pact to gain this Clue and the Corinna Jones Unique Asset": "",
        "Do not gain this Clue and the Corinna Jones Unique Asset": ""
      }
    },
    "Wilderness": {
      "intro": "You come across a skeleton clutching a weathered journal (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You catch a note inside the cover warning you from reading the rat of the journal; gain this Clue.",
        "Fail": "One of your companions falls under the sway of its accursed pages; gain a Blight Condition."
      }
    },
    "Sea": {
      "intro": "You sneak aboard a cargo ship after you see it being loaded with crates marked by the Yellow Sign (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discover that the crates are filled with priceless works of art; gain this Clue.",
        "Fail": "You are discovered by the ship's crew; gain a Pursuit Condition."
      }
    }
  },
  {
    "cardId": 11,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "A shop in town is reputed to carry a copy of the <i>King in Yellow</i>, but there is no order to the books on the shelves (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find it after hours of searching; gain the King in Yellow Artifact.",
        "Fail": {
          "intro": "You fail to notice the proprietor sneaking up behind you; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You search a wooded area reputed to be in use by a secretive cult, and find the Yellow Sign carved into many of the trees. Gain this Clue. If you have an Ally Asset, one of your companions is driven mad by the symbol, and attacks you in a fit of bloodlust; lose 2 Health and discard 1 Ally Asset."
    },
    "Sea": {
      "intro": "Ever since your ship left port, an eerie mood has fallen over the crew and other passengers. If you have an Ally Asset, one of your friends asks you, with a deranged smile on his face, if you have seen the Yellow Sign; you may gain a Madness Condition to gain this Clue.",
      "choices": {
        "Gain a Madness Condition to gain this Clue": "",
        "Do not gain this Clue": ""
      }
    }
  },
  {
    "cardId": 12,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "A small package arrives for you in a plain paper sack. Opening the package reveals a pale mask, and upon touching it you are inundated by visions of a prison deep within a faraway star. You may gain a Dark Pact Condition to gain the Pallid Mask Artifact and improve 1 skill of your choice.",
      "choices": {
        "Gain a Dark Pact Condition to gain the Pallid Mask Artifact and improve 1 skill of your choice": "",
        "Do not gain the Pallid Mask Artifact and improve 1 skill of your choice": ""
      }
    },
    "Wilderness": {
      "intro": "You try to befriend a traveler who claims to be headed to hear a local group speak about the Yellow King (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "Choose one⸺follow the traveler to gain this Clue; or warn the traveler to gain 1 random Ally Asset from the deck.",
        "Fail": "The traveler is never seen again; discard this Clue."
      }
    },
    "Sea": {
      "intro": "One of your companions points out a green light playing across the waves, and you search for the source (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You see a monk in emerald robes floating above the water, gain this Clue.",
        "Fail": "Obsession with the shimmering light warps your companion's mind; gain a Blight Condition."
      }
    }
  },
  {
    "cardId": 13,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "By speaking aloud the name of the Unspeakable One, you think you can better understand his power. You may spawn 1 Gate to gain this Clue.",
      "choices": {
        "Spawn 1 Gate to gain this Clue": "",
        "Do not gain this Clue": "Much of what you have come to learn is of little use to you; discard this Clue."
      }
    },
    "Wilderness": {
      "intro": "An apparition donned in flowing golden robes visits you in your dreams, speaking to you in an alien tongue (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You believe that you are being offered a gift; gain the Tattered Cloak Artifact.",
        "Fail": "The gift is given to one of your companions instead; gain a Blight Condition."
      }
    },
    "Sea": {
      "intro": "Each night the captain throws decadent parties below deck, but you suspect something is wrong with the food (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You resist the temptation to partake and meditate instead; gain this Clue and 1 Talent Condition.",
        "Fail": "You fall to temptation; gain 1 Madness Condition."
      }
    }
  },
  {
    "cardId": 14,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "In an abandoned warehouse, a group of Yellow Sign cultists are forcefully inducting a prisoner to their ranks. Observe the ceremony and allow the cult's power to grow to gain this Clue and impair <img src=\"images/Influence.webp\">; or interrupt the ceremony and escape with the prisoner to gain 1 random Ally Asset from the deck."
    },
    "Wilderness": {
      "intro": "You pose as a disciple of the Yellow King in order to gather information, but you find yourself needing to partake in their daily ceremonies (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You mimic the rituals perfectly; gain this Clue. It you fail, you are discovered to be an impostor; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        },
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "A fellow passenger claims to have unearthed star maps showing the location of the Unspeakable One's prison. He would be happy to share them with you should you invest in his next archaeological venture. You may gain a Debt Condition to gain this Clue.",
      "choices": {
        "Gain a Debt Condition to gain this Clue": "",
        "Do not gain this Clue": ""
      }
    }
  },
  {
    "cardId": 15,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You cash in favors to gain an audience with a man claiming to have been to Carcosa and back (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": {
          "intro": "He teaches you a little of what he learned; gain this Clue or gain 1 Talent Condition.",
          "choices": {
            "Gain this Clue": "",
            "Gain 1 Talent Condition": ""
          }
        },
        "Fail": "You have exhausted your resources to no avail; gain a Debt Condition."
      }
    },
    "Wilderness": {
      "intro": "A crazed hermit demands your blood in exchange for information. You may spend 1 Health to gain this Clue. Eyes shot with blood, the frenzied hermit looks for his next meal. If you have an Ally Asset, the hermit attacks your companion with ravenous fervor; discard 1 Ally Asset and lose 2 Sanity.",
      "choices": {
        "Gain this Clue": "spend 1 Health to gain this Clue",
        "Don't": ""
      }
    },
    "Sea": {
      "intro": "You stow away aboard a trading vessel rumored to be owned by retainers of the Yellow King (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You make a copy of their shipping log; gain this Clue.",
        "Fail": "You are caught hiding amongst the cargo and indebted to the ship's captain; gain a Debt Condition."
      }
    }
  },
  {
    "cardId": 16,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "The mafia knows something, but they refuse to deal with anyone they do not already know. If you have a Deal Condition, they will tell you what you want to know if you do their dirty work.",
      "choices": {
        "Have a Deal Condition": {
          "intro": "You may spend 1 Sanity to gain this Clue.",
          "choices": {
            "Spend 1 Sanity to gain this Clue": "",
            "Do not gain this Clue": ""
          }
        },
        "Do not have a Deal Condition": "They refuse; discard this Clue."
      }
    },
    "Wilderness": {
      "intro": "Winged beasts have been terrorizing the countryside, and you attempt to track them to their source (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You watch a man in yellow robes summon forth one of the strange creatures; gain this Clue.",
        "Fail": {
          "intro": "Your meddling does not go unnoticed; a Byakhee Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "You barter with a shady boatswain for passage on a ship you believe to be trafficking humans (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "Choose one: study the crew to gain this Clue; or free the captives to gain 1 random Ally Asset from the deck.",
        "Fail": "You are violently discouraged from snooping; lose 1 Health."
      }
    }
  },
  {
    "cardId": 17,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "Word on the street is that the police found a strange symbol drawn in blood connecting multiple grisly murders. Your inquiries to the department have all been denied, and you consider breaking into the station to look through their files. You may gain a Wanted Condition to gain this Clue.",
      "choices": {
        "Gain a Wanted Condition to gain this Clue": "",
        "Do not gain this Clue": ""
      }
    },
    "Wilderness": {
      "intro": "You come across the Yellow Sign carved into a smooth rock face, glowing as if lit from within. You sense power emanating from its contours, evaluating you front a distance. If you have a Deal Condition, the power imbues you with its vile blessing gain this Clue or improve 1 skill of your choice."
    },
    "Sea": {
      "intro": "You infiltrate a ship operated by the Cult of the Yellow Sign. If you have an Ally Asset, your companion's carelessness frequently endangers your tenuous position; impair <img src=\"images/Influence.webp\"> or <img src=\"images/Will.webp\">. You investigate the shady operation (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You learn where the ship is headed; gain this Clue.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 18,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "The Emerald Lama's perpetual pilgrimage has brought him to a heretofore unknown temple in the city, and he has offered to confer his divine blessing upon all who wish to visit him there. You may gain a Dark Pact Condition to gain this Clue and a Promise of Power Condition.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and a Promise of Power Condition": "",
        "Do not gain this Clue and a Promise of Power Condition": ""
      }
    },
    "Wilderness": {
      "intro": "The Cult of the Yellow Sign is hunting your friends (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You conceal yourselves well enough that the cult gives up: gain this Clue.",
        "Fail": "The cult captures your friends and performs a dark ritual upon them; gain a Blight Condition."
      }
    },
    "Sea": {
      "intro": "You enlist with the crew of a cargo ship owned by the Cult of the Yellow Sign. If you have a Deal Condition, they vet you carefully; resolve the effect of each Deal Condition you have. Having infiltrated the operation, you think you can hijack the ship. You may gain a Wanted Condition to retreat Doom by 1.",
      "choices": {
        "Gain a Wanted Condition to retreat Doom by 1": "",
        "Do not retreat Doom by 1": ""
      }
    }
  },
  {
    "cardId": 19,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You believe you can convince one of the recently indoctrinated to change his ways (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You manage to persuade him; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "Your obsession with saving him blinds you to the truth; impair <img src=\"images/Lore.webp\"> or <img src=\"images/Observation.webp\">."
      }
    },
    "Wilderness": {
      "intro": "A voice replete with malice and deceit speaks to you when you are alone. It identifies itself as a simple shepherd and promises you limitless power should you help to weaken the bindings of its otherworldly prison. You may discard this Clue and spawn 1 Gate to gain a Promise of Power Condition.",
      "choices": {
        "Discard this Clue and spawn 1 Gate to gain a Promise of Power Condition": "",
        "Do not gain a Promise of Power Condition": ""
      }
    },
    "Sea": {
      "intro": "The agents of evil are everywhere. If you have a Deal Condition, every shadow holds movement, every footstep on the deck is the darkness come to collect; lose 2 Sanity. You notice men watching your every movement (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find evidence linking them together; gain this Clue.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 20,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You hire the finest burglar you can afford to break into the police station and steal a case file on the Cult of the Yellow Sign (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "The burglar finds what you need; gain this Clue.",
        "Fail": "The burglar is caught, and you drain your bank account posting his bail; gain a Debt Condition."
      }
    },
    "Wilderness": {
      "intro": "Away from distractions, the import of the things you have seen weighs heavily upon you (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You make a connection you had not previously realized; gain this Clue and improve <img src=\"images/Observation.webp\">.",
        "Fail": "The stress is too much; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "Your ship is attacked, and fish-like creatures drag you into the briny waters. Their shaman gifts you with a vision of a terrible creature of the deep engaged in an endless war with an entity of the cosmos. You may spend 3 Sanity and impair <img src=\"images/Will.webp\"> to gain this Clue and a Promise of Power Condition.",
      "choices": {
        "Spend 3 Sanity and impair <img src=\"images/Will.webp\"> to gain this Clue and a Promise of Power Condition": "",
        "Do not gain this Clue and a Promise of Power Condition": ""
      }
    }
  },
  {
    "cardId": 21,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "The Silver Twilight Lodge has taken an interest in the things you have uncovered about the Cult of the Yellow Sign. The Lodge offers you great power if you will go about your business and let them handle the rest. You may advance Doom by 2 to gain this Clue and a Promise of Power Condition.",
      "choices": {
        "Advance Doom by 2 to gain this Clue and a Promise of Power Condition": "",
        "Do not gain this Clue and a Promise of Power Condition": ""
      }
    },
    "Wilderness": {
      "intro": "After tailing the men to a forgotten temple, you search the premise to see what they found (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find disturbingly lifelike painting of a city on a lake; close 1 Gate of your choice on any space.",
        "Fail": "You hurt yourself while exploring the ruined structure; lose 1 Health."
      }
    },
    "Sea": {
      "intro": "You enter a boxing match to gain the favor of the captain. You may gain an Injury Condition to gain this Clue. After the fight, you hear a scuffling noise corning from below deck (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "You realize too late that your quarters have been robbed; discard 1 Item Asset."
      }
    }
  },
  {
    "cardId": 22,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "One of your friends has been acting strangely and asks to meet with you in private. Your friend asks if you have seen the Yellow Sign and begs you to help pave the way for the king. If you have an Ally Asset, you may gain a Blight Condition to gain this Clue and a Promise of Power Condition.",
      "choices": {
        "Gain a Blight Condition to gain this Clue and a Promise of Power Condition": "",
        "Do not gain this Clue and a Promise of Power Condition": ""
      }
    },
    "Wilderness": {
      "intro": "You follow a trail of lies hoping to locate a victim occult brainwashing (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "Choose one⸺question the victim about her captors to gain this Clue; or convince her to leave with you to gain 1 random Ally Asset from the deck.",
        "Fail": "It is as if she disappeared into thin air; discard this Clue."
      }
    },
    "Sea": {
      "intro": "You study a cluster of black spires recently discovered protruding from deer waters (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You know them to be of alien origin; gain this Clue.",
        "Fail": {
          "intro": "Your mishandling of the spires draws the attention of a winged abomination; a Byakhee Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 23,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You tell anyone who will listen that the dark rumors revolving around <i>The King in Yellow</i> are more than just a publicity stunt (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You find someone who shares your concern; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "You are met with laughter and scorn; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You hear cacophonous chanting in the woods and try to locate the source (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You catch a glimpse of a monk in emerald robes, upturned gaze basking in the light of the stars; gain this Clue.",
        "Fail": "The discordant chanting erodes your sense of purpose; gain an Amnesia Condition."
      }
    },
    "Sea": {
      "intro": "Something deep within you has been calling you to the ocean. Staring into its black depths you realize you must chose between two evils. Spawn 1 Gate unless you gain a Dark Pact Condition.",
      "choices": {
        "Gain the Condition": "The sleeper in the depths inform you about the Unspeakable One; gain this Clue.",
        "Don't": ""
      }
    }
  },
  {
    "cardId": 24,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You negotiate with the police chief to release an ex-convict from the county jail (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He agrees, and the grateful inmate sets about making things right; gain 1 random Ally Asset from the deck.",
        "Fail": "You are arrested under suspicion of collaboration; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "Much to your horror, one of the Thousand Young visits you with a proposal on account of its mother, Shub-Niggurath, who is not yet prepared for the homecoming of her nefarious mate. You may gain a Dark Pact Condition to gain this Clue and close 1 Gate of your choice on any space.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and close 1 Gate of your choice on any space": "",
        "Do not gain this Clue and close 1 Gate of your choice on any space": ""
      }
    },
    "Sea": {
      "intro": "One of the sailors begins to sing a haunting dirge for the lost city of Carcosa (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You shake free of the song's melody and ask him to sing something else; gain this Clue.",
        "Fail": "The song embeds itself in the mind of one of your companions; gain a Blight Condition."
      }
    }
  }
];
