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
            "name": "Venerable Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+9 Stamina",
              "+6 Agility"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "3g 4s"
          },
          {
            "name": "Blood-Forged Bracers of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+9 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 30,
            "sellPrice": "3g 49s"
          },
          {
            "name": "Blood-Forged Breastplate of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+9 Stamina",
              "+6 Intellect"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "2g 36s"
          },
          {
            "name": "Corrupted Crown of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+9 Strength"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 30,
            "sellPrice": "2g 37s"
          },
          {
            "name": "Void-Touched Staff of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+9 Agility"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "2g 31s"
          },
          {
            "name": "Shadow Cowl of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+9 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 30,
            "sellPrice": "3g 20s"
          },
          {
            "name": "Ancient Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+9 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 30,
            "sellPrice": "3g 68s"
          },
          {
            "name": "Corrupted Cuffs of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+9 Intellect"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "2g 41s"
          },
          {
            "name": "Ancient Footpads of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+9 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 30,
            "sellPrice": "2g 57s"
          },
          {
            "name": "Savage Tunic of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+9 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 30,
            "sellPrice": "3g 59s"
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
            "name": "Void-Touched Axe of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Void-Touched Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 50,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Blood-Forged Talisman of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 50,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Savage Waistguard of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 50,
            "sellPrice": "4g 66s"
          },
          {
            "name": "Ancient Mitts of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+15 Strength"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Blood-Forged Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Blood-Forged Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 50,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Corrupted Kilt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+10 Intellect"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Savage Blade of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "4g 62s"
          },
          {
            "name": "Shadow Amice of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Void-Touched Buckler of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "4g 11s"
          },
          {
            "name": "Corrupted Spaulders of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Stamina",
              "+10 Intellect"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "4g 31s"
          },
          {
            "name": "Blood-Forged Charm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 50,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Savage Gloves of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "4g 69s"
          },
          {
            "name": "Savage Handguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "4g 80s"
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
            "name": "Corrupted Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Shimmering Pauldrons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Void-Touched Pants of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Corrupted Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Venerable Talisman of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Holy Legguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Savage Gavel of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+24 Stamina",
              "+16 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 63s"
          },
          {
            "name": "Venerable Medallion of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Venerable Boots of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 92s"
          },
          {
            "name": "Ethereal Gloves of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Corrupted Girdle of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 7s"
          },
          {
            "name": "Venerable Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 58s"
          },
          {
            "name": "Savage Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Holy Grips of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 46s"
          },
          {
            "name": "Savage Seal of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 83s"
          },
          {
            "name": "Savage Choker of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "9g 31s"
          },
          {
            "name": "Corrupted Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Blood-Forged Seal of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 53s"
          },
          {
            "name": "Venerable Leggings of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 30s"
          },
          {
            "name": "Ethereal Sash of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Savage Pants of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 32s"
          },
          {
            "name": "Savage Spaulders of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
          },
          {
            "name": "Ethereal Mantle of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Savage Mask of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "8g 37s"
          },
          {
            "name": "Corrupted Vest of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 61s"
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
            "name": "Shimmering Blade of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 65s"
          },
          {
            "name": "Ethereal Gloves of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "6g 37s"
          },
          {
            "name": "Ethereal Band of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 48s"
          },
          {
            "name": "Blood-Forged Legguards of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 67s"
          },
          {
            "name": "Void-Touched Leggings of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Holy Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Blood-Forged Legguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Venerable Boots of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Savage Pendant of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Void-Touched Girdle of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 74s"
          },
          {
            "name": "Shadow Mantle of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Ethereal Loop of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 64s"
          },
          {
            "name": "Void-Touched Choker of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Shadow Slippers of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 56s"
          },
          {
            "name": "Corrupted Medallion of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Void-Touched Collar of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 4s"
          },
          {
            "name": "Savage Cord of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 41s"
          },
          {
            "name": "Venerable Amice of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Shimmering Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 22s"
          },
          {
            "name": "Void-Touched Greatsword of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Blood-Forged Circlet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 78s"
          },
          {
            "name": "Shadow Sash of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Ancient Bracers of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Holy Collar of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 61s"
          },
          {
            "name": "Void-Touched Bow of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 85s"
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
            "name": "Holy Harness of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 42s"
          },
          {
            "name": "Ancient Ring of the Void",
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
            "sellPrice": "6g 92s"
          },
          {
            "name": "Holy Crown of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Ancient Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 71s"
          },
          {
            "name": "Holy Pendant of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 51s"
          },
          {
            "name": "Savage Collar of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 77s"
          },
          {
            "name": "Blood-Forged Cuffs of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 72s"
          },
          {
            "name": "Ancient Legguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 18s"
          },
          {
            "name": "Holy Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Ancient Sash of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Ethereal Talisman of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
          },
          {
            "name": "Shimmering Leggings of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Shadow Necklace of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 57s"
          },
          {
            "name": "Corrupted Greatsword of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Void-Touched Cowl of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 11s"
          },
          {
            "name": "Corrupted Wristguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Corrupted Shield of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Savage Greatsword of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 37s"
          },
          {
            "name": "Shimmering Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 52s"
          },
          {
            "name": "Ancient Grips of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 52s"
          },
          {
            "name": "Savage Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 72s"
          },
          {
            "name": "Corrupted Blade of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 4s"
          },
          {
            "name": "Void-Touched Crown of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Shimmering Bindings of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 49s"
          },
          {
            "name": "Shimmering Pendant of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Void-Touched Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Void-Touched Blade of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 30s"
          },
          {
            "name": "Void-Touched Gauntlets of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 54s"
          },
          {
            "name": "Void-Touched Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Ethereal Signet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "9g 20s"
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
            "name": "Savage Amulet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Holy Staff of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Ethereal Pendant of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 72s"
          },
          {
            "name": "Venerable Vest of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "6g 76s"
          },
          {
            "name": "Ethereal Cowl of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Ethereal Bow of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 80s"
          },
          {
            "name": "Shadow Axe of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 74s"
          },
          {
            "name": "Venerable Brooch of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "8g 58s"
          },
          {
            "name": "Venerable Blade of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 3s"
          },
          {
            "name": "Blood-Forged Circlet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "5g 39s"
          },
          {
            "name": "Void-Touched Collar of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Void-Touched Circlet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 0s"
          },
          {
            "name": "Blood-Forged Blade of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 75s"
          },
          {
            "name": "Blood-Forged Robes of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Blood-Forged Mantle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Corrupted Mantle of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Ancient Mitts of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Blood-Forged Sash of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Shimmering Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 1s"
          },
          {
            "name": "Ethereal Vest of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Blood-Forged Slippers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Ancient Gauntlets of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Holy Crown of Shattered Souls",
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
            "sellPrice": "6g 50s"
          },
          {
            "name": "Ethereal Spaulders of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 9s"
          },
          {
            "name": "Ethereal Dagger of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Shimmering Collar of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Savage Helm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 57s"
          },
          {
            "name": "Ancient Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 5s"
          },
          {
            "name": "Ethereal Breastplate of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
          },
          {
            "name": "Corrupted Kilt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
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
            "name": "Ancient Necklace of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Shadow Treads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "4g 29s"
          },
          {
            "name": "Ancient Sash of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 52,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Ethereal Talisman of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 52,
            "sellPrice": "5g 6s"
          },
          {
            "name": "Corrupted Helm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Savage Kilt of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 52,
            "sellPrice": "6g 74s"
          },
          {
            "name": "Ethereal Sabatons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 52,
            "sellPrice": "6g 87s"
          },
          {
            "name": "Savage Shield of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Venerable Loop of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 52,
            "sellPrice": "4g 98s"
          },
          {
            "name": "Corrupted Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Shimmering Collar of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 52,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Holy Greaves of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Strength",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Corrupted Breastplate of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "6g 30s"
          },
          {
            "name": "Ancient Cord of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+15 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 52,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Corrupted Crown of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "5g 51s"
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
            "name": "Ethereal Gavel of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+17 Intellect",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Corrupted Bindings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "4g 85s"
          },
          {
            "name": "Ancient Bulwark of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Blood-Forged Footpads of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "6g 1s"
          },
          {
            "name": "Void-Touched Harness of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+17 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Savage Aegis of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Venerable Talisman of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 58,
            "sellPrice": "6g 87s"
          },
          {
            "name": "Shimmering Dagger of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Agility",
              "+11 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "5g 71s"
          },
          {
            "name": "Shadow Mitts of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "4g 68s"
          },
          {
            "name": "Ethereal Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Strength"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "6g 59s"
          },
          {
            "name": "Blood-Forged Vest of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+23 Stamina",
              "+15 Intellect"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 58,
            "sellPrice": "9g 31s"
          },
          {
            "name": "Shimmering Bracers of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 67s"
          },
          {
            "name": "Shadow Crown of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+23 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "9g 25s"
          },
          {
            "name": "Void-Touched Sash of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "6g 44s"
          },
          {
            "name": "Ancient Sabatons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 58,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Holy Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Venerable Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 58,
            "sellPrice": "5g 30s"
          },
          {
            "name": "Blood-Forged Greaves of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "6g 48s"
          },
          {
            "name": "Holy Greaves of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 58,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Blood-Forged Axe of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+17 Spirit",
              "+11 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "5g 97s"
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
            "name": "Shimmering Epaulets of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 5s"
          },
          {
            "name": "Savage Gavel of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Savage Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 75s"
          },
          {
            "name": "Shadow Harness of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 83s"
          },
          {
            "name": "Holy Ring of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Holy Collar of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 52s"
          },
          {
            "name": "Shadow Sabatons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Holy Gloves of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Blood-Forged Greaves of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 52s"
          },
          {
            "name": "Blood-Forged Ring of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Holy Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Blood-Forged Pendant of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
          },
          {
            "name": "Shadow Pauldrons of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "9g 12s"
          },
          {
            "name": "Shadow Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Ancient Dagger of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 50s"
          },
          {
            "name": "Holy Axe of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Venerable Crown of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Venerable Belt of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 25s"
          },
          {
            "name": "Ethereal Grips of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Venerable Blade of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 13s"
          },
          {
            "name": "Venerable Sabatons of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Holy Axe of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 89s"
          },
          {
            "name": "Void-Touched Cuffs of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Holy Bow of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 11s"
          },
          {
            "name": "Shimmering Robes of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 26s"
          },
          {
            "name": "Blood-Forged Circlet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Shimmering Girdle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Savage Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Ethereal Spaulders of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 39s"
          },
          {
            "name": "Savage Spaulders of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
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
            "name": "Venerable Charm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Ethereal Axe of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 58,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Ancient Axe of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+17 Intellect",
              "+11 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 58,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Savage Vest of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+17 Intellect",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Savage Vambraces of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 58,
            "sellPrice": "6g 27s"
          },
          {
            "name": "Void-Touched Vambraces of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Corrupted Breastplate of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 58,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Shimmering Blade of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Holy Amice of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+23 Strength",
              "+15 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 58,
            "sellPrice": "8g 17s"
          },
          {
            "name": "Void-Touched Girdle of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Venerable Greatsword of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "4g 20s"
          },
          {
            "name": "Blood-Forged Wristguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 3s"
          },
          {
            "name": "Corrupted Dagger of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+23 Strength",
              "+15 Agility"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 58,
            "sellPrice": "8g 47s"
          },
          {
            "name": "Holy Mantle of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Venerable Axe of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 58,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Shadow Axe of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 58,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Corrupted Charm of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 58,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Shadow Axe of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+23 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 58,
            "sellPrice": "8g 17s"
          },
          {
            "name": "Shadow Gavel of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "6g 48s"
          },
          {
            "name": "Blood-Forged Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "6g 30s"
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
            "name": "Shadow Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Savage Aegis of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Corrupted Dagger of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Savage Mitts of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Shadow Amice of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 57s"
          },
          {
            "name": "Savage Treads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Corrupted Bow of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Void-Touched Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Corrupted Necklace of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Shimmering Seal of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Venerable Circlet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Void-Touched Bulwark of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Holy Cowl of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Blood-Forged Amulet of the Unseen",
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
            "sellPrice": "5g 98s"
          },
          {
            "name": "Void-Touched Crown of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 66s"
          },
          {
            "name": "Blood-Forged Gloves of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Shadow Girdle of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Venerable Waistguard of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 54s"
          },
          {
            "name": "Holy Helm of the Deep",
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
            "sellPrice": "5g 30s"
          },
          {
            "name": "Blood-Forged Treads of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Void-Touched Waistguard of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 1s"
          },
          {
            "name": "Savage Kilt of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 83s"
          },
          {
            "name": "Ethereal Sabatons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 67s"
          },
          {
            "name": "Ancient Medallion of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "6g 76s"
          },
          {
            "name": "Corrupted Pendant of the Crimson King",
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
            "sellPrice": "6g 28s"
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
            "name": "Ethereal Pendant of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 58s"
          },
          {
            "name": "Shadow Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Savage Vambraces of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 58s"
          },
          {
            "name": "Shimmering Footpads of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 58s"
          },
          {
            "name": "Ethereal Sabatons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Shimmering Pendant of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "9g 86s"
          },
          {
            "name": "Shimmering Blade of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 6s"
          },
          {
            "name": "Shadow Boots of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Ancient Circlet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Venerable Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "5g 96s"
          },
          {
            "name": "Corrupted Girdle of the Void",
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
            "sellPrice": "5g 46s"
          },
          {
            "name": "Ancient Bow of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 85s"
          },
          {
            "name": "Holy Kilt of the Deep",
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
            "sellPrice": "6g 64s"
          },
          {
            "name": "Holy Greaves of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Ethereal Circlet of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 49s"
          },
          {
            "name": "Corrupted Breastplate of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Ancient Circlet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Blood-Forged Greatsword of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 5s"
          },
          {
            "name": "Blood-Forged Girdle of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Shadow Robes of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 90s"
          },
          {
            "name": "Shimmering Greaves of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "5g 98s"
          },
          {
            "name": "Shadow Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Savage Cord of Eternal Slumber",
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
            "sellPrice": "6g 41s"
          },
          {
            "name": "Shimmering Vest of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 64s"
          },
          {
            "name": "Void-Touched Pants of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Ethereal Relic of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 43s"
          },
          {
            "name": "Shimmering Staff of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Ethereal Band of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Holy Bracers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 36s"
          },
          {
            "name": "Holy Tunic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 74s"
          },
          {
            "name": "Corrupted Pauldrons of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 65s"
          },
          {
            "name": "Ethereal Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Ethereal Signet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "6g 26s"
          },
          {
            "name": "Savage Mitts of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Corrupted Collar of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Shimmering Amice of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Corrupted Pants of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Holy Loop of the Deep",
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
            "sellPrice": "6g 29s"
          },
          {
            "name": "Venerable Belt of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 56s"
          },
          {
            "name": "Corrupted Slippers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 14s"
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
            "name": "Blood-Forged Signet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Shimmering Dagger of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 55,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Corrupted Medallion of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 55,
            "sellPrice": "4g 89s"
          },
          {
            "name": "Shimmering Treads of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 75s"
          },
          {
            "name": "Blood-Forged Buckler of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "4g 2s"
          },
          {
            "name": "Shadow Greaves of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+16 Spirit",
              "+10 Intellect"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Venerable Greatsword of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 55,
            "sellPrice": "9g 26s"
          },
          {
            "name": "Void-Touched Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+10 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 55,
            "sellPrice": "5g 80s"
          },
          {
            "name": "Savage Legguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+16 Agility"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Ancient Dagger of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Strength",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Void-Touched Mitts of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+16 Intellect"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Void-Touched Sash of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 55,
            "sellPrice": "8g 74s"
          },
          {
            "name": "Corrupted Wristguards of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+22 Agility",
              "+14 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 55,
            "sellPrice": "7g 72s"
          },
          {
            "name": "Blood-Forged Aegis of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Blood-Forged Collar of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 55,
            "sellPrice": "5g 2s"
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
            "name": "Savage Crown of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Void-Touched Axe of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 58,
            "sellPrice": "6g 53s"
          },
          {
            "name": "Ancient Charm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "6g 75s"
          },
          {
            "name": "Ethereal Buckler of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "4g 51s"
          },
          {
            "name": "Void-Touched Gauntlets of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Ancient Footpads of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+17 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "6g 31s"
          },
          {
            "name": "Holy Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 58,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Blood-Forged Legguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Blood-Forged Bindings of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Void-Touched Gloves of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+17 Intellect",
              "+11 Spirit"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Holy Seal of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 58,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Ethereal Relic of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 58,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Holy Bindings of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Corrupted Circlet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 72s"
          },
          {
            "name": "Void-Touched Robes of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "+11 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "5g 1s"
          },
          {
            "name": "Holy Mitts of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+11 Spirit"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Blood-Forged Sabatons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 5s"
          },
          {
            "name": "Shimmering Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Ancient Vambraces of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 98s"
          },
          {
            "name": "Shimmering Axe of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+23 Spirit",
              "+15 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 58,
            "sellPrice": "8g 45s"
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
            "name": "Venerable Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Ancient Staff of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 89s"
          },
          {
            "name": "Blood-Forged Medallion of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Savage Waistguard of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "6g 92s"
          },
          {
            "name": "Corrupted Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Savage Greaves of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 8s"
          },
          {
            "name": "Shadow Gavel of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 78s"
          },
          {
            "name": "Ethereal Robes of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 75s"
          },
          {
            "name": "Blood-Forged Kilt of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Blood-Forged Seal of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Venerable Footpads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Shimmering Blade of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 11s"
          },
          {
            "name": "Venerable Shield of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 25s"
          },
          {
            "name": "Ethereal Bindings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Ancient Blade of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 42s"
          },
          {
            "name": "Venerable Charm of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 74s"
          },
          {
            "name": "Venerable Robes of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "8g 17s"
          },
          {
            "name": "Venerable Spaulders of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Venerable Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Venerable Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Blood-Forged Greaves of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 17s"
          },
          {
            "name": "Venerable Collar of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 11s"
          },
          {
            "name": "Corrupted Cowl of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 66s"
          },
          {
            "name": "Shadow Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 94s"
          },
          {
            "name": "Shimmering Collar of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 48s"
          },
          {
            "name": "Ethereal Defender of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 47s"
          },
          {
            "name": "Shimmering Pauldrons of the Deep",
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
            "sellPrice": "6g 1s"
          },
          {
            "name": "Shimmering Choker of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "5g 85s"
          },
          {
            "name": "Venerable Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 90s"
          },
          {
            "name": "Shimmering Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 56s"
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
            "name": "Ethereal Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Ancient Footpads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Blood-Forged Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Blood-Forged Handguards of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 64s"
          },
          {
            "name": "Savage Cowl of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Blood-Forged Helm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 72s"
          },
          {
            "name": "Ethereal Leggings of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "9g 72s"
          },
          {
            "name": "Ethereal Legguards of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 42s"
          },
          {
            "name": "Shadow Band of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Corrupted Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 30s"
          },
          {
            "name": "Blood-Forged Greatsword of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Corrupted Pauldrons of the Archmage",
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
            "sellPrice": "5g 8s"
          },
          {
            "name": "Venerable Circlet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Blood-Forged Mask of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 52s"
          },
          {
            "name": "Void-Touched Brooch of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Void-Touched Pants of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 68s"
          },
          {
            "name": "Shadow Wristguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Ancient Cuffs of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Corrupted Epaulets of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
          },
          {
            "name": "Venerable Ring of Bloodletting",
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
            "sellPrice": "5g 74s"
          },
          {
            "name": "Holy Ring of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Blood-Forged Talisman of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 22s"
          },
          {
            "name": "Corrupted Pendant of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 33s"
          },
          {
            "name": "Ethereal Amice of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Blood-Forged Boots of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
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
            "name": "Venerable Slippers of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Shadow Helm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 27s"
          },
          {
            "name": "Ethereal Dagger of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Ethereal Staff of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "5g 1s"
          },
          {
            "name": "Ethereal Dagger of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Shadow Pants of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 40s"
          },
          {
            "name": "Ancient Charm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 82s"
          },
          {
            "name": "Corrupted Defender of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Shadow Mantle of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 41s"
          },
          {
            "name": "Corrupted Cowl of the Archmage",
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
            "sellPrice": "6g 19s"
          },
          {
            "name": "Savage Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 9s"
          },
          {
            "name": "Holy Leggings of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Ethereal Tunic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Ancient Pendant of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 39s"
          },
          {
            "name": "Holy Handguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "6g 36s"
          },
          {
            "name": "Savage Staff of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Savage Staff of Shattered Souls",
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
            "sellPrice": "5g 61s"
          },
          {
            "name": "Ancient Ring of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 59s"
          },
          {
            "name": "Holy Wristguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Venerable Gloves of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "5g 10s"
          },
          {
            "name": "Blood-Forged Grips of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Blood-Forged Ring of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Holy Mask of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 13s"
          },
          {
            "name": "Savage Relic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 8s"
          },
          {
            "name": "Void-Touched Dagger of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 15s"
          },
          {
            "name": "Venerable Grips of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 59s"
          },
          {
            "name": "Savage Staff of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 46s"
          },
          {
            "name": "Ancient Crown of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 88s"
          },
          {
            "name": "Venerable Treads of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 5s"
          },
          {
            "name": "Shadow Epaulets of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 44s"
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
            "name": "Blood-Forged Choker of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 2s"
          },
          {
            "name": "Shadow Boots of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 97s"
          },
          {
            "name": "Savage Shield of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 61s"
          },
          {
            "name": "Ancient Bindings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Savage Ring of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Shimmering Gloves of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "5g 36s"
          },
          {
            "name": "Ancient Footpads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "6g 38s"
          },
          {
            "name": "Blood-Forged Signet of the Betrayer",
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
            "sellPrice": "5g 39s"
          },
          {
            "name": "Ethereal Sabatons of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 5s"
          },
          {
            "name": "Shimmering Loop of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Shimmering Gloves of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Void-Touched Bow of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "9g 92s"
          },
          {
            "name": "Savage Gloves of the Void",
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
            "sellPrice": "6g 60s"
          },
          {
            "name": "Holy Gavel of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Shadow Greaves of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 39s"
          },
          {
            "name": "Shadow Dagger of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Venerable Choker of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 77s"
          },
          {
            "name": "Venerable Wristguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Savage Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Blood-Forged Slippers of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Blood-Forged Greaves of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 8s"
          },
          {
            "name": "Shimmering Vest of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 43s"
          },
          {
            "name": "Shadow Talisman of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 6s"
          },
          {
            "name": "Holy Gavel of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 57s"
          },
          {
            "name": "Ethereal Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 1s"
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
            "name": "Holy Loop of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 50,
            "sellPrice": "5g 30s"
          },
          {
            "name": "Corrupted Axe of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Agility",
              "+10 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 50,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Shadow Gavel of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Shadow Brooch of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 50,
            "sellPrice": "4g 7s"
          },
          {
            "name": "Holy Signet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 50,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Void-Touched Cord of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+15 Spirit",
              "+10 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "4g 62s"
          },
          {
            "name": "Void-Touched Sabatons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 50,
            "sellPrice": "5g 71s"
          },
          {
            "name": "Ethereal Buckler of the Archmage",
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
            "sellPrice": "4g 85s"
          },
          {
            "name": "Venerable Greaves of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "+10 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 50,
            "sellPrice": "4g 25s"
          },
          {
            "name": "Corrupted Talisman of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 50,
            "sellPrice": "7g 97s"
          },
          {
            "name": "Blood-Forged Band of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 50,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Ethereal Grips of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+15 Stamina",
              "+10 Intellect"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "4g 16s"
          },
          {
            "name": "Blood-Forged Bindings of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+15 Strength"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Savage Choker of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Corrupted Cowl of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 50,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Corrupted Ring of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Blood-Forged Dagger of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+15 Agility",
              "+10 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 50,
            "sellPrice": "4g 90s"
          },
          {
            "name": "Venerable Collar of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Savage Gavel of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 50,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Void-Touched Talisman of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "4g 10s"
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
            "name": "Holy Helm of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+13 Strength",
              "+8 Stamina"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Savage Pauldrons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+13 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 45,
            "sellPrice": "3g 25s"
          },
          {
            "name": "Holy Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+13 Agility"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "3g 60s"
          },
          {
            "name": "Venerable Gavel of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+13 Agility",
              "+8 Stamina"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "4g 81s"
          },
          {
            "name": "Shadow Staff of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+13 Agility"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Shadow Tunic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+13 Strength",
              "+8 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 45,
            "sellPrice": "4g 94s"
          },
          {
            "name": "Ethereal Wristguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "3g 67s"
          },
          {
            "name": "Holy Loop of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 45,
            "sellPrice": "4g 39s"
          },
          {
            "name": "Blood-Forged Crown of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+13 Stamina",
              "+8 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 45,
            "sellPrice": "4g 74s"
          },
          {
            "name": "Shadow Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+13 Spirit",
              "+8 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 45,
            "sellPrice": "4g 2s"
          },
          {
            "name": "Savage Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+13 Agility"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 45,
            "sellPrice": "4g 90s"
          },
          {
            "name": "Venerable Epaulets of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+13 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 45,
            "sellPrice": "4g 37s"
          },
          {
            "name": "Ethereal Axe of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+13 Intellect",
              "+8 Spirit"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "4g 7s"
          },
          {
            "name": "Shimmering Kilt of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 45,
            "sellPrice": "4g 27s"
          },
          {
            "name": "Venerable Pants of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 45,
            "sellPrice": "3g 6s"
          },
          {
            "name": "Shadow Collar of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+13 Intellect",
              "+8 Stamina"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "4g 24s"
          },
          {
            "name": "Venerable Leggings of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+13 Spirit",
              "+8 Intellect"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 45,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Savage Amice of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 45,
            "sellPrice": "3g 98s"
          },
          {
            "name": "Shimmering Handguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "4g 80s"
          },
          {
            "name": "Void-Touched Grips of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 45,
            "sellPrice": "4g 66s"
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
            "name": "Savage Handguards of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+22 Stamina",
              "+14 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 55,
            "sellPrice": "7g 21s"
          },
          {
            "name": "Ancient Spaulders of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+16 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 55,
            "sellPrice": "4g 47s"
          },
          {
            "name": "Venerable Mantle of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 55,
            "sellPrice": "7g 66s"
          },
          {
            "name": "Savage Signet of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+22 Intellect",
              "+14 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 55,
            "sellPrice": "9g 15s"
          },
          {
            "name": "Ancient Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+16 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Ethereal Vambraces of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+16 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 55,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Venerable Bindings of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "4g 18s"
          },
          {
            "name": "Ethereal Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Stamina",
              "+10 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 55,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Corrupted Mitts of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+22 Intellect",
              "+14 Spirit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 55,
            "sellPrice": "7g 6s"
          },
          {
            "name": "Ethereal Bow of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+16 Agility"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Corrupted Kilt of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+10 Intellect"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 55,
            "sellPrice": "4g 37s"
          },
          {
            "name": "Savage Bracers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 55,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Ethereal Circlet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 55,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Shimmering Staff of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 55,
            "sellPrice": "5g 39s"
          },
          {
            "name": "Holy Staff of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+22 Spirit"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 55,
            "sellPrice": "7g 90s"
          },
          {
            "name": "Void-Touched Ring of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Strength",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "6g 10s"
          },
          {
            "name": "Blood-Forged Collar of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "4g 96s"
          },
          {
            "name": "Venerable Pauldrons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Intellect"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 55,
            "sellPrice": "5g 50s"
          },
          {
            "name": "Savage Footpads of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+22 Strength",
              "+14 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 55,
            "sellPrice": "8g 11s"
          },
          {
            "name": "Ancient Axe of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 55,
            "sellPrice": "9g 56s"
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
        "name": "Emerald Mask of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "9g 16s"
      },
      {
        "name": "Emerald Band of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Spirit",
          "+18 Intellect"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 88s"
      },
      {
        "name": "Dream-Scarred Robes of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Slumbering Ring of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Stamina",
          "+18 Intellect"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "9g 48s"
      },
      {
        "name": "Emerald Gauntlets of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 16s"
      },
      {
        "name": "Nightmare-Forged Pauldrons of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+27 Agility",
          "+18 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "9g 52s"
      },
      {
        "name": "Dream-Scarred Waistguard of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 79s"
      },
      {
        "name": "Dream-Scarred Medallion of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "11g 85s"
      },
      {
        "name": "Slumbering Mantle of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "10g 80s"
      },
      {
        "name": "Corrupted Vest of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 4s"
      },
      {
        "name": "Dream-Scarred Brooch of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "9g 38s"
      },
      {
        "name": "Dream-Scarred Kilt of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 47s"
      },
      {
        "name": "Dream-Scarred Sabatons of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 88s"
      },
      {
        "name": "Corrupted Amice of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 71s"
      },
      {
        "name": "Dream-Scarred Legguards of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 9s"
      },
      {
        "name": "Slumbering Vambraces of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Emerald Greatsword of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "10g 82s"
      },
      {
        "name": "Slumbering Pauldrons of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "11g 76s"
      },
      {
        "name": "Emerald Helm of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 29s"
      },
      {
        "name": "Emerald Blade of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 45s"
      },
      {
        "name": "Slumbering Legguards of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 51s"
      },
      {
        "name": "Nightmare-Forged Vambraces of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Spirit",
          "+18 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 21s"
      },
      {
        "name": "Slumbering Greatsword of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 6s"
      },
      {
        "name": "Slumbering Bow of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+27 Spirit",
          "+18 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "9g 58s"
      },
      {
        "name": "Emerald Footpads of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "11g 58s"
      },
      {
        "name": "Nightmare-Forged Band of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Stamina",
          "+18 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 96s"
      },
      {
        "name": "Slumbering Cuffs of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "11g 24s"
      },
      {
        "name": "Nightmare-Forged Mask of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 81s"
      },
      {
        "name": "Nightmare-Forged Collar of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Stamina",
          "+18 Spirit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "10g 94s"
      },
      {
        "name": "Corrupted Mantle of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "9g 0s"
      },
      {
        "name": "Emerald Cowl of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "10g 63s"
      },
      {
        "name": "Slumbering Grips of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "10g 96s"
      },
      {
        "name": "Slumbering Bracers of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 87s"
      },
      {
        "name": "Corrupted Medallion of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 60s"
      },
      {
        "name": "Slumbering Blade of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 90s"
      },
      {
        "name": "Corrupted Gauntlets of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+27 Spirit",
          "+18 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 60s"
      },
      {
        "name": "Emerald Loop of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 56s"
      },
      {
        "name": "Emerald Aegis of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "10g 84s"
      },
      {
        "name": "Nightmare-Forged Signet of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 18s"
      },
      {
        "name": "Nightmare-Forged Loop of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Spirit",
          "+18 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 3s"
      },
      {
        "name": "Nightmare-Forged Mantle of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "11g 97s"
      },
      {
        "name": "Nightmare-Forged Band of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 5s"
      },
      {
        "name": "Dream-Scarred Necklace of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "10g 22s"
      },
      {
        "name": "Slumbering Bracers of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 67s"
      },
      {
        "name": "Nightmare-Forged Belt of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 56s"
      },
      {
        "name": "Corrupted Breastplate of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+27 Agility",
          "+18 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 15s"
      },
      {
        "name": "Emerald Pauldrons of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+27 Agility",
          "+18 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 6s"
      },
      {
        "name": "Slumbering Amulet of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 96s"
      },
      {
        "name": "Slumbering Sash of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 93s"
      },
      {
        "name": "Corrupted Staff of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 64s"
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
        "name": "Red Scale Pants of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "10g 31s"
      },
      {
        "name": "Enslaved Dagger of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 93s"
      },
      {
        "name": "Mountain-Forged Pendant of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Intellect",
          "+19 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "11g 12s"
      },
      {
        "name": "Enslaved Collar of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 40s"
      },
      {
        "name": "Enslaved Medallion of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "11g 12s"
      },
      {
        "name": "Searing Aegis of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 77s"
      },
      {
        "name": "Searing Talisman of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "11g 16s"
      },
      {
        "name": "Red Scale Gloves of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 51s"
      },
      {
        "name": "Red Scale Gavel of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "11g 40s"
      },
      {
        "name": "Dragonmaw Mitts of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+28 Strength",
          "+19 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "12g 1s"
      },
      {
        "name": "Mountain-Forged Gloves of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "11g 93s"
      },
      {
        "name": "Red Scale Harness of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 22s"
      },
      {
        "name": "Enslaved Leggings of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 42s"
      },
      {
        "name": "Mountain-Forged Staff of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 22s"
      },
      {
        "name": "Enslaved Bow of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 45s"
      },
      {
        "name": "Dragonmaw Ring of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "11g 33s"
      },
      {
        "name": "Mountain-Forged Cord of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Red Scale Loop of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "11g 37s"
      },
      {
        "name": "Red Scale Wristguards of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "11g 3s"
      },
      {
        "name": "Enslaved Cuffs of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "12g 45s"
      },
      {
        "name": "Enslaved Mitts of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "11g 51s"
      },
      {
        "name": "Red Scale Crown of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 97s"
      },
      {
        "name": "Mountain-Forged Slippers of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "11g 29s"
      },
      {
        "name": "Red Scale Circlet of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+28 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 61s"
      },
      {
        "name": "Enslaved Band of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Intellect",
          "+19 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "10g 17s"
      },
      {
        "name": "Red Scale Spaulders of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Strength"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "12g 51s"
      },
      {
        "name": "Red Scale Pants of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 83s"
      },
      {
        "name": "Mountain-Forged Slippers of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "10g 86s"
      },
      {
        "name": "Enslaved Grips of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 25s"
      },
      {
        "name": "Mountain-Forged Staff of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "11g 91s"
      },
      {
        "name": "Red Scale Amulet of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Stamina",
          "+19 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "12g 60s"
      },
      {
        "name": "Red Scale Blade of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Enslaved Helm of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 94s"
      },
      {
        "name": "Enslaved Ring of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Agility",
          "+19 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "11g 81s"
      },
      {
        "name": "Searing Circlet of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+28 Strength",
          "+19 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 90s"
      },
      {
        "name": "Mountain-Forged Sabatons of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+28 Spirit",
          "+19 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "11g 91s"
      },
      {
        "name": "Dragonmaw Medallion of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 84s"
      },
      {
        "name": "Enslaved Belt of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "11g 10s"
      },
      {
        "name": "Dragonmaw Ring of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Intellect",
          "+19 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "12g 27s"
      },
      {
        "name": "Searing Mantle of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 29s"
      },
      {
        "name": "Dragonmaw Talisman of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "12g 87s"
      },
      {
        "name": "Mountain-Forged Belt of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+28 Agility",
          "+19 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 98s"
      },
      {
        "name": "Red Scale Footpads of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+28 Agility",
          "+19 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "12g 37s"
      },
      {
        "name": "Searing Cowl of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 46s"
      },
      {
        "name": "Mountain-Forged Gavel of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 16s"
      },
      {
        "name": "Red Scale Vest of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Strength"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "12g 58s"
      },
      {
        "name": "Dragonmaw Robes of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+28 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 94s"
      },
      {
        "name": "Dragonmaw Axe of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "10g 91s"
      },
      {
        "name": "Enslaved Choker of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 17s"
      },
      {
        "name": "Enslaved Greaves of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "12g 51s"
      },
      {
        "name": "Enslaved Band of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 20s"
      },
      {
        "name": "Dragonmaw Necklace of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Agility",
          "+19 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "11g 76s"
      },
      {
        "name": "Enslaved Mitts of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+19 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 3s"
      },
      {
        "name": "Red Scale Medallion of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "11g 97s"
      },
      {
        "name": "Dragonmaw Signet of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 37s"
      },
      {
        "name": "Enslaved Blade of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "12g 3s"
      },
      {
        "name": "Searing Axe of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "11g 0s"
      },
      {
        "name": "Enslaved Blade of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "11g 17s"
      },
      {
        "name": "Red Scale Spaulders of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Mountain-Forged Breastplate of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 20s"
      },
      {
        "name": "Mountain-Forged Helm of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "12g 96s"
      },
      {
        "name": "Dragonmaw Dagger of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 36s"
      },
      {
        "name": "Dragonmaw Mantle of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 97s"
      },
      {
        "name": "Red Scale Girdle of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Red Scale Bindings of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Strength"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "11g 32s"
      },
      {
        "name": "Searing Bindings of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 25s"
      },
      {
        "name": "Red Scale Harness of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "12g 79s"
      },
      {
        "name": "Enslaved Brooch of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 98s"
      },
      {
        "name": "Enslaved Signet of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Dragonmaw Blade of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 67s"
      },
      {
        "name": "Red Scale Gauntlets of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "11g 47s"
      },
      {
        "name": "Red Scale Circlet of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+28 Intellect",
          "+19 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 83s"
      },
      {
        "name": "Red Scale Blade of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 55s"
      },
      {
        "name": "Enslaved Bow of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 22s"
      },
      {
        "name": "Searing Tunic of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 55s"
      },
      {
        "name": "Searing Boots of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 93s"
      },
      {
        "name": "Mountain-Forged Pants of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 31s"
      },
      {
        "name": "Dragonmaw Choker of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "11g 73s"
      },
      {
        "name": "Searing Blade of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Intellect",
          "+19 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 93s"
      },
      {
        "name": "Enslaved Cord of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "11g 35s"
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
        "name": "Cursed Cowl of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+30 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 71s"
      },
      {
        "name": "Plague-Ridden Dagger of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+30 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "11g 46s"
      },
      {
        "name": "Death-Bound Blade of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+30 Stamina",
          "+20 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "11g 36s"
      },
      {
        "name": "Plague-Ridden Helm of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "11g 62s"
      },
      {
        "name": "Scourge-Forged Mitts of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+30 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Death-Bound Staff of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+30 Agility",
          "+20 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "11g 43s"
      },
      {
        "name": "Necrotic Gloves of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "11g 54s"
      },
      {
        "name": "Necrotic Bow of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "11g 45s"
      },
      {
        "name": "Cursed Waistguard of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+30 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "12g 6s"
      },
      {
        "name": "Necrotic Cowl of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+30 Spirit",
          "+20 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "12g 34s"
      },
      {
        "name": "Necrotic Signet of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Intellect",
          "+20 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 67s"
      },
      {
        "name": "Death-Bound Choker of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "11g 82s"
      },
      {
        "name": "Cursed Harness of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+30 Stamina",
          "+20 Intellect"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 16s"
      },
      {
        "name": "Plague-Ridden Blade of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+30 Intellect",
          "+20 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "12g 63s"
      },
      {
        "name": "Necrotic Medallion of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "12g 36s"
      },
      {
        "name": "Cursed Sabatons of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "11g 40s"
      },
      {
        "name": "Death-Bound Axe of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+30 Stamina",
          "+20 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "11g 97s"
      },
      {
        "name": "Death-Bound Seal of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 87s"
      },
      {
        "name": "Death-Bound Helm of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+30 Stamina",
          "+20 Intellect"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "11g 32s"
      },
      {
        "name": "Plague-Ridden Mask of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "12g 42s"
      },
      {
        "name": "Death-Bound Greatsword of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 8s"
      },
      {
        "name": "Scourge-Forged Waistguard of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+30 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 31s"
      },
      {
        "name": "Plague-Ridden Blade of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "12g 90s"
      },
      {
        "name": "Death-Bound Medallion of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "11g 46s"
      },
      {
        "name": "Cursed Collar of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Agility",
          "+20 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 32s"
      },
      {
        "name": "Plague-Ridden Circlet of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+30 Stamina",
          "+20 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 40s"
      },
      {
        "name": "Plague-Ridden Pendant of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 38s"
      },
      {
        "name": "Plague-Ridden Axe of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+30 Agility",
          "+20 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 55s"
      },
      {
        "name": "Death-Bound Gloves of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+30 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 40s"
      },
      {
        "name": "Cursed Axe of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+30 Stamina",
          "+20 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "11g 69s"
      },
      {
        "name": "Cursed Handguards of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+30 Strength",
          "+20 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "12g 66s"
      },
      {
        "name": "Necrotic Shield of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+30 Agility",
          "+20 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 48s"
      },
      {
        "name": "Cursed Ring of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Spirit",
          "+20 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "12g 97s"
      },
      {
        "name": "Necrotic Mitts of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+30 Agility",
          "+20 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "11g 19s"
      },
      {
        "name": "Death-Bound Treads of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+30 Intellect",
          "+20 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "11g 67s"
      },
      {
        "name": "Cursed Gavel of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 15s"
      },
      {
        "name": "Necrotic Staff of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "11g 5s"
      },
      {
        "name": "Death-Bound Belt of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+30 Strength",
          "+20 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "12g 37s"
      },
      {
        "name": "Necrotic Cowl of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 88s"
      },
      {
        "name": "Necrotic Ring of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Intellect"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "11g 53s"
      },
      {
        "name": "Necrotic Slippers of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+30 Stamina",
          "+20 Intellect"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "11g 34s"
      },
      {
        "name": "Death-Bound Vest of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+30 Spirit",
          "+20 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "11g 46s"
      },
      {
        "name": "Scourge-Forged Brooch of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "13g 31s"
      },
      {
        "name": "Cursed Harness of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+30 Stamina",
          "+20 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 64s"
      },
      {
        "name": "Scourge-Forged Slippers of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 59s"
      },
      {
        "name": "Death-Bound Helm of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+30 Stamina",
          "+20 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 64s"
      },
      {
        "name": "Scourge-Forged Dagger of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+30 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "12g 48s"
      },
      {
        "name": "Death-Bound Choker of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Strength",
          "+20 Agility"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Cursed Choker of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Agility",
          "+20 Strength"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 90s"
      },
      {
        "name": "Necrotic Loop of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
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
        "name": "Timeless Staff of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 65s"
      },
      {
        "name": "Medivh's Axe of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "13g 13s"
      },
      {
        "name": "Timeless Staff of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "13g 91s"
      },
      {
        "name": "Medivh's Pants of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "13g 97s"
      },
      {
        "name": "Timeless Relic of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "13g 51s"
      },
      {
        "name": "Astral Sash of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "12g 48s"
      },
      {
        "name": "Ethereal Epaulets of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 39s"
      },
      {
        "name": "Timeless Collar of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "12g 31s"
      },
      {
        "name": "Ethereal Tunic of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 58s"
      },
      {
        "name": "Rift-Touched Collar of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "13g 30s"
      },
      {
        "name": "Medivh's Collar of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "11g 40s"
      },
      {
        "name": "Astral Bracers of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "13g 23s"
      },
      {
        "name": "Rift-Touched Wristguards of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "12g 23s"
      },
      {
        "name": "Rift-Touched Crown of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 65s"
      },
      {
        "name": "Timeless Gavel of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "13g 44s"
      },
      {
        "name": "Ethereal Relic of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "13g 37s"
      },
      {
        "name": "Medivh's Circlet of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 37s"
      },
      {
        "name": "Timeless Waistguard of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "11g 35s"
      },
      {
        "name": "Astral Sash of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "13g 46s"
      },
      {
        "name": "Astral Pauldrons of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "13g 78s"
      },
      {
        "name": "Ethereal Mask of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+31 Stamina",
          "+21 Agility"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "12g 73s"
      },
      {
        "name": "Medivh's Slippers of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "12g 0s"
      },
      {
        "name": "Astral Vest of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 5s"
      },
      {
        "name": "Medivh's Blade of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Strength",
          "+21 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "12g 15s"
      },
      {
        "name": "Astral Sash of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Medivh's Robes of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "13g 77s"
      },
      {
        "name": "Medivh's Gloves of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 16s"
      },
      {
        "name": "Rift-Touched Bracers of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 93s"
      },
      {
        "name": "Ethereal Robes of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "13g 15s"
      },
      {
        "name": "Ethereal Girdle of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 21s"
      },
      {
        "name": "Medivh's Bow of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "12g 11s"
      },
      {
        "name": "Rift-Touched Greaves of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "11g 2s"
      },
      {
        "name": "Astral Charm of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 5s"
      },
      {
        "name": "Ethereal Medallion of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 52s"
      },
      {
        "name": "Timeless Gloves of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 50s"
      },
      {
        "name": "Timeless Bracers of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "12g 49s"
      },
      {
        "name": "Rift-Touched Epaulets of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "13g 44s"
      },
      {
        "name": "Medivh's Choker of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "13g 66s"
      },
      {
        "name": "Medivh's Mantle of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 63s"
      },
      {
        "name": "Astral Gavel of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Intellect",
          "+21 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 83s"
      },
      {
        "name": "Rift-Touched Spaulders of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "13g 54s"
      },
      {
        "name": "Medivh's Amulet of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "12g 29s"
      },
      {
        "name": "Medivh's Dagger of the Guardian's Fall",
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
        "sellPrice": "13g 63s"
      },
      {
        "name": "Timeless Necklace of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 2s"
      },
      {
        "name": "Astral Legguards of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 16s"
      },
      {
        "name": "Rift-Touched Spaulders of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "13g 55s"
      },
      {
        "name": "Ethereal Ring of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 85s"
      },
      {
        "name": "Ethereal Blade of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 32s"
      },
      {
        "name": "Astral Buckler of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "12g 43s"
      },
      {
        "name": "Astral Signet of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 72s"
      },
      {
        "name": "Rift-Touched Treads of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "13g 96s"
      },
      {
        "name": "Medivh's Gauntlets of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "13g 51s"
      },
      {
        "name": "Medivh's Epaulets of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "12g 68s"
      },
      {
        "name": "Ethereal Boots of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Intellect",
          "+21 Spirit"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "13g 78s"
      },
      {
        "name": "Medivh's Spaulders of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+31 Stamina",
          "+21 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 93s"
      },
      {
        "name": "Astral Gavel of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "12g 94s"
      },
      {
        "name": "Rift-Touched Crown of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 40s"
      },
      {
        "name": "Timeless Sabatons of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+31 Strength",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 80s"
      },
      {
        "name": "Astral Mitts of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "12g 46s"
      },
      {
        "name": "Ethereal Mitts of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 69s"
      },
      {
        "name": "Timeless Gavel of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 12s"
      },
      {
        "name": "Ethereal Sabatons of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "12g 8s"
      },
      {
        "name": "Astral Ring of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 80s"
      },
      {
        "name": "Ethereal Band of the Ivory Tower",
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
        "sellPrice": "13g 96s"
      },
      {
        "name": "Ethereal Axe of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "12g 72s"
      },
      {
        "name": "Timeless Treads of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 91s"
      },
      {
        "name": "Timeless Gavel of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "13g 1s"
      },
      {
        "name": "Astral Axe of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "12g 38s"
      },
      {
        "name": "Rift-Touched Dagger of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "13g 86s"
      },
      {
        "name": "Medivh's Waistguard of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "12g 85s"
      },
      {
        "name": "Ethereal Pauldrons of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Strength"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "12g 45s"
      },
      {
        "name": "Timeless Girdle of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 49s"
      },
      {
        "name": "Medivh's Slippers of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+31 Strength",
          "+21 Stamina"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "12g 64s"
      },
      {
        "name": "Ethereal Boots of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "12g 67s"
      },
      {
        "name": "Timeless Talisman of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "13g 5s"
      },
      {
        "name": "Timeless Cord of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "13g 82s"
      },
      {
        "name": "Ethereal Signet of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "12g 56s"
      },
      {
        "name": "Ethereal Pauldrons of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "13g 91s"
      },
      {
        "name": "Astral Buckler of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "13g 52s"
      },
      {
        "name": "Rift-Touched Pauldrons of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "12g 1s"
      },
      {
        "name": "Medivh's Greatsword of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "13g 6s"
      },
      {
        "name": "Astral Bow of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "12g 66s"
      },
      {
        "name": "Rift-Touched Aegis of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "12g 65s"
      },
      {
        "name": "Timeless Vambraces of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 75s"
      },
      {
        "name": "Medivh's Loop of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Stamina",
          "+21 Strength"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "12g 90s"
      },
      {
        "name": "Medivh's Boots of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 85s"
      },
      {
        "name": "Astral Bracers of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "12g 40s"
      },
      {
        "name": "Rift-Touched Legguards of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "13g 76s"
      },
      {
        "name": "Timeless Relic of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 35s"
      },
      {
        "name": "Medivh's Amice of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "12g 7s"
      },
      {
        "name": "Astral Axe of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "12g 42s"
      },
      {
        "name": "Astral Pants of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+31 Strength",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "13g 71s"
      },
      {
        "name": "Medivh's Gavel of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 3s"
      },
      {
        "name": "Astral Cowl of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "12g 81s"
      },
      {
        "name": "Ethereal Staff of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+31 Intellect",
          "+21 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "12g 9s"
      },
      {
        "name": "Rift-Touched Waistguard of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 0s"
      },
      {
        "name": "Rift-Touched Boots of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "12g 86s"
      },
      {
        "name": "Timeless Gavel of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 98s"
      },
      {
        "name": "Medivh's Leggings of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "12g 13s"
      },
      {
        "name": "Ethereal Mask of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "12g 40s"
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
        "name": "Whispering Pendant of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "13g 61s"
      },
      {
        "name": "Whispering Gavel of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+33 Spirit",
          "+22 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "14g 66s"
      },
      {
        "name": "Whispering Necklace of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "14g 63s"
      },
      {
        "name": "Faceless Talisman of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "14g 49s"
      },
      {
        "name": "Faceless Staff of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 62s"
      },
      {
        "name": "Tentacled Gloves of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "12g 65s"
      },
      {
        "name": "Void-Touched Band of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "14g 58s"
      },
      {
        "name": "Faceless Signet of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina",
          "+22 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "12g 79s"
      },
      {
        "name": "Whispering Band of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "14g 70s"
      },
      {
        "name": "Maddening Crown of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "14g 27s"
      },
      {
        "name": "Void-Touched Footpads of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "14g 41s"
      },
      {
        "name": "Void-Touched Epaulets of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "13g 84s"
      },
      {
        "name": "Whispering Greatsword of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+33 Stamina",
          "+22 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "14g 91s"
      },
      {
        "name": "Whispering Spaulders of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "12g 49s"
      },
      {
        "name": "Tentacled Brooch of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Tentacled Bracers of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "13g 95s"
      },
      {
        "name": "Faceless Loop of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "13g 58s"
      },
      {
        "name": "Void-Touched Blade of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "12g 18s"
      },
      {
        "name": "Faceless Robes of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "14g 72s"
      },
      {
        "name": "Maddening Bracers of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+33 Intellect",
          "+22 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "14g 53s"
      },
      {
        "name": "Tentacled Gavel of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "13g 73s"
      },
      {
        "name": "Faceless Belt of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+33 Spirit",
          "+22 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "13g 3s"
      },
      {
        "name": "Faceless Breastplate of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+33 Intellect",
          "+22 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 18s"
      },
      {
        "name": "Maddening Treads of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "14g 48s"
      },
      {
        "name": "Whispering Choker of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "14g 3s"
      },
      {
        "name": "Void-Touched Gloves of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "13g 28s"
      },
      {
        "name": "Tentacled Charm of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 64s"
      },
      {
        "name": "Whispering Loop of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "13g 75s"
      },
      {
        "name": "Maddening Harness of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "14g 77s"
      },
      {
        "name": "Faceless Dagger of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 7s"
      },
      {
        "name": "Whispering Harness of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "14g 76s"
      },
      {
        "name": "Tentacled Staff of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Strength",
          "+22 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "13g 32s"
      },
      {
        "name": "Whispering Loop of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Intellect",
          "+22 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 22s"
      },
      {
        "name": "Maddening Mask of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "14g 36s"
      },
      {
        "name": "Maddening Bow of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "14g 67s"
      },
      {
        "name": "Whispering Staff of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+33 Intellect",
          "+22 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 78s"
      },
      {
        "name": "Tentacled Kilt of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 17s"
      },
      {
        "name": "Tentacled Cord of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 66s"
      },
      {
        "name": "Faceless Cord of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "14g 76s"
      },
      {
        "name": "Whispering Grips of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "14g 41s"
      },
      {
        "name": "Maddening Harness of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 3s"
      },
      {
        "name": "Whispering Bow of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "12g 85s"
      },
      {
        "name": "Whispering Sash of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 98s"
      },
      {
        "name": "Whispering Ring of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 24s"
      },
      {
        "name": "Faceless Cuffs of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "13g 71s"
      },
      {
        "name": "Tentacled Pants of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Void-Touched Gavel of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "14g 81s"
      },
      {
        "name": "Faceless Leggings of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "14g 60s"
      },
      {
        "name": "Tentacled Gavel of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 62s"
      },
      {
        "name": "Faceless Grips of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "13g 57s"
      },
      {
        "name": "Tentacled Handguards of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "14g 84s"
      },
      {
        "name": "Tentacled Band of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "14g 9s"
      },
      {
        "name": "Void-Touched Blade of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "14g 56s"
      },
      {
        "name": "Void-Touched Greaves of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "12g 16s"
      },
      {
        "name": "Void-Touched Loop of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "14g 13s"
      },
      {
        "name": "Faceless Greatsword of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "13g 64s"
      },
      {
        "name": "Whispering Talisman of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "13g 80s"
      },
      {
        "name": "Tentacled Brooch of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "14g 91s"
      },
      {
        "name": "Tentacled Kilt of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "14g 60s"
      },
      {
        "name": "Maddening Seal of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Spirit",
          "+22 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "14g 59s"
      },
      {
        "name": "Faceless Wristguards of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "12g 90s"
      },
      {
        "name": "Tentacled Bow of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "13g 25s"
      },
      {
        "name": "Void-Touched Legguards of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 86s"
      },
      {
        "name": "Maddening Vambraces of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "13g 68s"
      },
      {
        "name": "Maddening Mantle of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "14g 32s"
      },
      {
        "name": "Maddening Pants of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "14g 15s"
      },
      {
        "name": "Maddening Wristguards of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "14g 17s"
      },
      {
        "name": "Whispering Staff of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+33 Intellect",
          "+22 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "12g 82s"
      },
      {
        "name": "Faceless Bow of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "13g 77s"
      },
      {
        "name": "Faceless Kilt of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "14g 13s"
      },
      {
        "name": "Maddening Pants of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "14g 45s"
      },
      {
        "name": "Void-Touched Medallion of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "14g 89s"
      },
      {
        "name": "Faceless Breastplate of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+33 Strength",
          "+22 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "13g 42s"
      },
      {
        "name": "Maddening Cowl of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "14g 1s"
      },
      {
        "name": "Maddening Brooch of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 89s"
      },
      {
        "name": "Tentacled Mask of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "14g 43s"
      },
      {
        "name": "Whispering Gauntlets of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "13g 49s"
      },
      {
        "name": "Whispering Talisman of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "13g 77s"
      },
      {
        "name": "Maddening Staff of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "13g 48s"
      },
      {
        "name": "Maddening Band of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Intellect",
          "+22 Stamina"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "14g 25s"
      },
      {
        "name": "Maddening Kilt of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Spirit",
          "+22 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "13g 43s"
      },
      {
        "name": "Tentacled Spaulders of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 2s"
      },
      {
        "name": "Tentacled Tunic of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "13g 12s"
      },
      {
        "name": "Void-Touched Bulwark of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 12s"
      },
      {
        "name": "Void-Touched Treads of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "14g 89s"
      },
      {
        "name": "Void-Touched Medallion of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 61s"
      },
      {
        "name": "Tentacled Belt of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+33 Spirit",
          "+22 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "13g 33s"
      },
      {
        "name": "Maddening Kilt of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "13g 87s"
      },
      {
        "name": "Tentacled Blade of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "12g 42s"
      },
      {
        "name": "Void-Touched Handguards of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "13g 47s"
      },
      {
        "name": "Whispering Gauntlets of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "13g 92s"
      },
      {
        "name": "Maddening Footpads of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "13g 95s"
      },
      {
        "name": "Whispering Talisman of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 70s"
      },
      {
        "name": "Whispering Bindings of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "13g 41s"
      },
      {
        "name": "Tentacled Loop of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "14g 9s"
      },
      {
        "name": "Void-Touched Leggings of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "13g 41s"
      },
      {
        "name": "Maddening Ring of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "13g 68s"
      },
      {
        "name": "Faceless Sash of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+33 Intellect",
          "+22 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "13g 84s"
      },
      {
        "name": "Whispering Dagger of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Strength",
          "+22 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "14g 61s"
      },
      {
        "name": "Maddening Helm of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "14g 75s"
      }
    ]
  }
]
};
