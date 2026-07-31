import React, { useState } from 'react';

const REGIONS = {
  EK: 'Eastern Kingdoms',
  KAL: 'Kalimdor',
  ISLES: 'The Uncharted Isles'
};

export default function World() {
  const [activeRegion, setActiveRegion] = useState(REGIONS.EK);
  const [activeZone, setActiveZone] = useState('Gilneas');

  const zones = {
    [REGIONS.EK]: [
      {
        id: 'Gilneas',
        name: 'Gilneas (Beyond the Wall)',
        level: '40-50',
        description: 'The gates are sealed, but the sea route is not. Players infiltrate the peninsula to find a kingdom ripping itself apart. The Worgen curse is rampant, and the Forsaken navy is bombarding the northern shores.',
        hubs: ['Greymane City (Contested City)', 'Keel Harbor', 'Tempest Watch'],
        lore: 'A massive WC3 thread resolved: What happened to Genn Greymane? Players must navigate a three-way war between human loyalists, feral worgen packs (the Bloodfang), and Sylvanas\'s vanguard. The zone culminates in a server-wide effort to repair the Greymane Wall from the inside to stop a full Forsaken invasion.'
      },
      {
        id: 'Northeron',
        name: 'Northeron & Grim Batol Surface',
        level: '50-55',
        description: 'The Wildhammer heartland east of the Wetlands (what would later become Twilight Highlands, but drastically different in Vanilla). A rugged alpine zone focused on Gryphon mastery and the looming shadow of the Dragonmaw clan.',
        hubs: ['Kirthaven', 'The Dragonmaw Gates', 'Thundermar'],
        lore: 'The Red Dragonflight is broken, but not gone. Players assist Falstad Wildhammer in uniting the scattered dwarf clans to prepare a siege on Grim Batol. Features massive elite areas where players must hijack Dragonmaw anti-air cannons to clear the skies of corrupted drakes.'
      },
      {
        id: 'NorthEPL',
        name: 'The Northern Plaguelands (Quel\'Thalas Border)',
        level: '55-60',
        description: 'The scarred, impassable mountains north of Stratholme. A zone of pure horror where the Scourge has created massive flesh-stitcheries to breach the Elfgates.',
        hubs: ['Argent Forward Camp', 'The Highborne Ruins'],
        lore: 'Players finally see the physical border of Quel\'Thalas. The High Elves (now allied) provide quests to sabotage Scourge supply lines. This zone serves as the primary farming ground for Naxxramas attunement materials and features "The Charnel Pits," an open-world elite farming hub.'
      },
      {
        id: 'Deadwind',
        name: 'Deadwind Pass (Expanded)',
        level: '55-60',
        description: 'No longer just a hallway to Karazhan. The zone is fully realized with a sprawling ogre settlement, a hidden warlock conclave, and the terrifying Karazhan Crypts.',
        hubs: ['Ariden\'s Camp (Neutral)', 'The Vice'],
        lore: 'The lingering curse of Medivh. The zone has a passive debuff, "Medivh\'s Paranoia," requiring players to craft specific torches via Inscription/Alchemy to explore the deep corners of the zone without suffering constant hallucinations (spawning shadow-mobs that only the afflicted player can see).'
      }
    ],
    [REGIONS.KAL]: [
      {
        id: 'Uldum',
        name: 'Uldum (The Titan Vault)',
        level: '55-60',
        description: 'Located in southern Tanaris. This is the Vanilla concept of Uldum: an austere, mechanical, subterranean desert zone. No Egyptian pastiche, no Harrison Jones. Pure, terrifying Titan geometry.',
        hubs: ['The Excavation (Goblin/Dwarf co-op)', 'Watcher\'s Rise'],
        lore: 'Players breach the gates using the Discs of Norgannon (continuing the Uldaman questline). Inside, they find the Tol\'vir (obsidian centaurs, true to WC3) fighting a losing war against the Qiraji who have tunnelled in from Ahn\'Qiraj. A zone entirely focused on unearthing the true purpose of Azeroth.'
      },
      {
        id: 'Hyjal',
        name: 'Mount Hyjal',
        level: '58-60',
        description: 'The summit of Kalimdor, scarred by Archimonde\'s death in WC3. A high-level contested zone where the Emerald Nightmare bleeds into the waking world.',
        hubs: ['Nordrassil Basecamp', 'The Whispering Gorge'],
        lore: 'The aftermath of Warcraft 3. The demons are mostly dead, but their fel-blood has corrupted the Barrow Dens. Players work with the Cenarion Circle to purge the remaining Doomguards and confront the Nightmare-corrupted Furbolg tribes. Unlocks the epic "Hyjal Front" battleground.'
      },
      {
        id: 'Azshara',
        name: 'Azshara (The Shattered Coast)',
        level: '45-55',
        description: 'Transformed from a barren, unfinished cliffside into a bustling mid-high level hub. Features a massive goblin port, Naga ruins, and the Blue Dragonflight.',
        hubs: ['Bilgewater Port', 'Valormok (Expanded)', 'Eldarath Ruins'],
        lore: 'The Timbermaw War rages in the north. Guilds can compete in the "Azshara Crater" PvP zone. Azuregos now roams a much more dangerous, heavily populated elite region, requiring full raid coordination just to reach him.'
      },
      {
        id: 'Winterspring',
        name: 'Winterspring (Frostwhisper Gorge)',
        level: '55-60',
        description: 'The southern half is now a sprawling endgame zone leading up to the gates of Mount Hyjal.',
        hubs: ['Starfall Village', 'Everlook (Expanded)'],
        lore: 'Features the Mazthoril Deeps dungeon. Darkwhisper Pass is transformed into an elite farming zone where players must avoid level 62+ Elite Frost Giants while gathering highly sought-after phase 4 crafting materials.'
      }
    ],
    [REGIONS.ISLES]: [
      {
        id: 'Gillijim',
        name: 'Gillijim\'s Isle & Isle of Doctor Lapidis',
        level: '50-55',
        description: 'Two massive islands off the coast of Stranglethorn and Tanaris, restored directly from the Vanilla Alpha files.',
        hubs: ['Booty Bay Forward Post', 'The Lapidis Estate'],
        lore: 'Gillijim\'s Isle is a lush tropical warzone where the Bloodsail Buccaneers and the Steamwheedle Cartel fight a proxy war using players. Doctor Lapidis\'s island features a mad scientist (gnome/goblin hybrid experiments) creating terrifying biological weapons. Ties heavily into the Missing Diplomat questline.'
      },
      {
        id: 'DragonIsles',
        name: 'The Dragon Isles',
        level: '60',
        description: 'Not the modern expansion. This is the Vanilla concept: a small, ominous archipelago north of Lordaeron featuring an Old God temple (the original concept for Ulduar) and feral, devolved dragons.',
        hubs: ['The Shattered Beachhead'],
        lore: 'A pure endgame zone. No flight paths. Players must construct a ship via a massive server-wide effort to sail here. The zone is entirely Elite, functioning as an outdoor dungeon required for Tier 2.5 crafting and legendary weapon quests.'
      },
      {
        id: 'CrimsonAtoll',
        name: 'The Crimson Atoll',
        level: 'Max Level PvP',
        description: 'A dedicated high-level PvP island off the coast of Stranglethorn Vale, run on the Blood Moon model: scheduled events every 3 hours.',
        hubs: ['None (Free for All)'],
        lore: 'A lawless zone where grouping is disabled and nameplates are red. Escalating stakes, free-for-all mechanics, and Blood Coins that purchase exclusive mounts and epic-quality weapons. During the event, "Echoes" spawn randomly that must be escorted for massive rewards.'
      }
    ]
  };

  const allZones = [...zones[REGIONS.EK], ...zones[REGIONS.KAL], ...zones[REGIONS.ISLES]];
  const selectedZoneData = allZones.find(z => z.id === activeZone);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          The Living World: Expanded
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          15,000% more content. Every unfinished map area realized. Every Warcraft 3 thread pulled. Azeroth is whole.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/3 space-y-6">
          {Object.entries(zones).map(([region, regionZones]) => (
            <div key={region} className="bg-[#120e0a] border border-[#3c3224] rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-4 border-b border-[#3c3224]">
                <h3 className="font-bold text-[#ffd100] uppercase tracking-widest text-sm">{region}</h3>
              </div>
              <div className="flex flex-col">
                {regionZones.map(zone => (
                  <button
                    key={zone.id}
                    onClick={() => { setActiveRegion(region); setActiveZone(zone.id); }}
                    className={`text-left p-3 text-sm transition-all border-l-4 ${
                      activeZone === zone.id 
                        ? 'border-[#ff8000] bg-[#1a140e] text-white font-bold' 
                        : 'border-transparent text-[#a69882] hover:bg-[#16120e] hover:text-[#d3c8b8]'
                    }`}
                  >
                    {zone.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:w-2/3">
          {selectedZoneData && (
            <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5 scale-150 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 border-b border-[#3c3224]/50 pb-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">{selectedZoneData.name}</h2>
                    <span className="inline-block bg-[#1a140e] border border-[#ff8000]/50 text-[#ff8000] px-3 py-1 rounded text-xs font-bold tracking-widest">
                      LEVEL {selectedZoneData.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#a69882] text-xs font-bold uppercase tracking-wider mb-2">Geography & Purpose</h4>
                    <p className="text-[#d3c8b8] leading-relaxed text-lg">{selectedZoneData.description}</p>
                  </div>

                  <div className="bg-[#1a140e] border border-[#3c3224] p-5 rounded-lg shadow-inner">
                    <h4 className="text-[#0070dd] text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Quest Hubs & Settlements
                    </h4>
                    <ul className="list-disc pl-5 text-[#d3c8b8] space-y-1">
                      {selectedZoneData.hubs.map((hub, i) => (
                        <li key={i}>{hub}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#1a140e] to-transparent border-l-4 border-[#a335ee] p-5 rounded-r-lg">
                    <h4 className="text-[#a335ee] text-sm font-bold uppercase tracking-wider mb-2">Warcraft 3 Lore & Adventure</h4>
                    <p className="text-[#d3c8b8] leading-relaxed italic">"{selectedZoneData.lore}"</p>
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
