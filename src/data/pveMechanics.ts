export interface PveMechanic {
  id: number;
  title: string;
  description: string;
}

export const PVE_MECHANICS: PveMechanic[] = [
  {
    id: 126,
    title: "Mythic+ Timers",
    description: "Implement challenge-mode timers for Classic dungeons with cosmetic rewards."
  },
  {
    id: 127,
    title: "Dynamic Spawns",
    description: "Trash mobs change depending on the time of day the dungeon is run."
  },
  {
    id: 128,
    title: "Raid Tokens",
    description: "Bosses drop generic tokens exchangeable for specific tier pieces to reduce RNG."
  },
  {
    id: 129,
    title: "Class-Specific Loot",
    description: "Bosses detect the classes in the raid and slightly weight loot towards them."
  },
  {
    id: 130,
    title: "No-World-Buff Hard Modes",
    description: "Triggering a boss without world buffs active grants an extra piece of loot."
  },
  {
    id: 131,
    title: "Environment Destruction",
    description: "Boss attacks permanently destroy pillars used for Line of Sight."
  },
  {
    id: 132,
    title: "Weather Effects in Raids",
    description: "Indoor weather (e.g., indoor blizzards) that affects visibility."
  },
  {
    id: 133,
    title: "Scaling Health",
    description: "Bosses scale up slightly if the raid brings 40 players vs 35."
  },
  {
    id: 134,
    title: "Interactive Traps",
    description: "Rogues can disable traps that would otherwise wipe the raid."
  },
  {
    id: 135,
    title: "Multi-Stage Bosses",
    description: "Bosses that flee at 50% and must be fought in a completely different room later."
  },
  {
    id: 136,
    title: "Healer DPS Checks",
    description: "Phases where the boss only takes damage from healing spells (reversed mechanics)."
  },
  {
    id: 137,
    title: "Tank Swaps via Debuff",
    description: "Force tank swaps via stacking armor debuffs rather than just taunt immunities."
  },
  {
    id: 138,
    title: "Raid-Wide Puzzles",
    description: "A Zelda-style puzzle room requiring all 40 players to stand on specific plates."
  },
  {
    id: 139,
    title: "Boss Enrage Timers",
    description: "Soft enrages where the room slowly fills with poison instead of a hard one-shot."
  },
  {
    id: 140,
    title: "Friendly Fire Mechanics",
    description: "A debuff that causes your AoE spells to damage allies for 10 seconds."
  },
  {
    id: 141,
    title: "Moving Platforms",
    description: "Fighting a boss on a descending elevator."
  },
  {
    id: 142,
    title: "Underwater Combat",
    description: "A fully underwater raid tier with 3D movement mechanics."
  },
  {
    id: 143,
    title: "Vehicle Combat",
    description: "Utilize siege engines to break down a boss's armor before DPS can attack."
  },
  {
    id: 144,
    title: "Darkness Mechanic",
    description: "The room goes pitch black, and players must follow a single torch-bearing NPC."
  },
  {
    id: 145,
    title: "Lore Journals",
    description: "Bosses drop readable lore books expanding on Classic+ lore."
  },
  {
    id: 146,
    title: "Faction-Specific Encounters",
    description: "Horde fights a different boss than Alliance in the same room."
  },
  {
    id: 147,
    title: "Guild Banners",
    description: "Dropping a guild banner in a raid provides a 1% stat buff."
  },
  {
    id: 148,
    title: "Raid Spectator Mode",
    description: "Allow guild members to spectate the raid from the capital city."
  },
  {
    id: 149,
    title: "Wipe Recovery",
    description: "A mechanic to instantly respawn at the boss door instead of running back."
  },
  {
    id: 150,
    title: "Attunement Skips",
    description: "Once an account has completed an attunement, alts can skip the questline."
  }
];
