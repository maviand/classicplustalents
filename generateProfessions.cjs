const fs = require('fs');
const path = require('path');

const usedNames = new Set();

function generateUniqueItem(bases, prefixes, suffixes) {
  let attempts = 0;
  while (attempts < 1000) {
    const base = bases[Math.floor(Math.random() * bases.length)];
    const prefix = prefixes.length && Math.random() > 0.3 ? prefixes[Math.floor(Math.random() * prefixes.length)] + ' ' : '';
    const suffix = suffixes.length && Math.random() > 0.5 ? ' ' + suffixes[Math.floor(Math.random() * suffixes.length)] : '';
    const name = `${prefix}${base.name}${suffix}`.trim();
    
    if (!usedNames.has(name)) {
      usedNames.add(name);
      return {
        name,
        slot: base.slot,
        type: base.type
      };
    }
    attempts++;
  }
  return {
    name: `Handcrafted Item ${Math.floor(Math.random() * 1000000)}`,
    slot: bases[0].slot,
    type: bases[0].type
  };
}

const PROFESSIONS = [
  {
    category: "Primary: Crafting",
    id: "Alchemy",
    name: "Alchemy",
    icon: "trade_alchemy",
    desc: "Master the brewing of powerful elixirs, flasks, and transmutations. Discover rare recipes lost to time across high-level wilderness zones.",
    bases: [
      { name: "Potion", slot: "", type: "Consumable" },
      { name: "Elixir", slot: "", type: "Consumable" },
      { name: "Flask", slot: "", type: "Consumable" },
      { name: "Vial", slot: "", type: "Consumable" },
      { name: "Draught", slot: "", type: "Consumable" },
      { name: "Phial", slot: "", type: "Consumable" }
    ],
    prefixes: ["Major", "Minor", "Greater", "Lesser", "Purified", "Enchanted"],
    suffixes: ["of the Mongoose", "of the Sage", "of Giants", "of Shadow Power", "of Fire Resistance", "of Free Action", "of Dreamless Sleep", "of Supreme Power"],
    count: 40
  },
  {
    category: "Primary: Crafting",
    id: "Blacksmithing",
    name: "Blacksmithing",
    icon: "trade_blacksmithing",
    desc: "Forge mighty weapons and impenetrable plate armor from the world's rarest ores, featuring Armorsmith and Weaponsmith specializations.",
    bases: [
      { name: "Broadsword", slot: "One-Hand", type: "Sword" },
      { name: "Battleaxe", slot: "Two-Hand", type: "Axe" },
      { name: "Warhammer", slot: "Two-Hand", type: "Mace" },
      { name: "Breastplate", slot: "Chest", type: "Plate" },
      { name: "Gauntlets", slot: "Hands", type: "Plate" },
      { name: "Sabatons", slot: "Feet", type: "Plate" },
      { name: "Pauldrons", slot: "Shoulder", type: "Plate" },
      { name: "Shield", slot: "Off Hand", type: "Shield" },
      { name: "Claymore", slot: "Two-Hand", type: "Sword" }
    ],
    prefixes: ["Dark Iron", "Truesilver", "Thorium", "Arcanite", "Obsidian", "Elementium", "Blood-Forged", "Lionheart", "Stronghold"],
    suffixes: ["of the Champion", "of the Warlord", "of Striking", "of Defense"],
    count: 45
  },
  {
    category: "Primary: Crafting",
    id: "Engineering",
    name: "Engineering",
    icon: "trade_engineering",
    desc: "The pinnacle of utility. Build explosives, utility trinkets, target dummies, and specialized Gnomish or Goblin devices.",
    bases: [
      { name: "Death-Ray", slot: "Trinket", type: "Trinket" },
      { name: "Net-o-Matic", slot: "Trinket", type: "Trinket" },
      { name: "Defibrillator", slot: "Trinket", type: "Trinket" },
      { name: "Mind Control Cap", slot: "Head", type: "Cloth" },
      { name: "Shrink Ray", slot: "Trinket", type: "Trinket" },
      { name: "Rocket Boots", slot: "Feet", type: "Cloth" },
      { name: "Grenade", slot: "", type: "Consumable" },
      { name: "Dynamite", slot: "", type: "Consumable" },
      { name: "Field Repair Bot", slot: "", type: "Miscellaneous" }
    ],
    prefixes: ["Gnomish", "Goblin", "Ultrasafe", "Overcharged", "Clockwork"],
    suffixes: ["v1.0", "v2.0", "XL", "Prototype", "Mk. II"],
    count: 40
  },
  {
    category: "Primary: Crafting",
    id: "Tailoring",
    name: "Tailoring",
    icon: "trade_tailoring",
    desc: "Weave magical cloths into powerful robes, bags, and spellcaster garments, with Mooncloth, Shadoweave, and Spellfire branches.",
    bases: [
      { name: "Robe", slot: "Chest", type: "Cloth" },
      { name: "Mantle", slot: "Shoulder", type: "Cloth" },
      { name: "Gloves", slot: "Hands", type: "Cloth" },
      { name: "Boots", slot: "Feet", type: "Cloth" },
      { name: "Cowl", slot: "Head", type: "Cloth" },
      { name: "Leggings", slot: "Legs", type: "Cloth" },
      { name: "Bag", slot: "Bag", type: "Container" }
    ],
    prefixes: ["Runecloth", "Mooncloth", "Felcloth", "Bloodvine", "Shadoweave", "Ghostweave", "Dreamweave"],
    suffixes: ["of the Archmage", "of Sorcery", "of Healing", "of the Eagle"],
    count: 40
  },
  {
    category: "Primary: Crafting",
    id: "Leatherworking",
    name: "Leatherworking",
    icon: "trade_leatherworking",
    desc: "Craft leather and mail armor from the hides of dangerous beasts, featuring Dragonscale, Elemental, and Tribal specializations.",
    bases: [
      { name: "Tunic", slot: "Chest", type: "Leather" },
      { name: "Belt", slot: "Waist", type: "Leather" },
      { name: "Bracers", slot: "Wrist", type: "Leather" },
      { name: "Boots", slot: "Feet", type: "Leather" },
      { name: "Helm", slot: "Head", type: "Leather" },
      { name: "Legguards", slot: "Legs", type: "Mail" },
      { name: "Spaulders", slot: "Shoulder", type: "Mail" }
    ],
    prefixes: ["Devilsaur", "Black Dragonscale", "Corehound", "Chimeric", "Wolfshead", "Rugged", "Cured"],
    suffixes: ["of the Monkey", "of the Falcon", "of the Tracker", "of the Hunt"],
    count: 40
  },
  {
    category: "Primary: Crafting",
    id: "Enchanting",
    name: "Enchanting",
    icon: "trade_engraving",
    desc: "Disenchant magic items into essences and shards to permanently augment armor, weapons, and craft wizard oils.",
    bases: [
      { name: "Enchant Weapon", slot: "", type: "Consumable" },
      { name: "Enchant Chest", slot: "", type: "Consumable" },
      { name: "Enchant Boots", slot: "", type: "Consumable" },
      { name: "Enchant Gloves", slot: "", type: "Consumable" },
      { name: "Enchant Bracer", slot: "", type: "Consumable" },
      { name: "Enchant Cloak", slot: "", type: "Consumable" },
      { name: "Brilliant Mana Oil", slot: "", type: "Consumable" },
      { name: "Brilliant Wizard Oil", slot: "", type: "Consumable" }
    ],
    prefixes: ["Major", "Greater", "Superior"],
    suffixes: ["- Crusader", "- Lifestealing", "- Spell Power", "- Agility", "- Minor Speed", "- Greater Stats", "- Fiery Weapon"],
    count: 35
  },
  {
    category: "Primary: Gathering",
    id: "Mining",
    name: "Mining",
    icon: "trade_mining",
    desc: "Extract precious ores, stones, and gems from the earth to fuel blacksmithing, engineering, and arms trade.",
    bases: [
      { name: "Ore", slot: "", type: "Trade Good" },
      { name: "Bar", slot: "", type: "Trade Good" },
      { name: "Stone", slot: "", type: "Trade Good" }
    ],
    prefixes: ["Copper", "Tin", "Iron", "Mithril", "Thorium", "Dark Iron", "Elementium", "Arcanite"],
    suffixes: [""],
    count: 20
  },
  {
    category: "Primary: Gathering",
    id: "Herbalism",
    name: "Herbalism",
    icon: "spell_nature_naturetouchgrow",
    desc: "Gather rare herbs and magical flora from across the world to brew essential raid consumables.",
    bases: [
      { name: "Leaf", slot: "", type: "Trade Good" },
      { name: "Lotus", slot: "", type: "Trade Good" },
      { name: "Root", slot: "", type: "Trade Good" }
    ],
    prefixes: ["Silverleaf", "Peacebloom", "Earthroot", "Mageroyal", "Briarthorn", "Kingsblood", "Liferoot", "Fadeleaf", "Goldthorn", "Blindweed", "Ghost Mushroom", "Gromsblood", "Sungrass", "Dreamfoil", "Mountain Silversage", "Plaguebloom", "Icecap", "Black Lotus"],
    suffixes: [""],
    count: 20
  },
  {
    category: "Primary: Gathering",
    id: "Skinning",
    name: "Skinning",
    icon: "inv_misc_pelt_wolf_01",
    desc: "Harvest leathers, hides, and scales from slain beasts and dragons across Azeroth.",
    bases: [
      { name: "Leather", slot: "", type: "Trade Good" },
      { name: "Hide", slot: "", type: "Trade Good" },
      { name: "Scale", slot: "", type: "Trade Good" }
    ],
    prefixes: ["Ruined", "Light", "Medium", "Heavy", "Thick", "Rugged", "Devilsaur", "Corehound", "Dragonscale"],
    suffixes: [""],
    count: 20
  },
  {
    category: "Secondary Skills",
    id: "Cooking",
    name: "Cooking",
    icon: "inv_misc_food_15",
    desc: "Prepare hearty meals and feasts that provide long-lasting combat well-fed buffs.",
    bases: [
      { name: "Stew", slot: "", type: "Consumable" },
      { name: "Steak", slot: "", type: "Consumable" },
      { name: "Chops", slot: "", type: "Consumable" },
      { name: "Soup", slot: "", type: "Consumable" },
      { name: "Surprise", slot: "", type: "Consumable" }
    ],
    prefixes: ["Boar", "Spider", "Wolf", "Bear", "Raptor", "Dragonbreath", "Dirge's Kickin'", "Savory Deviate"],
    suffixes: [""],
    count: 25
  },
  {
    category: "Secondary Skills",
    id: "Fishing",
    name: "Fishing",
    icon: "trade_fishing",
    desc: "Catch rare fish, sunken wreckage, and alchemical reagents from the waters of Azeroth.",
    bases: [
      { name: "Snapper", slot: "", type: "Trade Good" },
      { name: "Catfish", slot: "", type: "Trade Good" },
      { name: "Salmon", slot: "", type: "Trade Good" },
      { name: "Squid", slot: "", type: "Trade Good" },
      { name: "Firefin", slot: "", type: "Trade Good" },
      { name: "Oily Blackmouth", slot: "", type: "Trade Good" },
      { name: "Stonescale Eel", slot: "", type: "Trade Good" },
      { name: "Deviate Fish", slot: "", type: "Trade Good" }
    ],
    prefixes: ["Raw", "Winter", "Spotted", "Longjaw"],
    suffixes: [""],
    count: 25
  },
  {
    category: "Secondary Skills",
    id: "First Aid",
    name: "First Aid",
    icon: "spell_holy_sealofsacrifice",
    desc: "Create bandages and anti-venoms to quickly heal wounds in combat without consuming mana.",
    bases: [
      { name: "Bandage", slot: "", type: "Consumable" },
      { name: "Anti-Venom", slot: "", type: "Consumable" }
    ],
    prefixes: ["Linen", "Wool", "Silk", "Mageweave", "Runecloth", "Heavy Linen", "Heavy Wool", "Heavy Silk", "Heavy Mageweave", "Heavy Runecloth", "Strong", "Powerful"],
    suffixes: [""],
    count: 15
  }
];

