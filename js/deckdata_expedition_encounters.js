deckData['Expedition'] = {
  "Antarctica": [
    {
      "cardId": 1,
      "expansionId": "Eldritch Horror",
      "intro": "Flying over the area, you see evidence of an ancient stone city. You land your plane as close as you can and climb across the ice to reach the strange architecture (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "The murals inside the city tell the story of the elder things. Retreat Doom by 1. However, your studies take a toll on your mind (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "",
            "Fail": "You block everything you've learned from your mind; gain an Amnesia Condition."
          }
        },
        "Fail": {
          "intro": "You fall through the ice into a stone chamber. Lose 1 Health and gain a Back Injury Condition. You search the dark chamber (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You find the husk of an elder thing for study; retreat Doom by 1.",
            "Fail": ""
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Eldritch Horror",
      "intro": "You hear a faint sound echoing up from the caves that lead down in to the darkness. You listen carefully to discern the sound's origin (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You identify the sound of shoggoths. You escape, but can barely keep yourself conscious waiting for a rescue (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "You spot something on the cave floor; gain 1 Artifact.",
            "Fail": "You pass out and hear the sounds of shoggoths everywhere you go; gain a Hallucinations Condition."
          }
        },
        "Fail": {
          "intro": "\"Tekeli-li! Tekeli-li!\" You recognize it too late. The shoggoths overwhelm you (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You overcome the threat; gain 2 Clues.",
            "Fail": "You escape by jumping off a ledge; gain a Leg Injury Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "Eldritch Horror",
      "intro": "You find what you believe to be star-shaped burial mounds in the snow. It is physically exhausting, but you try to dig the bodies out of the ice and snow (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "An odd relic lies next to the creature's corpse. Gain 1 Artifact. Then you examine the body (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "",
            "Fail": "You lose 1 Sanity staring too long at this alien horror."
          }
        },
        "Fail": {
          "intro": "Chipping through the ice, you slip and injure yourself. Gain a Leg Injury Condition. The rest of the expedition crew is too terrified to approach and you beg them for help (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "They spot something buried in the ice; gain 1 Artifact.",
            "Fail": "Lose 2 Health as you crawl back to the camp."
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "Forsaken Lore",
      "intro": "As you approach the dark tower, the landscape suddenly transforms around you, as if you were witnessing thousands of years passing in an instant. The effect passes quickly but overwhelms your senses (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You realize that you've seen the future. In this vision, a being of unthinkable power escapes from this tower, unless you have the knowledge to prevent it (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "You restore the seals on the tower; retreat Doom by 1.",
            "Fail": "Nothing can be done; lose 1 Sanity and gain a Paranoia Condition."
          }
        },
        "Fail": {
          "intro": "You see your own severed head, connected to other heads by a strange, fibrous network. Lose 1 Sanity and gain a Hallucinations Condition. You hear many voices in your head, but one struggles to be heard over the others (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "This voice teaches you the arcane arts; gain 1 Spell.",
            "Fail": ""
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "Under the Pyramids",
      "intro": "You find the foundation of some ancient structure, but a snowstorm is on its way. Resolve the pass effect to set up your tent and wait out the storm; or resolve the fail effect to try and dig up the foundation before the blizzard starts.",
      "choices": {
        "Resolve the pass effect to set up your tent and wait out the storm": {
          "intro": "The terrifying winds and cold last throughout the night (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "You excavate the area the next day and discover a lost treasure; gain 1 Artifact.",
            "Fail": "You run away as soon as you can; gain a Despair Condition."
          }
        },
        "Resolve the fail effect to try and dig up the foundation before the blizzard starts": {
          "intro": "You quickly pull away the ancient stones (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "You uncover a lost wonder; gain 1 Artifact.",
            "Fail": "The storm descends forcing you to set up your tent in the bitter cold; gain 1 Illness Condition."
          }
        }
      }
    },
    {
      "cardId": 6,
      "expansionId": "Signs of Carcosa",
      "intro": "The weather seems strangely warm and ashes are raining down from the sky. You struggle to find your way through the burning white embers that fill the air (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You discover arcane letters written on a cave wall. Gain 1 Clue. An imposing shrouded figure appears behind you (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "It nods and fades into the mist; advance the active Mystery by 1.",
            "Fail": "Its icy touch steals your strength; impair <img src=\"images/Strength.webp\">."
          }
        },
        "Fail": {
          "intro": "You trip, hurting yourself badly as you fall into a milky white river. Gain 1 Injury Condition. You struggle to stay afloat (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "The river takes you to an island sanctuary; retreat Doom by 1.",
            "Fail": "You nearly drown; lose 2 Health."
          }
        }
      }
    }
  ],
  "Arkham": [
    {
      "cardId": 1,
      "expansionId": "Mountains of Madness",
      "intro": "You descend into a series of tunnels hidden beneath Arkham's old cemetery. The stonework indicates these twisting passageways are as old as the city itself. You search the dark halls, looking for some indication of their purpose (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find papers, linking the city's founders to witchcraft. Gain 1 Incantation Spell. The documents hint at a coming doom (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "Advance the active Mystery by 1.",
            "Fail": "You feel lost and afraid; lose 1 Sanity and gain a Paranoia Condition."
          }
        },
        "Fail": {
          "intro": "You wander for hours in the dark corridors. Lose 1 Sanity. You find a ghoul who was once one of Arkham's founders and ask for his help (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "He likes you and aids your cause; retreat Doom by 1.",
            "Fail": "He attacks; lose 2 Health."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Mountains of Madness",
      "intro": "You use the strange angles in the old house to travel to another dimension. A man waits for you there with a strange relic. Resolve the pass effect to negotiate with the man or resolve the fail effect to try to steal the relic.",
      "choices": {
        "Resolve the pass effect to negotiate with the man": {
          "intro": "You offer the man much in exchange for the relic (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "The Dark Man agrees enigmatically; gain 1 Artifact.",
            "Fail": "You end up owing the Dark Man; gain a Debt Condition."
          }
        },
        "Resolve the fail effect to try to steal the relic": {
          "intro": "Stealing the relic and escaping requires navigating the strange spaces between this world and your own (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "Your theft succeeds; gain 1 Artifact.",
            "Fail": "The Dark Man stops you and is very angry; gain 1 Bane Condition."
          }
        }
      }
    }
  ],
  "Buenos Aires": [
    {
      "cardId": 1,
      "expansionId": "Under the Pyramids",
      "intro": "While digging a new tunnel for the city's subway, engineers uncovered a cave once used to worship Gualichu. Inside the cave you find an altar that exudes an aura of evil. You grab a hammer and attempt to destroy it (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find glyphs under the altar. Gain 1 Ritual Spell. You search the cave walls (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You find a prophetic mural; advance the active Mystery.",
            "Fail": "The dank air gets to you; gain 1 Illness Condition."
          }
        },
        "Fail": {
          "intro": "A dark power fills your mind, threatening to overpower you (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "You drive the evil away; retreat Doom by 1.",
            "Fail": "The spirit of Gualichu embeds itself in your mind; gain a Haunted Condition."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Under the Pyramids",
      "intro": "You travel to a collection of towering wooden statues left by the Mapuche. Resolve the pass effect to disturb the chemamüll and dig up the ground; or resolve the fail effect to leave an offering for the dead.",
      "choices": {
        "Resolve the pass effect to disturb the chemamüll and dig up the ground": {
          "intro": "The large statues attack you (<img src=\"images/Strength.webp\">)!",
          "choices": {
            "Pass": "You reduce them to splinters and find treasure buried in the ground; gain 1 Magical Artifact.",
            "Fail": "Your unconscious body is dragged back to the city; gain 1 Injury Condition."
          }
        },
        "Resolve the fail effect to leave an offering for the dead": {
          "intro": "A peaceful wind picks up and you think you hear a voice (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "The voice guides you to a reward; gain 1 Magical Artifact.",
            "Fail": "The voices stay with you, even after you leave the chemamüll; gain a Haunted Condition."
          }
        }
      }
    }
  ],
  "Istanbul": [
    {
      "cardId": 1,
      "expansionId": "Under the Pyramids",
      "intro": "On a high hill, you find a large flat stone carved with images of constellations. Locals claim these were left by the astrologer, Epigenes. You search the area for more of these carved stones (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "The discovery makes you famous. Improve <img src=\"images/Influence.webp\">. You study the stars to read Epigenes' message (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "You decipher a warning; advance the active Mystery by 1.",
            "Fail": "The stars seem oppressive; gain a Despair Condition."
          }
        },
        "Fail": {
          "intro": "Your search is interrupted when worshipers of Daoloth attack you (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "You defeat them and discover their knowledge of the future; retreat Doom by 1.",
            "Fail": "You are stabbed repeatedly; lose 2 Health."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Under the Pyramids",
      "intro": "While exploring the bottom of the Bosphorus, a team of divers lost one of their crew. Resolve the pass effect to search from the water's surface; or resolve the fail effect to use diving equipment to search the bottom.",
      "choices": {
        "Resolve the pass effect to search from the water's surface": {
          "intro": "You search for bubbles on the water's surface or dirt that has been kicked up (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You pull the grateful diver; gain 1 Character Unique Asset.",
            "Fail": "You overexert yourself searching, gain a Back Injury Condition."
          }
        },
        "Resolve the fail effect to use diving equipment to search the bottom": {
          "intro": "You try not to panic in the cold, dark depths of the water (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "You rescue the lost diver; gain 1 Character Unique Asset.",
            "Fail": "You begin seeing images in the dark; gain a Hallucinations Condition."
          }
        }
      }
    }
  ],
  "London": [
    {
      "cardId": 1,
      "expansionId": "Cities in Ruin",
      "intro": "An ancient threat has taken root in Fleet River, a subterranean waterway that has been bricked up for nearly two hundred years. You try to convince the city officials to open the chamber (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You trade a favor for access to the sealed area. Gain 1 Task Unique Asset. You search the murky river (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You find a vile statue and destroy it; advance the active Mystery by 1.",
            "Fail": "The foul water sickens you; lose 2 Health."
          }
        },
        "Fail": {
          "intro": "Breaking in at night, you find the water teeming with serpents. Gain 1 Madness Condition. You try to summon the courage to remove the snakes (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "You clear the area; retreat Doom by 1.",
            "Fail": "You scream and run; lose 1 Sanity."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Cities in Ruin",
      "intro": "You learn that a powerful occult object is being held in the Black Museum at Scotland Yard. Resolve the pass effect to convince the police to give you access; or resolve the fail effect to break in at night.",
      "choices": {
        "Resolve the pass effect to convince the police to give you access": {
          "intro": "You attempt to convince the police of your credentials (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "You are given free access to the museum's notorious exhibits; gain 1 Artifact.",
            "Fail": "You are arrested on the spot; gain a Detained Condition."
          }
        },
        "Resolve the fail effect to break in at night": {
          "intro": "Your incursion goes smoothly until you reach a locked door inside the museum. (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You are free to search the items on display; gain 1 Artifact.",
            "Fail": "Your effort leaves you bruised; lose 2 Health."
          }
        }
      }
    }
  ],
  "Rome": [
    {
      "cardId": 1,
      "expansionId": "Mountains of Madness",
      "intro": "You're granted access to the Passetto di Borgo, the passage that connects Vatican City to Castel Sant'Angelo. You carefully examine the walls of the secret walkway to find access to hidden chambers (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find a door to a cell covered in magic writing. Gain 1 Clue. You ask the priests about the purpose for the cell (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "They say a wizard was imprisoned there; advance the active Mystery by 1.",
            "Fail": "The prison horrifies you; lose 1 Sanity."
          }
        },
        "Fail": {
          "intro": "You don't see where the robed cultists came from, but you fight to overpower them (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "The Vatican guards escort you the rest of the way, and the experience strengths your resolve; improve <img src=\"images/Will.webp\">.",
            "Fail": "Gain 1 Back Injury Condition."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Mountains of Madness",
      "intro": "Legends tell of arcane treasurers possessed by the ancient Romans that were hidden in the city's aqueducts. Resolve the pass effect to bribe some of the locals to guide you or resolve the fail effect to search the underground passageways on your own.",
      "choices": {
        "Resolve the pass effect to bribe some of the locals to guide you": {
          "intro": "You negotiate with a group of delinquents to take you into the underground (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "They tell you which waterways are safe, and you find an important relic; gain 1 Artifact.",
            "Fail": "You're forced to pay for more than you can afford and find nothing or your trouble; gain a Debt Condition."
          }
        },
        "Resolve the fail effect to search the underground passageways on your own": {
          "intro": "You explore the waterways, checking every alcove for secrets (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You find a strange object; gain 1 Artifact.",
            "Fail": "Deep ones emerge from the water all around you; lose 1 Health and 1 Sanity."
          }
        }
      }
    }
  ],
  "San Francisco": [
    {
      "cardId": 1,
      "expansionId": "Cities in Ruin",
      "intro": "Due to city ordinance, the Odd Fellows Cemetery is obliged to move its bodies to a new location. You try to warn the authorities about cults that would take advantage of the situation to steal corpses (<img src=\"images/Influence.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You receive training to watch for occult activity. Improve <img src=\"images/Observation.webp\">. When the cult arrives to steal the cadavers, you attack their leader (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "You catch him; advance the Active Mystery by 1.",
            "Fail": "You are badly hurt; lose 2 Health."
          }
        },
        "Fail": {
          "intro": "You spend the night alone in the cemetery. Lose 1 Sanity. The cult arrives, and you follow them (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You tell the police of their lair; retreat Doom by 1.",
            "Fail": "You are blamed for the theft; gain a Detained Condition."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Cities in Ruin",
      "intro": "An important treasure was buried beneath the ground in the hull of a decommissioned ship. Resolve the pass effect to hire a guide to find the lost ship; or resolve the fail effect to dig up old vessels until you find it.",
      "choices": {
        "Resolve the pass effect to hire a guide to find the lost ship": {
          "intro": "You hire a local historian (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "He takes you through a passage to the ship you seek; gain 1 Artifact.",
            "Fail": "He abandons you in a vast maze of pitch black tunnels; gain 1 Injury Condition and 1 Madness Condition."
          }
        },
        "Resolve the fail effect to dig up old vessels until you find it": {
          "intro": "Using your own loose knowledge of the ship's final location, you spend day and night digging (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You uncover the craft; gain 1 Artifact.",
            "Fail": "The effort is too much for your body to withstand; lose 2 Health."
          }
        }
      }
    }
  ],
  "Shanghai": [
    {
      "cardId": 1,
      "expansionId": "Cities in Ruin",
      "intro": "Visiting the Longhua Temple, you are horrified to encounter the spirits of thousands of victims who have been imprisoned and executed on this site. They cry out to you in a ghastly cacophony (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You listen to their stories and learn of their deaths. Improve <img src=\"images/Lore.webp\">. They beg you to find their bodies (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "The grateful spirits aid you in your case; advance the active Mystery by 1.",
            "Fail": "They inflict their wounds upon you; lose 2 Health."
          }
        },
        "Fail": {
          "intro": "You collapse in a panic. Lose 1 Sanity. You beg the spirits to have mercy (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "The ghosts see the good within you and relent; retreat Doom by 1.",
            "Fail": "They terrorize you until you snap; gain 2 Madness Condition."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Cities in Ruin",
      "intro": "A wealthy antiquities dealer's safe was dropped into a deep river. Resolve the pass effect to open the safe under the water's surface; or resolve the fail effect to try to get the safe back on dry land.",
      "choices": {
        "Resolve the pass effect to open the safe under the water's surface": {
          "intro": "You do your best to crack the combination lock while submerged (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "The door springs open revealing an important treasure; gain 1 Artifact.",
            "Fail": "You lose something while fumbling about in the water; discard 1 Item possession."
          }
        },
        "Resolve the fail effect to try to get the safe back on dry land": {
          "intro": "The safe is extremely heavy and difficult to recover (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You push it up onto a sidewalk and open it easily; gain 1 Artifact.",
            "Fail": "You nearly drown yourself struggling against its tremendous weight; lose 2 Health."
          }
        }
      }
    }
  ],
  "Sydney": [
    {
      "cardId": 1,
      "expansionId": "Mountains of Madness",
      "intro": "A group of aborigines are planning a journey to Uluru. Once there, they will speak to the ancient spirits known as the Tjukurpa about the doom that threatens the world. You carefully follow them, trying to stay hidden (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "The journey is difficult, requiring both strength and stamina. Improve <img src=\"images/Strength.webp\">. One of the spirits speaks to you (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "The spirit grants you its wisdom; advance the active Mystery by 1.",
            "Fail": "It punishes you; gain a Cursed Condition."
          }
        },
        "Fail": {
          "intro": "The aborigines sense your presence and force your mind into the Dreaming. Gain a Hallucinations Condition. The spirits of animals attack you (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "The spirits are pleased with you and will help your cause; retreat Doom by 1.",
            "Fail": ""
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Mountains of Madness",
      "intro": "A group of men tell you they've uncovered a hidden city in the desert but lack the financial means to explore it properly. Resolve the pass effect to help them secure funding or resolve the fail effect to travel to the city on your own.",
      "choices": {
        "Resolve the pass effect to help them secure funding": {
          "intro": "The necessary equipment proves more expensive than you anticipated (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "You and your team explore the city and make a discovery; gain 1 Artifact.",
            "Fail": "You attempt the exploration without the proper gear and find a flying polyp; lose 2 Health."
          }
        },
        "Resolve the fail effect to travel to the city on your own": {
          "intro": "You travel to the lost city alone, running out of rations on the way. Exploring the city in your desperate state puts a strain on your body (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "You press on and find a rare treasure; gain 1 Artifact.",
            "Fail": "Gain a Hunger Condition."
          }
        }
      }
    }
  ],
  "The Amazon": [
    {
      "cardId": 1,
      "expansionId": "Eldritch Horror",
      "intro": "You see the vine-covered temple ahead of you, but you're going to have to fight your way through a thick tangle of venomous snakes between yourself and the entrance (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You enter the Temple of Yig. Retreat Doom by 1. Strange runes are inscribed on the wall in a serpentine design. You must interpret their meaning to avoid their hypnotic effect (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "",
            "Fail": "Gain an Amnesia Condition."
          }
        },
        "Fail": {
          "intro": "You've been bit! Lose 1 Health and gain an Internal Injury Condition. Something about the snakes is odd. You try to identify what makes them unique (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You notice a crescent on the snake's head; retreat Doom by 1.",
            "Fail": ""
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Eldritch Horror",
      "intro": "As you slip into a deep trance and touch the odd stone, the jungle around you subtle changes in appearance. You look for hints regarding this new jungle terrain (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You are in some other dimension. You use your arcane skills to return home (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "You wake up back in the jungle next to a strange item; gain 1 Artifact.",
            "Fail": "The journey back unsettles you; lose 2 Sanity."
          }
        },
        "Fail": {
          "intro": "A towering, larva-like thing grabs you with its tendrils. You struggle fiercely to break free (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You retrieve a sample of the creature; gain 2 Clues.",
            "Fail": "It throws you high into the air; gain a Back Injury Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "Eldritch Horror",
      "intro": "You've heard rumors that a particular secret of the ancients is visible from the top of a hill. You find that climbing the hillside is not an easy task (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find a lost treasure. Gain 1 Artifact. From this height, you can survey the land for miles (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You see drawings that are hundreds of feet across; gain 1 Clue.",
            "Fail": "Vertigo sets in; lose 1 Sanity."
          }
        },
        "Fail": {
          "intro": "You take too long climbing and you stumble around in the dark. Gain 1 Leg Injury Condition. You yell for help (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "The rescue party's flashlights reveal what you tripped over; gain 1 Artifact.",
            "Fail": "You return to your camp alone in the cold and dark; lose 2 Health."
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "Forsaken Lore",
      "intro": "Lieutenant Colonel Percy Fawcett disappeared in this area of the jungle searching for the Lost City of Z. You search for any signs of the expedition or the legendary city (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You discover a young Kuikuro boy who requires convincing before he'll help you (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "He brings you to an ancient city where Fawcett has left behind his journal; gain 2 Clues.",
            "Fail": "The boy demands payment and disappears; discard 1 Item possession."
          }
        },
        "Fail": {
          "intro": "A mosquito bite leaves you sick and feverish (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You recover quickly, feeling better than before; discard 1 Illness or Injury Condition.",
            "Fail": "Your symptoms grow worse; lose 1 Health and gain a Poisoned Condition."
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "Under the Pyramids",
      "intro": "Legends say that the Mapinguari was once a powerful shaman. You search the jungle for any sign of this large, sloth-like beast so that you can track it back to its lair (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find the Mapinguari and learn it still retains its intelligence. Gain 1 Clue. You ask it for help (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "It reveals its secrets; advance the active Mystery by 1.",
            "Fail": "It takes a sacrifice; discard 1 Item possession."
          }
        },
        "Fail": {
          "intro": "The beast finds you first, attacking you with powerful claws (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "The creature speaks, revealing powerful arcane knowledge; retreat Doom by 1.",
            "Fail": "The beast claws at your legs; gain a Leg Injury Condition."
          }
        }
      }
    },
    {
      "cardId": 6,
      "expansionId": "Signs of Carcosa",
      "intro": "This part of the jungle is home to the legendary sorcerer tree known as the lupuna. Resolve the pass effect to try and find it; or resolve the fail effect to leave a small gift for the jungle spirits.",
      "choices": {
        "Resolve the pass effect to try and find it": {
          "intro": "You search for the largest, oldest tree in the area (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You find an ancient treasure hidden among the roots; gain 1 Artifact.",
            "Fail": "You exhaust yourself with a fruitless search; lose 2 Health."
          }
        },
        "Resolve the fail effect to leave a small gift for the jungle spirits": {
          "intro": "It seems as if your gift was rejected! A fever leaves you incapacitated (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You find a treasure next to you when you awake; gain 1 Artifact.",
            "Fail": "Your vision never fully recover; impair <img src=\"images/Observation.webp\">."
          }
        }
      }
    }
  ],
  "The Heart of Africa": [
    {
      "cardId": 1,
      "expansionId": "Eldritch Horror",
      "intro": "The whole jungle shakes, and the ground splits beneath your feet. You fall through the crevice into a vast subterranean tunnel (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You follow the tunnel to the ancient city of G'harne. Retreat Doom by 1. If you have read about G'harne, you know to leave quickly (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "",
            "Fail": "You wake up in the jungle with no memory; gain an Amnesia Condition."
          }
        },
        "Fail": {
          "intro": "You land painfully on your spine. Lose 1 Health and gain a Back Injury Condition. While you're stuck here, you examine this tunnel (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You see that it was dug out by a large creature; retreat Doom by 1.",
            "Fail": ""
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Eldritch Horror",
      "intro": "The old N'bangu man's map to the gray city of the white god relies on landmarks that are now overgrown by the dense jungle. You search carefully to recognize anything familiar (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find the remains of a white ape and study the bones (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "You find a hastily drawn map that leads you to a hidden treasure; gain 1 Artifact.",
            "Fail": "Something about this creature make you doubt your own humanity; gain a Hallucinations Condition."
          }
        },
        "Fail": {
          "intro": "Stumbling across a copper mine, you are immediately accused of being a thief or a saboteur. You fight to escape into the jungle (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You find the gray city; gain 2 Clues.",
            "Fail": "Gain a Detained Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "Eldritch Horror",
      "intro": "Suddenly, you are surrounded by leopard men! They quickly capture you, tie you up, and take you back to their village. On the way, you try to free yourself from the ropes that bind you (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "At their village, you spot a rare item sitting on an altar. Gain 1 Artifact. You escape and flee from the village as quickly as possible without watching where you are going (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "",
            "Fail": "You collide with a statue of Tsathoggua; lose 1 Sanity."
          }
        },
        "Fail": {
          "intro": "Your escape attempt does more harm than good. Gain a Leg Injury Condition. You try to convince the leopard men that you are a messenger from their god (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "They let you go; gain 1 Artifact.",
            "Fail": "The leopard men attack you with primitive weapons as you escape; lose 2 Health."
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "Forsaken Lore",
      "intro": "In a part of the jungle avoided by all of the local tribes, you find a stone covered with strange dot patterns. You attempt to identify the origin of the shard and interpret the meaning of the patterns (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You identify it as a missing piece of the G'harne Fragments that leads you to a long-forgotten cave. Inside, you search through the ruins of an abandoned lair of elder things (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You find a lost treasure; gain 1 Artifact.",
            "Fail": ""
          }
        },
        "Fail": {
          "intro": "Your failure hurts your reputation among your peers. Discard all <img src=\"images/Influence.webp\"> Improvement tokens. Soon, a rival expedition tries to steal the fragment (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "You escape with the other expedition's notes; gain 2 Clues.",
            "Fail": "They leave you wounded; lose 2 Health."
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "Under the Pyramids",
      "intro": "Cutting your way through the jungle, you stumble upon a narrow tunnel beneath a towering carving of Cthulhu. The sculpture terrifies you, and you have a hard time making yourself continue (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": {
          "intro": "The tunnel leads to a valley adorned with shrines to the Great Old Ones. Gain 1 Clue. These altars are protected by zombies (<img src=\"images/Strength.webp\">)!",
          "choices": {
            "Pass": "You study the shrines; advance the active Mystery by 1.",
            "Fail": "You are wounded; lose 2 Health."
          }
        },
        "Fail": {
          "intro": "Terrified, you fall into a catatonic state and suffer strange dreams. You try to interpret your vision (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "You understand the history of the area, retreat Doom by 1.",
            "Fail": "You do not know what is real; gain a Hallucinations Condition."
          }
        }
      }
    },
    {
      "cardId": 6,
      "expansionId": "Signs of Carcosa",
      "intro": "You consider your options for gaining access to the legendary canyons of Ituri-kendi. Resolve the pass effect to take the Ituri river into the canyon; or resolve the fail effect to approach through the jungle.",
      "choices": {
        "Resolve the pass effect to take the Ituri river into the canyon": {
          "intro": "The powerful current threatens to pull you under (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You find a strange object waiting for you on the shore; gain 1 Artifact.",
            "Fail": "You are attacked by giant leeches under the water; lose 2 Health."
          }
        },
        "Resolve the fail effect to approach through the jungle": {
          "intro": "You try to follow an ancient map to an abandoned city in the canyon walls (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "You find a strange item in a prehistoric chamber; gain 1 Artifact.",
            "Fail": "Wandering in the jungle breaks your body; gain 1 Injury Condition."
          }
        }
      }
    }
  ],
  "The Himalayas": [
    {
      "cardId": 1,
      "expansionId": "Eldritch Horror",
      "intro": "A horrifying beast suddenly attacks you, almost as if it had stepped right out of your nightmares. Spawn a Monster on your space and immediately encounter it. If you defeat it, resolve the pass effect. If you do not defeat it, resolve the fail effect.",
      "choices": {
        "Pass": {
          "intro": "The creature from your dreams is defeated; retreat Doom by 1. You look into local legends to find the link between this area and the Dreamlands (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "",
            "Fail": "Lose 2 Sanity as your uncertainty unhinges your mind."
          }
        },
        "Fail": {
          "intro": "Unable to overcome the threat, you run away and look for a place to hide (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "Discard the Monster and retreat Doom by 1.",
            "Fail": "Lose 1 Sanity as you cower in fear."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Eldritch Horror",
      "intro": "You duck into a cave to find shelter from the deadly snowstorm. Inside, the tunnels twist and turn in the dark, making it almost impossible to navigate (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "Inside a well-lit laboratory, you find a human brain inside a cylinder. You can speak to the brain, but it disturbs you to do so (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "It tells you where the mi-go store their equipment; gain 1 Artifact.",
            "Fail": "You retreat from all human contact; gain a Paranoia Condition."
          }
        },
        "Fail": {
          "intro": "Large, winged, crab-like beings surround you. You're going to have to fight if you want to escape (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You subdue the mi-go for study; gain 2 Clues.",
            "Fail": "The creatures inject you with a glowing serum; gain an Internal Injury Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "Eldritch Horror",
      "intro": "The gnoph-keh summons a terrible blizzard to destroy you and your expedition. You'll have to survive the storm before you can continue (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You weather the storm in a cave and find a statue of a three-eyed horror, surrounded by odd relics. Gain 1 Artifact. You try to determine the statue's origins (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "",
            "Fail": "You do not recognize Rhan-Tegoth, and the icon remains a mystery that haunts your dreams; lose 2 Sanity."
          }
        },
        "Fail": {
          "intro": "Trapped by the storm, the other members of your expedition panic. You try to calm them (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "They are willing to continue, and you make a discovery; gain 1 Artifact.",
            "Fail": "Their refusal fills you with doubts; gain a Paranoia Condition."
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "Forsaken Lore",
      "intro": "The Order of the Death's Head has arranged for a mass sacrifice of monks to call forth the Ogress of Ra-Sa. You attack the Order's soldiers to free their prisoners. (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "The Order abandons the ritual, and you rescue the monks. One of them gratefully gives you a scroll that you attempt to interpret (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "You acquire arcane knowledge; gain 2 Spells.",
            "Fail": "The scroll's strange poetry bleeds into reality; gain a Hallucinations Condition."
          }
        },
        "Fail": {
          "intro": "The fight leaves you wounded. Gain a Leg Injury Condition. The commander of the Order continues chanting, and the sound unnerves you (<img src=\"images/Will.webp\">-1).",
          "choices": {
            "Pass": "You steal the book he is reading from; gain 2 Clues.",
            "Fail": "The commander hexes you; gain a Cursed Condition."
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "Under the Pyramids",
      "intro": "At last you stand at the gates of Shambhala. The monks demand you meditate for a week before entering. Resolve the pass effect to try to sneak in; or resolve the fail effect to begin your meditation.",
      "choices": {
        "Resolve the pass effect to try to sneak in": {
          "intro": "You walk away from the gate and try to sneak into the city later (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You enter their temple unseen and discover a lost treasure; gain 1 Artifact.",
            "Fail": "The monks discover you and forcibly drag you out; gain 1 Injury Condition."
          }
        },
        "Resolve the fail effect to begin your meditation": {
          "intro": "You try to keep yourself in a state of quiet contemplation (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "The monks deem you worthy and offer you a gift; gain 1 Artifact.",
            "Fail": "Your meditation is plagued by doubts and fears; gain 1 Madness Condition."
          }
        }
      }
    },
    {
      "cardId": 6,
      "expansionId": "Signs of Carcosa",
      "intro": "In a remote temple, you stand in front of an odd window with strangely tinted glass. You hear scratching and howling coming from the other side. As you stare through the window, a hideous image appears before you (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You see images of Carcosa. Gain 1 Clue. The sight drives one of the monks mad, and he attacks (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "The others pray for your cause, advance the active Mystery by 1.",
            "Fail": "You are no match for his skill; gain 1 Injury Condition."
          }
        },
        "Fail": {
          "intro": "The image burns into your mind and you never think clearly again. Impair <img src=\"images/Lore.webp\">. The glass shows you other worlds (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You see a way to stop your enemy; retreat Doom by 1.",
            "Fail": "You gaze into chaos; gain 1 Madness Condition."
          }
        }
      }
    }
  ],
  "The Pyramids": [
    {
      "cardId": 1,
      "expansionId": "Eldritch Horror",
      "intro": "Bandits tie your hands and blindfold you. They lower you into catacombs deep under the pyramids and leave you there to die. You try to free yourself from your bonds (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You see now that you are in the Temple of the Sphinx. Retreat Doom by 1. You use your knowledge of Egyptology to find an exit (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "",
            "Fail": "You wake up with no memory of how you escaped; gain an Amnesia Condition."
          }
        },
        "Fail": {
          "intro": "While struggling with your bonds, you feel undead hands tearing at you. Lose 1 Health and gain an Internal Injury Condition. You gaze into the darkness (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You identify mummies with the heads of animals; retreat Doom by 1.",
            "Fail": ""
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Eldritch Horror",
      "intro": "Inside the pyramid, you find a hidden passage leading to an undiscovered throne room. You explore the room for indications of its history (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You see a star map adjacent to a world map on the wall. You use the star map to determine a location on the world map (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "You discover a hidden cabinet built into the wall; gain 1 Artifact.",
            "Fail": "The maps remain a mystery; you lose 2 Sanity."
          }
        },
        "Fail": {
          "intro": "As you search, Nephren-Ka appears! With a wave of his hand, you are overcome by pain (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You crawl away; gain 2 Clues.",
            "Fail": "Lose 1 Health and gain an Internal Injury Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "Eldritch Horror",
      "intro": "You reach for the ancient relic when a small white cat jumps in front of you. To your horror, the cat transforms into a demonic, feline creature and attacks (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "The demon shrivels down to a husk, leaving the relic unguarded. Gain 1 Artifact. Examining the item, you may be too distracted to notice the warning hieroglyph (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "",
            "Fail": "You aren't prepared to evade the poisoned barb; lose 1 Health."
          }
        },
        "Fail": {
          "intro": "The creature leaves you badly wounded. Gain a Leg Injury Condition. You cry out for help (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "The men who come to find you distract the beast, allowing you to procure the relic; gain 1 Artifact.",
            "Fail": "Lose 2 Health as you have to walk without receiving medical attention."
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "Forsaken Lore",
      "intro": "Once you reach Dashur, you begin digging through the rubble that had once been the White Pyramid, hoping to excavate the ancient burial chambers (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You uncover a vast labyrinth of underground tunnels. You only hope of navigating is to translate the hieroglyphs on the wall (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "You find your way to the royal treasury; gain 1 Artifact.",
            "Fail": "You slowly find your way back to the exit; become Delayed."
          }
        },
        "Fail": {
          "intro": "You exhaust yourself working into the night without result. Lose 1 Health. That night, a snake-eyed man dressed like a bedouin approaches you and offers you a deal. You may gain a Dark Pact to improve 1 skill of your choice.",
          "choices": {
            "Gain a Dark Pact to improve 1 skill of your choice": "",
            "Do not improve 1 skill of your choice": ""
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "Under the Pyramids",
      "intro": "An Australian veteran of the Great War has a room in the Mena House Hotel. You hear rumors that over the years he has stolen several objects from inside the pyramids. When you confront him on the issue, he starts a fight with you (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "Humbled, the soldier tells you about murals within the pyramid. Gain 1 Clue. You search for them (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You find a secret painting; advance the active Mystery by 1.",
            "Fail": "The foul air takes a toll; gain 1 Illness Condition."
          }
        },
        "Fail": {
          "intro": "The soldier leaves you unconscious in a chamber in the pyramids. You wake up terrified in the dark (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "You hear the whispers of long dead pharaohs; retreat Doom by 1.",
            "Fail": "You run as fast as you can; gain a Despair Condition."
          }
        }
      }
    },
    {
      "cardId": 6,
      "expansionId": "Signs of Carcosa",
      "intro": "Inside a hidden chamber, you find a funerary boat large enough for you to board. Resolve the pass effect to stand on the deck of the boat; or resolve the fail effect to try to get the boat out of the chamber.",
      "choices": {
        "Resolve the pass effect to stand on the deck of the boat": {
          "intro": "The boat begins to drift through time. It requires arcane knowledge to steer (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "You return to an era when this room hid a treasure; gain 1 Artifact.",
            "Fail": "Your mind reels as you look into eternity; gain 1 Madness Condition."
          }
        },
        "Resolve the fail effect to try to get the boat out of the chamber": {
          "intro": "As you move the boat, a hidden pressure plate activates a trap (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You avoid the trap and find a treasure beneath the pressure plate; gain 1 Artifact.",
            "Fail": "You are sprayed by a strange gas that fills you with dread; impair <img src=\"images/Will.webp\">."
          }
        }
      }
    }
  ],
  "Tokyo": [
    {
      "cardId": 1,
      "expansionId": "Under the Pyramids",
      "intro": "Just outside the Imperial Palace, you have discovered concrete covering the entrance to an underground chamber. It must have been part of the Edo Castle that once stood here. You struggle to break the concrete apart (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find a severed hand holding an object. Gain 1 random Trinket Asset from the deck. You cannot breathe due to smoke in the chamber (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "You find a temple of Cthugha; advance the active Mystery by 1.",
            "Fail": "You inhale; gain 1 Illness Condition."
          }
        },
        "Fail": {
          "intro": "The palace guard interrupt you and demand to know who you are (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "They apologize and vow to explore the chamber on your behalf, retreat Doom by 1.",
            "Fail": "They do not believe your story; gain 1 Detained Condition."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Under the Pyramids",
      "intro": "A derelict building is inhabited by vagrants that the locals call \"hinin\" You believe a treasure s hidden somewhere inside. Resolve the pass effect to fight your way through the hinin; or resolve the fail effect to sneak past them.",
      "choices": {
        "Resolve the pass effect to fight your way through the hinin": {
          "intro": "The people inside are revealed to be monstrous creatures! They try to tear you apart (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "You find what they were protecting; gain 1 Relic Artifact.",
            "Fail": "You barely escape with your life; lose 2 Health."
          }
        },
        "Resolve the fail effect to sneak past them": {
          "intro": "You quietly sneak into the house (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You find what the hinin were guarding; gain 1 Relic Artifact.",
            "Fail": "You are discovered by monstrous creatures! They terrorize you and chase you out of the house; lose 2 Sanity."
          }
        }
      }
    }
  ],
  "Tunguska": [
    {
      "cardId": 1,
      "expansionId": "Eldritch Horror",
      "intro": "A strange color that you've never seen before permeates the air. It crawls like a phosphorescent mist along every surface. You can feel its corrosive effect on your skin, and you struggle to escape the area (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "Behind you, the color flies up into space. You try to interpret what you've seen (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "You're sure the threat has passed; retreat Doom by 1.",
            "Fail": "Your mind cannot accept what you've seen; gain an Amnesia Condition."
          }
        },
        "Fail": {
          "intro": "The ground shakes and you are knocked off your feet. Lose 1 Health and gain a Leg Injury Condition. Gray dust fills the air, but you think you see a light (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You see the color fly up into the air; retreat Doom by 1.",
            "Fail": ""
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "Eldritch Horror",
      "intro": "A small piece of the stone you are standing on crumbles away, revealing a hollowed-out chamber beneath you. You look for a safe way to get inside (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find a temple with scorched humans remains. You try to resist the urge to run away (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "You uncover a long-buried treasure; gain 1 Artifact.",
            "Fail": "The symbols of Cthugha compel you to run away in a mad panic; gain a Paranoia Condition."
          }
        },
        "Fail": {
          "intro": "The ground beneath your feet collapses, and you scramble to avoid being trapped (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You find a mural of Cthugha; gain 2 Clues.",
            "Fail": "A boulder falls on you; gain a Back Injury Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "Eldritch Horror",
      "intro": "As you approach the crater described in Rasputin's notes, toxic fumes pour out of a fissure in the earth. You struggle to stay conscious and continue your descent (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find the remains of the monk's camp; gain 1 Artifact. You then search the crater (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You find traces of the comet; gain 1 Clue.",
            "Fail": "The shattered landscape is difficult to look at; lose 1 Sanity."
          }
        },
        "Fail": {
          "intro": "The fumes burn your lungs and you cough up blood. Gain an Internal Injury Condition. You try to convince your guides to help (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "They rescue you and recover Rasputin's possessions; gain 1 Artifact.",
            "Fail": "Lose 2 Health crawling out on your own."
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "Forsaken Lore",
      "intro": "You encounter a group of Russian monks fleeing persecution. Something about them seems out of place, and you keep a watchful eye on them as you pass (<img src=\"images/Observation.webp\">).",
      "choices": {
        "Pass": {
          "intro": "Seeing their singed robes, you recognize them as Nestarians. You are suddenly surrounded by flames and must jump through the fire to stop them (<img src=\"images/Will.webp\">-1).",
          "choices": {
            "Pass": "Their ritual is interrupted; retreat Doom by 1.",
            "Fail": "You witness their horrific profane rites; lose 1 Sanity."
          }
        },
        "Fail": {
          "intro": "You don't suspect anything until they offer you water. You take a drink and begin suffering the effects of their poison (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "The monks run away in fear; retreat Doom by 1.",
            "Fail": "Your mind and body suffer terribly; lose 2 Sanity and gain a Poisoned Condition."
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "Under the Pyramids",
      "intro": "A gaunt, sickly stranger sees you and runs into a cloud of gray dust. Resolve the pass effect to call after him; or resolve the fail effect to run into the cloud to try to find the man.",
      "choices": {
        "Resolve the pass effect to call after him": {
          "intro": "You call after the stranger, telling him you mean no harm (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "The man emerges and dies holding a strange object; gain 1 Artifact.",
            "Fail": "A grotesque, over-sized beast rams you; gain an Internal Injury Condition."
          }
        },
        "Resolve the fail effect to run into the cloud to try to find the man": {
          "intro": "You run into the cloud looking for the man (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You quickly find his corpse and a strange object; gain 1 Artifact.",
            "Fail": "You spend too long in the gray dust; gain 1 Illness Condition."
          }
        }
      }
    },
    {
      "cardId": 6,
      "expansionId": "Signs of Carcosa",
      "intro": "You encounter a craft built for traveling through space, but the radiation in the area seems to have killed most of the mi-go inside. You look through their equipment, but being in the area makes you feel sick (<img src=\"images/Strength.webp\">).",
      "choices": {
        "Pass": {
          "intro": "You find a map that shows occult events. Gain 1 Clue. You look for more maps (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You use them to coordinate your fight; advance the active Mystery by 1.",
            "Fail": "A mi-go uses a device to disrupt your language skills; impair <img src=\"images/Influence.webp\">."
          }
        },
        "Fail": {
          "intro": "Your illness takes a toll. Lose 1 Health. Before you escape, you speak to a dying mi-go (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "It shares its secrets; retreat Doom by 1.",
            "Fail": "It transmits a message about you to mi-go everywhere; gain 1 Pursuit Condition."
          }
        }
      }
    }
  ]
};
