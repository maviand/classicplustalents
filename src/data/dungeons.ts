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
            "name": "Ethereal Handguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+9 Spirit",
              "+6 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "2g 28s"
          },
          {
            "name": "Void-Touched Cowl of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+9 Agility",
              "+6 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "2g 76s"
          },
          {
            "name": "Blood-Forged Harness of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+10 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "3g 69s"
          },
          {
            "name": "Holy Slippers of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "4g 67s"
          },
          {
            "name": "Blood-Forged Pauldrons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+9 Agility",
              "+6 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "2g 12s"
          },
          {
            "name": "Blood-Forged Bracers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+9 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "3g 90s"
          },
          {
            "name": "Void-Touched Choker of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+9 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "2g 38s"
          },
          {
            "name": "Savage Pants of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+9 Stamina",
              "+6 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "3g 58s"
          },
          {
            "name": "Shimmering Bindings of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+9 Stamina",
              "+6 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Targorr the Dread",
            "requiresLevel": 30,
            "sellPrice": "2g 44s"
          },
          {
            "name": "Corrupted Footpads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+9 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Warden Thelwater",
            "requiresLevel": 30,
            "sellPrice": "3g 74s"
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
            "name": "Savage Harness of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+21 Intellect"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Ethereal Pants of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "4g 13s"
          },
          {
            "name": "Venerable Ring of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+21 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "6g 6s"
          },
          {
            "name": "Corrupted Loop of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "4g 4s"
          },
          {
            "name": "Holy Pendant of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "4g 66s"
          },
          {
            "name": "Shimmering Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Strength"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Corrupted Blade of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+15 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "4g 23s"
          },
          {
            "name": "Venerable Necklace of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "4g 65s"
          },
          {
            "name": "Void-Touched Breastplate of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "4g 7s"
          },
          {
            "name": "Shimmering Vambraces of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "+10 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "4g 44s"
          },
          {
            "name": "Holy Mitts of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "+10 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "4g 4s"
          },
          {
            "name": "Corrupted Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "4g 33s"
          },
          {
            "name": "Holy Sabatons of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Agility"
            ],
            "effect": "",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Void-Touched Cord of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: High Cultist Zenn",
            "requiresLevel": 50,
            "sellPrice": "4g 11s"
          },
          {
            "name": "Ethereal Pendant of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Dextren Ward",
            "requiresLevel": 50,
            "sellPrice": "5g 70s"
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
            "name": "Holy Kilt of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "8g 55s"
          },
          {
            "name": "Ethereal Pendant of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Holy Breastplate of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 Strength"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "8g 19s"
          },
          {
            "name": "Shimmering Gavel of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "8g 34s"
          },
          {
            "name": "Void-Touched Circlet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Ancient Staff of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Venerable Greaves of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Blood-Forged Kilt of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Shadow Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Ethereal Crown of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "8g 29s"
          },
          {
            "name": "Blood-Forged Blade of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Shadow Axe of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Venerable Blade of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 70s"
          },
          {
            "name": "Holy Blade of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Void-Touched Mask of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 85s"
          },
          {
            "name": "Shimmering Bindings of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "9g 1s"
          },
          {
            "name": "Ethereal Crown of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Blood-Forged Gavel of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Void-Touched Gloves of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "6g 45s"
          },
          {
            "name": "Corrupted Mitts of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Void-Touched Cord of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "8g 94s"
          },
          {
            "name": "Ethereal Gloves of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Shadow Mantle of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "9g 26s"
          },
          {
            "name": "Ethereal Gavel of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: Interrogator Vishas",
            "requiresLevel": 60,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Venerable Brooch of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Flesh-Shaper",
            "requiresLevel": 60,
            "sellPrice": "6g 85s"
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
            "name": "Ethereal Circlet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Void-Touched Harness of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "6g 0s"
          },
          {
            "name": "Shimmering Band of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "9g 29s"
          },
          {
            "name": "Blood-Forged Amice of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Holy Circlet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 66s"
          },
          {
            "name": "Ancient Mask of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Savage Mitts of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "5g 11s"
          },
          {
            "name": "Shimmering Amulet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Holy Bindings of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Void-Touched Wristguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Corrupted Wristguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Corrupted Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Ancient Epaulets of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Venerable Axe of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "8g 17s"
          },
          {
            "name": "Savage Vambraces of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "8g 39s"
          },
          {
            "name": "Corrupted Relic of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 18s"
          },
          {
            "name": "Ancient Seal of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "8g 32s"
          },
          {
            "name": "Shadow Belt of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 8s"
          },
          {
            "name": "Shadow Epaulets of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 80s"
          },
          {
            "name": "Void-Touched Pauldrons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Ethereal Ring of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Caretaker",
            "requiresLevel": 60,
            "sellPrice": "6g 41s"
          },
          {
            "name": "Venerable Cord of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+24 Stamina",
              "+16 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "9g 93s"
          },
          {
            "name": "Savage Aegis of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Void-Touched Defender of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "6g 3s"
          },
          {
            "name": "Ethereal Footpads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Amalgam of the Damned",
            "requiresLevel": 60,
            "sellPrice": "5g 70s"
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
            "name": "Shimmering Bow of the Crimson King",
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
            "sellPrice": "6g 19s"
          },
          {
            "name": "Holy Pendant of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Ancient Necklace of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 62s"
          },
          {
            "name": "Ethereal Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 58s"
          },
          {
            "name": "Holy Vest of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Holy Gavel of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 5s"
          },
          {
            "name": "Void-Touched Grips of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "8g 33s"
          },
          {
            "name": "Savage Axe of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 26s"
          },
          {
            "name": "Savage Mask of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 76s"
          },
          {
            "name": "Shimmering Gloves of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "8g 81s"
          },
          {
            "name": "Corrupted Blade of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 89s"
          },
          {
            "name": "Corrupted Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Corrupted Tunic of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Void-Touched Tunic of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "8g 0s"
          },
          {
            "name": "Ethereal Leggings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 61s"
          },
          {
            "name": "Shadow Kilt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 79s"
          },
          {
            "name": "Void-Touched Band of Bloodletting",
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
            "name": "Corrupted Slippers of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 80s"
          },
          {
            "name": "Ethereal Band of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Blood-Forged Kilt of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Savage Belt of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Shimmering Axe of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Strength"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "8g 81s"
          },
          {
            "name": "Corrupted Legguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 6s"
          },
          {
            "name": "Shimmering Buckler of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "6g 27s"
          },
          {
            "name": "Ancient Belt of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Shadow Gloves of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Shadow Signet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Shimmering Choker of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Venerable Crown of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Master of the Sinners",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Void-Touched Ring of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Drowning Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 92s"
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
            "name": "Savage Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 56s"
          },
          {
            "name": "Shimmering Blade of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Shadow Cowl of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Void-Touched Defender of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 29s"
          },
          {
            "name": "Ancient Amulet of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "9g 74s"
          },
          {
            "name": "Ancient Axe of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 52s"
          },
          {
            "name": "Blood-Forged Cuffs of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+24 Strength",
              "+16 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "9g 41s"
          },
          {
            "name": "Holy Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 28s"
          },
          {
            "name": "Corrupted Mantle of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Corrupted Gloves of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 38s"
          },
          {
            "name": "Savage Bracers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Corrupted Belt of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 50s"
          },
          {
            "name": "Void-Touched Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Void-Touched Pauldrons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 49s"
          },
          {
            "name": "Savage Seal of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Stamina",
              "+16 Spirit"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "8g 50s"
          },
          {
            "name": "Savage Amulet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Shadow Blade of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "5g 85s"
          },
          {
            "name": "Holy Mask of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "9g 63s"
          },
          {
            "name": "Shimmering Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "5g 59s"
          },
          {
            "name": "Savage Gauntlets of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 22s"
          },
          {
            "name": "Ethereal Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Ancient Dagger of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Void-Touched Signet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Venerable Leggings of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Blood-Forged Defender of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "5g 3s"
          },
          {
            "name": "Ancient Greatsword of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "9g 79s"
          },
          {
            "name": "Savage Seal of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 80s"
          },
          {
            "name": "Corrupted Waistguard of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "9g 35s"
          },
          {
            "name": "Blood-Forged Spaulders of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Void-Sealer",
            "requiresLevel": 60,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Shadow Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Animated Grimoire",
            "requiresLevel": 60,
            "sellPrice": "6g 79s"
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
            "name": "Ancient Axe of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Venerable Grips of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Blood-Forged Tunic of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Savage Brooch of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "4g 80s"
          },
          {
            "name": "Blood-Forged Bindings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "6g 22s"
          },
          {
            "name": "Shimmering Belt of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+15 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 56s"
          },
          {
            "name": "Savage Gavel of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "6g 48s"
          },
          {
            "name": "Ethereal Ring of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Corrupted Harness of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "4g 92s"
          },
          {
            "name": "Void-Touched Collar of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "4g 83s"
          },
          {
            "name": "Ethereal Greaves of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+21 Intellect",
              "+14 Spirit"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "7g 25s"
          },
          {
            "name": "Ancient Relic of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "4g 1s"
          },
          {
            "name": "Corrupted Pants of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "4g 66s"
          },
          {
            "name": "Ethereal Blade of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Rotting Ancient",
            "requiresLevel": 52,
            "sellPrice": "5g 80s"
          },
          {
            "name": "Shimmering Mantle of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Chieftain Bloodmaw",
            "requiresLevel": 52,
            "sellPrice": "4g 66s"
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
            "name": "Shimmering Bindings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 40s"
          },
          {
            "name": "Savage Signet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Agility",
              "+11 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "5g 50s"
          },
          {
            "name": "Savage Wristguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 94s"
          },
          {
            "name": "Blood-Forged Leggings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+11 Agility"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Shimmering Cord of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Void-Touched Footpads of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 85s"
          },
          {
            "name": "Corrupted Grips of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+17 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 94s"
          },
          {
            "name": "Void-Touched Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Intellect",
              "+11 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "6g 88s"
          },
          {
            "name": "Corrupted Pauldrons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Corrupted Treads of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+17 Spirit",
              "+11 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Ancient Dagger of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+23 Stamina",
              "+15 Agility"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "8g 37s"
          },
          {
            "name": "Blood-Forged Handguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "+11 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Ethereal Bindings of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Holy Legguards of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+23 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "9g 15s"
          },
          {
            "name": "Ancient Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Shimmering Seal of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Blood-Forged Loop of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Venerable Sabatons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+17 Agility",
              "+11 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Summoning Portal",
            "requiresLevel": 58,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Blood-Forged Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "4g 5s"
          },
          {
            "name": "Ancient Vest of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: Xandros the Fel-Lord",
            "requiresLevel": 58,
            "sellPrice": "4g 90s"
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
            "name": "Corrupted Greatsword of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 36s"
          },
          {
            "name": "Ethereal Bow of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Ancient Robes of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Void-Touched Epaulets of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 30s"
          },
          {
            "name": "Shadow Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 72s"
          },
          {
            "name": "Shimmering Pauldrons of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "9g 61s"
          },
          {
            "name": "Venerable Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 20s"
          },
          {
            "name": "Ethereal Greatsword of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "9g 85s"
          },
          {
            "name": "Blood-Forged Boots of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Ancient Slippers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 29s"
          },
          {
            "name": "Corrupted Seal of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 96s"
          },
          {
            "name": "Corrupted Seal of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 22s"
          },
          {
            "name": "Shadow Talisman of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 57s"
          },
          {
            "name": "Holy Cord of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Shadow Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 29s"
          },
          {
            "name": "Shadow Bindings of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 44s"
          },
          {
            "name": "Ancient Treads of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 83s"
          },
          {
            "name": "Savage Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Blood-Forged Cuffs of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Holy Medallion of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 53s"
          },
          {
            "name": "Savage Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 6s"
          },
          {
            "name": "Shimmering Medallion of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "5g 85s"
          },
          {
            "name": "Ethereal Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Blood-Forged Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 20s"
          },
          {
            "name": "Holy Mantle of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 1s"
          },
          {
            "name": "Ancient Cuffs of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "6g 83s"
          },
          {
            "name": "Savage Girdle of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Shimmering Belt of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Defiler",
            "requiresLevel": 60,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Void-Touched Bow of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 36s"
          },
          {
            "name": "Ancient Bracers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The First Chieftain",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
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
            "name": "Venerable Vambraces of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+23 Stamina",
              "+15 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "8g 14s"
          },
          {
            "name": "Holy Brooch of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Ancient Gavel of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 27s"
          },
          {
            "name": "Corrupted Cowl of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "8g 69s"
          },
          {
            "name": "Savage Handguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Shadow Mask of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 29s"
          },
          {
            "name": "Corrupted Seal of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Shimmering Talisman of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "5g 59s"
          },
          {
            "name": "Ethereal Medallion of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Holy Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength",
              "+11 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "4g 18s"
          },
          {
            "name": "Venerable Sash of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+11 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 20s"
          },
          {
            "name": "Blood-Forged Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 54s"
          },
          {
            "name": "Ethereal Medallion of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "4g 15s"
          },
          {
            "name": "Corrupted Ring of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Savage Epaulets of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+17 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Venerable Necklace of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "5g 54s"
          },
          {
            "name": "Savage Spaulders of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "8g 42s"
          },
          {
            "name": "Holy Mask of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: High-Executor Norgannon",
            "requiresLevel": 58,
            "sellPrice": "6g 5s"
          },
          {
            "name": "Venerable Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Ethereal Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Stamina",
              "+11 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Matrix-Lord",
            "requiresLevel": 58,
            "sellPrice": "6g 46s"
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
            "name": "Void-Touched Amulet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Holy Footpads of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "8g 42s"
          },
          {
            "name": "Void-Touched Spaulders of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "6g 89s"
          },
          {
            "name": "Ethereal Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 83s"
          },
          {
            "name": "Corrupted Pauldrons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Savage Band of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Blood-Forged Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "6g 80s"
          },
          {
            "name": "Shimmering Necklace of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Void-Touched Defender of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Ethereal Helm of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Corrupted Staff of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "6g 9s"
          },
          {
            "name": "Holy Dagger of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Blood-Forged Bulwark of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Blood-Forged Footpads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "5g 83s"
          },
          {
            "name": "Venerable Band of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Void-Touched Pendant of the Crimson King",
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
            "sellPrice": "5g 33s"
          },
          {
            "name": "Holy Tunic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Blood-Forged Staff of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "6g 85s"
          },
          {
            "name": "Ethereal Shield of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "6g 7s"
          },
          {
            "name": "Venerable Handguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "6g 57s"
          },
          {
            "name": "Holy Loop of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Ancient Gavel of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Void-Touched Handguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Savage Gloves of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Hive-Mind Incursor",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Ethereal Amulet of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: The Sculptor",
            "requiresLevel": 60,
            "sellPrice": "8g 53s"
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
            "name": "Shadow Vest of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Shadow Bindings of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 53s"
          },
          {
            "name": "Holy Greaves of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 67s"
          },
          {
            "name": "Shimmering Gloves of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Savage Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 72s"
          },
          {
            "name": "Savage Bow of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 17s"
          },
          {
            "name": "Venerable Loop of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 67s"
          },
          {
            "name": "Holy Loop of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+24 Strength",
              "+16 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "8g 3s"
          },
          {
            "name": "Corrupted Aegis of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Savage Mask of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 68s"
          },
          {
            "name": "Savage Slippers of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Holy Girdle of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 82s"
          },
          {
            "name": "Blood-Forged Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Venerable Staff of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Void-Touched Treads of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Shadow Circlet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Shimmering Greatsword of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+24 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "9g 91s"
          },
          {
            "name": "Corrupted Waistguard of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Shadow Pauldrons of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "9g 69s"
          },
          {
            "name": "Venerable Breastplate of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 61s"
          },
          {
            "name": "Shadow Medallion of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Blood-Forged Loop of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Ethereal Relic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 76s"
          },
          {
            "name": "Shimmering Axe of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Blood-Forged Pants of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Holy Cord of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Corrupted Band of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Savage Bow of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Corrupted Spaulders of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 22s"
          },
          {
            "name": "Void-Touched Bracers of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 78s"
          },
          {
            "name": "Shimmering Greatsword of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Shadow Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Void-Touched Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Corrupted Helm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 40s"
          },
          {
            "name": "Ancient Blade of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Void-Touched Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 52s"
          },
          {
            "name": "Blood-Forged Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Venerable Belt of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "6g 92s"
          },
          {
            "name": "Corrupted Circlet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: General Rajaxx's Vanguard",
            "requiresLevel": 60,
            "sellPrice": "6g 89s"
          },
          {
            "name": "Ethereal Waistguard of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: Increases your resistance to all schools of magic by 10.",
            "source": "Dropped by: Avatar of the Makers",
            "requiresLevel": 60,
            "sellPrice": "5g 62s"
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
            "name": "Venerable Mantle of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 39s"
          },
          {
            "name": "Holy Medallion of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Void-Touched Amice of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Blood-Forged Treads of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "+10 Strength"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 17s"
          },
          {
            "name": "Shimmering Legguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Ancient Mantle of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+22 Stamina",
              "+14 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "7g 52s"
          },
          {
            "name": "Venerable Choker of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Strength"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Shadow Slippers of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "4g 65s"
          },
          {
            "name": "Void-Touched Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+16 Spirit",
              "+10 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Venerable Staff of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+16 Intellect",
              "+10 Spirit"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "5g 10s"
          },
          {
            "name": "Ancient Wristguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 46s"
          },
          {
            "name": "Savage Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Strength",
              "+10 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "5g 90s"
          },
          {
            "name": "Void-Touched Band of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "8g 32s"
          },
          {
            "name": "Void-Touched Slippers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Dragonmaw Proto-Drake",
            "requiresLevel": 55,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Holy Gauntlets of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Siege Master",
            "requiresLevel": 55,
            "sellPrice": "5g 18s"
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
            "name": "Shadow Harness of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+17 Intellect",
              "+11 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Venerable Legguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "4g 57s"
          },
          {
            "name": "Void-Touched Waistguard of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "+11 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Ancient Leggings of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+17 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Savage Waistguard of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "+11 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Blood-Forged Staff of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+23 Spirit",
              "+15 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "9g 61s"
          },
          {
            "name": "Shimmering Axe of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+17 Spirit",
              "+11 Intellect"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Corrupted Mask of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "+11 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Ethereal Epaulets of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+23 Strength",
              "+15 Agility"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "8g 20s"
          },
          {
            "name": "Holy Aegis of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Stamina",
              "+11 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "4g 78s"
          },
          {
            "name": "Void-Touched Seal of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "9g 3s"
          },
          {
            "name": "Blood-Forged Cord of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Strength",
              "+11 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Ancient Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "4g 13s"
          },
          {
            "name": "Blood-Forged Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Spirit",
              "+11 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Void-Touched Choker of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Spirit",
              "+11 Intellect"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "4g 76s"
          },
          {
            "name": "Corrupted Robes of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+17 Intellect"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Ethereal Band of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+23 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "9g 9s"
          },
          {
            "name": "Savage Talisman of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Venerable Bulwark of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Agility",
              "+11 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: The Corrupted Whelp-Master",
            "requiresLevel": 58,
            "sellPrice": "4g 96s"
          },
          {
            "name": "Void-Touched Tunic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+17 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Broodmother",
            "requiresLevel": 58,
            "sellPrice": "6g 0s"
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
            "name": "Shimmering Medallion of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Savage Talisman of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "flavorText": "Forged in the heart of a dying star.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "9g 33s"
          },
          {
            "name": "Holy Defender of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Ethereal Gauntlets of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Corrupted Greatsword of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 42s"
          },
          {
            "name": "Ethereal Gloves of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 70s"
          },
          {
            "name": "Savage Seal of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Corrupted Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "6g 78s"
          },
          {
            "name": "Void-Touched Pendant of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 10s"
          },
          {
            "name": "Corrupted Medallion of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Ancient Handguards of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Intellect"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "9g 35s"
          },
          {
            "name": "Shadow Amulet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 4s"
          },
          {
            "name": "Ancient Relic of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Venerable Gloves of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Ethereal Belt of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Holy Dagger of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Savage Tunic of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "9g 9s"
          },
          {
            "name": "Corrupted Handguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Ancient Footpads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Ethereal Mask of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+24 Stamina",
              "+16 Agility"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "8g 34s"
          },
          {
            "name": "Venerable Gloves of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 22s"
          },
          {
            "name": "Void-Touched Staff of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "5g 85s"
          },
          {
            "name": "Holy Amulet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 50s"
          },
          {
            "name": "Void-Touched Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: The Grand Smith",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Shimmering Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 85s"
          },
          {
            "name": "Void-Touched Spaulders of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Holy Talisman of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "5g 22s"
          },
          {
            "name": "Shimmering Talisman of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "8g 42s"
          },
          {
            "name": "Void-Touched Bracers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Savage Pants of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Anvil of Doom",
            "requiresLevel": 60,
            "sellPrice": "6g 65s"
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
            "name": "Holy Bow of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Shadow Pendant of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Venerable Grips of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Corrupted Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Void-Touched Necklace of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Venerable Blade of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "9g 52s"
          },
          {
            "name": "Shimmering Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Shadow Vest of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+24 Intellect",
              "+16 Spirit"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "9g 60s"
          },
          {
            "name": "Corrupted Seal of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 52s"
          },
          {
            "name": "Venerable Bow of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 92s"
          },
          {
            "name": "Holy Vest of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "9g 27s"
          },
          {
            "name": "Ethereal Pauldrons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Void-Touched Slippers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 83s"
          },
          {
            "name": "Void-Touched Loop of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 18s"
          },
          {
            "name": "Void-Touched Wristguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 51s"
          },
          {
            "name": "Venerable Signet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 5s"
          },
          {
            "name": "Holy Bracers of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 4s"
          },
          {
            "name": "Ancient Belt of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Venerable Treads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 5s"
          },
          {
            "name": "Savage Greatsword of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Nightmare Stalker",
            "requiresLevel": 60,
            "sellPrice": "5g 40s"
          },
          {
            "name": "Void-Touched Pants of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Ethereal Treads of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 11s"
          },
          {
            "name": "Ancient Dagger of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 74s"
          },
          {
            "name": "Corrupted Dagger of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Ethereal Robes of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Waking Terror",
            "requiresLevel": 60,
            "sellPrice": "6g 7s"
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
            "name": "Venerable Relic of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "9g 55s"
          },
          {
            "name": "Venerable Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Shadow Relic of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "8g 66s"
          },
          {
            "name": "Venerable Shield of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 8s"
          },
          {
            "name": "Shadow Mitts of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "6g 94s"
          },
          {
            "name": "Void-Touched Kilt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 6s"
          },
          {
            "name": "Venerable Greatsword of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Shimmering Belt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 23s"
          },
          {
            "name": "Void-Touched Ring of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 61s"
          },
          {
            "name": "Corrupted Cowl of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 77s"
          },
          {
            "name": "Void-Touched Helm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "6g 69s"
          },
          {
            "name": "Ethereal Loop of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Corrupted Ring of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 25s"
          },
          {
            "name": "Holy Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Shimmering Cowl of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Ethereal Breastplate of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Savage Boots of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Savage Legguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Ethereal Mitts of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Blood-Forged Staff of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+12 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 34s"
          },
          {
            "name": "Shimmering Helm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "6g 46s"
          },
          {
            "name": "Void-Touched Spaulders of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Holy Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Venerable Staff of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Venerable Greaves of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Venerable Cowl of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "8g 15s"
          },
          {
            "name": "Holy Tunic of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+24 Agility",
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "Imbued with the furious essence of the Firelands.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "9g 6s"
          },
          {
            "name": "Void-Touched Axe of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+24 Stamina"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "9g 94s"
          },
          {
            "name": "Blood-Forged Ring of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Archimonde's Echo",
            "requiresLevel": 60,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Void-Touched Gavel of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: The Root-Tender",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
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
            "name": "Savage Harness of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 10s"
          },
          {
            "name": "Holy Amulet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 77s"
          },
          {
            "name": "Blood-Forged Crown of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Stamina"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Blood-Forged Sash of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 58s"
          },
          {
            "name": "Void-Touched Amice of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+18 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Ancient Boots of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+18 Agility"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 0s"
          },
          {
            "name": "Void-Touched Amulet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 93s"
          },
          {
            "name": "Holy Defender of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 90s"
          },
          {
            "name": "Savage Pants of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Strength",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 61s"
          },
          {
            "name": "Shadow Circlet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 28s"
          },
          {
            "name": "Holy Wristguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+18 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Venerable Handguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+12 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 19s"
          },
          {
            "name": "Savage Mitts of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+24 Spirit",
              "+16 Intellect"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "8g 93s"
          },
          {
            "name": "Shimmering Dagger of Bloodletting",
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
            "sellPrice": "6g 80s"
          },
          {
            "name": "Void-Touched Greaves of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 80s"
          },
          {
            "name": "Corrupted Blade of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Blood-Forged Greaves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 87s"
          },
          {
            "name": "Shadow Choker of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Savage Circlet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Spirit"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Shimmering Greatsword of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+18 Intellect",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "6g 43s"
          },
          {
            "name": "Shadow Cord of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 38s"
          },
          {
            "name": "Shimmering Circlet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+12 Spirit"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Corrupted Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+18 Agility",
              "+12 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Void-Touched Mantle of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+24 Spirit"
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dropped by: Haleh's Betrayer",
            "requiresLevel": 60,
            "sellPrice": "8g 80s"
          },
          {
            "name": "Savage Greatsword of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+18 Strength",
              "+12 Agility"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: The Archivist",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
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
            "name": "Savage Gavel of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Ancient Pauldrons of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 45s"
          },
          {
            "name": "Shadow Mask of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+15 Stamina",
              "+10 Intellect"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 4s"
          },
          {
            "name": "Shimmering Greatsword of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "4g 48s"
          },
          {
            "name": "Corrupted Dagger of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+15 Agility",
              "+10 Strength"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 48s"
          },
          {
            "name": "Venerable Sabatons of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "4g 43s"
          },
          {
            "name": "Savage Gauntlets of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+21 Agility"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Holy Staff of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Corrupted Talisman of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "4g 73s"
          },
          {
            "name": "Ancient Seal of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Venerable Robes of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "5g 39s"
          },
          {
            "name": "Venerable Necklace of the Unseen",
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
            "sellPrice": "5g 39s"
          },
          {
            "name": "Venerable Wristguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+15 Strength"
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "4g 89s"
          },
          {
            "name": "Shimmering Footpads of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Ancient Bracers of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Cloth",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Corrupted Amulet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 67s"
          },
          {
            "name": "Blood-Forged Boots of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "5g 56s"
          },
          {
            "name": "Ethereal Amulet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+10 Spirit"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "4g 67s"
          },
          {
            "name": "Corrupted Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "+10 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Lord Godfrey",
            "requiresLevel": 50,
            "sellPrice": "4g 21s"
          },
          {
            "name": "Void-Touched Kilt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "source": "Dropped by: The Royal Guard",
            "requiresLevel": 50,
            "sellPrice": "4g 25s"
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
            "name": "Ancient Blade of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+13 Intellect",
              "+8 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "4g 8s"
          },
          {
            "name": "Corrupted Helm of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+13 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "4g 14s"
          },
          {
            "name": "Ancient Charm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "3g 45s"
          },
          {
            "name": "Holy Pauldrons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+13 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "5g 35s"
          },
          {
            "name": "Ethereal Talisman of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "3g 12s"
          },
          {
            "name": "Corrupted Wristguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+13 Agility",
              "+8 Stamina"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "3g 39s"
          },
          {
            "name": "Holy Relic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "4g 33s"
          },
          {
            "name": "Venerable Vambraces of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+13 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Venerable Mitts of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+19 Stamina",
              "+12 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "6g 24s"
          },
          {
            "name": "Blood-Forged Charm of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Shadow Mask of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+13 Spirit",
              "+8 Intellect"
            ],
            "effect": "",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "4g 76s"
          },
          {
            "name": "Ethereal Harness of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+13 Stamina",
              "+8 Agility"
            ],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "3g 76s"
          },
          {
            "name": "Ancient Talisman of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "4g 98s"
          },
          {
            "name": "Shadow Gloves of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+13 Spirit"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "3g 25s"
          },
          {
            "name": "Venerable Pendant of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+13 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Mekgineer Thermaplugg (Echo)",
            "requiresLevel": 45,
            "sellPrice": "3g 11s"
          },
          {
            "name": "Corrupted Brooch of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "4g 20s"
          },
          {
            "name": "Shadow Pants of the Crimson King",
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
            "sellPrice": "5g 4s"
          },
          {
            "name": "Ancient Brooch of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Ancient Cowl of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+13 Agility",
              "+8 Stamina"
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "3g 34s"
          },
          {
            "name": "Corrupted Circlet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+13 Stamina",
              "+8 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "source": "Dropped by: Viscous Fallout",
            "requiresLevel": 45,
            "sellPrice": "3g 19s"
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
            "name": "Holy Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+16 Strength",
              "+10 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "4g 26s"
          },
          {
            "name": "Shimmering Girdle of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+16 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "6g 88s"
          },
          {
            "name": "Corrupted Band of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Strength",
              "+10 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "5g 4s"
          },
          {
            "name": "Blood-Forged Vest of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+22 Agility",
              "+14 Strength"
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "7g 39s"
          },
          {
            "name": "Blood-Forged Pants of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+16 Strength",
              "+10 Stamina"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Corrupted Choker of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Ancient Crown of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "4g 94s"
          },
          {
            "name": "Void-Touched Cuffs of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "4g 94s"
          },
          {
            "name": "Shimmering Axe of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+22 Intellect",
              "+14 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "flavorText": "Forged in the heart of a dying star.",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "7g 64s"
          },
          {
            "name": "Void-Touched Necklace of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina",
              "+10 Strength"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "5g 71s"
          },
          {
            "name": "Savage Charm of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "6g 97s"
          },
          {
            "name": "Savage Amulet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Ancient Girdle of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+16 Spirit",
              "+10 Stamina"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Corrupted Grips of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+16 Stamina"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Blood-Forged Mantle of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "6g 97s"
          },
          {
            "name": "Venerable Dagger of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+22 Spirit",
              "+14 Stamina"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "7g 52s"
          },
          {
            "name": "Blood-Forged Pendant of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+22 Spirit",
              "+14 Intellect"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "9g 86s"
          },
          {
            "name": "Blood-Forged Greatsword of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+22 Stamina"
            ],
            "effect": "Equip: +1% Hit chance.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "8g 88s"
          },
          {
            "name": "Void-Touched Slippers of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+22 Intellect",
              "+14 Stamina"
            ],
            "effect": "Equip: +10 Shadow Resistance.",
            "source": "Dropped by: Grand Inquisitor Isillien",
            "requiresLevel": 55,
            "sellPrice": "8g 51s"
          },
          {
            "name": "Ancient Harness of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+16 Agility",
              "+10 Stamina"
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "source": "Dropped by: Scarlet Executioner",
            "requiresLevel": 55,
            "sellPrice": "6g 97s"
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
        "name": "Nightmare-Forged Sabatons of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "9g 47s"
      },
      {
        "name": "Nightmare-Forged Signet of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 47s"
      },
      {
        "name": "Corrupted Gavel of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+27 Agility",
          "+18 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 22s"
      },
      {
        "name": "Emerald Greatsword of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 52s"
      },
      {
        "name": "Slumbering Ring of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "11g 77s"
      },
      {
        "name": "Nightmare-Forged Kilt of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "11g 12s"
      },
      {
        "name": "Slumbering Pendant of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Intellect",
          "+18 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 3s"
      },
      {
        "name": "Corrupted Necklace of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "10g 30s"
      },
      {
        "name": "Corrupted Gloves of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+27 Agility",
          "+18 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "9g 90s"
      },
      {
        "name": "Dream-Scarred Tunic of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "10g 55s"
      },
      {
        "name": "Dream-Scarred Dagger of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+27 Spirit",
          "+18 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "11g 78s"
      },
      {
        "name": "Emerald Amice of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "9g 97s"
      },
      {
        "name": "Corrupted Cowl of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "10g 31s"
      },
      {
        "name": "Nightmare-Forged Wristguards of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "10g 55s"
      },
      {
        "name": "Slumbering Breastplate of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+27 Stamina",
          "+18 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "9g 64s"
      },
      {
        "name": "Emerald Mantle of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "11g 18s"
      },
      {
        "name": "Corrupted Cowl of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "11g 95s"
      },
      {
        "name": "Dream-Scarred Pendant of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Agility",
          "+18 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Corrupted Gauntlets of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+27 Stamina",
          "+18 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "10g 25s"
      },
      {
        "name": "Dream-Scarred Blade of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "10g 12s"
      },
      {
        "name": "Corrupted Greatsword of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "10g 92s"
      },
      {
        "name": "Nightmare-Forged Wristguards of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "10g 73s"
      },
      {
        "name": "Nightmare-Forged Girdle of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+27 Spirit",
          "+18 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "11g 4s"
      },
      {
        "name": "Slumbering Gavel of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+27 Stamina",
          "+18 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "11g 47s"
      },
      {
        "name": "Nightmare-Forged Defender of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "10g 64s"
      },
      {
        "name": "Slumbering Blade of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+27 Spirit",
          "+18 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "11g 68s"
      },
      {
        "name": "Dream-Scarred Pendant of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Spirit",
          "+18 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 12s"
      },
      {
        "name": "Corrupted Staff of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "10g 35s"
      },
      {
        "name": "Slumbering Band of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "11g 68s"
      },
      {
        "name": "Corrupted Dagger of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+27 Stamina",
          "+18 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 44s"
      },
      {
        "name": "Emerald Pauldrons of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+27 Strength",
          "+18 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "11g 60s"
      },
      {
        "name": "Corrupted Mantle of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+27 Intellect",
          "+18 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 68s"
      },
      {
        "name": "Corrupted Relic of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 33s"
      },
      {
        "name": "Dream-Scarred Crown of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "11g 7s"
      },
      {
        "name": "Slumbering Brooch of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "10g 84s"
      },
      {
        "name": "Corrupted Axe of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+27 Strength",
          "+18 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "10g 21s"
      },
      {
        "name": "Emerald Vest of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "11g 3s"
      },
      {
        "name": "Nightmare-Forged Vambraces of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+27 Agility",
          "+18 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "9g 47s"
      },
      {
        "name": "Corrupted Kilt of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "9g 88s"
      },
      {
        "name": "Emerald Amulet of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Corrupted Axe of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+27 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "10g 72s"
      },
      {
        "name": "Nightmare-Forged Necklace of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "9g 97s"
      },
      {
        "name": "Slumbering Bindings of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+27 Agility",
          "+18 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Ysondre",
        "requiresLevel": 60,
        "sellPrice": "11g 58s"
      },
      {
        "name": "Nightmare-Forged Ring of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "10g 41s"
      },
      {
        "name": "Dream-Scarred Footpads of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "11g 76s"
      },
      {
        "name": "Emerald Gauntlets of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+27 Agility",
          "+18 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "10g 30s"
      },
      {
        "name": "Nightmare-Forged Waistguard of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+27 Stamina",
          "+18 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Taerar",
        "requiresLevel": 60,
        "sellPrice": "10g 14s"
      },
      {
        "name": "Nightmare-Forged Gloves of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+27 Strength"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: Emeriss",
        "requiresLevel": 60,
        "sellPrice": "11g 32s"
      },
      {
        "name": "Dream-Scarred Bow of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+27 Strength",
          "+18 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Eranikus",
        "requiresLevel": 60,
        "sellPrice": "11g 16s"
      },
      {
        "name": "Dream-Scarred Sabatons of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+27 Stamina",
          "+18 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Lethon",
        "requiresLevel": 60,
        "sellPrice": "10g 85s"
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
        "name": "Enslaved Talisman of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "10g 48s"
      },
      {
        "name": "Searing Bow of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Agility",
          "+19 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 33s"
      },
      {
        "name": "Enslaved Shield of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "10g 82s"
      },
      {
        "name": "Dragonmaw Cord of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 12s"
      },
      {
        "name": "Red Scale Axe of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 4s"
      },
      {
        "name": "Enslaved Helm of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+19 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 45s"
      },
      {
        "name": "Enslaved Spaulders of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 69s"
      },
      {
        "name": "Dragonmaw Belt of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+28 Strength",
          "+19 Agility"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 32s"
      },
      {
        "name": "Dragonmaw Treads of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "10g 67s"
      },
      {
        "name": "Enslaved Girdle of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+28 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 31s"
      },
      {
        "name": "Mountain-Forged Talisman of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 59s"
      },
      {
        "name": "Enslaved Medallion of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 45s"
      },
      {
        "name": "Enslaved Harness of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+28 Spirit",
          "+19 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 8s"
      },
      {
        "name": "Dragonmaw Grips of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 82s"
      },
      {
        "name": "Enslaved Staff of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+28 Strength",
          "+19 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 0s"
      },
      {
        "name": "Enslaved Choker of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "10g 65s"
      },
      {
        "name": "Searing Legguards of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 90s"
      },
      {
        "name": "Searing Handguards of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+19 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "12g 5s"
      },
      {
        "name": "Dragonmaw Axe of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 43s"
      },
      {
        "name": "Mountain-Forged Greatsword of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "12g 10s"
      },
      {
        "name": "Mountain-Forged Dagger of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 23s"
      },
      {
        "name": "Searing Necklace of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 48s"
      },
      {
        "name": "Dragonmaw Pendant of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Intellect",
          "+19 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 72s"
      },
      {
        "name": "Searing Loop of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 2s"
      },
      {
        "name": "Enslaved Gloves of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 85s"
      },
      {
        "name": "Searing Axe of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 39s"
      },
      {
        "name": "Dragonmaw Gauntlets of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+19 Intellect"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Dragonmaw Aegis of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "10g 81s"
      },
      {
        "name": "Mountain-Forged Breastplate of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 86s"
      },
      {
        "name": "Searing Medallion of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 82s"
      },
      {
        "name": "Enslaved Epaulets of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 9s"
      },
      {
        "name": "Dragonmaw Gavel of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 6s"
      },
      {
        "name": "Searing Mitts of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 65s"
      },
      {
        "name": "Red Scale Axe of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+28 Spirit",
          "+19 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 90s"
      },
      {
        "name": "Searing Band of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 1s"
      },
      {
        "name": "Enslaved Spaulders of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+19 Intellect"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 74s"
      },
      {
        "name": "Mountain-Forged Brooch of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 3s"
      },
      {
        "name": "Enslaved Relic of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 8s"
      },
      {
        "name": "Searing Slippers of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 10s"
      },
      {
        "name": "Mountain-Forged Epaulets of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 98s"
      },
      {
        "name": "Red Scale Staff of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+28 Agility",
          "+19 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 74s"
      },
      {
        "name": "Dragonmaw Band of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "10g 98s"
      },
      {
        "name": "Mountain-Forged Pendant of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Agility",
          "+19 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 24s"
      },
      {
        "name": "Dragonmaw Mitts of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+28 Strength",
          "+19 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "12g 44s"
      },
      {
        "name": "Searing Helm of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 15s"
      },
      {
        "name": "Dragonmaw Amice of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 32s"
      },
      {
        "name": "Red Scale Breastplate of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+28 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 89s"
      },
      {
        "name": "Dragonmaw Medallion of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 62s"
      },
      {
        "name": "Enslaved Collar of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Spirit",
          "+19 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "12g 94s"
      },
      {
        "name": "Mountain-Forged Ring of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Spirit",
          "+19 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "10g 75s"
      },
      {
        "name": "Searing Belt of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 29s"
      },
      {
        "name": "Searing Axe of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "12g 58s"
      },
      {
        "name": "Searing Choker of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 27s"
      },
      {
        "name": "Dragonmaw Breastplate of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 1s"
      },
      {
        "name": "Searing Helm of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 9s"
      },
      {
        "name": "Red Scale Belt of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 83s"
      },
      {
        "name": "Searing Crown of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 15s"
      },
      {
        "name": "Searing Necklace of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 70s"
      },
      {
        "name": "Enslaved Sabatons of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 67s"
      },
      {
        "name": "Enslaved Wristguards of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "10g 83s"
      },
      {
        "name": "Dragonmaw Girdle of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+28 Intellect",
          "+19 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 52s"
      },
      {
        "name": "Searing Grips of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 70s"
      },
      {
        "name": "Red Scale Bindings of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 62s"
      },
      {
        "name": "Searing Greaves of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 94s"
      },
      {
        "name": "Searing Slippers of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+28 Agility",
          "+19 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "11g 38s"
      },
      {
        "name": "Dragonmaw Waistguard of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "12g 64s"
      },
      {
        "name": "Dragonmaw Bulwark of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 50s"
      },
      {
        "name": "Dragonmaw Belt of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+28 Stamina",
          "+19 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: Warchief Nek'rosh",
        "requiresLevel": 60,
        "sellPrice": "10g 45s"
      },
      {
        "name": "Searing Vest of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "12g 19s"
      },
      {
        "name": "Red Scale Legguards of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "12g 51s"
      },
      {
        "name": "Searing Helm of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+28 Intellect"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 26s"
      },
      {
        "name": "Enslaved Boots of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 98s"
      },
      {
        "name": "Searing Pauldrons of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+28 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Alexstrasza (Enslaved)",
        "requiresLevel": 60,
        "sellPrice": "11g 60s"
      },
      {
        "name": "Dragonmaw Crown of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+28 Strength",
          "+19 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 2s"
      },
      {
        "name": "Dragonmaw Amulet of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 80s"
      },
      {
        "name": "Red Scale Loop of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 39s"
      },
      {
        "name": "Red Scale Cuffs of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+28 Spirit",
          "+19 Intellect"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Demon Soul",
        "requiresLevel": 60,
        "sellPrice": "11g 51s"
      },
      {
        "name": "Enslaved Sash of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "11g 90s"
      },
      {
        "name": "Red Scale Amice of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+28 Stamina",
          "+19 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 90s"
      },
      {
        "name": "Dragonmaw Band of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Crimson Behemoth",
        "requiresLevel": 60,
        "sellPrice": "10g 43s"
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
        "name": "Scourge-Forged Crown of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+30 Spirit",
          "+20 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 35s"
      },
      {
        "name": "Plague-Ridden Tunic of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+30 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 15s"
      },
      {
        "name": "Plague-Ridden Ring of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Agility",
          "+20 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 58s"
      },
      {
        "name": "Cursed Band of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Stamina",
          "+20 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "13g 19s"
      },
      {
        "name": "Necrotic Robes of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "13g 80s"
      },
      {
        "name": "Plague-Ridden Helm of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+30 Strength",
          "+20 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 61s"
      },
      {
        "name": "Cursed Spaulders of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+30 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "13g 27s"
      },
      {
        "name": "Necrotic Harness of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+30 Strength",
          "+20 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 9s"
      },
      {
        "name": "Plague-Ridden Sash of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+30 Strength",
          "+20 Stamina"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 31s"
      },
      {
        "name": "Cursed Bow of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+30 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 83s"
      },
      {
        "name": "Cursed Greatsword of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+30 Spirit",
          "+20 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 18s"
      },
      {
        "name": "Death-Bound Ring of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Stamina",
          "+20 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "13g 24s"
      },
      {
        "name": "Cursed Pants of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+30 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 41s"
      },
      {
        "name": "Cursed Pendant of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Strength",
          "+20 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 56s"
      },
      {
        "name": "Cursed Axe of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+30 Strength",
          "+20 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 23s"
      },
      {
        "name": "Necrotic Bow of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+30 Stamina",
          "+20 Intellect"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 73s"
      },
      {
        "name": "Necrotic Boots of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+30 Intellect",
          "+20 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 65s"
      },
      {
        "name": "Cursed Blade of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 20s"
      },
      {
        "name": "Cursed Sash of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 59s"
      },
      {
        "name": "Scourge-Forged Mitts of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 44s"
      },
      {
        "name": "Scourge-Forged Shield of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+30 Agility",
          "+20 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 16s"
      },
      {
        "name": "Scourge-Forged Staff of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+30 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 22s"
      },
      {
        "name": "Death-Bound Gloves of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 67s"
      },
      {
        "name": "Plague-Ridden Staff of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 34s"
      },
      {
        "name": "Plague-Ridden Amulet of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Strength",
          "+20 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 14s"
      },
      {
        "name": "Scourge-Forged Blade of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+30 Stamina",
          "+20 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 55s"
      },
      {
        "name": "Cursed Talisman of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 50s"
      },
      {
        "name": "Necrotic Blade of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+30 Agility",
          "+20 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "13g 96s"
      },
      {
        "name": "Scourge-Forged Loop of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Plague-Ridden Axe of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 14s"
      },
      {
        "name": "Death-Bound Sash of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+30 Stamina",
          "+20 Agility"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 96s"
      },
      {
        "name": "Plague-Ridden Bow of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+30 Agility",
          "+20 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "13g 78s"
      },
      {
        "name": "Death-Bound Ring of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Spirit",
          "+20 Stamina"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 7s"
      },
      {
        "name": "Plague-Ridden Amice of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+30 Intellect",
          "+20 Spirit"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 77s"
      },
      {
        "name": "Scourge-Forged Crown of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "11g 70s"
      },
      {
        "name": "Cursed Kilt of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+30 Stamina",
          "+20 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "12g 4s"
      },
      {
        "name": "Plague-Ridden Bow of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+30 Stamina",
          "+20 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 88s"
      },
      {
        "name": "Necrotic Defender of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+30 Strength",
          "+20 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 15s"
      },
      {
        "name": "Plague-Ridden Axe of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 81s"
      },
      {
        "name": "Necrotic Seal of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Stamina",
          "+20 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 74s"
      },
      {
        "name": "Cursed Boots of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+30 Intellect",
          "+20 Spirit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 44s"
      },
      {
        "name": "Scourge-Forged Defender of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+30 Stamina",
          "+20 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 97s"
      },
      {
        "name": "Scourge-Forged Ring of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "12g 52s"
      },
      {
        "name": "Scourge-Forged Slippers of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+30 Intellect",
          "+20 Spirit"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 53s"
      },
      {
        "name": "Scourge-Forged Gloves of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+30 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 15s"
      },
      {
        "name": "Cursed Pendant of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+30 Intellect",
          "+20 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "source": "Dropped by: Kel'Thuzad's Phylactery-Guard",
        "requiresLevel": 60,
        "sellPrice": "11g 77s"
      },
      {
        "name": "Scourge-Forged Bow of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+30 Intellect",
          "+20 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 48s"
      },
      {
        "name": "Scourge-Forged Spaulders of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+30 Strength",
          "+20 Stamina"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 73s"
      },
      {
        "name": "Necrotic Shield of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+30 Strength",
          "+20 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Highlord Mograine",
        "requiresLevel": 60,
        "sellPrice": "12g 80s"
      },
      {
        "name": "Plague-Ridden Band of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+30 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Blood Council",
        "requiresLevel": 60,
        "sellPrice": "11g 94s"
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
        "name": "Timeless Pauldrons of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+31 Stamina",
          "+21 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 36s"
      },
      {
        "name": "Timeless Sash of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 41s"
      },
      {
        "name": "Timeless Mitts of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 49s"
      },
      {
        "name": "Medivh's Loop of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 16s"
      },
      {
        "name": "Timeless Pendant of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 89s"
      },
      {
        "name": "Timeless Seal of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 75s"
      },
      {
        "name": "Timeless Waistguard of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "11g 78s"
      },
      {
        "name": "Rift-Touched Sabatons of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "12g 57s"
      },
      {
        "name": "Medivh's Handguards of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 10s"
      },
      {
        "name": "Rift-Touched Gloves of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 88s"
      },
      {
        "name": "Timeless Crown of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "11g 56s"
      },
      {
        "name": "Ethereal Gloves of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 59s"
      },
      {
        "name": "Timeless Robes of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 45s"
      },
      {
        "name": "Astral Bindings of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Medivh's Staff of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 75s"
      },
      {
        "name": "Medivh's Circlet of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 21s"
      },
      {
        "name": "Timeless Pauldrons of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 91s"
      },
      {
        "name": "Astral Bulwark of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 78s"
      },
      {
        "name": "Astral Pauldrons of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 38s"
      },
      {
        "name": "Medivh's Grips of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 7s"
      },
      {
        "name": "Rift-Touched Gavel of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 12s"
      },
      {
        "name": "Rift-Touched Leggings of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 72s"
      },
      {
        "name": "Ethereal Amulet of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Rift-Touched Belt of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 80s"
      },
      {
        "name": "Medivh's Signet of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 43s"
      },
      {
        "name": "Medivh's Pauldrons of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 93s"
      },
      {
        "name": "Medivh's Gavel of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 92s"
      },
      {
        "name": "Timeless Cuffs of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 50s"
      },
      {
        "name": "Timeless Robes of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 67s"
      },
      {
        "name": "Ethereal Pants of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+31 Intellect",
          "+21 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 53s"
      },
      {
        "name": "Rift-Touched Footpads of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 88s"
      },
      {
        "name": "Astral Bow of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 71s"
      },
      {
        "name": "Astral Brooch of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 7s"
      },
      {
        "name": "Medivh's Cuffs of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 36s"
      },
      {
        "name": "Astral Cowl of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 54s"
      },
      {
        "name": "Medivh's Seal of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Stamina",
          "+21 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 62s"
      },
      {
        "name": "Timeless Loop of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 79s"
      },
      {
        "name": "Astral Signet of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 2s"
      },
      {
        "name": "Timeless Legguards of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 50s"
      },
      {
        "name": "Medivh's Staff of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 84s"
      },
      {
        "name": "Rift-Touched Grips of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+31 Intellect",
          "+21 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "11g 65s"
      },
      {
        "name": "Medivh's Defender of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 25s"
      },
      {
        "name": "Medivh's Robes of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+31 Spirit",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 16s"
      },
      {
        "name": "Rift-Touched Mantle of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 73s"
      },
      {
        "name": "Astral Belt of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 37s"
      },
      {
        "name": "Rift-Touched Medallion of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "12g 24s"
      },
      {
        "name": "Rift-Touched Sabatons of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 98s"
      },
      {
        "name": "Medivh's Gavel of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 1s"
      },
      {
        "name": "Ethereal Spaulders of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 1s"
      },
      {
        "name": "Medivh's Necklace of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "11g 15s"
      },
      {
        "name": "Timeless Pants of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 80s"
      },
      {
        "name": "Timeless Bracers of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 4s"
      },
      {
        "name": "Astral Band of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Strength",
          "+21 Agility"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 7s"
      },
      {
        "name": "Medivh's Necklace of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "12g 8s"
      },
      {
        "name": "Medivh's Relic of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "12g 8s"
      },
      {
        "name": "Ethereal Collar of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 51s"
      },
      {
        "name": "Rift-Touched Handguards of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+31 Intellect",
          "+21 Spirit"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "11g 98s"
      },
      {
        "name": "Rift-Touched Necklace of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Strength",
          "+21 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 16s"
      },
      {
        "name": "Timeless Helm of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 7s"
      },
      {
        "name": "Ethereal Sash of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 77s"
      },
      {
        "name": "Astral Gauntlets of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 4s"
      },
      {
        "name": "Medivh's Cord of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 7s"
      },
      {
        "name": "Timeless Vambraces of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+31 Stamina",
          "+21 Intellect"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 18s"
      },
      {
        "name": "Ethereal Gavel of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 24s"
      },
      {
        "name": "Rift-Touched Tunic of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 79s"
      },
      {
        "name": "Medivh's Crown of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 59s"
      },
      {
        "name": "Timeless Gloves of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 65s"
      },
      {
        "name": "Rift-Touched Signet of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Stamina",
          "+21 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 72s"
      },
      {
        "name": "Timeless Loop of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 27s"
      },
      {
        "name": "Timeless Mitts of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+31 Intellect",
          "+21 Stamina"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 72s"
      },
      {
        "name": "Medivh's Bindings of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+31 Intellect",
          "+21 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 92s"
      },
      {
        "name": "Astral Gloves of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "11g 51s"
      },
      {
        "name": "Medivh's Waistguard of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 14s"
      },
      {
        "name": "Astral Circlet of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 9s"
      },
      {
        "name": "Medivh's Slippers of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 47s"
      },
      {
        "name": "Ethereal Amulet of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "12g 49s"
      },
      {
        "name": "Timeless Band of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Agility",
          "+21 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "12g 10s"
      },
      {
        "name": "Timeless Dagger of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+31 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 55s"
      },
      {
        "name": "Medivh's Brooch of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 42s"
      },
      {
        "name": "Timeless Girdle of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+31 Stamina",
          "+21 Strength"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 32s"
      },
      {
        "name": "Astral Slippers of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 15s"
      },
      {
        "name": "Medivh's Mitts of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 62s"
      },
      {
        "name": "Rift-Touched Choker of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Stamina",
          "+21 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "12g 0s"
      },
      {
        "name": "Timeless Medallion of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Rift-Touched Necklace of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: The Curator",
        "requiresLevel": 60,
        "sellPrice": "13g 40s"
      },
      {
        "name": "Ethereal Boots of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 52s"
      },
      {
        "name": "Medivh's Footpads of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+31 Intellect",
          "+21 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 15s"
      },
      {
        "name": "Ethereal Spaulders of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+31 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 86s"
      },
      {
        "name": "Medivh's Breastplate of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "12g 8s"
      },
      {
        "name": "Astral Kilt of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+31 Stamina",
          "+21 Agility"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "12g 26s"
      },
      {
        "name": "Astral Brooch of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 27s"
      },
      {
        "name": "Astral Kilt of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 17s"
      },
      {
        "name": "Timeless Necklace of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 65s"
      },
      {
        "name": "Medivh's Loop of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+31 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Shade of Aran",
        "requiresLevel": 60,
        "sellPrice": "13g 53s"
      },
      {
        "name": "Medivh's Relic of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Attumen",
        "requiresLevel": 60,
        "sellPrice": "13g 17s"
      },
      {
        "name": "Timeless Bow of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+31 Strength"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "11g 19s"
      },
      {
        "name": "Medivh's Axe of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+31 Strength",
          "+21 Stamina"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: Moroes",
        "requiresLevel": 60,
        "sellPrice": "13g 27s"
      },
      {
        "name": "Medivh's Mantle of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+31 Agility",
          "+21 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "13g 19s"
      },
      {
        "name": "Ethereal Gavel of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+31 Spirit",
          "+21 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Nightbane",
        "requiresLevel": 60,
        "sellPrice": "13g 94s"
      },
      {
        "name": "Astral Choker of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+31 Stamina",
          "+21 Agility"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Prince Malchezaar",
        "requiresLevel": 60,
        "sellPrice": "12g 35s"
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
        "name": "Maddening Cuffs of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+33 Intellect",
          "+22 Spirit"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 75s"
      },
      {
        "name": "Maddening Greatsword of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 94s"
      },
      {
        "name": "Tentacled Gavel of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 1s"
      },
      {
        "name": "Whispering Mitts of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 68s"
      },
      {
        "name": "Whispering Helm of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "12g 85s"
      },
      {
        "name": "Void-Touched Breastplate of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 33s"
      },
      {
        "name": "Whispering Blade of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+33 Stamina",
          "+22 Spirit"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 62s"
      },
      {
        "name": "Void-Touched Charm of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 23s"
      },
      {
        "name": "Maddening Choker of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 15s"
      },
      {
        "name": "Void-Touched Greatsword of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+33 Agility",
          "+22 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 7s"
      },
      {
        "name": "Faceless Wristguards of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 74s"
      },
      {
        "name": "Void-Touched Slippers of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 34s"
      },
      {
        "name": "Maddening Cord of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 88s"
      },
      {
        "name": "Void-Touched Medallion of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 67s"
      },
      {
        "name": "Faceless Collar of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 54s"
      },
      {
        "name": "Faceless Gavel of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 13s"
      },
      {
        "name": "Tentacled Collar of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Stamina",
          "+22 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 61s"
      },
      {
        "name": "Maddening Axe of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 3s"
      },
      {
        "name": "Tentacled Handguards of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 83s"
      },
      {
        "name": "Faceless Kilt of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 22s"
      },
      {
        "name": "Faceless Gloves of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+33 Intellect",
          "+22 Spirit"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 5s"
      },
      {
        "name": "Whispering Defender of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 66s"
      },
      {
        "name": "Void-Touched Epaulets of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Stamina"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "12g 97s"
      },
      {
        "name": "Faceless Gauntlets of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 92s"
      },
      {
        "name": "Void-Touched Boots of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 42s"
      },
      {
        "name": "Void-Touched Axe of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 64s"
      },
      {
        "name": "Void-Touched Amulet of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 50s"
      },
      {
        "name": "Maddening Necklace of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Stamina",
          "+22 Spirit"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 74s"
      },
      {
        "name": "Whispering Greatsword of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Intellect",
          "+22 Stamina"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 79s"
      },
      {
        "name": "Faceless Shield of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "12g 32s"
      },
      {
        "name": "Maddening Handguards of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 65s"
      },
      {
        "name": "Faceless Cowl of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Agility"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 87s"
      },
      {
        "name": "Tentacled Axe of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+33 Intellect",
          "+22 Spirit"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 56s"
      },
      {
        "name": "Void-Touched Robes of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 60s"
      },
      {
        "name": "Whispering Helm of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 59s"
      },
      {
        "name": "Void-Touched Defender of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 50s"
      },
      {
        "name": "Tentacled Wristguards of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+33 Intellect",
          "+22 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 45s"
      },
      {
        "name": "Void-Touched Crown of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 69s"
      },
      {
        "name": "Faceless Breastplate of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 82s"
      },
      {
        "name": "Faceless Seal of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 87s"
      },
      {
        "name": "Tentacled Blade of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 98s"
      },
      {
        "name": "Whispering Harness of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 87s"
      },
      {
        "name": "Void-Touched Robes of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+33 Stamina",
          "+22 Agility"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 9s"
      },
      {
        "name": "Void-Touched Pendant of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 83s"
      },
      {
        "name": "Whispering Helm of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 75s"
      },
      {
        "name": "Maddening Tunic of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 60s"
      },
      {
        "name": "Void-Touched Dagger of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 74s"
      },
      {
        "name": "Whispering Mask of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 10s"
      },
      {
        "name": "Whispering Band of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Increases your resistance to all schools of magic by 10.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 98s"
      },
      {
        "name": "Faceless Gavel of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+33 Intellect",
          "+22 Spirit"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 29s"
      },
      {
        "name": "Void-Touched Dagger of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "12g 34s"
      },
      {
        "name": "Void-Touched Leggings of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 43s"
      },
      {
        "name": "Maddening Band of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 63s"
      },
      {
        "name": "Tentacled Seal of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 25s"
      },
      {
        "name": "Faceless Slippers of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Spirit"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 8s"
      },
      {
        "name": "Maddening Greatsword of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 20s"
      },
      {
        "name": "Whispering Sabatons of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 22s"
      },
      {
        "name": "Tentacled Loop of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "12g 88s"
      },
      {
        "name": "Whispering Bow of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 58s"
      },
      {
        "name": "Faceless Gavel of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "12g 96s"
      },
      {
        "name": "Whispering Vambraces of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 31s"
      },
      {
        "name": "Whispering Kilt of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 65s"
      },
      {
        "name": "Faceless Tunic of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+33 Spirit",
          "+22 Stamina"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 30s"
      },
      {
        "name": "Tentacled Axe of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+33 Strength",
          "+22 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 51s"
      },
      {
        "name": "Maddening Bracers of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "12g 85s"
      },
      {
        "name": "Void-Touched Bow of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 98s"
      },
      {
        "name": "Void-Touched Bow of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 89s"
      },
      {
        "name": "Tentacled Cord of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Intellect"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "12g 89s"
      },
      {
        "name": "Tentacled Boots of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 24s"
      },
      {
        "name": "Tentacled Wristguards of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +10 Shadow Resistance.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 65s"
      },
      {
        "name": "Void-Touched Boots of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 90s"
      },
      {
        "name": "Tentacled Bracers of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 62s"
      },
      {
        "name": "Maddening Handguards of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 15s"
      },
      {
        "name": "Void-Touched Sabatons of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Void-Touched Band of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Strength"
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 10s"
      },
      {
        "name": "Void-Touched Cowl of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+33 Stamina",
          "+22 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 27s"
      },
      {
        "name": "Whispering Pauldrons of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 66s"
      },
      {
        "name": "Tentacled Ring of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: +1% Hit chance.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 63s"
      },
      {
        "name": "Maddening Cord of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+33 Agility"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Forged in the heart of a dying star.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 56s"
      },
      {
        "name": "Faceless Sash of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 61s"
      },
      {
        "name": "Maddening Leggings of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+33 Stamina",
          "+22 Spirit"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 25s"
      },
      {
        "name": "Whispering Medallion of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 10s"
      },
      {
        "name": "Tentacled Cuffs of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 80s"
      },
      {
        "name": "Faceless Gavel of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 81s"
      },
      {
        "name": "Tentacled Cowl of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Stamina"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 71s"
      },
      {
        "name": "Maddening Brooch of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 54s"
      },
      {
        "name": "Void-Touched Buckler of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Stamina",
          "+22 Agility"
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "14g 3s"
      },
      {
        "name": "Faceless Relic of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 30s"
      },
      {
        "name": "Maddening Blade of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+33 Intellect",
          "+22 Stamina"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "12g 90s"
      },
      {
        "name": "Whispering Pendant of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 37s"
      },
      {
        "name": "Tentacled Footpads of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Faceless General",
        "requiresLevel": 60,
        "sellPrice": "13g 78s"
      },
      {
        "name": "Void-Touched Spaulders of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 52s"
      },
      {
        "name": "Maddening Signet of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Spirit",
          "+22 Intellect"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 71s"
      },
      {
        "name": "Void-Touched Amulet of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+33 Strength",
          "+22 Agility"
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "Imbued with the furious essence of the Firelands.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "13g 66s"
      },
      {
        "name": "Whispering Slippers of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+33 Intellect"
        ],
        "effect": "Use: Transforms the caster into a spectral wolf, increasing movement speed by 40% for 10 sec.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 19s"
      },
      {
        "name": "Maddening Greatsword of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+33 Stamina"
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 46s"
      },
      {
        "name": "Void-Touched Loop of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Chance on hit: Summons a skeletal servant to fight by your side for 1 minute.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "14g 36s"
      },
      {
        "name": "Maddening Wristguards of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 61s"
      },
      {
        "name": "Void-Touched Mask of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+33 Spirit"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dropped by: The Devolved Aspect",
        "requiresLevel": 60,
        "sellPrice": "13g 10s"
      },
      {
        "name": "Tentacled Aegis of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+33 Agility",
          "+22 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dropped by: Avatar of the Old God",
        "requiresLevel": 60,
        "sellPrice": "14g 0s"
      }
    ]
  }
]
};
