deckData["Dream-Quest"] = {
  "The Enchanted Wood": [
    {
      cardId: 1,
      expansionId: TheDreamlands,
      intro: "You stare into the bright waters of a shimmering pool and see a reflection of yourself back in the waking world. Resolve the pass effect to see what lies beneath the surface; or resolve the fail effect to converse with your reflection about the state of the world.",
      choices: {
        "See what lies beneath the surface": {
          intro: "You sense the pool is a living thing, and you try to communicate with it; test Lore-1.",
          choices: {
            Pass: "It understands you and offers a gift that was lost within its depths; gain 1 Artifact.",
            Fail: {
              intro: "it calls for help; a Zoog Monster ambushes you!",
              choices: {
                "Resolved combat encounter": ""
              }
            }
          }
        },
        "Converse with your reflection about the state of the world": {
          intro: "Your reflection winks at you, and you initiate a conversation; test Influence-1.",
          choices: {
            Pass: "The other you repairs a tear in reality; close 1 Gate of your choice.",
            Fail: "The reflection steals aspects of your persona; discard 1 Talent Condition."
          }
        }
      }
    }, {
      cardId: 2,
      expansionId: TheDreamlands,
      intro: "You see three stunningly beautiful individuals some distance off the path. They are sitting around a large stone table drinking wine, and you feel compelled to join them despite your better judgment; test Will-1.",
      choices: {
        Pass: {
          intro: "You force yourself to look away, examining the ground instead; test Observation.",
          choices: {
            Pass: "You see a treasure discarded by some lost dreamer; gain 1 Artifact.",
            Fail: "Keeping your eyes pointed down slows your progress; become Delayed"
          }
        },
        Fail: {
          intro: "These three seem to follow very obscure rules of etiquette; test Lore.",
          choices: {
            Pass: "They reward your manners and send you on your way; gain 1 Artifact.",
            Fail: "Your rudeness is punished; gain a Lost in Time and Space Condition."
          }
        }
      }
    }
  ],

  "The Moon": [
    {
      cardId: 1,
      expansionId: TheDreamlands,
      intro: "In one of the moon's shadowy forests, a moon-beast has you cornered. Resolve the pass effect to pray to Nodens to bestow a gift; or resolve the fail effect to banish the creature to another dimension.",
      choices: {
        "Pray to Nodens to bestow a gift": {
          intro: "A nightgaunt descends and scoops you into the sky. You find it difficult to navigate while riding this strange creature; test Observation-1.",
          choices: {
            Pass: "You land next to a rare treasure; gain 1 Artifact.",
            Fail: "You become hopelessly lost; gain a Lost in Time and Space Condition."
          }
        },
        "Banish the creature to another dimension": {
          intro: "A Moon-beast monster ambushes you!",
          choices: {
            "Resolved combat encounter": {
              choices: {
                "Passed the Will test": "It is momentarily confused and you order it to obey you in the name of Nyarlathotep; close 1 Gate of your choice on any space.",
                "Did not pass the Will test": ""
              }
            }
          }
        }
      }
    }, {
      cardId: 2,
      expansionId: TheDreamlands,
      intro: "You follow a dark winding cavern down to the inky black waters known as the Lake of Ubboth. There you recite an ancient chant to invoke the power of Mnomquah; test Lore.",
      choices: {
        Pass: {
          intro: "The tremendous lizard like creature emerges from the water. It is terrible to behold; test Will.",
          choices: {
            Pass: "It grants you a favor; gain 1 Artifact",
            Fail: "The monstrous sight shatters your mind; gain 1 Madness Condition."
          }
        },
        Fail: {
          intro: "The Lord of the Black Lake does not appear, but the cavern begins to collapse; test Strength.",
          choices: {
            Pass: "The tremors uncover a treasure, gain 1 Artifact.",
            Fail: "The falling stones leave you badly hurt; lose 2 Health and gain 1 Injury Condition."
          }
        }
      }
    }
  ],

  "The Underworld": [
    {
      cardId: 1,
      expansionId: TheDreamlands,
      intro: "You hear the familiar voice of a friend calling to you from the darkness. Resolve the pass effect to go toward the sound; or resolve the fail effect to convince the person to come to you.",
      choices: {
        "Go toward the sound": {
          intro: "The voice draws you into the Vale of Pnath; test Will-1.",
          choices: {
            Pass: "The see that your friend is now a ghoul, but he offers you a gift; gain 1 Artifact.",
            Fail: "You are paralyzed with fear as a dhole devours your friends; lose 1 Sanity and discard 1 Ally Asset."
          }
        },
        "Convince the person to come to you": {
          intro: "You call out through the darkness; test Influence-1.",
          choices: {
            Pass: "You see he is now a ghoul but he can help you; close 1 Gate of your choice on any space.",
            Fail: "Your friend tells you horrors that shake you to your core; lose 2 Sanity unless you discard 1 Talent Condition."
          }
        }
      }
    }, {
      cardId: 2,
      expansionId: TheDreamlands,
      intro: "As you ascend the Peaks of Thok, you hear gurgling voices ahead of you. You are certain that there are ghouls nearby and it takes all of your resolve to keep moving forward; test Will.",
      choices: {
        Pass: {
          intro: " decrepit form lunges toward you. A Ghoul Monster ambushes you!",
          choices: {
            "Resolved the combat encounter": {
              choices: {
                "Passed the Strength test": "You steal an object that the ghoul kept in a moldy canvas bag; gain 1 Artifact.",
                "Failed the Strength test": "The ghoul claims a nearby victim; discard 1 Ally Asset."
              }
            }
          }
        },
        Fail: {
          intro: "You descend into the Vale of Pnath. Among the bones and refuse you determine what might be of worth; test Lore-1.",
          choices: {
            Pass: "You find a treasure; gain 1 Artifact.",
            Fail: "You should not have disturbed these remains; gain 1 Bane Condition."
          }
        }
      }
    }
  ]
};