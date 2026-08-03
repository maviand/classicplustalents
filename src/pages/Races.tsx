import React, { useState } from 'react';
import { racesData, RaceData } from '../data/racesData';
import { TalentTree } from '../components/TalentTree';
import { WowTooltip } from '../components/WowTooltip';
import { Talent } from '../types/talents';

export default function Races() {
  const [activeRace, setActiveRace] = useState<RaceData>(racesData[0]);
  const [hoveredData, setHoveredData] = useState<{talent: Talent, rect: DOMRect} | null>(null);
  
  // Dummy state for TalentTree component so it renders the points correctly
  const [points, setPoints] = useState<Record<string, number>>({});

  const handleLeftClick = (talent: Talent) => {
    // Read-only viewing mode for now
  };
  
  const handleRightClick = (e: React.MouseEvent, talent: Talent) => {
    e.preventDefault();
  };

  const canAddPoint = (talent: Talent, treeTalents: Talent[]) => {
    return false;
  };

  const allianceRaces = racesData.filter(r => r.faction === 'Alliance');
  const hordeRaces = racesData.filter(r => r.faction === 'Horde');

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10">
          Playable & Allied Races
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          Eight new allied races join the war. Master the wild new 10-point Racial Talent Trees for all 16 races, featuring creative mechanics that redefine world interaction.
        </p>
      </div>

      {hoveredData && (
        <WowTooltip talent={hoveredData.talent} rect={hoveredData.rect} currentPoints={points[hoveredData.talent.id] || 0} />
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-[#120e0a] border border-[#1a4a75]/50 rounded-lg overflow-hidden shadow-lg mb-4">
            <div className="bg-gradient-to-r from-[#1a4a75]/20 to-[#120e0a] p-4 border-b border-[#1a4a75]/50 border-l-2 border-l-[#0070dd]">
              <h3 className="font-bold text-[#0070dd] uppercase tracking-widest text-sm">Alliance</h3>
            </div>
            <div className="flex flex-col p-2">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <span className="text-xs text-[#a69882] px-2 font-bold uppercase">Vanilla</span>
                <span className="text-xs text-[#a69882] px-2 font-bold uppercase">Allied</span>
                {allianceRaces.filter(r => r.type === 'Vanilla').map(race => (
                  <button
                    key={race.id}
                    onClick={() => setActiveRace(race)}
                    className={`text-left p-2 text-sm transition-all rounded ${
                      activeRace.id === race.id 
                        ? 'bg-[#1a4a75]/30 text-white font-bold border border-[#0070dd]/50' 
                        : 'border border-transparent text-[#d3c8b8] hover:bg-[#16120e] hover:border-[#3c3224]'
                    }`}
                  >
                    {race.name}
                  </button>
                ))}
                {allianceRaces.filter(r => r.type === 'Allied').map((race, index) => (
                  <button
                    key={race.id}
                    onClick={() => setActiveRace(race)}
                    className={`text-left p-2 text-sm transition-all rounded ${
                      activeRace.id === race.id 
                        ? 'bg-[#1a4a75]/30 text-white font-bold border border-[#0070dd]/50' 
                        : 'border border-transparent text-[#d3c8b8] hover:bg-[#16120e] hover:border-[#3c3224]'
                    }`}
                    style={{ gridColumn: 2, gridRow: index + 2 }}
                  >
                    {race.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#751a1a]/50 rounded-lg overflow-hidden shadow-lg mb-4">
            <div className="bg-gradient-to-r from-[#751a1a]/20 to-[#120e0a] p-4 border-b border-[#751a1a]/50 border-l-2 border-l-[#c41f3b]">
              <h3 className="font-bold text-[#c41f3b] uppercase tracking-widest text-sm">Horde</h3>
            </div>
            <div className="flex flex-col p-2">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <span className="text-xs text-[#a69882] px-2 font-bold uppercase">Vanilla</span>
                <span className="text-xs text-[#a69882] px-2 font-bold uppercase">Allied</span>
                {hordeRaces.filter(r => r.type === 'Vanilla').map((race, index) => (
                  <button
                    key={race.id}
                    onClick={() => setActiveRace(race)}
                    className={`text-left p-2 text-sm transition-all rounded ${
                      activeRace.id === race.id 
                        ? 'bg-[#751a1a]/30 text-white font-bold border border-[#c41f3b]/50' 
                        : 'border border-transparent text-[#d3c8b8] hover:bg-[#16120e] hover:border-[#3c3224]'
                    }`}
                    style={{ gridColumn: 1, gridRow: index + 2 }}
                  >
                    {race.name}
                  </button>
                ))}
                {hordeRaces.filter(r => r.type === 'Allied').map((race, index) => (
                  <button
                    key={race.id}
                    onClick={() => setActiveRace(race)}
                    className={`text-left p-2 text-sm transition-all rounded ${
                      activeRace.id === race.id 
                        ? 'bg-[#751a1a]/30 text-white font-bold border border-[#c41f3b]/50' 
                        : 'border border-transparent text-[#d3c8b8] hover:bg-[#16120e] hover:border-[#3c3224]'
                    }`}
                    style={{ gridColumn: 2, gridRow: index + 2 }}
                  >
                    {race.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Display */}
        <div className="lg:w-2/3">
          <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in fade-in duration-300 relative overflow-hidden min-h-[700px]">
             <div className="absolute top-0 right-0 opacity-5 scale-150 pointer-events-none text-white">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                  {activeRace.faction === 'Alliance' 
                    ? <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    : <path d="M12 2L2 22h20L12 2z"/>
                  }
                </svg>
            </div>

            <div className="relative z-10 flex flex-col xl:flex-row gap-8">
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-4xl font-extrabold text-white mb-2">{activeRace.name}</h2>
                  <div className="flex gap-3 mt-4">
                    <span className={`inline-block bg-[#1a140e] border px-3 py-1 rounded text-xs font-bold tracking-widest ${activeRace.faction === 'Alliance' ? 'border-[#0070dd]/50 text-[#0070dd]' : 'border-[#c41f3b]/50 text-[#c41f3b]'}`}>
                      {activeRace.faction}
                    </span>
                    <span className="inline-block bg-[#1a140e] border border-[#ffd100]/50 text-[#ffd100] px-3 py-1 rounded text-xs font-bold tracking-widest">
                      {activeRace.type} Race
                    </span>
                  </div>
                </div>

                <div className="bg-[#1a140e] p-5 rounded-lg border border-[#3c3224] border-l-2 border-l-[#ff8000]">
                  <h4 className="text-[#ff8000] text-sm font-bold uppercase tracking-wider mb-2">Lore & Background</h4>
                  <p className="text-[#d3c8b8] leading-relaxed">{activeRace.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-[#3c3224]/50">
                    <p className="text-sm text-[#a69882]"><strong>Start Zone:</strong> {activeRace.startZone} (Level {activeRace.startLevel})</p>
                  </div>
                </div>
                
                <div className="bg-[#1a140e] p-5 rounded-lg border border-[#3c3224] border-l-2 border-l-[#a335ee]">
                  <h4 className="text-[#a335ee] text-sm font-bold uppercase tracking-wider mb-2">Base Racial</h4>
                  <strong className="text-white block mb-1">{activeRace.baseRacial.name}</strong>
                  <p className="text-[#d3c8b8] text-sm leading-relaxed">{activeRace.baseRacial.desc}</p>
                </div>
              </div>

              {/* Racial Talent Tree */}
              <div className="flex-shrink-0 mx-auto xl:mx-0">
                <TalentTree
                  title={`${activeRace.name} Talents`}
                  iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispheal.jpg"
                  backgroundUrl="https://wow.zamimg.com/uploads/screenshots/normal/139265.jpg"
                  treeTalents={activeRace.talents}
                  points={points}
                  setHoveredData={setHoveredData}
                  handleLeftClick={handleLeftClick}
                  handleRightClick={handleRightClick}
                  canAddPoint={canAddPoint}
                  classColor={activeRace.faction === 'Alliance' ? '#0070dd' : '#c41f3b'}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
