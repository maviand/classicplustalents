// Handcrafted Classic+ PvP Systems & Battlegrounds (1.12 Balanced Edition)

export const PVP_MODES = {
  BATTLEGROUNDS: 'New Battlegrounds',
  WORLD_PVP: 'World PvP & Mobilization',
  ARENA: 'The Gurubashi Pit Championships',
  HONOR_SYSTEM: 'Honor & Rank Progression'
};

export interface PvPItem {
  id: string;
  name: string;
  size: string;
  type: string;
  description: string;
  mechanics: string[];
  lore: string;
  mapLayout: string;
  powerUps: string[];
  factionHistory: string;
  topMetaComps: string[];
  achievements: string[];
  associatedReputations: string[];
  uniqueRewards: any[];
}

export const pvpData: Record<string, PvPItem[]> = {
  "New Battlegrounds": [
    {
      "id": "AzsharaCrater",
      "name": "Azshara Crater",
      "size": "25v25",
      "type": "Strategic Siege & Chokepoint Control",
      "description": "The legendary unreleased Vanilla battleground restored to its full glory. Set in the craggy mountains above Azshara, the Alliance and Horde fight for dominance over three vital strategic mountain passes and resource quarries.",
      "mechanics": [
        "Strategic Strongholds: Capture and hold the Northern Timber Pass, Central Caldera, and Southern Quarry to drain enemy reinforcement tickets.",
        "Timbermaw Shaman Allies: Secure friendly standing with neutral furbolg shamans to summon powerful storm totems to support frontline pushes.",
        "Fortress Gate Sabotage: Gather localized lumber and iron resources to construct battering rams and breach the fortified inner sanctum gates."
      ],
      "lore": "The Horde seeks to secure vital lumber and stone to fuel their war efforts in Durotar, while the Alliance strives to fortify the high bluffs to shield their naval shipping lanes in the Great Sea below.",
      "mapLayout": "Rugged caldera terrain with rocky ridges, dense pine forests, and fortified cliffside choke points.",
      "powerUps": [
        "Speed Boots (+100% ground movement speed for 10 sec)",
        "Berserking (+30% damage dealt, +20% damage taken for 20 sec)",
        "Restorative Draught (Restores 20% health and mana over 10 sec)"
      ],
      "factionHistory": "A contested borderland where old treaties between the Night Elves and the Orcs have completely broken down into open warfare.",
      "topMetaComps": [
        "Warrior / Paladin / Priest / Mage / Hunter",
        "Warrior / Shaman / Warlock / Rogue / Druid"
      ],
      "achievements": [
        "Conqueror of the Crater",
        "Master of the Timbermaw Pass"
      ],
      "associatedReputations": [
        "Silverwing Sentinels / Warsong Outriders",
        "Timbermaw Hold"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Blade of Azshara",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Axe",
          "stats": [
            "+14 Strength",
            "+10 Agility",
            "+12 Stamina",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Chance on hit: Wounds the target for 65 Nature damage and reduces movement speed by 25% for 4 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Collar of the Crater Commander",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Neck",
          "type": "Necklace",
          "stats": [
            "+16 Stamina",
            "+10 Strength",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "GillijimIsle",
      "name": "Gillijim's Isle",
      "size": "15v15",
      "type": "Coastal Warfare & Shore Battery Assault",
      "description": "Set on the restored Alpha island off the coast of Stranglethorn. Teams battle across the sandy shores and jagged cliffs to seize control of coastal cannon batteries and naval docks.",
      "mechanics": [
        "Coastal Shore Batteries: Control heavy shore artillery to bombard enemy defensive fortifications and coastal landing craft.",
        "Rowboat Infiltration: Utilize small rowboats to launch surprise flanking attacks behind enemy beachheads.",
        "Smuggler Munition Caches: Contested chests on the reef spawn temporary combat buffs at the risk of open-water exposure."
      ],
      "lore": "The Bloodsail Buccaneers and Steamwheedle Cartel employ Alliance and Horde champions as privateers to seize the island's hidden pirate coves.",
      "mapLayout": "Tropical white-sand beaches, crumbling stone ramparts, and tidal reefs.",
      "powerUps": [
        "Rum-Fueled Courage (Immune to fear for 6 sec, movement speed reduced by 10%)",
        "Speed Boots (+100% speed for 10 sec)"
      ],
      "factionHistory": "An uncharted tropical sanctuary where high-seas law rules supreme.",
      "topMetaComps": [
        "Rogue / Mage / Priest / Warrior / Druid"
      ],
      "achievements": [
        "Privateer of the Southern Seas",
        "Master Bombardier"
      ],
      "associatedReputations": [
        "Booty Bay (Steamwheedle Cartel)"
      ],
      "uniqueRewards": [
        {
          "name": "Privateer's Cutlass",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Sword",
          "stats": [
            "+14 Agility",
            "+10 Stamina",
            "Equip: Increases attack power by 22."
          ],
          "effect": "Chance on hit: Delivers an additional attack.",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "HyjalFront",
      "name": "The Hyjal Front",
      "size": "40v40",
      "type": "Asymmetrical Mountain Ridge Assault",
      "description": "A massive 40v40 war taking place on the steep alpine slopes leading toward the roots of Nordrassil.",
      "mechanics": [
        "Ridge Defense: Defenders hold fortified timber barricades while attackers establish forward siege camps.",
        "Horn of the Ancients: Defenders can sound the ancient horn to awaken Ancient Treants to defend the upper choke points.",
        "Demolition Munitions: Attackers carry heavy alchemical charges to shatter fortified wooden redoubts."
      ],
      "lore": "The Night Elves and Alliance defend the sacred slopes against Horde warbands seeking ancient infused lumber and leylines.",
      "mapLayout": "Vertical alpine slopes, scorched roots, and defensive timber redoubts.",
      "powerUps": [
        "Blessing of the Ancients (+10% nature damage & healing for 30 sec)",
        "Berserking (+30% damage dealt for 20 sec)"
      ],
      "factionHistory": "The sacred battlefield where the races of Azeroth made their legendary stand during the Third War.",
      "topMetaComps": [
        "Organized 40-man battleground warbands"
      ],
      "achievements": [
        "Hero of the Sacred Summit",
        "Gatebreaker of Nordrassil"
      ],
      "associatedReputations": [
        "Cenarion Circle"
      ],
      "uniqueRewards": [
        {
          "name": "Nordrassil Battle Standard",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Trinket",
          "type": "Trinket",
          "stats": [
            "+15 Stamina",
            "Equip: Increases spell and melee critical strike by 1%."
          ],
          "effect": "Use: Plants a standard increasing party health by 250 for 2 min. (5 Min Cooldown)",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "StromgardeSiege",
      "name": "Stromgarde Siege",
      "size": "20v20",
      "type": "Urban Warfare & Stronghold Control",
      "description": "The ruined stone avenues and ramparts of Stromgarde in Arathi Highlands turned into a gritty urban battleground.",
      "mechanics": [
        "Vertical Ramparts: Control the castle walls and towers to gain line of sight and elevation advantages over street corridors.",
        "Keep Keymaster: Slay the central Syndicate warlord to acquire the Keep Key, opening the inner gate for bonus tactical points.",
        "Supply Stashes: Secure munitions caches in the merchant quarter to empower NPC guards."
      ],
      "lore": "Danath Trollbane's loyalists clash with Forsaken expansion forces seeking to seize the gateway to the Arathi Highlands.",
      "mapLayout": "Paved stone streets, ruined cathedral plazas, sewers, and fortified stone battlements.",
      "powerUps": [
        "Syndicate Adrenaline (+15% attack speed for 12 sec)"
      ],
      "factionHistory": "The ancestral capital of the human kingdom of Stromgarde.",
      "topMetaComps": [
        "Warrior / Priest / Warlock / Mage / Rogue"
      ],
      "achievements": [
        "Liberator of Stromgarde",
        "Urban Warlord"
      ],
      "associatedReputations": [
        "League of Arathor / The Defilers"
      ],
      "uniqueRewards": [
        {
          "name": "Trollbane Greatshield",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Off Hand",
          "type": "Shield",
          "stats": [
            "2450 Armor",
            "44 Block",
            "+18 Stamina",
            "+12 Strength",
            "Equip: Increases defense rating by 8."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    }
  ],
  "World PvP & Mobilization": [
    {
      "id": "BannerWars",
      "name": "The Open-World Frontline Mobilization",
      "size": "Zone-Wide Contested PvP",
      "type": "Dynamic Open-World Strategic Objectives",
      "description": "Dynamic territorial skirmishes across contested classic zones (Hillsbrad Foothills, Ashenvale, Stranglethorn Vale, and Blackrock Mountain).",
      "mechanics": [
        "Military Supply Caravans: Unannounced, un-instanced military caravans march through contested zones. Successfully defending or ambushing a caravan awards faction zone-wide buffs for 2 hours.",
        "Outlaw Bounties: Slaying excessive numbers of opposing players flags you on the local zone map, offering honor bounties to opposing bounty hunters.",
        "Contested Watchtowers: Open-world flags that award localized honor and minor gathering bonuses when held."
      ],
      "lore": "The cold war between the Alliance and Horde continuously flares up wherever military supplies and territory are contested.",
      "mapLayout": "Contested open-world regions of the Eastern Kingdoms and Kalimdor.",
      "powerUps": [
        "Zone Victor Morale (+5% rested XP and +5% reputation gains in the zone)"
      ],
      "factionHistory": "The legendary open-world battles of Southshore vs. Tarren Mill and the Crossroads realized with structured rewards.",
      "topMetaComps": [
        "World PvP roaming groups and defense parties"
      ],
      "achievements": [
        "Hero of Southshore",
        "Defender of the Crossroads"
      ],
      "associatedReputations": [
        "Alliance / Horde Military Command"
      ],
      "uniqueRewards": [
        {
          "name": "Banner of the Contested Vanguard",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Back",
          "type": "Cloth",
          "stats": [
            "+15 Stamina",
            "+10 Strength",
            "+10 Agility"
          ],
          "effect": "Use: Increases movement speed by 15% for 8 sec. (5 Min Cooldown)",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "CrimsonAtoll",
      "name": "The Lawless Smuggler's Reef",
      "size": "Contested Open-Sea Zone",
      "type": "Persistent Black Market Contraband War",
      "description": "A lawless island archipelago off the coast of Stranglethorn Vale where the Steamwheedle Cartel and Bloodsail Buccaneers broker forbidden contraband in open waters.",
      "mechanics": [
        "Contraband Smuggling Runs: Transport unrefined Black Lotus oil and rare ores from the outer reefs back to the Booty Bay fence while fending off opposing faction corsairs.",
        "Mercenary Bounties: Slaying rival smugglers awards Booty Bay Infamy Tokens redeemable for rare crafting patterns and engineering schematics.",
        "Tidal Cannon Batteries: Secure ancient coastal cannon platforms to bombard approaching enemy skiffs and protect friendly landing points."
      ],
      "lore": "An un-patrolled pirate haven where gold and blood rule, operating outside the sovereignty of either the Alliance or the Horde.",
      "mapLayout": "Submerged coral reefs, jungle grottos, and a central smuggler's cove.",
      "powerUps": [
        "Corsair's Grog (+10% physical damage, -5% armor for 15 sec)"
      ],
      "factionHistory": "A lawless pirate reef where high-risk trade meets ruthless naval warfare.",
      "topMetaComps": [
        "Solo survivalists and stealth ambush pairs"
      ],
      "achievements": [
        "Scourge of the Southern Reef",
        "Master Smuggler"
      ],
      "associatedReputations": [
        "Booty Bay Smugglers / Bloodsail Buccaneers"
      ],
      "uniqueRewards": [
        {
          "name": "Trollbone Dagger of the Atoll",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Dagger",
          "stats": [
            "+14 Agility",
            "+8 Stamina",
            "Equip: +1% Critical Strike."
          ],
          "effect": "Chance on hit: Inflicts deep bleed for 80 damage over 6 sec.",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "SilithusSand",
      "name": "Silithus Geyser & Silicate Warfare",
      "size": "Zone-Wide Resource Conflict",
      "type": "Open-World Resource Race",
      "description": "Overhauls the Silithus open-world PvP event to grant substantial Cenarion Circle reputation and high-tier military tokens.",
      "mechanics": [
        "Silicate Dust Extraction: Channel on erupting geysers to gather silicate dust and escort it back to your faction base camp.",
        "Cenarion Hold Recognition: Successfully turning in dust grants Cenarion Circle reputation and unlocks localized tactical flight bonuses.",
        "Hive Ambushers: Elite silithid bugs ambush extractors, creating multi-front chaos."
      ],
      "lore": "The Cenarion Circle urgently requires silicate dust to prepare mystical wards against the slumbering Qiraji swarms.",
      "mapLayout": "Dune expanses, colossal hive burrows, and twilight camps.",
      "powerUps": [
        "Silicate Ward (+15 Shadow Resistance for 15 min)"
      ],
      "factionHistory": "The tactical prelude to the Ahn'Qiraj war effort.",
      "topMetaComps": [
        "Escort pairs and skirmish defensive squads"
      ],
      "achievements": [
        "Sandrunner of Silithus"
      ],
      "associatedReputations": [
        "Cenarion Circle"
      ],
      "uniqueRewards": [
        {
          "name": "Cenarion Scout Band",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+12 Stamina",
            "+9 Agility",
            "+9 Strength"
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    }
  ],
  "The Gurubashi Pit Championships": [
    {
      "id": "GurubashiBrawl",
      "name": "The Gurubashi Gladiatorial Pit",
      "size": "Open World Arena Pit",
      "type": "Gladiatorial Bloodsport & Scheduled Pit Tournaments",
      "description": "Arena in Classic+ is grounded firmly in the world: a ruthless open pit where champions battle for Steamwheedle prestige, crowd glory, and weekly tournament trophies.",
      "mechanics": [
        "Scheduled Arena Chest: The iconic arena chest spawns every 3 hours with upgraded rare crafting reagents, gladiator insignias, and heirloom gold purses.",
        "Weekly Pit Championship: Scheduled Saturday tournaments where champions fight in un-instanced bracket bouts before spectator grandstands.",
        "Crowd Favor: Dealing massive damage or scoring honorable kills inside the pit earns Steamwheedle crowd favor, tossing minor restorative potions into the sand."
      ],
      "lore": "The Steamwheedle Cartel hosts gladiatorial bloodmatches for the entertainment, wagering, and glory of all Azeroth.",
      "mapLayout": "Sunken stone arena pit surrounded by spectator stands, spike barricades, and iron gates.",
      "powerUps": [
        "Gladiator's Brew (+10% damage for 10 sec)"
      ],
      "factionHistory": "The ancient gladiatorial tradition of the Gurubashi jungle trolls.",
      "topMetaComps": [
        "Melee juggernauts, burst mages, and aggressive skirmishers"
      ],
      "achievements": [
        "Grand Gladiator of Gurubashi",
        "Arena Master of the Pit"
      ],
      "associatedReputations": [
        "Steamwheedle Cartel"
      ],
      "uniqueRewards": [
        {
          "name": "Gladiator's Sand-Crusted Girdle",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Waist",
          "type": "Plate",
          "stats": [
            "+18 Strength",
            "+14 Stamina",
            "Equip: Increases critical strike chance by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    }
  ],
  "Honor & Rank Progression": [
    {
      "id": "HonorForHealing",
      "name": "Combat Support Honor for Healers",
      "size": "Global PvP System",
      "type": "Reward Parity Calibration",
      "description": "Dedicated battlefield healers receive full scoreboard credit and direct bonus Honor contribution based on effective healing performed on allies in active combat.",
      "mechanics": [
        "Combat Support Contribution: 0.5 Honor contribution awarded per 100 effective health restored to allies actively engaged in PvP combat.",
        "Objective Healing Multiplier: Healing allies while contesting flags, nodes, or caravans awards a +25% bonus honor contribution.",
        "Parity Safeguard: Prevents healers from lagging behind killing-blow classes in weekly standing calculations."
      ],
      "lore": "Battlefield medics are as vital to victory as the warriors holding the front lines.",
      "mapLayout": "All Battlegrounds and World PvP zones.",
      "powerUps": [
        "Medic's Resolve"
      ],
      "factionHistory": "Honoring the holy and spiritual champions of the Alliance and Horde.",
      "topMetaComps": [
        "Holy Paladins, Restoration Shamans, Holy/Disc Priests, Resto Druids"
      ],
      "achievements": [
        "Field Medic Legend"
      ],
      "associatedReputations": [
        "Alliance / Horde Military High Command"
      ],
      "uniqueRewards": [
        {
          "name": "Field Medic's Signet of Grace",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+12 Stamina",
            "+10 Intellect",
            "Equip: Increases healing done by spells by up to 29.",
            "Equip: Restores 4 mana per 5 sec."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "RankSafetyThresholds",
      "name": "PvP Rank Decay Safety Thresholds",
      "size": "Global PvP System",
      "type": "Progression Longevity Protection",
      "description": "Introduces milestone protection floors into the Classic honor ladder, preventing players who reach major rank tiers from being demoted below their unlocked milestone.",
      "mechanics": [
        "Rank Milestone Floors: Once a player reaches Rank 7 (Knight-Lieutenant / Blood Guard) or Rank 11 (Commander / Lieutenant General), their honor standing will not decay below that rank floor.",
        "Preserves Competitive Grand Marshal / High Warlord Chase: The weekly Standing 1 ladder and brutal competition for Ranks 12, 13, and 14 remains active for the most dedicated PvP combatants.",
        "Eliminates Burnout Griefing: Casual and semi-hardcore players can enjoy their PvP achievements without losing access to intermediate PvP gear."
      ],
      "lore": "True military prestige is recognized permanently by the High Command of Stormwind and Orgrimmar.",
      "mapLayout": "Global Honor System.",
      "powerUps": [
        "Veteran's Resolve"
      ],
      "factionHistory": "The cornerstone of honor and military duty across the faction war.",
      "topMetaComps": [
        "All PvP Combatants"
      ],
      "achievements": [
        "Commander / Lieutenant General",
        "Grand Marshal / High Warlord"
      ],
      "associatedReputations": [
        "Alliance / Horde High Command"
      ],
      "uniqueRewards": [
        {
          "name": "Insignia of the Tactical Vanguard",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Trinket",
          "type": "Trinket",
          "stats": [
            "+15 Stamina"
          ],
          "effect": "Use: Dispels all movement impairing and loss of control effects. (2 Min Cooldown)",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "Rank11Mounts",
      "name": "Rank 11 Armored War Mounts",
      "size": "Global PvP Progression",
      "type": "Prestige Mount Unlocks",
      "description": "Hitting PvP Rank 11 unlocks faction-specific Armored War Mounts (Armored Kodos, War Raptors, Armored Tigers, and War Rams) with 100% ground speed and war bards.",
      "mechanics": [
        "Requires Rank 11 (Commander / Lieutenant General) standing.",
        "Epic 100% movement speed with heavy war armor bards and faction heraldry.",
        "Costs 100 gold from the capital city military quartermaster."
      ],
      "lore": "Beasts bred and armored solely for the brutal front lines of the faction war.",
      "mapLayout": "Capital City Military Barracks.",
      "powerUps": [
        "War-Bred Stamina"
      ],
      "factionHistory": "The hallmark of elite cavalry across the battlefields of Azeroth.",
      "topMetaComps": [
        "Rank 11+ PvP Combatants"
      ],
      "achievements": [
        "Lieutenant General / Commander"
      ],
      "associatedReputations": [
        "Alliance / Horde Military Command"
      ],
      "uniqueRewards": [
        {
          "name": "Reins of the Armored Black War Tiger",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Mount",
          "type": "Mount",
          "stats": [
            "Requires Level 60",
            "Requires Riding (150)",
            "Increases ground movement speed by 100%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    }
  ]
};
