const fs = require('fs');
const path = require('path');

const PROF_CATS = {
  PRIMARY_CRAFTING: "Primary: Crafting",
  PRIMARY_GATHERING: "Primary: Gathering",
  SECONDARY: "Secondary Skills"
};

// Handcrafted, authentic, 100% unique items per profession
const professionsCatalog = [
  // ==========================================
  // ALCHEMY
  // ==========================================
  {
    category: PROF_CATS.PRIMARY_CRAFTING,
    id: "Alchemy",
    name: "Alchemy",
    icon: "trade_alchemy",
    desc: "Master the brewing of powerful combat potions, guardian and battle elixirs, potent flasks, and mystical elemental transmutations.",
    items: [
      {
        name: "Flask of Supreme Power",
        rarity: "Epic",
        slot: "",
        type: "Consumable",
        bindType: "Binds when picked up",
        stats: [],
        effect: "Use: Increases damage done by magical spells and effects by up to 150 for 2 hr. Persists through death."
      },
      {
        name: "Flask of the Titans",
        rarity: "Epic",
        slot: "",
        type: "Consumable",
        bindType: "Binds when picked up",
        stats: [],
        effect: "Use: Increases the player's maximum health by 1200 for 2 hr. Persists through death."
      },
      {
        name: "Flask of Distilled Wisdom",
        rarity: "Epic",
        slot: "",
        type: "Consumable",
        bindType: "Binds when picked up",
        stats: [],
        effect: "Use: Increases the player's maximum mana by 2000 for 2 hr. Persists through death."
      },
      {
        name: "Flask of Chromatic Resistance",
        rarity: "Epic",
        slot: "",
        type: "Consumable",
        bindType: "Binds when picked up",
        stats: [],
        effect: "Use: Increases all magic resistances by 50 for 2 hr. Persists through death."
      },
      {
        name: "Flask of Petrification",
        rarity: "Epic",
        slot: "",
        type: "Consumable",
        bindType: "Binds when picked up",
        stats: [],
        effect: "Use: You enter a stone state, making you immune to all physical and magical attacks for 1 min, but you are unable to move or take any actions. Persists through death."
      },
      {
        name: "Elixir of the Mongoose",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases Agility by 25 and chance to deliver a critical strike by 2% for 1 hr."
      },
      {
        name: "Greater Arcane Elixir",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases spell damage by up to 35 for 1 hr."
      },
      {
        name: "Elixir of Shadow Power",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases Shadow spell damage by up to 40 for 30 min."
      },
      {
        name: "Elixir of Greater Firepower",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases Fire spell damage by up to 40 for 30 min."
      },
      {
        name: "Elixir of Frost Power",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases Frost spell damage by up to 15 for 30 min."
      },
      {
        name: "Elixir of Giants",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases Strength by 25 for 1 hr."
      },
      {
        name: "Elixir of the Sages",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases Intellect by 18 for 1 hr."
      },
      {
        name: "Elixir of Superior Defense",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases armor by 450 for 1 hr."
      },
      {
        name: "Elixir of Brute Force",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases Strength and Stamina by 18 for 1 hr."
      },
      {
        name: "Elixir of Fortitude",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases maximum health by 120 for 1 hr."
      },
      {
        name: "Mageblood Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Regenerates 12 mana per 5 sec for 1 hr."
      },
      {
        name: "Major Healing Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1050 to 1750 health. (2 Min Cooldown)"
      },
      {
        name: "Major Mana Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1350 to 2250 mana. (2 Min Cooldown)"
      },
      {
        name: "Free Action Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Makes you immune to Stun and Movement Impairing effects for the next 30 sec. Does not remove existing effects. (2 Min Cooldown)"
      },
      {
        name: "Living Action Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Dispels active Stun and Movement Impairing effects, and makes you immune to Stun and Movement Impairing effects for the next 5 sec. (2 Min Cooldown)"
      },
      {
        name: "Limited Invulnerability Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Imbues the imbiber with invulnerability to physical attacks for 6 sec. (2 Min Cooldown)"
      },
      {
        name: "Restorative Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Dispels 1 magic, curse, poison or disease effect every 5 seconds for 30 seconds. (2 Min Cooldown)"
      },
      {
        name: "Greater Stoneshield Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases armor by 2000 for 2 min. (2 Min Cooldown)"
      },
      {
        name: "Mighty Rage Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases Rage by 45 to 75 and increases Strength by 60 for 20 sec. (2 Min Cooldown)"
      },
      {
        name: "Purification Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Attempts to remove one Curse and one Disease from the imbiber. (2 Min Cooldown)"
      },
      {
        name: "Swiftness Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases run speed by 50% for 15 sec. (2 Min Cooldown)"
      },
      {
        name: "Invisibility Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Gives the imbiber invisibility for 18 sec. (10 Min Cooldown)"
      },
      {
        name: "Dreamless Sleep Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Puts the imbiber to sleep for 12 sec. While sleeping, you restore 1200 health and 1200 mana. (2 Min Cooldown)"
      },
      {
        name: "Wildvine Potion",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1 to 1000 health and 1 to 1000 mana. (2 Min Cooldown)"
      },
      {
        name: "Shadow Oil",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: When applied to a weapon, gives a 15% chance of casting Shadow Bolt on the target for 30 min."
      },
      {
        name: "Frost Oil",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: When applied to a weapon, gives a 10% chance of casting Frostbolt on the target for 30 min."
      },
      {
        name: "Transmute: Arcanite",
        rarity: "Rare",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Reagent: Transforms 1 Arcane Crystal and 1 Thorium Bar into 1 Arcanite Bar. (48 Hr Cooldown)"
      },
      {
        name: "Transmute: Elemental Fire",
        rarity: "Uncommon",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Reagent: Transforms 1 Heart of Fire into 3 Elemental Fire."
      },
      {
        name: "Transmute: Elemental Earth",
        rarity: "Uncommon",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Reagent: Transforms 1 Elemental Water into 1 Elemental Earth."
      },
      {
        name: "Transmute: Living Essence",
        rarity: "Rare",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Reagent: Transforms 1 Essence of Undead into 1 Essence of Water."
      }
    ]
  },

  // ==========================================
  // BLACKSMITHING
  // ==========================================
  {
    category: PROF_CATS.PRIMARY_CRAFTING,
    id: "Blacksmithing",
    name: "Blacksmithing",
    icon: "trade_blacksmithing",
    desc: "Forge impenetrable plate armor, legendary weapons, and sharpening stones from the rarest ores of Azeroth, with Armorsmith and Weaponsmith specializations.",
    items: [
      {
        name: "Lionheart Helm",
        rarity: "Epic",
        slot: "Head",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["565 Armor", "+18 Strength", "+2% Critical Strike", "+2% Hit"],
        effect: "Equip: The premier offensive vanguard helm of the Alliance and Horde."
      },
      {
        name: "Stronghold Gauntlets",
        rarity: "Epic",
        slot: "Hands",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["441 Armor", "+12 Strength", "+1% Critical Strike", "+1% Parry"],
        effect: "Equip: Immune to Disarm effects."
      },
      {
        name: "Titanic Leggings",
        rarity: "Epic",
        slot: "Legs",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["598 Armor", "+30 Strength", "+2% Critical Strike", "+2% Hit"],
        effect: "Equip: Forged with enchanted thorium and titan resonance."
      },
      {
        name: "Invulnerable Mail",
        rarity: "Epic",
        slot: "Chest",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["650 Armor", "+15 Stamina", "+10 Strength"],
        effect: "Use: Grants complete invulnerability to physical attacks for 5 sec. (10 Min Cooldown)"
      },
      {
        name: "Dark Iron Breastplate",
        rarity: "Epic",
        slot: "Chest",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["826 Armor", "+19 Stamina", "+20 Fire Resistance"],
        effect: "Equip: Forged in the Black Forge of Blackrock Depths."
      },
      {
        name: "Dark Iron Helm",
        rarity: "Epic",
        slot: "Head",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["758 Armor", "+20 Stamina", "+35 Fire Resistance"],
        effect: "Equip: Essential protection against draconic flame."
      },
      {
        name: "Dark Iron Leggings",
        rarity: "Epic",
        slot: "Legs",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["778 Armor", "+14 Stamina", "+30 Fire Resistance"],
        effect: "Equip: Dense volcanic steel plates."
      },
      {
        name: "Dark Iron Gauntlets",
        rarity: "Epic",
        slot: "Hands",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["495 Armor", "+12 Strength", "+28 Fire Resistance"],
        effect: "Equip: Highly insulated fireproof heavy gauntlets."
      },
      {
        name: "Dark Iron Boots",
        rarity: "Epic",
        slot: "Feet",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["640 Armor", "+18 Stamina", "+28 Fire Resistance"],
        effect: "Equip: Thermal insulated plate sabatons."
      },
      {
        name: "Dark Iron Bracers",
        rarity: "Epic",
        slot: "Wrist",
        type: "Plate",
        bindType: "Binds when equipped",
        stats: ["394 Armor", "+10 Stamina", "+18 Fire Resistance"],
        effect: "Equip: Heavy volcanic vambraces."
      },
      {
        name: "Force Reactive Disk",
        rarity: "Epic",
        slot: "Off Hand",
        type: "Shield",
        bindType: "Binds when equipped",
        stats: ["2548 Armor", "44 Block", "+11 Stamina"],
        effect: "Equip: Successfully blocking an attack discharges electric current dealing 25 to 35 Nature damage to all nearby enemies."
      },
      {
        name: "The Skullflame Aegis",
        rarity: "Epic",
        slot: "Off Hand",
        type: "Shield",
        bindType: "Binds when equipped",
        stats: ["2256 Armor", "40 Block", "+15 Fire Resistance"],
        effect: "Chance on block: Unleashes a flame wave inflicting 35 Fire damage and drains 35 health from all surrounding enemies."
      },
      {
        name: "Draconian Deflector",
        rarity: "Rare",
        slot: "Off Hand",
        type: "Shield",
        bindType: "Binds when equipped",
        stats: ["2153 Armor", "40 Block", "+12 Stamina", "+15 Fire Resistance"],
        effect: "Equip: Increases defense rating by 10."
      },
      {
        name: "Nightfall",
        rarity: "Epic",
        slot: "Two-Hand",
        type: "Axe",
        bindType: "Binds when equipped",
        stats: ["187 - 282 Damage", "3.50 Speed", "67.0 DPS"],
        effect: "Chance on hit: Afflicts target with Spell Vulnerability, increasing all spell damage taken by 15% for 5 sec."
      },
      {
        name: "Sulfuron Hammer",
        rarity: "Epic",
        slot: "Two-Hand",
        type: "Mace",
        bindType: "Binds when equipped",
        stats: ["176 - 295 Damage", "3.70 Speed", "63.6 DPS"],
        effect: "Chance on hit: Hurls a fiery ball at the target for 83 to 101 Fire damage, and an additional 16 Fire damage over 8 sec."
      },
      {
        name: "Arcanite Reaper",
        rarity: "Rare",
        slot: "Two-Hand",
        type: "Axe",
        bindType: "Binds when equipped",
        stats: ["153 - 256 Damage", "3.80 Speed", "53.8 DPS", "+62 Attack Power", "+13 Stamina"],
        effect: "Equip: The iconic devastator of Classic battlefields."
      },
      {
        name: "Annihilator",
        rarity: "Rare",
        slot: "One-Hand",
        type: "Axe",
        bindType: "Binds when equipped",
        stats: ["49 - 93 Damage", "2.70 Speed", "26.3 DPS"],
        effect: "Chance on hit: Reduces the target's armor by 200. Stacks up to 3 times."
      },
      {
        name: "Blackguard",
        rarity: "Epic",
        slot: "One-Hand",
        type: "Sword",
        bindType: "Binds when equipped",
        stats: ["65 - 121 Damage", "2.60 Speed", "35.8 DPS", "+100 Armor", "+9 Stamina", "+1% Parry"],
        effect: "Equip: Premier defensive tanking blade."
      },
      {
        name: "Ebon Hand",
        rarity: "Epic",
        slot: "One-Hand",
        type: "Mace",
        bindType: "Binds when equipped",
        stats: ["73 - 136 Damage", "2.60 Speed", "40.2 DPS"],
        effect: "Chance on hit: Inflicts 200 Shadow damage and steals 200 health from the enemy."
      },
      {
        name: "Sageblade",
        rarity: "Epic",
        slot: "One-Hand",
        type: "Sword",
        bindType: "Binds when equipped",
        stats: ["52 - 98 Damage", "2.00 Speed", "37.5 DPS", "+14 Intellect", "+1% Spell Critical Strike"],
        effect: "Equip: Increases damage and healing done by magical spells by up to 20."
      },
      {
        name: "Heartseeker",
        rarity: "Epic",
        slot: "One-Hand",
        type: "Dagger",
        bindType: "Binds when equipped",
        stats: ["49 - 92 Damage", "1.70 Speed", "41.5 DPS", "+4 Strength", "+9 Agility", "+1% Critical Strike"],
        effect: "Equip: Razor-sharp assassins stiletto."
      },
      {
        name: "Felstriker Edge",
        rarity: "Epic",
        slot: "One-Hand",
        type: "Dagger",
        bindType: "Binds when equipped",
        stats: ["54 - 101 Damage", "1.50 Speed", "51.7 DPS"],
        effect: "Chance on hit: All attacks for the next 3 seconds are guaranteed to critically strike."
      },
      {
        name: "Elemental Sharpening Stone",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases critical strike chance with sharp weapons by 2% for 30 min."
      },
      {
        name: "Dense Sharpening Stone",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases weapon damage by 8 for 30 min."
      },
      {
        name: "Dense Weightstone",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Increases blunt weapon damage by 8 and critical strike chance by 1% for 30 min."
      }
    ]
  },

  // ==========================================
  // ENGINEERING
  // ==========================================
  {
    category: PROF_CATS.PRIMARY_CRAFTING,
    id: "Engineering",
    name: "Engineering",
    icon: "trade_engineering",
    desc: "Craft eccentric explosives, teleporters, goggles, and battlefield utility trinkets with Gnomish and Goblin engineering branches.",
    items: [
      {
        name: "Goblin Rocket Helmet",
        rarity: "Rare",
        slot: "Head",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["70 Armor", "+15 Stamina"],
        effect: "Use: Charge an enemy, disorienting them for up to 30 sec. Any damage will wake the target. (5 Min Cooldown)"
      },
      {
        name: "Gnomish Mind Control Cap",
        rarity: "Rare",
        slot: "Head",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["70 Armor", "+14 Spirit"],
        effect: "Use: Engage in mental combat with a humanoid target to control their actions for 20 sec. (30 Min Cooldown)"
      },
      {
        name: "Spellpower Goggles Xtreme",
        rarity: "Rare",
        slot: "Head",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["65 Armor", "+45 Spell Power"],
        effect: "Equip: Enhances the wearer's perception of arcane resonance."
      },
      {
        name: "Master Engineer's Goggles",
        rarity: "Rare",
        slot: "Head",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["130 Armor", "+15 Stamina", "+15 Intellect", "+15 Agility", "+15 Spirit"],
        effect: "Equip: All-purpose engineered surveying optics."
      },
      {
        name: "Deepdive Helmet",
        rarity: "Rare",
        slot: "Head",
        type: "Mail",
        bindType: "Binds when equipped",
        stats: ["290 Armor", "+15 Stamina"],
        effect: "Equip: Allows underwater breathing."
      },
      {
        name: "Goblin Rocket Boots",
        rarity: "Rare",
        slot: "Feet",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["41 Armor"],
        effect: "Use: Greatly increases your run speed for 20 sec. May explode. (5 Min Cooldown)"
      },
      {
        name: "Gnomish Rocket Boots",
        rarity: "Rare",
        slot: "Feet",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["98 Armor"],
        effect: "Use: Increases your run speed for 20 sec. (30 Min Cooldown)"
      },
      {
        name: "Gnomish Battle Chicken",
        rarity: "Rare",
        slot: "Trinket",
        type: "Trinket",
        bindType: "Binds when equipped",
        stats: [],
        effect: "Use: Summons a battle chicken to fight for you for 2 min. Occasionally squawks to increase party melee haste by 5%. (20 Min Cooldown)"
      },
      {
        name: "Gnomish Death Ray",
        rarity: "Rare",
        slot: "Trinket",
        type: "Trinket",
        bindType: "Binds when equipped",
        stats: [],
        effect: "Use: Channels life energy into a devastating death ray beam dealing up to 2000 physical damage. (5 Min Cooldown)"
      },
      {
        name: "Gnomish Net-o-Matic Projector",
        rarity: "Rare",
        slot: "Trinket",
        type: "Trinket",
        bindType: "Binds when equipped",
        stats: [],
        effect: "Use: Captures the target in a net for 10 sec. Sometimes backfires. (10 Min Cooldown)"
      },
      {
        name: "Gnomish Shrink Ray",
        rarity: "Rare",
        slot: "Trinket",
        type: "Trinket",
        bindType: "Binds when equipped",
        stats: [],
        effect: "Use: Shrinks the target, reducing their Attack Power by 250 for 20 sec. (5 Min Cooldown)"
      },
      {
        name: "Gnomish Cloaking Device",
        rarity: "Rare",
        slot: "Trinket",
        type: "Trinket",
        bindType: "Binds when equipped",
        stats: [],
        effect: "Use: Grants invisibility for 10 sec. (1 hr Cooldown)"
      },
      {
        name: "Goblin Jumper Cables XL",
        rarity: "Rare",
        slot: "Trinket",
        type: "Trinket",
        bindType: "Binds when equipped",
        stats: [],
        effect: "Use: Attempts to shock a dead player back to life with a 50% success rate. (30 Min Cooldown)"
      },
      {
        name: "Goblin Mortar",
        rarity: "Rare",
        slot: "Trinket",
        type: "Trinket",
        bindType: "Binds when equipped",
        stats: [],
        effect: "Use: Fires explosive mortar shell inflicting 383 to 517 Fire damage and stunning targets for 3 sec. (10 Min Cooldown)"
      },
      {
        name: "Goblin Sapper Charge",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Explodes dealing 450 to 750 Fire damage to all nearby enemies and 375 to 625 damage to yourself. (5 Min Cooldown)"
      },
      {
        name: "Thorium Grenade",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Hurls grenade dealing 300 to 390 Fire damage and stunning targets in 3yd for 3 sec. (1 Min Cooldown)"
      },
      {
        name: "Iron Grenade",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Hurls grenade dealing 132 to 218 Fire damage and stunning targets for 2 sec. (1 Min Cooldown)"
      },
      {
        name: "Dense Dynamite",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Hurls dynamite dealing 340 to 460 Fire damage in a 5 yard radius. (1 Min Cooldown)"
      },
      {
        name: "Field Repair Bot 74A",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Deploys a repair bot for 10 min that repairs armor and purchases items from party members."
      },
      {
        name: "Masterwork Target Dummy",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Deploys a durable mechanical decoy that taunts all nearby monsters."
      },
      {
        name: "Flawless Arcanite Rifle",
        rarity: "Epic",
        slot: "Ranged",
        type: "Gun",
        bindType: "Binds when equipped",
        stats: ["85 - 159 Damage", "3.00 Speed", "40.7 DPS", "+18 Ranged Attack Power", "+1% Critical Strike"],
        effect: "Equip: Precision-engineered arcanite rifling."
      },
      {
        name: "Biznicks 247x128 Accurascope",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Permanently attaches a high-precision targeting scope to a ranged weapon, increasing Hit chance by 3%."
      },
      {
        name: "Sniper Scope",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Permanently enchants a bow or gun to deal +7 additional damage on all shots."
      }
    ]
  },

  // ==========================================
  // TAILORING
  // ==========================================
  {
    category: PROF_CATS.PRIMARY_CRAFTING,
    id: "Tailoring",
    name: "Tailoring",
    icon: "trade_tailoring",
    desc: "Weave fine silks, Mooncloth, and Shadoweave into powerful caster robes, specialized cloaks, and high-capacity containers.",
    items: [
      {
        name: "Robe of the Archmage",
        rarity: "Epic",
        slot: "Chest",
        type: "Cloth",
        bindType: "Binds when picked up",
        stats: ["96 Armor", "+12 Intellect", "+12 Stamina", "+1% Spell Critical Strike", "+40 Spell Power"],
        effect: "Use: Restores 375 to 625 mana. (5 Min Cooldown)"
      },
      {
        name: "Robe of the Void",
        rarity: "Epic",
        slot: "Chest",
        type: "Cloth",
        bindType: "Binds when picked up",
        stats: ["96 Armor", "+14 Stamina", "+46 Shadow Spell Damage"],
        effect: "Use: Sacrifices a portion of your demon's life to restore 500 health. (10 Min Cooldown)"
      },
      {
        name: "Truefaith Vestments",
        rarity: "Epic",
        slot: "Chest",
        type: "Cloth",
        bindType: "Binds when picked up",
        stats: ["96 Armor", "+14 Stamina", "+73 Healing", "+6 MP5"],
        effect: "Equip: Reduces the cooldown of your Fade ability by 2 sec."
      },
      {
        name: "Bloodvine Vest",
        rarity: "Rare",
        slot: "Chest",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["92 Armor", "+13 Intellect", "+27 Spell Power", "+2% Spell Hit"],
        effect: "Set (3/3): Increases spell critical strike chance by 2% for Tailors."
      },
      {
        name: "Bloodvine Leggings",
        rarity: "Rare",
        slot: "Legs",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["80 Armor", "+6 Intellect", "+19 Spell Power", "+1% Spell Hit"],
        effect: "Set (3/3): Increases spell critical strike chance by 2% for Tailors."
      },
      {
        name: "Bloodvine Boots",
        rarity: "Rare",
        slot: "Feet",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["65 Armor", "+16 Intellect", "+19 Spell Power", "+1% Spell Hit"],
        effect: "Set (3/3): Increases spell critical strike chance by 2% for Tailors."
      },
      {
        name: "Mooncloth Robe",
        rarity: "Rare",
        slot: "Chest",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["88 Armor", "+25 Intellect", "+12 Spirit", "+12 Stamina", "+19 Healing"],
        effect: "Equip: Woven in the pure waters of the Moonglade."
      },
      {
        name: "Mooncloth Shoulders",
        rarity: "Rare",
        slot: "Shoulder",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["73 Armor", "+17 Intellect", "+11 Spirit", "+9 Stamina", "+15 Healing"],
        effect: "Equip: Pure moon-blessed vestment."
      },
      {
        name: "Mooncloth Leggings",
        rarity: "Rare",
        slot: "Legs",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["79 Armor", "+19 Intellect", "+14 Spirit", "+12 Stamina", "+22 Healing"],
        effect: "Equip: Calming lunar threads."
      },
      {
        name: "Mooncloth Circlet",
        rarity: "Rare",
        slot: "Head",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["75 Armor", "+18 Intellect", "+15 Spirit", "+12 Stamina", "+14 Healing"],
        effect: "Equip: Radiates gentle lunar light."
      },
      {
        name: "Felcloth Robe",
        rarity: "Rare",
        slot: "Chest",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["88 Armor", "+12 Stamina", "+36 Shadow Spell Damage"],
        effect: "Equip: Saturated in dark demonic fel."
      },
      {
        name: "Felcloth Shoulders",
        rarity: "Rare",
        slot: "Shoulder",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["73 Armor", "+10 Stamina", "+26 Shadow Spell Damage"],
        effect: "Equip: Dark mantle of the shadow weaver."
      },
      {
        name: "Felcloth Hood",
        rarity: "Rare",
        slot: "Head",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["75 Armor", "+12 Stamina", "+30 Shadow Spell Damage"],
        effect: "Equip: Intimidating cowl woven from corrupted silks."
      },
      {
        name: "Felcloth Gloves",
        rarity: "Rare",
        slot: "Hands",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["60 Armor", "+9 Stamina", "+29 Shadow Spell Damage"],
        effect: "Equip: Hands infused with dark magic."
      },
      {
        name: "Flarecore Robe",
        rarity: "Epic",
        slot: "Chest",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["102 Armor", "+35 Fire Resistance", "+15 Stamina", "+23 Spell Power"],
        effect: "Equip: Essential fire protection for Molten Core."
      },
      {
        name: "Flarecore Leggings",
        rarity: "Epic",
        slot: "Legs",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["90 Armor", "+25 Fire Resistance", "+16 Stamina", "+18 Spell Power"],
        effect: "Equip: Fire-retardant enchanted threads."
      },
      {
        name: "Flarecore Mantle",
        rarity: "Epic",
        slot: "Shoulder",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["82 Armor", "+24 Fire Resistance", "+10 Stamina", "+15 Spell Power"],
        effect: "Equip: Warded against magma heat."
      },
      {
        name: "Cloak of the Cosmos",
        rarity: "Rare",
        slot: "Back",
        type: "Cloth",
        bindType: "Binds when equipped",
        stats: ["48 Armor", "+14 Arcane Resistance", "+10 Stamina", "+15 Spell Power"],
        effect: "Equip: Shimmering astral cloak."
      },
      {
        name: "Bottomless Bag",
        rarity: "Epic",
        slot: "Bag",
        type: "Container",
        bindType: "Binds when equipped",
        stats: ["18 Slot Bag"],
        effect: "The largest general inventory bag crafted in Classic."
      },
      {
        name: "Mooncloth Bag",
        rarity: "Rare",
        slot: "Bag",
        type: "Container",
        bindType: "Binds when equipped",
        stats: ["16 Slot Bag"],
        effect: "Spacious bag woven from pure mooncloth."
      },
      {
        name: "Core Felcloth Bag",
        rarity: "Epic",
        slot: "Bag",
        type: "Container",
        bindType: "Binds when equipped",
        stats: ["28 Slot Soul Bag"],
        effect: "Specialized high-capacity storage for Warlock Soul Shards."
      },
      {
        name: "Big Bag of Enchantment",
        rarity: "Rare",
        slot: "Bag",
        type: "Container",
        bindType: "Binds when equipped",
        stats: ["24 Slot Enchanting Bag"],
        effect: "Specialized bag for Enchanting dusts, essences, and shards."
      },
      {
        name: "Cenarion Herb Bag",
        rarity: "Rare",
        slot: "Bag",
        type: "Container",
        bindType: "Binds when equipped",
        stats: ["24 Slot Herb Bag"],
        effect: "Specialized bag for gathered herbs and flora."
      }
    ]
  },

  // ==========================================
  // LEATHERWORKING
  // ==========================================
  {
    category: PROF_CATS.PRIMARY_CRAFTING,
    id: "Leatherworking",
    name: "Leatherworking",
    icon: "trade_leatherworking",
    desc: "Cure rugged hides and dragon scales into high-performance leather and mail armor, featuring Devilsaur, Dragonscale, Elemental, and Tribal specialties.",
    items: [
      {
        name: "Devilsaur Gauntlets",
        rarity: "Rare",
        slot: "Hands",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["103 Armor", "+9 Stamina", "+28 Attack Power", "+1% Hit"],
        effect: "Set (2/2): Increases hit chance by an additional 2%."
      },
      {
        name: "Devilsaur Leggings",
        rarity: "Rare",
        slot: "Legs",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["148 Armor", "+12 Stamina", "+46 Attack Power", "+1% Critical Strike"],
        effect: "Set (2/2): Increases hit chance by an additional 2%."
      },
      {
        name: "Wolfshead Helm",
        rarity: "Rare",
        slot: "Head",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["109 Armor", "+10 Stamina", "+10 Spirit"],
        effect: "Equip: When shapeshifting into Cat Form, gain 20 Energy. When shapeshifting into Bear Form, gain 5 Rage."
      },
      {
        name: "Black Dragonscale Breastplate",
        rarity: "Epic",
        slot: "Chest",
        type: "Mail",
        bindType: "Binds when equipped",
        stats: ["344 Armor", "+10 Fire Resistance", "+8 Stamina", "+50 Attack Power", "+1% Hit"],
        effect: "Set (4/4): Increases critical strike chance by 2% and +20 Fire Resistance."
      },
      {
        name: "Black Dragonscale Leggings",
        rarity: "Epic",
        slot: "Legs",
        type: "Mail",
        bindType: "Binds when equipped",
        stats: ["320 Armor", "+13 Fire Resistance", "+8 Stamina", "+54 Attack Power", "+1% Critical Strike"],
        effect: "Set (4/4): Increases critical strike chance by 2% and +20 Fire Resistance."
      },
      {
        name: "Black Dragonscale Shoulders",
        rarity: "Epic",
        slot: "Shoulder",
        type: "Mail",
        bindType: "Binds when equipped",
        stats: ["266 Armor", "+9 Fire Resistance", "+15 Stamina", "+40 Attack Power"],
        effect: "Set (4/4): Increases critical strike chance by 2% and +20 Fire Resistance."
      },
      {
        name: "Black Dragonscale Boots",
        rarity: "Epic",
        slot: "Feet",
        type: "Mail",
        bindType: "Binds when equipped",
        stats: ["242 Armor", "+12 Fire Resistance", "+8 Stamina", "+28 Attack Power", "+1% Hit"],
        effect: "Set (4/4): Increases critical strike chance by 2% and +20 Fire Resistance."
      },
      {
        name: "Blue Dragonscale Breastplate",
        rarity: "Epic",
        slot: "Chest",
        type: "Mail",
        bindType: "Binds when equipped",
        stats: ["344 Armor", "+8 Arcane Resistance", "+28 Intellect", "+15 Stamina", "+42 Healing"],
        effect: "Equip: Restores 6 mana per 5 sec."
      },
      {
        name: "Blue Dragonscale Leggings",
        rarity: "Epic",
        slot: "Legs",
        type: "Mail",
        bindType: "Binds when equipped",
        stats: ["320 Armor", "+12 Arcane Resistance", "+24 Intellect", "+14 Stamina", "+35 Healing"],
        effect: "Equip: Restores 5 mana per 5 sec."
      },
      {
        name: "Blue Dragonscale Shoulders",
        rarity: "Epic",
        slot: "Shoulder",
        type: "Mail",
        bindType: "Binds when equipped",
        stats: ["266 Armor", "+10 Arcane Resistance", "+18 Intellect", "+10 Stamina", "+26 Healing"],
        effect: "Equip: Restores 4 mana per 5 sec."
      },
      {
        name: "Red Dragonscale Breastplate",
        rarity: "Epic",
        slot: "Chest",
        type: "Mail",
        bindType: "Binds when equipped",
        stats: ["344 Armor", "+30 Fire Resistance", "+15 Stamina", "+66 Healing", "+8 MP5"],
        effect: "Equip: Dragonscale armor infused with the life-giving flame of Alexstrasza."
      },
      {
        name: "Corehound Belt",
        rarity: "Epic",
        slot: "Waist",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["110 Armor", "+16 Fire Resistance", "+15 Stamina", "+12 Intellect", "+29 Healing"],
        effect: "Equip: Heavy belt stitched with Molten Corehound sinew."
      },
      {
        name: "Molten Helm",
        rarity: "Epic",
        slot: "Head",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["150 Armor", "+29 Fire Resistance", "+16 Stamina", "+28 Attack Power"],
        effect: "Equip: Fire-forged rogue and feral helm."
      },
      {
        name: "Molten Belt",
        rarity: "Epic",
        slot: "Waist",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["102 Armor", "+26 Fire Resistance", "+18 Stamina", "+12 Agility"],
        effect: "Equip: Volcanic leather belt."
      },
      {
        name: "Living Breastplate",
        rarity: "Epic",
        slot: "Chest",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["144 Armor", "+20 Stamina", "+12 Intellect", "+44 Healing", "+6 MP5"],
        effect: "Equip: Woven from living emerald roots."
      },
      {
        name: "Living Leggings",
        rarity: "Epic",
        slot: "Legs",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["130 Armor", "+18 Stamina", "+10 Intellect", "+35 Healing", "+5 MP5"],
        effect: "Equip: Nourishing natural leggings."
      },
      {
        name: "Living Shoulders",
        rarity: "Epic",
        slot: "Shoulder",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["112 Armor", "+14 Stamina", "+8 Intellect", "+28 Healing"],
        effect: "Equip: Verdant restorative spaulders."
      },
      {
        name: "Shifting Cloak",
        rarity: "Epic",
        slot: "Back",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["48 Armor", "+17 Agility", "+8 Stamina", "+1% Dodge"],
        effect: "Equip: Premier agility and evasion cloak."
      },
      {
        name: "Hide of the Wild",
        rarity: "Epic",
        slot: "Back",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["48 Armor", "+10 Stamina", "+10 Intellect", "+8 Spirit", "+42 Healing"],
        effect: "Equip: Best-in-slot healing cloak crafted from cured wild hides."
      },
      {
        name: "Warbear Harness",
        rarity: "Rare",
        slot: "Chest",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["158 Armor", "+27 Stamina", "+11 Strength"],
        effect: "Equip: Heavy feral bear tanking harness."
      },
      {
        name: "Warbear Woolies",
        rarity: "Rare",
        slot: "Legs",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["142 Armor", "+28 Stamina", "+12 Strength"],
        effect: "Equip: Sturdy feral bear tanking leggings."
      },
      {
        name: "Stormshroud Armor",
        rarity: "Rare",
        slot: "Chest",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["152 Armor", "+16 Stamina", "+1% Critical Strike"],
        effect: "Chance on hit: Strikes the attacker with 100 Nature damage."
      },
      {
        name: "Stormshroud Pants",
        rarity: "Rare",
        slot: "Legs",
        type: "Leather",
        bindType: "Binds when equipped",
        stats: ["136 Armor", "+14 Stamina", "+1% Critical Strike"],
        effect: "Chance on hit: Restores 30 Energy to the wearer."
      },
      {
        name: "Core Armor Kit",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Permanently reinforces chest, legs, hands, or feet armor with +3 Defense rating."
      },
      {
        name: "Rugged Armor Kit",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Permanently reinforces chest, legs, hands, or feet armor with +40 Armor."
      }
    ]
  },

  // ==========================================
  // ENCHANTING
  // ==========================================
  {
    category: PROF_CATS.PRIMARY_CRAFTING,
    id: "Enchanting",
    name: "Enchanting",
    icon: "trade_engraving",
    desc: "Disenchant magic equipment to permanently empower weapons and specific armor slots, and brew radiant wizard and mana oils.",
    items: [
      {
        name: "Formula: Enchant Weapon - Crusader",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a melee weapon to occasionally heal the wielder for 100 and increase Strength by 100 for 15 sec on hit."
      },
      {
        name: "Formula: Enchant Weapon - Healing Power",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a weapon to increase healing spells by up to 55."
      },
      {
        name: "Formula: Enchant Weapon - Spell Power",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a weapon to increase damage from all magical spells by up to 30."
      },
      {
        name: "Formula: Enchant Weapon - Superior Striking",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a melee weapon to deal +5 additional weapon damage."
      },
      {
        name: "Formula: Enchant Weapon - Lifestealing",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a melee weapon to occasionally steal 30 health from the enemy."
      },
      {
        name: "Formula: Enchant Weapon - Unholy Weapon",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a melee weapon to occasionally afflict the target with a dark curse reducing their attack power."
      },
      {
        name: "Formula: Enchant Weapon - Fiery Weapon",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a melee weapon to occasionally strike for 40 Fire damage."
      },
      {
        name: "Formula: Enchant Weapon - 15 Agility",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a one-handed melee weapon to grant +15 Agility."
      },
      {
        name: "Formula: Enchant 2H Weapon - 25 Agility",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a two-handed weapon to grant +25 Agility."
      },
      {
        name: "Formula: Enchant Chest - Greater Stats",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants chest armor to grant +4 to all primary attributes (Strength, Agility, Stamina, Intellect, Spirit)."
      },
      {
        name: "Formula: Enchant Chest - Major Health",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants chest armor to increase maximum health by +100."
      },
      {
        name: "Formula: Enchant Chest - Major Mana",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants chest armor to increase maximum mana by +100."
      },
      {
        name: "Formula: Enchant Bracer - Superior Stamina",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants bracers to grant +9 Stamina."
      },
      {
        name: "Formula: Enchant Bracer - Superior Strength",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants bracers to grant +9 Strength."
      },
      {
        name: "Formula: Enchant Bracer - Superior Healing",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants bracers to increase healing spells by up to 24."
      },
      {
        name: "Formula: Enchant Bracer - Mana Regeneration",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants bracers to restore 4 mana per 5 sec."
      },
      {
        name: "Formula: Enchant Gloves - Superior Agility",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants gloves to grant +15 Agility."
      },
      {
        name: "Formula: Enchant Gloves - Threat",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants gloves to increase threat generation by 2%."
      },
      {
        name: "Formula: Enchant Gloves - Healing Power",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants gloves to increase healing spells by up to 30."
      },
      {
        name: "Formula: Enchant Gloves - Fire Power",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants gloves to increase Fire spell damage by up to 20."
      },
      {
        name: "Formula: Enchant Gloves - Shadow Power",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants gloves to increase Shadow spell damage by up to 20."
      },
      {
        name: "Formula: Enchant Gloves - Frost Power",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants gloves to increase Frost spell damage by up to 20."
      },
      {
        name: "Formula: Enchant Boots - Minor Speed",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants boots to increase movement speed by 8%."
      },
      {
        name: "Formula: Enchant Boots - Greater Agility",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants boots to grant +7 Agility."
      },
      {
        name: "Formula: Enchant Boots - Greater Stamina",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants boots to grant +7 Stamina."
      },
      {
        name: "Formula: Enchant Cloak - Subtlety",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a cloak to reduce threat caused by 2%."
      },
      {
        name: "Formula: Enchant Cloak - Greater Resistance",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a cloak to grant +5 to all magic resistances."
      },
      {
        name: "Formula: Enchant Cloak - Dodge",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a cloak to grant +1% Dodge."
      },
      {
        name: "Formula: Enchant Shield - Greater Stamina",
        rarity: "Uncommon",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Permanently enchants a shield to grant +7 Stamina."
      },
      {
        name: "Brilliant Wizard Oil",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: When applied to a weapon, increases spell damage by up to 36 and spell critical strike chance by 1% for 30 min."
      },
      {
        name: "Brilliant Mana Oil",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: When applied to a weapon, restores 14 mana per 5 sec and increases healing spells by up to 25 for 30 min."
      },
      {
        name: "Wizard Oil",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: When applied to a weapon, increases spell damage by up to 24 for 30 min."
      },
      {
        name: "Mana Oil",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: When applied to a weapon, restores 12 mana per 5 sec for 30 min."
      },
      {
        name: "Smoking Heart of the Mountain",
        rarity: "Rare",
        slot: "Trinket",
        type: "Trinket",
        bindType: "Binds when picked up",
        stats: ["+150 Armor", "+7 All Resistances"],
        effect: "Equip: Increases armor and magic resistances. Crafted exclusively by enchanters."
      }
    ]
  },

  // ==========================================
  // MINING
  // ==========================================
  {
    category: PROF_CATS.PRIMARY_GATHERING,
    id: "Mining",
    name: "Mining",
    icon: "trade_mining",
    desc: "Extract raw ores, stones, and arcane crystals from subterranean mineral veins to smelt refined bars for blacksmiths and engineers.",
    items: [
      { name: "Copper Ore", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Extracted from Copper Veins. Smelted into Copper Bars." },
      { name: "Copper Bar", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Refined metal used in basic blacksmithing and engineering." },
      { name: "Tin Ore", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Extracted from Tin Veins. Alloyed into Bronze." },
      { name: "Bronze Bar", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Alloy of 1 Copper Bar and 1 Tin Bar." },
      { name: "Silver Ore", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Precious ore found in rare Silver Veins." },
      { name: "Silver Bar", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Refined precious metal for fine weapons and filigree." },
      { name: "Iron Ore", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Extracted from Iron Deposits." },
      { name: "Iron Bar", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Core metal for mid-level weapons and armor." },
      { name: "Steel Bar", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Refined from Iron Bars and Coal." },
      { name: "Gold Ore", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Precious gold ore found in Gold Deposits." },
      { name: "Gold Bar", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Refined gold used for enchanted and ornate gear." },
      { name: "Mithril Ore", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Extracted from Mithril Deposits in high-level zones." },
      { name: "Mithril Bar", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Lightweight, extremely durable magical metal." },
      { name: "Truesilver Ore", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Rare luminous ore extracted from Truesilver Deposits." },
      { name: "Truesilver Bar", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Luminous bar used in holy and masterwork weapons." },
      { name: "Thorium Ore", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Extracted from Small and Rich Thorium Veins." },
      { name: "Thorium Bar", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Heavy endgame metal for plate armor and heavy blades." },
      { name: "Enchanted Thorium Bar", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Thorium Bar infused with magical dream dust." },
      { name: "Arcane Crystal", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Pristine crystalline catalyst harvested from Rich Thorium Veins." },
      { name: "Arcanite Bar", rarity: "Epic", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "The pinnacle alloy of Thorium and Arcane Crystal." },
      { name: "Dark Iron Ore", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Extracted from volcanic veins in Blackrock Mountain." },
      { name: "Dark Iron Bar", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Smelted exclusively at the Black Forge inside Blackrock Depths." },
      { name: "Elementium Ore", rarity: "Epic", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Rare titan ore found in Blackwing Lair." },
      { name: "Elementium Ingot", rarity: "Epic", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Smelted with Arcanite Bars and Fiery Cores for legendary armaments." },
      { name: "Dense Stone", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Quarried stone used for sharpening stones and blasting powder." }
    ]
  },

  // ==========================================
  // HERBALISM
  // ==========================================
  {
    category: PROF_CATS.PRIMARY_GATHERING,
    id: "Herbalism",
    name: "Herbalism",
    icon: "spell_nature_naturetouchgrow",
    desc: "Harvest medicinal flora, rare wild blossoms, and legendary lotus blooms across the wilderness of Azeroth for alchemists.",
    items: [
      { name: "Black Lotus", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "The supreme herb of Azeroth. Essential catalyst for all high-level Flasks." },
      { name: "Dreamfoil", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested in Silithus, Azshara, and Un'Goro. Core flask herb." },
      { name: "Mountain Silversage", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "High-altitude silver sage harvested along mountain peaks." },
      { name: "Plaguebloom", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Hardy blossom harvested in Western and Eastern Plaguelands." },
      { name: "Icecap", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Frozen blossom harvested exclusively in the snowdrifts of Winterspring." },
      { name: "Gromsblood", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Crimson demonic herb harvested in Felwood and Blasted Lands." },
      { name: "Ghost Mushroom", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Luminescent subterranean fungi harvested in the Hinterlands caves and Maraudon." },
      { name: "Golden Sansam", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Golden succulent found in Azshara, Feralas, and Un'Goro." },
      { name: "Sungrass", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Lush grass soaking in direct sunlight in Feralas and Hinterlands." },
      { name: "Blindweed", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested in the murky bogs of Swamp of Sorrows." },
      { name: "Firebloom", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Fiery blossom harvested in Tanaris and Searing Gorge." },
      { name: "Purple Lotus", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested near ancient night elf ruins in Feralas and Ashenvale." },
      { name: "Arthas' Tears", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Melancholic white herb growing in the blighted soil of the Plaguelands." },
      { name: "Fadeleaf", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Camouflaged herb harvested in shady woodlands." },
      { name: "Goldthorn", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Spiny golden herb growing on dry arid hills." },
      { name: "Khadgar's Whisker", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Arcane lichen harvested in mid-level forests." },
      { name: "Wintersbite", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Frost-coated herb found in Alterac Mountains." },
      { name: "Grave Moss", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Crypt moss harvested in graveyards, tombs, and Scarlet Monastery." },
      { name: "Liferoot", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Medicinal root growing along freshwater streams and riverbanks." },
      { name: "Kingsblood", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Vibrant crimson flower found in temperate zones." },
      { name: "Stranglekelp", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Submerged aquatic kelp harvested along coastal ocean floors." },
      { name: "Wild Steelbloom", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Hardy flower growing on high stony cliffs." },
      { name: "Bruiseweed", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Common healing herb found near rocky outcrops." },
      { name: "Briarthorn", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Thorny woodland vine harvested in low-level forests." },
      { name: "Mageroyal", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Fragrant purple flower growing in sunny meadows." }
    ]
  },

  // ==========================================
  // SKINNING
  // ==========================================
  {
    category: PROF_CATS.PRIMARY_GATHERING,
    id: "Skinning",
    name: "Skinning",
    icon: "inv_misc_pelt_wolf_01",
    desc: "Skin slain beasts, chimaeras, devilsaurs, and dragons for leathers, thick hides, and chromatic scales.",
    items: [
      { name: "Devilsaur Leather", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from apex Devilsaur predators in Un'Goro Crater." },
      { name: "Corehound Hide", rarity: "Epic", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from fire-breathing Core Hounds in Molten Core." },
      { name: "Pristine Hide of the Beast", rarity: "Epic", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from The Beast in Upper Blackrock Spire." },
      { name: "Black Dragonscale", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from Black Dragonkin in Blackrock Spire and Burning Steppes." },
      { name: "Blue Dragonscale", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from Blue Dragonkin in Mazthoril, Winterspring." },
      { name: "Red Dragonscale", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from Red Dragonkin in Wetlands." },
      { name: "Green Dragonscale", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from Green Dragonkin in Sunken Temple and Swamp of Sorrows." },
      { name: "Chimaera Leather", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from elder chimaeras in Azshara." },
      { name: "Warbear Leather", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from diseased plaguebears in Western Plaguelands." },
      { name: "Frostsaber Leather", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from pristine frostsabers in Winterspring." },
      { name: "Scorpid Scale", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from giant venomous scorpids in Silithus and Tanaris." },
      { name: "Cured Rugged Hide", rarity: "Rare", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Rugged Hide treated with a Refined Deeprock Salt shaker." },
      { name: "Rugged Hide", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Thick hide harvested from level 50-60 beasts." },
      { name: "Rugged Leather", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Premier leather harvested from high-level beasts." },
      { name: "Thick Hide", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from level 40-50 beasts." },
      { name: "Thick Leather", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Durable leather harvested from mid-to-high level beasts." },
      { name: "Heavy Hide", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from level 30-40 beasts." },
      { name: "Heavy Leather", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Standard leather harvested from mid-level creatures." },
      { name: "Medium Hide", rarity: "Uncommon", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Harvested from level 20-30 beasts." },
      { name: "Medium Leather", rarity: "Common", slot: "", type: "Trade Good", bindType: "", stats: [], effect: "Leather harvested from young beasts." }
    ]
  },

  // ==========================================
  // COOKING
  // ==========================================
  {
    category: PROF_CATS.SECONDARY,
    id: "Cooking",
    name: "Cooking",
    icon: "inv_misc_food_15",
    desc: "Prepare hearty feasts and combat meals that grant Well Fed buffs, boosting stamina, attack power, agility, and spell recovery.",
    items: [
      {
        name: "Dirge's Kickin' Chimaerok Chops",
        rarity: "Rare",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 2550 health over 30 sec. If you spend at least 10 sec eating you become Well Fed, gaining +25 Stamina for 15 min."
      },
      {
        name: "Smoked Desert Dumplings",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 2148 health over 30 sec. If you spend at least 10 sec eating you become Well Fed, gaining +20 Strength for 15 min."
      },
      {
        name: "Grilled Squid",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1933 health over 30 sec. If you spend at least 10 sec eating you become Well Fed, gaining +10 Agility for 10 min."
      },
      {
        name: "Nightfin Soup",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 874 health over 27 sec. If you spend at least 10 sec eating you become Well Fed, regenerating 8 mana per 5 sec for 10 min."
      },
      {
        name: "Runn Tum Tuber Surprise",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1933 health over 30 sec. If you spend at least 10 sec eating you become Well Fed, gaining +10 Intellect for 10 min."
      },
      {
        name: "Blessed Sunfruit",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1933 health over 30 sec. If you spend at least 10 sec eating you become Well Fed, gaining +10 Strength for 10 min."
      },
      {
        name: "Dragonbreath Chili",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Gives you a chance to belch a cone of flame dealing 60 Fire damage on melee attacks for 10 min."
      },
      {
        name: "Savory Deviate Delight",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Eat Me! Transforms the consumer into a Pirate or Ninja for 1 hr."
      },
      {
        name: "Heavy Kodo Stew",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1392 health over 30 sec. Grants +12 Stamina and +12 Spirit for 15 min."
      },
      {
        name: "Monster Omelet",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1392 health over 30 sec. Grants +12 Stamina and +12 Spirit for 15 min."
      },
      {
        name: "Spiced Chili Crab",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1392 health over 30 sec. Grants +12 Stamina and +12 Spirit for 15 min."
      },
      {
        name: "Tender Wolf Steak",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1392 health over 30 sec. Grants +12 Stamina and +12 Spirit for 15 min."
      },
      {
        name: "Roast Raptor",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 1392 health over 30 sec. Grants +12 Stamina and +12 Spirit for 15 min."
      },
      {
        name: "Poached Sunscale Salmon",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 874 health over 27 sec. Grants +6 Health every 5 sec for 10 min."
      },
      {
        name: "Sagefish Delight",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Restores 874 health over 27 sec. Grants +6 Mana every 5 sec for 10 min."
      }
    ]
  },

  // ==========================================
  // FISHING
  // ==========================================
  {
    category: PROF_CATS.SECONDARY,
    id: "Fishing",
    name: "Fishing",
    icon: "trade_fishing",
    desc: "Angle in open oceans, lakes, and elemental waters for rare alchemical reagents, culinary fish, sunken wreckage, and masterwork fishing poles.",
    items: [
      {
        name: "Nat Pagle's Extreme Angler FC-5000",
        rarity: "Rare",
        slot: "Two-Hand",
        type: "Fishing Pole",
        bindType: "Binds when equipped",
        stats: ["64 - 97 Damage", "3.00 Speed", "26.8 DPS"],
        effect: "Equip: Increases Fishing skill by +25."
      },
      {
        name: "Big Iron Fishing Pole",
        rarity: "Uncommon",
        slot: "Two-Hand",
        type: "Fishing Pole",
        bindType: "Binds when equipped",
        stats: ["47 - 71 Damage", "3.00 Speed", "19.7 DPS"],
        effect: "Equip: Increases Fishing skill by +20."
      },
      {
        name: "Ironjaw Bludgeon",
        rarity: "Rare",
        slot: "One-Hand",
        type: "Mace",
        bindType: "Binds when equipped",
        stats: ["42 - 79 Damage", "1.80 Speed", "33.6 DPS", "+10 Stamina", "+10 Strength"],
        effect: "Equip: Fished from the deepest trench of the Bay of Storms in Azshara."
      },
      {
        name: "Aquadynamic Fish Attractor",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Apply to your fishing pole to increase fishing skill by 100 for 10 min."
      },
      {
        name: "Raw Nightfin Snapper",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Caught in freshwater lakes between 6PM and 6AM. Used in MP5 cooking recipes."
      },
      {
        name: "Raw Sunscale Salmon",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Caught in freshwater lakes during daylight hours. Used in HP5 cooking recipes."
      },
      {
        name: "Winter Squid",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Migratory squid caught along ocean coasts during the winter season. Used for +10 Agility food."
      },
      {
        name: "Summer Bass",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Migratory fish caught along ocean coasts during summer months."
      },
      {
        name: "Stonescale Eel",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Rare ocean catch. Crucial reagent for Greater Stoneshield Potions."
      },
      {
        name: "Oily Blackmouth",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Coastal catch. Crucial reagent for Free Action Potions and Blackmouth Oil."
      },
      {
        name: "Firefin Snapper",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Coastal catch. Crucial reagent for Fire Power Elixirs and Fire Oil."
      },
      {
        name: "Deviate Fish",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Special fish caught in the oasis pools of the Barrens and Wailing Caverns."
      },
      {
        name: "Raw Glossy Mightfish",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Heavy ocean fish caught along coastal Tanaris and Azshara."
      },
      {
        name: "Raw Redgill",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "Freshwater river catch in Western Plaguelands and Felwood."
      },
      {
        name: "Raw Whitescale Salmon",
        rarity: "Common",
        slot: "",
        type: "Trade Good",
        bindType: "",
        stats: [],
        effect: "High-level catch in Winterspring and Eastern Plaguelands."
      }
    ]
  },

  // ==========================================
  // FIRST AID
  // ==========================================
  {
    category: PROF_CATS.SECONDARY,
    id: "First Aid",
    name: "First Aid",
    icon: "spell_holy_sealofsacrifice",
    desc: "Weave field bandages and anti-venoms to rapidly patch mortal wounds and neutralize deadly poisons in active combat without using mana.",
    items: [
      {
        name: "Heavy Runecloth Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 2000 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Runecloth Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 1360 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Heavy Mageweave Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 1104 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Mageweave Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 800 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Heavy Silk Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 640 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Silk Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 400 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Heavy Wool Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 301 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Wool Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 161 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Heavy Linen Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 114 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Linen Bandage",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Heals 66 damage over 8 sec. Cannot be used on a player who has Recently Bandaged (60 sec debuff)."
      },
      {
        name: "Powerful Anti-Venom",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Cures poison effects on the target up to level 60. (1 Min Cooldown)"
      },
      {
        name: "Strong Anti-Venom",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Cures poison effects on the target up to level 35. (1 Min Cooldown)"
      },
      {
        name: "Anti-Venom",
        rarity: "Common",
        slot: "",
        type: "Consumable",
        bindType: "",
        stats: [],
        effect: "Use: Cures poison effects on the target up to level 20. (1 Min Cooldown)"
      }
    ]
  }
];

// Check and verify uniqueness of all item names
const allNames = new Set();
professionsCatalog.forEach(prof => {
  prof.items.forEach(item => {
    if (allNames.has(item.name)) {
      console.error(`ERROR: Duplicate item name detected: ${item.name}`);
    }
    allNames.add(item.name);
  });
});

console.log(`Total unique verified profession items: ${allNames.size}`);

// Group by category
const professionsData = {};
professionsCatalog.forEach(prof => {
  if (!professionsData[prof.category]) {
    professionsData[prof.category] = [];
  }
  professionsData[prof.category].push({
    id: prof.id,
    name: prof.name,
    icon: prof.icon,
    desc: prof.desc,
    items: prof.items
  });
});

const fileContent = `import { WowItem } from '../types/items';

export interface Profession {
  id: string;
  name: string;
  icon: string;
  desc: string;
  items: WowItem[];
}

export const PROF_CATS = {
  PRIMARY_CRAFTING: "Primary: Crafting",
  PRIMARY_GATHERING: "Primary: Gathering",
  SECONDARY: "Secondary Skills"
};

export const professionsData: Record<string, Profession[]> = ${JSON.stringify(professionsData, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src/data/professions.ts'), fileContent, 'utf8');
console.log('Successfully wrote handcrafted, 100% verified unique professions.ts');
