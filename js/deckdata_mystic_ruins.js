deckData["Mystic Ruins"] = {
  "Atlantis (Space 8)": [
    {
      cardId: 1,
      expansionId: MasksOfNyarlathotep,
      intro: "The high priest Klarkash-Ton foretells a great disaster coming to Atlantis. Resolve the pass effect to work with him to change destiny; or resolve the fail effect to find a way to escape using his knowledge of the doorways between worlds.",
      choices: {
        "Work with him to change destiny": {
          intro: "You listen carefully as he researches ways to save Atlantis; test Observation-1.",
          choices: {
            Pass: "You learn a secret to prevent disaster in the future; move the Omen to any space of the track without advancing Doom.",
            Fail: "You learn there is no hope; lose 1 Sanity."
          }
        },
        "Find a way to escape using his knowledge of the doorways between worlds": {
          intro: "The end is nigh! You try to rescue Klarkash-Ton from a collapsing temple; test Strength-1.",
          choices: {
            Pass: "He repays you with his arcane insight; close 1 Gate of your choice on any space.",
            Fail: "The attempt leaves you wounded; gain 1 Leg Injury Condition."
          }
        }
      }
    }, {
      cardId: 2,
      expansionId: MasksOfNyarlathotep,
      intro: "As you navigate through the concentric rings of streets and canals that make up the city, you hear Senzar, the language of Atlantis. Through careful study you hope to master this strange and esoteric vocabulary; test Lore.",
      choices: {
        Pass: {
          intro: "You eloquently strike a bargain with Atlantean priests to protect the future. Close 1 Gate of your choice on any space. In return, you help them to build a temple; test Strength.",
          choices: {
            Pass: "",
            Fail: "You cannot endure the work; gain 1 Back Injury Condition."
          }
        },
        Fail: {
          intro: "Lacking the words, you offer Atlantean priests wealth in exchange for help; test Influence.",
          choices: {
            Pass: "They are pleased with your gift; close 1 Gate of your choice on any space.",
            Fail: "Your funds are depleted; gain a Debt Condition."
          }
        }
      }
    }
  ],

  "Chichen Itza (Space 7)": [
    {
      cardId: 1,
      expansionId: StrangeRemnants,
      intro: "Men dressed in the skins of jaguars challenge you to play a traditional Mayan ball game. Resolve the pass effect to play the game; or resolve the fail effect to reject the challenge.",
      choices: {
        "Play the game": {
          intro: "The game is physically exhausting; test Strength-1.",
          choices: {
            Pass: "Your victory compels the men to perform a ritual for you; move the Omen to any space of the track without advancing Doom.",
            Fail: "You owe a debt to the gods; lose 2 Health and 2 Sanity unless you gain a Dark Pact Condition."
          },
        },
        "Reject the challenge": {
          intro: "The men become violent, but you claim to be a high priest, wise in the ways of the gods; test Lore-1.",
          choices: {
            Pass: "The men are humbled and invoke their gods on your behalf; close 1 Gate of your choice on any space.",
            Fail: "They attack; lose 2 Health."
          }
        }
      }
    }, {
      cardId: 2,
      expansionId: StrangeRemnants,
      intro: "If you know the proper ritual, the sacred well located here can be used to contact the Mayan gods who dwell in the underworld, a realm known as Xibalba; test Lore.",
      choices: {
        Pass: {
          intro: "Your request has been answered. Close 1 Gate of your choice on any space. In return, the gods demand a sacrifice! You feel compelled to dive into the well; test Will.",
          choices: {
            Pass: "",
            Fail: "You nearly drown before being rescued; lose 1 Health and 1 Sanity."
          }
        },
        Fail: {
          intro: "The ritual backfires and a skeleton begins to crawl up from the well. You hope to hide from it; test Observation.",
          choices: {
            Pass: "It performs the ritual that you could not; close 1 Gate of your choice on any space.",
            Fail: "The creature finds you and attacks; lose 1 Health and 1 Sanity."
          }
        }
      }
    }
  ],

  "Great Wall of China (Shanghai)": [
    {
      cardId: 1,
      expansionId: StrangeRemnants,
      intro: "A stranger stands outside Jiayuguan and asks for your permission to pass. You remember that this place was once called the Gate of the Demons. Resolve the pass effect to forbid him to enter; or resolve the fail effect to allow him to pass.",
      choices: {
        "Forbid him to enter": {
          intro: "The man grows angry and tries to force his way past you; test Strength-1.",
          choices: {
            Pass: "The strange man says his kin will not bother you further; close 1 Gate of your choice on any space.",
            Fail: "You see his true form; a Monster ambushes you!"
          }
        },
        "Allow him to pass": {
          intro: "After he goes by, you hunt him down; test Observation-1.",
          choices: {
            Pass: "He offers to use his magic in exchange for his freedom; move the Omen to any space of the track without advancing Doom.",
            Fail: "You fear he is hunting you; gain a Paranoia Condition."
          }
        }
      }
    }, {
      cardId: 2,
      expansionId: StrangeRemnants,
      intro: "At the Temple of Lady Meng Jiang, you carefully study the couplet hanging from the columns. You believe a careful analysis will reveal a deeper meaning; test Lore.",
      choices: {
        Pass: {
          intro: "The spirit of Lady Meng Jiang manifests and helps you in your quest. Close 1 Gate of your choice on any space. In her presence you are overwhelmed by her terrible sorrow; test Will.",
          choices: {
            Pass: "",
            Fail: "Her heartbreaking story shakes you; lose 2 Sanity."
          }
        },
        Fail: {
          intro: "You ask a young, sad-looking woman to help you with the translation; test Influence.",
          choices: {
            Pass: "She is able to help you; close 1 Gate of your choice on any space.",
            Fail: "She begins to cry and the walls collapse around you; lose 2 Health"
          }
        }
      }
    }
  ],

  "Stonehenge (London)": [
    {
      cardId: 1,
      expansionId: StrangeRemnants,
      intro: "A man and a woman are arguing over the stones' occult significance. He claims they open doorways to other worlds. She says they measure the stars. Resolve the pass effect to agree with the man; or resolve the fail effect to agree with the woman.",
      choices: {
        "Agree with the man": {
          intro: "Exasperated, the woman leaves. You ask the man to tell you more about these portals; test Influence-1.",
          choices: {
            Pass: "He helps you control them; close 1 Gate of your choice on any space.",
            Fail: "He reveals that he is a warlock and casts a hex on you; gain 1 Bane Condition."
          }
        },
        "Agree with the woman": {
          intro: "The man storms off. The woman tries to show you certain stars; test Observation-1.",
          choices: {
            Pass: "You can see their effects on fate; move the Omen to any space of the track without advancing Doom.",
            Fail: "She reveals that she is a witch and uses the stars against you; lose 2 Sanity."
          }
        }
      }
    }, {
      cardId: 2,
      expansionId: StrangeRemnants,
      intro: "Cultists have been here enacting some ritual. You think you can undo the effects of their work by analyzing the items they left behind and the symbols they drew; test Lore.",
      choices: {
        Pass: {
          intro: "That which they have opened, you can shut. Close 1 Gate of your choice on any space. While you are undoing the ritual, the police arrive and accuse you of vandalizing the area. You try to escape; test Observation.",
          choices: {
            Pass: "",
            Fail: "Gain a Detained Condition."
          }
        },
        Fail: {
          intro: "A storm begins and the winds threaten to sweep you away. You fight to complete your task; test Strength.",
          choices: {
            Pass: "You undo the ritual; close 1 Gate of your choice on any space.",
            Fail: "The wind carries you away; gain a Head Injury Condition."
          }
        }
      }
    }
  ]
};
