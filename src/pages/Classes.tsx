import React, { useState } from 'react';

const CLASS_ROSTER = [
  'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 
  'Death Knight', 'Shaman', 'Mage', 'Warlock', 'Druid'
];

export default function Classes() {
  const [activeClass, setActiveClass] = useState('Warrior');

  const classData = {
    Warrior: {
      color: '#C79C6E',
      role: 'Tank, Melee DPS',
      fantasy: 'The unbreakable vanguard. In Classic Plus, Warriors maintain their throne as the premier physical combatants, but their toolkit has been expanded to allow for true hybrid playstyles like the dual-wielding Gladiator tank and the devastating Two-Handed Fury berserker.',
      abilities: [
        { name: 'Blood and Thunder', type: 'Passive', desc: 'Your Thunder Clap now spreads Rend to all targets hit, cementing the Protection Warrior\'s AoE threat capabilities.' },
        { name: 'Gladiator Stance', type: 'Stance', desc: 'A 4th stance. You equip a shield but forfeit defensive bonuses to increase physical damage by 20%. Shield Slam becomes a primary DPS ability.' },
        { name: 'Heroic Leap', type: 'Active (3 Min CD)', desc: 'Leap through the air and slam down on all enemies within 8 yards. Originally intended for Vanilla, finally restored to its full glory.' }
      ],
      quest: {
        title: 'The Forging of the Titan-Blade',
        desc: 'At level 60, Warriors embark on a sprawling, world-spanning quest to reforge a shattered Titan weapon found in Uldum. Requires soloing an elite arena in the Gurubashi stands without using consumables, proving true martial mastery.'
      }
    },
    Paladin: {
      color: '#F58CBA',
      role: 'Tank, Healer, Melee DPS',
      fantasy: 'The holy crusader. Paladins finally receive the tools necessary to perform all three roles effectively. Protection Paladins get a taunt, and Retribution becomes a terrifying burst-damage threat that relies on sealing and judging holy magic.',
      abilities: [
        { name: 'Hand of Reckoning', type: 'Active (Taunt)', desc: 'Taunts the target to attack you, dealing Holy damage if they are not currently targeting you. The missing piece of the Prot puzzle.' },
        { name: 'Crusader Strike', type: 'Active (Melee)', desc: 'An instant strike that causes Holy damage and refreshes all Judgements on the target.' },
        { name: 'Aura of the Zealot', type: 'Aura', desc: 'A new Retribution aura that increases the melee haste of all party members by 10%, cementing the Paladin as a mandatory melee-group buffer.' }
      ],
      quest: {
        title: 'Cleansing the Ashbringer (Pre-Requisite)',
        desc: 'Before the raid on Stratholme Zenith, Paladins must venture into the Plaguelands to find the spirit of Alexandros Mograine. You must perform a 30-minute escort quest through the heart of Tyr\'s Hand while defending a holy relic from Scarlet Crusaders.'
      }
    },
    Hunter: {
      color: '#ABD473',
      role: 'Ranged DPS, Melee Survivalist',
      fantasy: 'The apex predator. Hunters gain deeper pet interactions, specialized ammunition crafting, and the ability to play a fully realized melee "Survival" spear-wielding spec.',
      abilities: [
        { name: 'Mongoose Bite (Rework)', type: 'Active (Melee)', desc: 'No longer requires a dodge. A brutal melee strike that increases in damage for each trap you have triggered in the last 10 seconds.' },
        { name: 'Camouflage', type: 'Active', desc: 'Blend into the surroundings. You and your pet gain stealth for 1 minute, but movement speed is reduced by 50%. First hit from stealth is guaranteed to critically strike.' },
        { name: 'Exotic Munitions', type: 'Passive', desc: 'Allows Hunters to craft specialized arrows that deal elemental damage, bypassing heavy physical armor on raid bosses.' }
      ],
      quest: {
        title: 'The Apex Predator\'s Call',
        desc: 'A continuation of the Rhok\'delar questline. Hunters must track and solo-tame a spirit beast roaming the Emerald Nightmare without using any traps or ranged weapons. Pure survival.'
      }
    },
    Rogue: {
      color: '#FFF569',
      role: 'Melee DPS, Evasion Tank',
      fantasy: 'The unseen blade. Rogues lean heavily into their trickster archetype. They gain tools for dodging massive boss swings (allowing niche evasion tanking) and deeper poison crafting systems.',
      abilities: [
        { name: 'Blade Dance', type: 'Finishing Move', desc: 'Consumes combo points to increase your Dodge and Parry chance by up to 30% for 15 seconds. The cornerstone of the Rogue Tank.' },
        { name: 'Shadowstep', type: 'Active', desc: 'Step through the shadows and appear behind your target. Grants a massive movement speed boost for 3 seconds.' },
        { name: 'Crimson Vial', type: 'Active', desc: 'Drink an alchemical mixture that restores 20% of your maximum health over 6 seconds. (Shares cooldown with Healthstones).' }
      ],
      quest: {
        title: 'The Ravenholdt Ascension',
        desc: 'To achieve the rank of Shadowmaster, Rogues must infiltrate the heavily guarded Stormwind Keep (Horde) or Undercity (Alliance) purely in stealth. If you are detected even once, the quest fails.'
      }
    },
    Priest: {
      color: '#FFFFFF',
      role: 'Healer, Ranged DPS',
      fantasy: 'The duality of Light and Void. Holy and Discipline receive distinct identities (raw throughput vs. shielding), while Shadow becomes a terrifying mana-battery and sustained DPS powerhouse.',
      abilities: [
        { name: 'Penance', type: 'Channeled', desc: 'Fires a volley of holy light at the target, causing massive Holy damage to an enemy or massive healing to an ally. The ultimate Discipline tool.' },
        { name: 'Vampiric Touch', type: 'Active', desc: 'A shadow damage-over-time effect that restores mana to all party members for 5% of the shadow damage you deal.' },
        { name: 'Lightwell (Reworked)', type: 'Summon', desc: 'Now automatically beams healing magic to nearby injured allies instead of requiring them to click it. Finally useful.' }
      ],
      quest: {
        title: 'The Balance of the Soul',
        desc: 'Priests are sent to the Karazhan Crypts. They must perfectly balance their casting: casting too many Holy spells blinds them, casting too many Shadow spells summons hostile wraiths. A test of pure mechanical discipline.'
      }
    },
    'Death Knight': {
      color: '#C41E3A',
      role: 'Tank, Melee DPS',
      fantasy: 'The new hero class unlocked in Phase 4. Plate-wearing juggernauts wielding runes and runic power. Slower than Warriors, but with unparalleled self-healing and magic mitigation.',
      abilities: [
        { name: 'Death Grip', type: 'Active', desc: 'Harness the unholy energy that binds all matter, pulling the target to the Death Knight and forcing them to attack you.' },
        { name: 'Death and Decay', type: 'Ground Target', desc: 'Corrupts the ground beneath the Death Knight, causing Shadow damage every second to all enemies in the area. Generates massive threat.' },
        { name: 'Frost Strike', type: 'Active', desc: 'Consumes Runic Power to strike the enemy with a frost-infused weapon, bypassing armor.' }
      ],
      quest: {
        title: 'Breaking the Crown',
        desc: 'Death Knights start at level 55 in a phased version of Eastern Plaguelands. They must break free from the Lich King\'s control during the Battle of Light\'s Hope Chapel before joining their respective factions.'
      }
    },
    Shaman: {
      color: '#0070DE',
      role: 'Tank, Healer, Melee/Ranged DPS',
      fantasy: 'The spiritual heart of the Horde. Enhancement is formalized as a fully viable tanking spec, Elemental gains massive burst parity with Mages, and Resto continues to dominate raid healing.',
      abilities: [
        { name: 'Way of Earth', type: 'Weapon Enchant', desc: 'Imbues the Shaman\'s weapon with earth. Increases threat generation by 50%, health by 10%, and reduces damage taken by 10%. Mandatory for Shaman Tanks.' },
        { name: 'Lava Burst', type: 'Active', desc: 'Hurls molten lava at the target. If the target has Flame Shock on them, Lava Burst is a guaranteed critical strike.' },
        { name: 'Totemic Recall', type: 'Active', desc: 'Instantly destroys all of your active totems, refunding 25% of their mana cost.' }
      ],
      quest: {
        title: 'The Elements in Turmoil',
        desc: 'Shamans must commune with the elemental lords in the open world. You must survive a 5-minute onslaught by enraged Fire Elementals in the Searing Gorge without moving outside a small totemic circle.'
      }
    },
    Mage: {
      color: '#40C7EB',
      role: 'Ranged DPS',
      fantasy: 'The masters of time and space. Arcane becomes a fully viable DPS spec focused on mana management. Fire remains the king of late-game scaling, and Frost rules PvP and control.',
      abilities: [
        { name: 'Arcane Barrage', type: 'Active', desc: 'Instantly strikes the target with Arcane energy. Consumes all Arcane Charges to deal massively increased damage.' },
        { name: 'Ice Lance', type: 'Active', desc: 'A quick, low-damage frost spell that deals triple damage against frozen targets. The shatter-combo staple.' },
        { name: 'Living Bomb', type: 'Active', desc: 'Infects the target with fire magic. After 12 seconds, they explode, dealing massive Fire damage to all nearby enemies.' }
      ],
      quest: {
        title: 'The Archmage\'s Trial',
        desc: 'Journey to the Violet Citadel in Dalaran (floating in a protective bubble). Mages must complete a deadly jumping puzzle and defeat a mirror-image of themselves using only counter-spells and spellsteals.'
      }
    },
    Warlock: {
      color: '#8787ED',
      role: 'Ranged DPS, Demon Tank',
      fantasy: 'The dark summoners. Warlocks gain the ability to temporarily merge with their demons for massive power (Metamorphosis) and can finally cast DoTs without worrying about debuff limits.',
      abilities: [
        { name: 'Metamorphosis', type: 'Active (Stance)', desc: 'Transform into a Demon. Armor is increased by 500%, chance to be critically hit by melee attacks is reduced by 6%, and Life Tap is instant. Enables Warlock Tanking.' },
        { name: 'Chaos Bolt', type: 'Active', desc: 'Fires a bolt of chaotic fire that always critically strikes and pierces all resistance and absorption effects.' },
        { name: 'Haunt', type: 'Active', desc: 'Sends a ghostly soul into the target, dealing Shadow damage and increasing all Shadow damage-over-time effects on the target by 20%.' }
      ],
      quest: {
        title: 'The Green Fire of Xoroth',
        desc: 'The legendary Warlock questline. Travel to the demon-world of Xoroth to steal the secrets of Fel Fire. Permanently changes all of your fire spells to a vibrant, fel-green color.'
      }
    },
    Druid: {
      color: '#FF7D0A',
      role: 'Tank, Healer, Melee/Ranged DPS',
      fantasy: 'The ultimate shapeshifters. Balance (Moonkin) receives actual mana-regeneration tools. Feral is split clearly into Cat (DPS) and Bear (Tank) capabilities with deep, rewarding rotations.',
      abilities: [
        { name: 'Mangle', type: 'Active', desc: 'Mangles the target, dealing massive physical damage and causing them to take 30% additional damage from bleed effects. Usable in Cat or Bear form.' },
        { name: 'Eclipse', type: 'Passive', desc: 'Casting Starfire increases the critical strike chance of Wrath. Casting Wrath increases the damage of Starfire. The core of the new Balance rotation.' },
        { name: 'Lifebloom', type: 'Active', desc: 'A stacking heal-over-time effect that blooms for a massive burst of healing when it expires or is dispelled.' }
      ],
      quest: {
        title: 'Purging the Nightmare',
        desc: 'Druids must venture alone into the Emerald Nightmare raid portal in Ashenvale. You must use all four of your shapeshift forms (Bear to survive, Cat to stealth, Aquatic to swim the corrupted rivers, Travel to escape) to rescue a trapped Ancient.'
      }
    }
  };

  const selectedData = classData[activeClass as keyof typeof classData];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Class Mastery & Overhauls
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          The Vanilla classes have been fully realized. Hybrids are no longer punished. 
          Every spec has a distinct, powerful role and a sprawling, world-spanning epic questline.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/4 space-y-2">
          {CLASS_ROSTER.map(className => (
            <button
              key={className}
              onClick={() => setActiveClass(className)}
              className={`w-full text-left p-4 text-sm font-bold uppercase tracking-widest transition-all border-l-4 shadow-md ${
                activeClass === className 
                  ? 'bg-[#1a140e] text-white scale-[1.02]' 
                  : 'border-transparent text-[#a69882] hover:bg-[#16120e] bg-[#120e0a] border border-[#3c3224]'
              }`}
              style={{ borderLeftColor: activeClass === className ? classData[className as keyof typeof classData].color : 'transparent' }}
            >
              {className}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:w-3/4">
          <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
            
            {/* Background Glow tied to class color */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-bl-full pointer-events-none blur-3xl"
              style={{ backgroundColor: selectedData.color }}
            />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6 border-b border-[#3c3224]/50 pb-4">
                <div>
                  <h2 className="text-4xl font-extrabold mb-2" style={{ color: selectedData.color, textShadow: `0 0 10px ${selectedData.color}40` }}>
                    {activeClass}
                  </h2>
                  <span className="inline-block bg-[#1a140e] border border-[#3c3224] text-[#d3c8b8] px-3 py-1 rounded text-xs font-bold tracking-widest">
                    ROLES: {selectedData.role}
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                {/* Fantasy & Overhaul */}
                <div>
                  <h4 className="text-[#a69882] text-xs font-bold uppercase tracking-wider mb-3">Class Fantasy & Overhaul</h4>
                  <p className="text-[#d3c8b8] leading-relaxed text-lg border-l-4 pl-4" style={{ borderLeftColor: selectedData.color }}>
                    {selectedData.fantasy}
                  </p>
                </div>

                {/* Key Abilities */}
                <div className="bg-[#1a140e] border border-[#3c3224] p-6 rounded-lg shadow-inner">
                  <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={selectedData.color} strokeWidth="3"><path d="M12 2L2 22h20L12 2z"/></svg>
                    New Core Mechanics
                  </h4>
                  <div className="space-y-4">
                    {selectedData.abilities.map((ability, i) => (
                      <div key={i} className="border-b border-[#3c3224]/50 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-baseline gap-2 mb-1">
                          <h5 className="font-bold text-white text-lg">{ability.name}</h5>
                          <span className="text-[10px] uppercase tracking-wider text-[#a69882] bg-[#120e0a] px-2 py-0.5 rounded border border-[#3c3224]">
                            {ability.type}
                          </span>
                        </div>
                        <p className="text-[#d3c8b8] text-sm leading-relaxed">{ability.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Epic Questline */}
                <div className="bg-gradient-to-r from-[#1a140e] to-transparent border-l-4 p-5 rounded-r-lg" style={{ borderLeftColor: selectedData.color }}>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: selectedData.color }}>
                    Epic Class Questline: {selectedData.quest.title}
                  </h4>
                  <p className="text-[#d3c8b8] leading-relaxed italic">"{selectedData.quest.desc}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
