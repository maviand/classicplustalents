import React, { useState, useCallback, useEffect } from 'react';
import { RefreshCw, Save, Download } from 'lucide-react';
import { TalentTree } from './components/TalentTree';
import { Tooltip } from './components/Tooltip';
import { ChangelogView } from './components/ChangelogView';
import { Talent } from './types/talents';

// Class imports
import { RETRIBUTION_TALENTS, HOLY_TALENTS as PALADIN_HOLY_TALENTS, PROTECTION_TALENTS as PALADIN_PROT_TALENTS, CHANGELOG as PALADIN_CHANGELOG } from './data/paladin';
import { DRUID_BALANCE_TALENTS, DRUID_FERAL_TALENTS, DRUID_RESTORATION_TALENTS, CHANGELOG as DRUID_CHANGELOG } from './data/druid';
import { WARRIOR_ARMS_TALENTS, WARRIOR_FURY_TALENTS, WARRIOR_PROTECTION_TALENTS, CHANGELOG as WARRIOR_CHANGELOG } from './data/warrior';
import { MAGE_ARCANE_TALENTS, MAGE_FIRE_TALENTS, MAGE_FROST_TALENTS, CHANGELOG as MAGE_CHANGELOG } from './data/mage';
import { ROGUE_ASSASSINATION_TALENTS, ROGUE_COMBAT_TALENTS, ROGUE_SUBTLETY_TALENTS, CHANGELOG as ROGUE_CHANGELOG } from './data/rogue';
import { HUNTER_BM_TALENTS, HUNTER_MM_TALENTS, HUNTER_SURVIVAL_TALENTS, CHANGELOG as HUNTER_CHANGELOG } from './data/hunter';
import { WARLOCK_AFFLICTION_TALENTS, WARLOCK_DEMO_TALENTS, WARLOCK_DESTRO_TALENTS, CHANGELOG as WARLOCK_CHANGELOG } from './data/warlock';
import { PRIEST_DISC_TALENTS, PRIEST_HOLY_TALENTS, PRIEST_SHADOW_TALENTS, CHANGELOG as PRIEST_CHANGELOG } from './data/priest';
import { SHAMAN_ELEMENTAL_TALENTS, SHAMAN_ENHANCEMENT_TALENTS, SHAMAN_RESTORATION_TALENTS, CHANGELOG as SHAMAN_CHANGELOG } from './data/shaman';

