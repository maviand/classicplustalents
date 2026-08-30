export const PVE_CATS = {
  DUNGEONS: 'The New Dungeons (Winged Hubs)',
  RAIDS: 'Dedicated Raid Tiers (10 / 20 / 40 Man Formats)'
};

export const pveData = {
  [PVE_CATS.DUNGEONS]: [
  {
    "id": "StormwindVault",
    "name": "Stormwind Vaults",
    "loreHistory": "Hidden deep beneath the canals of Stormwind, this maximum-security prison houses the kingdom's most dangerous defected nobles, rogue sorcerers, and Defias leaders.",
    "strategyGuide": "Crowd control is vital. The tight subterranean corridors mean pulling multiple packs is fatal. Utilize corner pulls to break line of sight on Defias marksmen.",
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
    "speedrunStrats": "A Rogue with high Lockpicking can open the sewer sluice gate, bypassing the outer cellblocks directly to Dextren Ward.",
    "environmentalHazards": "Triggering alarm bells summons guard reinforcements until a player channels on the bell lever for 5 seconds.",
    "secrets": [
      "A hidden stone tunnel behind a cracked cell wall leads back to the Stockades.",
      "Pickpocketing the Head Jailer yields the Vault Sewer Key."
    ],
    "wings": [
      {
        "name": "The Upper Brig",
        "level": "25-30 (5 Man)",
        "desc": "The medium security holding cells.",
        "bosses": [
          "Warden Thelwater",
          "Targorr the Dread"
        ],
        "loot": [
          {
            "name": "Tempered Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+6 Stamina",
              "Equip: Restores 2 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 64s"
          },
          {
            "name": "Stalwart Breastplate of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+8 Spirit",
              "Equip: Increases healing power by up to 13."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 47s"
          },
          {
            "name": "Shimmering Vambraces of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+6 Agility",
              "+5 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 72s"
          },
          {
            "name": "Runed Vest of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+8 Strength",
              "Equip: Increases attack power by up to 13."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 75s"
          },
          {
            "name": "Noble Greaves of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+8 Agility",
              "Equip: Increases attack power by up to 13."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "3g 70s"
          },
          {
            "name": "Savage Tunic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+7 Stamina",
              "+3 Stamina"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 12s"
          },
          {
            "name": "Tempered Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+6 Agility",
              "+4 Stamina",
              "+5 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 80s"
          },
          {
            "name": "Noble Shield of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+6 Stamina",
              "+5 Intellect",
              "+5 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 93s"
          },
          {
            "name": "Shimmering Bulwark of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+8 Spirit",
              "+5 Stamina",
              "Equip: Restores 2 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 24s"
          },
          {
            "name": "Holy Amulet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+8 Spirit",
              "Equip: Restores 2 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 56s"
          }
        ]
      },
      {
        "name": "The Deep Cellblocks",
        "level": "45-50 (5 Man)",
        "desc": "Where the kingdom's true enemies are locked away.",
        "bosses": [
          "High Cultist Zenn",
          "Dextren Ward"
        ],
        "loot": [
          {
            "name": "Stalwart Loop of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 90s"
          },
          {
            "name": "Crystalline Helm of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+14 Agility",
              "Equip: Increases attack power by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 77s"
          },
          {
            "name": "Crystalline Seal of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Stamina",
              "Equip: Increases attack power by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 48s"
          },
          {
            "name": "Stalwart Cowl of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+14 Strength",
              "+10 Stamina",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 58s"
          },
          {
            "name": "Tempered Cowl of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+12 Intellect",
              "+10 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 37s"
          },
          {
            "name": "Tempered Aegis of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Intellect",
              "+9 Stamina",
              "Equip: Increases healing power by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 75s"
          },
          {
            "name": "Blood-Forged Bow of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+12 Stamina",
              "+10 Agility",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 70s"
          },
          {
            "name": "Holy Gloves of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+13 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 81s"
          },
          {
            "name": "Shadow Dagger of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+14 Intellect",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 44s"
          },
          {
            "name": "Noble Loop of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Intellect",
              "+10 Stamina",
              "Equip: Increases spell damage by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 64s"
          },
          {
            "name": "Tempered Gavel of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+13 Intellect",
              "+9 Stamina",
              "Equip: Increases healing power by up to 22."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 84s"
          },
          {
            "name": "Crystalline Bow of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+13 Strength",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 31s"
          },
          {
            "name": "Tempered Bulwark of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Intellect",
              "+10 Stamina",
              "+8 Spirit"
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "6g 62s"
          },
          {
            "name": "Runed Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+14 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 40s"
          },
          {
            "name": "Shimmering Signet of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Intellect",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 81s"
          }
        ]
      },
      {
        "name": "The Interrogation Levels",
        "level": "55-60 (5 Man)",
        "desc": "Dark interrogation vaults beneath the canal bedrock.",
        "bosses": [
          "Interrogator Vishas",
          "The Flesh-Shaper"
        ],
        "loot": [
          {
            "name": "Holy Wristguards of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+17 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Stalwart Seal of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Agility",
              "+11 Stamina",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Blood-Forged Gauntlets of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+11 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "An heirloom passed down through generations of frontier champions.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 36s"
          },
          {
            "name": "Noble Medallion of Ancient Valor",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 72s"
          },
          {
            "name": "Stalwart Breastplate of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+12 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Shadow Amulet of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Blood-Forged Mask of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Noble Axe of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "+12 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 90s"
          },
          {
            "name": "Savage Treads of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+12 Intellect",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Holy Necklace of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Strength",
              "+12 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 83s"
          },
          {
            "name": "Venerable Wristguards of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Blood-Forged Vambraces of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "+11 Stamina",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Blood-Forged Charm of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Savage Aegis of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Stamina",
              "+12 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Crystalline Waistguard of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Savage Bracers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Savage Greathelm of the Just",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+16 Intellect",
              "+11 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 78s"
          },
          {
            "name": "Shadow Cowl of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "+12 Stamina",
              "+10 Armor"
            ],
            "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
            "flavorText": "An heirloom passed down through generations of frontier champions.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 69s"
          },
          {
            "name": "Ancient Aegis of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect",
              "+11 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Blood-Forged Crown of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+16 Agility",
              "+10 Intellect"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Shimmering Sabatons of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Spirit",
              "+11 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Shadow Greathelm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Savage Staff of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Ancient Pendant of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Blood-Forged Signet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Strength",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 16s"
          }
        ]
      }
    ]
  },
  {
    "id": "KarazhanCrypts",
    "name": "Karazhan Crypts",
    "loreHistory": "The dark, forgotten underbelly of Medivh's tower in Deadwind Pass. These crypts hold the restless spirits of those consumed by the tower's volatile spatial anomalies.",
    "strategyGuide": "Shadow Resistance and dispels are vital. Dispel \"Suffocating Dread\" promptly and avoid the central well vortex in the Slumbering Graves.",
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
    "speedrunStrats": "Warlocks can use Eye of Kilrogg to scout portcullis lever switches and coordinate fast group gate openings.",
    "environmentalHazards": "Unlit chambers require players to carry physical torches or ignite braziers to avoid being ambushed in darkness.",
    "secrets": [
      "An ancient library grimoire grants the party +10 Shadow Resistance for the duration of the run.",
      "A neutral ghost merchant offers unique tailoring patterns."
    ],
    "wings": [
      {
        "name": "The Well of the Forgotten",
        "level": "58-60 (5 Man)",
        "desc": "The submerged ossuary vaults.",
        "bosses": [
          "The Caretaker",
          "Amalgam of the Damned"
        ],
        "loot": [
          {
            "name": "Holy Band of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Shimmering Shield of the Vanguard",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "Worn by those who stood unbroken against the storm.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 18s"
          },
          {
            "name": "Tempered Tunic of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+11 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Crystalline Charm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Crystalline Tunic of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+17 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "An heirloom passed down through generations of frontier champions.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 74s"
          },
          {
            "name": "Noble Greatsword of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Strength",
              "+11 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Holy Cowl of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "+11 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 44s"
          },
          {
            "name": "Tempered Loop of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Crystalline Relic of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "Imbued with the stoic resilience of the old world.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 69s"
          },
          {
            "name": "Noble Bow of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Noble Bindings of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 21s"
          },
          {
            "name": "Savage Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+16 Stamina",
              "+11 Agility",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Shimmering Harness of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 77s"
          },
          {
            "name": "Shimmering Gavel of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+12 Strength",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "An heirloom passed down through generations of frontier champions.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 11s"
          },
          {
            "name": "Savage Defender of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+12 Spirit",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Holy Bow of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 40s"
          },
          {
            "name": "Shadow Axe of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+12 Agility",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Runed Amice of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 93s"
          },
          {
            "name": "Stalwart Axe of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Improves your chance to hit by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Tempered Sabatons of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+12 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 44s"
          },
          {
            "name": "Tempered Circlet of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Stalwart Circlet of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 67s"
          },
          {
            "name": "Blood-Forged Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Shadow Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Intellect",
              "+11 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Tempered Slippers of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+12 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 61s"
          }
        ]
      },
      {
        "name": "The Upside-Down Sinners",
        "level": "60 (5 Man)",
        "desc": "The iconic submerged horror chambers.",
        "bosses": [
          "The Drowning Terror",
          "Master of the Sinners"
        ],
        "loot": [
          {
            "name": "Venerable Gloves of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Stalwart Legguards of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+11 Strength",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 37s"
          },
          {
            "name": "Crystalline Sash of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Shadow Staff of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+16 Stamina",
              "+12 Strength",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Stalwart Bow of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+15 Stamina",
              "+12 Strength",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Venerable Charm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Venerable Sabatons of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 76s"
          },
          {
            "name": "Stalwart Vambraces of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+11 Agility",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Ancient Relic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 54s"
          },
          {
            "name": "Shadow Girdle of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+11 Strength",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Savage Boots of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "+12 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Noble Seal of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 36s"
          },
          {
            "name": "Venerable Defender of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Intellect",
              "+11 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Runed Grips of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "+12 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Savage Boots of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Crystalline Blade of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Shimmering Bulwark of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Intellect",
              "+11 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Shadow Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Crystalline Mantle of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+12 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Stalwart Cowl of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+12 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Runed Vambraces of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+12 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 90s"
          },
          {
            "name": "Venerable Brooch of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 61s"
          },
          {
            "name": "Venerable Greaves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Holy Grips of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Spirit",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 41s"
          },
          {
            "name": "Noble Greatsword of the Vanguard",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+15 Agility",
              "+12 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "An heirloom passed down through generations of frontier champions.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 51s"
          },
          {
            "name": "Venerable Loop of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 89s"
          },
          {
            "name": "Shimmering Blade of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Intellect",
              "+11 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 70s"
          },
          {
            "name": "Shadow Greatsword of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Agility",
              "+12 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 21s"
          },
          {
            "name": "Runed Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Runed Hauberk of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          }
        ]
      },
      {
        "name": "The Reliquary of Secrets",
        "level": "60 (5 Man)",
        "desc": "Forbidden arcane vaults beneath Deadwind.",
        "bosses": [
          "The Animated Grimoire",
          "The Void-Sealer"
        ],
        "loot": [
          {
            "name": "Holy Greathelm of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+11 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Savage Brooch of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Shimmering Blade of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Shadow Axe of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 71s"
          },
          {
            "name": "Shimmering Slippers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Noble Handguards of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+16 Intellect",
              "+11 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 26s"
          },
          {
            "name": "Shadow Leggings of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "+12 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 22s"
          },
          {
            "name": "Holy Pendant of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Crystalline Bulwark of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "Worn by those who stood unbroken against the storm.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 72s"
          },
          {
            "name": "Holy Seal of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+12 Spirit",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Crystalline Collar of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina",
              "+10 Armor"
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 60s"
          },
          {
            "name": "Stalwart Dagger of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Stalwart Dagger of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Crystalline Brooch of Ancient Valor",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 85s"
          },
          {
            "name": "Ancient Bow of Ancient Valor",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina",
              "+11 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "An heirloom passed down through generations of frontier champions.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 16s"
          },
          {
            "name": "Blood-Forged Greatsword of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Agility",
              "+12 Stamina",
              "+10 Intellect"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Shadow Ring of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Spirit",
              "+12 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Holy Grips of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 46s"
          },
          {
            "name": "Savage Pants of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Stalwart Belt of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+12 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Stalwart Defender of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect",
              "+11 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Crystalline Kilt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Crystalline Loop of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength",
              "+11 Stamina",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Noble Mitts of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+12 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Blood-Forged Sash of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+17 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Crystalline Relic of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 83s"
          },
          {
            "name": "Ancient Footpads of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 34s"
          },
          {
            "name": "Crystalline Dagger of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Blood-Forged Bulwark of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Strength",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "Equip: Increases threat generated by all attacks by 4%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 54s"
          },
          {
            "name": "Stalwart Buckler of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Intellect",
              "+12 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 76s"
          }
        ]
      }
    ]
  },
  {
    "id": "TimbermawHold",
    "name": "Timbermaw Hold (Burrows)",
    "loreHistory": "Once a sanctuary for uncorrupted furbolgs in northern Kalimdor, demonic corruption from Felwood has seeped into the lower burrows, driving the elder chieftains mad.",
    "strategyGuide": "Cleanse corrupted totems in boss chambers before engaging, or the chieftains gain a stacking berserk enrage.",
    "trashMobs": [
      "Fel-Crazed Furbolg",
      "Corrupted Ancient",
      "Legion Vanguard",
      "Shadow-Weaver"
    ],
    "associatedQuests": [
      "Purging the Hold",
      "The Chieftain's Fall",
      "A Debt Repaid to Timbermaw"
    ],
    "speedrunStrats": "Having Honored standing with Timbermaw Hold allows peaceful passage through the upper tunnels directly to the lower barrows.",
    "environmentalHazards": "Puddles of fel sludge apply a stacking nature damage aura to players standing in them.",
    "secrets": [
      "A hidden path behind an underground waterfall leads to a neutral shaman offering unique nature resistance enchants."
    ],
    "wings": [
      {
        "name": "The Corrupted Warrens",
        "level": "48-52 (5 Man)",
        "desc": "Besieged furbolg tunnels.",
        "bosses": [
          "Chieftain Bloodmaw",
          "The Rotting Ancient"
        ],
        "loot": [
          {
            "name": "Noble Gloves of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+8 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Shimmering Bulwark of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Intellect",
              "+10 Spirit",
              "Equip: Increases healing power by up to 23."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 49s"
          },
          {
            "name": "Tempered Amulet of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Agility",
              "+9 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "6g 82s"
          },
          {
            "name": "Holy Waistguard of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+8 Spirit"
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 19s"
          },
          {
            "name": "Shimmering Bracers of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+14 Stamina",
              "Equip: Increases spell damage by up to 23."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 71s"
          },
          {
            "name": "Runed Mantle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "Equip: Increases attack power by up to 23."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 67s"
          },
          {
            "name": "Ancient Bindings of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "Equip: Increases spell damage by up to 23."
            ],
            "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "6g 10s"
          },
          {
            "name": "Crystalline Gavel of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+13 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 34s"
          },
          {
            "name": "Noble Bracers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+14 Agility",
              "+9 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 64s"
          },
          {
            "name": "Venerable Greathelm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+13 Stamina",
              "+9 Strength",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 21s"
          },
          {
            "name": "Blood-Forged Greatsword of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+13 Intellect",
              "+10 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 46s"
          },
          {
            "name": "Stalwart Talisman of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 43s"
          },
          {
            "name": "Shimmering Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+13 Intellect",
              "+10 Stamina",
              "Equip: Increases spell damage by up to 23."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 68s"
          },
          {
            "name": "Runed Band of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Stamina",
              "+10 Agility",
              "+8 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 53s"
          },
          {
            "name": "Venerable Robes of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 57s"
          }
        ]
      },
      {
        "name": "The Fel-Scar Deeps",
        "level": "55-58 (5 Man)",
        "desc": "Demonic incursion chamber.",
        "bosses": [
          "Xandros the Fel-Lord",
          "The Summoning Portal"
        ],
        "loot": [
          {
            "name": "Ancient Kilt of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Improves your chance to hit by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 37s"
          },
          {
            "name": "Noble Epaulets of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
            "flavorText": "Forged in the heart of an ancient dwarven caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 29s"
          },
          {
            "name": "Blood-Forged Spaulders of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+11 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 13s"
          },
          {
            "name": "Blood-Forged Mantle of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+10 Stamina",
              "+9 Spirit"
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 10s"
          },
          {
            "name": "Savage Waistguard of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+14 Stamina",
              "+11 Agility",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 11s"
          },
          {
            "name": "Ancient Pauldrons of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "Worn by those who stood unbroken against the storm.",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 84s"
          },
          {
            "name": "Runed Staff of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+15 Stamina",
              "+9 Intellect"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 82s"
          },
          {
            "name": "Shadow Choker of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Intellect",
              "+10 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 50s"
          },
          {
            "name": "Ancient Bow of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+14 Intellect",
              "+11 Stamina",
              "Equip: Increases spell damage by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 64s"
          },
          {
            "name": "Stalwart Handguards of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+14 Intellect",
              "+11 Stamina",
              "Equip: Increases spell damage by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 59s"
          },
          {
            "name": "Crystalline Shield of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+11 Strength",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Equip: Increases threat generated by all attacks by 4%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 93s"
          },
          {
            "name": "Noble Bracers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Intellect",
              "+10 Stamina",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 77s"
          },
          {
            "name": "Stalwart Waistguard of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 52s"
          },
          {
            "name": "Shadow Defender of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+10 Agility",
              "+9 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Savage Boots of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+14 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 14s"
          },
          {
            "name": "Shimmering Circlet of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+14 Stamina",
              "+10 Intellect",
              "Equip: Increases healing power by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 32s"
          },
          {
            "name": "Shimmering Blade of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Stamina",
              "+10 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "Forged in the heart of an ancient dwarven caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 61s"
          },
          {
            "name": "Noble Bindings of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+14 Agility",
              "+10 Stamina",
              "Equip: Increases attack power by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 21s"
          },
          {
            "name": "Shimmering Choker of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Intellect",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Shadow Blade of the Just",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+14 Intellect",
              "+10 Stamina",
              "Equip: Increases healing power by up to 26."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 89s"
          }
        ]
      },
      {
        "name": "The Ancestral Hollow",
        "level": "60 (5 Man)",
        "desc": "Defiled sacred burial grounds.",
        "bosses": [
          "The First Chieftain",
          "The Defiler"
        ],
        "loot": [
          {
            "name": "Crystalline Sash of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Ancient Waistguard of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Noble Axe of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Stamina",
              "+12 Agility",
              "+10 Armor"
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "It hums with a deep, tranquil resonance.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 51s"
          },
          {
            "name": "Stalwart Buckler of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Intellect",
              "+11 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Stalwart Blade of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Shadow Mitts of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+11 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 33s"
          },
          {
            "name": "Stalwart Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Stamina",
              "+10 Armor"
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Savage Cuffs of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 80s"
          },
          {
            "name": "Holy Necklace of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "+11 Strength",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 93s"
          },
          {
            "name": "Shimmering Seal of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Runed Choker of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 86s"
          },
          {
            "name": "Holy Staff of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+17 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Improves your chance to hit by 1%.",
            "flavorText": "Worn by those who stood unbroken against the storm.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 48s"
          },
          {
            "name": "Venerable Choker of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Strength",
              "+11 Stamina",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "Equip: Increases threat generated by all attacks by 4%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Shadow Cowl of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Holy Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+12 Spirit",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Blood-Forged Mitts of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+11 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Shimmering Relic of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Crystalline Amice of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+11 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 18s"
          },
          {
            "name": "Shimmering Boots of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+12 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 22s"
          },
          {
            "name": "Holy Greatsword of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+16 Strength",
              "+11 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Blood-Forged Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Shadow Dagger of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 46s"
          },
          {
            "name": "Blood-Forged Loop of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "+11 Strength",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 11s"
          },
          {
            "name": "Shimmering Gauntlets of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+12 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Holy Bracers of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: Increases threat generated by all attacks by 4%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Noble Pendant of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "It hums with a deep, tranquil resonance.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 35s"
          },
          {
            "name": "Noble Leggings of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "+11 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 77s"
          },
          {
            "name": "Holy Grips of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+11 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Noble Staff of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+15 Stamina",
              "+12 Strength",
              "+10 Agility"
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Blood-Forged Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Strength",
              "+11 Stamina",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          }
        ]
      }
    ]
  },
  {
    "id": "UldumVaults",
    "name": "The Vaults of Uldum",
    "loreHistory": "An ancient Titan research biosphere buried beneath the sands of southern Kalimdor. It houses the Engine of Origination and safeguarding custodians.",
    "strategyGuide": "Interrupt Earthen Constructs during \"Stone Barrier\" casting, and coordinate dispel timing on Titan Disruption debuffs.",
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
    "speedrunStrats": "Solving the constellation puzzle console in under 2 minutes opens a shortcut directly to the final inner vault.",
    "environmentalHazards": "Titan security beams sweep across the obsidian corridors; touching them activates defensive sentinels.",
    "secrets": [
      "An ancient titan databank disc reveals deep historical lore about the ordering of Kalimdor."
    ],
    "wings": [
      {
        "name": "The Maker's Terrace",
        "level": "55-58 (5 Man)",
        "desc": "The titan entrance biosphere.",
        "bosses": [
          "High-Executor Norgannon",
          "Matrix-Lord"
        ],
        "loot": [
          {
            "name": "Savage Staff of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+16 Intellect",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 69s"
          },
          {
            "name": "Venerable Axe of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+14 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 24s"
          },
          {
            "name": "Stalwart Greathelm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+10 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 75s"
          },
          {
            "name": "Savage Cord of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "Equip: Increases attack power by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 17s"
          },
          {
            "name": "Crystalline Greatsword of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+16 Stamina",
              "+11 Agility",
              "+9 Strength"
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 31s"
          },
          {
            "name": "Blood-Forged Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Agility",
              "+9 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 85s"
          },
          {
            "name": "Noble Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+14 Stamina",
              "+10 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Blood-Forged Mask of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+15 Intellect",
              "+11 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 61s"
          },
          {
            "name": "Noble Gavel of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+11 Strength",
              "Equip: Increases attack power by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 59s"
          },
          {
            "name": "Savage Footpads of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "+10 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "Worn by those who stood unbroken against the storm.",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 19s"
          },
          {
            "name": "Savage Buckler of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+10 Intellect",
              "Equip: Increases healing power by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 28s"
          },
          {
            "name": "Holy Vambraces of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 36s"
          },
          {
            "name": "Holy Staff of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 64s"
          },
          {
            "name": "Blood-Forged Handguards of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Improves your chance to hit by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 33s"
          },
          {
            "name": "Tempered Staff of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+10 Strength",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 48s"
          },
          {
            "name": "Venerable Bindings of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+14 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 66s"
          },
          {
            "name": "Noble Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+14 Stamina",
              "Equip: Increases spell damage by up to 26."
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 58s"
          },
          {
            "name": "Shadow Amice of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 64s"
          },
          {
            "name": "Holy Relic of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 34s"
          },
          {
            "name": "Ancient Mitts of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+10 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 88s"
          }
        ]
      },
      {
        "name": "The Obsidian Quarry",
        "level": "58-60 (5 Man)",
        "desc": "Construct manufacturing chambers.",
        "bosses": [
          "The Sculptor",
          "The Hive-Mind Incursor"
        ],
        "loot": [
          {
            "name": "Holy Greaves of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "Imbued with the stoic resilience of the old world.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 13s"
          },
          {
            "name": "Crystalline Medallion of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Savage Greatsword of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+12 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 27s"
          },
          {
            "name": "Noble Bulwark of the Just",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+12 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 90s"
          },
          {
            "name": "Holy Brooch of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Holy Ring of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Intellect",
              "+11 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Shadow Collar of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Agility",
              "+11 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Runed Blade of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
            "flavorText": "Worn by those who stood unbroken against the storm.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 83s"
          },
          {
            "name": "Ancient Amice of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Noble Belt of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+11 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Tempered Hauberk of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Crystalline Harness of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 83s"
          },
          {
            "name": "Stalwart Amulet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 18s"
          },
          {
            "name": "Savage Tunic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Shimmering Crown of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Stalwart Medallion of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Ancient Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Stalwart Relic of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Venerable Axe of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 19s"
          },
          {
            "name": "Tempered Circlet of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Tempered Gavel of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Agility",
              "+12 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Shimmering Gavel of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Agility",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Savage Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Tempered Bindings of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "Forged in the heart of an ancient dwarven caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 68s"
          },
          {
            "name": "Tempered Dagger of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Agility",
              "+10 Intellect"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          }
        ]
      },
      {
        "name": "The Engine of Origination",
        "level": "60 (5 Man)",
        "desc": "The core titan re-origination matrix.",
        "bosses": [
          "General Rajaxx's Vanguard",
          "Avatar of the Makers"
        ],
        "loot": [
          {
            "name": "Shadow Defender of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Stamina",
              "+12 Strength",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Equip: Increases threat generated by all attacks by 4%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Stalwart Pants of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Shadow Talisman of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Improves your chance to hit by 1%.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 19s"
          },
          {
            "name": "Ancient Cuffs of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 80s"
          },
          {
            "name": "Blood-Forged Loop of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+12 Strength",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Ancient Wristguards of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 28s"
          },
          {
            "name": "Crystalline Boots of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 42s"
          },
          {
            "name": "Blood-Forged Bindings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+17 Intellect",
              "+11 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Runed Greatsword of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Agility",
              "+11 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 21s"
          },
          {
            "name": "Savage Bulwark of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 36s"
          },
          {
            "name": "Crystalline Greathelm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 72s"
          },
          {
            "name": "Savage Talisman of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Blood-Forged Greatsword of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 83s"
          },
          {
            "name": "Blood-Forged Aegis of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Strength",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Holy Tunic of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+17 Intellect",
              "+11 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 82s"
          },
          {
            "name": "Shimmering Greaves of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "+12 Strength",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 46s"
          },
          {
            "name": "Holy Medallion of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Holy Robes of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "+12 Strength",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Blood-Forged Pants of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+16 Agility",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Stalwart Charm of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Crystalline Charm of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 67s"
          },
          {
            "name": "Runed Vambraces of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 50s"
          },
          {
            "name": "Blood-Forged Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Stamina",
              "+10 Armor"
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Blood-Forged Epaulets of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "+12 Stamina",
              "+10 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Tempered Belt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Ancient Grips of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+11 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Stalwart Gavel of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Stamina",
              "+12 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Tempered Mitts of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+11 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Holy Shield of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 13s"
          },
          {
            "name": "Ancient Treads of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+11 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 90s"
          },
          {
            "name": "Crystalline Epaulets of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 25s"
          },
          {
            "name": "Shimmering Sash of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Spirit",
              "+12 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 54s"
          },
          {
            "name": "Stalwart Circlet of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 46s"
          },
          {
            "name": "Savage Gavel of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect",
              "+11 Stamina",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 79s"
          },
          {
            "name": "Holy Gavel of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "+12 Agility",
              "+10 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          }
        ]
      }
    ]
  },
  {
    "id": "GrimBatol",
    "name": "Grim Batol Tunnels",
    "loreHistory": "The ancient mountain fortress of the Wildhammer dwarves, later occupied by the Dragonmaw Clan to enslave the Red Dragonflight.",
    "strategyGuide": "Kite Molten Elementals away from Dragonmaw handlers; manage fire resistance on forge encounters.",
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
    "speedrunStrats": "Engineers can repair a broken minecart to ride through the lower ore tunnels, skipping several trash packs.",
    "environmentalHazards": "Searing magma vents periodically erupt, forcing careful positioning.",
    "secrets": [
      "A secret Wildhammer rune chest requires two players to step on coordinated floor runes."
    ],
    "wings": [
      {
        "name": "The Dragonmaw Gates",
        "level": "52-55 (5 Man)",
        "desc": "The fortified mountain gates.",
        "bosses": [
          "The Siege Master",
          "Dragonmaw Proto-Drake"
        ],
        "loot": [
          {
            "name": "Noble Buckler of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 12s"
          },
          {
            "name": "Venerable Axe of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+13 Stamina",
              "+10 Strength",
              "+9 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 12s"
          },
          {
            "name": "Crystalline Kilt of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+13 Intellect",
              "+9 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 67s"
          },
          {
            "name": "Blood-Forged Legguards of the Vanguard",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "Equip: Increases defense rating by 6."
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Shimmering Gauntlets of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Noble Bow of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+14 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 18s"
          },
          {
            "name": "Blood-Forged Waistguard of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+13 Stamina",
              "+9 Intellect",
              "Equip: Increases healing power by up to 24."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 89s"
          },
          {
            "name": "Runed Shield of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 59s"
          },
          {
            "name": "Runed Belt of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+13 Stamina",
              "+9 Strength",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 36s"
          },
          {
            "name": "Venerable Breastplate of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+14 Intellect",
              "+10 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 30s"
          },
          {
            "name": "Runed Shield of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Stamina",
              "Equip: Increases healing power by up to 24."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 32s"
          },
          {
            "name": "Shadow Spaulders of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+9 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 26s"
          },
          {
            "name": "Noble Charm of the Just",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Shimmering Dagger of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+14 Agility",
              "+9 Armor"
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 72s"
          },
          {
            "name": "Venerable Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+14 Agility",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 82s"
          }
        ]
      },
      {
        "name": "The Hatcheries",
        "level": "55-58 (5 Man)",
        "desc": "Red dragonflight breeding caverns.",
        "bosses": [
          "The Broodmother",
          "The Corrupted Whelp-Master"
        ],
        "loot": [
          {
            "name": "Holy Gauntlets of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Spirit",
              "+10 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 26s"
          },
          {
            "name": "Ancient Pants of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "Equip: Increases spell damage by up to 26."
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 19s"
          },
          {
            "name": "Blood-Forged Signet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "Equip: Increases spell damage by up to 26."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 81s"
          },
          {
            "name": "Runed Treads of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+9 Armor"
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 90s"
          },
          {
            "name": "Crystalline Axe of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect",
              "Equip: Increases healing power by up to 26."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 23s"
          },
          {
            "name": "Holy Necklace of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 19s"
          },
          {
            "name": "Blood-Forged Circlet of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 59s"
          },
          {
            "name": "Shadow Loop of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+11 Agility",
              "Equip: Increases attack power by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Venerable Pauldrons of the Just",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+14 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 30s"
          },
          {
            "name": "Savage Helm of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+16 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 24s"
          },
          {
            "name": "Shadow Band of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect",
              "+9 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 35s"
          },
          {
            "name": "Runed Shield of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Stamina",
              "+10 Intellect",
              "Equip: Increases healing power by up to 26."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Stalwart Wristguards of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Intellect",
              "+11 Stamina",
              "+9 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Crystalline Spaulders of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "+11 Stamina",
              "+9 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 25s"
          },
          {
            "name": "Holy Talisman of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 44s"
          },
          {
            "name": "Shadow Leggings of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 36s"
          },
          {
            "name": "Venerable Boots of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "+9 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 58s"
          },
          {
            "name": "Tempered Tunic of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+14 Stamina",
              "+10 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Stalwart Leggings of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+14 Agility",
              "+11 Stamina",
              "+9 Strength"
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 28s"
          },
          {
            "name": "Crystalline Loop of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "+10 Intellect",
              "Equip: Increases healing power by up to 26."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 16s"
          }
        ]
      },
      {
        "name": "The Deep Forge",
        "level": "60 (5 Man)",
        "desc": "Ancient Wildhammer master forges.",
        "bosses": [
          "The Grand Smith",
          "The Anvil of Doom"
        ],
        "loot": [
          {
            "name": "Runed Helm of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+17 Intellect",
              "+11 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 62s"
          },
          {
            "name": "Shadow Amice of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Ancient Collar of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "+11 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 75s"
          },
          {
            "name": "Venerable Girdle of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Shimmering Slippers of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "+12 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Crystalline Tunic of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "+11 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Runed Legguards of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Noble Girdle of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+12 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Blood-Forged Waistguard of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Crystalline Choker of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "Forged in the heart of an ancient dwarven caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 42s"
          },
          {
            "name": "Savage Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Strength",
              "+11 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Holy Circlet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+12 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Blood-Forged Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Blood-Forged Bulwark of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Strength",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Equip: Increases defense rating by 8.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Venerable Loop of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Agility",
              "+12 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 57s"
          },
          {
            "name": "Runed Handguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Stalwart Grips of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+17 Spirit",
              "+11 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Tempered Bow of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Stamina",
              "+12 Spirit",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Holy Necklace of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Tempered Girdle of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Holy Greatsword of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Stalwart Pants of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+11 Agility",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Savage Treads of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+12 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Savage Blade of the Vanguard",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "Imbued with the stoic resilience of the old world.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 79s"
          },
          {
            "name": "Blood-Forged Boots of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+16 Intellect",
              "+11 Stamina",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Venerable Kilt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "+11 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Equip: Increases threat generated by all attacks by 4%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 90s"
          },
          {
            "name": "Tempered Vest of Ancient Valor",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 60s"
          },
          {
            "name": "Noble Boots of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "It hums with a deep, tranquil resonance.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 40s"
          },
          {
            "name": "Noble Cord of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 60s"
          },
          {
            "name": "Shimmering Slippers of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "+11 Stamina",
              "+10 Strength"
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 56s"
          }
        ]
      }
    ]
  },
  {
    "id": "HyjalBarrowDens",
    "name": "The Barrow Dens (Hyjal)",
    "loreHistory": "The sacred hibernation chambers of the druids in Mount Hyjal where the Emerald Nightmare has begun seeping through Nordrassil's roots.",
    "strategyGuide": "Dispel \"Slumbering Poison\" before it puts healers or tanks to sleep for extended durations.",
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
    "speedrunStrats": "Druids in the party can use Hibernate on elite Nightmare Terrors to bypass difficult choke pulls.",
    "environmentalHazards": "Pockets of nightmare mist drain mana and cause minor vision distortion.",
    "secrets": [
      "Awakening an ancient sleeping druid grants the party a 1-hour spirit blessing."
    ],
    "wings": [
      {
        "name": "The Slumbering Halls",
        "level": "58-60 (5 Man)",
        "desc": "Corrupted sleeping chambers.",
        "bosses": [
          "The Nightmare Stalker",
          "The Waking Terror"
        ],
        "loot": [
          {
            "name": "Shimmering Waistguard of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+12 Stamina",
              "+10 Agility"
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "Worn by those who stood unbroken against the storm.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 38s"
          },
          {
            "name": "Venerable Collar of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Agility",
              "+11 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Savage Buckler of the Vanguard",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Intellect",
              "+11 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "An heirloom passed down through generations of frontier champions.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 28s"
          },
          {
            "name": "Tempered Necklace of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+12 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Savage Amulet of the Vanguard",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "+11 Strength",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "Forged in the heart of an ancient dwarven caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 14s"
          },
          {
            "name": "Tempered Handguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Blood-Forged Bow of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 94s"
          },
          {
            "name": "Ancient Pendant of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Intellect",
              "+12 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Runed Bulwark of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Stalwart Staff of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+15 Agility",
              "+10 Intellect"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 39s"
          },
          {
            "name": "Blood-Forged Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: Increases threat generated by all attacks by 4%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Crystalline Crown of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Ancient Loop of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Stalwart Blade of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Intellect",
              "+12 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "Worn by those who stood unbroken against the storm.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 26s"
          },
          {
            "name": "Noble Dagger of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Savage Dagger of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+16 Strength",
              "+11 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Holy Bracers of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
            "flavorText": "It hums with a deep, tranquil resonance.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 92s"
          },
          {
            "name": "Runed Relic of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Shimmering Vambraces of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+12 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 62s"
          },
          {
            "name": "Stalwart Boots of the Sun",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+10 Armor"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 33s"
          },
          {
            "name": "Runed Mitts of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Holy Grips of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+11 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 11s"
          },
          {
            "name": "Savage Aegis of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect",
              "+12 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Holy Defender of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Stamina",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "Forged in the heart of an ancient dwarven caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 53s"
          },
          {
            "name": "Crystalline Amulet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 30s"
          }
        ]
      },
      {
        "name": "The Roots of Nordrassil",
        "level": "60 (5 Man)",
        "desc": "Deep roots of the World Tree.",
        "bosses": [
          "Archimonde's Echo",
          "The Root-Tender"
        ],
        "loot": [
          {
            "name": "Shimmering Vambraces of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Ancient Greatsword of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Venerable Sash of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Holy Wristguards of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+15 Spirit",
              "+11 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Ancient Dagger of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+16 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Holy Slippers of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Runed Relic of the Just",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "Forged in the heart of an ancient dwarven caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 22s"
          },
          {
            "name": "Savage Cuffs of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "+12 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Tempered Handguards of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "+12 Stamina",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Crystalline Shield of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Blood-Forged Brooch of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Shadow Talisman of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 85s"
          },
          {
            "name": "Crystalline Sash of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Venerable Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Venerable Gauntlets of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "+12 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Runed Relic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Ancient Choker of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina",
              "+11 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Shadow Greaves of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Runed Slippers of Ancient Valor",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+11 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: Improves your chance to hit by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 78s"
          },
          {
            "name": "Runed Cowl of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Stalwart Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "+11 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Shadow Dagger of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Intellect",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 56s"
          },
          {
            "name": "Venerable Greatsword of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 59s"
          },
          {
            "name": "Ancient Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+15 Agility",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Stalwart Vambraces of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+12 Stamina",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Blood-Forged Staff of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Savage Staff of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+16 Stamina",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 40s"
          },
          {
            "name": "Savage Waistguard of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Savage Gauntlets of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+17 Intellect",
              "+11 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "An heirloom passed down through generations of frontier champions.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 42s"
          },
          {
            "name": "Crystalline Tunic of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "+11 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 37s"
          }
        ]
      }
    ]
  },
  {
    "id": "Mazthoril",
    "name": "Mazthoril Deeps",
    "loreHistory": "A cavern system in Winterspring used by the Blue Dragonflight to protect ancient arcane artifacts and volatile leyline energy.",
    "strategyGuide": "High magic burst. Dampen Magic, grounding totems, and spell interrupts on \"Arcane Volley\" are crucial.",
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
    "speedrunStrats": "Spell reflection on Arcane Anomalies causes their burst to shatter nearby construct packs.",
    "environmentalHazards": "Wild magic zones randomly apply minor spell pushback.",
    "secrets": [
      "A locked arcane chest contains a rare enchanting formula decodeable by Mages."
    ],
    "wings": [
      {
        "name": "The Arcane Vaults",
        "level": "55-60 (5 Man)",
        "desc": "Blue Dragonflight archive vaults.",
        "bosses": [
          "The Archivist",
          "Haleh's Betrayer"
        ],
        "loot": [
          {
            "name": "Ancient Slippers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 93s"
          },
          {
            "name": "Shadow Talisman of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 70s"
          },
          {
            "name": "Crystalline Gloves of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "+12 Strength",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 21s"
          },
          {
            "name": "Noble Staff of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Strength",
              "+11 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Venerable Harness of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+16 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 11s"
          },
          {
            "name": "Runed Amulet of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: Increases threat generated by all attacks by 4%.",
            "flavorText": "Forged in the heart of an ancient dwarven caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 68s"
          },
          {
            "name": "Crystalline Belt of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Tempered Collar of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 47s"
          },
          {
            "name": "Ancient Kilt of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "+11 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 20s"
          },
          {
            "name": "Noble Sabatons of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+12 Agility",
              "Equip: Improves your crit by 1%."
            ],
            "effect": "Equip: Improves your chance to hit by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 82s"
          },
          {
            "name": "Stalwart Dagger of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Savage Vest of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Venerable Leggings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Crystalline Breastplate of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "Equip: Improves your chance to hit with spells by 1%.",
            "flavorText": "It hums with a deep, tranquil resonance.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 75s"
          },
          {
            "name": "Tempered Breastplate of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Venerable Aegis of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 21s"
          },
          {
            "name": "Blood-Forged Brooch of the Vanguard",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 42s"
          },
          {
            "name": "Runed Treads of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Shadow Bindings of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "+12 Stamina",
              "+10 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 67s"
          },
          {
            "name": "Holy Choker of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 21s"
          },
          {
            "name": "Noble Spaulders of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+12 Strength",
              "+10 Agility"
            ],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Shadow Breastplate of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 91s"
          },
          {
            "name": "Ancient Amice of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 70s"
          },
          {
            "name": "Shimmering Defender of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Stamina",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
            "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "7g 86s"
          },
          {
            "name": "Savage Bow of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Stamina",
              "+12 Spirit",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          }
        ]
      }
    ]
  },
  {
    "id": "GilneasCity",
    "name": "Gilneas City (Instanced Dungeon)",
    "loreHistory": "The besieged capital city of Gilneas during the worgen outbreak and Forsaken naval blockade.",
    "strategyGuide": "Fight in street choke points and alleyways to prevent fast-moving worgen packs from surrounding the party.",
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
    "speedrunStrats": "A Rogue can grapple across the cathedral rooftops to drop ladders for party skips.",
    "environmentalHazards": "Burning timbers randomly collapse, causing localized fire zones.",
    "secrets": [
      "Rescuing trapped civilians awards a unique cosmetic Gilnean Tabard."
    ],
    "wings": [
      {
        "name": "The Greymane District",
        "level": "45-50 (5 Man)",
        "desc": "The burning city avenues.",
        "bosses": [
          "Lord Godfrey",
          "The Royal Guard"
        ],
        "loot": [
          {
            "name": "Tempered Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+14 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 18s"
          },
          {
            "name": "Shimmering Aegis of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Intellect",
              "Equip: Increases healing power by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 53s"
          },
          {
            "name": "Stalwart Medallion of the Vanguard",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Improves your chance to hit by 1%.",
            "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "6g 67s"
          },
          {
            "name": "Savage Medallion of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 63s"
          },
          {
            "name": "Savage Helm of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+13 Intellect",
              "+10 Stamina",
              "Equip: Increases healing power by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 22s"
          },
          {
            "name": "Shimmering Gloves of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+14 Agility",
              "+8 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 16s"
          },
          {
            "name": "Ancient Buckler of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Agility",
              "+10 Stamina",
              "+8 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 12s"
          },
          {
            "name": "Savage Robes of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+12 Intellect",
              "+10 Stamina",
              "+8 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 93s"
          },
          {
            "name": "Tempered Treads of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+12 Stamina",
              "+10 Spirit",
              "Equip: Increases healing power by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 92s"
          },
          {
            "name": "Savage Circlet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+14 Intellect",
              "+10 Spirit",
              "Equip: Increases healing power by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 71s"
          },
          {
            "name": "Blood-Forged Crown of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+12 Agility",
              "+10 Stamina",
              "Equip: Improves your dodge by 1%."
            ],
            "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 40s"
          },
          {
            "name": "Blood-Forged Pants of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+12 Intellect",
              "+10 Stamina",
              "+8 Spirit"
            ],
            "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Tempered Loop of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Stamina",
              "+8 Spirit"
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 48s"
          },
          {
            "name": "Holy Crown of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+14 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Stalwart Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+14 Stamina",
              "+10 Agility",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 44s"
          },
          {
            "name": "Holy Tunic of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+14 Intellect",
              "+9 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Holy Aegis of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Stamina",
              "+10 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 70s"
          },
          {
            "name": "Shimmering Medallion of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 88s"
          },
          {
            "name": "Holy Epaulets of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+12 Stamina",
              "+9 Agility",
              "Equip: Increases attack power by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 41s"
          },
          {
            "name": "Shadow Treads of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+12 Intellect",
              "Equip: Increases spell damage by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 23s"
          }
        ]
      }
    ]
  },
  {
    "id": "GnomereganDeeps",
    "name": "Gnomeregan Deeps",
    "loreHistory": "The lowest, most irradiated industrial levels of Gnomeregan occupied by mutated troggs and rogue defense mechs.",
    "strategyGuide": "Cleanse radiation debuffs regularly and utilize environmental decontamination showers.",
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
    "speedrunStrats": "Using Goblin Jumper Cables on a disabled service lift drops the party straight to the lower vat floor.",
    "environmentalHazards": "Radiation vents periodically expel toxic gas puffs.",
    "secrets": [
      "A rare engineering schematic drops from a hidden stealth gnome engineer in the rafters."
    ],
    "wings": [
      {
        "name": "The Irradiation Vats",
        "level": "35-45 (5 Man)",
        "desc": "Toxic sludge and reactor vats.",
        "bosses": [
          "Viscous Fallout",
          "Mekgineer Thermaplugg (Echo)"
        ],
        "loot": [
          {
            "name": "Holy Axe of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+13 Spirit",
              "+9 Stamina",
              "Equip: Increases healing power by up to 20."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 55s"
          },
          {
            "name": "Stalwart Ring of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+11 Stamina",
              "+7 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 88s"
          },
          {
            "name": "Stalwart Girdle of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+13 Stamina",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 20s"
          },
          {
            "name": "Tempered Dagger of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+13 Stamina",
              "Equip: Increases healing power by up to 20."
            ],
            "effect": "Equip: Restores 3 mana per 5 sec.",
            "flavorText": "It hums with a deep, tranquil resonance.",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Shimmering Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Stamina",
              "Equip: Increases healing power by up to 20."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 82s"
          },
          {
            "name": "Noble Defender of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+12 Intellect",
              "+9 Spirit",
              "Equip: Restores 2 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 87s"
          },
          {
            "name": "Stalwart Greathelm of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+11 Spirit",
              "+8 Stamina",
              "Equip: Increases healing power by up to 20."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 76s"
          },
          {
            "name": "Shadow Axe of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+12 Stamina",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 82s"
          },
          {
            "name": "Crystalline Defender of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+11 Stamina",
              "+7 Strength"
            ],
            "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 22s"
          },
          {
            "name": "Tempered Greathelm of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+12 Stamina",
              "+9 Intellect",
              "+7 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 77s"
          },
          {
            "name": "Noble Charm of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 43s"
          },
          {
            "name": "Blood-Forged Vambraces of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+12 Stamina",
              "+8 Intellect",
              "Equip: Increases spell damage by up to 20."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 57s"
          },
          {
            "name": "Venerable Ring of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Intellect",
              "Equip: Improves your spell hit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 29s"
          },
          {
            "name": "Venerable Gavel of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+13 Stamina",
              "Equip: Increases healing power by up to 20."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 21s"
          },
          {
            "name": "Shimmering Shield of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Stamina",
              "+8 Intellect",
              "Equip: Restores 2 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 76s"
          },
          {
            "name": "Shadow Epaulets of Might",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+11 Stamina",
              "+9 Intellect",
              "Equip: Increases healing power by up to 20."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 39s"
          },
          {
            "name": "Runed Slippers of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+11 Stamina",
              "+7 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 85s"
          },
          {
            "name": "Savage Handguards of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+12 Stamina",
              "+8 Intellect",
              "+7 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 28s"
          },
          {
            "name": "Holy Medallion of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Savage Blade of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+13 Stamina",
              "+9 Agility",
              "+7 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 77s"
          }
        ]
      }
    ]
  },
  {
    "id": "ScarletCitadel",
    "name": "The Scarlet Citadel",
    "loreHistory": "The supreme fanatic stronghold of the Scarlet Crusade located in Tyr's Hand in Eastern Plaguelands.",
    "strategyGuide": "Chain-cast interrupts on Crusade high clerics to prevent group heals and Holy Novas.",
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
    "speedrunStrats": "Priests Mind Controlling an Inquisitor can trigger the courtyard gate release mechanism.",
    "environmentalHazards": "Holy ballista fire targets open courtyard areas.",
    "secrets": [
      "A hidden reliquary triggers a lore interaction with Highlord Mograine's spectral memory."
    ],
    "wings": [
      {
        "name": "The Inquisition",
        "level": "50-55 (5 Man)",
        "desc": "Tyr's Hand torture chambers.",
        "bosses": [
          "Grand Inquisitor Isillien",
          "Scarlet Executioner"
        ],
        "loot": [
          {
            "name": "Ancient Harness of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+13 Stamina",
              "+10 Agility",
              "+9 Intellect"
            ],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 37s"
          },
          {
            "name": "Crystalline Girdle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+13 Strength",
              "+9 Stamina",
              "Equip: Improves your parry by 1%."
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 19s"
          },
          {
            "name": "Venerable Brooch of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Crystalline Buckler of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "Equip: Increases defense rating by 6."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 21s"
          },
          {
            "name": "Venerable Bindings of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+14 Agility",
              "+9 Stamina",
              "Equip: Increases attack power by up to 24."
            ],
            "effect": "Equip: Increases attack power by 20.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 93s"
          },
          {
            "name": "Ancient Amulet of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+14 Intellect",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by spells and effects by up to 24.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 75s"
          },
          {
            "name": "Savage Greatsword of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+9 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 39s"
          },
          {
            "name": "Holy Band of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Intellect",
              "+10 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 61s"
          },
          {
            "name": "Shimmering Signet of the Just",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect",
              "+9 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 42s"
          },
          {
            "name": "Shimmering Collar of the Champion",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+14 Stamina",
              "+9 Agility",
              "Equip: Increases attack power by up to 24."
            ],
            "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 23s"
          },
          {
            "name": "Blood-Forged Band of the Sun",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Intellect",
              "+9 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Crystalline Necklace of Might",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+14 Intellect",
              "Equip: Increases spell damage by up to 24."
            ],
            "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Venerable Bow of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+13 Stamina",
              "Equip: Improves your hit by 1%."
            ],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 30s"
          },
          {
            "name": "Noble Belt of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+10 Intellect",
              "+9 Spirit"
            ],
            "effect": "Chance on hit: Restores 75 mana over 6 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 19s"
          },
          {
            "name": "Blood-Forged Axe of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+9 Intellect",
              "Equip: Improves your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 69s"
          },
          {
            "name": "Venerable Mask of Ancient Valor",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 72s"
          },
          {
            "name": "Ancient Relic of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Improves your chance to hit by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 56s"
          },
          {
            "name": "Shimmering Gavel of the Champion",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Spirit",
              "+10 Stamina",
              "Equip: Restores 3 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 17s"
          },
          {
            "name": "Savage Cuffs of the Vanguard",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+14 Intellect",
              "+9 Stamina",
              "Equip: Increases spell damage by up to 24."
            ],
            "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 22s"
          },
          {
            "name": "Blood-Forged Relic of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Improves your chance to get a critical strike by 1%.",
            "flavorText": "Light glints brilliantly along its balanced edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 19s"
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
    "tier": "Tier 1.5 (10-Man Mini-Raid & 20-Man)",
    "desc": "Entered through the four great dream portals in Ashenvale, Feralas, Duskwood, and the Hinterlands. Tuned for 10-man and 20-man raid teams on a 3-day lockout.",
    "loreHistory": "The four great trees of Azeroth have succumbed to the Emerald Nightmare. Ysera's green dragon lieutenants are twisted into corrupted shadows.",
    "strategyGuide": "Manage the Dream Torment mechanic with coordinated dispels, split the raid during multi-portal incursions, and rotate defensive cooldowns during Eranikus's Corrupted Breath.",
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
    "speedrunStrats": "Defeating the dragon lieutenants in rapid succession summons Eranikus for bonus crest turn-ins.",
    "environmentalHazards": "Nightmare Fog shifts across the arena, silencing casters caught in the mist.",
    "secrets": [
      "Collecting Dream Shards grants the raid a temporary nature resistance world buff."
    ],
    "bosses": [
      "Lethon",
      "Emeriss",
      "Taerar",
      "Ysondre",
      "Corrupted Eranikus"
    ],
    "loot": [
      {
        "name": "Bough-Woven Aegis of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Stamina",
          "+13 Intellect",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 47s"
      },
      {
        "name": "Dream-Watcher's Cord of the Sacred Grove",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+19 Stamina",
          "+12 Intellect",
          "Equip: Increases spell damage by up to 31."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 36s"
      },
      {
        "name": "Dream-Scarred Charm of Ysera's Rest",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 47s"
      },
      {
        "name": "Bough-Woven Boots of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+17 Intellect",
          "+13 Stamina",
          "+11 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 40s"
      },
      {
        "name": "Dream-Watcher's Legguards of the Green Dragonflight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+17 Stamina",
          "+13 Spirit",
          "Equip: Increases healing power by up to 31."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 78s"
      },
      {
        "name": "Dream-Watcher's Band of the Sacred Grove",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+19 Intellect",
          "+11 Spirit"
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 12s"
      },
      {
        "name": "Bough-Woven Cord of the Sacred Grove",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+17 Stamina",
          "+11 Spirit"
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 64s"
      },
      {
        "name": "Bough-Woven Robes of Ysera's Rest",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+18 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 31s"
      },
      {
        "name": "Nightmare-Forged Blade of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+19 Intellect",
          "+12 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 44s"
      },
      {
        "name": "Dream-Scarred Staff of Ysera's Rest",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+17 Stamina",
          "+12 Strength",
          "Equip: Improves your parry by 1%."
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 34s"
      },
      {
        "name": "Slumbering Belt of the Green Dragonflight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+17 Intellect",
          "+12 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 13s"
      },
      {
        "name": "Bough-Woven Pendant of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+19 Stamina",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 48s"
      },
      {
        "name": "Bough-Woven Axe of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+17 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 80s"
      },
      {
        "name": "Dream-Watcher's Aegis of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Stamina",
          "+13 Intellect",
          "+11 Spirit"
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 58s"
      },
      {
        "name": "Dream-Scarred Hauberk of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+17 Agility",
          "+13 Stamina",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 78s"
      },
      {
        "name": "Bough-Woven Medallion of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 34s"
      },
      {
        "name": "Dream-Watcher's Gauntlets of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+17 Agility",
          "+11 Strength"
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 39s"
      },
      {
        "name": "Slumbering Hauberk of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+19 Stamina",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 62s"
      },
      {
        "name": "Bough-Woven Dagger of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+19 Agility",
          "+11 Intellect"
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 17s"
      },
      {
        "name": "Dream-Scarred Cord of the Green Dragonflight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+19 Intellect",
          "+13 Stamina",
          "Equip: Increases spell damage by up to 31."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 74s"
      },
      {
        "name": "Emerald Bulwark of the Sacred Grove",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+19 Intellect",
          "+12 Stamina",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 80s"
      },
      {
        "name": "Dream-Watcher's Staff of the Green Dragonflight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+17 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 24s"
      },
      {
        "name": "Dream-Scarred Choker of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+17 Stamina",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 50s"
      },
      {
        "name": "Emerald Greatsword of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+19 Intellect",
          "+13 Stamina",
          "Equip: Increases healing power by up to 31."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 34s"
      },
      {
        "name": "Emerald Blade of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+19 Stamina",
          "+11 Agility"
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 16s"
      },
      {
        "name": "Slumbering Pauldrons of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+18 Stamina",
          "+13 Intellect",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 71s"
      },
      {
        "name": "Dream-Watcher's Cord of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+17 Intellect",
          "+13 Stamina",
          "Equip: Increases spell damage by up to 31."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 84s"
      },
      {
        "name": "Dream-Scarred Cuffs of the Green Dragonflight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+17 Stamina",
          "+13 Strength",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 35s"
      },
      {
        "name": "Dream-Watcher's Collar of the Sacred Grove",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+17 Intellect",
          "+11 Spirit"
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 51s"
      },
      {
        "name": "Bough-Woven Footpads of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+17 Intellect",
          "+13 Stamina",
          "Equip: Increases healing power by up to 31."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 43s"
      },
      {
        "name": "Emerald Collar of the Sacred Grove",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Intellect",
          "+12 Stamina",
          "Equip: Increases spell damage by up to 31."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 39s"
      },
      {
        "name": "Bough-Woven Band of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+17 Intellect",
          "+12 Stamina",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 43s"
      },
      {
        "name": "Dream-Watcher's Treads of the Green Dragonflight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+18 Stamina",
          "Equip: Increases healing power by up to 31."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 64s"
      },
      {
        "name": "Emerald Pendant of the Sacred Grove",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+18 Spirit",
          "Equip: Increases healing power by up to 31."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 52s"
      },
      {
        "name": "Emerald Wristguards of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+19 Stamina",
          "+11 Spirit"
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 34s"
      },
      {
        "name": "Slumbering Brooch of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 76s"
      },
      {
        "name": "Dream-Watcher's Greathelm of Ysera's Rest",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+17 Stamina",
          "+13 Intellect",
          "Equip: Increases spell damage by up to 31."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 47s"
      },
      {
        "name": "Dream-Scarred Choker of Ysera's Rest",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+17 Stamina",
          "+13 Intellect",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 73s"
      },
      {
        "name": "Dream-Scarred Shield of the Sacred Grove",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+17 Strength",
          "+13 Stamina",
          "Equip: Improves your parry by 1%."
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 16s"
      },
      {
        "name": "Nightmare-Forged Greatsword of Ysera's Rest",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+18 Stamina",
          "Equip: Increases healing power by up to 31."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 85s"
      },
      {
        "name": "Dream-Scarred Pants of Ysera's Rest",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+18 Intellect",
          "+12 Stamina",
          "Equip: Increases spell damage by up to 31."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 89s"
      },
      {
        "name": "Slumbering Charm of Ysera's Rest",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 53s"
      },
      {
        "name": "Bough-Woven Aegis of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+19 Stamina",
          "+13 Intellect",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 76s"
      },
      {
        "name": "Slumbering Medallion of the Sacred Grove",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 35s"
      },
      {
        "name": "Nightmare-Forged Cord of Ysera's Rest",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+19 Spirit",
          "Equip: Increases healing power by up to 31."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "8g 72s"
      }
    ]
  },
  {
    "id": "GrimBatolRaid",
    "name": "Grim Batol: Mountain of the Dragonmaw",
    "tier": "Tier 2 (40-Man Pinnacle Raid)",
    "desc": "The heart of the mountain where the Dragonmaw Clan enslaves the Red Dragonflight. The premier 40-man pinnacle raid tier on a weekly Tuesday lockout.",
    "loreHistory": "Using the Demon Soul, the orcs have broken the will of Alexstrasza. The 40-man raid navigates the deep forges to destroy the dark artifact and free the Life-Binder.",
    "strategyGuide": "Egg Destruction mechanics demand strict target switches. Manage tank hand-offs during Searing Flurry and position the raid to avoid Alexstrasza's captive breath cones.",
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
    "speedrunStrats": "Freeing captive red drakes allows them to assist in clearing elite Dragonmaw defense lines.",
    "environmentalHazards": "Molten Slag rises from the forge floors, requiring coordinated upstairs repositioning.",
    "secrets": [
      "Freeing all captive drakes without casualties triggers a bonus Life-Binder's Blessing phase."
    ],
    "bosses": [
      "Warchief Nek'rosh",
      "The Forgemaster",
      "The Demon Soul",
      "The Crimson Behemoth"
    ],
    "loot": [
      {
        "name": "Brood-Guard's Helm of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+20 Stamina",
          "+15 Spirit",
          "Equip: Increases healing power by up to 34."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 71s"
      },
      {
        "name": "Brood-Guard's Tunic of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+19 Intellect",
          "+15 Stamina",
          "Equip: Increases spell damage by up to 34."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 67s"
      },
      {
        "name": "Brood-Guard's Vest of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+19 Stamina",
          "+14 Strength",
          "Equip: Increases attack power by up to 34."
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 85s"
      },
      {
        "name": "Mountain-Forged Shield of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+20 Intellect",
          "+15 Stamina",
          "+12 Spirit"
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 58s"
      },
      {
        "name": "Red Scale Medallion of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 21s"
      },
      {
        "name": "Red Scale Seal of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Stamina",
          "+15 Strength",
          "Equip: Increases defense rating by 9."
        ],
        "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 48s"
      },
      {
        "name": "Red Scale Boots of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+21 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 11s"
      },
      {
        "name": "Searing Seal of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+19 Agility",
          "+12 Armor"
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 13s"
      },
      {
        "name": "Wildhammer-Bane Boots of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+21 Intellect",
          "+15 Stamina",
          "+12 Spirit"
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 94s"
      },
      {
        "name": "Red Scale Aegis of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+20 Agility",
          "+15 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 12s"
      },
      {
        "name": "Brood-Guard's Belt of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+20 Intellect",
          "+15 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 78s"
      },
      {
        "name": "Mountain-Forged Dagger of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+19 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 12s"
      },
      {
        "name": "Brood-Guard's Greaves of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+20 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 52s"
      },
      {
        "name": "Wildhammer-Bane Harness of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+19 Agility",
          "+15 Stamina",
          "Equip: Increases attack power by up to 34."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 35s"
      },
      {
        "name": "Searing Pauldrons of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+20 Stamina",
          "Equip: Increases healing power by up to 34."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 17s"
      },
      {
        "name": "Red Scale Gavel of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+19 Stamina",
          "+14 Agility",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 10s"
      },
      {
        "name": "Wildhammer-Bane Brooch of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 16s"
      },
      {
        "name": "Mountain-Forged Band of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+20 Stamina",
          "Equip: Increases defense rating by 9."
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 67s"
      },
      {
        "name": "Brood-Guard's Greatsword of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+19 Spirit",
          "+14 Stamina",
          "Equip: Increases healing power by up to 34."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 33s"
      },
      {
        "name": "Mountain-Forged Wristguards of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+21 Intellect",
          "Equip: Increases spell damage by up to 34."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 66s"
      },
      {
        "name": "Mountain-Forged Greatsword of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+20 Intellect",
          "+12 Spirit"
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 48s"
      },
      {
        "name": "Dragonmaw Choker of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+20 Stamina",
          "+14 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 92s"
      },
      {
        "name": "Brood-Guard's Bindings of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+19 Intellect",
          "Equip: Increases healing power by up to 34."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 50s"
      },
      {
        "name": "Wildhammer-Bane Gauntlets of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+19 Stamina",
          "+15 Agility",
          "Equip: Increases attack power by up to 34."
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 14s"
      },
      {
        "name": "Brood-Guard's Staff of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+20 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 90s"
      },
      {
        "name": "Brood-Guard's Gavel of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+19 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 49s"
      },
      {
        "name": "Wildhammer-Bane Loop of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+19 Intellect",
          "+15 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 60s"
      },
      {
        "name": "Wildhammer-Bane Girdle of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+20 Stamina",
          "+15 Intellect",
          "+12 Spirit"
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 26s"
      },
      {
        "name": "Red Scale Gavel of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+19 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 93s"
      },
      {
        "name": "Mountain-Forged Mantle of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+19 Intellect",
          "+14 Stamina",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 32s"
      },
      {
        "name": "Dragonmaw Crown of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+19 Spirit",
          "+14 Intellect",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 35s"
      },
      {
        "name": "Brood-Guard's Greatsword of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+19 Intellect",
          "+14 Stamina",
          "+12 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 79s"
      },
      {
        "name": "Red Scale Bulwark of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Strength",
          "+15 Stamina",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 19s"
      },
      {
        "name": "Wildhammer-Bane Footpads of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+20 Stamina",
          "+14 Agility",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 61s"
      },
      {
        "name": "Red Scale Handguards of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+21 Stamina",
          "+12 Intellect"
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 66s"
      },
      {
        "name": "Brood-Guard's Blade of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+21 Strength",
          "Equip: Increases defense rating by 9."
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 25s"
      },
      {
        "name": "Red Scale Blade of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+20 Intellect",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 36s"
      },
      {
        "name": "Wildhammer-Bane Aegis of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+20 Stamina",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 19s"
      },
      {
        "name": "Brood-Guard's Belt of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+20 Stamina",
          "+15 Intellect",
          "Equip: Increases healing power by up to 34."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 13s"
      },
      {
        "name": "Wildhammer-Bane Boots of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+21 Agility",
          "+12 Strength"
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 42s"
      },
      {
        "name": "Mountain-Forged Spaulders of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+19 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 59s"
      },
      {
        "name": "Dragonmaw Sash of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+20 Stamina",
          "+15 Agility",
          "+12 Strength"
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 60s"
      },
      {
        "name": "Searing Amulet of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+19 Stamina",
          "+15 Agility",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 70s"
      },
      {
        "name": "Wildhammer-Bane Belt of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+19 Stamina",
          "+14 Strength",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 23s"
      },
      {
        "name": "Brood-Guard's Shield of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Spirit",
          "Equip: Increases healing power by up to 34."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 10s"
      },
      {
        "name": "Dragonmaw Greatsword of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+21 Stamina",
          "+14 Intellect",
          "Equip: Increases spell damage by up to 34."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 77s"
      },
      {
        "name": "Red Scale Hauberk of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+19 Strength",
          "+15 Stamina",
          "Equip: Increases attack power by up to 34."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 83s"
      },
      {
        "name": "Mountain-Forged Band of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Stamina",
          "+14 Intellect",
          "Equip: Increases spell damage by up to 34."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 61s"
      },
      {
        "name": "Mountain-Forged Gavel of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+21 Intellect",
          "Equip: Increases healing power by up to 34."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 31s"
      },
      {
        "name": "Dragonmaw Bracers of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+20 Spirit",
          "+14 Stamina",
          "Equip: Increases healing power by up to 34."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 88s"
      },
      {
        "name": "Dragonmaw Mantle of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+21 Agility",
          "Equip: Increases attack power by up to 34."
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 51s"
      },
      {
        "name": "Searing Gavel of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+21 Agility",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 22s"
      },
      {
        "name": "Mountain-Forged Gavel of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+19 Agility",
          "+14 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 24s"
      },
      {
        "name": "Searing Dagger of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+21 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 69s"
      },
      {
        "name": "Wildhammer-Bane Axe of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+20 Strength",
          "+15 Stamina",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 71s"
      },
      {
        "name": "Mountain-Forged Greatsword of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+19 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 42s"
      },
      {
        "name": "Searing Tunic of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+21 Stamina",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 71s"
      },
      {
        "name": "Searing Bulwark of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 45s"
      },
      {
        "name": "Brood-Guard's Belt of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+19 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 81s"
      },
      {
        "name": "Searing Crown of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+19 Intellect",
          "+14 Stamina",
          "+12 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 89s"
      },
      {
        "name": "Dragonmaw Cuffs of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+21 Strength",
          "+14 Stamina",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 80s"
      },
      {
        "name": "Mountain-Forged Bow of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+21 Stamina",
          "+14 Agility",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 79s"
      },
      {
        "name": "Red Scale Mask of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+20 Stamina",
          "Equip: Increases spell damage by up to 34."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 36s"
      },
      {
        "name": "Searing Loop of Ironforge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+19 Stamina",
          "Equip: Increases spell damage by up to 34."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 64s"
      },
      {
        "name": "Brood-Guard's Blade of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+19 Strength",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 12s"
      },
      {
        "name": "Wildhammer-Bane Dagger of the Great Anvil",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+19 Strength",
          "+14 Stamina",
          "+12 Agility"
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 12s"
      },
      {
        "name": "Dragonmaw Greathelm of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+19 Spirit",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 82s"
      },
      {
        "name": "Wildhammer-Bane Gloves of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+21 Strength",
          "+15 Stamina",
          "Equip: Improves your parry by 1%."
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 21s"
      },
      {
        "name": "Mountain-Forged Footpads of the Mountain King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+21 Intellect",
          "Equip: Restores 4 mana per 5 sec."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 10s"
      },
      {
        "name": "Red Scale Buckler of the Dragon Queen",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+19 Intellect",
          "+12 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 91s"
      }
    ]
  },
  {
    "id": "CrownOfTheDamned",
    "name": "Crown of the Damned (Stratholme Necropolis)",
    "tier": "Tier 2.5 (20-Man Intermediate Raid)",
    "desc": "The massive floating ziggurat hovering above Stratholme. Tuned for 20 players on a 3-day horizontal progression lockout.",
    "loreHistory": "Kel'Thuzad's secondary command ziggurat directing the Scourge's northern plague campaigns across Lordaeron.",
    "strategyGuide": "The Phylactery Hunt mechanic forces the off-tanks to contain elite adds while scouts retrieve the phylactery to make the final boss vulnerable.",
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
    "speedrunStrats": "Paladins chaining Holy Wrath completely control the Undead Gauntlet corridor.",
    "environmentalHazards": "Frostwyrm Breath freezes players unless warmed by nearby holy fire braziers.",
    "secrets": [
      "Clearing the necropolis triggers Argent Dawn celebrations and temporary vendor discounts in Light's Hope."
    ],
    "bosses": [
      "Highlord Mograine (Echo)",
      "The Blood Council",
      "Kel'Thuzad's Phylactery-Guard"
    ],
    "loot": [
      {
        "name": "Necrotic Blade of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+20 Stamina",
          "+13 Agility"
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 93s"
      },
      {
        "name": "Dusk-Bound Gauntlets of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+22 Stamina",
          "Equip: Increases attack power by up to 36."
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 73s"
      },
      {
        "name": "Plague-Warded Leggings of Stratholme",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+21 Spirit",
          "+15 Stamina",
          "Equip: Increases healing power by up to 36."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 66s"
      },
      {
        "name": "Frost-Forged Shield of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+22 Stamina",
          "+15 Intellect",
          "Equip: Increases healing power by up to 36."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 67s"
      },
      {
        "name": "Frost-Forged Boots of the Argent Vanguard",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+20 Stamina",
          "+13 Spirit"
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 81s"
      },
      {
        "name": "Necrotic Buckler of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Intellect",
          "Equip: Increases healing power by up to 36."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 72s"
      },
      {
        "name": "Necrotic Blade of Stratholme",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+21 Spirit",
          "+16 Stamina",
          "Equip: Increases healing power by up to 36."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 78s"
      },
      {
        "name": "Dusk-Bound Charm of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 87s"
      },
      {
        "name": "Dusk-Bound Robes of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+22 Stamina",
          "+16 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 10s"
      },
      {
        "name": "Scourge-Bane Mantle of Stratholme",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+20 Stamina",
          "+16 Intellect",
          "Equip: Increases spell damage by up to 36."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 66s"
      },
      {
        "name": "Frost-Forged Loop of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Stamina",
          "+15 Agility",
          "Equip: Increases attack power by up to 36."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 31s"
      },
      {
        "name": "Plague-Warded Bow of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+22 Agility",
          "+16 Stamina",
          "+13 Intellect"
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 75s"
      },
      {
        "name": "Frost-Forged Gavel of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+21 Stamina",
          "+13 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 54s"
      },
      {
        "name": "Necrotic Mantle of the Argent Vanguard",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+21 Stamina",
          "+15 Intellect",
          "Equip: Increases spell damage by up to 36."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 46s"
      },
      {
        "name": "Dusk-Bound Treads of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+21 Stamina",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 30s"
      },
      {
        "name": "Scourge-Bane Cowl of Stratholme",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+22 Intellect",
          "+15 Spirit",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 58s"
      },
      {
        "name": "Scourge-Bane Buckler of the Argent Vanguard",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Intellect",
          "Equip: Increases healing power by up to 36."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 10s"
      },
      {
        "name": "Dusk-Bound Axe of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+20 Stamina",
          "+15 Intellect",
          "Equip: Increases spell damage by up to 36."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 73s"
      },
      {
        "name": "Dusk-Bound Handguards of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+20 Spirit",
          "+15 Intellect",
          "Equip: Increases healing power by up to 36."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 69s"
      },
      {
        "name": "Scourge-Bane Amice of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+21 Spirit",
          "+16 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 52s"
      },
      {
        "name": "Plague-Warded Blade of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+22 Intellect",
          "+13 Spirit"
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 83s"
      },
      {
        "name": "Necrotic Mitts of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+21 Stamina",
          "+16 Intellect",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 31s"
      },
      {
        "name": "Dusk-Bound Dagger of Stratholme",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+20 Intellect",
          "+16 Stamina",
          "Equip: Increases spell damage by up to 36."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 69s"
      },
      {
        "name": "Necrotic Pants of Stratholme",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+22 Agility",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 44s"
      },
      {
        "name": "Dusk-Bound Treads of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+22 Agility",
          "+13 Intellect"
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 11s"
      },
      {
        "name": "Dusk-Bound Greaves of Stratholme",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+22 Stamina",
          "Equip: Increases spell damage by up to 36."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 44s"
      },
      {
        "name": "Plague-Warded Staff of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+20 Intellect",
          "+15 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 20s"
      },
      {
        "name": "Plague-Warded Greatsword of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+20 Stamina",
          "+13 Intellect"
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 45s"
      },
      {
        "name": "Necrotic Greathelm of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+21 Intellect",
          "+16 Stamina",
          "Equip: Increases healing power by up to 36."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 66s"
      },
      {
        "name": "Frost-Forged Staff of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+21 Agility",
          "+16 Stamina",
          "+13 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 47s"
      },
      {
        "name": "Necrotic Bindings of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+20 Intellect",
          "+16 Stamina",
          "+13 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 48s"
      },
      {
        "name": "Scourge-Bane Vambraces of the Argent Vanguard",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+22 Spirit",
          "+15 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 88s"
      },
      {
        "name": "Frost-Forged Ring of Stratholme",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 46s"
      },
      {
        "name": "Necrotic Collar of the Argent Vanguard",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+20 Agility",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 32s"
      },
      {
        "name": "Frost-Forged Aegis of the Argent Vanguard",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+20 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Necrotic Pants of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+20 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 71s"
      },
      {
        "name": "Plague-Warded Robes of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+22 Agility",
          "+13 Strength"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 33s"
      },
      {
        "name": "Necrotic Defender of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+20 Agility",
          "+15 Stamina",
          "+13 Armor"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 72s"
      },
      {
        "name": "Dusk-Bound Relic of the Argent Vanguard",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 28s"
      },
      {
        "name": "Dusk-Bound Footpads of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+20 Stamina",
          "+16 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 53s"
      },
      {
        "name": "Plague-Warded Gavel of the Argent Vanguard",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+22 Strength",
          "Equip: Increases defense rating by 10."
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 13s"
      },
      {
        "name": "Scourge-Bane Handguards of Lordaeron",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+21 Stamina",
          "+15 Spirit",
          "Equip: Increases healing power by up to 36."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 35s"
      },
      {
        "name": "Dusk-Bound Axe of the Holy Light",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+22 Intellect",
          "+16 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 88s"
      },
      {
        "name": "Plague-Warded Axe of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+22 Stamina",
          "+16 Intellect",
          "+13 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 35s"
      },
      {
        "name": "Frost-Forged Amice of Stratholme",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+20 Stamina",
          "+13 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 39s"
      }
    ]
  },
  {
    "id": "KarazhanRaid",
    "name": "Karazhan (The Upper Spire)",
    "tier": "Tier 3 (40-Man Pinnacle Raid)",
    "desc": "The unreleased Vanilla version of Medivh's tower. Tuned for 40 players on a weekly Tuesday pinnacle lockout.",
    "loreHistory": "Medivh's tower transcends time and space. The upper levels hold spatial rifts where the Burning Legion, anomalous entities, and ghostly lords contend.",
    "strategyGuide": "Coordinate interrupts during Aran's Flame Wreath (DO NOT MOVE), execute position swaps on Moroes's dinner guests, and manage tank transitions on Prince Malchezaar.",
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
    "speedrunStrats": "Invisibility Potions allow organized 40-man teams to skip non-essential trash corridors.",
    "environmentalHazards": "Spatial rift turbulence causes minor gravity shifts on the upper library terraces.",
    "secrets": [
      "Clearing the raid in under 90 minutes summons Medivh's Echo for bonus legendary crest drops."
    ],
    "bosses": [
      "Attumen the Huntsman",
      "Moroes",
      "The Curator",
      "Shade of Aran",
      "Prince Malchezaar",
      "Medivh's Echo"
    ],
    "loot": [
      {
        "name": "Ethereal Kilt of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+24 Spirit",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 63s"
      },
      {
        "name": "Guardian's Circlet of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "Equip: Increases attack power by up to 40."
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 52s"
      },
      {
        "name": "Rift-Touched Boots of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+17 Stamina",
          "Equip: Improves your parry by 1%."
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 47s"
      },
      {
        "name": "Timeless Defender of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Stamina",
          "+16 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 73s"
      },
      {
        "name": "Guardian's Sash of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+23 Stamina",
          "+17 Spirit",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 83s"
      },
      {
        "name": "Timeless Treads of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+22 Stamina",
          "Equip: Increases attack power by up to 40."
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 38s"
      },
      {
        "name": "Astral Necklace of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Strength",
          "+17 Stamina",
          "Equip: Increases defense rating by 11."
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 24s"
      },
      {
        "name": "Rift-Touched Vest of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+23 Intellect",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 89s"
      },
      {
        "name": "Rift-Touched Bindings of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+24 Intellect",
          "+17 Stamina",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 15s"
      },
      {
        "name": "Ethereal Aegis of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Agility",
          "+14 Strength"
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 64s"
      },
      {
        "name": "Timeless Tunic of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+22 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 60s"
      },
      {
        "name": "Astral Helm of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+23 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 12s"
      },
      {
        "name": "Ethereal Boots of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+23 Agility",
          "+16 Stamina",
          "+14 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 18s"
      },
      {
        "name": "Astral Mask of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+24 Agility",
          "+16 Stamina",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 68s"
      },
      {
        "name": "Timeless Amice of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+23 Stamina",
          "+17 Intellect",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 58s"
      },
      {
        "name": "Medivh's Collar of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Intellect",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 55s"
      },
      {
        "name": "Timeless Gavel of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+22 Strength",
          "+17 Stamina",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 42s"
      },
      {
        "name": "Timeless Bracers of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 87s"
      },
      {
        "name": "Timeless Aegis of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Agility",
          "+17 Stamina",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 75s"
      },
      {
        "name": "Medivh's Loop of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Strength",
          "+16 Stamina",
          "Equip: Increases defense rating by 11."
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 64s"
      },
      {
        "name": "Timeless Bulwark of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Stamina",
          "+14 Spirit"
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 81s"
      },
      {
        "name": "Medivh's Girdle of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+22 Stamina",
          "+14 Spirit"
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 24s"
      },
      {
        "name": "Astral Cuffs of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 12s"
      },
      {
        "name": "Rift-Touched Medallion of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 93s"
      },
      {
        "name": "Rift-Touched Kilt of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+22 Intellect",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 83s"
      },
      {
        "name": "Timeless Cuffs of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+22 Agility",
          "+16 Stamina",
          "Equip: Increases attack power by up to 40."
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 74s"
      },
      {
        "name": "Guardian's Harness of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+23 Agility",
          "+17 Stamina",
          "Equip: Increases attack power by up to 40."
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 36s"
      },
      {
        "name": "Astral Pendant of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Agility",
          "+17 Stamina",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 53s"
      },
      {
        "name": "Guardian's Loop of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Spirit",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 56s"
      },
      {
        "name": "Ethereal Loop of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Agility",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 25s"
      },
      {
        "name": "Rift-Touched Grips of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+23 Agility",
          "+16 Stamina",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 48s"
      },
      {
        "name": "Medivh's Amice of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+23 Stamina",
          "+16 Agility",
          "+14 Strength"
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Ethereal Wristguards of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+24 Agility",
          "+17 Stamina",
          "+14 Strength"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 39s"
      },
      {
        "name": "Ethereal Circlet of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 76s"
      },
      {
        "name": "Rift-Touched Bindings of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+23 Stamina",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 35s"
      },
      {
        "name": "Timeless Gavel of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+23 Intellect",
          "+16 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 63s"
      },
      {
        "name": "Guardian's Shield of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Agility",
          "+17 Stamina",
          "+14 Armor"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 80s"
      },
      {
        "name": "Timeless Mitts of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+22 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 69s"
      },
      {
        "name": "Timeless Seal of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Agility",
          "+17 Stamina",
          "+14 Strength"
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 27s"
      },
      {
        "name": "Timeless Loop of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 67s"
      },
      {
        "name": "Timeless Amice of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+24 Intellect",
          "+16 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 57s"
      },
      {
        "name": "Guardian's Axe of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+23 Intellect",
          "+17 Stamina",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 50s"
      },
      {
        "name": "Medivh's Dagger of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+23 Strength",
          "Equip: Improves your parry by 1%."
        ],
        "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 29s"
      },
      {
        "name": "Astral Breastplate of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+24 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 66s"
      },
      {
        "name": "Ethereal Boots of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "Equip: Increases attack power by up to 40."
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 78s"
      },
      {
        "name": "Guardian's Pauldrons of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+23 Stamina",
          "+14 Strength"
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 73s"
      },
      {
        "name": "Timeless Greatsword of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+22 Stamina",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 10s"
      },
      {
        "name": "Timeless Necklace of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Intellect",
          "+17 Stamina",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 45s"
      },
      {
        "name": "Guardian's Charm of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 63s"
      },
      {
        "name": "Medivh's Blade of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+24 Intellect",
          "+14 Spirit"
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 43s"
      },
      {
        "name": "Ethereal Spaulders of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+22 Stamina",
          "+17 Intellect",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 94s"
      },
      {
        "name": "Timeless Amulet of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Intellect",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 23s"
      },
      {
        "name": "Astral Greaves of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+22 Agility",
          "+16 Stamina",
          "+14 Intellect"
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Rift-Touched Brooch of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 67s"
      },
      {
        "name": "Rift-Touched Gloves of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+23 Stamina",
          "+16 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 13s"
      },
      {
        "name": "Ethereal Axe of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+22 Intellect",
          "+17 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 74s"
      },
      {
        "name": "Timeless Relic of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 64s"
      },
      {
        "name": "Ethereal Relic of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 17s"
      },
      {
        "name": "Medivh's Relic of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 50s"
      },
      {
        "name": "Medivh's Talisman of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 14s"
      },
      {
        "name": "Guardian's Handguards of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+23 Spirit",
          "+17 Stamina",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 64s"
      },
      {
        "name": "Medivh's Grips of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+24 Stamina",
          "+17 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 26s"
      },
      {
        "name": "Medivh's Belt of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+23 Intellect",
          "+16 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Astral Sabatons of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+17 Stamina",
          "+14 Agility"
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 32s"
      },
      {
        "name": "Timeless Blade of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+23 Intellect",
          "+16 Stamina",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 32s"
      },
      {
        "name": "Medivh's Greathelm of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+22 Stamina",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 62s"
      },
      {
        "name": "Medivh's Bulwark of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Agility",
          "+14 Strength"
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 17s"
      },
      {
        "name": "Medivh's Choker of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Stamina",
          "+17 Intellect",
          "+14 Spirit"
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 81s"
      },
      {
        "name": "Astral Spaulders of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+22 Intellect",
          "+17 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 28s"
      },
      {
        "name": "Timeless Greaves of the Master's Archive",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+23 Stamina",
          "+17 Agility",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 59s"
      },
      {
        "name": "Ethereal Talisman of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 74s"
      },
      {
        "name": "Rift-Touched Boots of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+22 Strength",
          "+17 Stamina",
          "+14 Agility"
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Timeless Axe of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+23 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 33s"
      },
      {
        "name": "Ethereal Slippers of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+23 Spirit",
          "+17 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 93s"
      },
      {
        "name": "Rift-Touched Band of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Stamina",
          "+16 Intellect",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 29s"
      },
      {
        "name": "Medivh's Cowl of the Astral Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 86s"
      },
      {
        "name": "Rift-Touched Tunic of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 36s"
      },
      {
        "name": "Ethereal Belt of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+23 Intellect",
          "+17 Stamina",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 12s"
      },
      {
        "name": "Timeless Shield of Netherwind",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Intellect",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 88s"
      },
      {
        "name": "Timeless Amulet of Karazhan",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Strength",
          "+16 Stamina",
          "Equip: Increases attack power by up to 40."
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 18s"
      }
    ]
  },
  {
    "id": "DragonIslesRaid",
    "name": "Temple of the Dragon Isles",
    "tier": "Tier 3.5 (40-Man Pinnacle Raid)",
    "desc": "The mythical pre-Titan island temple north of Lordaeron. The absolute pinnacle 40-man raid challenge in Classic+.",
    "loreHistory": "An impossibly ancient pre-Titan temple where the Old Gods first sought to corrupt the proto-dragon broods.",
    "strategyGuide": "Demands absolute raid coordination: Ley-Line beam alignment to remove boss immunities, strict tank swap rotations on Proto-Behemoths, and tight enrage DPS checks.",
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
    "speedrunStrats": "Time Dilation zones temporarily accelerate movement and casting for well-positioned raid groups.",
    "environmentalHazards": "Void rifts collapse floor sections, demanding adaptive raid positioning.",
    "secrets": [
      "Extremely rare Proto-Drake ground mount drops from the final Old God Avatar."
    ],
    "bosses": [
      "The Aspect Council",
      "The Faceless General",
      "Avatar of the Old God"
    ],
    "loot": [
      {
        "name": "Titan-Carved Footpads of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 16s"
      },
      {
        "name": "Primal Mantle of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+23 Stamina",
          "+18 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 78s"
      },
      {
        "name": "Ley-Infused Gavel of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+23 Stamina",
          "+18 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 90s"
      },
      {
        "name": "Titan-Carved Pendant of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Intellect",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 50s"
      },
      {
        "name": "Obsidian Greaves of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "+17 Intellect",
          "Equip: Increases spell damage by up to 41."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 31s"
      },
      {
        "name": "Proto-Drake Blade of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+23 Stamina",
          "+17 Agility",
          "Equip: Increases attack power by up to 41."
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Obsidian Gauntlets of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "+15 Spirit"
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 87s"
      },
      {
        "name": "Ancient Circlet of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "Equip: Increases healing power by up to 41."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 77s"
      },
      {
        "name": "Obsidian Buckler of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+25 Spirit",
          "+17 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 51s"
      },
      {
        "name": "Titan-Carved Talisman of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 40s"
      },
      {
        "name": "Ley-Infused Epaulets of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+24 Spirit",
          "+17 Intellect",
          "Equip: Increases healing power by up to 41."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 17s"
      },
      {
        "name": "Obsidian Relic of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 94s"
      },
      {
        "name": "Obsidian Gauntlets of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+25 Strength",
          "+17 Stamina",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 33s"
      },
      {
        "name": "Proto-Drake Vambraces of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "+18 Stamina",
          "+15 Spirit"
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 64s"
      },
      {
        "name": "Ancient Choker of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Agility",
          "+15 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 26s"
      },
      {
        "name": "Titan-Carved Axe of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+23 Strength",
          "+18 Stamina",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 57s"
      },
      {
        "name": "Primal Collar of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 59s"
      },
      {
        "name": "Obsidian Girdle of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+23 Strength",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Ancient Robes of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "+17 Stamina",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Primal Crown of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+23 Intellect",
          "+17 Stamina",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 76s"
      },
      {
        "name": "Primal Mitts of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+24 Agility",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 29s"
      },
      {
        "name": "Ancient Bindings of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "+17 Intellect",
          "+15 Spirit"
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 68s"
      },
      {
        "name": "Proto-Drake Sabatons of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "+17 Strength",
          "+15 Agility"
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 28s"
      },
      {
        "name": "Primal Gavel of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+24 Stamina",
          "+17 Spirit",
          "Equip: Increases healing power by up to 41."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 52s"
      },
      {
        "name": "Ley-Infused Band of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Stamina",
          "+18 Strength",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 71s"
      },
      {
        "name": "Proto-Drake Choker of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Agility",
          "+17 Stamina",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 60s"
      },
      {
        "name": "Proto-Drake Helm of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+23 Strength",
          "Equip: Improves your parry by 1%."
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 80s"
      },
      {
        "name": "Ley-Infused Helm of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+23 Intellect",
          "Equip: Increases spell damage by up to 41."
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 54s"
      },
      {
        "name": "Titan-Carved Cuffs of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+25 Intellect",
          "+18 Stamina",
          "+15 Spirit"
        ],
        "effect": "Chance on hit: Blasts the target for 85 Nature damage.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 43s"
      },
      {
        "name": "Titan-Carved Relic of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 50s"
      },
      {
        "name": "Ley-Infused Cowl of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+23 Stamina",
          "+18 Agility",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 85s"
      },
      {
        "name": "Titan-Carved Shield of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Stamina",
          "+17 Strength",
          "Equip: Increases defense rating by 11."
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 79s"
      },
      {
        "name": "Ley-Infused Mantle of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+25 Stamina",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 65s"
      },
      {
        "name": "Ley-Infused Staff of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+24 Stamina",
          "Equip: Increases spell damage by up to 41."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 16s"
      },
      {
        "name": "Ley-Infused Pants of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+25 Stamina",
          "+17 Agility",
          "Equip: Increases attack power by up to 41."
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 35s"
      },
      {
        "name": "Obsidian Seal of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 83s"
      },
      {
        "name": "Ley-Infused Signet of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Stamina",
          "+17 Agility",
          "Equip: Increases attack power by up to 41."
        ],
        "effect": "Equip: Improves your chance to hit by 1%.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 88s"
      },
      {
        "name": "Titan-Carved Mitts of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+25 Intellect",
          "+18 Stamina",
          "Equip: Increases spell damage by up to 41."
        ],
        "effect": "Equip: Improves your chance to hit with spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 92s"
      },
      {
        "name": "Ancient Grips of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+25 Strength",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 69s"
      },
      {
        "name": "Ancient Mantle of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "+18 Spirit",
          "Equip: Increases healing power by up to 41."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 83s"
      },
      {
        "name": "Obsidian Bow of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+25 Stamina",
          "+17 Strength",
          "Equip: Increases defense rating by 11."
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 84s"
      },
      {
        "name": "Titan-Carved Belt of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+25 Stamina",
          "+17 Agility",
          "+15 Armor"
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 65s"
      },
      {
        "name": "Primal Blade of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+23 Strength",
          "+18 Stamina",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 79s"
      },
      {
        "name": "Primal Legguards of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+25 Intellect",
          "+17 Stamina",
          "Equip: Increases spell damage by up to 41."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 16s"
      },
      {
        "name": "Titan-Carved Brooch of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 32s"
      },
      {
        "name": "Primal Axe of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Intellect",
          "+18 Stamina",
          "Equip: Increases spell damage by up to 41."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 23s"
      },
      {
        "name": "Ancient Pants of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+25 Spirit",
          "+18 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Ancient Amulet of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Spirit",
          "+17 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 90s"
      },
      {
        "name": "Titan-Carved Hauberk of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+24 Spirit",
          "+17 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 28s"
      },
      {
        "name": "Titan-Carved Brooch of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 81s"
      },
      {
        "name": "Ancient Greaves of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+23 Stamina",
          "Equip: Increases defense rating by 11."
        ],
        "effect": "Equip: When struck in melee, inflicts 10 Fire damage to the attacker.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 33s"
      },
      {
        "name": "Primal Cuffs of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+18 Stamina",
          "Equip: Increases spell damage by up to 41."
        ],
        "effect": "Chance on hit: Restores 75 mana over 6 sec.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 20s"
      },
      {
        "name": "Primal Bindings of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+24 Stamina",
          "+18 Intellect",
          "+15 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 65s"
      },
      {
        "name": "Primal Ring of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Stamina",
          "+18 Agility",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a protective shield absorbing 350 damage for 8 sec.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Ancient Hauberk of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+23 Agility",
          "Equip: Increases attack power by up to 41."
        ],
        "effect": "Equip: Increases attack power by 20.",
        "flavorText": "It hums with a deep, tranquil resonance.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 11s"
      },
      {
        "name": "Ancient Ring of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 60s"
      },
      {
        "name": "Obsidian Buckler of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+25 Stamina",
          "+17 Spirit",
          "Equip: Increases healing power by up to 41."
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 10s"
      },
      {
        "name": "Ley-Infused Staff of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+24 Stamina",
          "+18 Intellect",
          "+15 Spirit"
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 85s"
      },
      {
        "name": "Proto-Drake Slippers of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+24 Agility",
          "+18 Stamina",
          "Equip: Improves your hit by 1%."
        ],
        "effect": "Chance on hit: Wounds the target for 65 Physical damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 87s"
      },
      {
        "name": "Titan-Carved Tunic of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+25 Intellect",
          "Equip: Improves your spell hit by 1%."
        ],
        "effect": "Equip: Improves your chance to get a critical strike with spells by 1%.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 55s"
      },
      {
        "name": "Proto-Drake Greatsword of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+25 Strength",
          "+17 Stamina",
          "Equip: Increases defense rating by 11."
        ],
        "effect": "Equip: Increases threat generated by all attacks by 4%.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 45s"
      },
      {
        "name": "Primal Staff of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+24 Stamina",
          "Equip: Improves your crit by 1%."
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "Worn by those who stood unbroken against the storm.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 91s"
      },
      {
        "name": "Titan-Carved Blade of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+25 Agility",
          "+15 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 70s"
      },
      {
        "name": "Obsidian Bow of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+24 Strength",
          "+18 Stamina",
          "+15 Agility"
        ],
        "effect": "Chance on hit: Increases melee attack speed by 5% for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 68s"
      },
      {
        "name": "Titan-Carved Medallion of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 49s"
      },
      {
        "name": "Proto-Drake Bulwark of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Stamina",
          "+17 Intellect",
          "+15 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy and nature spells by 1%.",
        "flavorText": "An heirloom passed down through generations of frontier champions.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 90s"
      },
      {
        "name": "Titan-Carved Aegis of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Spirit",
          "+17 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Restores 3 mana per 5 sec.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Ancient Bow of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+24 Stamina",
          "+17 Agility",
          "+15 Intellect"
        ],
        "effect": "Equip: Improves your chance to get a critical strike by 1%.",
        "flavorText": "A testament to the craftsmanship of the Alliance and Horde.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 10s"
      },
      {
        "name": "Primal Charm of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 43s"
      },
      {
        "name": "Primal Grips of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+25 Intellect",
          "+18 Stamina",
          "Equip: Increases healing power by up to 41."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 41s"
      },
      {
        "name": "Ley-Infused Staff of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+23 Intellect",
          "+17 Stamina",
          "Equip: Improves your spell crit by 1%."
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 67s"
      },
      {
        "name": "Obsidian Buckler of the Dragon Isles",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Stamina",
          "+18 Strength",
          "Equip: Improves your dodge by 1%."
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 55s"
      },
      {
        "name": "Primal Blade of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+25 Intellect",
          "+17 Stamina",
          "+15 Spirit"
        ],
        "effect": "Equip: Increases damage and healing done by magical spells and effects by up to 14.",
        "flavorText": "Forged in the heart of an ancient dwarven caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 79s"
      },
      {
        "name": "Primal Bulwark of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+25 Strength",
          "+18 Stamina",
          "Equip: Improves your parry by 1%."
        ],
        "effect": "Equip: Increases defense rating by 8.",
        "flavorText": "Crafted with immaculate precision by the master artisans of Azeroth.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 36s"
      },
      {
        "name": "Ancient Shield of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Intellect",
          "+18 Spirit",
          "Equip: Increases healing power by up to 41."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 93s"
      },
      {
        "name": "Obsidian Talisman of the Titans",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 13s"
      },
      {
        "name": "Proto-Drake Bow of the Shifting Sands",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+24 Spirit",
          "+18 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 48s"
      },
      {
        "name": "Primal Axe of the Proto-Aspects",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+24 Stamina",
          "Equip: Increases healing power by up to 41."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "Imbued with the stoic resilience of the old world.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 80s"
      },
      {
        "name": "Ley-Infused Spaulders of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+24 Intellect",
          "+18 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals have a 3% chance to restore 150 mana.",
        "flavorText": "Light glints brilliantly along its balanced edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 80s"
      },
      {
        "name": "Obsidian Gavel of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Spirit",
          "+17 Intellect",
          "Equip: Increases healing power by up to 41."
        ],
        "effect": "Equip: Increases healing done by spells and effects by up to 24.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 89s"
      }
    ]
  }
]
};
