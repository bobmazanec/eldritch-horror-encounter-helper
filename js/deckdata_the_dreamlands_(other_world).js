deckData.OtherWorld["The Dreamlands"] = [
  {
    "cardId": 7,
    "expansionId": "Eldritch Horror",
    "intro": "In the cavern of flame, the bearded priests Nasht and Kaman-Thah warn you that it is too dangerous to continue. You insist that you possess the knowledge you need and are resolved to enter the Dreamlands (<img src=\"images/Will.webp\">-1). Roll 1 additional die for each Clue you have.",
    "choices": {
      "Pass": {
        "intro": "After gaining access to the Dreamlands, you find yourself fighting moonbeasts on a black galley sailing to the moon (<img src=\"images/Strength.webp\">).",
        "choices": {
          "Pass": "You steal their treasure and area able to barter with it; close this Gate.",
          "Fail": "You become lost in a forest on the moon; lose 2 Health and become Delayed."
        }
      },
      "Fail": "The gods of dreams exile you back to the waking world and punish you for your overreaching ambition. Your dream and the waking world become indistinguishable. Become Delayed and gain a Hallucinations Condition."
    }
  },
  {
    "cardId": 21,
    "expansionId": "Eldritch Horror",
    "intro": "You are strictly admonished that in the city of Ulthar, no man may kill a cat. As a result, you see the city is filled with cats. If you know the language, you can communicate with these highly intelligent creatures (<img src=\"images/Lore.webp\">).",
    "choices": {
      "Pass": {
        "intro": "The cats are pleased to chat and share useful secrets. Gain 1 Clue. When the topic of food is brought up, dozens of cats take an interest. A crowd of hungry felines surround you. Become Delayed unless you spend 1 Health.",
        "choices": {
          "Become Delayed": "",
          "Spend 1 Health": "You feed the cats your rations and go hungry yourself; close this Gate."
        }
      },
      "Fail": {
        "intro": "The cats flee from you, making the people of Ulthar suspicious and they force you into the Enchanted Wood. Lose 1 Health. While you're out there, you must keep a careful watch to prevent the zoogs from stealing your belongings (<img src=\"images/Observation.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "Discard 1 Item possession."
        }
      }
    }
  },
  {
    "cardId": 25,
    "expansionId": "Forsaken Lore",
    "intro": "In Dylath-Leen, a suspicious-looking thug in a dark robe offers you his help. However, he warns you that he's a fugitive being hunted by the prince's agents and will require your protection (<img src=\"images/Strength.webp\">-2).",
    "choices": {
      "Pass": {
        "intro": "You defend the man from his assailants, and he gratefully invites you aboard his galley to return you to the waking world. Close this Gate. As you speak to him, it is clear he knows many forgotten truths. You may become Delayed to improve <img src=\"images/Lore.webp\">.",
        "choices": {
          "Become Delayed to improve <img src=\"images/Lore.webp\">": "",
          "Do not improve <img src=\"images/Lore.webp\">": ""
        }
      },
      "Fail": {
        "intro": "The Eyes of Dylath-Leen capture you and sell you as a slave. You try to persuade the other slaves to fight back (<img src=\"images/Influence.webp\">).",
        "choices": {
          "Pass": "The former slaves gratefully help you; close this Gate.",
          "Fail": "You are banished as punishment; gain a Lost in Time and Space Condition."
        }
      }
    }
  },
  {
    "cardId": 40,
    "expansionId": "Strange Remnants",
    "intro": "A student of the occult has gotten lost in the Dreamlands. The young man introduces himself as Edward Derby. He has a ritual for returning home, but he needs your help to interpret it (<img src=\"images/Lore.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "His ritual works. Close this Gate. Derby's grateful wife wants to help you, but something about her fills you with dread (<img src=\"images/Will.webp\">-1).",
        "choices": {
          "Pass": "The fear fades; gain the Asenath Waite Unique Asset.",
          "Fail": "You cannot be near her; lose 2 Sanity and gain a Paranoia Condition."
        }
      },
      "Fail": {
        "intro": "The ritual twists your body and knocks out Derby. Gain 1 Injury Condition. You try to carry him home safely (<img src=\"images/Strength.webp\">).",
        "choices": {
          "Pass": "His grateful wife offers to help you; gain the Asenath Waite Unique Asset.",
          "Fail": "You cannot endure it; lose 2 Health."
        }
      }
    }
  }
];
