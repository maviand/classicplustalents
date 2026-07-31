import React, { useState } from 'react';

const CATEGORIES = {
  STORM_VAULT: 'Stormwind Vault (Lvl 35-45)',
  GILNEAS: 'Gilneas Defenses (Lvl 40-50)',
  TIMBERMAW: 'Timbermaw Hold (Lvl 48-55)',
  LAPIDIS: 'Labs of Lapidis (Lvl 50-55)',
  ULDUM: 'Uldum Vaults (Lvl 55-60)',
  GRIM_BATOL: 'Grim Batol (Lvl 55-60)',
  HYJAL: 'Hyjal Barrow Dens (Lvl 60)',
  CRYPTS: 'Karazhan Crypts (Lvl 60)',
  RAIDS: 'Parallel Raid Tiers'
};

export default function PvE() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.STORM_VAULT);
  const [activeInstance, setActiveInstance] = useState('Vault_Upper');

  const instances = {
    [CATEGORIES.STORM_VAULT]: [
      {
        id: 'Vault_Upper',
        name: 'The Upper Brig',
        level: '35-38',
        size: '5 Player',
        description: 'The outermost layer of the Stormwind Vault. Guarded by loyalists to the treacherous nobles, housing political prisoners and Defias leaders.',
        bosses: ['Warden Thelwater\'s Successor', 'Rogue Noble Lessah', 'The Riot Caller'],
        lore: 'Investigate the infiltration of the Stormwind Guard. Players discover that the Defias Brotherhood has been receiving inside help to orchestrate a massive breakout.'
      },
      {
        id: 'Vault_Deep',
        name: 'The Deep Cellblocks',
        level: '38-42',
        size: '5 Player',
        description: 'Descending deeper into the bedrock. The cells here hold aberrations and magical experiments seized by the Kirin Tor but abandoned during the Third War.',
        bosses: ['Arcane Amalgamation', 'The Mad Wizard', 'Flesh-Stitcher Gorm'],
        lore: 'A horror-themed wing where prisoners have mutated due to unchecked arcane leakage. Players must seal the magical containment units.'
      },
      {
        id: 'Vault_Interrogation',
        name: 'The Interrogation Levels',
        level: '42-45',
        size: '5 Player',
        description: 'The deepest, darkest pit of the Vault. The domain of Katrana Prestor\'s personal torturers and hidden black dragonspawn.',
        bosses: ['Inquisitor Xar\'il', 'The Brood-Mother\'s Fang', 'Lord Gregor Lescovar'],
        lore: 'The shocking revelation of the Onyxia attunement line. Players fight actual dragonspawn beneath Stormwind City, proving Prestor\'s treachery once and for all.'
      }
    ],
    [CATEGORIES.GILNEAS]: [
      {
        id: 'Gilneas_Moors',
        name: 'The Cursed Moors',
        level: '40-44',
        size: '5 Player',
        description: 'The foggy, werewolf-infested swamps just beyond the Greymane Wall. Visibility is low, and the Worgen hunt in packs.',
        bosses: ['Alpha Bloodfang', 'The Howling Terror', 'Lord Crowley (Infected)'],
        lore: 'Players must rescue human refugees pinned down by the feral Worgen packs. Features mechanics where torches must be kept lit to prevent the Worgen from gaining stealth.'
      },
      {
        id: 'Gilneas_Blackwald',
        name: 'Blackwald Depths',
        level: '44-47',
        size: '5 Player',
        description: 'An ancient, overgrown druidic cavern system beneath Gilneas where the origin of the Worgen curse is hidden.',
        bosses: ['The Scythe-Bearer', 'Corrupted Ancient of War', 'Shadow of Goldrinn'],
        lore: 'Explores the Night Elf origins of the Worgen curse. Players recover fragments of the Scythe of Elune to help the Gilneans retain their sanity.'
      },
      {
        id: 'Gilneas_Manor',
        name: 'Greymane Manor',
        level: '47-50',
        size: '5 Player',
        description: 'The grand estate of King Genn Greymane, currently under siege by both feral Worgen and Forsaken infiltrators.',
        bosses: ['Forsaken Apothecary Venin', 'The Manor Guards', 'Genn Greymane (Survival Event)'],
        lore: 'A defense-oriented dungeon. Players do not kill Greymane; they must protect him and his inner circle from wave after wave of assassins until the royal guard secures the estate.'
      }
    ],
    [CATEGORIES.TIMBERMAW]: [
       {
        id: 'Timbermaw_Outer',
        name: 'The Outer Defenses',
        level: '48-51',
        size: '5 Player',
        description: 'The massive wooden barricades and tunnel entrances connecting Felwood to Moonglade, held by the uncorrupted Timbermaw but under heavy assault.',
        bosses: ['Deadwood Siegemaster', 'The Fel-Totem', 'Chieftain Bloodmaw'],
        lore: 'Help the Timbermaw hold the line against the Deadwood tribe. A heavy rep-grind dungeon required to access the deeper wings.'
      },
      {
        id: 'Timbermaw_Root',
        name: 'The Corrupted Root-Caverns',
        level: '51-53',
        size: '5 Player',
        description: 'Deep below the hold, where the roots of a minor world tree have been saturated with Fel blood.',
        bosses: ['Blighted Treant', 'The Satyr Cult', 'Fel-Root Manifestation'],
        lore: 'Players must use purified moonwell water to cleanse the corruption. Environmental hazards include pools of Fel acid and collapsing root-ceilings.'
      },
      {
        id: 'Timbermaw_Core',
        name: 'The Fel-Core',
        level: '53-55',
        size: '5 Player',
        description: 'The epicenter of the corruption. A massive subterranean cavern overlooking an underground fel-lava lake.',
        bosses: ['Gorgonn the Overseer', 'The Fel-Beast Matriarch', 'Avatar of the Legion'],
        lore: 'The Shadow Council has established a base here to corrupt the entirety of northern Kalimdor. Defeating the Avatar seals the tunnels from demonic incursion.'
      }
    ],
    [CATEGORIES.LAPIDIS]: [
      {
        id: 'Lapidis_Surface',
        name: 'The Surface Labs',
        level: '50-52',
        size: '5 Player',
        description: 'The island off the coast of Stranglethorn. The surface is littered with biological testing facilities and escaped mutant beasts.',
        bosses: ['Subject 001', 'The Chimera Master', 'Head Researcher Fizzle'],
        lore: 'Doctor Lapidis has been combining goblin engineering with horrific biology. Players discover the island is a weapons manufacturing facility for the highest bidder.'
      },
      {
        id: 'Lapidis_Biome',
        name: 'The Biome Chambers',
        level: '52-54',
        size: '5 Player',
        description: 'Massive artificial terrariums built to test bioweapons in extreme conditions (Arctic, Desert, Jungle).',
        bosses: ['The Frost-Wyrm Prototype', 'Sand-Worm Queen', 'The Overgrown Amalgam'],
        lore: 'Players must traverse three distinct mini-zones within the dungeon, each with its own weather hazards and specific elemental resistances required.'
      },
      {
        id: 'Lapidis_Factory',
        name: 'The Abomination Factory',
        level: '54-55',
        size: '5 Player',
        description: 'The deep underground complex where Lapidis creates flesh-golems rivalling the Scourge, but controlled by machinery.',
        bosses: ['The Flesh-Forge', 'Mecha-Abomination', 'Doctor Lapidis'],
        lore: 'The culmination of the island. Doctor Lapidis fights from within a massive flesh-and-steel mech suit. Drops unique engineering schematics and bizarre trinkets.'
      }
    ],
    [CATEGORIES.ULDUM]: [
      {
        id: 'Uldum_Halls',
        name: 'The Halls of Origination',
        level: '55-57',
        size: '5 Player',
        description: 'The entrance to the southern Tanaris Titan facility. Pristine, geometric, and guarded by stone Tol\'vir.',
        bosses: ['Gatekeeper Anubis', 'The Stone Council', 'Tol\'vir Vanguard'],
        lore: 'Players breach the facility using the Discs of Norgannon. The first wing establishes the aesthetic of true Vanilla Uldum—no sand, no mummies, just cold, unfeeling Titan machinery.'
      },
      {
        id: 'Uldum_Forges',
        name: 'The Obsidian Forges',
        level: '57-59',
        size: '5 Player',
        description: 'The manufacturing wing where the Obsidian Destroyers (from WC3) were built. Now malfunctioning and hostile.',
        bosses: ['The Furnace Master', 'Obsidian Prototype', 'The Mo\'arg Saboteur'],
        lore: 'The Burning Legion has sent operatives to steal the Obsidian Destroyer schematics. Players must navigate a 3-way fight between Titan constructs, Demons, and Qiraji tunnellers.'
      },
      {
        id: 'Uldum_Terrace',
        name: 'The Maker\'s Terrace',
        level: '59-60',
        size: '5 Player',
        description: 'The heart of the facility, overlooking the Forge of Origination.',
        bosses: ['The Re-Origination Protocol', 'Qiraji Emissary', 'Watcher Rajh'],
        lore: 'The Qiraji have breached the core. The Watcher is preparing to activate the Forge to wipe out Kalimdor rather than let the Old Gods take it. Players must stop the Qiraji and disable the Watcher.'
      }
    ],
    [CATEGORIES.GRIM_BATOL]: [
      {
        id: 'Grim_Gates',
        name: 'The Dragonmaw Gates',
        level: '55-57',
        size: '5 Player',
        description: 'The heavily fortified exterior entrance to the mountain city in Northeron. Guarded by Orcish anti-air flak cannons.',
        bosses: ['Gate-Captain Torg', 'The Flak-Bringer', 'Dragonmaw Beastmaster'],
        lore: 'The initial assault. Players must sabotage the anti-air defenses so the Wildhammer gryphon riders can provide air support for the deeper wings.'
      },
      {
        id: 'Grim_Pits',
        name: 'The Breeding Pits',
        level: '57-59',
        size: '5 Player',
        description: 'The horrific caverns where the Dragonmaw clan breaks young red dragons into submission using the Demon Soul\'s lingering magic.',
        bosses: ['The Dragon-Breaker', 'Corrupted Whelp Swarm', 'Matriarch\'s Sorrow'],
        lore: 'A harrowing rescue mission. Players must free captive drakes while avoiding the enraged, broken mature dragons that cannot be saved.'
      },
      {
        id: 'Grim_Sanctum',
        name: 'The Obsidian Sanctum (Vanilla)',
        level: '59-60',
        size: '5 Player',
        description: 'Deep below Grim Batol, the Black Dragonflight has a secret embassy brokering deals with the Dragonmaw.',
        bosses: ['Ambassador Infernus', 'The Twilight Whelp', 'Sartharion (Young)'],
        lore: 'Sets up the overarching Black Dragonflight conspiracy. Players discover that Deathwing\'s brood is manipulating the Orcs to wipe out the remaining Red dragons.'
      }
    ],
    [CATEGORIES.HYJAL]: [
      {
        id: 'Hyjal_Nightmare',
        name: 'The Nightmare Front',
        level: '60',
        size: '5 Player',
        description: 'The outer edges of the Barrow Dens, where the Emerald Nightmare is aggressively bleeding into the waking world.',
        bosses: ['Nightmare Stalker', 'The Sleeping Keeper', 'Manifestation of Dread'],
        lore: 'The trees run black with corrupted sap. A highly chaotic dungeon with mechanics involving managing a "Sanity" meter while fighting.'
      },
      {
        id: 'Hyjal_Druids',
        name: 'The Slumbering Druids',
        level: '60',
        size: '5 Player',
        description: 'Deep within the Barrow Dens. The Archdruids of the Cenarion Circle are trapped in a deep sleep, their dreams weaponized against them.',
        bosses: ['The Dream-Eater', 'Keeper Remulos (Corrupted)', 'The Nightmare Illusion'],
        lore: 'Players must dive into the minds of the sleeping druids (mini-phased boss arenas) to break their torpor and return them to the physical world.'
      },
      {
        id: 'Hyjal_Demon',
        name: 'The Demon-Scar',
        level: '60',
        size: '5 Player',
        description: 'The crater where Archimonde fell. The raw demonic energy has crystallized, and surviving demons are attempting to summon reinforcements.',
        bosses: ['The Crystal Fiend', 'Doomguard Commander', 'Echo of Archimonde'],
        lore: 'A brutal DPS-check dungeon. The final boss is a lingering fragment of Archimonde\'s power, requiring immense raid-level coordination to defeat in a 5-man setting. Drops pre-BiS weapons.'
      }
    ],
    [CATEGORIES.CRYPTS]: [
      {
        id: 'Crypts_Pauper',
        name: 'The Pauper\'s Walk',
        level: '60',
        size: '5 Player',
        description: 'The upper catacombs of Deadwind Pass. Massive, dusty halls filled with the restless dead of Medivh\'s victims.',
        bosses: ['The Grave-Keeper', 'Restless Aristocrat', 'The Necromancer of Deadwind'],
        lore: 'The entry point. Focuses heavily on shadow magic and undead crowd control. Sets the eerie, silent tone of the Crypts.'
      },
      {
        id: 'Crypts_UpsideDown',
        name: 'The Upside-Down Sinners',
        level: '60',
        size: '5 Player',
        description: 'The legendary flooded cavern. A massive, horrific water-breathing puzzle filled with hanging, drowned corpses.',
        bosses: ['The Drowned Behemoth', 'Spectral Tormentors', 'The Hanging Judge'],
        lore: 'Players receive a water-breathing buff upon entry but must navigate carefully. Disturbing the floating corpses summons un-CCable elites. Pure survival horror.'
      },
      {
        id: 'Crypts_Slough',
        name: 'The Slough of Despair',
        level: '60',
        size: '5 Player',
        description: 'The lowest point of the crypts. A cavern of flesh and shadow where Medivh discarded his most terrifying experiments.',
        bosses: ['The Flesh-Mound', 'Shadow of the Guardian', 'The Nameless Horror'],
        lore: 'A dungeon so dark it requires light-source offhands or torches to see the mechanics. Completing this unlocks the attunement to Karazhan (which comes in a later phase).'
      }
    ],
    [CATEGORIES.RAIDS]: [
      {
        id: 'EmeraldDreamRaid',
        name: 'The Emerald Nightmare',
        level: 'Level 60 - Phase C1.2',
        size: '40 Player Raid',
        description: 'Accessed via the four corrupted world-tree portals. A massive, surreal, non-Euclidean raid environment where the rules of gravity and distance are warped.',
        bosses: ['The Corrupted Green Aspects', 'Nightmare Lord Xavius', 'Hakkar the Soulflayer (Dream State)'],
        lore: 'A massive WC3/Vanilla loose thread resolved. Hakkar\'s defeat in Zul\'Gurub only banished his spirit to the Dream, where he merged with the Nightmare. This is the parallel 40-man raid to Blackwing Lair.'
      },
      {
        id: 'CrownOfTheDamned',
        name: 'Crown of the Damned (Stratholme Zenith)',
        level: 'Level 60 - Phase C1.4',
        size: '40 Player Raid',
        description: 'A floating necropolis hovering above the burning ruins of Stratholme. The true capital of the Scourge in Lordaeron.',
        bosses: ['The Blood Princes', 'Frostwyrm Matriarch', 'Kel\'Thuzad (First Encounter)'],
        lore: 'This is the raid that unlocks the Death Knight class. Players assault the necropolis to stop the Scourge from raising a new generation of commanders. Parallel to Naxxramas.'
      },
      {
        id: 'GrimBatolRaid',
        name: 'Grim Batol (The Inner Fortress)',
        level: 'Level 60 - Phase C1.3',
        size: '20 Player Raid',
        description: 'The deep interior of the fortress. A brutal siege against the highest echelons of the Dragonmaw Clan.',
        bosses: ['Nekros Skullcrusher', 'The Red Dragon Consorts', 'Deathwing\'s Emissary'],
        lore: 'The 20-player catch-up raid for Phase 3, parallel to Ruins of Ahn\'Qiraj. Heavy focus on fire resistance and massive AoE encounters.'
      }
    ]
  };

  // Flatten the instances for the active instance lookup
  const allInstances = Object.values(instances).flat();
  const selectedInstanceData = allInstances.find(i => i.id === activeInstance);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#ff8000] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Dungeon Hubs & Raids
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          24 brand new dungeons arranged into 8 massive "Winged" hubs, plus the new parallel raid tiers. The PvE endgame is vast, complex, and deeply tied to WC3 lore.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/3 space-y-6 h-[800px] overflow-y-auto pr-2 custom-scrollbar">
          {Object.entries(instances).map(([category, instList]) => (
            <div key={category} className="bg-[#120e0a] border border-[#3c3224] rounded-lg overflow-hidden shadow-lg mb-4">
              <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-4 border-b border-[#3c3224]">
                <h3 className="font-bold text-[#ffd100] uppercase tracking-widest text-[11px] leading-tight">{category}</h3>
              </div>
              <div className="flex flex-col">
                {instList.map(inst => (
                  <button
                    key={inst.id}
                    onClick={() => { setActiveCategory(category); setActiveInstance(inst.id); }}
                    className={`text-left p-3 text-sm transition-all border-l-4 ${
                      activeInstance === inst.id 
                        ? 'border-[#a335ee] bg-[#1a140e] text-white font-bold' 
                        : 'border-transparent text-[#a69882] hover:bg-[#16120e] hover:text-[#d3c8b8]'
                    }`}
                  >
                    {inst.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:w-2/3">
          {selectedInstanceData && (
            <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 opacity-5 scale-150 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 border-b border-[#3c3224]/50 pb-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">{selectedInstanceData.name}</h2>
                    <div className="flex gap-3">
                      <span className="inline-block bg-[#1a140e] border border-[#ff8000]/50 text-[#ff8000] px-3 py-1 rounded text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(255,128,0,0.2)]">
                        LEVEL {selectedInstanceData.level}
                      </span>
                      <span className="inline-block bg-[#1a140e] border border-[#a335ee]/50 text-[#a335ee] px-3 py-1 rounded text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(163,53,238,0.2)]">
                        {selectedInstanceData.size}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#a69882] text-xs font-bold uppercase tracking-wider mb-2">Instance Overview</h4>
                    <p className="text-[#d3c8b8] leading-relaxed text-lg">{selectedInstanceData.description}</p>
                  </div>

                  <div className="bg-[#1a140e] border border-[#3c3224] p-5 rounded-lg shadow-inner border-l-2 border-l-[#c41f3b]">
                    <h4 className="text-[#c41f3b] text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                      Notable Encounters
                    </h4>
                    <ul className="list-disc pl-5 text-[#d3c8b8] space-y-2">
                      {selectedInstanceData.bosses.map((boss, i) => (
                        <li key={i} className="font-medium text-white tracking-wide">{boss}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#1a140e] to-transparent border-l-4 border-[#0070dd] p-5 rounded-r-lg">
                    <h4 className="text-[#0070dd] text-sm font-bold uppercase tracking-wider mb-2">Lore & WC3 Integration</h4>
                    <p className="text-[#d3c8b8] leading-relaxed italic">"{selectedInstanceData.lore}"</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
