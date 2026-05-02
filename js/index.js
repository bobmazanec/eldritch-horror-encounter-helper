'use strict';

const Core = 0;
const ForsakenLore = 1;

const deckData = {
  America: [
    {
      expansionId: Core,
      cardId: 1,
      Arkham: {
        intro: "In the restricted section of Miskatonic University's library, you study an esoteric tome. Gain 1 Incantation Spell. You try to decode a note written in the margin; test Lore.",
        choices: {
          Pass: "",
          Fail: "The words put strange visions into your mind; gain a Hallucinations Condition."
        }
      },

      "Buenos Aires": {
        intro: "In an ancient underground chamber, you study strange scientific and magic paraphernalia once used by the Serpent Men; test Lore.",
        choices: {
          Pass: "You manipulate the devices to transform yourself and gain a Blessed Condition.",
          Fail: "The devices remain utterly alien; lose 2 Sanity."
        }
      },

      "San Francisco": {
        intro: "Inspector Jack Manion is looking for information about the Tongs in Chinatown. If you can help him, he'll teach you the basics of police work in exchange. You may spend 1 Clue to improve Observation.",
      }
    }, {
      cardId: 2,
      expansionId: Core,
      Arkham: {
        intro: "During the night, you have a nightmare about the old witch, Keziah Mason. In the dream, she shares her power with you; gain 1 Incantation Spell. When you wake up, you fear that the old witch will someday ask you for a favor in return; test Will+1.",
        choices: {
          Pass: "",
          Fail: "Gain a Paranoia Condition."
        }
      },

      "Buenos Aires": {
        intro: "You sneak into the temple and overhear the rough croaking of deep ones chanting. You recognize familiar elements to the words they are intoning; Test Lore.",
        choices: {
          Pass: "Gain 1 Ritual Spell.",
          Fail: "It's nothing more than horrific noise; lose Sanity 1 Sanity."
        }
      },

      "San Francisco": {
        intro: "You find the husk of a squid-like creature in a tunnel. Just seeing it terrifies you; test Will-1",
        choices: {
          Pass: "You identify the cthonian; improve 1 skill of your choice as scientists clamor to contribute to its study.",
          Fail: "You run headlong through the tunnel; gain a Leg Injury Condition."
        }
      }
    }, {
      cardId: 4,
      expansionId: Core,
      Arkham: {
        intro: "An anonymous patient in the asylum pleads with you to share what you've learned. You may spend 1 Clue to share what you know.",
        choices: {
          "Share what you know": "The man begins chanting in a long-dead language; gain 1 Incantation Spell.",
          "Don't": ""
        }
      },

      "Buenos Aires": "A student has been studying the university's copy of the Necronomicon and is eager to share what he's learned in exchange for hearing what you know. You may spend 1 Clue to share what you know and gain 1 Ritual Spell.",

      "San Francisco": {
        intro: "You speak to a military prisoner on Alcatraz Island. He tells you his story of deserting after encountering a horrific creature; test Will.",
        choices: {
          Pass: "He thanks you for believing him and blesses your name; gain a Blessed Condition.",
          Fail: "The story throws you into a hysterical fit, and the guards arrest you; gain a Detained Condition."
        }
      }
    }, {
      cardId: 7,
      expansionId: Core,
      Arkham: "The administrators of Arkham's Historical Society take great pains to show you their extensive collection of historical documents. You may become Delayed to gain 2 Spells.",

      "Buenos Aires": "At the hospital you find a bald, old man with leathery skin and a flat face. He speaks very slowly, but his story is fascinating. You may become Delayed to gain 2 Spells as he recounts all the details of his time worshiping the Father of Serpents.",

      "San Francisco": {
        intro: "The Examiner hires you to spend a night in the Winchester Mystery House. They provide you with experts in detecting the supernatural. Improve Observation. The odd architecture and the building's history threaten to unhinge your mind as the evening passes; test Will-1.",
        choices: {
          Pass: "",
          Fail: "Lose Sanity 2 Sanity."
        }
      }
    }
  ],

  "Asia/Australia": [
    {
      cardId: 1,
      expansionId: Core,
      Shanghai: {
        intro: "You search through old copies of The Shanghai Courier to find strange or unexplained stories; test Observation.",
        choices: {
          Pass: "You discover a pattern of arcane activity in the city; improve Lore.",
          Fail: "Lose Sanity 1 Sanity as no pattern emerges from all this horror."
        }
      },

      Sydney: {
        intro: "You dream of crossing a vast desert hunted by an enormous winged creature. In the dream, you turn to face your fears; test Will",
        choices: {
          Pass: "You wake up feeling more alive than ever; improve Strength.",
          Fail: "The fear lingers; lose 1 Sanity."
        }
      },

      Tokyo: {
        intro: "You ask the enigmatic Dragon Lords to rid the world of potential threats to Japan; test Influence.",
        choices: {
          Pass: "Each Monster on a space of your choice loses Health 2 Health as the mysterious group casts their spells.",
          Fail: "The Dragon Lords lash out at you; gain a Back Injury Condition."
        }
      }
    }, {
      cardId: 2,
      expansionId: Core,
      Shanghai: {
        intro: "You may become Delayed to explore some submerged pyramids off the coast of Okinawa.",
        choices: {
          "Explore some submerged pyramids off the coast of Okinawa": 'You discover ancient writing that claims to "harm one\'s enemies;" 1 Monster of your choice on any space loses Health 3 Health.',
          "Don't": ""
        }
      },

      Sydney: {
        intro: "You may become Delayed to explore the depths of the Great Barrier Reef.",
        choices: {
          "Explore the depths of the Great Barrier Reef": 'You discover a hidden chamber filled with ancient artifacts; gain 2 Spells.',
          "Don't": ""
        }
      },

      Tokyo: {
        intro: "You may become Delayed to investigate the mysterious disappearances in the city.",
        choices: {
          "Investigate the mysterious disappearances in the city": "You uncover a conspiracy involving the Dragon Lords; gain 1 Clue.",
          "Don't": ""
        }
      }
    }
  ],

  Europe: [
    {
      cardId: 1,
      expansionId: Core,
      Istanbul: {
        intro: "Inside the loud hustle and bustle of the Grand Bazaar, you negotiate to find a skilled instructor to tutor you; test Influence-1. ",
        choices: {
          Pass: "Improve 1 skill of your choice.",
          Fail: "The instructor teaches you nothing; gain a Debt Condition to pay for his lessons."
        }
      },

      London: {
        intro: "The Silver Twilight Lodge is locked up tight. You look over the old building for a possible entrance; test Observation.",
        choices: {
          Pass: "The Lodge members are delighted by your ingenuity and offer their favor; gain a Blessed Condition.",
          Fail: "You waste fruitless hours searching and become Delayed."
        }
      },

      Rome: {
        intro: "The Vatican Library is so vast! You ask a librarian for a recommendation; test Influence.",
        choices: {
          Pass: "He leads you to a codex that recounts how worshipers of Shub-Niggurath were driven out of Rome, and the story renews your confidence; improve Will.",
          Fail: ""
        }
      }
    }, {
      cardId: 2,
      expansionId: Core,
      Istanbul: "People from every walk of life can be found enjoying the cleansing steam of the Turkish baths. Inside, you'll eventually find an expert in any give field. You may become Delayed to improve 1 skill of your choice.",

      London: {
        intro: "Inside the Herefordshire Asylum, a patient asks you if you've seen the Yellow Sign. You listen to his story of the King in Yellow; test Observation.",
        choices: {
          Pass: "Spawn Clue 2 Clues.",
          Fail: "His gibberish imprints itself onto your subconscious; gain a Hallucinations Condition."
        }
      },

      Rome: {
        intro: "You have an inspirational dream in which you are a proud Roman quaestor. Improve Will. Your reverie is interrupted by a band of small, primitive men running wild outside. You try to negotiate with this lost tribe of Miri Nigri; test Influence.",
        choices: {
          Pass: "",
          Fail: "Lose Health 1 Health and 1 Sanity as they continue their pursuit of some ancient grudge."
        }
      }
    }
  ],

  Expedition: {
    "The Amazon": [
      {
        expansionId: Core,
        cardId: 1,
        intro: "You see the vine-covered temple ahead of you, but you're going to have to fight your way through a thick tangle of venomous snakes between yourself and the entrance; test Strength.",
        choices: {
          Pass: {
            intro: "You enter the Temple of Yig. Retreat Doom by 1. Strange runes are inscribed on the wall in a serpentine design. You must interpret their meaning to avoid their hypnotic effect; test Lore.",
            choices: {
              Pass: "",
              Fail: "The runes' hypnotic effect takes hold; gain a Paranoia Condition."
            }
          },
          Fail: {
            intro: "You've been bit! Lose Health 1 Health and gain an Internal Injury Condition. Something about the snakes is odd. You try to identify what makes them unique; test Observation-1.",
            choices: {
              Pass: "You notice a crescent on the snake's head; retreat Doom by 1.",
              Fail: ""
            }
          }
        }
      }, {
        cardId: 2,
        expansionId: Core,
        intro: "As you slip into a deep trance and touch the odd stone, the jungle around you subtle changes in appearance. You look for hints regarding this new jungle terrain; test Observation.",
        choices: {
          Pass: {
            intro: "You are in some other dimension. You use your arcane skills to return home; test Lore.",
            choices: {
              Pass: "You wake up back in the jungle next to a strange item; gain 1 Artifact.",
              Fail: "The journey back unsettles you; lose 2 Sanity."
            }
          },
          Fail: {
            intro: "A towering, larva-like thing grabs you with its tendrils. You struggle fiercely to break free; test Strength-1.",
            choices: {
              Pass: "You retrieve a sample of the creature; gain 2 Clues.",
              Fail: "It throws you high into the air; gain a Back Injury Condition."
            }
          }
        }
      }            
    ],

    Antarctica: [
      {
        cardId: 1,
        expansionId: Core,
        intro: "Flying over the area, you see evidence of an ancient stone city. You land your plane as close as you can and climb across the ice to reach the strange architecture; test Strength).",
        choices: {
          Pass: {
            intro: "The murals inside the city tell the story of the elder things. Retreat Doom Doom by 1. However, your studies take a toll on your mind; test Will",
            choices: {
              Pass: "",
              Fail: "You block everything you've learned from your mind; gain an Amnesia Condition."
            }
          },
          Fail: {
            intro: "You fall through the ice into a stone chamber. Lose Health 1 Health and gain a Back Injury Condition. You search the dark chamber; test Observation-1.",
            choices: {
              Pass: "You find the husk of an elder thing for study; retreat Doom by 1.",
              Fail: ""
            }
          }
        }
      }, {
        cardId: 2,
        expansionId: Core,
        intro: "You hear a faint sound echoing up from the caves that lead down in to the darkness. You listen carefully to discern the sound's origin; test Observation.",
        choices: {
          Pass: {
            intro: "You identify the sound of shoggoths. You escape, but can barely keep yourself conscious waiting for a rescue; test Will.",
            choices: {
              Pass: "You spot something on the cave floor; gain 1 Artifact.",
              Fail: "You pass out and hear the sounds of shoggoths everywhere you go; gain a Hallucinations Condition."
            }
          },
          Fail: {
            intro: '"Tekeli-li! Tekeli-li!" You recognize it too late. The shoggoths overwhelm you; test Strength-1.',
            choices: {
              Pass: "You overcome the threat; gain 2 Clues.",
              Fail: "You escape by jumping off a ledge; gain a Leg Injury Condition."
            }
          }
        }
      }
    ]
  },

  General: [
    {
      cardId: 1,
      expansionId: Core,
      City: {
        intro: "You make sure no one is watching before sneaking out of the shop with your stolen goods; test Observation.",
        choices: {
          Pass: "Gain 1 Item Asset from the reserve or 1 random Item Asset from the deck.",
          Fail: "You are caught by the store owner and arrested; gain a Detained Condition."
        }
      },

      Sea: {
        intro: "You find the floating detritus of some sunken ship and search for any survivors or salvageable objects; test Observation.",
        choices: {
          Pass: "You discover a floating trunk; gain 1 Artifact.",
          Fail: "You waste hours without result; become Delayed."
        }
      },

      Wilderness: "The remains of a long-dead explorer lie before you. Some of his gear still seems salvageable, and he won't miss it. You dig through the dead man's pockets; gain 1 random Item Asset from the deck and lose Sanity 1 Sanity."
    }, {
      cardId: 8,
      expansionId: Core,
      City: {
        intro: "A night of drinking and good cheer helps raise your spirits. Recover Sanity 2 Sanity. While you are celebrating, you hardly notice that you are being robbed; test Observation",
        choices: {
          Pass: "",
          Fail: "Discard 1 Item possession."
        }
      },

      Sea: {
        intro: "You find a terrified stowaway aboard the ship. You attempt to comfort him and coax him into telling you his story; test Influence.",
        choices: {
          Pass: "He tells you about horrifying beasts and unbelievable worlds; gain 1 Clue.",
          Fail: ""
        }
      },

      Wilderness: {
        intro: "Past where your campfire allows you to see, you hear voices chanting. You try to draw a protective sigil in the ground; test Lore.",
        choices: {
          Pass: "The next morning you find evidence of cult activity that you can use to identify the cult members; gain 1 Clue or improve Influence.",
          Fail: "Gain a Cursed Condition."
        }
      }
    }
  ],

  OtherWorld: [
    {
      cardId: 7,
      expansionId: Core,
      location: "The Dreamlands",
      intro: "In the cavern of flame, the bearded priests Nasht and Kaman-Thah warn you that it is too dangerous to continue. You insist that you possess the knowledge you need and are resolved to enter the Dreamlands; test Will-1. Roll 1 additional die for each Clue you have.",
      choices: {
        Pass: {
          intro: "After gaining access to the Dreamlands, you find yourself fighting moonbeasts on a black galley sailing to the moon; test Strength.",
          choices: {
            Pass: "You steal their treasure and area able to barter with it; close this Gate.",
            Fail: "You become lost in a forest on the moon; lose Health 2 Health and become Delayed."
          }
        },
        Fail: "The gods of dreams exile you back to the waking world and punish you for your overreaching ambition. Your dream and the waking world become indistinguishable. Become Delayed and gain a Hallucinations Condition."
      }
    }, {
      cardId: 10,
      location: "Yuggoth",
      intro: "You discover a waxen mask and artificial hands. Your mind reels as you realize that the old man you had spoken to earlier was actually some terrible creature disguised as a human. Test Will.",
      choices: {
        Pass: {
          intro: "You realize now that the old man's words carry a secondary meaning. You attempt to decrypt what he said. Test Lore.",
          choices: {
            Pass: "You understand the man's implied instructions; close this Gate.",
            Fail: "His words lead you in circles; become Delayed."
          }
        },
        Fail: {
          intro: "What was the nature of that blasphemous horror behind the mask? You consult your notes, trying to find what might disguise itself this way. Test Lore-1.",
          choices: {
            Pass: "You find the data you need; close this Gate.",
            Fail: "Fear of the unknowable easts at your thoughts; lose Sanity 3 Sanity."
          }
        }
      }
    }, {
      cardId: 15,
      location: "Yuggoth",
      intro: "You discover a fetid creature with wings and webbed feet. The beast is strange, like something from your wildest dreams. You may spend 1 Clue to resolve the pass effect. If you do not spend the Clue, resolve the fail effect.",
      choices: {
        "Resolve the pass effect": {
          intro: "You believe you've read of a way to use this beast to travel through space; test Lore",
          choices: {
            Pass: "You remember that by drinking space-mead you can safely use this byakhee to return home; close this Gate.",
            Fail: "You drink something you shouldn't have; gain a Hallucinations Condition."
          }
        },
        "Resolve the fail effect": {
          intro: "The creature is terrifying, but if you can keep your calm, you will be able to overpower it; test Will.",
          choices: {
            Pass: "You subdue the creature and use it to return home; close this Gate.",
            Fail: "Lose Health 1 Health."
          }
        }
      }
    }, {
      cardId: 55,
      location: "Plateau of Leng",
      intro: "Exploring a crude stone hut, you are discovered by a brutish man with horns and cloven hooves. He corners you, threatening to deliver you to the moon-beasts. You try to bribe the strange man to let you go; test Influence - 1.",
      choices: {
        Pass: {
          intro: "The creature greedily accepts your offer. He tells you how to return home and destroy the doorway between worlds. Close this Gate. As he guides you, he secretly tries to steal some of your belongings. Test Observation.",
          choices: {
            Pass: "",
            Fail: "Lose Sanity 1 Sanity and discard 1 Item possession."
          }
        },
        Fail: {
          intro: [
            "You are thrown onto a slave ship. Lose Sanity 2 Sanity.",
            "A sailor offers to free you in exchange for secrets. You may spend Clue 2 Clues to close this Gate."
          ],
          choices: {
            "Close this Gate": "",
            "Don't": "You escape but cannot recall how; gain an Amnesia Condition."
          }
        }
      }
    }
  ],

  Research: {
    Azathoth: [
      {
        expansionId: Core,
        cardId: 1,
        City: {
          intro: "Inside a warehouse, you hear a clanging sound and discover a creature that resembles a metallic crate walking around on several legs. You try to follow the thing back to the cult's lair; test Observation-1.",
          choices: {
            Pass: "Gain this Clue and 1 additional Clue.",
            Fail: ""
          }
        },

        Sea: {
          intro: "You overhear the navigator say that the stars are not as they should be. The ship is utterly lost. You believe you understand the significance of the new alignment of stars; test Lore.",
          choices: {
            Pass: "Gain this Clue and 1 additional Clue.",
            Fail: "You become Delayed."
          }
        },

        Wilderness: {
          intro: "A meteor exploded in the air, scattering a glowing green powder. You try to find a sufficient amount of the compound; test Observation-1.",
          choices: {
            Pass: "Gain this Clue and move the Omen token to any space on the track without advancing Doom.",
            Fail: "You are exposed to the terrible energy emanating from the substance; lose Health 1 Health."
          }
        }
      }, {
        cardId: 2,
        expansionId: Core,
        City: {
          intro: "A few hours before the performance of the opera Massa di Requiem per Shuggay you have a chance to examine the libretto; test Lore",
          choices: {
            Pass: "You recognize that it's a ritual that honors Azathoth and stop the performance; gain this Clue.",
            Fail: "The performance calls to Azathoth; place 1 Eldritch token on the green space of the Omen track."
          }
        },

        Sea: {
          intro: "Your ship is destroyed by a glowing rock that fell from the sky! Gain this Clue. You struggle to reach wreckage that can keep you afloat; test Strength",
          choices: {
            Pass: "",
            Fail: "the undertow pulls you underwater; lose Health 2 Health."
          }
        },

        Wilderness: {
          intro: "Mi-go have dug up the meteor that you were seeking. Curious, you attempt to spy on them; test Observation.",
          choices: {
            Pass: "You see them use the stones as a power source; gain this Clue and 1 additional Clue.",
            Fail: "They shoot you with a weapon that leaves you unconscious for hours; gain an Amnesia Condition."
          }
        }
      }
    ],

    "Yog-Sothoth": [
      {
        cardId: 1,
        expansionId: Core,
        City: {
          intro: "Randolph Carter claims that the Silver Twilight Lodge stole a unique family treasure. You investigate the local Lodge; test Observation.",
          choices: {
            Pass: "You gain the opportunity to examine the stolen treasure; gain this Clue and you may discard a Spell to gain the Silver Key Artifact.",
            Fail: "The Lodge frames you for the theft; gain a Detained Condition."
          }
        },

        Sea: {
          intro: "A strange fog covers the water, but no one else seems to see it; test Observation",
          choices: {
            Pass: "You find that the fog originates from a circle of stones on the beach of a small island; gain this Clue.",
            Fail: "The mist impairs your vision; discard this Clue unless you discard 1 Spell."
          }
        },

        Wilderness: {
          intro: "Talking to one of the locals, you realize that his village and its surrounding farms are inhabited by worshipers of Yog-Sothoth. A Cultist Monster ambushes you!",
          choices: {
            "Resolved combat encounter": {
              choices: {
                "Defeated it": "You manage to reach safety; gain this Clue.",
                "Did not defeat it": ""
              }
            }
          }
        }
      }, {
        cardId: 2,
        expansionId: Core,
        City: {
          intro: "An old man approaches you and begs you to make a solemn vow to deliver a book to his grandson, Wilbur, in a town called Dunwich. You may gain a Dark Pact Condition to gain this Clue and the Necronomicon Artifact.",
          choices: {
            "Gain this Clue and the Necronomicon Artifact": "",
            "Don't": "Discard this Clue."
          }
        },

        Sea: {
          intro: "You see a white ship on the horizon, its sails apparently unaffected by the strong winds you feel racing across the waves. You use a telescope to examine the craft; test Observation-1.",
          choices: {
            Pass: "You see the ship passing through a fog bank into another world; gain this Clue and 1 additional Clue.",
            Fail: ""
          }
        },

        Wilderness: {
          intro: "You watch several mi-go operate alien technology. Gain this Clue. If you have at least 1 Spell, the mi-go are suddenly aware of your presence and turn their strange devices toward you; test Observation",
          choices: {
            Pass: "",
            Fail: "Their devices erode your sense of reason; lose 1 Sanity and gain a Paranoia Condition."
          }
        }
      }
    ]
  },

  Special: {
    byAncientOne: {
      "Yog-Sothoth": {
        "The Key and the Gate": [
          {
            cardId: 1,
            expansionId: Core,
            intro: "A mass of glowing spheres, mouths, and tentacles burst forth from the portal. You feel a terrible intelligence searching your mind for signs of corruption. If you have a Dark Pact Condition, you are devoured. The Lurker then fills your thoughts with forbidden knowledge; test Will-1.",
            choices: {
              Pass: {
                intro: "You exercise extreme mental discipline to regain control of your mind. By examining the images the Lurker has chosen to reveal, you believe that you can bind it between dimensions; test Lore.",
                choices: {
                  Pass: {
                    intro: "You may discard 1 Spell to place 1 Eldritch token on the Ancient One sheet.",
                    choices: {
                      "Place 1 Eldritch token on the Ancient One sheet": "",
                      "Don't": "Lose 3 Sanity."
                    }
                  },
                  Fail: "Lose Sanity 3 Sanity."
                }
              },
              Fail: [
                "In one horrifying flash, your mind is flooded with knowledge of all places and all times as your molecules are torn apart.",
                "You are devoured."
              ]
            }
          }, {
            cardId: 2,
            expansionId: Core,
            intro: "Yog-Sothoth's avatar 'Umr-At-Tawil, stands before the Ultimate Gate. He is a tall figure, wrapped in gray fabric, and you can hear his thoughts thundering in your head. He warns you to proceed no further if you are afraid; test Will-1.",
            choices: {
              Pass: {
                intro: "'Umr-At-Tawil guides you through the gates to encounter Yog-Sothoth; test Influence. You may spend any number of Clues to add 1 success to your test result for each Clue spent.",
                choices: {
                  "Your test result is 3 or greater": "You are allowed to return home; place Eldritch token 1 Eldritch token on the Ancient One sheet.",
                  "Your test result is less than 3": "Yog-Sothoth threatens to trap you on the doomed planet Yaddith; lose Sanity 3 Sanity."
                }
              },
              Fail: [
                "'Umr-At-Tawil holds a large metallic sphere that radiates powerful pulses of energy. The rhythmic waves shake you to your core, tearing your body to pieces.",
                "You are devoured."
              ]
            }
          }, {
            cardId: 7,
            expansionId: ForsakenLore,
            intro: "The landscape around you changes constantly as Yog-Sothoth drags you through all worlds and all times. You search desperately for anything familiar to find your way home; test Observation-1.",
            choices: {
              Pass: {
                intro: "You sense your loved ones and mentally reach out to them for help (Influence). Roll 1 less die for each investigator that has been defeated or devoured.",
                choices: {
                  Pass: "Your body is snapped back to reality, place Eldritch token 1 Eldritch token on the Ancient One sheet.",
                  Fail: "You drift further through worlds beyond; gain a Lost in Time and Space Condition."
                }
              },
              Fail: [
                "When your vision clears, you find yourself on a frozen plateau. No starts look down from the night sky. For a tragically brief time, you are the only living thing in the universe.",
                "You are devoured."
              ]
            }
          }, {
            cardId: 8,
            expansionId: ForsakenLore,
            intro: "You are surprised to discover the indistinct silhouette of a man on the other side of the gate. Without knowing his identity, you try to convince him to help you navigate these strange other worlds; test Influence-1.",
            choices: {
              Pass: {
                intro: "He introduces himself as Randolph Carter and offers you his Silver Key. You try to harness its power (Lore). You may gain a Dark Pact Condition to roll 3 additional dice.",
                choices: {
                  "Your test result is 3 or greater": "The key works; place Eldritch token 1 Eldritch token on the Ancient One sheet.",
                  "Your test result is less than 3": "You're hopelessly lost; gain a Lost in Time and Space Condition."
                }
              },
              Fail: [
                "He introduces himself as the wizard Zkauba, and he uses his arcane powers to steal your experiences.",
                "Discard all of your Clues, Spells, and Improvement tokens."
              ]
            }
          }
        ],

        "Void Between Worlds": [
          {
            cardId: 1,
            expansionId: ForsakenLore,
            intro: "From this bizarre place between worlds, you can catch a glimpse of all worlds and all times. You have an epiphany and search for a member of the Inner Circle of the Silver Twilight Lodge to observe; test Observation-1.",
            choices: {
              Pass: {
                intro: "You watch the wizard study, hoping to learn a ritual that will return you home; test Lore.",
                choices: {
                  Pass: "You open a mystic gateway to return you home; close this Gate and place Eldritch token 1 Eldritch token on the active Mystery",
                  Fail: "You tamper with powers beyond your control; gain a Cursed Condition."
                }
              },
              Fail: {
                intro: "The more you search, the less familiar the images seem. Soon you are surrounded by images of alien worlds you hardly recognize; test Lore-1.",
                choices: {
                  Pass: "",
                  Fail: "Gain a Lost in Time and Space Condition."
                }
              }
            }
          }, {
            cardId: 2,
            expansionId: ForsakenLore,
            intro: "A small portal opens up before you and you see the laboratory of Crawford Tillinghast. You try to persuade him to make the portal large enough for you to pass through; test Influence.",
            choices: {
              Pass: {
                intro: "As you step through the portal, a creature also tries to pass through, and you must use the machine to close the portal; test Lore-1.",
                choices: {
                  Pass: "Close this Gate and place Eldritch token 1 Eldritch token on the active Mystery.",
                  Fail: {
                    intro: "The creature escapes and attacks you; a Monster ambushes you!",
                    choices: {
                       "Resolved combat encounter": ""
                    }
                  }
                }
              },
              Fail: "Tillinghast laughs maniacally and send you hurtling through a multitude of worlds, shattering your perceptions of reality. Gain a Hallucinations Condition and a Lost in Time and Space Condition."
            }
          }
        ]
      }
    }
  }
};

