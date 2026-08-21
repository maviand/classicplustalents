import React, { useState } from 'react';
import { REGIONS, worldZonesData } from '../data/zones';

type Tab = 'Overview' | 'Lore & Characters' | 'Exploration';

export default function World() {
  const [activeRegion, setActiveRegion] = useState('STARTING');
  const [activeZone, setActiveZone] = useState('NorthshireExpanded');
  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  const allZones = Object.values(worldZonesData).flat();
  const selectedZoneData = allZones.find(z => z.id === activeZone);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          The Living World
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          Azeroth is completely mapped. Every unfinished region, every missing island, and every ruined capital city is now fully explorable. Below is the comprehensive zone database.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/3 space-y-6 h-[800px] overflow-y-auto pr-2 custom-scrollbar">
          {Object.entries(worldZonesData).map(([region, regionZones]) => (
            <div key={region} className="bg-[#120e0a] border border-[#3c3224] rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-4 border-b border-[#3c3224]">
                <h3 className="font-bold text-[#ffd100] uppercase tracking-widest text-xs leading-tight">
                  {REGIONS[region as keyof typeof REGIONS] || region}
                </h3>
              </div>
              <div className="flex flex-col">
                {regionZones.map(zone => (
                  <button
                    key={zone.id}
                    onClick={() => { setActiveRegion(region); setActiveZone(zone.id); setActiveTab('Overview'); }}
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
                    {selectedZoneData.level.includes('Suramar') ? (
                      <span className="inline-block bg-[#1a0c24] border border-[#a335ee]/60 text-[#d884ff] px-3 py-1 rounded text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(163,53,238,0.3)]">
                        {selectedZoneData.level}
                      </span>
                    ) : selectedZoneData.level.includes('World Event') ? (
                      <span className="inline-block bg-[#1f1608] border border-[#ffd100]/60 text-[#ffd100] px-3 py-1 rounded text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(255,209,0,0.25)]">
                        {selectedZoneData.level}
                      </span>
                    ) : (
                      <span className="inline-block bg-[#1a140e] border border-[#ff8000]/50 text-[#ff8000] px-3 py-1 rounded text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(255,128,0,0.15)]">
                        LEVEL {selectedZoneData.level}
                      </span>
                    )}
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6 border-b border-[#3c3224]">
                  {(['Overview', 'Lore & Characters', 'Exploration'] as Tab[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 font-bold text-sm tracking-wide transition-colors ${
                        activeTab === tab
                          ? 'text-[#ffd100] border-b-2 border-[#ffd100]'
                          : 'text-[#a69882] hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                  
                  {activeTab === 'Overview' && (
                    <div className="animate-in fade-in duration-300 space-y-6">
                      <div>
                        <h4 className="text-[#a69882] text-xs font-bold uppercase tracking-wider mb-2">Geography & Purpose</h4>
                        <p className="text-[#d3c8b8] leading-relaxed text-lg">{selectedZoneData.description}</p>
                      </div>

                      <div className="bg-[#1a140e] border border-[#3c3224] p-5 rounded-lg shadow-inner">
                        <h4 className="text-[#0070dd] text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          Key Objectives & Hubs
                        </h4>
                        <ul className="list-disc pl-5 text-[#d3c8b8] space-y-1">
                          {selectedZoneData.hubs.map((hub, i) => (
                            <li key={i} className="font-medium text-white tracking-wide">{hub}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {'levelRanges' in selectedZoneData && (
                        <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                          <h4 className="text-[#1eff00] font-bold text-sm mb-2 uppercase tracking-wider">Level Ranges</h4>
                          <p className="text-[#a69882] text-sm">{selectedZoneData.levelRanges}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'Lore & Characters' && (
                    <div className="animate-in fade-in duration-300 space-y-6">
                      <div className="bg-gradient-to-r from-[#1a140e] to-transparent border-l-4 border-[#a335ee] p-5 rounded-r-lg">
                        <h4 className="text-[#a335ee] text-sm font-bold uppercase tracking-wider mb-2">Warcraft Lore & Dynamic Events</h4>
                        <p className="text-[#d3c8b8] leading-relaxed italic">"{selectedZoneData.lore}"</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {'notableNPCs' in selectedZoneData && (
                          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                            <h4 className="text-[#ff3b3b] font-bold text-sm mb-2 uppercase tracking-wider">Notable NPCs</h4>
                            <ul className="list-disc pl-4 text-[#a69882] text-sm">
                              {(selectedZoneData.notableNPCs as string[]).map((n, i) => <li key={i}>{n}</li>)}
                            </ul>
                          </div>
                        )}
                        {'factions' in selectedZoneData && (
                          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                            <h4 className="text-[#ffdd57] font-bold text-sm mb-2 uppercase tracking-wider">Reputation Factions</h4>
                            <ul className="list-disc pl-4 text-[#a69882] text-sm">
                              {(selectedZoneData.factions as string[]).map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'Exploration' && (
                    <div className="animate-in fade-in duration-300 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {'weather' in selectedZoneData && (
                          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                            <h4 className="text-[#00ccff] font-bold text-sm mb-2 uppercase tracking-wider">Weather & Atmosphere</h4>
                            <p className="text-[#a69882] text-sm">{selectedZoneData.weather}</p>
                          </div>
                        )}
                        {'flightPaths' in selectedZoneData && (
                          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                            <h4 className="text-[#4ade80] font-bold text-sm mb-2 uppercase tracking-wider">Flight Paths</h4>
                            <ul className="list-disc pl-4 text-[#a69882] text-sm">
                              {(selectedZoneData.flightPaths as string[]).map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                          </div>
                        )}
                        {'resources' in selectedZoneData && (
                          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                            <h4 className="text-[#ff8000] font-bold text-sm mb-2 uppercase tracking-wider">Gathering Resources</h4>
                            <ul className="list-disc pl-4 text-[#a69882] text-sm">
                              {(selectedZoneData.resources as string[]).map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                          </div>
                        )}
                        {'secrets' in selectedZoneData && (
                          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg md:col-span-2">
                            <h4 className="text-[#b480ff] font-bold text-sm mb-2 uppercase tracking-wider">Secrets & Discoveries</h4>
                            <ul className="list-disc pl-4 text-[#a69882] text-sm">
                              {(selectedZoneData.secrets as string[]).map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
