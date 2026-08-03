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
            "name": "Void-Touched Necklace of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+9 Stamina",
              "+6 Attack Power"
            ],
            "effect": "",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "2g 40s"
          },
          {
            "name": "Blood-Forged Mantle of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+9 Stamina",
              "+6 Defense"
            ],
            "effect": "",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "3g 62s"
          },
          {
            "name": "Venerable Boots of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+9 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "2g 46s"
          },
          {
            "name": "Shadow Bow of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+9 Intellect",
              "+6 Spell Crit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "3g 98s"
          },
          {
            "name": "Shimmering Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+9 Strength",
              "+6 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "3g 22s"
          },
          {
            "name": "Venerable Legguards of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "4g 33s"
          },
          {
            "name": "Ethereal Medallion of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Spell Critical Strike.",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "3g 76s"
          },
          {
            "name": "Shimmering Legguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+9 Intellect",
              "+6 MP5"
            ],
            "effect": "",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "2g 72s"
          },
          {
            "name": "Venerable Kilt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+9 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "3g 64s"
          },
          {
            "name": "Corrupted Pauldrons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+9 Stamina",
              "+6 Hit"
            ],
            "effect": "",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "3g 17s"
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
            "name": "Venerable Belt of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+10 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Blood-Forged Amice of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "4g 52s"
          },
          {
            "name": "Shadow Grips of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "+10 Attack Power"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "4g 74s"
          },
          {
            "name": "Shimmering Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "4g 29s"
          },
          {
            "name": "Shadow Ring of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Ethereal Greatsword of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+15 Strength"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "4g 13s"
          },
          {
            "name": "Shimmering Blade of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Agility",
              "+10 Hit"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Corrupted Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Venerable Robes of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Holy Bulwark of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "4g 37s"
          },
          {
            "name": "Shimmering Bow of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect",
              "+10 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Shimmering Talisman of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Venerable Cowl of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "4g 93s"
          },
          {
            "name": "Shadow Shield of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "5g 3s"
          },
          {
            "name": "Holy Bindings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+10 Spell Damage"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "4g 76s"
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
            "name": "Blood-Forged Talisman of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Shimmering Ring of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "9g 69s"
          },
          {
            "name": "Ancient Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 85s"
          },
          {
            "name": "Ethereal Boots of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 46s"
          },
          {
            "name": "Venerable Robes of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Crit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "6g 94s"
          },
          {
            "name": "Shimmering Sash of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Void-Touched Signet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Blood-Forged Seal of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Shimmering Gavel of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Void-Touched Wristguards of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "8g 20s"
          },
          {
            "name": "Shimmering Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Venerable Robes of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "5g 46s"
          },
          {
            "name": "Holy Seal of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Void-Touched Gavel of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "9g 5s"
          },
          {
            "name": "Shimmering Dagger of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Ethereal Collar of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "9g 48s"
          },
          {
            "name": "Holy Handguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Blood-Forged Amulet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Savage Signet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Void-Touched Choker of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Void-Touched Charm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Teleports the caster 15 yards forward.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 83s"
          },
          {
            "name": "Savage Epaulets of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Hit"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Shimmering Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 18s"
          },
          {
            "name": "Shadow Pants of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "6g 28s"
          },
          {
            "name": "Ethereal Gavel of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 41s"
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
            "name": "Shadow Bulwark of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "8g 29s"
          },
          {
            "name": "Shimmering Waistguard of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Savage Mask of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "9g 14s"
          },
          {
            "name": "Corrupted Sabatons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Corrupted Defender of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Ethereal Greatsword of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "+12 Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "6g 77s"
          },
          {
            "name": "Shadow Brooch of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Savage Belt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Ancient Seal of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Shadow Charm of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Armor Penetration increased by 30.",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "6g 22s"
          },
          {
            "name": "Void-Touched Mantle of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 1s"
          },
          {
            "name": "Blood-Forged Buckler of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Ethereal Leggings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Defense"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
          },
          {
            "name": "Blood-Forged Choker of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Shimmering Blade of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Blood-Forged Greatsword of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "+12 Armor"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
          },
          {
            "name": "Void-Touched Leggings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Crit"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Ancient Amice of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "9g 96s"
          },
          {
            "name": "Ethereal Pauldrons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Venerable Talisman of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 41s"
          },
          {
            "name": "Savage Blade of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Blood-Forged Robes of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Venerable Crown of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "6g 40s"
          },
          {
            "name": "Ethereal Ring of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Holy Grips of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 97s"
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
            "name": "Shimmering Gauntlets of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 79s"
          },
          {
            "name": "Shadow Buckler of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Venerable Pants of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 59s"
          },
          {
            "name": "Venerable Greatsword of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 15s"
          },
          {
            "name": "Blood-Forged Sash of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 20s"
          },
          {
            "name": "Void-Touched Spaulders of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Crit"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Void-Touched Bulwark of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 59s"
          },
          {
            "name": "Ethereal Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 90s"
          },
          {
            "name": "Void-Touched Vambraces of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Savage Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Strength",
              "+12 Crit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 90s"
          },
          {
            "name": "Ancient Buckler of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 Parry"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 41s"
          },
          {
            "name": "Blood-Forged Buckler of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Venerable Gauntlets of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 Dodge"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "9g 0s"
          },
          {
            "name": "Venerable Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Ethereal Footpads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 38s"
          },
          {
            "name": "Holy Waistguard of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Shimmering Talisman of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Shadow Pendant of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Intellect",
              "+16 Spell Damage"
            ],
            "effect": "",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "8g 34s"
          },
          {
            "name": "Shimmering Buckler of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "8g 95s"
          },
          {
            "name": "Holy Sash of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Ancient Choker of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "9g 76s"
          },
          {
            "name": "Shimmering Greatsword of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Blood-Forged Choker of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 30s"
          },
          {
            "name": "Ancient Vest of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 53s"
          },
          {
            "name": "Holy Robes of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Blood-Forged Greatsword of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Venerable Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Holy Necklace of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 67s"
          },
          {
            "name": "Ethereal Axe of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Venerable Treads of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 38s"
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
            "name": "Savage Choker of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength",
              "+12 Defense"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "5g 59s"
          },
          {
            "name": "Holy Boots of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "9g 38s"
          },
          {
            "name": "Venerable Dagger of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+24 Intellect",
              "+16 Spell Damage"
            ],
            "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "9g 25s"
          },
          {
            "name": "Blood-Forged Bulwark of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Venerable Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Savage Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Holy Greaves of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 90s"
          },
          {
            "name": "Savage Shield of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 40s"
          },
          {
            "name": "Holy Mask of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "9g 9s"
          },
          {
            "name": "Holy Mitts of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 89s"
          },
          {
            "name": "Shadow Aegis of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 70s"
          },
          {
            "name": "Shimmering Charm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Holy Greaves of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Ethereal Greatsword of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Void-Touched Bracers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Venerable Leggings of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Venerable Collar of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Void-Touched Robes of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Savage Relic of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Shadow Relic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 75s"
          },
          {
            "name": "Shadow Gauntlets of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 90s"
          },
          {
            "name": "Blood-Forged Shield of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Savage Medallion of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Savage Choker of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "9g 15s"
          },
          {
            "name": "Ancient Slippers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 82s"
          },
          {
            "name": "Void-Touched Gauntlets of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Ancient Circlet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "5g 0s"
          },
          {
            "name": "Ethereal Buckler of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Venerable Amice of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Ancient Brooch of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "8g 11s"
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
            "name": "Blood-Forged Bracers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+10 Attack Power"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "4g 96s"
          },
          {
            "name": "Venerable Collar of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Spirit",
              "+10 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Corrupted Grips of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "4g 6s"
          },
          {
            "name": "Ancient Bow of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "6g 18s"
          },
          {
            "name": "Blood-Forged Harness of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "+10 Hit"
            ],
            "effect": "",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Ethereal Vest of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Shadow Aegis of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "4g 45s"
          },
          {
            "name": "Corrupted Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Stamina",
              "+10 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "4g 27s"
          },
          {
            "name": "Venerable Pants of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Void-Touched Harness of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Blood-Forged Crown of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+10 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 8s"
          },
          {
            "name": "Venerable Waistguard of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "5g 67s"
          },
          {
            "name": "Venerable Medallion of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Venerable Pendant of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Holy Girdle of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "5g 16s"
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
            "name": "Shadow Leggings of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Ancient Bow of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Holy Mantle of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Ancient Mitts of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Corrupted Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Corrupted Mask of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "9g 49s"
          },
          {
            "name": "Venerable Amulet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Holy Cowl of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "6g 78s"
          },
          {
            "name": "Ancient Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+17 Stamina",
              "+11 Spell Damage"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "4g 17s"
          },
          {
            "name": "Ethereal Gloves of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "4g 76s"
          },
          {
            "name": "Shimmering Gavel of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Blood-Forged Breastplate of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Void-Touched Waistguard of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Void-Touched Girdle of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+11 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "4g 74s"
          },
          {
            "name": "Ethereal Relic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Spell Critical Strike.",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "6g 72s"
          },
          {
            "name": "Blood-Forged Cowl of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "8g 66s"
          },
          {
            "name": "Savage Axe of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 56s"
          },
          {
            "name": "Ancient Legguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Holy Bow of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina",
              "+11 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "6g 0s"
          },
          {
            "name": "Shimmering Medallion of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Spell Hit chance.",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 46s"
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
            "name": "Savage Dagger of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 30s"
          },
          {
            "name": "Venerable Dagger of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Ancient Pauldrons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Shimmering Waistguard of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Ethereal Dagger of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Agility",
              "+12 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Void-Touched Robes of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Holy Mitts of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Shadow Tunic of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+24 Stamina",
              "+16 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "8g 79s"
          },
          {
            "name": "Savage Grips of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 57s"
          },
          {
            "name": "Venerable Cord of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "9g 93s"
          },
          {
            "name": "Ethereal Bindings of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "8g 31s"
          },
          {
            "name": "Corrupted Leggings of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "5g 96s"
          },
          {
            "name": "Corrupted Axe of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Shimmering Crown of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Hit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Holy Treads of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Blood-Forged Belt of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Savage Medallion of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Ethereal Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Spirit",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Holy Seal of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Spell Damage"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "5g 75s"
          },
          {
            "name": "Ethereal Brooch of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 92s"
          },
          {
            "name": "Blood-Forged Talisman of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your defense rating by 15.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 92s"
          },
          {
            "name": "Venerable Circlet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 66s"
          },
          {
            "name": "Void-Touched Sash of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Hit"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Void-Touched Pants of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Holy Mask of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+24 Intellect",
              "+16 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "8g 38s"
          },
          {
            "name": "Shimmering Ring of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "9g 71s"
          },
          {
            "name": "Venerable Handguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 30s"
          },
          {
            "name": "Shimmering Girdle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Holy Mitts of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spell Damage"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 18s"
          },
          {
            "name": "Venerable Pendant of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Attack Power"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 46s"
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
            "name": "Venerable Blade of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Corrupted Bow of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+17 Agility",
              "+11 Hit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Corrupted Robes of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+17 Intellect",
              "+11 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 36s"
          },
          {
            "name": "Shadow Leggings of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 36s"
          },
          {
            "name": "Void-Touched Mitts of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Shadow Dagger of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Agility",
              "+11 Defense"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 71s"
          },
          {
            "name": "Venerable Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+17 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 29s"
          },
          {
            "name": "Blood-Forged Pendant of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "+11 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 5s"
          },
          {
            "name": "Blood-Forged Talisman of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 20s"
          },
          {
            "name": "Savage Relic of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Corrupted Bracers of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+11 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Blood-Forged Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 9s"
          },
          {
            "name": "Ancient Signet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Intellect",
              "+11 Spell Damage"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 58s"
          },
          {
            "name": "Ethereal Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Venerable Belt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 88s"
          },
          {
            "name": "Shadow Bow of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+23 Stamina",
              "+15 Hit"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "7g 15s"
          },
          {
            "name": "Ethereal Epaulets of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Holy Handguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Savage Pendant of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Shimmering Greatsword of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "8g 70s"
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
            "name": "Ethereal Axe of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 98s"
          },
          {
            "name": "Blood-Forged Talisman of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Venerable Cowl of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Void-Touched Cowl of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Corrupted Signet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Savage Gavel of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Ethereal Buckler of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Shadow Staff of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Savage Amulet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "6g 39s"
          },
          {
            "name": "Holy Collar of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Shimmering Mantle of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "8g 92s"
          },
          {
            "name": "Ethereal Talisman of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "8g 77s"
          },
          {
            "name": "Shimmering Bulwark of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Ethereal Greatsword of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Ancient Kilt of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "9g 92s"
          },
          {
            "name": "Shimmering Greaves of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+24 Intellect",
              "+16 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "9g 14s"
          },
          {
            "name": "Savage Brooch of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Spell Hit chance.",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Holy Vambraces of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "9g 67s"
          },
          {
            "name": "Holy Bracers of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 59s"
          },
          {
            "name": "Blood-Forged Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Ancient Staff of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Blood-Forged Staff of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "9g 27s"
          },
          {
            "name": "Venerable Shield of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Armor"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Venerable Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Venerable Bulwark of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
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
            "name": "Venerable Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Savage Axe of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 17s"
          },
          {
            "name": "Blood-Forged Vambraces of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Corrupted Loop of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Ancient Blade of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Ethereal Cowl of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Hit"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 51s"
          },
          {
            "name": "Ancient Greatsword of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 0s"
          },
          {
            "name": "Savage Mantle of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Blood-Forged Cowl of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Corrupted Greaves of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 83s"
          },
          {
            "name": "Shadow Band of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Ancient Ring of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Ethereal Bindings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Corrupted Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Savage Choker of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Venerable Vest of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "8g 47s"
          },
          {
            "name": "Void-Touched Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 31s"
          },
          {
            "name": "Ethereal Brooch of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "8g 94s"
          },
          {
            "name": "Savage Boots of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Ethereal Harness of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Savage Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Holy Bindings of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Ethereal Necklace of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 58s"
          },
          {
            "name": "Ethereal Collar of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Holy Axe of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+24 Stamina",
              "+16 Parry"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "8g 10s"
          },
          {
            "name": "Blood-Forged Leggings of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 MP5"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "9g 76s"
          },
          {
            "name": "Void-Touched Kilt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 30s"
          },
          {
            "name": "Holy Seal of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 62s"
          },
          {
            "name": "Savage Cuffs of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 53s"
          },
          {
            "name": "Shadow Leggings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 89s"
          },
          {
            "name": "Ancient Pendant of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Corrupted Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 0s"
          },
          {
            "name": "Ancient Loop of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Corrupted Buckler of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect",
              "+12 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Void-Touched Leggings of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Shimmering Grips of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Shimmering Aegis of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+12 Parry"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Venerable Blade of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Savage Dagger of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+24 Stamina",
              "+16 Hit"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "9g 89s"
          },
          {
            "name": "Holy Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "+12 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
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
            "name": "Holy Staff of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+16 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Blood-Forged Choker of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Venerable Belt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "+10 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "6g 40s"
          },
          {
            "name": "Ancient Gauntlets of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "+10 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Corrupted Footpads of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "7g 33s"
          },
          {
            "name": "Holy Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "6g 82s"
          },
          {
            "name": "Savage Staff of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+16 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "6g 82s"
          },
          {
            "name": "Shadow Charm of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "7g 87s"
          },
          {
            "name": "Blood-Forged Robes of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+10 Hit"
            ],
            "effect": "",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "6g 39s"
          },
          {
            "name": "Savage Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "4g 18s"
          },
          {
            "name": "Ethereal Seal of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 18s"
          },
          {
            "name": "Savage Axe of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+16 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Blood-Forged Bulwark of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Spirit",
              "+10 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "4g 91s"
          },
          {
            "name": "Savage Bow of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "8g 77s"
          },
          {
            "name": "Shadow Greatsword of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "5g 40s"
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
            "name": "Ancient Circlet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "6g 57s"
          },
          {
            "name": "Ancient Loop of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "8g 73s"
          },
          {
            "name": "Shimmering Buckler of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Ancient Seal of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "4g 3s"
          },
          {
            "name": "Ancient Mantle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+17 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "6g 31s"
          },
          {
            "name": "Shadow Seal of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Intellect",
              "+11 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Holy Circlet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "6g 52s"
          },
          {
            "name": "Savage Bindings of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Holy Leggings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "+11 Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "6g 37s"
          },
          {
            "name": "Ethereal Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Venerable Pants of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Intellect",
              "+11 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Savage Wristguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "+11 Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Venerable Gavel of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "9g 85s"
          },
          {
            "name": "Void-Touched Footpads of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+23 Agility"
            ],
            "effect": "",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "9g 78s"
          },
          {
            "name": "Venerable Blade of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+23 Stamina",
              "+15 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "8g 39s"
          },
          {
            "name": "Savage Tunic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "5g 11s"
          },
          {
            "name": "Void-Touched Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina",
              "+11 Defense"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Venerable Necklace of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "8g 95s"
          },
          {
            "name": "Ethereal Waistguard of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Shadow Boots of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "+11 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "6g 48s"
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
            "name": "Venerable Vambraces of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 20s"
          },
          {
            "name": "Savage Girdle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Blood-Forged Bindings of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 21s"
          },
          {
            "name": "Venerable Loop of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 52s"
          },
          {
            "name": "Ethereal Sabatons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Void-Touched Gavel of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Spirit",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 88s"
          },
          {
            "name": "Shadow Waistguard of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 40s"
          },
          {
            "name": "Shimmering Vambraces of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 7s"
          },
          {
            "name": "Corrupted Mantle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Savage Bindings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 17s"
          },
          {
            "name": "Shimmering Mitts of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+24 Stamina",
              "+16 Hit"
            ],
            "effect": "",
            "flavorText": "Forged in the heart of a dying star.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "8g 51s"
          },
          {
            "name": "Corrupted Harness of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Ethereal Choker of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Strength",
              "+16 Defense"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "9g 44s"
          },
          {
            "name": "Venerable Pauldrons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Attack Power"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 3s"
          },
          {
            "name": "Blood-Forged Axe of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Agility",
              "+12 Crit"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 78s"
          },
          {
            "name": "Ancient Signet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Attack Power"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Shimmering Axe of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Blood-Forged Pants of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Void-Touched Circlet of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "9g 67s"
          },
          {
            "name": "Shadow Brooch of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Spell Critical Strike.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 51s"
          },
          {
            "name": "Ancient Harness of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Shadow Staff of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Corrupted Amice of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 6s"
          },
          {
            "name": "Corrupted Bindings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Ancient Seal of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 61s"
          },
          {
            "name": "Blood-Forged Helm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Crit"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 7s"
          },
          {
            "name": "Void-Touched Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Holy Harness of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+24 Agility",
              "+16 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "9g 4s"
          },
          {
            "name": "Ancient Gavel of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Savage Robes of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
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
            "name": "Shimmering Kilt of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Corrupted Ring of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Void-Touched Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 90s"
          },
          {
            "name": "Shadow Spaulders of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Void-Touched Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Holy Choker of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "9g 59s"
          },
          {
            "name": "Venerable Girdle of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+24 Agility",
              "+16 Hit"
            ],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "9g 90s"
          },
          {
            "name": "Corrupted Ring of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Shimmering Bindings of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "8g 41s"
          },
          {
            "name": "Shadow Boots of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Ancient Helm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Shadow Collar of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength",
              "+12 Defense"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Ethereal Dagger of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "+12 Armor"
            ],
            "effect": "Equip: Increases threat generated by all attacks by 5%.",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "5g 36s"
          },
          {
            "name": "Holy Bracers of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Blood-Forged Relic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 97s"
          },
          {
            "name": "Shadow Medallion of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Holy Mantle of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Ancient Ring of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Attack Power"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "5g 98s"
          },
          {
            "name": "Corrupted Circlet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 82s"
          },
          {
            "name": "Shimmering Cuffs of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "5g 0s"
          },
          {
            "name": "Venerable Gloves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Holy Epaulets of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 44s"
          },
          {
            "name": "Ethereal Circlet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Corrupted Sabatons of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Ancient Defender of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "8g 19s"
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
            "name": "Shimmering Leggings of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Shimmering Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 4s"
          },
          {
            "name": "Shimmering Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Ancient Axe of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Agility",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Savage Vest of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+24 Stamina",
              "+16 Crit"
            ],
            "effect": "",
            "flavorText": "Forged in the heart of a dying star.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "9g 4s"
          },
          {
            "name": "Blood-Forged Bulwark of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Shimmering Kilt of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 87s"
          },
          {
            "name": "Savage Pants of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 72s"
          },
          {
            "name": "Ancient Amice of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Ethereal Greaves of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Void-Touched Girdle of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Ancient Ring of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Ethereal Legguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 18s"
          },
          {
            "name": "Void-Touched Vambraces of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Corrupted Talisman of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Holy Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 1s"
          },
          {
            "name": "Corrupted Greatsword of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Void-Touched Slippers of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Ethereal Shield of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect",
              "+12 MP5"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 9s"
          },
          {
            "name": "Savage Handguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Savage Helm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 56s"
          },
          {
            "name": "Ethereal Robes of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+24 Intellect",
              "+16 Spell Damage"
            ],
            "effect": "",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "9g 32s"
          },
          {
            "name": "Shadow Epaulets of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "9g 61s"
          },
          {
            "name": "Blood-Forged Cord of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Ancient Mitts of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Armor"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Ancient Pendant of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Blood-Forged Leggings of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "8g 7s"
          },
          {
            "name": "Ethereal Collar of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Ethereal Bulwark of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "8g 26s"
          },
          {
            "name": "Savage Ring of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "6g 62s"
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
            "name": "Corrupted Gauntlets of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Hit"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Venerable Greatsword of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Strength",
              "+12 Parry"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 75s"
          },
          {
            "name": "Ethereal Epaulets of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 70s"
          },
          {
            "name": "Holy Ring of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Blood-Forged Vambraces of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 0s"
          },
          {
            "name": "Shadow Blade of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 Dodge"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Ethereal Tunic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 1s"
          },
          {
            "name": "Venerable Aegis of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Void-Touched Leggings of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 30s"
          },
          {
            "name": "Corrupted Shield of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Shimmering Circlet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 97s"
          },
          {
            "name": "Shimmering Staff of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "8g 61s"
          },
          {
            "name": "Savage Epaulets of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Void-Touched Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 96s"
          },
          {
            "name": "Blood-Forged Shield of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 57s"
          },
          {
            "name": "Corrupted Grips of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Ancient Kilt of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 10s"
          },
          {
            "name": "Corrupted Cord of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Ethereal Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Shimmering Talisman of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Corrupted Epaulets of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Shimmering Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Venerable Necklace of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Venerable Mitts of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Shimmering Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
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
            "name": "Blood-Forged Harness of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Shimmering Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "4g 27s"
          },
          {
            "name": "Shimmering Treads of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "4g 15s"
          },
          {
            "name": "Venerable Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Ethereal Pants of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "4g 31s"
          },
          {
            "name": "Shadow Kilt of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Shimmering Signet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 85s"
          },
          {
            "name": "Shimmering Shield of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect",
              "+10 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 77s"
          },
          {
            "name": "Blood-Forged Ring of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+21 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "8g 74s"
          },
          {
            "name": "Shadow Charm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Blood-Forged Ring of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Agility",
              "+10 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Ethereal Mask of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Void-Touched Gavel of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 50s"
          },
          {
            "name": "Ethereal Grips of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Blood-Forged Collar of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Void-Touched Cowl of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 26s"
          },
          {
            "name": "Venerable Gauntlets of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Corrupted Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Intellect",
              "+10 Spell Damage"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 33s"
          },
          {
            "name": "Venerable Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Intellect",
              "+10 Spell Crit"
            ],
            "effect": "Use: Teleports the caster 15 yards forward.",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 43s"
          },
          {
            "name": "Blood-Forged Cowl of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "5g 65s"
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
            "name": "Shadow Grips of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+19 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "7g 4s"
          },
          {
            "name": "Void-Touched Gauntlets of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+13 Stamina",
              "+8 Attack Power"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "4g 82s"
          },
          {
            "name": "Void-Touched Epaulets of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "4g 38s"
          },
          {
            "name": "Ancient Ring of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "4g 40s"
          },
          {
            "name": "Corrupted Spaulders of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "3g 70s"
          },
          {
            "name": "Blood-Forged Ring of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "4g 53s"
          },
          {
            "name": "Corrupted Dagger of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+13 Stamina",
              "+8 MP5"
            ],
            "effect": "",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "4g 69s"
          },
          {
            "name": "Ethereal Cord of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "5g 30s"
          },
          {
            "name": "Ancient Epaulets of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+13 Stamina",
              "+8 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Shadow Footpads of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+19 Intellect",
              "+12 Spell Hit"
            ],
            "effect": "",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Shadow Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+13 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "3g 1s"
          },
          {
            "name": "Holy Defender of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Stamina",
              "+8 Spell Crit"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "3g 47s"
          },
          {
            "name": "Void-Touched Bindings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+13 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Shimmering Ring of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Stamina",
              "+8 Attack Power"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Shimmering Legguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "4g 62s"
          },
          {
            "name": "Void-Touched Legguards of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+19 Stamina"
            ],
            "effect": "",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Blood-Forged Mantle of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+13 Stamina",
              "+8 Crit"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "3g 65s"
          },
          {
            "name": "Venerable Aegis of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "4g 96s"
          },
          {
            "name": "Ancient Medallion of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Armor Penetration increased by 30.",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "7g 92s"
          },
          {
            "name": "Ethereal Waistguard of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "4g 78s"
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
            "name": "Corrupted Aegis of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "5g 96s"
          },
          {
            "name": "Void-Touched Girdle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "5g 5s"
          },
          {
            "name": "Shimmering Bracers of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "6g 23s"
          },
          {
            "name": "Ethereal Mantle of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+22 Intellect",
              "+14 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "9g 29s"
          },
          {
            "name": "Ethereal Footpads of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+22 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "8g 40s"
          },
          {
            "name": "Ancient Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Corrupted Ring of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+10 Spell Hit"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Corrupted Gavel of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "5g 0s"
          },
          {
            "name": "Shimmering Brooch of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "5g 72s"
          },
          {
            "name": "Corrupted Blade of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "7g 83s"
          },
          {
            "name": "Ethereal Boots of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+16 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Void-Touched Mantle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+16 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "4g 76s"
          },
          {
            "name": "Shimmering Grips of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+16 Intellect",
              "+10 MP5"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Holy Breastplate of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Healing Power"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "5g 90s"
          },
          {
            "name": "Savage Mask of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "",
            "flavorText": "Forged in the heart of a dying star.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "8g 95s"
          },
          {
            "name": "Shimmering Tunic of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+16 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "5g 98s"
          },
          {
            "name": "Holy Footpads of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+22 Agility"
            ],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "7g 67s"
          },
          {
            "name": "Shadow Pants of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Blood-Forged Blade of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "7g 87s"
          },
          {
            "name": "Shimmering Harness of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "7g 37s"
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
    "strategyGuide": "A non-linear raid where the raid must frequently split into 2 or 4 groups to tackle Dream Portals simultaneously. The Sanity Mechanic requires constant monitoring; if a player drops to 0 sanity, they become permanently hostile.",
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
    "environmentalHazards": "The Nightmare Fog constantly shifts. Silencing casters caught within it.",
    "secrets": [
      "Collecting the hidden Dream Fragments grants the raid the Waking Buff, a 24-hour world buff called \"Clarity of the Dream\"."
    ],
    "bosses": [
      "Lethon",
      "Emeriss",
      "Taerar",
      "Ysondre",
      "Corrupted Ysera"
    ],
    "loot": [
      {
        "name": "Dream-Scarred Loop of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Stamina",
          "+18 Dodge"
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 75s"
      },
      {
        "name": "Corrupted Bindings of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "9g 77s"
      },
      {
        "name": "Nightmare-Forged Vambraces of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+27 Stamina",
          "+18 Intellect"
        ],
        "effect": "",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "11g 84s"
      },
      {
        "name": "Dream-Scarred Blade of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+27 Strength",
          "+18 Hit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "9g 8s"
      },
      {
        "name": "Nightmare-Forged Gavel of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "10g 74s"
      },
      {
        "name": "Slumbering Gavel of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+27 Intellect",
          "+18 Spell Crit"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Dream-Scarred Bow of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "10g 50s"
      },
      {
        "name": "Slumbering Collar of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Agility"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 21s"
      },
      {
        "name": "Corrupted Sash of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+27 Stamina",
          "+18 Spell Hit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 7s"
      },
      {
        "name": "Nightmare-Forged Staff of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "11g 90s"
      },
      {
        "name": "Emerald Breastplate of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 43s"
      },
      {
        "name": "Corrupted Breastplate of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+27 Intellect",
          "+18 Spell Damage"
        ],
        "effect": "Equip: +1% Spell Critical Strike.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "9g 93s"
      },
      {
        "name": "Slumbering Staff of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+27 Intellect",
          "+18 Spell Hit"
        ],
        "effect": "",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "11g 80s"
      },
      {
        "name": "Slumbering Staff of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+27 Stamina",
          "+18 Defense"
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "9g 37s"
      },
      {
        "name": "Emerald Gavel of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "9g 94s"
      },
      {
        "name": "Corrupted Brooch of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "9g 30s"
      },
      {
        "name": "Slumbering Waistguard of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+27 Spirit",
          "+18 MP5"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "11g 94s"
      },
      {
        "name": "Corrupted Charm of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 17s"
      },
      {
        "name": "Slumbering Treads of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+18 MP5"
        ],
        "effect": "",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 0s"
      },
      {
        "name": "Nightmare-Forged Handguards of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 90s"
      },
      {
        "name": "Emerald Choker of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "10g 32s"
      },
      {
        "name": "Emerald Epaulets of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "10g 69s"
      },
      {
        "name": "Nightmare-Forged Footpads of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 69s"
      },
      {
        "name": "Dream-Scarred Bow of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+27 Stamina",
          "+18 MP5"
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "9g 77s"
      },
      {
        "name": "Slumbering Blade of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+27 Stamina",
          "+18 Hit"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 36s"
      },
      {
        "name": "Emerald Signet of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Corrupted Greaves of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 48s"
      },
      {
        "name": "Dream-Scarred Dagger of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+27 Stamina",
          "+18 Agility"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "11g 17s"
      },
      {
        "name": "Nightmare-Forged Handguards of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "11g 94s"
      },
      {
        "name": "Slumbering Epaulets of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "10g 29s"
      },
      {
        "name": "Emerald Greaves of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+27 Stamina",
          "+18 Healing Power"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "10g 25s"
      },
      {
        "name": "Emerald Greatsword of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "9g 26s"
      },
      {
        "name": "Dream-Scarred Blade of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+27 Intellect",
          "+18 Spell Crit"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "11g 20s"
      },
      {
        "name": "Slumbering Blade of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+27 Stamina",
          "+18 Crit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "9g 37s"
      },
      {
        "name": "Nightmare-Forged Bracers of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Spirit",
          "+18 MP5"
        ],
        "effect": "",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "11g 83s"
      },
      {
        "name": "Nightmare-Forged Pendant of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Agility"
        ],
        "effect": "",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "10g 45s"
      },
      {
        "name": "Emerald Brooch of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "11g 38s"
      },
      {
        "name": "Nightmare-Forged Axe of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "10g 79s"
      },
      {
        "name": "Dream-Scarred Boots of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "10g 36s"
      },
      {
        "name": "Emerald Circlet of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "10g 36s"
      },
      {
        "name": "Emerald Dagger of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 4s"
      },
      {
        "name": "Dream-Scarred Talisman of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "10g 21s"
      },
      {
        "name": "Emerald Bracers of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+27 Spirit",
          "+18 Healing Power"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "11g 54s"
      },
      {
        "name": "Emerald Vambraces of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+27 Agility"
        ],
        "effect": "",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "9g 10s"
      },
      {
        "name": "Slumbering Leggings of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+27 Stamina",
          "+18 Spell Crit"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Emerald Mask of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Dodge"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "11g 98s"
      },
      {
        "name": "Corrupted Pants of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "11g 38s"
      },
      {
        "name": "Dream-Scarred Necklace of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Stamina",
          "+18 Attack Power"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 15s"
      },
      {
        "name": "Corrupted Shield of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+27 Intellect",
          "+18 MP5"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 34s"
      },
      {
        "name": "Corrupted Slippers of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Spell Hit"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Corrupted Ysera",
        "requiresLevel": 60,
        "sellPrice": "9g 9s"
      }
    ]
  },
  {
    "id": "GrimBatolRaid",
    "name": "Grim Batol",
    "tier": "Tier 2 (40 Man)",
    "desc": "The heart of the mountain where the Dragonmaw Clan enslaves the Red Dragonflight.",
    "loreHistory": "Using the Demon Soul, the orcs have broken the will of Alexstrasza. The raid must navigate the mountain to destroy the artifact and free the Life-Binder.",
    "strategyGuide": "The Red Dragonflight is enslaved; killing dragons destroys their loot and reduces your end-of-raid rewards. The raid must navigate Egg Destruction mechanics, destroying twilight eggs before they hatch.",
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
    "speedrunStrats": "During the Drake Riding phase, players can mount Red Drakes to siege the fortress and skip massive trash packs.",
    "environmentalHazards": "Molten Slag constantly rises from the forge, forcing the raid to move upstairs throughout the encounters.",
    "secrets": [
      "Alexstrasza's Intervention is a secret NPC assist phase that triggers if no red drakes are killed, granting the raid massive haste."
    ],
    "bosses": [
      "Warchief Nek'rosh",
      "The Forgemaster",
      "The Demon Soul",
      "The Crimson Behemoth"
    ],
    "loot": [
      {
        "name": "Dragonmaw Dagger of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+28 Stamina",
          "+19 Hit",
          "+12 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 64s"
      },
      {
        "name": "Dragonmaw Circlet of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+28 Spirit",
          "+19 MP5"
        ],
        "effect": "",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "10g 78s"
      },
      {
        "name": "Mountain-Forged Vest of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Spell Damage",
          "+12 Spirit"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 79s"
      },
      {
        "name": "Dragonmaw Pendant of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Stamina",
          "+19 Hit",
          "+12 Attack Power"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 69s"
      },
      {
        "name": "Dragonmaw Collar of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Spirit",
          "+19 MP5"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "11g 82s"
      },
      {
        "name": "Searing Greaves of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 Crit"
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Mountain-Forged Epaulets of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 Spell Crit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "10g 30s"
      },
      {
        "name": "Dragonmaw Mitts of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+28 Strength",
          "+19 Parry"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 29s"
      },
      {
        "name": "Red Scale Gavel of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+28 Stamina",
          "+19 Spell Crit"
        ],
        "effect": "",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 26s"
      },
      {
        "name": "Enslaved Waistguard of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 Spell Hit"
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 97s"
      },
      {
        "name": "Searing Blade of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+28 Agility",
          "+19 Dodge"
        ],
        "effect": "",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 34s"
      },
      {
        "name": "Red Scale Harness of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+28 Intellect",
          "+19 Spell Damage"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "10g 22s"
      },
      {
        "name": "Dragonmaw Axe of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Stamina",
          "+19 Armor"
        ],
        "effect": "",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 31s"
      },
      {
        "name": "Searing Amice of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Dodge",
          "+12 Armor"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "12g 73s"
      },
      {
        "name": "Mountain-Forged Cuffs of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+28 Strength",
          "+19 Dodge"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 93s"
      },
      {
        "name": "Mountain-Forged Dagger of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 47s"
      },
      {
        "name": "Searing Loop of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Agility",
          "+19 Hit"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 69s"
      },
      {
        "name": "Dragonmaw Staff of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "11g 54s"
      },
      {
        "name": "Enslaved Spaulders of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+28 Intellect",
          "+19 Spell Crit"
        ],
        "effect": "",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 29s"
      },
      {
        "name": "Enslaved Pants of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+28 Agility",
          "+19 Hit"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 49s"
      },
      {
        "name": "Mountain-Forged Waistguard of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+28 Intellect",
          "+19 Spell Damage"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 95s"
      },
      {
        "name": "Dragonmaw Staff of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Stamina",
          "+19 Spirit",
          "+12 Spell Damage"
        ],
        "effect": "",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 8s"
      },
      {
        "name": "Red Scale Waistguard of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+28 Agility",
          "+19 Hit"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 5s"
      },
      {
        "name": "Searing Signet of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Intellect",
          "+19 Spell Damage",
          "+12 Spell Crit"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 13s"
      },
      {
        "name": "Dragonmaw Mantle of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 Spell Hit"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 51s"
      },
      {
        "name": "Red Scale Kilt of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 19s"
      },
      {
        "name": "Mountain-Forged Seal of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Intellect",
          "+19 Spell Hit"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 42s"
      },
      {
        "name": "Dragonmaw Necklace of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Stamina",
          "+19 Dodge"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 87s"
      },
      {
        "name": "Mountain-Forged Mitts of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "11g 34s"
      },
      {
        "name": "Searing Vest of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+28 Strength",
          "+19 Crit",
          "+12 Agility"
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "10g 39s"
      },
      {
        "name": "Searing Talisman of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "10g 36s"
      },
      {
        "name": "Red Scale Gloves of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+28 Intellect",
          "+19 Healing Power"
        ],
        "effect": "",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 80s"
      },
      {
        "name": "Red Scale Vest of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+28 Spirit",
          "+19 Healing Power"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 67s"
      },
      {
        "name": "Enslaved Cowl of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 MP5"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 98s"
      },
      {
        "name": "Enslaved Kilt of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Strength",
          "+12 Armor"
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "10g 89s"
      },
      {
        "name": "Mountain-Forged Choker of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Stamina",
          "+19 Spell Damage",
          "+12 Spirit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "12g 55s"
      },
      {
        "name": "Enslaved Blade of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Agility",
          "+19 Armor"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 61s"
      },
      {
        "name": "Enslaved Helm of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "10g 21s"
      },
      {
        "name": "Red Scale Shield of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+28 Stamina",
          "+19 MP5",
          "+12 Spell Crit"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 28s"
      },
      {
        "name": "Searing Axe of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+28 Intellect",
          "+19 Spell Damage"
        ],
        "effect": "",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "12g 25s"
      },
      {
        "name": "Searing Relic of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "11g 93s"
      },
      {
        "name": "Searing Brooch of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "12g 97s"
      },
      {
        "name": "Red Scale Seal of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Stamina",
          "+19 Parry"
        ],
        "effect": "",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "10g 75s"
      },
      {
        "name": "Red Scale Aegis of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+28 Agility",
          "+19 Armor",
          "+12 Defense"
        ],
        "effect": "",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "12g 26s"
      },
      {
        "name": "Searing Dagger of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+28 Stamina",
          "+19 Crit"
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 98s"
      },
      {
        "name": "Enslaved Choker of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Agility",
          "+19 Intellect"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 15s"
      },
      {
        "name": "Red Scale Amice of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+28 Intellect",
          "+19 Spell Damage"
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 11s"
      },
      {
        "name": "Mountain-Forged Legguards of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Hit"
        ],
        "effect": "",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "11g 86s"
      },
      {
        "name": "Mountain-Forged Brooch of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 51s"
      },
      {
        "name": "Searing Axe of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+28 Stamina",
          "+19 Armor"
        ],
        "effect": "Equip: Increases your defense rating by 15.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "10g 12s"
      },
      {
        "name": "Mountain-Forged Mantle of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+28 Agility",
          "+19 Attack Power"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 52s"
      },
      {
        "name": "Enslaved Collar of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Stamina",
          "+19 Spell Crit",
          "+12 Healing Power"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 6s"
      },
      {
        "name": "Mountain-Forged Collar of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Intellect",
          "+19 Spell Hit",
          "+12 Spell Crit"
        ],
        "effect": "",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "11g 4s"
      },
      {
        "name": "Searing Bow of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+28 Stamina",
          "+19 Spell Crit",
          "+12 Spell Damage"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "11g 19s"
      },
      {
        "name": "Dragonmaw Talisman of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "11g 48s"
      },
      {
        "name": "Dragonmaw Greatsword of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Agility",
          "+19 Armor"
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 95s"
      },
      {
        "name": "Mountain-Forged Staff of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+28 Intellect",
          "+19 Spell Hit"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 2s"
      },
      {
        "name": "Searing Buckler of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+28 Stamina",
          "+19 Healing Power"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 88s"
      },
      {
        "name": "Searing Mask of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Agility",
          "+12 Attack Power"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 7s"
      },
      {
        "name": "Mountain-Forged Bow of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+28 Intellect",
          "+19 Spell Hit"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 5s"
      },
      {
        "name": "Enslaved Pauldrons of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 Hit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 68s"
      },
      {
        "name": "Red Scale Footpads of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+28 Agility",
          "+19 Strength",
          "+12 Crit"
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "12g 39s"
      },
      {
        "name": "Enslaved Shield of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+28 Intellect",
          "+19 MP5"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 80s"
      },
      {
        "name": "Mountain-Forged Leggings of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Attack Power",
          "+12 Crit"
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 27s"
      },
      {
        "name": "Searing Leggings of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Dodge",
          "+12 Defense"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 52s"
      },
      {
        "name": "Mountain-Forged Gavel of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+28 Agility",
          "+19 Defense"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 89s"
      },
      {
        "name": "Enslaved Slippers of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 13s"
      },
      {
        "name": "Mountain-Forged Axe of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+28 Intellect",
          "+19 Healing Power"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "12g 80s"
      },
      {
        "name": "Enslaved Ring of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Intellect",
          "+19 Spell Crit"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 83s"
      },
      {
        "name": "Dragonmaw Seal of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Intellect",
          "+19 Spirit",
          "+12 Spell Damage"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "12g 3s"
      },
      {
        "name": "Red Scale Band of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 6s"
      },
      {
        "name": "Enslaved Blade of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Intellect",
          "+19 Spell Damage"
        ],
        "effect": "",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 92s"
      },
      {
        "name": "Red Scale Greatsword of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+28 Strength",
          "+19 Agility",
          "+12 Crit"
        ],
        "effect": "",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 47s"
      },
      {
        "name": "Searing Mitts of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 Spell Crit"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 67s"
      },
      {
        "name": "Enslaved Leggings of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+28 Agility",
          "+19 Attack Power"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 52s"
      },
      {
        "name": "Searing Pendant of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Intellect",
          "+19 Spell Crit"
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 35s"
      },
      {
        "name": "Dragonmaw Harness of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 33s"
      },
      {
        "name": "Red Scale Legguards of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+19 Healing Power"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "12g 50s"
      },
      {
        "name": "Red Scale Loop of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Spirit",
          "+19 MP5",
          "+12 Healing Power"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 51s"
      },
      {
        "name": "Enslaved Robes of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+19 MP5"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Forgemaster",
        "requiresLevel": 60,
        "sellPrice": "10g 83s"
      }
    ]
  },
  {
    "id": "CrownOfTheDamned",
    "name": "Crown of the Damned (Stratholme Necropolis)",
    "tier": "Tier 2.5 (20 Man)",
    "desc": "The massive floating ziggurat hovering above Stratholme.",
    "loreHistory": "Before Naxxramas arrived, Kel'Thuzad tested his aerial necropolises. This is the command center of the Scourge's Lordaeron operations.",
    "strategyGuide": "The Phylactery Hunt mechanic forces the raid to locate the hidden phylactery in a random room each week to permanently kill the final boss. Mind Control mechanics require the off-tank to react instantly when the main tank is taken.",
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
    "environmentalHazards": "Frostwyrm Breath acts as a raid-wide freeze that must be thawed by standing near active fire braziers.",
    "secrets": [
      "Clearing the raid triggers minor Scourge Invasions in capital cities for the next 2 hours.",
      "Bone Storm is a brutal melee-punishing mechanic requiring exact positioning."
    ],
    "bosses": [
      "Highlord Mograine",
      "The Blood Council",
      "Kel'Thuzad's Phylactery-Guard"
    ],
    "loot": [
      {
        "name": "Necrotic Leggings of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+30 Stamina",
          "+20 MP5"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 16s"
      },
      {
        "name": "Plague-Ridden Amulet of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Spirit",
          "+20 MP5"
        ],
        "effect": "",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 83s"
      },
      {
        "name": "Cursed Helm of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+30 Stamina",
          "+20 Attack Power"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "13g 63s"
      },
      {
        "name": "Plague-Ridden Mitts of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+30 Stamina",
          "+20 Hit"
        ],
        "effect": "",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 98s"
      },
      {
        "name": "Scourge-Forged Choker of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Stamina",
          "+20 Healing Power"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "13g 73s"
      },
      {
        "name": "Scourge-Forged Boots of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+30 Stamina",
          "+20 Crit"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 81s"
      },
      {
        "name": "Cursed Wristguards of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+30 Stamina",
          "+20 MP5"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 51s"
      },
      {
        "name": "Plague-Ridden Medallion of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 64s"
      },
      {
        "name": "Scourge-Forged Boots of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+30 Intellect",
          "+20 Spell Hit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 8s"
      },
      {
        "name": "Scourge-Forged Dagger of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+30 Strength",
          "+20 Agility",
          "+12 Attack Power"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 57s"
      },
      {
        "name": "Death-Bound Circlet of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+30 Intellect",
          "+20 Healing Power"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 45s"
      },
      {
        "name": "Necrotic Pauldrons of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+30 Intellect",
          "+20 Spell Crit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 87s"
      },
      {
        "name": "Plague-Ridden Necklace of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Stamina",
          "+20 Crit"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 79s"
      },
      {
        "name": "Plague-Ridden Ring of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Strength",
          "+20 Parry"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 63s"
      },
      {
        "name": "Cursed Footpads of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+30 Intellect",
          "+20 Spell Crit"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 16s"
      },
      {
        "name": "Necrotic Sabatons of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+30 Intellect",
          "+20 MP5"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 54s"
      },
      {
        "name": "Cursed Gavel of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+30 Stamina",
          "+20 Crit",
          "+12 Agility"
        ],
        "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 73s"
      },
      {
        "name": "Plague-Ridden Blade of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+30 Intellect",
          "+20 Spell Damage",
          "+12 Spell Crit"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 49s"
      },
      {
        "name": "Cursed Gavel of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+30 Strength",
          "+20 Agility"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 43s"
      },
      {
        "name": "Scourge-Forged Greatsword of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+30 Stamina",
          "+20 Spirit"
        ],
        "effect": "",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 78s"
      },
      {
        "name": "Plague-Ridden Wristguards of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+30 Intellect",
          "+20 MP5"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 65s"
      },
      {
        "name": "Cursed Blade of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+30 Stamina",
          "+20 Spell Hit"
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 47s"
      },
      {
        "name": "Scourge-Forged Mitts of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+30 Agility",
          "+20 Defense"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 63s"
      },
      {
        "name": "Cursed Blade of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+30 Stamina",
          "+20 MP5"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 80s"
      },
      {
        "name": "Necrotic Shield of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+30 Stamina",
          "+20 Spell Crit",
          "+12 MP5"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "13g 13s"
      },
      {
        "name": "Necrotic Dagger of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+30 Stamina",
          "+20 Armor"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 57s"
      },
      {
        "name": "Cursed Pendant of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Agility",
          "+20 Crit"
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 2s"
      },
      {
        "name": "Plague-Ridden Greatsword of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+30 Stamina",
          "+20 Healing Power"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 50s"
      },
      {
        "name": "Cursed Brooch of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 64s"
      },
      {
        "name": "Death-Bound Grips of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+30 Stamina",
          "+20 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 31s"
      },
      {
        "name": "Necrotic Robes of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+30 Stamina",
          "+20 Crit"
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 73s"
      },
      {
        "name": "Necrotic Bracers of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+30 Stamina",
          "+20 Healing Power"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 35s"
      },
      {
        "name": "Scourge-Forged Bow of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+30 Stamina",
          "+20 Spell Crit",
          "+12 Spell Hit"
        ],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 90s"
      },
      {
        "name": "Cursed Sabatons of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+30 Stamina",
          "+20 Healing Power"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 33s"
      },
      {
        "name": "Cursed Belt of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+30 Intellect",
          "+20 MP5"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 35s"
      },
      {
        "name": "Death-Bound Gauntlets of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+30 Intellect",
          "+20 Healing Power"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 94s"
      },
      {
        "name": "Necrotic Gavel of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+30 Stamina",
          "+20 Crit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 70s"
      },
      {
        "name": "Necrotic Choker of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Stamina",
          "+20 Agility",
          "+12 Parry"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 88s"
      },
      {
        "name": "Death-Bound Choker of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Stamina",
          "+20 Spell Crit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 33s"
      },
      {
        "name": "Cursed Spaulders of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+30 Intellect",
          "+20 MP5"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 46s"
      },
      {
        "name": "Plague-Ridden Bow of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+30 Agility",
          "+20 Hit",
          "+12 Attack Power"
        ],
        "effect": "",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 44s"
      },
      {
        "name": "Death-Bound Staff of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+30 Stamina",
          "+20 Dodge",
          "+12 Defense"
        ],
        "effect": "",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 78s"
      },
      {
        "name": "Death-Bound Greaves of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+30 Stamina",
          "+20 Crit"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 31s"
      },
      {
        "name": "Scourge-Forged Handguards of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+30 Agility",
          "+20 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 88s"
      },
      {
        "name": "Plague-Ridden Mitts of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+30 Intellect",
          "+20 Spell Damage",
          "+12 Spell Hit"
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 17s"
      },
      {
        "name": "Death-Bound Buckler of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+30 Strength",
          "+20 Dodge",
          "+12 Defense"
        ],
        "effect": "",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 18s"
      },
      {
        "name": "Necrotic Dagger of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+30 Intellect",
          "+20 Spell Damage",
          "+12 Spell Crit"
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "13g 22s"
      },
      {
        "name": "Scourge-Forged Pendant of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Agility",
          "+20 Intellect"
        ],
        "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Cursed Girdle of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+30 Intellect",
          "+20 Spell Damage"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 47s"
      },
      {
        "name": "Death-Bound Charm of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your defense rating by 15.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 35s"
      }
    ]
  },
  {
    "id": "KarazhanRaid",
    "name": "Karazhan (Upper Tower)",
    "tier": "Tier 3 (40 Man)",
    "desc": "The unreleased Vanilla version of Karazhan, balanced for 40 players.",
    "loreHistory": "Medivh's tower transcends time and space. The upper levels are caught in a dimensional rift where the Burning Legion and anomalous entities fight for control.",
    "strategyGuide": "The Chess Event 2.0 requires players to literally inhabit the pieces, completely replacing their hotbars with unique movesets. The Library Puzzle requires navigating a labyrinth where reading the wrong book spawns an elite.",
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
    "environmentalHazards": "The Inverted Castle phase causes gravity to flip, requiring the raid to fight on the ceiling while dodging falling debris.",
    "secrets": [
      "Clearing the raid in under 90 minutes spawns Medivh's Echo, a secret hard-mode boss.",
      "Opera Event Scaling introduces 3 brand new plays including the Arthas & Jaina tragedy."
    ],
    "bosses": [
      "Attumen",
      "Moroes",
      "The Curator",
      "Shade of Aran",
      "Prince Malchezaar",
      "Medivh's Echo"
    ],
    "loot": [
      {
        "name": "Medivh's Wristguards of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+31 Stamina",
          "+21 Armor",
          "+13 Dodge"
        ],
        "effect": "",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 91s"
      },
      {
        "name": "Medivh's Bracers of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+31 Agility",
          "+21 Attack Power",
          "+13 Crit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 52s"
      },
      {
        "name": "Astral Pendant of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Spirit",
          "+21 MP5"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 84s"
      },
      {
        "name": "Ethereal Buckler of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Intellect",
          "+21 Healing Power",
          "+13 MP5"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 59s"
      },
      {
        "name": "Rift-Touched Bow of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+31 Stamina",
          "+21 Defense",
          "+13 Dodge"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 3s"
      },
      {
        "name": "Rift-Touched Gavel of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+31 Stamina",
          "+21 Dodge",
          "+13 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 33s"
      },
      {
        "name": "Medivh's Wristguards of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+31 Stamina",
          "+21 Spell Damage",
          "+13 Spirit"
        ],
        "effect": "",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 15s"
      },
      {
        "name": "Rift-Touched Handguards of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 74s"
      },
      {
        "name": "Medivh's Sash of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+31 Stamina",
          "+21 Healing Power",
          "+13 MP5"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 15s"
      },
      {
        "name": "Ethereal Kilt of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+31 Intellect",
          "+21 Spell Hit",
          "+13 Spell Damage"
        ],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 74s"
      },
      {
        "name": "Rift-Touched Band of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit",
          "+13 Spirit"
        ],
        "effect": "Equip: +1% Spell Critical Strike.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 38s"
      },
      {
        "name": "Rift-Touched Collar of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Intellect",
          "+21 Spirit",
          "+13 Spell Crit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 27s"
      },
      {
        "name": "Ethereal Pendant of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Intellect",
          "+21 Spirit",
          "+13 Spell Damage"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 84s"
      },
      {
        "name": "Ethereal Band of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Agility",
          "+21 Crit",
          "+13 Hit"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 40s"
      },
      {
        "name": "Astral Blade of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+31 Stamina",
          "+21 Armor",
          "+13 Strength"
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 40s"
      },
      {
        "name": "Ethereal Pants of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+31 Stamina",
          "+21 Spell Crit"
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 5s"
      },
      {
        "name": "Ethereal Treads of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+31 Intellect",
          "+21 Spirit"
        ],
        "effect": "",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "12g 42s"
      },
      {
        "name": "Ethereal Cuffs of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit"
        ],
        "effect": "",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 83s"
      },
      {
        "name": "Timeless Charm of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 30s"
      },
      {
        "name": "Astral Robes of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Agility",
          "+13 Parry"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 69s"
      },
      {
        "name": "Ethereal Waistguard of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+31 Stamina",
          "+21 Hit",
          "+13 Crit"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "12g 3s"
      },
      {
        "name": "Medivh's Ring of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Stamina",
          "+21 MP5",
          "+13 Spell Crit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "11g 32s"
      },
      {
        "name": "Ethereal Bow of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+31 Intellect",
          "+21 Spell Damage"
        ],
        "effect": "Equip: +1% Spell Critical Strike.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 67s"
      },
      {
        "name": "Astral Cowl of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Spell Damage",
          "+13 Spell Hit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 40s"
      },
      {
        "name": "Medivh's Dagger of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+31 Agility",
          "+21 Crit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 49s"
      },
      {
        "name": "Timeless Slippers of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+31 Stamina",
          "+21 Hit",
          "+13 Crit"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 82s"
      },
      {
        "name": "Ethereal Amice of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 MP5"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 18s"
      },
      {
        "name": "Astral Pauldrons of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+31 Agility",
          "+21 Crit",
          "+13 Strength"
        ],
        "effect": "",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 63s"
      },
      {
        "name": "Ethereal Footpads of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+31 Strength",
          "+21 Crit",
          "+13 Hit"
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 86s"
      },
      {
        "name": "Ethereal Blade of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+31 Intellect",
          "+21 MP5"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 51s"
      },
      {
        "name": "Medivh's Cowl of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit",
          "+13 MP5"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 68s"
      },
      {
        "name": "Ethereal Buckler of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Intellect",
          "+21 MP5",
          "+13 Healing Power"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 94s"
      },
      {
        "name": "Timeless Choker of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Agility",
          "+21 Dodge"
        ],
        "effect": "Equip: Increases your defense rating by 15.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "12g 33s"
      },
      {
        "name": "Medivh's Mantle of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+31 Agility",
          "+21 Crit",
          "+13 Attack Power"
        ],
        "effect": "",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 3s"
      },
      {
        "name": "Medivh's Wristguards of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Spell Crit",
          "+13 Spirit"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "12g 81s"
      },
      {
        "name": "Rift-Touched Charm of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 91s"
      },
      {
        "name": "Timeless Axe of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Intellect",
          "+21 Spell Hit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 57s"
      },
      {
        "name": "Rift-Touched Brooch of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 76s"
      },
      {
        "name": "Rift-Touched Brooch of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Spell Critical Strike.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Medivh's Bracers of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit"
        ],
        "effect": "",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 96s"
      },
      {
        "name": "Medivh's Loop of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Intellect",
          "+21 Healing Power"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Medivh's Belt of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+31 Agility",
          "+21 Strength",
          "+13 Attack Power"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 66s"
      },
      {
        "name": "Ethereal Greaves of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Hit",
          "+13 Crit"
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "13g 46s"
      },
      {
        "name": "Timeless Greatsword of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+31 Stamina",
          "+21 Spell Damage",
          "+13 MP5"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 33s"
      },
      {
        "name": "Timeless Band of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Stamina",
          "+21 Spell Damage",
          "+13 Spirit"
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 85s"
      },
      {
        "name": "Medivh's Defender of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Stamina",
          "+21 Dodge"
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 36s"
      },
      {
        "name": "Astral Loop of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Intellect",
          "+21 Spell Hit",
          "+13 Spell Damage"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 25s"
      },
      {
        "name": "Medivh's Gloves of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Agility",
          "+13 Defense"
        ],
        "effect": "",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 10s"
      },
      {
        "name": "Medivh's Shield of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Agility",
          "+21 Defense",
          "+13 Strength"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 89s"
      },
      {
        "name": "Timeless Aegis of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Spirit",
          "+21 Healing Power"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 31s"
      },
      {
        "name": "Medivh's Slippers of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+31 Agility",
          "+21 Strength",
          "+13 Crit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "13g 48s"
      },
      {
        "name": "Rift-Touched Blade of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Intellect",
          "+21 Spell Damage",
          "+13 Spell Crit"
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 14s"
      },
      {
        "name": "Astral Talisman of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Spell Hit chance.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 89s"
      },
      {
        "name": "Ethereal Band of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Intellect",
          "+21 MP5",
          "+13 Healing Power"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 9s"
      },
      {
        "name": "Ethereal Cowl of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+31 Intellect",
          "+21 MP5",
          "+13 Healing Power"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "13g 18s"
      },
      {
        "name": "Timeless Ring of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Spirit",
          "+21 Healing Power",
          "+13 MP5"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 73s"
      },
      {
        "name": "Timeless Talisman of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 63s"
      },
      {
        "name": "Astral Pants of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+31 Intellect",
          "+21 MP5",
          "+13 Healing Power"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 36s"
      },
      {
        "name": "Ethereal Treads of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+31 Intellect",
          "+21 MP5",
          "+13 Healing Power"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 71s"
      },
      {
        "name": "Medivh's Blade of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+31 Strength",
          "+21 Agility",
          "+13 Crit"
        ],
        "effect": "",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 70s"
      },
      {
        "name": "Ethereal Charm of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 82s"
      },
      {
        "name": "Rift-Touched Bow of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit",
          "+13 MP5"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 28s"
      },
      {
        "name": "Ethereal Aegis of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Spirit",
          "+21 Healing Power",
          "+13 MP5"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 18s"
      },
      {
        "name": "Medivh's Sabatons of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+31 Stamina",
          "+21 Spell Damage"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 13s"
      },
      {
        "name": "Rift-Touched Sabatons of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+31 Strength",
          "+21 Hit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "11g 68s"
      },
      {
        "name": "Medivh's Cowl of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Attack Power",
          "+13 Hit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "13g 2s"
      },
      {
        "name": "Astral Necklace of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Stamina",
          "+21 Intellect",
          "+13 Attack Power"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 34s"
      },
      {
        "name": "Astral Shield of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Stamina",
          "+21 MP5"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 69s"
      },
      {
        "name": "Medivh's Bindings of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+31 Stamina",
          "+21 Strength",
          "+13 Armor"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "11g 58s"
      },
      {
        "name": "Astral Relic of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 50s"
      },
      {
        "name": "Medivh's Bow of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit",
          "+13 Spirit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "12g 59s"
      },
      {
        "name": "Timeless Greatsword of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+31 Stamina",
          "+21 Hit",
          "+13 Intellect"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 20s"
      },
      {
        "name": "Rift-Touched Bow of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+31 Strength",
          "+21 Attack Power"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 98s"
      },
      {
        "name": "Medivh's Charm of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Ethereal Defender of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Intellect",
          "+21 MP5"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 59s"
      },
      {
        "name": "Astral Greatsword of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+31 Stamina",
          "+21 Spell Crit"
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 93s"
      },
      {
        "name": "Astral Bow of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+31 Agility",
          "+21 Hit",
          "+13 Attack Power"
        ],
        "effect": "",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "13g 65s"
      },
      {
        "name": "Rift-Touched Cowl of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+31 Agility",
          "+21 Crit",
          "+13 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "11g 39s"
      },
      {
        "name": "Ethereal Sabatons of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit",
          "+13 MP5"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 4s"
      },
      {
        "name": "Medivh's Dagger of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+31 Stamina",
          "+21 Agility",
          "+13 Crit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 18s"
      },
      {
        "name": "Timeless Loop of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Intellect",
          "+21 Spell Hit",
          "+13 Spell Crit"
        ],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 51s"
      },
      {
        "name": "Ethereal Boots of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Healing Power",
          "+13 MP5"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 17s"
      },
      {
        "name": "Ethereal Kilt of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Defense"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "13g 75s"
      },
      {
        "name": "Timeless Bow of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit"
        ],
        "effect": "Equip: +1% Spell Critical Strike.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 44s"
      },
      {
        "name": "Rift-Touched Bow of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Stamina",
          "+21 Armor"
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "11g 36s"
      },
      {
        "name": "Medivh's Necklace of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Intellect",
          "+21 MP5",
          "+13 Healing Power"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 44s"
      },
      {
        "name": "Astral Aegis of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Stamina",
          "+21 Defense",
          "+13 Armor"
        ],
        "effect": "",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 85s"
      },
      {
        "name": "Astral Bulwark of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Stamina",
          "+21 Healing Power"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 52s"
      },
      {
        "name": "Medivh's Bulwark of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Intellect",
          "+21 MP5",
          "+13 Healing Power"
        ],
        "effect": "",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "12g 64s"
      },
      {
        "name": "Ethereal Leggings of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Healing Power",
          "+13 MP5"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 3s"
      },
      {
        "name": "Timeless Medallion of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 91s"
      },
      {
        "name": "Rift-Touched Gavel of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+31 Intellect",
          "+21 Spirit",
          "+13 Spell Crit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 98s"
      },
      {
        "name": "Timeless Gavel of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit",
          "+13 Spell Hit"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "12g 47s"
      },
      {
        "name": "Ethereal Bow of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+31 Strength",
          "+21 Dodge"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: Medivh's Echo",
        "requiresLevel": 60,
        "sellPrice": "13g 76s"
      },
      {
        "name": "Ethereal Dagger of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Spirit",
          "+21 Healing Power",
          "+13 MP5"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 6s"
      },
      {
        "name": "Rift-Touched Pauldrons of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Spell Crit",
          "+13 Healing Power"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 25s"
      },
      {
        "name": "Rift-Touched Sabatons of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit",
          "+13 Spell Hit"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 96s"
      },
      {
        "name": "Rift-Touched Bracers of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+31 Agility",
          "+21 Crit",
          "+13 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 62s"
      },
      {
        "name": "Astral Amulet of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Intellect",
          "+21 Spell Crit",
          "+13 MP5"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 70s"
      },
      {
        "name": "Rift-Touched Talisman of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 95s"
      }
    ]
  },
  {
    "id": "DragonIslesRaid",
    "name": "Temple of the Old Gods (Dragon Isles)",
    "tier": "Tier 3.5 (40 Man)",
    "desc": "The absolute pinnacle of Vanilla progression, located on the mythical Dragon Isles.",
    "loreHistory": "A forgotten island where the Old Gods first corrupted the proto-dragons. The architecture is impossibly ancient, pre-dating the Titans.",
    "strategyGuide": "Requires a fully coordinated 40-man raid to complete the World Tree Defense, holding off waves of elemental invaders. Ley-Line Alignment puzzles require players to physically connect beams of light to remove boss immunities.",
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
    "speedrunStrats": "Time Dilation is a Bronze dragon mechanic that drastically slows player movement and cast speed; coordinate heroism effectively here.",
    "environmentalHazards": "The geometry of the temple physically shifts and changes layout every week, making memorization impossible.",
    "secrets": [
      "Ultra-rare Proto-Dragon Mounts can drop from the final boss."
    ],
    "bosses": [
      "The Aspect Council",
      "The Faceless General",
      "Avatar of the Old God"
    ],
    "loot": [
      {
        "name": "Maddening Sabatons of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+33 Stamina",
          "+22 Spell Crit"
        ],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 8s"
      },
      {
        "name": "Faceless Buckler of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Intellect",
          "+22 MP5",
          "+14 Healing Power"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 42s"
      },
      {
        "name": "Tentacled Spaulders of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Healing Power",
          "+14 MP5"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 17s"
      },
      {
        "name": "Void-Touched Bow of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+33 Stamina",
          "+22 Spell Crit",
          "+14 Spell Damage"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 54s"
      },
      {
        "name": "Tentacled Crown of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Attack Power",
          "+14 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 83s"
      },
      {
        "name": "Whispering Cowl of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 Healing Power",
          "+14 MP5"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 72s"
      },
      {
        "name": "Maddening Greatsword of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Stamina",
          "+22 Healing Power",
          "+14 MP5"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "12g 20s"
      },
      {
        "name": "Faceless Dagger of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+33 Intellect",
          "+22 Healing Power"
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 55s"
      },
      {
        "name": "Void-Touched Treads of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 Healing Power"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 3s"
      },
      {
        "name": "Whispering Relic of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 85s"
      },
      {
        "name": "Maddening Gavel of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+33 Stamina",
          "+22 Healing Power"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 10s"
      },
      {
        "name": "Whispering Ring of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Intellect",
          "+22 Spell Hit",
          "+14 Spell Damage"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Whispering Robes of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 MP5",
          "+14 Healing Power"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "12g 85s"
      },
      {
        "name": "Whispering Signet of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina",
          "+22 Healing Power",
          "+14 Spell Crit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 81s"
      },
      {
        "name": "Maddening Medallion of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 86s"
      },
      {
        "name": "Whispering Pants of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+33 Stamina",
          "+22 Spell Crit",
          "+14 MP5"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 84s"
      },
      {
        "name": "Void-Touched Pauldrons of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 MP5"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 68s"
      },
      {
        "name": "Maddening Breastplate of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+33 Agility",
          "+22 Hit",
          "+14 Crit"
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 66s"
      },
      {
        "name": "Tentacled Axe of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Stamina",
          "+22 Healing Power",
          "+14 MP5"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 38s"
      },
      {
        "name": "Whispering Bindings of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Hit"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 2s"
      },
      {
        "name": "Void-Touched Band of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina",
          "+22 Strength",
          "+14 Defense"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 31s"
      },
      {
        "name": "Maddening Gloves of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+33 Agility",
          "+22 Intellect",
          "+14 Hit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "12g 18s"
      },
      {
        "name": "Maddening Ring of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina",
          "+22 Spell Damage",
          "+14 Spell Hit"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 58s"
      },
      {
        "name": "Tentacled Medallion of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 42s"
      },
      {
        "name": "Whispering Vest of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+33 Intellect",
          "+22 Spell Crit"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 13s"
      },
      {
        "name": "Tentacled Talisman of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 40s"
      },
      {
        "name": "Tentacled Gavel of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+33 Stamina",
          "+22 Dodge",
          "+14 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "12g 93s"
      },
      {
        "name": "Maddening Treads of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Agility",
          "+14 Dodge"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 6s"
      },
      {
        "name": "Maddening Defender of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina",
          "+22 Healing Power",
          "+14 Spell Crit"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 72s"
      },
      {
        "name": "Faceless Gauntlets of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Crit",
          "+14 Attack Power"
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 38s"
      },
      {
        "name": "Maddening Sabatons of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Spell Damage"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 23s"
      },
      {
        "name": "Faceless Legguards of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Strength",
          "+14 Attack Power"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 66s"
      },
      {
        "name": "Maddening Spaulders of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+33 Agility",
          "+22 Armor",
          "+14 Defense"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 23s"
      },
      {
        "name": "Void-Touched Spaulders of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 Healing Power",
          "+14 MP5"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 51s"
      },
      {
        "name": "Tentacled Bulwark of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina",
          "+22 Spell Crit",
          "+14 Healing Power"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 64s"
      },
      {
        "name": "Maddening Staff of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+33 Stamina",
          "+22 MP5",
          "+14 Spell Crit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 29s"
      },
      {
        "name": "Faceless Blade of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+33 Stamina",
          "+22 Spell Crit"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 64s"
      },
      {
        "name": "Void-Touched Crown of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Attack Power",
          "+14 Hit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 80s"
      },
      {
        "name": "Faceless Vest of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 Spirit",
          "+14 Spell Crit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 63s"
      },
      {
        "name": "Void-Touched Robes of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Defense",
          "+14 Armor"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 32s"
      },
      {
        "name": "Faceless Staff of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Stamina",
          "+22 Dodge",
          "+14 Defense"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 98s"
      },
      {
        "name": "Faceless Treads of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Attack Power",
          "+14 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 8s"
      },
      {
        "name": "Tentacled Loop of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina",
          "+22 Defense"
        ],
        "effect": "Equip: Increases your defense rating by 15.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 10s"
      },
      {
        "name": "Tentacled Spaulders of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 MP5"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 14s"
      },
      {
        "name": "Void-Touched Greatsword of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+33 Spirit",
          "+22 Healing Power",
          "+14 MP5"
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 13s"
      },
      {
        "name": "Void-Touched Defender of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Intellect",
          "+22 MP5"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 51s"
      },
      {
        "name": "Maddening Robes of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Defense",
          "+14 Dodge"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 23s"
      },
      {
        "name": "Maddening Blade of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+33 Stamina",
          "+22 Crit",
          "+14 Agility"
        ],
        "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 78s"
      },
      {
        "name": "Void-Touched Helm of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Crit",
          "+14 Strength"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 89s"
      },
      {
        "name": "Tentacled Band of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Spirit",
          "+22 MP5"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 2s"
      },
      {
        "name": "Faceless Blade of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+33 Stamina",
          "+22 Spell Crit",
          "+14 Spell Damage"
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 51s"
      },
      {
        "name": "Maddening Brooch of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 22s"
      },
      {
        "name": "Maddening Circlet of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+33 Intellect",
          "+22 Spirit",
          "+14 Spell Hit"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 43s"
      },
      {
        "name": "Maddening Greaves of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 MP5"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 19s"
      },
      {
        "name": "Tentacled Collar of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Agility",
          "+22 Hit",
          "+14 Crit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 67s"
      },
      {
        "name": "Maddening Treads of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Spell Hit",
          "+14 Spirit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 37s"
      },
      {
        "name": "Whispering Legguards of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Intellect",
          "+22 Spell Damage"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 36s"
      },
      {
        "name": "Maddening Greaves of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Intellect",
          "+22 Spell Crit",
          "+14 Spell Damage"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 27s"
      },
      {
        "name": "Faceless Bulwark of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina",
          "+22 Strength",
          "+14 Defense"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 56s"
      },
      {
        "name": "Faceless Bow of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+33 Stamina",
          "+22 Spell Crit",
          "+14 Healing Power"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 11s"
      },
      {
        "name": "Void-Touched Talisman of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 81s"
      },
      {
        "name": "Void-Touched Cuffs of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Strength",
          "+14 Hit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 59s"
      },
      {
        "name": "Maddening Shield of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Intellect",
          "+22 Healing Power"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 67s"
      },
      {
        "name": "Tentacled Medallion of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Spell Hit chance.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "12g 43s"
      },
      {
        "name": "Whispering Ring of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Agility",
          "+22 Hit",
          "+14 Intellect"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 21s"
      },
      {
        "name": "Void-Touched Wristguards of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 MP5"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 9s"
      },
      {
        "name": "Maddening Girdle of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+33 Stamina",
          "+22 MP5",
          "+14 Spell Crit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 34s"
      },
      {
        "name": "Maddening Gloves of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Defense",
          "+14 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 24s"
      },
      {
        "name": "Faceless Gavel of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+33 Intellect",
          "+22 Healing Power"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 39s"
      },
      {
        "name": "Whispering Pauldrons of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+33 Stamina",
          "+22 Attack Power",
          "+14 Hit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 24s"
      },
      {
        "name": "Faceless Brooch of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 48s"
      },
      {
        "name": "Tentacled Greaves of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Spell Crit",
          "+14 Spirit"
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 91s"
      },
      {
        "name": "Whispering Gavel of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+33 Intellect",
          "+22 MP5",
          "+14 Healing Power"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 54s"
      },
      {
        "name": "Maddening Gauntlets of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+33 Stamina",
          "+22 Hit",
          "+14 Crit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 19s"
      },
      {
        "name": "Tentacled Amice of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+33 Intellect",
          "+22 MP5",
          "+14 Healing Power"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 39s"
      },
      {
        "name": "Void-Touched Aegis of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina",
          "+22 Dodge",
          "+14 Defense"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 51s"
      },
      {
        "name": "Whispering Cord of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Spell Damage",
          "+14 Spell Hit"
        ],
        "effect": "Use: Teleports the caster 15 yards forward.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 19s"
      },
      {
        "name": "Tentacled Epaulets of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 Spirit",
          "+14 MP5"
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 43s"
      },
      {
        "name": "Tentacled Girdle of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Healing Power",
          "+14 MP5"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 5s"
      },
      {
        "name": "Faceless Amulet of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Strength",
          "+22 Defense"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "12g 24s"
      },
      {
        "name": "Void-Touched Necklace of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Intellect",
          "+22 MP5",
          "+14 Healing Power"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 43s"
      },
      {
        "name": "Faceless Pauldrons of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Hit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "12g 44s"
      },
      {
        "name": "Whispering Pauldrons of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+33 Stamina",
          "+22 Intellect",
          "+14 Crit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "12g 38s"
      },
      {
        "name": "Faceless Epaulets of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 Spell Damage",
          "+14 Spell Crit"
        ],
        "effect": "Chance on hit: Blinds the target, disorienting them for 3 sec.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 63s"
      },
      {
        "name": "Void-Touched Cord of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+33 Stamina",
          "+22 Spell Crit",
          "+14 Spell Hit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 42s"
      },
      {
        "name": "Void-Touched Buckler of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina",
          "+22 Armor"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 45s"
      },
      {
        "name": "Whispering Loop of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Intellect",
          "+22 Healing Power",
          "+14 Spell Crit"
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 23s"
      },
      {
        "name": "Faceless Bow of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Stamina",
          "+22 Dodge",
          "+14 Strength"
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "12g 86s"
      },
      {
        "name": "Void-Touched Relic of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Maddening Treads of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Spell Damage",
          "+14 Spell Hit"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 42s"
      },
      {
        "name": "Maddening Legguards of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+33 Stamina",
          "+22 Healing Power"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 31s"
      },
      {
        "name": "Whispering Slippers of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Crit",
          "+14 Agility"
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 93s"
      },
      {
        "name": "Faceless Necklace of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Agility",
          "+22 Hit",
          "+14 Crit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "12g 23s"
      },
      {
        "name": "Faceless Cowl of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Spirit",
          "+14 MP5"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 9s"
      },
      {
        "name": "Whispering Vest of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Spell Damage",
          "+14 Spirit"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 17s"
      },
      {
        "name": "Maddening Charm of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Spell Critical Strike.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Tentacled Seal of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina",
          "+22 Spell Damage",
          "+14 Spell Crit"
        ],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 60s"
      },
      {
        "name": "Void-Touched Bow of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Agility",
          "+22 Strength",
          "+14 Dodge"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "12g 78s"
      },
      {
        "name": "Void-Touched Staff of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+33 Stamina",
          "+22 Spell Damage",
          "+14 Spell Crit"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "14g 3s"
      },
      {
        "name": "Maddening Cord of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Defense"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Aspect Council",
        "requiresLevel": 60,
        "sellPrice": "13g 31s"
      }
    ]
  }
]
};
