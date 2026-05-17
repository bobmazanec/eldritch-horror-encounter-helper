deckData.Expedition = {
  "The Amazon": [
    {
      cardId: 1,
      expansionId: Core,
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
          intro: "You've been bit! Lose 1 Health and gain an Internal Injury Condition. Something about the snakes is odd. You try to identify what makes them unique; test Observation-1.",
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
    }, {
      cardId: 4,
      expansionId: ForsakenLore,
      intro: "Lieutenant Colonel Percy Fawcett disappeared in this area of the jungle searching for the Lost City of Z. You search for any signs of the expedition or the legendary city; test Observation-1.",
      choices: {
        Pass: {
          intro: "You discover a young Kuikuro boy who requires convincing before he'll help you; test Influence.",
          choices: {
            Pass: "He brings you to an ancient city where Fawcett has left behind his journal; gain 2 Clues.",
            Fail: "The boy demands payment and disappears; discard 1 Item possession."
          }
        },
        Fail: {
          intro: "A mosquito bite leaves you sick and feverish; test Strength-1.",
          choices: {
            Pass: "You recover quickly, feeling better than before; discard 1 Illness or Injury Condition.",
            Fail: "Your symptoms grow worse; lose 1 Health and gain a Poisoned Condition."
          }
        }
      }
    }, {
      cardId: 5,
      expansionId: UnderThePyramids,
      intro: "Legends say that the Mapinguari was once a powerful shaman. You search the jungle for any sign of this large, sloth-like beast so that you can track it back to its lair; test Observation.",
      choices: {
        Pass: {
          intro: "You find the Mapinguari and learn it still retains its intelligence. Gain 1 Clue. You ask it for help; test Influence.",
          choices: {
            Pass: "It reveals its secrets; advance the active Mystery by 1.",
            Fail: "It takes a sacrifice; discard 1 Item possession."
          }
        },
        Fail: {
          intro: "The beast finds you first, attacking you with powerful claws; test Strength.",
          choices: {
            Pass: "The creature speaks, revealing powerful arcane knowledge; retreat Doom by 1.",
            Fail: "The beast claws at your legs; gain a Leg Injury Condition."
          }
        }
      }
    }            
  ],

  Antarctica: [
    {
      cardId: 1,
      expansionId: Core,
      intro: "Flying over the area, you see evidence of an ancient stone city. You land your plane as close as you can and climb across the ice to reach the strange architecture; test Strength.",
      choices: {
        Pass: {
          intro: "The murals inside the city tell the story of the elder things. Retreat Doom by 1. However, your studies take a toll on your mind; test Will.",
          choices: {
            Pass: "",
            Fail: "You block everything you've learned from your mind; gain an Amnesia Condition."
          }
        },
        Fail: {
          intro: "You fall through the ice into a stone chamber. Lose 1 Health and gain a Back Injury Condition. You search the dark chamber; test Observation-1.",
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
    }, {
      cardId: 4,
      expansionId: ForsakenLore,
      intro: "As you approach the dark tower, the landscape suddenly transforms around you, as if you were witnessing thousands of years passing in an instant.[2] The effect passes quickly but overwhelms your senses; test Will.",
      choices: {
        Pass: {
          intro: "You realize that you've seen the future. In this vision, a being of unthinkable power escapes from this tower, unless you have the knowledge to prevent it; test Lore.",
          choices: {
            Pass: "You restore the seals on the tower; retreat Doom by 1.",
            Fail: "Nothing can be done; lose 1 Sanity and gain a Paranoia Condition."
          }
        },
        Fail: {
          intro: "You see your own severed head, connected to other heads by a strange, fibrous network. Lose 1 Sanity and gain a Hallucinations Condition. You hear many voices in your head, but one struggles to be heard over the others; test Observation-1.",
          choices: {
            Pass: "",
            Fail: "This voice teaches you the arcane arts; gain 1 Spell."
          }
        }
      }
    }, {
      cardId: 5,
      expansionId: UnderThePyramids,
      intro: "You find the foundation of some ancient structure, but a snowstorm is on its way. Resolve the pass effect to set up your tent and wait out the storm; or resolve the fail effect to try and dig up the foundation before the blizzard starts.",
      choices: {
        "Set up your tent and wait out the storm": {
          intro: "The terrifying winds and cold last throughout the night; test Will.",
          choices: {
            Pass: "You excavate the area the next day and discover a lost treasure; gain 1 Artifact.",
            Fail: "You run away as soon as you can; gain a Despair Condition."
          }
        },
        "Try and dig up the foundation before the blizzard starts": {
          intro: "You quickly pull away the ancient stones; test Strength.",
          choices: {
            Pass: "You uncover a lost wonder; gain 1 Artifact.",
            Fail: "The storm descends forcing you to set up your tent in the bitter cold; gain 1 Illness Condition."
          }
        }
      }
    }
  ],

  "The Heart of Africa": [
    {
      cardId: 1,
      expansionId: Core,
      intro: "The whole jungle shakes, and the ground splits beneath your feet. You fall through the crevice into a vast subterranean tunnel; test Strength.",
      choices: {
        Pass: {
          intro: "You follow the tunnel to the ancient city of G'harne. Retreat Doom Doom by 1. If you have read about G'harne, you know to leave quickly; test Lore.",
          choices: {
            Pass: "",
            Fail: "You wake up in the jungle with no memory; gain an Amnesia Condition."
          }
        },
        Fail: {
          intro: "You land painfully on your spine. Lose 1 Health and gain a Back Injury Condition. While you're stuck here, you examine this tunnel; test Observation-1.",
          choices: {
            Pass: "You see that it was dug out by a large creature; retreat Doom by 1.",
            Fail: ""
          }
        }
      }
    }, {
      cardId: 2,
      expansionId: Core,
      intro: "The old N'bangu man's map to the gray city of the white god relies on landmarks that are now overgrown by the dense jungle. You search carefully to recognize anything familiar Observation.",
      choices: {
        Pass: {
          intro: "You find the remains of a white ape and study the bones; test Lore.",
          choices: {
            Pass: "You find a hastily drawn map that leads you to a hidden treasure; gain 1 Artifact.",
            Fail: "Something about this creature make you doubt your own humanity; gain a Hallucinations Condition."
          }
        },
        Fail: {
          intro: "Stumbling across a copper mine, you are immediately accused of being a thief or a saboteur. You fight to escape into the jungle; test Strength-1.",
          choices: {
            Pass: "You find the gray city; gain 2 Clues.",
            Fail: "Gain a Detained Condition."
          }
        }
      }
    }, {
      cardId: 4,
      expansionId: ForsakenLore,
      intro: "In a part of the jungle avoided by all of the local tribes, you find a stone covered with strange dot patterns. You attempt to identify the origin of the shard and interpret the meaning of the patterns; test Lore-1.",
      choices: {
        Pass: {
          intro: "You identify it as a missing piece of the G'harne Fragments that leads you to a long-forgotten cave. Inside, you search through the ruins of an abandoned lair of elder things; test Observation-1.",
          choices: {
            Pass: "You find a lost treasure; gain 1 Artifact.",
            Fail: ""
          }
        },
        Fail: {
          intro: "Your failure hurts your reputation among your peers. Discard all Influence Improvement tokens. Soon, a rival expedition tries to steal the fragment; test Strength.",
          choices: {
            Pass: "You escape with the other expedition's notes; gain 2 Clues.",
            Fail: "They leave you wounded; lose 2 Health."
          }
        }
      }
    }, {
      cardId: 6,
      expansionId: SignsOfCarcosa,
      intro: "You consider your options for gaining access to the legendary canyons of Ituri-kendi. Resolve the pass effect to take the Ituri river into the canyon; or resolve the fail effect to approach through the jungle.",
      choices: {
        "Take the Ituri river into the canyon": {
          intro: "The powerful current threatens to pull you under; test Strength-1.",
          choices: {
            Pass: "You find a strange object waiting for you on the shore; gain 1 Artifact.",
            Fail: "You are attacked by giant leeches under the water; lose 2 Health."
          }
        },
        "Approach through the jungle": {
          intro: "You try to follow an ancient map to an abandoned city in the canyon walls; test Lore-1.",
          choices: {
            Pass: "You find a strange item in a prehistoric chamber; gain 1 Artifact.",
            Fail: "Wandering in the jungle breaks your body; gain 1 Injury Condition."
          }
        }
      }
    }
  ],

  "The Pyramids": [
    {
      expansionId: Core,
      cardId: 1,
      intro: "Bandits tie your hands and blindfold you. They lower you into catacombs deep under the pyramids and leave you there to die. You try to free yourself from your bonds; test Strength.",
      choices: {
        Pass: {
          intro: "You see now that you are in the Temple of the Sphinx. Retreat Doom by 1. You use your knowledge of Egyptology to find an exit; test Lore.",
          Pass: "",
          Fail: "You wake up with no memory of how you escaped; gain an Amnesia Condition."
        },
        Fail: {
          intro: "While struggling with your bonds, you feel undead hands tearing at you. Lose 1 Health and gain an Internal Injury Condition. You gaze into the darkness; test Observation-1.",
          choices: {
            Pass: "you identify mummies with the heads of animals; retreat Doom Doom by 1.",
            Fail: ""
          }
        }
      }
    }, {
      expansionId: Core,
      cardId: 2,
      intro: "Inside the pyramid, you find a hidden passage leading to an undiscovered throne room. You explore the room for indications of its history; test Observation.",
      choices: {
        Pass: {
          intro: "You see a star map adjacent to a world map on the wall. You use the star map to determine a location on the world map; test Lore.",
          choices: {
            Pass: "You discover a hidden cabinet built into the wall; gain 1 Artifact.",
            Fail: "The maps remain a mystery; you lose 2 Sanity."
          }
        },
        Fail: {
          intro: "As you search, Nephren-Ka appears! With a wave of his hand, you are overcome by pain; test Strength-1.",
          choices: {
            Pass: "You crawl away; gain 2 Clues.",
            Fail: "Lose 1 Health and gain an Internal Injury Condition."
          }
        }
      }
    }, {
      expansionId: ForsakenLore,
      cardId: 4,
      intro: "Once you reach Dashur, you begin digging through the rubble that had once been the White Pyramid, hoping to excavate the ancient burial chambers; test Strength-1.",
      choices: {
        Pass: {
          intro: "You uncover a vast labyrinth of underground tunnels. You only hope of navigating is to translate the hieroglyphs on the wall; test Lore.",
          choices: {
            Pass: "You find your way to the royal treasury; gain 1 Artifact.",
            Fail: "You slowly find your way back to the exit; become Delayed."
          }
        },
        Fail: "You exhaust yourself working into the night without result. Lose 1 Health. That night, a snake-eyed man dressed like a bedouin approaches you and offers you a deal. You may gain a Dark Pact to improve 1 skill of your choice."
      }
    }, {
      expansionId: UnderThePyramids,
      cardId: 5,
      intro: "An Australian veteran of the Great War has a room in the Mena House Hotel. You hear rumors that over the years he has stolen several objects from inside the pyramids. When you confront him on the issue, he starts a fight with you; test Strength.",
      choices: {
        Pass: {
          intro: "Humbled, the soldier tells you about murals within the pyramid. Gain 1 Clue. You search for them; test Observation.",
          chcoices: {
            Pass: "You find a secret painting; advance the active Mystery by 1.",
            Fail: "The foul air takes a toll; gain 1 Illness Condition."
          }
        },
        Fail: {
          intro: "The soldier leaves you unconscious in a chamber in the pyramids. You wake up terrified in the dark; test Will.",
          choices: {
            Pass: "You hear the whispers of long dead pharaohs; retreat Doom by 1.",
            Fail: "you run as fast as you can; gain a Despair Condition."
          }
        }
      }
    }
  ]
};