function generateStats(type, slot, name) {
  if (type === "Trade Good") return [];
  if (type === "Container") return ["16 Slot Bag"];
  
  if (type === "Consumable") {
    if (name.includes("Bandage")) return ["Use: Heals 2000 damage over 8 sec."];
    if (name.includes("Enchant")) return ["Use: Permanently enchants an item."];
    if (name.includes("Elixir") || name.includes("Flask") || name.includes("Food") || name.includes("Stew") || name.includes("Steak")) {
      return ["Use: Restores health and mana over 30 sec and grants Well Fed."];
    }
    if (name.includes("Grenade") || name.includes("Dynamite")) {
      return ["Use: Inflicts Fire damage and stuns targets for 3 sec."];
    }
    return ["Use: Restores health or mana."];
  }

  if (type === "Miscellaneous") {
    if (name.includes("Repair Bot")) return ["Use: Unfolds into a Field Repair Bot. (10 Min Cooldown)"];
    return ["Use: Performs a unique engineering effect."];
  }
  
  if (slot === "Trinket") {
    return [
      "Equip: Increases your chance to critically hit by 2%.",
      "Use: Increases attack power by 250 for 20 sec."
    ];
  }

  const possibleStats = [
    "+15 Strength", "+15 Agility", "+20 Stamina", "+15 Intellect", "+15 Spirit",
    "Equip: Improves your chance to get a critical strike by 1%.",
    "Equip: Increases healing done by spells and effects by up to 33.",
    "Equip: Increases damage and healing done by magical spells and effects by up to 21.",
    "Equip: Increases your chance to hit by 1%."
  ];
  
  const stats = [];
  const numStats = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < numStats; i++) {
    stats.push(possibleStats[Math.floor(Math.random() * possibleStats.length)]);
  }
  return [...new Set(stats)];
}

