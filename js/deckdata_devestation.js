deckData.Devestation = [
  {
    cardId: 1,
    expansionId: CitiesInRuin,
    intro: "A friend of yours says he knows where an important treasure was hidden before the tragedy. Resolve the pass effect to send your friend to retrieve the object; or resolve the fail effect to look for it yourself.",
    choices: {
      "Send your friend to retrieve the object": {
        intro: "You impress on your friend how important this treasure would be to your cause; test Influence-1.",
        choices: {
          Pass: "Your friend returns successfully; gain 1 Artifact.",
          Fail: "Your friend absconds with the treasure and is never seen again; discard 1 Ally Asset."
        }
      },
      "To look for it yourself": {
        intro: "You search the area; test Observation-1.",
        choices: {
          Pass: "You find that the treasure was destroyed, but its fragment can still be used to ward off evil; retreat Doom by 1.",
          Fail: "You search the desolate wasteland fruitlessly; lose 1 Sanity and gain 1 Madness Condition."
        }
      }
    }
  }, {
    cardId: 2,
    expansionId: CitiesInRuin,
    intro: "A cult has established itself in the ruins of the city and is terrorizing those survivors who remain. Resolve the pass effect to convince the survivors to defend themselves; or resolve the fail effect to infiltrate the cult.",
    choices: {
      "Convince the survivors to defend themselves": {
        intro: "You gather the survivors and make an impassioned speech; test Influence-1.",
        choices: {
          Pass: "Their resistance is a worldwide inspiration; retreat Doom by 1.",
          Fail: "They all eventually succumb to the cult; lose 3 Sanity."
        }
      },
      "Infiltrate the cult": {
        intro: "The cult will not accept you unless you establish your arcane knowledge; test Lore-1.",
        choices: {
          Pass: "You sabotage the cultists and steal one of their prize possessions; gain 1 Artifact.",
          Fail: "They attack you; lose 2 Health."
        }
      }
    }
  }
];
