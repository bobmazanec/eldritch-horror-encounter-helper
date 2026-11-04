deckData.OtherWorld["Unknown Kadath"] = [
  {
    "cardId": 38,
    "expansionId": "Strange Remnants",
    "intro": "You are in the onyx castle of the Great Ones! A large man dressed as a pharaoh tells you the gods have all gone, but he can return you home. Resolve the pass effect to decline his offer; or resolve the fail effect to accept.",
    "choices": {
      "Resolve the pass effect to decline his offer": {
        "intro": "You search the castle (<img src=\"images/Observation.webp\">-1).",
        "choices": {
          "Pass": "You discover that the Great Ones left you a gift and a way home; gain 1 Relic Unique Asset and close this Gate.",
          "Fail": "You become lost and cannot recall how you escaped; gain 1 Injury Condition and an Amnesia Condition."
        }
      },
      "Resolve the fail effect to accept": {
        "intro": "Gain an Agreement Condition. You are given a shantak to ride. As you fly, you hear strange chanting (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "You fear you are near Azathoth's court; lose 1 Sanity, gain 1 Glamour Spell, and close this Gate.",
          "Fail": ""
        }
      }
    }
  },
  {
    "cardId": 59,
    "expansionId": "The Dreamlands",
    "intro": "The Castle of the Ancient Ones seems abandoned save for a lone shantak resting in the center of an onyx courtyard. An insidious whisper urges you to mount the bizarre steed and fly to some unknown cosmic destination (<img src=\"images/Will.webp\">-1).",
    "choices": {
      "Pass": {
        "intro": "You mount the shantak but do not heed the voice in your head. Instead, you return safely to Earth. Close this Gate. Once home, you recite a ward to silence the whispering voice (<img src=\"images/Lore.webp\">).",
        "choices": {
          "Pass": "",
          "Fail": "It steals away a fragment of your mind; lose 1 Sanity and discard 1 Spell."
        }
      },
      "Fail": {
        "intro": "The shantak carries you toward the court of the Daemon Sultan. Lose 1 Sanity. You try to throw yourself off its back (<img src=\"images/Strength.webp\">).",
        "choices": {
          "Pass": "You wake up back on Earth; close this Gate.",
          "Fail": "Your mind and body are left in ruins; lose 1 Health and 1 Sanity."
        }
      }
    }
  }
];
