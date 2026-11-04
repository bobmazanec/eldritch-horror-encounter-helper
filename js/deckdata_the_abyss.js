deckData.OtherWorld["The Abyss"] = [
  {
    "cardId": 23,
    "expansionId": "Eldritch Horror",
    "intro": "The nightgaunts seem intent on keeping you here in the darkness. You do your best to continue climbing out of these terrible depths without alerting them to your presence (<img src=\"images/Observation.webp\">).",
    "choices": {
      "Pass": {
        "intro": "You reach the trap door that leads from the Abyss to Sarkomand. The journey has only strengthened your resolve. Improve <img src=\"images/Will.webp\">. Now it will require all of your strength to push open the door (<img src=\"images/Strength.webp\">-1).",
        "choices": {
          "Pass": "You are able to escape; close this Gate.",
          "Fail": "Gain a Back Injury Condition."
        }
      },
      "Fail": {
        "intro": "The nightgaunts pick you up and toss you back to the bottom of the Abyss. Gain a Leg Injury Condition. In this dark stony landscape, you struggle to resist fear and hunger (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "Lose 1 Health and 1 Sanity."
        }
      }
    }
  },
  {
    "cardId": 58,
    "expansionId": "The Dreamlands",
    "intro": "The thunderous voice of Nodens echoes throughout the darkness as you trek through the Abyss. The Lord of the Abyss commands you to prove you are worthy of his aid. Go before Nodens to resolve the pass effect; or prove yourself by your actions to resolve the fail effect.",
    "choices": {
      "Go before Nodens to resolve the pass effect": {
        "intro": "You plead with the Great Lord of the Abyss to grant his assistance in leaving his fair kingdom (<img src=\"images/Influence.webp\">-1).",
        "choices": {
          "Pass": "Nightgaunts fly you to safety; close this Gate.",
          "Fail": "The ground shakes at Nodens' displeasure and you fall further into the darkness of the Abyss; gain 1 Injury Condition."
        }
      },
      "Prove yourself by your actions to resolve the fail effect": {
        "intro": "You continue your ascent (<img src=\"images/Strength.webp\">-1).",
        "choices": {
          "Pass": "Nodens approves of your herculean effort; close this Gate.",
          "Fail": "Your limbs grow weak and you lose your grip on a prized possession, watching helplessly as it falls into the endless dark; discard 1 Magical possession."
        }
      }
    }
  }
];
