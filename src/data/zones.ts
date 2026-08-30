// Handcrafted Classic+ World Zones (1.12 Lore Continuity Edition)

export const REGIONS = {
  STARTING: 'Revamped Starting Zones',
  INSURGENCY: 'Open-World Mobilization Frontlines',
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
  notableNPCs?: string[];
  factions?: string[];
  weather?: string;
  flightPaths?: string[];
  resources?: string[];
  secrets?: string[];
  levelRanges?: string;
}

export const zonesData: Record<string, ZoneItem[]> = {
  [REGIONS.STARTING]: [
    {
      id: "NorthshireExpanded",
      name: "Northshire Valley (Human)",
      level: "1-10",
      levelRanges: "Levels 1-10 (Alliance)",
      hubs: [
        "Northshire Abbey",
        "Echo Ridge Resistance Post",
        "Northshire Vineyards Redoubt"
      ],
      desc: "The iconic starter valley has been expanded. The Defias Brotherhood presence is an entrenched militia contesting the outer vineyards.",
      description: "The Defias Brotherhood has barricaded the southern road to Goldshire. Human recruits assist Marshal McBride in mobilizing local militia, reclaiming Echo Ridge Mine, and breaking the Defias blockade.",
      lore: "With Stormwind's royal army spread thin across Westfall and Redridge, the defense of Northshire relies upon newly initiated clerics, paladins, and warriors holding the line against Defias infiltrators.",
      notableNPCs: [
        "Marshal McBride",
        "Brother Paxton",
        "Milly Osworth",
        "Defias Ring-Leader Morgan"
      ],
      factions: [
        "Stormwind City",
        "The Silver Hand"
      ],
      weather: "Warm sunbeams filtering through Elwynn canopy with gentle afternoon rain.",
      flightPaths: [
        "Goldshire (Connecting to Stormwind)"
      ],
      resources: [
        "Peacebloom",
        "Silverleaf",
        "Copper Ore"
      ],
      secrets: [
        "A hidden lockbox behind the waterfall near Northshire River containing a tarnished silver signet.",
        "An ancient library tome tucked in the Abbey belfry detailing the First War."
      ]
    },
    {
      id: "EchoIsles",
      name: "The Echo Isles (Troll)",
      level: "1-10",
      levelRanges: "Levels 1-10 (Horde)",
      hubs: [
        "Vol'jin's Vanguard",
        "The Darkspear Shoreline",
        "Darkspear Training Grounds"
      ],
      desc: "Darkspear Trolls start directly on their ancestral islands, battling to break Zalazane's voodoo hexes.",
      description: "A desperate struggle for survival. Troll initiates rally under Vol'jin to commune with the Loa, train raptors, and cleanse the island of hexed cultists before crossing to Sen'jin Village.",
      lore: "Since the exodus from the South Seas, the Darkspear tribe has fought bitterly against the treacherous witch doctor Zalazane to preserve their sovereign home.",
      notableNPCs: [
        "Vol'jin",
        "Master Gadrin",
        "Witch Doctor Jin'Zil",
        "Zalazane's Hex-Weavers"
      ],
      factions: [
        "Darkspear Trolls",
        "Orgrimmar"
      ],
      weather: "Tropical ocean winds, periodic coastal downpours, and humid sea mist.",
      flightPaths: [
        "Sen'jin Coastline (Connecting to Razor Hill & Orgrimmar)"
      ],
      resources: [
        "Peacebloom",
        "Earthroot",
        "Copper Ore",
        "Oily Blackmouth"
      ],
      secrets: [
        "Submerged Naga ruins off the southern atoll holding an ancient tide-carved tablet.",
        "A hidden Loa shrine in the jungle canopy granting a temporary spirit buff."
      ]
    },
    {
      id: "NewTinkertown",
      name: "Gnomeregan Surface (Gnome)",
      level: "1-10",
      levelRanges: "Levels 1-10 (Alliance)",
      hubs: [
        "Quarantine Outpost 4",
        "The Scrap-Iron Workshop",
        "Mekkatorque's Surface Command"
      ],
      desc: "Gnomes begin outside the sealed radioactive cog-doors of Gnomeregan, salvaging gear and deploying scrubbers.",
      description: "Technological triage in the freezing snow. Gnomish inventors deploy mobile atmospheric scrubbers, rescue stranded refugees, and assemble mechanized defenses against irradiated trogg incursions.",
      lore: "Following the catastrophic irradiation of their subterranean capital, High Tinker Mekkatorque organizes the surviving gnomes on the Dun Morogh surface to prepare for reclamation.",
      notableNPCs: [
        "High Tinker Gelbin Mekkatorque",
        "Master Mechanic Castpipe",
        "Nevin Twistwrench",
        "Irradiated Vanguard"
      ],
      factions: [
        "Gnomeregan Exiles",
        "Ironforge"
      ],
      weather: "Sub-zero Dun Morogh blizzards, churning exhaust steam vents, and radiant green aurora.",
      flightPaths: [
        "Kharanos (Connecting to Ironforge)"
      ],
      resources: [
        "Peacebloom",
        "Silverleaf",
        "Copper Ore",
        "Scrap Machine Components"
      ],
      secrets: [
        "A malfunctioning steam-drone buried in a snowbank that can be re-wired into a temporary combat companion.",
        "A hidden access hatch leading to a sealed sub-vault with engineering schematics."
      ]
    },
    {
      id: "ValleyOfTrials",
      name: "Valley of Trials (Orc)",
      level: "1-10",
      levelRanges: "Levels 1-10 (Horde)",
      hubs: [
        "The Den of Trials",
        "Burning Blade Ridge",
        "Kolkar Hunting Grounds"
      ],
      desc: "The harsh proving grounds of Durotar where young orcs test their honor, combat strength, and shamanic bond.",
      description: "Young orcs prove their mettle by culling vicious scorpid broods, disrupting the clandestine Burning Blade cult in the hills, and securing the northern gateway into Durotar.",
      lore: "Under the leadership of Warchief Thrall, the Valley of Trials was established to forge the next generation of Horde champions in the brutal red canyons of Durotar.",
      notableNPCs: [
        "Krun Spinebreaker",
        "Zuretha Felsong",
        "Gornek",
        "Burning Blade Coven-Lord"
      ],
      factions: [
        "Orgrimmar",
        "Darkspear Trolls"
      ],
      weather: "Arid desert winds, scorching heat shimmer, and occasional canyon dust devils.",
      flightPaths: [
        "Razor Hill (Connecting to Orgrimmar & Crossroads)"
      ],
      resources: [
        "Peacebloom",
        "Silverleaf",
        "Copper Ore"
      ],
      secrets: [
        "A hidden shadow-altar in the crags above the Burning Blade cave guarded by a rare imp.",
        "An ancient Orc skeleton holding a primitive blood-forged throwing axe."
      ]
    },
    {
      id: "Deathknell",
      name: "Deathknell (Undead)",
      level: "1-10",
      levelRanges: "Levels 1-10 (Horde)",
      hubs: [
        "The Shadow Grave",
        "Deathknell Town Hall",
        "Night Web's Hollow"
      ],
      desc: "Freshly awakened Forsaken break free from the Lich King's grip amidst civil war in Tirisfal Glades.",
      description: "Awakening inside dusty crypts, newly liberated Forsaken reject the Scourge, eliminate mind-controlled remnants, and pledge their loyalty to the Dark Lady Sylvanas Windrunner.",
      lore: "In the wake of the Third War, the Scourge's iron grip on the undead of Lordaeron broke, birthing the free-willed Forsaken faction in the haunted hollows of Deathknell.",
      notableNPCs: [
        "Shadow Priest Sarvis",
        "Deathguard Saltain",
        "Novice Elreth",
        "Captain Dargol"
      ],
      factions: [
        "Undercity",
        "The Forsaken"
      ],
      weather: "Perpetual gloomy drizzle, haunting purple fog, and howling autumnal winds.",
      flightPaths: [
        "Brill (Connecting to Undercity & Silverpine)"
      ],
      resources: [
        "Peacebloom",
        "Silverleaf",
        "Copper Ore",
        "Grave Moss"
      ],
      secrets: [
        "An unmarked grave behind the chapel hiding a ring of dark magic.",
        "A hidden journal inside the burned tavern recounting the fall of Lordaeron."
      ]
    },
    {
      id: "Shadowglen",
      name: "Shadowglen (Night Elf)",
      level: "1-10",
      levelRanges: "Levels 1-10 (Alliance)",
      hubs: [
        "Aldrassil",
        "The Cleansing Pools",
        "Starbreeze Hollow"
      ],
      desc: "The serene heart of Teldrassil where kaldorei druids, sentinels, and priestesses protect the sacred world tree.",
      description: "Young Night Elves cleanse moonwells corrupted by shadow gremlins, tame savage forest beasts, and uncover early whispers of the Emerald Nightmare seeping into Teldrassil's roots.",
      lore: "Grown in the aftermath of the Third War without the Dragon Aspects' blessings, Teldrassil's sacred groves already show subtle symptoms of dark corruption.",
      notableNPCs: [
        "Arch Druid Fandral Staghelm's Emissaries",
        "Priestess Iverron",
        "Tenaron Stormgrip",
        "Ursal the Mauler"
      ],
      factions: [
        "Darnassus",
        "Cenarion Circle"
      ],
      weather: "Mystical purple moonlight, gentle twilight breezes, and shimmering fairy wisps.",
      flightPaths: [
        "Dolanaar (Connecting to Rut'theran Village)"
      ],
      resources: [
        "Peacebloom",
        "Silverleaf",
        "Copper Ore"
      ],
      secrets: [
        "A hidden hollow inside the giant boughs of Aldrassil with an Elune blessing shrine.",
        "A submerged chest beneath the moonwell containing an ancient star-shard."
      ]
    },
    {
      id: "WildhammerNortheron",
      name: "Northeron Valley (Wildhammer Dwarf)",
      level: "1-10",
      levelRanges: "Levels 1-10 (Alliance)",
      hubs: [
        "Kirthaven Outpost",
        "Storm-Caller's Ridge",
        "The High Gryphon Roost"
      ],
      desc: "The alpine highland foothills of Northeron connecting Loch Modan and the Wetlands to the Hinterlands.",
      description: "Wildhammer dwarven youths tame their first fledging gryphons, master storm-shamanism and marksmanship, and repel aggressive Vilebranch and Dragonmaw scouting parties.",
      lore: "Perched above the Wetlands and Loch Modan, Northeron serves as the ancestral southern gateway of the Wildhammer clan, directly linked to Ironforge trade routes.",
      notableNPCs: [
        "Falstad Wildhammer's Scouts",
        "Storm-Shaman Grimjaw",
        "Rana Gryphon-Tamer"
      ],
      factions: [
        "Wildhammer Clan",
        "Ironforge"
      ],
      weather: "Alpine mountain winds, crisp pine scents, and rolling thunder clouds.",
      flightPaths: [
        "Thelsamar / Menethil Harbor (Connected via Mountain Tunnel Pass)"
      ],
      resources: [
        "Peacebloom",
        "Silverleaf",
        "Earthroot",
        "Copper Ore"
      ],
      secrets: [
        "An ancient Wildhammer burial cairn in the upper crags holding an inscribed runic hammer.",
        "A hidden mountain cave with an eagle aerie rewarding a temporary agility blessing."
      ]
    }
  ],
  [REGIONS.INSURGENCY]: [
    {
      id: "GilneasMobilization",
      name: "The Gilneas Reclamation Front",
      level: "60",
      levelRanges: "Level 60 Open-World Frontline",
      hubs: [
        "The Greymane Royal Redoubt",
        "Keel Harbor Smuggler's Wharf",
        "The Blackwald Resistance Camp"
      ],
      desc: "An open-world frontline warzone across the mist-shrouded peninsula of Gilneas.",
      description: "Alliance and neutral forces support King Genn Greymane's battle-hardened worgen in a fierce three-way campaign to reclaim the district garrisons from Forsaken blight-corps and rogue noble cabals.",
      lore: "Breached during the cataclysmic events of the Third War, Gilneas stands as a grim battlefield where human resilience and feral worgen curse fight side by side.",
      notableNPCs: [
        "King Genn Greymane",
        "Lord Darius Crowley",
        "Packleader Ivar Bloodfang",
        "Forsaken Blight-Master Belmont"
      ],
      factions: [
        "Gilnean Liberation Front",
        "Forsaken High Command"
      ],
      weather: "Thick coastal fog, relentless cold rain, and gloomy Victorian dusk.",
      flightPaths: [
        "Greymane Court",
        "Keel Harbor"
      ],
      resources: [
        "Black Lotus",
        "Mountain Silversage",
        "Rich Thorium Veins",
        "Grave Moss"
      ],
      secrets: [
        "A hidden alchemical laboratory beneath Greymane Court detailing wolfsbane purification formulas.",
        "Submerged pirate shipwrecks off Keel Harbor holding locked smuggler chests."
      ]
    },
    {
      id: "StromgardeMobilization",
      name: "The Arathor Restoration Front",
      level: "60",
      levelRanges: "Level 60 Open-World Frontline",
      hubs: [
        "Sanctuary of Thoradin",
        "Trollbane Royal Keep",
        "The Defiant Forge"
      ],
      desc: "A gritty urban reconstruction and siege warzone inside the ruined capital city of Stromgarde in Arathi Highlands.",
      description: "Danath Trollbane's veterans launch a coordinated open-world offensive to purge Syndicate assassins, Boulderfist ogres, and Forsaken expansionists from the historic districts of Arathor.",
      lore: "The ancient human kingdom that first united mankind against the troll empires during the Troll Wars fights to rise from the ashes of betrayal.",
      notableNPCs: [
        "Danath Trollbane",
        "Marshal Marris",
        "Syndicate Commander Falconcrest",
        "Prince Galen Trollbane's Ghost"
      ],
      factions: [
        "League of Arathor",
        "The Defilers"
      ],
      weather: "Overcast highland winds, dry thunderclaps, and rolling autumn plains.",
      flightPaths: [
        "Refuge Pointe (Expanded)",
        "Stromgarde Keep"
      ],
      resources: [
        "Dreamfoil",
        "Sorrowmoss",
        "Rich Thorium Veins",
        "Truesilver Deposits"
      ],
      secrets: [
        "The subterranean Crypt of Thoradin containing ancient Arathor tablets and runic blade fragments.",
        "A Syndicate cipher cache hidden behind the arena grandstands."
      ]
    },
    {
      id: "SilithusHiveWars",
      name: "Silithus: The Grand Hive Mobilization",
      level: "60",
      levelRanges: "Level 60 World War Effort",
      hubs: [
        "Cenarion Hold (Fortified)",
        "Twilight Chasm Vanguard",
        "Bronzebeard Expedition Post"
      ],
      desc: "Massive open-world hive excavations and frontline logistical encampments across the shifting desert sands.",
      description: "Cenarion Circle druids, Bronzebeard miners, and faction champions unearth subterranean hive burrows, disrupt Twilight Hammer ritual pylons, and stockpile war supplies for the Scarab Wall opening.",
      lore: "Beneath the southern dunes of Kalimdor, the Old God C'Thun stirs within the Temple of Ahn'Qiraj, directing infinite swarms of silithid to conquer the surface.",
      notableNPCs: [
        "Highlord Leoric Von Zeldig",
        "Commander Mar'alith",
        "Geologist Larksbane",
        "Twilight Lord Everun"
      ],
      factions: [
        "Cenarion Circle",
        "Brood of Nozdormu"
      ],
      weather: "Blinding sandstorms, sweltering desert heat, and ominous shadow eclipses.",
      flightPaths: [
        "Cenarion Hold",
        "South Dune Forward Camp"
      ],
      resources: [
        "Black Lotus",
        "Dreamfoil",
        "Mountain Silversage",
        "Rich Thorium Veins",
        "Silicate Dust"
      ],
      secrets: [
        "An ancient buried Ahn'Qiraj obelisk that activates temporary shadow resistance buffs when deciphered.",
        "A hidden wind-stone summoning chamber in the Twilight Outskirts."
      ]
    },
    {
      id: "AzsharaCoastlines",
      name: "Azshara: The Shattered Coastal War",
      level: "50-55",
      levelRanges: "Levels 50-55 (Contested)",
      hubs: [
        "Bilgewater Port (Horde)",
        "Talrendis Point (Alliance)",
        "The Eldarath Coastal Ruins"
      ],
      desc: "The rugged cliffs of Azshara transformed into an active military and naval harbor zone.",
      description: "Steamwheedle and Bilgewater goblins construct massive coastal shipyards, while Alliance sentinels and Horde warbands clash over ancient Kaldorei leyline ruins and Azuregos' roaming territory.",
      lore: "Once the gleaming jewel of Queen Azshara's pre-Sundering empire, the jagged coasts of Azshara remain saturated with volatile arcane energy and vengeful Naga nobility.",
      notableNPCs: [
        "Baron Revilgaz's Trade Emissary",
        "Azuregos the Blue Dragon",
        "Lady Hatecoil",
        "Timbermaw Chieftain"
      ],
      factions: [
        "Steamwheedle Cartel",
        "Timbermaw Hold",
        "Darnassus / Orgrimmar"
      ],
      weather: "Golden autumnal breezes, sweeping coastal surf, and surging arcane storms.",
      flightPaths: [
        "Valormok",
        "Talrendis Point",
        "Bilgewater Port"
      ],
      resources: [
        "Dreamfoil",
        "Mountain Silversage",
        "Rich Thorium Veins",
        "Golden Sansam"
      ],
      secrets: [
        "A submerged Highborne palace off the coast containing the Arcanite Vault of Eldarath.",
        "Azuregos' hidden meditation grotto in the mountain crags."
      ]
    }
  ],
  [REGIONS.CAPITALS]: [
    {
      id: "GnomereganReclamation",
      name: "Operation: Gnomeregan",
      level: "60 (World Mobilization)",
      levelRanges: "Level 60 Capital Reconstruction",
      hubs: [
        "Tinker's Surface Command",
        "The Upper Cogway",
        "Cleaned Decontamination Hub"
      ],
      desc: "A server-wide engineering and military effort to purge the lower radiation and reclaim Gnomeregan as a functional Alliance capital.",
      description: "Players contribute refined thorium, copper, and specialized cooling parts to power massive atmospheric scrubbers while driving mutated trogg warlords out of the central residential districts.",
      lore: "After years of exile in Ironforge, High Tinker Mekkatorque coordinates the final tactical push to restore Gnomeregan to its technological golden age.",
      notableNPCs: [
        "Gelbin Mekkatorque",
        "Tinkerwiz",
        "Mekgineer Thermaplugg",
        "Sprocket-Master Fizzlecrank"
      ],
      factions: [
        "Gnomeregan Exiles",
        "Ironforge"
      ],
      weather: "Steam exhaust clouds, pristine snowy mountain peaks, and glowing electric sparks.",
      flightPaths: [
        "Gnomeregan Surface Station"
      ],
      resources: [
        "Mithril Ore",
        "Thorium Ore",
        "Engineering Reagents"
      ],
      secrets: [
        "An automated underground monorail station leading directly to Ironforge Tinkertown.",
        "The Master Workshop Blueprint chamber in the lower executive offices."
      ]
    },
    {
      id: "ZalazanesFall",
      name: "The Liberation of the Echo Isles",
      level: "60 (World Mobilization)",
      levelRanges: "Level 60 Capital Reconstruction",
      hubs: [
        "Darkspear Vanguard Point",
        "The Voodoo Atoll",
        "Vol'jin's Throne"
      ],
      desc: "Vol'jin's grand military offensive to permanently cleanse Zalazane's voodoo hexes and build the sovereign troll capital.",
      description: "Horde champions gather sacred mojo, brew anti-hex draughts with Bwonsamdi's blessing, and storm the inner isles to construct the grand Darkspear longhouses and raptor pens.",
      lore: "Under the guidance of the Loa and Warchief Thrall's backing, the Darkspear tribe permanently reclaims their rightful home in the South Seas.",
      notableNPCs: [
        "Vol'jin",
        "Witch Doctor Zalazane",
        "Bwonsamdi the Loa of Graves",
        "Vanira the Bat Rider"
      ],
      factions: [
        "Darkspear Trolls",
        "Orgrimmar"
      ],
      weather: "Warm tropical ocean breeze, rhythmic drumming echoes, and sparkling blue lagoons.",
      flightPaths: [
        "Darkspear Isle Flight Post"
      ],
      resources: [
        "Kingsblood",
        "Sungrass",
        "Iron Ore",
        "Oily Blackmouth"
      ],
      secrets: [
        "Bwonsamdi's secret underwater altar granting a 1-hour shadow resistance blessing.",
        "An ancient troll treasure chest buried in the coral reefs."
      ]
    }
  ],
  [REGIONS.EK]: [
    {
      id: "Northeron",
      name: "Northeron & Grim Batol Foothills",
      level: "50-55",
      levelRanges: "Levels 50-55 (Contested)",
      hubs: [
        "Kirthaven Fortress",
        "The Dragonmaw Gate Redoubt",
        "Thundermar Outpost"
      ],
      desc: "The rugged alpine highlands east of the Wetlands and north of Loch Modan, focused on Gryphon mastery and Wildhammer lore.",
      description: "Wildhammer mountaineers clash with Dragonmaw orc holdouts and Twilight cultists trying to breach the cursed gates of Grim Batol.",
      lore: "Northeron has stood as the rugged heartland of Wildhammer culture since the War of the Three Hammers, sheltering their most revered gryphon breeding aeries.",
      notableNPCs: [
        "Falstad Wildhammer",
        "Kurdran Wildhammer",
        "Warchief Nek'rosh (Grim Batol Outskirts)",
        "Gryphon-Master Thorgas"
      ],
      factions: [
        "Wildhammer Clan",
        "Thorium Brotherhood"
      ],
      weather: "Crisp mountain gales, rolling fog across jagged peaks, and jagged lightning strikes.",
      flightPaths: [
        "Kirthaven",
        "Thundermar"
      ],
      resources: [
        "Mountain Silversage",
        "Plaguebloom",
        "Rich Thorium Veins",
        "Mithril Ore"
      ],
      secrets: [
        "An ancient titan observation platform hidden in the northern crags overlooking the Twilight Highlands.",
        "A hidden red dragonflight sanctuary cave high above Kirthaven."
      ]
    },
    {
      id: "NorthEPL",
      name: "Northern Plaguelands (Quel'Thalas Border)",
      level: "55-60",
      levelRanges: "Levels 55-60 (Contested)",
      hubs: [
        "Argent Forward Encampment",
        "Quel'Lithien Lodge",
        "The Thalassian Gate Border"
      ],
      desc: "The blighted, scarred frontier north of Stratholme and east of the Ghostlands pass.",
      description: "High Elf rangers and Argent Dawn paladins wage a grim war of attrition against Scourge necromancers and gargoyle flocks guarding the sealed gates of Quel'Thalas.",
      lore: "The site where Arthas's undead army marched north to desecrate the Sunwell during the Third War, leaving behind a scarred wasteland of blighted soil.",
      notableNPCs: [
        "Ranger Lord Hawkspear",
        "Lord Maxwell Tyrosus",
        "Archmage Angela Dosantos",
        "Baron Rivendare's Vanguard"
      ],
      factions: [
        "Argent Dawn",
        "Silvermoon Remnants"
      ],
      weather: "Noxious plague mist, ashen snowfall, and eerie green moonlight.",
      flightPaths: [
        "Argent Forward Camp",
        "Quel'Lithien Lodge"
      ],
      resources: [
        "Black Lotus",
        "Plaguebloom",
        "Rich Thorium Veins",
        "Dreamfoil"
      ],
      secrets: [
        "A hidden High Elf sun-crystal shrine that temporarily cleanses the plague debuff.",
        "An encrypted Scourge courier satchel containing invasion orders for Stratholme."
      ]
    },
    {
      id: "Deadwind",
      name: "Deadwind Pass (Expanded)",
      level: "55-60",
      levelRanges: "Levels 55-60 (Contested)",
      hubs: [
        "Ariden's Camp (Neutral)",
        "The Vice Outpost",
        "Karazhan Front Gates"
      ],
      desc: "Expanded into a fully realized endgame zone featuring the Karazhan Crypts, dark ogre enclaves, and rogue demon covens.",
      description: "Saturated with Medivh's residual magical fallout, Deadwind Pass challenges high-level travelers with spatial rifts, ghostly nobles, and elite demon patrols.",
      lore: "The epicenter of the leyline nexus created by Aegwynn and corrupted by Sargeras when possessing the Last Guardian Medivh.",
      notableNPCs: [
        "Archmage Alturus",
        "Ariden the Dark Rider",
        "Khadgar's Spectral Messenger"
      ],
      factions: [
        "The Violet Eye",
        "Thorium Brotherhood"
      ],
      weather: "Perpetual eerie gloom, unnatural magical updrafts, and haunting shadow whispers.",
      flightPaths: [
        "Deadwind Camp (Violet Eye Flight)"
      ],
      resources: [
        "Grave Moss",
        "Sorrowmoss",
        "Rich Thorium Veins",
        "Dark Iron Ore"
      ],
      secrets: [
        "The sealed entrance to the Karazhan Crypts under the cemetery.",
        "A hidden arcane leyline stone near The Vice granting bonus spell power."
      ]
    }
  ],
  [REGIONS.KAL]: [
    {
      id: "Uldum",
      name: "Uldum (The Titan Biosphere)",
      level: "55-60",
      levelRanges: "Levels 55-60 (Contested)",
      hubs: [
        "Prospector's Excavation Post",
        "The Watcher's Rise",
        "The Obsidian Terrace"
      ],
      desc: "The authentic pre-Cataclysm concept of Uldum: an austere, subterranean mechanical titan research desert facility.",
      description: "Breached using the Discs of Norgannon, players discover ancient earthen custodians and Tol'vir guardians waging war against intruding Qiraji burrowers.",
      lore: "Constructed by the Titan Keepers to house the Engine of Origination and safeguard the evolutionary biospheres of southern Kalimdor.",
      notableNPCs: [
        "Brann Bronzebeard",
        "Watcher Norgannon's Projection",
        "Custodian Prime",
        "Tol'vir Sun-Priest"
      ],
      factions: [
        "Explorers' League",
        "Keepers of Uldum"
      ],
      weather: "Brilliant desert sunlight, cool marble interiors, and crackling titan energy fields.",
      flightPaths: [
        "Excavation Headquarters"
      ],
      resources: [
        "Black Lotus",
        "Golden Sansam",
        "Rich Thorium Veins",
        "Titan Relic Fragments"
      ],
      secrets: [
        "A hidden constellation puzzle in the Maker's Hall opening a vault of rare gems.",
        "An ancient titan disc recounting the ordering of Kalimdor."
      ]
    },
    {
      id: "Hyjal",
      name: "Mount Hyjal (Summit of Kalimdor)",
      level: "58-60",
      levelRanges: "Levels 58-60 (Contested)",
      hubs: [
        "Nordrassil Basecamp",
        "The Whispering Gorge",
        "Sanctuary of Malorne"
      ],
      desc: "The summit of Kalimdor where Archimonde fell during the Third War, surrounding the healing World Tree Nordrassil.",
      description: "Cenarion Circle druids and veteran champions battle lingering Burning Legion doomguards and corrupt Nightmare satyrs threatening the roots of the World Tree.",
      lore: "The site of the fateful Battle of Mount Hyjal, where the combined forces of humans, orcs, and night elves shattered the Burning Legion's first invasion.",
      notableNPCs: [
        "Malfurion Stormrage's Whisper",
        "Arch Druid Hamuul Runetotem",
        "Remulos",
        "Shadow-Lord Fel-Bane"
      ],
      factions: [
        "Cenarion Circle",
        "Guardians of Hyjal"
      ],
      weather: "Alpine mountain breezes, glowing green world tree foliage, and tranquil starlight.",
      flightPaths: [
        "Nordrassil Summit Flight",
        "Sanctuary of Malorne"
      ],
      resources: [
        "Black Lotus",
        "Mountain Silversage",
        "Dreamfoil",
        "Rich Thorium Veins"
      ],
      secrets: [
        "The crystalline Waters of Eternity pool beneath Nordrassil granting full mana and health restoration.",
        "A hidden barrow den entrance in the northern ridge."
      ]
    }
  ],
  [REGIONS.ISLES]: [
    {
      id: "Gillijim",
      name: "Gillijim's Isle",
      level: "50-55",
      levelRanges: "Levels 50-55 (Contested)",
      hubs: [
        "Booty Bay Forward Post",
        "Bloodsail Anchorage",
        "The Tiki Atoll"
      ],
      desc: "A lush tropical island off the southern coast of Stranglethorn, restored directly from early Vanilla Alpha maps.",
      description: "Steamwheedle privateers and Bloodsail buccaneers wage high-seas naval skirmishes over sunken pirate gold and coastal shore artillery batteries.",
      lore: "Long forgotten in the mists of the Great Sea, Gillijim's Isle emerged as a haven for smugglers and daring fortune-seekers.",
      notableNPCs: [
        "Baron Revilgaz",
        "Captain Stillwater",
        "First Mate Crazik",
        "Tiki Witch Doctor"
      ],
      factions: [
        "Steamwheedle Cartel",
        "Bloodsail Buccaneers"
      ],
      weather: "Tropical ocean sunshine, warm sea spray, and violent tropical thunderstorms.",
      flightPaths: [
        "Gillijim Docks (Connected to Booty Bay)"
      ],
      resources: [
        "Sungrass",
        "Golden Sansam",
        "Mithril Ore",
        "Oily Blackmouth"
      ],
      secrets: [
        "A hidden pirate grotto behind a jungle waterfall holding locked smuggling crates.",
        "An ancient troll stone altar granting a temporary critical strike buff."
      ]
    },
    {
      id: "Lapidis",
      name: "Isle of Doctor Lapidis",
      level: "50-55",
      levelRanges: "Levels 50-55 (Contested)",
      hubs: [
        "The Lapidis Estate Grounds",
        "The Chemical Vats",
        "The Mutated Shoreline"
      ],
      desc: "A chilling island filled with biological experiments gone wrong, restored from early Alpha map data.",
      description: "Players infiltrate Doctor Lapidis's gothic mansion to dismantle his rogue alchemy operations and slay chimeric beasts created from murloc and chimaera DNA.",
      lore: "A renegade alchemist exiled from Dalaran and Undercity who set up a private, lawless laboratory in the Great Sea.",
      notableNPCs: [
        "Doctor Lapidis",
        "Head Lab Assistant Snivels",
        "Subject Zero",
        "Exiled Kirin Tor Investigator"
      ],
      factions: [
        "Kirin Tor Remnants",
        "The Royal Apothecary Society"
      ],
      weather: "Lurid green smog, perpetual drizzling rain, and bubbling chemical vapors.",
      flightPaths: [
        "Lapidis Landing"
      ],
      resources: [
        "Grave Moss",
        "Blindweed",
        "Mithril Ore",
        "Mutagenic Residue"
      ],
      secrets: [
        "The private laboratory vault under the estate containing unique alchemy formulas.",
        "A trapped test subject in the cellars offering a rare quest reward."
      ]
    },
    {
      id: "PlunderIsle",
      name: "Plunder Isle",
      level: "55-60",
      levelRanges: "Levels 55-60 (Contested)",
      hubs: [
        "Bloodsail Hold",
        "The Pirate King's Harbor",
        "Smuggler's Cove"
      ],
      desc: "The legendary fortified fortress and capital of the Bloodsail Buccaneers, far south in the Great Sea.",
      description: "An elite pirate bastion where outlaws rule supreme. Champions can infiltrate the stronghold, challenge the Pirate King, and seize naval war galleons.",
      lore: "The sovereign stronghold of Duke Falrevere and the Bloodsail high command, coordinating raids on shipping lanes across Kalimdor and the Eastern Kingdoms.",
      notableNPCs: [
        "Duke Falrevere",
        "Captain Keelhaul",
        "Quartermaster Lorn",
        "Smuggler Jin'kaza"
      ],
      factions: [
        "Bloodsail Buccaneers",
        "Booty Bay (Steamwheedle)"
      ],
      weather: "Warm tropical ocean winds, roaring cannon fire smoke, and clear starry night skies.",
      flightPaths: [
        "Plunder Isle Redoubt (Connected via Ship Routes)"
      ],
      resources: [
        "Dreamfoil",
        "Mountain Silversage",
        "Rich Thorium Veins",
        "Black Lotus"
      ],
      secrets: [
        "The Duke's private treasure vault requiring 3 stolen skeleton keys to unlock.",
        "A hidden smuggler's tunnel leading from the beach directly into the castle armory."
      ]
    }
  ]
};

export const worldZonesData = zonesData;
