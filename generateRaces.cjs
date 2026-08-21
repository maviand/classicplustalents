const fs = require('fs');

const races = [
  // Core Alliance Races
  {
    id: "Human",
    name: "Human",
    faction: "Alliance",
    type: "Core Vanilla Race",
    startLevel: 1,
    startZone: "Northshire Abbey (Elwynn Forest)",
    description: "The resilient founders of the Alliance of Lordaeron. Humans excel in diplomacy, spiritual fortitude, and mastery of swords and maces.",
    baseRacial: {
      name: "Every Man for Himself",
      desc: "Instant. Removes all movement impairing effects and all effects which cause loss of control of your character. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Paladin", "Rogue", "Priest", "Mage", "Warlock"],
    traits: [
      { name: "Diplomacy", icon: "spell_holy_wordfortitude", desc: "Reputation gains increased by 10% across all factions." },
      { name: "The Human Spirit", icon: "spell_holy_divinespirit", desc: "Spirit increased by 5%, accelerating mana and health regeneration." },
      { name: "Perception", icon: "spell_nature_sleep", desc: "Dramatically increases stealth detection against rogues and prowling beasts." },
      { name: "Sword Specialization", icon: "inv_sword_04", desc: "Skill with Swords and Two-Handed Swords increased by 5." },
      { name: "Mace Specialization", icon: "inv_mace_01", desc: "Skill with Maces and Two-Handed Maces increased by 5." }
    ]
  },
  {
    id: "Dwarf",
    name: "Dwarf",
    faction: "Alliance",
    type: "Core Vanilla Race",
    startLevel: 1,
    startZone: "Coldridge Valley (Dun Morogh)",
    description: "Hardy mountain-dwellers of Ironforge. Dwarves are master metalsmiths, sharpshooters, and resilient defenders of Khaz Modan.",
    baseRacial: {
      name: "Stoneform",
      desc: "Instant. Grants immunity to Bleed, Poison, and Disease effects and increases armor by 10% for 8 sec. (3 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Paladin", "Hunter", "Rogue", "Priest"],
    traits: [
      { name: "Frost Resistance", icon: "spell_frost_frostward", desc: "Frost Resistance increased by 10." },
      { name: "Find Treasure", icon: "inv_misc_gem_01", desc: "Allows the dwarf to sense nearby treasure chests on the minimap." },
      { name: "Gun Specialization", icon: "inv_weapon_rifle_01", desc: "Gun skill increased by 5, increasing critical strike chance with rifles." },
      { name: "Mountaineer Fortitude", icon: "spell_nature_strength", desc: "Reduces the duration of movement impairing effects by 15%." }
    ]
  },
  {
    id: "NightElf",
    name: "Night Elf",
    faction: "Alliance",
    type: "Core Vanilla Race",
    startLevel: 1,
    startZone: "Shadowglen (Teldrassil)",
    description: "Ancient and reclusive protectors of Kalimdor. Masters of the shadows, bowcraft, and natural druidism.",
    baseRacial: {
      name: "Shadowmeld",
      desc: "Instant. Slip into the shadows, reducing the chance for enemies to detect your presence. Lasts until cancelled or upon moving. (10 Sec Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Rogue", "Priest", "Druid"],
    traits: [
      { name: "Nature Resistance", icon: "spell_nature_resistnature", desc: "Nature Resistance increased by 10." },
      { name: "Wisp Spirit", icon: "spell_nature_wispsplode", desc: "Transform into a wisp upon death, increasing ghost movement speed by 50%." },
      { name: "Quickness", icon: "ability_rogue_sprint", desc: "Dodge chance increased by 1%." },
      { name: "Bow Specialization", icon: "inv_weapon_bow_01", desc: "Bow skill increased by 5." }
    ]
  },
  {
    id: "Gnome",
    name: "Gnome",
    faction: "Alliance",
    type: "Core Vanilla Race",
    startLevel: 1,
    startZone: "Gnomeregan Surface (Dun Morogh)",
    description: "Brilliant, eccentric inventors whose keen intellects and technological ingenuity power the Alliance war machine.",
    baseRacial: {
      name: "Escape Artist",
      desc: "Instant (0.5 sec cast). Escape the effects of any immobilization or movement speed reduction effect. (1 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Rogue", "Mage", "Warlock"],
    traits: [
      { name: "Arcane Resistance", icon: "spell_nature_starfall", desc: "Arcane Resistance increased by 10." },
      { name: "Expansive Mind", icon: "spell_ice_magicdamage", desc: "Intellect increased by 5%." },
      { name: "Engineering Specialization", icon: "trade_engineering", desc: "Engineering skill increased by 15." }
    ]
  },

  // Allied Alliance Sub-Races (All Starting Level 1)
  {
    id: "Worgen",
    name: "Gilnean Worgen",
    faction: "Alliance",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "The Greymane Enclave (Gilneas Coast)",
    description: "Hardened Gilnean humans who have mastered their inner lupine curse, fighting with feral ferocity under the Alliance banner.",
    baseRacial: {
      name: "Darkflight",
      desc: "Instant. Drop to all fours, increasing ground movement speed by 40% for 10 sec. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Rogue", "Mage", "Warlock", "Druid"],
    traits: [
      { name: "Viciousness", icon: "ability_druid_rake", desc: "Melee and spell critical strike chance increased by 1%." },
      { name: "Aberration", icon: "spell_shadow_shadowward", desc: "Shadow and Nature Resistance increased by 7." },
      { name: "Flayer", icon: "trade_skinning", desc: "Skinning skill increased by 15, and skinning speed is reduced to 1.5 seconds." },
      { name: "Claw Mastery", icon: "inv_misc_pelt_04", desc: "Fist and Dagger weapon skill increased by 5." }
    ]
  },
  {
    id: "Wildhammer",
    name: "Wildhammer Dwarf",
    faction: "Alliance",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "Aerie Peak Heights (The Hinterlands)",
    description: "Fierce, tattooed mountaineers of the Hinterlands who revere nature and storm magic, bonded with mighty gryphons.",
    baseRacial: {
      name: "Storm Shock",
      desc: "Instant. Hurl a charged storm bolt at an enemy within 10 yards, dealing Nature damage and interrupting spellcasting for 3 sec. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Rogue", "Priest", "Shaman"],
    traits: [
      { name: "Gryphon Rider's Vigor", icon: "ability_mount_gryphon_01", desc: "Fall damage reduced by 25%, and Nature Resistance increased by 10." },
      { name: "Tattooed Hide", icon: "inv_misc_pelt_04", desc: "Armor increased by 3%." },
      { name: "Hammer Specialization", icon: "inv_hammer_04", desc: "Two-Handed Mace skill increased by 5." },
      { name: "Stormborn", icon: "spell_nature_lightning", desc: "Nature damage dealt increased by 2%." }
    ]
  },
  {
    id: "Timbermaw",
    name: "Timbermaw Furbolg",
    faction: "Alliance",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "The Inner Barrows (Felwood / Timbermaw)",
    description: "The last uncorrupted tribe of furbolgs in northern Kalimdor, wielding ancient shamanic earth magic and ursine might.",
    baseRacial: {
      name: "Ursine Roar",
      desc: "Instant. Unleash an intimidating roar that demoralizes enemies within 8 yards, reducing their attack power by 120 for 15 sec. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Priest", "Shaman", "Druid"],
    traits: [
      { name: "Thick Hide", icon: "ability_hunter_pet_bear", desc: "Total Stamina increased by 2%." },
      { name: "Woodland Stride", icon: "spell_nature_naturetouchgrow", desc: "Movement speed in outdoor wilderness zones increased by 5%." },
      { name: "Ancestral Resilience", icon: "spell_nature_skinofearth", desc: "Chance to resist stun and forced movement effects increased by 10%." }
    ]
  },
  {
    id: "HighElf",
    name: "High Elf",
    faction: "Alliance",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "Quel'Lithien Vanguard (Eastern Plaguelands)",
    description: "Remnants of Quel'Thalas who refused dark fel magic and remain loyal to the Alliance, masters of arcane arts and archery.",
    baseRacial: {
      name: "Arcane Torrent",
      desc: "Instant. Release a burst of arcane energy, silencing all enemies within 8 yards for 2 sec and restoring 5% total mana. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Rogue", "Priest", "Mage", "Paladin"],
    traits: [
      { name: "Arcane Affinity", icon: "spell_holy_magicalsentry", desc: "Enchanting skill increased by 15, and Arcane Resistance increased by 10." },
      { name: "Arcane Meditation", icon: "spell_holy_holybolt", desc: "Allows 10% of your mana regeneration to continue while casting." },
      { name: "Ranger's Precision", icon: "ability_hunter_aimedshot", desc: "Bow and Gun skill increased by 5." }
    ]
  },

  // Core Horde Races
  {
    id: "Orc",
    name: "Orc",
    faction: "Horde",
    type: "Core Vanilla Race",
    startLevel: 1,
    startZone: "Valley of Trials (Durotar)",
    description: "Honorable warriors from Draenor who founded the new Horde in Durotar. Masters of battle axes, blood rage, and pet command.",
    baseRacial: {
      name: "Blood Fury",
      desc: "Instant. Increases base melee attack power by 25% for 15 sec, but reduces healing effects received by 50% for 25 sec. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Rogue", "Shaman", "Warlock"],
    traits: [
      { name: "Hardiness", icon: "spell_nature_strength", desc: "Chance to resist Stun effects increased by 15%." },
      { name: "Axe Specialization", icon: "inv_axe_02", desc: "Skill with Axes and Two-Handed Axes increased by 5." },
      { name: "Command", icon: "ability_hunter_pet_orc", desc: "Damage dealt by Hunter and Warlock pets increased by 5%." }
    ]
  },
  {
    id: "Undead",
    name: "Undead (Forsaken)",
    faction: "Horde",
    type: "Core Vanilla Race",
    startLevel: 1,
    startZone: "Deathknell (Tirisfal Glades)",
    description: "The free-willed undead of Lordaeron who broke the Lich King's yoke. Feared for their dark alchemy and unbreakable willpower.",
    baseRacial: {
      name: "Will of the Forsaken",
      desc: "Instant. Provides immunity to Charm, Fear, and Sleep effects for 5 sec. May be used while already afflicted. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Rogue", "Priest", "Mage", "Warlock"],
    traits: [
      { name: "Shadow Resistance", icon: "spell_shadow_antipathyshadow", desc: "Shadow Resistance increased by 10." },
      { name: "Cannibalize", icon: "ability_racial_cannibalize", desc: "Regenerates 7% of total health every 2 sec for 10 sec from a nearby Humanoid or Undead corpse." },
      { name: "Underwater Breathing", icon: "spell_shadow_demonbreath", desc: "Underwater breath duration increased by 300%." }
    ]
  },
  {
    id: "Tauren",
    name: "Tauren",
    faction: "Horde",
    type: "Core Vanilla Race",
    startLevel: 1,
    startZone: "Camp Narache (Mulgore)",
    description: "Noble, spiritual giants of the Kalimdor plains. Revere the Earth Mother and wield immense physical strength and herbal knowledge.",
    baseRacial: {
      name: "War Stomp",
      desc: "0.5 sec cast. Stuns up to 5 enemies within 8 yards for 2 sec. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Shaman", "Druid"],
    traits: [
      { name: "Endurance", icon: "spell_nature_earthbind", desc: "Total Health increased by 5%." },
      { name: "Cultivation", icon: "inv_misc_flower_01", desc: "Herbalism skill increased by 15, and gathering speed is accelerated." },
      { name: "Nature Resistance", icon: "spell_nature_resistnature", desc: "Nature Resistance increased by 10." }
    ]
  },
  {
    id: "Troll",
    name: "Troll (Darkspear)",
    faction: "Horde",
    type: "Core Vanilla Race",
    startLevel: 1,
    startZone: "The Echo Isles (Durotar Coast)",
    description: "Cunning, resilient jungle trolls of the Darkspear tribe. Masters of rapid physical regeneration, throwing weapons, and voodoo.",
    baseRacial: {
      name: "Berserking",
      desc: "Instant. Increases your attack and casting speed by 10% to 30% for 10 sec, scaling higher the lower your current health. (3 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Rogue", "Priest", "Shaman", "Mage"],
    traits: [
      { name: "Regeneration", icon: "spell_nature_regenerate", desc: "Health regeneration increased by 10%. 10% of total health regeneration continues during combat." },
      { name: "Beast Slaying", icon: "ability_hunter_snaketrap", desc: "Damage dealt versus Beasts increased by 5%." },
      { name: "Bow & Throwing Specialization", icon: "inv_weapon_bow_01", desc: "Skill with Bows and Throwing Weapons increased by 5." }
    ]
  },

  // Allied Horde Sub-Races (All Starting Level 1)
  {
    id: "Ogre",
    name: "Ogre (Dreadmaul / Stonemaul)",
    faction: "Horde",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "The Broken Tables (Dustwallow Marsh)",
    description: "Massive brutes from the Stonemaul and Dreadmaul clans, united under the Horde. Possess colossal strength and ancient ogre-mage traditions.",
    baseRacial: {
      name: "Brutish Ground Slam",
      desc: "Instant. Slam your massive club into the ground, knocking down up to 3 enemies directly in front of you for 1.5 sec. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Shaman", "Mage", "Warlock"],
    traits: [
      { name: "Thick Skull", icon: "spell_nature_strength", desc: "Stun duration reduced by 15%, and total health increased by 3%." },
      { name: "Big Appetite", icon: "inv_misc_food_15", desc: "Consuming food restores health 50% faster and increases out-of-combat spirit." },
      { name: "Club Specialization", icon: "inv_mace_01", desc: "Skill with One-Handed and Two-Handed Maces increased by 5." }
    ]
  },
  {
    id: "ForestTroll",
    name: "Forest Troll (Revantusk)",
    faction: "Horde",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "Revantusk Shores (The Hinterlands)",
    description: "The muscular moss-skinned trolls of the Revantusk tribe, sworn allies of the Horde and ancient rivals of the high elves.",
    baseRacial: {
      name: "Voodoo Hex",
      desc: "Instant. Curse an enemy within 20 yards, reducing their attack power by 10% and slowing movement speed by 25% for 6 sec. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Hunter", "Rogue", "Priest", "Shaman"],
    traits: [
      { name: "Moss-Skin Armor", icon: "spell_nature_skinofearth", desc: "Armor increased by 4%, and Nature Resistance increased by 10." },
      { name: "Axe Thrower", icon: "inv_axe_17", desc: "Throwing weapon range increased by 5 yards, and Axe skill increased by 5." },
      { name: "Wild Regeneration", icon: "spell_nature_regenerate", desc: "Health regeneration rate increased by 15%." }
    ]
  },
  {
    id: "Goblin",
    name: "Goblin (Steamwheedle / Bilgewater)",
    faction: "Horde",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "The Shattered Strand (Azshara Coast)",
    description: "Tenacious, profit-minded inventors and alchemists who have negotiated an exclusive mercenary pact with the Horde.",
    baseRacial: {
      name: "Rocket Belt Jump",
      desc: "Instant. Activate your rocket propulsion belt to leap forward 15 yards. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Rogue", "Priest", "Mage", "Warlock", "Hunter"],
    traits: [
      { name: "Time is Money", icon: "inv_misc_coin_01", desc: "Attack and casting haste increased by 1%." },
      { name: "Best Deals Anywhere", icon: "inv_misc_bag_08", desc: "Vendor discount always calculated at maximum Exalted reputation tier (20%)." },
      { name: "Better Living Through Chemistry", icon: "trade_alchemy", desc: "Alchemy skill increased by 15." }
    ]
  },
  {
    id: "DarkIron",
    name: "Dark Iron Dwarf",
    faction: "Horde",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "The Lower Slag Pits (Searing Gorge)",
    description: "Rebel Dark Iron smiths and sorcerers who broke away from Ragnaros' fiery tyranny to ally with the Horde against common foes.",
    baseRacial: {
      name: "Fireblood",
      desc: "Instant. Removes all Bleed, Poison, Curse, and Disease effects and grants 100 Armor for 8 sec. (2 Min Cooldown)"
    },
    availableClasses: ["Warrior", "Rogue", "Priest", "Mage", "Warlock"],
    traits: [
      { name: "Forged in Flame", icon: "spell_fire_fire", desc: "Fire Resistance increased by 15, and physical damage taken reduced by 1%." },
      { name: "Mass Production", icon: "trade_blacksmithing", desc: "Blacksmithing and Mining skill increased by 15." },
      { name: "Dungeon Delver", icon: "spell_shadow_shadetruesight", desc: "Movement speed in underground tunnels and caverns increased by 5%." }
    ]
  }
];

const fileContent = `// Auto-generated by generateRaces.cjs (POLISHED CLASSIC+ RACIAL TRAITS EDITION)

export interface RacialTrait {
  name: string;
  icon: string;
  desc: string;
}

export interface RaceData {
  id: string;
  name: string;
  faction: 'Alliance' | 'Horde';
  type: string;
  startLevel: number;
  startZone: string;
  description: string;
  baseRacial: { name: string; desc: string };
  availableClasses: string[];
  traits: RacialTrait[];
}

export const racesData: RaceData[] = ${JSON.stringify(races, null, 2)};
`;

fs.writeFileSync('src/data/racesData.ts', fileContent, 'utf8');
console.log('Successfully generated polished racesData.ts with authentic racial traits and 0 talent tree bloat.');
