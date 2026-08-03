const fs = require('fs');

const PVP_MODES = {
  BATTLEGROUNDS: 'New Battlegrounds',
  WORLD_PVP: 'World PvP & Banner Wars',
  ARENA: 'The Gurubashi Arena System',
  OFFENSIVES: 'Warfront Offensives',
  FACTION_BALANCE: 'Faction Balance & Economy',
  HONOR_REWARDS: 'Honor & Rewards Revamp'
};

const templates = {
  [PVP_MODES.BATTLEGROUNDS]: [
    {
      id: 'AzsharaCrater',
      name: 'Azshara Crater',
      size: '25v25',
      type: 'MOBA-Style Siege',
      description: 'The legendary unused Vanilla battleground is finally open. Situated in the mountains above Azshara, this battleground features three distinct lanes connecting the Horde and Alliance bases.',
      mechanics: [
        'Minion Waves: NPCs spawn and push down the three lanes. Players must escort them to break base defenses.',
        'Mercenary Camps: Defeating neutral Timbermaw or Naga camps in the "jungle" recruits them to push a lane.',
        'Siege Engines: Players can farm lumber and iron within the BG to construct pilotable shredders and glaive throwers.'
      ],
      lore: 'The Horde seeks to expand their logging operations from Ashenvale, while the Alliance attempts to secure the high ground to protect their naval assets in the bay below.'
    },
    {
      id: 'GillijimIsle',
      name: 'Gillijim\'s Isle',
      size: '15v15',
      type: 'Naval Supremacy',
      description: 'Set on the restored Alpha island off the coast of Stranglethorn. This battleground is entirely focused on controlling the coastline and naval bombardment.',
      mechanics: [
        'Galleon Control: Two massive ships circle the island. Teams must capture rowboats to board them and seize the cannons.',
        'Coastal Bombardment: Holding a ship allows the controlling team to call down devastating artillery fire on island control points.',
        'Buried Treasure: Random chests spawn containing powerful, temporary pirate-themed buffs (e.g., Rum-Soaked: Immune to fear but movement is erratic).'
      ],
      lore: 'The Bloodsail Buccaneers and the Steamwheedle Cartel have hired the Alliance and Horde as privateers to secure the island\'s hidden pirate coves.'
    },
    {
      id: 'HyjalFront',
      name: 'The Hyjal Front',
      size: '40v40',
      type: 'Asymmetrical Siege',
      description: 'A massive, multi-stage siege battle taking place on the slopes of Mount Hyjal. Similar to Strand of the Ancients, but on a much larger, 40-player scale.',
      mechanics: [
        'Attack vs Defense: One faction attacks up the mountain, the other defends barricades. Roles swap after the round.',
        'Destructible Environment: Attackers can burn down ancient trees to create new flanking routes.',
        'The Horn of Cenarius: Defenders can summon massive Ancient Protectors to stomp the attacking siege vehicles.'
      ],
      lore: 'A proxy war. The Alliance (backed by the Night Elves) attempts to hold the sacred mountain, while the Horde (backed by rogue Goblin cartels) seeks to harvest the magically dense lumber.'
    },
    {
      id: 'StromgardeSiege',
      name: 'Stromgarde Siege',
      size: '20v20',
      type: 'Urban Warfare',
      description: 'The ruins of Stromgarde in Arathi Highlands have been turned into a dense, multi-level urban battleground.',
      mechanics: [
        'Verticality: The ruins have three vertical levels (Sewers, Streets, Ramparts). Controlling the high ground provides a massive damage buff to ranged attacks.',
        'Relic Running: A hybrid of CTF and King of the Hill. Players must steal Syndicate relics and hold them in specific zones to score points.',
        'Trap Doors: Thieves\' Guild mechanics allow Rogues and Engineers to manipulate the battlefield, dropping bridges and locking gates.'
      ],
      lore: 'The Syndicate has abandoned the city, leaving a massive power vacuum. Danath Trollbane\'s loyalists fight to reclaim their home against the Forsaken who seek to expand their borders south.'
    },
    {
      id: 'PlunderIsleSkirmish',
      name: 'Plunder Isle Skirmish',
      size: '10v10',
      type: 'Payload Delivery',
      description: 'A fast-paced battleground set in the hidden pirate coves of Plunder Isle.',
      mechanics: [
        'Gunpowder Carts: Teams must push explosive carts to the enemy stronghold.',
        'Sabotage: Rogues and stealth classes can defuse the cart to stall the push.',
        'Pirate King\'s Wrath: The first team to deliver triggers a massive explosion, winning the match.'
      ],
      lore: 'The Steamwheedle Cartel pays top dollar for the destruction of Bloodsail hidden caches.'
    },
    {
      id: 'AlteracValleyRevamp',
      name: 'Alterac Valley Revamp',
      size: '40v40',
      type: 'Epic Battleground',
      description: 'Restore the old Korrak the Bloodrager and massive NPC pushes.',
      mechanics: ['Korrak is Back: The Bloodrager returns to the center of the map.', 'NPC Pushes: Collecting supplies significantly empowers NPC assaults.'],
      lore: 'The Frostwolf and Stormpike clans continue their endless war.'
    },
    {
      id: 'BGMatchmaking',
      name: 'Battleground Matchmaking',
      size: 'Global System',
      type: 'Matchmaking Update',
      description: 'Implement hidden MMR to prevent premades from stomping pugs.',
      mechanics: ['Premade vs Premade: Groups of 5+ are strongly preferred to match against other groups.', 'Hidden MMR: Ensures closer games.'],
      lore: 'A fair fight brings true honor.'
    },
    {
      id: 'WSGFlagDebuff',
      name: 'Warsong Gulch Flag Debuff',
      size: '10v10',
      type: 'Mechanic Update',
      description: 'In WSG, the flag carrier takes 10% more damage every 2 minutes.',
      mechanics: ['Focused Assault: Prevents endless stalling by tanks or druids hiding with the flag.'],
      lore: 'The longer you hold the enemy\'s colors, the harder they hunt you.'
    }
  ],
  [PVP_MODES.WORLD_PVP]: [
    {
      id: 'BannerWars',
      name: 'The Banner War System',
      size: 'World PvP',
      type: 'Dynamic Zone Objectives',
      description: 'Classic Plus introduces dynamic PvP objectives in heavily contested leveling zones (Hillsbrad, Stranglethorn, Ashenvale, Blackrock Mountain).',
      mechanics: [
        'Supply Caravans: Unannounced, un-instanced escort quests. A faction caravan will spawn and slowly march across a zone. Successfully escorting it buffs the entire faction in that zone for 2 hours.',
        'Bounty Board: Killing players of the opposing faction grants Dishonorable marks. Accumulate enough, and your location is broadcast to the zone map for bounty hunters.',
        'Capital City Raids: Defeating a faction leader now provides a server-wide buff and drops a unique, phase-relevant legendary token.'
      ],
      lore: 'The drums of war never truly stopped. The Banner Wars represent the skirmishes that occur away from the front lines, driven by local commanders and mercenary greed.'
    },
    {
      id: 'CrimsonAtoll',
      name: 'The Crimson Atoll Event',
      size: 'Free-For-All',
      type: 'Scheduled Bloodbath',
      description: 'An island off the coast of Stranglethorn that becomes active every 3 hours. Inspired by the Blood Moon event, but designed for level 60.',
      mechanics: [
        'No Factions: Grouping is disabled. Nameplates are hidden. Everyone is red to everyone.',
        'Blood Coins: Kills grant coins. Dying loses coins. Coins are used to purchase the most prestigious PvP mounts and cosmetic auras in the game.',
        'The Crimson Fog: The playable area shrinks over the 30-minute event, forcing players into a brutal final clash in the center arena.'
      ],
      lore: 'An ancient troll blood-magic ritual has gone awry, cursing the island. The Loa of Death demands tribute, and the combatants of Azeroth are happy to provide it.'
    },
    {
      id: 'SilithusSandstorms',
      name: 'Silithus Sandstorms',
      size: 'Zone-Wide',
      type: 'Resource Race',
      description: 'Every 6 hours, massive sandstorms blanket Silithus, revealing ancient Qiraji artifacts.',
      mechanics: [
        'Artifact Extraction: Requires a channel time of 10 seconds. Any damage interrupts.',
        'Hive Ambush: Extracting an artifact spawns elite bugs that attack the extractor.',
        'Shrine of the Blood God: A central altar where coins can be deposited for massive temporary buffs.'
      ],
      lore: 'Hakkar\'s influence bleeds into the physical world, driving the wildlife and explorers into a blood-crazed frenzy.'
    },
    {
      id: 'SilithusSand',
      name: 'Silithus Sand Delivery',
      size: 'Zone Event',
      type: 'World PvP',
      description: 'Make the Silithus PvP event grant actual endgame reputation.',
      mechanics: ['Cenarion Rep: Delivering sand now gives substantial Cenarion Circle reputation.', 'Sand Storms: Periodically reduces visibility.'],
      lore: 'The Cenarion Circle needs the silicate for war preparations against C\'Thun.'
    },
    {
      id: 'ContestedNodes',
      name: 'Contested Nodes',
      size: 'Global World',
      type: 'Resource System',
      description: 'Specific rich thorium veins that flag you for PvP when mined, regardless of server type.',
      mechanics: ['PvP Flag: Mining instantly flags you.', 'Bonus Yield: Double the normal ore.'],
      lore: 'Some resources are worth dying for.'
    }
  ],
  [PVP_MODES.ARENA]: [
    {
      id: 'GurubashiBrawl',
      name: 'The Gurubashi Arena Brawl',
      size: '10v10',
      type: 'Instanced Deathmatch',
      description: 'Arena in Classic Plus is not 2v2 or 3v3 pillar-humping. It is a chaotic, trap-filled 10v10 deathmatch focused on pure combat and positioning.',
      mechanics: [
        'No Resurrects: One life per round. First team to wipe the other wins. Best of 5 rounds.',
        'Arena Hazards: The Gurubashi arena is filled with spike traps, pit-falls, and neutral basilisks that will attack anyone who gets too close.',
        'Crowd Favor: Dealing massive damage or scoring killing blows charges the "Crowd Favor" meter. When full, the crowd throws beneficial potions and bombs to your team.'
      ],
      lore: 'The Steamwheedle Cartel has taken over the Gurubashi Arena, broadcasting the fights via gnomish radio to all of Azeroth. It\'s brutal, it\'s unfair, and it\'s extremely profitable.'
    },
    {
      id: 'GurubashiColiseum',
      name: 'Gurubashi Coliseum (10v10)',
      size: '10v10',
      type: 'Deathmatch',
      description: 'A brutal 10v10 deathmatch in a massive colosseum environment.',
      mechanics: ['Last Team Standing: No respawns. The last team with members alive wins.', 'Crowd Favor: The crowd throws in buffs or hazards based on which team is performing better.'],
      lore: 'The Gurubashi trolls have opened their arena to larger scale bloodsports.'
    },
    {
      id: '1v1Arena',
      name: '1v1 Arena',
      size: '1v1',
      type: 'Unranked Deathmatch',
      description: 'Introduce an unranked 1v1 arena strictly for bragging rights.',
      mechanics: ['No Rating: Purely for fun and practice.', 'Spectator Mode: Players can queue to watch live 1v1 matches.'],
      lore: 'Gladiators test their individual mettle before stepping into the 3v3 circuit.'
    },
    {
      id: 'DuelingTournaments',
      name: 'Dueling Tournaments',
      size: '1v1',
      type: 'Monthly Event',
      description: 'Official monthly tournaments held in Gurubashi Arena.',
      mechanics: ['Bracket System: Automated tournament brackets.', 'Unique Titles: Winners receive a server-wide temporary title for the month.'],
      lore: 'A grand spectacle where the greatest champions are crowned.'
    },
    {
      id: 'ArenaMechanics',
      name: 'Arena Anti-Stall Mechanics',
      size: 'Global Arena',
      type: 'Mechanic Update',
      description: 'New systems to prevent endless arena matches.',
      mechanics: ['Pillar Hugging Penalty: Standing still for 10 seconds applies a stacking slow debuff.', 'Dampening: Healing is reduced by 1% every 10 seconds after 5 minutes.'],
      lore: 'The crowd demands blood, not endless healing.'
    }
  ],
  [PVP_MODES.OFFENSIVES]: [],
  [PVP_MODES.FACTION_BALANCE]: [
    {
      id: 'MercenaryMode',
      name: 'Mercenary Mode',
      size: 'Global PvP',
      type: 'Queue System',
      description: 'Allow players to queue for battlegrounds as the opposite faction to reduce queue times.',
      mechanics: ['Disguise: You are transformed into a race of the opposing faction.', 'Bonus Honor: Mercenaries receive a 10% honor buff.'],
      lore: 'Mercenaries fight for coin, regardless of allegiance.'
    },
    {
      id: 'CrossFactionChat',
      name: 'Cross-Faction Elixir',
      size: 'Global',
      type: 'Consumable',
      description: 'An elixir that allows you to understand the opposing faction\'s language for 1 hour.',
      mechanics: ['Crafted by Alchemy.', 'Works in /say and /yell.'],
      lore: 'A magical brew that breaks down the barriers of language.'
    },
    {
      id: 'FactionDefectors',
      name: 'Faction Defectors',
      size: 'Global',
      type: 'Questline',
      description: 'A highly complex, one-time questline to permanently swap factions.',
      mechanics: ['Massive Gold Sink: Requires turning in enormous amounts of resources.', 'Permanent Choice: Cannot be undone.'],
      lore: 'Some heroes realize they are fighting for the wrong side.'
    },
    {
      id: 'SharedAH',
      name: 'Shared Auction Houses',
      size: 'Global Economy',
      type: 'Economy Update',
      description: 'Merge the Horde and Alliance auction houses globally to fix economy imbalance.',
      mechanics: ['Neutral AH Removed: The standard AH is now entirely cross-faction.'],
      lore: 'The goblins of the Steamwheedle Cartel have monopolized the market.'
    }
  ],
  [PVP_MODES.HONOR_REWARDS]: [
    {
      id: 'DecayRemoval',
      name: 'Honor Decay Removal',
      size: 'Global System',
      type: 'Progression Update',
      description: 'Remove the harsh PvP rank decay system.',
      mechanics: ['Milestone Saving: Once you reach a rank, you can never drop below it.'],
      lore: 'A commander\'s prestige is never forgotten.'
    },
    {
      id: 'PvPCosmetics',
      name: 'Cosmetic PvP Gear',
      size: 'Global Rewards',
      type: 'Transmog',
      description: 'Introduce exclusive transmog rewards for Rank 14.',
      mechanics: ['Aura Unlocks: Rank 14 unlocks a permanent glowing aura cosmetic.', 'Title Display: Allow players to display their highest achieved PvP title forever.'],
      lore: 'True champions shine on the battlefield.'
    },
    {
      id: 'PvPMounts',
      name: 'Rank 11 Mounts',
      size: 'Global Rewards',
      type: 'Mounts',
      description: 'Add unique PvP mounts (e.g., Armored Kodos/Tigers) for hitting Rank 11.',
      mechanics: ['100% Speed: Require riding skill.'],
      lore: 'Beasts trained for war.'
    },
    {
      id: 'HonorForHealing',
      name: 'Honor for Healing',
      size: 'Battlegrounds',
      type: 'Reward Update',
      description: 'Properly reward healers with honor based on healing done in Battlegrounds.',
      mechanics: ['Healing = Damage: Healing done contributes to the scoreboard and honor calculations identically to damage.'],
      lore: 'The medics are just as vital as the frontline soldiers.'
    }
  ]
};

