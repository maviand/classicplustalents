export const PROF_CATS = {
  PRIMARY_CRAFTING: 'Primary: Crafting',
  PRIMARY_GATHERING: 'Primary: Gathering',
  SECONDARY: 'Secondary Skills'
};

export const professionsData = {
  "Primary: Crafting": [
    {
      "id": "Alchemy",
      "name": "Alchemy",
      "icon": "trade_alchemy",
      "description": "Master the brewing of powerful elixirs, flasks, and transmutations. Discover rare recipes lost to time.",
      "recipes": [
        {
          "name": "Corrupted Draught",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "+15 Strength",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 10,
          "mats": "Various materials",
          "sellPrice": "9g 65s"
        },
        {
          "name": "Elixir",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Consumable",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 36,
          "mats": "Various materials",
          "sellPrice": "8g 7s"
        },
        {
          "name": "Lesser Draught",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Consumable",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "3g 61s"
        },
        {
          "name": "Draught",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Intellect",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 5,
          "mats": "Various materials",
          "sellPrice": "10g 93s"
        },
        {
          "name": "Potion of Free Action",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Consumable",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Spirit",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "6g 39s"
        },
        {
          "name": "Minor Phial",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "9g 87s"
        },
        {
          "name": "Flask",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "10g 36s"
        },
        {
          "name": "Minor Potion",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 36,
          "mats": "Various materials",
          "sellPrice": "10g 16s"
        },
        {
          "name": "Purified Phial",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 16,
          "mats": "Various materials",
          "sellPrice": "6g 34s"
        },
        {
          "name": "Volatile Elixir",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Consumable",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 5,
          "mats": "Various materials",
          "sellPrice": "1g 75s"
        },
        {
          "name": "Major Phial of Dreamless Sleep",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Consumable",
          "stats": [
            "+15 Stamina",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "6g 0s"
        },
        {
          "name": "Phial of Supreme Power",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Consumable",
          "stats": [
            "+15 Intellect",
            "+15 Agility",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "3g 71s"
        },
        {
          "name": "Potion",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Consumable",
          "stats": [
            "+15 Intellect",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "1g 38s"
        },
        {
          "name": "Corrupted Vial",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Consumable",
          "stats": [
            "+15 Strength",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 1,
          "mats": "Various materials",
          "sellPrice": "7g 91s"
        },
        {
          "name": "Major Flask",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Consumable",
          "stats": [
            "+15 Spirit",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "3g 74s"
        },
        {
          "name": "Volatile Vial of Shadow Power",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "9g 47s"
        },
        {
          "name": "Major Draught of Dreamless Sleep",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 21,
          "mats": "Various materials",
          "sellPrice": "2g 60s"
        },
        {
          "name": "Minor Elixir of Giants",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Agility",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 21,
          "mats": "Various materials",
          "sellPrice": "2g 56s"
        },
        {
          "name": "Phial",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "10g 64s"
        },
        {
          "name": "Purified Phial of Dreamless Sleep",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Strength",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 43,
          "mats": "Various materials",
          "sellPrice": "1g 51s"
        },
        {
          "name": "Volatile Elixir of Free Action",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "2g 2s"
        },
        {
          "name": "Vial of Free Action",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "7g 71s"
        },
        {
          "name": "Purified Potion",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "6g 88s"
        },
        {
          "name": "Lesser Potion of Supreme Power",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Consumable",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "8g 69s"
        },
        {
          "name": "Greater Flask of Shadow Power",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "+15 Strength",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 26,
          "mats": "Various materials",
          "sellPrice": "10g 78s"
        },
        {
          "name": "Greater Draught",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "10g 75s"
        },
        {
          "name": "Corrupted Potion",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Intellect",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 35,
          "mats": "Various materials",
          "sellPrice": "7g 21s"
        },
        {
          "name": "Major Vial",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Consumable",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "8g 33s"
        },
        {
          "name": "Greater Phial of the Mongoose",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "+15 Spirit",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "3g 94s"
        },
        {
          "name": "Volatile Draught of the Mongoose",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Consumable",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 12,
          "mats": "Various materials",
          "sellPrice": "1g 86s"
        },
        {
          "name": "Greater Vial",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Consumable",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "9g 15s"
        },
        {
          "name": "Flask of Free Action",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Stamina",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 54,
          "mats": "Various materials",
          "sellPrice": "8g 32s"
        },
        {
          "name": "Greater Phial",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 8,
          "mats": "Various materials",
          "sellPrice": "6g 93s"
        },
        {
          "name": "Lesser Flask of Fire Resistance",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Consumable",
          "stats": [
            "+15 Strength",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "6g 31s"
        },
        {
          "name": "Corrupted Flask of Free Action",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 38,
          "mats": "Various materials",
          "sellPrice": "5g 54s"
        },
        {
          "name": "Major Elixir of Free Action",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Consumable",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "6g 65s"
        },
        {
          "name": "Purified Draught",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Consumable",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "5g 15s"
        },
        {
          "name": "Minor Phial of Shadow Power",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 46,
          "mats": "Various materials",
          "sellPrice": "5g 33s"
        },
        {
          "name": "Greater Elixir",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 1,
          "mats": "Various materials",
          "sellPrice": "9g 97s"
        },
        {
          "name": "Major Elixir",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Consumable",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 26,
          "mats": "Various materials",
          "sellPrice": "1g 87s"
        },
        {
          "name": "Enchanted Elixir of Free Action",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Consumable",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Strength",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "7g 96s"
        },
        {
          "name": "Volatile Vial",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Consumable",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "4g 98s"
        },
        {
          "name": "Phial of Fire Resistance",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Consumable",
          "stats": [
            "+15 Agility",
            "+15 Stamina",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "10g 72s"
        },
        {
          "name": "Enchanted Vial of the Sage",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Consumable",
          "stats": [
            "+15 Stamina",
            "+15 Intellect",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "1g 77s"
        },
        {
          "name": "Volatile Potion of Free Action",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 21,
          "mats": "Various materials",
          "sellPrice": "9g 90s"
        },
        {
          "name": "Flask of Supreme Power",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Consumable",
          "stats": [
            "+15 Intellect",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "4g 1s"
        },
        {
          "name": "Enchanted Phial",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 12,
          "mats": "Various materials",
          "sellPrice": "3g 86s"
        },
        {
          "name": "Corrupted Vial of Dreamless Sleep",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "4g 74s"
        },
        {
          "name": "Greater Draught of Supreme Power",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Consumable",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "8g 40s"
        },
        {
          "name": "Greater Elixir of Giants",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Consumable",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "5g 16s"
        }
      ]
    },
    {
      "id": "Blacksmithing",
      "name": "Blacksmithing",
      "icon": "trade_blacksmithing",
      "description": "Forge mighty weapons and impenetrable plate armor from the world's rarest ores.",
      "recipes": [
        {
          "name": "Blood-forged Gauntlets of the Gorilla",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Spirit",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "2g 64s"
        },
        {
          "name": "Shield",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "4g 90s"
        },
        {
          "name": "Shield of Striking",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "6g 46s"
        },
        {
          "name": "Thorium Broadsword",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 51,
          "mats": "Various materials",
          "sellPrice": "4g 86s"
        },
        {
          "name": "Dark Iron Broadsword",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Agility",
            "+15 Spirit",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 23,
          "mats": "Various materials",
          "sellPrice": "7g 32s"
        },
        {
          "name": "Obsidian Warhammer",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "3g 32s"
        },
        {
          "name": "Breastplate",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "7g 6s"
        },
        {
          "name": "True-silver Gauntlets of the Warlord",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Spirit",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "7g 31s"
        },
        {
          "name": "Blood-forged Breastplate of the Monkey",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "4g 10s"
        },
        {
          "name": "Dark Iron Gauntlets",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Spirit",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 38,
          "mats": "Various materials",
          "sellPrice": "5g 26s"
        },
        {
          "name": "Thorium Shield of the Bear",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Stamina",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "8g 55s"
        },
        {
          "name": "Dark Iron Claymore of the Monkey",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "1g 27s"
        },
        {
          "name": "Dark Iron Sabatons",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Strength",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "6g 97s"
        },
        {
          "name": "Elementium Claymore of the Monkey",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Agility",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 47,
          "mats": "Various materials",
          "sellPrice": "4g 22s"
        },
        {
          "name": "Dark Iron Battleaxe of the Monkey",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Strength",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "4g 68s"
        },
        {
          "name": "Dark Iron Warhammer of the Warlord",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 37,
          "mats": "Various materials",
          "sellPrice": "9g 57s"
        },
        {
          "name": "Elementium Warhammer of the Monkey",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 5,
          "mats": "Various materials",
          "sellPrice": "7g 44s"
        },
        {
          "name": "Lionheart Broadsword",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 14,
          "mats": "Various materials",
          "sellPrice": "1g 94s"
        },
        {
          "name": "Dark Iron Shield",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Strength",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "5g 68s"
        },
        {
          "name": "Stronghold Shield",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 46,
          "mats": "Various materials",
          "sellPrice": "7g 38s"
        },
        {
          "name": "True-silver Greatsword of the Gorilla",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "1g 24s"
        },
        {
          "name": "Obsidian Gauntlets of Striking",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Stamina",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 55,
          "mats": "Various materials",
          "sellPrice": "1g 41s"
        },
        {
          "name": "Pauldrons of the Bear",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Stamina",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 53,
          "mats": "Various materials",
          "sellPrice": "7g 81s"
        },
        {
          "name": "Dark Iron Sabatons of the Gorilla",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Stamina",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "8g 42s"
        },
        {
          "name": "Obsidian Broadsword",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "4g 79s"
        },
        {
          "name": "Blood-forged Gauntlets",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Strength",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "1g 50s"
        },
        {
          "name": "Thorium Claymore of Striking",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 22,
          "mats": "Various materials",
          "sellPrice": "10g 4s"
        },
        {
          "name": "Arcanite Broadsword of Defense",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 22,
          "mats": "Various materials",
          "sellPrice": "8g 75s"
        },
        {
          "name": "Blood-forged Greatsword of Striking",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Stamina",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "8g 37s"
        },
        {
          "name": "Lionheart Warhammer",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Strength",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 12,
          "mats": "Various materials",
          "sellPrice": "1g 81s"
        },
        {
          "name": "Sabatons of Striking",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Strength",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "6g 60s"
        },
        {
          "name": "Thorium Sabatons",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "7g 32s"
        },
        {
          "name": "Thorium Battleaxe",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Spirit",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 10,
          "mats": "Various materials",
          "sellPrice": "4g 14s"
        },
        {
          "name": "Arcanite Gauntlets of the Gorilla",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Strength",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 55,
          "mats": "Various materials",
          "sellPrice": "1g 4s"
        },
        {
          "name": "Stronghold Warhammer of the Warlord",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 44,
          "mats": "Various materials",
          "sellPrice": "10g 52s"
        },
        {
          "name": "Stronghold Broadsword of the Monkey",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 14,
          "mats": "Various materials",
          "sellPrice": "5g 78s"
        },
        {
          "name": "Claymore of the Warlord",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 15,
          "mats": "Various materials",
          "sellPrice": "6g 13s"
        },
        {
          "name": "Lionheart Pauldrons",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 51,
          "mats": "Various materials",
          "sellPrice": "1g 69s"
        },
        {
          "name": "Battleaxe",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "6g 64s"
        },
        {
          "name": "Obsidian Gauntlets of the Champion",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Agility",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "5g 95s"
        },
        {
          "name": "Stronghold Gauntlets",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Spirit",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "8g 84s"
        },
        {
          "name": "Gauntlets of the Monkey",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Spirit",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 55,
          "mats": "Various materials",
          "sellPrice": "4g 47s"
        },
        {
          "name": "Arcanite Warhammer",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "8g 95s"
        },
        {
          "name": "Void-Touched Gauntlets",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 25,
          "mats": "Various materials",
          "sellPrice": "8g 7s"
        },
        {
          "name": "Lionheart Greatsword",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Spirit",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 36,
          "mats": "Various materials",
          "sellPrice": "2g 3s"
        },
        {
          "name": "Blood-forged Sabatons of Striking",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "1g 35s"
        },
        {
          "name": "Stronghold Shield of the Champion",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "+15 Stamina",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "9g 17s"
        },
        {
          "name": "Void-Touched Sabatons of the Bear",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Agility",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "4g 9s"
        },
        {
          "name": "Claymore",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Strength",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "3g 93s"
        },
        {
          "name": "Obsidian Claymore",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor/Weapon",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 14,
          "mats": "Various materials",
          "sellPrice": "9g 51s"
        }
      ]
    },
    {
      "id": "Engineering",
      "name": "Engineering",
      "icon": "trade_engineering",
      "description": "The pinnacle of utility. Build explosives, gadgets, and personal flying prototypes.",
      "recipes": [
        {
          "name": "Volatile Rocket Boots Mk. II",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Gadget",
          "stats": [
            "+15 Spirit",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "7g 0s"
        },
        {
          "name": "Ultrasafe Net-o-Matic v1.0",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gadget",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "2g 54s"
        },
        {
          "name": "Goblin Battle Chicken Mk. II",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Gadget",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 54,
          "mats": "Various materials",
          "sellPrice": "8g 66s"
        },
        {
          "name": "Volatile Shrink Ray XL",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Gadget",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "1g 14s"
        },
        {
          "name": "Volatile Shrink Ray",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gadget",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "7g 81s"
        },
        {
          "name": "Net-o-Matic",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Gadget",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "6g 55s"
        },
        {
          "name": "Mind Control Cap XL",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "2g 19s"
        },
        {
          "name": "Arcane-Powered Death-Ray",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Gadget",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 55,
          "mats": "Various materials",
          "sellPrice": "2g 30s"
        },
        {
          "name": "Volatile Repair Bot v3.0",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 29,
          "mats": "Various materials",
          "sellPrice": "5g 57s"
        },
        {
          "name": "Goblin Dynamite Prototype",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 15,
          "mats": "Various materials",
          "sellPrice": "5g 92s"
        },
        {
          "name": "Experimental Mind Control Cap",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 36,
          "mats": "Various materials",
          "sellPrice": "5g 88s"
        },
        {
          "name": "Overcharged Rocket Boots",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Gadget",
          "stats": [
            "+15 Spirit",
            "+15 Intellect",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 55,
          "mats": "Various materials",
          "sellPrice": "1g 18s"
        },
        {
          "name": "Gnomish Repair Bot XL",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Gadget",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "5g 86s"
        },
        {
          "name": "Arcane-Powered Rocket Boots XL",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gadget",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "2g 63s"
        },
        {
          "name": "Arcane-Powered Net-o-Matic",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gadget",
          "stats": [
            "+15 Strength",
            "+15 Agility",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 29,
          "mats": "Various materials",
          "sellPrice": "7g 96s"
        },
        {
          "name": "Repair Bot",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Gadget",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 60,
          "mats": "Various materials",
          "sellPrice": "3g 12s"
        },
        {
          "name": "Arcane-Powered Defibrillator",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 22,
          "mats": "Various materials",
          "sellPrice": "8g 41s"
        },
        {
          "name": "Goblin Defibrillator",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Gadget",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "8g 12s"
        },
        {
          "name": "Clockwork Net-o-Matic",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Gadget",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "2g 92s"
        },
        {
          "name": "Repair Bot v3.0",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Gadget",
          "stats": [
            "+15 Stamina",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "1g 49s"
        },
        {
          "name": "Rocket Boots",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Gadget",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 23,
          "mats": "Various materials",
          "sellPrice": "5g 44s"
        },
        {
          "name": "Ultrasafe Repair Bot Mk. II",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "5g 15s"
        },
        {
          "name": "Experimental Net-o-Matic XL",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gadget",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "9g 92s"
        },
        {
          "name": "Arcane-Powered Repair Bot",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gadget",
          "stats": [
            "+15 Spirit",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "7g 90s"
        },
        {
          "name": "Overcharged Shrink Ray XL",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Gadget",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "4g 30s"
        },
        {
          "name": "Arcane-Powered Dynamite",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Gadget",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "6g 60s"
        },
        {
          "name": "Gnomish Mind Control Cap",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gadget",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 58,
          "mats": "Various materials",
          "sellPrice": "1g 92s"
        },
        {
          "name": "Clockwork Repair Bot v3.0",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gadget",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 60,
          "mats": "Various materials",
          "sellPrice": "6g 27s"
        },
        {
          "name": "Overcharged Battle Chicken v1.0",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gadget",
          "stats": [
            "+15 Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 44,
          "mats": "Various materials",
          "sellPrice": "2g 6s"
        },
        {
          "name": "Goblin Net-o-Matic v1.0",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gadget",
          "stats": [
            "+15 Stamina",
            "+15 Strength",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 60,
          "mats": "Various materials",
          "sellPrice": "1g 40s"
        },
        {
          "name": "Ultrasafe Death-Ray",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Gadget",
          "stats": [
            "+15 Intellect",
            "Equip: Increases healing done by spells and effects by up to 33.",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "9g 84s"
        },
        {
          "name": "Volatile Rocket Boots v1.0",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Gadget",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Intellect",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 15,
          "mats": "Various materials",
          "sellPrice": "2g 89s"
        },
        {
          "name": "Dynamite",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gadget",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Spirit",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "2g 81s"
        },
        {
          "name": "Battle Chicken",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gadget",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "5g 86s"
        },
        {
          "name": "Rocket Boots v2.0",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gadget",
          "stats": [
            "+15 Strength",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "5g 70s"
        },
        {
          "name": "Experimental Dynamite Prototype",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gadget",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "1g 40s"
        },
        {
          "name": "Overcharged Grenade Mk. II",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Gadget",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 43,
          "mats": "Various materials",
          "sellPrice": "4g 81s"
        },
        {
          "name": "Arcane-Powered Grenade",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gadget",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "5g 67s"
        },
        {
          "name": "Ultrasafe Battle Chicken v1.0",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gadget",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "9g 28s"
        },
        {
          "name": "Repair Bot XL",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Gadget",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "2g 96s"
        },
        {
          "name": "Arcane-Powered Death-Ray Prototype",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "5g 86s"
        },
        {
          "name": "Defibrillator Prototype",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "+15 Spirit",
            "+15 Agility",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "7g 28s"
        },
        {
          "name": "Volatile Repair Bot",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Gadget",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "3g 63s"
        },
        {
          "name": "Rocket Boots v1.0",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Gadget",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 46,
          "mats": "Various materials",
          "sellPrice": "9g 86s"
        },
        {
          "name": "Ultrasafe Net-o-Matic",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Gadget",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "2g 1s"
        },
        {
          "name": "Experimental Shrink Ray",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gadget",
          "stats": [
            "+15 Spirit",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "6g 52s"
        },
        {
          "name": "Goblin Net-o-Matic",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "+15 Stamina",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "2g 97s"
        },
        {
          "name": "Gnomish Net-o-Matic",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Gadget",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Strength",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "1g 93s"
        },
        {
          "name": "Mind Control Cap",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gadget",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "1g 42s"
        },
        {
          "name": "Net-o-Matic v3.0",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gadget",
          "stats": [
            "+15 Stamina",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "6g 46s"
        }
      ]
    },
    {
      "id": "Tailoring",
      "name": "Tailoring",
      "icon": "trade_tailoring",
      "description": "Weave magical cloths into powerful robes, bags, and spellcaster garments.",
      "recipes": [
        {
          "name": "Leggings of the Whale",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "2g 65s"
        },
        {
          "name": "Gloves",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 1,
          "mats": "Various materials",
          "sellPrice": "7g 87s"
        },
        {
          "name": "Shadoweave Mantle of the Owl",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "5g 12s"
        },
        {
          "name": "Cowl",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 10,
          "mats": "Various materials",
          "sellPrice": "8g 91s"
        },
        {
          "name": "Robe of Healing",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "9g 18s"
        },
        {
          "name": "Shadoweave Mantle",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "6g 14s"
        },
        {
          "name": "Ghostweave Cowl",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Spirit",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "6g 37s"
        },
        {
          "name": "Felcloth Robe",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Armor/Bag",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "7g 43s"
        },
        {
          "name": "Shadoweave Tunic of the Eagle",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Bag",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 15,
          "mats": "Various materials",
          "sellPrice": "1g 85s"
        },
        {
          "name": "Dreamweave Boots",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Stamina",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 11,
          "mats": "Various materials",
          "sellPrice": "1g 74s"
        },
        {
          "name": "Leggings",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "2g 5s"
        },
        {
          "name": "Mantle of the Archmage",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Agility",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "6g 64s"
        },
        {
          "name": "Shadoweave Boots of the Eagle",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Bag",
          "stats": [
            "+15 Intellect",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 29,
          "mats": "Various materials",
          "sellPrice": "7g 24s"
        },
        {
          "name": "Spellfire Leggings",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 9,
          "mats": "Various materials",
          "sellPrice": "2g 78s"
        },
        {
          "name": "Felcloth Bag",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "7g 39s"
        },
        {
          "name": "Spellfire Satchel of Sorcery",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Intellect",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 47,
          "mats": "Various materials",
          "sellPrice": "9g 74s"
        },
        {
          "name": "Mantle",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "8g 23s"
        },
        {
          "name": "Dreamweave Mantle of Sorcery",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "9g 86s"
        },
        {
          "name": "Runecloth Boots of the Owl",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 15,
          "mats": "Various materials",
          "sellPrice": "6g 86s"
        },
        {
          "name": "Ghostweave Leggings of Healing",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Armor/Bag",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "7g 3s"
        },
        {
          "name": "Bag",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "6g 58s"
        },
        {
          "name": "Dreamweave Leggings",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "9g 72s"
        },
        {
          "name": "Mooncloth Cowl of the Owl",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "6g 13s"
        },
        {
          "name": "Runecloth Cowl of the Archmage",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "9g 98s"
        },
        {
          "name": "Ghostweave Satchel of the Eagle",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Armor/Bag",
          "stats": [
            "+15 Strength",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 23,
          "mats": "Various materials",
          "sellPrice": "2g 10s"
        },
        {
          "name": "Felcloth Bag of the Owl",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 5,
          "mats": "Various materials",
          "sellPrice": "10g 12s"
        },
        {
          "name": "Mooncloth Gloves",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 10,
          "mats": "Various materials",
          "sellPrice": "4g 30s"
        },
        {
          "name": "Felcloth Robe of the Whale",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 37,
          "mats": "Various materials",
          "sellPrice": "1g 94s"
        },
        {
          "name": "Dreamweave Satchel",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Armor/Bag",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "3g 72s"
        },
        {
          "name": "Ghostweave Boots",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "9g 9s"
        },
        {
          "name": "Bag of the Whale",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Stamina",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "3g 39s"
        },
        {
          "name": "Mooncloth Leggings of Healing",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "+15 Spirit",
            "+15 Intellect",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "9g 11s"
        },
        {
          "name": "Dreamweave Mantle of the Eagle",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "+15 Spirit",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "8g 96s"
        },
        {
          "name": "Dreamweave Robe",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "+15 Stamina",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 44,
          "mats": "Various materials",
          "sellPrice": "1g 13s"
        },
        {
          "name": "Runecloth Bag of Healing",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 16,
          "mats": "Various materials",
          "sellPrice": "4g 12s"
        },
        {
          "name": "Spellfire Cowl of Sorcery",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 54,
          "mats": "Various materials",
          "sellPrice": "2g 47s"
        },
        {
          "name": "Spellfire Mantle",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "10g 80s"
        },
        {
          "name": "Mooncloth Cowl",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "+15 Strength",
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "8g 53s"
        },
        {
          "name": "Felcloth Leggings",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Intellect",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "3g 92s"
        },
        {
          "name": "Robe of the Eagle",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Intellect",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 3,
          "mats": "Various materials",
          "sellPrice": "6g 56s"
        },
        {
          "name": "Spellfire Bag",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Spirit",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "6g 88s"
        },
        {
          "name": "Dreamweave Mantle of the Whale",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "+15 Spirit",
            "+15 Agility",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "1g 45s"
        },
        {
          "name": "Robe",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "10g 1s"
        },
        {
          "name": "Runecloth Tunic of the Whale",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "+15 Intellect",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 46,
          "mats": "Various materials",
          "sellPrice": "4g 37s"
        },
        {
          "name": "Mooncloth Mantle of Healing",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 12,
          "mats": "Various materials",
          "sellPrice": "10g 92s"
        },
        {
          "name": "Mooncloth Satchel of Healing",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 35,
          "mats": "Various materials",
          "sellPrice": "5g 83s"
        },
        {
          "name": "Gloves of Healing",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor/Bag",
          "stats": [
            "+15 Agility",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 38,
          "mats": "Various materials",
          "sellPrice": "5g 14s"
        },
        {
          "name": "Dreamweave Leggings of the Archmage",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 9,
          "mats": "Various materials",
          "sellPrice": "9g 84s"
        },
        {
          "name": "Mooncloth Bag of the Eagle",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor/Bag",
          "stats": [
            "+15 Stamina",
            "+15 Strength",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 53,
          "mats": "Various materials",
          "sellPrice": "2g 34s"
        },
        {
          "name": "Gloves of Sorcery",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor/Bag",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "6g 46s"
        }
      ]
    },
    {
      "id": "Leatherworking",
      "name": "Leatherworking",
      "icon": "trade_leatherworking",
      "description": "Craft leather and mail armor from the hides of dangerous beasts.",
      "recipes": [
        {
          "name": "Wolfshead Bracers",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "+15 Strength",
            "+15 Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "2g 54s"
        },
        {
          "name": "Tunic",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Armor",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 32,
          "mats": "Various materials",
          "sellPrice": "5g 76s"
        },
        {
          "name": "Helm",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Armor",
          "stats": [
            "+15 Agility",
            "+15 Intellect",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 8,
          "mats": "Various materials",
          "sellPrice": "2g 80s"
        },
        {
          "name": "Black Dragonscale Spaulders of the Wolf",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "10g 27s"
        },
        {
          "name": "Spaulders of the Wolf",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Armor",
          "stats": [
            "+15 Stamina",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "6g 28s"
        },
        {
          "name": "Black Dragonscale Helm",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 36,
          "mats": "Various materials",
          "sellPrice": "10g 93s"
        },
        {
          "name": "Corehound Spaulders",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Intellect",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "6g 50s"
        },
        {
          "name": "Black Dragonscale Legguards of the Wolf",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Armor",
          "stats": [
            "+15 Intellect",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "7g 37s"
        },
        {
          "name": "Helm of the Tracker",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 9,
          "mats": "Various materials",
          "sellPrice": "1g 63s"
        },
        {
          "name": "Cloak",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "1g 50s"
        },
        {
          "name": "Bracers",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Armor",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Spirit",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "6g 49s"
        },
        {
          "name": "Wolfshead Belt",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor",
          "stats": [
            "+15 Spirit",
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "9g 77s"
        },
        {
          "name": "Tunic of the Falcon",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Armor",
          "stats": [
            "+15 Spirit",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "6g 21s"
        },
        {
          "name": "Corehound Boots of the Wolf",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "+15 Spirit",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "9g 15s"
        },
        {
          "name": "Rugged Belt",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 32,
          "mats": "Various materials",
          "sellPrice": "8g 74s"
        },
        {
          "name": "Rugged Legguards of the Falcon",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Spirit",
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "7g 34s"
        },
        {
          "name": "Cloak of Agility",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Armor",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "5g 5s"
        },
        {
          "name": "Chimeric Helm",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "8g 95s"
        },
        {
          "name": "Tunic of the Monkey",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor",
          "stats": [
            "+15 Intellect",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 4,
          "mats": "Various materials",
          "sellPrice": "9g 52s"
        },
        {
          "name": "Black Dragonscale Legguards",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Spirit",
            "+15 Agility",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "5g 50s"
        },
        {
          "name": "Thick Cloak of the Monkey",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor",
          "stats": [
            "+15 Agility",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "5g 26s"
        },
        {
          "name": "Cured Bracers",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Armor",
          "stats": [
            "+15 Stamina",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "7g 87s"
        },
        {
          "name": "Spaulders of the Tracker",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "2g 69s"
        },
        {
          "name": "Thick Spaulders of the Wolf",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "7g 71s"
        },
        {
          "name": "Devilsaur Helm of the Falcon",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 8,
          "mats": "Various materials",
          "sellPrice": "5g 98s"
        },
        {
          "name": "Devilsaur Legguards of the Tracker",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "2g 25s"
        },
        {
          "name": "Thick Belt",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Agility",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 43,
          "mats": "Various materials",
          "sellPrice": "8g 53s"
        },
        {
          "name": "Rugged Spaulders",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Strength",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 54,
          "mats": "Various materials",
          "sellPrice": "10g 92s"
        },
        {
          "name": "Corehound Cloak of the Falcon",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Armor",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "9g 28s"
        },
        {
          "name": "Spaulders of the Falcon",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Strength",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 54,
          "mats": "Various materials",
          "sellPrice": "8g 61s"
        },
        {
          "name": "Boots",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor",
          "stats": [
            "+15 Spirit",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 7,
          "mats": "Various materials",
          "sellPrice": "4g 93s"
        },
        {
          "name": "Wolfshead Cloak of Agility",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Spirit",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "7g 90s"
        },
        {
          "name": "Cured Boots",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "4g 20s"
        },
        {
          "name": "Cured Boots of the Tracker",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 51,
          "mats": "Various materials",
          "sellPrice": "7g 85s"
        },
        {
          "name": "Cured Spaulders",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Intellect",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "10g 57s"
        },
        {
          "name": "Rugged Cloak",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Stamina",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "9g 50s"
        },
        {
          "name": "Thick Helm",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Armor",
          "stats": [
            "+15 Agility",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "10g 47s"
        },
        {
          "name": "Black Dragonscale Cloak of the Tracker",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Armor",
          "stats": [
            "+15 Spirit",
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 51,
          "mats": "Various materials",
          "sellPrice": "5g 8s"
        },
        {
          "name": "Cured Tunic",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Armor",
          "stats": [
            "+15 Strength",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "9g 16s"
        },
        {
          "name": "Rugged Belt of the Wolf",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "7g 0s"
        },
        {
          "name": "Thick Boots",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Intellect",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 47,
          "mats": "Various materials",
          "sellPrice": "6g 73s"
        },
        {
          "name": "Corehound Belt",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "+15 Spirit",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "3g 17s"
        },
        {
          "name": "Black Dragonscale Spaulders of the Falcon",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Armor",
          "stats": [
            "+15 Intellect",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "10g 12s"
        },
        {
          "name": "Wolfshead Bracers of Agility",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "+15 Stamina",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "1g 22s"
        },
        {
          "name": "Corehound Tunic",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Armor",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 12,
          "mats": "Various materials",
          "sellPrice": "6g 97s"
        },
        {
          "name": "Boots of the Tracker",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Armor",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "1g 65s"
        },
        {
          "name": "Chimeric Spaulders of the Falcon",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor",
          "stats": [
            "+15 Spirit",
            "+15 Strength",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 44,
          "mats": "Various materials",
          "sellPrice": "5g 3s"
        },
        {
          "name": "Legguards of the Tracker",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Armor",
          "stats": [
            "+15 Stamina",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 16,
          "mats": "Various materials",
          "sellPrice": "10g 14s"
        },
        {
          "name": "Cured Spaulders of the Wolf",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Armor",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "1g 18s"
        },
        {
          "name": "Corehound Bracers",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Armor",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Strength",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "4g 33s"
        }
      ]
    },
    {
      "id": "Enchanting",
      "name": "Enchanting",
      "icon": "trade_engraving",
      "description": "Disenchant items into magical essences to permanently augment gear.",
      "recipes": [
        {
          "name": "Superior Enchant Boots - Agility",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "9g 71s"
        },
        {
          "name": "Enchant Cloak",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 15,
          "mats": "Various materials",
          "sellPrice": "9g 44s"
        },
        {
          "name": "Minor Enchant Cloak",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "7g 5s"
        },
        {
          "name": "Superior Enchant Boots - Icy Chill",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "3g 88s"
        },
        {
          "name": "Enchant Gloves",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 7,
          "mats": "Various materials",
          "sellPrice": "6g 42s"
        },
        {
          "name": "Superior Enchant Gloves",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 11,
          "mats": "Various materials",
          "sellPrice": "1g 89s"
        },
        {
          "name": "Minor Enchant Shield",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "9g 28s"
        },
        {
          "name": "Brilliant Mana Oil - Spell Power",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "8g 44s"
        },
        {
          "name": "Major Enchant Cloak",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "4g 91s"
        },
        {
          "name": "Enchant Boots - Fiery Weapon",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "2g 25s"
        },
        {
          "name": "Lesser Enchant Shield",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 29,
          "mats": "Various materials",
          "sellPrice": "8g 87s"
        },
        {
          "name": "Brilliant Wizard Oil",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 3,
          "mats": "Various materials",
          "sellPrice": "6g 2s"
        },
        {
          "name": "Enchant Bracer - Fiery Weapon",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "1g 92s"
        },
        {
          "name": "Excellent Enchant Weapon - Agility",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 7,
          "mats": "Various materials",
          "sellPrice": "5g 94s"
        },
        {
          "name": "Greater Enchant Cloak - Agility",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "6g 42s"
        },
        {
          "name": "Enchant Shield - Agility",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 60,
          "mats": "Various materials",
          "sellPrice": "7g 72s"
        },
        {
          "name": "Excellent Enchant Cloak - Crusader",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "8g 65s"
        },
        {
          "name": "Major Enchant Shield - Fiery Weapon",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "3g 88s"
        },
        {
          "name": "Greater Enchant Chest",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 16,
          "mats": "Various materials",
          "sellPrice": "8g 98s"
        },
        {
          "name": "Lesser Enchant Weapon",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 39,
          "mats": "Various materials",
          "sellPrice": "3g 1s"
        },
        {
          "name": "Minor Enchant Shield - Minor Speed",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "7g 41s"
        },
        {
          "name": "Lesser Brilliant Wizard Oil",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 8,
          "mats": "Various materials",
          "sellPrice": "2g 31s"
        },
        {
          "name": "Greater Enchant Boots - Spell Power",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "10g 85s"
        },
        {
          "name": "Enchant Weapon",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "1g 5s"
        },
        {
          "name": "Enchant Gloves - Lifestealing",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "4g 82s"
        },
        {
          "name": "Lesser Enchant Bracer - Lifestealing",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "9g 89s"
        },
        {
          "name": "Superior Enchant Shield",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 7,
          "mats": "Various materials",
          "sellPrice": "1g 28s"
        },
        {
          "name": "Greater Brilliant Wizard Oil",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 53,
          "mats": "Various materials",
          "sellPrice": "6g 89s"
        },
        {
          "name": "Excellent Enchant Gloves - Greater Stats",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 5,
          "mats": "Various materials",
          "sellPrice": "4g 37s"
        },
        {
          "name": "Minor Enchant Gloves - Crusader",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "4g 89s"
        },
        {
          "name": "Greater Enchant Weapon",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "10g 42s"
        },
        {
          "name": "Major Brilliant Wizard Oil - Fiery Weapon",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 37,
          "mats": "Various materials",
          "sellPrice": "3g 89s"
        },
        {
          "name": "Major Brilliant Wizard Oil",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "6g 93s"
        },
        {
          "name": "Enchant Boots - Crusader",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "3g 44s"
        },
        {
          "name": "Enchant Boots",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 43,
          "mats": "Various materials",
          "sellPrice": "3g 33s"
        },
        {
          "name": "Superior Enchant Bracer - Greater Stats",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 4,
          "mats": "Various materials",
          "sellPrice": "5g 79s"
        },
        {
          "name": "Enchant Bracer",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 22,
          "mats": "Various materials",
          "sellPrice": "5g 4s"
        },
        {
          "name": "Lesser Enchant Boots",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "8g 48s"
        },
        {
          "name": "Greater Enchant Gloves - Greater Stats",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "5g 82s"
        },
        {
          "name": "Major Enchant Weapon - Minor Speed",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 57,
          "mats": "Various materials",
          "sellPrice": "3g 32s"
        },
        {
          "name": "Enchant Shield - Crusader",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "4g 27s"
        },
        {
          "name": "Superior Enchant Weapon - Crusader",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 29,
          "mats": "Various materials",
          "sellPrice": "10g 12s"
        },
        {
          "name": "Major Enchant Cloak - Spell Power",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 26,
          "mats": "Various materials",
          "sellPrice": "3g 23s"
        },
        {
          "name": "Superior Enchant Shield - Crusader",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 10,
          "mats": "Various materials",
          "sellPrice": "4g 77s"
        },
        {
          "name": "Superior Brilliant Wizard Oil - Minor Speed",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "1g 5s"
        },
        {
          "name": "Minor Enchant Bracer - Spell Power",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "2g 29s"
        },
        {
          "name": "Excellent Brilliant Wizard Oil - Lifestealing",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 21,
          "mats": "Various materials",
          "sellPrice": "10g 27s"
        },
        {
          "name": "Major Enchant Cloak - Greater Stats",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "7g 30s"
        },
        {
          "name": "Minor Brilliant Wizard Oil - Minor Speed",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 26,
          "mats": "Various materials",
          "sellPrice": "6g 40s"
        },
        {
          "name": "Brilliant Mana Oil - Lifestealing",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Enchantment",
          "stats": [
            "Use: Permanently enchants an item."
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "1g 22s"
        }
      ]
    },
    {
      "id": "Jewelcrafting",
      "name": "Jewelcrafting",
      "icon": "inv_misc_gem_01",
      "description": "Cut raw gems into powerful jewels to socket into your gear, or craft ornate rings and amulets.",
      "recipes": [
        {
          "name": "Sparkling Amulet of the Earth",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 23,
          "mats": "Various materials",
          "sellPrice": "5g 21s"
        },
        {
          "name": "Flashing Pendant of the Moon",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "5g 45s"
        },
        {
          "name": "Amulet",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Strength",
            "+15 Agility",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "8g 92s"
        },
        {
          "name": "Runed Opal",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 5,
          "mats": "Various materials",
          "sellPrice": "8g 69s"
        },
        {
          "name": "Shifting Emerald of the Sky",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit",
            "+15 Stamina",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "4g 90s"
        },
        {
          "name": "Solid Opal",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Stamina",
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 7,
          "mats": "Various materials",
          "sellPrice": "10g 36s"
        },
        {
          "name": "Opal of the Earth",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 37,
          "mats": "Various materials",
          "sellPrice": "5g 51s"
        },
        {
          "name": "Opal",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "4g 78s"
        },
        {
          "name": "Sapphire of the Sea",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "9g 95s"
        },
        {
          "name": "Runed Emerald of the Earth",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Agility",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "9g 69s"
        },
        {
          "name": "Solid Ruby of the Sea",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Agility",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 22,
          "mats": "Various materials",
          "sellPrice": "4g 49s"
        },
        {
          "name": "Topaz of the Moon",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 60,
          "mats": "Various materials",
          "sellPrice": "2g 20s"
        },
        {
          "name": "Pendant of the Earth",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "2g 26s"
        },
        {
          "name": "Glinting Topaz of the Sun",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "9g 89s"
        },
        {
          "name": "Brilliant Necklace of the Sky",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "5g 75s"
        },
        {
          "name": "Flashing Ruby",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit",
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "2g 94s"
        },
        {
          "name": "Shifting Amulet of the Earth",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "6g 89s"
        },
        {
          "name": "Shifting Sapphire of the Earth",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "9g 98s"
        },
        {
          "name": "Diamond of the Moon",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 1,
          "mats": "Various materials",
          "sellPrice": "1g 50s"
        },
        {
          "name": "Delicate Emerald of the Sky",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Intellect",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 38,
          "mats": "Various materials",
          "sellPrice": "9g 47s"
        },
        {
          "name": "Diamond of the Sun",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Intellect",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "3g 30s"
        },
        {
          "name": "Sparkling Opal of the Earth",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Strength",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "6g 45s"
        },
        {
          "name": "Ruby of the Earth",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Strength",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "1g 28s"
        },
        {
          "name": "Shifting Pendant",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Intellect",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "5g 5s"
        },
        {
          "name": "Flashing Sapphire of the Earth",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 53,
          "mats": "Various materials",
          "sellPrice": "4g 79s"
        },
        {
          "name": "Sparkling Emerald of the Sky",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Intellect",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 4,
          "mats": "Various materials",
          "sellPrice": "6g 68s"
        },
        {
          "name": "Shifting Emerald",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 25,
          "mats": "Various materials",
          "sellPrice": "3g 44s"
        },
        {
          "name": "Ring of the Moon",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "6g 76s"
        },
        {
          "name": "Sapphire",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Agility",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "1g 58s"
        },
        {
          "name": "Emerald",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33.",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "10g 46s"
        },
        {
          "name": "Brilliant Diamond",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "3g 66s"
        },
        {
          "name": "Flashing Diamond",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 3,
          "mats": "Various materials",
          "sellPrice": "1g 31s"
        },
        {
          "name": "Shifting Amulet",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Strength",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 25,
          "mats": "Various materials",
          "sellPrice": "7g 70s"
        },
        {
          "name": "Shifting Necklace",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Intellect",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 22,
          "mats": "Various materials",
          "sellPrice": "4g 11s"
        },
        {
          "name": "Runed Pendant of the Earth",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 1,
          "mats": "Various materials",
          "sellPrice": "10g 28s"
        },
        {
          "name": "Solid Pendant",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 60,
          "mats": "Various materials",
          "sellPrice": "4g 15s"
        },
        {
          "name": "Flashing Ruby of the Earth",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Agility",
            "+15 Intellect",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "7g 1s"
        },
        {
          "name": "Emerald of the Earth",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Strength",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "3g 96s"
        },
        {
          "name": "Runed Ruby of the Earth",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "1g 53s"
        },
        {
          "name": "Delicate Amulet of the Sky",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Intellect",
            "+15 Spirit",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 60,
          "mats": "Various materials",
          "sellPrice": "7g 56s"
        },
        {
          "name": "Delicate Ring",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 3,
          "mats": "Various materials",
          "sellPrice": "8g 59s"
        },
        {
          "name": "Flashing Ring of the Moon",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 43,
          "mats": "Various materials",
          "sellPrice": "2g 35s"
        },
        {
          "name": "Sparkling Necklace",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "5g 40s"
        },
        {
          "name": "Flashing Sapphire of the Sea",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Agility",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "10g 30s"
        },
        {
          "name": "Glinting Topaz",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "8g 8s"
        },
        {
          "name": "Shifting Ring",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Intellect",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "8g 0s"
        },
        {
          "name": "Flashing Amulet",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 47,
          "mats": "Various materials",
          "sellPrice": "1g 67s"
        },
        {
          "name": "Shifting Amulet of the Sea",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Strength",
            "+15 Agility",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 29,
          "mats": "Various materials",
          "sellPrice": "4g 64s"
        },
        {
          "name": "Delicate Ring of the Sky",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Gem/Jewelry",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "4g 65s"
        },
        {
          "name": "Solid Topaz",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Gem/Jewelry",
          "stats": [
            "+15 Spirit",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 55,
          "mats": "Various materials",
          "sellPrice": "9g 80s"
        }
      ]
    },
    {
      "id": "Inscription",
      "name": "Inscription",
      "icon": "inv_scroll_08",
      "description": "Mill herbs into pigments to create powerful glyphs, scrolls, and off-hand tomes.",
      "recipes": [
        {
          "name": "Major Tome",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Intellect",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "2g 32s"
        },
        {
          "name": "Arcane Tome of Recall",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "1g 37s"
        },
        {
          "name": "Scroll of Recall",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 26,
          "mats": "Various materials",
          "sellPrice": "7g 72s"
        },
        {
          "name": "Scroll of Agility",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 14,
          "mats": "Various materials",
          "sellPrice": "10g 48s"
        },
        {
          "name": "Arcane Vellum",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "10g 67s"
        },
        {
          "name": "Tome of Strength",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "8g 91s"
        },
        {
          "name": "Shadowy Scroll",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
            "+15 Stamina",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "1g 68s"
        },
        {
          "name": "Major Vellum of Intellect",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Spirit",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "4g 27s"
        },
        {
          "name": "Shadowy Tome of Protection",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Stamina",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 51,
          "mats": "Various materials",
          "sellPrice": "4g 40s"
        },
        {
          "name": "Greater Tome",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "9g 87s"
        },
        {
          "name": "Lesser Tarot",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "7g 76s"
        },
        {
          "name": "Divine Tarot of Agility",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 26,
          "mats": "Various materials",
          "sellPrice": "8g 39s"
        },
        {
          "name": "Arcane Scroll",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 14,
          "mats": "Various materials",
          "sellPrice": "6g 93s"
        },
        {
          "name": "Vellum",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Agility",
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 47,
          "mats": "Various materials",
          "sellPrice": "6g 83s"
        },
        {
          "name": "Minor Tome of the Gladiator",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 32,
          "mats": "Various materials",
          "sellPrice": "10g 66s"
        },
        {
          "name": "Tome",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Spirit",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "8g 46s"
        },
        {
          "name": "Arcane Tome",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "8g 71s"
        },
        {
          "name": "Tarot",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Intellect",
            "+15 Spirit",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 44,
          "mats": "Various materials",
          "sellPrice": "2g 74s"
        },
        {
          "name": "Shadowy Tome",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "7g 59s"
        },
        {
          "name": "Minor Scroll of Protection",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Agility",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "7g 80s"
        },
        {
          "name": "Arcane Scroll of Intellect",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 3,
          "mats": "Various materials",
          "sellPrice": "4g 6s"
        },
        {
          "name": "Mystic Scroll",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "2g 20s"
        },
        {
          "name": "Vellum of the Gladiator",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "2g 63s"
        },
        {
          "name": "Minor Glyph of Recall",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 3,
          "mats": "Various materials",
          "sellPrice": "6g 51s"
        },
        {
          "name": "Major Vellum of Strength",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Strength",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "6g 20s"
        },
        {
          "name": "Arcane Tarot of Strength",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "10g 49s"
        },
        {
          "name": "Glyph",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Strength",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 51,
          "mats": "Various materials",
          "sellPrice": "2g 88s"
        },
        {
          "name": "Greater Glyph",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 16,
          "mats": "Various materials",
          "sellPrice": "3g 45s"
        },
        {
          "name": "Lesser Vellum of the Gladiator",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Intellect",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "8g 19s"
        },
        {
          "name": "Mystic Glyph of Protection",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 51,
          "mats": "Various materials",
          "sellPrice": "4g 7s"
        },
        {
          "name": "Mystic Vellum of Agility",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Spirit",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "1g 12s"
        },
        {
          "name": "Minor Glyph",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Intellect",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 3,
          "mats": "Various materials",
          "sellPrice": "7g 96s"
        },
        {
          "name": "Major Tome of Recall",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Spirit",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "5g 29s"
        },
        {
          "name": "Greater Vellum of Strength",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "4g 53s"
        },
        {
          "name": "Mystic Tarot of Strength",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Agility",
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "2g 3s"
        },
        {
          "name": "Lesser Scroll of Protection",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 15,
          "mats": "Various materials",
          "sellPrice": "6g 9s"
        },
        {
          "name": "Greater Scroll of Recall",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Stamina",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 12,
          "mats": "Various materials",
          "sellPrice": "8g 59s"
        },
        {
          "name": "Mystic Tome of Agility",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 16,
          "mats": "Various materials",
          "sellPrice": "4g 51s"
        },
        {
          "name": "Lesser Tome of Strength",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Intellect"
          ],
          "effect": "",
          "requiresLevel": 20,
          "mats": "Various materials",
          "sellPrice": "2g 39s"
        },
        {
          "name": "Mystic Tome",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Spirit"
          ],
          "effect": "",
          "requiresLevel": 47,
          "mats": "Various materials",
          "sellPrice": "3g 12s"
        },
        {
          "name": "Shadowy Tarot of Protection",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Stamina",
            "+15 Strength"
          ],
          "effect": "",
          "requiresLevel": 12,
          "mats": "Various materials",
          "sellPrice": "7g 83s"
        },
        {
          "name": "Mystic Vellum of the Gladiator",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Stamina",
            "Equip: Increases damage and healing done by magical spells and effects by up to 21."
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "8g 74s"
        },
        {
          "name": "Greater Tarot of the Gladiator",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "+15 Spirit",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "9g 9s"
        },
        {
          "name": "Divine Tome of Recall",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%.",
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "5g 65s"
        },
        {
          "name": "Mystic Scroll of Protection",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Increases healing done by spells and effects by up to 33."
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "2g 73s"
        },
        {
          "name": "Greater Glyph of Intellect",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Spirit",
            "+15 Agility"
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "10g 8s"
        },
        {
          "name": "Glyph of the Gladiator",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Intellect",
            "+15 Strength",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "9g 0s"
        },
        {
          "name": "Major Tome of Agility",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "6g 13s"
        },
        {
          "name": "Divine Tome",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Scroll/Glyph",
          "stats": [
            "+15 Strength",
            "+15 Stamina"
          ],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "2g 43s"
        },
        {
          "name": "Vellum of Intellect",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Scroll/Glyph",
          "stats": [
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "10g 30s"
        }
      ]
    }
  ],
  "Primary: Gathering": [
    {
      "id": "Mining",
      "name": "Mining",
      "icon": "trade_mining",
      "description": "Extract precious ores and gems from the earth.",
      "recipes": [
        {
          "name": "Ore",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "6g 42s"
        },
        {
          "name": "Thorium Crystal ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 26,
          "mats": "Various materials",
          "sellPrice": "5g 19s"
        },
        {
          "name": "Tin Bar ",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 36,
          "mats": "Various materials",
          "sellPrice": "2g 42s"
        },
        {
          "name": "Dark Iron Crystal",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "7g 12s"
        },
        {
          "name": "Elementium Bar",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "5g 83s"
        },
        {
          "name": "Iron Crystal ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "3g 28s"
        },
        {
          "name": "Mithril Bar ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 56,
          "mats": "Various materials",
          "sellPrice": "8g 52s"
        },
        {
          "name": "Crystal ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "2g 12s"
        },
        {
          "name": "Bar ",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 22,
          "mats": "Various materials",
          "sellPrice": "2g 12s"
        },
        {
          "name": "Mithril Ore",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "2g 96s"
        },
        {
          "name": "Tin Stone",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 29,
          "mats": "Various materials",
          "sellPrice": "1g 5s"
        },
        {
          "name": "Thorium Bar",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 44,
          "mats": "Various materials",
          "sellPrice": "4g 37s"
        },
        {
          "name": "Bar",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "9g 22s"
        },
        {
          "name": "Tin Stone ",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "7g 48s"
        },
        {
          "name": "Thorium Ore",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "2g 50s"
        },
        {
          "name": "Tin Crystal ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 12,
          "mats": "Various materials",
          "sellPrice": "5g 74s"
        },
        {
          "name": "Thorium Stone ",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 25,
          "mats": "Various materials",
          "sellPrice": "9g 33s"
        },
        {
          "name": "Elementium Stone ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "8g 53s"
        },
        {
          "name": "Crystal",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 47,
          "mats": "Various materials",
          "sellPrice": "7g 18s"
        },
        {
          "name": "Tin Ore",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 9,
          "mats": "Various materials",
          "sellPrice": "7g 56s"
        }
      ]
    },
    {
      "id": "Herbalism",
      "name": "Herbalism",
      "icon": "spell_nature_naturetouchgrow",
      "description": "Gather rare herbs and flora from across the world.",
      "recipes": [
        {
          "name": "Fadeleaf Root",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "2g 11s"
        },
        {
          "name": "Earthroot Bloom",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "4g 65s"
        },
        {
          "name": "Kingsblood Root ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 2,
          "mats": "Various materials",
          "sellPrice": "4g 55s"
        },
        {
          "name": "Earthroot Root ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "4g 82s"
        },
        {
          "name": "Icecap Clover ",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "4g 10s"
        },
        {
          "name": "Dreamfoil Bloom",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 21,
          "mats": "Various materials",
          "sellPrice": "5g 14s"
        },
        {
          "name": "Leaf ",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 9,
          "mats": "Various materials",
          "sellPrice": "1g 57s"
        },
        {
          "name": "Fadeleaf Weed ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "9g 66s"
        },
        {
          "name": "Fadeleaf Lotus ",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 37,
          "mats": "Various materials",
          "sellPrice": "10g 19s"
        },
        {
          "name": "Mageroyal Weed ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "9g 67s"
        },
        {
          "name": "Mageroyal Bloom",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 36,
          "mats": "Various materials",
          "sellPrice": "9g 13s"
        },
        {
          "name": "Dreamfoil Root",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "3g 82s"
        },
        {
          "name": "Plaguebloom Weed ",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 4,
          "mats": "Various materials",
          "sellPrice": "3g 33s"
        },
        {
          "name": "Black Lotus Weed",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 15,
          "mats": "Various materials",
          "sellPrice": "8g 80s"
        },
        {
          "name": "Blindweed Leaf",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "9g 55s"
        },
        {
          "name": "Root ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "3g 18s"
        },
        {
          "name": "Liferoot Weed",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 29,
          "mats": "Various materials",
          "sellPrice": "5g 65s"
        },
        {
          "name": "Liferoot Lotus ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 60,
          "mats": "Various materials",
          "sellPrice": "6g 75s"
        },
        {
          "name": "Ghost Mushroom Clover ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "9g 39s"
        },
        {
          "name": "Liferoot Bloom ",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "3g 83s"
        }
      ]
    },
    {
      "id": "Skinning",
      "name": "Skinning",
      "icon": "inv_misc_pelt_wolf_01",
      "description": "Harvest leathers, hides, and scales from slain beasts.",
      "recipes": [
        {
          "name": "Leather",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "5g 11s"
        },
        {
          "name": "Scale ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 44,
          "mats": "Various materials",
          "sellPrice": "4g 26s"
        },
        {
          "name": "Heavy Scale",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 47,
          "mats": "Various materials",
          "sellPrice": "6g 35s"
        },
        {
          "name": "Light Hide ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 8,
          "mats": "Various materials",
          "sellPrice": "1g 43s"
        },
        {
          "name": "Thick Scale ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 30,
          "mats": "Various materials",
          "sellPrice": "2g 57s"
        },
        {
          "name": "Light Pelt",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 3,
          "mats": "Various materials",
          "sellPrice": "4g 35s"
        },
        {
          "name": "Rugged Pelt ",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 21,
          "mats": "Various materials",
          "sellPrice": "1g 52s"
        },
        {
          "name": "Medium Hide ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "3g 64s"
        },
        {
          "name": "Heavy Scale ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "2g 45s"
        },
        {
          "name": "Ruined Scale",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "7g 75s"
        },
        {
          "name": "Scale",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "3g 24s"
        },
        {
          "name": "Hide ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "8g 93s"
        },
        {
          "name": "Dragonscale Hide",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 23,
          "mats": "Various materials",
          "sellPrice": "4g 38s"
        },
        {
          "name": "Devilsaur Leather",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "8g 95s"
        },
        {
          "name": "Heavy Leather",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 9,
          "mats": "Various materials",
          "sellPrice": "3g 4s"
        },
        {
          "name": "Pelt",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "8g 8s"
        },
        {
          "name": "Medium Leather ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "8g 60s"
        },
        {
          "name": "Chimera Pelt",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 1,
          "mats": "Various materials",
          "sellPrice": "1g 76s"
        },
        {
          "name": "Hide",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 38,
          "mats": "Various materials",
          "sellPrice": "8g 5s"
        },
        {
          "name": "Devilsaur Pelt ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Trade Good",
          "stats": [],
          "effect": "",
          "requiresLevel": 41,
          "mats": "Various materials",
          "sellPrice": "6g 80s"
        }
      ]
    }
  ],
  "Secondary Skills": [
    {
      "id": "Cooking",
      "name": "Cooking",
      "icon": "inv_misc_food_15",
      "description": "Prepare hearty meals that provide long-lasting buffs.",
      "recipes": [
        {
          "name": "Raptor Delight",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 4,
          "mats": "Various materials",
          "sellPrice": "4g 38s"
        },
        {
          "name": "Dirge's Kickin' Chops",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 24,
          "mats": "Various materials",
          "sellPrice": "8g 15s"
        },
        {
          "name": "Raptor Surprise ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "9g 60s"
        },
        {
          "name": "Dragonbreath Pie ",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "1g 65s"
        },
        {
          "name": "Dirge's Kickin' Steak",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 47,
          "mats": "Various materials",
          "sellPrice": "3g 34s"
        },
        {
          "name": "Chops",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 9,
          "mats": "Various materials",
          "sellPrice": "5g 26s"
        },
        {
          "name": "Wolf Chops ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 39,
          "mats": "Various materials",
          "sellPrice": "6g 94s"
        },
        {
          "name": "Surprise ",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "10g 93s"
        },
        {
          "name": "Dragonbreath Soup ",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 22,
          "mats": "Various materials",
          "sellPrice": "8g 80s"
        },
        {
          "name": "Savory Deviate Soup ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "9g 62s"
        },
        {
          "name": "Ribs ",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 49,
          "mats": "Various materials",
          "sellPrice": "5g 41s"
        },
        {
          "name": "Raptor Soup ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 28,
          "mats": "Various materials",
          "sellPrice": "3g 11s"
        },
        {
          "name": "Delight ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 10,
          "mats": "Various materials",
          "sellPrice": "4g 36s"
        },
        {
          "name": "Wolf Pie ",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "4g 25s"
        },
        {
          "name": "Delight",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "2g 52s"
        },
        {
          "name": "Raptor Delight ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 10,
          "mats": "Various materials",
          "sellPrice": "4g 52s"
        },
        {
          "name": "Dragonbreath Stew",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "5g 27s"
        },
        {
          "name": "Raptor Soup",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 33,
          "mats": "Various materials",
          "sellPrice": "1g 79s"
        },
        {
          "name": "Steak ",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 6,
          "mats": "Various materials",
          "sellPrice": "2g 50s"
        },
        {
          "name": "Stew",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 44,
          "mats": "Various materials",
          "sellPrice": "10g 31s"
        },
        {
          "name": "Wolf Stew",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 8,
          "mats": "Various materials",
          "sellPrice": "7g 98s"
        },
        {
          "name": "Pie",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 29,
          "mats": "Various materials",
          "sellPrice": "3g 68s"
        },
        {
          "name": "Bear Pie ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "4g 20s"
        },
        {
          "name": "Bear Chops",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 36,
          "mats": "Various materials",
          "sellPrice": "6g 92s"
        },
        {
          "name": "Dirge's Kickin' Delight",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 19,
          "mats": "Various materials",
          "sellPrice": "4g 1s"
        },
        {
          "name": "Dragonbreath Surprise",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 38,
          "mats": "Various materials",
          "sellPrice": "2g 41s"
        },
        {
          "name": "Bear Steak ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 17,
          "mats": "Various materials",
          "sellPrice": "1g 50s"
        },
        {
          "name": "Bear Sausage ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 45,
          "mats": "Various materials",
          "sellPrice": "8g 0s"
        },
        {
          "name": "Spider Delight ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "7g 90s"
        },
        {
          "name": "Dirge's Kickin' Sausage ",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Food",
          "stats": [
            "Use: Restores 2148 health over 30 sec. Must remain seated."
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "8g 76s"
        }
      ]
    },
    {
      "id": "Fishing",
      "name": "Fishing",
      "icon": "trade_fishing",
      "description": "Catch fish from the waters of Azeroth for cooking or alchemy.",
      "recipes": [
        {
          "name": "Deviate Fish",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "6g 24s"
        },
        {
          "name": "Bristle Whisker Trout ",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 10,
          "mats": "Various materials",
          "sellPrice": "10g 79s"
        },
        {
          "name": "Bristle Whisker Salmon",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "9g 85s"
        },
        {
          "name": "Mackerel ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 58,
          "mats": "Various materials",
          "sellPrice": "10g 80s"
        },
        {
          "name": "Winter Mackerel",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 34,
          "mats": "Various materials",
          "sellPrice": "6g 93s"
        },
        {
          "name": "Spotted Deviate Fish ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 21,
          "mats": "Various materials",
          "sellPrice": "9g 86s"
        },
        {
          "name": "Yellowtail ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 1,
          "mats": "Various materials",
          "sellPrice": "3g 44s"
        },
        {
          "name": "Oily Squid ",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Chest",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 16,
          "mats": "Various materials",
          "sellPrice": "2g 49s"
        },
        {
          "name": "Stonescale Yellowtail ",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "8g 18s"
        },
        {
          "name": "Slitherskin Trout ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 59,
          "mats": "Various materials",
          "sellPrice": "6g 48s"
        },
        {
          "name": "Spotted Yellowtail ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 58,
          "mats": "Various materials",
          "sellPrice": "2g 54s"
        },
        {
          "name": "Trout ",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 54,
          "mats": "Various materials",
          "sellPrice": "2g 83s"
        },
        {
          "name": "Grouper",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 10,
          "mats": "Various materials",
          "sellPrice": "6g 30s"
        },
        {
          "name": "Yellowtail",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 7,
          "mats": "Various materials",
          "sellPrice": "2g 23s"
        },
        {
          "name": "Firefin Squid",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 50,
          "mats": "Various materials",
          "sellPrice": "1g 22s"
        },
        {
          "name": "Firefin Grouper",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "1g 6s"
        },
        {
          "name": "Spotted Catfish",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 5,
          "mats": "Various materials",
          "sellPrice": "2g 68s"
        },
        {
          "name": "Winter Salmon ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 51,
          "mats": "Various materials",
          "sellPrice": "8g 75s"
        },
        {
          "name": "Oily Mackerel ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 32,
          "mats": "Various materials",
          "sellPrice": "10g 43s"
        },
        {
          "name": "Slitherskin Catfish ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 31,
          "mats": "Various materials",
          "sellPrice": "5g 34s"
        },
        {
          "name": "Slitherskin Deviate Fish",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 51,
          "mats": "Various materials",
          "sellPrice": "5g 90s"
        },
        {
          "name": "Stonescale Grouper ",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 58,
          "mats": "Various materials",
          "sellPrice": "6g 36s"
        },
        {
          "name": "Longjaw Deviate Fish",
          "rarity": "Uncommon",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 37,
          "mats": "Various materials",
          "sellPrice": "10g 59s"
        },
        {
          "name": "Longjaw Trout",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 38,
          "mats": "Various materials",
          "sellPrice": "6g 70s"
        },
        {
          "name": "Stonescale Mackerel ",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Head",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 58,
          "mats": "Various materials",
          "sellPrice": "6g 38s"
        },
        {
          "name": "Bristle Whisker Trout",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 25,
          "mats": "Various materials",
          "sellPrice": "6g 12s"
        },
        {
          "name": "Trout",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 11,
          "mats": "Various materials",
          "sellPrice": "9g 98s"
        },
        {
          "name": "Salmon",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 42,
          "mats": "Various materials",
          "sellPrice": "9g 7s"
        },
        {
          "name": "Catfish",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 1,
          "mats": "Various materials",
          "sellPrice": "2g 78s"
        },
        {
          "name": "Squid ",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Fish",
          "stats": [],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "9g 60s"
        }
      ]
    },
    {
      "id": "First Aid",
      "name": "First Aid",
      "icon": "spell_holy_sealofsacrifice",
      "description": "Create bandages and anti-venoms to quickly heal wounds in combat.",
      "recipes": [
        {
          "name": "Runecloth Bandage ",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 7,
          "mats": "Various materials",
          "sellPrice": "1g 57s"
        },
        {
          "name": "Heavy Linen Anti-Venom ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "9g 95s"
        },
        {
          "name": "Wool Anti-Venom ",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 36,
          "mats": "Various materials",
          "sellPrice": "1g 93s"
        },
        {
          "name": "Anti-Venom ",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 55,
          "mats": "Various materials",
          "sellPrice": "3g 79s"
        },
        {
          "name": "Heavy Mageweave Anti-Venom ",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "One-Hand",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 27,
          "mats": "Various materials",
          "sellPrice": "3g 34s"
        },
        {
          "name": "Mageweave Anti-Venom",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 18,
          "mats": "Various materials",
          "sellPrice": "2g 16s"
        },
        {
          "name": "Powerful Bandage",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 1,
          "mats": "Various materials",
          "sellPrice": "5g 72s"
        },
        {
          "name": "Wool Bandage ",
          "rarity": "Common",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 13,
          "mats": "Various materials",
          "sellPrice": "3g 46s"
        },
        {
          "name": "Heavy Runecloth Anti-Venom",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Legs",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 52,
          "mats": "Various materials",
          "sellPrice": "6g 2s"
        },
        {
          "name": "Anti-Venom",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 22,
          "mats": "Various materials",
          "sellPrice": "1g 74s"
        },
        {
          "name": "Heavy Wool Anti-Venom ",
          "rarity": "Uncommon",
          "bindType": "Binds when equipped",
          "slot": "Two-Hand",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "8g 35s"
        },
        {
          "name": "Heavy Runecloth Bandage ",
          "rarity": "Common",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 48,
          "mats": "Various materials",
          "sellPrice": "10g 55s"
        },
        {
          "name": "Mageweave Bandage ",
          "rarity": "Epic",
          "bindType": "Binds when equipped",
          "slot": "Head",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 38,
          "mats": "Various materials",
          "sellPrice": "10g 36s"
        },
        {
          "name": "Bandage",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 46,
          "mats": "Various materials",
          "sellPrice": "4g 51s"
        },
        {
          "name": "Heavy Wool Bandage",
          "rarity": "Rare",
          "bindType": "Binds when equipped",
          "slot": "Main Hand",
          "type": "Bandage",
          "stats": [
            "Use: Heals 2000 damage over 8 sec."
          ],
          "effect": "",
          "requiresLevel": 40,
          "mats": "Various materials",
          "sellPrice": "2g 48s"
        }
      ]
    }
  ]
};
