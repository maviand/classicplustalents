const fs = require('fs');

const REGIONS = {
  STARTING: 'Revamped Starting Zones',
  CAPITALS: 'Capital City Reclamations',
  INSURGENCY: 'Suramar-Style Regional Campaigns',
  EK: 'Eastern Kingdoms Expansion',
  KAL: 'Kalimdor Expansion',
  ISLES: 'The Uncharted Vanilla Isles'
};

const templates = {
  STARTING: [
    {
      id: 'NorthshireExpanded',
      name: 'Northshire Valley (Human)',
      level: '1-10',
      hubs: ['Northshire Abbey', 'The Hidden Resistance Camp', 'Echo Ridge Mine'],
      desc: 'The iconic valley has been expanded. The Defias Brotherhood presence is not just a few thugs; it is a full-blown military occupation of the vineyards.',
      lore: 'The Defias have cut off the valley from Goldshire. Players must organize a militia, sabotage Defias siege engines, and escort Marshal McBride in a climatic push to reopen the southern pass.'
    },
    {
      id: 'EchoIsles',
      name: 'The Echo Isles (Troll)',
      level: '1-10',
      hubs: ["Vol'jin's Vanguard", 'The Southern Atoll', "Sen'jin Encampment"],
      desc: "Trolls no longer share the Valley of Trials with Orcs. Players start directly on the Echo Isles, fighting to secure a permanent beachhead against Zalazane's dark voodoo magic.",
      lore: "A desperate fight for survival. Players help Vol'jin train raptors, construct defensive totems, and push Zalazane's mind-controlled trolls back into the interior. The zone culminates in a massive level 10 event where the entire zone rallies to hold off a Sea Witch invasion."
    },
    {
      id: 'NewTinkertown',
      name: 'Gnomeregan Surface (Gnome)',
      level: '1-10',
      hubs: ['Quarantine Zone 4', 'The Scrap-Yard', "Mekkatorque's Command"],
      desc: 'Gnomes begin in a heavily irradiated, quarantined camp right outside the sealed cog-doors of Gnomeregan.',
      lore: 'Pure technological survival. Players are tasked with venting radiation, saving irradiated survivors using experimental scrubbers, and testing the first prototypes of the Mechanostrider.'
    },
    {
      id: 'ValleyOfTrials',
      name: 'Valley of Trials (Orc)',
      level: '1-10',
      hubs: ['The Proving Grounds', "Kolkar's Ruin", 'Burning Blade Coven'],
      desc: 'The harsh proving grounds are under direct assault by a massive Centaur warband seeking to wipe out the Orcs before they can establish Durotar.',
      lore: 'A brutal introduction to Horde life. Players hold the northern choke-point against waves of Centaur raiders in a continuous, dynamic zone event.'
    },
    {
      id: 'Deathknell',
      name: 'Deathknell (Undead)',
      level: '1-10',
      hubs: ['The Shadow Grave', 'The Rotting Farm', "Night Web's Hollow"],
      desc: 'A splinter faction of the Scourge has infiltrated the starting area, leading to a civil war among the freshly raised dead.',
      lore: 'Players awaken to utter chaos. You must prove your free will by actively resisting Lich King whispers (a unique debuff mechanic) while hunting down Scourge loyalists.'
    },
    {
      id: 'Shadowglen',
      name: 'Shadowglen (Night Elf)',
      level: '1-10',
      hubs: ['Aldrassil', 'The Cleansing Pool', 'Starbreeze Village'],
      desc: 'Teldrassil is already failing. The Emerald Nightmare has seeped into the starting valley.',
      lore: 'A race against time. Players must use pure moonwell water to cleanse massive, pulsing nightmare nodes.'
    },
    {
      id: 'WildhammerPeak',
      name: 'Aerie Peak Heights (Wildhammer Dwarf)',
      level: '1-10',
      hubs: ['The Gryphon Roost', "Storm-Caller's Ridge", 'The High Altar'],
      desc: 'A starting experience for Wildhammer Dwarves high in the Hinterlands.',
      lore: 'Tame your first gryphon and defend the peak from Vilebranch Troll incursions.'
    },
    {
      id: 'RevantuskCoast',
      name: 'Revantusk Shores (Forest Troll)',
      level: '1-10',
      hubs: ['Revantusk Village', 'The Sunken Temple Beach', "Zentabra's Hut"],
      desc: 'Forest trolls loyal to the Horde start on the rugged eastern coast of the Hinterlands.',
      lore: 'Reclaim ancient artifacts from the sea and battle murloc tribes to prove your worth to the Horde.'
    }
  ],
  INSURGENCY: [
    {
      id: 'GilneasCityInsurgency',
      name: 'The Liberation of Gilneas City',
      level: '60 (Suramar-Style Narrative Campaign)',
      hubs: ['The Blackwald Under-Vaults', 'The Merchant Cellars', 'Crowley\'s Redoubt'],
      desc: 'A multi-week urban insurgency campaign. The city of Gilneas is under martial quarantine by Forsaken forces and renegade nobility. Players establish an underground resistance base in the sewer networks, use noble disguises to slip past plague-guard patrols, and liberate districts one by one.',
      lore: 'Mirroring the depth of Suramar, players collect Alchemical Wolfsbane to cure infected citizens, establish a network of underground smuggler routes in Keel Harbor, and sabotage Forsaken blight-cauldrons before launching the final assault on Greymane Court.'
    },
    {
      id: 'StromgardeResistance',
      name: 'The Arathor Restoration Campaign',
      level: '60 (Suramar-Style Narrative Campaign)',
      hubs: ['Trollbane Underground', 'Sanctuary of Arathor', 'The Defiant Forge'],
      desc: 'A dense urban reconstruction and espionage campaign inside the ruined fortress-city of Stromgarde in Arathi Highlands. Players operate from concealed subterranean crypts, decoding Syndicate ciphers and reclaiming the ancient district wards.',
      lore: 'Players gather ancient Arathor runestones to reactivate protective city barriers, disguise themselves as Syndicate mercenaries to infiltrate high-level war meetings, and progressively reclaim the Chapel, Arena, and Royal Keep.'
    },
    {
      id: 'EldarathLeylines',
      name: 'The Eldarath Leyline Campaign (Azshara)',
      level: '60 (Suramar-Style Narrative Campaign)',
      hubs: ['The Sunken Sanctum', 'Azuregos\' Bastion', 'Highborne Grotto'],
      desc: 'An ancient elven metropolitan ruin in Azshara where players establish a covert base, channel ancient leyline energy conduits, and walk disguised among Highborne spectral apparitions to prevent the Naga from summoning a colossal tidal elemental.',
      lore: 'Players feed dormant leyline pylons with Arcane Resonators, unlock forgotten Highborne teleporter pads across Azshara\'s cliffs, and rescue trapped Blue Dragonflight wyrms to prepare the final assault on the Temple of Arkkoran.'
    },
    {
      id: 'GnomereganUnderground',
      name: 'The Cogway Underground Resistance',
      level: '60 (Suramar-Style Narrative Campaign)',
      hubs: ['Sub-Vault 7 (Sanctuary)', 'The Vent Pipe Network', 'Tinker\'s Command'],
      desc: 'A deep infiltration campaign inside the contaminated, trogg-occupied underbelly of Gnomeregan. Players set up sealed, decontamination-safe forward workshops in abandoned maintenance pipes, deploying specialized scrubbers and repairing ancient steam golems.',
      lore: 'Players scavenge irradiated hyper-capacitors, don lead-lined Hazmat suits to cross lethal radioactive hot-zones, and build up an automated defense grid that progressively reclaims the industrial sectors leading to Thermaplugg\'s core.'
    }
  ],
  CAPITALS: [
    {
      id: 'GnomereganReclamation',
      name: 'Operation: Gnomeregan',
      level: '60 (World Event)',
      hubs: ["Tinker's Command (Neutral)", 'The Upper Cogway', 'Irradiation Scrubbers'],
      desc: 'A massive server-wide war effort to finally purge the radiation from Gnomeregan and reclaim it as a fully functional capital city.',
      lore: 'Both Alliance and Horde players participate in a server-wide event gathering copper, iron, and specialized engineering parts to build an atmospheric scrubber.'
    },
    {
      id: 'ZalazanesFall',
      name: "Zalazane's Fall",
      level: '60 (World Event)',
      hubs: ["Sen'jin Village (Command Post)", 'The Voodoo Atoll', 'The Dark Caverns'],
      desc: 'The Horde rallies behind Vol\'jin to launch a naval invasion of the inner Echo Isles, permanently removing Zalazane from power.',
      lore: 'Horde players participate in a 40-man open-world push across the islands, using troll bat-riders to bomb voodoo shields. Unlocks the inner Echo Isles as a sprawling troll capital.'
    },
    {
      id: 'LordaeronSurface',
      name: 'Ruins of Lordaeron Reconstruction',
      level: '60 (World Event)',
      hubs: ['The Upper Courtyard', "Sylvanas' Vanguard", 'The Blight Labs'],
      desc: 'The Forsaken begin actively rebuilding the surface ruins above the Undercity, establishing it as a fortified citadel against the Scarlet Crusade.',
      lore: 'Players gather stone from the ruined walls and defend forsaken masons from constant Scarlet ambushes. Real buildings are constructed on the surface over time.'
    },
    {
      id: 'StromgardeRebuilt',
      name: 'Stromgarde Restoration',
      level: '60 (World Event)',
      hubs: ['Trollbane Hall', 'The Syndicate Blockade', 'Defenders Gate'],
      desc: 'The Alliance pushes the Syndicate and Ogres out of the ruined city of Stromgarde in Arathi Highlands.',
      lore: 'A massive phased event where the Alliance secures the keep, repels Horde counter-attacks, and establishes a massive northern stronghold.'
    },
    {
      id: 'GilneasCity',
      name: 'The Battle for Gilneas City',
      level: '60 (World Event)',
      hubs: ['Greymane Manor', 'The Merchant Quarter', 'The Military Ward'],
      desc: 'The culmination of the Gilneas storyline. A three-way battle for the capital.',
      lore: 'The Forsaken attempt to plague the city while Genn Greymane tries to hold the line with his newly transformed army.'
    },
    {
      id: 'MountHyjalSummit',
      name: 'Nordrassil Reborn',
      level: '60 (World Event)',
      hubs: ['The World Tree Roots', 'Cenarion Encampment', "Archimonde's Remains"],
      desc: 'Players help the Night Elves heal the World Tree after the cataclysmic events of the Third War.',
      lore: 'Gathering waters from the Well of Eternity and defending the tree from Twilight Hammer cultists seeking to reignite the dormant fel magic.'
    }
  ],
  EK: [
    {
      id: 'Gilneas',
      name: 'Gilneas (Beyond the Greymane Wall)',
      level: '40-50',
      hubs: ['Greymane City (Contested)', 'Keel Harbor', 'Tempest Watch', 'The Blackwald'],
      desc: 'The gates are breached, but the sea route is contested. The Worgen curse is rampant, and the Forsaken navy is bombarding the northern shores.',
      lore: 'Players must navigate a three-way war between human loyalists, feral worgen packs (the Bloodfang), and Sylvanas\'s vanguard.'
    },
    {
      id: 'Northeron',
      name: 'Northeron & Grim Batol Surface',
      level: '50-55',
      hubs: ['Kirthaven', 'The Dragonmaw Gates', 'Thundermar', 'The Twilight Ridge'],
      desc: 'The Wildhammer heartland east of the Wetlands. A rugged alpine zone focused on Gryphon mastery and the Dragonmaw clan.',
      lore: 'Players assist Falstad Wildhammer in uniting the scattered dwarf clans to prepare a siege on Grim Batol.'
    },
    {
      id: 'NorthEPL',
      name: "The Northern Plaguelands (Quel'Thalas Border)",
      level: '55-60',
      hubs: ['Argent Forward Camp', 'The Highborne Ruins', 'Plague-wood Border', 'The Thalassian Pass'],
      desc: 'The scarred, impassable mountains north of Stratholme. A zone of pure horror where the Scourge has created massive flesh-stitcheries.',
      lore: "Players finally see the physical border of Quel'Thalas. The High Elves provide quests to sabotage Scourge supply lines."
    },
    {
      id: 'Deadwind',
      name: 'Deadwind Pass (Expanded)',
      level: '55-60',
      hubs: ["Ariden's Camp (Neutral)", 'The Vice', 'Karazhan Cellars', "The Master's Cellar"],
      desc: 'No longer just a travel hallway to Karazhan. Fully realized with an ogre settlement and a hidden warlock conclave.',
      lore: "The zone has a passive debuff, 'Medivh's Paranoia', requiring players to craft specific torches via Alchemy to explore without taking massive shadow damage."
    },
    {
      id: 'QuelthalasExterior',
      name: "Quel'Thalas Exterior (The Dead Scar)",
      level: '60',
      hubs: ['Windrunner Spire', 'The Ghostlands Border', 'The Dead Scar Reach'],
      desc: 'The burned out forests and scorched earth leading up to the Sunwell.',
      lore: 'Players fight remnants of the Scourge invasion from Warcraft 3. Features elite banshees and abominations.'
    },
    {
      id: 'TirisfalGladesExpanded',
      name: 'Tirisfal Coast & Whispering Shore',
      level: '10-20',
      hubs: ['The Whispering Shore', 'Agamand Mills Expanded', 'The Forgotten Docks'],
      desc: 'The forgotten northern coast of Tirisfal, infested with murlocs, naga, and submerged ruins.',
      lore: "Uncover the dark secrets of what lies beneath the Whispering Shore, hinting at ancient Old God activity long before Ahn'Qiraj."
    },
    {
      id: 'AlteracMountainsExpanded',
      name: 'Alterac Valleys & Peaks',
      level: '35-45',
      hubs: ['Crushridge Hold', 'The Syndicate Stronghold', 'Frostwolf Vanguard'],
      desc: 'Expanded vertically to include massive Ogre fortresses and the Syndicate headquarters.',
      lore: 'Deepens the lore of the Perenolde family and their treachery. Neutral players can actually gain reputation with the Syndicate through dark deeds.'
    }
  ],
  KAL: [
    {
      id: 'Uldum',
      name: 'Uldum (The Titan Vault)',
      level: '55-60',
      hubs: ['The Excavation', "Watcher's Rise", 'The Obsidian Quarry', 'The Halls of Origination'],
      desc: 'The authentic Vanilla concept of Uldum: an austere, mechanical, subterranean desert zone. Pure, terrifying Titan geometry.',
      lore: 'Players breach the gates using the Discs of Norgannon. Inside, they find the Tol\'vir fighting a losing war against the Qiraji.'
    },
    {
      id: 'Hyjal',
      name: 'Mount Hyjal',
      level: '58-60',
      hubs: ['Nordrassil Basecamp', 'The Whispering Gorge', 'Barrow Dens', 'The Fel-Scarred Peak'],
      desc: "The summit of Kalimdor, scarred by Archimonde's death in WC3. The Emerald Nightmare bleeds into the waking world.",
      lore: 'The demons are mostly dead, but their fel-blood has corrupted the Barrow Dens. Players work with the Cenarion Circle to purge Doomguards and Nightmare stalkers.'
    },
    {
      id: 'Azshara',
      name: 'Azshara (The Shattered Coast)',
      level: '45-55',
      hubs: ['Bilgewater Port', 'Valormok (Expanded)', 'Eldarath Ruins', 'Timbermaw Vanguard'],
      desc: 'Transformed from a barren cliffside into a bustling hub with a massive goblin port, Naga ruins, and the Blue Dragonflight.',
      lore: 'The Timbermaw War rages in the north. Azuregos now roams a much more dangerous, heavily populated elite region.'
    },
    {
      id: 'Winterspring',
      name: 'Winterspring (Frostwhisper Gorge)',
      level: '55-60',
      hubs: ['Starfall Village', 'Everlook (Expanded)', 'Mazthoril Exterior', 'Darkwhisper Pass'],
      desc: 'The southern half is now a sprawling endgame zone leading up to the gates of Mount Hyjal.',
      lore: 'Features the Mazthoril Deeps dungeon. Darkwhisper Pass is transformed into an elite demon-farming zone.'
    },
    {
      id: 'SilithusExpanded',
      name: 'Silithus (The Hive Wars)',
      level: '55-60',
      hubs: ['Cenarion Hold', "Valor's Rest", 'Bronzebeard Encampment', 'The Twilight Basecamp'],
      desc: 'Expanded with massive underground hive networks that act as non-instanced micro-dungeons.',
      lore: "Players can now fully explore the depths of Hive'Ashi, Zora, and Regal without entering the AQ instances."
    },
    {
      id: 'MoongladeExpanded',
      name: 'Moonglade Depths',
      level: '50-60',
      hubs: ['The Emerald Dream Portal', 'Shrine of Remulos', 'The Great Barrow'],
      desc: 'The serene Moonglade is under attack from within the Emerald Dream.',
      lore: 'Phased combat events where Druids and their allies must defend the barrow dens from Nightmare incursions.'
    }
  ],
  ISLES: [
    {
      id: 'Gillijim',
      name: "Gillijim's Isle",
      level: '50-55',
      hubs: ['Booty Bay Forward Post', 'Bloodsail Anchorage', 'The Tiki Atoll', 'The Cursed Cove'],
      desc: 'A massive island off the coast of Stranglethorn, restored directly from the Vanilla Alpha files.',
      lore: "A lush tropical warzone where the Bloodsail Buccaneers and the Steamwheedle Cartel fight a proxy war. Features the Gillijim Naval Battleground."
    },
    {
      id: 'Lapidis',
      name: 'Isle of Doctor Lapidis',
      level: '50-55',
      hubs: ['The Lapidis Estate', 'The Vats', 'The Mutated Shore'],
      desc: 'A terrifying island filled with biological experiments gone wrong, restored from early Alpha map data.',
      lore: 'Doctor Lapidis has been creating massive chimaera-murloc hybrids. Players must infiltrate his mansion to steal his research notes.'
    },
    {
      id: 'DragonIsles',
      name: 'The Dragon Isles (Vanilla Concept)',
      level: '60',
      hubs: ['The Shattered Beachhead', 'The Old God Temple', 'The Feral Roost'],
      desc: 'A small, ominous archipelago north of Lordaeron featuring an ancient pre-Titan Old God temple and feral, devolved proto-dragons.',
      lore: 'An elite endgame zone. Players must construct a seaworthy vessel via a server-wide effort to explore its forgotten shores.'
    },
    {
      id: 'TelAbim',
      name: 'Tel Abim',
      level: '55-60',
      hubs: ['Shipwreck Cove', 'The Primate Ridge', 'The Plantations'],
      desc: 'The legendary south sea island of bananas. A dense tropical jungle island far south of Kalimdor.',
      lore: 'Ruled by territorial primate packs and ancient titan machinery buried deep within the jungle caldera.'
    },
    {
      id: 'PlunderIsle',
      name: 'Plunder Isle',
      level: '50-60',
      hubs: ['Bloodsail Hold', "The Pirate King's Court", "Smuggler's Run"],
      desc: 'The true headquarters of the Bloodsail Buccaneers, located far south in the Great Sea.',
      lore: 'A sprawling pirate haven where outlaws rule. Players can earn infamy, battle naval privateers, and participate in high-seas heists.'
    }
  ]
};

