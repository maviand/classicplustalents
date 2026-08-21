export const PVE_CATS = {
  DUNGEONS: 'The New Dungeons (Winged Hubs)',
  RAIDS: 'Parallel Raid Tiers (SoD 10 / 20 / 40 Man Formats)'
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
        "level": "25-30 (5 Man)",
        "desc": "The holding cells.",
        "bosses": [
          "Warden Thelwater",
          "Targorr the Dread"
        ],
        "loot": [
          {
            "name": "Venerable Cord of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+8 Intellect",
              "+6 Stamina",
              "Equip: Increases spell damage by up to 15."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "3g 7s"
          },
          {
            "name": "Ancient Ring of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+10 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 18s"
          },
          {
            "name": "Holy Mantle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+8 Intellect",
              "Equip: Increases healing power by up to 15."
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 63s"
          },
          {
            "name": "Shadow Robes of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+11 Stamina",
              "+9 Intellect",
              "Equip: Restores 2 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "3g 77s"
          },
          {
            "name": "Blood-Forged Belt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+11 Stamina",
              "+7 Intellect",
              "+5 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 58s"
          },
          {
            "name": "Holy Necklace of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+13 Agility",
              "+5 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "3g 30s"
          },
          {
            "name": "Ancient Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+11 Strength",
              "+8 Stamina",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "3g 62s"
          },
          {
            "name": "Void-Touched Waistguard of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+8 Stamina",
              "+8 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "3g 57s"
          },
          {
            "name": "Shadow Pauldrons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+7 Intellect",
              "Equip: Restores 2 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "3g 57s"
          },
          {
            "name": "Void-Touched Legguards of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+11 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 30,
            "sellPrice": "2g 58s"
          }
        ]
      },
      {
        "name": "The Deep Cellblocks",
        "level": "45-50 (5 Man)",
        "desc": "Where the true enemies are kept.",
        "bosses": [
          "High Cultist Zenn",
          "Dextren Ward"
        ],
        "loot": [
          {
            "name": "Shadow Epaulets of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+10 Spirit",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Shadow Sash of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+12 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 95s"
          },
          {
            "name": "Holy Pants of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+8 Agility"
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Ethereal Circlet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+11 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 27s"
          },
          {
            "name": "Ethereal Charm of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 25s"
          },
          {
            "name": "Ethereal Ring of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Stamina",
              "+13 Strength",
              "Equip: Increases attack power by up to 25."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Blood-Forged Gloves of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+14 Strength",
              "Equip: Increases attack power by up to 25."
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 15s"
          },
          {
            "name": "Blood-Forged Boots of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "Equip: Increases spell damage by up to 25."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Corrupted Aegis of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Intellect",
              "Equip: Increases healing power by up to 25."
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "7g 13s"
          },
          {
            "name": "Ethereal Boots of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+8 Spirit"
            ],
            "effect": "",
            "flavorText": "Imbued with the furious essence of elemental fire.",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "7g 74s"
          },
          {
            "name": "Savage Sabatons of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Void-Touched Signet of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+10 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 32s"
          },
          {
            "name": "Blood-Forged Greatsword of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Agility",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Blood-Forged Gavel of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Agility",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 77s"
          },
          {
            "name": "Ancient Bulwark of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Increases healing power by up to 25."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 3s"
          }
        ]
      },
      {
        "name": "The Interrogation Levels",
        "level": "55-60 (5 Man)",
        "desc": "A descent into madness.",
        "bosses": [
          "Interrogator Vishas",
          "The Flesh-Shaper"
        ],
        "loot": [
          {
            "name": "Corrupted Circlet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Void-Touched Relic of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 42s"
          },
          {
            "name": "Savage Belt of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+20 Stamina",
              "+14 Strength",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 85s"
          },
          {
            "name": "Ancient Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+13 Strength",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 64s"
          },
          {
            "name": "Void-Touched Gavel of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+19 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 9s"
          },
          {
            "name": "Savage Ring of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 50s"
          },
          {
            "name": "Ethereal Waistguard of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 1s"
          },
          {
            "name": "Savage Signet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 36s"
          },
          {
            "name": "Ethereal Amulet of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 53s"
          },
          {
            "name": "Ancient Choker of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Intellect",
              "+15 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 56s"
          },
          {
            "name": "Venerable Belt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 42s"
          },
          {
            "name": "Blood-Forged Amice of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "+15 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 92s"
          },
          {
            "name": "Holy Defender of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Stamina",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Holy Pendant of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "+15 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Shadow Breastplate of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "+13 Strength",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Void-Touched Dagger of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Strength",
              "+14 Stamina",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Corrupted Gauntlets of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+14 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Shadow Mantle of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+15 Spirit",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 56s"
          },
          {
            "name": "Corrupted Wristguards of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "+14 Stamina",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 71s"
          },
          {
            "name": "Blood-Forged Blade of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+20 Intellect",
              "+14 Spirit",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Void-Touched Circlet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Corrupted Sash of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+20 Stamina",
              "+13 Spirit",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Shimmering Ring of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 2s"
          },
          {
            "name": "Venerable Mantle of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+19 Agility",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Savage Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 30s"
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
    "environmentalHazards": "Unlit chambers require players to carry torches or activate braziers to avoid being overwhelmed in pitch darkness.",
    "secrets": [
      "A hidden tome grants the party a permanent +10 Shadow Resistance buff for the dungeon.",
      "A neutral ghost vendor sells unique tailoring patterns."
    ],
    "wings": [
      {
        "name": "The Well of the Forgotten",
        "level": "58-60 (5 Man)",
        "desc": "Mass graves.",
        "bosses": [
          "The Caretaker",
          "Amalgam of the Damned"
        ],
        "loot": [
          {
            "name": "Ancient Bindings of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Ethereal Staff of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+20 Strength",
              "+14 Stamina",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 51s"
          },
          {
            "name": "Ancient Legguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+19 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 62s"
          },
          {
            "name": "Holy Amulet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+12 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 37s"
          },
          {
            "name": "Shadow Choker of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Agility",
              "+13 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Shadow Handguards of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+20 Spirit",
              "+12 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Ancient Breastplate of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+19 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 84s"
          },
          {
            "name": "Shimmering Signet of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Stamina",
              "+14 Strength",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Equip: Armor Penetration increased by 30.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 98s"
          },
          {
            "name": "Shadow Waistguard of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+20 Stamina",
              "+10 Intellect"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Blood-Forged Bow of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 87s"
          },
          {
            "name": "Blood-Forged Signet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Shimmering Vambraces of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+20 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 9s"
          },
          {
            "name": "Ethereal Staff of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Shadow Pendant of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+15 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Corrupted Amulet of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina",
              "+10 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Shadow Slippers of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+15 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 46s"
          },
          {
            "name": "Ethereal Breastplate of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "Equip: Armor Penetration increased by 30.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 65s"
          },
          {
            "name": "Venerable Sabatons of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "+15 Spirit",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 72s"
          },
          {
            "name": "Shimmering Wristguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+20 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Void-Touched Grips of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+19 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 57s"
          },
          {
            "name": "Ancient Greaves of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+12 Agility",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Void-Touched Axe of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+20 Intellect",
              "+14 Spirit",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Savage Shield of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Intellect",
              "+14 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 75s"
          },
          {
            "name": "Holy Bow of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Spirit",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Holy Handguards of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "+13 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 85s"
          }
        ]
      },
      {
        "name": "The Upside-Down Sinners",
        "level": "60 (5 Man)",
        "desc": "Subterranean terror.",
        "bosses": [
          "The Drowning Terror",
          "Master of the Sinners"
        ],
        "loot": [
          {
            "name": "Venerable Relic of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 33s"
          },
          {
            "name": "Void-Touched Charm of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases healing done by up to 25.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 75s"
          },
          {
            "name": "Holy Bulwark of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 72s"
          },
          {
            "name": "Void-Touched Footpads of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Venerable Relic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Blood-Forged Harness of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Savage Breastplate of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Void-Touched Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+18 Intellect",
              "+12 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 40s"
          },
          {
            "name": "Corrupted Bow of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+15 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 98s"
          },
          {
            "name": "Blood-Forged Buckler of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 36s"
          },
          {
            "name": "Holy Charm of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Shimmering Helm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Shadow Pants of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+19 Intellect",
              "+13 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Ancient Vambraces of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+12 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Shimmering Leggings of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Ancient Blade of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+19 Stamina",
              "+14 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "Forged in the heart of an ancient titan caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 36s"
          },
          {
            "name": "Corrupted Amulet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Stamina",
              "+14 Agility",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Equip: Armor Penetration increased by 30.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 11s"
          },
          {
            "name": "Blood-Forged Slippers of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+20 Stamina",
              "+15 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Ethereal Waistguard of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "Forged in the heart of an ancient titan caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 76s"
          },
          {
            "name": "Holy Bulwark of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Stamina",
              "+12 Strength",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 22s"
          },
          {
            "name": "Holy Medallion of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 73s"
          },
          {
            "name": "Ancient Relic of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 97s"
          },
          {
            "name": "Ethereal Aegis of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Spirit",
              "+12 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 5s"
          },
          {
            "name": "Ancient Talisman of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 0s"
          },
          {
            "name": "Savage Gavel of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+19 Stamina",
              "+12 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 46s"
          },
          {
            "name": "Void-Touched Shield of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Strength",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "Equip: Increases your defense rating by 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Blood-Forged Dagger of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Strength",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Savage Sash of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+20 Stamina",
              "+15 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 33s"
          },
          {
            "name": "Corrupted Necklace of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+20 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 29s"
          },
          {
            "name": "Blood-Forged Waistguard of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+16 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 91s"
          }
        ]
      },
      {
        "name": "The Reliquary of Secrets",
        "level": "60 (5 Man)",
        "desc": "Forbidden artifacts.",
        "bosses": [
          "The Animated Grimoire",
          "The Void-Sealer"
        ],
        "loot": [
          {
            "name": "Void-Touched Shield of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+20 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 68s"
          },
          {
            "name": "Ethereal Seal of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 57s"
          },
          {
            "name": "Venerable Vest of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+14 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Venerable Talisman of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Venerable Gavel of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+16 Agility",
              "+15 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Equip: +20 Attack Power.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Corrupted Bulwark of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Agility",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 43s"
          },
          {
            "name": "Venerable Kilt of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+16 Intellect",
              "+12 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Savage Epaulets of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+19 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Shimmering Amulet of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+20 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 11s"
          },
          {
            "name": "Shimmering Mantle of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+19 Intellect",
              "+15 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Blood-Forged Leggings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+14 Agility",
              "+10 Armor"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Venerable Handguards of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "+14 Stamina",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Ethereal Mitts of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+13 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 16s"
          },
          {
            "name": "Ancient Breastplate of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+19 Agility",
              "+12 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Equip: +1% Hit chance.",
            "flavorText": "Forged in the heart of an ancient titan caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 47s"
          },
          {
            "name": "Void-Touched Leggings of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+19 Intellect",
              "+14 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 10s"
          },
          {
            "name": "Ancient Dagger of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Stamina",
              "+15 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 52s"
          },
          {
            "name": "Savage Gavel of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Agility",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 74s"
          },
          {
            "name": "Blood-Forged Gavel of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Savage Aegis of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Strength",
              "+14 Stamina",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Shimmering Handguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+15 Stamina",
              "+14 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Blood-Forged Ring of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Stamina",
              "+15 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Shimmering Staff of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+17 Stamina",
              "+10 Agility"
            ],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Ancient Crown of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Venerable Cord of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+19 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 83s"
          },
          {
            "name": "Blood-Forged Cord of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Holy Greatsword of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Corrupted Axe of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+20 Stamina",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Corrupted Band of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+19 Stamina",
              "+13 Agility",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 39s"
          },
          {
            "name": "Venerable Blade of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Spirit",
              "+13 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Void-Touched Band of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
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
        "level": "48-52 (5 Man)",
        "desc": "Besieged hold.",
        "bosses": [
          "Chieftain Bloodmaw",
          "The Rotting Ancient"
        ],
        "loot": [
          {
            "name": "Ancient Cuffs of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+14 Stamina",
              "+12 Intellect",
              "Equip: Increases spell damage by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 70s"
          },
          {
            "name": "Savage Cord of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+17 Intellect",
              "+12 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Shadow Mantle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Equip: +1% Spell Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 71s"
          },
          {
            "name": "Ethereal Greaves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+15 Stamina",
              "+8 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Shimmering Sash of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "+12 Stamina",
              "+8 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 12s"
          },
          {
            "name": "Ancient Breastplate of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "Equip: Increases spell damage by up to 26."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 86s"
          },
          {
            "name": "Corrupted Axe of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+14 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Shimmering Vest of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+11 Strength",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 89s"
          },
          {
            "name": "Void-Touched Belt of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+10 Stamina",
              "+8 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "6g 49s"
          },
          {
            "name": "Ancient Amice of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Holy Bulwark of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+16 Stamina",
              "+14 Agility",
              "Equip: Increases defense rating by 7."
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Ethereal Helm of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+14 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "Equip: Armor Penetration increased by 30.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Ancient Relic of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Void-Touched Brooch of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "6g 23s"
          },
          {
            "name": "Holy Bindings of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "+10 Spirit",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 52,
            "sellPrice": "5g 86s"
          }
        ]
      },
      {
        "name": "The Fel-Scar",
        "level": "55-58 (5 Man)",
        "desc": "Demonic incursion.",
        "bosses": [
          "Xandros the Fel-Lord",
          "The Summoning Portal"
        ],
        "loot": [
          {
            "name": "Ancient Leggings of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 14s"
          },
          {
            "name": "Void-Touched Aegis of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Intellect",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Ancient Slippers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+13 Agility",
              "Equip: Increases attack power by up to 29."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Shimmering Tunic of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "+15 Stamina",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "Equip: Increases threat generated by all attacks by 5%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 54s"
          },
          {
            "name": "Ancient Pendant of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+14 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 45s"
          },
          {
            "name": "Savage Harness of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+14 Stamina",
              "+14 Agility",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 37s"
          },
          {
            "name": "Ancient Medallion of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 18s"
          },
          {
            "name": "Shimmering Talisman of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 15s"
          },
          {
            "name": "Corrupted Pendant of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Agility",
              "+12 Stamina",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 76s"
          },
          {
            "name": "Savage Breastplate of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+9 Intellect"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "9g 58s"
          },
          {
            "name": "Savage Spaulders of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+14 Strength",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Void-Touched Gauntlets of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+14 Intellect",
              "+9 Spirit"
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 31s"
          },
          {
            "name": "Corrupted Waistguard of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 29."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Void-Touched Shield of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Void-Touched Greaves of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "8g 97s"
          },
          {
            "name": "Shadow Bindings of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+20 Strength",
              "+9 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 41s"
          },
          {
            "name": "Shimmering Talisman of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "8g 1s"
          },
          {
            "name": "Savage Boots of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+15 Agility",
              "+14 Stamina",
              "+9 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "9g 34s"
          },
          {
            "name": "Venerable Robes of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Blood-Forged Talisman of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 50s"
          }
        ]
      },
      {
        "name": "The Ancestral Hollow",
        "level": "60 (5 Man)",
        "desc": "Defiled burial grounds.",
        "bosses": [
          "The First Chieftain",
          "The Defiler"
        ],
        "loot": [
          {
            "name": "Venerable Pendant of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Strength",
              "+13 Stamina",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 38s"
          },
          {
            "name": "Corrupted Girdle of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+14 Strength",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 67s"
          },
          {
            "name": "Shimmering Mantle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 82s"
          },
          {
            "name": "Corrupted Leggings of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+19 Stamina",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Equip: +1% Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 69s"
          },
          {
            "name": "Blood-Forged Pendant of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Agility",
              "+14 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 48s"
          },
          {
            "name": "Ethereal Gauntlets of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Agility",
              "+12 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 67s"
          },
          {
            "name": "Ethereal Epaulets of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+19 Intellect",
              "+12 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 45s"
          },
          {
            "name": "Ethereal Harness of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+20 Strength",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Blood-Forged Collar of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "+13 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 4s"
          },
          {
            "name": "Blood-Forged Buckler of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+17 Stamina",
              "+13 Spirit",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Ancient Breastplate of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "+14 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Savage Grips of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 7s"
          },
          {
            "name": "Holy Bow of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+17 Strength",
              "+14 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 44s"
          },
          {
            "name": "Void-Touched Dagger of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Bow",
            "stats": [
              "+17 Stamina",
              "+12 Agility",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 77s"
          },
          {
            "name": "Ancient Vest of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+19 Agility",
              "+13 Stamina",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 22s"
          },
          {
            "name": "Ancient Amulet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect",
              "+12 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Shadow Gloves of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 10s"
          },
          {
            "name": "Void-Touched Waistguard of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 70s"
          },
          {
            "name": "Venerable Blade of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Intellect",
              "+15 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Shimmering Handguards of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+16 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 8s"
          },
          {
            "name": "Ancient Greatsword of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+16 Agility",
              "+15 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Savage Boots of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "+12 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 75s"
          },
          {
            "name": "Ethereal Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Ethereal Handguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+19 Agility",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Equip: +1% Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 59s"
          },
          {
            "name": "Ancient Pants of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "+14 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 57s"
          },
          {
            "name": "Savage Handguards of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 10s"
          },
          {
            "name": "Ancient Mantle of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+19 Agility",
              "+13 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "Equip: +1% Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 14s"
          },
          {
            "name": "Savage Mask of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Shadow Waistguard of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+20 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 14s"
          },
          {
            "name": "Corrupted Kilt of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+19 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "Equip: +1% Critical Strike.",
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
    "environmentalHazards": "Lasers sweep the corridors. Touching them alerts nearby constructs and applies a stacking fire vulnerability.",
    "secrets": [
      "An archaeology puzzle in the Maker's Terrace rewards a unique epic mount.",
      "Hidden Titan discs reveal lore about the Old Gods."
    ],
    "wings": [
      {
        "name": "The Maker's Terrace",
        "level": "55-58 (5 Man)",
        "desc": "Titan facility.",
        "bosses": [
          "High-Executor Norgannon",
          "Matrix-Lord"
        ],
        "loot": [
          {
            "name": "Ancient Girdle of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 29."
            ],
            "effect": "Equip: +1% Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "8g 83s"
          },
          {
            "name": "Holy Cowl of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "+13 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Holy Shield of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Stamina",
              "+9 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 12s"
          },
          {
            "name": "Ancient Gavel of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 26s"
          },
          {
            "name": "Corrupted Gloves of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+20 Agility",
              "+15 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 66s"
          },
          {
            "name": "Savage Ring of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Strength",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Void-Touched Signet of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "8g 51s"
          },
          {
            "name": "Corrupted Breastplate of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+12 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 39s"
          },
          {
            "name": "Ethereal Mantle of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+13 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 64s"
          },
          {
            "name": "Savage Vest of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+19 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 40s"
          },
          {
            "name": "Holy Gauntlets of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+13 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 15s"
          },
          {
            "name": "Shadow Relic of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 63s"
          },
          {
            "name": "Shimmering Medallion of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Venerable Cowl of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "Equip: Increases healing power by up to 29."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 35s"
          },
          {
            "name": "Ancient Amice of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+17 Intellect",
              "+14 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "8g 44s"
          },
          {
            "name": "Corrupted Necklace of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+20 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Holy Pants of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+19 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Corrupted Kilt of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "Equip: Increases healing power by up to 29."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 58s"
          },
          {
            "name": "Blood-Forged Gauntlets of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+14 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "8g 71s"
          },
          {
            "name": "Savage Pendant of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+14 Agility",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "Imbued with the furious essence of elemental fire.",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "7g 83s"
          }
        ]
      },
      {
        "name": "The Obsidian Quarry",
        "level": "58-60 (5 Man)",
        "desc": "Construct manufacturing.",
        "bosses": [
          "The Sculptor",
          "The Hive-Mind Incursor"
        ],
        "loot": [
          {
            "name": "Ancient Collar of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Intellect",
              "+14 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 3s"
          },
          {
            "name": "Blood-Forged Gloves of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+16 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Corrupted Necklace of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+15 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Corrupted Seal of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+19 Agility",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Equip: +1% Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Venerable Greatsword of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+19 Stamina",
              "+12 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Corrupted Ring of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Agility",
              "+12 Stamina",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 20s"
          },
          {
            "name": "Ancient Brooch of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 9s"
          },
          {
            "name": "Ethereal Amulet of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "+14 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Ancient Brooch of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Shimmering Seal of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Intellect",
              "+15 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Shimmering Brooch of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases threat generated by all attacks by 5%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Holy Relic of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Void-Touched Gauntlets of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Ethereal Collar of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Stamina",
              "+13 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Holy Blade of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+15 Stamina",
              "+15 Strength",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Shadow Mantle of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "+15 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Holy Greatsword of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Strength",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 41s"
          },
          {
            "name": "Blood-Forged Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+20 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 38s"
          },
          {
            "name": "Blood-Forged Slippers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+15 Agility",
              "+10 Armor"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Blood-Forged Gauntlets of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 59s"
          },
          {
            "name": "Corrupted Loop of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+13 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 39s"
          },
          {
            "name": "Corrupted Pendant of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Stamina",
              "+13 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 73s"
          },
          {
            "name": "Shimmering Boots of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+15 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 91s"
          },
          {
            "name": "Holy Breastplate of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 18s"
          },
          {
            "name": "Savage Grips of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+20 Stamina",
              "+15 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 17s"
          }
        ]
      },
      {
        "name": "The Engine of Origination",
        "level": "60 (5 Man)",
        "desc": "The core.",
        "bosses": [
          "General Rajaxx's Vanguard",
          "Avatar of the Makers"
        ],
        "loot": [
          {
            "name": "Shadow Spaulders of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 55s"
          },
          {
            "name": "Holy Crown of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+17 Spirit",
              "+12 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 49s"
          },
          {
            "name": "Venerable Amice of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+20 Stamina",
              "+10 Strength"
            ],
            "effect": "Equip: Increases threat generated by all attacks by 5%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 40s"
          },
          {
            "name": "Shadow Amice of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+20 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 60s"
          },
          {
            "name": "Ethereal Relic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 36s"
          },
          {
            "name": "Ancient Loop of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Ethereal Cord of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Shadow Waistguard of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+19 Spirit",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 40s"
          },
          {
            "name": "Void-Touched Band of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+19 Stamina",
              "+12 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 22s"
          },
          {
            "name": "Shimmering Sash of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Ethereal Gauntlets of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+13 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 9s"
          },
          {
            "name": "Void-Touched Sash of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 19s"
          },
          {
            "name": "Ethereal Pendant of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Intellect",
              "+12 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 21s"
          },
          {
            "name": "Blood-Forged Talisman of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 80s"
          },
          {
            "name": "Holy Kilt of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 64s"
          },
          {
            "name": "Shadow Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 75s"
          },
          {
            "name": "Shimmering Relic of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
            "flavorText": "A faint whispering can be heard when held to the ear.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 60s"
          },
          {
            "name": "Void-Touched Staff of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 21s"
          },
          {
            "name": "Shadow Dagger of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+20 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 43s"
          },
          {
            "name": "Shadow Bow of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Venerable Gavel of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+19 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 5s"
          },
          {
            "name": "Venerable Belt of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 86s"
          },
          {
            "name": "Venerable Treads of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+16 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Shadow Gavel of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Venerable Signet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+19 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 74s"
          },
          {
            "name": "Ancient Vambraces of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "+10 Intellect"
            ],
            "effect": "",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 81s"
          },
          {
            "name": "Ancient Greatsword of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+18 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 85s"
          },
          {
            "name": "Shadow Breastplate of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+15 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 9s"
          },
          {
            "name": "Holy Breastplate of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+20 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Blood-Forged Axe of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+19 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 28s"
          },
          {
            "name": "Blood-Forged Band of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Intellect",
              "+12 Spirit",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 82s"
          },
          {
            "name": "Shadow Pendant of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Holy Gloves of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+19 Agility",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Blood-Forged Crown of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "+15 Stamina",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 89s"
          },
          {
            "name": "Venerable Treads of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 68s"
          },
          {
            "name": "Shimmering Ring of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Intellect",
              "+14 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Ancient Grips of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
            "flavorText": "Imbued with the furious essence of elemental fire.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 46s"
          },
          {
            "name": "Shadow Cord of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Corrupted Handguards of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+16 Intellect",
              "+14 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Venerable Harness of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+16 Agility",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 44s"
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
        "level": "52-55 (5 Man)",
        "desc": "Fortified entrance.",
        "bosses": [
          "The Siege Master",
          "Dragonmaw Proto-Drake"
        ],
        "loot": [
          {
            "name": "Shadow Signet of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+14 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Void-Touched Blade of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+13 Stamina",
              "+13 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 23s"
          },
          {
            "name": "Blood-Forged Gavel of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+19 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 65s"
          },
          {
            "name": "Venerable Buckler of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Agility",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "Use: Absorbs 500 magic damage for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 1s"
          },
          {
            "name": "Corrupted Spaulders of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+14 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 76s"
          },
          {
            "name": "Void-Touched Charm of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "8g 49s"
          },
          {
            "name": "Ancient Defender of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Venerable Axe of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+14 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Void-Touched Axe of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+15 Strength",
              "+13 Stamina",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 67s"
          },
          {
            "name": "Shimmering Charm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 51s"
          },
          {
            "name": "Shimmering Shield of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Spirit",
              "+12 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Shadow Seal of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Agility",
              "+9 Armor"
            ],
            "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 17s"
          },
          {
            "name": "Shimmering Greaves of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "+11 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 2s"
          },
          {
            "name": "Shadow Band of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Stamina",
              "+12 Intellect",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Ethereal Pauldrons of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Cloth",
            "stats": [
              "+19 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "8g 20s"
          }
        ]
      },
      {
        "name": "The Hatcheries",
        "level": "55-58 (5 Man)",
        "desc": "Red Dragonflight breeding.",
        "bosses": [
          "The Broodmother",
          "The Corrupted Whelp-Master"
        ],
        "loot": [
          {
            "name": "Blood-Forged Helm of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+17 Intellect",
              "+14 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 19s"
          },
          {
            "name": "Shimmering Shield of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Spirit",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Venerable Breastplate of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+12 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "8g 27s"
          },
          {
            "name": "Shadow Harness of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Plate",
            "stats": [
              "+16 Stamina",
              "+9 Agility"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 88s"
          },
          {
            "name": "Savage Cowl of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+17 Intellect",
              "Equip: Increases spell damage by up to 29."
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 70s"
          },
          {
            "name": "Blood-Forged Circlet of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Plate",
            "stats": [
              "+16 Strength",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 98s"
          },
          {
            "name": "Void-Touched Sash of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "+11 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Ancient Talisman of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Blood-Forged Belt of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+15 Stamina",
              "Equip: Increases healing power by up to 29."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 6s"
          },
          {
            "name": "Venerable Choker of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 81s"
          },
          {
            "name": "Savage Bindings of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "+13 Intellect",
              "Equip: Increases spell damage by up to 29."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 6s"
          },
          {
            "name": "Blood-Forged Bracers of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "+15 Strength",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Void-Touched Greatsword of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+12 Agility",
              "Equip: Increases attack power by up to 29."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Ancient Aegis of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Intellect",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "5g 2s"
          },
          {
            "name": "Venerable Footpads of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Cloth",
            "stats": [
              "+14 Intellect",
              "+12 Stamina",
              "Equip: Increases spell damage by up to 29."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 94s"
          },
          {
            "name": "Holy Grips of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+20 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 71s"
          },
          {
            "name": "Venerable Signet of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+13 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "8g 12s"
          },
          {
            "name": "Shadow Amice of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+9 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "6g 48s"
          },
          {
            "name": "Ethereal Sabatons of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+20 Stamina",
              "+14 Strength",
              "Equip: Increases attack power by up to 29."
            ],
            "effect": "Equip: +1% Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "8g 35s"
          },
          {
            "name": "Venerable Defender of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Stamina",
              "+12 Intellect",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 58,
            "sellPrice": "4g 46s"
          }
        ]
      },
      {
        "name": "The Deep Forge",
        "level": "60 (5 Man)",
        "desc": "Wildhammer forges.",
        "bosses": [
          "The Grand Smith",
          "The Anvil of Doom"
        ],
        "loot": [
          {
            "name": "Corrupted Amice of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+20 Strength",
              "+14 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 40s"
          },
          {
            "name": "Venerable Pauldrons of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+14 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 77s"
          },
          {
            "name": "Ancient Defender of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Intellect",
              "+13 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 16s"
          },
          {
            "name": "Void-Touched Relic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 35s"
          },
          {
            "name": "Corrupted Gauntlets of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+20 Intellect",
              "+13 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Void-Touched Axe of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect",
              "+15 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 55s"
          },
          {
            "name": "Blood-Forged Brooch of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Venerable Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Ethereal Axe of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "+15 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 11s"
          },
          {
            "name": "Void-Touched Medallion of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +20 Attack Power.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 72s"
          },
          {
            "name": "Ancient Relic of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 53s"
          },
          {
            "name": "Ethereal Epaulets of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+19 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 10s"
          },
          {
            "name": "Holy Loop of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 27s"
          },
          {
            "name": "Corrupted Axe of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+18 Agility",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 82s"
          },
          {
            "name": "Shimmering Blade of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Agility",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 97s"
          },
          {
            "name": "Blood-Forged Dagger of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+19 Intellect",
              "+13 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 50s"
          },
          {
            "name": "Holy Crown of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+19 Intellect",
              "+12 Spirit",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 58s"
          },
          {
            "name": "Savage Staff of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+19 Intellect",
              "+14 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 80s"
          },
          {
            "name": "Corrupted Epaulets of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+10 Spirit"
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 0s"
          },
          {
            "name": "Savage Robes of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+15 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 92s"
          },
          {
            "name": "Venerable Dagger of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+16 Strength",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 75s"
          },
          {
            "name": "Holy Waistguard of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+20 Stamina",
              "+15 Strength",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 95s"
          },
          {
            "name": "Holy Greatsword of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Stamina",
              "+13 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Equip: +1% Spell Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 4s"
          },
          {
            "name": "Blood-Forged Axe of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Axe",
            "stats": [
              "+17 Stamina",
              "+13 Strength",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 96s"
          },
          {
            "name": "Holy Seal of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+17 Intellect",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Blood-Forged Boots of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+20 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Holy Buckler of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Strength",
              "+14 Stamina",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 95s"
          },
          {
            "name": "Blood-Forged Crown of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Leather",
            "stats": [
              "+16 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 65s"
          },
          {
            "name": "Holy Loop of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Stamina",
              "+14 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "Imbued with the furious essence of elemental fire.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 19s"
          },
          {
            "name": "Savage Bracers of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+19 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 8s"
          }
        ]
      }
    ]
  },
  {
    "id": "HyjalBarrowDens",
    "name": "The Barrow Dens (Hyjal)",
    "loreHistory": "The sacred underground hibernation chambers of the druids in Mount Hyjal. The Emerald Nightmare has begun seeping through the roots of Nordrassil, corrupting the sleeping druids.",
    "strategyGuide": "Dispel \"Slumbering Poison\" immediately. If it expires, the player is put to sleep for 30 seconds.",
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
        "level": "58-60 (5 Man)",
        "desc": "Nightmare.",
        "bosses": [
          "The Nightmare Stalker",
          "The Waking Terror"
        ],
        "loot": [
          {
            "name": "Corrupted Mitts of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 47s"
          },
          {
            "name": "Savage Kilt of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Intellect",
              "+13 Stamina",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Shimmering Vambraces of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+19 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Ancient Slippers of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "+14 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 82s"
          },
          {
            "name": "Blood-Forged Spaulders of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+17 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Equip: +1% Spell Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 34s"
          },
          {
            "name": "Venerable Epaulets of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Strength",
              "+12 Stamina",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 70s"
          },
          {
            "name": "Savage Kilt of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Intellect",
              "+14 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 77s"
          },
          {
            "name": "Savage Gauntlets of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Void-Touched Talisman of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 43s"
          },
          {
            "name": "Venerable Cord of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+15 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 72s"
          },
          {
            "name": "Shadow Bulwark of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 44s"
          },
          {
            "name": "Ancient Waistguard of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+19 Stamina",
              "+12 Strength",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 46s"
          },
          {
            "name": "Void-Touched Mask of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+17 Stamina",
              "+10 Spirit"
            ],
            "effect": "Equip: +1% Spell Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 32s"
          },
          {
            "name": "Shadow Spaulders of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "+14 Stamina",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "Equip: Increases threat generated by all attacks by 5%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 4s"
          },
          {
            "name": "Corrupted Buckler of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "+12 Spirit",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Blood-Forged Bindings of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+15 Stamina",
              "+12 Strength",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Venerable Amulet of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Strength",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 6s"
          },
          {
            "name": "Shimmering Staff of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+17 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Shimmering Kilt of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+19 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 28s"
          },
          {
            "name": "Ancient Gauntlets of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+18 Intellect",
              "+12 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Ancient Bow of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Agility",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Savage Gavel of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+20 Stamina",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 91s"
          },
          {
            "name": "Ethereal Necklace of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Intellect",
              "+13 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 84s"
          },
          {
            "name": "Venerable Legguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Ethereal Kilt of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+20 Strength",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "Equip: Increases your defense rating by 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 29s"
          }
        ]
      },
      {
        "name": "The Roots of Nordrassil",
        "level": "60 (5 Man)",
        "desc": "Deep caverns.",
        "bosses": [
          "Archimonde's Echo",
          "The Root-Tender"
        ],
        "loot": [
          {
            "name": "Venerable Amulet of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 7s"
          },
          {
            "name": "Corrupted Bow of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+17 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 22s"
          },
          {
            "name": "Shadow Gloves of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+10 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 58s"
          },
          {
            "name": "Savage Mitts of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Plate",
            "stats": [
              "+19 Stamina",
              "+12 Strength",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 94s"
          },
          {
            "name": "Corrupted Cord of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Plate",
            "stats": [
              "+19 Strength",
              "+13 Stamina",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "Equip: Increases your defense rating by 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 83s"
          },
          {
            "name": "Corrupted Amulet of the Crimson King",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 24s"
          },
          {
            "name": "Savage Pauldrons of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+15 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 54s"
          },
          {
            "name": "Ancient Grips of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+13 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Ethereal Mantle of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+18 Stamina",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 48s"
          },
          {
            "name": "Void-Touched Gavel of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+16 Intellect",
              "+14 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 73s"
          },
          {
            "name": "Holy Greaves of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+10 Agility"
            ],
            "effect": "Equip: Increases threat generated by all attacks by 5%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 61s"
          },
          {
            "name": "Holy Treads of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "+13 Stamina",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "Equip: +1% Spell Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 64s"
          },
          {
            "name": "Savage Aegis of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Spirit",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "Forged in the heart of an ancient titan caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 75s"
          },
          {
            "name": "Blood-Forged Bracers of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+20 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 45s"
          },
          {
            "name": "Void-Touched Staff of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+19 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Void-Touched Pauldrons of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Plate",
            "stats": [
              "+16 Intellect",
              "+12 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 24s"
          },
          {
            "name": "Blood-Forged Band of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Stamina",
              "+14 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Shadow Leggings of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Cloth",
            "stats": [
              "+18 Intellect",
              "+13 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 81s"
          },
          {
            "name": "Shimmering Bow of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "+15 Strength",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 83s"
          },
          {
            "name": "Void-Touched Girdle of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+18 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Void-Touched Charm of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Savage Talisman of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 44s"
          },
          {
            "name": "Corrupted Medallion of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 49s"
          },
          {
            "name": "Shadow Medallion of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 47s"
          },
          {
            "name": "Corrupted Greatsword of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+19 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 27s"
          },
          {
            "name": "Ancient Buckler of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Intellect",
              "+13 Spirit",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 86s"
          },
          {
            "name": "Holy Sabatons of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Plate",
            "stats": [
              "+15 Strength",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 6s"
          },
          {
            "name": "Shadow Choker of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Stamina",
              "+13 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 44s"
          },
          {
            "name": "Shadow Axe of Eternal Slumber",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Sword",
            "stats": [
              "+16 Stamina",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 34s"
          },
          {
            "name": "Corrupted Staff of the Betrayer",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Dagger",
            "stats": [
              "+16 Intellect",
              "+13 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "9g 41s"
          }
        ]
      }
    ]
  },
  {
    "id": "Mazthoril",
    "name": "Mazthoril Deeps",
    "loreHistory": "A cavern system in Winterspring used by the Blue Dragonflight to protect ancient arcane artifacts and volatile magic.",
    "strategyGuide": "Magic damage is incredibly high here. Dampen Magic and magic dispels are crucial. Interrupt \"Arcane Volley\" immediately.",
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
      "A locked arcane chest contains a rare enchant recipe, requiring a Mage to decode the runes."
    ],
    "wings": [
      {
        "name": "The Arcane Vaults",
        "level": "55-60 (5 Man)",
        "desc": "Blue Dragonflight archive.",
        "bosses": [
          "The Archivist",
          "Haleh's Betrayer"
        ],
        "loot": [
          {
            "name": "Void-Touched Gavel of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Dagger",
            "stats": [
              "+15 Intellect",
              "+13 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Shadow Buckler of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Stamina",
              "+12 Strength",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Venerable Vambraces of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 53s"
          },
          {
            "name": "Ancient Kilt of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+15 Intellect",
              "+10 Spirit"
            ],
            "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
            "flavorText": "Legend says it was once wielded by a titan watcher.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 38s"
          },
          {
            "name": "Ethereal Axe of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+15 Stamina",
              "+10 Agility"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Savage Slippers of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+16 Stamina",
              "+13 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 84s"
          },
          {
            "name": "Shadow Brooch of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Venerable Spaulders of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+16 Intellect",
              "+15 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Void-Touched Gloves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+16 Agility",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 13s"
          },
          {
            "name": "Corrupted Belt of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Cloth",
            "stats": [
              "+19 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 81s"
          },
          {
            "name": "Corrupted Cuffs of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+16 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 74s"
          },
          {
            "name": "Holy Seal of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+20 Spirit",
              "+15 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 33s"
          },
          {
            "name": "Venerable Ring of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+16 Intellect",
              "Equip: Increases spell damage by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 8s"
          },
          {
            "name": "Ancient Greaves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+10 Strength"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Corrupted Shield of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+18 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Void-Touched Talisman of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Shimmering Greatsword of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+15 Intellect",
              "+13 Spirit",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 63s"
          },
          {
            "name": "Corrupted Aegis of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+19 Stamina",
              "Equip: Increases healing power by up to 30."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 69s"
          },
          {
            "name": "Blood-Forged Blade of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+20 Stamina",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "Equip: Increases spell damage by up to 15.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 67s"
          },
          {
            "name": "Void-Touched Pauldrons of the Forgotten",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+18 Stamina",
              "+15 Agility",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "8g 87s"
          },
          {
            "name": "Shadow Signet of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+15 Agility",
              "+13 Stamina",
              "Equip: Increases attack power by up to 30."
            ],
            "effect": "Equip: Armor Penetration increased by 30.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 60s"
          },
          {
            "name": "Ethereal Gloves of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "Equip: Increases defense rating by 8."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 33s"
          },
          {
            "name": "Shadow Cuffs of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+13 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 31s"
          },
          {
            "name": "Shadow Gavel of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+20 Intellect",
              "Equip: Restores 5 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "5g 78s"
          },
          {
            "name": "Shimmering Bracers of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+16 Agility",
              "+10 Intellect"
            ],
            "effect": "Equip: +1% Hit chance.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 60,
            "sellPrice": "6g 43s"
          }
        ]
      }
    ]
  },
  {
    "id": "GilneasCity",
    "name": "Gilneas City (Instanced Dungeon)",
    "loreHistory": "The capital city of Gilneas is in flames. A massive worgen outbreak has overrun the streets, and Lord Godfrey has initiated a brutal martial law lockdown.",
    "strategyGuide": "The streets are packed with fast-moving Worgen. Use the city's barricades and narrow alleyways to control incoming packs.",
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
    "speedrunStrats": "A rogue can stealth through the rooftops, dropping rope ladders down for the rest of the party to skip street fighting.",
    "environmentalHazards": "Burning buildings randomly collapse, causing AoE fire damage and blocking thoroughfares.",
    "secrets": [
      "Saving a hidden group of civilians rewards a unique Gilnean tabard."
    ],
    "wings": [
      {
        "name": "The Greymane District",
        "level": "45-50 (5 Man)",
        "desc": "Burning capital.",
        "bosses": [
          "Lord Godfrey",
          "The Royal Guard"
        ],
        "loot": [
          {
            "name": "Void-Touched Greatsword of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+17 Stamina",
              "Equip: Increases attack power by up to 25."
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 79s"
          },
          {
            "name": "Holy Loop of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+12 Stamina",
              "+10 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 22s"
          },
          {
            "name": "Holy Breastplate of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "+13 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 77s"
          },
          {
            "name": "Venerable Mask of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Cloth",
            "stats": [
              "+14 Stamina",
              "Equip: Increases spell damage by up to 25."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 47s"
          },
          {
            "name": "Savage Sash of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Spirit",
              "+13 Intellect",
              "Equip: Increases healing power by up to 25."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 64s"
          },
          {
            "name": "Shimmering Medallion of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 10s"
          },
          {
            "name": "Void-Touched Cuffs of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Mail",
            "stats": [
              "+13 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 58s"
          },
          {
            "name": "Shadow Ring of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+18 Intellect",
              "+11 Spirit",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 3s"
          },
          {
            "name": "Shimmering Necklace of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+17 Strength",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 17s"
          },
          {
            "name": "Shadow Defender of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Strength",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 52s"
          },
          {
            "name": "Shadow Bow of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Stamina",
              "Equip: Increases spell damage by up to 25."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 37s"
          },
          {
            "name": "Void-Touched Treads of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Feet",
            "type": "Mail",
            "stats": [
              "+17 Stamina",
              "+12 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 59s"
          },
          {
            "name": "Corrupted Staff of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+12 Stamina",
              "+12 Intellect",
              "+8 Spirit"
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 87s"
          },
          {
            "name": "Holy Cuffs of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+12 Intellect",
              "Equip: Increases healing power by up to 25."
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "5g 12s"
          },
          {
            "name": "Venerable Staff of the Unseen",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Axe",
            "stats": [
              "+18 Strength",
              "+12 Stamina",
              "Equip: Increases attack power by up to 25."
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "8g 4s"
          },
          {
            "name": "Ancient Waistguard of the Archmage",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+16 Agility",
              "+12 Stamina",
              "Equip: Increases your hit by 1%."
            ],
            "effect": "Equip: +1% Critical Strike.",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "8g 98s"
          },
          {
            "name": "Corrupted Gloves of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+14 Spirit",
              "+13 Stamina",
              "Equip: Increases healing power by up to 25."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 13s"
          },
          {
            "name": "Corrupted Greatsword of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+16 Intellect",
              "+12 Stamina",
              "Equip: Increases healing power by up to 25."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 9s"
          },
          {
            "name": "Ethereal Cuffs of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Plate",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Increases healing power by up to 25."
            ],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 72s"
          },
          {
            "name": "Void-Touched Vambraces of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+17 Agility",
              "+10 Stamina",
              "+8 Armor"
            ],
            "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 50,
            "sellPrice": "4g 74s"
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
    "speedrunStrats": "Using Goblin Jumper Cables on a broken elevator immediately drops the party to the final boss room.",
    "environmentalHazards": "Radiation vents periodically expel toxic gas. Players must use decontamination showers scattered throughout the instance.",
    "secrets": [
      "A rare engineering schematic drops from a hidden gnome ninja if revealed with a flare."
    ],
    "wings": [
      {
        "name": "The Irradiation Vats",
        "level": "35-45 (5 Man)",
        "desc": "Pure toxic sludge.",
        "bosses": [
          "Viscous Fallout",
          "Mekgineer Thermaplugg (Echo)"
        ],
        "loot": [
          {
            "name": "Void-Touched Charm of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 58s"
          },
          {
            "name": "Ethereal Handguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+15 Agility",
              "+7 Intellect"
            ],
            "effect": "Equip: +20 Attack Power.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 81s"
          },
          {
            "name": "Shimmering Blade of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+12 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "Light bends strangely around its edges.",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "6g 25s"
          },
          {
            "name": "Shimmering Greatsword of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+13 Stamina",
              "+12 Agility",
              "+7 Strength"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 3s"
          },
          {
            "name": "Venerable Brooch of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 35s"
          },
          {
            "name": "Blood-Forged Band of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Finger",
            "type": "Ring",
            "stats": [
              "+13 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 90s"
          },
          {
            "name": "Shadow Gavel of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+12 Stamina",
              "Equip: Increases attack power by up to 22."
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 71s"
          },
          {
            "name": "Savage Buckler of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+13 Agility",
              "Equip: Increases defense rating by 6."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 55s"
          },
          {
            "name": "Venerable Mitts of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 35s"
          },
          {
            "name": "Holy Gloves of the Void",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Cloth",
            "stats": [
              "+12 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Equip: +1% Spell Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 79s"
          },
          {
            "name": "Holy Spaulders of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Shoulder",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+9 Intellect",
              "Equip: Increases spell damage by up to 22."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 7s"
          },
          {
            "name": "Savage Relic of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: +1% Critical Strike.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 4s"
          },
          {
            "name": "Venerable Vest of the Deep",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+11 Agility",
              "Equip: Increases your dodge by 1%."
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 25s"
          },
          {
            "name": "Shimmering Leggings of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Plate",
            "stats": [
              "+13 Strength",
              "+9 Stamina",
              "+7 Agility"
            ],
            "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 68s"
          },
          {
            "name": "Blood-Forged Vest of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Cloth",
            "stats": [
              "+15 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 36s"
          },
          {
            "name": "Savage Choker of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+14 Agility",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 90s"
          },
          {
            "name": "Venerable Tunic of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Chest",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+10 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 50s"
          },
          {
            "name": "Holy Grips of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+16 Stamina",
              "+12 Agility",
              "+7 Armor"
            ],
            "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "4g 98s"
          },
          {
            "name": "Void-Touched Relic of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "5g 26s"
          },
          {
            "name": "Corrupted Legguards of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Legs",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "Equip: Increases healing power by up to 22."
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 45,
            "sellPrice": "3g 90s"
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
        "level": "50-55 (5 Man)",
        "desc": "Tyr's Hand torture chambers.",
        "bosses": [
          "Grand Inquisitor Isillien",
          "Scarlet Executioner"
        ],
        "loot": [
          {
            "name": "Shimmering Sash of Shattered Souls",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Mail",
            "stats": [
              "+14 Agility",
              "+12 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 92s"
          },
          {
            "name": "Venerable Wristguards of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Wrist",
            "type": "Leather",
            "stats": [
              "+14 Stamina",
              "+13 Agility",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 53s"
          },
          {
            "name": "Savage Staff of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Main Hand",
            "type": "Mace",
            "stats": [
              "+17 Stamina",
              "+13 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "9g 48s"
          },
          {
            "name": "Venerable Bow of Bloodletting",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+17 Intellect",
              "+12 Stamina",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "8g 66s"
          },
          {
            "name": "Corrupted Pendant of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+19 Intellect",
              "Equip: Increases spell damage by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 68s"
          },
          {
            "name": "Void-Touched Gavel of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Sword",
            "stats": [
              "+13 Intellect",
              "+13 Stamina",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 66s"
          },
          {
            "name": "Void-Touched Defender of the Void",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+15 Agility",
              "+9 Armor"
            ],
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
            "flavorText": "Forged in the heart of an ancient titan caldera.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "7g 66s"
          },
          {
            "name": "Ancient Collar of the Deep",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+16 Stamina",
              "Equip: Increases your parry by 1%."
            ],
            "effect": "",
            "flavorText": "It throbs with a dark, rhythmic pulse.",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "8g 5s"
          },
          {
            "name": "Shimmering Relic of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 20s"
          },
          {
            "name": "Holy Shield of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Off Hand",
            "type": "Shield",
            "stats": [
              "+14 Stamina",
              "+11 Intellect",
              "Equip: Increases your spell crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 30s"
          },
          {
            "name": "Void-Touched Cowl of Shattered Souls",
            "rarity": "Epic",
            "bindType": "Binds when picked up",
            "slot": "Head",
            "type": "Mail",
            "stats": [
              "+15 Intellect",
              "+12 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "8g 3s"
          },
          {
            "name": "Corrupted Cord of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Waist",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 85s"
          },
          {
            "name": "Holy Handguards of Eternal Slumber",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+18 Stamina",
              "Equip: Restores 4 mana per 5 sec."
            ],
            "effect": "Equip: Increases healing done by up to 25.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 42s"
          },
          {
            "name": "Shimmering Talisman of the Archmage",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 29s"
          },
          {
            "name": "Void-Touched Charm of the Betrayer",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Trinket",
            "type": "Trinket",
            "stats": [],
            "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 1s"
          },
          {
            "name": "Corrupted Handguards of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Mail",
            "stats": [
              "+15 Stamina",
              "+11 Intellect",
              "Equip: Increases your spell hit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "6g 13s"
          },
          {
            "name": "Blood-Forged Grips of the Forgotten",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Hands",
            "type": "Leather",
            "stats": [
              "+17 Stamina",
              "Equip: Increases your crit by 1%."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 61s"
          },
          {
            "name": "Void-Touched Staff of Bloodletting",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Two-Hand",
            "type": "Staff",
            "stats": [
              "+15 Spirit",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 61s"
          },
          {
            "name": "Ancient Bow of the Crimson King",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "One-Hand",
            "type": "Mace",
            "stats": [
              "+16 Intellect",
              "Equip: Increases healing power by up to 27."
            ],
            "effect": "Equip: Restores 4 mana per 5 seconds.",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "4g 76s"
          },
          {
            "name": "Ethereal Choker of the Unseen",
            "rarity": "Rare",
            "bindType": "Binds when picked up",
            "slot": "Neck",
            "type": "Necklace",
            "stats": [
              "+18 Stamina",
              "Equip: Increases attack power by up to 27."
            ],
            "effect": "",
            "flavorText": "",
            "source": "Dungeon Encounter",
            "requiresLevel": 55,
            "sellPrice": "5g 14s"
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
    "tier": "Tier 1.5 (10 / 20 Man Scalable)",
    "desc": "Entered through the four great portals in Ashenvale, Feralas, Duskwood, and the Hinterlands. A non-linear raid tuned for 10 or 20 players.",
    "loreHistory": "The four great trees of Azeroth have fully succumbed to the Nightmare. Ysera's greatest lieutenants have been twisted into horrific shadows of their former selves.",
    "strategyGuide": "A non-linear raid where the team must split into 2 groups to tackle Dream Portals simultaneously. The Sanity Mechanic requires constant monitoring; if a player drops to 0 sanity, they become hostile.",
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
    "environmentalHazards": "The Nightmare Fog constantly shifts, silencing casters caught within it.",
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
        "name": "Emerald Pants of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+18 Strength",
          "+11 Agility"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 91s"
      },
      {
        "name": "Corrupted Seal of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+20 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 32s"
      },
      {
        "name": "Corrupted Gavel of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+19 Stamina",
          "+11 Agility"
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 55s"
      },
      {
        "name": "Nightmare-Forged Choker of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Stamina",
          "+11 Agility"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 15s"
      },
      {
        "name": "Slumbering Greatsword of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+22 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 27s"
      },
      {
        "name": "Nightmare-Forged Amulet of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+17 Stamina",
          "+11 Spirit"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 11s"
      },
      {
        "name": "Slumbering Medallion of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 64s"
      },
      {
        "name": "Slumbering Grips of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+22 Spirit",
          "+17 Intellect",
          "Equip: Increases healing power by up to 35."
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 83s"
      },
      {
        "name": "Emerald Amice of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+23 Intellect",
          "+14 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 25s"
      },
      {
        "name": "Corrupted Sash of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+23 Intellect",
          "+17 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 71s"
      },
      {
        "name": "Dream-Scarred Grips of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+23 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 23s"
      },
      {
        "name": "Emerald Bow of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+19 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 68s"
      },
      {
        "name": "Slumbering Gavel of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+20 Strength",
          "+17 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 95s"
      },
      {
        "name": "Emerald Circlet of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+17 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 97s"
      },
      {
        "name": "Dream-Scarred Talisman of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 2s"
      },
      {
        "name": "Emerald Seal of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+20 Spirit",
          "+14 Stamina",
          "Equip: Increases healing power by up to 35."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 90s"
      },
      {
        "name": "Dream-Scarred Relic of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 60s"
      },
      {
        "name": "Nightmare-Forged Cuffs of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+23 Intellect",
          "+17 Spirit",
          "Equip: Increases healing power by up to 35."
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 50s"
      },
      {
        "name": "Slumbering Bindings of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+21 Stamina",
          "+17 Intellect",
          "Equip: Increases spell damage by up to 35."
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 28s"
      },
      {
        "name": "Slumbering Pendant of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 93s"
      },
      {
        "name": "Corrupted Loop of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Intellect",
          "+14 Stamina",
          "Equip: Increases spell damage by up to 35."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 56s"
      },
      {
        "name": "Nightmare-Forged Axe of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+23 Stamina",
          "+16 Agility",
          "Equip: Increases defense rating by 10."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 56s"
      },
      {
        "name": "Nightmare-Forged Blade of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+19 Stamina",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 30s"
      },
      {
        "name": "Slumbering Staff of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+19 Stamina",
          "Equip: Increases spell damage by up to 35."
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 52s"
      },
      {
        "name": "Slumbering Talisman of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 98s"
      },
      {
        "name": "Corrupted Dagger of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+19 Agility",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 54s"
      },
      {
        "name": "Corrupted Leggings of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+19 Agility",
          "+16 Stamina",
          "Equip: Increases attack power by up to 35."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 44s"
      },
      {
        "name": "Corrupted Buckler of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+19 Agility",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 40s"
      },
      {
        "name": "Dream-Scarred Greatsword of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+18 Stamina",
          "+16 Agility",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 41s"
      },
      {
        "name": "Emerald Band of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+19 Stamina",
          "+15 Intellect",
          "Equip: Increases healing power by up to 35."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 40s"
      },
      {
        "name": "Nightmare-Forged Blade of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+20 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 44s"
      },
      {
        "name": "Nightmare-Forged Robes of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+20 Intellect",
          "Equip: Increases healing power by up to 35."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 5s"
      },
      {
        "name": "Slumbering Ring of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+18 Strength",
          "+15 Stamina",
          "Equip: Increases attack power by up to 35."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 34s"
      },
      {
        "name": "Nightmare-Forged Handguards of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+21 Spirit",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 73s"
      },
      {
        "name": "Corrupted Kilt of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+21 Intellect",
          "+11 Spirit"
        ],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 31s"
      },
      {
        "name": "Corrupted Cowl of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+22 Spirit",
          "+16 Stamina",
          "Equip: Increases healing power by up to 35."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 74s"
      },
      {
        "name": "Dream-Scarred Handguards of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+22 Stamina",
          "+17 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 93s"
      },
      {
        "name": "Emerald Gloves of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+19 Intellect",
          "Equip: Increases spell damage by up to 35."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 87s"
      },
      {
        "name": "Corrupted Gloves of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+21 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 29s"
      },
      {
        "name": "Dream-Scarred Gauntlets of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+19 Stamina",
          "+14 Strength",
          "Equip: Increases defense rating by 10."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 64s"
      },
      {
        "name": "Emerald Buckler of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Strength",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 79s"
      },
      {
        "name": "Nightmare-Forged Boots of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+20 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 48s"
      },
      {
        "name": "Slumbering Aegis of the Deep Slumber",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Stamina",
          "+17 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 21s"
      },
      {
        "name": "Dream-Scarred Defender of the Nightmare",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+18 Stamina",
          "+15 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 71s"
      },
      {
        "name": "Emerald Mask of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+23 Intellect",
          "Equip: Restores 5 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 79s"
      },
      {
        "name": "Corrupted Staff of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+23 Strength",
          "+16 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 42s"
      },
      {
        "name": "Dream-Scarred Bracers of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+21 Intellect",
          "+17 Spirit",
          "Equip: Increases healing power by up to 35."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 77s"
      },
      {
        "name": "Nightmare-Forged Charm of the Waking Dream",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 96s"
      },
      {
        "name": "Emerald Relic of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "9g 53s"
      },
      {
        "name": "Slumbering Bulwark of Ysera's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+17 Intellect",
          "Equip: Increases healing power by up to 35."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 63s"
      }
    ]
  },
  {
    "id": "GrimBatolRaid",
    "name": "Grim Batol",
    "tier": "Tier 2 (20 / 40 Man Scalable)",
    "desc": "The heart of the mountain where the Dragonmaw Clan enslaves the Red Dragonflight. 20-player baseline with 40-player Epic Mode scaling.",
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
    "speedrunStrats": "Freeing captive red drakes allows them to assist in bombarding elite Dragonmaw defenses.",
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
        "name": "Searing Treads of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+21 Stamina",
          "+15 Intellect",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 40s"
      },
      {
        "name": "Enslaved Defender of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+22 Intellect",
          "+16 Stamina",
          "Equip: Increases healing power by up to 38."
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 13s"
      },
      {
        "name": "Enslaved Bulwark of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+22 Stamina",
          "+12 Armor"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 2s"
      },
      {
        "name": "Mountain-Forged Vambraces of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+23 Stamina",
          "+15 Spirit",
          "Equip: Increases healing power by up to 38."
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 33s"
      },
      {
        "name": "Mountain-Forged Bindings of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+23 Stamina",
          "+17 Intellect",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 72s"
      },
      {
        "name": "Enslaved Kilt of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+20 Stamina",
          "+16 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 93s"
      },
      {
        "name": "Dragonmaw Dagger of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+19 Spirit",
          "+15 Stamina",
          "Equip: Increases healing power by up to 38."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 96s"
      },
      {
        "name": "Dragonmaw Cuffs of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+20 Agility",
          "Equip: Increases attack power by up to 38."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 81s"
      },
      {
        "name": "Mountain-Forged Epaulets of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+22 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 12s"
      },
      {
        "name": "Enslaved Talisman of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 46s"
      },
      {
        "name": "Mountain-Forged Footpads of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+21 Stamina",
          "+17 Strength",
          "+12 Agility"
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 66s"
      },
      {
        "name": "Enslaved Gloves of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+21 Stamina",
          "+16 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 38s"
      },
      {
        "name": "Enslaved Girdle of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+22 Stamina",
          "+15 Agility",
          "Equip: Increases attack power by up to 38."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 22s"
      },
      {
        "name": "Mountain-Forged Gavel of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+24 Agility",
          "Equip: Increases defense rating by 10."
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 30s"
      },
      {
        "name": "Enslaved Amulet of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Stamina",
          "+19 Strength",
          "+12 Agility"
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 56s"
      },
      {
        "name": "Mountain-Forged Mask of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+19 Stamina",
          "+18 Agility",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 12s"
      },
      {
        "name": "Red Scale Pauldrons of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+21 Stamina",
          "+19 Agility",
          "+12 Intellect"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 28s"
      },
      {
        "name": "Enslaved Sabatons of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+22 Spirit",
          "+15 Intellect",
          "Equip: Increases healing power by up to 38."
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 39s"
      },
      {
        "name": "Red Scale Dagger of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+20 Intellect",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 78s"
      },
      {
        "name": "Enslaved Bracers of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+20 Agility",
          "+15 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 55s"
      },
      {
        "name": "Red Scale Cuffs of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+23 Spirit",
          "+15 Stamina",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 89s"
      },
      {
        "name": "Enslaved Brooch of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 96s"
      },
      {
        "name": "Searing Necklace of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+20 Stamina",
          "Equip: Increases your parry by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 58s"
      },
      {
        "name": "Enslaved Brooch of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 79s"
      },
      {
        "name": "Enslaved Blade of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+23 Intellect",
          "+15 Stamina",
          "Equip: Increases healing power by up to 38."
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 61s"
      },
      {
        "name": "Enslaved Collar of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Stamina",
          "+15 Strength",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 35s"
      },
      {
        "name": "Enslaved Belt of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+22 Intellect",
          "+15 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 98s"
      },
      {
        "name": "Searing Belt of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+20 Agility",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 15s"
      },
      {
        "name": "Searing Axe of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+23 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 12s"
      },
      {
        "name": "Mountain-Forged Epaulets of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+20 Stamina",
          "+17 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 92s"
      },
      {
        "name": "Searing Bindings of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+23 Stamina",
          "+18 Strength",
          "Equip: Increases attack power by up to 38."
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 51s"
      },
      {
        "name": "Searing Staff of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+20 Spirit",
          "+19 Stamina",
          "Equip: Increases healing power by up to 38."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 55s"
      },
      {
        "name": "Dragonmaw Vambraces of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+21 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 51s"
      },
      {
        "name": "Searing Circlet of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+15 Spirit",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 89s"
      },
      {
        "name": "Dragonmaw Amulet of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Stamina",
          "+12 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 10s"
      },
      {
        "name": "Searing Greatsword of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+22 Stamina",
          "Equip: Increases healing power by up to 38."
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 71s"
      },
      {
        "name": "Searing Grips of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+22 Intellect",
          "+17 Stamina",
          "Equip: Increases spell damage by up to 38."
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 61s"
      },
      {
        "name": "Mountain-Forged Band of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+20 Agility",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 60s"
      },
      {
        "name": "Enslaved Bindings of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+19 Strength",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 48s"
      },
      {
        "name": "Mountain-Forged Amice of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+23 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 49s"
      },
      {
        "name": "Searing Tunic of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+22 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 44s"
      },
      {
        "name": "Searing Leggings of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "+15 Stamina",
          "+12 Spirit"
        ],
        "effect": "Equip: +1% Spell Critical Strike.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 15s"
      },
      {
        "name": "Red Scale Blade of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+21 Strength",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 86s"
      },
      {
        "name": "Red Scale Handguards of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+21 Intellect",
          "Equip: Increases spell damage by up to 38."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 25s"
      },
      {
        "name": "Mountain-Forged Choker of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Stamina",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 54s"
      },
      {
        "name": "Enslaved Leggings of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+23 Stamina",
          "+18 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 81s"
      },
      {
        "name": "Red Scale Legguards of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+20 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 33s"
      },
      {
        "name": "Searing Charm of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 43s"
      },
      {
        "name": "Red Scale Loop of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 37s"
      },
      {
        "name": "Mountain-Forged Boots of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+22 Stamina",
          "+17 Intellect",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 38s"
      },
      {
        "name": "Searing Relic of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 6s"
      },
      {
        "name": "Dragonmaw Circlet of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+24 Intellect",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 46s"
      },
      {
        "name": "Dragonmaw Waistguard of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+21 Agility",
          "+18 Stamina",
          "Equip: Increases attack power by up to 38."
        ],
        "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 84s"
      },
      {
        "name": "Mountain-Forged Circlet of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+21 Agility",
          "+16 Stamina",
          "+12 Armor"
        ],
        "effect": "Equip: Increases your defense rating by 15.",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 94s"
      },
      {
        "name": "Mountain-Forged Circlet of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+20 Agility",
          "+17 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 42s"
      },
      {
        "name": "Red Scale Brooch of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 48s"
      },
      {
        "name": "Dragonmaw Amice of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+21 Spirit",
          "+18 Stamina",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 14s"
      },
      {
        "name": "Red Scale Kilt of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+23 Stamina",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 43s"
      },
      {
        "name": "Dragonmaw Gavel of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+23 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 22s"
      },
      {
        "name": "Red Scale Footpads of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+22 Spirit",
          "+16 Intellect",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 81s"
      },
      {
        "name": "Mountain-Forged Mitts of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+22 Intellect",
          "+15 Stamina",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 83s"
      },
      {
        "name": "Mountain-Forged Cord of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+22 Stamina",
          "Equip: Increases attack power by up to 38."
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 82s"
      },
      {
        "name": "Mountain-Forged Treads of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+19 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 70s"
      },
      {
        "name": "Enslaved Slippers of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+22 Stamina",
          "+12 Strength"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 79s"
      },
      {
        "name": "Dragonmaw Axe of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+22 Stamina",
          "+16 Strength",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 60s"
      },
      {
        "name": "Mountain-Forged Relic of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 68s"
      },
      {
        "name": "Red Scale Cuffs of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+19 Stamina",
          "Equip: Increases healing power by up to 38."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 48s"
      },
      {
        "name": "Mountain-Forged Leggings of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+19 Agility",
          "+12 Strength"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 70s"
      },
      {
        "name": "Mountain-Forged Pants of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+20 Strength",
          "+15 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Equip: Increases your defense rating by 15.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 19s"
      },
      {
        "name": "Searing Sash of the Demon Soul",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+22 Stamina",
          "+12 Agility"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 70s"
      },
      {
        "name": "Searing Pauldrons of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+23 Strength",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 58s"
      },
      {
        "name": "Red Scale Boots of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+19 Stamina",
          "+16 Agility",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 50s"
      },
      {
        "name": "Searing Mantle of the Queen's Captivity",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+19 Stamina",
          "+17 Agility",
          "+12 Armor"
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 70s"
      },
      {
        "name": "Mountain-Forged Handguards of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+19 Agility",
          "+17 Stamina",
          "+12 Armor"
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 54s"
      },
      {
        "name": "Dragonmaw Relic of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 86s"
      },
      {
        "name": "Red Scale Signet of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Stamina",
          "+12 Spirit"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 93s"
      },
      {
        "name": "Red Scale Epaulets of the Forge",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+19 Stamina",
          "+19 Strength",
          "+12 Agility"
        ],
        "effect": "Equip: Increases your defense rating by 15.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "10g 17s"
      },
      {
        "name": "Dragonmaw Band of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Spirit",
          "+15 Intellect",
          "Equip: Increases healing power by up to 38."
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 36s"
      },
      {
        "name": "Enslaved Blade of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+23 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 82s"
      },
      {
        "name": "Mountain-Forged Greaves of the Red Flight",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "+18 Stamina",
          "Equip: Increases spell damage by up to 38."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 7s"
      }
    ]
  },
  {
    "id": "CrownOfTheDamned",
    "name": "Crown of the Damned (Stratholme Necropolis)",
    "tier": "Tier 2.5 (10 / 20 Man Scalable)",
    "desc": "The massive floating ziggurat hovering above Stratholme. Tuned for flexible 10 or 20-player raid groups.",
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
    "speedrunStrats": "Paladins using Holy Wrath can completely lock down the undead Gauntlet, saving valuable clear time.",
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
        "name": "Necrotic Gavel of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+24 Intellect",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 2s"
      },
      {
        "name": "Cursed Vest of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+23 Stamina",
          "+17 Intellect",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 76s"
      },
      {
        "name": "Death-Bound Amice of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+23 Stamina",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 40s"
      },
      {
        "name": "Scourge-Forged Greaves of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+20 Stamina",
          "+20 Agility",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 38s"
      },
      {
        "name": "Death-Bound Collar of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+20 Agility",
          "Equip: Increases attack power by up to 40."
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 22s"
      },
      {
        "name": "Necrotic Vest of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+24 Intellect",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 54s"
      },
      {
        "name": "Scourge-Forged Talisman of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 38s"
      },
      {
        "name": "Cursed Vambraces of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+24 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 52s"
      },
      {
        "name": "Scourge-Forged Choker of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 34s"
      },
      {
        "name": "Plague-Ridden Relic of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 41s"
      },
      {
        "name": "Necrotic Necklace of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Strength",
          "+13 Agility"
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 85s"
      },
      {
        "name": "Death-Bound Sash of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+26 Stamina",
          "+13 Spirit"
        ],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 83s"
      },
      {
        "name": "Plague-Ridden Greaves of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+26 Stamina",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 24s"
      },
      {
        "name": "Cursed Pants of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+21 Stamina",
          "+13 Armor"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 50s"
      },
      {
        "name": "Scourge-Forged Legguards of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+20 Spirit",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 28s"
      },
      {
        "name": "Necrotic Girdle of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+22 Strength",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 24s"
      },
      {
        "name": "Necrotic Charm of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 48s"
      },
      {
        "name": "Scourge-Forged Band of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+21 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 69s"
      },
      {
        "name": "Death-Bound Robes of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+25 Stamina",
          "+19 Agility",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 43s"
      },
      {
        "name": "Cursed Defender of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Stamina",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 24s"
      },
      {
        "name": "Necrotic Gloves of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+25 Stamina",
          "+17 Agility",
          "Equip: Increases attack power by up to 40."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 64s"
      },
      {
        "name": "Death-Bound Charm of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 37s"
      },
      {
        "name": "Cursed Medallion of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 43s"
      },
      {
        "name": "Death-Bound Staff of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+20 Stamina",
          "+19 Agility",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 50s"
      },
      {
        "name": "Cursed Necklace of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+21 Stamina",
          "+19 Intellect",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 34s"
      },
      {
        "name": "Plague-Ridden Pants of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+23 Stamina",
          "+19 Intellect",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 38s"
      },
      {
        "name": "Plague-Ridden Relic of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 52s"
      },
      {
        "name": "Scourge-Forged Grips of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+25 Stamina",
          "+19 Intellect",
          "+13 Spirit"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 71s"
      },
      {
        "name": "Plague-Ridden Choker of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Strength",
          "+17 Stamina",
          "Equip: Increases your parry by 1%."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 6s"
      },
      {
        "name": "Plague-Ridden Seal of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Stamina",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 14s"
      },
      {
        "name": "Cursed Belt of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+23 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 91s"
      },
      {
        "name": "Scourge-Forged Charm of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 6s"
      },
      {
        "name": "Plague-Ridden Vambraces of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+23 Agility",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 98s"
      },
      {
        "name": "Plague-Ridden Buckler of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Agility",
          "+18 Stamina",
          "Equip: Increases defense rating by 11."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 39s"
      },
      {
        "name": "Cursed Amice of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+26 Intellect",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 55s"
      },
      {
        "name": "Cursed Belt of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+21 Intellect",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 68s"
      },
      {
        "name": "Plague-Ridden Blade of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+21 Intellect",
          "+17 Stamina",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 89s"
      },
      {
        "name": "Death-Bound Greatsword of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+22 Agility",
          "+18 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 87s"
      },
      {
        "name": "Cursed Boots of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+22 Intellect",
          "+19 Stamina",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 56s"
      },
      {
        "name": "Death-Bound Cuffs of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+21 Stamina",
          "+19 Spirit",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 37s"
      },
      {
        "name": "Scourge-Forged Bow of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+24 Stamina",
          "+18 Intellect",
          "Equip: Restores 6 mana per 5 sec."
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 83s"
      },
      {
        "name": "Scourge-Forged Bow of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+25 Agility",
          "+19 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 82s"
      },
      {
        "name": "Plague-Ridden Staff of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+21 Stamina",
          "+17 Agility",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 7s"
      },
      {
        "name": "Cursed Blade of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+25 Stamina",
          "Equip: Increases your parry by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 4s"
      },
      {
        "name": "Necrotic Helm of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "+19 Stamina",
          "Equip: Increases spell damage by up to 40."
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 35s"
      },
      {
        "name": "Scourge-Forged Vest of the Ziggurat",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+23 Agility",
          "+18 Stamina",
          "+13 Armor"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 41s"
      },
      {
        "name": "Scourge-Forged Grips of Naxxramas",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+23 Stamina",
          "+17 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 16s"
      },
      {
        "name": "Scourge-Forged Mitts of the Phylactery",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+25 Stamina",
          "+18 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 2s"
      },
      {
        "name": "Cursed Circlet of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+26 Stamina",
          "+16 Spirit",
          "Equip: Increases healing power by up to 40."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 65s"
      },
      {
        "name": "Plague-Ridden Wristguards of the Lich King",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+24 Agility",
          "+16 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Equip: Increases your defense rating by 15.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 80s"
      }
    ]
  },
  {
    "id": "KarazhanRaid",
    "name": "Karazhan (Upper Tower)",
    "tier": "Tier 3 (20 / 40 Man Scalable)",
    "desc": "The unreleased Vanilla version of Medivh's tower. Tuned for 20 players with 40-player Epic Mode scaling.",
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
        "name": "Ethereal Helm of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+26 Agility",
          "+14 Intellect"
        ],
        "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 23s"
      },
      {
        "name": "Rift-Touched Grips of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+23 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 27s"
      },
      {
        "name": "Medivh's Handguards of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+26 Stamina",
          "+14 Strength"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 0s"
      },
      {
        "name": "Rift-Touched Collar of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+26 Stamina",
          "+17 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 82s"
      },
      {
        "name": "Ethereal Greatsword of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+23 Stamina",
          "Equip: Increases spell damage by up to 43."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 63s"
      },
      {
        "name": "Astral Loop of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+26 Stamina",
          "+14 Agility"
        ],
        "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 67s"
      },
      {
        "name": "Medivh's Greaves of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+26 Strength",
          "+14 Agility"
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 64s"
      },
      {
        "name": "Astral Grips of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+23 Strength",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 61s"
      },
      {
        "name": "Ethereal Sabatons of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+26 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 81s"
      },
      {
        "name": "Timeless Slippers of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+24 Spirit",
          "Equip: Increases healing power by up to 43."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 82s"
      },
      {
        "name": "Astral Axe of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+26 Strength",
          "+14 Agility"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 61s"
      },
      {
        "name": "Medivh's Loop of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+26 Stamina",
          "+18 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "11g 34s"
      },
      {
        "name": "Astral Amulet of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Stamina",
          "+14 Intellect"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 71s"
      },
      {
        "name": "Rift-Touched Bracers of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+26 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 12s"
      },
      {
        "name": "Rift-Touched Shield of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+22 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 10s"
      },
      {
        "name": "Rift-Touched Defender of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 61s"
      },
      {
        "name": "Astral Seal of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+23 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 82s"
      },
      {
        "name": "Rift-Touched Pants of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+25 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 0s"
      },
      {
        "name": "Timeless Necklace of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+27 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 73s"
      },
      {
        "name": "Astral Crown of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+21 Agility",
          "+14 Armor"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 97s"
      },
      {
        "name": "Timeless Crown of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+23 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 97s"
      },
      {
        "name": "Ethereal Loop of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+26 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 42s"
      },
      {
        "name": "Astral Gavel of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+25 Stamina",
          "+20 Agility",
          "+14 Strength"
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 41s"
      },
      {
        "name": "Rift-Touched Aegis of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Stamina",
          "+19 Strength",
          "Equip: Increases defense rating by 12."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 32s"
      },
      {
        "name": "Ethereal Robes of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+22 Intellect",
          "Equip: Increases healing power by up to 43."
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 50s"
      },
      {
        "name": "Medivh's Legguards of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+24 Intellect",
          "+20 Stamina",
          "Equip: Increases spell damage by up to 43."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 62s"
      },
      {
        "name": "Timeless Waistguard of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+20 Agility",
          "Equip: Increases attack power by up to 43."
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 98s"
      },
      {
        "name": "Ethereal Kilt of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+21 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 65s"
      },
      {
        "name": "Rift-Touched Mitts of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+22 Spirit",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 37s"
      },
      {
        "name": "Medivh's Tunic of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Cloth",
        "stats": [
          "+23 Intellect",
          "+14 Spirit"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 58s"
      },
      {
        "name": "Ethereal Aegis of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Stamina",
          "+20 Intellect",
          "Equip: Increases healing power by up to 43."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 83s"
      },
      {
        "name": "Ethereal Pauldrons of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+23 Stamina",
          "+18 Spirit",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 23s"
      },
      {
        "name": "Astral Buckler of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+26 Strength",
          "+17 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 27s"
      },
      {
        "name": "Ethereal Charm of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: +1% Spell Critical Strike.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 55s"
      },
      {
        "name": "Medivh's Spaulders of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+21 Intellect",
          "+18 Stamina",
          "Equip: Increases spell damage by up to 43."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Rift-Touched Robes of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+24 Stamina",
          "+18 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 36s"
      },
      {
        "name": "Astral Amice of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+22 Agility",
          "+18 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 87s"
      },
      {
        "name": "Ethereal Collar of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 8s"
      },
      {
        "name": "Astral Pendant of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Stamina",
          "+21 Spirit",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Equip: Your direct heals grant the target a 50 damage absorption shield.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 59s"
      },
      {
        "name": "Timeless Harness of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+22 Stamina",
          "+14 Agility"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 20s"
      },
      {
        "name": "Medivh's Mantle of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+21 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 2s"
      },
      {
        "name": "Ethereal Axe of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Dagger",
        "stats": [
          "+23 Stamina",
          "+17 Intellect",
          "Equip: Increases spell damage by up to 43."
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 37s"
      },
      {
        "name": "Rift-Touched Vambraces of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+25 Intellect",
          "+18 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 26s"
      },
      {
        "name": "Timeless Charm of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 51s"
      },
      {
        "name": "Astral Amulet of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Stamina",
          "Equip: Increases attack power by up to 43."
        ],
        "effect": "Equip: +1% Critical Strike.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 82s"
      },
      {
        "name": "Rift-Touched Staff of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+22 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 67s"
      },
      {
        "name": "Astral Mitts of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Cloth",
        "stats": [
          "+24 Spirit",
          "+18 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 88s"
      },
      {
        "name": "Ethereal Collar of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 25s"
      },
      {
        "name": "Timeless Pendant of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Agility",
          "+19 Stamina",
          "+14 Strength"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 50s"
      },
      {
        "name": "Astral Bow of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Bow",
        "stats": [
          "+23 Stamina",
          "+18 Agility",
          "+14 Intellect"
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 16s"
      },
      {
        "name": "Medivh's Bulwark of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+25 Stamina",
          "Equip: Increases your parry by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 44s"
      },
      {
        "name": "Rift-Touched Pants of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Plate",
        "stats": [
          "+23 Intellect",
          "+20 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 35s"
      },
      {
        "name": "Medivh's Staff of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+22 Agility",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 84s"
      },
      {
        "name": "Timeless Pendant of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+26 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 28s"
      },
      {
        "name": "Timeless Gloves of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+23 Agility",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 89s"
      },
      {
        "name": "Medivh's Amulet of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+22 Strength",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 80s"
      },
      {
        "name": "Medivh's Bow of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Dagger",
        "stats": [
          "+23 Stamina",
          "+14 Spirit"
        ],
        "effect": "Chance on hit: Restores 100 mana and increases Spell Power by 50 for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 78s"
      },
      {
        "name": "Timeless Amulet of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 32s"
      },
      {
        "name": "Medivh's Amulet of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Strength",
          "+18 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 20s"
      },
      {
        "name": "Rift-Touched Bulwark of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 59s"
      },
      {
        "name": "Timeless Blade of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+24 Strength",
          "+18 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 46s"
      },
      {
        "name": "Ethereal Belt of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Cloth",
        "stats": [
          "+27 Stamina",
          "+20 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 41s"
      },
      {
        "name": "Rift-Touched Pendant of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+26 Stamina",
          "+20 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "Equip: +1% Spell Hit chance.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 68s"
      },
      {
        "name": "Rift-Touched Spaulders of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Cloth",
        "stats": [
          "+21 Stamina",
          "Equip: Increases healing power by up to 43."
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 52s"
      },
      {
        "name": "Ethereal Shield of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+25 Stamina",
          "+19 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 21s"
      },
      {
        "name": "Timeless Handguards of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+27 Spirit",
          "+19 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 19s"
      },
      {
        "name": "Timeless Crown of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 87s"
      },
      {
        "name": "Medivh's Band of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+22 Stamina",
          "+19 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 77s"
      },
      {
        "name": "Medivh's Mitts of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+26 Intellect",
          "+19 Stamina",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 23s"
      },
      {
        "name": "Rift-Touched Staff of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Stamina",
          "Equip: Increases defense rating by 12."
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 45s"
      },
      {
        "name": "Ethereal Circlet of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+25 Intellect",
          "+18 Stamina",
          "Equip: Increases spell damage by up to 43."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 7s"
      },
      {
        "name": "Timeless Dagger of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+25 Strength",
          "Equip: Increases defense rating by 12."
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 81s"
      },
      {
        "name": "Astral Grips of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+25 Stamina",
          "+14 Strength"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 61s"
      },
      {
        "name": "Astral Epaulets of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Plate",
        "stats": [
          "+22 Strength",
          "+17 Stamina",
          "Equip: Increases attack power by up to 43."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 95s"
      },
      {
        "name": "Astral Crown of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+21 Spirit",
          "+20 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 23s"
      },
      {
        "name": "Ethereal Bow of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Sword",
        "stats": [
          "+23 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 31s"
      },
      {
        "name": "Ethereal Bindings of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+23 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "Equip: When struck in melee, inflicts 15 Fire damage to the attacker.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 80s"
      },
      {
        "name": "Timeless Choker of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+26 Stamina",
          "+20 Intellect",
          "Equip: Increases spell damage by up to 43."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 98s"
      },
      {
        "name": "Medivh's Legguards of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+22 Spirit",
          "+20 Stamina",
          "Equip: Increases healing power by up to 43."
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 7s"
      },
      {
        "name": "Astral Ring of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+25 Stamina",
          "+20 Intellect",
          "Equip: Increases spell damage by up to 43."
        ],
        "effect": "Equip: Reduces the cast time of your next spell by 0.5 sec after a critical strike.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 32s"
      },
      {
        "name": "Rift-Touched Mantle of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 98s"
      },
      {
        "name": "Rift-Touched Axe of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+27 Stamina",
          "+17 Intellect",
          "Equip: Increases healing power by up to 43."
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 17s"
      },
      {
        "name": "Astral Aegis of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+22 Spirit",
          "+17 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 22s"
      },
      {
        "name": "Ethereal Defender of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Stamina",
          "+18 Strength",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 94s"
      },
      {
        "name": "Timeless Footpads of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+25 Agility",
          "+19 Stamina",
          "Equip: Increases attack power by up to 43."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 41s"
      },
      {
        "name": "Rift-Touched Brooch of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 66s"
      },
      {
        "name": "Astral Cuffs of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+23 Stamina",
          "+18 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 29s"
      },
      {
        "name": "Ethereal Relic of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 10s"
      },
      {
        "name": "Timeless Axe of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+23 Stamina",
          "+14 Armor"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 96s"
      },
      {
        "name": "Rift-Touched Pants of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+22 Agility",
          "Equip: Increases defense rating by 12."
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 62s"
      },
      {
        "name": "Medivh's Aegis of the Guardian's Fall",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+25 Spirit",
          "Equip: Increases healing power by up to 43."
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 52s"
      },
      {
        "name": "Medivh's Cord of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+26 Agility",
          "+17 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Equip: Your attacks have a chance to sunder the target's armor.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 7s"
      },
      {
        "name": "Rift-Touched Belt of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+22 Stamina",
          "+14 Spirit"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 93s"
      },
      {
        "name": "Timeless Mask of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+22 Agility",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 15s"
      },
      {
        "name": "Astral Shield of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+21 Agility",
          "+19 Stamina",
          "+14 Strength"
        ],
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 68s"
      },
      {
        "name": "Astral Kilt of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+26 Agility",
          "+14 Armor"
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 94s"
      },
      {
        "name": "Medivh's Aegis of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+26 Stamina",
          "+20 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 69s"
      },
      {
        "name": "Timeless Circlet of the Ivory Tower",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+27 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 81s"
      },
      {
        "name": "Astral Slippers of the Nether",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+27 Stamina",
          "Equip: Increases spell damage by up to 43."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 6s"
      },
      {
        "name": "Timeless Pants of the Rift",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+25 Intellect",
          "+18 Stamina",
          "Equip: Increases spell damage by up to 43."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 88s"
      }
    ]
  },
  {
    "id": "DragonIslesRaid",
    "name": "Temple of the Old Gods (Dragon Isles)",
    "tier": "Tier 3.5 (20 / 40 Man Scalable)",
    "desc": "The absolute pinnacle of Vanilla progression, located on the mythical Dragon Isles. 20-player baseline with 40-player Epic Mode scaling.",
    "loreHistory": "A forgotten island where the Old Gods first corrupted the proto-dragons. The architecture is impossibly ancient, pre-dating the Titans.",
    "strategyGuide": "Requires a fully coordinated raid to complete the World Tree Defense, holding off waves of elemental invaders. Ley-Line Alignment puzzles require players to physically connect beams of light to remove boss immunities.",
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
        "name": "Faceless Grips of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Plate",
        "stats": [
          "+24 Strength",
          "Equip: Increases defense rating by 13."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 55s"
      },
      {
        "name": "Maddening Slippers of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+28 Stamina",
          "+20 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 4s"
      },
      {
        "name": "Maddening Pants of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+27 Stamina",
          "Equip: Increases your dodge by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 74s"
      },
      {
        "name": "Maddening Tunic of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+26 Strength",
          "+15 Agility"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 15s"
      },
      {
        "name": "Whispering Talisman of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 94s"
      },
      {
        "name": "Tentacled Cord of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+26 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 16s"
      },
      {
        "name": "Whispering Handguards of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Leather",
        "stats": [
          "+27 Intellect",
          "+21 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 18s"
      },
      {
        "name": "Tentacled Mask of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+23 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 59s"
      },
      {
        "name": "Tentacled Leggings of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Mail",
        "stats": [
          "+25 Stamina",
          "+21 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 83s"
      },
      {
        "name": "Tentacled Relic of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 70s"
      },
      {
        "name": "Faceless Bindings of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+25 Intellect",
          "+19 Stamina",
          "Equip: Increases healing power by up to 46."
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 64s"
      },
      {
        "name": "Maddening Talisman of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 46s"
      },
      {
        "name": "Faceless Shield of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+23 Stamina",
          "+20 Agility",
          "+15 Armor"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 49s"
      },
      {
        "name": "Void-Touched Axe of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+27 Strength",
          "+19 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Equip: Armor Penetration increased by 30.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 37s"
      },
      {
        "name": "Faceless Amulet of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Intellect",
          "+18 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 10s"
      },
      {
        "name": "Faceless Charm of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 29s"
      },
      {
        "name": "Whispering Medallion of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Restores 1500 mana over 10 seconds. (5 Min Cooldown)",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 49s"
      },
      {
        "name": "Tentacled Necklace of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Stamina",
          "+15 Intellect"
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 30s"
      },
      {
        "name": "Maddening Robes of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+25 Stamina",
          "+20 Intellect",
          "Equip: Increases healing power by up to 46."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 13s"
      },
      {
        "name": "Tentacled Footpads of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+27 Stamina",
          "+20 Agility",
          "Equip: Increases attack power by up to 46."
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 59s"
      },
      {
        "name": "Faceless Collar of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+25 Stamina",
          "+15 Strength"
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 47s"
      },
      {
        "name": "Void-Touched Collar of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Stamina",
          "+20 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 47s"
      },
      {
        "name": "Maddening Footpads of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+28 Stamina",
          "+15 Agility"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 94s"
      },
      {
        "name": "Whispering Treads of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Cloth",
        "stats": [
          "+25 Spirit",
          "+19 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 64s"
      },
      {
        "name": "Maddening Band of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Intellect",
          "+15 Spirit"
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 64s"
      },
      {
        "name": "Faceless Sabatons of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+25 Stamina",
          "+21 Intellect",
          "Equip: Increases spell damage by up to 46."
        ],
        "effect": "Chance on hit: Blasts the target for 150 Nature damage.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 82s"
      },
      {
        "name": "Faceless Blade of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Sword",
        "stats": [
          "+24 Strength",
          "+21 Stamina",
          "+15 Agility"
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 85s"
      },
      {
        "name": "Faceless Cowl of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Leather",
        "stats": [
          "+26 Agility",
          "+21 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 6s"
      },
      {
        "name": "Tentacled Medallion of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 15s"
      },
      {
        "name": "Void-Touched Band of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+28 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 77s"
      },
      {
        "name": "Faceless Mitts of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+25 Stamina",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 21s"
      },
      {
        "name": "Tentacled Cord of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+25 Intellect",
          "+19 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 22s"
      },
      {
        "name": "Whispering Greatsword of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Axe",
        "stats": [
          "+28 Stamina",
          "+21 Strength",
          "Equip: Increases attack power by up to 46."
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 9s"
      },
      {
        "name": "Void-Touched Breastplate of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+23 Strength",
          "Equip: Increases attack power by up to 46."
        ],
        "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 43s"
      },
      {
        "name": "Tentacled Helm of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+18 Intellect",
          "Equip: Increases spell damage by up to 46."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 36s"
      },
      {
        "name": "Faceless Belt of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "+22 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 67s"
      },
      {
        "name": "Maddening Cuffs of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+27 Strength",
          "Equip: Increases your parry by 1%."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 34s"
      },
      {
        "name": "Maddening Bow of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+24 Stamina",
          "Equip: Increases healing power by up to 46."
        ],
        "effect": "Equip: Increases the critical effect of your holy spells by 2%.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 93s"
      },
      {
        "name": "Whispering Treads of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Leather",
        "stats": [
          "+27 Stamina",
          "+15 Strength"
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 76s"
      },
      {
        "name": "Void-Touched Greatsword of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+25 Stamina",
          "Equip: Increases your parry by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 93s"
      },
      {
        "name": "Tentacled Bulwark of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+28 Intellect",
          "+22 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 69s"
      },
      {
        "name": "Faceless Relic of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 3s"
      },
      {
        "name": "Whispering Charm of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 71s"
      },
      {
        "name": "Faceless Bow of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+24 Spirit",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 56s"
      },
      {
        "name": "Maddening Grips of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Hands",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+22 Intellect",
          "Equip: Increases spell damage by up to 46."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 34s"
      },
      {
        "name": "Faceless Shield of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+26 Spirit",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Equip: Increases healing done by up to 25.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 24s"
      },
      {
        "name": "Maddening Vest of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+19 Agility",
          "+15 Intellect"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 31s"
      },
      {
        "name": "Faceless Collar of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 53s"
      },
      {
        "name": "Tentacled Greatsword of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+24 Stamina",
          "+15 Armor"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 80s"
      },
      {
        "name": "Void-Touched Vambraces of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+23 Strength",
          "+18 Stamina",
          "Equip: Increases your parry by 1%."
        ],
        "effect": "Use: Absorbs 500 magic damage for 10 sec.",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 84s"
      },
      {
        "name": "Maddening Bracers of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Plate",
        "stats": [
          "+24 Intellect",
          "+19 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 53s"
      },
      {
        "name": "Whispering Axe of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+26 Agility",
          "+20 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Equip: +1% Hit chance.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 0s"
      },
      {
        "name": "Maddening Slippers of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+24 Stamina",
          "+20 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 90s"
      },
      {
        "name": "Faceless Leggings of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+24 Intellect",
          "+20 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Maddening Cuffs of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Leather",
        "stats": [
          "+28 Agility",
          "+15 Strength"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Maddening Choker of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+28 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Equip: Your healing spells have a 2% chance to restore 300 mana.",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 85s"
      },
      {
        "name": "Tentacled Buckler of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+25 Stamina",
          "+21 Spirit",
          "Equip: Increases healing power by up to 46."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 31s"
      },
      {
        "name": "Whispering Sash of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Mail",
        "stats": [
          "+25 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 2s"
      },
      {
        "name": "Maddening Gavel of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+27 Intellect",
          "Equip: Increases spell damage by up to 46."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 37s"
      },
      {
        "name": "Faceless Choker of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+26 Intellect",
          "+21 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 81s"
      },
      {
        "name": "Tentacled Medallion of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 70s"
      },
      {
        "name": "Maddening Axe of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+28 Stamina",
          "+20 Strength",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 54s"
      },
      {
        "name": "Void-Touched Pauldrons of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+23 Agility",
          "+19 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "Equip: +20 Attack Power.",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 19s"
      },
      {
        "name": "Void-Touched Wristguards of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+27 Agility",
          "+19 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 57s"
      },
      {
        "name": "Void-Touched Breastplate of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Leather",
        "stats": [
          "+23 Stamina",
          "+15 Strength"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 11s"
      },
      {
        "name": "Tentacled Bracers of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Mail",
        "stats": [
          "+27 Stamina",
          "+15 Intellect"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 71s"
      },
      {
        "name": "Tentacled Signet of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+27 Intellect",
          "+19 Stamina",
          "Equip: Increases spell damage by up to 46."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 15s"
      },
      {
        "name": "Whispering Bulwark of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+24 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 50s"
      },
      {
        "name": "Faceless Legguards of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+25 Spirit",
          "+20 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 9s"
      },
      {
        "name": "Maddening Crown of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Cloth",
        "stats": [
          "+24 Stamina",
          "+21 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 35s"
      },
      {
        "name": "Void-Touched Necklace of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 17s"
      },
      {
        "name": "Tentacled Signet of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Intellect",
          "Equip: Increases healing power by up to 46."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 85s"
      },
      {
        "name": "Maddening Dagger of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+26 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 42s"
      },
      {
        "name": "Void-Touched Dagger of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Mace",
        "stats": [
          "+27 Strength",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 84s"
      },
      {
        "name": "Whispering Harness of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Chest",
        "type": "Plate",
        "stats": [
          "+25 Stamina",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "",
        "flavorText": "Forged in the heart of an ancient titan caldera.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 24s"
      },
      {
        "name": "Tentacled Bow of the Black Empire",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "One-Hand",
        "type": "Axe",
        "stats": [
          "+26 Stamina",
          "+19 Strength",
          "+15 Agility"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 77s"
      },
      {
        "name": "Tentacled Slippers of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Plate",
        "stats": [
          "+27 Stamina",
          "Equip: Increases defense rating by 13."
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 70s"
      },
      {
        "name": "Maddening Legguards of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+28 Intellect",
          "+19 Stamina",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 97s"
      },
      {
        "name": "Maddening Epaulets of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Mail",
        "stats": [
          "+23 Stamina",
          "Equip: Increases healing power by up to 46."
        ],
        "effect": "Equip: Restores 4 mana per 5 seconds.",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 69s"
      },
      {
        "name": "Whispering Signet of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Finger",
        "type": "Ring",
        "stats": [
          "+24 Stamina",
          "Equip: Increases your crit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 72s"
      },
      {
        "name": "Maddening Medallion of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 38s"
      },
      {
        "name": "Faceless Greatsword of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+27 Agility",
          "+15 Armor"
        ],
        "effect": "Equip: Increases threat generated by all attacks by 5%.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 26s"
      },
      {
        "name": "Tentacled Aegis of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Off Hand",
        "type": "Shield",
        "stats": [
          "+27 Stamina",
          "+19 Strength",
          "Equip: Increases your parry by 1%."
        ],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 88s"
      },
      {
        "name": "Maddening Cowl of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Plate",
        "stats": [
          "+23 Strength",
          "+19 Stamina",
          "+15 Agility"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 75s"
      },
      {
        "name": "Faceless Circlet of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Head",
        "type": "Mail",
        "stats": [
          "+23 Stamina",
          "+22 Intellect",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "Equip: Increases spell damage by up to 15.",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 78s"
      },
      {
        "name": "Whispering Bow of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+28 Intellect",
          "+22 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 23s"
      },
      {
        "name": "Maddening Sash of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Waist",
        "type": "Leather",
        "stats": [
          "+25 Stamina",
          "Equip: Increases spell damage by up to 46."
        ],
        "effect": "",
        "flavorText": "It throbs with a dark, rhythmic pulse.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 14s"
      },
      {
        "name": "Whispering Footpads of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Feet",
        "type": "Mail",
        "stats": [
          "+26 Intellect",
          "+19 Stamina",
          "Equip: Increases your spell crit by 1%."
        ],
        "effect": "",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 22s"
      },
      {
        "name": "Maddening Pants of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Cloth",
        "stats": [
          "+24 Spirit",
          "+20 Stamina",
          "Equip: Increases healing power by up to 46."
        ],
        "effect": "",
        "flavorText": "The blade sings with the blood of a thousand forgotten souls.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 60s"
      },
      {
        "name": "Whispering Blade of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+26 Stamina",
          "+21 Agility",
          "Equip: Increases your hit by 1%."
        ],
        "effect": "Chance on hit: Drains 50 life from the target and gives it to the wielder.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 57s"
      },
      {
        "name": "Void-Touched Pauldrons of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Shoulder",
        "type": "Leather",
        "stats": [
          "+23 Stamina",
          "+15 Strength"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 12s"
      },
      {
        "name": "Whispering Leggings of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+28 Agility",
          "+20 Stamina",
          "+15 Strength"
        ],
        "effect": "Chance on hit: Grants a shield absorbing 1500 damage for 8 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 24s"
      },
      {
        "name": "Maddening Gavel of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Main Hand",
        "type": "Mace",
        "stats": [
          "+26 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "Light bends strangely around its edges.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 6s"
      },
      {
        "name": "Whispering Relic of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Trinket",
        "type": "Trinket",
        "stats": [],
        "effect": "",
        "flavorText": "Legend says it was once wielded by a titan watcher.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "12g 22s"
      },
      {
        "name": "Faceless Choker of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+23 Stamina",
          "Equip: Increases healing power by up to 46."
        ],
        "effect": "",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 31s"
      },
      {
        "name": "Whispering Legguards of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+23 Stamina",
          "+15 Spirit"
        ],
        "effect": "",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 56s"
      },
      {
        "name": "Faceless Staff of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Two-Hand",
        "type": "Staff",
        "stats": [
          "+27 Spirit",
          "+20 Intellect",
          "Equip: Restores 7 mana per 5 sec."
        ],
        "effect": "Use: Instantly heals the target for 500, but silences you for 3 sec.",
        "flavorText": "Heirs to the throne of Lordaeron wept upon its creation.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 88s"
      },
      {
        "name": "Maddening Legguards of the Deep Void",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Legs",
        "type": "Leather",
        "stats": [
          "+25 Intellect",
          "+20 Stamina",
          "Equip: Increases spell damage by up to 46."
        ],
        "effect": "",
        "flavorText": "A faint whispering can be heard when held to the ear.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 28s"
      },
      {
        "name": "Faceless Necklace of the Old Gods",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Neck",
        "type": "Necklace",
        "stats": [
          "+24 Agility",
          "+15 Armor"
        ],
        "effect": "",
        "flavorText": "Imbued with the furious essence of elemental fire.",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "13g 72s"
      },
      {
        "name": "Maddening Vambraces of the Insane",
        "rarity": "Epic",
        "bindType": "Binds when picked up",
        "slot": "Wrist",
        "type": "Cloth",
        "stats": [
          "+26 Intellect",
          "Equip: Increases your spell hit by 1%."
        ],
        "effect": "Use: Encases the caster in a block of ice, absorbing 2000 damage but rooting them for 5 sec.",
        "flavorText": "",
        "source": "Dungeon Encounter",
        "requiresLevel": 60,
        "sellPrice": "14g 76s"
      }
    ]
  }
]
};
