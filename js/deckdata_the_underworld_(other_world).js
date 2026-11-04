deckData.OtherWorld["The Underworld"] = [
  {
    "cardId": 18,
    "expansionId": "Eldritch Horror",
    "intro": "You find yourself surrounded by ghouls. However, they don't seem to be antagonistic toward you. In fact, you believe you could persuade them to help you (<img src=\"images/Influence.webp\">).",
    "choices": {
      "Pass": {
        "intro": "The ghouls direct you into the Tower of Koth in the City of the Gugs. As you ascend the tower's stairs, an enormous gug chases after you. The sound of the monstrosity rattles your nerves (<img src=\"images/Will.webp\">).",
        "choices": {
          "Pass": "Close this Gate.",
          "Fail": "You hide, waiting for it to go away; lost 1 Sanity."
        }
      },
      "Fail": {
        "intro": "Your well-reasoned arguments seem to have no impact, but bribery might. You may discard 1 Item possession to close this Gate.",
        "choices": {
          "Discard 1 Item possession to close this Gate": "",
          "Do not close this Gate": "The ghouls attack you; lose 1 Health and gain an Injury Condition."
        }
      }
    }
  },
  {
    "cardId": 60,
    "expansionId": "The Dreamlands",
    "intro": "You hide in a long-abandoned temple in the city of the gugs. An avatar of Magnum Innominandum challenges you to a game of riddles. Accept the challenge to resolve the pass effect; or decline the challenge to resolve the fail effect.",
    "choices": {
      "Accept the challenge to resolve the pass effect": {
        "intro": "You agree to the rules of the game, and the Nameless Mist asks you riddle after riddle (<img src=\"images/Lore.webp\">-1).",
        "choices": {
          "Pass": "You demand a reward for your wit; close this Gate.",
          "Fail": "The strange being reduces one of your traveling companions to a pile of ash; lose 1 Sanity and discard 1 Ally Asset."
        }
      },
      "Decline the challenge to resolve the fail effect": {
        "intro": "The Nameless Mist spins horrific tales of the city of the gugs (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "The stories reveal a way home; close this Gate.",
          "Fail": "The tales serve only to unhinge your mind; lose 2 Sanity unless you gain 1 Madness Condition."
        }
      }
    }
  }
];
