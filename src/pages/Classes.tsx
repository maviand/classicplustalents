import React, { useState } from 'react';
import { WowTooltip } from '../components/WowTooltip';
import { WowSpell } from '../types/items';

const CLASS_ROSTER = [
  { name: 'Warrior', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg' },
  { name: 'Paladin', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg' },
  { name: 'Hunter', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg' },
  { name: 'Rogue', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg' },
  { name: 'Priest', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg' },
  { name: 'Shaman', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg' },
  { name: 'Mage', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg' },
  { name: 'Warlock', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg' },
  { name: 'Druid', icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg' }
];

export default function Classes() {
  const [activeClass, setActiveClass] = useState('Warrior');
  const [hoveredSpell, setHoveredSpell] = useState<{ spell: WowSpell; rect: DOMRect } | null>(null);

  const handleSpellEnter = (e: React.MouseEvent, ability: any) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const spell: WowSpell = {
      name: ability.name,
      castTime: ability.type,
      description: ability.desc
    };
    setHoveredSpell({ spell, rect });
  };

  const handleSpellLeave = () => {
    setHoveredSpell(null);
  };

  const classData = {
    Warrior: {
      color: '#C79C6E',
      role: 'Tank, Melee DPS',
      fantasy: 'The unbreakable vanguard. In Classic Plus, Warriors maintain their throne as premier martial combatants, but their toolkit has been refined so Protection has natural multi-target threat and Two-Handed Fury gains devastating sustained cleave.',
      abilities: [
        { name: 'Blood and Thunder', type: 'Passive', desc: 'Your Thunder Clap now spreads Rend to all targets hit, cementing the Protection Warrior\'s AoE threat and dungeon control.' },
        { name: 'Gladiator Stance', type: 'Stance', desc: 'Equip a shield and sword to fight offensively. Increases physical damage dealt by 20% and makes Shield Slam your primary offensive burst.' },
        { name: 'Heroic Leap', type: 'Active (3 Min CD)', desc: 'Leap through the air to a targeted area, slamming down on enemies within 8 yards for weapon damage. Restores Vanilla\'s planned mobility.' }
      ],
      quest: {
        title: 'The Forging of the Titan-Blade',
        desc: 'At level 60, Warriors embark on a sprawling questline into the Uldum desert to reforge a shattered Titan Greatsword. Requires proving martial mastery by soloing the Gurubashi champion trials.'
      }
    },
    Paladin: {
      color: '#F58CBA',
      role: 'Tank, Healer, Melee DPS',
      fantasy: 'The holy crusader. Paladins receive the foundational tools necessary to perform all three roles with distinction. Protection Paladins gain a reliable Holy Taunt and Crusader Strike, while Retribution delivers consistent burst without draining mana in seconds.',
      abilities: [
        { name: 'Hand of Reckoning', type: 'Active (Taunt)', desc: 'Taunts the target to attack you, dealing Holy damage if they are not currently targeting you. The missing keystone of the Protection Paladin.' },
        { name: 'Crusader Strike', type: 'Active (Melee)', desc: 'An instant weapon strike that causes Holy damage and refreshes active Judgements on the target. Low mana cost.' },
        { name: 'Aura of the Zealot', type: 'Aura', desc: 'Increases the melee and ranged attack speed of all party members within 30 yards by 10%, giving Retribution irreplaceable group utility.' }
      ],
      quest: {
        title: 'Cleansing the Ashbringer Legacy',
        desc: 'Paladins must venture into the heart of Tyr\'s Hand and the Stratholme crypts to commune with the spirit of Alexandros Mograine, unlocking the holy rites of the Silver Hand.'
      }
    },
    Hunter: {
      color: '#ABD473',
      role: 'Ranged DPS, Melee Survivalist',
      fantasy: 'The apex wilderness tracker. Hunters gain deep pet scaling parity, specialized elemental ammunition crafting, and a fully realized melee Survival spear-combat toolkit.',
      abilities: [
        { name: 'Mongoose Bite (Reworked)', type: 'Active (Melee)', desc: 'A brutal instant melee strike that strikes for 140% weapon damage, empowered for 10 seconds whenever an enemy triggers one of your traps.' },
        { name: 'Camouflage', type: 'Active', desc: 'Blend into the natural environment. You and your pet gain stealth for 1 minute. The first attack from Camouflage is guaranteed to critically strike.' },
        { name: 'Exotic Munitions', type: 'Passive', desc: 'Allows Hunters to craft and coat ammunition with elemental oils, converting a portion of auto-shot damage to Nature or Fire.' }
      ],
      quest: {
        title: 'The Apex Predator\'s Call',
        desc: 'A continuation of the legendary Rhok\'delar questline. Hunters must track and solo-tame an ancient spirit beast in the heights of Mount Hyjal without using ranged weapons.'
      }
    },
    Rogue: {
      color: '#FFF569',
      role: 'Melee DPS, Evasion Off-Tank',
      fantasy: 'The unseen blade and master tactician. Rogues lean heavily into agile footwork, lethal poison brewing, and defensive evasion mechanics to control encounters.',
      abilities: [
        { name: 'Blade Dance', type: 'Finishing Move', desc: 'Consumes combo points to increase your Dodge and Parry chance by up to 25% for 15 seconds, enabling situational evasion tanking.' },
        { name: 'Shadowstep', type: 'Active (30 Sec CD)', desc: 'Step through the shadows and appear behind your enemy target, increasing your next ability\'s damage and granting 3 sec of movement burst.' },
        { name: 'Deadly Brew', type: 'Passive', desc: 'Whenever you apply Instant, Crippling, or Mind-Numbing poison, you also afflict the target with a stack of Deadly Poison.' }
      ],
      quest: {
        title: 'The Ravenholdt Ascension',
        desc: 'Rogues must infiltrate the subterranean vault of Ravenholdt Manor and bypass deadly pressure traps purely in stealth to claim the title of Shadowmaster.'
      }
    },
    Priest: {
      color: '#FFFFFF',
      role: 'Healer, Ranged DPS',
      fantasy: 'The duality of Holy Light and Shadow Void. Discipline and Holy gain sharper identities (absorb shielding vs. massive direct throughput), while Shadow becomes a premier group mana battery.',
      abilities: [
        { name: 'Penance', type: 'Channeled (8 Sec CD)', desc: 'Fires a concentrated volley of holy light, dealing intense Holy damage to an enemy or delivering rapid, high-efficiency healing to an ally.' },
        { name: 'Vampiric Touch', type: 'Active (DoT)', desc: 'Afflicts the target with dark whispers, dealing Shadow damage over 15 sec and restoring mana to all party members equal to 5% of all Shadow damage you deal.' },
        { name: 'Beacon of Light (Lightwell Rework)', type: 'Summon', desc: 'Places a radiant holy font that automatically radiates soothing beams to nearby injured party members below 50% health.' }
      ],
      quest: {
        title: 'The Balance of the Soul',
        desc: 'Priests journey into the Karazhan Crypts where they must balance Holy and Shadow spellweaving to cleanse restless spirits without losing their sanity.'
      }
    },
    Shaman: {
      color: '#0070DE',
      role: 'Tank, Healer, Melee/Ranged DPS',
      fantasy: 'The spiritual heart of the Horde. Enhancement is fully supported as an elemental earth-tank, Elemental gains consistent rotation parity, and Restoration continues as the king of chain healing.',
      abilities: [
        { name: 'Way of Earth', type: 'Weapon Imbue', desc: 'Imbues your melee weapon with the weight of stone. Increases threat generated by 50%, total health by 15%, and grants 10% physical damage reduction. Enables Shaman Tanking.' },
        { name: 'Lava Burst', type: 'Active', desc: 'Hurls molten lava at the enemy. If the target is affected by your Flame Shock, Lava Burst is a guaranteed critical strike.' },
        { name: 'Totemic Recall', type: 'Active', desc: 'Instantly destroys all of your active totems, refunding 25% of their base mana cost and preventing accidental patrol pulls.' }
      ],
      quest: {
        title: 'Communion with the Elemental Lords',
        desc: 'Shamans commune with Therazane and Neptulon in the open world, surviving an intense trial of elemental balance to craft their supreme Earth and Water totems.'
      }
    },
    Mage: {
      color: '#40C7EB',
      role: 'Ranged DPS',
      fantasy: 'Masters of the arcane, fire, and frost. Arcane becomes a fully viable raid spec focused on mana conservation and charge expenditure, while Fire and Frost maintain their legendary endgame scaling.',
      abilities: [
        { name: 'Arcane Barrage', type: 'Active (3 Sec CD)', desc: 'Launches bolts of pure arcane energy at the enemy, consuming all accumulated Arcane Charges to deal massive instant damage.' },
        { name: 'Ice Lance', type: 'Active', desc: 'Instantly strikes the target with an icicle, dealing triple damage against frozen targets. The signature shatter-combo finisher.' },
        { name: 'Living Bomb', type: 'Active', desc: 'Ignites the target with volatile flame. After 12 seconds or upon death, the target explodes, dealing Fire damage to all nearby enemies.' }
      ],
      quest: {
        title: 'The Archmage\'s Astral Trial',
        desc: 'Journey to the shielded heights of the Violet Citadel to solve temporal puzzles and duel an arcane reflection using precise spell counters.'
      }
    },
    Warlock: {
      color: '#8787ED',
      role: 'Ranged DPS, Demon Form Tank',
      fantasy: 'Dark summoners and masters of demonic pacts. Warlocks gain the ancient art of Metamorphosis for demon tanking and can freely stack damage-over-time curses without restrictive debuff limits.',
      abilities: [
        { name: 'Metamorphosis', type: 'Active Stance (3 Min CD)', desc: 'Transform into a powerful Demon. Increases armor by 500%, reduces chance to be critically hit by 6%, and transforms Searing Pain into a melee cleave taunt. Enables Demon Tanking.' },
        { name: 'Chaos Bolt', type: 'Active', desc: 'Fires a devastating bolt of chaotic fire that pierces all enemy magic resistances, absorb shields, and always critically strikes.' },
        { name: 'Haunt', type: 'Active', desc: 'Sends a ghostly soul into the target, dealing Shadow damage and increasing all Shadow damage-over-time effects on the target by 20%.' }
      ],
      quest: {
        title: 'The Fel Secrets of Xoroth',
        desc: 'Warlocks travel deep into the Blasted Lands and the Altar of Storms to steal the forbidden fel-fire rites, unlocking customized green spellfire effects.'
      }
    },
    Druid: {
      color: '#FF7D0A',
      role: 'Tank, Healer, Melee/Ranged DPS',
      fantasy: 'The ultimate shapeshifters. Balance receives the Eclipse mechanics for infinite mana sustainability, Feral is sharply tuned with Dire Bear scaling and Cat bleed synergies, and Restoration gains versatile burst hots.',
      abilities: [
        { name: 'Mangle', type: 'Active (Melee)', desc: 'Mangles the target for physical damage, increasing all bleed damage taken by the target by 30% for 12 sec. Usable in Cat or Bear Form.' },
        { name: 'Eclipse', type: 'Passive', desc: 'Casting Starfire increases the critical strike chance of Wrath by 30%. Casting Wrath increases the damage of Starfire by 15%. The core of the Balance druid rotation.' },
        { name: 'Lifebloom', type: 'Active (HoT)', desc: 'Applies a soothing bloom that heals over 7 sec and can stack up to 3 times. When it expires or is dispelled, it blooms for an instant burst heal and refunds mana.' }
      ],
      quest: {
        title: 'Purging the Emerald Dream',
        desc: 'Druids venture through the four Great Trees to cleanse ancient nightmare roots, utilizing all four shapeshift forms to navigate perilous corrupted barrow dens.'
      }
    }
  };

  const selectedData = classData[activeClass as keyof typeof classData];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <WowTooltip spell={hoveredSpell?.spell} rect={hoveredSpell?.rect} />
      
      {/* Header */}
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Class Mastery & Spec Overhauls
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          The 9 original Vanilla classes fully realized. Hybrids are given legitimate tanking, healing, and damage capabilities directly through their 31-point talent trees and in-world class questlines.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Class Selection Sidebar */}
        <div className="lg:w-1/4 space-y-2">
          {CLASS_ROSTER.map((clsObj) => {
            const className = clsObj.name;
            const cls = classData[className as keyof typeof classData];
            const isSelected = activeClass === className;
            return (
              <button
                key={className}
                onClick={() => setActiveClass(className)}
                style={{
                  borderLeftColor: isSelected ? cls.color : 'transparent'
                }}
                className={`w-full text-left p-3.5 text-sm font-bold uppercase tracking-wider transition-all border-l-4 shadow-md rounded-r-lg ${
                  isSelected
                    ? 'bg-[#1a140e] text-white scale-[1.02]'
                    : 'text-[#a69882] hover:bg-[#16120e] bg-[#120e0a] border border-[#3c3224]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img src={clsObj.icon} alt={className} className="w-5 h-5 rounded-sm border border-[#3c3224]" />
                    <span style={{ color: isSelected ? cls.color : undefined }}>{className}</span>
                  </div>
                  <span className="text-[10px] text-[#8c7e6b] font-normal lowercase tracking-normal">
                    {cls.role.split(',')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Class Showcase */}
        <div className="lg:w-3/4 bg-[#120e0a] border border-[#3c3224] rounded-xl p-6 md:p-8 space-y-8 shadow-2xl">
          {/* Header & Role */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#3c3224] pb-6 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-wide" style={{ color: selectedData.color }}>
                {activeClass}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs uppercase font-bold tracking-widest text-[#ffd100]">Roles:</span>
                <span className="text-sm font-semibold text-[#e6cc80]">{selectedData.role}</span>
              </div>
            </div>
          </div>

          {/* Fantasy Summary */}
          <div className="bg-[#16120e] border border-[#3c3224]/80 p-5 rounded-lg">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd100] mb-2">Class Identity & Vision</h4>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">{selectedData.fantasy}</p>
          </div>

          {/* Key Overhaul Abilities */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd100]">Signature Spec Abilities</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedData.abilities.map((ability) => (
                <div
                  key={ability.name}
                  onMouseEnter={(e) => handleSpellEnter(e, ability)}
                  onMouseLeave={handleSpellLeave}
                  className="bg-[#16120e] border border-[#3c3224] p-4 rounded-lg hover:border-[#ffd100]/60 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="font-bold text-sm text-[#fff5c3] mb-1">{ability.name}</div>
                    <div className="text-[11px] text-[#ffd100] uppercase font-bold tracking-wider mb-2">
                      {ability.type}
                    </div>
                    <p className="text-xs text-[#a69882] leading-normal">{ability.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Epic Class Questline */}
          <div className="bg-[#18130e] border-2 border-[#e6cc80]/30 p-6 rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffd100]">Epic Level 60 Class Questline</h4>
              <span className="text-[11px] bg-[#0a0806] px-2.5 py-0.5 rounded text-[#e6cc80] border border-[#3c3224]">
                World Milestone
              </span>
            </div>
            <div className="text-base font-bold text-white pt-1">{selectedData.quest.title}</div>
            <p className="text-sm text-[#b5a790] leading-relaxed">{selectedData.quest.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
