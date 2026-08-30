import React, { useState, useMemo } from 'react';
import { PROF_CATS, professionsData, Profession } from '../data/professions';
import { WowTooltip } from '../components/WowTooltip';
import { WowItem } from '../types/items';

const RARITY_COLORS: Record<string, string> = {
  'Poor': '#9d9d9d',
  'Common': '#ffffff',
  'Uncommon': '#1eff00',
  'Rare': '#0070dd',
  'Epic': '#a335ee',
  'Legendary': '#ff8000',
  'Artifact': '#e6cc80'
};

export default function Professions() {
  const [activeCategory, setActiveCategory] = useState<string>(PROF_CATS.PRIMARY_CRAFTING);
  const [activeProfession, setActiveProfession] = useState<string>('Alchemy');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredItem, setHoveredItem] = useState<{ item: WowItem; rect: DOMRect } | null>(null);

  const handleItemEnter = (e: React.MouseEvent, item: WowItem) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setHoveredItem({ item, rect });
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const allProfessions = useMemo(() => {
    return Object.values(professionsData).flat();
  }, []);

  const selectedProfessionData: Profession | undefined = useMemo(() => {
    return allProfessions.find(p => p.id === activeProfession) || allProfessions[0];
  }, [allProfessions, activeProfession]);

  const itemsList = useMemo(() => {
    if (!selectedProfessionData) return [];
    const rawItems = selectedProfessionData.items || (selectedProfessionData as any).recipes || [];
    if (!searchQuery.trim()) return rawItems;
    const q = searchQuery.toLowerCase();
    return rawItems.filter((it: WowItem) => 
      it.name.toLowerCase().includes(q) || 
      (it.type && it.type.toLowerCase().includes(q)) ||
      (it.effect && it.effect.toLowerCase().includes(q))
    );
  }, [selectedProfessionData, searchQuery]);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <WowTooltip item={hoveredItem?.item} rect={hoveredItem?.rect} />
      
      {/* Header Banner */}
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Professions & Trade Skills
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          Crafting and gathering are essential pillars of the Classic economy. Discover master specializations, high-tier consumables, and authentic BIS crafted armors.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/3 space-y-6 h-[800px] overflow-y-auto pr-2 custom-scrollbar">
          {Object.entries(professionsData).map(([category, profs]) => (
            <div key={category} className="bg-[#120e0a] border border-[#3c3224] rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-4 border-b border-[#3c3224]">
                <h3 className="font-bold text-[#ffd100] uppercase tracking-widest text-xs leading-tight">{category}</h3>
              </div>
              <div className="flex flex-col">
                {profs.map(prof => {
                  const isActive = (selectedProfessionData?.id || activeProfession) === prof.id;
                  return (
                    <button
                      key={prof.id}
                      onClick={() => { 
                        setActiveCategory(category); 
                        setActiveProfession(prof.id);
                        setSearchQuery('');
                      }}
                      className={`text-left p-3.5 text-sm transition-all border-l-4 flex items-center gap-3 ${
                        isActive 
                          ? 'border-[#ff8000] bg-[#1a140e] text-white font-bold' 
                          : 'border-transparent text-[#a69882] hover:bg-[#16120e] hover:text-[#d3c8b8]'
                      }`}
                    >
                      <img 
                        src={`https://wow.zamimg.com/images/wow/icons/large/${prof.icon}.jpg`} 
                        alt={prof.name} 
                        className="w-7 h-7 rounded border border-[#3c3224] object-cover" 
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="flex flex-col">
                        <span>{prof.name}</span>
                        <span className="text-[11px] text-[#6b5f4f] font-normal">
                          {(prof.items || []).length} items documented
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:w-2/3">
          {selectedProfessionData && (
            <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-6 md:p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                
                {/* Profession Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3c3224]/50 pb-5">
                  <div className="flex items-center gap-4">
                    <img 
                      src={`https://wow.zamimg.com/images/wow/icons/large/${selectedProfessionData.icon}.jpg`} 
                      alt={selectedProfessionData.name} 
                      className="w-14 h-14 rounded-lg border-2 border-[#ff8000]/60 shadow-lg shadow-[#ff8000]/20 object-cover" 
                    />
                    <div>
                      <h2 className="text-3xl font-extrabold text-white">{selectedProfessionData.name}</h2>
                      <span className="inline-block bg-[#1a140e] border border-[#ff8000]/50 text-[#ff8000] px-2.5 py-0.5 rounded text-xs font-bold tracking-wider mt-1">
                        CLASSIC+ EXPANDED
                      </span>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={`Search in ${selectedProfessionData.name}...`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-[#1a140e] border border-[#3c3224] rounded px-3 py-1.5 text-xs text-white placeholder-[#7a6f5e] focus:outline-none focus:border-[#ffd100] w-full sm:w-56"
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2 top-1.5 text-xs text-[#a69882] hover:text-white"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Profession Lore / Summary */}
                <div className="bg-[#16110c] p-4 rounded-lg border-l-4 border-[#ff8000]/80">
                  <p className="text-[#d3c8b8] leading-relaxed text-sm italic">
                    "{selectedProfessionData.desc || (selectedProfessionData as any).description || 'Master the craft across the old world.'}"
                  </p>
                </div>

                {/* Recipes / Items Grid */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[#ffd100] text-xs font-bold uppercase tracking-wider">
                      Item Catalog & Schematics ({itemsList.length})
                    </h4>
                    <span className="text-[11px] text-[#7a6f5e]">Hover item for full WoW tooltip</span>
                  </div>
                  
                  {itemsList.length === 0 ? (
                    <div className="text-center py-12 text-[#7a6f5e] bg-[#120e0a]/50 rounded-lg border border-[#3c3224]/30">
                      No matching items found for "{searchQuery}".
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[560px] overflow-y-auto custom-scrollbar pr-2">
                      {itemsList.map((item: WowItem, i: number) => {
                        const rarityColor = RARITY_COLORS[item.rarity] || '#ffffff';
                        return (
                          <div 
                            key={i} 
                            className="flex justify-between items-center text-sm bg-[#140f0b] p-3 rounded-lg border border-[#3c3224]/40 cursor-pointer hover:bg-[#1f1710] hover:border-[#ff8000]/50 transition-all group"
                            onMouseEnter={(e) => handleItemEnter(e, item)}
                            onMouseLeave={handleItemLeave}
                          >
                            <div className="flex flex-col min-w-0 pr-2">
                              <span 
                                className="font-bold truncate group-hover:brightness-125 transition-all text-sm" 
                                style={{ color: rarityColor }}
                              >
                                {item.name}
                              </span>
                              {item.effect && (
                                <span className="text-[11px] text-[#8c7f6d] truncate">
                                  {item.effect}
                                </span>
                              )}
                            </div>
                            <span className="text-[#a69882] text-xs font-medium ml-2 whitespace-nowrap px-2 py-0.5 rounded bg-[#0d0a07] border border-[#2a2218]">
                              {item.type || item.slot || 'Craft'}
                            </span>
                          </div>
                        );
                      })}
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