// ENRICH METADATA FOR HANDCRAFTED ZONES
Object.values(templates).forEach(zoneList => {
  zoneList.forEach(zone => {
    zone.description = zone.desc;
    zone.majorQuests = [
      `The Fate of ${zone.name}`,
      `Defense of ${zone.hubs[0] || 'the Outpost'}`,
      `Secrets of ${zone.hubs[1] || 'the Wilds'}`
    ];
    zone.dungeonsAndRaids = [
      `${zone.name} Dungeon`,
      `${zone.name} Lair`
    ];
    zone.rareSpawns = [
      `Ancient ${zone.name.split(' ')[0]} Stalker`,
      `Corrupted Vanguard of ${zone.name.split(' ')[0]}`
    ];
    zone.environmentalHazards = [
      'Dense Fog reducing visibility',
      'Wilderness beasts stalking low-health targets'
    ];
  });
});

const tsFile = `// Auto-generated by generateWorld.cjs (POLISHED HANDCRAFTED CLASSIC+ EDITION WITH SURAMAR-STYLE CAMPAIGNS)

export const REGIONS = {
  STARTING: 'Revamped Starting Zones',
  INSURGENCY: 'Suramar-Style Regional Campaigns',
  CAPITALS: 'Capital City Reclamations',
  EK: 'Eastern Kingdoms Expansion',
  KAL: 'Kalimdor Expansion',
  ISLES: 'The Uncharted Vanilla Isles'
};

export interface ZoneItem {
  id: string;
  name: string;
  level: string;
  hubs: string[];
  desc: string;
  description: string;
  lore: string;
  majorQuests?: string[];
  dungeonsAndRaids?: string[];
  rareSpawns?: string[];
  environmentalHazards?: string[];
}

export const zonesData: Record<string, ZoneItem[]> = {
  [REGIONS.STARTING]: ${JSON.stringify(templates.STARTING, null, 2)},
  [REGIONS.INSURGENCY]: ${JSON.stringify(templates.INSURGENCY, null, 2)},
  [REGIONS.CAPITALS]: ${JSON.stringify(templates.CAPITALS, null, 2)},
  [REGIONS.EK]: ${JSON.stringify(templates.EK, null, 2)},
  [REGIONS.KAL]: ${JSON.stringify(templates.KAL, null, 2)},
  [REGIONS.ISLES]: ${JSON.stringify(templates.ISLES, null, 2)}
};

export const worldZonesData = zonesData;
`;

fs.writeFileSync('./src/data/zones.ts', tsFile);
console.log('Successfully wrote handcrafted zones.ts with Suramar-style Insurgency Campaigns and worldZonesData export.');
