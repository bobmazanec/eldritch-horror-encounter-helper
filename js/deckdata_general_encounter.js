deckData["General Encounter"] = [
  {
    "cardId": 1,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "You make sure no one is watching before sneaking out of the shop with your stolen goods (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "Gain 1 Item Asset from the reserve or 1 random Item Asset from the deck.",
        "Fail": "You are caught by the store owner and arrested; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "The remains of a long-dead explorer lie before you. Some of his gear still seems salvageable, and he won't miss it. You dig through the dead man's pockets; gain 1 random Item Asset from the deck and lose 1 Sanity."
    },
    "Sea": {
      "intro": "You find the floating detritus of some sunken ship and search for any survivors or salvageable objects (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discover a floating trunk; gain 1 Artifact.",
        "Fail": "You waste hours without result; become Delayed."
      }
    }
  },
  {
    "cardId": 2,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "Corrupt members of the police force pressure you for a bribe. You speak to some people you know to take care of the problem (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "The police are apologetic and share their leads with you; spawn 1 Clue.",
        "Fail": "Gain a Debt Condition to pay the bribe."
      }
    },
    "Wilderness": {
      "intro": "Far from any road or village, you find a shallow grave marked only with an arcane symbol. As you dig, a growing dread weakens your resolve (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find a charred corpse clutching a journal; gain 1 Clue or improve <img src=\"images/Lore.webp\">.",
          "choices": {
            "Gain 1 Clue": "",
            "Improve <img src=\"images/Lore.webp\">": ""
          }
        },
        "Fail": "You run from the area; gain a Cursed Condition."
      }
    },
    "Sea": {
      "intro": "Your ship becomes lost in a dense fog bank, terrifying the superstitious crew. When the mist finally clears, you've somehow traveled hundreds of miles. Move 1 space and lose 1 Sanity."
    }
  },
  {
    "cardId": 3,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "The shop is robbed while you are browsing! You attempt to fend off the thieves (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "The store owner is very gracious; gain 1 Item Asset from the reserve or 1 random Item Asset from the deck.",
        "Fail": "Lose 1 Health and discard 1 Item possession."
      }
    },
    "Wilderness": {
      "intro": "You scrape away year of moss and lichen from the stone altar, uncovering a series of prehistoric symbols. You think you can interpret the carvings (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "Gain 1 Clue or 1 Spell.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "One of the sailors is singing an old sea shanty about a woman searching for her dead husband. The story seems familiar to you (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You recognize it as the story of Isis, and sailor teaches you the song; gain a Blessed Condition and recover 1 Health and 1 Sanity.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 4,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "A group of intimidating Syndicate member demand you pay them for protection. You offer the well-dressed men what you can afford (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "They make sure you meet with an accident; gain a Leg Injury Condition."
      }
    },
    "Wilderness": {
      "intro": "The terrain ahead of you looks impassable, but going around would take too long. You'll need to find some way to move forward (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You discover a path; move 1 space.",
        "Fail": "You trip over the uneven ground; lose 1 Health and gain a Leg Injury Condition."
      }
    },
    "Sea": {
      "intro": "You discover a signal fire on a small island, but don't find any people. You search the beach for signs of life (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You spot a person hiding behind large stones; gain 1 Clue and 1 random Ally Asset from the deck.",
        "Fail": "The mystery remains unsolved; gain a Paranoia Condition."
      }
    }
  },
  {
    "cardId": 5,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "A shady figure offers to sell you a weapon, no questions asked. You speak with him to determine his motives (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "Gain 1 random Weapon Asset from the deck.",
        "Fail": "The undercover policeman arrests you; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "The ground slopes upward so uniformly that you suspect a structure exists underneath. You search for a buried entrance to claim the treasures found inside. You may spend 1 Clue to gain 1 Artifact.",
      "choices": {
        "Spend 1 Clue to gain 1 Artifact": "",
        "Do not gain 1 Artifact": ""
      }
    },
    "Sea": {
      "intro": "The captain tells you that you are passing over the site of a famous shipwreck. You can use this ship's deep-sea diving equipment to explore the wreckage. You may become Delayed to gain 1 Artifact.",
      "choices": {
        "Become Delayed to gain 1 Artifact": "",
        "Do not gain 1 Artifact": ""
      }
    }
  },
  {
    "cardId": 6,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "You wander through the aisles of an antique book store. Although many extremely rare books can be found here, the organizational system is almost impossible to decipher (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You're able to track down a hidden gem; gain 1 Tome Artifact.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "You help a young woman search the countryside for her uncle (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find the eccentric, old man, and he gives you a gift for helping his niece; gain 1 Tome Artifact from the deck.",
        "Fail": ""
      }
    },
    "Sea": {
      "intro": "The ship ahead of you seemed abandoned, but now you see that it is crewed entirely by ghostly figures. You try to discern what ship this had once been and what happened to it (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": {
          "intro": "The spectral captain grants you aid; gain 1 Clue or improve <img src=\"images/Will.webp\">.",
          "choices": {
            "Gain 1 Clue": "",
            "Improve <img src=\"images/Will.webp\">": ""
          }
        },
        "Fail": "Gain a Cursed Condition."
      }
    }
  },
  {
    "cardId": 7,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "A friendly game of cards ends with a very high-stakes hand (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "You amaze everyone watching and find a new friend; gain 1 random Ally Asset from the deck.",
        "Fail": "Gain a Debt Condition to cover the loss."
      }
    },
    "Wilderness": {
      "intro": "Your map is gone, and you must navigate based on your own observations (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You confidently progress on your journey; move 1 space.",
        "Fail": "You travel in circles; you become Delayed and gain a Madness Condition."
      }
    },
    "Sea": {
      "intro": "A sudden storm descends upon you and strong winds whip around your vessel. Huge waves toss your ship around like a toy, and you are thrown to the deck repeatedly. Lose 1 Sanity and gain a Back Injury Condition."
    }
  },
  {
    "cardId": 8,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "A night of drinking and good cheer helps raise your spirits. Recover 2 Sanity. While you are celebrating, you hardly notice that you are being robbed (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "Discard 1 Item possession."
      }
    },
    "Wilderness": {
      "intro": "Past where your campfire allows you to see, you hear voices chanting. You try to draw a protective sigil in the ground (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": {
          "intro": "The next morning you find evidence of cult activity that you can use to identify the cult members; gain 1 Clue or improve <img src=\"images/Influence.webp\">.",
          "choices": {
            "Gain 1 Clue": "",
            "Improve <img src=\"images/Influence.webp\">": ""
          }
        },
        "Fail": "Gain a Cursed Condition."
      }
    },
    "Sea": {
      "intro": "You find a terrified stowaway aboard the ship. You attempt to comfort him and coax him into telling you his story (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He tells you about horrifying beasts and unbelievable worlds; gain 1 Clue.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 9,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "The police report that people are being abducted by a monster dwelling in the sewer system. Wandering through the underground tunnels you are suddenly attacked by a deep one (<img src=\"images/Strength.webp\">)!",
      "choices": {
        "Pass": "You defeat the creature and rescue its hostage; gain 1 random Ally Asset from the deck.",
        "Fail": "Lose 1 Health from the struggle."
      }
    },
    "Wilderness": {
      "intro": "In the middle of the night, a feral beast rips apart your camp and attacks you (<img src=\"images/Strength.webp\">)!",
      "choices": {
        "Pass": "You feel invincible; improve <img src=\"images/Will.webp\">.",
        "Fail": "Lose 1 Health and gain a Leg Injury Condition."
      }
    },
    "Sea": {
      "intro": "The captain of the ship invites you to dine with him. You have the feeling that he's had some experience with unearthly creatures and try to convince him to share his story (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "His tale includes highly-significant details; spawn 1 Clue.",
        "Fail": ""
      }
    }
  },
  {
    "cardId": 10,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "The police ask for your help investigating a series of ritual killings. The grisly crime scenes threaten to overwhelm you with chills and nausea (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You manage to examine the scene and find significant information; spawn 1 Clue.",
        "Fail": "You can't endure the horror; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "Extreme conditions have left you fevered and delirious. You force yourself to keep moving, putting a terrible strain on your body (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "The fever grows worse and you begin seeing things; gain a Hallucinations Condition."
      }
    },
    "Sea": {
      "intro": "You're awakened in the night by gunfire. Deep ones have climbed aboard the ship and are trying to sabotage the engine. You do your best to help the crew fight them (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "The engine is destroyed before you finish off the sea creatures, and you must wait to be rescued; become Delayed."
      }
    }
  },
  {
    "cardId": 11,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "Legends say that this cemetery is haunted. Exploring the headstones, you encounter an angry specter, eager to share his story. The experience is nerve-wracking, but you try to listen (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "The spirit gratefully fades from view; recover 2 Sanity.",
        "Fail": "His desperate voice echoes in your mind; gain a Paranoia Condition."
      }
    },
    "Wilderness": {
      "intro": "According to your map, you can make a detour to visit a lake purported to have restorative powers. You may become Delayed to recover 3 Sanity or discard a Madness Condition.",
      "choices": {
        "Become Delayed to recover 3 Sanity or discard a Madness Condition": "",
        "Do not recover 3 Sanity or discard a Madness Condition": ""
      }
    },
    "Sea": {
      "intro": "One of the sailors speaks in a strange, ancient dialect. You try to communicate with the man based on obscure languages you have studied (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "The peculiar man teaches you a chant; gain 1 Spell.",
        "Fail": "He growls an unintelligible phrase; gain a Cursed Condition."
      }
    }
  },
  {
    "cardId": 12,
    "expansionId": "Eldritch Horror",
    "City": {
      "intro": "The Syndicate is engaged in a gang war with local thugs and is under intense legal scrutiny. You try to trade your political clout for assistance (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "Gain 1 Service Asset from the reserve or 1 random Service Asset from the deck.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "You find a primitive painting on the wall of a cave and decide to explore the subterranean depths that lie beyond. The dark, constricting passages create a terrible sense of claustrophobia (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "Gain 1 Artifact left by an ancient civilization.",
        "Fail": "Lose 2 Sanity."
      }
    },
    "Sea": {
      "intro": "A large wave washes across the deck, and a prized possession slips from your fingers. You dive into the water, holding your breath as long as you can to recover the object before it sinks out of reach (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "Discard 1 Item possession."
      }
    }
  },
  {
    "cardId": 13,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "A night watchman tells you that a crate of weapons has \"gone missing\" from his warehouse. You offer him some money to learn more (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He sends you to an alley; gain 1 random Weapon Asset from the deck.",
        "Fail": "He sends you into a trap; lose 1 Health and gain a Leg Injury Condition."
      }
    },
    "Wilderness": {
      "intro": "You find an injured priest who needs to be carried over difficult terrain (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "He is reunited with his parish, and he prays on your behalf; gain a Blessed Condition.",
        "Fail": "You soon require assistance yourself; gain a Back Injury Condition."
      }
    },
    "Sea": {
      "intro": "The ship's cargo hold is taking on water. The crew asks for your help in repairing the hull (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You spot something useful among the crates; gain 1 random Item Asset from the deck.",
        "Fail": "The effort is too much for you; lose 2 Health."
      }
    }
  },
  {
    "cardId": 14,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "This city is home to an exclusive club for world travelers. You try to convince them that granting you a membership would be a prestigious feather in their cap (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "The other members will graciously help you with your future travel plans; gain 1 Ship Ticket and 1 Train Ticket.",
        "Fail": ""
      }
    },
    "Wilderness": {
      "intro": "You notice a highly venomous spider crawling up your arm. You try to gently brush it away, but your fear threatens to break your calm (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "You move too clumsily, and the spider bites you; lose 1 Sanity and gain a Poisoned Condition."
      }
    },
    "Sea": {
      "intro": "The crew knows a legend about gold coins lost in this area. The story reminds you of an obscure shipwreck you've study (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You find the treasure and split the profit; improve <img src=\"images/Influence.webp\">.",
        "Fail": "The crew claims you owe them; discard 2 Item and Trinket possessions."
      }
    }
  },
  {
    "cardId": 15,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "Grifters have chosen you to be their next mark. You plan on turning the tables with a few tricks of your own (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You end up with the money and an impressive reputation; improve <img src=\"images/Influence.webp\">.",
        "Fail": "They swindle you; discard 1 Item possession and 1 Trinket possession."
      }
    },
    "Wilderness": {
      "intro": "You discover a shrine with a natural spring that you do not remember from your maps (<img src=\"images/Lore.webp\">-2).",
      "choices": {
        "Pass": "You recall an old story about a well of life; gain 1 Elixir Artifact.",
        "Fail": "You don't notice native wildlife making off with your gear as you search your maps; discard 1 Trinket possession."
      }
    },
    "Sea": {
      "intro": "During a flash of lightning in the night, you see an enormous creature silhouetted against the sky. The image chills you to the core (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "Lose 1 Sanity and gain a Paranoia Condition."
      }
    }
  },
  {
    "cardId": 16,
    "expansionId": "Forsaken Lore",
    "City": {
      "intro": "A shop in the old part of town is reputed to have an amazing collection of rare books, but the shop cannot always be found. You research the legend and do your best to find it (<img src=\"images/Lore.webp\">-2).",
      "choices": {
        "Pass": "Gain 1 Tome Artifact.",
        "Fail": "The frustrating search leaves you unsettled; lose 2 Sanity."
      }
    },
    "Wilderness": {
      "intro": "Your food has gone bad and there's no place nearby to purchase more supplies. If you want to eat, you'll have to hunt for your meal (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "The meal invigorates you; recover 2 Health.",
        "Fail": "You have to make due with the rancid food; gain a Poisoned Condition."
      }
    },
    "Sea": {
      "intro": "A school of dolphins has surrounded your ship, trying to keep you here. You may become Delayed to spend the night in this spot.",
      "choices": {
        "Become Delayed to spend the night in this spot": "The Elder God Nodens visits your dreams, and you wake with profound new insights; spawn 2 Clues.",
        "Do not spend the night in this spot": ""
      }
    }
  },
  {
    "cardId": 17,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "A notorious crime boss offers to sell you valuable information. However, his asking price is more than you can afford. You may gain a Debt Condition.",
      "choices": {
        "Gain a Debt Condition": "He shares what he knows; gain 1 Task Unique Asset.",
        "Do not": ""
      }
    },
    "Wilderness": {
      "intro": "A ruined cabin is overrun by moss, mold, and animal waste. You search quickly for abandoned treasures (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You find a book intact; gain 1 Old Journal Unique Asset.",
        "Fail": "The ceiling crumbles, showering you in black mold; gain an Infection Condition."
      }
    },
    "Sea": {
      "intro": "Someone has sabotaged your ship's fuel and rations. If you hope to survive until rescue arrives, you'll have to search for food on a nearby island (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "You are attacked by the wildlife on the island; lose 1 Health and gain a Leg Injury Condition."
      }
    }
  },
  {
    "cardId": 18,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "At an estate sale, you bid on a box of a historian's books (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You obtain a number of informative texts including his personal diary; gain 1 Clue and 1 Old Journal Unique Asset.",
        "Fail": "Someone takes note of your interest; gain 1 Pursuit Condition."
      }
    },
    "Wilderness": {
      "intro": "The wind shifts direction briefly, and you catch the scent of something that's been tracking you. You look for a way to throw whatever it is off your trail (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "It continues to pursue you; lose 1 Sanity and gain a Hunted Condition."
      }
    },
    "Sea": {
      "intro": "A sailor talks to you about a risky opportunity. If you can convince him you're up to the challenge, he'll share what he knows (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "He gives you the details; gain 1 Task Unique Asset.",
        "Fail": "His distrust in your ability shakes your confidence; discard 1 Improvement token."
      }
    }
  },
  {
    "cardId": 19,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "To find the city's legendary magic shop requires knowledge of ley lines (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "The owner will sell you only a single curio; gain 1 random Magical Asset from the deck.",
        "Fail": "Your search seems to have led you through another world; move to a random space."
      }
    },
    "Wilderness": {
      "intro": "The winds turn bitterly cold and a storm descends upon you before you can build a shelter. The ordeal pushes your endurance to the limit (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "You collapse, and the elements take their toll; lose 1 Health and gain a Hypothermia Condition."
      }
    },
    "Sea": {
      "intro": "In the middle of the night, you're horrified to see the ghost of a sailor who died in your cabin (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "The spirit shows you a loose board in the floor; gain 1 Old Journal Unique Asset.",
        "Fail": "You run from the room in terror; lose 2 Sanity."
      }
    }
  },
  {
    "cardId": 20,
    "expansionId": "Mountains of Madness",
    "City": {
      "intro": "You step forward to protect an innocent bystander from a gang of thugs (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "You believe you recognize the victim; gain 1 Character Unique Asset.",
        "Fail": "The gang delivers a beating to you as well; lose 1 Health and gain an Internal Injury Condition."
      }
    },
    "Wilderness": {
      "intro": "You are terrified to see a nightgaunt descend from the night sky (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You stay calm and it delivers a gift from Nodens; gain 1 random Magical Asset from the deck.",
        "Fail": "It abducts you; lose 1 Sanity and move to the nearest space containing a Gate."
      }
    },
    "Sea": {
      "intro": "Several members of the crew have been quarantined, suffering from some unidentified affliction. For the duration of the trip you pay careful attention to avoid any risk of exposure (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "You come down with the sickness yourself; lose 1 Sanity and gain 1 Illness Condition."
      }
    }
  },
  {
    "cardId": 21,
    "expansionId": "Strange Remnants",
    "City": {
      "intro": "The local Silver Twilight Lodge is under investigation by the police. The Lodge members will gladly contribute their magic to your cause in exchange for a favor. You may gain an Agreement Condition to gain 1 Boon Condition.",
      "choices": {
        "Gain an Agreement Condition to gain 1 Boon Condition": "",
        "Do not gain 1 Boon Condition": ""
      }
    },
    "Wilderness": {
      "intro": "Someone is lost out here. Local guides will not help unless you offer a bribe (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "You find the missing person; gain 1 Character Unique Asset.",
        "Fail": "You fear that you are just as lost and just as abandoned; gain a Paranoia Condition."
      }
    },
    "Sea": {
      "intro": "The captain keeps a locked trunk covered in arcane runes in his cabin. While he's distracted, you try to pry it open (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "Gain 1 Relic Unique Asset.",
        "Fail": "The captain catches you; move to the nearest City space and gain a Detained Condition."
      }
    }
  },
  {
    "cardId": 22,
    "expansionId": "Strange Remnants",
    "City": {
      "intro": "You see a street magician use real magic in his act. Gain 1 Glamour Spell. During his show, he locks you in a safe (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You stay calm and emerge to thunderous applause; recover 2 Sanity.",
        "Fail": "You panic; gain a Paranoia Condition."
      }
    },
    "Wilderness": {
      "intro": "You catch sight of something that has been tracking you and decide to cover your tracks and find a hiding place (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": {
          "intro": "It finds you; a Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "You capture an unnaturally strong stowaway. You question him about what he knows and the source of his strength (<img src=\"images/Influence.webp\">)",
      "choices": {
        "Pass": "Gain 1 Clue or improve <img src=\"images/Strength.webp\">.",
        "Fail": "He breaks his bonds and attacks; gain a Head Injury Condition."
      }
    }
  },
  {
    "cardId": 23,
    "expansionId": "Strange Remnants",
    "City": {
      "intro": "A mob blames famed occultist Etienne-Laurent de Marigny for several strange deaths. You intervene to prevent his arrest (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "Gain the Etienne Laurent Unique Asset.",
        "Fail": "You get blamed instead; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "Stones are arranged in a pattern that leads you to a cave. Inside, you carefully try to avoid falling down pits (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find a skeleton cradling an object; gain 1 Relic Unique Asset.",
        "Fail": "You trip; gain a Head Injury Condition."
      }
    },
    "Sea": {
      "intro": "The crew plans to bury a dead sailor at sea in the morning. The man had arcane words tattooed all over his skin, and you spend the night studying them (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "Gain 1 Glamour Spell.",
        "Fail": "He begins talking to you; lose 1 Sanity."
      }
    }
  },
  {
    "cardId": 24,
    "expansionId": "Strange Remnants",
    "City": {
      "intro": "A rich heir wants someone to fulfill his father's dying wish. He will not trust anyone who does not come highly recommended (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "Gain 1 Task Unique Asset.",
        "Fail": "His thugs treat you poorly; gain a Head Injury Condition."
      }
    },
    "Wilderness": {
      "intro": "At a ring of toadstools, you choose a gift to leave for the strange creatures that live here (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "They visit you in your dreams; gain 1 Glamour Spell.",
        "Fail": "They do not like your gift; gain a Hallucinations Condition."
      }
    },
    "Sea": {
      "intro": "A sailor with a pale complexion and bulbous features holds up an odd item. His malformed hands can barely hold it, but he is willing to offer it to you as part of a bargain. You may gain an Agreement Condition to gain 1 Artifact.",
      "choices": {
        "Gain an Agreement Condition to gain 1 Artifact": "",
        "Do not gain 1 Artifact": ""
      }
    }
  },
  {
    "cardId": 25,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "A local politician blames you for several murders and kidnappings. People have been convinced to find and punish you. You try to reason with them (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "They beat you mercilessly; gain 1 Injury Condition and impair <img src=\"images/Strength.webp\">."
      }
    },
    "Wilderness": {
      "intro": "Fetid vegetation hides a forgotten graveyard. You try to interpret the writing on the stones (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You find the stone that marks a treasure; gain 1 Relic Artifact.",
        "Fail": "There is an evil here that stays with you; gain a Haunted Condition."
      }
    },
    "Sea": {
      "intro": "A passenger goes mad and tries to jump overboard with a large book. You try to pull him back (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "He is clearly insane and begs you to take the book; gain 1 Tome Unique Asset.",
        "Fail": "His death disheartens you; gain a Despair Condition."
      }
    }
  },
  {
    "cardId": 26,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "You try to convince a notorious grifter to teach you some tricks (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He takes a liking to you and shows you how to deceive and avoid being deceived; improve <img src=\"images/Observation.webp\">.",
        "Fail": "He takes your money and ruins your reputation; impair <img src=\"images/Influence.webp\">."
      }
    },
    "Wilderness": {
      "intro": "In the night, a creature made of living shadow attacks you! You struggle to throw it in the campfire before it can hurt you (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "It leaves you bloodied and bruised; gain 1 Injury Condition unless you impair <img src=\"images/Strength.webp\">."
      }
    },
    "Sea": {
      "intro": "Your ship's crew rescues a lost fishing trawler. You notice large misshapen fish on board (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You spot an odd object among them; gain 1 Relic Artifact.",
        "Fail": "Their grotesque appearance disturbs you; impair <img src=\"images/Will.webp\">."
      }
    }
  },
  {
    "cardId": 27,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "A man called Joey \"The Rat\" offers you the secret of a hidden treasure. You haggle over the price (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He sells you an old drawing, gain 1 Treasure Map Unique Asset.",
        "Fail": "He slanders your name and destroys your good reputation; impair <img src=\"images/Influence.webp\">."
      }
    },
    "Wilderness": {
      "intro": "You hear shouting from inside a crypt and try to move the stone door (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "You save an archaeologist as mist appears in the room's corners; gain the Halpin Chalmers Unique Asset.",
        "Fail": "You cannot save him; gain a Despair Condition."
      }
    },
    "Sea": {
      "intro": "You find a man adrift on a lifeboat. Your captain suspects he was abandoned due to plague. You examine the survivor for any signs of sickness before allowing him on board (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "",
        "Fail": "His malady spreads; gain a Diseased Condition."
      }
    }
  },
  {
    "cardId": 28,
    "expansionId": "Under the Pyramids",
    "City": {
      "intro": "A flood has destroyed the library. You look through the sludge for valuable items (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You make an important find; gain 1 Tome Unique Asset and 1 Spell.",
        "Fail": "The mildew overpowers you; gain a Diseased Condition."
      }
    },
    "Wilderness": {
      "intro": "The farmers do not like strangers, but you try to earn their trust (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "They share tales from generations ago; gain 1 Treasure Map Unique Asset and 1 Task Unique Asset.",
        "Fail": "The tales they tell you are nothing but lies that hinder your investigation; impair <img src=\"images/Observation.webp\">."
      }
    },
    "Sea": {
      "intro": "A stranger falls overboard. You dive in, but the waves are overwhelming (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You save a life and make a friend; gain 1 Character Unique Asset.",
        "Fail": "You get dragged out of the water, cold and wet; gain 1 Illness Condition."
      }
    }
  },
  {
    "cardId": 29,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "A secret society made up of the city's wealthiest elites contacts you with an invitation. They would like to initiate you into their inner circle. You may gain a Dark Pact Condition to gain a Promise of Power Condition.",
      "choices": {
        "Gain a Dark Pact Condition to gain a Promise of Power Condition": "",
        "Do not gain a Promise of Power Condition": ""
      }
    },
    "Wilderness": {
      "intro": "You search through a series of labyrinthine tunnels to find a legendary lost treasure (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "You discover it within a subterranean chamber; gain 1 Artifact.",
        "Fail": "Noxious gases in the cave damage your lungs; impair <img src=\"images/Strength.webp\">."
      }
    },
    "Sea": {
      "intro": "You spend hours with the sailors, sharing stories and life lessons. Gain 1 Talent Condition. Most of their stories are tall tales. You try to discern the truth (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": "Gain 1 Clue.",
        "Fail": "You believe their lies; impair <img src=\"images/Lore.webp\">."
      }
    }
  },
  {
    "cardId": 30,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "This city is having a festival. Recover 1 Health and 1 Sanity. It ends with a masked dance that disturbs you (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "It clears your mind; you may discard 1 Madness Condition.",
        "Fail": "You cannot recall what happened; gain an Amnesia Condition."
      }
    },
    "Wilderness": {
      "intro": "You try to kick open the door of an abandoned shack (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "The lock breaks and inside you find something useful; gain 1 random Item Asset from the deck.",
        "Fail": "The long night without shelter fills you with dread; impair <img src=\"images/Will.webp\">."
      }
    },
    "Sea": {
      "intro": "The navigator describes his terrifying dreams. You try to interpret them (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You guide the ship to a lost treasure; gain 1 Magical Artifact.",
        "Fail": "You begin to experience his nightmares while you are awake; gain 1 Bane Condition."
      }
    }
  },
  {
    "cardId": 31,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You attend night classes hoping to learn a new skill (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You master the lessons and acquire insights into the occult world; gain 1 Talent Condition and 1 Clue.",
        "Fail": "The loss of sleep takes a toll on your stability; impair <img src=\"images/Will.webp\">."
      }
    },
    "Wilderness": {
      "intro": "A tall figure wearing a crown of antlers stands silhouetted against the moon. It wants you to let its children enter your lands. You may gain a Promise of Power Condition.",
      "choices": {
        "Gain a Promise of Power Condition": "Spawn 1 Monster on each named City space.",
        "Do not": ""
      }
    },
    "Sea": {
      "intro": "Thugs interrogate you about a passenger who is in hiding (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": "You say nothing and the intended victim joins you; gain 1 Character Unique Asset.",
        "Fail": "Witnesses claim you aided the attackers; gain a Wanted Condition."
      }
    }
  },
  {
    "cardId": 32,
    "expansionId": "Signs of Carcosa",
    "City": {
      "intro": "You see a man throw away his papers to evade the police. Gain 1 Ship Ticket or 1 Train Ticket. You ask him for help (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "Gain 1 random Service Asset from the deck.",
        "Fail": "He frames you for his crimes; gain a Wanted Condition."
      }
    },
    "Wilderness": {
      "intro": "A hermit offers to guide you on a spiritual journey of fasting and meditation (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "You unlock new skills; gain 1 Talent Condition.",
        "Fail": "You cannot adhere to the old man's regimen, leaving you malnourished; impair <img src=\"images/Strength.webp\">."
      }
    },
    "Sea": {
      "intro": "In the middle of the night, an enormous byakhee lands on deck. It has an offer from Carcosa. However, you know that such a bargain weakens the walls between worlds. You may spawn 1 Gate to gain a Promise of Power Condition.",
      "choices": {
        "Spawn 1 Gate to gain a Promise of Power Condition": "",
        "Do not gain a Promise of Power Condition": ""
      }
    }
  },
  {
    "cardId": 33,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "The noise and filth of the city is making it impossible to sleep, and insomnia takes a toll on your body (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You use the extra time to practice a newly learned craft; gain 1 Talent Condition.",
        "Fail": "Your exhaustion gives way to sickness; lose 1 Health."
      }
    },
    "Wilderness": {
      "intro": "Nothing grows in this dusty, gray landscape, and the air makes you sick to your stomach (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "You find a strange object in a crater; gain 1 Artifact.",
        "Fail": "You feel an unnatural change take hold within you as the corrupted air infects your body; gain a Cursed Condition."
      }
    },
    "Sea": {
      "intro": "You dream about sailing on a magnificent White Ship for a many lifetimes, mastering fantastic new abilities. Gain 1 Talent Condition. Eventually you realize that you must find a way to jolt yourself out of your dream, or you fear that you may never wake. Lose 2 Sanity unless you discard 1 Focus."
    }
  },
  {
    "cardId": 34,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You believe a that a municipal judge belongs to the Order of the Silver Twilight. You ask him for help (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "His magic sends you where you are needed most; move to any space containing a Gate.",
        "Fail": "He has you arrested for libel; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "A family of cannibals traps you in their ramshackle hut (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You break free and leave with an item that belonged to one of their previous victims; gain 1 random Magical Asset from the deck.",
        "Fail": "You hide for days waiting for a chance to escape; become Delayed."
      }
    },
    "Sea": {
      "intro": "You try to convince the first mate to help you steal a treasure from the hold (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "He gives you his key; gain 1 Artifact.",
        "Fail": "He kicks you off at the next port and spreads word to the other ships of your dishonesty; move to the nearest City space and discard all of your Ship Tickets."
      }
    }
  },
  {
    "cardId": 35,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "The city fines you for damages caused by your investigation (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "The payment earns you a lot of goodwill and the mayor offers to mentor you; gain 1 Focus and 1 Talent Condition.",
        "Fail": "A mob comes to exact a heftier sum; gain 1 Injury Condition and become Delayed."
      }
    },
    "Wilderness": {
      "intro": "Being away from the city offers you a chance to practice meditation techniques in peace and quiet. You find that calming your mind awakens things within you that you never knew you were capable of. You may spend 1 Focus to improve 1 skill of your choice.",
      "choices": {
        "Spend 1 Focus to improve 1 skill of your choice": "",
        "Do not improve 1 skill of your choice": ""
      }
    },
    "Sea": {
      "intro": "Fever has broken out among the passengers, and you begin to hallucinate (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "Your visions prove useful once you recover; gain 1 Clue.",
        "Fail": "Your mind is never truly the same after the sickness passes; lose 2 Sanity unless you gain a Hallucinations Condition."
      }
    }
  },
  {
    "cardId": 36,
    "expansionId": "The Dreamlands",
    "City": {
      "intro": "You dream of Mnomquah, an abhorrent creature living beneath the moon's surface. You sense that it wants to make an exchange, and it entices you with a mysterious rarity in exchange for its freedom. You may advance the Omen by 1 to gain The Moon XVIII Unique Asset.",
      "choices": {
        "Advance the Omen by 1 to gain The Moon XVIII Unique Asset": "",
        "Do not gain The Moon XVIII Unique Asset": ""
      }
    },
    "Wilderness": {
      "intro": "You find a mass grave and hear the voices of the dead in your head (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "They share what they know so that you might avoid a similar fate; gain 1 Talent Condition.",
        "Fail": "Knowing the manner of their deaths is too much for you to bear; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "Some captives on a prison boat recruit you to help them escape (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": "One of the prisoners joins you; gain 1 Character Unique Asset.",
        "Fail": "The guards catch you and deliver a sound beating before you can free any prisoners; lose 1 Health and gain 1 Injury Condition."
      }
    }
  },
  {
    "cardId": 37,
    "expansionId": "Cities in Ruin",
    "City": {
      "intro": "You get caught in a gunfight between the police and thieves (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You emerge safely once the smoke clears and find some loot that was left behind; gain 1 random Item Asset from the deck.",
        "Fail": "The police mistake you for one of the thieves; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "You search the ruins of a small village to discern what happened (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find a journal that describes the disasters that befell the town; gain 1 Clue and spawn 1 Clue.",
        "Fail": "The tragedy of whatever happened to the ill-fated town fills you with dread; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "The captain has vanished, and you try to decode his encrypted journal (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You uncover his lifelong pursuit; gain 1 Task Unique Asset.",
        "Fail": "Your frustrated efforts take a toll on your mind; gain 1 Madness Condition."
      }
    }
  },
  {
    "cardId": 38,
    "expansionId": "Cities in Ruin",
    "City": {
      "intro": "You spot your face on a wanted poster. You speak with a federal agent to proclaim your innocence (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "The agent becomes a valuable friend; gain the Agent Callahan Unique Asset.",
        "Fail": "The agent arrests you on the spot; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "A man fasting in the wild is confused by his visions. You try to help him understand what he sees (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "His visions describe a quest that he was meant to pass on to you, gain 1 Task Unique Asset.",
        "Fail": "His words horrify you; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "During a storm, you hear a voice coming from a blue glow atop the mast. You brave the weather to stay on deck to listen (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "The voice teaches you to unlock your potential; gain 1 Talent Condition.",
        "Fail": "Seasickness drives you below deck; lose 1 Health."
      }
    }
  },
  {
    "cardId": 39,
    "expansionId": "Cities in Ruin",
    "City": {
      "intro": "A man has borrowed money to pursue his obsessive quest. You ask him to share the details with you (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He trusts you to help; gain 1 Task Unique Asset.",
        "Fail": "He convinces you to cover what he owes; gain a Debt Condition."
      }
    },
    "Wilderness": {
      "intro": "An old hermit asks you to help out with some chores. It proves to be backbreaking work (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "The old man teaches you important lessons in return; gain 1 Talent Condition.",
        "Fail": "The work proves too demanding; lose 1 Health."
      }
    },
    "Sea": {
      "intro": "Supplies are scarce due to rats in the hold. You forgo food so a fellow passenger can eat (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You earn a lifelong friend; gain 1 Character Unique Asset.",
        "Fail": "You give in to hunger as the other person starves; lose 2 Sanity."
      }
    }
  },
  {
    "cardId": 40,
    "expansionId": "Cities in Ruin",
    "City": {
      "intro": "You do what you can to alleviate the city's widespread poverty (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "The citizens gratefully offer to share their knowledge; gain 1 Talent Condition.",
        "Fail": "The suffering tears at your heart; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "An unwary traveler was buried under a rockslide. You try to move the stones (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You find that though he did not survive, his possessions did; gain 1 Artifact.",
        "Fail": "You cause another rockslide; lose 2 Health and gain 1 Injury Condition."
      }
    },
    "Sea": {
      "intro": "You signal to a naval craft and demand to speak to the captain (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He believes your story; gain 1 Agency Secrets Unique Asset.",
        "Fail": "He thinks you are dangerous; move to the nearest City space and gain a Detained Condition."
      }
    }
  },
  {
    "cardId": 41,
    "expansionId": "Masks of Nyarlathotep",
    "City": {
      "intro": "A gravestone has been defaced with strange symbols (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "The symbols lead you to buried treasure; gain 1 random Magical Asset from the deck.",
        "Fail": "You begin to see the symbols everywhere; gain a Paranoia Condition."
      }
    },
    "Wilderness": {
      "intro": "You discover an empty campsite and try to track down the missing campers (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find a woman who kindly shares her knowledge and supplies; gain 1 Clue and 1 Resource.",
        "Fail": "The long search exhausts you; lose 1 Health."
      }
    },
    "Sea": {
      "intro": "A team of divers has recovered an item from the ocean's floor but cannot identify it (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You recognize the ancient treasure; gain 1 Artifact.",
        "Fail": "Deep ones come at night to attack the crew and retrieve it; lose 1 Health."
      }
    }
  },
  {
    "cardId": 42,
    "expansionId": "Masks of Nyarlathotep",
    "City": {
      "intro": "The hospital is in desperate need of funds (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "One of the patients is deeply moved by your generosity; gain 1 random Ally Asset from the deck.",
        "Fail": {
          "intro": "You cannot help and the suffering begets evil; a Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Wilderness": {
      "intro": "You examine totems of monstrous figures and try to interpret their purpose (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": "You determine they are watching over a buried treasure; gain 1 Artifact.",
        "Fail": "The carvings have a dark effect on you; gain a Corruption Condition."
      }
    },
    "Sea": {
      "intro": "You hear a member of the crew is looking for basic necessities to bring back to his family after some nightmarish event left his home in ruins. He will trade what he knows for supplies. You may spend 1 Resource to gain 1 Clue.",
      "choices": {
        "Spend 1 Resource to gain 1 Clue": "",
        "Do not gain 1 Clue": ""
      }
    }
  },
  {
    "cardId": 43,
    "expansionId": "Masks of Nyarlathotep",
    "City": {
      "intro": "An old radio in your room begins to emit strange words from its speakers (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "You translate instructions to better yourself; improve 1 skill of your choice.",
        "Fail": "The sounds have an unhealthy effect; gain a Corruption Condition."
      }
    },
    "Wilderness": {
      "intro": "The local villagers tell you that a lost treasure is hidden within a cave. You explore the dark caverns in search of the legendary object (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find it; gain 1 Relic Unique Asset.",
        "Fail": {
          "intro": "You awaken a horror; a Monster ambushes you!",
          "choices": {
            "Resolved the combat": ""
          }
        }
      }
    },
    "Sea": {
      "intro": "You encourage a depressed passenger to seek adventure (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "You make a friend; gain 1 Character Unique Asset.",
        "Fail": "You are accused of making threats; move to nearest City space and gain a Detained Condition."
      }
    }
  },
  {
    "cardId": 44,
    "expansionId": "Masks of Nyarlathotep",
    "City": {
      "intro": "You unlock a warehouse filled with crates. Gain 1 Resource. Later you tell the police the boxes were yours (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "They bring you another; gain 1 random Item Asset from the deck.",
        "Fail": "They arrest you; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "Your intended route has been blocked by falling rocks. You try to dig your way through (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You uncover a rare object as you dig; gain 1 Relic Unique Asset.",
        "Fail": "You must take a longer path; you become Delayed."
      }
    },
    "Sea": {
      "intro": "A masked stranger joins you on the deck, and you strike up a conversation (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "He tells you the news of his travels and offers you supplies; gain 1 Clue and 1 Resource.",
        "Fail": "He reveals his monstrous face; gain a Corruption Condition."
      }
    }
  },
  {
    "cardId": 45,
    "expansionId": "Masks of Nyarlathotep",
    "City": {
      "intro": "A local festival gives you a chance to speak with the city's denizens (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "They are delighted by you and want to share what they know; gain 1 Talent Condition.",
        "Fail": "They see you as dangerous; gain a Detained Condition."
      }
    },
    "Wilderness": {
      "intro": "Some garbage was left here by a previous traveler. You search through the piles of refuse (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find something useful; gain 1 random Item Asset from the deck.",
        "Fail": "You do not feel well after your fruitless search; lose 1 Health."
      }
    },
    "Sea": {
      "intro": "You overhear two smugglers talking about stolen goods, and you try to find their illicit cargo (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You find a hidden panel; gain 1 Relic Unique Asset.",
        "Fail": "The smugglers intercept you; gain an Injury Condition."
      }
    }
  },
  {
    "cardId": 46,
    "expansionId": "Masks of Nyarlathotep",
    "City": {
      "intro": "This idyllic city is invigorating but expensive. Recover 1 Health and 1 Sanity. You ask the locals about finding bargains (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": "They provide discounts; gain 1 Resource.",
        "Fail": "Everything costs dearly; gain a Debt Condition."
      }
    },
    "Wilderness": {
      "intro": "Human traffickers hope to capture you alive (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You overpower them instead and learn their methods; gain 1 Talent Condition.",
        "Fail": "You get dragged off in chains; move to nearest City space and gain a Detained Condition."
      }
    },
    "Sea": {
      "intro": "Several rare species of animals can be found on this unchartered island. You try to capture a large, ferocious beast (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "You find a bloody journal in the creature's lair; gain 1 Clue.",
        "Fail": "It mauls you; lose 1 Health."
      }
    }
  },
  {
    "cardId": 47,
    "expansionId": "Masks of Nyarlathotep",
    "City": {
      "intro": "A stranger at the bank owes a large sum. You offer to help (<img src=\"images/Influence.webp\">-1).",
      "choices": {
        "Pass": "The grateful stranger vows to aid in your struggles; gain 1 Character Unique Asset.",
        "Fail": "You cannot afford the price on your own; gain a Debt Condition."
      }
    },
    "Wilderness": {
      "intro": "The terrible isolation of this area is making it hard for you to sleep (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": "A good night's rest leaves you feeling better than you ever have; improve 1 skill of your choice.",
        "Fail": "The insomnia leaves you on edge; lose 1 Sanity."
      }
    },
    "Sea": {
      "intro": "You learn that a gangster plans to kill a passenger over a debt. You confront the crook (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": "The passenger becomes a loyal friend; gain 1 random Ally Asset from the deck.",
        "Fail": "You are unable to stop him; lose 2 Sanity."
      }
    }
  },
  {
    "cardId": 48,
    "expansionId": "Masks of Nyarlathotep",
    "City": {
      "intro": "The hotel's security informs you a guest has been abducted (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": "You track down the kidnappers and rescue their victim; gain 1 random Ally Asset from the deck.",
        "Fail": "You read of the victim's death in the news; lose 1 Sanity."
      }
    },
    "Wilderness": {
      "intro": "A sinkhole has opened in the ground nearby, revealing the topmost corner of a tomb buried by some ancient civilization. Uncovering the rest of the tomb will require supplies. You may spend 1 Resource to gain 1 Artifact.",
      "choices": {
        "Spend 1 Resource to gain 1 Artifact": "",
        "Do not gain 1 Artifact": ""
      }
    },
    "Sea": {
      "intro": "A singing woman can be heard somewhere across the water. You try to interpret her strange words (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": "The lyrics lead you to a floating corpse and an odd item; gain 1 Relic Unique Asset.",
        "Fail": "The music haunts you; lose 1 Sanity."
      }
    }
  }
];