const CLASSES = [
  { name: 'Druid', color: '#ff7d0a', label: 'Druid', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg' },
  { name: 'Hunter', color: '#abd473', label: 'Hunter', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg' },
  { name: 'Mage', color: '#69ccf0', label: 'Mage', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg' },
  { name: 'Paladin', color: '#f58cba', label: 'Paladin', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg' },
  { name: 'Priest', color: '#ffffff', label: 'Priest', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg' },
  { name: 'Rogue', color: '#fff569', label: 'Rogue', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg' },
  { name: 'Shaman', color: '#0070DE', label: 'Shaman', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg' },
  { name: 'Warlock', color: '#9482c9', label: 'Warlock', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg' },
  { name: 'Warrior', color: '#c79c6e', label: 'Warrior', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg' }
];

export default function App() {
  const [activeClass, setActiveClass] = useState('Warrior');
  const [points, setPoints] = useState<Record<string, number>>({});
  const [hoveredData, setHoveredData] = useState<{talent: Talent, rect: DOMRect} | null>(null);

  const [savedBuilds, setSavedBuilds] = useState<Record<string, Record<string, number>>>(() => {
    try {
      const saved = localStorage.getItem('wow_classic_plus_builds');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return {};
  });
  const [buildName, setBuildName] = useState('');

  const playClickSound = useCallback((type: 'learn' | 'unlearn' | 'reset') => {}, []);

  const saveBuild = () => {
    if (!buildName.trim()) return;
    const newBuilds = { ...savedBuilds, [`${activeClass} - ${buildName.trim()}`]: points };
    setSavedBuilds(newBuilds);
    localStorage.setItem('wow_classic_plus_builds', JSON.stringify(newBuilds));
    setBuildName('');
  };

  const loadBuild = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    if (!name) return;
    if (savedBuilds[name]) {
      const buildClass = name.split(' - ')[0];
      if (buildClass && CLASSES.find(c => c.name === buildClass)) {
        setActiveClass(buildClass);
      }
      setPoints(savedBuilds[name]);
      playClickSound('learn');
    }
  };

  const getActiveTalentsArray = () => {
    switch (activeClass) {
      case 'Druid': return [...DRUID_BALANCE_TALENTS, ...DRUID_FERAL_TALENTS, ...DRUID_RESTORATION_TALENTS];
      case 'Hunter': return [...HUNTER_BM_TALENTS, ...HUNTER_MM_TALENTS, ...HUNTER_SURVIVAL_TALENTS];
      case 'Mage': return [...MAGE_ARCANE_TALENTS, ...MAGE_FIRE_TALENTS, ...MAGE_FROST_TALENTS];
      case 'Paladin': return [...RETRIBUTION_TALENTS, ...PALADIN_PROT_TALENTS, ...PALADIN_HOLY_TALENTS];
      case 'Priest': return [...PRIEST_DISC_TALENTS, ...PRIEST_HOLY_TALENTS, ...PRIEST_SHADOW_TALENTS];
      case 'Rogue': return [...ROGUE_ASSASSINATION_TALENTS, ...ROGUE_COMBAT_TALENTS, ...ROGUE_SUBTLETY_TALENTS];
      case 'Shaman': return [...SHAMAN_ELEMENTAL_TALENTS, ...SHAMAN_ENHANCEMENT_TALENTS, ...SHAMAN_RESTORATION_TALENTS];
      case 'Warlock': return [...WARLOCK_AFFLICTION_TALENTS, ...WARLOCK_DEMO_TALENTS, ...WARLOCK_DESTRO_TALENTS];
      case 'Warrior': return [...WARRIOR_ARMS_TALENTS, ...WARRIOR_FURY_TALENTS, ...WARRIOR_PROTECTION_TALENTS];
      default: return [];
    }
  };

  const activeTalents = getActiveTalentsArray();
  const totalPoints = activeTalents.reduce((sum, val) => sum + (points[val.id] || 0), 0);

  const getPointsInTreeAndTierAndBelow = useCallback((treeTalents: Talent[], tier: number, currentPoints: Record<string, number>) => {
    return treeTalents.filter(t => t.row <= tier).reduce((sum, t) => sum + (currentPoints[t.id] || 0), 0);
  }, []);

  const isValidState = useCallback((testPoints: Record<string, number>) => {
    for (const tal of activeTalents) {
      if ((testPoints[tal.id] || 0) > 0 && tal.requires) {
        if ((testPoints[tal.requires.id] || 0) < tal.requires.points) {
          return false;
        }
      }
    }

    const checkTree = (treeTalents: Talent[]) => {
      for (let t = 1; t <= 6; t++) {
        const pointsInThisOrHigher = treeTalents.filter(tal => tal.row >= t).reduce((sum, tal) => sum + (testPoints[tal.id] || 0), 0);
        if (pointsInThisOrHigher > 0) {
          const pointsBelow = getPointsInTreeAndTierAndBelow(treeTalents, t - 1, testPoints);
          if (pointsBelow < t * 5) return false;
        }
      }
      return true;
    };

    switch (activeClass) {
      case 'Druid': return checkTree(DRUID_BALANCE_TALENTS) && checkTree(DRUID_FERAL_TALENTS) && checkTree(DRUID_RESTORATION_TALENTS);
      case 'Hunter': return checkTree(HUNTER_BM_TALENTS) && checkTree(HUNTER_MM_TALENTS) && checkTree(HUNTER_SURVIVAL_TALENTS);
      case 'Mage': return checkTree(MAGE_ARCANE_TALENTS) && checkTree(MAGE_FIRE_TALENTS) && checkTree(MAGE_FROST_TALENTS);
      case 'Paladin': return checkTree(RETRIBUTION_TALENTS) && checkTree(PALADIN_PROT_TALENTS) && checkTree(PALADIN_HOLY_TALENTS);
      case 'Priest': return checkTree(PRIEST_DISC_TALENTS) && checkTree(PRIEST_HOLY_TALENTS) && checkTree(PRIEST_SHADOW_TALENTS);
      case 'Rogue': return checkTree(ROGUE_ASSASSINATION_TALENTS) && checkTree(ROGUE_COMBAT_TALENTS) && checkTree(ROGUE_SUBTLETY_TALENTS);
      case 'Shaman': return checkTree(SHAMAN_ELEMENTAL_TALENTS) && checkTree(SHAMAN_ENHANCEMENT_TALENTS) && checkTree(SHAMAN_RESTORATION_TALENTS);
      case 'Warlock': return checkTree(WARLOCK_AFFLICTION_TALENTS) && checkTree(WARLOCK_DEMO_TALENTS) && checkTree(WARLOCK_DESTRO_TALENTS);
      case 'Warrior': return checkTree(WARRIOR_ARMS_TALENTS) && checkTree(WARRIOR_FURY_TALENTS) && checkTree(WARRIOR_PROTECTION_TALENTS);
      default: return true;
    }
  }, [getPointsInTreeAndTierAndBelow, activeTalents, activeClass]);

  const canAddPoint = (talent: Talent, treeTalents: Talent[]) => {
    const currentPts = points[talent.id] || 0;
    if (currentPts >= talent.maxPoints) return false;
    if (totalPoints >= 51) return false;

    if (talent.requires) {
      if ((points[talent.requires.id] || 0) < talent.requires.points) return false;
    }

    const pointsInTree = treeTalents.reduce((sum, t) => sum + (points[t.id] || 0), 0);
    if (talent.row * 5 > pointsInTree) return false;

    return true;
  };

  const canRemovePoint = (talent: Talent) => {
    const currentPts = points[talent.id] || 0;
    if (currentPts <= 0) return false;

    const testPoints = { ...points, [talent.id]: currentPts - 1 };
    return isValidState(testPoints);
  };

  const handleRightClick = (e: React.MouseEvent, talent: Talent) => {
    e.preventDefault();
    if (canRemovePoint(talent)) {
      setPoints(prev => ({ ...prev, [talent.id]: prev[talent.id] - 1 }));
      playClickSound('unlearn');
    }
  };

  const handleLeftClick = (talent: Talent, treeTalents: Talent[]) => {
    if (canAddPoint(talent, treeTalents)) {
      setPoints(prev => ({ ...prev, [talent.id]: (prev[talent.id] || 0) + 1 }));
      playClickSound('learn');
    }
  };

  const resetTalents = () => {
    setPoints({});
    playClickSound('reset');
  };

  const renderFormattedLog = (text: string) => {
    if (!text) return null;
    const talentNames = activeTalents.map(t => t.name).sort((a, b) => b.length - a.length);
    const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const talentRegexStr = talentNames.map(escapeRegExp).join('|');
    const wordsRegexStr = '\\b(?:mana|energy|rage)\\b';
    
    const combinedRegex = new RegExp(`(${wordsRegexStr}|${talentRegexStr})`, 'gi');
    
    const parts = text.split(combinedRegex);
    
    return (
      <span>
        {parts.map((part, i) => {
          if (!part) return null;
          
          const lowerPart = part.toLowerCase();
          if (lowerPart === 'mana') return <span key={i} className="text-[#69ccf0] font-semibold">{part}</span>;
          if (lowerPart === 'energy') return <span key={i} className="text-[#fff569] font-semibold">{part}</span>;
          if (lowerPart === 'rage') return <span key={i} className="text-[#ff3b3b] font-semibold">{part}</span>;
          
          const isTalentName = talentNames.some(tn => tn.toLowerCase() === lowerPart);
          if (isTalentName) return <strong key={i} className="font-bold text-white">{part}</strong>;
          
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#18110b] via-[#0a0808] to-[#000000] text-[#e4dcc7] p-8 flex flex-col items-center relative overflow-y-auto" style={{ backgroundImage: "url('https://wow.zamimg.com/images/Site/bg-body-dark.jpg'), radial-gradient(circle at top, #18110b 0%, #0a0808 60%, #000000 100%)", backgroundBlendMode: "overlay" }}>

      {/* Title Header with the new background image */}
      <div 
        className="text-center mb-10 z-10 w-full max-w-[1050px] flex flex-col items-center gap-5 rounded-sm overflow-hidden relative"
        style={{
          border: "3px solid #483e30",
          boxShadow: "inset 0 0 0 2px #0f0905, 0 8px 30px rgba(0,0,0,0.95)"
        }}
      >
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.imgur.com/9Q04jxz.jpeg')" }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#100c08] opacity-90"></div>

        <div className="relative z-10 p-8 pt-10 flex flex-col items-center w-full">
          <div className="text-center relative">
            <h1 className="text-5xl font-bold tracking-tight mb-2 wow-title">
              Classic+ Talents
            </h1>
            <p className="text-[#a69882] text-lg font-medium tracking-wide">A Community Theorycrafted Reimagining of the Original Talent Trees</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-3 w-full mt-6">
            {CLASSES.map((cls) => {
              const isActive = activeClass === cls.name;
              return (
                <button 
                  key={cls.name}
                  onClick={() => { setActiveClass(cls.name); setPoints({}); }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-sm font-bold text-sm tracking-wide transition-all border ${isActive ? 'text-white' : 'text-[#8c7e6b] bg-[#16120e] hover:bg-[#1f1a14] hover:text-[#d3c8b8]'} blizzard-border`}
                  style={isActive ? { backgroundColor: 'rgba(15, 10, 5, 0.95)', boxShadow: `0 0 15px ${cls.color}cc, inset 0 0 5px rgba(0,0,0,0.8)`, borderColor: cls.color, textShadow: '0 2px 4px rgba(0,0,0,1)' } : { borderColor: '#2b2318' }}
                >
                  <img src={cls.icon} alt={cls.name} className="w-6 h-6 rounded-sm border border-[#2b2318]" />
                  {cls.label}
                </button>
              )
            })}
          </div>

          <div className="w-full flex justify-between items-end mt-8 border-t border-[#31281A]/60 pt-4 pb-0 flex-wrap gap-4">
            <div className="flex flex-col">
              <span className="text-[#ffd100] font-bold text-xl wow-header">Points Spent: <span className="text-white wow-mono">{totalPoints}</span><span className="text-[#8c7e6b]">/51</span></span>
              <span className="text-[#a69882] text-sm font-medium">Points Left: <span className="text-white wow-mono">{Math.max(0, 51 - totalPoints)}</span></span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Build Name" 
                  value={buildName}
                  onChange={(e) => setBuildName(e.target.value)}
                  className="wow-input px-3 py-2 text-sm rounded max-w-[140px]"
                />
                <button 
                  onClick={saveBuild}
                  disabled={!buildName.trim()}
                  className="flex items-center gap-2 px-4 py-2 wow-button text-sm rounded cursor-pointer"
                >
                  <Save size={16} /> Save
                </button>
              </div>

              {Object.keys(savedBuilds).length > 0 && (
                <select 
                  onChange={loadBuild}
                  value=""
                  className="wow-input px-3 py-2 text-sm rounded max-w-[180px] bg-[#0f0b08] cursor-pointer"
                >
                  <option value="" disabled>Load Build...</option>
                  {Object.keys(savedBuilds).map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              )}

              <button 
                onClick={resetTalents}
                className="flex items-center gap-2 px-5 py-2 wow-button text-sm rounded cursor-pointer"
              >
                <RefreshCw size={16} />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container - 3 Columns */}
      <div className="flex flex-row justify-center gap-6 z-10 flex-wrap xl:flex-nowrap pb-12 w-full max-w-[1050px]">
        {activeClass === 'Druid' && (
          <>
            <TalentTree title="Balance" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/283.jpg" treeTalents={DRUID_BALANCE_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Feral Combat" iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_racial_bearform.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/281.jpg" treeTalents={DRUID_FERAL_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Restoration" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/282.jpg" treeTalents={DRUID_RESTORATION_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
          </>
        )}

        {activeClass === 'Hunter' && (
          <>
            <TalentTree title="Beast Mastery" iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_hunter_beasttaming.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/361.jpg" treeTalents={HUNTER_BM_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Marksmanship" iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_marksmanship.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/363.jpg" treeTalents={HUNTER_MM_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Survival" iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_hunter_swiftstrike.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/362.jpg" treeTalents={HUNTER_SURVIVAL_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
          </>
        )}

        {activeClass === 'Mage' && (
          <>
            <TalentTree title="Arcane" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/81.jpg" treeTalents={MAGE_ARCANE_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Fire" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_fire_firebolt02.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/41.jpg" treeTalents={MAGE_FIRE_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Frost" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/61.jpg" treeTalents={MAGE_FROST_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
          </>
        )}

        {activeClass === 'Paladin' && (
          <>
            <TalentTree title="Holy" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/382.jpg" treeTalents={PALADIN_HOLY_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Protection" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_holy_devotionaura.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/383.jpg" treeTalents={PALADIN_PROT_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Retribution" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/381.jpg" treeTalents={RETRIBUTION_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
          </>
        )}

        {activeClass === 'Priest' && (
          <>
            <TalentTree title="Discipline" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_holy_wordfortitude.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/201.jpg" treeTalents={PRIEST_DISC_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Holy" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/202.jpg" treeTalents={PRIEST_HOLY_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Shadow" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/203.jpg" treeTalents={PRIEST_SHADOW_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
          </>
        )}

        {activeClass === 'Rogue' && (
          <>
            <TalentTree title="Assassination" iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/253.jpg" treeTalents={ROGUE_ASSASSINATION_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Combat" iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/252.jpg" treeTalents={ROGUE_COMBAT_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Subtlety" iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/251.jpg" treeTalents={ROGUE_SUBTLETY_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
          </>
        )}

        {activeClass === 'Shaman' && (
          <>
            <TalentTree title="Elemental" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/261.jpg" treeTalents={SHAMAN_ELEMENTAL_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Enhancement" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningshield.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/262.jpg" treeTalents={SHAMAN_ENHANCEMENT_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Restoration" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_nature_magicimmunity.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/263.jpg" treeTalents={SHAMAN_RESTORATION_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
          </>
        )}

        {activeClass === 'Warlock' && (
          <>
            <TalentTree title="Affliction" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/302.jpg" treeTalents={WARLOCK_AFFLICTION_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Demonology" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_demonbreath.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/303.jpg" treeTalents={WARLOCK_DEMO_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Destruction" iconUrl="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rainoffire.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/301.jpg" treeTalents={WARLOCK_DESTRO_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
          </>
        )}

        {activeClass === 'Warrior' && (
          <>
            <TalentTree title="Arms" iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/161.jpg" treeTalents={WARRIOR_ARMS_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Fury" iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/164.jpg" treeTalents={WARRIOR_FURY_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
            <TalentTree title="Protection" iconUrl="https://wow.zamimg.com/images/wow/icons/large/inv_shield_06.jpg" backgroundUrl="https://wow.zamimg.com/images/wow/talents/backgrounds/classic/163.jpg" treeTalents={WARRIOR_PROTECTION_TALENTS} points={points} setHoveredData={setHoveredData} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} canAddPoint={canAddPoint} />
          </>
        )}
      </div>

      {activeClass === 'Paladin' && PALADIN_CHANGELOG && <ChangelogView classNameStr={activeClass} iconUrl={CLASSES.find(c => c.name === 'Paladin')!.icon} changelog={PALADIN_CHANGELOG} activeTalents={activeTalents} />}
      {activeClass === 'Druid' && DRUID_CHANGELOG && <ChangelogView classNameStr={activeClass} iconUrl={CLASSES.find(c => c.name === 'Druid')!.icon} changelog={DRUID_CHANGELOG} activeTalents={activeTalents} />}
      {activeClass === 'Shaman' && SHAMAN_CHANGELOG && <ChangelogView classNameStr={activeClass} iconUrl={CLASSES.find(c => c.name === 'Shaman')!.icon} changelog={SHAMAN_CHANGELOG} activeTalents={activeTalents} />}
      {activeClass === 'Mage' && MAGE_CHANGELOG && <ChangelogView classNameStr={activeClass} iconUrl={CLASSES.find(c => c.name === 'Mage')!.icon} changelog={MAGE_CHANGELOG} activeTalents={activeTalents} />}
      {activeClass === 'Warrior' && WARRIOR_CHANGELOG && <ChangelogView classNameStr={activeClass} iconUrl={CLASSES.find(c => c.name === 'Warrior')!.icon} changelog={WARRIOR_CHANGELOG} activeTalents={activeTalents} />}
      {activeClass === 'Hunter' && HUNTER_CHANGELOG && <ChangelogView classNameStr={activeClass} iconUrl={CLASSES.find(c => c.name === 'Hunter')!.icon} changelog={HUNTER_CHANGELOG} activeTalents={activeTalents} />}
      {activeClass === 'Warlock' && WARLOCK_CHANGELOG && <ChangelogView classNameStr={activeClass} iconUrl={CLASSES.find(c => c.name === 'Warlock')!.icon} changelog={WARLOCK_CHANGELOG} activeTalents={activeTalents} />}
      {activeClass === 'Priest' && PRIEST_CHANGELOG && <ChangelogView classNameStr={activeClass} iconUrl={CLASSES.find(c => c.name === 'Priest')!.icon} changelog={PRIEST_CHANGELOG} activeTalents={activeTalents} />}
      {activeClass === 'Rogue' && ROGUE_CHANGELOG && <ChangelogView classNameStr={activeClass} iconUrl={CLASSES.find(c => c.name === 'Rogue')!.icon} changelog={ROGUE_CHANGELOG} activeTalents={activeTalents} />}

      {/* Dynamic Tooltip */}
      {hoveredData && (
        <Tooltip talent={hoveredData.talent} points={points} activeTalents={activeTalents} rect={hoveredData.rect} />
      )}

      {/* Disclaimer Footer */}
      <footer className="w-full max-w-[1050px] text-center text-[#6e5d48] text-[10px] mt-12 pb-6 border-t border-[#31281A]/40 pt-6 z-10 leading-relaxed">
        <p>This is an unofficial community theorycrafting website and fan project. All game assets, icons, and backgrounds are property of Blizzard Entertainment.</p>
        <p className="mt-1">This site is not affiliated with, authorized, or endorsed by Blizzard Entertainment.</p>
      </footer>

    </div>
  );
}