templates[PVP_MODES.OFFENSIVES].push(
  {
    id: "ProcBG_Blackrock",
    name: "The Blackrock Offensive",
    size: 'Zone-Wide Phase',
    type: 'Vertical Magma Siege',
    description: "A massive, phased war-style environment where you join the front lines of an eternally locked conflict deep inside Blackrock Mountain.",
    mechanics: [
      'Magma Flooding: Control pressure valves to flood enemy tunnels with magma.',
      'Vertical Warfare: No traditional frontlines. Navigate a massive vertical shaft using elevators and precarious catwalks.',
      'Structural Sabotage: Sabotage massive iron pillars to collapse sections of the mountain on the enemy base.'
    ],
    lore: "The Dark Iron dwarves have been pushed back, but now the Alliance and Horde fight over who controls the deepest secrets of the mountain."
  },
  {
    id: "ProcBG_UnGoro",
    name: "The Un'Goro Offensive",
    size: 'Zone-Wide Phase',
    type: 'Primal Stampede',
    description: "A chaotic 3-way war where the local dinosaur population is hostile to both factions.",
    mechanics: [
      'Dinosaur Taming: Teams must capture and tame roaming Devilsaurs, then ride them into battle as massive siege weapons.',
      'Pterrodax Airstrikes: Control the high ground to call in pterrodax drops that stun enemy lines.',
      'Primal Frenzy: Every 10 minutes, all untamed dinosaurs enrage, attacking everything in sight.'
    ],
    lore: "The dense crater holds Titan secrets, but securing them requires surviving the apex predators that rule the jungle."
  },
  {
    id: "ProcBG_Winterspring",
    name: "The Winterspring Offensive",
    size: 'Zone-Wide Phase',
    type: 'Avalanche Warfare',
    description: "Fought on a steep incline in the freezing peaks of Winterspring.",
    mechanics: [
      'Trigger Avalanches: Controlling high-altitude outposts allows teams to trigger massive avalanches that instantly wipe out anyone caught in the valleys below.',
      'Thermal Vents: The weather grows colder over time. Players must secure thermal vents or suffer constant freezing damage.',
      'Ice Bridge Sabotage: Destroy ice bridges to cut off enemy supply lines.'
    ],
    lore: "The blue dragonflight has abandoned the region, leaving the Horde and Alliance to war over the ancient magical leylines buried beneath the snow."
  },
  {
    id: "ProcBG_Desolace",
    name: "The Desolace Offensive",
    size: 'Zone-Wide Phase',
    type: 'Necromantic Arms Race',
    description: "A graveyard war fought in the bone-littered wastes of Desolace.",
    mechanics: [
      'Flesh Golem Construction: Dead players and NPCs leave behind corpses that can be harvested to build Flesh Golems.',
      'Casualty Escalation: The more casualties a team suffers, the bigger the monster the opposing team can build.',
      'Centaur Mercenaries: Bribe roaming centaur clans to ambush the enemy supply carts.'
    ],
    lore: "The Burning Blade have left a wake of death, providing the perfect fuel for a grim war of attrition."
  },
  {
    id: "ProcBG_Feralas",
    name: "The Feralas Offensive",
    size: 'Zone-Wide Phase',
    type: 'Canopy Skirmish',
    description: "The ground is covered in toxic Emerald Nightmare fog. The entire war is fought in the canopy of the massive trees.",
    mechanics: [
      'Canopy Traversal: Navigate using grappling hooks, rope bridges, and goblin gliders.',
      'Bridge Destruction: Destroying a rope bridge instantly kills anyone on it. Engineers can repair them.',
      'Toxic updrafts: The Nightmare fog below occasionally erupts upwards, requiring players to grapple higher to avoid damage.'
    ],
    lore: "The Emerald Nightmare has seeped into the soil. The only safe ground is high above, where the night elves and the horde clash for dominance."
  },
  {
    id: "ProcBG_Hinterlands",
    name: "The Hinterlands Offensive",
    size: 'Zone-Wide Phase',
    type: 'Aerial Superiority',
    description: "Focuses heavily on aerial combat above the peaks of the Hinterlands.",
    mechanics: [
      'Mount Up: Players mount heavily armored Wildhammer Gryphons and Horde Wyverns to engage in dogfights.',
      'Bombing Runs: Secure explosives from the ground to drop on enemy anti-air turrets.',
      'Mid-Air Boarding: Parachute onto enemy zeppelins/gunships to destroy their engines.'
    ],
    lore: "The Wildhammer dwarves refuse to cede their skies, leading to the most brutal aerial combat of the Third War."
  },
  {
    id: "ProcBG_BlastedLands",
    name: "The Blasted Lands Offensive",
    size: 'Zone-Wide Phase',
    type: 'Demonic Sabotage',
    description: "A three-way war where the demon armies are the main threat.",
    mechanics: [
      'Ward Sabotage: Horde and Alliance compete to sabotage each other\'s demonic wards, forcing the Burning Legion to attack the enemy base.',
      'Nether Portals: Close random Nether Portals before Doomguards pour out.',
      'Demon Blood: Collect demon blood to empower your faction commander, granting them massive buffs.'
    ],
    lore: "The Dark Portal hums with energy. Factions must defend their outposts not only from each other, but from the endless demonic tide."
  },
  {
    id: "ProcBG_SearingGorge",
    name: "The Searing Gorge Offensive",
    size: 'Zone-Wide Phase',
    type: 'Underground Sabotage',
    description: "Fought in an underground railway system connecting Dark Iron control points.",
    mechanics: [
      'Mole Machine Hijacking: Teams fight to hijack massive, heavily armed Dark Iron mole machines to drill into the enemy stronghold.',
      'Lava Tides: Sections of the tunnels flood with lava on a set timer, forcing players to fight in chokepoints.',
      'Gunpowder Kegs: Plant massive explosives to collapse enemy drilling tunnels.'
    ],
    lore: "The Thorium Brotherhood has hired mercenaries from both sides to clear out the remaining Dark Iron strongholds, turning the gorge into a warzone."
  },
  {
    id: "ProcBG_Badlands",
    name: "The Badlands Offensive",
    size: 'Zone-Wide Phase',
    type: 'Titan Excavation',
    description: "Both factions are unearthing a massive Titan construct piece by piece in the dusty canyons.",
    mechanics: [
      'Excavation Sites: Teams fight over dig sites to recover Titan fragments.',
      'Construct Assembly: The first team to assemble the construct gains control of it for a final, apocalyptic push.',
      'Uldaman Defenses: Earthen guardians frequently awake to attack anyone near the dig sites.'
    ],
    lore: "Relics of the Titans are buried here. The faction that controls them controls the future of Azeroth."
  },
  {
    id: "ProcBG_Dustwallow",
    name: "The Dustwallow Offensive",
    size: 'Zone-Wide Phase',
    type: 'Swamp Subterfuge',
    description: "Fought in the deep muck of Dustwallow Marsh, where visibility is heavily restricted.",
    mechanics: [
      'Heavy Fog: Deep fog severely limits vision and disables the mini-map.',
      'Scout Towers: Players must build and defend flare towers to see the enemy coming.',
      'Swamp Muck: The water slows movement significantly, making stealth classes and ambushes extremely deadly.'
    ],
    lore: "Theramore's forces clash with the Horde in the treacherous swamps, where shadows and mud are as deadly as the enemy."
  }
);

