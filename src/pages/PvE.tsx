import React, { useState } from 'react';
import { PVE_CATS, pveData } from '../data/dungeons';
import { PVE_MECHANICS } from '../data/pveMechanics';
import { WowTooltip } from '../components/WowTooltip';
import { WowItem, ItemRarity } from '../types/items';

const RARITY_COLORS: Record<string, string> = {
  'Poor': '#9d9d9d',
  'Common': '#ffffff',
  'Uncommon': '#1eff00',
  'Rare': '#0070dd',
  'Epic': '#a335ee',
  'Legendary': '#ff8000',
  'Artifact': '#e6cc80'
};

export default function PvE() {
  const [activeCategory, setActiveCategory] = useState<string>(PVE_CATS.DUNGEONS);
  const [activeDungeon, setActiveDungeon] = useState<string>('StormwindVault');

  const [hoveredItem, setHoveredItem] = useState<{ item: WowItem, rect: DOMRect } | null>(null);

  const handleItemEnter = (e: React.MouseEvent, item: any) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setHoveredItem({ item: item as WowItem, rect });
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const allDungeons = Object.values(pveData).flat();
  const selectedDungeonData = allDungeons.find(d => d.id === activeDungeon);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <WowTooltip item={hoveredItem?.item} rect={hoveredItem?.rect} />
      
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Dungeons & Raids
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          The PvE landscape has expanded massively. New level 60 dungeons utilize the "Wing" structure (similar to Scarlet Monastery), keeping content dense and focused. Below is the comprehensive raid and dungeon database.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/3 space-y-6 h-[800px] overflow-y-auto pr-2 custom-scrollbar">
          {Object.entries(pveData).map(([category, dungeons]) => (
            <div key={category} className="bg-[#120e0a] border border-[#3c3224] rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-4 border-b border-[#3c3224]">
                <h3 className="font-bold text-[#ffd100] uppercase tracking-widest text-xs leading-tight">{category}</h3>
              </div>
              <div className="flex flex-col">
                {dungeons.map(dungeon => (
                  <button
                    key={dungeon.id}
                    onClick={() => { setActiveCategory(category); setActiveDungeon(dungeon.id); }}
                    className={`text-left p-3 text-sm transition-all border-l-4 ${
                      activeDungeon === dungeon.id 
                        ? 'border-[#ff8000] bg-[#1a140e] text-white font-bold' 
                        : 'border-transparent text-[#a69882] hover:bg-[#16120e] hover:text-[#d3c8b8]'
                    }`}
                  >
                    {dungeon.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-4 border-b border-[#3c3224]">
              <h3 className="font-bold text-[#ffd100] uppercase tracking-widest text-xs leading-tight">Global Mechanics</h3>
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => { setActiveCategory('Global Mechanics'); setActiveDungeon('GlobalMechanics'); }}
                className={`text-left p-3 text-sm transition-all border-l-4 ${
                  activeDungeon === 'GlobalMechanics' 
                    ? 'border-[#ff8000] bg-[#1a140e] text-white font-bold' 
                    : 'border-transparent text-[#a69882] hover:bg-[#16120e] hover:text-[#d3c8b8]'
                }`}
              >
                Raid & Dungeon Systems
              </button>
            </div>
          </div>
        </div>

        {/* Content Display */}
        <div className="lg:w-2/3">
          {activeCategory === 'Global Mechanics' ? (
            <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6 border-b border-[#3c3224]/50 pb-4">
                   <h2 className="text-3xl font-extrabold text-white mb-2">Raid & Dungeon Systems</h2>
                 </div>
                 <div className="mb-6">
                    <p className="text-[#d3c8b8] leading-relaxed text-lg italic border-l-4 border-[#ff8000] pl-4">
                      "25 entirely new mechanics redefining the PvE endgame."
                    </p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {PVE_MECHANICS.map((mech) => (
                      <div key={mech.id} className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg hover:border-[#ff8000]/50 transition-colors">
                        <h4 className="text-[#ffd100] font-bold text-sm mb-2 uppercase tracking-wider">{mech.title}</h4>
                        <p className="text-[#a69882] text-sm">{mech.description}</p>
                      </div>
                   ))}
                 </div>
               </div>
            </div>
          ) : selectedDungeonData && (
            <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 border-b border-[#3c3224]/50 pb-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">{selectedDungeonData.name}</h2>
                    {'tier' in selectedDungeonData && (
                      <span className="inline-block bg-[#1a140e] border border-[#ff8000]/50 text-[#ff8000] px-3 py-1 rounded text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(255,128,0,0.15)]">
                        {selectedDungeonData.tier}
                      </span>
                    )}
                  </div>
                </div>

                {'desc' in selectedDungeonData && (
                  <div className="mb-6">
                    <p className="text-[#d3c8b8] leading-relaxed text-lg italic border-l-4 border-[#ff8000] pl-4">
                      "{selectedDungeonData.desc}"
                    </p>
                  </div>
                )}

                {/* Render Deep Dive Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {('loreHistory' in selectedDungeonData) && (
                    <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                      <h4 className="text-[#00ccff] font-bold text-sm mb-2 uppercase tracking-wider">Lore & History</h4>
                      <p className="text-[#a69882] text-sm italic">{selectedDungeonData.loreHistory}</p>
                    </div>
                  )}
                  {('strategyGuide' in selectedDungeonData) && (
                    <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                      <h4 className="text-[#ffdd57] font-bold text-sm mb-2 uppercase tracking-wider">Strategy Guide</h4>
                      <p className="text-[#a69882] text-sm">{selectedDungeonData.strategyGuide}</p>
                    </div>
                  )}
                  {('trashMobs' in selectedDungeonData) && (
                    <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                      <h4 className="text-[#ff3b3b] font-bold text-sm mb-2 uppercase tracking-wider">Notable Trash Mobs</h4>
                      <ul className="list-disc pl-4 text-[#a69882] text-sm">
                        {(selectedDungeonData.trashMobs as string[]).map((mob, i) => <li key={i}>{mob}</li>)}
                      </ul>
                    </div>
                  )}
                  {('associatedQuests' in selectedDungeonData) && (
                    <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                      <h4 className="text-[#ffd100] font-bold text-sm mb-2 uppercase tracking-wider">Associated Quests</h4>
                      <ul className="list-disc pl-4 text-[#a69882] text-sm">
                        {(selectedDungeonData.associatedQuests as string[]).map((q, i) => <li key={i}>{q}</li>)}
                      </ul>
                    </div>
                  )}
                  {('speedrunStrats' in selectedDungeonData) && (
                    <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                      <h4 className="text-[#4ade80] font-bold text-sm mb-2 uppercase tracking-wider">Speedrun Strats</h4>
                      <p className="text-[#a69882] text-sm">{selectedDungeonData.speedrunStrats}</p>
                    </div>
                  )}
                  {('environmentalHazards' in selectedDungeonData) && (
                    <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg">
                      <h4 className="text-[#ff8000] font-bold text-sm mb-2 uppercase tracking-wider">Hazards</h4>
                      <p className="text-[#a69882] text-sm">{selectedDungeonData.environmentalHazards}</p>
                    </div>
                  )}
                  {('secrets' in selectedDungeonData) && (
                    <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg md:col-span-2">
                      <h4 className="text-[#b480ff] font-bold text-sm mb-2 uppercase tracking-wider">Secrets</h4>
                      <ul className="list-disc pl-4 text-[#a69882] text-sm">
                        {(selectedDungeonData.secrets as string[]).map((sec, i) => <li key={i}>{sec}</li>)}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Render Wings for Dungeons */}
                {'wings' in selectedDungeonData && (
                  <div className="space-y-6">
                    {(selectedDungeonData as any).wings.map((wing: any, i: number) => (
                      <div key={i} className="bg-[#1a140e] border border-[#3c3224] p-5 rounded-lg shadow-inner">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-[#ffd100] font-bold text-lg">{wing.name}</h4>
                          <span className="text-[10px] bg-[#120e0a] text-[#a69882] px-2 py-1 rounded border border-[#3c3224] font-bold uppercase tracking-widest">
                            Level {wing.level}
                          </span>
                        </div>
                        <p className="text-[#d3c8b8] text-sm mb-4 leading-relaxed">{wing.desc}</p>
                        
                        <div className="bg-[#0b0907] p-3 rounded border border-[#3c3224]/50 border-l-2 border-l-[#a335ee]">
                          <span className="text-[#a69882] text-xs uppercase tracking-wider font-bold block mb-2">Boss Roster:</span>
                          <div className="flex flex-wrap gap-2">
                            {wing.bosses.map((boss: string, j: number) => (
                              <span key={j} className="text-[#a335ee] text-sm bg-[#120e0a] px-2 py-1 rounded border border-[#3c3224]/50">
                                {boss}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#0b0907] p-3 rounded border border-[#3c3224]/50 border-l-2 border-l-[#a335ee] mt-4">
                          <span className="text-[#a69882] text-xs uppercase tracking-wider font-bold block mb-2">Massive Loot Table:</span>
                          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                            {wing.loot.map((item: any, j: number) => (
                              <div 
                                key={j} 
                                className="flex justify-between items-center text-sm bg-[#120e0a] p-1.5 rounded border border-[#3c3224]/30 cursor-pointer hover:bg-[#1a140e]"
                                onMouseEnter={(e) => handleItemEnter(e, item)}
                                onMouseLeave={handleItemLeave}
                              >
                                <span className="font-bold" style={{ color: RARITY_COLORS[item.rarity] || '#ffffff' }}>[{item.name}]</span>
                                <span className="text-[#a69882] text-xs">{item.type}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render Bosses for Raids */}
                {'bosses' in selectedDungeonData && !('wings' in selectedDungeonData) && (
                  <div className="space-y-6">
                    <div className="bg-[#1a140e] border border-[#3c3224] p-5 rounded-lg shadow-inner">
                      <h4 className="text-[#ff8000] text-sm font-bold uppercase tracking-wider mb-4">Raid Encounters</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(selectedDungeonData as any).bosses.map((boss: string, i: number) => (
                          <div key={i} className="bg-[#0b0907] p-3 rounded border border-[#3c3224]/50 text-[#a335ee] text-sm font-medium border-l-2 border-l-[#a335ee]">
                            {boss}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-[#1a140e] border border-[#3c3224] p-5 rounded-lg shadow-inner">
                      <h4 className="text-[#a335ee] text-sm font-bold uppercase tracking-wider mb-4">Massive Raid Loot Table</h4>
                      <div className="flex flex-col gap-1 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                        {(selectedDungeonData as any).loot.map((item: any, j: number) => (
                          <div 
                            key={j} 
                            className="flex justify-between items-center text-sm bg-[#0b0907] p-2 rounded border border-[#3c3224]/50 cursor-pointer hover:bg-[#120e0a]"
                            onMouseEnter={(e) => handleItemEnter(e, item)}
                            onMouseLeave={handleItemLeave}
                          >
                            <span className="font-bold" style={{ color: RARITY_COLORS[item.rarity] || '#ffffff' }}>[{item.name}]</span>
                            <span className="text-[#a69882] text-xs">{item.type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
