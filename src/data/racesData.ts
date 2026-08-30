// Handcrafted Classic+ Racial Balance (1.12 Authentic Stat Budget Edition)

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

export const racesData: RaceData[] = [
  {
    id: "Human",
    name: "Human",
    faction: "Alliance",
    type: "Core Vanilla Race",
    startLevel: 1,
    startZone: "Northshire Abbey (Elwynn Forest)",
    description: "The resilient founders of the Alliance of Lordaeron. Humans excel in diplomacy, spiritual fortitude, and mastery of swords and maces.",
    baseRacial: {
      name: "Perception",
      desc: "Instant. Dramatically increases your stealth detection against prowling beasts and rogues for 20 sec. (3 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Paladin",
      "Rogue",
      "Priest",
      "Mage",
      "Warlock"
    ],
    traits: [
      {
        name: "Diplomacy",
        icon: "spell_holy_wordfortitude",
        desc: "Reputation gains increased by 10% across all friendly and neutral factions."
      },
      {
        name: "The Human Spirit",
        icon: "spell_holy_divinespirit",
        desc: "Total Spirit increased by 5%, improving out-of-combat health and in-combat mana regeneration."
      },
      {
        name: "Sword Specialization",
        icon: "inv_sword_04",
        desc: "Skill with One-Handed and Two-Handed Swords increased by 5."
      },
      {
        name: "Mace Specialization",
        icon: "inv_mace_01",
        desc: "Skill with One-Handed and Two-Handed Maces increased by 5."
      }
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
      desc: "Instant. While active, grants immunity to Bleed, Poison, and Disease effects and increases armor by 10% for 8 sec. (3 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Paladin",
      "Hunter",
      "Rogue",
      "Priest"
    ],
    traits: [
      {
        name: "Frost Resistance",
        icon: "spell_frost_frostward",
        desc: "Frost Resistance increased by 10."
      },
      {
        name: "Find Treasure",
        icon: "inv_misc_gem_01",
        desc: "Allows the dwarf to sense nearby treasure chests, displaying them on the minimap."
      },
      {
        name: "Gun Specialization",
        icon: "inv_weapon_rifle_01",
        desc: "Gun skill increased by 5, increasing ranged hit and critical strike chance with rifles."
      },
      {
        name: "Mountaineer Fortitude",
        icon: "spell_nature_strength",
        desc: "Reduces the duration of movement impairing and slow effects by 10%."
      }
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
      desc: "Instant. Slip into the shadows, reducing the chance for enemies to detect your presence. Lasts until cancelled or upon moving. Cannot be used in combat. (10 Sec Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Hunter",
      "Rogue",
      "Priest",
      "Druid"
    ],
    traits: [
      {
        name: "Nature Resistance",
        icon: "spell_nature_resistnature",
        desc: "Nature Resistance increased by 10."
      },
      {
        name: "Wisp Spirit",
        icon: "spell_nature_wispsplode",
        desc: "Transform into a wisp upon death, increasing movement speed by 50% while dead."
      },
      {
        name: "Quickness",
        icon: "ability_rogue_sprint",
        desc: "Dodge chance increased by 1%."
      },
      {
        name: "Bow Specialization",
        icon: "inv_weapon_bow_01",
        desc: "Skill with Bows increased by 5."
      },
      {
        name: "Elusiveness",
        icon: "spell_magic_lesserinvisibilty",
        desc: "Reduces the chance enemies have to detect you while Shadowmelded or Stealthed."
      }
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
      desc: "0.5 sec cast. Escape the effects of any immobilization or movement speed reduction effect. (1 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Rogue",
      "Mage",
      "Warlock"
    ],
    traits: [
      {
        name: "Arcane Resistance",
        icon: "spell_nature_starfall",
        desc: "Arcane Resistance increased by 10."
      },
      {
        name: "Expansive Mind",
        icon: "spell_ice_magicdamage",
        desc: "Total Intellect increased by 5%."
      },
      {
        name: "Engineering Specialization",
        icon: "trade_engineering",
        desc: "Engineering skill increased by 15."
      },
      {
        name: "Master Tinkerer",
        icon: "ability_rogue_ambush",
        desc: "Reduces the malfunction chance of Engineering devices by 50% and improves trap disarm effectiveness."
      }
    ]
  },
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
    availableClasses: [
      "Warrior",
      "Hunter",
      "Rogue",
      "Mage",
      "Warlock",
      "Druid"
    ],
    traits: [
      {
        name: "Viciousness",
        icon: "ability_druid_rake",
        desc: "Melee and ranged critical strike chance increased by 1%."
      },
      {
        name: "Aberration",
        icon: "spell_shadow_shadowward",
        desc: "Shadow and Nature Resistance increased by 7."
      },
      {
        name: "Flayer",
        icon: "trade_skinning",
        desc: "Skinning skill increased by 15, and skinning cast time reduced to 1.5 seconds."
      },
      {
        name: "Claw Mastery",
        icon: "inv_misc_pelt_04",
        desc: "Skill with Fist Weapons and Daggers increased by 5."
      }
    ]
  },
  {
    id: "Wildhammer",
    name: "Wildhammer Dwarf",
    faction: "Alliance",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "Northeron Valley (Highland Foothills)",
    description: "Fierce, tattooed mountaineers of Northeron and the Hinterlands who revere nature and storm magic, bonded with mighty gryphons.",
    baseRacial: {
      name: "Storm Shock",
      desc: "Instant. Hurl a charged storm bolt at an enemy within 10 yards, dealing Nature damage and interrupting spellcasting for 3 sec. (2 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Hunter",
      "Rogue",
      "Priest",
      "Shaman"
    ],
    traits: [
      {
        name: "Gryphon Rider's Vigor",
        icon: "ability_mount_gryphon_01",
        desc: "Fall damage reduced by 30%, and Nature Resistance increased by 10."
      },
      {
        name: "Tattooed Hide",
        icon: "inv_misc_pelt_04",
        desc: "Armor contribution from items increased by 3%."
      },
      {
        name: "Hammer Specialization",
        icon: "inv_hammer_04",
        desc: "Skill with Two-Handed Maces increased by 5."
      },
      {
        name: "Storm Affinity",
        icon: "spell_nature_lightning",
        desc: "Nature damage dealt by spells and attacks increased by 2%."
      }
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
      desc: "Instant. Unleash an intimidating roar that demoralizes enemies within 8 yards, reducing their melee attack power by 100 for 15 sec. (2 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Hunter",
      "Priest",
      "Shaman",
      "Druid"
    ],
    traits: [
      {
        name: "Thick Hide",
        icon: "ability_hunter_pet_bear",
        desc: "Total Stamina increased by 2%."
      },
      {
        name: "Woodland Stride",
        icon: "spell_nature_naturetouchgrow",
        desc: "Movement speed in outdoor wilderness zones increased by 4%."
      },
      {
        name: "Ancestral Resilience",
        icon: "spell_nature_skinofearth",
        desc: "Chance to resist Stun and incapacitation effects increased by 10%."
      },
      {
        name: "Ursine Claws",
        icon: "ability_druid_bash",
        desc: "Skill with Fist Weapons and Unarmed combat increased by 5."
      }
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
      desc: "Instant. Release a burst of arcane energy, silencing all enemies within 8 yards for 1.5 sec and restoring 3% base mana. (2 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Hunter",
      "Rogue",
      "Priest",
      "Mage",
      "Paladin"
    ],
    traits: [
      {
        name: "Arcane Affinity",
        icon: "spell_holy_magicalsentry",
        desc: "Enchanting skill increased by 15, and Arcane Resistance increased by 10."
      },
      {
        name: "Arcane Meditation",
        icon: "spell_holy_holybolt",
        desc: "Allows 5% of your mana regeneration to continue while casting."
      },
      {
        name: "Ranger's Precision",
        icon: "ability_hunter_aimedshot",
        desc: "Skill with Bows and Crossbows increased by 5."
      },
      {
        name: "Wellspring of Magic",
        icon: "spell_holy_devotion",
        desc: "Total Intellect increased by 2%."
      }
    ]
  },
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
    availableClasses: [
      "Warrior",
      "Hunter",
      "Rogue",
      "Shaman",
      "Warlock"
    ],
    traits: [
      {
        name: "Hardiness",
        icon: "spell_nature_strength",
        desc: "Chance to resist Stun effects increased by 15%."
      },
      {
        name: "Axe Specialization",
        icon: "inv_axe_02",
        desc: "Skill with One-Handed and Two-Handed Axes increased by 5."
      },
      {
        name: "Command",
        icon: "ability_hunter_pet_orc",
        desc: "Damage dealt by Hunter and Warlock combat pets increased by 5%."
      },
      {
        name: "Savage Tenacity",
        icon: "spell_nature_bloodlust",
        desc: "Out-of-combat health regeneration increased by 15%."
      }
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
    availableClasses: [
      "Warrior",
      "Rogue",
      "Priest",
      "Mage",
      "Warlock"
    ],
    traits: [
      {
        name: "Shadow Resistance",
        icon: "spell_shadow_antipathyshadow",
        desc: "Shadow Resistance increased by 10."
      },
      {
        name: "Cannibalize",
        icon: "ability_racial_cannibalize",
        desc: "Regenerates 7% of total health every 2 sec for 10 sec from a nearby Humanoid or Undead corpse."
      },
      {
        name: "Underwater Breathing",
        icon: "spell_shadow_demonbreath",
        desc: "Underwater breath duration increased by 300%."
      },
      {
        name: "Touch of the Grave",
        icon: "spell_shadow_lifedrain",
        desc: "Melee and offensive spell attacks have a chance to inflict minor shadow damage and heal you for the same amount."
      }
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
    availableClasses: [
      "Warrior",
      "Hunter",
      "Shaman",
      "Druid"
    ],
    traits: [
      {
        name: "Endurance",
        icon: "spell_nature_earthbind",
        desc: "Base Health increased by 5%."
      },
      {
        name: "Cultivation",
        icon: "inv_misc_flower_01",
        desc: "Herbalism skill increased by 15, and herb harvesting speed is significantly increased."
      },
      {
        name: "Nature Resistance",
        icon: "spell_nature_resistnature",
        desc: "Nature Resistance increased by 10."
      },
      {
        name: "Plainsrunner",
        icon: "spell_nature_spiritwolf",
        desc: "Reduces daze duration while riding by 15%, and increases outdoor movement speed by 3%."
      }
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
    availableClasses: [
      "Warrior",
      "Hunter",
      "Rogue",
      "Priest",
      "Shaman",
      "Mage"
    ],
    traits: [
      {
        name: "Regeneration",
        icon: "spell_nature_regenerate",
        desc: "Health regeneration rate increased by 10%. 10% of total health regeneration continues during active combat."
      },
      {
        name: "Beast Slaying",
        icon: "ability_hunter_snaketrap",
        desc: "Damage dealt against Beasts increased by 5%."
      },
      {
        name: "Bow & Throwing Specialization",
        icon: "inv_weapon_bow_01",
        desc: "Skill with Bows and Throwing Weapons increased by 5."
      },
      {
        name: "Da Voodoo Shuffle",
        icon: "spell_shadow_shadowworddominate",
        desc: "Reduces the duration of all movement impairing and slow effects by 15%."
      }
    ]
  },
  {
    id: "Ogre",
    name: "Ogre (Stonemaul Clan)",
    faction: "Horde",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "Brackenwall Outskirts (Dustwallow Marsh)",
    description: "Massive, battle-hardened brutes of the Stonemaul clan, sworn allies of the Horde since Rexxar claimed leadership. Possess immense physical resilience.",
    baseRacial: {
      name: "Brutish Ground Slam",
      desc: "Instant. Slam your massive weapon into the ground, knocking down up to 3 enemies directly in front of you for 1.5 sec. (2 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Hunter",
      "Shaman",
      "Mage",
      "Warlock"
    ],
    traits: [
      {
        name: "Thick Skull",
        icon: "spell_nature_strength",
        desc: "Stun duration reduced by 10%, and total Health increased by 2%."
      },
      {
        name: "Big Appetite",
        icon: "inv_misc_food_15",
        desc: "Consuming food restores health 50% faster and increases out-of-combat spirit."
      },
      {
        name: "Club Specialization",
        icon: "inv_mace_01",
        desc: "Skill with One-Handed and Two-Handed Maces increased by 5."
      },
      {
        name: "Ogre-Mage Lineage",
        icon: "spell_arcane_starfire",
        desc: "Spell critical strike chance with Fire and Arcane spells increased by 1%."
      }
    ]
  },
  {
    id: "ForestTroll",
    name: "Forest Troll (Revantusk)",
    faction: "Horde",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "Revantusk Stronghold (The Hinterlands Coast)",
    description: "The muscular moss-skinned trolls of the Revantusk tribe, sworn allies of the Horde and ancient rivals of the High Elves.",
    baseRacial: {
      name: "Voodoo Hex",
      desc: "Instant. Curse an enemy within 20 yards, reducing their attack power by 10% and slowing movement speed by 20% for 6 sec. (2 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Hunter",
      "Rogue",
      "Priest",
      "Shaman"
    ],
    traits: [
      {
        name: "Moss-Skin Armor",
        icon: "spell_nature_skinofearth",
        desc: "Armor contribution from items increased by 3%, and Nature Resistance increased by 10."
      },
      {
        name: "Axe Thrower",
        icon: "inv_axe_17",
        desc: "Skill with Axes increased by 5, and Throwing weapon range increased by 5 yards."
      },
      {
        name: "Wild Regeneration",
        icon: "spell_nature_regenerate",
        desc: "Total out-of-combat health regeneration rate increased by 15%."
      },
      {
        name: "Ancestral Hatred",
        icon: "spell_shadow_shadetruesight",
        desc: "Damage dealt against Humanoid and Beast enemies increased by 2%."
      }
    ]
  },
  {
    id: "Goblin",
    name: "Goblin (Steamwheedle / Bilgewater)",
    faction: "Horde",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "The Shattered Strand (Azshara Coast)",
    description: "Tenacious, profit-minded inventors and alchemists who have negotiated a mercenary pact with the Horde.",
    baseRacial: {
      name: "Rocket Belt Jump",
      desc: "Instant. Activate your rocket propulsion belt to leap forward 15 yards. (2 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Rogue",
      "Priest",
      "Mage",
      "Warlock",
      "Hunter"
    ],
    traits: [
      {
        name: "Better Living Through Chemistry",
        icon: "trade_alchemy",
        desc: "Alchemy skill increased by 15, and potion brewing speed accelerated."
      },
      {
        name: "Explosives Specialist",
        icon: "trade_engineering",
        desc: "Engineering skill increased by 10, and radius of explosive devices increased by 10%."
      },
      {
        name: "Shrewd Haggler",
        icon: "inv_misc_bag_08",
        desc: "Vendor purchases and repairs are discounted by 10% across all standard merchant factions."
      },
      {
        name: "Scavenger's Eye",
        icon: "inv_misc_coin_02",
        desc: "Chance to discover additional copper and silver coins on slain humanoid enemies."
      }
    ]
  },
  {
    id: "DarkIron",
    name: "Dark Iron Dwarf",
    faction: "Horde",
    type: "Allied Sub-Race",
    startLevel: 1,
    startZone: "The Lower Slag Pits (Searing Gorge)",
    description: "Thorium Brotherhood sympathizers and rebel Dark Iron smiths who broke away from Ragnaros' fiery tyranny to ally with the Horde.",
    baseRacial: {
      name: "Fireblood",
      desc: "Instant. Removes all active Bleed, Poison, and Disease effects and grants 100 Armor for 8 sec. (2 Min Cooldown)"
    },
    availableClasses: [
      "Warrior",
      "Rogue",
      "Priest",
      "Mage",
      "Warlock"
    ],
    traits: [
      {
        name: "Forged in Flame",
        icon: "spell_fire_fire",
        desc: "Fire Resistance increased by 15, and physical damage taken reduced by 1%."
      },
      {
        name: "Mass Production",
        icon: "trade_blacksmithing",
        desc: "Blacksmithing and Mining skills increased by 15."
      },
      {
        name: "Dungeon Delver",
        icon: "spell_shadow_shadetruesight",
        desc: "Movement speed while inside underground caverns and dungeons increased by 5%."
      },
      {
        name: "Searing Retribution",
        icon: "spell_fire_immolation",
        desc: "When struck by a melee attack, the attacker suffers 8 Fire damage."
      }
    ]
  }
];
