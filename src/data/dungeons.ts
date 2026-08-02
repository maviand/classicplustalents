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
            "name": "Holy Legguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+9 Agility"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "3g 91s"
          },
          {
            "name": "Blood-Forged Amice of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+9 Stamina"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "5g 50s"
          },
          {
            "name": "Holy Amice of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+9 Strength"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "8g 4s"
          },
          {
            "name": "Ethereal Brooch of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 30,
            "sellPrice": "2g 36s"
          },
          {
            "name": "Ancient Relic of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 30,
            "sellPrice": "8g 34s"
          },
          {
            "name": "Savage Slippers of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Strength",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 30,
            "sellPrice": "3g 52s"
          },
          {
            "name": "Holy Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+9 Spirit"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "10g 6s"
          },
          {
            "name": "Ancient Axe of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 30,
            "sellPrice": "4g 34s"
          },
          {
            "name": "Void-Touched Necklace of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+9 Spirit",
              "+6 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 30,
            "sellPrice": "7g 77s"
          },
          {
            "name": "Corrupted Necklace of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Agility",
              "+10 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 30,
            "sellPrice": "10g 5s"
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
            "name": "Corrupted Band of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 50,
            "sellPrice": "9g 96s"
          },
          {
            "name": "Venerable Handguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "+10 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "1g 63s"
          },
          {
            "name": "Venerable Blade of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "2g 26s"
          },
          {
            "name": "Ethereal Vambraces of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "2g 50s"
          },
          {
            "name": "Shadow Treads of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 50,
            "sellPrice": "8g 39s"
          },
          {
            "name": "Savage Mantle of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Void-Touched Sabatons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "2g 68s"
          },
          {
            "name": "Ancient Mask of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 50,
            "sellPrice": "5g 4s"
          },
          {
            "name": "Blood-Forged Amulet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "7g 51s"
          },
          {
            "name": "Holy Bindings of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+21 Strength",
              "+14 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 50,
            "sellPrice": "3g 16s"
          },
          {
            "name": "Shimmering Talisman of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 50,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Holy Pants of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+15 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "9g 3s"
          },
          {
            "name": "Void-Touched Cuffs of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 50,
            "sellPrice": "4g 42s"
          },
          {
            "name": "Ethereal Seal of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 50,
            "sellPrice": "6g 84s"
          },
          {
            "name": "Venerable Mitts of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+21 Intellect",
              "+14 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "5g 31s"
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
            "name": "Holy Signet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 90s"
          },
          {
            "name": "Shadow Amulet of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 81s"
          },
          {
            "name": "Savage Handguards of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 39s"
          },
          {
            "name": "Venerable Loop of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 62s"
          },
          {
            "name": "Void-Touched Treads of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Ethereal Robes of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 22s"
          },
          {
            "name": "Void-Touched Helm of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 36s"
          },
          {
            "name": "Savage Ring of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 54s"
          },
          {
            "name": "Blood-Forged Boots of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "1g 97s"
          },
          {
            "name": "Holy Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 3s"
          },
          {
            "name": "Corrupted Grips of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 82s"
          },
          {
            "name": "Ancient Blade of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 65s"
          },
          {
            "name": "Corrupted Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "2g 17s"
          },
          {
            "name": "Venerable Axe of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 73s"
          },
          {
            "name": "Void-Touched Wristguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 18s"
          },
          {
            "name": "Holy Helm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 27s"
          },
          {
            "name": "Shadow Mask of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "4g 70s"
          },
          {
            "name": "Ethereal Seal of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Shadow Loop of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "3g 25s"
          },
          {
            "name": "Ancient Axe of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 91s"
          },
          {
            "name": "Holy Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 86s"
          },
          {
            "name": "Savage Medallion of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 12s"
          },
          {
            "name": "Shimmering Cowl of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 57s"
          },
          {
            "name": "Venerable Breastplate of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 43s"
          },
          {
            "name": "Shimmering Necklace of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 26s"
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
            "name": "Corrupted Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 18s"
          },
          {
            "name": "Savage Cuffs of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 91s"
          },
          {
            "name": "Shimmering Handguards of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "10g 51s"
          },
          {
            "name": "Savage Ring of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Holy Medallion of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 14s"
          },
          {
            "name": "Shadow Bulwark of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "3g 40s"
          },
          {
            "name": "Shadow Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Venerable Bulwark of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 35s"
          },
          {
            "name": "Savage Relic of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 20s"
          },
          {
            "name": "Ancient Seal of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 62s"
          },
          {
            "name": "Ancient Choker of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 53s"
          },
          {
            "name": "Venerable Greaves of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 97s"
          },
          {
            "name": "Holy Medallion of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 87s"
          },
          {
            "name": "Blood-Forged Vambraces of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 14s"
          },
          {
            "name": "Shimmering Blade of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 55s"
          },
          {
            "name": "Ancient Pendant of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 33s"
          },
          {
            "name": "Holy Pants of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "3g 87s"
          },
          {
            "name": "Ethereal Collar of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 70s"
          },
          {
            "name": "Venerable Medallion of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Shadow Bindings of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 14s"
          },
          {
            "name": "Blood-Forged Wristguards of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Agility",
              "+16 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "2g 57s"
          },
          {
            "name": "Shadow Belt of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 21s"
          },
          {
            "name": "Shadow Gauntlets of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "1g 24s"
          },
          {
            "name": "Shadow Harness of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 56s"
          },
          {
            "name": "Ancient Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 10s"
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
            "name": "Blood-Forged Legguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "2g 65s"
          },
          {
            "name": "Blood-Forged Collar of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 44s"
          },
          {
            "name": "Venerable Blade of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "7g 40s"
          },
          {
            "name": "Ethereal Dagger of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 33s"
          },
          {
            "name": "Corrupted Charm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "6g 11s"
          },
          {
            "name": "Ancient Legguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 42s"
          },
          {
            "name": "Void-Touched Spaulders of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 73s"
          },
          {
            "name": "Corrupted Cord of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 72s"
          },
          {
            "name": "Ethereal Ring of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 90s"
          },
          {
            "name": "Shimmering Vambraces of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "4g 31s"
          },
          {
            "name": "Void-Touched Pendant of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "2g 44s"
          },
          {
            "name": "Holy Greatsword of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 75s"
          },
          {
            "name": "Ancient Gavel of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 83s"
          },
          {
            "name": "Void-Touched Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 36s"
          },
          {
            "name": "Corrupted Dagger of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 23s"
          },
          {
            "name": "Savage Defender of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "7g 11s"
          },
          {
            "name": "Ethereal Legguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Ancient Bindings of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 46s"
          },
          {
            "name": "Void-Touched Robes of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 26s"
          },
          {
            "name": "Blood-Forged Sabatons of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "1g 42s"
          },
          {
            "name": "Savage Gauntlets of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "8g 86s"
          },
          {
            "name": "Venerable Mask of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 62s"
          },
          {
            "name": "Shimmering Belt of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Shadow Boots of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "2g 97s"
          },
          {
            "name": "Ancient Slippers of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Corrupted Signet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "7g 37s"
          },
          {
            "name": "Shimmering Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 57s"
          },
          {
            "name": "Holy Necklace of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Void-Touched Talisman of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 22s"
          },
          {
            "name": "Ethereal Talisman of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "8g 20s"
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
            "name": "Savage Pants of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "5g 59s"
          },
          {
            "name": "Void-Touched Dagger of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 24s"
          },
          {
            "name": "Void-Touched Helm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 52s"
          },
          {
            "name": "Blood-Forged Gloves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 98s"
          },
          {
            "name": "Corrupted Leggings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 92s"
          },
          {
            "name": "Shimmering Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "4g 88s"
          },
          {
            "name": "Blood-Forged Necklace of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 18s"
          },
          {
            "name": "Corrupted Waistguard of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 59s"
          },
          {
            "name": "Savage Grips of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 48s"
          },
          {
            "name": "Holy Buckler of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 84s"
          },
          {
            "name": "Shimmering Wristguards of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "2g 72s"
          },
          {
            "name": "Shadow Waistguard of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 5s"
          },
          {
            "name": "Holy Mask of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 4s"
          },
          {
            "name": "Blood-Forged Slippers of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 95s"
          },
          {
            "name": "Ethereal Cord of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "8g 33s"
          },
          {
            "name": "Shimmering Loop of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 76s"
          },
          {
            "name": "Ancient Staff of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "3g 39s"
          },
          {
            "name": "Savage Spaulders of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Ethereal Pants of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+24 Agility",
              "+16 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "2g 80s"
          },
          {
            "name": "Corrupted Mantle of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "7g 52s"
          },
          {
            "name": "Holy Cowl of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "4g 28s"
          },
          {
            "name": "Blood-Forged Grips of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Blood-Forged Charm of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 92s"
          },
          {
            "name": "Corrupted Gloves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "3g 51s"
          },
          {
            "name": "Ancient Loop of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "1g 82s"
          },
          {
            "name": "Void-Touched Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 57s"
          },
          {
            "name": "Corrupted Kilt of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "1g 84s"
          },
          {
            "name": "Void-Touched Signet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 35s"
          },
          {
            "name": "Corrupted Shield of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
          },
          {
            "name": "Void-Touched Handguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
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
            "name": "Blood-Forged Pauldrons of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+21 Stamina",
              "+14 Intellect"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 52,
            "sellPrice": "10g 25s"
          },
          {
            "name": "Holy Epaulets of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Ancient Vambraces of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "7g 79s"
          },
          {
            "name": "Savage Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 52,
            "sellPrice": "2g 48s"
          },
          {
            "name": "Ethereal Cowl of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 52,
            "sellPrice": "3g 42s"
          },
          {
            "name": "Blood-Forged Sabatons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "10g 56s"
          },
          {
            "name": "Savage Greatsword of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "1g 79s"
          },
          {
            "name": "Blood-Forged Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "5g 67s"
          },
          {
            "name": "Holy Tunic of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+21 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 52,
            "sellPrice": "8g 53s"
          },
          {
            "name": "Ancient Talisman of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 52,
            "sellPrice": "6g 10s"
          },
          {
            "name": "Corrupted Blade of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+21 Strength",
              "+14 Agility"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 52,
            "sellPrice": "2g 45s"
          },
          {
            "name": "Ancient Boots of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 52,
            "sellPrice": "7g 80s"
          },
          {
            "name": "Ancient Medallion of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 52,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Shadow Grips of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "8g 15s"
          },
          {
            "name": "Shadow Greaves of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "8g 74s"
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
            "name": "Venerable Vest of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 58,
            "sellPrice": "4g 97s"
          },
          {
            "name": "Shadow Epaulets of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "2g 58s"
          },
          {
            "name": "Void-Touched Wristguards of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 58,
            "sellPrice": "3g 94s"
          },
          {
            "name": "Holy Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+17 Strength"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "9g 73s"
          },
          {
            "name": "Corrupted Girdle of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+23 Spirit",
              "+15 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 58,
            "sellPrice": "5g 22s"
          },
          {
            "name": "Ancient Epaulets of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 58,
            "sellPrice": "6g 74s"
          },
          {
            "name": "Shimmering Bindings of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "9g 86s"
          },
          {
            "name": "Void-Touched Bindings of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 58,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Ethereal Loop of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "6g 76s"
          },
          {
            "name": "Shimmering Mask of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 58,
            "sellPrice": "2g 38s"
          },
          {
            "name": "Ethereal Cowl of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 58,
            "sellPrice": "9g 9s"
          },
          {
            "name": "Blood-Forged Boots of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+23 Strength",
              "+15 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 58,
            "sellPrice": "7g 74s"
          },
          {
            "name": "Shimmering Staff of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+23 Intellect",
              "+15 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "2g 26s"
          },
          {
            "name": "Ethereal Amulet of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+23 Intellect",
              "+15 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "2g 10s"
          },
          {
            "name": "Holy Staff of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "4g 80s"
          },
          {
            "name": "Shimmering Medallion of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 58,
            "sellPrice": "1g 50s"
          },
          {
            "name": "Corrupted Gavel of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+17 Stamina",
              "+11 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "4g 8s"
          },
          {
            "name": "Shimmering Loop of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Strength",
              "+15 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 58,
            "sellPrice": "3g 15s"
          },
          {
            "name": "Ethereal Collar of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Spirit",
              "+11 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "9g 61s"
          },
          {
            "name": "Corrupted Wristguards of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+23 Stamina",
              "+15 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 58,
            "sellPrice": "10g 1s"
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
            "name": "Shimmering Loop of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Corrupted Greatsword of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 53s"
          },
          {
            "name": "Blood-Forged Circlet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "1g 54s"
          },
          {
            "name": "Void-Touched Mitts of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Ethereal Gauntlets of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 77s"
          },
          {
            "name": "Blood-Forged Gavel of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 9s"
          },
          {
            "name": "Shimmering Spaulders of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 90s"
          },
          {
            "name": "Venerable Pendant of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "1g 23s"
          },
          {
            "name": "Corrupted Bulwark of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 5s"
          },
          {
            "name": "Void-Touched Wristguards of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "4g 62s"
          },
          {
            "name": "Shimmering Medallion of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "7g 46s"
          },
          {
            "name": "Ancient Collar of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 19s"
          },
          {
            "name": "Blood-Forged Collar of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 65s"
          },
          {
            "name": "Savage Necklace of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 7s"
          },
          {
            "name": "Void-Touched Amice of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 69s"
          },
          {
            "name": "Void-Touched Bindings of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 12s"
          },
          {
            "name": "Holy Relic of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "3g 11s"
          },
          {
            "name": "Holy Bow of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 84s"
          },
          {
            "name": "Blood-Forged Crown of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 58s"
          },
          {
            "name": "Corrupted Tunic of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "2g 85s"
          },
          {
            "name": "Ethereal Treads of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "3g 17s"
          },
          {
            "name": "Shadow Bindings of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 11s"
          },
          {
            "name": "Ethereal Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 35s"
          },
          {
            "name": "Holy Vambraces of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Agility",
              "+16 Strength"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "1g 74s"
          },
          {
            "name": "Savage Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 86s"
          },
          {
            "name": "Corrupted Waistguard of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 7s"
          },
          {
            "name": "Shimmering Kilt of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 98s"
          },
          {
            "name": "Ethereal Legguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 68s"
          },
          {
            "name": "Shimmering Necklace of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 52s"
          },
          {
            "name": "Shadow Gavel of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 62s"
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
            "name": "Blood-Forged Bow of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "4g 34s"
          },
          {
            "name": "Shadow Amice of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+23 Spirit",
              "+15 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Venerable Vest of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "9g 94s"
          },
          {
            "name": "Ancient Signet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "3g 65s"
          },
          {
            "name": "Ethereal Staff of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+23 Stamina",
              "+15 Spirit"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "4g 21s"
          },
          {
            "name": "Shimmering Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "1g 64s"
          },
          {
            "name": "Shadow Necklace of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Intellect",
              "+11 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "2g 70s"
          },
          {
            "name": "Ancient Belt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "+11 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 58,
            "sellPrice": "9g 67s"
          },
          {
            "name": "Ethereal Choker of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Intellect",
              "+11 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Ancient Tunic of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "+11 Spirit"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "4g 32s"
          },
          {
            "name": "Savage Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "10g 41s"
          },
          {
            "name": "Corrupted Collar of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+23 Intellect",
              "+15 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 58,
            "sellPrice": "7g 97s"
          },
          {
            "name": "Savage Leggings of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 58,
            "sellPrice": "3g 43s"
          },
          {
            "name": "Shadow Axe of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+23 Intellect"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 58,
            "sellPrice": "1g 2s"
          },
          {
            "name": "Ethereal Legguards of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+23 Spirit",
              "+15 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "9g 19s"
          },
          {
            "name": "Shadow Blade of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Stamina",
              "+11 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 58,
            "sellPrice": "4g 3s"
          },
          {
            "name": "Shimmering Dagger of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+23 Stamina",
              "+15 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "2g 22s"
          },
          {
            "name": "Holy Spaulders of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+17 Agility",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "7g 19s"
          },
          {
            "name": "Shadow Breastplate of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "6g 18s"
          },
          {
            "name": "Holy Cowl of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+17 Intellect",
              "+11 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 58,
            "sellPrice": "2g 21s"
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
            "name": "Ethereal Bindings of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "9g 81s"
          },
          {
            "name": "Shadow Choker of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 41s"
          },
          {
            "name": "Shimmering Cuffs of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 16s"
          },
          {
            "name": "Venerable Cuffs of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Corrupted Vest of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Corrupted Staff of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Blood-Forged Harness of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 40s"
          },
          {
            "name": "Void-Touched Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 14s"
          },
          {
            "name": "Blood-Forged Amice of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 5s"
          },
          {
            "name": "Savage Mitts of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "10g 26s"
          },
          {
            "name": "Corrupted Treads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Savage Belt of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "7g 10s"
          },
          {
            "name": "Holy Ring of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 72s"
          },
          {
            "name": "Void-Touched Bow of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 72s"
          },
          {
            "name": "Shadow Handguards of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 43s"
          },
          {
            "name": "Ancient Vest of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Shadow Bracers of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 13s"
          },
          {
            "name": "Corrupted Legguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "4g 85s"
          },
          {
            "name": "Shadow Charm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "3g 67s"
          },
          {
            "name": "Ancient Treads of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "3g 68s"
          },
          {
            "name": "Blood-Forged Mitts of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 64s"
          },
          {
            "name": "Savage Bindings of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 93s"
          },
          {
            "name": "Shimmering Harness of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "8g 77s"
          },
          {
            "name": "Venerable Gavel of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 69s"
          },
          {
            "name": "Ethereal Treads of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 41s"
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
            "name": "Ethereal Bow of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 80s"
          },
          {
            "name": "Corrupted Seal of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 1s"
          },
          {
            "name": "Savage Talisman of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 91s"
          },
          {
            "name": "Shadow Amice of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 0s"
          },
          {
            "name": "Shadow Waistguard of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Venerable Leggings of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "2g 98s"
          },
          {
            "name": "Corrupted Greatsword of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "3g 6s"
          },
          {
            "name": "Savage Grips of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "2g 20s"
          },
          {
            "name": "Ancient Axe of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Venerable Relic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 33s"
          },
          {
            "name": "Void-Touched Mantle of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "3g 39s"
          },
          {
            "name": "Blood-Forged Greatsword of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 32s"
          },
          {
            "name": "Ethereal Slippers of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 84s"
          },
          {
            "name": "Venerable Buckler of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Void-Touched Mitts of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Blood-Forged Vest of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 84s"
          },
          {
            "name": "Savage Wristguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 21s"
          },
          {
            "name": "Venerable Greatsword of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Shimmering Legguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "2g 90s"
          },
          {
            "name": "Savage Sash of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 11s"
          },
          {
            "name": "Void-Touched Tunic of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "8g 49s"
          },
          {
            "name": "Void-Touched Staff of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 14s"
          },
          {
            "name": "Ancient Breastplate of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 69s"
          },
          {
            "name": "Holy Slippers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Ethereal Sabatons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "1g 85s"
          },
          {
            "name": "Blood-Forged Bulwark of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Shadow Mantle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "6g 90s"
          },
          {
            "name": "Ethereal Loop of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "1g 80s"
          },
          {
            "name": "Shadow Pauldrons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "1g 85s"
          },
          {
            "name": "Savage Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 24s"
          },
          {
            "name": "Ancient Amulet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 32s"
          },
          {
            "name": "Blood-Forged Mask of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 33s"
          },
          {
            "name": "Shadow Bow of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 58s"
          },
          {
            "name": "Shadow Cowl of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 4s"
          },
          {
            "name": "Savage Harness of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 55s"
          },
          {
            "name": "Ancient Bow of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 27s"
          },
          {
            "name": "Shimmering Charm of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 24s"
          },
          {
            "name": "Void-Touched Belt of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 13s"
          },
          {
            "name": "Shadow Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "1g 97s"
          },
          {
            "name": "Ancient Vambraces of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "7g 2s"
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
            "name": "Venerable Gavel of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Spirit",
              "+10 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 55,
            "sellPrice": "3g 88s"
          },
          {
            "name": "Corrupted Robes of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+22 Stamina",
              "+14 Strength"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 55,
            "sellPrice": "6g 70s"
          },
          {
            "name": "Void-Touched Robes of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+16 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 55,
            "sellPrice": "9g 90s"
          },
          {
            "name": "Savage Vest of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 55,
            "sellPrice": "2g 90s"
          },
          {
            "name": "Venerable Crown of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+22 Spirit",
              "+14 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 55,
            "sellPrice": "10g 26s"
          },
          {
            "name": "Ethereal Cowl of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 55,
            "sellPrice": "8g 16s"
          },
          {
            "name": "Void-Touched Choker of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 55,
            "sellPrice": "6g 85s"
          },
          {
            "name": "Ancient Vambraces of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+16 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 55,
            "sellPrice": "5g 46s"
          },
          {
            "name": "Blood-Forged Loop of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Strength",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "3g 10s"
          },
          {
            "name": "Void-Touched Sabatons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "+10 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 55,
            "sellPrice": "8g 29s"
          },
          {
            "name": "Blood-Forged Cuffs of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Agility"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "7g 63s"
          },
          {
            "name": "Ethereal Pauldrons of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+22 Strength",
              "+14 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 55,
            "sellPrice": "2g 8s"
          },
          {
            "name": "Blood-Forged Cord of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "+10 Spirit"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 55,
            "sellPrice": "4g 25s"
          },
          {
            "name": "Corrupted Mask of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 55,
            "sellPrice": "2g 58s"
          },
          {
            "name": "Shimmering Robes of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+16 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 55,
            "sellPrice": "1g 58s"
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
            "name": "Venerable Defender of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+23 Agility",
              "+15 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 58,
            "sellPrice": "8g 14s"
          },
          {
            "name": "Holy Staff of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+23 Stamina",
              "+15 Intellect"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 58,
            "sellPrice": "8g 50s"
          },
          {
            "name": "Holy Signet of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "2g 23s"
          },
          {
            "name": "Blood-Forged Waistguard of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "10g 20s"
          },
          {
            "name": "Holy Boots of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+23 Spirit",
              "+15 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Corrupted Medallion of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "3g 83s"
          },
          {
            "name": "Holy Gavel of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+23 Agility"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 58,
            "sellPrice": "9g 50s"
          },
          {
            "name": "Venerable Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "3g 78s"
          },
          {
            "name": "Holy Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+17 Intellect",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "6g 52s"
          },
          {
            "name": "Venerable Crown of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 58,
            "sellPrice": "7g 63s"
          },
          {
            "name": "Venerable Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Stamina",
              "+11 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 58,
            "sellPrice": "3g 63s"
          },
          {
            "name": "Shimmering Handguards of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "4g 52s"
          },
          {
            "name": "Void-Touched Bow of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 58,
            "sellPrice": "7g 20s"
          },
          {
            "name": "Blood-Forged Waistguard of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "2g 77s"
          },
          {
            "name": "Blood-Forged Cuffs of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "8g 57s"
          },
          {
            "name": "Venerable Ring of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 58,
            "sellPrice": "1g 89s"
          },
          {
            "name": "Corrupted Spaulders of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "4g 27s"
          },
          {
            "name": "Void-Touched Gavel of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "2g 56s"
          },
          {
            "name": "Ethereal Pendant of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+23 Spirit",
              "+15 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 58,
            "sellPrice": "7g 78s"
          },
          {
            "name": "Venerable Waistguard of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "1g 90s"
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
            "name": "Ancient Loop of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "1g 96s"
          },
          {
            "name": "Shadow Staff of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 18s"
          },
          {
            "name": "Blood-Forged Legguards of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 67s"
          },
          {
            "name": "Void-Touched Dagger of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 49s"
          },
          {
            "name": "Shadow Medallion of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "2g 80s"
          },
          {
            "name": "Shadow Band of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 19s"
          },
          {
            "name": "Ancient Breastplate of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Blood-Forged Collar of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "10g 81s"
          },
          {
            "name": "Blood-Forged Seal of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "1g 32s"
          },
          {
            "name": "Shadow Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 30s"
          },
          {
            "name": "Shimmering Greaves of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 97s"
          },
          {
            "name": "Savage Slippers of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 24s"
          },
          {
            "name": "Venerable Girdle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 89s"
          },
          {
            "name": "Holy Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 44s"
          },
          {
            "name": "Holy Grips of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 94s"
          },
          {
            "name": "Venerable Helm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 77s"
          },
          {
            "name": "Shadow Seal of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 39s"
          },
          {
            "name": "Blood-Forged Dagger of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "9g 28s"
          },
          {
            "name": "Holy Sash of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 72s"
          },
          {
            "name": "Void-Touched Pauldrons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 85s"
          },
          {
            "name": "Shimmering Footpads of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 Strength"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "1g 44s"
          },
          {
            "name": "Holy Harness of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 10s"
          },
          {
            "name": "Venerable Cowl of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Shadow Ring of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 29s"
          },
          {
            "name": "Shadow Gloves of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 23s"
          },
          {
            "name": "Venerable Footpads of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "10g 25s"
          },
          {
            "name": "Blood-Forged Medallion of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 13s"
          },
          {
            "name": "Void-Touched Mask of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 94s"
          },
          {
            "name": "Void-Touched Footpads of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 4s"
          },
          {
            "name": "Ancient Legguards of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "7g 64s"
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
            "name": "Ancient Boots of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 49s"
          },
          {
            "name": "Void-Touched Vest of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "2g 11s"
          },
          {
            "name": "Holy Loop of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 19s"
          },
          {
            "name": "Blood-Forged Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Ancient Gavel of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 19s"
          },
          {
            "name": "Shadow Belt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "3g 95s"
          },
          {
            "name": "Shimmering Staff of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "9g 47s"
          },
          {
            "name": "Shimmering Slippers of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 39s"
          },
          {
            "name": "Shadow Axe of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "8g 11s"
          },
          {
            "name": "Venerable Gloves of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "3g 61s"
          },
          {
            "name": "Void-Touched Footpads of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 2s"
          },
          {
            "name": "Corrupted Mantle of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "1g 80s"
          },
          {
            "name": "Savage Greaves of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "2g 36s"
          },
          {
            "name": "Venerable Crown of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "7g 34s"
          },
          {
            "name": "Holy Slippers of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 78s"
          },
          {
            "name": "Ethereal Cord of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 25s"
          },
          {
            "name": "Venerable Mantle of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "6g 89s"
          },
          {
            "name": "Void-Touched Signet of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Savage Bow of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 34s"
          },
          {
            "name": "Venerable Gloves of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "4g 24s"
          },
          {
            "name": "Shimmering Mitts of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "4g 47s"
          },
          {
            "name": "Void-Touched Mitts of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 91s"
          },
          {
            "name": "Holy Slippers of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "2g 14s"
          },
          {
            "name": "Shadow Tunic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "8g 6s"
          },
          {
            "name": "Ancient Staff of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 87s"
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
            "name": "Shadow Greatsword of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "4g 89s"
          },
          {
            "name": "Void-Touched Amulet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 80s"
          },
          {
            "name": "Corrupted Signet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 49s"
          },
          {
            "name": "Ethereal Brooch of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "7g 6s"
          },
          {
            "name": "Savage Dagger of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 61s"
          },
          {
            "name": "Shadow Greaves of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "3g 71s"
          },
          {
            "name": "Holy Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Ethereal Vambraces of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 12s"
          },
          {
            "name": "Savage Bindings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 84s"
          },
          {
            "name": "Shimmering Grips of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "1g 30s"
          },
          {
            "name": "Blood-Forged Axe of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 28s"
          },
          {
            "name": "Holy Epaulets of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 83s"
          },
          {
            "name": "Ancient Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 35s"
          },
          {
            "name": "Ancient Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Blood-Forged Breastplate of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 60s"
          },
          {
            "name": "Shadow Footpads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 8s"
          },
          {
            "name": "Venerable Girdle of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "9g 65s"
          },
          {
            "name": "Blood-Forged Treads of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 96s"
          },
          {
            "name": "Void-Touched Bulwark of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "4g 42s"
          },
          {
            "name": "Savage Relic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 67s"
          },
          {
            "name": "Holy Collar of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 12s"
          },
          {
            "name": "Blood-Forged Loop of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Agility",
              "+16 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 70s"
          },
          {
            "name": "Ethereal Gauntlets of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 68s"
          },
          {
            "name": "Shimmering Cord of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 52s"
          },
          {
            "name": "Corrupted Harness of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 90s"
          },
          {
            "name": "Corrupted Breastplate of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Ethereal Amulet of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 90s"
          },
          {
            "name": "Ethereal Aegis of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 11s"
          },
          {
            "name": "Void-Touched Greatsword of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Void-Touched Sash of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "3g 79s"
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
            "name": "Venerable Bow of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 3s"
          },
          {
            "name": "Savage Mitts of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 58s"
          },
          {
            "name": "Shadow Crown of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "4g 5s"
          },
          {
            "name": "Shimmering Pendant of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 33s"
          },
          {
            "name": "Ancient Gloves of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "8g 97s"
          },
          {
            "name": "Shimmering Choker of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "2g 76s"
          },
          {
            "name": "Holy Signet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Corrupted Greatsword of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 66s"
          },
          {
            "name": "Void-Touched Relic of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "1g 59s"
          },
          {
            "name": "Blood-Forged Tunic of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "9g 39s"
          },
          {
            "name": "Void-Touched Leggings of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Savage Loop of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 29s"
          },
          {
            "name": "Blood-Forged Leggings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 53s"
          },
          {
            "name": "Ancient Blade of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 71s"
          },
          {
            "name": "Corrupted Brooch of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "10g 50s"
          },
          {
            "name": "Venerable Breastplate of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "10g 9s"
          },
          {
            "name": "Corrupted Cuffs of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 94s"
          },
          {
            "name": "Holy Bracers of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 25s"
          },
          {
            "name": "Savage Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Savage Tunic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 0s"
          },
          {
            "name": "Blood-Forged Blade of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Corrupted Blade of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 35s"
          },
          {
            "name": "Shimmering Gauntlets of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 68s"
          },
          {
            "name": "Blood-Forged Loop of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "10g 69s"
          },
          {
            "name": "Corrupted Sabatons of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
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
            "name": "Corrupted Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Strength",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 50,
            "sellPrice": "8g 89s"
          },
          {
            "name": "Ancient Axe of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+21 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 50,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Venerable Medallion of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 50,
            "sellPrice": "8g 27s"
          },
          {
            "name": "Holy Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+15 Agility",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "3g 48s"
          },
          {
            "name": "Void-Touched Medallion of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 50,
            "sellPrice": "7g 85s"
          },
          {
            "name": "Blood-Forged Boots of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+21 Stamina",
              "+14 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 50,
            "sellPrice": "1g 84s"
          },
          {
            "name": "Void-Touched Shield of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "10g 8s"
          },
          {
            "name": "Shimmering Aegis of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Strength",
              "+10 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 50,
            "sellPrice": "8g 94s"
          },
          {
            "name": "Corrupted Charm of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 50,
            "sellPrice": "8g 80s"
          },
          {
            "name": "Holy Gloves of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+21 Intellect",
              "+14 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 50,
            "sellPrice": "7g 25s"
          },
          {
            "name": "Ancient Charm of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 50,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Blood-Forged Blade of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 50,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Shimmering Belt of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+21 Spirit",
              "+14 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 50,
            "sellPrice": "8g 1s"
          },
          {
            "name": "Shadow Gavel of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 50,
            "sellPrice": "8g 24s"
          },
          {
            "name": "Savage Girdle of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+21 Strength",
              "+14 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 50,
            "sellPrice": "7g 43s"
          },
          {
            "name": "Ethereal Brooch of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 50,
            "sellPrice": "1g 35s"
          },
          {
            "name": "Savage Gavel of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+15 Strength",
              "+10 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 50,
            "sellPrice": "2g 36s"
          },
          {
            "name": "Corrupted Girdle of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "4g 35s"
          },
          {
            "name": "Ancient Gavel of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+21 Strength",
              "+14 Agility"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 50,
            "sellPrice": "8g 5s"
          },
          {
            "name": "Shadow Cord of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+15 Strength"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "1g 7s"
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
            "name": "Holy Slippers of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 45,
            "sellPrice": "8g 15s"
          },
          {
            "name": "Shimmering Brooch of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 45,
            "sellPrice": "9g 97s"
          },
          {
            "name": "Ethereal Greaves of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+19 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 45,
            "sellPrice": "10g 82s"
          },
          {
            "name": "Holy Medallion of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 45,
            "sellPrice": "6g 62s"
          },
          {
            "name": "Corrupted Breastplate of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+19 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 45,
            "sellPrice": "5g 57s"
          },
          {
            "name": "Blood-Forged Tunic of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+19 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 45,
            "sellPrice": "3g 26s"
          },
          {
            "name": "Holy Relic of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 45,
            "sellPrice": "4g 79s"
          },
          {
            "name": "Corrupted Leggings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+13 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 45,
            "sellPrice": "8g 31s"
          },
          {
            "name": "Ancient Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 45,
            "sellPrice": "9g 10s"
          },
          {
            "name": "Void-Touched Waistguard of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+13 Strength"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "3g 13s"
          },
          {
            "name": "Venerable Harness of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+19 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 45,
            "sellPrice": "8g 30s"
          },
          {
            "name": "Venerable Bow of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+19 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 45,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Ancient Medallion of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 45,
            "sellPrice": "3g 62s"
          },
          {
            "name": "Savage Seal of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Stamina",
              "+8 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 45,
            "sellPrice": "9g 45s"
          },
          {
            "name": "Blood-Forged Axe of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+13 Agility",
              "+8 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 45,
            "sellPrice": "9g 93s"
          },
          {
            "name": "Savage Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+13 Agility"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "9g 23s"
          },
          {
            "name": "Ancient Gavel of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+19 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 45,
            "sellPrice": "2g 60s"
          },
          {
            "name": "Savage Sash of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 45,
            "sellPrice": "7g 40s"
          },
          {
            "name": "Shimmering Breastplate of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 45,
            "sellPrice": "4g 43s"
          },
          {
            "name": "Ethereal Epaulets of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+13 Intellect",
              "+8 Stamina"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "9g 81s"
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
            "name": "Shadow Charm of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 55,
            "sellPrice": "2g 31s"
          },
          {
            "name": "Blood-Forged Axe of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+22 Intellect",
              "+14 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 55,
            "sellPrice": "10g 82s"
          },
          {
            "name": "Holy Brooch of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 55,
            "sellPrice": "8g 81s"
          },
          {
            "name": "Blood-Forged Loop of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+10 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 55,
            "sellPrice": "2g 73s"
          },
          {
            "name": "Corrupted Brooch of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 55,
            "sellPrice": "10g 70s"
          },
          {
            "name": "Shadow Bow of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "1g 62s"
          },
          {
            "name": "Ethereal Bracers of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+22 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 55,
            "sellPrice": "3g 2s"
          },
          {
            "name": "Holy Mask of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 55,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Holy Greaves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "8g 56s"
          },
          {
            "name": "Holy Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+16 Spirit",
              "+10 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 55,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Corrupted Pants of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+22 Intellect",
              "+14 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 55,
            "sellPrice": "4g 28s"
          },
          {
            "name": "Void-Touched Mitts of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+16 Strength",
              "+10 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 55,
            "sellPrice": "4g 18s"
          },
          {
            "name": "Holy Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "2g 7s"
          },
          {
            "name": "Holy Cord of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "7g 33s"
          },
          {
            "name": "Shimmering Buckler of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 55,
            "sellPrice": "2g 65s"
          },
          {
            "name": "Ethereal Loop of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Agility",
              "+10 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 55,
            "sellPrice": "8g 20s"
          },
          {
            "name": "Blood-Forged Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "1g 34s"
          },
          {
            "name": "Blood-Forged Charm of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 55,
            "sellPrice": "2g 56s"
          },
          {
            "name": "Venerable Aegis of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+22 Agility",
              "+14 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 55,
            "sellPrice": "4g 14s"
          },
          {
            "name": "Corrupted Footpads of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+22 Strength",
              "+14 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 55,
            "sellPrice": "8g 43s"
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
        "name": "Dream-Scarred Mantle of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 64s"
      },
      {
        "name": "Emerald Harness of the Deep Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+21 Stamina",
          "+14 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 76s"
      },
      {
        "name": "Nightmare-Forged Collar of Ysera's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Stamina",
          "+14 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "7g 70s"
      },
      {
        "name": "Nightmare-Forged Footpads of the Deep Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+21 Agility",
          "+14 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "10g 34s"
      },
      {
        "name": "Corrupted Band of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Stamina",
          "+18 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "9g 30s"
      },
      {
        "name": "Corrupted Shield of the Deep Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Agility",
          "+14 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "6g 42s"
      },
      {
        "name": "Slumbering Greaves of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+27 Agility",
          "+18 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 12s"
      },
      {
        "name": "Dream-Scarred Belt of Ysera's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+21 Strength",
          "+14 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "6g 24s"
      },
      {
        "name": "Corrupted Gavel of Ysera's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+21 Strength",
          "+14 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 13s"
      },
      {
        "name": "Slumbering Greatsword of the Nightmare",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+21 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 51s"
      },
      {
        "name": "Dream-Scarred Cuffs of Ysera's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+21 Stamina",
          "+14 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 13s"
      },
      {
        "name": "Emerald Mantle of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 78s"
      },
      {
        "name": "Slumbering Harness of the Waking Dream",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 78s"
      },
      {
        "name": "Nightmare-Forged Boots of the Deep Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 13s"
      },
      {
        "name": "Nightmare-Forged Seal of the Waking Dream",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 38s"
      },
      {
        "name": "Emerald Mitts of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 74s"
      },
      {
        "name": "Nightmare-Forged Bindings of the Waking Dream",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+21 Intellect",
          "+14 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 94s"
      },
      {
        "name": "Dream-Scarred Mask of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 7s"
      },
      {
        "name": "Dream-Scarred Axe of the Deep Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+21 Spirit"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "3g 17s"
      },
      {
        "name": "Slumbering Seal of Ysera's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 76s"
      },
      {
        "name": "Dream-Scarred Gavel of the Waking Dream",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+21 Spirit",
          "+14 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 5s"
      },
      {
        "name": "Dream-Scarred Handguards of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "1g 36s"
      },
      {
        "name": "Nightmare-Forged Blade of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 22s"
      },
      {
        "name": "Dream-Scarred Aegis of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 13s"
      },
      {
        "name": "Dream-Scarred Blade of the Waking Dream",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+21 Spirit",
          "+14 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 23s"
      },
      {
        "name": "Dream-Scarred Boots of Ysera's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 82s"
      },
      {
        "name": "Slumbering Vest of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 98s"
      },
      {
        "name": "Corrupted Blade of the Deep Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+21 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 4s"
      },
      {
        "name": "Corrupted Greatsword of the Deep Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 56s"
      },
      {
        "name": "Corrupted Charm of Ysera's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "9g 69s"
      },
      {
        "name": "Nightmare-Forged Circlet of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "7g 71s"
      },
      {
        "name": "Emerald Waistguard of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+27 Spirit",
          "+18 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 84s"
      },
      {
        "name": "Corrupted Cuffs of the Nightmare",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+21 Strength",
          "+14 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 74s"
      },
      {
        "name": "Dream-Scarred Gavel of the Deep Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+21 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 70s"
      },
      {
        "name": "Slumbering Gavel of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "8g 3s"
      },
      {
        "name": "Nightmare-Forged Treads of the Waking Dream",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+21 Spirit",
          "+14 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 47s"
      },
      {
        "name": "Slumbering Pants of Ysera's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+21 Stamina",
          "+14 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 24s"
      },
      {
        "name": "Slumbering Handguards of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 32s"
      },
      {
        "name": "Corrupted Sabatons of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+27 Intellect",
          "+18 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "3g 23s"
      },
      {
        "name": "Nightmare-Forged Bulwark of the Nightmare",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Stamina",
          "+14 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 0s"
      },
      {
        "name": "Dream-Scarred Loop of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Spirit",
          "+18 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 20s"
      },
      {
        "name": "Nightmare-Forged Legguards of the Waking Dream",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+21 Spirit",
          "+14 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "6g 32s"
      },
      {
        "name": "Emerald Bracers of the Nightmare",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+21 Stamina",
          "+14 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 14s"
      },
      {
        "name": "Slumbering Amice of the Deep Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 78s"
      },
      {
        "name": "Dream-Scarred Necklace of Ysera's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Stamina",
          "+14 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 23s"
      },
      {
        "name": "Emerald Collar of the Nightmare",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Spirit",
          "+14 Intellect"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "9g 50s"
      },
      {
        "name": "Slumbering Blade of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "8g 18s"
      },
      {
        "name": "Corrupted Dagger of the Waking Dream",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+21 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 80s"
      },
      {
        "name": "Dream-Scarred Cowl of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "1g 98s"
      },
      {
        "name": "Corrupted Girdle of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "9g 8s"
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
        "name": "Searing Cowl of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+28 Strength",
          "+19 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "9g 61s"
      },
      {
        "name": "Enslaved Pants of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+22 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 27s"
      },
      {
        "name": "Mountain-Forged Blade of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Stamina",
          "+19 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "4g 32s"
      },
      {
        "name": "Mountain-Forged Medallion of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 4s"
      },
      {
        "name": "Searing Greatsword of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+22 Agility",
          "+15 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 10s"
      },
      {
        "name": "Mountain-Forged Circlet of the Forge",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+22 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "8g 68s"
      },
      {
        "name": "Enslaved Robes of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "4g 10s"
      },
      {
        "name": "Mountain-Forged Staff of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+22 Agility",
          "+15 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "3g 76s"
      },
      {
        "name": "Enslaved Signet of the Forge",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Strength",
          "+15 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 16s"
      },
      {
        "name": "Searing Pendant of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 97s"
      },
      {
        "name": "Mountain-Forged Wristguards of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 29s"
      },
      {
        "name": "Enslaved Pendant of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Stamina",
          "+15 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "7g 92s"
      },
      {
        "name": "Red Scale Signet of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Spirit",
          "+15 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "8g 19s"
      },
      {
        "name": "Enslaved Blade of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+22 Agility",
          "+15 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 5s"
      },
      {
        "name": "Dragonmaw Cord of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+22 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 1s"
      },
      {
        "name": "Enslaved Leggings of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+22 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "5g 28s"
      },
      {
        "name": "Searing Amulet of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 97s"
      },
      {
        "name": "Dragonmaw Belt of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+22 Stamina",
          "+15 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 57s"
      },
      {
        "name": "Mountain-Forged Amulet of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "7g 51s"
      },
      {
        "name": "Searing Greaves of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "10g 13s"
      },
      {
        "name": "Mountain-Forged Vest of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+22 Spirit",
          "+15 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 22s"
      },
      {
        "name": "Red Scale Signet of the Forge",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Stamina",
          "+15 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 89s"
      },
      {
        "name": "Enslaved Slippers of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+22 Strength",
          "+15 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 50s"
      },
      {
        "name": "Dragonmaw Epaulets of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "7g 18s"
      },
      {
        "name": "Dragonmaw Grips of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 18s"
      },
      {
        "name": "Dragonmaw Blade of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+22 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 17s"
      },
      {
        "name": "Mountain-Forged Pants of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+28 Agility",
          "+19 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "7g 41s"
      },
      {
        "name": "Dragonmaw Sabatons of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "3g 78s"
      },
      {
        "name": "Mountain-Forged Gauntlets of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "+15 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 60s"
      },
      {
        "name": "Searing Cowl of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Mountain-Forged Greatsword of the Forge",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+22 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "4g 14s"
      },
      {
        "name": "Enslaved Cowl of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 85s"
      },
      {
        "name": "Enslaved Band of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Stamina",
          "+15 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 57s"
      },
      {
        "name": "Dragonmaw Waistguard of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+22 Stamina",
          "+15 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 79s"
      },
      {
        "name": "Dragonmaw Pendant of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "8g 34s"
      },
      {
        "name": "Red Scale Mantle of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 61s"
      },
      {
        "name": "Searing Staff of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 28s"
      },
      {
        "name": "Mountain-Forged Necklace of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Stamina",
          "+15 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 38s"
      },
      {
        "name": "Mountain-Forged Greatsword of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 12s"
      },
      {
        "name": "Searing Pauldrons of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "+15 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 20s"
      },
      {
        "name": "Dragonmaw Circlet of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+22 Stamina",
          "+15 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "7g 71s"
      },
      {
        "name": "Dragonmaw Greatsword of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 42s"
      },
      {
        "name": "Dragonmaw Dagger of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "9g 74s"
      },
      {
        "name": "Searing Gauntlets of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+22 Strength",
          "+15 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 73s"
      },
      {
        "name": "Red Scale Blade of the Forge",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 61s"
      },
      {
        "name": "Mountain-Forged Bow of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+22 Stamina",
          "+15 Strength"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "3g 48s"
      },
      {
        "name": "Enslaved Axe of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+22 Spirit",
          "+15 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 92s"
      },
      {
        "name": "Dragonmaw Collar of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Spirit",
          "+15 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 48s"
      },
      {
        "name": "Enslaved Pants of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+22 Stamina",
          "+15 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 50s"
      },
      {
        "name": "Mountain-Forged Talisman of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 76s"
      },
      {
        "name": "Mountain-Forged Vest of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "7g 30s"
      },
      {
        "name": "Enslaved Bow of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 74s"
      },
      {
        "name": "Red Scale Cuffs of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "+15 Spirit"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "7g 14s"
      },
      {
        "name": "Mountain-Forged Girdle of the Forge",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "+15 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 28s"
      },
      {
        "name": "Enslaved Staff of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+22 Spirit",
          "+15 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "7g 4s"
      },
      {
        "name": "Red Scale Spaulders of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+22 Strength",
          "+15 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 90s"
      },
      {
        "name": "Enslaved Mitts of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "2g 37s"
      },
      {
        "name": "Searing Helm of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 4s"
      },
      {
        "name": "Red Scale Collar of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Spirit",
          "+19 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 59s"
      },
      {
        "name": "Dragonmaw Sabatons of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+22 Agility",
          "+15 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 74s"
      },
      {
        "name": "Mountain-Forged Signet of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 92s"
      },
      {
        "name": "Red Scale Necklace of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 32s"
      },
      {
        "name": "Red Scale Spaulders of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 94s"
      },
      {
        "name": "Enslaved Talisman of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "10g 24s"
      },
      {
        "name": "Mountain-Forged Boots of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+22 Agility",
          "+15 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "9g 75s"
      },
      {
        "name": "Searing Boots of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+22 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 3s"
      },
      {
        "name": "Red Scale Spaulders of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 12s"
      },
      {
        "name": "Dragonmaw Amice of the Forge",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+22 Stamina",
          "+15 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 11s"
      },
      {
        "name": "Dragonmaw Greatsword of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "1g 19s"
      },
      {
        "name": "Mountain-Forged Wristguards of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 59s"
      },
      {
        "name": "Searing Gavel of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+22 Stamina",
          "+15 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 53s"
      },
      {
        "name": "Dragonmaw Band of the Demon Soul",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Spirit",
          "+15 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 3s"
      },
      {
        "name": "Dragonmaw Cuffs of the Forge",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+22 Agility",
          "+15 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 40s"
      },
      {
        "name": "Dragonmaw Pauldrons of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 12s"
      },
      {
        "name": "Searing Mitts of the Forge",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+22 Strength",
          "+15 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 42s"
      },
      {
        "name": "Red Scale Treads of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "3g 42s"
      },
      {
        "name": "Dragonmaw Talisman of the Red Flight",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 5s"
      },
      {
        "name": "Mountain-Forged Crown of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+22 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 96s"
      },
      {
        "name": "Enslaved Shield of the Queen's Captivity",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+22 Agility",
          "+15 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "7g 4s"
      },
      {
        "name": "Enslaved Signet of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "8g 42s"
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
        "name": "Death-Bound Seal of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 66s"
      },
      {
        "name": "Cursed Circlet of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+30 Agility",
          "+20 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "2g 28s"
      },
      {
        "name": "Cursed Pauldrons of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 20s"
      },
      {
        "name": "Plague-Ridden Footpads of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+30 Spirit",
          "+20 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 80s"
      },
      {
        "name": "Necrotic Girdle of the Lich King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "2g 23s"
      },
      {
        "name": "Plague-Ridden Bracers of the Ziggurat",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 55s"
      },
      {
        "name": "Cursed Helm of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+30 Intellect",
          "+20 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 68s"
      },
      {
        "name": "Death-Bound Bracers of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 0s"
      },
      {
        "name": "Scourge-Forged Axe of the Lich King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+24 Stamina",
          "+16 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 38s"
      },
      {
        "name": "Cursed Tunic of the Lich King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 16s"
      },
      {
        "name": "Cursed Mitts of the Lich King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 95s"
      },
      {
        "name": "Scourge-Forged Shield of the Lich King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Agility",
          "+16 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 61s"
      },
      {
        "name": "Scourge-Forged Mitts of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+30 Stamina",
          "+20 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 62s"
      },
      {
        "name": "Scourge-Forged Band of the Phylactery",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 44s"
      },
      {
        "name": "Scourge-Forged Vest of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 88s"
      },
      {
        "name": "Scourge-Forged Slippers of the Phylactery",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+24 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "3g 56s"
      },
      {
        "name": "Cursed Medallion of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 69s"
      },
      {
        "name": "Death-Bound Slippers of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 96s"
      },
      {
        "name": "Death-Bound Mantle of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+30 Stamina",
          "+20 Strength"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 79s"
      },
      {
        "name": "Necrotic Sabatons of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+24 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 65s"
      },
      {
        "name": "Necrotic Greatsword of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+30 Strength",
          "+20 Agility"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "7g 1s"
      },
      {
        "name": "Death-Bound Axe of the Lich King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "4g 50s"
      },
      {
        "name": "Necrotic Choker of the Lich King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 3s"
      },
      {
        "name": "Scourge-Forged Ring of the Lich King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Stamina",
          "+16 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 16s"
      },
      {
        "name": "Cursed Greaves of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+16 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 26s"
      },
      {
        "name": "Cursed Charm of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "7g 80s"
      },
      {
        "name": "Cursed Cord of the Phylactery",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 72s"
      },
      {
        "name": "Plague-Ridden Cowl of the Phylactery",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 48s"
      },
      {
        "name": "Death-Bound Greatsword of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+30 Stamina",
          "+20 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 28s"
      },
      {
        "name": "Necrotic Grips of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 6s"
      },
      {
        "name": "Scourge-Forged Amice of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+16 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 21s"
      },
      {
        "name": "Scourge-Forged Band of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Agility",
          "+20 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "1g 69s"
      },
      {
        "name": "Necrotic Axe of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+30 Agility",
          "+20 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "3g 66s"
      },
      {
        "name": "Cursed Staff of the Ziggurat",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 36s"
      },
      {
        "name": "Cursed Circlet of the Ziggurat",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+24 Stamina",
          "+16 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 91s"
      },
      {
        "name": "Plague-Ridden Boots of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "6g 56s"
      },
      {
        "name": "Death-Bound Defender of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Strength",
          "+16 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 26s"
      },
      {
        "name": "Scourge-Forged Slippers of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+30 Stamina",
          "+20 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 84s"
      },
      {
        "name": "Plague-Ridden Loop of the Lich King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 12s"
      },
      {
        "name": "Cursed Pendant of the Phylactery",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 30s"
      },
      {
        "name": "Death-Bound Charm of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 12s"
      },
      {
        "name": "Necrotic Handguards of the Ziggurat",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+24 Spirit",
          "+16 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 97s"
      },
      {
        "name": "Plague-Ridden Amice of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+30 Agility",
          "+20 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 25s"
      },
      {
        "name": "Necrotic Wristguards of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 90s"
      },
      {
        "name": "Cursed Staff of Naxxramas",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Strength",
          "+16 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 28s"
      },
      {
        "name": "Cursed Axe of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+30 Stamina",
          "+20 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 16s"
      },
      {
        "name": "Plague-Ridden Robes of the Ziggurat",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+24 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 46s"
      },
      {
        "name": "Necrotic Leggings of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+30 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "7g 84s"
      },
      {
        "name": "Cursed Treads of the Ziggurat",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 84s"
      },
      {
        "name": "Death-Bound Vest of the Ziggurat",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 37s"
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
        "name": "Ethereal Axe of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+25 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "9g 12s"
      },
      {
        "name": "Timeless Amulet of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Intellect"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "1g 6s"
      },
      {
        "name": "Medivh's Axe of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+31 Intellect",
          "+21 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "9g 24s"
      },
      {
        "name": "Ethereal Signet of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "4g 77s"
      },
      {
        "name": "Ethereal Robes of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+25 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 60s"
      },
      {
        "name": "Timeless Spaulders of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+25 Stamina",
          "+17 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "2g 29s"
      },
      {
        "name": "Timeless Medallion of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "2g 10s"
      },
      {
        "name": "Astral Girdle of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+25 Stamina",
          "+17 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 32s"
      },
      {
        "name": "Timeless Axe of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 77s"
      },
      {
        "name": "Rift-Touched Vest of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+25 Agility",
          "+17 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 23s"
      },
      {
        "name": "Timeless Dagger of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+25 Intellect",
          "+17 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "8g 46s"
      },
      {
        "name": "Medivh's Necklace of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 89s"
      },
      {
        "name": "Ethereal Defender of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Strength",
          "+21 Stamina"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "8g 24s"
      },
      {
        "name": "Rift-Touched Dagger of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+25 Intellect",
          "+17 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 86s"
      },
      {
        "name": "Timeless Axe of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+25 Spirit",
          "+17 Intellect"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 47s"
      },
      {
        "name": "Medivh's Slippers of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+25 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "7g 79s"
      },
      {
        "name": "Timeless Gavel of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "4g 45s"
      },
      {
        "name": "Medivh's Loop of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "1g 18s"
      },
      {
        "name": "Rift-Touched Bow of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+31 Stamina",
          "+21 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 30s"
      },
      {
        "name": "Medivh's Seal of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Strength",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 46s"
      },
      {
        "name": "Astral Bracers of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "+17 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 28s"
      },
      {
        "name": "Medivh's Circlet of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "+17 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "4g 47s"
      },
      {
        "name": "Ethereal Epaulets of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+25 Stamina",
          "+17 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 62s"
      },
      {
        "name": "Ethereal Cord of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "1g 73s"
      },
      {
        "name": "Rift-Touched Grips of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+25 Strength",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 62s"
      },
      {
        "name": "Timeless Gavel of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "6g 26s"
      },
      {
        "name": "Timeless Treads of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+25 Spirit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "4g 5s"
      },
      {
        "name": "Timeless Gavel of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+25 Agility",
          "+17 Strength"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 4s"
      },
      {
        "name": "Medivh's Sabatons of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+25 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 40s"
      },
      {
        "name": "Medivh's Wristguards of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 35s"
      },
      {
        "name": "Timeless Pants of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+25 Intellect",
          "+17 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 20s"
      },
      {
        "name": "Medivh's Bracers of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+25 Strength",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 97s"
      },
      {
        "name": "Medivh's Crown of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+25 Stamina",
          "+17 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 84s"
      },
      {
        "name": "Ethereal Amulet of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Strength",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "8g 26s"
      },
      {
        "name": "Ethereal Relic of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "5g 38s"
      },
      {
        "name": "Timeless Bindings of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 55s"
      },
      {
        "name": "Medivh's Band of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "8g 51s"
      },
      {
        "name": "Ethereal Circlet of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+25 Intellect",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 95s"
      },
      {
        "name": "Timeless Mantle of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+25 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 22s"
      },
      {
        "name": "Medivh's Circlet of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+25 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 47s"
      },
      {
        "name": "Astral Bow of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+25 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 48s"
      },
      {
        "name": "Timeless Brooch of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "3g 45s"
      },
      {
        "name": "Timeless Bindings of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "+17 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 57s"
      },
      {
        "name": "Medivh's Necklace of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Intellect",
          "+17 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 3s"
      },
      {
        "name": "Rift-Touched Signet of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 63s"
      },
      {
        "name": "Timeless Helm of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+25 Agility",
          "+17 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 64s"
      },
      {
        "name": "Ethereal Signet of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 39s"
      },
      {
        "name": "Medivh's Signet of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Intellect",
          "+17 Spirit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "3g 46s"
      },
      {
        "name": "Astral Mantle of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+25 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 64s"
      },
      {
        "name": "Medivh's Sabatons of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 17s"
      },
      {
        "name": "Rift-Touched Footpads of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+25 Stamina",
          "+17 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "2g 34s"
      },
      {
        "name": "Rift-Touched Greatsword of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+25 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 23s"
      },
      {
        "name": "Astral Bracers of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+25 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 31s"
      },
      {
        "name": "Timeless Axe of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+25 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 56s"
      },
      {
        "name": "Astral Vest of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "8g 71s"
      },
      {
        "name": "Timeless Robes of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+25 Agility",
          "+17 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 54s"
      },
      {
        "name": "Astral Mask of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 40s"
      },
      {
        "name": "Medivh's Talisman of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "1g 90s"
      },
      {
        "name": "Medivh's Pendant of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 13s"
      },
      {
        "name": "Ethereal Greatsword of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+25 Stamina",
          "+17 Spirit"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "10g 29s"
      },
      {
        "name": "Ethereal Sash of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "4g 90s"
      },
      {
        "name": "Ethereal Robes of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+25 Agility",
          "+17 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 3s"
      },
      {
        "name": "Rift-Touched Axe of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+25 Agility",
          "+17 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "5g 56s"
      },
      {
        "name": "Astral Spaulders of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "+17 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 85s"
      },
      {
        "name": "Rift-Touched Dagger of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+25 Intellect",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 74s"
      },
      {
        "name": "Rift-Touched Gavel of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+25 Agility",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 44s"
      },
      {
        "name": "Ethereal Blade of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+25 Intellect",
          "+17 Spirit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 66s"
      },
      {
        "name": "Medivh's Seal of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 4s"
      },
      {
        "name": "Timeless Leggings of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "7g 23s"
      },
      {
        "name": "Timeless Buckler of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+25 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 71s"
      },
      {
        "name": "Astral Boots of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "3g 7s"
      },
      {
        "name": "Timeless Gloves of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+25 Strength",
          "+17 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 42s"
      },
      {
        "name": "Timeless Choker of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Spirit",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 13s"
      },
      {
        "name": "Medivh's Axe of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+25 Spirit",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 23s"
      },
      {
        "name": "Medivh's Vambraces of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 17s"
      },
      {
        "name": "Timeless Bulwark of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Stamina",
          "+21 Strength"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 87s"
      },
      {
        "name": "Ethereal Gavel of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+25 Spirit",
          "+17 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "7g 80s"
      },
      {
        "name": "Timeless Charm of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 92s"
      },
      {
        "name": "Rift-Touched Signet of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Stamina",
          "+17 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "4g 50s"
      },
      {
        "name": "Medivh's Treads of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+25 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 93s"
      },
      {
        "name": "Medivh's Staff of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 39s"
      },
      {
        "name": "Astral Choker of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "3g 63s"
      },
      {
        "name": "Medivh's Staff of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 49s"
      },
      {
        "name": "Timeless Collar of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Stamina",
          "+21 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 55s"
      },
      {
        "name": "Ethereal Charm of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "6g 50s"
      },
      {
        "name": "Timeless Ring of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 86s"
      },
      {
        "name": "Timeless Leggings of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+25 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "3g 17s"
      },
      {
        "name": "Rift-Touched Leggings of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+25 Stamina",
          "+17 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "8g 19s"
      },
      {
        "name": "Ethereal Pants of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+25 Strength",
          "+17 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "9g 51s"
      },
      {
        "name": "Medivh's Spaulders of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+25 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 86s"
      },
      {
        "name": "Astral Cowl of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+25 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 35s"
      },
      {
        "name": "Ethereal Gavel of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+25 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 54s"
      },
      {
        "name": "Rift-Touched Handguards of the Guardian's Fall",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+25 Strength",
          "+17 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "3g 36s"
      },
      {
        "name": "Astral Sabatons of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+25 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 1s"
      },
      {
        "name": "Rift-Touched Girdle of the Rift",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+25 Spirit",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 56s"
      },
      {
        "name": "Timeless Greatsword of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+25 Stamina",
          "+17 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 55s"
      },
      {
        "name": "Rift-Touched Band of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Stamina",
          "+17 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 63s"
      },
      {
        "name": "Ethereal Pants of the Nether",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+25 Intellect",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 16s"
      },
      {
        "name": "Rift-Touched Greatsword of the Ivory Tower",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+25 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "8g 8s"
      },
      {
        "name": "Timeless Legguards of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+31 Stamina",
          "+21 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 23s"
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
        "name": "Faceless Epaulets of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 77s"
      },
      {
        "name": "Whispering Shield of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+27 Agility",
          "+18 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 74s"
      },
      {
        "name": "Faceless Seal of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "2g 49s"
      },
      {
        "name": "Faceless Boots of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+27 Spirit",
          "+18 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 96s"
      },
      {
        "name": "Faceless Tunic of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 71s"
      },
      {
        "name": "Whispering Cuffs of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "7g 98s"
      },
      {
        "name": "Whispering Footpads of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "10g 50s"
      },
      {
        "name": "Tentacled Talisman of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 39s"
      },
      {
        "name": "Tentacled Bindings of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+33 Spirit",
          "+22 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "4g 4s"
      },
      {
        "name": "Maddening Amulet of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 16s"
      },
      {
        "name": "Maddening Tunic of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+27 Spirit",
          "+18 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "1g 32s"
      },
      {
        "name": "Void-Touched Harness of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 82s"
      },
      {
        "name": "Faceless Brooch of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 24s"
      },
      {
        "name": "Tentacled Cord of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "6g 52s"
      },
      {
        "name": "Void-Touched Blade of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 94s"
      },
      {
        "name": "Maddening Wristguards of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 11s"
      },
      {
        "name": "Tentacled Legguards of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Spirit",
          "+22 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 8s"
      },
      {
        "name": "Tentacled Medallion of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 46s"
      },
      {
        "name": "Maddening Crown of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 90s"
      },
      {
        "name": "Whispering Signet of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Intellect",
          "+22 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "6g 65s"
      },
      {
        "name": "Maddening Slippers of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 22s"
      },
      {
        "name": "Maddening Bindings of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+33 Agility",
          "+22 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "4g 24s"
      },
      {
        "name": "Void-Touched Medallion of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 1s"
      },
      {
        "name": "Maddening Dagger of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "2g 54s"
      },
      {
        "name": "Void-Touched Footpads of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 25s"
      },
      {
        "name": "Faceless Boots of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 10s"
      },
      {
        "name": "Whispering Vambraces of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 86s"
      },
      {
        "name": "Maddening Dagger of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 37s"
      },
      {
        "name": "Faceless Girdle of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Whispering Circlet of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 97s"
      },
      {
        "name": "Faceless Staff of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "5g 89s"
      },
      {
        "name": "Whispering Axe of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+27 Strength",
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 37s"
      },
      {
        "name": "Void-Touched Leggings of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 62s"
      },
      {
        "name": "Faceless Spaulders of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "2g 55s"
      },
      {
        "name": "Maddening Axe of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 32s"
      },
      {
        "name": "Whispering Bracers of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "7g 3s"
      },
      {
        "name": "Whispering Cowl of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 77s"
      },
      {
        "name": "Void-Touched Necklace of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Stamina",
          "+22 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 44s"
      },
      {
        "name": "Faceless Staff of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "9g 38s"
      },
      {
        "name": "Void-Touched Pauldrons of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 18s"
      },
      {
        "name": "Whispering Gauntlets of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 22s"
      },
      {
        "name": "Tentacled Leggings of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 14s"
      },
      {
        "name": "Faceless Axe of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+27 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 34s"
      },
      {
        "name": "Faceless Loop of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Spirit",
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 70s"
      },
      {
        "name": "Maddening Greatsword of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 24s"
      },
      {
        "name": "Whispering Aegis of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 88s"
      },
      {
        "name": "Maddening Mask of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "7g 10s"
      },
      {
        "name": "Whispering Loop of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 19s"
      },
      {
        "name": "Whispering Staff of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 70s"
      },
      {
        "name": "Faceless Buckler of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 14s"
      },
      {
        "name": "Whispering Boots of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 85s"
      },
      {
        "name": "Maddening Bindings of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 87s"
      },
      {
        "name": "Maddening Seal of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "2g 31s"
      },
      {
        "name": "Whispering Blade of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 76s"
      },
      {
        "name": "Maddening Robes of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "7g 21s"
      },
      {
        "name": "Tentacled Bow of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 82s"
      },
      {
        "name": "Void-Touched Blade of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 21s"
      },
      {
        "name": "Tentacled Greatsword of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+27 Stamina",
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 35s"
      },
      {
        "name": "Void-Touched Dagger of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 13s"
      },
      {
        "name": "Void-Touched Blade of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "1g 35s"
      },
      {
        "name": "Faceless Mantle of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 75s"
      },
      {
        "name": "Maddening Belt of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "2g 36s"
      },
      {
        "name": "Faceless Cowl of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+27 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 92s"
      },
      {
        "name": "Maddening Talisman of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "6g 89s"
      },
      {
        "name": "Faceless Medallion of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "2g 2s"
      },
      {
        "name": "Maddening Bindings of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 91s"
      },
      {
        "name": "Whispering Dagger of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 28s"
      },
      {
        "name": "Void-Touched Charm of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 69s"
      },
      {
        "name": "Void-Touched Collar of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Spirit",
          "+22 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 24s"
      },
      {
        "name": "Whispering Medallion of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 41s"
      },
      {
        "name": "Tentacled Gavel of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 89s"
      },
      {
        "name": "Faceless Bow of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+27 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 76s"
      },
      {
        "name": "Void-Touched Dagger of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+33 Intellect",
          "+22 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 49s"
      },
      {
        "name": "Void-Touched Spaulders of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 2s"
      },
      {
        "name": "Tentacled Collar of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 30s"
      },
      {
        "name": "Void-Touched Sabatons of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 57s"
      },
      {
        "name": "Void-Touched Charm of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 80s"
      },
      {
        "name": "Tentacled Staff of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 84s"
      },
      {
        "name": "Tentacled Crown of the Deep Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Void-Touched Waistguard of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+27 Agility",
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 97s"
      },
      {
        "name": "Tentacled Robes of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+27 Strength",
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 11s"
      },
      {
        "name": "Whispering Choker of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 80s"
      },
      {
        "name": "Whispering Vest of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 52s"
      },
      {
        "name": "Void-Touched Buckler of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 13s"
      },
      {
        "name": "Maddening Pendant of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 47s"
      },
      {
        "name": "Tentacled Ring of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Stamina",
          "+18 Intellect"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "5g 34s"
      },
      {
        "name": "Void-Touched Girdle of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 8s"
      },
      {
        "name": "Whispering Axe of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 64s"
      },
      {
        "name": "Void-Touched Footpads of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 76s"
      },
      {
        "name": "Void-Touched Choker of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "7g 58s"
      },
      {
        "name": "Faceless Axe of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 17s"
      },
      {
        "name": "Faceless Slippers of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 89s"
      },
      {
        "name": "Void-Touched Tunic of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+27 Agility",
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 78s"
      },
      {
        "name": "Whispering Charm of the Insane",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 72s"
      },
      {
        "name": "Tentacled Grips of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 50s"
      },
      {
        "name": "Faceless Bindings of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 12s"
      },
      {
        "name": "Maddening Seal of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 60s"
      },
      {
        "name": "Faceless Bindings of the Black Empire",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+27 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 19s"
      },
      {
        "name": "Void-Touched Dagger of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "6g 56s"
      },
      {
        "name": "Void-Touched Girdle of the Old Gods",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+27 Intellect",
          "+18 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 9s"
      }
    ]
  }
]
};
