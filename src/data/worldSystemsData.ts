// Handcrafted Classic+ World Systems (1.12 Economy & Immersion Edition)

export const SYSTEM_CATEGORIES = {
  WORLD_DESIGN: 'World Design',
  QUALITY_OF_LIFE: 'Quality of Life & Interface',
  ECONOMY: 'Economy & Gold Sinks',
  IMMERSION: 'Immersion & World Permanence',
};

export interface WorldSystem {
  id: string;
  name: string;
  status: string;
  description: string;
  features: string[];
}

export const worldSystemsData: Record<string, WorldSystem[]> = {
  "World Design": [
    {
      "id": "DynamicWeather",
      "name": "Dynamic Weather & Wilderness Cycles",
      "status": "Active",
      "description": "Environmental weather actively enhances wilderness immersion, creature ecology, and rare resource availability.",
      "features": [
        "Heavy rain in Stranglethorn and Feralas increases the spawn rate of rare water elementals and tropical fishing pools.",
        "Snowstorms in Winterspring and Dun Morogh reduce ranged combat draw distance and increase stealth concealment.",
        "Silithus sandstorms reduce maximum horizon visibility and periodically uncover ancient buried scarab caches in the dunes."
      ]
    },
    {
      "id": "DayNightCycle",
      "name": "Day/Night Ecology Spawns",
      "status": "Active",
      "description": "Server time influences wilderness wildlife, rare patrols, and wandering merchants without gating core progression.",
      "features": [
        "Nocturnal predators (such as Duskwood shadow-stalkers and Silverpine dire wolves) prowl the tree lines between dusk and dawn.",
        "Certain rare herbalism blossoms (like Night-Blooming Lotus) open exclusively under the moonlight.",
        "Daylight brings out traveling supply caravans along the Gold Road and King's Road."
      ]
    },
    {
      "id": "WanderingBosses",
      "name": "Roaming Wilderness Terrors",
      "status": "Active",
      "description": "Massive, un-instanced zone bosses that patrol entire regions and require spontaneous multi-group collaboration.",
      "features": [
        "A towering Centaur Chieftain patrolling the length of the Barrens, challenging caravans and low-level settlements.",
        "An Ancient Stone Colossus wandering the mountain crests of the Hinterlands.",
        "Roaming world terrors drop zone-appropriate rare and epic loot, fostering impromptu cross-guild cooperation."
      ]
    },
    {
      "id": "TavernRest",
      "name": "Tavern Sanctuary Bonuses",
      "status": "Active",
      "description": "Strengthens taverns as the premier social hubs of the old world.",
      "features": [
        "Resting inside a physical tavern yields 100% faster Rested XP accumulation than standing in open city streets.",
        "Sitting at tavern tables and consuming inn-specific hearty meals grants a 1-hour spirit and stamina nourishment buff."
      ]
    }
  ],
  "Quality of Life & Interface": [
    {
      "id": "GuildBanks",
      "name": "Multi-Tab Guild Vaults",
      "status": "Active",
      "description": "Native, permission-managed guild banks integrated into capital city bank buildings.",
      "features": [
        "Detailed transaction logs tracking deposits, withdrawals, and officer permissions.",
        "Purchasable storage tabs funded through collective guild gold contributions.",
        "Replaces unwieldy 'bank-alt' accounts while maintaining economic transparency."
      ]
    },
    {
      "id": "DualSpec",
      "name": "Dual Specialization (Economy Balanced)",
      "status": "Active",
      "description": "Allows players to configure two distinct talent and action bar builds, bounded to protect spec identity and server economy.",
      "features": [
        "Available at Level 60 for a 500g one-time training investment at your class trainer.",
        "Can ONLY be swapped inside designated Rest Areas (taverns and capital cities) with a 5-second channel.",
        "Swapping specs consumes a minor rest reagent (Tome of Resonating Will) to preserve long-term gold sink velocity.",
        "Action bars, keybinds, and stance configurations save independently for each specialization."
      ]
    },
    {
      "id": "DismountOnCast",
      "name": "Auto-Dismount on Action",
      "status": "Active",
      "description": "Casting any spell, engaging an ability, or interacting with NPCs automatically dismounts your character.",
      "features": [
        "Eliminates the need for cumbersome '/dismount' macros across all class abilities.",
        "Maintains standard mounted movement speed and dismount combat rules."
      ]
    },
    {
      "id": "LFGTool",
      "name": "Notice Board LFG (Non-Automated)",
      "status": "Active",
      "description": "A classic town bulletin board interface for manual group listings without automated matchmaking or teleportation.",
      "features": [
        "Players post manual party listings and custom descriptions for dungeons, elite quests, and world bosses.",
        "No automated matchmaking, no cross-realm phasing, and NO dungeon teleportation—players must still travel to the dungeon summoning stone or portal."
      ]
    },
    {
      "id": "KeyringExpansion",
      "name": "Dedicated Master Keyring",
      "status": "Active",
      "description": "A dedicated, scalable keyring bag slot that houses every key, sceptre, and lockbox mechanism in the game.",
      "features": [
        "Automatically expands as you acquire keys (Skeleton Key, Shadowforge Key, Scarlet Key, Crescent Key, Workshop Key).",
        "Frees up critical main inventory space without removing the physical necessity of carrying dungeon keys."
      ]
    }
  ],
  "Economy & Gold Sinks": [
    {
      "id": "GoldSinks",
      "name": "Prestigious Endgame Gold Sinks",
      "status": "Active",
      "description": "High-cost cosmetic, guild, and prestige rewards designed to curb endgame currency inflation naturally.",
      "features": [
        "Rare decorative heraldry and prestigious character titles (e.g., 'The Aristocrat' for 5,000g).",
        "Unique luxury ground mounts with ornate armor bards sold by capital city quartermasters (1,000g).",
        "Guild Vault Tab 5 & 6 unlocks (2,500g and 5,000g) funded by guild progression."
      ]
    },
    {
      "id": "VendorBuyback",
      "name": "Expanded Vendor Buyback",
      "status": "Active",
      "description": "Generous vendor buyback buffer to safeguard against accidental item sales.",
      "features": [
        "Buyback history expanded to 20 recent items.",
        "Persists across character logouts for up to 24 hours."
      ]
    },
    {
      "id": "AHDepositFees",
      "name": "Tiered AH Deposit Scaling",
      "status": "Active",
      "description": "Adjusted deposit fees to incentivize a healthy auction economy for low-level trade goods and crafted gear.",
      "features": [
        "Reduces punitive deposit fees on slow-moving leveling greens and intermediate crafted armor.",
        "Maintains full deposit requirements on high-velocity raw materials and raid consumables."
      ]
    }
  ],
  "Immersion & World Permanence": [
    {
      "id": "SittingAnimations",
      "name": "Interactive Seating Animations",
      "status": "Active",
      "description": "Proper, grounded character seating for tavern chairs, benches, and camp logs.",
      "features": [
        "Right-clicking a chair seats the character properly on the furniture rather than hovering.",
        "Full support for all playable races and gender models."
      ]
    },
    {
      "id": "Campfires",
      "name": "Functional Rest Campfires",
      "status": "Active",
      "description": "Cooking and wilderness campfires provide restorative warmth to resting travelers.",
      "features": [
        "Sitting near an active campfire grants the 'Warmth of the Embers' buff, accelerating health and spirit regeneration.",
        "Encourages players to rest together during long wilderness leveling treks."
      ]
    },
    {
      "id": "GuildTabardCapes",
      "name": "Guild Heraldry Capes",
      "status": "Active",
      "description": "Optionally display your guild crest directly on high-ranking cloaks.",
      "features": [
        "Allows guild officers to purchase tabard-embroidered cloaks matching their guild colors.",
        "Strengthens guild cohesion during open-world skirmishes and city gatherings."
      ]
    },
    {
      "id": "TitlesForFeats",
      "name": "Exploration & World Prestige Titles",
      "status": "Active",
      "description": "Groundbreaking prestige titles awarded for monumental world feats and reputation mastery.",
      "features": [
        "'The Explorer' awarded for fully unveiling every territory across the Eastern Kingdoms and Kalimdor.",
        "'The Diplomat' awarded for reaching Exalted with all home capital factions and neutral cartels."
      ]
    }
  ]
};