function addChoiceButtons(encounterElement, encounterStep) {
  const buttonContainer = document.createElement("div");

  for (const label in encounterStep.choices) {
    const button = document.createElement("button");
    button.textContent = label;
    button.onclick = () => {
      addEncounterStep(encounterElement, encounterStep.choices[label], buttonContainer, label);
    };

    buttonContainer.appendChild(button);
  }
  
  encounterElement.appendChild(buttonContainer);
}

function addEncounterAction(buttonContainer, action) {
  const actionElement = document.createElement("p");
  actionElement.classList.add("encounter-action");
  actionElement.textContent = action;

  buttonContainer.insertAdjacentElement("beforebegin", actionElement);
  buttonContainer.remove();
}

function addEncounterStep(encounterElement, encounterStep, priorButtonContainer = null, action = null) {
  if (action && priorButtonContainer) {
    addEncounterAction(priorButtonContainer, action);
  }

  addEncounterStepText(encounterElement, encounterStep);

  if (encounterStep.choices) {
    addChoiceButtons(encounterElement, encounterStep);
  } else {
    endEncounter();
  }
}

function addEncounterStepText(encounterElement, encounterStep) {
  let textItems;
  if (Array.isArray(encounterStep) || typeof(encounterStep) == "string") {
    textItems = encounterStep;
  } else {
    textItems = encounterStep.intro;
  }
  [textItems].flat().forEach(textItem => {
    const textElement = document.createElement("p");
    textElement.textContent = textItem;
    encounterElement.appendChild(textElement);
    readAlound(textItem);
  });
}

