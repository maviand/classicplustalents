export const REGIONS = {
  STARTING: 'Revamped Starting Zones',
  CAPITALS: 'Capital City Reclamations',
  EK: 'Eastern Kingdoms',
  KAL: 'Kalimdor',
  ISLES: 'The Uncharted Isles'
};

export const worldZonesData = {
  [REGIONS.STARTING]: [
    {
      id: 'EchoIsles',
      name: 'The Echo Isles (Troll)',
      level: '1-10',
      description: 'Trolls no longer share the Valley of Trials with Orcs. Players start directly on the Echo Isles, fighting to secure a permanent beachhead against Zalazane\'s dark magic.',
      hubs: ['Vol\'jin\'s Vanguard', 'The Southern Atoll', 'Sen\'jin Encampment'],
      lore: 'A desperate fight for survival. Players must help Vol\'jin train raptors, construct defensive totems, and push Zalazane\'s mind-controlled trolls back into the interior. The zone culminates in a massive level 10 event where the entire zone rallies to hold off a Sea Witch invasion.'
    },
    {
      id: 'NewTinkertown',
      name: 'Gnomeregan Surface (Gnome)',
      level: '1-10',
      description: 'Gnomes begin in a heavily irradiated, quarantined camp right outside the sealed doors of Gnomeregan.',
      hubs: ['Quarantine Zone 4', 'The Scrap-Yard', 'Mektorque\'s Command'],
      lore: 'Pure technological survival. Players are tasked with venting radiation, saving irradiated survivors using experimental scrubbers, and testing the first prototypes of the Mechanostrider.'
    },
    {
      id: 'NorthshireExpanded',
      name: 'Northshire Valley (Human)',
      level: '1-10',
      description: 'The iconic valley has been massively expanded. The Defias Brotherhood presence is not just a few thugs; it is a full-blown military occupation of the vineyards.',
      hubs: ['Northshire Abbey', 'The Hidden Resistance Camp', 'Echo Ridge Mine'],
      lore: 'The Defias have cut off the valley from Goldshire. Players must organize a militia, sabotage Defias siege engines, and escort Marshal McBride in a climatic push to reopen the southern pass.'
    },
    {
      id: 'ValleyOfTrials',
      name: 'Valley of Trials (Orc)',
      level: '1-10',
      description: 'The harsh proving grounds are under direct assault by a massive Centaur warband seeking to wipe out the Orcs before they can establish Durotar.',
      hubs: ['The Proving Grounds', 'Kolkar\'s Ruin', 'Burning Blade Coven'],
      lore: 'A brutal introduction to Horde life. Players hold the northern choke-point against waves of Centaur raiders in a continuous, dynamic zone event.'
    },
    {
      id: 'Deathknell',
      name: 'Deathknell (Undead)',
      level: '1-10',
      description: 'A splinter faction of the Scourge has infiltrated the starting area, leading to a civil war among the freshly raised dead.',
      hubs: ['The Shadow Grave', 'The Rotting Farm', 'Night Web\'s Hollow'],
      lore: 'Players awaken to utter chaos. You must prove your free will by actively resisting Lich King whispers (a unique debuff mechanic) while hunting down Scourge loyalists.'
    },
    {
      id: 'Shadowglen',
      name: 'Shadowglen (Night Elf)',
      level: '1-10',
      description: 'Teldrassil is already failing. The Emerald Nightmare has seeped into the starting valley.',
      hubs: ['Aldrassil', 'The Cleansing Pool', 'Starbreeze Village'],
      lore: 'A race against time. Players must use pure moonwell water to cleanse massive, pulsing nightmare nodes.'
    }
  ],
  [REGIONS.CAPITALS]: [
    {
      id: 'GnomereganReclamation',
      name: 'Operation: Gnomeregan',
      level: '60 (World Event)',
      description: 'A massive server-wide war effort to finally purge the radiation from Gnomeregan and reclaim it as a fully functional, sanctuary capital city.',
      hubs: ['Tinker\'s Command (Neutral)'],
      lore: 'Both Alliance and Horde Goblins/Gnomes work together in a server-wide event (similar to the AQ Gates). Players gather millions of copper, iron, and specialized engineering parts to build an atmospheric scrubber.'
    },
    {
      id: 'ZalazanesFall',
      name: 'Zalazane\'s Fall',
      level: '60 (World Event)',
      description: 'The Horde rallies behind Vol\'jin to launch a naval invasion of the inner Echo Isles, permanently removing Zalazane from power.',
      hubs: ['Sen\'jin Village (Command Post)'],
      lore: 'Horde players participate in a 40-man open-world push across the islands, using troll bat-riders to bomb voodoo shields. Unlocks the inner Echo Isles as a sprawling troll capital.'
    },
    {
      id: 'LordaeronSurface',
      name: 'Ruins of Lordaeron Recon.',
      level: '60 (World Event)',
      description: 'The Forsaken begin actively rebuilding the surface ruins above the Undercity, establishing it as a fortified citadel against the Scarlet Crusade.',
      hubs: ['The Upper Courtyard', 'Sylvanas\' Vanguard'],
      lore: 'Players gather stone from the ruined walls and defend forsaken masons from constant Scarlet ambushes. Real buildings are constructed on the surface over time.'
    },
    {
      id: 'StromgardeRebuilt',
      name: 'Stromgarde Restoration',
      level: '60 (World Event)',
      description: 'The Alliance pushes the Syndicate and Ogres out of the ruined city of Stromgarde in Arathi Highlands.',
      hubs: ['Trollbane Hall'],
      lore: 'A massive phased event where the Alliance secures the keep, repels Horde counter-attacks, and establishes a massive northern stronghold.'
    }
  ],
  [REGIONS.EK]: [
    {
      id: 'Gilneas',
      name: 'Gilneas (Beyond the Wall)',
      level: '40-50',
      description: 'The gates are sealed, but the sea route is not. The Worgen curse is rampant, and the Forsaken navy is bombarding the northern shores.',
      hubs: ['Greymane City (Contested City)', 'Keel Harbor', 'Tempest Watch'],
      lore: 'Players must navigate a three-way war between human loyalists, feral worgen packs (the Bloodfang), and Sylvanas\'s vanguard.'
    },
    {
      id: 'Northeron',
      name: 'Northeron & Grim Batol Surface',
      level: '50-55',
      description: 'The Wildhammer heartland east of the Wetlands. A rugged alpine zone focused on Gryphon mastery and the Dragonmaw clan.',
      hubs: ['Kirthaven', 'The Dragonmaw Gates', 'Thundermar'],
      lore: 'Players assist Falstad Wildhammer in uniting the scattered dwarf clans to prepare a siege on Grim Batol.'
    },
    {
      id: 'NorthEPL',
      name: 'The Northern Plaguelands',
      level: '55-60',
      description: 'The scarred, impassable mountains north of Stratholme. A zone of pure horror where the Scourge has created massive flesh-stitcheries.',
      hubs: ['Argent Forward Camp', 'The Highborne Ruins', 'Plague-wood Border'],
      lore: 'Players finally see the physical border of Quel\'Thalas. The High Elves provide quests to sabotage Scourge supply lines.'
    },
    {
      id: 'Deadwind',
      name: 'Deadwind Pass (Expanded)',
      level: '55-60',
      description: 'No longer just a hallway to Karazhan. Fully realized with an ogre settlement and a hidden warlock conclave.',
      hubs: ['Ariden\'s Camp (Neutral)', 'The Vice', 'Karazhan Cellars'],
      lore: 'The zone has a passive debuff, "Medivh\'s Paranoia," requiring players to craft specific torches via Alchemy to explore without taking massive shadow damage.'
    },
    {
      id: 'QuelthalasExterior',
      name: 'Quel\'Thalas Exterior',
      level: '60',
      description: 'The burned out forests leading up to the Sunwell.',
      hubs: ['Windrunner Spire', 'The Ghostlands Border'],
      lore: 'Players fight remnants of the Scourge invasion from Warcraft 3. Features elite banshees and abominations.'
    }
  ],
  [REGIONS.KAL]: [
    {
      id: 'Uldum',
      name: 'Uldum (The Titan Vault)',
      level: '55-60',
      description: 'The Vanilla concept of Uldum: an austere, mechanical, subterranean desert zone. Pure, terrifying Titan geometry.',
      hubs: ['The Excavation', 'Watcher\'s Rise', 'The Obsidian Quarry'],
      lore: 'Players breach the gates using the Discs of Norgannon. Inside, they find the Tol\'vir fighting a losing war against the Qiraji.'
    },
    {
      id: 'Hyjal',
      name: 'Mount Hyjal',
      level: '58-60',
      description: 'The summit of Kalimdor, scarred by Archimonde\'s death in WC3. The Emerald Nightmare bleeds into the waking world.',
      hubs: ['Nordrassil Basecamp', 'The Whispering Gorge', 'Barrow Dens'],
      lore: 'The demons are mostly dead, but their fel-blood has corrupted the Barrow Dens. Players work with the Cenarion Circle to purge Doomguards and Nightmare stalkers.'
    },
    {
      id: 'Azshara',
      name: 'Azshara (The Shattered Coast)',
      level: '45-55',
      description: 'Transformed from a barren cliffside into a bustling hub with a massive goblin port, Naga ruins, and the Blue Dragonflight.',
      hubs: ['Bilgewater Port', 'Valormok (Expanded)', 'Eldarath Ruins', 'Timbermaw Vanguard'],
      lore: 'The Timbermaw War rages in the north. Azuregos now roams a much more dangerous, heavily populated elite region.'
    },
    {
      id: 'Winterspring',
      name: 'Winterspring (Frostwhisper Gorge)',
      level: '55-60',
      description: 'The southern half is now a sprawling endgame zone leading up to the gates of Mount Hyjal.',
      hubs: ['Starfall Village', 'Everlook (Expanded)', 'Mazthoril Exterior'],
      lore: 'Features the Mazthoril Deeps dungeon. Darkwhisper Pass is transformed into an elite farming zone.'
    },
    {
      id: 'SilithusExpanded',
      name: 'Silithus (The Hive Wars)',
      level: '55-60',
      description: 'Expanded with massive underground hive networks that act as non-instanced micro-dungeons.',
      hubs: ['Cenarion Hold', 'Valor\'s Rest', 'Bronzebeard Encampment'],
      lore: 'Players can now fully explore the depths of Hive\'Ashi, Zora, and Regal without entering the AQ instances.'
    }
  ],
  [REGIONS.ISLES]: [
    {
      id: 'Gillijim',
      name: 'Gillijim\'s Isle',
      level: '50-55',
      description: 'A massive island off the coast of Stranglethorn, restored directly from the Vanilla Alpha files.',
      hubs: ['Booty Bay Forward Post', 'Bloodsail Anchorage', 'The Tiki Atoll'],
      lore: 'A lush tropical warzone where the Bloodsail Buccaneers and the Steamwheedle Cartel fight a proxy war. Features the Gillijim Naval BG.'
    },
    {
      id: 'Lapidis',
      name: 'Isle of Doctor Lapidis',
      level: '50-55',
      description: 'A terrifying island filled with biological experiments gone wrong.',
      hubs: ['The Lapidis Estate', 'The Vats'],
      lore: 'Doctor Lapidis has been creating massive chimaera-murloc hybrids. Players must infiltrate his mansion to steal his research notes.'
    },
    {
      id: 'DragonIsles',
      name: 'The Dragon Isles (Vanilla Concept)',
      level: '60',
      description: 'A small, ominous archipelago north of Lordaeron featuring an Old God temple and feral, devolved dragons.',
      hubs: ['The Shattered Beachhead'],
      lore: 'A pure endgame elite zone. Players must construct a ship via a massive server-wide effort to sail here.'
    },
    {
      id: 'CrimsonAtoll',
      name: 'The Crimson Atoll',
      level: 'Max Level PvP',
      description: 'A dedicated high-level PvP island off the coast of Stranglethorn Vale, run on the Blood Moon model.',
      hubs: ['None (Free for All)'],
      lore: 'A lawless zone where grouping is disabled and nameplates are red. Blood Coins purchase exclusive mounts.'
    },
    {
      id: 'TelAbim',
      name: 'Tel Abim',
      level: '55-60',
      description: 'The legendary island of bananas. A dense jungle island far south of Kalimdor.',
      hubs: ['Shipwreck Cove', 'The Primate City'],
      lore: 'Ruled by highly intelligent, hostile gorillas and ancient titan machinery deep in the jungle.'
    }
  ]
};
