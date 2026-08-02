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
            "name": "Corrupted Talisman of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 16s"
          },
          {
            "name": "Savage Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+19 Strength",
              "+19 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 6s"
          },
          {
            "name": "Savage Treads of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+14 Stamina",
              "+16 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 9s"
          },
          {
            "name": "Ethereal Bindings of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+28 Stamina",
              "+17 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 59s"
          },
          {
            "name": "Ethereal Boots of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+29 Stamina",
              "+13 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 76s"
          },
          {
            "name": "Shimmering Waistguard of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+19 Stamina",
              "+17 Agility"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "3g 57s"
          },
          {
            "name": "Void-Touched Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+19 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 13s"
          },
          {
            "name": "Corrupted Breastplate of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+22 Stamina",
              "+19 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 58s"
          },
          {
            "name": "Ancient Waistguard of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+14 Stamina",
              "+10 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Shadow Cuffs of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+20 Spirit",
              "+13 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
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
            "name": "Blood-Forged Leggings of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+12 Spirit"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "7g 82s"
          },
          {
            "name": "Shimmering Slippers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+11 Agility",
              "+6 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 10s"
          },
          {
            "name": "Ethereal Wristguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "+19 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 47s"
          },
          {
            "name": "Ancient Seal of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Strength",
              "+10 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 83s"
          },
          {
            "name": "Ancient Loop of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+29 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 58s"
          },
          {
            "name": "Void-Touched Tunic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 38s"
          },
          {
            "name": "Corrupted Seal of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "10g 36s"
          },
          {
            "name": "Corrupted Slippers of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+27 Strength"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "6g 59s"
          },
          {
            "name": "Venerable Crown of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "4g 20s"
          },
          {
            "name": "Shadow Handguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+11 Spirit",
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 7s"
          },
          {
            "name": "Holy Pants of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+17 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "4g 67s"
          },
          {
            "name": "Ethereal Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+12 Agility",
              "+17 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 32s"
          },
          {
            "name": "Holy Spaulders of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+12 Agility",
              "+14 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "2g 69s"
          },
          {
            "name": "Ancient Cord of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+10 Spirit",
              "+6 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 63s"
          },
          {
            "name": "Ethereal Axe of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+13 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "2g 19s"
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
            "name": "Holy Vest of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+27 Strength",
              "+14 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 17s"
          },
          {
            "name": "Blood-Forged Gauntlets of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+14 Stamina",
              "+19 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 39s"
          },
          {
            "name": "Blood-Forged Staff of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+20 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 30s"
          },
          {
            "name": "Ancient Gavel of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "9g 44s"
          },
          {
            "name": "Corrupted Mitts of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+26 Spirit",
              "+6 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 64s"
          },
          {
            "name": "Holy Relic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "6g 5s"
          },
          {
            "name": "Ancient Greatsword of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 57s"
          },
          {
            "name": "Ethereal Collar of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+26 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 26s"
          },
          {
            "name": "Ethereal Loop of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+28 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "1g 26s"
          },
          {
            "name": "Shimmering Gavel of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+12 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "9g 93s"
          },
          {
            "name": "Void-Touched Amulet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 97s"
          },
          {
            "name": "Void-Touched Charm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 21s"
          },
          {
            "name": "Blood-Forged Crown of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+25 Stamina",
              "+11 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 41s"
          },
          {
            "name": "Corrupted Mask of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+29 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 6s"
          },
          {
            "name": "Corrupted Aegis of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+25 Stamina",
              "+6 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 68s"
          },
          {
            "name": "Ancient Leggings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+21 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 68s"
          },
          {
            "name": "Void-Touched Axe of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+19 Stamina",
              "+16 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 42s"
          },
          {
            "name": "Shimmering Grips of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+27 Intellect",
              "+5 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 47s"
          },
          {
            "name": "Venerable Loop of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Ancient Sash of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 82s"
          },
          {
            "name": "Holy Axe of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+26 Intellect",
              "+10 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "7g 89s"
          },
          {
            "name": "Blood-Forged Boots of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+19 Spirit",
              "+10 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 75s"
          },
          {
            "name": "Ethereal Talisman of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "3g 32s"
          },
          {
            "name": "Shimmering Bindings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+12 Stamina",
              "+17 Strength"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 57s"
          },
          {
            "name": "Ethereal Circlet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+25 Strength",
              "+5 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 59s"
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
            "name": "Ethereal Seal of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+21 Intellect",
              "+9 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 0s"
          },
          {
            "name": "Corrupted Tunic of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+19 Spirit",
              "+15 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 49s"
          },
          {
            "name": "Holy Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+25 Spirit",
              "+8 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 69s"
          },
          {
            "name": "Savage Loop of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect",
              "+6 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 59s"
          },
          {
            "name": "Savage Spaulders of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+21 Stamina",
              "+11 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "7g 20s"
          },
          {
            "name": "Venerable Bracers of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+29 Intellect"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 39s"
          },
          {
            "name": "Ancient Footpads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+27 Spirit",
              "+6 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 10s"
          },
          {
            "name": "Corrupted Amice of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "7g 45s"
          },
          {
            "name": "Holy Choker of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+20 Strength",
              "+7 Agility"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 52s"
          },
          {
            "name": "Corrupted Gloves of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+19 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Savage Mantle of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+10 Intellect",
              "+18 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Void-Touched Dagger of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+12 Stamina",
              "+15 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Ethereal Band of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Strength",
              "+15 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 20s"
          },
          {
            "name": "Blood-Forged Aegis of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+26 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 17s"
          },
          {
            "name": "Ethereal Greaves of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+27 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 36s"
          },
          {
            "name": "Blood-Forged Mask of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+12 Agility",
              "+15 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "9g 93s"
          },
          {
            "name": "Shimmering Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 2s"
          },
          {
            "name": "Blood-Forged Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "10g 22s"
          },
          {
            "name": "Shadow Bow of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+28 Strength",
              "+10 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "4g 74s"
          },
          {
            "name": "Void-Touched Bindings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 86s"
          },
          {
            "name": "Blood-Forged Grips of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+14 Agility",
              "+8 Strength"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "7g 60s"
          },
          {
            "name": "Shimmering Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+10 Stamina",
              "+19 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Savage Gavel of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+20 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Shadow Necklace of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+12 Stamina",
              "+13 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "4g 32s"
          },
          {
            "name": "Ethereal Wristguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+18 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 25s"
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
            "name": "Ethereal Gavel of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+25 Stamina",
              "+8 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 49s"
          },
          {
            "name": "Void-Touched Talisman of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 88s"
          },
          {
            "name": "Blood-Forged Vest of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "7g 43s"
          },
          {
            "name": "Blood-Forged Dagger of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+11 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 26s"
          },
          {
            "name": "Venerable Sash of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+28 Strength",
              "+8 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "3g 56s"
          },
          {
            "name": "Ethereal Bow of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+29 Intellect",
              "+11 Spirit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "10g 71s"
          },
          {
            "name": "Shadow Choker of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 70s"
          },
          {
            "name": "Shimmering Blade of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+27 Stamina",
              "+16 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 19s"
          },
          {
            "name": "Shadow Bindings of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+28 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Ethereal Legguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+21 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 58s"
          },
          {
            "name": "Shadow Greatsword of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+25 Stamina",
              "+7 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 81s"
          },
          {
            "name": "Venerable Seal of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+21 Spirit",
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 62s"
          },
          {
            "name": "Shadow Band of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 49s"
          },
          {
            "name": "Shadow Blade of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 42s"
          },
          {
            "name": "Corrupted Choker of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+14 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 82s"
          },
          {
            "name": "Holy Girdle of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+12 Stamina",
              "+9 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 62s"
          },
          {
            "name": "Corrupted Pants of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+14 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 74s"
          },
          {
            "name": "Savage Leggings of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+11 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "4g 30s"
          },
          {
            "name": "Corrupted Mitts of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+12 Spirit",
              "+18 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 8s"
          },
          {
            "name": "Corrupted Bracers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+19 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 37s"
          },
          {
            "name": "Venerable Greatsword of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Shimmering Axe of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Intellect",
              "+18 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Venerable Waistguard of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+6 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 90s"
          },
          {
            "name": "Venerable Relic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "1g 97s"
          },
          {
            "name": "Corrupted Collar of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+22 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 62s"
          },
          {
            "name": "Corrupted Grips of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+26 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "3g 88s"
          },
          {
            "name": "Shimmering Harness of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+25 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "9g 80s"
          },
          {
            "name": "Shadow Cowl of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+29 Stamina",
              "+6 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 8s"
          },
          {
            "name": "Ethereal Axe of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+13 Agility",
              "+10 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Shimmering Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+28 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "10g 3s"
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
            "name": "Savage Collar of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+23 Stamina",
              "+14 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "7g 59s"
          },
          {
            "name": "Corrupted Kilt of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+10 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "1g 27s"
          },
          {
            "name": "Corrupted Grips of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+25 Strength"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "1g 76s"
          },
          {
            "name": "Corrupted Crown of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+27 Strength",
              "+8 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 97s"
          },
          {
            "name": "Shimmering Tunic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+25 Intellect"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 87s"
          },
          {
            "name": "Ethereal Cord of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+29 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 96s"
          },
          {
            "name": "Ethereal Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+27 Intellect",
              "+5 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 18s"
          },
          {
            "name": "Void-Touched Bracers of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+17 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 29s"
          },
          {
            "name": "Corrupted Waistguard of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+16 Agility",
              "+14 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 31s"
          },
          {
            "name": "Ethereal Tunic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+12 Spirit",
              "+14 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 73s"
          },
          {
            "name": "Ancient Shield of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 84s"
          },
          {
            "name": "Ancient Axe of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+22 Spirit",
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 84s"
          },
          {
            "name": "Shimmering Axe of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+23 Spirit",
              "+5 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 98s"
          },
          {
            "name": "Venerable Choker of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+12 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 37s"
          },
          {
            "name": "Shimmering Sash of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 68s"
          },
          {
            "name": "Blood-Forged Blade of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+29 Stamina",
              "+19 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 28s"
          },
          {
            "name": "Ancient Amulet of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+21 Stamina",
              "+19 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "4g 23s"
          },
          {
            "name": "Venerable Necklace of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+25 Strength",
              "+18 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 71s"
          },
          {
            "name": "Holy Loop of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 37s"
          },
          {
            "name": "Shadow Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+20 Intellect",
              "+6 Spirit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "6g 79s"
          },
          {
            "name": "Ethereal Sabatons of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+24 Agility",
              "+6 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "9g 3s"
          },
          {
            "name": "Holy Girdle of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+23 Agility",
              "+18 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 81s"
          },
          {
            "name": "Corrupted Gavel of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+26 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 31s"
          },
          {
            "name": "Ethereal Buckler of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+21 Stamina",
              "+18 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 33s"
          },
          {
            "name": "Ancient Vest of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+19 Agility",
              "+13 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 54s"
          },
          {
            "name": "Ancient Ring of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+14 Stamina",
              "+11 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "8g 17s"
          },
          {
            "name": "Ethereal Gavel of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Strength",
              "+8 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 5s"
          },
          {
            "name": "Shimmering Staff of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+15 Intellect",
              "+8 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Corrupted Circlet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 79s"
          },
          {
            "name": "Shimmering Aegis of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "4g 76s"
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
            "name": "Ethereal Brooch of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Ethereal Spaulders of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+28 Spirit",
              "+5 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 26s"
          },
          {
            "name": "Corrupted Breastplate of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+23 Stamina",
              "+18 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "10g 78s"
          },
          {
            "name": "Savage Amulet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+5 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 56s"
          },
          {
            "name": "Savage Leggings of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+29 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 72s"
          },
          {
            "name": "Void-Touched Spaulders of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+26 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 27s"
          },
          {
            "name": "Corrupted Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 1s"
          },
          {
            "name": "Savage Tunic of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+22 Strength",
              "+17 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 58s"
          },
          {
            "name": "Void-Touched Blade of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+11 Intellect",
              "+17 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 89s"
          },
          {
            "name": "Holy Bracers of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+13 Stamina",
              "+7 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 64s"
          },
          {
            "name": "Venerable Helm of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+15 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 5s"
          },
          {
            "name": "Ethereal Vambraces of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+28 Spirit"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 92s"
          },
          {
            "name": "Holy Waistguard of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+25 Agility",
              "+7 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Shimmering Shield of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 55s"
          },
          {
            "name": "Shadow Pendant of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+27 Spirit",
              "+7 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "8g 85s"
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
            "name": "Holy Footpads of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "3g 71s"
          },
          {
            "name": "Holy Pendant of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "9g 61s"
          },
          {
            "name": "Corrupted Mitts of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+25 Agility",
              "+18 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 78s"
          },
          {
            "name": "Ancient Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 2s"
          },
          {
            "name": "Shadow Pants of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 62s"
          },
          {
            "name": "Shadow Slippers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+10 Stamina",
              "+18 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "1g 90s"
          },
          {
            "name": "Ancient Belt of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Savage Staff of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "7g 4s"
          },
          {
            "name": "Ethereal Vest of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 47s"
          },
          {
            "name": "Ethereal Amice of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+11 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 81s"
          },
          {
            "name": "Shadow Greatsword of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+10 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 68s"
          },
          {
            "name": "Holy Loop of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+19 Intellect",
              "+18 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "8g 73s"
          },
          {
            "name": "Holy Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+13 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 20s"
          },
          {
            "name": "Blood-Forged Blade of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Strength",
              "+11 Agility"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "5g 54s"
          },
          {
            "name": "Void-Touched Staff of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+23 Strength",
              "+11 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 46s"
          },
          {
            "name": "Shadow Staff of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+14 Spirit",
              "+11 Intellect"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "1g 40s"
          },
          {
            "name": "Shadow Amice of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+21 Strength",
              "+13 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 62s"
          },
          {
            "name": "Venerable Gauntlets of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+26 Intellect",
              "+14 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 42s"
          },
          {
            "name": "Shadow Cuffs of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "2g 64s"
          },
          {
            "name": "Blood-Forged Tunic of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+22 Intellect",
              "+15 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "10g 7s"
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
            "name": "Shadow Charm of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 47s"
          },
          {
            "name": "Blood-Forged Harness of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 29s"
          },
          {
            "name": "Corrupted Helm of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+26 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 0s"
          },
          {
            "name": "Ethereal Treads of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+17 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 28s"
          },
          {
            "name": "Savage Mask of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+19 Spirit",
              "+7 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "4g 1s"
          },
          {
            "name": "Savage Choker of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina",
              "+19 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 44s"
          },
          {
            "name": "Blood-Forged Aegis of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+23 Agility",
              "+15 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 51s"
          },
          {
            "name": "Shimmering Pants of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 96s"
          },
          {
            "name": "Venerable Band of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+26 Agility",
              "+13 Strength"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Shimmering Gavel of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+21 Stamina",
              "+5 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 28s"
          },
          {
            "name": "Savage Breastplate of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+25 Stamina",
              "+16 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 84s"
          },
          {
            "name": "Ethereal Staff of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Intellect",
              "+7 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 16s"
          },
          {
            "name": "Venerable Relic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 73s"
          },
          {
            "name": "Ethereal Gloves of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+17 Agility",
              "+9 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 86s"
          },
          {
            "name": "Holy Kilt of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+14 Strength",
              "+7 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Ethereal Cord of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+19 Strength",
              "+18 Agility"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "3g 92s"
          },
          {
            "name": "Savage Greaves of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+20 Spirit",
              "+15 Intellect"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 42s"
          },
          {
            "name": "Shadow Talisman of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "1g 53s"
          },
          {
            "name": "Ethereal Buckler of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Shimmering Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+13 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 9s"
          },
          {
            "name": "Holy Gloves of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+7 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 6s"
          },
          {
            "name": "Ethereal Slippers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+28 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Corrupted Belt of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+14 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Blood-Forged Blade of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+21 Stamina",
              "+18 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 58s"
          },
          {
            "name": "Savage Necklace of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+27 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "6g 74s"
          },
          {
            "name": "Void-Touched Seal of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+21 Agility",
              "+18 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 69s"
          },
          {
            "name": "Savage Slippers of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 31s"
          },
          {
            "name": "Corrupted Brooch of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "9g 61s"
          },
          {
            "name": "Ethereal Girdle of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+6 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 28s"
          },
          {
            "name": "Venerable Bracers of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+14 Spirit",
              "+15 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "2g 76s"
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
            "name": "Ethereal Tunic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+22 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 88s"
          },
          {
            "name": "Blood-Forged Talisman of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 33s"
          },
          {
            "name": "Blood-Forged Sash of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+23 Spirit",
              "+13 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 96s"
          },
          {
            "name": "Venerable Medallion of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Savage Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 49s"
          },
          {
            "name": "Shimmering Gloves of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "8g 26s"
          },
          {
            "name": "Ancient Collar of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+25 Strength",
              "+17 Agility"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 71s"
          },
          {
            "name": "Corrupted Mask of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+25 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 20s"
          },
          {
            "name": "Holy Bow of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+15 Agility",
              "+9 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 60s"
          },
          {
            "name": "Holy Vambraces of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+14 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Ancient Mask of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+16 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 63s"
          },
          {
            "name": "Venerable Circlet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+25 Stamina",
              "+17 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Corrupted Cowl of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 60s"
          },
          {
            "name": "Venerable Slippers of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 47s"
          },
          {
            "name": "Ancient Waistguard of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+18 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 72s"
          },
          {
            "name": "Holy Bow of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Shimmering Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 94s"
          },
          {
            "name": "Venerable Necklace of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Agility",
              "+6 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 5s"
          },
          {
            "name": "Ethereal Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+25 Stamina",
              "+15 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "3g 5s"
          },
          {
            "name": "Savage Treads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 37s"
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
            "name": "Savage Bulwark of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Agility",
              "+8 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Void-Touched Greatsword of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina",
              "+19 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 24s"
          },
          {
            "name": "Ancient Belt of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+21 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 90s"
          },
          {
            "name": "Shadow Axe of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+10 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 42s"
          },
          {
            "name": "Blood-Forged Breastplate of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+20 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 68s"
          },
          {
            "name": "Shimmering Belt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+10 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 95s"
          },
          {
            "name": "Shimmering Cuffs of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+29 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 45s"
          },
          {
            "name": "Savage Belt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Spirit",
              "+19 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 20s"
          },
          {
            "name": "Void-Touched Kilt of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+25 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 28s"
          },
          {
            "name": "Shadow Handguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+14 Intellect"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 11s"
          },
          {
            "name": "Savage Bow of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+27 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 6s"
          },
          {
            "name": "Shadow Ring of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+25 Spirit",
              "+18 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "1g 42s"
          },
          {
            "name": "Blood-Forged Amice of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 84s"
          },
          {
            "name": "Corrupted Treads of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+29 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 53s"
          },
          {
            "name": "Shimmering Spaulders of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 77s"
          },
          {
            "name": "Ancient Amulet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+10 Stamina",
              "+10 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 34s"
          },
          {
            "name": "Venerable Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "3g 73s"
          },
          {
            "name": "Blood-Forged Amulet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+22 Intellect",
              "+7 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 0s"
          },
          {
            "name": "Corrupted Greatsword of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 4s"
          },
          {
            "name": "Ethereal Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Agility",
              "+8 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 65s"
          },
          {
            "name": "Savage Brooch of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 9s"
          },
          {
            "name": "Corrupted Handguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+26 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Void-Touched Spaulders of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+11 Intellect",
              "+6 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 41s"
          },
          {
            "name": "Corrupted Kilt of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+19 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 61s"
          },
          {
            "name": "Shadow Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
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
            "name": "Holy Cowl of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Corrupted Blade of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+25 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Ethereal Sabatons of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+28 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 35s"
          },
          {
            "name": "Shimmering Slippers of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+19 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "3g 74s"
          },
          {
            "name": "Ethereal Sash of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+23 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 69s"
          },
          {
            "name": "Savage Amice of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+16 Agility",
              "+10 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "10g 36s"
          },
          {
            "name": "Shadow Kilt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 36s"
          },
          {
            "name": "Holy Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 16s"
          },
          {
            "name": "Ancient Helm of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+22 Stamina",
              "+12 Spirit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "1g 71s"
          },
          {
            "name": "Holy Grips of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+20 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 21s"
          },
          {
            "name": "Corrupted Handguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+11 Strength",
              "+16 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 21s"
          },
          {
            "name": "Venerable Sabatons of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+14 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "9g 97s"
          },
          {
            "name": "Shimmering Bulwark of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Ethereal Amice of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+10 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 19s"
          },
          {
            "name": "Holy Talisman of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 82s"
          },
          {
            "name": "Venerable Gauntlets of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+19 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 54s"
          },
          {
            "name": "Ethereal Pendant of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+15 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 13s"
          },
          {
            "name": "Void-Touched Tunic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+27 Spirit",
              "+5 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 39s"
          },
          {
            "name": "Shimmering Sash of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 17s"
          },
          {
            "name": "Void-Touched Greatsword of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 10s"
          },
          {
            "name": "Shimmering Harness of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+22 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "7g 92s"
          },
          {
            "name": "Savage Axe of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Strength",
              "+5 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "9g 12s"
          },
          {
            "name": "Holy Gavel of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+25 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "8g 1s"
          },
          {
            "name": "Blood-Forged Gauntlets of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+28 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "3g 89s"
          },
          {
            "name": "Venerable Mask of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+26 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Venerable Girdle of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 39s"
          },
          {
            "name": "Blood-Forged Vest of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+20 Strength",
              "+6 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 55s"
          },
          {
            "name": "Shimmering Brooch of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 57s"
          },
          {
            "name": "Venerable Circlet of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+17 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "6g 97s"
          },
          {
            "name": "Ancient Leggings of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+14 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 3s"
          },
          {
            "name": "Blood-Forged Kilt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Venerable Wristguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+21 Stamina",
              "+7 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 96s"
          },
          {
            "name": "Shadow Belt of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+14 Strength"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Ethereal Sash of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+21 Strength",
              "+15 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "10g 22s"
          },
          {
            "name": "Savage Choker of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+13 Stamina",
              "+7 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 52s"
          },
          {
            "name": "Holy Dagger of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+29 Strength",
              "+19 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 34s"
          },
          {
            "name": "Blood-Forged Gavel of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+27 Stamina",
              "+8 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 78s"
          },
          {
            "name": "Savage Collar of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Agility",
              "+15 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 49s"
          },
          {
            "name": "Savage Breastplate of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+10 Agility",
              "+7 Strength"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "3g 78s"
          },
          {
            "name": "Blood-Forged Talisman of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 90s"
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
            "name": "Shimmering Signet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+26 Stamina",
              "+13 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 29s"
          },
          {
            "name": "Blood-Forged Greatsword of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+12 Strength",
              "+10 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 43s"
          },
          {
            "name": "Venerable Girdle of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+10 Stamina",
              "+10 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "8g 75s"
          },
          {
            "name": "Blood-Forged Sabatons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+21 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 42s"
          },
          {
            "name": "Corrupted Kilt of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 30s"
          },
          {
            "name": "Corrupted Gavel of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+13 Stamina",
              "+6 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Venerable Handguards of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 29s"
          },
          {
            "name": "Ancient Handguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+10 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 92s"
          },
          {
            "name": "Void-Touched Epaulets of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+25 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Blood-Forged Vambraces of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+5 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 15s"
          },
          {
            "name": "Corrupted Seal of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength",
              "+7 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 72s"
          },
          {
            "name": "Holy Choker of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+11 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Void-Touched Wristguards of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+26 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "1g 86s"
          },
          {
            "name": "Savage Footpads of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+11 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 89s"
          },
          {
            "name": "Shimmering Bow of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+16 Agility",
              "+7 Strength"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "8g 41s"
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
            "name": "Void-Touched Robes of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+20 Spirit",
              "+11 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "4g 19s"
          },
          {
            "name": "Ethereal Crown of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+10 Strength",
              "+8 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "1g 27s"
          },
          {
            "name": "Corrupted Greaves of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+17 Intellect"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Corrupted Vest of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+28 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 44s"
          },
          {
            "name": "Savage Sabatons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+10 Intellect",
              "+9 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 2s"
          },
          {
            "name": "Ancient Loop of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Stamina",
              "+19 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 89s"
          },
          {
            "name": "Savage Legguards of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+19 Strength",
              "+17 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Blood-Forged Amice of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+11 Spirit",
              "+7 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 66s"
          },
          {
            "name": "Savage Epaulets of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+20 Agility",
              "+17 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 18s"
          },
          {
            "name": "Void-Touched Circlet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+22 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 68s"
          },
          {
            "name": "Ethereal Boots of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+7 Intellect"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "7g 86s"
          },
          {
            "name": "Void-Touched Cuffs of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+13 Spirit",
              "+11 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 43s"
          },
          {
            "name": "Void-Touched Greaves of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+13 Spirit"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "8g 41s"
          },
          {
            "name": "Venerable Tunic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+17 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 74s"
          },
          {
            "name": "Shimmering Wristguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+26 Stamina",
              "+16 Intellect"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 48s"
          },
          {
            "name": "Holy Bracers of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+27 Strength",
              "+9 Agility"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 36s"
          },
          {
            "name": "Savage Gauntlets of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+11 Spirit",
              "+15 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 46s"
          },
          {
            "name": "Venerable Pendant of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+10 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "4g 25s"
          },
          {
            "name": "Blood-Forged Wristguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+19 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 17s"
          },
          {
            "name": "Shimmering Choker of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+14 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 24s"
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
            "name": "Venerable Aegis of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+10 Strength",
              "+7 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 59s"
          },
          {
            "name": "Ancient Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "7g 40s"
          },
          {
            "name": "Ethereal Wristguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 79s"
          },
          {
            "name": "Shimmering Talisman of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "2g 9s"
          },
          {
            "name": "Void-Touched Amice of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+14 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 86s"
          },
          {
            "name": "Holy Grips of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+16 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 0s"
          },
          {
            "name": "Void-Touched Cowl of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+10 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "1g 15s"
          },
          {
            "name": "Shadow Spaulders of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+10 Agility",
              "+8 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "4g 35s"
          },
          {
            "name": "Blood-Forged Treads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+19 Agility",
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 22s"
          },
          {
            "name": "Blood-Forged Loop of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength",
              "+9 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "7g 57s"
          },
          {
            "name": "Savage Signet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 32s"
          },
          {
            "name": "Void-Touched Talisman of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "1g 5s"
          },
          {
            "name": "Ancient Cuffs of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "+7 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "3g 39s"
          },
          {
            "name": "Savage Bow of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+29 Spirit",
              "+13 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "5g 4s"
          },
          {
            "name": "Shimmering Pendant of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+27 Stamina",
              "+7 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 3s"
          },
          {
            "name": "Shadow Gloves of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+14 Intellect",
              "+13 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Blood-Forged Loop of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+29 Stamina",
              "+8 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 67s"
          },
          {
            "name": "Holy Gavel of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 39s"
          },
          {
            "name": "Void-Touched Gloves of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+6 Strength"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 57s"
          },
          {
            "name": "Savage Dagger of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+23 Strength",
              "+19 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "1g 26s"
          },
          {
            "name": "Ancient Sabatons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "2g 70s"
          },
          {
            "name": "Venerable Greatsword of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 53s"
          },
          {
            "name": "Shimmering Robes of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+19 Intellect",
              "+15 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 80s"
          },
          {
            "name": "Venerable Talisman of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Shimmering Bow of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+27 Strength",
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 36s"
          },
          {
            "name": "Corrupted Legguards of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+12 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Ancient Axe of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 33s"
          },
          {
            "name": "Ancient Gloves of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 49s"
          },
          {
            "name": "Venerable Grips of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+21 Agility",
              "+6 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "7g 54s"
          },
          {
            "name": "Venerable Waistguard of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "10g 35s"
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
            "name": "Void-Touched Tunic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+29 Strength",
              "+7 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 37s"
          },
          {
            "name": "Corrupted Axe of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+27 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 11s"
          },
          {
            "name": "Ancient Cord of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 10s"
          },
          {
            "name": "Holy Tunic of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+14 Spirit",
              "+18 Intellect"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "6g 66s"
          },
          {
            "name": "Holy Relic of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "4g 1s"
          },
          {
            "name": "Shimmering Vest of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+19 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Blood-Forged Gloves of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+10 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Ancient Treads of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+22 Spirit",
              "+19 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 48s"
          },
          {
            "name": "Venerable Collar of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+27 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 92s"
          },
          {
            "name": "Corrupted Robes of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+14 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 59s"
          },
          {
            "name": "Shimmering Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "+16 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 41s"
          },
          {
            "name": "Corrupted Wristguards of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 80s"
          },
          {
            "name": "Shimmering Pauldrons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+26 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 17s"
          },
          {
            "name": "Shimmering Gloves of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+25 Stamina",
              "+13 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "7g 37s"
          },
          {
            "name": "Venerable Legguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+16 Spirit",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 51s"
          },
          {
            "name": "Corrupted Amulet of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+22 Strength",
              "+13 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 31s"
          },
          {
            "name": "Shadow Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 72s"
          },
          {
            "name": "Shadow Buckler of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 11s"
          },
          {
            "name": "Shimmering Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+25 Stamina",
              "+15 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 64s"
          },
          {
            "name": "Venerable Bow of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+14 Strength",
              "+17 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 1s"
          },
          {
            "name": "Ancient Cowl of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+19 Intellect",
              "+7 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 97s"
          },
          {
            "name": "Ancient Bindings of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 14s"
          },
          {
            "name": "Ethereal Medallion of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "10g 44s"
          },
          {
            "name": "Corrupted Handguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 62s"
          },
          {
            "name": "Blood-Forged Girdle of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+27 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 41s"
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
            "name": "Corrupted Mitts of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+10 Spirit",
              "+14 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "9g 67s"
          },
          {
            "name": "Venerable Gauntlets of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+17 Agility",
              "+8 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 67s"
          },
          {
            "name": "Void-Touched Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+10 Intellect",
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 16s"
          },
          {
            "name": "Shadow Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+29 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 33s"
          },
          {
            "name": "Void-Touched Handguards of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+13 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 87s"
          },
          {
            "name": "Shadow Band of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 82s"
          },
          {
            "name": "Blood-Forged Brooch of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 5s"
          },
          {
            "name": "Holy Belt of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+17 Intellect",
              "+19 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "7g 76s"
          },
          {
            "name": "Savage Gauntlets of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+11 Agility",
              "+18 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "8g 47s"
          },
          {
            "name": "Corrupted Girdle of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+10 Intellect",
              "+13 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 27s"
          },
          {
            "name": "Shimmering Staff of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+23 Strength",
              "+14 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 96s"
          },
          {
            "name": "Corrupted Charm of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "6g 17s"
          },
          {
            "name": "Ancient Gavel of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Spirit",
              "+15 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 19s"
          },
          {
            "name": "Ethereal Necklace of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+21 Stamina",
              "+17 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "1g 11s"
          },
          {
            "name": "Ancient Seal of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+25 Strength",
              "+15 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 83s"
          },
          {
            "name": "Corrupted Relic of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 89s"
          },
          {
            "name": "Shimmering Bow of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Shimmering Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 32s"
          },
          {
            "name": "Holy Shield of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+26 Agility",
              "+6 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 61s"
          },
          {
            "name": "Ethereal Aegis of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 80s"
          },
          {
            "name": "Shimmering Spaulders of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+14 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 64s"
          },
          {
            "name": "Shadow Choker of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+28 Intellect",
              "+5 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Ancient Robes of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+14 Strength",
              "+9 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 45s"
          },
          {
            "name": "Ancient Breastplate of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+19 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 80s"
          },
          {
            "name": "Void-Touched Spaulders of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+5 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 49s"
          },
          {
            "name": "Ethereal Belt of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+22 Agility",
              "+16 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 11s"
          },
          {
            "name": "Ethereal Mitts of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 26s"
          },
          {
            "name": "Blood-Forged Breastplate of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+14 Stamina",
              "+7 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 69s"
          },
          {
            "name": "Holy Necklace of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "10g 8s"
          },
          {
            "name": "Ethereal Gloves of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+17 Spirit",
              "+14 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 63s"
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
            "name": "Shadow Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+5 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Savage Boots of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+17 Spirit",
              "+5 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 22s"
          },
          {
            "name": "Ethereal Vambraces of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+8 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "7g 16s"
          },
          {
            "name": "Shimmering Signet of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+26 Intellect",
              "+9 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Ancient Relic of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 1s"
          },
          {
            "name": "Void-Touched Cuffs of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Shadow Charm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 3s"
          },
          {
            "name": "Corrupted Staff of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+11 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 88s"
          },
          {
            "name": "Ancient Helm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Venerable Band of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+29 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 39s"
          },
          {
            "name": "Shadow Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+27 Stamina",
              "+16 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 51s"
          },
          {
            "name": "Shadow Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+20 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 86s"
          },
          {
            "name": "Shimmering Tunic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+14 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 56s"
          },
          {
            "name": "Ancient Bracers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+21 Stamina",
              "+17 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "7g 84s"
          },
          {
            "name": "Corrupted Tunic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+12 Spirit",
              "+14 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 13s"
          },
          {
            "name": "Blood-Forged Epaulets of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+12 Intellect",
              "+18 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 51s"
          },
          {
            "name": "Void-Touched Relic of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 38s"
          },
          {
            "name": "Corrupted Aegis of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 50s"
          },
          {
            "name": "Blood-Forged Loop of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+28 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 6s"
          },
          {
            "name": "Shimmering Shield of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+23 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 19s"
          },
          {
            "name": "Ethereal Amice of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "2g 85s"
          },
          {
            "name": "Corrupted Waistguard of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+11 Stamina",
              "+8 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 29s"
          },
          {
            "name": "Shimmering Greatsword of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+10 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 38s"
          },
          {
            "name": "Void-Touched Sabatons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+13 Spirit",
              "+7 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 37s"
          },
          {
            "name": "Blood-Forged Band of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 87s"
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
            "name": "Venerable Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+26 Agility",
              "+16 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 17s"
          },
          {
            "name": "Void-Touched Helm of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 71s"
          },
          {
            "name": "Ethereal Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+14 Stamina",
              "+5 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 75s"
          },
          {
            "name": "Corrupted Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+10 Spirit",
              "+9 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "7g 1s"
          },
          {
            "name": "Holy Ring of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 51s"
          },
          {
            "name": "Ethereal Waistguard of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "7g 1s"
          },
          {
            "name": "Ethereal Leggings of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+24 Strength",
              "+17 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "8g 77s"
          },
          {
            "name": "Savage Harness of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+14 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 83s"
          },
          {
            "name": "Holy Epaulets of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+19 Spirit",
              "+19 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "2g 94s"
          },
          {
            "name": "Holy Talisman of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "6g 43s"
          },
          {
            "name": "Holy Axe of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+12 Agility",
              "+11 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 98s"
          },
          {
            "name": "Venerable Choker of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+22 Spirit",
              "+14 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 1s"
          },
          {
            "name": "Holy Medallion of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 74s"
          },
          {
            "name": "Savage Belt of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+21 Agility",
              "+15 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "10g 80s"
          },
          {
            "name": "Corrupted Treads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "+13 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "4g 51s"
          },
          {
            "name": "Shadow Sabatons of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+14 Strength",
              "+11 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "10g 51s"
          },
          {
            "name": "Shadow Harness of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+29 Agility",
              "+17 Strength"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Blood-Forged Gloves of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+10 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Void-Touched Vest of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+14 Spirit",
              "+6 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 12s"
          },
          {
            "name": "Shadow Sabatons of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+28 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 24s"
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
            "name": "Venerable Amice of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 42s"
          },
          {
            "name": "Venerable Dagger of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+10 Strength",
              "+15 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "7g 30s"
          },
          {
            "name": "Void-Touched Kilt of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+11 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 8s"
          },
          {
            "name": "Blood-Forged Pendant of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 26s"
          },
          {
            "name": "Holy Relic of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "7g 40s"
          },
          {
            "name": "Venerable Vambraces of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+14 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Ethereal Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+20 Stamina",
              "+14 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 19s"
          },
          {
            "name": "Corrupted Tunic of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+20 Intellect"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 94s"
          },
          {
            "name": "Venerable Signet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Stamina",
              "+5 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 96s"
          },
          {
            "name": "Ethereal Bindings of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+14 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 4s"
          },
          {
            "name": "Ancient Pauldrons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+25 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 15s"
          },
          {
            "name": "Ethereal Waistguard of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+23 Stamina",
              "+11 Agility"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 65s"
          },
          {
            "name": "Ancient Band of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 74s"
          },
          {
            "name": "Shimmering Legguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+19 Stamina",
              "+17 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "4g 32s"
          },
          {
            "name": "Ethereal Circlet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+23 Intellect",
              "+15 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "9g 37s"
          },
          {
            "name": "Holy Sash of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+28 Spirit",
              "+15 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 44s"
          },
          {
            "name": "Blood-Forged Bulwark of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+10 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 21s"
          },
          {
            "name": "Blood-Forged Breastplate of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+12 Spirit",
              "+13 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 9s"
          },
          {
            "name": "Void-Touched Seal of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+22 Spirit",
              "+8 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "6g 30s"
          },
          {
            "name": "Void-Touched Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+25 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "10g 81s"
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
            "name": "Holy Handguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+19 Strength",
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 33s"
          },
          {
            "name": "Corrupted Dagger of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+20 Agility",
              "+6 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Blood-Forged Helm of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+10 Strength",
              "+5 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 47s"
          },
          {
            "name": "Corrupted Bracers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+26 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 3s"
          },
          {
            "name": "Savage Choker of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+22 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 40s"
          },
          {
            "name": "Shimmering Staff of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+24 Spirit",
              "+7 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 66s"
          },
          {
            "name": "Ethereal Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+29 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 26s"
          },
          {
            "name": "Venerable Cuffs of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+29 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 9s"
          },
          {
            "name": "Savage Axe of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+22 Strength",
              "+19 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 68s"
          },
          {
            "name": "Corrupted Wristguards of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+29 Spirit"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 16s"
          },
          {
            "name": "Blood-Forged Axe of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Savage Footpads of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "+13 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "6g 80s"
          },
          {
            "name": "Void-Touched Sash of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+23 Stamina",
              "+14 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 82s"
          },
          {
            "name": "Venerable Brooch of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "3g 32s"
          },
          {
            "name": "Savage Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+16 Strength",
              "+15 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Ethereal Gloves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+23 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Ethereal Legguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+25 Intellect",
              "+10 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Corrupted Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+20 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 87s"
          },
          {
            "name": "Void-Touched Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+11 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 38s"
          },
          {
            "name": "Shimmering Pants of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+13 Stamina",
              "+19 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 59s"
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
        "name": "Savage Collar of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+20 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 96s"
      },
      {
        "name": "Blood-Forged Legguards of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+23 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 33s"
      },
      {
        "name": "Holy Vest of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+26 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 84s"
      },
      {
        "name": "Blood-Forged Boots of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+13 Agility",
          "+15 Strength"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "1g 71s"
      },
      {
        "name": "Blood-Forged Bracers of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+14 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 82s"
      },
      {
        "name": "Void-Touched Amulet of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+16 Agility",
          "+18 Strength"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "2g 27s"
      },
      {
        "name": "Ancient Treads of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+25 Intellect",
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 51s"
      },
      {
        "name": "Void-Touched Brooch of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "1g 84s"
      },
      {
        "name": "Savage Handguards of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "2g 60s"
      },
      {
        "name": "Corrupted Pendant of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Strength",
          "+15 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 45s"
      },
      {
        "name": "Ancient Kilt of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+11 Stamina",
          "+14 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 7s"
      },
      {
        "name": "Ethereal Bow of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+29 Spirit",
          "+9 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 47s"
      },
      {
        "name": "Ancient Dagger of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+26 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 12s"
      },
      {
        "name": "Holy Circlet of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+17 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 19s"
      },
      {
        "name": "Void-Touched Boots of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 98s"
      },
      {
        "name": "Ethereal Handguards of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+21 Intellect",
          "+10 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 23s"
      },
      {
        "name": "Shadow Belt of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+15 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 19s"
      },
      {
        "name": "Venerable Epaulets of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+23 Stamina",
          "+11 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "3g 52s"
      },
      {
        "name": "Ancient Ring of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+29 Spirit"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 86s"
      },
      {
        "name": "Ancient Slippers of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+13 Spirit",
          "+5 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 66s"
      },
      {
        "name": "Venerable Band of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Stamina",
          "+18 Spirit"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 27s"
      },
      {
        "name": "Blood-Forged Gauntlets of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+15 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 60s"
      },
      {
        "name": "Savage Bracers of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+24 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "8g 48s"
      },
      {
        "name": "Shadow Gloves of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+22 Agility",
          "+8 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 2s"
      },
      {
        "name": "Holy Pauldrons of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+23 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 52s"
      },
      {
        "name": "Void-Touched Amice of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+14 Spirit",
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 20s"
      },
      {
        "name": "Void-Touched Footpads of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+11 Stamina",
          "+17 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "3g 57s"
      },
      {
        "name": "Shadow Dagger of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+13 Intellect",
          "+17 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "10g 87s"
      },
      {
        "name": "Blood-Forged Loop of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Agility",
          "+6 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 97s"
      },
      {
        "name": "Shadow Seal of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Agility",
          "+5 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 37s"
      },
      {
        "name": "Ancient Medallion of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 39s"
      },
      {
        "name": "Void-Touched Greaves of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+29 Stamina",
          "+11 Strength"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "7g 33s"
      },
      {
        "name": "Ancient Belt of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+21 Intellect",
          "+13 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 63s"
      },
      {
        "name": "Ethereal Belt of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 89s"
      },
      {
        "name": "Void-Touched Pants of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+23 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 37s"
      },
      {
        "name": "Void-Touched Gauntlets of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+16 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "7g 51s"
      },
      {
        "name": "Shadow Seal of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+15 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 32s"
      },
      {
        "name": "Void-Touched Girdle of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+19 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 76s"
      },
      {
        "name": "Holy Bulwark of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+19 Agility",
          "+8 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 58s"
      },
      {
        "name": "Savage Charm of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "5g 83s"
      },
      {
        "name": "Ethereal Medallion of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 12s"
      },
      {
        "name": "Ancient Ring of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+19 Stamina",
          "+7 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 48s"
      },
      {
        "name": "Shadow Greaves of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+19 Stamina",
          "+13 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "3g 25s"
      },
      {
        "name": "Ancient Staff of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+16 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 81s"
      },
      {
        "name": "Corrupted Seal of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Strength",
          "+16 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "1g 7s"
      },
      {
        "name": "Blood-Forged Robes of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+13 Agility",
          "+10 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 5s"
      },
      {
        "name": "Ethereal Handguards of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+25 Intellect",
          "+13 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 9s"
      },
      {
        "name": "Shimmering Legguards of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+26 Spirit",
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 70s"
      },
      {
        "name": "Corrupted Slippers of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+12 Intellect",
          "+18 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "8g 22s"
      },
      {
        "name": "Venerable Brooch of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 22s"
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
        "name": "Void-Touched Charm of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 47s"
      },
      {
        "name": "Savage Gavel of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+22 Stamina",
          "+19 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 49s"
      },
      {
        "name": "Blood-Forged Sash of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+21 Strength",
          "+16 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 59s"
      },
      {
        "name": "Blood-Forged Staff of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+16 Agility",
          "+11 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 15s"
      },
      {
        "name": "Corrupted Buckler of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+12 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "10g 25s"
      },
      {
        "name": "Ethereal Loop of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+11 Agility",
          "+19 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 84s"
      },
      {
        "name": "Blood-Forged Axe of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+17 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 1s"
      },
      {
        "name": "Savage Brooch of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 92s"
      },
      {
        "name": "Holy Staff of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+15 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 49s"
      },
      {
        "name": "Shimmering Signet of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "5g 61s"
      },
      {
        "name": "Shadow Choker of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Intellect",
          "+19 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 18s"
      },
      {
        "name": "Void-Touched Breastplate of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+11 Stamina",
          "+9 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 52s"
      },
      {
        "name": "Ancient Mask of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+19 Spirit",
          "+10 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 44s"
      },
      {
        "name": "Shadow Wristguards of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+10 Stamina",
          "+10 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 22s"
      },
      {
        "name": "Shadow Pants of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+14 Stamina",
          "+19 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 21s"
      },
      {
        "name": "Ethereal Harness of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+14 Stamina",
          "+16 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 70s"
      },
      {
        "name": "Shimmering Medallion of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "5g 92s"
      },
      {
        "name": "Ancient Gavel of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 57s"
      },
      {
        "name": "Ethereal Blade of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+13 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 63s"
      },
      {
        "name": "Ethereal Choker of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 91s"
      },
      {
        "name": "Holy Seal of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+15 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 92s"
      },
      {
        "name": "Ethereal Blade of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+22 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 13s"
      },
      {
        "name": "Shadow Bindings of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+19 Spirit",
          "+9 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 66s"
      },
      {
        "name": "Holy Breastplate of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+13 Intellect",
          "+10 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "4g 83s"
      },
      {
        "name": "Shadow Vambraces of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+13 Spirit",
          "+10 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 4s"
      },
      {
        "name": "Savage Belt of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+28 Spirit",
          "+13 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 69s"
      },
      {
        "name": "Venerable Ring of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Strength",
          "+9 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 0s"
      },
      {
        "name": "Ancient Treads of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+27 Stamina",
          "+14 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 66s"
      },
      {
        "name": "Void-Touched Girdle of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "+5 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 12s"
      },
      {
        "name": "Savage Pendant of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Intellect",
          "+14 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 44s"
      },
      {
        "name": "Savage Greatsword of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+23 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 25s"
      },
      {
        "name": "Ethereal Mask of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 91s"
      },
      {
        "name": "Savage Seal of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Agility",
          "+7 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 98s"
      },
      {
        "name": "Holy Axe of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+23 Stamina",
          "+8 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 51s"
      },
      {
        "name": "Shadow Bow of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+22 Strength",
          "+18 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 97s"
      },
      {
        "name": "Savage Vest of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+15 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "1g 1s"
      },
      {
        "name": "Savage Gavel of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+17 Intellect"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 75s"
      },
      {
        "name": "Savage Collar of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Stamina",
          "+14 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 44s"
      },
      {
        "name": "Ethereal Handguards of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "10g 96s"
      },
      {
        "name": "Void-Touched Gavel of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+16 Spirit",
          "+16 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 49s"
      },
      {
        "name": "Corrupted Helm of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 70s"
      },
      {
        "name": "Holy Slippers of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+29 Agility",
          "+5 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 1s"
      },
      {
        "name": "Corrupted Handguards of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "1g 31s"
      },
      {
        "name": "Blood-Forged Staff of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+22 Stamina",
          "+19 Spirit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 79s"
      },
      {
        "name": "Shimmering Amice of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+23 Spirit",
          "+10 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 92s"
      },
      {
        "name": "Ethereal Pendant of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+11 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "6g 94s"
      },
      {
        "name": "Ethereal Epaulets of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 30s"
      },
      {
        "name": "Holy Talisman of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "8g 54s"
      },
      {
        "name": "Shimmering Greaves of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+10 Agility"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "9g 42s"
      },
      {
        "name": "Venerable Gavel of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+26 Agility",
          "+17 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 12s"
      },
      {
        "name": "Venerable Band of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+13 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 72s"
      },
      {
        "name": "Venerable Grips of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+21 Stamina",
          "+13 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 37s"
      },
      {
        "name": "Venerable Buckler of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+22 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "5g 62s"
      },
      {
        "name": "Holy Kilt of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+26 Stamina",
          "+9 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "5g 80s"
      },
      {
        "name": "Shadow Dagger of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "6g 53s"
      },
      {
        "name": "Holy Bulwark of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 41s"
      },
      {
        "name": "Savage Sash of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 82s"
      },
      {
        "name": "Blood-Forged Gauntlets of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "8g 80s"
      },
      {
        "name": "Venerable Legguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+20 Stamina",
          "+8 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 70s"
      },
      {
        "name": "Void-Touched Crown of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+20 Spirit",
          "+11 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 82s"
      },
      {
        "name": "Corrupted Collar of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+11 Strength"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "1g 64s"
      },
      {
        "name": "Savage Spaulders of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+10 Stamina",
          "+7 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 53s"
      },
      {
        "name": "Shadow Talisman of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "2g 58s"
      },
      {
        "name": "Blood-Forged Treads of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+15 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 98s"
      },
      {
        "name": "Holy Leggings of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+11 Spirit"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 86s"
      },
      {
        "name": "Shimmering Pendant of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Stamina",
          "+16 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 9s"
      },
      {
        "name": "Ancient Medallion of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "3g 37s"
      },
      {
        "name": "Holy Wristguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+10 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "2g 84s"
      },
      {
        "name": "Blood-Forged Helm of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+13 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "6g 17s"
      },
      {
        "name": "Venerable Staff of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+20 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "9g 56s"
      },
      {
        "name": "Shimmering Pauldrons of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+17 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 49s"
      },
      {
        "name": "Ethereal Band of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 38s"
      },
      {
        "name": "Ancient Grips of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "+7 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 88s"
      },
      {
        "name": "Venerable Axe of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+19 Spirit",
          "+15 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "7g 74s"
      },
      {
        "name": "Shimmering Gloves of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+6 Spirit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "7g 77s"
      },
      {
        "name": "Shimmering Cuffs of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+13 Stamina",
          "+13 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 77s"
      },
      {
        "name": "Shadow Dagger of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+21 Intellect",
          "+8 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 35s"
      },
      {
        "name": "Venerable Staff of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+23 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "6g 1s"
      },
      {
        "name": "Blood-Forged Vest of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+23 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "1g 7s"
      },
      {
        "name": "Holy Pauldrons of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+29 Stamina",
          "+8 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "10g 35s"
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
        "name": "Savage Gavel of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+17 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 74s"
      },
      {
        "name": "Ancient Amice of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+17 Spirit",
          "+18 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 2s"
      },
      {
        "name": "Shadow Gavel of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+25 Agility",
          "+14 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "9g 62s"
      },
      {
        "name": "Shadow Talisman of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 48s"
      },
      {
        "name": "Savage Staff of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+15 Intellect",
          "+16 Spirit"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "4g 76s"
      },
      {
        "name": "Blood-Forged Kilt of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+25 Spirit",
          "+12 Intellect"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "3g 90s"
      },
      {
        "name": "Holy Staff of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+15 Spirit",
          "+5 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 87s"
      },
      {
        "name": "Holy Waistguard of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+20 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 96s"
      },
      {
        "name": "Shimmering Pants of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "+9 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "7g 94s"
      },
      {
        "name": "Shimmering Vambraces of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+12 Stamina",
          "+8 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 52s"
      },
      {
        "name": "Shimmering Boots of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "10g 28s"
      },
      {
        "name": "Blood-Forged Gauntlets of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+16 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 62s"
      },
      {
        "name": "Ancient Dagger of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+21 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 64s"
      },
      {
        "name": "Venerable Harness of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+11 Strength",
          "+15 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 25s"
      },
      {
        "name": "Holy Bow of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+16 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 40s"
      },
      {
        "name": "Venerable Spaulders of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+29 Spirit",
          "+14 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 1s"
      },
      {
        "name": "Shadow Seal of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 15s"
      },
      {
        "name": "Venerable Signet of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Stamina",
          "+15 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "2g 94s"
      },
      {
        "name": "Corrupted Vest of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+20 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "9g 19s"
      },
      {
        "name": "Savage Blade of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+28 Stamina",
          "+15 Spirit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "4g 40s"
      },
      {
        "name": "Holy Ring of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Spirit",
          "+6 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "2g 4s"
      },
      {
        "name": "Corrupted Defender of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+13 Strength",
          "+16 Agility"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "3g 18s"
      },
      {
        "name": "Ancient Cord of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+21 Strength"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 83s"
      },
      {
        "name": "Ancient Wristguards of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+22 Agility",
          "+8 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 23s"
      },
      {
        "name": "Savage Bracers of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+15 Agility",
          "+15 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 41s"
      },
      {
        "name": "Corrupted Blade of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+16 Intellect",
          "+5 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "5g 36s"
      },
      {
        "name": "Shadow Loop of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+26 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "1g 65s"
      },
      {
        "name": "Venerable Staff of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "8g 79s"
      },
      {
        "name": "Corrupted Bow of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+15 Strength",
          "+9 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "1g 70s"
      },
      {
        "name": "Void-Touched Circlet of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+15 Stamina",
          "+14 Agility"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 0s"
      },
      {
        "name": "Void-Touched Aegis of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+25 Agility",
          "+10 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 89s"
      },
      {
        "name": "Savage Pendant of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+11 Strength",
          "+14 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 14s"
      },
      {
        "name": "Shimmering Cord of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+20 Stamina",
          "+14 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 46s"
      },
      {
        "name": "Shimmering Breastplate of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 94s"
      },
      {
        "name": "Corrupted Bow of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 62s"
      },
      {
        "name": "Savage Footpads of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+26 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 51s"
      },
      {
        "name": "Venerable Staff of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+20 Stamina",
          "+15 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 24s"
      },
      {
        "name": "Blood-Forged Ring of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Stamina",
          "+11 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 27s"
      },
      {
        "name": "Shimmering Choker of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Intellect",
          "+14 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 11s"
      },
      {
        "name": "Blood-Forged Charm of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 38s"
      },
      {
        "name": "Savage Greaves of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 36s"
      },
      {
        "name": "Corrupted Pauldrons of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+13 Spirit",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 64s"
      },
      {
        "name": "Shimmering Slippers of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+18 Agility",
          "+14 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "9g 24s"
      },
      {
        "name": "Venerable Band of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Stamina",
          "+12 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 58s"
      },
      {
        "name": "Blood-Forged Pauldrons of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+12 Intellect",
          "+7 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 51s"
      },
      {
        "name": "Savage Greaves of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+16 Spirit",
          "+6 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 96s"
      },
      {
        "name": "Savage Talisman of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "4g 0s"
      },
      {
        "name": "Corrupted Choker of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 43s"
      },
      {
        "name": "Holy Loop of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Stamina",
          "+14 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 46s"
      },
      {
        "name": "Venerable Staff of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+11 Stamina",
          "+19 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "5g 45s"
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
        "name": "Corrupted Footpads of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+10 Agility",
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 7s"
      },
      {
        "name": "Blood-Forged Amulet of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Spirit",
          "+14 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "2g 39s"
      },
      {
        "name": "Corrupted Band of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Stamina",
          "+19 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 0s"
      },
      {
        "name": "Shadow Axe of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+12 Stamina",
          "+5 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 31s"
      },
      {
        "name": "Venerable Bow of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+12 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 86s"
      },
      {
        "name": "Ethereal Bow of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+29 Stamina",
          "+17 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 68s"
      },
      {
        "name": "Shadow Sabatons of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+23 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 19s"
      },
      {
        "name": "Corrupted Brooch of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 12s"
      },
      {
        "name": "Savage Bulwark of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+29 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 60s"
      },
      {
        "name": "Holy Circlet of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+11 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "10g 18s"
      },
      {
        "name": "Corrupted Epaulets of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+24 Agility",
          "+19 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 51s"
      },
      {
        "name": "Shadow Choker of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Stamina",
          "+16 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 65s"
      },
      {
        "name": "Shadow Footpads of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 44s"
      },
      {
        "name": "Savage Bow of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+26 Stamina",
          "+6 Strength"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 20s"
      },
      {
        "name": "Corrupted Crown of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+29 Intellect",
          "+7 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 76s"
      },
      {
        "name": "Void-Touched Grips of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 29s"
      },
      {
        "name": "Shadow Pants of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+25 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 33s"
      },
      {
        "name": "Savage Helm of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+10 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "8g 17s"
      },
      {
        "name": "Ancient Collar of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+16 Stamina",
          "+14 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 29s"
      },
      {
        "name": "Venerable Axe of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+11 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "6g 17s"
      },
      {
        "name": "Shadow Pauldrons of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+21 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 19s"
      },
      {
        "name": "Void-Touched Charm of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 33s"
      },
      {
        "name": "Venerable Belt of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+26 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 17s"
      },
      {
        "name": "Corrupted Collar of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+16 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "6g 21s"
      },
      {
        "name": "Blood-Forged Gloves of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+19 Stamina",
          "+13 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 81s"
      },
      {
        "name": "Venerable Relic of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "3g 94s"
      },
      {
        "name": "Ancient Loop of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+10 Intellect",
          "+5 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "9g 60s"
      },
      {
        "name": "Shadow Pants of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+11 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 0s"
      },
      {
        "name": "Blood-Forged Talisman of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "8g 0s"
      },
      {
        "name": "Savage Pants of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+15 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 82s"
      },
      {
        "name": "Ethereal Greatsword of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+22 Agility",
          "+5 Strength"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 97s"
      },
      {
        "name": "Void-Touched Amice of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "+7 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "4g 97s"
      },
      {
        "name": "Void-Touched Necklace of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+29 Spirit"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "9g 83s"
      },
      {
        "name": "Ancient Belt of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+16 Spirit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "4g 49s"
      },
      {
        "name": "Shadow Bulwark of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Strength",
          "+6 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "2g 77s"
      },
      {
        "name": "Shimmering Footpads of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+13 Agility",
          "+12 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 34s"
      },
      {
        "name": "Holy Staff of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+12 Spirit",
          "+6 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "9g 21s"
      },
      {
        "name": "Blood-Forged Blade of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+19 Stamina",
          "+7 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 68s"
      },
      {
        "name": "Shadow Slippers of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+11 Stamina",
          "+19 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "6g 32s"
      },
      {
        "name": "Shadow Tunic of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+29 Spirit",
          "+15 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 10s"
      },
      {
        "name": "Shadow Gauntlets of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+24 Strength",
          "+15 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 39s"
      },
      {
        "name": "Void-Touched Footpads of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+13 Agility",
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 30s"
      },
      {
        "name": "Corrupted Footpads of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+19 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 41s"
      },
      {
        "name": "Blood-Forged Gauntlets of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+26 Stamina",
          "+14 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 61s"
      },
      {
        "name": "Blood-Forged Collar of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+13 Intellect",
          "+10 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 45s"
      },
      {
        "name": "Holy Leggings of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+14 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "8g 77s"
      },
      {
        "name": "Savage Amulet of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+20 Stamina",
          "+14 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "5g 86s"
      },
      {
        "name": "Corrupted Necklace of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+10 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "2g 54s"
      },
      {
        "name": "Shadow Legguards of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+10 Stamina",
          "+10 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 73s"
      },
      {
        "name": "Ancient Choker of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Strength",
          "+13 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 82s"
      },
      {
        "name": "Corrupted Ring of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 95s"
      },
      {
        "name": "Blood-Forged Slippers of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+15 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 94s"
      },
      {
        "name": "Corrupted Mantle of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+21 Strength",
          "+6 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "2g 63s"
      },
      {
        "name": "Blood-Forged Pendant of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina",
          "+12 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 90s"
      },
      {
        "name": "Ancient Wristguards of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+20 Strength",
          "+18 Agility"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "6g 53s"
      },
      {
        "name": "Savage Brooch of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 29s"
      },
      {
        "name": "Corrupted Vambraces of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+19 Stamina",
          "+15 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "2g 55s"
      },
      {
        "name": "Venerable Treads of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+19 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 52s"
      },
      {
        "name": "Shimmering Band of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Strength",
          "+16 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 56s"
      },
      {
        "name": "Blood-Forged Blade of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+13 Stamina",
          "+5 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "3g 53s"
      },
      {
        "name": "Blood-Forged Staff of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+24 Agility",
          "+15 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "6g 60s"
      },
      {
        "name": "Ethereal Helm of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+12 Stamina",
          "+7 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 98s"
      },
      {
        "name": "Shimmering Robes of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+28 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 8s"
      },
      {
        "name": "Shimmering Charm of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "3g 28s"
      },
      {
        "name": "Ethereal Seal of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Intellect",
          "+5 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "7g 55s"
      },
      {
        "name": "Venerable Ring of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+10 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 23s"
      },
      {
        "name": "Ancient Blade of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+21 Agility",
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 34s"
      },
      {
        "name": "Corrupted Band of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Agility",
          "+15 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "9g 67s"
      },
      {
        "name": "Blood-Forged Gavel of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+10 Agility",
          "+13 Strength"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "10g 7s"
      },
      {
        "name": "Blood-Forged Gloves of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+13 Intellect",
          "+19 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 87s"
      },
      {
        "name": "Savage Helm of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+28 Spirit",
          "+15 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 32s"
      },
      {
        "name": "Shimmering Relic of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 78s"
      },
      {
        "name": "Ancient Cowl of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+22 Spirit",
          "+15 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 73s"
      },
      {
        "name": "Shadow Robes of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+15 Strength",
          "+9 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 78s"
      },
      {
        "name": "Ancient Crown of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+11 Intellect",
          "+16 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "8g 13s"
      },
      {
        "name": "Ancient Seal of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+10 Stamina",
          "+11 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 24s"
      },
      {
        "name": "Holy Bindings of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+11 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 15s"
      },
      {
        "name": "Venerable Seal of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+14 Stamina",
          "+6 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 18s"
      },
      {
        "name": "Ethereal Staff of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+23 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 59s"
      },
      {
        "name": "Ethereal Band of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Intellect",
          "+19 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 72s"
      },
      {
        "name": "Corrupted Spaulders of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+23 Stamina",
          "+11 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 69s"
      },
      {
        "name": "Holy Cowl of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+13 Agility",
          "+14 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 96s"
      },
      {
        "name": "Blood-Forged Wristguards of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+10 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 88s"
      },
      {
        "name": "Ethereal Epaulets of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+10 Stamina",
          "+12 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 36s"
      },
      {
        "name": "Ethereal Seal of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Agility",
          "+16 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 9s"
      },
      {
        "name": "Shimmering Talisman of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 34s"
      },
      {
        "name": "Savage Gloves of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+21 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 35s"
      },
      {
        "name": "Void-Touched Mask of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+15 Stamina",
          "+5 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 28s"
      },
      {
        "name": "Void-Touched Staff of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+28 Spirit",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 65s"
      },
      {
        "name": "Ethereal Relic of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 47s"
      },
      {
        "name": "Venerable Sash of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 27s"
      },
      {
        "name": "Corrupted Harness of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+12 Stamina",
          "+16 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 64s"
      },
      {
        "name": "Ancient Seal of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+17 Stamina",
          "+19 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 62s"
      },
      {
        "name": "Venerable Vambraces of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Spirit",
          "+18 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "1g 20s"
      },
      {
        "name": "Venerable Girdle of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 75s"
      },
      {
        "name": "Void-Touched Staff of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Stamina",
          "+11 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "7g 76s"
      },
      {
        "name": "Shadow Amice of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+14 Intellect",
          "+18 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 29s"
      },
      {
        "name": "Corrupted Dagger of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+19 Stamina",
          "+12 Agility"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "6g 71s"
      },
      {
        "name": "Blood-Forged Ring of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Strength"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 39s"
      },
      {
        "name": "Ethereal Cord of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+12 Agility",
          "+8 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 57s"
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
        "name": "Ethereal Mantle of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+8 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 95s"
      },
      {
        "name": "Void-Touched Epaulets of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+14 Intellect",
          "+11 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 64s"
      },
      {
        "name": "Void-Touched Pauldrons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+15 Intellect",
          "+5 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 52s"
      },
      {
        "name": "Ancient Bracers of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+13 Agility",
          "+8 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 65s"
      },
      {
        "name": "Venerable Loop of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+13 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 6s"
      },
      {
        "name": "Ancient Greaves of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+12 Stamina",
          "+15 Agility"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "3g 96s"
      },
      {
        "name": "Shimmering Amulet of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Intellect",
          "+7 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 32s"
      },
      {
        "name": "Corrupted Aegis of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 5s"
      },
      {
        "name": "Corrupted Pendant of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 2s"
      },
      {
        "name": "Holy Footpads of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+22 Strength",
          "+5 Agility"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 33s"
      },
      {
        "name": "Holy Mantle of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+20 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "4g 36s"
      },
      {
        "name": "Holy Spaulders of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+22 Stamina",
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 51s"
      },
      {
        "name": "Void-Touched Pauldrons of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+10 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 22s"
      },
      {
        "name": "Ethereal Greatsword of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+23 Agility",
          "+8 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "10g 53s"
      },
      {
        "name": "Holy Epaulets of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+16 Agility",
          "+18 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "4g 55s"
      },
      {
        "name": "Corrupted Blade of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+20 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 91s"
      },
      {
        "name": "Corrupted Gloves of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 53s"
      },
      {
        "name": "Ethereal Aegis of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Stamina",
          "+12 Strength"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 0s"
      },
      {
        "name": "Shimmering Boots of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+20 Intellect",
          "+6 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 17s"
      },
      {
        "name": "Shimmering Cowl of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+15 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "4g 34s"
      },
      {
        "name": "Holy Medallion of Eternal Slumber",
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
        "name": "Corrupted Slippers of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+20 Stamina",
          "+9 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 39s"
      },
      {
        "name": "Savage Greatsword of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+16 Strength",
          "+11 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "9g 7s"
      },
      {
        "name": "Corrupted Bow of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+11 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 41s"
      },
      {
        "name": "Ethereal Bindings of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+12 Stamina",
          "+8 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 15s"
      },
      {
        "name": "Venerable Leggings of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+23 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "7g 25s"
      },
      {
        "name": "Void-Touched Dagger of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+21 Stamina",
          "+9 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 57s"
      },
      {
        "name": "Ancient Dagger of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "10g 72s"
      },
      {
        "name": "Ancient Cowl of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+22 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 28s"
      },
      {
        "name": "Shadow Tunic of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+22 Strength",
          "+7 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "4g 54s"
      },
      {
        "name": "Void-Touched Bracers of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+17 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 41s"
      },
      {
        "name": "Venerable Axe of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+17 Stamina",
          "+13 Intellect"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 11s"
      },
      {
        "name": "Ancient Grips of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+11 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 20s"
      },
      {
        "name": "Ancient Cuffs of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+15 Strength",
          "+16 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 32s"
      },
      {
        "name": "Shadow Bindings of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+14 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 0s"
      },
      {
        "name": "Ethereal Pendant of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+10 Intellect",
          "+19 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 20s"
      },
      {
        "name": "Ancient Slippers of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+21 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 12s"
      },
      {
        "name": "Holy Sash of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+20 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 75s"
      },
      {
        "name": "Ancient Wristguards of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+15 Spirit",
          "+10 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 34s"
      },
      {
        "name": "Savage Leggings of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+22 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 25s"
      },
      {
        "name": "Shadow Pauldrons of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+19 Intellect",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 33s"
      },
      {
        "name": "Ancient Blade of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+11 Intellect",
          "+15 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 38s"
      },
      {
        "name": "Blood-Forged Girdle of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+14 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "2g 53s"
      },
      {
        "name": "Holy Amice of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+26 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "7g 9s"
      },
      {
        "name": "Ethereal Pauldrons of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+19 Agility",
          "+15 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 5s"
      },
      {
        "name": "Ancient Loop of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+29 Agility",
          "+10 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 67s"
      },
      {
        "name": "Blood-Forged Leggings of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+20 Strength",
          "+6 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 95s"
      },
      {
        "name": "Ethereal Staff of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+14 Stamina",
          "+6 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 70s"
      },
      {
        "name": "Void-Touched Signet of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Intellect",
          "+10 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 70s"
      },
      {
        "name": "Holy Handguards of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+15 Intellect",
          "+10 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "1g 0s"
      },
      {
        "name": "Blood-Forged Spaulders of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+25 Stamina",
          "+10 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "7g 75s"
      },
      {
        "name": "Ethereal Bindings of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+19 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 83s"
      },
      {
        "name": "Shadow Loop of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 60s"
      },
      {
        "name": "Holy Cowl of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+10 Agility",
          "+7 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 88s"
      },
      {
        "name": "Blood-Forged Boots of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+19 Agility",
          "+11 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "8g 81s"
      },
      {
        "name": "Shadow Sabatons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+9 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "2g 88s"
      },
      {
        "name": "Shimmering Amulet of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+16 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 55s"
      },
      {
        "name": "Blood-Forged Blade of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 85s"
      },
      {
        "name": "Blood-Forged Staff of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+20 Strength"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "8g 21s"
      },
      {
        "name": "Ethereal Pants of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+27 Stamina",
          "+15 Agility"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 63s"
      },
      {
        "name": "Shimmering Cuffs of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+19 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 15s"
      },
      {
        "name": "Void-Touched Footpads of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+15 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "9g 15s"
      },
      {
        "name": "Void-Touched Loop of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Intellect",
          "+6 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 31s"
      },
      {
        "name": "Holy Bracers of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+17 Stamina",
          "+8 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 18s"
      },
      {
        "name": "Shadow Helm of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+19 Intellect",
          "+8 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "8g 57s"
      },
      {
        "name": "Ancient Necklace of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+17 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 50s"
      },
      {
        "name": "Holy Seal of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+29 Strength"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "3g 81s"
      },
      {
        "name": "Blood-Forged Breastplate of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "+6 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 32s"
      },
      {
        "name": "Corrupted Pants of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+12 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "3g 49s"
      },
      {
        "name": "Ancient Handguards of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+11 Stamina",
          "+10 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "7g 78s"
      },
      {
        "name": "Blood-Forged Greatsword of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+27 Stamina",
          "+9 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 47s"
      },
      {
        "name": "Ancient Necklace of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Stamina",
          "+8 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 66s"
      },
      {
        "name": "Blood-Forged Breastplate of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+29 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 14s"
      },
      {
        "name": "Shimmering Band of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+16 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 40s"
      },
      {
        "name": "Savage Breastplate of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+15 Intellect",
          "+6 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 24s"
      },
      {
        "name": "Savage Cord of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+10 Spirit",
          "+16 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 90s"
      },
      {
        "name": "Venerable Wristguards of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+10 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 34s"
      },
      {
        "name": "Shadow Dagger of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+13 Stamina",
          "+16 Intellect"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "6g 15s"
      },
      {
        "name": "Ethereal Signet of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+20 Agility",
          "+8 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 74s"
      },
      {
        "name": "Corrupted Handguards of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+16 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "2g 13s"
      },
      {
        "name": "Ethereal Footpads of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+12 Spirit",
          "+15 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 50s"
      },
      {
        "name": "Ancient Helm of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+21 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 10s"
      },
      {
        "name": "Blood-Forged Greatsword of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+12 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "2g 72s"
      },
      {
        "name": "Holy Breastplate of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+23 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "8g 23s"
      },
      {
        "name": "Corrupted Blade of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+27 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 5s"
      },
      {
        "name": "Void-Touched Harness of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+11 Stamina",
          "+14 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 59s"
      },
      {
        "name": "Ancient Kilt of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+26 Strength",
          "+17 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 63s"
      },
      {
        "name": "Void-Touched Greatsword of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+19 Intellect",
          "+15 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "1g 5s"
      },
      {
        "name": "Shimmering Axe of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+25 Stamina",
          "+5 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "3g 52s"
      },
      {
        "name": "Ethereal Gavel of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+17 Spirit",
          "+11 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 72s"
      },
      {
        "name": "Ancient Footpads of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+22 Spirit",
          "+17 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "7g 17s"
      },
      {
        "name": "Blood-Forged Seal of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 4s"
      },
      {
        "name": "Void-Touched Belt of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+12 Agility",
          "+14 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 72s"
      },
      {
        "name": "Shadow Charm of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 62s"
      },
      {
        "name": "Holy Greaves of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+22 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 39s"
      },
      {
        "name": "Ancient Axe of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+20 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 34s"
      },
      {
        "name": "Blood-Forged Dagger of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+21 Spirit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "6g 58s"
      },
      {
        "name": "Ancient Brooch of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 33s"
      },
      {
        "name": "Savage Dagger of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+22 Spirit",
          "+19 Intellect"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "5g 49s"
      },
      {
        "name": "Holy Greatsword of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 87s"
      }
    ]
  }
]
};