function addExpeditionEncounterButton() {
  const card = drawCard("Expedition");

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("encounter");
  button.classList.add("expedition");
  linkedCard[button] = card;
  button.onclick = startExpeditionEncounter;
  button.textContent = `Start ${card.space} Expedition Encounter`;

  document.getElementById("expedition-buttons").appendChild(button);
}

function addSpecialEncounterButtons(deckNames) {
  const buttonContainer = document.getElementById("special-encounters");

  deckNames.forEach(deckName => {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("encounter");
    button.onclick = () => startSpecialEncounter(deckName);
    button.textContent = `Start ${deckName} Encounter`;
    buttonContainer.appendChild(button);
  });
}

function buildExpeditionDeck() {
  const deck = new Array();
  for (const space in deckData.Expedition) {
    const cards = deckData.Expedition[space];
    cards.forEach(card => {
      card.space = space;
      deck.push(card)
    });
  };

  shuffleArray(deck);
  decks["Expedition"] = deck;
}

function buildResearchDeck() {
  const deck = new Array();
  deckData.Research[ancientOne].forEach(card => {
    deck.push(card);
  })

  shuffleArray(deck);
  decks["Research"] = deck;
}

function buildSpecialEncounterDecks() {
  const deckNames = [];
  const specialDecks = deckData.Special.byAncientOne[ancientOne];

  for (const deckName in specialDecks) {
    // Initialize the deck
    const deck = [];
    specialDecks[deckName].forEach(card => {
      if (expansions.includes(card.expansionId)) {
        deck.push(card);
      }
    });

    if (deck.length > 0) {
      deckNames.push(deckName);
      shuffleArray(deck);
      decks[deckName] = deck;
    }
  }

  return deckNames;
}

