import React, { useState } from 'react';

import { pvpData, PVP_MODES } from '../data/pvpData';

export default function PvP() {
  const [activeMode, setActiveMode] = useState(PVP_MODES.BATTLEGROUNDS);
  const [activeItem, setActiveItem] = useState('AzsharaCrater');

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
