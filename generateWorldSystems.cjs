const fs = require('fs');

const SYSTEM_CATEGORIES = {
  WORLD_DESIGN: 'World Design',
  QUALITY_OF_LIFE: 'Quality of Life',
  ECONOMY: 'Economy & Gold',
  IMMERSION: 'Immersion & Roleplay'
};

const systems = {
  [SYSTEM_CATEGORIES.WORLD_DESIGN]: [
    {
      id: 'DynamicWeather',
      name: 'Dynamic Weather Effects',
      status: 'Active',
      description: 'Weather now actively impacts combat and gameplay mechanics globally.',
      features: [
        'Rain reduces fire damage taken by 1%.',
        'Snowstorms reduce visibility for ranged attackers.',
        'Sandstorms in Silithus occasionally unearth rare buried chests.'
      ]
    },
    {
      id: 'DayNightCycle',
      name: 'Day/Night Cycle Spawns',
      status: 'Active',
      description: 'The time of day on the server directly affects what you encounter in the open world.',
      features: [
        'Certain rare spawns only appear at midnight server time.',
        'Vampiric bats in Tirisfal hit 10% harder during the night.',
        'Daylight brings out specific merchant caravans.'
      ]
    },
    {
      id: 'WanderingBosses',
      name: 'Wandering Bosses',
      status: 'Active',
      description: 'Massive, roaming world bosses that require entire zones to collaborate to defeat.',
      features: [
        'A massive Fel Reaver-style centaur boss that patrols across the Barrens.',
        'An Ancient stone giant that roams the Hinterlands.',
        'They drop zone-specific epic loot and cannot be soloed.'
      ]
    },
    {
      id: 'TavernRest',
      name: 'Tavern Rest Bonuses',
      status: 'Active',
      description: 'Makes the inside of taverns specifically more valuable than just standing in a city.',
      features: [
        'Resting in a tavern grants double rested XP compared to just being in a city.',
        'Taverns now feature unique buffs for sitting and eating their specific food.'
      ]
    },
    {
      id: 'PlayerHousing',
      name: 'Player Housing',
      status: 'Active',
      description: 'Instanced housing integrated seamlessly into the capital cities.',
      features: [
        'Purchase apartments in Stormwind, Orgrimmar, or Ironforge.',
        'Decorate with trophies earned from raids and PvP.',
        'Invite friends and guildmates to your instance.'
      ]
    }
  ],
  [SYSTEM_CATEGORIES.QUALITY_OF_LIFE]: [
    {
      id: 'GuildBanks',
      name: 'Multi-Tab Guild Banks',
      status: 'Active',
      description: 'Proper, native guild banks with permission systems.',
      features: [
        'Log tracking for deposits and withdrawals.',
        'Multiple tabs purchasable with guild funds.',
        'Replaces the old "bank alt" meta.'
      ]
    },
    {
      id: 'DualSpec',
      name: 'Dual Specialization',
      status: 'Active',
      description: 'Swap between two pre-configured talent builds.',
      features: [
        'Costs 50g to unlock at level 40.',
        'Only usable in rest areas (cities/taverns).',
        'Action bars save independently for each spec.'
      ]
    },
    {
      id: 'AoELooting',
      name: 'AoE Looting',
      status: 'Active',
      description: 'Shift-click to loot all nearby corpses simultaneously.',
      features: [
        'Massively speeds up farming and dungeon clears.',
        'Still respects group loot and master looter rules.'
      ]
    },
    {
      id: 'InstantMail',
      name: 'Instant Alt Mail',
      status: 'Active',
      description: 'Mail sent between characters on the same account arrives instantly.',
      features: [
        'No more waiting 1 hour to send bags to a new alt.',
        'Works for items and gold.'
      ]
    },
    {
      id: 'DismountOnCast',
      name: 'Auto-Dismount on Cast',
      status: 'Active',
      description: 'Attempting to cast a spell or use an item automatically dismounts you.',
      features: [
        'Removes the need for bulky dismount macros.'
      ]
    },
    {
      id: 'ReagentBank',
      name: 'Reagent Bank Tab',
      status: 'Active',
      description: 'A dedicated bank tab specifically for crafting materials.',
      features: [
        'Auto-deposit all reagents with one click.',
        'Craft directly from the reagent bank.'
      ]
    },
    {
      id: 'BagSorting',
      name: 'Native Bag Sorting',
      status: 'Active',
      description: 'A native button to auto-sort your inventory.',
      features: [
        'Sorts by quality, type, and equipment slot.',
        'Can ignore specific bags (like soul shard bags).'
      ]
    },
    {
      id: 'LFGTool',
      name: 'Bulletin-Board LFG',
      status: 'Active',
      description: 'A bulletin-board style LFG tool (NOT automated matchmaking, just listing).',
      features: [
        'List your group and requirements.',
        'Players apply manually and you invite them.',
        'Preserves the social aspect of group formation.'
      ]
    },
    {
      id: 'KeyringExpansion',
      name: 'Infinite Keyring',
      status: 'Active',
      description: 'Ensure the keyring can hold every single key in the game.',
      features: [
        'No more destroying keys to make room.',
        'Automatically expands as you collect keys.'
      ]
    },
    {
      id: 'Transmogrification',
      name: 'Classic Transmogrification',
      status: 'Active',
      description: 'Allow altering the appearance of gear with strict limits to preserve the Classic silhouette.',
      features: [
        'Plate can only be mogged to Plate, Cloth to Cloth.',
        'Legendaries and silly items (e.g., Fish) cannot be transmogged.',
        'Preserves the grounded, low-fantasy aesthetic while allowing customization.'
      ]
    }
  ],
  [SYSTEM_CATEGORIES.ECONOMY]: [
    {
      id: 'GoldSinks',
      name: 'Massive Gold Sinks',
      status: 'Active',
      description: 'Introduce prestigious items to pull gold out of the inflated economy.',
      features: [
        'A 10,000g title: "The Aristocrat".',
        'Unique 5,000g ground mounts.'
      ]
    },
    {
      id: 'StackSizes',
      name: 'Increased Stack Sizes',
      status: 'Active',
      description: 'Increase standard stack sizes to save bank space.',
      features: [
        'Potions and herbs stack to 100.',
        'Ores and bars stack to 100.'
      ]
    },
    {
      id: 'BindOnAccountRep',
      name: 'BoA Reputation Tokens',
      status: 'Active',
      description: 'Allow reputation tokens to be mailed to alts.',
      features: [
        'Argent Dawn Valor Tokens and Cenarion Badges can be sent to alts.',
        'Makes playing multiple characters much more viable.'
      ]
    },
    {
      id: 'VendorBuyback',
      name: 'Expanded Vendor Buyback',
      status: 'Active',
      description: 'Increase the vendor buyback history.',
      features: [
        'Buyback history expanded to 20 items.',
        'Persists through logout (for 24 hours).'
      ]
    },
    {
      id: 'AHDepositFees',
      name: 'Scaled AH Deposit Fees',
      status: 'Active',
      description: 'Scale down deposit fees for extremely slow-selling items like transmog greens.',
      features: [
        'Encourages a healthier market for leveling gear.',
        'High-velocity items (materials) retain normal fees.'
      ]
    }
  ],
  [SYSTEM_CATEGORIES.IMMERSION]: [
    {
      id: 'SittingAnimations',
      name: 'Proper Sitting Animations',
      status: 'Active',
      description: 'Introduce proper sitting animations for chairs in taverns.',
      features: [
        'Characters actually sit in the chairs instead of hovering above them.',
        'Supports all races and genders.'
      ]
    },
    {
      id: 'Campfires',
      name: 'Functional Campfires',
      status: 'Active',
      description: 'Players can actually sit around a campfire to slowly restore health.',
      features: [
        'Provides a small "Warmth" buff that increases spirit.',
        'Cooking fires become social hubs.'
      ]
    },
    {
      id: 'Instruments',
      name: 'Playable Instruments',
      status: 'Active',
      description: 'Playable lutes and flutes that emit actual MIDI sounds.',
      features: [
        'Use the number pad to play notes.',
        'Gather crowds in capital cities.'
      ]
    },
    {
      id: 'GuildTabardCapes',
      name: 'Guild Tabard Capes',
      status: 'Active',
      description: 'Allow applying the guild tabard design to capes.',
      features: [
        'Show off your guild pride on your back.',
        'Automatically matches your guild\'s heraldry.'
      ]
    },
    {
      id: 'TitlesForFeats',
      name: 'Titles for Exploration',
      status: 'Active',
      description: 'Titles for massive feats of exploration and dedication.',
      features: [
        '"The Explorer" for revealing every map in the game.',
        '"The Insane" for grinding out hostile reputations.'
      ]
    }
  ]
};

let output = '// AUTO-GENERATED WORLD SYSTEMS CONTENT\n\n';

output += 'export const SYSTEM_CATEGORIES = {\n';
for (const [key, val] of Object.entries(SYSTEM_CATEGORIES)) {
  output += `  ${key}: '${val}',\n`;
}
output += '};\n\n';

output += 'export interface WorldSystem {\n';
output += '  id: string;\n';
output += '  name: string;\n';
output += '  status: string;\n';
output += '  description: string;\n';
output += '  features: string[];\n';
output += '}\n\n';

output += 'export const worldSystemsData: Record<string, WorldSystem[]> = ';
output += JSON.stringify(systems, null, 2);
output += ';\n';

fs.writeFileSync('./src/data/worldSystemsData.ts', output);
console.log('Successfully wrote worldSystemsData.ts');
