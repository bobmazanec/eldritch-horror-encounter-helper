deckData['Dream-Quest'] = {
  "The Enchanted Wood": [
    {
      "cardId": 1,
      "expansionId": "The Dreamlands",
      "intro": "You stare into the bright waters of a shimmering pool and see a reflection of yourself back in the waking world. Resolve the pass effect to see what lies beneath the surface; or resolve the fail effect to converse with your reflection about the state of the world.",
      "choices": {
        "Resolve the pass effect to see what lies beneath the surface": {
          "intro": "You sense the pool is a living thing, and you try to communicate with it (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "It understands you and offers a gift that was lost within its depths; gain 1 Artifact.",
            "Fail": {
              "intro": "It calls for help; a Zoog Monster ambushes you!",
              "choices": {
                "Resolved the combat": ""
              }
            }
          }
        },
        "Resolve the fail effect to converse with your reflection about the state of the world": {
          "intro": "Your reflection winks at you, and you initiate a conversation (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "The other you repairs a tear in reality; close 1 Gate of your choice.",
            "Fail": "The reflection steals aspects of your persona; discard 1 Talent Condition."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "The Dreamlands",
      "intro": "You see three stunningly beautiful individuals some distance off the path. They are sitting around a large stone table drinking wine, and you feel compelled to join them despite your better judgment (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You force yourself to look away, examining the ground instead (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You see a treasure discarded by some lost dreamer; gain 1 Artifact.",
            "Fail": "Keeping your eyes pointed down slows your progress; become Delayed."
          }
        },
        "Fail": {
          "intro": "These three seem to follow very obscure rules of etiquette (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "They reward your manners and send you on your way; gain 1 Artifact.",
            "Fail": "Your rudeness is punished; gain a Lost in Time and Space Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "The Dreamlands",
      "intro": "A zoog cautiously approaches you. Using what little knowledge of the creature's language you possess, you ask permission to speak to the Council of Zoogs (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "The Council of Zoogs agrees to help you. Close 1 Gate of your choice on any space. The zoogs seem to be trying to keep you distracted (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "",
            "Fail": "You wake up in the forest missing important memories; gain an Amnesia Condition and discard 1 Clue."
          }
        },
        "Fail": {
          "intro": "The zoog runs away. You chase it, passing portals to other worlds (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You see one that is familiar; close 1 Gate of your choice on any space.",
            "Fail": "You stumble through a portal; gain a Lost in Time and Space Condition."
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "The Dreamlands",
      "intro": "You watch carefully to see which mushroom the zoogs eat. Desperate for food, you sample some of them, but find that their effects make it difficult to keep your thoughts in order (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You mind is subtly altered by the mushrooms. Gain 1 Talent Condition. You now see arcane symbols in the forest (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "They lead you to a treasure; gain 1 Artifact.",
            "Fail": "You wander the forest in a stupor; lose 2 Sanity and gain 1 Madness Condition."
          }
        },
        "Fail": {
          "intro": "Strange illusions pass before your eyes (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "The images prove instructive; gain 1 Talent Condition.",
            "Fail": "You see no difference between lunacy and destiny; gain 3 Madness Conditions unless you advance the Omen by 1."
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "The Dreamlands",
      "intro": "A zoog has gotten itself stuck in the frame of a large stone door embedded into the floor of the forest. You try to open the door enough for the zoog to get free (<img src=\"images/Strength.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "The stone door shifts, and a strange mist emerges, altering your mind. Gain 1 Talent Condition. You ask the zoog for help (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "It shares what it knows; gain 1 Task Unique Asset.",
            "Fail": {
              "intro": "It attacks; a Zoog Monster ambushes you!",
              "choices": {
                "Resolved the combat": ""
              }
            }
          }
        },
        "Fail": {
          "intro": "An enormous arm pulls the zoog through the opening. Lose 1 Sanity. You briefly see the Symbol of Koth beyond the door (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "A new part of your mind is unlocked; gain 1 Talent Condition.",
            "Fail": "Pain overwhelms you; lose 2 Health."
          }
        }
      }
    }
  ],
  "The Moon": [
    {
      "cardId": 1,
      "expansionId": "The Dreamlands",
      "intro": "In one of the moon's shadowy forests, a moon-beast has you cornered. Resolve the pass effect to pray to Nodens to bestow a gift; or resolve the fail effect to banish the creature to another dimension.",
      "choices": {
        "Resolve the pass effect to pray to Nodens to bestow a gift": {
          "intro": "A nightgaunt descends and scoops you into the sky. You find it difficult to navigate while riding this strange creature (<img src=\"images/Observation.webp\">-1).",
          "choices": {
            "Pass": "You land next to a rare treasure; gain 1 Artifact.",
            "Fail": "You become hopelessly lost; gain a Lost in Time and Space Condition."
          }
        },
        "Resolve the fail effect to banish the creature to another dimension": {
          "intro": "A Moon-beast monster ambushes you!",
          "choices": {
            "Resolved the combat": {
              "intro": "",
              "choices": {
                "Passed the <img src=\"images/Will.webp\"> test": "It is momentarily confused and you order it to obey you in the name of Nyarlathotep; close 1 Gate of your choice on any space.",
                "Failed the <img src=\"images/Will.webp\"> test": ""
              }
            }
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "The Dreamlands",
      "intro": "You follow a dark winding cavern down to the inky black waters known as the Lake of Ubboth. There you recite an ancient chant to invoke the power of Mnomquah (<img src=\"images/Lore.webp\">).",
      "choices": {
        "Pass": {
          "intro": "The tremendous lizard like creature emerges from the water. It is terrible to behold (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "It grants you a favor; gain 1 Artifact.",
            "Fail": "The monstrous sight shatters your mind; gain 1 Madness Condition."
          }
        },
        "Fail": {
          "intro": "The Lord of the Black Lake does not appear, but the cavern begins to collapse (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "The tremors uncover a treasure, gain 1 Artifact.",
            "Fail": "The falling stones leave you badly hurt; lose 2 Health and gain 1 Injury Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "The Dreamlands",
      "intro": "You find a hidden shrine to Azathoth, whose worship is strictly forbidden among the moon-beasts and is punishable by death. You believe you can use the altar to enact a powerful ritual (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You invoke Azathoth to close a bridge between worlds. Close 1 Gate of your choice on any space. The outer god's power begins to drive you to self-destruction (<img src=\"images/Will.webp\">-1).",
          "choices": {
            "Pass": "",
            "Fail": "You carve ritualistic symbols into your flesh; lose 1 Health and 1 Sanity."
          }
        },
        "Fail": {
          "intro": "You report the shrine to the men of Leng (<img src=\"images/Influence.webp\">).",
          "choices": {
            "Pass": "They reward your diligence; close 1 Gate of your choice on any space.",
            "Fail": "They do not believe you and strip you of your belongings as punishment for lying; discard 2 Item possession."
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "The Dreamlands",
      "intro": "You have found your way into the Tower of Nyarlathotep. The unsettling knowledge that the Crawling Chaos himself lurks somewhere in these halls shakes your resolve (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "The tower contains books on every topic. Gain 1 Talent Condition. You discern an occult pattern to the layout of the tower (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "You find your way to the top; gain 1 Artifact.",
            "Fail": {
              "intro": "You find yourself outside; a Moon-beast Monster ambushes you!",
              "choices": {
                "Resolved the combat": ""
              }
            }
          }
        },
        "Fail": {
          "intro": "You search desperately for an exit (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You escape with alien voices in your head; gain 1 Talent Condition.",
            "Fail": "Nyarlathotep finds you and offers to spare your mind for a price; lose 2 Sanity unless you spawn 1 Gate."
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "The Dreamlands",
      "intro": "An enormous black galley sails across the dark sky and eventually comes to rest in the Great Lunar Sea. The men of Leng use these ships to transport their cargo. You attempt to sneak on board the ship (<img src=\"images/Observation.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You find strange rubies that whisper secrets. Gain 1 Talent Condition. You ask a guard to unlock the ship's safe (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "You find a map; gain 1 Task Unique Asset.",
            "Fail": "The guard demands a bribe; discard 1 Item possession."
          }
        },
        "Fail": {
          "intro": "You are forced to hide next to a corpse. Lose 1 Sanity. The dead man left behind an encrypted journal (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "You have an epiphany while reading the unusual text; gain 1 Talent Condition.",
            "Fail": "The journal becomes red-hot and burns you; lose 1 Health."
          }
        }
      }
    }
  ],
  "The Underworld": [
    {
      "cardId": 1,
      "expansionId": "The Dreamlands",
      "intro": "You hear the familiar voice of a friend calling to you from the darkness. Resolve the pass effect to go toward the sound; or resolve the fail effect to convince the person to come to you.",
      "choices": {
        "Resolve the pass effect to go toward the sound": {
          "intro": "The voice draws you into the Vale of Pnath (<img src=\"images/Will.webp\">-1).",
          "choices": {
            "Pass": "The see that your friend is now a ghoul, but he offers you a gift; gain 1 Artifact.",
            "Fail": "You are paralyzed with fear as a dhole devours your friends; lose 1 Sanity and discard 1 Ally Asset."
          }
        },
        "Resolve the fail effect to convince the person to come to you": {
          "intro": "You call out through the darkness (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "You see he is now a ghoul but he can help you; close 1 Gate of your choice on any space.",
            "Fail": "Your friend tells you horrors that shake you to your core; lose 2 Sanity unless you discard 1 Talent Condition."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "The Dreamlands",
      "intro": "As you ascend the Peaks of Thok, you hear gurgling voices ahead of you. You are certain that there are ghouls nearby and it takes all of your resolve to keep moving forward (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": {
          "intro": "A decrepit form lunges toward you. A Ghoul Monster ambushes you!",
          "choices": {
            "Resolved the combat": {
              "intro": "",
              "choices": {
                "Passed the <img src=\"images/Strength.webp\"> test": "You steal an object that the ghoul kept in a moldy canvas bag; gain 1 Artifact.",
                "Failed the <img src=\"images/Strength.webp\"> test": "The ghoul claims a nearby victim; discard 1 Ally Asset."
              }
            }
          }
        },
        "Fail": {
          "intro": "You descend into the Vale of Pnath. Among the bones and refuse you determine what might be of worth (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "You find a treasure; gain 1 Artifact.",
            "Fail": "You should not have disturbed these remains; gain 1 Bane Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "The Dreamlands",
      "intro": "You are surrounded by gugs. The monstrous giants will most certainly kill you if you cannot get help. Desperate to escape, you hope that Nodens' servants will respond to your mystic summons (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "A nightgaunt flies you away and helps you fix the tears in reality. Close 1 Gate of your choice on any space. The flight through the cosmos overwhelms your mind (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "",
            "Fail": "You pass out; gain a Lost in Time and Space Condition."
          }
        },
        "Fail": {
          "intro": "The abyssal creature heeds your call. A Nightgaunt Monster ambushes you!",
          "choices": {
            "Resolved the combat": {
              "intro": "",
              "choices": {
                "Passed the <img src=\"images/Strength.webp\"> test": "You climb onto it and fly away; close 1 Gate of your choice on any space.",
                "Failed the <img src=\"images/Strength.webp\"> test": "You never fully recover; discard all of your Improvement tokens."
              }
            }
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "The Dreamlands",
      "intro": "The vaults of Zin are a winding maze of tunnels. The endless twists and turns, as well as the constant attacks by ghasts, push you to the brink of complete and utter despair (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "The ordeal has made you stronger. Gain 1 Talent Condition. You attempt to follow a map (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "You find a rare treasure; gain 1 Artifact.",
            "Fail": "The ghasts leave you bleeding; lose 2 Health and gain 1 Injury Condition."
          }
        },
        "Fail": {
          "intro": "Your mind is slipping. Gain 1 Madness Condition. You try to capture a lost ghoul (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "It tells you what you want to know; gain 1 Talent Condition.",
            "Fail": "It warns the entire Underworld about you; advance Doom by 1."
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "The Dreamlands",
      "intro": "You walk among a series of strange monoliths, a graveyard for the creature who were the forebears of the gugs. You try to decipher the strange symbols and images carved into the stone (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "The carvings open your mind to a new way of thinking. Gain 1 Talent Condition. You leave a small offering (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "A panel in the stone opens, revealing a map; gain 1 Task Unique Asset.",
            "Fail": "The earth begins to shake; lose 2 Sanity."
          }
        },
        "Fail": {
          "intro": "The stones are abhorrent to look at. Lose 1 Sanity. You see a ghoul living among the stones (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You can imitate its expertise; gain 1 Talent Condition.",
            "Fail": "You watch until the ghoul devours a carcass; lose 2 Sanity."
          }
        }
      }
    }
  ],
  "Unknown Kadath": [
    {
      "cardId": 1,
      "expansionId": "The Dreamlands",
      "intro": "The great god Karakal will hear your plea only if you cross the stones that burn eternally. Resolve the pass effect to leap across the lava; or resolve the fail effect to harness the magical power of Kadath.",
      "choices": {
        "Resolve the pass effect to leap across the lava": {
          "intro": "You leap as far as you can (<img src=\"images/Strength.webp\">-1).",
          "choices": {
            "Pass": "You land safely on the other side and the god rewards you; gain 1 Artifact.",
            "Fail": "You fall short and suffer grievous wounds; gain 2 Injury Conditions."
          }
        },
        "Resolve the fail effect to harness the magical power of Kadath": {
          "intro": "The room crackles with arcane energy (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "You magically appear on the other side and the gods rewards you; close 1 Gate of your choice on any space.",
            "Fail": "You simply vanish; gain a Lost in Time and Space Condition."
          }
        }
      }
    },
    {
      "cardId": 2,
      "expansionId": "The Dreamlands",
      "intro": "You invoke the power of those who dwell beyond Kadath. After employing the necessary angles and formulae you call forth those who dwell in Yr and Nhhngr. Their forms are truly repulsive (<img src=\"images/Will.webp\">).",
      "choices": {
        "Pass": {
          "intro": "Once summoned, these beings must be bound (<img src=\"images/Lore.webp\">).",
          "choices": {
            "Pass": "They grant you the help you seek; gain 1 Artifact.",
            "Fail": "Your binding fails and they punish you for your impudence; lose 2 Health."
          }
        },
        "Fail": {
          "intro": "Helpless, you beg for mercy (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "They accept your abasement and reward it; gain 1 Artifact.",
            "Fail": "These horrors give you an ultimatum; lose 2 Health and 2 Sanity unless you gain a Dark Pact Condition."
          }
        }
      }
    },
    {
      "cardId": 3,
      "expansionId": "The Dreamlands",
      "intro": "In the Cold Waste, you find a band of explorers convinced that they are in the Antarctic. You believe there is some magic in the area that can be used to manipulate time and space (<img src=\"images/Lore.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You return the men home and seal a breach between worlds. Close 1 Gate of your choice on any space. Using such power requires a strong mind (<img src=\"images/Will.webp\">).",
          "choices": {
            "Pass": "",
            "Fail": "It takes a terrible toll; gain 1 Injury Condition and 1 Madness Condition."
          }
        },
        "Fail": {
          "intro": "You try to retrace the men's path (<img src=\"images/Observation.webp\">).",
          "choices": {
            "Pass": "You find the doorway and seal it after the men return to Earth; close 1 Gate of your choice on any space.",
            "Fail": "Your soul is scarred by the death of the men; gain 1 Bane Condition."
          }
        }
      }
    },
    {
      "cardId": 4,
      "expansionId": "The Dreamlands",
      "intro": "Armed servants surround a man in pharaoh's garb on all sides. Regal and terrifying, the man cries out \"Bow down to me!\" You feel compelled to do so along with his followers (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You escape into the castle and find books that enhance your abilities. Gain 1 Talent Condition. You suspect there is a secret chamber (<img src=\"images/Lore.webp\">-1).",
          "choices": {
            "Pass": "You find it; gain 1 Artifact.",
            "Fail": {
              "intro": "You are caught; a Cultist Monster ambushes you!",
              "choices": {
                "Resolved the combat": ""
              }
            }
          }
        },
        "Fail": {
          "intro": "As you kneel, the servant Yogash challenges you to combat (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "You are rewarded; gain 1 Talent Condition.",
            "Fail": "You beg for mercy; lose 3 Health unless you gain a Dark Pact Condition."
          }
        }
      }
    },
    {
      "cardId": 5,
      "expansionId": "The Dreamlands",
      "intro": "Desperate for water, you drink deeply from the Fountain of Alath-Zann. The surface of the water begins to show you images of potential futures, including truly horrific possibilities (<img src=\"images/Will.webp\">-1).",
      "choices": {
        "Pass": {
          "intro": "You forsee learning new abilities. Gain 1 Talent Condition. You toss coins into the water (<img src=\"images/Influence.webp\">-1).",
          "choices": {
            "Pass": "You see a worthy future; gain 1 Task Unique Asset.",
            "Fail": "You foresee losing an important book; lose 1 Sanity and discard 1 Tome possession."
          }
        },
        "Fail": {
          "intro": "Gain 1 Madness Condition. You irrationally lunge into the water, almost drowning (<img src=\"images/Strength.webp\">).",
          "choices": {
            "Pass": "You emerge with the wisdom of your own future; gain 1 Talent Condition.",
            "Fail": {
              "intro": "Your splashing attracts attention; a Cultist Monster ambushes you!",
              "choices": {
                "Resolved the combat": ""
              }
            }
          }
        }
      }
    }
  ]
};
