import React, { useState } from 'react';
import { racesData, RaceData, RacialTrait } from '../data/racesData';
import { WowTooltip } from '../components/WowTooltip';
import { WowSpell } from '../types/items';

export default function Races() {
  const [activeRace, setActiveRace] = useState<RaceData>(racesData[0]);
  const [factionFilter, setFactionFilter] = useState<'All' | 'Alliance' | 'Horde'>('All');
  const [hoveredSpell, setHoveredSpell] = useState<{ spell: WowSpell; rect: DOMRect } | null>(null);

  const handleTraitEnter = (e: React.MouseEvent, trait: RacialTrait) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const spell: WowSpell = {
      name: trait.name,
      castTime: 'Racial Passive',
      description: trait.desc
    };
    setHoveredSpell({ spell, rect });
  };

  const handleBaseRacialEnter = (e: React.MouseEvent, base: { name: string; desc: string }) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const spell: WowSpell = {
      name: base.name,
      castTime: 'Primary Racial Ability',
      description: base.desc
    };
    setHoveredSpell({ spell, rect });
  };

  const handleLeave = () => {
    setHoveredSpell(null);
  };

  const filteredRaces = racesData.filter(r => factionFilter === 'All' || r.faction === factionFilter);
  const allianceRaces = racesData.filter(r => r.faction === 'Alliance');
  const hordeRaces = racesData.filter(r => r.faction === 'Horde');

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <WowTooltip spell={hoveredSpell?.spell} rect={hoveredSpell?.rect} />

      {/* Header */}
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Races & Racial Heritages
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          The 16 core and allied races of Azeroth. Every race embarks on their heroic journey from Level 1, possessing unique weapon proficiencies, passive resistances, and distinctive racial abilities.
        </p>
      </div>

      {/* Faction Filter Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2 bg-[#0f0a07] p-1 rounded-lg border border-[#3c3224]">
          <button
            onClick={() => setFactionFilter('All')}
            className={`px-5 py-2 rounded text-sm font-bold tracking-wide transition-all ${
              factionFilter === 'All'
                ? 'bg-[#1a140e] text-[#ffd100] border-b-2 border-[#ffd100]'
                : 'text-[#a69882] hover:bg-[#1a140e] hover:text-white'
            }`}
          >
            All Races (16)
          </button>
          <button
            onClick={() => setFactionFilter('Alliance')}
            className={`px-5 py-2 rounded text-sm font-bold tracking-wide transition-all flex items-center gap-2 ${
              factionFilter === 'Alliance'
                ? 'bg-[#0b1b36] text-[#4d90f0] border-b-2 border-[#4d90f0]'
                : 'text-[#a69882] hover:bg-[#0b1b36]/50 hover:text-[#4d90f0]'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#4d90f0]" /> Alliance (8)
          </button>
          <button
            onClick={() => setFactionFilter('Horde')}
            className={`px-5 py-2 rounded text-sm font-bold tracking-wide transition-all flex items-center gap-2 ${
              factionFilter === 'Horde'
                ? 'bg-[#36110f] text-[#c41e3a] border-b-2 border-[#c41e3a]'
                : 'text-[#a69882] hover:bg-[#36110f]/50 hover:text-[#c41e3a]'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#c41e3a]" /> Horde (8)
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Race Selection Column */}
        <div className="lg:w-1/3 space-y-4">
          {(factionFilter === 'All' || factionFilter === 'Alliance') && (
            <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4d90f0] px-2 py-1 mb-2 border-b border-[#3c3224]">
                Alliance Vanguard
              </h3>
              <div className="grid grid-cols-1 gap-1.5">
                {allianceRaces.map((race) => (
                  <button
                    key={race.id}
                    onClick={() => setActiveRace(race)}
                    className={`flex items-center justify-between p-3 rounded text-left transition-all ${
                      activeRace.id === race.id
                        ? 'bg-[#0b1b36] text-white border-l-4 border-[#4d90f0] shadow-md'
                        : 'bg-[#16120e] text-[#a69882] hover:bg-[#1c1813] hover:text-white border-l-4 border-transparent'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm">{race.name}</div>
                      <div className="text-[11px] text-[#8c7e6b]">{race.type}</div>
                    </div>
                    <span className="text-xs text-[#ffd100] bg-[#0a0806] px-2 py-0.5 rounded border border-[#3c3224]">
                      Lvl {race.startLevel}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {(factionFilter === 'All' || factionFilter === 'Horde') && (
            <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#c41e3a] px-2 py-1 mb-2 border-b border-[#3c3224]">
                Horde Champions
              </h3>
              <div className="grid grid-cols-1 gap-1.5">
                {hordeRaces.map((race) => (
                  <button
                    key={race.id}
                    onClick={() => setActiveRace(race)}
                    className={`flex items-center justify-between p-3 rounded text-left transition-all ${
                      activeRace.id === race.id
                        ? 'bg-[#36110f] text-white border-l-4 border-[#c41e3a] shadow-md'
                        : 'bg-[#16120e] text-[#a69882] hover:bg-[#1c1813] hover:text-white border-l-4 border-transparent'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm">{race.name}</div>
                      <div className="text-[11px] text-[#8c7e6b]">{race.type}</div>
                    </div>
                    <span className="text-xs text-[#ffd100] bg-[#0a0806] px-2 py-0.5 rounded border border-[#3c3224]">
                      Lvl {race.startLevel}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Race Details Card */}
        <div className="lg:w-2/3 bg-[#120e0a] border border-[#3c3224] rounded-xl p-6 md:p-8 space-y-6 shadow-2xl">
          {/* Top Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#3c3224] pb-6 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-extrabold text-[#ffd100] tracking-wide">{activeRace.name}</h2>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                    activeRace.faction === 'Alliance'
                      ? 'bg-[#0b1b36] text-[#4d90f0] border border-[#4d90f0]/40'
                      : 'bg-[#36110f] text-[#c41e3a] border border-[#c41e3a]/40'
                  }`}
                >
                  {activeRace.faction}
                </span>
                <span className="text-xs text-[#8c7e6b] bg-[#1a140e] px-2.5 py-0.5 rounded border border-[#3c3224]">
                  {activeRace.type}
                </span>
              </div>
              <p className="text-sm text-[#ffd100]/80 mt-1 flex items-center gap-1">
                <span className="text-[#8c7e6b]">Starting Ground:</span> {activeRace.startZone} (Level {activeRace.startLevel})
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#d3c8b8] text-base leading-relaxed italic bg-[#0f0c09] p-4 rounded-lg border border-[#3c3224]/60">
            "{activeRace.description}"
          </p>

          {/* Available Classes */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd100]">Eligible Classes</h4>
            <div className="flex flex-wrap gap-2">
              {activeRace.availableClasses.map((cls) => (
                <span
                  key={cls}
                  className="px-3 py-1 bg-[#1a140e] border border-[#3c3224] rounded text-xs font-bold text-[#e6cc80]"
                >
                  {cls}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Base Racial */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd100]">Signature Racial Ability</h4>
            <div
              onMouseEnter={(e) => handleBaseRacialEnter(e, activeRace.baseRacial)}
              onMouseLeave={handleLeave}
              className="bg-[#1a140e] border-2 border-[#ffd100]/40 p-4 rounded-lg hover:border-[#ffd100] transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-[#fff5c3]">{activeRace.baseRacial.name}</span>
                <span className="text-xs uppercase tracking-wider text-[#ffd100] bg-[#0a0806] px-2 py-0.5 rounded border border-[#ffd100]/30">
                  Active
                </span>
              </div>
              <p className="text-sm text-[#a69882] mt-2 leading-normal">{activeRace.baseRacial.desc}</p>
            </div>
          </div>

          {/* Passive Traits */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd100]">Racial Passives & Masteries</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeRace.traits.map((trait) => (
                <div
                  key={trait.name}
                  onMouseEnter={(e) => handleTraitEnter(e, trait)}
                  onMouseLeave={handleLeave}
                  className="bg-[#16120e] border border-[#3c3224] p-3.5 rounded-lg hover:border-[#ffd100]/60 transition-colors cursor-pointer flex gap-3"
                >
                  <img
                    src={`https://wow.zamimg.com/images/wow/icons/medium/${trait.icon}.jpg`}
                    alt={trait.name}
                    className="w-9 h-9 rounded border border-[#3c3224] object-cover shrink-0"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div>
                    <div className="font-bold text-sm text-[#fff5c3]">{trait.name}</div>
                    <p className="text-xs text-[#a69882] mt-0.5 leading-normal">{trait.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
