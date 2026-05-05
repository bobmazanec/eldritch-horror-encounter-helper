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
      intro: "Flying over the area, you see evidence of an ancient stone city. You land your plane as close as you can and climb across the ice to reach the strange architecture; test Strength).",
      choices: {
        Pass: {
          intro: "The murals inside the city tell the story of the elder things. Retreat Doom by 1. However, your studies take a toll on your mind; test Will",
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
        "Try and dig up the foundation before the blizzard starts.": {
          intro: "You quickly pull away the ancient stones; test Strength.",
          choices: {
            Pass: "You uncover a lost wonder; gain 1 Artifact.",
            Fail: "The storm descends forcing you to set up your tent in the bitter cold; gain 1 Illness Condition."
          }
        }
      }
    }
  ]
};
