import React, { useState } from 'react';

const PVP_MODES = {
  BATTLEGROUNDS: 'New Battlegrounds',
  WORLD_PVP: 'World PvP & Banner Wars',
  ARENA: 'The Gurubashi Arena System'
};

export default function PvP() {
  const [activeMode, setActiveMode] = useState(PVP_MODES.BATTLEGROUNDS);
  const [activeItem, setActiveItem] = useState('AzsharaCrater');

  const pvpData = {
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
      }
    ]
  };

  const allPvP = [...pvpData[PVP_MODES.BATTLEGROUNDS], ...pvpData[PVP_MODES.WORLD_PVP], ...pvpData[PVP_MODES.ARENA]];
  const selectedPvPData = allPvP.find(p => p.id === activeItem);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#c41f3b] to-[#ff3b3b] wow-title drop-shadow-lg relative z-10 text-center">
          Player vs Player
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          5 brand new Battlegrounds, dynamic World PvP events, and the chaotic 10v10 Gurubashi Arena. The war in Warcraft is fully realized.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/3 space-y-6">
          {Object.entries(pvpData).map(([category, itemList]) => (
            <div key={category} className="bg-[#120e0a] border border-[#3c3224] rounded-lg overflow-hidden shadow-lg mb-4">
              <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-4 border-b border-[#3c3224] border-l-2 border-l-[#c41f3b]">
                <h3 className="font-bold text-[#c41f3b] uppercase tracking-widest text-sm">{category}</h3>
              </div>
              <div className="flex flex-col">
                {itemList.map(item => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveMode(category); setActiveItem(item.id); }}
                    className={`text-left p-3 text-sm transition-all border-l-4 ${
                      activeItem === item.id 
                        ? 'border-[#ff3b3b] bg-[#1a140e] text-white font-bold' 
                        : 'border-transparent text-[#a69882] hover:bg-[#16120e] hover:text-[#d3c8b8]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:w-2/3">
          {selectedPvPData && (
            <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 opacity-5 scale-150 pointer-events-none text-[#c41f3b]">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 border-b border-[#3c3224]/50 pb-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">{selectedPvPData.name}</h2>
                    <div className="flex gap-3">
                      <span className="inline-block bg-[#1a140e] border border-[#c41f3b]/50 text-[#c41f3b] px-3 py-1 rounded text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(196,31,59,0.2)]">
                        {selectedPvPData.size}
                      </span>
                      <span className="inline-block bg-[#1a140e] border border-[#ff8000]/50 text-[#ff8000] px-3 py-1 rounded text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(255,128,0,0.2)]">
                        {selectedPvPData.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#a69882] text-xs font-bold uppercase tracking-wider mb-2">Battleground Overview</h4>
                    <p className="text-[#d3c8b8] leading-relaxed text-lg">{selectedPvPData.description}</p>
                  </div>

                  <div className="bg-[#1a140e] border border-[#3c3224] p-5 rounded-lg shadow-inner border-l-2 border-l-[#ff8000]">
                    <h4 className="text-[#ff8000] text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      Unique Mechanics
                    </h4>
                    <ul className="list-disc pl-5 text-[#d3c8b8] space-y-2">
                      {selectedPvPData.mechanics.map((mech, i) => {
                        const [title, ...rest] = mech.split(': ');
                        return (
                          <li key={i} className="leading-relaxed">
                            <strong className="text-white">{title}: </strong>
                            <span className="text-[#a69882]">{rest.join(': ')}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#1a140e] to-transparent border-l-4 border-[#c41f3b] p-5 rounded-r-lg">
                    <h4 className="text-[#c41f3b] text-sm font-bold uppercase tracking-wider mb-2">The War Effort (Lore)</h4>
                    <p className="text-[#d3c8b8] leading-relaxed italic">"{selectedPvPData.lore}"</p>
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
