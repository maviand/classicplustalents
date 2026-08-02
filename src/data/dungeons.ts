export const PVE_CATS = {
  DUNGEONS: 'The New Dungeons (Winged Hubs)',
  RAIDS: 'Parallel Raid Tiers'
};

export const pveData = {
  [PVE_CATS.DUNGEONS]: [
  {
    "id": "StormwindVault",
    "name": "Stormwind Vaults",
    "loreHistory": "Hidden deep beneath the canals of Stormwind, this maximum-security prison houses the most dangerous criminals, defected nobles, and dark magic practitioners the kingdom has ever captured.",
    "strategyGuide": "Crowd control is mandatory. The tight corridors mean pulling multiple packs is fatal. Utilize corner pulls to break line of sight on the Defias marksmen.",
    "trashMobs": [
      "Corrupt Noble Guard",
      "Vault Warden",
      "Defias Infiltrator",
      "Bound Voidwalker"
    ],
    "associatedQuests": [
      "The King's Justice (Dungeon)",
      "Missing Diplomat: The Interrogation",
      "A Noble's Treachery"
    ],
    "speedrunStrats": "A Rogue can pick the lock to the old sewer grates, bypassing the entire first wing and going straight to Dextren Ward.",
    "environmentalHazards": "Triggering the alarm bells will cause infinite waves of guards to spawn until a player channels on the bell for 10 seconds to disable it.",
    "secrets": [
      "A hidden tunnel behind a loose brick leads back to the Stockades.",
      "Pickpocketing the Head Jailer yields the \"Sewer Key\"."
    ],
    "wings": [
      {
        "name": "The Upper Brig",
        "level": "25-30",
        "desc": "The holding cells.",
        "bosses": [
          "Warden Thelwater",
          "Targorr the Dread"
        ],
        "loot": [
          {
            "name": "Cloak of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Band of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+12 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "7g 78s"
          },
          {
            "name": "Breastplate of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+12 Spirit",
              "+12 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 18s"
          },
          {
            "name": "Pauldrons of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 74s"
          },
          {
            "name": "Pauldrons of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Strength",
              "+9 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "10g 72s"
          },
          {
            "name": "Legguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 63s"
          },
          {
            "name": "Legguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Staff",
            "stats": [
              "+5 Strength",
              "+14 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 18s"
          },
          {
            "name": "Pauldrons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "2g 78s"
          },
          {
            "name": "Sabatons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 51s"
          },
          {
            "name": "Pauldrons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 82s"
          }
        ]
      },
      {
        "name": "The Deep Cellblocks",
        "level": "45-50",
        "desc": "Where the true enemies are kept.",
        "bosses": [
          "High Cultist Zenn",
          "Dextren Ward"
        ],
        "loot": [
          {
            "name": "Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 93s"
          },
          {
            "name": "Amulet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 8s"
          },
          {
            "name": "Sabatons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+21 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+10 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "2g 38s"
          },
          {
            "name": "Pauldrons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+13 Strength",
              "+13 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 50s"
          },
          {
            "name": "Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+5 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "7g 68s"
          },
          {
            "name": "Breastplate of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+22 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 68s"
          },
          {
            "name": "Cloak of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+23 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 88s"
          },
          {
            "name": "Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+14 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "1g 0s"
          },
          {
            "name": "Sabatons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+5 Agility",
              "+10 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Signet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+21 Stamina",
              "+18 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 77s"
          },
          {
            "name": "Signet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+7 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 90s"
          },
          {
            "name": "Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "+9 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 1s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Mace",
            "stats": [
              "+10 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 42s"
          },
          {
            "name": "Signet of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+9 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "10g 25s"
          }
        ]
      },
      {
        "name": "The Interrogation Levels",
        "level": "55-60",
        "desc": "A descent into madness.",
        "bosses": [
          "Interrogator Vishas",
          "The Flesh-Shaper"
        ],
        "loot": [
          {
            "name": "Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+9 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 31s"
          },
          {
            "name": "Amulet of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+14 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 48s"
          },
          {
            "name": "Pauldrons of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 54s"
          },
          {
            "name": "Amulet of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 7s"
          },
          {
            "name": "Helm of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+20 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Breastplate of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+14 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 85s"
          },
          {
            "name": "Amulet of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+14 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 19s"
          },
          {
            "name": "Sabatons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+12 Agility",
              "+11 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 42s"
          },
          {
            "name": "Tome of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 34s"
          },
          {
            "name": "Tome of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 49s"
          },
          {
            "name": "Sabatons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+14 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "3g 82s"
          },
          {
            "name": "Sabatons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Strength",
              "+15 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 14s"
          },
          {
            "name": "Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 27s"
          },
          {
            "name": "Helm of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+18 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 94s"
          },
          {
            "name": "Cloak of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Stamina",
              "+11 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 53s"
          },
          {
            "name": "Signet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+6 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 30s"
          },
          {
            "name": "Breastplate of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+17 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "3g 3s"
          },
          {
            "name": "Breastplate of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+8 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "2g 0s"
          },
          {
            "name": "Pauldrons of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 7s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+11 Spirit",
              "+17 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "1g 19s"
          },
          {
            "name": "Pauldrons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "+9 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 24s"
          },
          {
            "name": "Breastplate of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+20 Stamina",
              "+5 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 95s"
          },
          {
            "name": "Helm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "7g 81s"
          },
          {
            "name": "Legguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 83s"
          },
          {
            "name": "Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+8 Strength",
              "+7 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "9g 77s"
          }
        ]
      }
    ]
  },
  {
    "id": "KarazhanCrypts",
    "name": "Karazhan Crypts",
    "loreHistory": "The dark, forgotten underbelly of Medivh's tower. These crypts hold the restless souls of those who died during the tower's chaotic construction and the subsequent magical fallout.",
    "strategyGuide": "Shadow and Frost resistance are incredibly valuable here. Healers must dispel the \"Suffocating Dread\" debuff immediately.",
    "trashMobs": [
      "Drowned Noble",
      "Sin-Eater",
      "Crypt Stalker",
      "Restless Spirit"
    ],
    "associatedQuests": [
      "Echoes of the Guardian",
      "The Upside-Down Sinners",
      "Cleansing the Crypts"
    ],
    "speedrunStrats": "Warlocks can use Eye of Kilrogg to trigger the portcullis switches remotely, saving minutes of walking.",
    "environmentalHazards": "In the Upside-Down Sinners wing, the water level slowly rises during boss encounters, threatening to drown the entire party.",
    "secrets": [
      "A hidden tome grants the party a permanent +10 Shadow Resistance buff for the dungeon.",
      "A neutral ghost vendor sells unique tailoring patterns."
    ],
    "wings": [
      {
        "name": "The Well of the Forgotten",
        "level": "58-60",
        "desc": "Mass graves.",
        "bosses": [
          "The Caretaker",
          "Amalgam of the Damned"
        ],
        "loot": [
          {
            "name": "Legguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 88s"
          },
          {
            "name": "Signet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+19 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Band of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "1g 89s"
          },
          {
            "name": "Tome of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+10 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 5s"
          },
          {
            "name": "Tome of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+7 Strength",
              "+12 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "3g 46s"
          },
          {
            "name": "Breastplate of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 40s"
          },
          {
            "name": "Cloak of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+22 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 0s"
          },
          {
            "name": "Sabatons of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+6 Strength",
              "+9 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 96s"
          },
          {
            "name": "Signet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+19 Strength",
              "+9 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 26s"
          },
          {
            "name": "Legguards of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 31s"
          },
          {
            "name": "Cloak of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+14 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "3g 9s"
          },
          {
            "name": "Legguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+8 Intellect",
              "+13 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 14s"
          },
          {
            "name": "Cloak of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+15 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 50s"
          },
          {
            "name": "Cloak of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+9 Agility",
              "+17 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "3g 39s"
          },
          {
            "name": "Helm of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Mace",
            "stats": [
              "+20 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 27s"
          },
          {
            "name": "Tome of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+12 Stamina",
              "+14 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 27s"
          },
          {
            "name": "Cloak of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Mace",
            "stats": [
              "+8 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 38s"
          },
          {
            "name": "Pauldrons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+6 Intellect",
              "+17 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Legguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+23 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 75s"
          },
          {
            "name": "Cloak of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "1g 75s"
          },
          {
            "name": "Helm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+10 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 8s"
          },
          {
            "name": "Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "3g 72s"
          },
          {
            "name": "Cloak of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+9 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 23s"
          },
          {
            "name": "Breastplate of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "7g 29s"
          },
          {
            "name": "Pauldrons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+11 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 84s"
          }
        ]
      },
      {
        "name": "The Upside-Down Sinners",
        "level": "60",
        "desc": "Underwater terror.",
        "bosses": [
          "The Drowning Terror",
          "Master of the Sinners"
        ],
        "loot": [
          {
            "name": "Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+23 Stamina",
              "+6 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "10g 95s"
          },
          {
            "name": "Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+12 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 68s"
          },
          {
            "name": "Legguards of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+19 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 37s"
          },
          {
            "name": "Sabatons of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 57s"
          },
          {
            "name": "Signet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 60s"
          },
          {
            "name": "Band of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+21 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Legguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "2g 45s"
          },
          {
            "name": "Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Strength",
              "+5 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 46s"
          },
          {
            "name": "Band of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+12 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 79s"
          },
          {
            "name": "Legguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+21 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "1g 6s"
          },
          {
            "name": "Helm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+6 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 16s"
          },
          {
            "name": "Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Intellect",
              "+16 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 27s"
          },
          {
            "name": "Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+6 Strength",
              "+5 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 14s"
          },
          {
            "name": "Signet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 19s"
          },
          {
            "name": "Pauldrons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Bow",
            "stats": [
              "+15 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 6s"
          },
          {
            "name": "Signet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Dagger",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 9s"
          },
          {
            "name": "Tome of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 83s"
          },
          {
            "name": "Signet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+22 Agility",
              "+15 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 48s"
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+24 Agility",
              "+17 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 48s"
          },
          {
            "name": "Sabatons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+14 Stamina",
              "+7 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 75s"
          },
          {
            "name": "Helm of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 33s"
          },
          {
            "name": "Amulet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Mace",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 84s"
          },
          {
            "name": "Legguards of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 40s"
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+8 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 18s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+14 Strength",
              "+8 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 87s"
          },
          {
            "name": "Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+23 Stamina",
              "+5 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "4g 48s"
          },
          {
            "name": "Amulet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "2g 68s"
          },
          {
            "name": "Tome of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 33s"
          },
          {
            "name": "Amulet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "7g 63s"
          }
        ]
      },
      {
        "name": "The Reliquary of Secrets",
        "level": "60",
        "desc": "Forbidden artifacts.",
        "bosses": [
          "The Animated Grimoire",
          "The Void-Sealer"
        ],
        "loot": [
          {
            "name": "Legguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+23 Spirit",
              "+8 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "9g 21s"
          },
          {
            "name": "Helm of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+7 Stamina",
              "+16 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 72s"
          },
          {
            "name": "Sabatons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Tome of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+10 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Amulet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+19 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Breastplate of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 46s"
          },
          {
            "name": "Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+10 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 54s"
          },
          {
            "name": "Breastplate of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Bow",
            "stats": [
              "+22 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 28s"
          },
          {
            "name": "Cloak of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 91s"
          },
          {
            "name": "Amulet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 8s"
          },
          {
            "name": "Amulet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+5 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 58s"
          },
          {
            "name": "Tome of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+16 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 60s"
          },
          {
            "name": "Breastplate of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+19 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 94s"
          },
          {
            "name": "Sabatons of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 11s"
          },
          {
            "name": "Amulet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 83s"
          },
          {
            "name": "Signet of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "3g 61s"
          },
          {
            "name": "Cloak of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+21 Agility",
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 29s"
          },
          {
            "name": "Pauldrons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+8 Spirit",
              "+18 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Signet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "2g 30s"
          },
          {
            "name": "Legguards of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 36s"
          },
          {
            "name": "Tome of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+7 Intellect",
              "+16 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 97s"
          },
          {
            "name": "Cloak of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+24 Stamina",
              "+15 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "7g 81s"
          },
          {
            "name": "Helm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 22s"
          },
          {
            "name": "Sabatons of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+11 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "1g 74s"
          },
          {
            "name": "Amulet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Breastplate of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Strength",
              "+6 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 56s"
          },
          {
            "name": "Pauldrons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 53s"
          },
          {
            "name": "Pauldrons of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 54s"
          },
          {
            "name": "Band of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Band of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+11 Intellect",
              "+5 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 10s"
          }
        ]
      }
    ]
  },
  {
    "id": "TimbermawHold",
    "name": "Timbermaw Hold",
    "loreHistory": "Once a sanctuary for the uncorrupted Timbermaw furbolgs, deep elements of the Legion's taint have seeped into the lower burrows, driving the chieftains mad.",
    "strategyGuide": "Cleanse the corrupted totems scattered around the boss rooms before pulling, or the bosses will enrage at 30% health.",
    "trashMobs": [
      "Fel-crazed Furbolg",
      "Corrupted Ancient",
      "Legion Vanguard",
      "Shadow-weaver"
    ],
    "associatedQuests": [
      "Purging the Hold",
      "The Chieftain's Fall",
      "A Debt Repaid"
    ],
    "speedrunStrats": "Having Exalted reputation with Timbermaw Hold allows you to skip the first two bosses entirely by speaking to a friendly NPC.",
    "environmentalHazards": "Puddles of fel-sludge slow movement speed and apply a stacking nature damage DoT.",
    "secrets": [
      "A hidden path behind a waterfall leads to a neutral vendor selling unique enchantments for Nature Resistance."
    ],
    "wings": [
      {
        "name": "The Corrupted Warrens",
        "level": "48-52",
        "desc": "Besieged hold.",
        "bosses": [
          "Chieftain Bloodmaw",
          "The Rotting Ancient"
        ],
        "loot": [
          {
            "name": "Amulet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Axe",
            "stats": [
              "+12 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 34s"
          },
          {
            "name": "Tome of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+20 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Tome of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+14 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 5s"
          },
          {
            "name": "Pauldrons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+7 Spirit",
              "+10 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "2g 53s"
          },
          {
            "name": "Pauldrons of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 98s"
          },
          {
            "name": "Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 78s"
          },
          {
            "name": "Cloak of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+9 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 25s"
          },
          {
            "name": "Cloak of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 33s"
          },
          {
            "name": "Legguards of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+13 Spirit",
              "+10 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 13s"
          },
          {
            "name": "Tome of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+5 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "10g 82s"
          },
          {
            "name": "Legguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "4g 77s"
          },
          {
            "name": "Legguards of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+20 Agility",
              "+6 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 77s"
          },
          {
            "name": "Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+23 Stamina",
              "+7 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "2g 59s"
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "3g 36s"
          },
          {
            "name": "Pauldrons of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Sword",
            "stats": [
              "+10 Strength",
              "+17 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 91s"
          }
        ]
      },
      {
        "name": "The Fel-Scar",
        "level": "55-58",
        "desc": "Demonic incursion.",
        "bosses": [
          "Xandros the Fel-Lord",
          "The Summoning Portal"
        ],
        "loot": [
          {
            "name": "Legguards of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+17 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 12s"
          },
          {
            "name": "Helm of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+21 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 29s"
          },
          {
            "name": "Breastplate of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+14 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 26s"
          },
          {
            "name": "Sabatons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+11 Agility",
              "+12 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 53s"
          },
          {
            "name": "Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 52s"
          },
          {
            "name": "Band of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+8 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 40s"
          },
          {
            "name": "Tome of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+10 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 55s"
          },
          {
            "name": "Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+11 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 74s"
          },
          {
            "name": "Helm of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+5 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "7g 28s"
          },
          {
            "name": "Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+9 Strength",
              "+10 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "10g 90s"
          },
          {
            "name": "Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+9 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 93s"
          },
          {
            "name": "Band of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+16 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 92s"
          },
          {
            "name": "Tome of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Bow",
            "stats": [
              "+11 Stamina",
              "+14 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "3g 12s"
          },
          {
            "name": "Band of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+10 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 21s"
          },
          {
            "name": "Tome of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 57s"
          },
          {
            "name": "Band of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 20s"
          },
          {
            "name": "Tome of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+13 Spirit",
              "+14 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Cloak of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Agility",
              "+5 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+8 Strength",
              "+11 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 70s"
          }
        ]
      },
      {
        "name": "The Ancestral Hollow",
        "level": "60",
        "desc": "Defiled burial grounds.",
        "bosses": [
          "The First Chieftain",
          "The Defiler"
        ],
        "loot": [
          {
            "name": "Legguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+8 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+10 Spirit",
              "+18 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "7g 82s"
          },
          {
            "name": "Amulet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Axe",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 96s"
          },
          {
            "name": "Amulet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+10 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Signet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+6 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Legguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 92s"
          },
          {
            "name": "Cloak of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+20 Stamina",
              "+17 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Cloak of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+11 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 45s"
          },
          {
            "name": "Tome of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+9 Stamina",
              "+11 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "2g 72s"
          },
          {
            "name": "Amulet of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+24 Spirit",
              "+15 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 93s"
          },
          {
            "name": "Tome of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+19 Agility",
              "+6 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 63s"
          },
          {
            "name": "Tome of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+14 Spirit",
              "+10 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "4g 89s"
          },
          {
            "name": "Amulet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Agility",
              "+17 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "7g 86s"
          },
          {
            "name": "Cloak of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+20 Stamina",
              "+9 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 13s"
          },
          {
            "name": "Pauldrons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 53s"
          },
          {
            "name": "Legguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+6 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 66s"
          },
          {
            "name": "Pauldrons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "7g 92s"
          },
          {
            "name": "Amulet of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+6 Intellect",
              "+18 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 66s"
          },
          {
            "name": "Amulet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 78s"
          },
          {
            "name": "Sabatons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "9g 40s"
          },
          {
            "name": "Legguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "2g 52s"
          },
          {
            "name": "Amulet of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+5 Stamina",
              "+16 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 7s"
          },
          {
            "name": "Amulet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 56s"
          },
          {
            "name": "Amulet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+15 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 56s"
          },
          {
            "name": "Legguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 63s"
          },
          {
            "name": "Band of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 57s"
          },
          {
            "name": "Amulet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+10 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Pauldrons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+8 Stamina",
              "+9 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 90s"
          },
          {
            "name": "Tome of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Legguards of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Staff",
            "stats": [
              "+20 Spirit",
              "+8 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 42s"
          }
        ]
      }
    ]
  },
  {
    "id": "UldumVaults",
    "name": "The Vaults of Uldum",
    "loreHistory": "An ancient Titan research facility buried beneath the sands of Tanaris. It houses the Engine of Origination, a device capable of resetting all life on Azeroth.",
    "strategyGuide": "Physical damage dealers must interrupt the Earthen Constructs' \"Stone Skin\" cast, or they become completely immune to physical attacks.",
    "trashMobs": [
      "Earthen Custodian",
      "Anubisath Sentinel",
      "Tol'vir Spellweaver"
    ],
    "associatedQuests": [
      "The Secrets of the Makers",
      "Disarming the Engine",
      "Brann's Expedition"
    ],
    "speedrunStrats": "Bypassing the primary security grid by solving the constellation puzzle in under 2 minutes opens a shortcut directly to the final boss.",
    "environmentalHazards": "Lasers sweep the corridors. Touching them instantly kills the player and alerts nearby trash.",
    "secrets": [
      "An archaeology puzzle in the Maker's Terrace rewards a unique epic mount.",
      "Hidden Titan discs reveal lore about the Old Gods."
    ],
    "wings": [
      {
        "name": "The Maker's Terrace",
        "level": "55-58",
        "desc": "Titan facility.",
        "bosses": [
          "High-Executor Norgannon",
          "Matrix-Lord"
        ],
        "loot": [
          {
            "name": "Pauldrons of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Agility",
              "+5 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 39s"
          },
          {
            "name": "Tome of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+6 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "7g 59s"
          },
          {
            "name": "Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+23 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "10g 30s"
          },
          {
            "name": "Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+11 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 3s"
          },
          {
            "name": "Amulet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+6 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 10s"
          },
          {
            "name": "Amulet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+17 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 56s"
          },
          {
            "name": "Signet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+8 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 76s"
          },
          {
            "name": "Legguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+5 Strength",
              "+15 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 66s"
          },
          {
            "name": "Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Bow",
            "stats": [
              "+10 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Cloak of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+22 Spirit",
              "+18 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 5s"
          },
          {
            "name": "Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Spirit",
              "+7 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "10g 42s"
          },
          {
            "name": "Helm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+21 Strength",
              "+8 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 45s"
          },
          {
            "name": "Legguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 97s"
          },
          {
            "name": "Helm of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+11 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 58s"
          },
          {
            "name": "Legguards of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+14 Agility",
              "+16 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "7g 14s"
          },
          {
            "name": "Signet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Bow",
            "stats": [
              "+7 Spirit",
              "+17 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Tome of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+21 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Tome of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "10g 56s"
          },
          {
            "name": "Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+11 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 21s"
          }
        ]
      },
      {
        "name": "The Obsidian Quarry",
        "level": "58-60",
        "desc": "Construct manufacturing.",
        "bosses": [
          "The Sculptor",
          "The Hive-Mind Incursor"
        ],
        "loot": [
          {
            "name": "Amulet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 27s"
          },
          {
            "name": "Cloak of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+14 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 52s"
          },
          {
            "name": "Helm of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+20 Strength",
              "+8 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Amulet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+19 Intellect",
              "+13 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 3s"
          },
          {
            "name": "Cloak of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+5 Strength",
              "+11 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 58s"
          },
          {
            "name": "Helm of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+9 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 11s"
          },
          {
            "name": "Cloak of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Agility",
              "+17 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 42s"
          },
          {
            "name": "Breastplate of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+8 Spirit",
              "+9 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 98s"
          },
          {
            "name": "Signet of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+17 Intellect",
              "+9 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 10s"
          },
          {
            "name": "Band of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+8 Spirit",
              "+5 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 29s"
          },
          {
            "name": "Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+23 Spirit",
              "+16 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 49s"
          },
          {
            "name": "Sabatons of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 96s"
          },
          {
            "name": "Legguards of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+17 Intellect",
              "+19 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 26s"
          },
          {
            "name": "Cloak of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 41s"
          },
          {
            "name": "Tome of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+14 Stamina",
              "+15 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 25s"
          },
          {
            "name": "Amulet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 82s"
          },
          {
            "name": "Helm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+10 Agility",
              "+8 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 47s"
          },
          {
            "name": "Tome of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 21s"
          },
          {
            "name": "Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+11 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 2s"
          },
          {
            "name": "Pauldrons of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+13 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 86s"
          },
          {
            "name": "Signet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 8s"
          },
          {
            "name": "Band of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+7 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 75s"
          },
          {
            "name": "Sabatons of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+21 Intellect",
              "+5 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 55s"
          },
          {
            "name": "Pauldrons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+6 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 7s"
          },
          {
            "name": "Cloak of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Intellect",
              "+19 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 71s"
          }
        ]
      },
      {
        "name": "The Engine of Origination",
        "level": "60",
        "desc": "The core.",
        "bosses": [
          "General Rajaxx's Vanguard",
          "Avatar of the Makers"
        ],
        "loot": [
          {
            "name": "Legguards of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+17 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 21s"
          },
          {
            "name": "Tome of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+9 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 49s"
          },
          {
            "name": "Pauldrons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+14 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 66s"
          },
          {
            "name": "Tome of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "2g 79s"
          },
          {
            "name": "Signet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 34s"
          },
          {
            "name": "Pauldrons of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 41s"
          },
          {
            "name": "Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+13 Intellect",
              "+17 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 75s"
          },
          {
            "name": "Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+7 Stamina",
              "+5 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 56s"
          },
          {
            "name": "Helm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 53s"
          },
          {
            "name": "Sabatons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 82s"
          },
          {
            "name": "Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+19 Agility",
              "+16 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 44s"
          },
          {
            "name": "Amulet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 7s"
          },
          {
            "name": "Sabatons of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+24 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 94s"
          },
          {
            "name": "Breastplate of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Intellect",
              "+16 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 52s"
          },
          {
            "name": "Signet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 14s"
          },
          {
            "name": "Helm of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 64s"
          },
          {
            "name": "Breastplate of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+19 Strength",
              "+7 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 48s"
          },
          {
            "name": "Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 3s"
          },
          {
            "name": "Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 68s"
          },
          {
            "name": "Cloak of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+6 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 65s"
          },
          {
            "name": "Band of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "10g 15s"
          },
          {
            "name": "Pauldrons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Mace",
            "stats": [
              "+17 Intellect",
              "+9 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 56s"
          },
          {
            "name": "Signet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+8 Strength",
              "+8 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 49s"
          },
          {
            "name": "Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 4s"
          },
          {
            "name": "Sabatons of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "3g 29s"
          },
          {
            "name": "Signet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+13 Spirit",
              "+8 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 45s"
          },
          {
            "name": "Cloak of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Intellect",
              "+17 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 94s"
          },
          {
            "name": "Legguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+21 Spirit",
              "+13 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 36s"
          },
          {
            "name": "Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Sword",
            "stats": [
              "+6 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Helm of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 64s"
          },
          {
            "name": "Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+9 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 1s"
          },
          {
            "name": "Helm of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 80s"
          },
          {
            "name": "Pauldrons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Bow",
            "stats": [
              "+10 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 74s"
          },
          {
            "name": "Pauldrons of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "9g 2s"
          },
          {
            "name": "Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Sword",
            "stats": [
              "+12 Agility",
              "+11 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 77s"
          },
          {
            "name": "Amulet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Spirit",
              "+10 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "10g 23s"
          },
          {
            "name": "Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+14 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "7g 1s"
          },
          {
            "name": "Helm of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Spirit",
              "+19 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "7g 22s"
          },
          {
            "name": "Cloak of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+6 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 4s"
          },
          {
            "name": "Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+20 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 76s"
          }
        ]
      }
    ]
  },
  {
    "id": "GrimBatol",
    "name": "Grim Batol Tunnels",
    "loreHistory": "The ancient mountain fortress of the Wildhammer dwarves, later claimed by the Dragonmaw Orcs to enslave the Red Dragonflight. Now, Twilight Cultists and Dark Irons fight for control.",
    "strategyGuide": "Kite the Molten Elementals away from the Twilight Cultists; if they merge, they form an unstoppable boss-level mob.",
    "trashMobs": [
      "Dragonmaw Slaver",
      "Twilight Corruptor",
      "Dark Iron Saboteur",
      "Enslaved Whelp"
    ],
    "associatedQuests": [
      "The Legacy of the Wildhammer",
      "Freeing the Brood",
      "Twilight's Hammer Cult"
    ],
    "speedrunStrats": "Engineers can repair a broken minecart to ride it past the entire second wing's trash packs.",
    "environmentalHazards": "Searing magma vents periodically erupt, dealing massive fire damage and launching players into the air.",
    "secrets": [
      "A secret Wildhammer stash requires all 5 players to stand on pressure plates simultaneously."
    ],
    "wings": [
      {
        "name": "The Dragonmaw Gates",
        "level": "52-55",
        "desc": "Fortified entrance.",
        "bosses": [
          "The Siege Master",
          "Dragonmaw Proto-Drake"
        ],
        "loot": [
          {
            "name": "Cloak of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+9 Strength",
              "+6 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 3s"
          },
          {
            "name": "Signet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+11 Strength",
              "+16 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Helm of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 29s"
          },
          {
            "name": "Amulet of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 5s"
          },
          {
            "name": "Legguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+22 Stamina",
              "+15 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 23s"
          },
          {
            "name": "Cloak of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+11 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "2g 93s"
          },
          {
            "name": "Pauldrons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+20 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 97s"
          },
          {
            "name": "Signet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+7 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 35s"
          },
          {
            "name": "Legguards of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Dagger",
            "stats": [
              "+13 Agility",
              "+13 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 69s"
          },
          {
            "name": "Signet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+8 Intellect",
              "+9 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 65s"
          },
          {
            "name": "Helm of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 63s"
          },
          {
            "name": "Signet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+6 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 12s"
          },
          {
            "name": "Breastplate of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "1g 47s"
          },
          {
            "name": "Tome of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+11 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 27s"
          }
        ]
      },
      {
        "name": "The Hatcheries",
        "level": "55-58",
        "desc": "Red Dragonflight breeding.",
        "bosses": [
          "The Broodmother",
          "The Corrupted Whelp-Master"
        ],
        "loot": [
          {
            "name": "Cloak of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Bow",
            "stats": [
              "+5 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Amulet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Legguards of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+13 Intellect",
              "+11 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "2g 10s"
          },
          {
            "name": "Pauldrons of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+7 Stamina",
              "+9 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "3g 0s"
          },
          {
            "name": "Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 22s"
          },
          {
            "name": "Legguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+6 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 65s"
          },
          {
            "name": "Cloak of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Band of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+6 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 81s"
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+12 Intellect",
              "+19 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 7s"
          },
          {
            "name": "Sabatons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+7 Agility",
              "+6 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 57s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+8 Intellect",
              "+7 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "9g 94s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+8 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 25s"
          },
          {
            "name": "Pauldrons of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+7 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 26s"
          },
          {
            "name": "Tome of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+8 Strength",
              "+15 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 88s"
          },
          {
            "name": "Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+22 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 62s"
          },
          {
            "name": "Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+23 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 64s"
          },
          {
            "name": "Pauldrons of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 96s"
          },
          {
            "name": "Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 66s"
          },
          {
            "name": "Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Intellect",
              "+7 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 88s"
          },
          {
            "name": "Cloak of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+14 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 89s"
          }
        ]
      },
      {
        "name": "The Deep Forge",
        "level": "60",
        "desc": "Wildhammer forges.",
        "bosses": [
          "The Grand Smith",
          "The Anvil of Doom"
        ],
        "loot": [
          {
            "name": "Band of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+9 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 22s"
          },
          {
            "name": "Signet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "9g 18s"
          },
          {
            "name": "Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+17 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 97s"
          },
          {
            "name": "Cloak of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 23s"
          },
          {
            "name": "Legguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+5 Intellect",
              "+13 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 27s"
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+14 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Cloak of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Tome of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+10 Agility",
              "+6 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "4g 8s"
          },
          {
            "name": "Amulet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+6 Strength",
              "+7 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "7g 27s"
          },
          {
            "name": "Cloak of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+9 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 78s"
          },
          {
            "name": "Signet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+8 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 39s"
          },
          {
            "name": "Pauldrons of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+10 Intellect",
              "+9 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "7g 73s"
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Staff",
            "stats": [
              "+15 Agility",
              "+11 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "7g 95s"
          },
          {
            "name": "Tome of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+11 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 60s"
          },
          {
            "name": "Legguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 24s"
          },
          {
            "name": "Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 28s"
          },
          {
            "name": "Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 23s"
          },
          {
            "name": "Breastplate of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Bow",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 61s"
          },
          {
            "name": "Helm of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+14 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 11s"
          },
          {
            "name": "Amulet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Dagger",
            "stats": [
              "+8 Stamina",
              "+19 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 14s"
          },
          {
            "name": "Band of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+24 Stamina",
              "+6 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 97s"
          },
          {
            "name": "Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+7 Agility",
              "+9 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Band of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+12 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "10g 79s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+16 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 45s"
          },
          {
            "name": "Tome of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+8 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "3g 37s"
          },
          {
            "name": "Breastplate of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+5 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 33s"
          },
          {
            "name": "Signet of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+6 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 29s"
          },
          {
            "name": "Helm of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 3s"
          },
          {
            "name": "Amulet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+10 Strength",
              "+10 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Tome of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+10 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 74s"
          }
        ]
      }
    ]
  },
  {
    "id": "HyjalBarrowDens",
    "name": "The Barrow Dens",
    "loreHistory": "The sacred underground hibernation chambers of the druids in Mount Hyjal. The Emerald Nightmare has begun seeping through the roots of Nordrassil, corrupting the sleeping druids.",
    "strategyGuide": "Dispel \"Slumbering Poison\" immediately. If it expires, the player is put to sleep for 30 seconds and cannot be woken by damage.",
    "trashMobs": [
      "Nightmare Terror",
      "Corrupted Druid",
      "Root-Bound Horror",
      "Satyr Infiltrator"
    ],
    "associatedQuests": [
      "Waking the Dreamer",
      "The Nightmare's Grasp",
      "Cleansing the Roots"
    ],
    "speedrunStrats": "Druids in the party can use Hibernate on the elite Nightmare Terrors to easily bypass the hardest trash packs.",
    "environmentalHazards": "Pockets of Nightmare gas disorient players and slowly drain mana.",
    "secrets": [
      "Awakening a specific druid grants the party the \"Blessing of Cenarius\", increasing all stats by 5%."
    ],
    "wings": [
      {
        "name": "The Slumbering Halls",
        "level": "58-60",
        "desc": "Nightmare.",
        "bosses": [
          "The Nightmare Stalker",
          "The Waking Terror"
        ],
        "loot": [
          {
            "name": "Amulet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+12 Spirit",
              "+15 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 80s"
          },
          {
            "name": "Cloak of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "4g 34s"
          },
          {
            "name": "Sabatons of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+19 Spirit",
              "+19 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "3g 76s"
          },
          {
            "name": "Signet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+16 Strength",
              "+13 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "9g 43s"
          },
          {
            "name": "Tome of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+12 Spirit",
              "+11 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Cloak of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Axe",
            "stats": [
              "+14 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 16s"
          },
          {
            "name": "Tome of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+11 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "3g 86s"
          },
          {
            "name": "Cloak of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+12 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 56s"
          },
          {
            "name": "Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+5 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 14s"
          },
          {
            "name": "Band of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+20 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "2g 12s"
          },
          {
            "name": "Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+11 Stamina",
              "+15 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 59s"
          },
          {
            "name": "Band of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "7g 75s"
          },
          {
            "name": "Band of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+8 Spirit",
              "+9 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Legguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Cloak of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Legguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 76s"
          },
          {
            "name": "Band of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 93s"
          },
          {
            "name": "Breastplate of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+21 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 28s"
          },
          {
            "name": "Helm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 35s"
          },
          {
            "name": "Tome of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+9 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "3g 1s"
          },
          {
            "name": "Breastplate of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+16 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 71s"
          },
          {
            "name": "Legguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Axe",
            "stats": [
              "+22 Intellect",
              "+11 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 26s"
          },
          {
            "name": "Legguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 10s"
          },
          {
            "name": "Pauldrons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+8 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 91s"
          }
        ]
      },
      {
        "name": "The Roots of Nordrassil",
        "level": "60",
        "desc": "Deep caverns.",
        "bosses": [
          "Archimonde's Echo",
          "The Root-Tender"
        ],
        "loot": [
          {
            "name": "Signet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+6 Stamina",
              "+7 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 30s"
          },
          {
            "name": "Pauldrons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+5 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 44s"
          },
          {
            "name": "Tome of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+10 Agility",
              "+14 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 96s"
          },
          {
            "name": "Pauldrons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "1g 38s"
          },
          {
            "name": "Sabatons of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+16 Agility",
              "+18 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 52s"
          },
          {
            "name": "Amulet of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+14 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "1g 52s"
          },
          {
            "name": "Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+19 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 94s"
          },
          {
            "name": "Helm of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+20 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 85s"
          },
          {
            "name": "Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Stamina",
              "+14 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Tome of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+11 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 51s"
          },
          {
            "name": "Sabatons of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 58s"
          },
          {
            "name": "Sabatons of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+6 Agility",
              "+5 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+6 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "7g 36s"
          },
          {
            "name": "Sabatons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+5 Strength",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 33s"
          },
          {
            "name": "Amulet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "3g 46s"
          },
          {
            "name": "Breastplate of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+7 Agility",
              "+7 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+9 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Signet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+7 Stamina",
              "+11 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 5s"
          },
          {
            "name": "Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+7 Strength",
              "+17 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 65s"
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+8 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 66s"
          },
          {
            "name": "Breastplate of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 83s"
          },
          {
            "name": "Band of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+16 Agility",
              "+14 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 77s"
          },
          {
            "name": "Signet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+14 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Pauldrons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+5 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 94s"
          },
          {
            "name": "Tome of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+16 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Cloak of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+11 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 8s"
          },
          {
            "name": "Signet of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 34s"
          },
          {
            "name": "Signet of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+22 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Spirit",
              "+13 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 97s"
          }
        ]
      }
    ]
  },
  {
    "id": "Mazthoril",
    "name": "Mazthoril Deeps",
    "loreHistory": "A sprawling cavern system in Winterspring used by the Blue Dragonflight to horde and protect arcane artifacts and dangerous magic.",
    "strategyGuide": "Magic damage is incredibly high here. Mages with Dampen Magic are extremely useful. Interrupt the \"Arcane Volley\" at all costs.",
    "trashMobs": [
      "Arcane Anomaly",
      "Blue Dragonkin",
      "Spell-Thief",
      "Crystalline Golem"
    ],
    "associatedQuests": [
      "The Blue Flight's Secret",
      "Retrieving the Arcanum",
      "Haleh's Request"
    ],
    "speedrunStrats": "Reflecting the Arcane Anomalies' spells back at them causes them to instantly shatter.",
    "environmentalHazards": "Wild magic zones randomly silence or disarm players standing in them.",
    "secrets": [
      "A locked arcane chest contains a rare enchant recipe, but requires a Mage to decode the runes."
    ],
    "wings": [
      {
        "name": "The Arcane Vaults",
        "level": "55-60",
        "desc": "Blue Dragonflight archive.",
        "bosses": [
          "The Archivist",
          "Haleh's Betrayer"
        ],
        "loot": [
          {
            "name": "Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+23 Spirit",
              "+5 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 95s"
          },
          {
            "name": "Legguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+6 Agility",
              "+17 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 48s"
          },
          {
            "name": "Pauldrons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+19 Agility",
              "+15 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 33s"
          },
          {
            "name": "Helm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Ranged",
            "type": "Sword",
            "stats": [
              "+6 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 7s"
          },
          {
            "name": "Breastplate of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Strength",
              "+15 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 66s"
          },
          {
            "name": "Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "4g 33s"
          },
          {
            "name": "Helm of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 32s"
          },
          {
            "name": "Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+16 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 4s"
          },
          {
            "name": "Sabatons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+21 Spirit",
              "+8 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 20s"
          },
          {
            "name": "Signet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 98s"
          },
          {
            "name": "Helm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 76s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+19 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 60s"
          },
          {
            "name": "Helm of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+14 Spirit",
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 51s"
          },
          {
            "name": "Band of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+5 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "2g 27s"
          },
          {
            "name": "Breastplate of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+11 Stamina",
              "+14 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 48s"
          },
          {
            "name": "Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+9 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 74s"
          },
          {
            "name": "Sabatons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "3g 26s"
          },
          {
            "name": "Sabatons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "7g 2s"
          },
          {
            "name": "Tome of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+14 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 53s"
          },
          {
            "name": "Band of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+8 Intellect",
              "+18 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 68s"
          },
          {
            "name": "Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 8s"
          },
          {
            "name": "Breastplate of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+8 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 31s"
          },
          {
            "name": "Band of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+7 Intellect",
              "+10 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "1g 90s"
          },
          {
            "name": "Cloak of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+7 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 27s"
          },
          {
            "name": "Sabatons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          }
        ]
      }
    ]
  },
  {
    "id": "GilneasCity",
    "name": "Gilneas City (Instanced)",
    "loreHistory": "The capital city of Gilneas is in flames. A massive worgen outbreak has overrun the streets, and Lord Godfrey has initiated a brutal martial law lockdown.",
    "strategyGuide": "The streets are packed with fast-moving Worgen. Use the city's cannons to break through barricades and thin out the hordes.",
    "trashMobs": [
      "Feral Worgen",
      "Gilnean Royal Guard",
      "Crazed Citizen",
      "Bloodfang Lurker"
    ],
    "associatedQuests": [
      "The Fall of Gilneas",
      "Lord Godfrey's Treason",
      "Evacuating the Uninfected"
    ],
    "speedrunStrats": "A rogue can stealth through the rooftops, dropping rope ladders down for the rest of the party to skip the street fighting.",
    "environmentalHazards": "Burning buildings randomly collapse, causing massive AoE fire damage.",
    "secrets": [
      "Saving a hidden group of civilians rewards a unique Gilnean tabard."
    ],
    "wings": [
      {
        "name": "The Greymane District",
        "level": "45-50",
        "desc": "Burning capital.",
        "bosses": [
          "Lord Godfrey",
          "The Royal Guard"
        ],
        "loot": [
          {
            "name": "Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+6 Spirit",
              "+18 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 32s"
          },
          {
            "name": "Cloak of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 4s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+15 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Tome of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 28s"
          },
          {
            "name": "Cloak of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+7 Agility",
              "+5 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 67s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+10 Agility",
              "+11 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 38s"
          },
          {
            "name": "Legguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+14 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 78s"
          },
          {
            "name": "Signet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 17s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 15s"
          },
          {
            "name": "Breastplate of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Spirit",
              "+13 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+12 Spirit",
              "+14 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 57s"
          },
          {
            "name": "Cloak of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Mace",
            "stats": [
              "+5 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Stamina",
              "+17 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Amulet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "10g 90s"
          },
          {
            "name": "Cloak of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Agility",
              "+9 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 60s"
          },
          {
            "name": "Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 0s"
          },
          {
            "name": "Pauldrons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Agility",
              "+18 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 94s"
          },
          {
            "name": "Sabatons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+20 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "2g 42s"
          },
          {
            "name": "Breastplate of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Intellect",
              "+14 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 76s"
          },
          {
            "name": "Sabatons of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+9 Spirit",
              "+7 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 64s"
          }
        ]
      }
    ]
  },
  {
    "id": "GnomereganDeeps",
    "name": "Gnomeregan Deeps",
    "loreHistory": "The lowest, most irradiated levels of the fallen gnome capital. The troggs here have mutated into horrific, glowing monstrosities.",
    "strategyGuide": "Radiation poisoning requires constant cleansing. Do not step in the green sludge.",
    "trashMobs": [
      "Irradiated Trogg",
      "Sludge Monstrosity",
      "Malfunctioning Cleaner Bot"
    ],
    "associatedQuests": [
      "The Ultimate Cure",
      "Thermaplugg's Final Echo",
      "Data Retrieval"
    ],
    "speedrunStrats": "Using a Goblin Jumper Cable on a broken elevator immediately drops the party to the final boss room.",
    "environmentalHazards": "Radiation vents periodically expel toxic gas. Players must use decontamination showers scattered throughout the instance.",
    "secrets": [
      "A rare engineering schematic drops from a hidden, un-targetable gnome ninja if you reveal him with a flare."
    ],
    "wings": [
      {
        "name": "The Irradiation Vats",
        "level": "35-45",
        "desc": "Pure toxic sludge.",
        "bosses": [
          "Viscous Fallout",
          "Mekgineer Thermaplugg (Echo)"
        ],
        "loot": [
          {
            "name": "Pauldrons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+11 Spirit",
              "+14 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 40s"
          },
          {
            "name": "Helm of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 63s"
          },
          {
            "name": "Helm of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Staff",
            "stats": [
              "+6 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 94s"
          },
          {
            "name": "Amulet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 20s"
          },
          {
            "name": "Cloak of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+6 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 66s"
          },
          {
            "name": "Breastplate of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 12s"
          },
          {
            "name": "Cloak of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+9 Agility",
              "+13 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+7 Stamina",
              "+8 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+6 Stamina",
              "+6 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "2g 3s"
          },
          {
            "name": "Legguards of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+11 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 59s"
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Breastplate of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 66s"
          },
          {
            "name": "Tome of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 3s"
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 9s"
          },
          {
            "name": "Sabatons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+16 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 54s"
          },
          {
            "name": "Cloak of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+16 Agility",
              "+9 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "4g 52s"
          },
          {
            "name": "Band of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+20 Intellect",
              "+10 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 68s"
          },
          {
            "name": "Signet of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+11 Spirit",
              "+15 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 21s"
          },
          {
            "name": "Signet of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 12s"
          }
        ]
      }
    ]
  },
  {
    "id": "ScarletCitadel",
    "name": "The Scarlet Citadel",
    "loreHistory": "The ultimate fanatic stronghold located in Tyr's Hand. The highest ranking members of the Scarlet Crusade coordinate their holy war from within these heavily fortified walls.",
    "strategyGuide": "The Crusade healers must be CC'd or killed instantly. They will chain-heal each other and cast massive holy novas.",
    "trashMobs": [
      "Scarlet Inquisitor",
      "Crusade Commander",
      "Holy Zealot",
      "Crimson Hound"
    ],
    "associatedQuests": [
      "The Grand Inquisitor",
      "Purging the Fanatics",
      "The Ashbringer's Legacy"
    ],
    "speedrunStrats": "Mind Controlling a Scarlet Inquisitor allows you to use their \"Open Gates\" spell, bypassing the massive courtyard fight.",
    "environmentalHazards": "Holy fire rains from the parapets during the outdoor sections. Players must move between covered corridors.",
    "secrets": [
      "Finding the true Ashbringer's hidden reliquary triggers an entirely unique roleplay event with Highlord Mograine's ghost."
    ],
    "wings": [
      {
        "name": "The Inquisition",
        "level": "50-55",
        "desc": "Tyr's Hand torture chambers.",
        "bosses": [
          "Grand Inquisitor Isillien",
          "Scarlet Executioner"
        ],
        "loot": [
          {
            "name": "Tome of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+22 Stamina",
              "+8 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 46s"
          },
          {
            "name": "Breastplate of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 70s"
          },
          {
            "name": "Tome of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+23 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "1g 82s"
          },
          {
            "name": "Signet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Dagger",
            "stats": [
              "+21 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Breastplate of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+6 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Signet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 30s"
          },
          {
            "name": "Signet of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 15s"
          },
          {
            "name": "Tome of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+11 Intellect",
              "+16 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 93s"
          },
          {
            "name": "Helm of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+14 Stamina",
              "+19 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 69s"
          },
          {
            "name": "Helm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Intellect",
              "+15 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Stamina",
              "+5 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Signet of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+7 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "4g 91s"
          },
          {
            "name": "Breastplate of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "+11 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 89s"
          },
          {
            "name": "Sabatons of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+8 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 43s"
          },
          {
            "name": "Breastplate of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+21 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 9s"
          },
          {
            "name": "Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+9 Intellect",
              "+8 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 8s"
          },
          {
            "name": "Cloak of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 6s"
          },
          {
            "name": "Pauldrons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 54s"
          },
          {
            "name": "Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+10 Spirit",
              "+5 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "7g 43s"
          },
          {
            "name": "Cloak of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+5 Spirit",
              "+9 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 20s"
          }
        ]
      }
    ]
  }
],
  [PVE_CATS.RAIDS]: [
  {
    "id": "EmeraldNightmare",
    "name": "The Emerald Nightmare",
    "tier": "Tier 1.5 (20 Man)",
    "desc": "Entered through the four great portals in Ashenvale, Feralas, Duskwood, and the Hinterlands. A sprawling, non-linear raid.",
    "loreHistory": "The four great trees of Azeroth have fully succumbed to the Nightmare. Ysera's greatest lieutenants have been twisted into horrific shadows of their former selves.",
    "strategyGuide": "A non-linear raid where the raid must frequently split into 2 or 4 groups to tackle portals simultaneously. Communication is paramount.",
    "trashMobs": [
      "Nightmare Drake",
      "Corrupted Keeper",
      "Shadow-Bough Treant",
      "Dream-Eater"
    ],
    "associatedQuests": [
      "The Waking Nightmare (Raid)",
      "Tears of the Dreamer"
    ],
    "speedrunStrats": "Defeating all four dragons within 45 minutes triggers a secret hard-mode encounter against Eranikus.",
    "environmentalHazards": "The Nightmare Fog constantly shifts. Standing in it too long mind-controls the player.",
    "secrets": [
      "Collecting the hidden Dream Fragments allows you to forge a unique Nature Resistance epic trinket."
    ],
    "bosses": [
      "Lethon",
      "Emeriss",
      "Taerar",
      "Ysondre",
      "Eranikus"
    ],
    "loot": [
      {
        "name": "Sabatons of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+9 Agility",
          "+9 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 9s"
      },
      {
        "name": "Tome of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+5 Spirit",
          "+9 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "3g 54s"
      },
      {
        "name": "Legguards of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+16 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 75s"
      },
      {
        "name": "Amulet of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+24 Agility",
          "+8 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "3g 87s"
      },
      {
        "name": "Breastplate of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 79s"
      },
      {
        "name": "Sabatons of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+17 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 71s"
      },
      {
        "name": "Cloak of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+14 Strength",
          "+9 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 57s"
      },
      {
        "name": "Signet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 84s"
      },
      {
        "name": "Amulet of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Mace",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 57s"
      },
      {
        "name": "Breastplate of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+14 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 16s"
      },
      {
        "name": "Signet of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+15 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 78s"
      },
      {
        "name": "Breastplate of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Intellect",
          "+19 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 22s"
      },
      {
        "name": "Pauldrons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+14 Agility",
          "+16 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 83s"
      },
      {
        "name": "Cloak of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+17 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "6g 55s"
      },
      {
        "name": "Pauldrons of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "7g 18s"
      },
      {
        "name": "Tome of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+19 Spirit",
          "+8 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 65s"
      },
      {
        "name": "Band of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Sword",
        "stats": [
          "+12 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 30s"
      },
      {
        "name": "Breastplate of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Bow",
        "stats": [
          "+6 Strength",
          "+16 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 83s"
      },
      {
        "name": "Legguards of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Strength",
          "+16 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "4g 54s"
      },
      {
        "name": "Band of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 50s"
      },
      {
        "name": "Cloak of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 68s"
      },
      {
        "name": "Cloak of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+6 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 4s"
      },
      {
        "name": "Sabatons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+7 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "9g 70s"
      },
      {
        "name": "Sabatons of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+20 Stamina",
          "+12 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "4g 90s"
      },
      {
        "name": "Band of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+7 Stamina",
          "+9 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "8g 87s"
      },
      {
        "name": "Signet of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+22 Spirit",
          "+11 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "2g 60s"
      },
      {
        "name": "Amulet of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+6 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 21s"
      },
      {
        "name": "Sabatons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+11 Strength",
          "+9 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 71s"
      },
      {
        "name": "Legguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+17 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "4g 96s"
      },
      {
        "name": "Band of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+22 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 56s"
      },
      {
        "name": "Helm of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+7 Spirit",
          "+5 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 20s"
      },
      {
        "name": "Sabatons of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+6 Spirit",
          "+11 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 19s"
      },
      {
        "name": "Breastplate of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 77s"
      },
      {
        "name": "Sabatons of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+8 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 74s"
      },
      {
        "name": "Legguards of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+12 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 65s"
      },
      {
        "name": "Breastplate of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+13 Agility",
          "+18 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 36s"
      },
      {
        "name": "Sabatons of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+15 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 6s"
      },
      {
        "name": "Legguards of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+13 Stamina",
          "+13 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 34s"
      },
      {
        "name": "Amulet of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+8 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 0s"
      },
      {
        "name": "Cloak of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+17 Spirit",
          "+16 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 68s"
      },
      {
        "name": "Tome of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Mace",
        "stats": [
          "+22 Spirit",
          "+13 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "10g 59s"
      },
      {
        "name": "Amulet of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+15 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 58s"
      },
      {
        "name": "Pauldrons of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+14 Stamina",
          "+14 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "5g 63s"
      },
      {
        "name": "Tome of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+5 Strength",
          "+16 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "5g 41s"
      },
      {
        "name": "Tome of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+17 Strength",
          "+9 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 71s"
      },
      {
        "name": "Breastplate of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+16 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "4g 87s"
      },
      {
        "name": "Tome of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+9 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 70s"
      },
      {
        "name": "Band of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+17 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "1g 51s"
      },
      {
        "name": "Band of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 84s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Bow",
        "stats": [
          "+8 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "7g 60s"
      }
    ]
  },
  {
    "id": "GrimBatolRaid",
    "name": "Grim Batol",
    "tier": "Tier 2 (40 Man)",
    "desc": "The heart of the mountain where the Dragonmaw Clan enslaves the Red Dragonflight.",
    "loreHistory": "Using the Demon Soul, the orcs have broken the will of Alexstrasza. The raid must navigate the mountain to destroy the artifact and free the Life-Binder.",
    "strategyGuide": "The Red Dragonflight is enslaved; killing dragons destroys their loot and reduces your end-of-raid rewards. The raid must use massive CC and kiting strategies to save them instead.",
    "trashMobs": [
      "Dragonmaw Handler",
      "Enslaved Red Drake",
      "Twilight Warlock",
      "Blackrock Mercenary"
    ],
    "associatedQuests": [
      "The Demon Soul (Raid)",
      "Freeing the Queen"
    ],
    "speedrunStrats": "Freeing specific dragons early allows them to breathe fire on later trash packs, instantly clearing them.",
    "environmentalHazards": "Massive blast furnaces periodically erupt, requiring the raid to hide behind forge anvils.",
    "secrets": [
      "A secret blacksmithing forge allows players with Exalted Thorium Brotherhood rep to craft legendary-tier fire resistance gear."
    ],
    "bosses": [
      "Warchief Nek'rosh",
      "The Demon Soul",
      "Alexstrasza (Enslaved)",
      "The Crimson Behemoth"
    ],
    "loot": [
      {
        "name": "Sabatons of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 18s"
      },
      {
        "name": "Amulet of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+16 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 62s"
      },
      {
        "name": "Helm of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+19 Stamina",
          "+13 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "7g 29s"
      },
      {
        "name": "Signet of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Spirit",
          "+16 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 82s"
      },
      {
        "name": "Sabatons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+23 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "7g 7s"
      },
      {
        "name": "Amulet of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+15 Intellect",
          "+10 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 46s"
      },
      {
        "name": "Tome of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+13 Agility",
          "+15 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 78s"
      },
      {
        "name": "Sabatons of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+8 Intellect",
          "+7 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "5g 95s"
      },
      {
        "name": "Sabatons of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+23 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 96s"
      },
      {
        "name": "Sabatons of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 82s"
      },
      {
        "name": "Tome of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Intellect",
          "+18 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "7g 41s"
      },
      {
        "name": "Legguards of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+10 Stamina",
          "+11 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 40s"
      },
      {
        "name": "Amulet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+16 Intellect",
          "+15 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "5g 22s"
      },
      {
        "name": "Pauldrons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+20 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 43s"
      },
      {
        "name": "Sabatons of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+22 Strength",
          "+13 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "7g 81s"
      },
      {
        "name": "Amulet of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Sword",
        "stats": [
          "+17 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "6g 41s"
      },
      {
        "name": "Cloak of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+7 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 59s"
      },
      {
        "name": "Helm of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "2g 10s"
      },
      {
        "name": "Cloak of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+13 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 6s"
      },
      {
        "name": "Legguards of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+5 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 2s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+10 Spirit",
          "+7 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 65s"
      },
      {
        "name": "Band of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "3g 32s"
      },
      {
        "name": "Breastplate of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+14 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 76s"
      },
      {
        "name": "Amulet of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+17 Intellect",
          "+14 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 55s"
      },
      {
        "name": "Breastplate of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Mace",
        "stats": [
          "+12 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 47s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 92s"
      },
      {
        "name": "Tome of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+22 Stamina",
          "+16 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "9g 66s"
      },
      {
        "name": "Amulet of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+15 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 28s"
      },
      {
        "name": "Breastplate of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "10g 59s"
      },
      {
        "name": "Sabatons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+15 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 17s"
      },
      {
        "name": "Signet of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+10 Intellect",
          "+13 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 21s"
      },
      {
        "name": "Pauldrons of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 55s"
      },
      {
        "name": "Cloak of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Mace",
        "stats": [
          "+11 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 82s"
      },
      {
        "name": "Helm of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Bow",
        "stats": [
          "+12 Stamina",
          "+5 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "2g 41s"
      },
      {
        "name": "Pauldrons of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+19 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 46s"
      },
      {
        "name": "Helm of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Mace",
        "stats": [
          "+19 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "1g 63s"
      },
      {
        "name": "Sabatons of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 30s"
      },
      {
        "name": "Pauldrons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+21 Agility",
          "+16 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 84s"
      },
      {
        "name": "Signet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 98s"
      },
      {
        "name": "Legguards of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+7 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "8g 10s"
      },
      {
        "name": "Band of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Dagger",
        "stats": [
          "+9 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "3g 35s"
      },
      {
        "name": "Helm of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+10 Strength",
          "+6 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 60s"
      },
      {
        "name": "Sabatons of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+13 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 48s"
      },
      {
        "name": "Signet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+11 Strength",
          "+19 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 17s"
      },
      {
        "name": "Breastplate of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+22 Agility",
          "+7 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 86s"
      },
      {
        "name": "Cloak of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+6 Stamina",
          "+17 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 33s"
      },
      {
        "name": "Tome of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+5 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "6g 51s"
      },
      {
        "name": "Band of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+5 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 23s"
      },
      {
        "name": "Pauldrons of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+23 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 64s"
      },
      {
        "name": "Amulet of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+16 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "2g 79s"
      },
      {
        "name": "Pauldrons of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 32s"
      },
      {
        "name": "Legguards of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+14 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "1g 92s"
      },
      {
        "name": "Pauldrons of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+8 Agility",
          "+5 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 93s"
      },
      {
        "name": "Band of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+20 Agility",
          "+11 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "8g 79s"
      },
      {
        "name": "Pauldrons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 83s"
      },
      {
        "name": "Signet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+8 Intellect",
          "+12 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "9g 68s"
      },
      {
        "name": "Sabatons of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 83s"
      },
      {
        "name": "Pauldrons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Bow",
        "stats": [
          "+11 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 23s"
      },
      {
        "name": "Signet of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+15 Intellect",
          "+13 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 36s"
      },
      {
        "name": "Sabatons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 52s"
      },
      {
        "name": "Signet of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Axe",
        "stats": [
          "+20 Agility",
          "+19 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "2g 62s"
      },
      {
        "name": "Sabatons of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Bow",
        "stats": [
          "+17 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 73s"
      },
      {
        "name": "Legguards of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+10 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 42s"
      },
      {
        "name": "Tome of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 27s"
      },
      {
        "name": "Breastplate of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+17 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "10g 94s"
      },
      {
        "name": "Band of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "4g 48s"
      },
      {
        "name": "Sabatons of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+13 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 51s"
      },
      {
        "name": "Helm of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "4g 8s"
      },
      {
        "name": "Cloak of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+17 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "5g 89s"
      },
      {
        "name": "Sabatons of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "5g 7s"
      },
      {
        "name": "Sabatons of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "5g 14s"
      },
      {
        "name": "Legguards of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+12 Intellect",
          "+7 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 34s"
      },
      {
        "name": "Cloak of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+11 Intellect",
          "+18 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 43s"
      },
      {
        "name": "Breastplate of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+5 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "7g 53s"
      },
      {
        "name": "Signet of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+9 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 96s"
      },
      {
        "name": "Breastplate of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 60s"
      },
      {
        "name": "Amulet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+6 Strength",
          "+16 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 83s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 23s"
      },
      {
        "name": "Tome of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Bow",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "4g 31s"
      },
      {
        "name": "Sabatons of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "8g 84s"
      }
    ]
  },
  {
    "id": "CrownOfTheDamned",
    "name": "Crown of the Damned (Stratholme Necropolis)",
    "tier": "Tier 2.5 (20 Man)",
    "desc": "The massive floating ziggurat hovering above Stratholme.",
    "loreHistory": "Before Naxxramas arrived, Kel'Thuzad tested his aerial necropolises. This is the command center of the Scourge's Lordaeron operations.",
    "strategyGuide": "Undying Necromancers will instantly resurrect dead raid members as hostile, massively buffed ghouls. Nobody can die.",
    "trashMobs": [
      "Undying Necromancer",
      "Flesh Titan",
      "Banshee Wailer",
      "Death Knight Captain"
    ],
    "associatedQuests": [
      "The Crown Falls (Raid)",
      "Retrieving the Phylactery"
    ],
    "speedrunStrats": "Paladins using Holy Wrath can completely lock down the undead Gauntlet, saving over 10 minutes.",
    "environmentalHazards": "Plague Cauldrons slowly fill the room with toxic gas during boss fights.",
    "secrets": [
      "Using the Corrupted Ashbringer here triggers hidden dialogue from Highlord Mograine."
    ],
    "bosses": [
      "Highlord Mograine",
      "The Blood Council",
      "Kel'Thuzad's Phylactery-Guard"
    ],
    "loot": [
      {
        "name": "Band of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+15 Agility",
          "+6 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 86s"
      },
      {
        "name": "Signet of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 72s"
      },
      {
        "name": "Legguards of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 2s"
      },
      {
        "name": "Signet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+11 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 44s"
      },
      {
        "name": "Cloak of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+8 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "7g 92s"
      },
      {
        "name": "Sabatons of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Mace",
        "stats": [
          "+24 Spirit",
          "+13 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 78s"
      },
      {
        "name": "Band of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+14 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 21s"
      },
      {
        "name": "Cloak of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Staff",
        "stats": [
          "+13 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 17s"
      },
      {
        "name": "Helm of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+17 Strength",
          "+14 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "2g 52s"
      },
      {
        "name": "Amulet of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 87s"
      },
      {
        "name": "Breastplate of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+10 Strength",
          "+5 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 94s"
      },
      {
        "name": "Cloak of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+7 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 65s"
      },
      {
        "name": "Tome of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Axe",
        "stats": [
          "+12 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 8s"
      },
      {
        "name": "Pauldrons of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "7g 72s"
      },
      {
        "name": "Amulet of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+10 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "1g 13s"
      },
      {
        "name": "Tome of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+22 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 63s"
      },
      {
        "name": "Cloak of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 19s"
      },
      {
        "name": "Sabatons of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+13 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "6g 2s"
      },
      {
        "name": "Legguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Bow",
        "stats": [
          "+6 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "3g 61s"
      },
      {
        "name": "Amulet of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+14 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 40s"
      },
      {
        "name": "Signet of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Intellect",
          "+18 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "7g 19s"
      },
      {
        "name": "Signet of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+6 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 62s"
      },
      {
        "name": "Tome of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Intellect",
          "+8 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "1g 24s"
      },
      {
        "name": "Legguards of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+13 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "9g 78s"
      },
      {
        "name": "Signet of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+22 Strength",
          "+15 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 51s"
      },
      {
        "name": "Signet of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+23 Agility",
          "+8 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 97s"
      },
      {
        "name": "Helm of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+8 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 17s"
      },
      {
        "name": "Band of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+16 Agility",
          "+6 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 48s"
      },
      {
        "name": "Breastplate of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 36s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+7 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 19s"
      },
      {
        "name": "Breastplate of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+8 Stamina",
          "+6 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 36s"
      },
      {
        "name": "Band of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 31s"
      },
      {
        "name": "Legguards of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Dagger",
        "stats": [
          "+19 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 75s"
      },
      {
        "name": "Pauldrons of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+13 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "4g 97s"
      },
      {
        "name": "Legguards of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+15 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "8g 18s"
      },
      {
        "name": "Tome of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+20 Intellect",
          "+16 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "7g 11s"
      },
      {
        "name": "Tome of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+6 Agility",
          "+12 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 65s"
      },
      {
        "name": "Amulet of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "1g 76s"
      },
      {
        "name": "Breastplate of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 20s"
      },
      {
        "name": "Tome of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+14 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "3g 41s"
      },
      {
        "name": "Helm of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+6 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "5g 68s"
      },
      {
        "name": "Breastplate of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Mace",
        "stats": [
          "+12 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "8g 43s"
      },
      {
        "name": "Band of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+5 Intellect",
          "+7 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 66s"
      },
      {
        "name": "Pauldrons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+13 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "4g 65s"
      },
      {
        "name": "Tome of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 59s"
      },
      {
        "name": "Tome of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+23 Intellect",
          "+5 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 63s"
      },
      {
        "name": "Breastplate of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+13 Spirit",
          "+15 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "6g 86s"
      },
      {
        "name": "Band of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+20 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "3g 91s"
      },
      {
        "name": "Legguards of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+6 Spirit",
          "+6 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 52s"
      },
      {
        "name": "Helm of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Sword",
        "stats": [
          "+22 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "4g 54s"
      }
    ]
  },
  {
    "id": "KarazhanRaid",
    "name": "Karazhan (Upper Tower)",
    "tier": "Tier 3 (40 Man)",
    "desc": "The unreleased Vanilla version of Karazhan, balanced for 40 players.",
    "loreHistory": "Medivh's tower transcends time and space. The upper levels are caught in a dimensional rift where the Burning Legion and anomalous entities fight for control.",
    "strategyGuide": "The Chess Event requires players to literally inhabit the pieces, completely replacing their hotbars with unique movesets.",
    "trashMobs": [
      "Spectral Patron",
      "Phantom Guardsman",
      "Demonic Invader",
      "Ethereal Thief"
    ],
    "associatedQuests": [
      "The Master's Key (Raid)",
      "Closing the Rift"
    ],
    "speedrunStrats": "Invisibility potions are mandatory to skip the massive pack of Demonic Invaders before Prince Malchezaar.",
    "environmentalHazards": "Gravity reverses in the Nether Spire, requiring the raid to fight on the ceiling while dodging falling debris.",
    "secrets": [
      "Solving the Library's book puzzle unlocks a hidden boss fight against a corrupted Guardian."
    ],
    "bosses": [
      "Attumen",
      "Moroes",
      "The Curator",
      "Shade of Aran",
      "Prince Malchezaar",
      "Nightbane"
    ],
    "loot": [
      {
        "name": "Band of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+19 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "7g 6s"
      },
      {
        "name": "Tome of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 39s"
      },
      {
        "name": "Cloak of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+16 Agility",
          "+6 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 85s"
      },
      {
        "name": "Band of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+5 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "7g 54s"
      },
      {
        "name": "Signet of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "7g 34s"
      },
      {
        "name": "Amulet of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+10 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 92s"
      },
      {
        "name": "Legguards of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 60s"
      },
      {
        "name": "Legguards of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "4g 25s"
      },
      {
        "name": "Signet of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 46s"
      },
      {
        "name": "Pauldrons of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+24 Spirit",
          "+10 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 1s"
      },
      {
        "name": "Legguards of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Axe",
        "stats": [
          "+21 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 25s"
      },
      {
        "name": "Pauldrons of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+21 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 49s"
      },
      {
        "name": "Sabatons of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+10 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 24s"
      },
      {
        "name": "Cloak of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+6 Stamina",
          "+7 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "1g 87s"
      },
      {
        "name": "Legguards of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+13 Spirit",
          "+5 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "1g 66s"
      },
      {
        "name": "Helm of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Strength",
          "+14 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 62s"
      },
      {
        "name": "Band of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Sword",
        "stats": [
          "+24 Strength",
          "+8 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 46s"
      },
      {
        "name": "Helm of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Strength",
          "+13 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "2g 59s"
      },
      {
        "name": "Pauldrons of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+14 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "3g 97s"
      },
      {
        "name": "Tome of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+7 Stamina",
          "+8 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 84s"
      },
      {
        "name": "Legguards of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+23 Intellect",
          "+14 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 45s"
      },
      {
        "name": "Breastplate of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+11 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 26s"
      },
      {
        "name": "Legguards of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "4g 92s"
      },
      {
        "name": "Breastplate of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Agility",
          "+12 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 13s"
      },
      {
        "name": "Breastplate of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Staff",
        "stats": [
          "+23 Agility",
          "+15 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "4g 81s"
      },
      {
        "name": "Cloak of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "4g 77s"
      },
      {
        "name": "Helm of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+14 Spirit",
          "+12 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 98s"
      },
      {
        "name": "Pauldrons of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+7 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 64s"
      },
      {
        "name": "Pauldrons of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+17 Intellect",
          "+12 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "4g 89s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+21 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 56s"
      },
      {
        "name": "Sabatons of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "4g 51s"
      },
      {
        "name": "Amulet of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+10 Strength",
          "+12 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "9g 71s"
      },
      {
        "name": "Legguards of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+6 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 60s"
      },
      {
        "name": "Breastplate of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+6 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 64s"
      },
      {
        "name": "Sabatons of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+6 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 22s"
      },
      {
        "name": "Breastplate of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Agility",
          "+7 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Pauldrons of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+13 Spirit",
          "+19 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 68s"
      },
      {
        "name": "Legguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+5 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 79s"
      },
      {
        "name": "Breastplate of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 47s"
      },
      {
        "name": "Amulet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+19 Agility",
          "+16 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 55s"
      },
      {
        "name": "Band of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 11s"
      },
      {
        "name": "Legguards of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+22 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 15s"
      },
      {
        "name": "Pauldrons of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+5 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 39s"
      },
      {
        "name": "Sabatons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+12 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 79s"
      },
      {
        "name": "Legguards of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Bow",
        "stats": [
          "+9 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 40s"
      },
      {
        "name": "Helm of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Ranged",
        "type": "Staff",
        "stats": [
          "+17 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "3g 25s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+8 Intellect",
          "+6 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 21s"
      },
      {
        "name": "Signet of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+7 Agility",
          "+6 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 19s"
      },
      {
        "name": "Tome of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+17 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 69s"
      },
      {
        "name": "Band of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "5g 93s"
      },
      {
        "name": "Pauldrons of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+19 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 21s"
      },
      {
        "name": "Tome of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 1s"
      },
      {
        "name": "Legguards of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+15 Stamina",
          "+10 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 83s"
      },
      {
        "name": "Helm of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+21 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 16s"
      },
      {
        "name": "Breastplate of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+11 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 55s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+15 Spirit",
          "+15 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 38s"
      },
      {
        "name": "Band of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+5 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 85s"
      },
      {
        "name": "Amulet of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+17 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "6g 34s"
      },
      {
        "name": "Sabatons of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+7 Stamina",
          "+12 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 26s"
      },
      {
        "name": "Helm of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "2g 19s"
      },
      {
        "name": "Band of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+9 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 48s"
      },
      {
        "name": "Amulet of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 88s"
      },
      {
        "name": "Amulet of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "5g 71s"
      },
      {
        "name": "Breastplate of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+17 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 52s"
      },
      {
        "name": "Legguards of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+5 Intellect",
          "+6 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "6g 34s"
      },
      {
        "name": "Pauldrons of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+13 Strength",
          "+8 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "7g 15s"
      },
      {
        "name": "Band of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Spirit",
          "+15 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "5g 27s"
      },
      {
        "name": "Amulet of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 88s"
      },
      {
        "name": "Helm of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+7 Strength",
          "+14 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 38s"
      },
      {
        "name": "Legguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "6g 3s"
      },
      {
        "name": "Helm of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+8 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 78s"
      },
      {
        "name": "Breastplate of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 63s"
      },
      {
        "name": "Breastplate of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Mace",
        "stats": [
          "+17 Agility",
          "+15 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 74s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+6 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 94s"
      },
      {
        "name": "Pauldrons of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+9 Agility",
          "+18 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 65s"
      },
      {
        "name": "Helm of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 55s"
      },
      {
        "name": "Amulet of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+17 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 21s"
      },
      {
        "name": "Helm of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+8 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 44s"
      },
      {
        "name": "Pauldrons of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 6s"
      },
      {
        "name": "Tome of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+6 Strength",
          "+5 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "3g 34s"
      },
      {
        "name": "Helm of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "9g 56s"
      },
      {
        "name": "Signet of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+9 Stamina",
          "+9 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 80s"
      },
      {
        "name": "Band of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+11 Spirit",
          "+12 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 77s"
      },
      {
        "name": "Cloak of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+13 Intellect",
          "+6 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 67s"
      },
      {
        "name": "Tome of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+7 Agility",
          "+9 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 62s"
      },
      {
        "name": "Legguards of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+13 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 44s"
      },
      {
        "name": "Signet of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+16 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "4g 54s"
      },
      {
        "name": "Cloak of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+6 Spirit",
          "+10 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "6g 63s"
      },
      {
        "name": "Cloak of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+14 Intellect",
          "+15 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 68s"
      },
      {
        "name": "Band of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+19 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 27s"
      },
      {
        "name": "Tome of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Staff",
        "stats": [
          "+5 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 41s"
      },
      {
        "name": "Pauldrons of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+12 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "3g 63s"
      },
      {
        "name": "Band of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+14 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 32s"
      },
      {
        "name": "Pauldrons of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "1g 13s"
      },
      {
        "name": "Sabatons of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+6 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "4g 10s"
      },
      {
        "name": "Amulet of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "4g 16s"
      },
      {
        "name": "Sabatons of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "6g 91s"
      },
      {
        "name": "Helm of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "1g 36s"
      },
      {
        "name": "Band of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 34s"
      },
      {
        "name": "Pauldrons of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 17s"
      }
    ]
  },
  {
    "id": "DragonIslesRaid",
    "name": "Temple of the Old Gods (Dragon Isles)",
    "tier": "Tier 3.5 (40 Man)",
    "desc": "The absolute pinnacle of Vanilla progression, located on the mythical Dragon Isles.",
    "loreHistory": "A forgotten island where the Old Gods first corrupted the proto-dragons. The architecture is impossibly ancient, pre-dating the Titans.",
    "strategyGuide": "Requires a fully coordinated 40-man raid with maximum Shadow Resistance. The Sanity mechanic causes players to hallucinate and attack each other if it drops to zero.",
    "trashMobs": [
      "Faceless Corruptor",
      "Devolved Proto-Drake",
      "Tentacle Horror",
      "Mind-Flayer"
    ],
    "associatedQuests": [
      "The Final Nightmare (Raid)",
      "Whispers in the Dark"
    ],
    "speedrunStrats": "There are no speedruns here. Survival is the only metric.",
    "environmentalHazards": "The geometry of the temple physically shifts and changes layout every week, making memorization impossible.",
    "secrets": [
      "A completely hidden 4th Old God encounter is accessible only if a player in the raid wields the Scepter of the Shifting Sands."
    ],
    "bosses": [
      "The Devolved Aspect",
      "The Faceless General",
      "Avatar of the Old God"
    ],
    "loot": [
      {
        "name": "Amulet of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "8g 41s"
      },
      {
        "name": "Helm of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+10 Intellect",
          "+8 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 3s"
      },
      {
        "name": "Signet of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 81s"
      },
      {
        "name": "Band of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+6 Stamina",
          "+7 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 74s"
      },
      {
        "name": "Pauldrons of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+20 Intellect",
          "+8 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 22s"
      },
      {
        "name": "Legguards of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+17 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "9g 23s"
      },
      {
        "name": "Cloak of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+21 Spirit",
          "+17 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "8g 22s"
      },
      {
        "name": "Signet of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Dagger",
        "stats": [
          "+17 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 1s"
      },
      {
        "name": "Sabatons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+17 Agility",
          "+15 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 4s"
      },
      {
        "name": "Pauldrons of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+9 Spirit",
          "+8 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 7s"
      },
      {
        "name": "Pauldrons of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "2g 12s"
      },
      {
        "name": "Helm of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "6g 16s"
      },
      {
        "name": "Helm of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "1g 7s"
      },
      {
        "name": "Helm of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+12 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 61s"
      },
      {
        "name": "Helm of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Bow",
        "stats": [
          "+19 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 67s"
      },
      {
        "name": "Sabatons of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Axe",
        "stats": [
          "+14 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 77s"
      },
      {
        "name": "Helm of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+22 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 28s"
      },
      {
        "name": "Breastplate of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+21 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 43s"
      },
      {
        "name": "Sabatons of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "6g 85s"
      },
      {
        "name": "Signet of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+17 Stamina",
          "+17 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "10g 62s"
      },
      {
        "name": "Band of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+16 Strength",
          "+10 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 12s"
      },
      {
        "name": "Amulet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+10 Strength",
          "+7 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "6g 84s"
      },
      {
        "name": "Amulet of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+17 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 84s"
      },
      {
        "name": "Pauldrons of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+20 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "2g 74s"
      },
      {
        "name": "Helm of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "8g 78s"
      },
      {
        "name": "Pauldrons of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+5 Stamina",
          "+11 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 58s"
      },
      {
        "name": "Cloak of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 98s"
      },
      {
        "name": "Breastplate of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+14 Intellect",
          "+10 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 46s"
      },
      {
        "name": "Sabatons of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+8 Strength",
          "+14 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "9g 44s"
      },
      {
        "name": "Helm of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+16 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "7g 2s"
      },
      {
        "name": "Cloak of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+14 Spirit",
          "+18 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "4g 25s"
      },
      {
        "name": "Pauldrons of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 28s"
      },
      {
        "name": "Breastplate of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+11 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "3g 54s"
      },
      {
        "name": "Signet of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+9 Intellect",
          "+7 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 48s"
      },
      {
        "name": "Pauldrons of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+9 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 78s"
      },
      {
        "name": "Tome of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+9 Spirit",
          "+6 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 23s"
      },
      {
        "name": "Helm of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Staff",
        "stats": [
          "+20 Intellect",
          "+12 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 73s"
      },
      {
        "name": "Helm of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Agility",
          "+19 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 7s"
      },
      {
        "name": "Tome of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Dagger",
        "stats": [
          "+23 Agility",
          "+11 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 75s"
      },
      {
        "name": "Band of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+15 Stamina",
          "+18 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 85s"
      },
      {
        "name": "Breastplate of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+14 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 51s"
      },
      {
        "name": "Signet of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Axe",
        "stats": [
          "+19 Strength",
          "+16 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 91s"
      },
      {
        "name": "Helm of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+6 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 67s"
      },
      {
        "name": "Band of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+20 Intellect",
          "+6 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 27s"
      },
      {
        "name": "Helm of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+7 Stamina",
          "+9 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 50s"
      },
      {
        "name": "Legguards of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "8g 11s"
      },
      {
        "name": "Breastplate of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+8 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 61s"
      },
      {
        "name": "Amulet of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+8 Spirit",
          "+5 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "4g 8s"
      },
      {
        "name": "Legguards of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Bow",
        "stats": [
          "+5 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 64s"
      },
      {
        "name": "Cloak of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+8 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 43s"
      },
      {
        "name": "Amulet of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+5 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "3g 44s"
      },
      {
        "name": "Breastplate of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 72s"
      },
      {
        "name": "Legguards of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+17 Intellect",
          "+15 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 45s"
      },
      {
        "name": "Signet of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Dagger",
        "stats": [
          "+13 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 51s"
      },
      {
        "name": "Sabatons of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+9 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 73s"
      },
      {
        "name": "Breastplate of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+19 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 33s"
      },
      {
        "name": "Tome of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+12 Agility",
          "+16 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 25s"
      },
      {
        "name": "Breastplate of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+23 Strength",
          "+5 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 13s"
      },
      {
        "name": "Sabatons of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+23 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "9g 74s"
      },
      {
        "name": "Tome of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 57s"
      },
      {
        "name": "Tome of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+20 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "5g 60s"
      },
      {
        "name": "Cloak of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+13 Stamina",
          "+16 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 13s"
      },
      {
        "name": "Signet of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+5 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 2s"
      },
      {
        "name": "Sabatons of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+19 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 59s"
      },
      {
        "name": "Sabatons of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Agility",
          "+16 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "5g 5s"
      },
      {
        "name": "Tome of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+5 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "4g 75s"
      },
      {
        "name": "Legguards of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "5g 98s"
      },
      {
        "name": "Legguards of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+20 Agility",
          "+16 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "6g 83s"
      },
      {
        "name": "Amulet of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+9 Intellect",
          "+9 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 56s"
      },
      {
        "name": "Helm of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "+9 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 62s"
      },
      {
        "name": "Signet of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+10 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "1g 64s"
      },
      {
        "name": "Legguards of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+7 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "7g 94s"
      },
      {
        "name": "Cloak of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+11 Intellect",
          "+17 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 73s"
      },
      {
        "name": "Pauldrons of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+9 Intellect",
          "+7 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 5s"
      },
      {
        "name": "Pauldrons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+11 Strength",
          "+16 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 57s"
      },
      {
        "name": "Tome of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+5 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 91s"
      },
      {
        "name": "Helm of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 7s"
      },
      {
        "name": "Legguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+12 Strength",
          "+5 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 86s"
      },
      {
        "name": "Sabatons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+16 Intellect",
          "+16 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 15s"
      },
      {
        "name": "Pauldrons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+17 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "2g 56s"
      },
      {
        "name": "Legguards of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "4g 30s"
      },
      {
        "name": "Band of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+9 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "7g 90s"
      },
      {
        "name": "Sabatons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+13 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 0s"
      },
      {
        "name": "Helm of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 29s"
      },
      {
        "name": "Amulet of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+20 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "3g 41s"
      },
      {
        "name": "Signet of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+13 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 30s"
      },
      {
        "name": "Breastplate of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 29s"
      },
      {
        "name": "Pauldrons of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 94s"
      },
      {
        "name": "Sabatons of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+11 Strength",
          "+13 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 2s"
      },
      {
        "name": "Helm of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+21 Intellect",
          "+8 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "10g 31s"
      },
      {
        "name": "Sabatons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+23 Spirit",
          "+10 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 66s"
      },
      {
        "name": "Pauldrons of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+24 Agility",
          "+17 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 69s"
      },
      {
        "name": "Amulet of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+7 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 72s"
      },
      {
        "name": "Breastplate of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+22 Strength",
          "+10 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 85s"
      },
      {
        "name": "Legguards of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Strength",
          "+8 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "5g 43s"
      },
      {
        "name": "Pauldrons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 9s"
      },
      {
        "name": "Legguards of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 12s"
      },
      {
        "name": "Pauldrons of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "5g 23s"
      },
      {
        "name": "Legguards of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 38s"
      },
      {
        "name": "Amulet of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Staff",
        "stats": [
          "+9 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 74s"
      }
    ]
  }
]
};
