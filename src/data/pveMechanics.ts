export interface PveMechanic {
  id: number;
  title: string;
  description: string;
}

export const PVE_MECHANICS: PveMechanic[] = [
  {
    id: 127,
    title: "Dynamic Wilderness Spawns",
    description: "Dungeon trash patrol compositions and roaming rare elites shift based on the time of day and lunar cycle."
  },
  {
    id: 128,
    title: "Boss Tier Turn-In Tokens",
    description: "High-tier raid bosses drop class-shared insignias (similar to AQ40 and Naxxramas) for specific armor slots to mitigate extreme loot table dilution."
  },
  {
    id: 130,
    title: "World-Buff Hard Mode Triggers",
    description: "Optional encounter mechanics where defeating a raid boss without active World Buffs yields bonus crafting reagents, crests, and cosmetic prestige."
  },
  {
    id: 131,
    title: "Environmental Destruction",
    description: "Devastating boss abilities permanently shatter stone pillars and barricades, dynamically removing Line of Sight protection as the encounter progresses."
  },
  {
    id: 132,
    title: "Localized Indoor Weather",
    description: "Elemental raid chambers generate micro-climates (such as freezing blizzards or suffocating heat waves) that modify elemental resistances and spell pushback."
  },
  {
    id: 133,
    title: "SoD Raid Player Counts (10 / 20 / 40 Players)",
    description: "All Classic+ raids adhere to Season of Discovery formats: 10-man and 20-man baseline rosters, with scalable 20-man to 40-man Epic Mode scaling to eliminate roster friction."
  },
  {
    id: 134,
    title: "Class-Specific Environmental Traps",
    description: "Rogues can disarm complex mechanical death-traps, Hunters can flare hidden stealth ambushes, and Priests can shackle ancient gargoyles."
  },
  {
    id: 135,
    title: "Multi-Stage Tactical Pursuits",
    description: "Cunning bosses that flee upon taking critical damage, forcing the raid to clear alternate wings before cornering them in their inner sanctum."
  },
  {
    id: 137,
    title: "Stacking Vulnerability Tank Swaps",
    description: "Boss debuffs (such as Sunder Flesh or Armor-Melting Flame) enforce coordinated tank hand-offs rather than relying on binary taunt immunities."
  },
  {
    id: 138,
    title: "Cooperative Chamber Puzzles",
    description: "Titan and Ancient puzzle rooms requiring coordinated player positioning on pressure runes to unlock hidden lore vaults and shortcut corridors."
  },
  {
    id: 139,
    title: "Soft Environmental Enrages",
    description: "Rooms that gradually flood with rising magma or toxic miasma, escalating raid damage over time rather than imposing a sudden artificial one-shot timer."
  },
  {
    id: 140,
    title: "Discordant Magic / Friendly Fire",
    description: "Ancient curses that temporarily cause targeted spellcasters' AoE spells to arc to nearby allies, demanding strict spread discipline and raid awareness."
  },
  {
    id: 141,
    title: "Vertical & Moving Terrain",
    description: "Encounters taking place on descending mine lifts, crumbling bridges, and shifting obsidian walkways inside volcanic caverns."
  },
  {
    id: 144,
    title: "Pitch-Black Sanctums & Torch Mechanics",
    description: "Unlit crypt depths where visibility is zero unless players light braziers or carry physical alchemical torches to illuminate approaching fiends."
  },
  {
    id: 145,
    title: "In-World Lore Grimoires & Schematics",
    description: "Defeated dungeon and raid masters drop readable historical volumes, hidden profession recipes, and flavor journals expanding Vanilla lore."
  },
  {
    id: 146,
    title: "Faction-Divergent Encounters",
    description: "Alliance and Horde face distinct narrative bosses, differing dialogue, and unique combat mechanics when invading contested raid strongholds."
  },
  {
    id: 147,
    title: "Guild Battle Standards",
    description: "Planting a guild-crafted battle standard in a raid provides morale support and small party utility buffs, displaying guild heraldry with pride."
  }
];