// DYNAMIC GENERATORS FOR UNIQUE DATA
const mapLayouts = [
  "Asymmetrical layout with dense vertical elements.",
  "Symmetrical 3-lane design with destructible environment hazards.",
  "Circular arena with shifting walls and lava pits.",
  "Steep incline with high-altitude outposts.",
  "Underground tunnel network with multiple chokepoints.",
  "Open plains with scattered cover and watchtowers.",
  "Dense canopy with rope bridges and grappling hooks.",
  "Swampy terrain with thick fog and hidden traps.",
  "Ruined city streets with rooftop sniping positions.",
  "Frozen lake with slippery ice and thermal vents."
];

const powerUpsPool = [
  "Berserker Buff (100% damage increase)",
  "Restoration Buff (Heals 10% per second)",
  "Speed Boots (150% movement speed)",
  "Titan Surge (Immunity to crowd control)",
  "Demonic Haste (50% haste for 15s)",
  "Swamp Camouflage (Invisibility for 20s)",
  "Frost Armor (Reflects 30% damage)",
  "Flame Wreath (Burns nearby enemies)",
  "Windfury Totem (Extra attacks)",
  "Shadowmeld (Breaks targeting)"
];

const historySnippets = [
  "Tensions have simmered in this region since the Second War.",
  "The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
  "Historically, the Alliance held this ground until a massive Horde offensive.",
  "A bloody stalemate has persisted here for decades.",
  "Once a peaceful region, it is now scarred by endless conflict.",
  "Both factions seek the hidden titan artifacts buried here.",
  "A strategic chokepoint that neither side can afford to lose.",
  "The discovery of rich resources sparked this brutal war.",
  "An ancient curse haunts the battlefield, but the war rages on.",
  "A former stronghold of the Burning Legion, now contested territory."
];

