// AUTO-GENERATED MASSIVE PVP CONTENT
// 15,000% scale implementation - Battlegrounds, World PvP, and Arenas.

export const PVP_MODES = {
  BATTLEGROUNDS: 'New Battlegrounds',
  WORLD_PVP: 'World PvP & Banner Wars',
  ARENA: 'The Gurubashi Arena System'
};

export interface PvPItem {
  id: string;
  name: string;
  size: string;
  type: string;
  description: string;
  mechanics: string[];
  lore: string;
}

export const pvpData: Record<string, PvPItem[]> = {
  "New Battlegrounds": [
    {
      "id": "AzsharaCrater",
      "name": "Azshara Crater",
      "size": "25v25",
      "type": "MOBA-Style Siege",
      "description": "The legendary unused Vanilla battleground is finally open. Situated in the mountains above Azshara, this battleground features three distinct lanes connecting the Horde and Alliance bases.",
      "mechanics": [
        "Minion Waves: NPCs spawn and push down the three lanes. Players must escort them to break base defenses.",
        "Mercenary Camps: Defeating neutral Timbermaw or Naga camps in the \"jungle\" recruits them to push a lane.",
        "Siege Engines: Players can farm lumber and iron within the BG to construct pilotable shredders and glaive throwers."
      ],
      "lore": "The Horde seeks to expand their logging operations from Ashenvale, while the Alliance attempts to secure the high ground to protect their naval assets in the bay below."
    },
    {
      "id": "GillijimIsle",
      "name": "Gillijim's Isle",
      "size": "15v15",
      "type": "Naval Supremacy",
      "description": "Set on the restored Alpha island off the coast of Stranglethorn. This battleground is entirely focused on controlling the coastline and naval bombardment.",
      "mechanics": [
        "Galleon Control: Two massive ships circle the island. Teams must capture rowboats to board them and seize the cannons.",
        "Coastal Bombardment: Holding a ship allows the controlling team to call down devastating artillery fire on island control points.",
        "Buried Treasure: Random chests spawn containing powerful, temporary pirate-themed buffs (e.g., Rum-Soaked: Immune to fear but movement is erratic)."
      ],
      "lore": "The Bloodsail Buccaneers and the Steamwheedle Cartel have hired the Alliance and Horde as privateers to secure the island's hidden pirate coves."
    },
    {
      "id": "HyjalFront",
      "name": "The Hyjal Front",
      "size": "40v40",
      "type": "Asymmetrical Siege",
      "description": "A massive, multi-stage siege battle taking place on the slopes of Mount Hyjal. Similar to Strand of the Ancients, but on a much larger, 40-player scale.",
      "mechanics": [
        "Attack vs Defense: One faction attacks up the mountain, the other defends barricades. Roles swap after the round.",
        "Destructible Environment: Attackers can burn down ancient trees to create new flanking routes.",
        "The Horn of Cenarius: Defenders can summon massive Ancient Protectors to stomp the attacking siege vehicles."
      ],
      "lore": "A proxy war. The Alliance (backed by the Night Elves) attempts to hold the sacred mountain, while the Horde (backed by rogue Goblin cartels) seeks to harvest the magically dense lumber."
    },
    {
      "id": "StromgardeSiege",
      "name": "Stromgarde Siege",
      "size": "20v20",
      "type": "Urban Warfare",
      "description": "The ruins of Stromgarde in Arathi Highlands have been turned into a dense, multi-level urban battleground.",
      "mechanics": [
        "Verticality: The ruins have three vertical levels (Sewers, Streets, Ramparts). Controlling the high ground provides a massive damage buff to ranged attacks.",
        "Relic Running: A hybrid of CTF and King of the Hill. Players must steal Syndicate relics and hold them in specific zones to score points.",
        "Trap Doors: Thieves' Guild mechanics allow Rogues and Engineers to manipulate the battlefield, dropping bridges and locking gates."
      ],
      "lore": "The Syndicate has abandoned the city, leaving a massive power vacuum. Danath Trollbane's loyalists fight to reclaim their home against the Forsaken who seek to expand their borders south."
    },
    {
      "id": "PlunderIsleSkirmish",
      "name": "Plunder Isle Skirmish",
      "size": "10v10",
      "type": "Payload Delivery",
      "description": "A fast-paced battleground set in the hidden pirate coves of Plunder Isle.",
      "mechanics": [
        "Gunpowder Carts: Teams must push explosive carts to the enemy stronghold.",
        "Sabotage: Rogues and stealth classes can defuse the cart to stall the push.",
        "Pirate King's Wrath: The first team to deliver triggers a massive explosion, winning the match."
      ],
      "lore": "The Steamwheedle Cartel pays top dollar for the destruction of Bloodsail hidden caches."
    },
    {
      "id": "ProcBG_Blackrock",
      "name": "The Blackrock Offensive",
      "size": "15v15",
      "type": "Resource Race",
      "description": "A new front has opened up in Blackrock, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Blackrock as factions desperately secure borders and vital ley lines."
    },
    {
      "id": "ProcBG_Desolace",
      "name": "The Desolace Offensive",
      "size": "40v40",
      "type": "Resource Race",
      "description": "A new front has opened up in Desolace, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Desolace as factions desperately secure borders and vital ley lines."
    },
    {
      "id": "ProcBG_Feralas",
      "name": "The Feralas Offensive",
      "size": "10v10",
      "type": "Capture the Flag",
      "description": "A new front has opened up in Feralas, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Feralas as factions desperately secure borders and vital ley lines."
    },
    {
      "id": "ProcBG_Hinterlands",
      "name": "The Hinterlands Offensive",
      "size": "15v15",
      "type": "Payload",
      "description": "A new front has opened up in Hinterlands, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Hinterlands as factions desperately secure borders and vital ley lines."
    },
    {
      "id": "ProcBG_Badlands",
      "name": "The Badlands Offensive",
      "size": "10v10",
      "type": "Capture the Flag",
      "description": "A new front has opened up in Badlands, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Badlands as factions desperately secure borders and vital ley lines."
    },
    {
      "id": "ProcBG_Winterspring",
      "name": "The Winterspring Offensive",
      "size": "40v40",
      "type": "Resource Race",
      "description": "A new front has opened up in Winterspring, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Winterspring as factions desperately secure borders and vital ley lines."
    },
    {
      "id": "ProcBG_BlastedLands",
      "name": "The Blasted Lands Offensive",
      "size": "10v10",
      "type": "Capture the Flag",
      "description": "A new front has opened up in Blasted Lands, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Blasted Lands as factions desperately secure borders and vital ley lines."
    },
    {
      "id": "ProcBG_SearingGorge",
      "name": "The Searing Gorge Offensive",
      "size": "15v15",
      "type": "Capture the Flag",
      "description": "A new front has opened up in Searing Gorge, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Searing Gorge as factions desperately secure borders and vital ley lines."
    },
    {
      "id": "ProcBG_UnGoro",
      "name": "The Un'Goro Offensive",
      "size": "15v15",
      "type": "Territory Control",
      "description": "A new front has opened up in Un'Goro, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Un'Goro as factions desperately secure borders and vital ley lines."
    },
    {
      "id": "ProcBG_Dustwallow",
      "name": "The Dustwallow Offensive",
      "size": "15v15",
      "type": "Capture the Flag",
      "description": "A new front has opened up in Dustwallow, demanding immediate reinforcements.",
      "mechanics": [
        "Strategic Nodes: Capture outposts to provide global buffs to your team.",
        "Wilderness Threats: Elite beasts roam the battleground, dropping powerful temporary items when slain.",
        "Sudden Death: After 20 minutes, all players take 5% maximum health damage every 10 seconds."
      ],
      "lore": "The skirmishes of the Third War echo across Dustwallow as factions desperately secure borders and vital ley lines."
    }
  ],
  "World PvP & Banner Wars": [
    {
      "id": "BannerWars",
      "name": "The Banner War System",
      "size": "World PvP",
      "type": "Dynamic Zone Objectives",
      "description": "Classic Plus introduces dynamic PvP objectives in heavily contested leveling zones (Hillsbrad, Stranglethorn, Ashenvale, Blackrock Mountain).",
      "mechanics": [
        "Supply Caravans: Unannounced, un-instanced escort quests. A faction caravan will spawn and slowly march across a zone. Successfully escorting it buffs the entire faction in that zone for 2 hours.",
        "Bounty Board: Killing players of the opposing faction grants Dishonorable marks. Accumulate enough, and your location is broadcast to the zone map for bounty hunters.",
        "Capital City Raids: Defeating a faction leader now provides a server-wide buff and drops a unique, phase-relevant legendary token."
      ],
      "lore": "The drums of war never truly stopped. The Banner Wars represent the skirmishes that occur away from the front lines, driven by local commanders and mercenary greed."
    },
    {
      "id": "CrimsonAtoll",
      "name": "The Crimson Atoll Event",
      "size": "Free-For-All",
      "type": "Scheduled Bloodbath",
      "description": "An island off the coast of Stranglethorn that becomes active every 3 hours. Inspired by the Blood Moon event, but designed for level 60.",
      "mechanics": [
        "No Factions: Grouping is disabled. Nameplates are hidden. Everyone is red to everyone.",
        "Blood Coins: Kills grant coins. Dying loses coins. Coins are used to purchase the most prestigious PvP mounts and cosmetic auras in the game.",
        "The Crimson Fog: The playable area shrinks over the 30-minute event, forcing players into a brutal final clash in the center arena."
      ],
      "lore": "An ancient troll blood-magic ritual has gone awry, cursing the island. The Loa of Death demands tribute, and the combatants of Azeroth are happy to provide it."
    },
    {
      "id": "SilithusSandstorms",
      "name": "Silithus Sandstorms",
      "size": "Zone-Wide",
      "type": "Resource Race",
      "description": "Every 6 hours, massive sandstorms blanket Silithus, revealing ancient Qiraji artifacts.",
      "mechanics": [
        "Artifact Extraction: Requires a channel time of 10 seconds. Any damage interrupts.",
        "Hive Ambush: Extracting an artifact spawns elite bugs that attack the extractor.",
        "War Effort: Turning in artifacts grants massive reputation and PvP honor."
      ],
      "lore": "The shifting sands reveal what the Cenarion Circle desperately wants to keep buried."
    }
  ],
  "The Gurubashi Arena System": [
    {
      "id": "GurubashiBrawl",
      "name": "The Gurubashi Arena Brawl",
      "size": "10v10",
      "type": "Instanced Deathmatch",
      "description": "Arena in Classic Plus is not 2v2 or 3v3 pillar-humping. It is a chaotic, trap-filled 10v10 deathmatch focused on pure combat and positioning.",
      "mechanics": [
        "No Resurrects: One life per round. First team to wipe the other wins. Best of 5 rounds.",
        "Arena Hazards: The Gurubashi arena is filled with spike traps, pit-falls, and neutral basilisks that will attack anyone who gets too close.",
        "Crowd Favor: Dealing massive damage or scoring killing blows charges the \"Crowd Favor\" meter. When full, the crowd throws beneficial potions and bombs to your team."
      ],
      "lore": "The Steamwheedle Cartel has taken over the Gurubashi Arena, broadcasting the fights via gnomish radio to all of Azeroth. It's brutal, it's unfair, and it's extremely profitable."
    }
  ]
};