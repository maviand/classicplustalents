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
  { name: 'Druid', color: '#ff7d0a', label: 'Druid', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg', bg: '/backgrounds/druid_bg_1781497444909.png' },
  { name: 'Hunter', color: '#abd473', label: 'Hunter', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg', bg: '/backgrounds/hunter_bg_1781497372448.png' },
  { name: 'Mage', color: '#69ccf0', label: 'Mage', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg', bg: '/backgrounds/mage_bg_1781497422848.png' },
  { name: 'Paladin', color: '#f58cba', label: 'Paladin', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg', bg: '/backgrounds/paladin_bg_1781497361595.png' },
  { name: 'Priest', color: '#ffffff', label: 'Priest', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg', bg: '/backgrounds/priest_bg_1781497399517.png' },
  { name: 'Rogue', color: '#fff569', label: 'Rogue', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg', bg: '/backgrounds/rogue_bg_1781497383110.png' },
  { name: 'Shaman', color: '#0070DE', label: 'Shaman', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg', bg: '/backgrounds/shaman_bg_1781497411223.png' },
  { name: 'Warlock', color: '#9482c9', label: 'Warlock', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg', bg: '/backgrounds/warlock_bg_1781497433502.png' },
  { name: 'Warrior', color: '#c79c6e', label: 'Warrior', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg', bg: '/backgrounds/warrior_bg_1781497349990.png' }
];

const serializeBuild = (currentPoints: Record<string, number>) => {
  const parts = Object.entries(currentPoints)
    .filter(([_, val]) => val > 0)
    .map(([key, val]) => `${key}:${val}`);
  return parts.join(',');
};

const deserializeBuild = (serialized: string): Record<string, number> => {
  const pointsObj: Record<string, number> = {};
  if (!serialized) return pointsObj;
  serialized.split(',').forEach(part => {
    const [key, val] = part.split(':');
    if (key && val) {
      const num = parseInt(val, 10);
      if (!isNaN(num)) {
        pointsObj[key] = num;
      }
    }
  });
  return pointsObj;
};

export default function App() {
  const [activeClass, setActiveClass] = useState('Warrior');

  const getActiveTrees = useCallback(() => {
    switch (activeClass) {
      case 'Druid':
        return [
          { title: "Balance", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/283.jpg", treeTalents: DRUID_BALANCE_TALENTS },
          { title: "Feral Combat", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_racial_bearform.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/281.jpg", treeTalents: DRUID_FERAL_TALENTS },
          { title: "Restoration", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/282.jpg", treeTalents: DRUID_RESTORATION_TALENTS }
        ];
      case 'Hunter':
        return [
          { title: "Beast Mastery", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_beasttaming.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/361.jpg", treeTalents: HUNTER_BM_TALENTS },
          { title: "Marksmanship", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_marksmanship.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/363.jpg", treeTalents: HUNTER_MM_TALENTS },
          { title: "Survival", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_swiftstrike.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/362.jpg", treeTalents: HUNTER_SURVIVAL_TALENTS }
        ];
      case 'Mage':
        return [
          { title: "Arcane", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/81.jpg", treeTalents: MAGE_ARCANE_TALENTS },
          { title: "Fire", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_fire_firebolt02.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/41.jpg", treeTalents: MAGE_FIRE_TALENTS },
          { title: "Frost", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/61.jpg", treeTalents: MAGE_FROST_TALENTS }
        ];
      case 'Paladin':
        return [
          { title: "Holy", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/382.jpg", treeTalents: PALADIN_HOLY_TALENTS },
          { title: "Protection", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_devotionaura.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/383.jpg", treeTalents: PALADIN_PROT_TALENTS },
          { title: "Retribution", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/381.jpg", treeTalents: RETRIBUTION_TALENTS }
        ];
      case 'Priest':
        return [
          { title: "Discipline", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_wordfortitude.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/201.jpg", treeTalents: PRIEST_DISC_TALENTS },
          { title: "Holy", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/202.jpg", treeTalents: PRIEST_HOLY_TALENTS },
          { title: "Shadow", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/203.jpg", treeTalents: PRIEST_SHADOW_TALENTS }
        ];
      case 'Rogue':
        return [
          { title: "Assassination", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/253.jpg", treeTalents: ROGUE_ASSASSINATION_TALENTS },
          { title: "Combat", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/252.jpg", treeTalents: ROGUE_COMBAT_TALENTS },
          { title: "Subtlety", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/251.jpg", treeTalents: ROGUE_SUBTLETY_TALENTS }
        ];
      case 'Shaman':
        return [
          { title: "Elemental", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/261.jpg", treeTalents: SHAMAN_ELEMENTAL_TALENTS },
          { title: "Enhancement", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningshield.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/262.jpg", treeTalents: SHAMAN_ENHANCEMENT_TALENTS },
          { title: "Restoration", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_magicimmunity.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/263.jpg", treeTalents: SHAMAN_RESTORATION_TALENTS }
        ];
      case 'Warlock':
        return [
          { title: "Affliction", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/302.jpg", treeTalents: WARLOCK_AFFLICTION_TALENTS },
          { title: "Demonology", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_demonbreath.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/303.jpg", treeTalents: WARLOCK_DEMO_TALENTS },
          { title: "Destruction", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rainoffire.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/301.jpg", treeTalents: WARLOCK_DESTRO_TALENTS }
        ];
      case 'Warrior':
        return [
          { title: "Arms", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/161.jpg", treeTalents: WARRIOR_ARMS_TALENTS },
          { title: "Fury", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/164.jpg", treeTalents: WARRIOR_FURY_TALENTS },
          { title: "Protection", iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_shield_06.jpg", backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/classic/163.jpg", treeTalents: WARRIOR_PROTECTION_TALENTS }
        ];
      default:
        return [];
    }
  }, [activeClass]);

  const [points, setPoints] = useState<Record<string, number>>({});
  const [hoveredData, setHoveredDataActual] = useState<{talent: Talent, rect: DOMRect} | null>(null);
  const hoverTimeoutRef = React.useRef<number | null>(null);

  const setHoveredData = useCallback((data: {talent: Talent, rect: DOMRect} | null) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (data === null) {
      setHoveredDataActual(null);
    } else {
      hoverTimeoutRef.current = window.setTimeout(() => {
        setHoveredDataActual(data);
      }, 150);
    }
  }, []);

  // Display toggles
  const [sepiaActive, setSepiaActive] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [compactMode, setCompactMode] = useState(false);

  // Mobile tree slider & touch states
  const [mobileActiveTree, setMobileActiveTree] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Link sharing / menu confirmations
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);
  const [pointsFlash, setPointsFlash] = useState(false);
  const [importText, setImportText] = useState('');

  const copyShareUrl = useCallback(() => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [shareUrl]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.targetTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Swipe left (next tree)
    if (diff > 50) {
      setMobileActiveTree(prev => Math.min(2, prev + 1));
      setTouchStart(null);
    }
    // Swipe right (prev tree)
    if (diff < -50) {
      setMobileActiveTree(prev => Math.max(0, prev - 1));
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const [savedBuilds, setSavedBuilds] = useState<Record<string, Record<string, number>>>(() => {
    try {
      const saved = localStorage.getItem('wow_classic_plus_builds');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return {};
  });
  const [buildName, setBuildName] = useState('');

  // Handle URL share code
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#build=')) {
        const serialized = decodeURIComponent(hash.slice(7));
        const parsedPoints = deserializeBuild(serialized);
        setPoints(parsedPoints);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const serialized = serializeBuild(points);
    const url = serialized ? `${window.location.origin}${window.location.pathname}#build=${encodeURIComponent(serialized)}` : '';
    setShareUrl(url);
  }, [points]);

  // Preload active class tree assets to prevent visual pop-in on first render
  useEffect(() => {
    getActiveTrees().forEach(tree => {
      const bgImg = new Image();
      bgImg.src = tree.backgroundUrl;
      const iconImg = new Image();
      iconImg.src = tree.iconUrl;
      
      tree.treeTalents.forEach(tal => {
        const talImg = new Image();
        talImg.src = tal.icon.startsWith('http') 
          ? tal.icon 
          : `https://wow.zamimg.com/images/wow/icons/large/${tal.icon}.jpg`;
      });
    });
  }, [activeClass, getActiveTrees]);

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
    return getActiveTrees().flatMap(t => t.treeTalents);
  };

  const activeTalents = getActiveTalentsArray();
  const totalPoints = activeTalents.reduce((sum, val) => sum + (points[val.id] || 0), 0);

  useEffect(() => {
    if (totalPoints > 0) {
      setPointsFlash(true);
      const timer = setTimeout(() => setPointsFlash(false), 400);
      return () => clearTimeout(timer);
    }
  }, [totalPoints]);

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

    return getActiveTrees().every(tree => checkTree(tree.treeTalents));
  }, [getPointsInTreeAndTierAndBelow, activeTalents, getActiveTrees]);

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
    if (!resetConfirm) {
      setResetConfirm(true);
      setTimeout(() => setResetConfirm(false), 3000);
      return;
    }
    setPoints({});
    setResetConfirm(false);
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

  const activeClassColor = CLASSES.find(c => c.name === activeClass)?.color || '#ff7d0a';

  return (
    <div 
      className="min-h-screen text-[#e4dcc7] p-4 md:p-8 flex flex-col items-center relative overflow-y-auto pb-24 lg:pb-8" 
      style={{ 
        backgroundColor: 'var(--bg-color-main)',
        backgroundImage: `url('https://wow.zamimg.com/images/Site/bg-body-dark.jpg'), radial-gradient(circle at top, ${activeClassColor}25 0%, #080605 60%, #000000 100%)`, 
        backgroundBlendMode: "overlay" 
      }}
    >
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Screen Reader ARIA Live announcement */}
      <div className="sr-only" aria-live="polite">
        Points spent: {totalPoints} of 51. Active class: {activeClass}.
      </div>

      {/* Mobile drawer backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/75 z-40 lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          role="presentation"
        />
      )}
      
      {/* Mobile Drawer (off-canvas menu for classes) */}
      <nav 
        className={`fixed top-0 left-0 h-full w-64 bg-[#0a0806] border-r-3 border-[#3c3224] z-50 p-6 flex flex-col gap-4 transition-transform duration-300 transform lg:hidden shadow-[5px_0_25px_rgba(0,0,0,0.95)] ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Mobile Class selection"
      >
        <div className="flex justify-between items-center border-b border-[#3c3224] pb-2">
          <h2 className="text-xl font-bold text-[#ffd100] wow-header">Classes</h2>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#a69882] hover:text-white font-bold px-2 py-1 text-sm border border-[#3c3224] rounded bg-[#16120e]"
            aria-label="Close mobile menu"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto pr-1">
          {CLASSES.map((cls) => {
            const isActive = activeClass === cls.name;
            return (
              <button 
                key={cls.name}
                onClick={() => { setActiveClass(cls.name); setPoints({}); setMobileActiveTree(0); setMobileMenuOpen(false); }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-sm font-bold text-sm tracking-wide border transition-all ${isActive ? 'text-white bg-[#1a140e] border-[#ffd100]' : 'text-[#8c7e6b] bg-[#16120e] border-transparent hover:bg-[#1f1a14] hover:text-white'}`}
                style={isActive ? { boxShadow: `0 0 10px ${cls.color}88, inset 0 0 4px rgba(0,0,0,0.8)` } : {}}
              >
                <img src={cls.icon} alt={cls.name} className="w-6 h-6 rounded-sm border border-[#2b2318]" />
                {cls.label}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Header Panel */}
      <header 
        className="text-center mb-4 z-10 w-full max-w-[1050px] flex flex-col items-center gap-4 rounded-sm overflow-hidden relative"
        style={{
          border: "3px solid #483e30",
          boxShadow: "inset 0 0 0 2px #0f0905, 0 8px 30px rgba(0,0,0,0.95)"
        }}
      >
        <div 
          className="absolute inset-0 z-0 opacity-35 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.imgur.com/9Q04jxz.jpeg')" }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0a0705] opacity-90"></div>

        <div className="relative z-10 p-4 md:p-5 pt-4 md:pt-5 flex flex-col items-center w-full">
          <div className="text-center relative">
            <h1 className="wow-title font-bold tracking-tight mb-1 text-3xl md:text-4xl">
              Classic+ Talents
            </h1>
            <p className="text-[#a69882] text-xs md:text-sm font-medium tracking-wide">A Community Theorycrafted Reimagining of the Original Talent Trees</p>
          </div>

          {/* Desktop Class Tab Navigation */}
          <nav className="hidden lg:flex flex-wrap justify-center items-center gap-3 w-full mt-4" aria-label="Desktop Class selection">
            {CLASSES.map((cls) => {
              const isActive = activeClass === cls.name;
              return (
                <button 
                  key={cls.name}
                  onClick={() => { setActiveClass(cls.name); setPoints({}); setMobileActiveTree(0); }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-sm font-bold text-sm tracking-wide border transition-all ${isActive ? 'text-white' : 'text-[#8c7e6b] bg-[#16120e] hover:bg-[#1f1a14] hover:text-[#d3c8b8]'} blizzard-border`}
                  style={isActive ? { 
                    backgroundColor: 'rgba(15, 10, 5, 0.95)', 
                    boxShadow: `0 0 15px ${cls.color}cc, inset 0 0 5px rgba(0,0,0,0.8)`, 
                    borderColor: cls.color, 
                    textShadow: '0 2px 4px rgba(0,0,0,1)',
                    transform: 'translateY(-4px)',
                    zIndex: 10
                  } : { 
                    borderColor: '#2b2318',
                    transform: 'none'
                  }}
                  aria-selected={isActive}
                  role="tab"
                >
                  <img src={cls.icon} alt={cls.name} className="w-6 h-6 rounded-sm border border-[#2b2318]" />
                  {cls.label}
                </button>
              )
            })}
          </nav>

          {/* Mobile Class Selection Button */}
          <div className="lg:hidden w-full mt-4 flex justify-center">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2 px-5 py-2 wow-button text-sm rounded cursor-pointer animate-border-pulse"
              aria-expanded={mobileMenuOpen}
            >
              ☰ Select Class Tree
            </button>
          </div>

          {/* Points counter and Build Controls */}
          <div className="w-full flex justify-between items-end mt-5 border-t border-[#31281A]/60 pt-4 pb-0 flex-wrap gap-4">
            <div className={`flex flex-col p-2 rounded transition-all ${pointsFlash ? 'animate-flash' : ''}`}>
              <span className="text-[#ffd100] font-bold text-xl wow-header">Points Spent: <span className="text-white wow-mono">{totalPoints}</span><span className="text-[#8c7e6b]">/51</span></span>
              <span className="text-[#a69882] text-sm font-medium">Points Left: <span className="text-white wow-mono">{Math.max(0, 51 - totalPoints)}</span></span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              {/* Build Saving */}
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Build Name" 
                  value={buildName}
                  onChange={(e) => setBuildName(e.target.value)}
                  className="wow-input px-3 py-2 text-sm rounded max-w-[130px]"
                  aria-label="Build Name to save"
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
                  aria-label="Load saved build"
                >
                  <option value="" disabled>Load Build...</option>
                  {Object.keys(savedBuilds).map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              )}

              <button 
                onClick={resetTalents}
                className="flex items-center gap-2 px-5 py-2 wow-button text-sm rounded cursor-pointer transition-all"
                style={{
                  background: resetConfirm 
                    ? 'linear-gradient(to bottom, #d0331a 0%, #90110a 100%)' 
                    : 'linear-gradient(to bottom, #721611 0%, #460907 100%)',
                  borderColor: resetConfirm ? '#ffd100' : '#a08151',
                  boxShadow: resetConfirm ? '0 0 10px #ff3b3b' : '0 2px 5px rgba(0,0,0,0.8)'
                }}
              >
                <RefreshCw size={16} className={resetConfirm ? 'animate-spin' : ''} />
                {resetConfirm ? 'Confirm Reset?' : 'Reset'}
              </button>
            </div>
          </div>

          {/* Import/Export URL sharing */}
          <div className="w-full flex flex-wrap justify-between items-center gap-4 mt-3 pt-3 border-t border-[#31281A]/30">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-[#a69882] font-semibold whitespace-nowrap">Import:</span>
              <input 
                type="text" 
                placeholder="Paste URL/share code..."
                value={importText}
                onChange={(e) => {
                  const val = e.target.value;
                  setImportText(val);
                  const hashIndex = val.indexOf('#build=');
                  let serialized = val;
                  if (hashIndex !== -1) {
                    serialized = val.slice(hashIndex + 7);
                  }
                  if (serialized) {
                    try {
                      const parsedPoints = deserializeBuild(decodeURIComponent(serialized));
                      setPoints(parsedPoints);
                    } catch(err) {}
                  }
                }}
                className="wow-input px-3 py-1.5 text-xs rounded w-full sm:w-[200px]"
                aria-label="Paste URL here to import"
              />
            </div>

            {shareUrl && (
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-[#a69882] font-semibold whitespace-nowrap">Export:</span>
                <input 
                  type="text" 
                  readOnly 
                  value={shareUrl}
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                  className="wow-input px-3 py-1.5 text-xs rounded w-full sm:w-[250px] text-[#a69882]"
                  aria-label="Exported build link"
                />
                <button 
                  onClick={copyShareUrl}
                  className="flex items-center gap-1 px-3 py-1.5 wow-button text-xs rounded cursor-pointer whitespace-nowrap"
                >
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Tree Selection Tabs */}
      <div className="flex lg:hidden justify-center gap-2 mb-4 w-full max-w-[320px] z-10">
        {getActiveTrees().map((tree, idx) => (
          <button
            key={tree.title}
            onClick={() => setMobileActiveTree(idx)}
            className={`flex-1 py-2 text-xs font-bold border rounded-sm transition-all ${
              mobileActiveTree === idx
                ? 'text-white bg-[#1a140e] border-[#ffd100]'
                : 'text-[#8c7e6b] bg-[#16120e] border-[#2b2318]'
            }`}
            style={mobileActiveTree === idx ? { boxShadow: `0 0 8px ${activeClassColor}aa` } : {}}
          >
            {tree.title}
          </button>
        ))}
      </div>

      {/* Main Container - 3 Columns (Stacked on screens < lg) */}
      <main 
        className="flex flex-row justify-center gap-6 z-10 flex-wrap lg:flex-nowrap p-8 rounded-xl border border-[#31281A] shadow-2xl relative w-full max-w-[1050px] mb-12"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center rounded-xl opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url(${CLASSES.find(c => c.name === activeClass)?.bg})` }}
        />
        <div className="absolute inset-0 z-0 rounded-xl bg-black/50 backdrop-blur-[2px]" />

        {getActiveTrees().map((tree, idx) => (
          <div key={tree.title} className={`relative z-10 ${mobileActiveTree === idx ? 'block' : 'hidden lg:block'}`}>
            <TalentTree
              title={tree.title}
              iconUrl={tree.iconUrl}
              backgroundUrl={tree.backgroundUrl}
              treeTalents={tree.treeTalents}
              points={points}
              setHoveredData={setHoveredData}
              handleLeftClick={handleLeftClick}
              handleRightClick={handleRightClick}
              canAddPoint={canAddPoint}
              classColor={activeClassColor}
            />
          </div>
        ))}
      </main>

      {/* Changelog & Description Details */}
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
        <Tooltip 
          talent={hoveredData.talent} 
          points={points} 
          activeTalents={activeTalents} 
          rect={hoveredData.rect} 
          />
      )}

      {/* Mobile Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#0c0907] border-t-3 border-[#3c3224] p-3 flex justify-between items-center z-30 lg:hidden shadow-[0_-4px_15px_rgba(0,0,0,0.95)]">
        <div className="flex flex-col">
          <span className="text-[#ffd100] font-bold text-sm wow-header">Spent: <span className="text-white wow-mono">{totalPoints}</span><span className="text-[#8c7e6b]">/51</span></span>
          <span className="text-[#a69882] text-xs">Left: <span className="text-white wow-mono">{Math.max(0, 51 - totalPoints)}</span></span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={resetTalents}
            className="px-3 py-1.5 wow-button text-xs rounded cursor-pointer"
          >
            {resetConfirm ? 'Confirm?' : 'Reset'}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="px-3 py-1.5 wow-button text-xs rounded cursor-pointer"
          >
            Classes
          </button>
        </div>
      </footer>

      {/* Desktop/Disclaimer Footer */}
      <footer className="w-full max-w-[1050px] text-center text-[#6e5d48] text-[10px] mt-12 pb-6 border-t border-[#31281A]/40 pt-6 z-10 leading-relaxed">
        <p>This is an unofficial community theorycrafting website and fan project. All game assets, icons, and backgrounds are property of Blizzard Entertainment.</p>
        <p className="mt-1">This site is not affiliated with, authorized, or endorsed by Blizzard Entertainment.</p>
      </footer>
    </div>
  );
}