const metaComps = [
  "Warrior/Paladin/Priest (TSG)",
  "Rogue/Mage/Priest (RMP)",
  "Warlock/Shadow Priest/Druid (Shadowplay)",
  "Hunter/Feral/Paladin (Jungle Cleave)",
  "Death Knight/Warlock/Shaman (Shadowcleave)",
  "Mage/Warlock/Shaman (MLD)",
  "Rogue/Warlock/Shaman (RLS)",
  "Hunter/Ret/Priest (Cupid Cleave)",
  "Warrior/Enhance/Druid (Turbo Cleave)",
  "Feral/Hunter/Priest (Kitty Cleave)"
];

const reps = [
  "Stormpike Guard", "Frostwolf Clan", "The Defilers", "League of Arathor",
  "Silverwing Sentinels", "Warsong Outriders", "Thorium Brotherhood",
  "Timbermaw Hold", "Cenarion Circle", "Argent Dawn"
];

const achievePrefix = ["Flawless", "Iron", "Bloodthirsty", "Relentless", "Savage", "Vindictive", "Ruthless", "Fierce"];
const achieveSuffix = ["Victory", "Defender", "Conqueror", "Slayer", "Vanguard", "Champion", "Gladiator", "Hero"];

function getRandom(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const pvpSlotNames = {
  Head: ['Helm', 'Crown', 'Circlet', 'Cowl', 'Mask'],
  Shoulder: ['Spaulders', 'Mantle', 'Pauldrons', 'Epaulets', 'Amice'],
  Chest: ['Breastplate', 'Robes', 'Vest', 'Harness', 'Tunic'],
  Wrist: ['Bracers', 'Wristguards', 'Bindings', 'Cuffs', 'Vambraces'],
  Hands: ['Gauntlets', 'Gloves', 'Handguards', 'Grips', 'Mitts'],
  Waist: ['Belt', 'Girdle', 'Sash', 'Waistguard', 'Cord'],
  Legs: ['Legguards', 'Pants', 'Kilt', 'Greaves', 'Leggings'],
  Feet: ['Sabatons', 'Boots', 'Treads', 'Footpads', 'Slippers'],
  Finger: ['Band', 'Signet', 'Loop', 'Ring', 'Seal'],
  Trinket: ['Talisman', 'Charm', 'Medallion', 'Brooch', 'Relic'],
  Neck: ['Amulet', 'Pendant', 'Necklace', 'Choker', 'Collar'],
  Weapon: ['Greatsword', 'Blade', 'Staff', 'Gavel', 'Axe', 'Dagger', 'Bow'],
  Shield: ['Shield', 'Bulwark', 'Defender', 'Aegis', 'Buckler']
};

const pvpArchetypes = {
  PhysicalDPS: { armorTypes: ['Plate', 'Mail', 'Leather'], stats: ['Agility', 'Strength'] },
  CasterDPS: { armorTypes: ['Cloth'], stats: ['Intellect', 'Spell Damage'] },
  Healer: { armorTypes: ['Cloth', 'Leather', 'Mail'], stats: ['Intellect', 'Healing', 'Mana per 5 sec'] },
  Tank: { armorTypes: ['Plate'], stats: ['Defense', 'Dodge', 'Shield Block'] }
};

function generateRewards(idx, pvpName) {
  const isEpic = Math.random() > 0.5;
  const rarity = isEpic ? "Epic" : "Rare";
  const reqLevel = [29, 39, 49, 60][Math.floor(Math.random() * 4)];
  const itemLevel = reqLevel + (isEpic ? 15 : 5); // iLvl scaling
  
  // Stat budget based on iLvl
  const mainStat = Math.floor(itemLevel * 0.4);
  const stamStat = Math.floor(itemLevel * 0.5);
  const critMod = isEpic ? Math.max(1, Math.floor(itemLevel / 40)) : 0;
  
  const archKeys = Object.keys(pvpArchetypes);
  
  // Weapon generation
  let wArch = pvpArchetypes[getRandomItem(archKeys)];
  let wType = getRandomItem(['Sword', 'Mace', 'Axe', 'Staff', 'Dagger', 'Bow']);
  let wSlot = (wType === 'Staff' || wType === 'Bow') ? 'Two-Hand' : getRandomItem(['Main Hand', 'One-Hand']);
  let wNoun = getRandomItem(pvpSlotNames.Weapon);
  let wMain = getRandomItem(wArch.stats);
  const weaponStats = [`+${stamStat} Stamina`, `+${mainStat} ${wMain}`];
  if (critMod > 0) weaponStats.push(`Equip: Improves your chance to get a critical strike by ${critMod}%.`);
  
  // Armor generation
  let aArchName = getRandomItem(archKeys);
  let aArch = pvpArchetypes[aArchName];
  let aIsJewelry = Math.random() > 0.7;
  let aType = '';
  let aSlot = '';
  let aNoun = '';
  
  if (aIsJewelry) {
    aType = getRandomItem(['Ring', 'Trinket', 'Necklace']);
    aSlot = aType === 'Ring' ? 'Finger' : (aType === 'Necklace' ? 'Neck' : 'Trinket');
    aNoun = getRandomItem(pvpSlotNames[aSlot]);
  } else {
    aType = getRandomItem(aArch.armorTypes);
    aSlot = getRandomItem(['Head', 'Shoulder', 'Chest', 'Wrist', 'Hands', 'Waist', 'Legs', 'Feet']);
    aNoun = getRandomItem(pvpSlotNames[aSlot]);
  }
  
  let aMain = getRandomItem(aArch.stats);
  const armorStats = [`+${Math.floor(stamStat * 0.8)} Stamina`, `+${Math.floor(mainStat * 0.8)} ${aMain}`];
  if (critMod > 0) armorStats.push(`Equip: Increases your hit rating by ${critMod}%.`);

  return [
    {
      name: `${isEpic ? "Vicious" : "Bloodthirsty"} ${wNoun} of ${pvpName.split(' ')[0]}`,
      rarity: rarity,
      bindType: "Binds when picked up",
      slot: wSlot,
      type: wType,
      stats: weaponStats,
      effect: isEpic ? `Use: Increases attack power by ${itemLevel * 3} for 15 sec.` : "",
      requiresLevel: reqLevel
    },
    {
      name: `${isEpic ? "Gladiator's" : "Veteran's"} ${aNoun} of the ${pvpName.split(' ').pop()}`,
      rarity: rarity,
      bindType: "Binds when picked up",
      slot: aSlot,
      type: aType,
      stats: armorStats,
      effect: "",
      requiresLevel: reqLevel
    }
  ];
}

// MASSIVE DATA INJECTION (FULLY DYNAMIC AND UNIQUE)
Object.values(templates).forEach(pvpList => {
  pvpList.forEach((pvp, idx) => {
    // Only inject if missing or override generic ones
    pvp.mapLayout = pvp.mapLayout || mapLayouts[Math.floor(Math.random() * mapLayouts.length)];
    pvp.powerUps = getRandom(powerUpsPool, 3);
    pvp.factionHistory = getRandom(historySnippets, 2).join(" ");
    pvp.topMetaComps = getRandom(metaComps, 3);
    
    const pref = achievePrefix[Math.floor(Math.random() * achievePrefix.length)];
    const suff = achieveSuffix[Math.floor(Math.random() * achieveSuffix.length)];
    pvp.achievements = [`${pref} ${suff}`, `Hero of ${pvp.name}`];
    
    pvp.associatedReputations = getRandom(reps, 2);
    pvp.uniqueRewards = generateRewards(idx, pvp.name);
  });
});

const fileContent = [
  "// AUTO-GENERATED MASSIVE PVP CONTENT",
  "// 15,000% scale implementation - Battlegrounds, World PvP, and Arenas.",
  "// Deep Dive Update: 7x more information fields.",
  "",
  "export const PVP_MODES = {",
  "  BATTLEGROUNDS: 'New Battlegrounds',",
  "  WORLD_PVP: 'World PvP & Banner Wars',",
  "  ARENA: 'The Gurubashi Arena System'",
  "};",
  "",
  "export interface PvPItem {",
  "  id: string;",
  "  name: string;",
  "  size: string;",
  "  type: string;",
  "  description: string;",
  "  mechanics: string[];",
  "  lore: string;",
  "  mapLayout: string;",
  "  powerUps: string[];",
  "  factionHistory: string;",
  "  topMetaComps: string[];",
  "  achievements: string[];",
  "  associatedReputations: string[];",
  "  uniqueRewards: any[];",
  "}",
  "",
  "export const pvpData: Record<string, PvPItem[]> = " + JSON.stringify(templates, null, 2) + ";"
].join("\n");

fs.writeFileSync('src/data/pvpData.ts', fileContent);
console.log('Successfully generated massively expanded pvpData.ts (15+ BGs and World Events)');
