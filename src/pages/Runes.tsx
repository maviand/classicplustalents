import React, { useState } from 'react';
import { CLASS_QUESTS_DATA, ClassQuest, QuestReward } from '../data/classQuestsData';
import { WowTooltip } from '../components/WowTooltip';
import { WowItem, WowSpell } from '../types/items';

const CLASS_ROSTER = [
  { name: 'Warrior', color: '#C79C6E', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg' },
  { name: 'Paladin', color: '#F58CBA', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg' },
  { name: 'Hunter', color: '#ABD473', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg' },
  { name: 'Rogue', color: '#FFF569', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg' },
  { name: 'Priest', color: '#FFFFFF', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg' },
  { name: 'Shaman', color: '#0070DE', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg' },
  { name: 'Mage', color: '#69CCF0', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg' },
  { name: 'Warlock', color: '#9482C9', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg' },
  { name: 'Druid', color: '#FF7D0A', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg' }
];

const TIERS = ['All Tiers', 'Tier 1.5', 'Tier 2', 'Tier 2.5', 'Tier 3', 'Tier 3.5'];

export default function ClassQuests() {
  const [activeClass, setActiveClass] = useState('Warrior');
  const [activeTier, setActiveTier] = useState('All Tiers');
  const [hoveredReward, setHoveredReward] = useState<{ item?: WowItem; spell?: WowSpell; rect: DOMRect } | null>(null);

  const currentClassData = CLASS_ROSTER.find(c => c.name === activeClass)!;
  const quests = CLASS_QUESTS_DATA[activeClass] || [];

  const filteredQuests = quests.filter(q => activeTier === 'All Tiers' || q.tier === activeTier);

  const handleRewardEnter = (e: React.MouseEvent, reward: QuestReward) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    if (reward.type.includes('Ability') || reward.type.includes('Spell') || reward.type.includes('Mastery')) {
      const spell: WowSpell = {
        name: reward.name,
        castTime: reward.type,
        description: reward.description
      };
      setHoveredReward({ spell, rect });
    } else {
      const item: WowItem = {
        name: reward.name,
        rarity: reward.rarity,
        slot: reward.type,
        type: 'Class Quest Reward',
        bindType: 'Binds when picked up',
        stats: [],
        effect: reward.description
      };
      setHoveredReward({ item, rect });
    }
  };

  const handleRewardLeave = () => {
    setHoveredReward(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <WowTooltip item={hoveredReward?.item} spell={hoveredReward?.spell} rect={hoveredReward?.rect} />

      {/* Header */}
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Epic Class Quests
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          Multi-region, dungeon-spanning epic storylines per raid tier. Fulfill your class destiny through challenging solo trials, deep espionage, and raid conquests to unlock legendary class-defining weapons and hybrid abilities.
        </p>
      </div>

      {/* Class Selector Bar (1-Row Fitted) */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-nowrap justify-center items-center gap-1.5 xl:gap-2 max-w-full overflow-x-auto p-1.5 bg-[#0f0a07] border border-[#3c3224] rounded-lg">
          {CLASS_ROSTER.map((cls) => {
            const isActive = activeClass === cls.name;
            return (
              <button
                key={cls.name}
                onClick={() => setActiveClass(cls.name)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded font-bold text-xs tracking-tight border transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-[#8c7e6b] bg-[#16120e] hover:bg-[#1f1a14] hover:text-[#d3c8b8]'
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: 'rgba(15, 10, 5, 0.95)',
                        boxShadow: `0 0 12px ${cls.color}bb, inset 0 0 4px rgba(0,0,0,0.8)`,
                        borderColor: cls.color,
                        transform: 'translateY(-2px)'
                      }
                    : { borderColor: '#2b2318' }
                }
              >
                <img src={cls.icon} alt={cls.name} className="w-5 h-5 rounded-sm border border-[#2b2318] flex-shrink-0" />
                <span>{cls.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tier Filter Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap justify-center gap-2 bg-[#0f0a07] p-1.5 rounded border border-[#3c3224]">
          {TIERS.map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              className={`px-4 py-1.5 rounded text-xs font-bold tracking-wider uppercase transition-all ${
                activeTier === tier
                  ? 'bg-[#1a140e] text-[#ffd100] border-b-2 border-[#ffd100] shadow-sm'
                  : 'text-[#a69882] hover:bg-[#16120e] hover:text-white'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Quest Cards */}
      <div className="max-w-5xl mx-auto space-y-8">
        {filteredQuests.length > 0 ? (
          filteredQuests.map((quest) => (
            <div
              key={quest.id}
              className="bg-[#120e0a] border border-[#3c3224] rounded-xl overflow-hidden shadow-2xl hover:border-[#ffd100]/40 transition-all duration-300 relative"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#1a140e] via-[#16120e] to-[#120e0a] p-6 border-b border-[#3c3224] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-widest border"
                      style={{
                        backgroundColor: 'rgba(15, 10, 5, 0.95)',
                        borderColor: currentClassData.color,
                        color: currentClassData.color
                      }}
                    >
                      {quest.tier}
                    </span>
                    <h2 className="text-2xl font-extrabold text-white">{quest.title}</h2>
                  </div>
                  <p className="text-xs text-[#8c7e6b] mt-1.5 flex items-center gap-2">
                    <span>Level Requirement: <strong className="text-[#ffd100]">{quest.levelReq}</strong></span>
                    <span>•</span>
                    <span>Class: <strong style={{ color: currentClassData.color }}>{quest.targetClass}</strong></span>
                  </p>
                </div>

                {/* Locations Visited Tags */}
                <div className="flex flex-wrap gap-1.5 max-w-md md:justify-end">
                  {quest.locations.map((loc) => (
                    <span
                      key={loc}
                      className="text-[11px] bg-[#0a0806] text-[#a69882] px-2 py-0.5 rounded border border-[#3c3224]"
                    >
                      📍 {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Summary & Lore Quote */}
                <div className="space-y-3">
                  <p className="text-[#d3c8b8] text-base leading-relaxed">{quest.summary}</p>
                  <p className="text-sm italic text-[#ffd100]/80 bg-[#0f0c09] p-3.5 rounded-lg border-l-4 border-[#ffd100]/60">
                    {quest.flavorQuote}
                  </p>
                </div>

                {/* Step by Step Journey */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd100] flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                    The Epic Campaign Walkthrough
                  </h4>
                  <div className="space-y-2.5">
                    {quest.steps.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="bg-[#16120e] border border-[#3c3224] p-3.5 rounded-lg flex items-start gap-3.5 hover:border-[#ffd100]/30 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#1f1608] border border-[#ffd100]/50 text-[#ffd100] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {step.stepNumber}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <h5 className="font-bold text-sm text-[#fff5c3]">{step.title}</h5>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-[#00ccff] bg-[#0a0806] px-2 py-0.5 rounded border border-[#00ccff]/30">
                                {step.zone}
                              </span>
                              <span className="text-[10px] text-[#ff8000] bg-[#0a0806] px-2 py-0.5 rounded border border-[#ff8000]/30">
                                {step.type}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-[#a69882] leading-normal">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quest Rewards */}
                <div className="space-y-3 pt-2 border-t border-[#3c3224]/50">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd100] flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                    Campaign Rewards & Hybrid Unlocks
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {quest.rewards.map((reward) => (
                      <div
                        key={reward.name}
                        onMouseEnter={(e) => handleRewardEnter(e, reward)}
                        onMouseLeave={handleRewardLeave}
                        className="bg-[#1a140e] border border-[#ffd100]/40 p-3.5 rounded-lg flex items-center gap-3.5 hover:border-[#ffd100] transition-colors cursor-pointer"
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/medium/${reward.icon}.jpg`}
                          alt={reward.name}
                          className="w-10 h-10 rounded border border-[#3c3224] shrink-0"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-[#a335ee] truncate">{reward.name}</span>
                            <span className="text-[10px] text-[#ffd100] uppercase tracking-wider bg-[#0a0806] px-1.5 py-0.5 rounded border border-[#ffd100]/30 ml-2">
                              {reward.rarity}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#8c7e6b] truncate">{reward.type}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-[#120e0a] border border-[#3c3224] rounded-xl p-8">
            <p className="text-[#a69882] text-lg">No epic class quests found for {activeClass} in {activeTier}.</p>
            <button
              onClick={() => setActiveTier('All Tiers')}
              className="mt-4 px-4 py-2 bg-[#1a140e] text-[#ffd100] border border-[#3c3224] rounded text-sm font-bold hover:bg-[#1f1a14]"
            >
              View All Tiers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
