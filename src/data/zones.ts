// AUTO-GENERATED MASSIVE WORLD CONTENT
// 15,000% scale implementation - WC3 Lore Threads, Procedural Hubs, and massive world building.
// Deep Dive Update: 7x more information fields.

export const REGIONS = {
  STARTING: 'Revamped Starting Zones',
  CAPITALS: 'Capital City Reclamations',
  EK: 'Eastern Kingdoms',
  KAL: 'Kalimdor',
  ISLES: 'The Uncharted Isles',
  WC3: 'Unresolved WC3 Lore Threads'
};

export interface WorldZone {
  id: string;
  name: string;
  level: string;
  description: string;
  hubs: string[];
  lore: string;
  flightPaths: string[];
  notableNPCs: string[];
  resources: string[];
  weather: string;
  secrets: string[];
  levelRanges: string;
  factions: string[];
}

export const worldZonesData: Record<string, WorldZone[]> = {
  "STARTING": [
    {
      "id": "EchoIsles",
      "name": "The Echo Isles (Troll)",
      "level": "1-10",
      "hubs": [
        "Vol'jin's Vanguard",
        "The Southern Atoll",
        "Sen'jin Encampment"
      ],
      "desc": "Trolls no longer share the Valley of Trials with Orcs. Players start directly on the Echo Isles, fighting to secure a permanent beachhead against Zalazane's dark magic.",
      "lore": "A desperate fight for survival. Players must help Vol'jin train raptors, construct defensive totems, and push Zalazane's mind-controlled trolls back into the interior. The zone culminates in a massive level 10 event where the entire zone rallies to hold off a Sea Witch invasion.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General LIN16N",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 1-10 | Fringes: +3 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "NewTinkertown",
      "name": "Gnomeregan Surface (Gnome)",
      "level": "1-10",
      "hubs": [
        "Quarantine Zone 4",
        "The Scrap-Yard",
        "Mektorque's Command"
      ],
      "desc": "Gnomes begin in a heavily irradiated, quarantined camp right outside the sealed doors of Gnomeregan.",
      "lore": "Pure technological survival. Players are tasked with venting radiation, saving irradiated survivors using experimental scrubbers, and testing the first prototypes of the Mechanostrider.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General KN3MEJ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 1-10 | Fringes: +3 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "NorthshireExpanded",
      "name": "Northshire Valley (Human)",
      "level": "1-10",
      "hubs": [
        "Northshire Abbey",
        "The Hidden Resistance Camp",
        "Echo Ridge Mine"
      ],
      "desc": "The iconic valley has been massively expanded. The Defias Brotherhood presence is not just a few thugs; it is a full-blown military occupation of the vineyards.",
      "lore": "The Defias have cut off the valley from Goldshire. Players must organize a militia, sabotage Defias siege engines, and escort Marshal McBride in a climatic push to reopen the southern pass.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 0F6GEK",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 1-10 | Fringes: +3 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ValleyOfTrials",
      "name": "Valley of Trials (Orc)",
      "level": "1-10",
      "hubs": [
        "The Proving Grounds",
        "Kolkar's Ruin",
        "Burning Blade Coven"
      ],
      "desc": "The harsh proving grounds are under direct assault by a massive Centaur warband seeking to wipe out the Orcs before they can establish Durotar.",
      "lore": "A brutal introduction to Horde life. Players hold the northern choke-point against waves of Centaur raiders in a continuous, dynamic zone event.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General C9AHD4",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 1-10 | Fringes: +3 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Deathknell",
      "name": "Deathknell (Undead)",
      "level": "1-10",
      "hubs": [
        "The Shadow Grave",
        "The Rotting Farm",
        "Night Web's Hollow"
      ],
      "desc": "A splinter faction of the Scourge has infiltrated the starting area, leading to a civil war among the freshly raised dead.",
      "lore": "Players awaken to utter chaos. You must prove your free will by actively resisting Lich King whispers (a unique debuff mechanic) while hunting down Scourge loyalists.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General CBJQ4Q",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 1-10 | Fringes: +3 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Shadowglen",
      "name": "Shadowglen (Night Elf)",
      "level": "1-10",
      "hubs": [
        "Aldrassil",
        "The Cleansing Pool",
        "Starbreeze Village"
      ],
      "desc": "Teldrassil is already failing. The Emerald Nightmare has seeped into the starting valley.",
      "lore": "A race against time. Players must use pure moonwell water to cleanse massive, pulsing nightmare nodes.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General A1PUBB",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 1-10 | Fringes: +3 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "WildhammerPeak",
      "name": "Aerie Peak Heights (Wildhammer Dwarf)",
      "level": "1-10",
      "hubs": [
        "The Gryphon Roost",
        "Storm-Caller's Ridge",
        "The High Altar"
      ],
      "desc": "A new starting experience for Wildhammer Dwarves high in the Hinterlands.",
      "lore": "Tame your first gryphon and defend the peak from Vilebranch Troll incursions.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General GWKAP",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 1-10 | Fringes: +3 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "RevantuskCoast",
      "name": "Revantusk Shores (Forest Troll)",
      "level": "1-10",
      "hubs": [
        "Revantusk Village",
        "The Sunken Temple Beach",
        "Zentabra's Hut"
      ],
      "desc": "Forest trolls loyal to the Horde start on the rugged eastern coast of the Hinterlands.",
      "lore": "Reclaim ancient artifacts from the sea and battle murloc tribes to prove your worth to the Horde.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General A4JSX2",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 1-10 | Fringes: +3 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    }
  ],
  "CAPITALS": [
    {
      "id": "GnomereganReclamation",
      "name": "Operation: Gnomeregan",
      "level": "60 (World Event)",
      "hubs": [
        "Tinker's Command (Neutral)"
      ],
      "desc": "A massive server-wide war effort to finally purge the radiation from Gnomeregan and reclaim it as a fully functional, sanctuary capital city.",
      "lore": "Both Alliance and Horde Goblins/Gnomes work together in a server-wide event. Players gather millions of copper, iron, and specialized engineering parts to build an atmospheric scrubber.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General FKEXJG",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 (World Event) | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ZalazanesFall",
      "name": "Zalazane's Fall",
      "level": "60 (World Event)",
      "hubs": [
        "Sen'jin Village (Command Post)",
        "The Voodoo Atoll"
      ],
      "desc": "The Horde rallies behind Vol'jin to launch a naval invasion of the inner Echo Isles, permanently removing Zalazane from power.",
      "lore": "Horde players participate in a 40-man open-world push across the islands, using troll bat-riders to bomb voodoo shields. Unlocks the inner Echo Isles as a sprawling troll capital.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 9QUNB",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 (World Event) | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "LordaeronSurface",
      "name": "Ruins of Lordaeron Recon.",
      "level": "60 (World Event)",
      "hubs": [
        "The Upper Courtyard",
        "Sylvanas' Vanguard",
        "The Blight Labs"
      ],
      "desc": "The Forsaken begin actively rebuilding the surface ruins above the Undercity, establishing it as a fortified citadel against the Scarlet Crusade.",
      "lore": "Players gather stone from the ruined walls and defend forsaken masons from constant Scarlet ambushes. Real buildings are constructed on the surface over time.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General YFNMJ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 (World Event) | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "StromgardeRebuilt",
      "name": "Stromgarde Restoration",
      "level": "60 (World Event)",
      "hubs": [
        "Trollbane Hall",
        "The Syndicate Blockade",
        "Defenders Gate"
      ],
      "desc": "The Alliance pushes the Syndicate and Ogres out of the ruined city of Stromgarde in Arathi Highlands.",
      "lore": "A massive phased event where the Alliance secures the keep, repels Horde counter-attacks, and establishes a massive northern stronghold.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General O5U1P",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 (World Event) | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "GilneasCity",
      "name": "The Battle for Gilneas City",
      "level": "60 (World Event)",
      "hubs": [
        "Greymane Manor",
        "The Merchant Quarter",
        "The Military Ward"
      ],
      "desc": "The culmination of the Gilneas storyline. A three-way battle for the capital.",
      "lore": "Sylvanas attempts to plague the city while Genn Greymane tries to hold the line with his newly transformed Worgen army.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General ITPCJW",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 (World Event) | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "MountHyjalSummit",
      "name": "Nordrassil Reborn",
      "level": "60 (World Event)",
      "hubs": [
        "The World Tree Roots",
        "Cenarion Encampment"
      ],
      "desc": "Players help the Night Elves heal the World Tree after the events of WC3.",
      "lore": "Gathering waters from the Well of Eternity and defending the tree from Twilight Hammer cultists seeking to reignite the dormant fel magic.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 1GGXEA9",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 (World Event) | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    }
  ],
  "EK": [
    {
      "id": "Gilneas",
      "name": "Gilneas (Beyond the Wall)",
      "level": "40-50",
      "hubs": [
        "Greymane City (Contested)",
        "Keel Harbor",
        "Tempest Watch",
        "The Blackwald"
      ],
      "desc": "The gates are sealed, but the sea route is not. The Worgen curse is rampant, and the Forsaken navy is bombarding the northern shores.",
      "lore": "Players must navigate a three-way war between human loyalists, feral worgen packs (the Bloodfang), and Sylvanas's vanguard.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General LQ0S7",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-50 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Northeron",
      "name": "Northeron & Grim Batol Surface",
      "level": "50-55",
      "hubs": [
        "Kirthaven",
        "The Dragonmaw Gates",
        "Thundermar",
        "The Twilight Ridge"
      ],
      "desc": "The Wildhammer heartland east of the Wetlands. A rugged alpine zone focused on Gryphon mastery and the Dragonmaw clan.",
      "lore": "Players assist Falstad Wildhammer in uniting the scattered dwarf clans to prepare a siege on Grim Batol.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General X20J",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-55 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "NorthEPL",
      "name": "The Northern Plaguelands (Quel'Thalas Border)",
      "level": "55-60",
      "hubs": [
        "Argent Forward Camp",
        "The Highborne Ruins",
        "Plague-wood Border",
        "The Thalassian Pass"
      ],
      "desc": "The scarred, impassable mountains north of Stratholme. A zone of pure horror where the Scourge has created massive flesh-stitcheries.",
      "lore": "Players finally see the physical border of Quel'Thalas. The High Elves provide quests to sabotage Scourge supply lines.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General OZO81",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 55-60 | Fringes: +57 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Deadwind",
      "name": "Deadwind Pass (Expanded)",
      "level": "55-60",
      "hubs": [
        "Ariden's Camp (Neutral)",
        "The Vice",
        "Karazhan Cellars",
        "The Master's Cellar"
      ],
      "desc": "No longer just a hallway to Karazhan. Fully realized with an ogre settlement and a hidden warlock conclave.",
      "lore": "The zone has a passive debuff, \"Medivh's Paranoia,\" requiring players to craft specific torches via Alchemy to explore without taking massive shadow damage.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General BR8BY",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 55-60 | Fringes: +57 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "QuelthalasExterior",
      "name": "Quel'Thalas Exterior",
      "level": "60",
      "hubs": [
        "Windrunner Spire",
        "The Ghostlands Border",
        "The Dead Scar"
      ],
      "desc": "The burned out forests leading up to the Sunwell.",
      "lore": "Players fight remnants of the Scourge invasion from Warcraft 3. Features elite banshees and abominations.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General ZEXAZ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "TirisfalGladesExpanded",
      "name": "Tirisfal Coast & Whispering Shore",
      "level": "10-20",
      "hubs": [
        "The Whispering Shore",
        "Agamand Mills Expanded"
      ],
      "desc": "The forgotten northern coast of Tirisfal, infested with murlocs and naga.",
      "lore": "Uncover the dark secrets of what lies beneath the Whispering Shore, hinting at Old God activity long before Ahn'Qiraj.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General QT1OYU",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 10-20 | Fringes: +12 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "AlteracMountainsExpanded",
      "name": "Alterac Valleys & Peaks",
      "level": "35-45",
      "hubs": [
        "Crushridge Hold",
        "The Syndicate Stronghold",
        "Frostwolf Vanguard"
      ],
      "desc": "Expanded vertically to include massive Ogre fortresses and the Syndicate headquarters.",
      "lore": "Deepen the lore of the Perenolde family and their treachery. Neutral players can actually gain reputation with the Syndicate through dark deeds.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 9IEYVC",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 35-45 | Fringes: +37 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms0",
      "name": "The Forgotten Wastes",
      "level": "40-60",
      "hubs": [
        "Camp Forgotten",
        "Wastes Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Forgotten Wastes was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General GV3L4",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms1",
      "name": "The Burning Vale",
      "level": "40-60",
      "hubs": [
        "Camp Burning",
        "Vale Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Burning Vale was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General YCUSKH",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms2",
      "name": "The Forgotten Vale",
      "level": "40-60",
      "hubs": [
        "Camp Forgotten",
        "Vale Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Forgotten Vale was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General BOJ323D",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms3",
      "name": "The Sunken Depths",
      "level": "40-60",
      "hubs": [
        "Camp Sunken",
        "Depths Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Sunken Depths was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 91YMCQ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms4",
      "name": "The Shadow Depths",
      "level": "40-60",
      "hubs": [
        "Camp Shadow",
        "Depths Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Shadow Depths was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General BKZ7QO",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms5",
      "name": "The Hidden Crater",
      "level": "40-60",
      "hubs": [
        "Camp Hidden",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Hidden Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General MMBOZE",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms6",
      "name": "The Forgotten Shores",
      "level": "40-60",
      "hubs": [
        "Camp Forgotten",
        "Shores Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Forgotten Shores was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General T7NG",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms7",
      "name": "The Shattered Wilds",
      "level": "40-60",
      "hubs": [
        "Camp Shattered",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Shattered Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General D4MSZC",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms8",
      "name": "The Shadow Crater",
      "level": "40-60",
      "hubs": [
        "Camp Shadow",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Shadow Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General GAA6LB",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms9",
      "name": "The Shadow Sanctuary",
      "level": "40-60",
      "hubs": [
        "Camp Shadow",
        "Sanctuary Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Shadow Sanctuary was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General RXI9I",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms10",
      "name": "The Echoing Sanctuary",
      "level": "40-60",
      "hubs": [
        "Camp Echoing",
        "Sanctuary Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Echoing Sanctuary was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 545WJ9",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms11",
      "name": "The Radiant Depths",
      "level": "40-60",
      "hubs": [
        "Camp Radiant",
        "Depths Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Radiant Depths was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 999OY",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms12",
      "name": "The Whispering Peak",
      "level": "40-60",
      "hubs": [
        "Camp Whispering",
        "Peak Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Whispering Peak was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 0ZKZC5",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms13",
      "name": "The Shattered Shores",
      "level": "40-60",
      "hubs": [
        "Camp Shattered",
        "Shores Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Shattered Shores was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General HJBUNC",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcEasternKingdoms14",
      "name": "The Echoing Wilds",
      "level": "40-60",
      "hubs": [
        "Camp Echoing",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Eastern Kingdoms. Legends say the Echoing Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General OVHUKC",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    }
  ],
  "KAL": [
    {
      "id": "Uldum",
      "name": "Uldum (The Titan Vault)",
      "level": "55-60",
      "hubs": [
        "The Excavation",
        "Watcher's Rise",
        "The Obsidian Quarry",
        "The Halls of Origination"
      ],
      "desc": "The Vanilla concept of Uldum: an austere, mechanical, subterranean desert zone. Pure, terrifying Titan geometry.",
      "lore": "Players breach the gates using the Discs of Norgannon. Inside, they find the Tol'vir fighting a losing war against the Qiraji.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General BB2IRZ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 55-60 | Fringes: +57 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Hyjal",
      "name": "Mount Hyjal",
      "level": "58-60",
      "hubs": [
        "Nordrassil Basecamp",
        "The Whispering Gorge",
        "Barrow Dens",
        "The Fel-Scarred Peak"
      ],
      "desc": "The summit of Kalimdor, scarred by Archimonde's death in WC3. The Emerald Nightmare bleeds into the waking world.",
      "lore": "The demons are mostly dead, but their fel-blood has corrupted the Barrow Dens. Players work with the Cenarion Circle to purge Doomguards and Nightmare stalkers.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General E21U7L",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 58-60 | Fringes: +60 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Azshara",
      "name": "Azshara (The Shattered Coast)",
      "level": "45-55",
      "hubs": [
        "Bilgewater Port",
        "Valormok (Expanded)",
        "Eldarath Ruins",
        "Timbermaw Vanguard"
      ],
      "desc": "Transformed from a barren cliffside into a bustling hub with a massive goblin port, Naga ruins, and the Blue Dragonflight.",
      "lore": "The Timbermaw War rages in the north. Azuregos now roams a much more dangerous, heavily populated elite region.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General OUM7BK",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 45-55 | Fringes: +47 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Winterspring",
      "name": "Winterspring (Frostwhisper Gorge)",
      "level": "55-60",
      "hubs": [
        "Starfall Village",
        "Everlook (Expanded)",
        "Mazthoril Exterior",
        "Darkwhisper Pass"
      ],
      "desc": "The southern half is now a sprawling endgame zone leading up to the gates of Mount Hyjal.",
      "lore": "Features the Mazthoril Deeps dungeon. Darkwhisper Pass is transformed into an elite farming zone.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 7LW1CQ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 55-60 | Fringes: +57 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "SilithusExpanded",
      "name": "Silithus (The Hive Wars)",
      "level": "55-60",
      "hubs": [
        "Cenarion Hold",
        "Valor's Rest",
        "Bronzebeard Encampment",
        "The Twilight Basecamp"
      ],
      "desc": "Expanded with massive underground hive networks that act as non-instanced micro-dungeons.",
      "lore": "Players can now fully explore the depths of Hive'Ashi, Zora, and Regal without entering the AQ instances.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General YJSD4J",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 55-60 | Fringes: +57 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "MoongladeExpanded",
      "name": "Moonglade Depths",
      "level": "50-60",
      "hubs": [
        "The Emerald Dream Portal",
        "Shrine of Remulos"
      ],
      "desc": "The serene Moonglade is under attack from within the Emerald Dream.",
      "lore": "Phased combat events where Druids and their allies must defend the barrow dens from Nightmare incursions.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General DCYTFO",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor0",
      "name": "The Frozen Reach",
      "level": "40-60",
      "hubs": [
        "Camp Frozen",
        "Reach Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Frozen Reach was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 8TEB2L",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor1",
      "name": "The Shadow Reach",
      "level": "40-60",
      "hubs": [
        "Camp Shadow",
        "Reach Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Shadow Reach was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General KYU5NS8",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor2",
      "name": "The Echoing Vale",
      "level": "40-60",
      "hubs": [
        "Camp Echoing",
        "Vale Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Echoing Vale was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General TU9IKL",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor3",
      "name": "The Hidden Hold",
      "level": "40-60",
      "hubs": [
        "Camp Hidden",
        "Hold Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Hidden Hold was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 6UPP4F",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor4",
      "name": "The Cursed Isle",
      "level": "40-60",
      "hubs": [
        "Camp Cursed",
        "Isle Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Cursed Isle was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General UNBXTQ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor5",
      "name": "The Lost Depths",
      "level": "40-60",
      "hubs": [
        "Camp Lost",
        "Depths Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Lost Depths was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General XI26B",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor6",
      "name": "The Echoing Isle",
      "level": "40-60",
      "hubs": [
        "Camp Echoing",
        "Isle Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Echoing Isle was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General CG6WT",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor7",
      "name": "The Hidden Hold",
      "level": "40-60",
      "hubs": [
        "Camp Hidden",
        "Hold Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Hidden Hold was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General RZSI5K",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor8",
      "name": "The Shadow Crater",
      "level": "40-60",
      "hubs": [
        "Camp Shadow",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Shadow Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General OFJSX",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor9",
      "name": "The Radiant Sanctuary",
      "level": "40-60",
      "hubs": [
        "Camp Radiant",
        "Sanctuary Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Radiant Sanctuary was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 2DLLH",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor10",
      "name": "The Whispering Wilds",
      "level": "40-60",
      "hubs": [
        "Camp Whispering",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Whispering Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General B9JAU",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor11",
      "name": "The Shattered Wastes",
      "level": "40-60",
      "hubs": [
        "Camp Shattered",
        "Wastes Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Shattered Wastes was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 3DTD2D",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor12",
      "name": "The Sunken Hold",
      "level": "40-60",
      "hubs": [
        "Camp Sunken",
        "Hold Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Sunken Hold was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General O3UFWP",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor13",
      "name": "The Forgotten Depths",
      "level": "40-60",
      "hubs": [
        "Camp Forgotten",
        "Depths Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Forgotten Depths was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General JBJSGJ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcKalimdor14",
      "name": "The Radiant Reach",
      "level": "40-60",
      "hubs": [
        "Camp Radiant",
        "Reach Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Kalimdor. Legends say the Radiant Reach was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 8BKCEC",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 40-60 | Fringes: +42 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    }
  ],
  "ISLES": [
    {
      "id": "Gillijim",
      "name": "Gillijim's Isle",
      "level": "50-55",
      "hubs": [
        "Booty Bay Forward Post",
        "Bloodsail Anchorage",
        "The Tiki Atoll",
        "The Cursed Cove"
      ],
      "desc": "A massive island off the coast of Stranglethorn, restored directly from the Vanilla Alpha files.",
      "lore": "A lush tropical warzone where the Bloodsail Buccaneers and the Steamwheedle Cartel fight a proxy war. Features the Gillijim Naval BG.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General OXMKNI",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-55 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Lapidis",
      "name": "Isle of Doctor Lapidis",
      "level": "50-55",
      "hubs": [
        "The Lapidis Estate",
        "The Vats",
        "The Mutated Shore"
      ],
      "desc": "A terrifying island filled with biological experiments gone wrong.",
      "lore": "Doctor Lapidis has been creating massive chimaera-murloc hybrids. Players must infiltrate his mansion to steal his research notes.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 6IIPWS",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-55 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "DragonIsles",
      "name": "The Dragon Isles (Vanilla Concept)",
      "level": "60",
      "hubs": [
        "The Shattered Beachhead",
        "The Old God Temple",
        "The Feral Roost"
      ],
      "desc": "A small, ominous archipelago north of Lordaeron featuring an Old God temple and feral, devolved dragons.",
      "lore": "A pure endgame elite zone. Players must construct a ship via a massive server-wide effort to sail here.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General KQ3QM",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "CrimsonAtoll",
      "name": "The Crimson Atoll",
      "level": "Max Level PvP",
      "hubs": [
        "The Blood Arena",
        "The Drowned Docks"
      ],
      "desc": "A dedicated high-level PvP island off the coast of Stranglethorn Vale, run on the Blood Moon model.",
      "lore": "A lawless zone where grouping is disabled and nameplates are red. Blood Coins purchase exclusive mounts.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General XMW9LIS",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: Max Level PvP | Fringes: +NaN Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "TelAbim",
      "name": "Tel Abim",
      "level": "55-60",
      "hubs": [
        "Shipwreck Cove",
        "The Primate City",
        "The Banana Plantations"
      ],
      "desc": "The legendary island of bananas. A dense jungle island far south of Kalimdor.",
      "lore": "Ruled by highly intelligent, hostile gorillas and ancient titan machinery deep in the jungle.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 9JF0N",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 55-60 | Fringes: +57 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "PlunderIsle",
      "name": "Plunder Isle",
      "level": "50-60",
      "hubs": [
        "Bloodsail Hold",
        "The Pirate Kings Court",
        "Smugglers Run"
      ],
      "desc": "The true headquarters of the Bloodsail Buccaneers, located far south in the Great Sea.",
      "lore": "A sprawling pirate metropolis where outlaws rule. Players can earn infamy and participate in high-seas heists.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General GY8G6",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea0",
      "name": "The Hidden Vale",
      "level": "50-60",
      "hubs": [
        "Camp Hidden",
        "Vale Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Hidden Vale was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 11D4ZI",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea1",
      "name": "The Frozen Wilds",
      "level": "50-60",
      "hubs": [
        "Camp Frozen",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Frozen Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General VWAOZT",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea2",
      "name": "The Frozen Wilds",
      "level": "50-60",
      "hubs": [
        "Camp Frozen",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Frozen Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General MN2QJQ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea3",
      "name": "The Shattered Wilds",
      "level": "50-60",
      "hubs": [
        "Camp Shattered",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Shattered Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General SVWUD",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea4",
      "name": "The Forgotten Isle",
      "level": "50-60",
      "hubs": [
        "Camp Forgotten",
        "Isle Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Forgotten Isle was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General RY2I46",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea5",
      "name": "The Cursed Expanse",
      "level": "50-60",
      "hubs": [
        "Camp Cursed",
        "Expanse Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Cursed Expanse was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General FMCQGM",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea6",
      "name": "The Sunken Vale",
      "level": "50-60",
      "hubs": [
        "Camp Sunken",
        "Vale Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Sunken Vale was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General NXSHBI",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea7",
      "name": "The Frozen Reach",
      "level": "50-60",
      "hubs": [
        "Camp Frozen",
        "Reach Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Frozen Reach was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General CXS38O",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea8",
      "name": "The Frozen Shores",
      "level": "50-60",
      "hubs": [
        "Camp Frozen",
        "Shores Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Frozen Shores was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 17UBD",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea9",
      "name": "The Shadow Wilds",
      "level": "50-60",
      "hubs": [
        "Camp Shadow",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Shadow Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General E0PYCD",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea10",
      "name": "The Hidden Shores",
      "level": "50-60",
      "hubs": [
        "Camp Hidden",
        "Shores Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Hidden Shores was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General AO4EW96",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea11",
      "name": "The Radiant Hold",
      "level": "50-60",
      "hubs": [
        "Camp Radiant",
        "Hold Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Radiant Hold was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 2T5UUN",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea12",
      "name": "The Hidden Crater",
      "level": "50-60",
      "hubs": [
        "Camp Hidden",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Hidden Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 8Z6VF",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea13",
      "name": "The Sunken Vale",
      "level": "50-60",
      "hubs": [
        "Camp Sunken",
        "Vale Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Sunken Vale was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 2KVZ3",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea14",
      "name": "The Frozen Wilds",
      "level": "50-60",
      "hubs": [
        "Camp Frozen",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Frozen Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 5AIL2B",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea15",
      "name": "The Radiant Crater",
      "level": "50-60",
      "hubs": [
        "Camp Radiant",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Radiant Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General D4SU3L",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea16",
      "name": "The Forgotten Crater",
      "level": "50-60",
      "hubs": [
        "Camp Forgotten",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Forgotten Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General IU6H2I",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea17",
      "name": "The Cursed Depths",
      "level": "50-60",
      "hubs": [
        "Camp Cursed",
        "Depths Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Cursed Depths was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 4D3V2",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea18",
      "name": "The Hidden Expanse",
      "level": "50-60",
      "hubs": [
        "Camp Hidden",
        "Expanse Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Hidden Expanse was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General U2BZW",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcTheGreatSea19",
      "name": "The Lost Crater",
      "level": "50-60",
      "hubs": [
        "Camp Lost",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within The Great Sea. Legends say the Lost Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General JH8K",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 50-60 | Fringes: +52 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    }
  ],
  "WC3": [
    {
      "id": "KulTiras",
      "name": "Kul Tiras (The Proudmoore Holdouts)",
      "level": "60",
      "hubs": [
        "Boralus (Vanilla Concept)",
        "Tiragarde Sound",
        "The Ashvane Foundry"
      ],
      "desc": "The island nation of Kul Tiras, entirely cut off from the Alliance following the death of Daelin Proudmoore in WC3.",
      "lore": "The Horde seeks revenge, while the Alliance tries to bring the bitter Kul Tirans back into the fold. Features heavily armored marines and terrifying sea priests.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General GTTXZN",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Zandalar",
      "name": "Zandalar (The Golden Isle)",
      "level": "60",
      "hubs": [
        "Zuldazar Ruins",
        "The Loa Shrines",
        "The Blood Trolls Encampment"
      ],
      "desc": "The sinking island of Zandalar. The troll empire is fracturing as the cataclysmic events of the Maelstrom slowly destroy their home.",
      "lore": "Players work with King Rastakhan to quell blood troll rebellions and secure ancient artifacts before the island fully sinks.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General ZN4SGJ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "Undermine",
      "name": "Kezan & The Undermine",
      "level": "60",
      "hubs": [
        "The Undermine",
        "Kaja'mite Mines",
        "Trade Prince Palace"
      ],
      "desc": "The sprawling, subterranean goblin metropolis. A zone built vertically into a volcanic crater.",
      "lore": "Corporate warfare. Players can join different Cartels (Steamwheedle, Bilgewater, Venture Co.) and engage in sabotage, espionage, and hostile takeovers.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General G2GW0N",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "BrokenIsles",
      "name": "The Broken Isles (Vanilla Concept)",
      "level": "60",
      "hubs": [
        "Suramar Ruins",
        "The Stormreaver Wreckage",
        "Tomb of Sargeras Exterior"
      ],
      "desc": "The islands raised from the sea by Gul'dan in WC2 and explored by Maiev in WC3.",
      "lore": "Players trace the footsteps of Illidan and Maiev, battling the remaining naga forces and exploring the ruins of the ancient night elf civilization.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General FE7YLA",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "TombOfSargeras",
      "name": "The Tomb of Sargeras (Depths)",
      "level": "60 (Raid Zone)",
      "hubs": [
        "The Sealed Gates",
        "Gul'dan's Final Rest"
      ],
      "desc": "The sprawling, demonic labyrinth where the Avatar of Sargeras lies.",
      "lore": "Not a raid yet, but a massive elite outdoor dungeon like Tyrs Hand, filled with the ghosts of the Stormreaver clan and ancient demonic guardians.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General UAP9MD",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 (Raid Zone) | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "NorthrendVanguard",
      "name": "Northrend (The Frozen Coast)",
      "level": "60",
      "hubs": [
        "Valgarde (Alpha)",
        "The Icy Tundra",
        "Nerubian Sinkhole"
      ],
      "desc": "The very southern tip of Howling Fjord, representing the first tentative expeditions to Northrend since WC3.",
      "lore": "Players clash with the absolute fringes of the Scourge empire, encountering proto-drakes, vrykul, and the terrifying nerubians.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General XH2RX",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "EmeraldDream",
      "name": "The Emerald Dream (Rift of Aln)",
      "level": "60",
      "hubs": [
        "The Green Dragon Roost",
        "The Corrupted Glade"
      ],
      "desc": "The Vanilla concept for the Emerald Dream finally realized. A massive, shifting zone accessed via the four great portals.",
      "lore": "Players must maintain their sanity while navigating non-Euclidean geometry and battling the manifestations of the Old Gods.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General W25GZO",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore0",
      "name": "The Forgotten Isle",
      "level": "60",
      "hubs": [
        "Camp Forgotten",
        "Isle Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Forgotten Isle was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General W3MN58",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore1",
      "name": "The Echoing Crater",
      "level": "60",
      "hubs": [
        "Camp Echoing",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Echoing Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 8QWTO",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore2",
      "name": "The Shadow Isle",
      "level": "60",
      "hubs": [
        "Camp Shadow",
        "Isle Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Shadow Isle was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General T37GJ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore3",
      "name": "The Forgotten Peak",
      "level": "60",
      "hubs": [
        "Camp Forgotten",
        "Peak Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Forgotten Peak was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General DBGZIY",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore4",
      "name": "The Sunken Depths",
      "level": "60",
      "hubs": [
        "Camp Sunken",
        "Depths Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Sunken Depths was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General VOZOC",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore5",
      "name": "The Hidden Wilds",
      "level": "60",
      "hubs": [
        "Camp Hidden",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Hidden Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General SYM7E",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore6",
      "name": "The Whispering Wilds",
      "level": "60",
      "hubs": [
        "Camp Whispering",
        "Wilds Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Whispering Wilds was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 7T4CJ",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore7",
      "name": "The Forgotten Vale",
      "level": "60",
      "hubs": [
        "Camp Forgotten",
        "Vale Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Forgotten Vale was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General DDILFS",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore8",
      "name": "The Forgotten Crater",
      "level": "60",
      "hubs": [
        "Camp Forgotten",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Forgotten Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General HWY4FC",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore9",
      "name": "The Lost Vale",
      "level": "60",
      "hubs": [
        "Camp Lost",
        "Vale Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Lost Vale was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General XL2GD",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore10",
      "name": "The Hidden Expanse",
      "level": "60",
      "hubs": [
        "Camp Hidden",
        "Expanse Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Hidden Expanse was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General L8GAT",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore11",
      "name": "The Sunken Hold",
      "level": "60",
      "hubs": [
        "Camp Sunken",
        "Hold Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Sunken Hold was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General IN5ALB",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore12",
      "name": "The Cursed Wastes",
      "level": "60",
      "hubs": [
        "Camp Cursed",
        "Wastes Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Cursed Wastes was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General Q0BP4G",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore13",
      "name": "The Forgotten Expanse",
      "level": "60",
      "hubs": [
        "Camp Forgotten",
        "Expanse Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Forgotten Expanse was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General PDNQYF",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Frequent heavy rain and thunderstorms reducing visibility.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    },
    {
      "id": "ProcUnchartedLore14",
      "name": "The Hidden Crater",
      "level": "60",
      "hubs": [
        "Camp Hidden",
        "Crater Outpost",
        "The Neutral Ground"
      ],
      "desc": "A deeply secluded region within Uncharted Lore. Legends say the Hidden Crater was heavily impacted during the Third War.",
      "lore": "Players discover remnant forces from Warcraft 3 skirmishes here, desperately clinging to old orders and refusing to acknowledge the new world order.",
      "flightPaths": [
        "Primary Hub Flightmaster",
        "Forward Camp Gryphon/Wyvern",
        "Hidden Smuggler's Route"
      ],
      "notableNPCs": [
        "High General 7SGQDP",
        "The Wandering Spirit",
        "Lost Artisan"
      ],
      "resources": [
        "Rich Thorium Veins (Scattered)",
        "Dreamfoil Clusters",
        "Schools of Deviant Fish",
        "Black Lotus (Rare Spawn)"
      ],
      "weather": "Airtight and suffocating atmosphere, occasional arcane anomalies.",
      "secrets": [
        "A hidden cave behind the northern waterfall containing a rare vendor.",
        "An interactable ancient tablet that grants a 2-hour localized buff."
      ],
      "levelRanges": "Core Hubs: 60 | Fringes: +62 Elite",
      "factions": [
        "The Cenarion Expedition",
        "The Argent Dawn",
        "Local Resistance Faction"
      ]
    }
  ]
};