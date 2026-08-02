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
            "name": "Ethereal Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+9 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 30,
            "sellPrice": "4g 54s"
          },
          {
            "name": "Corrupted Amulet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+9 Intellect"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 30,
            "sellPrice": "4g 23s"
          },
          {
            "name": "Corrupted Robes of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+9 Stamina",
              "+6 Agility"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "10g 86s"
          },
          {
            "name": "Shadow Tunic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+9 Intellect"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "3g 63s"
          },
          {
            "name": "Ancient Charm of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 30,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Blood-Forged Robes of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+9 Spirit",
              "+6 Stamina"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Holy Footpads of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+10 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 30,
            "sellPrice": "4g 27s"
          },
          {
            "name": "Corrupted Defender of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 30,
            "sellPrice": "7g 25s"
          },
          {
            "name": "Venerable Band of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 30,
            "sellPrice": "10g 27s"
          },
          {
            "name": "Void-Touched Crown of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+9 Stamina"
            ],
            "effect": "",
            "requiresLevel": 30,
            "sellPrice": "7g 65s"
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
            "name": "Shimmering Tunic of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+21 Spirit",
              "+14 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 50,
            "sellPrice": "4g 4s"
          },
          {
            "name": "Savage Amulet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Shimmering Waistguard of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "9g 64s"
          },
          {
            "name": "Void-Touched Grips of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "1g 14s"
          },
          {
            "name": "Void-Touched Bow of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+21 Strength",
              "+14 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 50,
            "sellPrice": "4g 27s"
          },
          {
            "name": "Blood-Forged Crown of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "4g 76s"
          },
          {
            "name": "Ethereal Legguards of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+21 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 50,
            "sellPrice": "8g 7s"
          },
          {
            "name": "Ethereal Ring of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Agility"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "3g 19s"
          },
          {
            "name": "Ethereal Greatsword of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+21 Strength",
              "+14 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 50,
            "sellPrice": "2g 96s"
          },
          {
            "name": "Void-Touched Kilt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 50,
            "sellPrice": "4g 27s"
          },
          {
            "name": "Holy Pants of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "2g 80s"
          },
          {
            "name": "Void-Touched Breastplate of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+21 Spirit"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 50,
            "sellPrice": "8g 31s"
          },
          {
            "name": "Ethereal Dagger of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 50,
            "sellPrice": "8g 74s"
          },
          {
            "name": "Venerable Greaves of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "3g 13s"
          },
          {
            "name": "Venerable Cuffs of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+21 Agility",
              "+14 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "1g 50s"
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
            "name": "Ancient Girdle of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 59s"
          },
          {
            "name": "Shadow Sabatons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 6s"
          },
          {
            "name": "Ancient Treads of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Shadow Bindings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 47s"
          },
          {
            "name": "Ancient Necklace of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "2g 10s"
          },
          {
            "name": "Ethereal Harness of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 45s"
          },
          {
            "name": "Void-Touched Bulwark of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 24s"
          },
          {
            "name": "Shadow Spaulders of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+24 Stamina",
              "+16 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 71s"
          },
          {
            "name": "Blood-Forged Waistguard of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "7g 52s"
          },
          {
            "name": "Corrupted Charm of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Void-Touched Bindings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 62s"
          },
          {
            "name": "Venerable Gauntlets of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "4g 7s"
          },
          {
            "name": "Void-Touched Handguards of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Void-Touched Necklace of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 18s"
          },
          {
            "name": "Ancient Helm of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "8g 21s"
          },
          {
            "name": "Shimmering Gloves of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 12s"
          },
          {
            "name": "Ancient Mask of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Blood-Forged Belt of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 15s"
          },
          {
            "name": "Shadow Mitts of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 0s"
          },
          {
            "name": "Holy Slippers of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 77s"
          },
          {
            "name": "Corrupted Dagger of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "2g 23s"
          },
          {
            "name": "Holy Bindings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Blood-Forged Treads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 90s"
          },
          {
            "name": "Corrupted Treads of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Blood-Forged Brooch of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "2g 95s"
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
            "name": "Venerable Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 97s"
          },
          {
            "name": "Holy Seal of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 11s"
          },
          {
            "name": "Holy Aegis of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 46s"
          },
          {
            "name": "Corrupted Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "6g 28s"
          },
          {
            "name": "Blood-Forged Ring of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 39s"
          },
          {
            "name": "Venerable Cord of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Void-Touched Bow of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "2g 19s"
          },
          {
            "name": "Shadow Talisman of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "9g 45s"
          },
          {
            "name": "Ancient Charm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 37s"
          },
          {
            "name": "Shimmering Vest of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 7s"
          },
          {
            "name": "Shimmering Spaulders of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 77s"
          },
          {
            "name": "Venerable Circlet of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+24 Stamina",
              "+16 Strength"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "1g 72s"
          },
          {
            "name": "Void-Touched Crown of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 9s"
          },
          {
            "name": "Shimmering Axe of the Betrayer",
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
            "sellPrice": "10g 37s"
          },
          {
            "name": "Ancient Epaulets of Eternal Slumber",
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
            "sellPrice": "3g 27s"
          },
          {
            "name": "Ethereal Treads of the Archmage",
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
            "sellPrice": "10g 69s"
          },
          {
            "name": "Void-Touched Greatsword of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 93s"
          },
          {
            "name": "Venerable Ring of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "6g 18s"
          },
          {
            "name": "Ancient Girdle of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 70s"
          },
          {
            "name": "Ancient Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 2s"
          },
          {
            "name": "Void-Touched Amice of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Venerable Breastplate of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "1g 14s"
          },
          {
            "name": "Ethereal Aegis of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "9g 87s"
          },
          {
            "name": "Blood-Forged Boots of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 30s"
          },
          {
            "name": "Shadow Waistguard of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 54s"
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
            "name": "Shadow Mitts of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "3g 43s"
          },
          {
            "name": "Holy Medallion of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 71s"
          },
          {
            "name": "Ancient Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "6g 64s"
          },
          {
            "name": "Ancient Gavel of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Holy Choker of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 7s"
          },
          {
            "name": "Blood-Forged Footpads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Savage Amice of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Blood-Forged Greaves of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 26s"
          },
          {
            "name": "Blood-Forged Charm of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "6g 70s"
          },
          {
            "name": "Venerable Choker of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Shimmering Collar of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 79s"
          },
          {
            "name": "Shadow Cord of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Shimmering Mantle of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 92s"
          },
          {
            "name": "Ethereal Bracers of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "5g 18s"
          },
          {
            "name": "Corrupted Bindings of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 84s"
          },
          {
            "name": "Holy Belt of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Ethereal Bindings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Shadow Buckler of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 17s"
          },
          {
            "name": "Blood-Forged Footpads of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 58s"
          },
          {
            "name": "Shadow Blade of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 6s"
          },
          {
            "name": "Savage Circlet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 32s"
          },
          {
            "name": "Corrupted Dagger of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Shadow Boots of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 1s"
          },
          {
            "name": "Shimmering Belt of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 84s"
          },
          {
            "name": "Holy Belt of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Corrupted Kilt of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 35s"
          },
          {
            "name": "Shimmering Sabatons of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "4g 74s"
          },
          {
            "name": "Holy Blade of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 62s"
          },
          {
            "name": "Void-Touched Sabatons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 63s"
          },
          {
            "name": "Holy Slippers of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "7g 70s"
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
            "name": "Holy Mantle of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Blood-Forged Necklace of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 73s"
          },
          {
            "name": "Venerable Gloves of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 76s"
          },
          {
            "name": "Shadow Dagger of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 20s"
          },
          {
            "name": "Ethereal Leggings of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 49s"
          },
          {
            "name": "Void-Touched Amice of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 91s"
          },
          {
            "name": "Shadow Axe of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 86s"
          },
          {
            "name": "Corrupted Slippers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 79s"
          },
          {
            "name": "Corrupted Blade of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 65s"
          },
          {
            "name": "Holy Cowl of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 75s"
          },
          {
            "name": "Blood-Forged Pendant of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "10g 71s"
          },
          {
            "name": "Blood-Forged Vambraces of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 73s"
          },
          {
            "name": "Venerable Legguards of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "2g 9s"
          },
          {
            "name": "Corrupted Aegis of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Ethereal Cuffs of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 10s"
          },
          {
            "name": "Ethereal Gauntlets of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Shimmering Seal of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 3s"
          },
          {
            "name": "Shadow Staff of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "3g 88s"
          },
          {
            "name": "Savage Pendant of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "2g 15s"
          },
          {
            "name": "Ethereal Boots of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 56s"
          },
          {
            "name": "Shadow Handguards of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+24 Agility",
              "+16 Strength"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "10g 43s"
          },
          {
            "name": "Shimmering Collar of the Void",
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
            "sellPrice": "4g 43s"
          },
          {
            "name": "Blood-Forged Bow of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 15s"
          },
          {
            "name": "Ancient Sash of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 77s"
          },
          {
            "name": "Savage Slippers of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "2g 3s"
          },
          {
            "name": "Savage Charm of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "8g 40s"
          },
          {
            "name": "Corrupted Waistguard of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "3g 19s"
          },
          {
            "name": "Venerable Amice of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Holy Spaulders of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 28s"
          },
          {
            "name": "Savage Greatsword of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
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
            "name": "Blood-Forged Medallion of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 52,
            "sellPrice": "9g 21s"
          },
          {
            "name": "Venerable Loop of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Strength",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "4g 15s"
          },
          {
            "name": "Ethereal Necklace of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 52,
            "sellPrice": "3g 39s"
          },
          {
            "name": "Venerable Tunic of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+21 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 52,
            "sellPrice": "9g 91s"
          },
          {
            "name": "Void-Touched Buckler of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Agility",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 52,
            "sellPrice": "3g 10s"
          },
          {
            "name": "Shadow Grips of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+21 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 52,
            "sellPrice": "7g 88s"
          },
          {
            "name": "Corrupted Treads of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+21 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 52,
            "sellPrice": "10g 66s"
          },
          {
            "name": "Venerable Necklace of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+21 Agility",
              "+14 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 52,
            "sellPrice": "2g 15s"
          },
          {
            "name": "Ancient Waistguard of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 52,
            "sellPrice": "9g 27s"
          },
          {
            "name": "Void-Touched Choker of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+21 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 52,
            "sellPrice": "3g 56s"
          },
          {
            "name": "Blood-Forged Charm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 52,
            "sellPrice": "5g 21s"
          },
          {
            "name": "Savage Seal of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+21 Intellect",
              "+14 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 52,
            "sellPrice": "6g 80s"
          },
          {
            "name": "Shimmering Signet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 52,
            "sellPrice": "8g 54s"
          },
          {
            "name": "Corrupted Epaulets of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+10 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 52,
            "sellPrice": "3g 31s"
          },
          {
            "name": "Venerable Choker of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 52,
            "sellPrice": "7g 36s"
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
            "name": "Ancient Harness of the Crimson King",
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
            "sellPrice": "6g 88s"
          },
          {
            "name": "Corrupted Signet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 58,
            "sellPrice": "9g 6s"
          },
          {
            "name": "Venerable Tunic of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 58,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Void-Touched Crown of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+23 Strength",
              "+15 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 58,
            "sellPrice": "7g 11s"
          },
          {
            "name": "Savage Staff of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "10g 97s"
          },
          {
            "name": "Void-Touched Axe of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 58,
            "sellPrice": "8g 68s"
          },
          {
            "name": "Ethereal Tunic of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+23 Strength",
              "+15 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 58,
            "sellPrice": "7g 53s"
          },
          {
            "name": "Ancient Collar of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 58,
            "sellPrice": "6g 57s"
          },
          {
            "name": "Shimmering Ring of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Spirit",
              "+15 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 58,
            "sellPrice": "9g 87s"
          },
          {
            "name": "Ethereal Grips of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 58,
            "sellPrice": "1g 77s"
          },
          {
            "name": "Shadow Band of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Spirit",
              "+11 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "8g 27s"
          },
          {
            "name": "Venerable Amice of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "+11 Agility"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Shimmering Sabatons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "10g 15s"
          },
          {
            "name": "Blood-Forged Blade of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Corrupted Staff of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 58,
            "sellPrice": "3g 1s"
          },
          {
            "name": "Holy Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Agility",
              "+11 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 58,
            "sellPrice": "3g 35s"
          },
          {
            "name": "Venerable Grips of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Shimmering Brooch of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 58,
            "sellPrice": "1g 64s"
          },
          {
            "name": "Corrupted Boots of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "1g 3s"
          },
          {
            "name": "Shadow Treads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+11 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "10g 20s"
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
            "name": "Shadow Gavel of the Void",
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
            "sellPrice": "2g 8s"
          },
          {
            "name": "Venerable Dagger of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 62s"
          },
          {
            "name": "Holy Pendant of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "3g 17s"
          },
          {
            "name": "Ancient Harness of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Blood-Forged Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 2s"
          },
          {
            "name": "Corrupted Staff of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "7g 72s"
          },
          {
            "name": "Ancient Crown of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "7g 58s"
          },
          {
            "name": "Venerable Staff of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 63s"
          },
          {
            "name": "Venerable Ring of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Corrupted Leggings of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 39s"
          },
          {
            "name": "Blood-Forged Axe of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 28s"
          },
          {
            "name": "Shimmering Mantle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 42s"
          },
          {
            "name": "Ethereal Necklace of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "2g 76s"
          },
          {
            "name": "Venerable Ring of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 22s"
          },
          {
            "name": "Venerable Staff of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 50s"
          },
          {
            "name": "Shadow Gavel of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 45s"
          },
          {
            "name": "Void-Touched Epaulets of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 91s"
          },
          {
            "name": "Void-Touched Grips of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 6s"
          },
          {
            "name": "Void-Touched Buckler of the Crimson King",
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
            "sellPrice": "8g 74s"
          },
          {
            "name": "Shimmering Staff of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "2g 79s"
          },
          {
            "name": "Blood-Forged Amice of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "3g 29s"
          },
          {
            "name": "Shimmering Girdle of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 49s"
          },
          {
            "name": "Shimmering Harness of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 29s"
          },
          {
            "name": "Ethereal Dagger of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "10g 38s"
          },
          {
            "name": "Shimmering Seal of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "3g 8s"
          },
          {
            "name": "Ancient Tunic of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 60,
            "sellPrice": "7g 8s"
          },
          {
            "name": "Savage Pants of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 85s"
          },
          {
            "name": "Void-Touched Relic of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 39s"
          },
          {
            "name": "Shimmering Necklace of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "3g 89s"
          },
          {
            "name": "Shimmering Blade of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 11s"
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
            "name": "Ethereal Loop of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Spirit",
              "+15 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "2g 83s"
          },
          {
            "name": "Ancient Medallion of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "9g 36s"
          },
          {
            "name": "Corrupted Grips of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 58,
            "sellPrice": "9g 4s"
          },
          {
            "name": "Shadow Bow of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "1g 81s"
          },
          {
            "name": "Venerable Bracers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 58,
            "sellPrice": "8g 65s"
          },
          {
            "name": "Blood-Forged Necklace of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Venerable Cord of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "4g 52s"
          },
          {
            "name": "Shimmering Mitts of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+17 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "1g 40s"
          },
          {
            "name": "Corrupted Shield of the Archmage",
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
            "sellPrice": "9g 0s"
          },
          {
            "name": "Venerable Gavel of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+23 Agility",
              "+15 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 58,
            "sellPrice": "4g 73s"
          },
          {
            "name": "Ancient Legguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Blood-Forged Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "1g 27s"
          },
          {
            "name": "Shadow Kilt of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+23 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "1g 0s"
          },
          {
            "name": "Shadow Talisman of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "10g 90s"
          },
          {
            "name": "Ethereal Pants of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+23 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 58,
            "sellPrice": "10g 31s"
          },
          {
            "name": "Shimmering Dagger of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Spirit",
              "+11 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "7g 8s"
          },
          {
            "name": "Ancient Ring of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "9g 49s"
          },
          {
            "name": "Shadow Bow of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Intellect",
              "+11 Spirit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 58,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Blood-Forged Ring of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 58,
            "sellPrice": "7g 87s"
          },
          {
            "name": "Ancient Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 24s"
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
            "name": "Shimmering Crown of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "2g 68s"
          },
          {
            "name": "Savage Gloves of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Corrupted Collar of the Crimson King",
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
            "sellPrice": "2g 32s"
          },
          {
            "name": "Ancient Kilt of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "2g 46s"
          },
          {
            "name": "Holy Vambraces of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Corrupted Gavel of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "10g 22s"
          },
          {
            "name": "Ethereal Spaulders of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "1g 80s"
          },
          {
            "name": "Shimmering Mask of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Corrupted Mask of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 29s"
          },
          {
            "name": "Blood-Forged Cord of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 22s"
          },
          {
            "name": "Shimmering Amice of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "8g 63s"
          },
          {
            "name": "Shimmering Helm of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 6s"
          },
          {
            "name": "Savage Staff of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "7g 15s"
          },
          {
            "name": "Blood-Forged Staff of the Void",
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
            "sellPrice": "7g 79s"
          },
          {
            "name": "Blood-Forged Bow of the Unseen",
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
            "sellPrice": "3g 79s"
          },
          {
            "name": "Holy Kilt of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 77s"
          },
          {
            "name": "Corrupted Signet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "2g 58s"
          },
          {
            "name": "Blood-Forged Kilt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 98s"
          },
          {
            "name": "Holy Girdle of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 83s"
          },
          {
            "name": "Ethereal Blade of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 11s"
          },
          {
            "name": "Shadow Amulet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "4g 95s"
          },
          {
            "name": "Corrupted Treads of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "3g 22s"
          },
          {
            "name": "Shadow Brooch of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 22s"
          },
          {
            "name": "Holy Tunic of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Venerable Spaulders of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "9g 5s"
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
            "name": "Corrupted Robes of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 92s"
          },
          {
            "name": "Corrupted Amice of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 76s"
          },
          {
            "name": "Holy Mitts of Bloodletting",
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
            "sellPrice": "2g 81s"
          },
          {
            "name": "Shadow Pendant of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "1g 78s"
          },
          {
            "name": "Ethereal Helm of Shattered Souls",
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
            "sellPrice": "3g 6s"
          },
          {
            "name": "Ancient Cord of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 81s"
          },
          {
            "name": "Shadow Harness of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 26s"
          },
          {
            "name": "Ethereal Cord of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 64s"
          },
          {
            "name": "Corrupted Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "4g 3s"
          },
          {
            "name": "Blood-Forged Pendant of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 14s"
          },
          {
            "name": "Shadow Spaulders of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 18s"
          },
          {
            "name": "Shadow Belt of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "8g 37s"
          },
          {
            "name": "Shadow Mitts of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "3g 96s"
          },
          {
            "name": "Savage Epaulets of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 84s"
          },
          {
            "name": "Shadow Bindings of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "1g 20s"
          },
          {
            "name": "Ethereal Necklace of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "10g 19s"
          },
          {
            "name": "Ethereal Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "3g 58s"
          },
          {
            "name": "Shimmering Belt of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "3g 80s"
          },
          {
            "name": "Shimmering Boots of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 48s"
          },
          {
            "name": "Corrupted Greatsword of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 56s"
          },
          {
            "name": "Savage Waistguard of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 2s"
          },
          {
            "name": "Holy Handguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Savage Gavel of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "7g 87s"
          },
          {
            "name": "Ancient Crown of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 94s"
          },
          {
            "name": "Venerable Axe of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "9g 52s"
          },
          {
            "name": "Venerable Pendant of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "2g 45s"
          },
          {
            "name": "Shimmering Tunic of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 2s"
          },
          {
            "name": "Shadow Legguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 29s"
          },
          {
            "name": "Void-Touched Bulwark of the Crimson King",
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
            "sellPrice": "3g 86s"
          },
          {
            "name": "Shadow Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 71s"
          },
          {
            "name": "Ancient Aegis of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "6g 26s"
          },
          {
            "name": "Blood-Forged Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "4g 86s"
          },
          {
            "name": "Blood-Forged Vambraces of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 30s"
          },
          {
            "name": "Ethereal Sash of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Venerable Bulwark of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Stamina",
              "+16 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 45s"
          },
          {
            "name": "Savage Epaulets of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "requiresLevel": 60,
            "sellPrice": "1g 85s"
          },
          {
            "name": "Void-Touched Mantle of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "9g 23s"
          },
          {
            "name": "Void-Touched Legguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Ethereal Medallion of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "8g 3s"
          },
          {
            "name": "Corrupted Ring of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "9g 98s"
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
            "name": "Holy Charm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 55,
            "sellPrice": "10g 53s"
          },
          {
            "name": "Shimmering Cowl of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 55,
            "sellPrice": "5g 0s"
          },
          {
            "name": "Shadow Mitts of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 55,
            "sellPrice": "2g 94s"
          },
          {
            "name": "Venerable Footpads of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 55,
            "sellPrice": "2g 25s"
          },
          {
            "name": "Blood-Forged Medallion of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 55,
            "sellPrice": "1g 26s"
          },
          {
            "name": "Corrupted Leggings of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+22 Intellect",
              "+14 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 55,
            "sellPrice": "5g 57s"
          },
          {
            "name": "Corrupted Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 93s"
          },
          {
            "name": "Ancient Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+16 Agility"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "9g 68s"
          },
          {
            "name": "Holy Collar of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+22 Intellect",
              "+14 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 55,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Blood-Forged Girdle of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "7g 44s"
          },
          {
            "name": "Venerable Amice of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Shadow Mask of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "6g 88s"
          },
          {
            "name": "Ancient Medallion of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 55,
            "sellPrice": "3g 4s"
          },
          {
            "name": "Void-Touched Bindings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "4g 72s"
          },
          {
            "name": "Blood-Forged Vambraces of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+10 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 55,
            "sellPrice": "7g 14s"
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
            "name": "Ancient Signet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "2g 79s"
          },
          {
            "name": "Shimmering Talisman of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 58,
            "sellPrice": "4g 52s"
          },
          {
            "name": "Ethereal Mask of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 58,
            "sellPrice": "8g 0s"
          },
          {
            "name": "Void-Touched Blade of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+17 Stamina",
              "+11 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 58,
            "sellPrice": "7g 15s"
          },
          {
            "name": "Corrupted Cuffs of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "1g 5s"
          },
          {
            "name": "Holy Breastplate of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+23 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 58,
            "sellPrice": "7g 43s"
          },
          {
            "name": "Savage Cord of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+17 Spirit",
              "+11 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "9g 23s"
          },
          {
            "name": "Shadow Sabatons of the Betrayer",
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
            "sellPrice": "9g 79s"
          },
          {
            "name": "Void-Touched Bracers of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+23 Intellect",
              "+15 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 58,
            "sellPrice": "9g 11s"
          },
          {
            "name": "Shadow Mantle of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+17 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 58,
            "sellPrice": "2g 10s"
          },
          {
            "name": "Ethereal Grips of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "9g 12s"
          },
          {
            "name": "Venerable Gavel of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 58,
            "sellPrice": "2g 59s"
          },
          {
            "name": "Venerable Pauldrons of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+23 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 58,
            "sellPrice": "2g 89s"
          },
          {
            "name": "Corrupted Dagger of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+23 Stamina",
              "+15 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 58,
            "sellPrice": "8g 85s"
          },
          {
            "name": "Ethereal Helm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 58,
            "sellPrice": "9g 55s"
          },
          {
            "name": "Savage Vest of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+23 Stamina",
              "+15 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 58,
            "sellPrice": "7g 28s"
          },
          {
            "name": "Venerable Necklace of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "+11 Intellect"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "2g 35s"
          },
          {
            "name": "Holy Harness of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "10g 25s"
          },
          {
            "name": "Ethereal Crown of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "6g 74s"
          },
          {
            "name": "Holy Belt of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+17 Agility",
              "+11 Stamina"
            ],
            "effect": "",
            "requiresLevel": 58,
            "sellPrice": "5g 65s"
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
            "name": "Savage Circlet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 84s"
          },
          {
            "name": "Blood-Forged Mask of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Ancient Bow of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 60,
            "sellPrice": "1g 77s"
          },
          {
            "name": "Shimmering Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 60s"
          },
          {
            "name": "Corrupted Cuffs of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 83s"
          },
          {
            "name": "Venerable Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "4g 20s"
          },
          {
            "name": "Ancient Boots of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 50s"
          },
          {
            "name": "Savage Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 27s"
          },
          {
            "name": "Shimmering Blade of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "7g 0s"
          },
          {
            "name": "Shadow Gavel of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Ancient Footpads of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "10g 64s"
          },
          {
            "name": "Savage Spaulders of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 57s"
          },
          {
            "name": "Venerable Blade of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 62s"
          },
          {
            "name": "Savage Helm of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 91s"
          },
          {
            "name": "Corrupted Crown of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "2g 66s"
          },
          {
            "name": "Savage Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 63s"
          },
          {
            "name": "Void-Touched Axe of the Archmage",
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
            "sellPrice": "1g 46s"
          },
          {
            "name": "Savage Helm of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "6g 23s"
          },
          {
            "name": "Shimmering Spaulders of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "1g 54s"
          },
          {
            "name": "Ethereal Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Shimmering Spaulders of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 0s"
          },
          {
            "name": "Shimmering Cuffs of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 86s"
          },
          {
            "name": "Shadow Leggings of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Ethereal Blade of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "8g 16s"
          },
          {
            "name": "Shimmering Staff of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 39s"
          },
          {
            "name": "Ethereal Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "10g 21s"
          },
          {
            "name": "Holy Boots of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "9g 54s"
          },
          {
            "name": "Blood-Forged Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 53s"
          },
          {
            "name": "Void-Touched Vest of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 5s"
          },
          {
            "name": "Shimmering Gloves of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "8g 75s"
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
            "name": "Blood-Forged Helm of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Ethereal Bulwark of the Crimson King",
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
            "sellPrice": "1g 48s"
          },
          {
            "name": "Corrupted Leggings of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 47s"
          },
          {
            "name": "Shimmering Kilt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "2g 7s"
          },
          {
            "name": "Savage Mantle of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Void-Touched Medallion of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "4g 2s"
          },
          {
            "name": "Corrupted Leggings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "2g 52s"
          },
          {
            "name": "Shimmering Boots of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 84s"
          },
          {
            "name": "Shadow Talisman of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "10g 39s"
          },
          {
            "name": "Holy Breastplate of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 40s"
          },
          {
            "name": "Holy Vambraces of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "1g 74s"
          },
          {
            "name": "Holy Greatsword of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "7g 44s"
          },
          {
            "name": "Savage Harness of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 67s"
          },
          {
            "name": "Savage Circlet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "5g 75s"
          },
          {
            "name": "Blood-Forged Bow of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 19s"
          },
          {
            "name": "Ancient Medallion of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 49s"
          },
          {
            "name": "Venerable Blade of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "7g 7s"
          },
          {
            "name": "Shimmering Gauntlets of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+24 Agility",
              "+16 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 42s"
          },
          {
            "name": "Savage Harness of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 73s"
          },
          {
            "name": "Shimmering Epaulets of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Savage Staff of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+24 Agility",
              "+16 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "1g 45s"
          },
          {
            "name": "Void-Touched Bindings of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "8g 13s"
          },
          {
            "name": "Holy Spaulders of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "2g 62s"
          },
          {
            "name": "Savage Sash of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "4g 68s"
          },
          {
            "name": "Ethereal Seal of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 84s"
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
            "name": "Savage Shield of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 33s"
          },
          {
            "name": "Ethereal Dagger of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "8g 33s"
          },
          {
            "name": "Ethereal Ring of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "1g 26s"
          },
          {
            "name": "Void-Touched Relic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Ancient Greatsword of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Ethereal Axe of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "7g 76s"
          },
          {
            "name": "Savage Pants of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 20s"
          },
          {
            "name": "Blood-Forged Spaulders of the Betrayer",
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
            "sellPrice": "6g 80s"
          },
          {
            "name": "Shimmering Treads of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 58s"
          },
          {
            "name": "Void-Touched Helm of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 60,
            "sellPrice": "6g 70s"
          },
          {
            "name": "Shadow Signet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 80s"
          },
          {
            "name": "Ancient Loop of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "8g 33s"
          },
          {
            "name": "Void-Touched Waistguard of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 1s"
          },
          {
            "name": "Ancient Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Ethereal Mitts of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Holy Vambraces of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "7g 65s"
          },
          {
            "name": "Savage Necklace of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "7g 21s"
          },
          {
            "name": "Ethereal Mask of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "3g 38s"
          },
          {
            "name": "Void-Touched Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "1g 21s"
          },
          {
            "name": "Savage Wristguards of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Venerable Kilt of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "9g 94s"
          },
          {
            "name": "Blood-Forged Slippers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 97s"
          },
          {
            "name": "Shadow Blade of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "7g 13s"
          },
          {
            "name": "Shimmering Grips of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "10g 57s"
          },
          {
            "name": "Savage Grips of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "4g 11s"
          },
          {
            "name": "Blood-Forged Mantle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 0s"
          },
          {
            "name": "Venerable Sash of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "10g 71s"
          },
          {
            "name": "Shimmering Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 60,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Venerable Footpads of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 60,
            "sellPrice": "2g 10s"
          },
          {
            "name": "Void-Touched Mantle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "4g 23s"
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
            "name": "Void-Touched Gloves of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Ethereal Medallion of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "10g 10s"
          },
          {
            "name": "Holy Choker of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 60,
            "sellPrice": "2g 96s"
          },
          {
            "name": "Savage Slippers of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "3g 1s"
          },
          {
            "name": "Savage Amulet of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Stamina",
              "+16 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 60,
            "sellPrice": "2g 4s"
          },
          {
            "name": "Blood-Forged Mantle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "7g 76s"
          },
          {
            "name": "Venerable Mantle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "6g 77s"
          },
          {
            "name": "Void-Touched Mask of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "10g 66s"
          },
          {
            "name": "Corrupted Blade of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 60,
            "sellPrice": "10g 3s"
          },
          {
            "name": "Ancient Gloves of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Venerable Bracers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "1g 88s"
          },
          {
            "name": "Holy Footpads of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 60,
            "sellPrice": "8g 59s"
          },
          {
            "name": "Blood-Forged Slippers of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "1g 57s"
          },
          {
            "name": "Holy Gavel of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 60,
            "sellPrice": "9g 97s"
          },
          {
            "name": "Savage Cuffs of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 60,
            "sellPrice": "7g 80s"
          },
          {
            "name": "Shadow Cowl of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "1g 89s"
          },
          {
            "name": "Shimmering Gavel of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "7g 93s"
          },
          {
            "name": "Ancient Kilt of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 60,
            "sellPrice": "4g 84s"
          },
          {
            "name": "Corrupted Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "4g 63s"
          },
          {
            "name": "Venerable Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "9g 40s"
          },
          {
            "name": "Holy Slippers of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "requiresLevel": 60,
            "sellPrice": "2g 2s"
          },
          {
            "name": "Ethereal Handguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 60,
            "sellPrice": "10g 16s"
          },
          {
            "name": "Void-Touched Ring of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "7g 82s"
          },
          {
            "name": "Ethereal Greatsword of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 60,
            "sellPrice": "9g 96s"
          },
          {
            "name": "Corrupted Spaulders of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 60,
            "sellPrice": "8g 34s"
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
            "name": "Holy Bow of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+21 Intellect",
              "+14 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 50,
            "sellPrice": "4g 71s"
          },
          {
            "name": "Void-Touched Belt of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+21 Strength"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 50,
            "sellPrice": "4g 74s"
          },
          {
            "name": "Shimmering Talisman of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 50,
            "sellPrice": "10g 24s"
          },
          {
            "name": "Blood-Forged Cuffs of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+21 Strength",
              "+14 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "requiresLevel": 50,
            "sellPrice": "10g 28s"
          },
          {
            "name": "Venerable Vambraces of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+10 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 50,
            "sellPrice": "1g 91s"
          },
          {
            "name": "Corrupted Dagger of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "9g 90s"
          },
          {
            "name": "Ethereal Mask of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+21 Strength",
              "+14 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 50,
            "sellPrice": "10g 78s"
          },
          {
            "name": "Savage Kilt of the Unseen",
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
            "sellPrice": "1g 11s"
          },
          {
            "name": "Shimmering Spaulders of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+21 Strength",
              "+14 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 50,
            "sellPrice": "7g 94s"
          },
          {
            "name": "Ethereal Vambraces of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+21 Intellect",
              "+14 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 50,
            "sellPrice": "10g 25s"
          },
          {
            "name": "Holy Spaulders of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+21 Agility",
              "+14 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 50,
            "sellPrice": "8g 96s"
          },
          {
            "name": "Corrupted Collar of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "3g 87s"
          },
          {
            "name": "Ancient Greaves of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Savage Shield of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 50,
            "sellPrice": "3g 46s"
          },
          {
            "name": "Holy Bulwark of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Agility",
              "+10 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 50,
            "sellPrice": "9g 79s"
          },
          {
            "name": "Holy Staff of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+21 Strength",
              "+14 Agility"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 50,
            "sellPrice": "3g 98s"
          },
          {
            "name": "Shimmering Greatsword of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Strength",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "10g 87s"
          },
          {
            "name": "Ancient Cord of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 50,
            "sellPrice": "10g 33s"
          },
          {
            "name": "Shadow Belt of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "requiresLevel": 50,
            "sellPrice": "3g 31s"
          },
          {
            "name": "Blood-Forged Bracers of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+21 Agility",
              "+14 Strength"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 50,
            "sellPrice": "2g 92s"
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
            "name": "Savage Cowl of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "3g 97s"
          },
          {
            "name": "Venerable Mantle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+13 Stamina",
              "+8 Intellect"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "4g 81s"
          },
          {
            "name": "Void-Touched Gavel of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+19 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 45,
            "sellPrice": "3g 20s"
          },
          {
            "name": "Void-Touched Helm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+13 Agility",
              "+8 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "requiresLevel": 45,
            "sellPrice": "5g 80s"
          },
          {
            "name": "Shadow Gavel of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+19 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 45,
            "sellPrice": "3g 36s"
          },
          {
            "name": "Shadow Loop of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+19 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 45,
            "sellPrice": "4g 19s"
          },
          {
            "name": "Shimmering Signet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 45,
            "sellPrice": "5g 36s"
          },
          {
            "name": "Holy Robes of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+13 Stamina",
              "+8 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 45,
            "sellPrice": "4g 69s"
          },
          {
            "name": "Shimmering Treads of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+13 Agility",
              "+8 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "requiresLevel": 45,
            "sellPrice": "8g 11s"
          },
          {
            "name": "Ancient Amice of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+13 Agility",
              "+8 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 45,
            "sellPrice": "8g 71s"
          },
          {
            "name": "Ancient Circlet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+13 Stamina",
              "+8 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 45,
            "sellPrice": "7g 7s"
          },
          {
            "name": "Corrupted Slippers of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+13 Agility",
              "+8 Strength"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "3g 97s"
          },
          {
            "name": "Holy Pauldrons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+13 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 45,
            "sellPrice": "1g 84s"
          },
          {
            "name": "Void-Touched Gauntlets of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+13 Agility",
              "+8 Stamina"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "8g 36s"
          },
          {
            "name": "Venerable Cuffs of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+13 Agility",
              "+8 Strength"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "1g 21s"
          },
          {
            "name": "Ethereal Mask of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+13 Intellect",
              "+8 Spirit"
            ],
            "effect": "",
            "requiresLevel": 45,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Venerable Circlet of the Betrayer",
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
            "sellPrice": "6g 77s"
          },
          {
            "name": "Holy Blade of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+19 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "requiresLevel": 45,
            "sellPrice": "10g 86s"
          },
          {
            "name": "Ancient Amice of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+19 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "requiresLevel": 45,
            "sellPrice": "3g 13s"
          },
          {
            "name": "Holy Necklace of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "requiresLevel": 45,
            "sellPrice": "9g 4s"
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
            "name": "Blood-Forged Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "requiresLevel": 55,
            "sellPrice": "4g 44s"
          },
          {
            "name": "Holy Mantle of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+22 Stamina",
              "+14 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 55,
            "sellPrice": "6g 84s"
          },
          {
            "name": "Holy Boots of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "+10 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "2g 14s"
          },
          {
            "name": "Shimmering Collar of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "requiresLevel": 55,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Void-Touched Gavel of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+16 Spirit",
              "+10 Intellect"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "3g 58s"
          },
          {
            "name": "Savage Tunic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "requiresLevel": 55,
            "sellPrice": "4g 77s"
          },
          {
            "name": "Holy Gauntlets of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Savage Aegis of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Strength",
              "+10 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 55,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Holy Relic of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "requiresLevel": 55,
            "sellPrice": "3g 38s"
          },
          {
            "name": "Ancient Axe of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+22 Stamina",
              "+14 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "requiresLevel": 55,
            "sellPrice": "9g 7s"
          },
          {
            "name": "Ethereal Blade of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+16 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "requiresLevel": 55,
            "sellPrice": "1g 30s"
          },
          {
            "name": "Venerable Leggings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 55,
            "sellPrice": "4g 90s"
          },
          {
            "name": "Void-Touched Talisman of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "requiresLevel": 55,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Corrupted Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+16 Strength"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Blood-Forged Blade of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+22 Agility",
              "+14 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "requiresLevel": 55,
            "sellPrice": "4g 46s"
          },
          {
            "name": "Blood-Forged Gloves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "1g 11s"
          },
          {
            "name": "Corrupted Charm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "requiresLevel": 55,
            "sellPrice": "9g 36s"
          },
          {
            "name": "Void-Touched Loop of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Agility"
            ],
            "effect": "",
            "requiresLevel": 55,
            "sellPrice": "8g 25s"
          },
          {
            "name": "Ancient Aegis of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+22 Stamina",
              "+14 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "requiresLevel": 55,
            "sellPrice": "4g 91s"
          },
          {
            "name": "Blood-Forged Waistguard of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+22 Spirit",
              "+14 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "requiresLevel": 55,
            "sellPrice": "10g 84s"
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
        "name": "Void-Touched Defender of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 21s"
      },
      {
        "name": "Venerable Gloves of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 20s"
      },
      {
        "name": "Void-Touched Robes of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+24 Agility"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "3g 49s"
      },
      {
        "name": "Ethereal Legguards of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 82s"
      },
      {
        "name": "Void-Touched Pants of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+18 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 53s"
      },
      {
        "name": "Savage Medallion of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 37s"
      },
      {
        "name": "Shadow Blade of the Crimson King",
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
        "sellPrice": "7g 45s"
      },
      {
        "name": "Ethereal Greatsword of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 53s"
      },
      {
        "name": "Holy Gavel of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 94s"
      },
      {
        "name": "Shadow Belt of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "2g 28s"
      },
      {
        "name": "Void-Touched Treads of Bloodletting",
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
        "sellPrice": "3g 30s"
      },
      {
        "name": "Holy Band of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 14s"
      },
      {
        "name": "Savage Shield of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 40s"
      },
      {
        "name": "Corrupted Greatsword of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Agility",
          "+16 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 53s"
      },
      {
        "name": "Shimmering Breastplate of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 66s"
      },
      {
        "name": "Shadow Bracers of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "1g 75s"
      },
      {
        "name": "Corrupted Signet of the Void",
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
        "sellPrice": "2g 24s"
      },
      {
        "name": "Void-Touched Bindings of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+16 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 16s"
      },
      {
        "name": "Savage Bow of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 9s"
      },
      {
        "name": "Void-Touched Gloves of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+16 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "7g 56s"
      },
      {
        "name": "Shimmering Amice of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "7g 22s"
      },
      {
        "name": "Corrupted Helm of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 57s"
      },
      {
        "name": "Void-Touched Greatsword of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 93s"
      },
      {
        "name": "Ancient Cuffs of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "3g 83s"
      },
      {
        "name": "Ancient Grips of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 85s"
      },
      {
        "name": "Ethereal Talisman of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 86s"
      },
      {
        "name": "Corrupted Crown of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 95s"
      },
      {
        "name": "Shimmering Amice of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+18 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Holy Sash of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "1g 0s"
      },
      {
        "name": "Blood-Forged Axe of Shattered Souls",
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
        "sellPrice": "8g 68s"
      },
      {
        "name": "Void-Touched Ring of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Strength",
          "+16 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 12s"
      },
      {
        "name": "Shimmering Choker of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "3g 61s"
      },
      {
        "name": "Ethereal Staff of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 66s"
      },
      {
        "name": "Ancient Gauntlets of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 74s"
      },
      {
        "name": "Void-Touched Breastplate of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 16s"
      },
      {
        "name": "Void-Touched Breastplate of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 92s"
      },
      {
        "name": "Void-Touched Belt of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 11s"
      },
      {
        "name": "Blood-Forged Defender of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 15s"
      },
      {
        "name": "Ethereal Charm of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 5s"
      },
      {
        "name": "Corrupted Vambraces of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+18 Agility",
          "+12 Strength"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 94s"
      },
      {
        "name": "Blood-Forged Cowl of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 49s"
      },
      {
        "name": "Shimmering Blade of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 3s"
      },
      {
        "name": "Holy Greatsword of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 70s"
      },
      {
        "name": "Venerable Vest of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "3g 10s"
      },
      {
        "name": "Holy Axe of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+24 Stamina",
          "+16 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 36s"
      },
      {
        "name": "Ancient Choker of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "5g 47s"
      },
      {
        "name": "Holy Shield of the Betrayer",
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
        "sellPrice": "9g 28s"
      },
      {
        "name": "Ancient Grips of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+24 Agility",
          "+16 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "9g 65s"
      },
      {
        "name": "Corrupted Handguards of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+18 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "1g 83s"
      },
      {
        "name": "Corrupted Circlet of Bloodletting",
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
        "sellPrice": "2g 21s"
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
        "name": "Shadow Blade of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 13s"
      },
      {
        "name": "Venerable Staff of the Unseen",
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
        "sellPrice": "10g 17s"
      },
      {
        "name": "Corrupted Amulet of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 80s"
      },
      {
        "name": "Ancient Sash of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 42s"
      },
      {
        "name": "Holy Pants of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "6g 79s"
      },
      {
        "name": "Shadow Tunic of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "7g 96s"
      },
      {
        "name": "Blood-Forged Bow of Eternal Slumber",
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
        "sellPrice": "10g 11s"
      },
      {
        "name": "Holy Gloves of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 78s"
      },
      {
        "name": "Venerable Treads of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 48s"
      },
      {
        "name": "Blood-Forged Gavel of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "7g 72s"
      },
      {
        "name": "Ethereal Amulet of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "5g 65s"
      },
      {
        "name": "Corrupted Talisman of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "4g 6s"
      },
      {
        "name": "Shimmering Seal of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "2g 84s"
      },
      {
        "name": "Ethereal Bulwark of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "5g 87s"
      },
      {
        "name": "Savage Gloves of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 42s"
      },
      {
        "name": "Ethereal Brooch of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "5g 31s"
      },
      {
        "name": "Ethereal Harness of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 95s"
      },
      {
        "name": "Savage Cowl of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "3g 33s"
      },
      {
        "name": "Blood-Forged Bracers of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Blood-Forged Cowl of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 70s"
      },
      {
        "name": "Savage Medallion of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 79s"
      },
      {
        "name": "Ancient Breastplate of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 48s"
      },
      {
        "name": "Shadow Brooch of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "5g 76s"
      },
      {
        "name": "Blood-Forged Grips of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "requiresLevel": 60,
        "sellPrice": "4g 98s"
      },
      {
        "name": "Void-Touched Choker of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 31s"
      },
      {
        "name": "Ancient Cowl of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "2g 84s"
      },
      {
        "name": "Ethereal Gloves of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "5g 77s"
      },
      {
        "name": "Ancient Bow of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 49s"
      },
      {
        "name": "Ancient Circlet of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "3g 72s"
      },
      {
        "name": "Venerable Pendant of the Betrayer",
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
        "sellPrice": "4g 83s"
      },
      {
        "name": "Ancient Seal of the Forgotten",
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
        "sellPrice": "3g 68s"
      },
      {
        "name": "Corrupted Legguards of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "5g 12s"
      },
      {
        "name": "Shadow Staff of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+18 Stamina",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 92s"
      },
      {
        "name": "Venerable Handguards of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 15s"
      },
      {
        "name": "Shadow Epaulets of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 96s"
      },
      {
        "name": "Blood-Forged Greaves of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+18 Agility",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 17s"
      },
      {
        "name": "Shimmering Greatsword of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Agility",
          "+16 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 11s"
      },
      {
        "name": "Shadow Circlet of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "7g 55s"
      },
      {
        "name": "Shimmering Charm of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "10g 95s"
      },
      {
        "name": "Ancient Gauntlets of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 20s"
      },
      {
        "name": "Holy Aegis of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "6g 94s"
      },
      {
        "name": "Void-Touched Brooch of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "9g 91s"
      },
      {
        "name": "Holy Gavel of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 44s"
      },
      {
        "name": "Corrupted Greatsword of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+18 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 28s"
      },
      {
        "name": "Shimmering Dagger of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 77s"
      },
      {
        "name": "Void-Touched Medallion of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 76s"
      },
      {
        "name": "Shimmering Footpads of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 11s"
      },
      {
        "name": "Blood-Forged Pauldrons of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+24 Spirit",
          "+16 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 88s"
      },
      {
        "name": "Void-Touched Seal of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "7g 47s"
      },
      {
        "name": "Ancient Mantle of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 58s"
      },
      {
        "name": "Shadow Amulet of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 78s"
      },
      {
        "name": "Shimmering Robes of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 51s"
      },
      {
        "name": "Venerable Staff of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "3g 63s"
      },
      {
        "name": "Ethereal Bindings of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 10s"
      },
      {
        "name": "Void-Touched Crown of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+16 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 98s"
      },
      {
        "name": "Corrupted Waistguard of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "1g 82s"
      },
      {
        "name": "Ethereal Gauntlets of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 81s"
      },
      {
        "name": "Blood-Forged Greatsword of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 7s"
      },
      {
        "name": "Shadow Sash of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "10g 48s"
      },
      {
        "name": "Venerable Gauntlets of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+18 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 24s"
      },
      {
        "name": "Corrupted Epaulets of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 0s"
      },
      {
        "name": "Void-Touched Pendant of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Shimmering Seal of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 17s"
      },
      {
        "name": "Ancient Gavel of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 74s"
      },
      {
        "name": "Blood-Forged Bow of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Strength",
          "+16 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "6g 92s"
      },
      {
        "name": "Corrupted Gavel of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "9g 78s"
      },
      {
        "name": "Shimmering Epaulets of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+18 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 28s"
      },
      {
        "name": "Savage Breastplate of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "4g 84s"
      },
      {
        "name": "Ancient Gavel of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 50s"
      },
      {
        "name": "Blood-Forged Seal of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 57s"
      },
      {
        "name": "Holy Choker of Shattered Souls",
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
        "sellPrice": "2g 41s"
      },
      {
        "name": "Savage Bow of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 94s"
      },
      {
        "name": "Ancient Choker of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "1g 18s"
      },
      {
        "name": "Corrupted Mitts of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 59s"
      },
      {
        "name": "Venerable Circlet of the Archmage",
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
        "sellPrice": "1g 12s"
      },
      {
        "name": "Shimmering Pauldrons of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 44s"
      },
      {
        "name": "Venerable Vambraces of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+16 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "8g 41s"
      },
      {
        "name": "Savage Harness of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "6g 95s"
      },
      {
        "name": "Holy Gavel of the Deep",
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
        "sellPrice": "6g 17s"
      },
      {
        "name": "Savage Cowl of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+18 Agility",
          "+12 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 12s"
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
        "name": "Ethereal Bracers of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 93s"
      },
      {
        "name": "Blood-Forged Treads of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 26s"
      },
      {
        "name": "Corrupted Sabatons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 65s"
      },
      {
        "name": "Venerable Pants of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 51s"
      },
      {
        "name": "Savage Staff of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 69s"
      },
      {
        "name": "Shimmering Dagger of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+18 Stamina",
          "+12 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 60s"
      },
      {
        "name": "Savage Cuffs of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 37s"
      },
      {
        "name": "Blood-Forged Grips of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 19s"
      },
      {
        "name": "Ancient Bindings of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "5g 38s"
      },
      {
        "name": "Holy Loop of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 77s"
      },
      {
        "name": "Shadow Relic of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 50s"
      },
      {
        "name": "Savage Leggings of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 54s"
      },
      {
        "name": "Venerable Gloves of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 68s"
      },
      {
        "name": "Ancient Blade of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 20s"
      },
      {
        "name": "Holy Relic of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "6g 5s"
      },
      {
        "name": "Ancient Medallion of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 58s"
      },
      {
        "name": "Ethereal Necklace of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina",
          "+16 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "9g 15s"
      },
      {
        "name": "Ancient Cuffs of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 64s"
      },
      {
        "name": "Void-Touched Pants of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 15s"
      },
      {
        "name": "Savage Bindings of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+18 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "3g 11s"
      },
      {
        "name": "Savage Axe of the Deep",
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
        "sellPrice": "6g 97s"
      },
      {
        "name": "Corrupted Harness of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "1g 18s"
      },
      {
        "name": "Ancient Relic of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 20s"
      },
      {
        "name": "Venerable Amulet of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Spirit",
          "+16 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 98s"
      },
      {
        "name": "Savage Signet of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 8s"
      },
      {
        "name": "Shadow Kilt of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+24 Stamina",
          "+16 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 38s"
      },
      {
        "name": "Venerable Helm of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 92s"
      },
      {
        "name": "Ethereal Grips of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "3g 90s"
      },
      {
        "name": "Savage Cowl of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 31s"
      },
      {
        "name": "Ancient Epaulets of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 92s"
      },
      {
        "name": "Ethereal Belt of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 13s"
      },
      {
        "name": "Ethereal Necklace of the Betrayer",
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
        "sellPrice": "6g 81s"
      },
      {
        "name": "Corrupted Loop of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 49s"
      },
      {
        "name": "Ethereal Amulet of the Archmage",
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
        "sellPrice": "6g 50s"
      },
      {
        "name": "Shimmering Shield of the Crimson King",
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
        "sellPrice": "3g 24s"
      },
      {
        "name": "Ethereal Belt of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "5g 36s"
      },
      {
        "name": "Ethereal Girdle of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 25s"
      },
      {
        "name": "Blood-Forged Cuffs of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 94s"
      },
      {
        "name": "Savage Greatsword of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+18 Agility",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 65s"
      },
      {
        "name": "Venerable Girdle of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 43s"
      },
      {
        "name": "Savage Epaulets of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 36s"
      },
      {
        "name": "Void-Touched Breastplate of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+18 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 8s"
      },
      {
        "name": "Corrupted Bow of the Void",
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
        "sellPrice": "7g 80s"
      },
      {
        "name": "Void-Touched Cowl of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 87s"
      },
      {
        "name": "Holy Vest of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "9g 92s"
      },
      {
        "name": "Shadow Handguards of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 6s"
      },
      {
        "name": "Shadow Blade of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 65s"
      },
      {
        "name": "Void-Touched Amulet of the Void",
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
        "sellPrice": "9g 79s"
      },
      {
        "name": "Blood-Forged Seal of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 67s"
      },
      {
        "name": "Corrupted Signet of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 62s"
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
        "name": "Ethereal Footpads of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 15s"
      },
      {
        "name": "Blood-Forged Talisman of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "3g 94s"
      },
      {
        "name": "Shimmering Necklace of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina",
          "+16 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Shimmering Gavel of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 11s"
      },
      {
        "name": "Ethereal Sabatons of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 72s"
      },
      {
        "name": "Corrupted Gloves of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 9s"
      },
      {
        "name": "Venerable Breastplate of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+18 Stamina",
          "+12 Intellect"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 90s"
      },
      {
        "name": "Savage Treads of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 78s"
      },
      {
        "name": "Ethereal Pants of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 74s"
      },
      {
        "name": "Corrupted Cord of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+24 Spirit",
          "+16 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 98s"
      },
      {
        "name": "Shadow Cord of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Void-Touched Helm of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 32s"
      },
      {
        "name": "Corrupted Leggings of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 71s"
      },
      {
        "name": "Ethereal Seal of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 58s"
      },
      {
        "name": "Void-Touched Staff of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+24 Intellect",
          "+16 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "6g 35s"
      },
      {
        "name": "Ethereal Bracers of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 15s"
      },
      {
        "name": "Ethereal Cord of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 64s"
      },
      {
        "name": "Venerable Greatsword of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 25s"
      },
      {
        "name": "Venerable Leggings of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 43s"
      },
      {
        "name": "Shadow Staff of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+18 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 73s"
      },
      {
        "name": "Ancient Seal of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 84s"
      },
      {
        "name": "Holy Spaulders of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "8g 19s"
      },
      {
        "name": "Shadow Dagger of the Void",
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
        "sellPrice": "3g 91s"
      },
      {
        "name": "Ethereal Ring of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "requiresLevel": 60,
        "sellPrice": "2g 24s"
      },
      {
        "name": "Ancient Girdle of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 10s"
      },
      {
        "name": "Void-Touched Greatsword of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+24 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 2s"
      },
      {
        "name": "Holy Gavel of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 67s"
      },
      {
        "name": "Blood-Forged Loop of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 28s"
      },
      {
        "name": "Shimmering Treads of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "2g 36s"
      },
      {
        "name": "Holy Helm of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "5g 71s"
      },
      {
        "name": "Shadow Wristguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "8g 29s"
      },
      {
        "name": "Ancient Greaves of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Void-Touched Grips of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+16 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 86s"
      },
      {
        "name": "Venerable Pendant of the Deep",
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
        "sellPrice": "6g 87s"
      },
      {
        "name": "Ancient Breastplate of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "9g 75s"
      },
      {
        "name": "Savage Bow of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "10g 93s"
      },
      {
        "name": "Shimmering Choker of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 17s"
      },
      {
        "name": "Ancient Bow of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 29s"
      },
      {
        "name": "Venerable Tunic of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+18 Stamina",
          "+12 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "8g 74s"
      },
      {
        "name": "Blood-Forged Boots of Eternal Slumber",
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
        "sellPrice": "5g 92s"
      },
      {
        "name": "Shadow Staff of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+18 Stamina",
          "+12 Intellect"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 69s"
      },
      {
        "name": "Holy Seal of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 63s"
      },
      {
        "name": "Shimmering Harness of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 41s"
      },
      {
        "name": "Shimmering Tunic of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 71s"
      },
      {
        "name": "Shimmering Axe of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+24 Intellect",
          "+16 Spirit"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 78s"
      },
      {
        "name": "Corrupted Legguards of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+24 Agility",
          "+16 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "4g 79s"
      },
      {
        "name": "Shadow Relic of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "10g 84s"
      },
      {
        "name": "Ethereal Relic of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 15s"
      },
      {
        "name": "Shadow Wristguards of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+24 Spirit",
          "+16 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 21s"
      },
      {
        "name": "Shimmering Robes of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 96s"
      },
      {
        "name": "Venerable Greatsword of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "2g 6s"
      },
      {
        "name": "Shadow Legguards of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 59s"
      },
      {
        "name": "Venerable Pauldrons of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 70s"
      },
      {
        "name": "Savage Mantle of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "9g 70s"
      },
      {
        "name": "Holy Pants of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "2g 54s"
      },
      {
        "name": "Ancient Signet of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 12s"
      },
      {
        "name": "Shimmering Amulet of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 31s"
      },
      {
        "name": "Holy Crown of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+24 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "2g 23s"
      },
      {
        "name": "Corrupted Breastplate of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 73s"
      },
      {
        "name": "Holy Gauntlets of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 86s"
      },
      {
        "name": "Corrupted Sash of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 57s"
      },
      {
        "name": "Ancient Grips of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+24 Agility",
          "+16 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 6s"
      },
      {
        "name": "Void-Touched Bow of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "4g 48s"
      },
      {
        "name": "Void-Touched Choker of the Crimson King",
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
        "sellPrice": "5g 83s"
      },
      {
        "name": "Holy Belt of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+24 Spirit",
          "+16 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "4g 41s"
      },
      {
        "name": "Ancient Axe of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+24 Agility",
          "+16 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 10s"
      },
      {
        "name": "Ancient Gauntlets of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+18 Agility",
          "+12 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "4g 31s"
      },
      {
        "name": "Corrupted Amice of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 63s"
      },
      {
        "name": "Ethereal Dagger of the Forgotten",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+24 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "8g 4s"
      },
      {
        "name": "Corrupted Girdle of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "8g 47s"
      },
      {
        "name": "Shadow Cowl of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+18 Stamina",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 4s"
      },
      {
        "name": "Ancient Mitts of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 93s"
      },
      {
        "name": "Shimmering Legguards of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 26s"
      },
      {
        "name": "Ethereal Greatsword of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+24 Stamina",
          "+16 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "2g 20s"
      },
      {
        "name": "Corrupted Grips of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "2g 8s"
      },
      {
        "name": "Shadow Mitts of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+18 Stamina",
          "+12 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 10s"
      },
      {
        "name": "Savage Waistguard of the Archmage",
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
        "sellPrice": "7g 16s"
      },
      {
        "name": "Ethereal Pauldrons of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 90s"
      },
      {
        "name": "Shadow Axe of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 36s"
      },
      {
        "name": "Holy Belt of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+24 Agility",
          "+16 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "1g 12s"
      },
      {
        "name": "Void-Touched Collar of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 89s"
      },
      {
        "name": "Venerable Tunic of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "1g 27s"
      },
      {
        "name": "Ethereal Loop of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "1g 98s"
      },
      {
        "name": "Shimmering Amice of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 10s"
      },
      {
        "name": "Blood-Forged Girdle of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+24 Stamina",
          "+16 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "9g 51s"
      },
      {
        "name": "Venerable Gloves of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "2g 42s"
      },
      {
        "name": "Corrupted Pendant of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "3g 88s"
      },
      {
        "name": "Holy Belt of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "4g 50s"
      },
      {
        "name": "Venerable Sabatons of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+18 Stamina",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 69s"
      },
      {
        "name": "Shadow Medallion of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 44s"
      },
      {
        "name": "Shimmering Bindings of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 90s"
      },
      {
        "name": "Holy Boots of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "6g 96s"
      },
      {
        "name": "Savage Legguards of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+24 Stamina",
          "+16 Intellect"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "3g 87s"
      },
      {
        "name": "Ethereal Greatsword of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+18 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "7g 55s"
      },
      {
        "name": "Ancient Waistguard of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+18 Agility",
          "+12 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 93s"
      },
      {
        "name": "Shadow Talisman of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 6s"
      },
      {
        "name": "Ethereal Helm of Bloodletting",
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
        "sellPrice": "4g 52s"
      },
      {
        "name": "Savage Gavel of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "1g 85s"
      },
      {
        "name": "Shadow Ring of the Archmage",
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
        "sellPrice": "6g 76s"
      },
      {
        "name": "Blood-Forged Footpads of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+18 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 60s"
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
        "name": "Holy Bindings of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 62s"
      },
      {
        "name": "Corrupted Gloves of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 40s"
      },
      {
        "name": "Ancient Sabatons of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 21s"
      },
      {
        "name": "Savage Collar of the Forgotten",
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
        "sellPrice": "1g 24s"
      },
      {
        "name": "Savage Mitts of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 64s"
      },
      {
        "name": "Void-Touched Boots of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "8g 6s"
      },
      {
        "name": "Shimmering Seal of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 10s"
      },
      {
        "name": "Shadow Staff of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 86s"
      },
      {
        "name": "Holy Band of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 6s"
      },
      {
        "name": "Void-Touched Greaves of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "9g 33s"
      },
      {
        "name": "Shadow Grips of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Corrupted Wristguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "8g 65s"
      },
      {
        "name": "Venerable Vambraces of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+24 Spirit",
          "+16 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "10g 35s"
      },
      {
        "name": "Shimmering Kilt of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 1s"
      },
      {
        "name": "Corrupted Pauldrons of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+18 Stamina",
          "+12 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 75s"
      },
      {
        "name": "Shadow Axe of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "1g 67s"
      },
      {
        "name": "Shimmering Bindings of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+24 Agility",
          "+16 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 15s"
      },
      {
        "name": "Corrupted Axe of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 38s"
      },
      {
        "name": "Savage Dagger of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "4g 0s"
      },
      {
        "name": "Shimmering Gavel of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 70s"
      },
      {
        "name": "Void-Touched Signet of Eternal Slumber",
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
        "sellPrice": "3g 20s"
      },
      {
        "name": "Ancient Bulwark of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "requiresLevel": 60,
        "sellPrice": "1g 51s"
      },
      {
        "name": "Shimmering Sash of the Archmage",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "requiresLevel": 60,
        "sellPrice": "3g 26s"
      },
      {
        "name": "Shadow Ring of the Unseen",
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
        "sellPrice": "10g 42s"
      },
      {
        "name": "Ancient Necklace of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "5g 78s"
      },
      {
        "name": "Shimmering Grips of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+24 Agility",
          "+16 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "4g 43s"
      },
      {
        "name": "Venerable Legguards of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 31s"
      },
      {
        "name": "Blood-Forged Harness of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "4g 22s"
      },
      {
        "name": "Venerable Greatsword of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 44s"
      },
      {
        "name": "Ethereal Gavel of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "8g 35s"
      },
      {
        "name": "Holy Greatsword of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 57s"
      },
      {
        "name": "Blood-Forged Necklace of the Archmage",
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
        "sellPrice": "8g 63s"
      },
      {
        "name": "Ancient Staff of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+18 Agility"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "requiresLevel": 60,
        "sellPrice": "6g 5s"
      },
      {
        "name": "Ethereal Mantle of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 53s"
      },
      {
        "name": "Shadow Mantle of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "4g 69s"
      },
      {
        "name": "Shadow Gavel of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 6s"
      },
      {
        "name": "Ethereal Epaulets of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+18 Agility",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "10g 96s"
      },
      {
        "name": "Ethereal Handguards of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+24 Agility",
          "+16 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "9g 1s"
      },
      {
        "name": "Ethereal Treads of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 51s"
      },
      {
        "name": "Savage Pants of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "2g 86s"
      },
      {
        "name": "Ethereal Cord of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "9g 97s"
      },
      {
        "name": "Void-Touched Staff of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "7g 58s"
      },
      {
        "name": "Shadow Epaulets of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+18 Strength",
          "+12 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "4g 75s"
      },
      {
        "name": "Holy Greaves of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+18 Intellect",
          "+12 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 94s"
      },
      {
        "name": "Corrupted Pauldrons of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "5g 35s"
      },
      {
        "name": "Corrupted Choker of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Intellect",
          "+16 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 27s"
      },
      {
        "name": "Void-Touched Cowl of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+18 Intellect",
          "+12 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 51s"
      },
      {
        "name": "Holy Dagger of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "6g 94s"
      },
      {
        "name": "Ethereal Blade of the Archmage",
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
        "sellPrice": "8g 73s"
      },
      {
        "name": "Shadow Signet of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Agility",
          "+12 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "3g 93s"
      },
      {
        "name": "Void-Touched Ring of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Stamina",
          "+16 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "2g 91s"
      },
      {
        "name": "Holy Dagger of Eternal Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "9g 42s"
      },
      {
        "name": "Shimmering Cuffs of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "8g 41s"
      },
      {
        "name": "Ancient Waistguard of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 17s"
      },
      {
        "name": "Void-Touched Amulet of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "3g 64s"
      },
      {
        "name": "Shimmering Cord of the Unseen",
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
        "sellPrice": "7g 49s"
      },
      {
        "name": "Savage Cord of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 0s"
      },
      {
        "name": "Corrupted Relic of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "3g 20s"
      },
      {
        "name": "Venerable Treads of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+18 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 37s"
      },
      {
        "name": "Blood-Forged Band of the Crimson King",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "6g 58s"
      },
      {
        "name": "Holy Medallion of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "1g 28s"
      },
      {
        "name": "Corrupted Collar of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Strength"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 49s"
      },
      {
        "name": "Savage Staff of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "3g 28s"
      },
      {
        "name": "Ethereal Brooch of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "requiresLevel": 60,
        "sellPrice": "7g 38s"
      },
      {
        "name": "Ethereal Legguards of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+24 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "requiresLevel": 60,
        "sellPrice": "5g 28s"
      },
      {
        "name": "Shadow Pendant of the Void",
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
        "sellPrice": "8g 69s"
      },
      {
        "name": "Void-Touched Dagger of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+24 Spirit",
          "+16 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "5g 46s"
      },
      {
        "name": "Shimmering Circlet of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+18 Stamina",
          "+12 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "1g 27s"
      },
      {
        "name": "Void-Touched Amulet of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "6g 33s"
      },
      {
        "name": "Shimmering Circlet of Shattered Souls",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 2s"
      },
      {
        "name": "Ancient Pauldrons of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+24 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 74s"
      },
      {
        "name": "Corrupted Pendant of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "5g 88s"
      },
      {
        "name": "Blood-Forged Ring of the Forgotten",
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
        "sellPrice": "5g 27s"
      },
      {
        "name": "Ethereal Leggings of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "7g 1s"
      },
      {
        "name": "Savage Pants of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+18 Spirit",
          "+12 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "8g 5s"
      },
      {
        "name": "Shimmering Loop of the Betrayer",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Stamina",
          "+12 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "7g 82s"
      },
      {
        "name": "Blood-Forged Waistguard of Bloodletting",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+16 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "requiresLevel": 60,
        "sellPrice": "5g 82s"
      },
      {
        "name": "Holy Mask of the Void",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "8g 57s"
      },
      {
        "name": "Ethereal Leggings of the Unseen",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+18 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "2g 15s"
      },
      {
        "name": "Ethereal Talisman of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "10g 21s"
      },
      {
        "name": "Ethereal Girdle of Eternal Slumber",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "6g 15s"
      },
      {
        "name": "Shimmering Aegis of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Agility",
          "+16 Strength"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "requiresLevel": 60,
        "sellPrice": "2g 28s"
      },
      {
        "name": "Ethereal Greatsword of the Unseen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+24 Stamina",
          "+16 Spirit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "5g 13s"
      },
      {
        "name": "Ancient Bulwark of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "",
        "requiresLevel": 60,
        "sellPrice": "2g 82s"
      },
      {
        "name": "Corrupted Bow of the Deep",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+24 Stamina",
          "+16 Intellect"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "10g 72s"
      },
      {
        "name": "Corrupted Dagger of the Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "3g 93s"
      },
      {
        "name": "Ethereal Collar of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Strength",
          "+16 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "requiresLevel": 60,
        "sellPrice": "5g 78s"
      },
      {
        "name": "Ancient Seal of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Intellect",
          "+16 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "requiresLevel": 60,
        "sellPrice": "4g 20s"
      },
      {
        "name": "Venerable Kilt of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+18 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 31s"
      },
      {
        "name": "Venerable Staff of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+18 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "5g 35s"
      },
      {
        "name": "Void-Touched Tunic of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "6g 78s"
      },
      {
        "name": "Holy Dagger of the Archmage",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+18 Spirit",
          "+12 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 19s"
      },
      {
        "name": "Shadow Spaulders of Shattered Souls",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+16 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "requiresLevel": 60,
        "sellPrice": "8g 0s"
      },
      {
        "name": "Ethereal Waistguard of the Betrayer",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+16 Spirit"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "requiresLevel": 60,
        "sellPrice": "2g 74s"
      },
      {
        "name": "Venerable Slippers of the Crimson King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+24 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "requiresLevel": 60,
        "sellPrice": "5g 20s"
      },
      {
        "name": "Void-Touched Bow of the Forgotten",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+18 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "requiresLevel": 60,
        "sellPrice": "9g 2s"
      },
      {
        "name": "Void-Touched Treads of Bloodletting",
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
        "sellPrice": "10g 58s"
      },
      {
        "name": "Void-Touched Buckler of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Strength",
          "+12 Agility"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "requiresLevel": 60,
        "sellPrice": "5g 15s"
      },
      {
        "name": "Ethereal Brooch of Bloodletting",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "requiresLevel": 60,
        "sellPrice": "8g 23s"
      },
      {
        "name": "Ethereal Cuffs of the Deep",
        "rarity": "Rare",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+18 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "requiresLevel": 60,
        "sellPrice": "9g 24s"
      }
    ]
  }
]
};
