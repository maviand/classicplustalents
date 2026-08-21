import React, { useState } from 'react';

const CLASS_ROSTER = [
  'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 
  'Shaman', 'Mage', 'Warlock', 'Druid'
];

export default function Runes() {
  const [activeClass, setActiveClass] = useState('Warrior');

  const discoveryData = {
    Warrior: {
      color: '#C79C6E',
      discoveries: [
        {
          name: 'Tome of the Gladiator',
          category: 'Combat Stance Mastery',
          effect: 'Unlocks Gladiator Stance. Allows the warrior to fight in an aggressive sword-and-board stance, converting Shield Slam into a primary DPS ability with 20% increased physical damage.',
          discovery: 'Hidden within the Gurubashi Arena. You must claim the Arena Grand Master chest and decode the ancient troll combat scroll.'
        },
        {
          name: 'Manual of the Warbringer',
          category: 'Tactical Mobility',
          effect: 'Allows Charge, Intercept, and Intervene to be cast in any stance and while actively in combat.',
          discovery: 'Earned by defeating an elite Dark Iron dwarf commander deep in the Slag Pit of Searing Gorge.'
        },
        {
          name: 'Ancient Titan Grimoire: Blood & Thunder',
          category: 'Vanguard Threat',
          effect: 'Your Thunder Clap causes Rend to spread to all affected targets and generates 50% additional threat.',
          discovery: 'Found by solving the Titan Constellation puzzle in the Vaults of Uldum.'
        }
      ]
    },
    Paladin: {
      color: '#F58CBA',
      discoveries: [
        {
          name: 'Libram of Righteous Reckoning',
          category: 'Crusader Defense',
          effect: 'Grants Hand of Reckoning. A targeted Holy Taunt that deals holy damage to enemies not currently attacking you.',
          discovery: 'Recovered from the high altar of the Scarlet Monastery Cathedral after completing an in-depth investigation of High Inquisitor Whitemane\'s sanctum.'
        },
        {
          name: 'Tome of the Crusader',
          category: 'Holy Vengeance',
          effect: 'Teaches Crusader Strike. An instant physical weapon attack infused with Holy light that refreshes all active Judgements.',
          discovery: 'Discovered in a locked Scarlet Crusade strongbox high in the inaccessible guard towers of Tyr\'s Hand.'
        },
        {
          name: 'Scroll of the Silver Hand Zealot',
          category: 'Righteous Aura',
          effect: 'Unlocks Aura of the Zealot, providing 10% melee and ranged haste to your entire party within 30 yards.',
          discovery: 'Awarded after kneeling at Uther\'s Tomb in Western Plaguelands while carrying a consecrated vial of Moonwell water.'
        }
      ]
    },
    Hunter: {
      color: '#ABD473',
      discoveries: [
        {
          name: 'Wilderness Guide: Flanking Strike',
          category: 'Survival Spear-Combat',
          effect: 'You and your pet simultaneously strike the target for 100% weapon damage, building substantial cooperative threat and triggering Mongoose Bite.',
          discovery: 'Tame three rare beasts across Kalimdor and present them to Hemet Nesingwary Jr. in Stranglethorn Vale.'
        },
        {
          name: 'The Lone Hunter\'s Creed',
          category: 'Marksman Mastery',
          effect: 'Increases all physical and ranged damage dealt by 15% when fighting without an active pet.',
          discovery: 'Solo-climb the highest frozen peak of Winterspring and defeat an ancient frost-wyrm without a pet summoned.'
        },
        {
          name: 'Tome of Exotic Munitions',
          category: 'Elemental Archery',
          effect: 'Allows crafting of elemental arrows and bullets that bypass heavy physical raid boss armor.',
          discovery: 'Found deep within the caldera of Un\'Goro Crater after defeating an enraged Devilsaur matriarch.'
        }
      ]
    },
    Rogue: {
      color: '#FFF569',
      discoveries: [
        {
          name: 'Ravenholdt Manual: Blade Dance',
          category: 'Acrobatic Evasion',
          effect: 'Finishing move that converts combo points into up to 25% Dodge and Parry chance for 15 sec, enabling situational evasion tanking.',
          discovery: 'Pickpocket 50 unique humanoid syndicate and royal guards across Azeroth to assemble the secret Ravenholdt Cipher.'
        },
        {
          name: 'Shadowcraft Formula: Deadly Brew',
          category: 'Lethal Alchemy',
          effect: 'Whenever you apply Instant, Crippling, or Mind-Numbing poison, you also apply a stack of Deadly Poison.',
          discovery: 'Assassinate a rogue SI:7 operative deep inside the Stormwind canals without breaking stealth until the finishing strike.'
        },
        {
          name: 'Tome of the Shadowstep',
          category: 'Subtlety Infiltration',
          effect: 'Step through the shadows to appear behind your enemy target, gaining an immediate movement and damage bonus.',
          discovery: 'Solve the torch puzzle inside the lower Karazhan Crypts to open a concealed reliquary.'
        }
      ]
    },
    Priest: {
      color: '#FFFFFF',
      discoveries: [
        {
          name: 'Scripture of Penance',
          category: 'Discipline Grace',
          effect: 'Teaches Penance. Channels a rapid volley of holy bolts that deals intense Holy damage to a foe or massive healing to an ally.',
          discovery: 'Carry the ancient Book of the Fallen to the Cathedral of Light in Stormwind (or Undercity Royal Quarter) and complete the Rite of Contrition.'
        },
        {
          name: 'Grimoire of the Void Plague',
          category: 'Shadow Communion',
          effect: 'Unlocks Vampiric Touch, dealing Shadow damage over 15 sec and returning 5% of all shadow damage dealt as party mana.',
          discovery: 'Mind-control an elite Twilight cultist in Silithus to decode an ancient Old God obelisk.'
        },
        {
          name: 'Holy Font of Radiance',
          category: 'Restorative Miracle',
          effect: 'Transforms Lightwell into an automated healing font that radiates soothing light to party members below 50% health.',
          discovery: 'Cleanse the corrupted water shrine deep within the Wailing Caverns with a flask of purified spring water.'
        }
      ]
    },
    Shaman: {
      color: '#0070DE',
      discoveries: [
        {
          name: 'Stone Tablet: Way of Earth',
          category: 'Elemental Earth Tanking',
          effect: 'Imbues your melee weapon with the essence of stone. Increases threat by 50%, health by 15%, and provides 10% physical damage mitigation.',
          discovery: 'Defeat the corrupted stone elemental in the deepest depths of Maraudon using a newly consecrated Totem of Cleansing.'
        },
        {
          name: 'Volcanic Core: Lava Burst',
          category: 'Primal Fire Burst',
          effect: 'Hurls molten lava at the enemy. If Flame Shock is active on the target, Lava Burst is a guaranteed critical strike.',
          discovery: 'Submerge a dormant elemental core into the magma lake of Blackrock Depths.'
        },
        {
          name: 'Totemic Master Scroll: Recall',
          category: 'Spiritual Efficiency',
          effect: 'Instantly recalls and destroys all active totems, refunding 25% of their mana cost.',
          discovery: 'Meditate at the summit of the Stonetalon Mountains during a localized thunderstorm.'
        }
      ]
    },
    Mage: {
      color: '#40C7EB',
      discoveries: [
        {
          name: 'Astral Arcanum: Arcane Barrage',
          category: 'Temporal Arcane Viability',
          effect: 'Instantly fires bolts of pure arcane energy, consuming all Arcane Charges to deal massive burst damage without cast time pushback.',
          discovery: 'Collect chronal anomalies scattered around the Caverns of Time in Tanaris.'
        },
        {
          name: 'Frostweaver Codex: Ice Lance',
          category: 'Shatter Mastery',
          effect: 'Instant frost attack dealing triple damage against frozen targets, enabling fluid mobile shattered combos in PvP and PvE.',
          discovery: 'Slay the wandering arcane anomaly in the Mazthoril Deeps of Winterspring.'
        },
        {
          name: 'Pyromancer Treatise: Living Bomb',
          category: 'Volatile Conflagration',
          effect: 'Infects the target with ticking fire magic that explodes for massive AoE fire damage upon expiring or target death.',
          discovery: 'Ignite the dormant ancient brazier in Ashenvale using a combination of Fire Blast and engineering explosives.'
        }
      ]
    },
    Warlock: {
      color: '#8787ED',
      discoveries: [
        {
          name: 'Forbidden Grimoire: Metamorphosis',
          category: 'Demon Form Tanking',
          effect: 'Transforms the Warlock into a terrifying Demon. Increases armor by 500%, reduces critical strike chance taken by 6%, and converts Searing Pain into a melee cleave taunt.',
          discovery: 'An epic multi-zone questline requiring demon fragments from the Tower of Ilgalar, Demon Fall Canyon, and completing a summoning ritual at the Altar of Storms.'
        },
        {
          name: 'Scroll of Chaotic Fire: Chaos Bolt',
          category: 'Destruction Piercing',
          effect: 'Fires a bolt of chaotic fel-fire that pierces all resistance and absorb shields, always dealing critical damage.',
          discovery: 'Infiltrate the forbidden library of the Karazhan Crypts while carrying shadow-warding alchemical draughts.'
        },
        {
          name: 'Soulweaver Pact: Haunt',
          category: 'Affliction Amplification',
          effect: 'Sends a ghostly soul into the target, dealing immediate Shadow damage and amplifying all Shadow damage-over-time effects by 20%.',
          discovery: 'Enslave a wandering doomguard in the Blasted Lands and force it to defeat a demonic inquisitor.'
        }
      ]
    },
    Druid: {
      color: '#FF7D0A',
      discoveries: [
        {
          name: 'Emerald Dream Rite: Eclipse',
          category: 'Lunar & Solar Balance',
          effect: 'Casting Starfire increases Wrath critical strike chance by 30%. Casting Wrath increases Starfire damage by 15%, creating a fluid, mana-sustainable Moonkin rotation.',
          discovery: 'Channel moonlight using an ancient moonstone at four sacred moonwells across Kalimdor.'
        },
        {
          name: 'Feral Instincts: Mangle',
          category: 'Predatory Bleeds & Threat',
          effect: 'Instant attack that deals heavy physical damage and causes the target to take 30% additional bleed damage. Usable in Cat or Bear Form.',
          discovery: 'Survive the corrupted furbolg gauntlet inside Timbermaw Hold without ever shifting out of Bear Form.'
        },
        {
          name: 'Nordrassil Seed: Lifebloom',
          category: 'Restoration Blossoming',
          effect: 'Stacking heal-over-time that blooms for a massive burst heal and mana refund upon expiring.',
          discovery: 'Cleanse the poisoned roots of the World Tree on Mount Hyjal using purified tears of Elune.'
        }
      ]
    }
  };

  const selectedData = discoveryData[activeClass as keyof typeof discoveryData];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Path of the Titans: Class Discoveries
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          Ancient combat tomes, forgotten librams, and primal rites discovered throughout the open world. These world milestones permanently empower your spellbook and unlock authentic hybrid specializations.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Class Selection */}
        <div className="lg:w-1/4 space-y-2">
          {CLASS_ROSTER.map((className) => {
            const cls = discoveryData[className as keyof typeof discoveryData];
            const isSelected = activeClass === className;
            return (
              <button
                key={className}
                onClick={() => setActiveClass(className)}
                style={{
                  borderLeftColor: isSelected ? cls.color : 'transparent'
                }}
                className={`w-full text-left p-4 text-sm font-bold uppercase tracking-widest transition-all border-l-4 shadow-md rounded-r-lg ${
                  isSelected
                    ? 'bg-[#1a140e] text-white scale-[1.02]'
                    : 'text-[#a69882] hover:bg-[#16120e] bg-[#120e0a] border border-[#3c3224]'
                }`}
              >
                <span style={{ color: isSelected ? cls.color : undefined }}>{className}</span>
              </button>
            );
          })}
        </div>

        {/* Discovery Details */}
        <div className="lg:w-3/4 bg-[#120e0a] border border-[#3c3224] rounded-xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="border-b border-[#3c3224] pb-4">
            <h2 className="text-3xl font-extrabold tracking-wide" style={{ color: selectedData.color }}>
              {activeClass} Ancient Discoveries
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#ffd100] mt-1">
              World-Discovered Spellbook Augmentations
            </p>
          </div>

          <div className="space-y-6">
            {selectedData.discoveries.map((disc) => (
              <div
                key={disc.name}
                className="bg-[#16120e] border border-[#3c3224] rounded-lg p-6 space-y-4 hover:border-[#ffd100]/60 transition-all shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#3c3224]/60 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#fff5c3]">{disc.name}</h3>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#ffd100]">
                      {disc.category}
                    </span>
                  </div>
                  <span className="text-xs text-[#8c7e6b] bg-[#0a0806] px-2.5 py-1 rounded border border-[#3c3224] self-start md:self-auto">
                    World Discovery
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffd100]/80">Combat Mastery Effect</h4>
                  <p className="text-sm text-[#d3c8b8] leading-relaxed bg-[#0f0c09] p-3 rounded border border-[#3c3224]/40">
                    {disc.effect}
                  </p>
                </div>

                <div className="space-y-1 bg-[#1a140e] p-3.5 rounded border border-[#ffd100]/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffd100] flex items-center gap-1.5">
                    <span>🗺️</span> Discovery Location & Lore Trial
                  </h4>
                  <p className="text-xs text-[#a69882] leading-relaxed pt-1">{disc.discovery}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