function disableEncounterButtons() {
  updateEncounterButtons(true);
}

function drawCard(deckName) {
  const deck = decks[deckName];
  const card = deck.shift();

  deck.push(card); // return it to the bottom

  return card;
}

function enableEncounterButtons() {
  updateEncounterButtons(false);
}

function endEncounter(buttonContainer, encounter, action, key) {
  enableEncounterButtons();
}

function readAlound(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

function startCityEncounter(deckName, cityName) {
  const cards = deckData[deckName];
  const card = cards[Math.floor(Math.random() * cards.length)];

  startEncounter(
    `${deckName} ${card.cardId}: ${cityName}`,
    card[cityName]
  );
}

function startEncounter(headerText, encounter) {
  disableEncounterButtons();

  const encounterElement = document.createElement("div");
  encounterElement.classList.add("encounter");

  encounterElement.appendChild(document.createElement("hr"));

  const headerElement = document.createElement("h3");
  headerElement.textContent = headerText;
  encounterElement.appendChild(headerElement);

  addEncounterStep(encounterElement, encounter);

  document.getElementById("encounterList").prepend(encounterElement);
}

function startExpeditionEncounter(event) {
  const button = event.target;
  const card = linkedCard[button];

  button.remove();
  delete linkedCard[button];

  addExpeditionEncounterButton();

  startEncounter(
    `Expedition - ${card.space}: ${card.cardId}`,
    card
  );
}

function startGeneralEncounter(spaceType) {
  const cards = deckData.General;
  const card = cards[Math.floor(Math.random() * cards.length)];

  startEncounter(
    `General ${card.cardId}: ${spaceType}`,
    card[spaceType]
  );
}

function startOtherWorldEncounter() {
  const cards = deckData.OtherWorld;
  const card = cards[Math.floor(Math.random() * cards.length)];

  startEncounter(
    `Other World ${card.cardId}: ${card.location}`,
    card
  );
}

function startResearchEncounter(spaceType) {
  const card = drawCard("Research");

  startEncounter(
    `Research - ${ancientOne} ${card.cardId}: ${spaceType}`,
    card[spaceType]
  );
}

function startSpecialEncounter(deckName) {
  const card = drawCard(deckName);

  startEncounter(
    `${deckName} ${card.cardId}`,
    card
  );
}

function updateEncounterButtons(disabled) {
  document.querySelectorAll("button.encounter").forEach(button => {
    button.disabled = disabled;
  });
}

const ancientOne = "Yog-Sothoth";
const expansions = [Core, ForsakenLore]
const decks = [];
const linkedCard = {};

buildExpeditionDeck();
buildResearchDeck();
addSpecialEncounterButtons(buildSpecialEncounterDecks());

addExpeditionEncounterButton();