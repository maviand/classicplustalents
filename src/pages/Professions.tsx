import React, { useState } from 'react';
import { PROF_CATS, professionsData } from '../data/professions';
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

export default function Professions() {
  const [activeCategory, setActiveCategory] = useState(PROF_CATS.PRIMARY_CRAFTING);
  const [activeProfession, setActiveProfession] = useState('Engineering');
  
  const [hoveredItem, setHoveredItem] = useState<{ item: WowItem, rect: DOMRect } | null>(null);

  const handleItemEnter = (e: React.MouseEvent, item: any) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setHoveredItem({ item: item as WowItem, rect });
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const allProfessions = Object.values(professionsData).flat();
  const selectedProfessionData = allProfessions.find(p => p.id === activeProfession);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <WowTooltip item={hoveredItem?.item} rect={hoveredItem?.rect} />
      
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Professions Database
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          Crafting and gathering have been expanded into a massive endgame pillar. Below is the comprehensive database of new recipes, legendary items, and required materials.
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
                {profs.map(prof => (
                  <button
                    key={prof.id}
                    onClick={() => { setActiveCategory(category); setActiveProfession(prof.id); }}
                    className={`text-left p-4 text-sm transition-all border-l-4 flex items-center gap-3 ${
                      activeProfession === prof.id 
                        ? 'border-[#ff8000] bg-[#1a140e] text-white font-bold' 
                        : 'border-transparent text-[#a69882] hover:bg-[#16120e] hover:text-[#d3c8b8]'
                    }`}
                  >
                    <span className="text-xl">{prof.icon}</span>
                    {prof.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:w-2/3">
          {selectedProfessionData && (
            <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 border-b border-[#3c3224]/50 pb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{selectedProfessionData.icon}</span>
                    <div>
                      <h2 className="text-3xl font-extrabold text-white mb-2">{selectedProfessionData.name}</h2>
                      <span className="inline-block bg-[#1a140e] border border-[#ff8000]/50 text-[#ff8000] px-3 py-1 rounded text-xs font-bold tracking-widest">
                        PHASE 1-4 ADDITIONS
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-[#d3c8b8] leading-relaxed text-lg italic border-l-4 border-[#3c3224] pl-4">
                    "{selectedProfessionData.description}"
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[#a69882] text-xs font-bold uppercase tracking-wider mb-2">New Recipes Database</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[600px] overflow-y-auto custom-scrollbar pr-2">
                    {selectedProfessionData.recipes.map((recipe: any, i: number) => (
                      <div 
                        key={i} 
                        className="flex justify-between items-center text-sm bg-[#120e0a] p-2 rounded border border-[#3c3224]/30 cursor-pointer hover:bg-[#1a140e]"
                        onMouseEnter={(e) => handleItemEnter(e, recipe)}
                        onMouseLeave={handleItemLeave}
                      >
                        <span className="font-bold truncate max-w-[200px]" style={{ color: RARITY_COLORS[recipe.rarity] || '#ffffff' }}>[{recipe.name}]</span>
                        <span className="text-[#a69882] text-xs ml-2 whitespace-nowrap">{recipe.type}</span>
                      </div>
                    ))}
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
