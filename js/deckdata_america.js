deckData.America = [
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
        Fail: "It's nothing more than horrific noise; lose 1 Sanity."
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
        Fail: "Lose 2 Sanity."
      }
    }
  }, {
    cardId: 9,
    expansionId: ForsakenLore,
    Arkham: {
      intro: "Ma Mathison shows you a journal left behind by one of the lodgers at her boarding house.[3] The text makes several oblique references to the occult, but you think you can decipher its meaning; test Lore-1.",
      choices: {
        Pass: "You determine the lodger's true intent; gain 1 Incantation Spell and spawn 1 Clue.",
        Fail: ""
      }
    },

    "Buenos Aires": {
      intro: "The subway car stops, and you hear the sound of hissing voices in the dark; test Observation-1.",
      choices: {
        Pass: "You discern the phrases being whispered; gain 1 Ritual Spell.",
        Fail: "The voices haunt you even after the lights are restored; gain a Hallucinations Condition."
      }
    },

    "San Francisco": {
      intro: "A private investigator prepares you to help him on a case. Improve Observation. He's looking for a strangely shaped skull that's gone missing after being recovered from a file. Your investigation reveals Atlantean symbols including the one for \"resurrection\"; test Lore-1).",
      choices: {
        Pass: "",
        Fail: "you do not notice the symbol for \"curse;\" gain a Cursed Condition."
      }
    }
  }, {
    cardId: 19,
    expansionId: MountainsOfMadness,
    Arkham: {
      intro: "A patron at Ma's Diner left behind an odd book. Gain 1 Old Journal Unique Asset. A series of strange sigils are written on its pages; test Lore-1.",
      choices: {
        Pass: "You decode the symbols; gain 1 Incantation Spell.",
        Fail: "You fear the owner will return to reclaim the book; gain 1 Pursuit Condition."
      }
    },

    "Buenos Aires": {
      intro: "You are horrified to find several blasphemous sculptures on display at the university; test Will-1.",
      choices: {
        Pass: "The sculptor approaches you; gain the Henry Wilcox Unique Asset.",
        Fail: "The vile images infect your dreams; lose 1 Sanity and gain 1 Madness Condition."
      }
    },

    "San Francisco": {
      intro: "The mechanical face inside a fortune-telling machine at Playland at the Beach seems to scare off most patrons; test Will.",
      choices: {
        Pass: "You steel yourself and seek your fortune; gain 1 Task Unique Asset.",
        Fail: "The destiny you fled continues to seek you out; lose 1 Sanity and gain 1 Pursuit Condition."
      }
    }
  }
]
