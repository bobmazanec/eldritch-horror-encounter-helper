deckData.Research["Hypnos"] = [
  {
    "cardId": 1,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You pore over the pages from the dream journals of patients from an asylum (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You notice a series of dots in the margins; gain this Clue and 1 additional Clue. Each of the journals has different markings. You record the markings in case it someday proves useful.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "You scan the night sky as you prepare to make camp for the evening (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You notice a constellation that matches one that you saw in your dreams; gain this Clue.",
        "Fail": "A pulsing golden star enraptures you with its malevolent luminescence; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "One of the crew is sleepwalking on the deck and normal means do not wake him (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You realize that he is hypnotized and restrain him until he regains his faculties; gain this Clue and retreat Doom by 1.",
        "Fail": {
          "intro": "He struggles against you; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 2,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "A gentleman in flowing white silks claims to know what you seek (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You convince him to share what he knows; gain this Clue and, if you are on the Dreamlands side board, gain 1 Task Unique Asset.",
        "Fail": {
          "intro": "He morphs into a hideous nightmare; a Ghoul Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You chase an ashen figure through the muck of a wooded fen (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You get a look at the figure's empty black eyes before you wake; gain this Clue and 1 additional Clue.",
        "Fail": "Your injuries from the dream remain when you wake; lose 1 Health and gain 1 Injury Condition."
      }
    },
    "Sea": {
      "intro": "Without warning, you feel yourself being drawn into the unknown (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You notice a sliver of red-gold light in the sky; gain this Clue.",
        "Fail": "You are propelled through the cosmos until you come to rest amongst distant stars; gain a Lost in Time and Space Condition."
      }
    }
  },
  {
    "cardId": 3,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "A deranged madman claims to have achieved mastery over servants of the Abyss. Gain this Clue. He sics one of the beasts on you. A Nightgaunt Monster ambushes you!",
      "choices": {
        "Resolved the combat": {
          "intro": "",
          "choices": {
            "Passed the <img src=\"images/Strength.webp\"> test": "",
            "Failed the <img src=\"images/Strength.webp\"> test": "The last thing you see is the ground fading away beneath you; gain a Lost in Time and Space Condition."
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You attempt to control the chaotic events within your own dreams (<img src=\"images/Lore.webp\">-1); roll 2 additional dice if you are on the Dreamlands side board.",
      "choices": {
        "Pass": "You are able to easily perform fantastic feats; gain this Clue.",
        "Fail": "Things cascade out of your control; advance Doom by 1."
      }
    },
    "Sea": {
      "intro": "The captain has requested that you search for any sign of a missing sailor (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a marble statue resembling the man in the cargo hold; gain this Clue and 1 additional Clue.",
        "Fail": "You go without sleep to search for the man but find nothing; lose 1 Sanity."
      }
    }
  },
  {
    "cardId": 4,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "Paralyzed with fright, you search for a way to escape a pit of serpents (<img src=\"images/Observation.webp\">-1); roll 2 additional dice if you are on the Dreamlands side board.",
      "choices": {
        "Pass": "You realize that it is just a dream; gain this Clue and 1 additional Clue.",
        "Fail": "The snakes strike at you and you jolt awake, bleeding; lose 2 Health."
      }
    },
    "Wilderness": {
      "intro": "Drowsiness overcomes you as you struggle to stay awake (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You see a golden light before you pass out; gain this Clue and you may discard the top card of the Dream-Quest Encounter deck.",
        "Fail": "You fall asleep and dream of death and famine; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "Shimmering colors on the water present a vision of a fantastical dreamscape, and a scintillating light from a space beyond the surface entices you to leave your earthly existence behind and jump in. You may gain a Lost in Time and Space Condition to gain this Clue and 1 Boon Condition.",
      "choices": {
        "Gain a Lost in Time and Space Condition to gain this Clue and 1 Boon Condition": "",
        "Do not gain this Clue and 1 Boon Condition": ""
      }
    }
  },
  {
    "cardId": 5,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You dream that your teeth decay and fall from your mouth (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "The dream changes and you uncover arcane energy layered within the dream; gain this Clue and 1 Spell.",
        "Fail": "You wake in a cold sweat touching your teeth to make sure they are still whole; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "A wizened oracle interprets your dreams for a small price. Gain this Clue and a Debt Condition. She warns you that your future holds many sorrows, and offers to read your palm (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You learn much; gain 1 additional Clue.",
        "Fail": "You scoff at the notion; advance the Omen by 1."
      }
    },
    "Sea": {
      "intro": "A protective ward is inscribed upon the door to the captain's quarters (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "It dissipates and you find a shipping manifest; gain this Clue and 1 Task Unique Asset.",
        "Fail": "The Corona Borealis reaches out for you across time and space; gain 2 Madness Conditions."
      }
    }
  },
  {
    "cardId": 6,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You witness a scene from your past in a dream but from a different point of view (<img src=\"images/Observation.webp\">-1); roll 2 additional dice if you are on the Dreamlands side board.",
      "choices": {
        "Pass": "You see something you previously missed; gain this Clue and 1 Task Unique Asset.",
        "Fail": "The experience is traumatic; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "A young boy sleeping in the crook of a tree on the side of the road disappears before your eyes (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a map of the Dreamlands that he left behind; gain this Clue.",
        "Fail": "You are starting to think you might he hallucinating; gain a Hallucinations Condition."
      }
    },
    "Sea": {
      "intro": "Your eyes grow heavy, and you feel that something malicious urges you to fall asleep (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You resist and notice the stars are casting a red-gold light upon you; gain this Clue and 1 additional Clue.",
        "Fail": "You dream of the pulsing stars of the Corona Borealis; advance the Omen by 1."
      }
    }
  },
  {
    "cardId": 7,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You enter the dreams of one of your companions and discover a memory within his mind that could answer your questions. However, accessing the memory will sever you from the waking world. You may gain a Lost in Time and Space Condition to gain this Clue and 1 additional Clue.",
      "choices": {
        "Gain a Lost in Time and Space Condition to gain this Clue and 1 additional Clue": "",
        "Do not gain this Clue and 1 additional Clue": ""
      }
    },
    "Wilderness": {
      "intro": "A shadowy figure with a jewel-inlaid scepter visits you in a nightmare. His gaze bores through you, stitching a door to infinity into your chest. You may gain a Dark Pact Condition to gain this Clue.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue": "",
        "Do not gain this Clue": "The nightmare shatters; lose 1 Health and gain an Amnesia Condition."
      }
    },
    "Sea": {
      "intro": "You notice one of the crew on deck as you head to bed (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "He stares blankly up at the red-gold stars of the Corona Borealis but does not move for many hours; gain this Clue.",
        "Fail": "He silently leaps into the sea; gain 2 Madness Conditions."
      }
    }
  },
  {
    "cardId": 8,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "Rumor has it that people have been vanishing during the night. You search the area for anything out of the ordinary (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You uncover a potential conspiracy; gain this Clue and 1 Task Unique Asset.",
        "Fail": "You are arrested for trespassing; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "A sudden drowsiness washes over you as you scale a rocky precipice, and you use the last of your strength to try to reach the top (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "You collapse at the peak next to a wreath of bay laurels; gain this Clue and 1 additional Clue.",
        "Fail": "You fall; lose 2 Health."
      }
    },
    "Sea": {
      "intro": "You search for the source of an incessant shuffling below deck (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a man sleepwalking in a corridor and wake him from his trance; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "Someone attacks you from behind; lose 2 Health."
      }
    }
  },
  {
    "cardId": 9,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You tell a young man balancing precariously on a rooftop that he is not dreaming (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "He tells you of a magical place he dreamed of as a child; gain this Clue and you may discard the top card of the Dream-Quest Encounter deck.",
        "Fail": "He jumps from the rooftop; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You dream of a strange, dark power. When you wake, you speak the words of the ritual from your dream (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "The arcane energy takes hold within you; gain this Clue and 1 Talent Condition.",
        "Fail": "Your skin withers to dust, leaving your flesh raw and uncovered; lose 2 Health."
      }
    },
    "Sea": {
      "intro": "You enter your cabin and find that someone has spread bay laurel leaves across the floor (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "A brief somnolence passes over you but quickly fades; gain this Clue and 1 additional Clue.",
        "Fail": "A dark enchantment falls over you; gain 2 Madness Conditions."
      }
    }
  },
  {
    "cardId": 10,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You are ten years old, and your childhood friend begs you to come play with him in a nearby warehouse (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You remember that your friend died years ago in his sleep; gain this Clue and 1 additional Clue.",
        "Fail": "The warehouse is filled with nightmares; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "A sharp whining forms in your mind, growing until it becomes a shriek. If you are on the Dreamlands side board, gain 1 Madness Condition. You try to shut out the noise (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You quiet the horrible sound; gain this Clue.",
        "Fail": "The sound grows only louder and never fades; lose 2 Sanity."
      }
    },
    "Sea": {
      "intro": "A man offers to sell you a Grecian bust for a modest sum. You may gain a Debt Condition to gain this Clue.",
      "choices": {
        "Gain a Debt Condition to gain this Clue": "You recognize the face carved into the statue as another traveler who boarded the ship but went missing; gain a Paranoia Condition.",
        "Do not gain this Clue": ""
      }
    }
  },
  {
    "cardId": 11,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "Your hotel room is filled with smoke and flames. You may spend 2 Health to gather your research materials before they burn.",
      "choices": {
        "Spend 2 Health to gather your research materials before they burn": "You wake from the dream with charred notes that you did not have before; gain this Clue.",
        "Do not gather your research materials before they burn": "Discard all of your Clues."
      }
    },
    "Wilderness": {
      "intro": "You keep an eye out for other travelers as you traverse the heavily wooded trail (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You encounter a group that shares rumors of dreams that can harm your physical body; gain this Clue and 1 additional Clue.",
        "Fail": "You do not see another living soul for days; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "You attempt a ritual that will allow you to visit faraway places while you sleep (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You encounter other dreamers on your journey; gain this Clue.",
        "Fail": "You encroach too deeply upon realms of horror not meant to be seen by any sane, living creature; lose 1 Sanity."
      }
    }
  },
  {
    "cardId": 12,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "Not even the social elite have been able to avoid the sleepwalking phenomenon that has been plaguing the city, and you investigate amidst the chaos (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You learn who has been afflicted; gain this Clue.",
        "Fail": "You are violently discouraged from prying further; lose 1 Health."
      }
    },
    "Wilderness": {
      "intro": "Something terrible is following you, and you search desperately for a safe place to hide (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a suitable shelter; gain this Clue.",
        "Fail": {
          "intro": "The creature chases you deep into an unfamiliar forest; move to The Enchanted Wood, then a Zoog Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "You attempt to identify the faded words carved into an ancient, weatherbeaten tablet found buried in the sands of a lonely beach (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You discern the names of several long-dead cities; gain this Clue and 1 additional Clue.",
        "Fail": "You disturb the tablet's dormant magic; lose 2 Sanity."
      }
    }
  },
  {
    "cardId": 13,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You come across a daytime sleepwalker and attempt to dispel the unusual affliction (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You end up with a new member of your entourage; gain 1 Character Unique Asset.",
        "Fail": "The magic fizzles and the dreamer attacks you; lose 2 Health."
      }
    },
    "Wilderness": {
      "intro": "Something terrible is about to happen to your friend, but you find that your voice has been silenced. You try to communicate without using words (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You alert him to the danger; gain this Clue.",
        "Fail": "You are both enveloped in darkness; lose 1 Health and 1 Sanity."
      }
    },
    "Sea": {
      "intro": "Nodens, Lord of the Abyss, appears before you, charging you with mending the Dreamlands. You may gain a Dark Pact Condition to gain this Clue and 1 Talent Condition.",
      "choices": {
        "Gain a Dark Pact Condition to gain this Clue and 1 Talent Condition": "",
        "Do not gain this Clue and 1 Talent Condition": "He abducts you in his fury; move to The Underworld and become Delayed."
      }
    }
  },
  {
    "cardId": 14,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "A quiet exhibit has several masterwork sculptures on display (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "A bust inscribed with the word \"ΥΠΝΟΣ\" catches your eye, and you leave feeling changed; gain this Clue and 1 Talent Condition.",
        "Fail": "You become lost amongst the statues; gain a Lost in Time and Space Condition."
      }
    },
    "Wilderness": {
      "intro": "You find a seemingly innocuous stone tablet in a quiet clearing. Touching it floods your mind with visions of the origin of the universe. You may gain a Dark Pact Condition to gain the Elder Key Artifact.",
      "choices": {
        "Gain a Dark Pact Condition to gain the Elder Key Artifact": "",
        "Do not gain the Elder Key Artifact": {
          "intro": "The tablet calls a guardian; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "One of the other passengers warns you about his mother's recent sleepwalking habit (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You keep an eye out for the elderly matron, occasionally catching her wandering about the ship at night; gain this Clue.",
        "Fail": "You wake to her looming silently over your bed; lose 2 Sanity."
      }
    }
  },
  {
    "cardId": 15,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You wake with a bauble of unknown origin in your pocket (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find the name of its previous owner barely visible on the bottom; gain this Clue and 1 random Trinket Asset from the deck.",
        "Fail": "Someone sees you handling it and accuses you of theft; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "You dream that you are a sorcerer of widespread fame and great ability (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "The arcane theories you employ are sound and you recall them after you wake; gain this Clue and 1 Spell.",
        "Fail": "The incantations you use are gibberish; lose 1 Sanity and gain 1 Madness Condition."
      }
    },
    "Sea": {
      "intro": "You visit with an old sea hag, and she offers you a relic that can capture another's dreams, though it may destroy your body to claim it (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "It acknowledges you as its master; gain the Crystallizer of Dreams Artifact.",
        "Fail": "It tears your flesh to shreds; lose 2 Health."
      }
    }
  },
  {
    "cardId": 16,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "Locating an improperly filed volume has you teetering on the edge of madness. You may spend 2 Sanity to gain 1 Tome Artifact.",
      "choices": {
        "Spend 2 Sanity to gain 1 Tome Artifact": "",
        "Do not gain 1 Tome Artifact": "You are informed the next day that someone else has checked out the book; move this Clue to the nearest Dream-Quest space."
      }
    },
    "Wilderness": {
      "intro": "You try to follow screams for help, but the acoustics of the canyon are playing tricks on your ears (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You discover someone who claims to have been attacked by a sleepwalking man; gain this Clue and 1 random Ally Asset from the deck.",
        "Fail": "You become lost without rations; lose 1 Health."
      }
    },
    "Sea": {
      "intro": "You have a nightmare that you are standing on deck while the ship is being buffeted by a terrible storm (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You realize that you are not actually dreaming; gain this Clue.",
        "Fail": "You loiter on the deck until the boom swings into your head; lose 2 Health."
      }
    }
  },
  {
    "cardId": 17,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "A local laboratory is conducting a sleep study. You would be free to partake in any number of activities to entertain yourself during the process. However, the university disavows any responsibility for ill effects suffered from lack of sleep. You may spend 2 Health to gain this Clue and 1 Talent Condition.",
      "choices": {
        "Spend 2 Health to gain this Clue and 1 Talent Condition": "",
        "Do not gain this Clue and 1 Talent Condition": ""
      }
    },
    "Wilderness": {
      "intro": "You soar like an eagle, taking in a bird's-eye view of the earth below (<img src=\"images/Observation.webp\">-1); roll 2 additional dice if you are on the Dreamlands side board.",
      "choices": {
        "Pass": "You see a flash of silver far below; gain The Silver Key Artifact.",
        "Fail": "You lose control of the dream and plummet to the ground; lose 2 Health."
      }
    },
    "Sea": {
      "intro": "A merchant vessel has gone missing and you join the rescue crew (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You discover the ship has been taken by ghouls; gain this Clue and a Ghoul Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        },
        "Fail": "You find the ship but everyone on board is dead save for a rather pleased-looking cat; advance Doom by 1."
      }
    }
  },
  {
    "cardId": 18,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You speak with the mother of a boy who vanished in his sleep (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "She tells you of a place he described from his dreams; gain this Clue and you may discard the top card of the Dream-Quest Encounter deck.",
        "Fail": "She accuses you of taking him; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "A shadowy being whispers to you from a distance, instructing you to follow (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You manage to keep up; gain this Clue and move to The Enchanted Wood.",
        "Fail": "You lose your way and become tangled in a thorny briar; lose 1 Health and gain 1 Injury Condition."
      }
    },
    "Sea": {
      "intro": "A rush of adrenaline surges through you as you realize you are trapped in a nightmare, and you attempt to uncover an exit (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You slip into the nether, freeing yourself; retreat Doom by 1.",
        "Fail": "You remain trapped in a room with your greatest fears; lose 2 Sanity."
      }
    }
  },
  {
    "cardId": 19,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You speak with a man who warns you that trouble from the Dreamlands is seeking you out (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You recognize him and he offers to accompany you; gain the Randolph Carter Unique Asset.",
        "Fail": "You disregard his warning and take no precautionary measures; advance Doom by 1."
      }
    },
    "Wilderness": {
      "intro": "You follow a sleepwalking man through the wilds, but he is moving with unnatural speed (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You see him get sucked into the sky by a golden light, leaving only a pocket journal behind; gain this Clue and 1 Task Unique Asset.",
        "Fail": "You lose your way; gain 1 Madness Condition."
      }
    },
    "Sea": {
      "intro": "You dream that masters from all over the world have come to teach you their trades (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You remember some of your dream when you wake; gain this Clue and 1 Talent Condition.",
        "Fail": "You wake up confused and extremely seasick; lose 1 Health and gain 1 Madness Condition."
      }
    }
  },
  {
    "cardId": 20,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "Someone has gone missing after several nights of sleepwalking, and you help search for him (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find him sleeping in a tree and he tells you about his adventures in the land of dreams; gain this Clue.",
        "Fail": "The search is long and exhausting; lose 1 Health and 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You sense that you are being stalked by a terrible presence, but no matter which way you run, you always return to the same clearing (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a path that did not exist before and the evil presence fades away; retreat Doom by 1.",
        "Fail": "You remain trapped; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "A hooded man has been watching you since your journey began. You sneak away from your quarters to spy on him instead (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You notice that he does not sleep; gain this Clue.",
        "Fail": {
          "intro": "Your surveillance has not gone unnoticed; a Cultist Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    }
  },
  {
    "cardId": 21,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "A luminous shape of inky black liquid coalesces before you (<img src=\"images/Will.webp\">-1); roll 2 additional dice if you are on the Dreamlands side board.",
      "choices": {
        "Pass": "You see the features of a hideous face; gain this Clue.",
        "Fail": "You glimpse the space beyond the face and see time unshackled before you; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You spot a young man on the road and try to catch up with him (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "He claims that he has little time left and gives you his things; gain this Clue and 1 random Trinket Asset from the deck.",
        "Fail": "You catch up to him but his life appears to have been drained away; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "You scan the endless stars in the night sky for unusual celestial activity (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You note the supernatural pulsing of the Corona Borealis; gain 1 Boon Condition.",
        "Fail": "You do not notice beams of red-gold light streaking heavenward; advance the Omen by 1."
      }
    }
  },
  {
    "cardId": 22,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "A grizzled captain claims that his ship can take you anywhere if you can afford its fare (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You sail his ship into the stars; gain 1 Boon Condition and move to Celephaïs.",
        "Fail": "You find that he has left you stranded; gain a Lost in Time and Space Condition."
      }
    },
    "Wilderness": {
      "intro": "There is no ground, only the infinite void, and you cry to convince yourself it is not real (<img src=\"images/Will.webp\">-1); roll 2 additional dice if you are on the Dreamlands side board.",
      "choices": {
        "Pass": "The stars of the Corona Borealis blaze around you as you fall; gain this Clue.",
        "Fail": "You continue to fall without end; lose 2 Sanity."
      }
    },
    "Sea": {
      "intro": "You strike up a game of cards with a quiet, hooded traveler (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "He gives you a curio from his pack but does not speak; gain this Clue and 1 random Trinket Asset from the deck.",
        "Fail": "He pulls back his hood to reveal empty black eyes; lose 2 Sanity."
      }
    }
  },
  {
    "cardId": 23,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You attend a night class on the meaning behind common dreams and nightmares. Gain this Clue. You realize suddenly that you forgot to put on clothes before you came and look for something to cover yourself (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "The eyes of all humanity are upon you; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "You slip away from the madness that is consuming the cities of the waking world, losing yourself in the forests of the Dreamlands, testing the limits of your physical body and in some cases exceeding them. If you are on the Dreamlands side board, gain 1 Talent Condition and lose 1 Health."
    },
    "Sea": {
      "intro": "You swim in an endless ocean of æther, trying to understand the anomalies around you (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You learn much about the foundation upon which the universe is built; gain this Clue and 1 Spell.",
        "Fail": "The winds of infinity erode your mind and body; lose 1 Health and 1 Sanity."
      }
    }
  },
  {
    "cardId": 24,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You dream that you are crushed by an avalanche of falling rocks. When you wake, your room is filled with large heaps of stone and dirt. Amongst the debris, you find a wreath of laurels, completely undamaged. If you are on the Dreamlands side board, gain this Clue and lose 1 Health."
    },
    "Wilderness": {
      "intro": "As you enter a relatively untraveled area of the woods, a quiet but irresistible voice in your head urges you to dig (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "You excavate the bust of some unknown Greek deity; gain this Clue.",
        "Fail": "You overexert yourself digging through the night but find nothing; lose 2 Health."
      }
    },
    "Sea": {
      "intro": "One of the sailors believes he will die if he dreams, and begs you to watch over him while he sleeps. You may spend 1 Sanity to gain 1 Task Unique Asset.",
      "choices": {
        "Spend 1 Sanity to gain 1 Task Unique Asset": "",
        "Do not gain 1 Task Unique Asset": "The sailor has disappeared the next morning; move this Clue to the nearest Dream-Quest space."
      }
    }
  }
];
