import React, { useState } from 'react';

const RUNE_CATEGORIES = [
  'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 
  'Death Knight', 'Shaman', 'Mage', 'Warlock', 'Druid'
];

export default function Runes() {
  const [activeClass, setActiveClass] = useState('Warrior');

  const runeData = {
    Warrior: {
      color: '#C79C6E',
      runes: [
        { name: 'Rune of the Gladiator', slot: 'Chest', effect: 'Enables Gladiator Stance. You deal 20% increased physical damage while a shield is equipped, but lose all block value and armor bonuses from the shield.', discovery: 'Hidden within the Gurubashi Arena. You must loot the Stash of the Arena Master three times to piece the rune together.' },
        { name: 'Rune of Blood Craze', slot: 'Legs', effect: 'When struck by a critical hit, you regenerate 10% of your total health over 6 seconds.', discovery: 'Found by killing the rare elite Hakkar the Houndmaster in the Blasted Lands without taking any fire damage.' },
        { name: 'Rune of the Warbringer', slot: 'Gloves', effect: 'Your Charge, Intercept, and Intervene abilities are now usable in combat and in any stance.', discovery: 'Purchased from a secret Black Iron dwarf vendor located at the very bottom of the Slag Pit in Searing Gorge after completing a massive escort.' }
      ]
    },
    Paladin: {
      color: '#F58CBA',
      runes: [
        { name: 'Rune of Divine Storm', slot: 'Chest', effect: 'An instant weapon attack that causes 110% of weapon damage to up to 4 enemies within 8 yards. Heals up to 3 party members for 25% of the damage caused.', discovery: 'Requires a level 60 Paladin to cleanse the corrupted ash in the Stratholme main square using 5 vials of pure Moonwell water.' },
        { name: 'Rune of the Martyr', slot: 'Legs', effect: 'Sacrifices 5% of your health to instantly heal a friendly target for the same amount, bypassing the global cooldown.', discovery: 'Found by kneeling before the tomb of Uther the Lightbringer in the Western Plaguelands for exactly 5 minutes without moving.' },
        { name: 'Rune of the Templar', slot: 'Gloves', effect: 'Your Judgement ability no longer consumes your active Seal.', discovery: 'Looted from a hidden Scarlet Crusade cache in the inaccessible high-towers of Tyr\'s Hand.' }
      ]
    },
    Hunter: {
      color: '#ABD473',
      runes: [
        { name: 'Rune of the Lone Wolf', slot: 'Chest', effect: 'You deal 15% increased physical damage with all attacks when you do not have an active pet.', discovery: 'Found at the absolute highest peak of Winterspring. You must climb there without a pet active and slay an elite frost-wyrm.' },
        { name: 'Rune of Flanking Strike', slot: 'Legs', effect: 'You and your pet simultaneously strike the target for 100% melee weapon damage. Your pet generates a massive amount of threat.', discovery: 'Tame three specific rare beasts across Kalimdor and bring them to the Nesingwary camp in Stranglethorn to earn the master hunter\'s favor.' },
        { name: 'Rune of the Beast Mastery', slot: 'Gloves', effect: 'Your pet\'s health, damage, and armor are increased by 20%, and your pet gains the abilities of a random secondary pet family.', discovery: 'Drop a piece of Devilsaur meat into the unmapped caldera of Un\'Goro Crater and defeat the enraged Apex predator that spawns.' }
      ]
    },
    Rogue: {
      color: '#FFF569',
      runes: [
        { name: 'Rune of Just a Flesh Wound', slot: 'Chest', effect: 'You take 20% reduced Physical damage while Blade Dance is active. Reduces the cooldown of Feint to 3 seconds.', discovery: 'Pickpocket 100 unique humanoid elites across the world to assemble the "Thief\'s Code" manual.' },
        { name: 'Rune of Envenom', slot: 'Legs', effect: 'Finishing move that consumes your Deadly Poison doses on the target to deal instant Nature damage. Ignores armor.', discovery: 'Assassinate a rogue SI:7 operative deep inside Stormwind Keep without breaking stealth until the killing blow.' },
        { name: 'Rune of the Shadowstrike', slot: 'Gloves', effect: 'Teleports you behind your target and strikes them for 150% weapon damage. Must be stealthed.', discovery: 'Solve a complex riddle involving manipulating the torches in the Karazhan Crypts to open a hidden reliquary.' }
      ]
    },
    Priest: {
      color: '#FFFFFF',
      runes: [
        { name: 'Rune of the Void Plague', slot: 'Chest', effect: 'Infects the target with a dark plague, dealing heavy Shadow damage over 18 sec.', discovery: 'Found by mind-controlling a specific Twilight Cultist in Silithus and using their unique ability to decode a monolith.' },
        { name: 'Rune of the Penitent', slot: 'Legs', effect: 'Enables the Penance spell. Fires a volley of holy light that heals an ally or damages an enemy.', discovery: 'Confess your sins to the Archbishop in Stormwind (or High Priest in Undercity) while carrying the "Book of the Fallen", a random world drop.' },
        { name: 'Rune of Homunculi', slot: 'Gloves', effect: 'Summons three miniature copies of yourself that attack your target, reducing their attack power, armor, and attack speed.', discovery: 'Survive the corrupted dreamscape within the Wailing Caverns by using a Flask of the Emerald Dream (Alchemy).' }
      ]
    },
    'Death Knight': {
      color: '#C41E3A',
      runes: [
        { name: 'Rune of the Gargoyle', slot: 'Chest', effect: 'Summons a Gargoyle to bombard the target with Nature damage for 30 seconds.', discovery: 'Obtained by returning to the floating necropolis over Stratholme (Crown of the Damned) and completing a solo challenge against a Blood Prince.' },
        { name: 'Rune of the Blood Shield', slot: 'Legs', effect: 'Your Death Strike heals you for 10% of your maximum health. Any overhealing is converted into a physical absorption shield.', discovery: 'Defeat the stitched horrors north of the Eastern Plaguelands (Quel\'Thalas border) without letting your health drop below 50%.' },
        { name: 'Rune of the Outbreak', slot: 'Gloves', effect: 'Instantly applies Blood Plague and Frost Fever to the target with no rune cost.', discovery: 'Found in the deepest depths of the new Stormwind Vaults, guarded by a locked-away Scourge operative.' }
      ]
    },
    Shaman: {
      color: '#0070DE',
      runes: [
        { name: 'Rune of Overload', slot: 'Chest', effect: 'Your Lightning Bolt, Chain Lightning, and Healing Wave have a 33% chance to cast a second, identical spell for free for half power.', discovery: 'Stand at the peak of the Stonetalon Mountains during a localized thunderstorm event (happens randomly every 4 hours) and let yourself be struck by lightning.' },
        { name: 'Rune of Earth Shield', slot: 'Legs', effect: 'Protects the target with an earthen shield, reducing cast time pushback by 30% and healing them when they take damage.', discovery: 'Purify a corrupted earth elemental deep within the Maraudon caverns using a newly crafted Totem of Cleansing.' },
        { name: 'Rune of Lava Lash', slot: 'Gloves', effect: 'You charge your off-hand weapon with lava, instantly dealing 150% off-hand Weapon damage. Damage is increased by 20% if your off-hand is enchanted with Flametongue.', discovery: 'Drop a rare volcanic core into the lava pool of the Blackrock Depths Emperor\'s room.' }
      ]
    },
    Mage: {
      color: '#40C7EB',
      runes: [
        { name: 'Rune of Chronostatic Preservation', slot: 'Chest', effect: 'Fuses Arcane, Fire, and Frost magic to freeze time. Allows you to store a massive heal in a chronostatic orb that you can detonate later to heal an ally.', discovery: 'Collect chronal anomalies that spawn randomly around the Caverns of Time in Tanaris.' },
        { name: 'Rune of the Spellfrost', slot: 'Legs', effect: 'Your Frostbolt deals 15% more damage, but is now considered Spellfrost damage, benefiting from both Arcane and Frost modifiers.', discovery: 'Defeat an arcane anomaly that patrols the Mazthoril Deeps in Winterspring.' },
        { name: 'Rune of the Living Flame', slot: 'Gloves', effect: 'Summons a trail of spellfire that moves toward the target, dealing damage to all enemies in its path.', discovery: 'Ignite the brazier of the dormant ancient in Ashenvale using a combination of Fire Blast and a specific engineering explosive.' }
      ]
    },
    Warlock: {
      color: '#8787ED',
      runes: [
        { name: 'Rune of the Metamorphosis', slot: 'Chest', effect: 'Transforms you into a Demon, increasing armor by 500% and reducing the chance to be critically hit. You are now a tank.', discovery: 'The most complex rune in the game. Requires collecting fragments from the Tower of Ilgalar, the Demon Fall Canyon, and completing a summoning ritual at the Altar of Storms with 3 other Warlocks.' },
        { name: 'Rune of the Demonic Pact', slot: 'Legs', effect: 'Your pet\'s critical strikes apply the Demonic Pact effect to your party, increasing spell damage by 10% of your Spell Damage.', discovery: 'Enslave a doomguard in the Blasted Lands and force it to fight a pit lord in the Tainted Scar.' },
        { name: 'Rune of Chaos', slot: 'Gloves', effect: 'Your Shadow Bolt is replaced by Chaos Bolt, which pierces all resistance and absorption effects.', discovery: 'Plunder the forbidden library in the lower Karazhan Crypts while under the effects of Medivh\'s Paranoia.' }
      ]
    },
    Druid: {
      color: '#FF7D0A',
      runes: [
        { name: 'Rune of Survival of the Fittest', slot: 'Chest', effect: 'Reduces the chance you\'ll be critically hit by melee attacks by 6% and reduces all damage taken by 10%. (Bear Form)', discovery: 'Survive a massive gauntlet of corrupted furbolgs in Timbermaw Hold without ever shifting out of Bear Form.' },
        { name: 'Rune of Starsurge', slot: 'Legs', effect: 'Launch a surging stellar flare that causes Spellstorm damage. Benefits from both Wrath and Starfire talents.', discovery: 'Channel moonlight using a unique moonstone at four different moonwells across Kalimdor while avoiding level 60 elite ambushes.' },
        { name: 'Rune of the Wild Strikes', slot: 'Gloves', effect: 'While you are in Cat Form, Bear Form, or Dire Bear Form, party members within 30 yards gain 20% increased melee attack speed. (Replaces Windfury Totem necessity).', discovery: 'Defeat King Bangalash in Stranglethorn Vale within 30 seconds of initiating combat.' }
      ]
    }
  };

  const selectedData = runeData[activeClass as keyof typeof runeData];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#a335ee] to-[#e6cc80] wow-title drop-shadow-lg relative z-10 text-center">
          The Rune Engraving System
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          Discover hidden arcana hidden in the deepest, most dangerous corners of Azeroth. Runes fundamentally alter how your class plays, providing missing toolkit pieces and entirely new roles.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/4 space-y-2">
          {RUNE_CATEGORIES.map(className => (
            <button
              key={className}
              onClick={() => setActiveClass(className)}
              className={`w-full text-left p-4 text-sm font-bold uppercase tracking-widest transition-all border-l-4 shadow-md ${
                activeClass === className 
                  ? 'bg-[#1a140e] text-white scale-[1.02]' 
                  : 'border-transparent text-[#a69882] hover:bg-[#16120e] bg-[#120e0a] border border-[#3c3224]'
              }`}
              style={{ borderLeftColor: activeClass === className ? runeData[className as keyof typeof runeData].color : 'transparent' }}
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none blur-3xl"
              style={{ background: `radial-gradient(circle, ${selectedData.color} 0%, transparent 70%)` }}
            />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8 border-b border-[#3c3224]/50 pb-4">
                <div>
                  <h2 className="text-4xl font-extrabold mb-2" style={{ color: selectedData.color, textShadow: `0 0 10px ${selectedData.color}40` }}>
                    {activeClass} Runes
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                {selectedData.runes.map((rune, i) => (
                  <div key={i} className="bg-[#1a140e] border border-[#3c3224] p-6 rounded-lg shadow-inner hover:border-[#a335ee]/50 transition-colors relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-2 h-full" style={{ backgroundColor: selectedData.color, opacity: 0.2 }} />
                    
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-[#e6cc80] text-xl font-bold">{rune.name}</h4>
                      <span className="text-xs bg-[#120e0a] text-[#a69882] px-3 py-1 rounded border border-[#3c3224] font-bold tracking-widest shadow-[0_0_8px_rgba(163,53,238,0.15)]">
                        SLOT: {rune.slot.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-[#39ff14] font-bold text-sm">Effect: </span>
                        <span className="text-[#d3c8b8] text-sm leading-relaxed">{rune.effect}</span>
                      </div>
                      
                      <div className="bg-[#0b0907] p-4 rounded border border-[#3c3224]/50 border-l-2" style={{ borderLeftColor: selectedData.color }}>
                        <span className="text-white font-bold text-xs uppercase tracking-wider block mb-1">Epic Discovery Route:</span>
                        <span className="text-[#a69882] text-sm italic leading-relaxed">"{rune.discovery}"</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