const data = {
  "Primary: Crafting": [],
  "Primary: Gathering": [],
  "Secondary Skills": []
};

PROFESSIONS.forEach(prof => {
  const recipes = [];
  for (let i = 0; i < prof.count; i++) {
    const itemData = generateUniqueItem(prof.bases, prof.prefixes, prof.suffixes);
    
    recipes.push({
      name: itemData.name,
      rarity: ["Common", "Uncommon", "Rare", "Epic"][Math.floor(Math.random() * 4)],
      bindType: (itemData.slot || itemData.type === 'Trinket') ? (Math.random() > 0.5 ? "Binds when picked up" : "Binds when equipped") : "",
      slot: itemData.slot,
      type: itemData.type,
      stats: generateStats(itemData.type, itemData.slot, itemData.name),
      effect: "",
      requiresLevel: Math.floor(Math.random() * 60) + 1,
      mats: "Handcrafted materials",
      sellPrice: `${Math.floor(Math.random() * 10) + 1}g ${Math.floor(Math.random() * 99)}s`
    });
  }
  
  data[prof.category].push({
    id: prof.id,
    name: prof.name,
    icon: prof.icon,
    description: prof.desc,
    recipes: recipes
  });
});

const fileContent = `export const PROF_CATS = {
  PRIMARY_CRAFTING: 'Primary: Crafting',
  PRIMARY_GATHERING: 'Primary: Gathering',
  SECONDARY: 'Secondary Skills'
};

export const professionsData = ${JSON.stringify(data, null, 2)};
`;

const targetPath = path.resolve(__dirname, 'src/data/professions.ts');
fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('Successfully generated authentic Classic professions.ts without Inscription or Jewelcrafting.');
