import React, { useState } from 'react';
import { worldSystemsData, SYSTEM_CATEGORIES } from '../data/worldSystemsData';

export default function WorldSystems() {
  const [activeCategory, setActiveCategory] = useState<string>(SYSTEM_CATEGORIES.WORLD_DESIGN);
  const [activeSystemId, setActiveSystemId] = useState<string>('DynamicWeather');

  const allSystems = Object.values(worldSystemsData).flat();
  const selectedSystem = allSystems.find(s => s.id === activeSystemId);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#b39e6a] to-[#7a6a43] wow-title drop-shadow-lg relative z-10 text-center">
          World Systems & QoL
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          Experience an evolving Azeroth with 25 massive additions spanning dynamic world design, quality of life features, economic adjustments, and immersive roleplay elements.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/3 space-y-6">
          {Object.entries(worldSystemsData).map(([category, systemsList]) => (
            <div key={category} className="bg-[#120e0a] border border-[#3c3224] rounded-lg overflow-hidden shadow-lg mb-4">
              <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-4 border-b border-[#3c3224] border-l-2 border-l-[#b39e6a]">
                <h3 className="font-bold text-[#b39e6a] uppercase tracking-widest text-sm">{category}</h3>
              </div>
              <div className="flex flex-col">
                {systemsList.map(system => (
                  <button
                    key={system.id}
                    onClick={() => { setActiveCategory(category); setActiveSystemId(system.id); }}
                    className={`text-left p-3 text-sm transition-all border-l-4 ${
                      activeSystemId === system.id 
                        ? 'border-[#ffb000] bg-[#1a140e] text-white font-bold' 
                        : 'border-transparent text-[#a69882] hover:bg-[#16120e] hover:text-[#d3c8b8]'
                    }`}
                  >
                    {system.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:w-2/3">
          {selectedSystem && (
            <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 opacity-5 scale-150 pointer-events-none text-[#b39e6a]">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 border-b border-[#3c3224]/50 pb-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">{selectedSystem.name}</h2>
                    <span className="inline-block bg-[#1a140e] border border-[#1eff00]/50 text-[#1eff00] px-3 py-1 rounded text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(30,255,0,0.2)]">
                      {selectedSystem.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#a69882] text-xs font-bold uppercase tracking-wider mb-2">Overview</h4>
                    <p className="text-[#d3c8b8] leading-relaxed text-lg">{selectedSystem.description}</p>
                  </div>

                  <div className="bg-[#1a140e] border border-[#3c3224] p-5 rounded-lg shadow-inner border-l-2 border-l-[#ffb000]">
                    <h4 className="text-[#ffb000] text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      Features & Mechanics
                    </h4>
                    <ul className="space-y-2">
                      {selectedSystem.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#d3c8b8] text-sm">
                          <span className="text-[#ffb000] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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
