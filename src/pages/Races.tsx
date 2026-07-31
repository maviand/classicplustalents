import React from 'react';

export default function Races() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10">
          Playable & Allied Races
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-2xl">
          Eight new allied races join the war. Experience bespoke mid-level starting zones and master the wild new 10-point Racial Talent Trees.
        </p>
      </div>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">The Allied Races</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed">
          Eight allied races join the war across the four phases, four per faction. Each starts mid-level in a bespoke starting
          zone neighboring a region tied to its story. They are not purchased on a storefront; each is earned through an epic unlock questline rooted in the world.
        </p>

        <div className="space-y-6 mt-8">
          {/* Alliance Races */}
          <h3 className="text-2xl font-bold text-[#0070dd] border-b border-[#1a4a75] pb-2 inline-block px-4 bg-[#1a4a75]/20 rounded-t-lg">The Alliance</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#120e0a] border border-[#1a4a75]/50 rounded-lg p-6 hover:bg-[#16120e] transition-colors relative overflow-hidden group">
              <div className="absolute right-0 top-0 opacity-10 scale-150 transition-transform group-hover:scale-[2.0] duration-700">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#1a4a75"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-1 relative z-10">Worgen <span className="text-[#a69882] text-sm font-normal">(Phase 1)</span></h4>
              <p className="text-sm text-[#0070dd] mb-3 relative z-10">Starts: Lvl 12, The Greymane Wall</p>
              <p className="text-sm text-[#d3c8b8] leading-relaxed relative z-10 mb-4">Players spawn atop the barricades defending against a localized Forsaken siege, push the blight back through Pyrewood Village, and learn to master the curse.</p>
              <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224] relative z-10 border-l-2 border-l-[#ffd100]">
                <strong className="text-white text-xs block mb-1">Base Racial: <span className="text-[#ffd100]">Darkflight</span></strong>
                <p className="text-xs text-[#a69882]">Activates your true form, dropping to all fours. Movement speed increased by 40% for 10 sec.</p>
              </div>
            </div>

            <div className="bg-[#120e0a] border border-[#1a4a75]/50 rounded-lg p-6 hover:bg-[#16120e] transition-colors relative overflow-hidden group">
              <h4 className="text-xl font-bold text-white mb-1 relative z-10">Wildhammer Dwarves <span className="text-[#a69882] text-sm font-normal">(Phase 3)</span></h4>
              <p className="text-sm text-[#0070dd] mb-3 relative z-10">Starts: Lvl 40, The Overlook (Hinterlands)</p>
              <p className="text-sm text-[#d3c8b8] leading-relaxed relative z-10 mb-4">Players secure gryphon roosts from aggressive Forest Trolls and establish aerial supply lines for the Alliance across the mountains.</p>
              <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224] relative z-10 border-l-2 border-l-[#ffd100]">
                <strong className="text-white text-xs block mb-1">Base Racial: <span className="text-[#ffd100]">Gryphon's Vigor</span></strong>
                <p className="text-xs text-[#a69882]">Increases resistance to Nature and Frost magic by 10, and reduces the duration of movement impairing effects by 15%.</p>
              </div>
            </div>

            <div className="bg-[#120e0a] border border-[#1a4a75]/50 rounded-lg p-6 hover:bg-[#16120e] transition-colors relative overflow-hidden group">
              <h4 className="text-xl font-bold text-white mb-1 relative z-10">Timbermaw Furbolg <span className="text-[#a69882] text-sm font-normal">(Phase 4)</span></h4>
              <p className="text-sm text-[#0070dd] mb-3 relative z-10">Starts: Lvl 48, The Inner Barrows</p>
              <p className="text-sm text-[#d3c8b8] leading-relaxed relative z-10 mb-4">Awakening in the uncorrupted heart of Timbermaw Hold, players purge the Deadwood corruption leaking into the tunnels.</p>
              <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224] relative z-10 border-l-2 border-l-[#ffd100]">
                <strong className="text-white text-xs block mb-1">Base Racial: <span className="text-[#ffd100]">Ursine Roar</span></strong>
                <p className="text-xs text-[#a69882]">Unleash a roar that demoralizes enemies within 8 yards, reducing their attack power for 20 sec.</p>
              </div>
            </div>

            <div className="bg-[#120e0a] border border-[#1a4a75]/50 rounded-lg p-6 hover:bg-[#16120e] transition-colors relative overflow-hidden group">
              <h4 className="text-xl font-bold text-white mb-1 relative z-10">High Elves <span className="text-[#a69882] text-sm font-normal">(Phase 4)</span></h4>
              <p className="text-sm text-[#0070dd] mb-3 relative z-10">Starts: Lvl 53, Quel'Lithien Vanguard</p>
              <p className="text-sm text-[#d3c8b8] leading-relaxed relative z-10 mb-4">A fiercely contested, phased lodge on the Plaguelands border. Cleanse a corrupted ley-line to establish a permanent Alliance foothold.</p>
              <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224] relative z-10 border-l-2 border-l-[#ffd100]">
                <strong className="text-white text-xs block mb-1">Base Racial: <span className="text-[#ffd100]">Arcane Meditation</span></strong>
                <p className="text-xs text-[#a69882]">Allows 10% of your Mana regeneration to continue while casting.</p>
              </div>
            </div>
          </div>

          {/* Horde Races */}
          <h3 className="text-2xl font-bold text-[#c41f3b] border-b border-[#751a1a] pb-2 inline-block px-4 bg-[#751a1a]/20 rounded-t-lg mt-12">The Horde</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#120e0a] border border-[#751a1a]/50 rounded-lg p-6 hover:bg-[#16120e] transition-colors relative overflow-hidden group">
              <div className="absolute right-0 top-0 opacity-10 scale-150 transition-transform group-hover:scale-[2.0] duration-700">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#751a1a"><path d="M12 2L2 22h20L12 2z"/></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-1 relative z-10">Ogres <span className="text-[#a69882] text-sm font-normal">(Phase 2)</span></h4>
              <p className="text-sm text-[#c41f3b] mb-3 relative z-10">Starts: Lvl 35, The Broken Tables</p>
              <p className="text-sm text-[#d3c8b8] leading-relaxed relative z-10 mb-4">Rooted in Feralas and Desolace, players earn their place among (or against) the Gordunni, Dreadmaul, and Mosh'Ogg clans to unify them under the Horde.</p>
              <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224] relative z-10 border-l-2 border-l-[#ffd100]">
                <strong className="text-white text-xs block mb-1">Base Racial: <span className="text-[#ffd100]">Brutish Resilience</span></strong>
                <p className="text-xs text-[#a69882]">Increases total health by 5% and stun resistance by 10%.</p>
              </div>
            </div>

            <div className="bg-[#120e0a] border border-[#751a1a]/50 rounded-lg p-6 hover:bg-[#16120e] transition-colors relative overflow-hidden group">
              <h4 className="text-xl font-bold text-white mb-1 relative z-10">Forest Trolls <span className="text-[#a69882] text-sm font-normal">(Phase 3)</span></h4>
              <p className="text-sm text-[#c41f3b] mb-3 relative z-10">Starts: Lvl 40, The Sunken Altars</p>
              <p className="text-sm text-[#d3c8b8] leading-relaxed relative z-10 mb-4">Off Revantusk Village, players reclaim submerged tribal altars from rogue Naga and hostile Wildhammer scouts to secure the coast.</p>
              <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224] relative z-10 border-l-2 border-l-[#ffd100]">
                <strong className="text-white text-xs block mb-1">Base Racial: <span className="text-[#ffd100]">Voodoo Hex</span></strong>
                <p className="text-xs text-[#a69882]">Curse an enemy, reducing their haste and movement speed by 10% for 8 sec.</p>
              </div>
            </div>

            <div className="bg-[#120e0a] border border-[#751a1a]/50 rounded-lg p-6 hover:bg-[#16120e] transition-colors relative overflow-hidden group">
              <h4 className="text-xl font-bold text-white mb-1 relative z-10">Goblins <span className="text-[#a69882] text-sm font-normal">(Phase 3)</span></h4>
              <p className="text-sm text-[#c41f3b] mb-3 relative z-10">Starts: Lvl 45, The Shattered Strand</p>
              <p className="text-sm text-[#d3c8b8] leading-relaxed relative z-10 mb-4">A crashed zeppelin on the beaches of Azshara. Use salvage and explosives to establish a Steamwheedle beachhead against giants.</p>
              <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224] relative z-10 border-l-2 border-l-[#ffd100]">
                <strong className="text-white text-xs block mb-1">Base Racial: <span className="text-[#ffd100]">Rocket Jump</span></strong>
                <p className="text-xs text-[#a69882]">Activate your rocket belt to jump forward a short distance. (2 min cooldown).</p>
              </div>
            </div>

            <div className="bg-[#120e0a] border border-[#751a1a]/50 rounded-lg p-6 hover:bg-[#16120e] transition-colors relative overflow-hidden group">
              <h4 className="text-xl font-bold text-white mb-1 relative z-10">Dark Irons <span className="text-[#a69882] text-sm font-normal">(Phase 3)</span></h4>
              <p className="text-sm text-[#c41f3b] mb-3 relative z-10">Starts: Lvl 45, The Lower Slag Pits</p>
              <p className="text-sm text-[#d3c8b8] leading-relaxed relative z-10 mb-4">A phased, subterranean rebellion in Searing Gorge: sabotaging the Emperor's forges, stealing weapon caches, and assassinating Ragnaros loyalists.</p>
              <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224] relative z-10 border-l-2 border-l-[#ffd100]">
                <strong className="text-white text-xs block mb-1">Base Racial: <span className="text-[#ffd100]">Forged in Flame</span></strong>
                <p className="text-xs text-[#a69882]">Reduces physical damage taken by 1% and grants flat Fire resistance based on level.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#a335ee]/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4 relative z-10">
           <div className="p-2 bg-[#1a140e] rounded border border-[#a335ee]/30 text-[#a335ee]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-[#a335ee] tracking-wide">10-Point Racial Trees: Creative Mechanics</h2>
        </div>
        
        <div className="relative z-10 space-y-6">
          <p className="text-[#b5a790] text-lg leading-relaxed">
            Vanilla racials were often passive stat sticks. In Camelot, every race gets a <strong>10-point racial talent tree</strong> layered on top of their class trees, unlocked via world exploration. These talents don't just add numbers—they provide wild, creative, and sometimes bizarre interactions with the world itself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            
            {/* Ogre */}
            <div className="bg-[#1a140e] p-5 rounded-lg border border-[#751a1a] shadow-[0_4px_15px_rgba(117,26,26,0.2)] hover:border-[#ff3333] transition-colors relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff3333]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#3b0909] border border-[#ff3333] flex items-center justify-center font-bold text-[#ff3333] text-xs">O</div>
                <h4 className="font-bold text-white">Ogre: <span className="text-[#ff3333]">Two-Headed Argument</span></h4>
              </div>
              <p className="text-xs text-[#a69882] mb-3">Tier 3 — Requires 5 points</p>
              <div className="bg-[#0f0c08] p-3 rounded text-sm text-[#d3c8b8] border border-[#3c3224]">
                When affected by a Mind Control or Charm effect, there is a 50% chance your second head stubbornly disagrees. You become completely immune to the effect, but are instead confused (wandering aimlessly) for 3 seconds as the heads argue.
              </div>
            </div>

            {/* Goblin */}
            <div className="bg-[#1a140e] p-5 rounded-lg border border-[#39ff14]/30 shadow-[0_4px_15px_rgba(57,255,20,0.1)] hover:border-[#39ff14] transition-colors relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#39ff14]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0a1a08] border border-[#39ff14] flex items-center justify-center font-bold text-[#39ff14] text-xs">G</div>
                <h4 className="font-bold text-white">Goblin: <span className="text-[#39ff14]">Volatile Aftermarket</span></h4>
              </div>
              <p className="text-xs text-[#a69882] mb-3">Tier 4 — Requires 7 points</p>
              <div className="bg-[#0f0c08] p-3 rounded text-sm text-[#d3c8b8] border border-[#3c3224]">
                Any engineering explosive or device you use has a 10% chance to misfire gloriously. If it misfires, its radius and effect are doubled, but it also deals 30% of your maximum health to you as Fire damage and knocks you backwards.
              </div>
            </div>

            {/* Undead */}
            <div className="bg-[#1a140e] p-5 rounded-lg border border-[#a335ee]/30 shadow-[0_4px_15px_rgba(163,53,238,0.1)] hover:border-[#a335ee] transition-colors relative">
               <div className="absolute top-0 right-0 w-16 h-16 bg-[#a335ee]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#14081c] border border-[#a335ee] flex items-center justify-center font-bold text-[#a335ee] text-xs">U</div>
                <h4 className="font-bold text-white">Undead: <span className="text-[#a335ee]">Detachable Digits</span></h4>
              </div>
              <p className="text-xs text-[#a69882] mb-3">Tier 2 — Requires 3 points</p>
              <div className="bg-[#0f0c08] p-3 rounded text-sm text-[#d3c8b8] border border-[#3c3224]">
                When disarmed, you throw your severed arm at the enemy. Deals minor physical damage and silences the target for 1.5 seconds out of pure horror. You cannot use two-handed weapons until the disarm effect expires and you reattach your arm.
              </div>
            </div>

            {/* Night Elf */}
            <div className="bg-[#1a140e] p-5 rounded-lg border border-[#0070dd]/30 shadow-[0_4px_15px_rgba(0,112,221,0.1)] hover:border-[#0070dd] transition-colors relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0070dd]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#051124] border border-[#0070dd] flex items-center justify-center font-bold text-[#0070dd] text-xs">N</div>
                <h4 className="font-bold text-white">Night Elf: <span className="text-[#0070dd]">Wisp Detonation</span></h4>
              </div>
              <p className="text-xs text-[#a69882] mb-3">Tier 5 — Capstone (1 point)</p>
              <div className="bg-[#0f0c08] p-3 rounded text-sm text-[#d3c8b8] border border-[#3c3224]">
                If you die, you immediately spawn 3 Wisps that aggressively seek out the enemy who dealt the killing blow. If they reach the target, they detonate, draining 10% of the target's total mana and returning it as health to your nearest living ally.
              </div>
            </div>

            {/* Dwarf */}
            <div className="bg-[#1a140e] p-5 rounded-lg border border-[#ff8000]/30 shadow-[0_4px_15px_rgba(255,128,0,0.1)] hover:border-[#ff8000] transition-colors relative">
               <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff8000]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#241205] border border-[#ff8000] flex items-center justify-center font-bold text-[#ff8000] text-xs">D</div>
                <h4 className="font-bold text-white">Dwarf: <span className="text-[#ff8000]">Liquid Courage</span></h4>
              </div>
              <p className="text-xs text-[#a69882] mb-3">Tier 3 — Requires 5 points</p>
              <div className="bg-[#0f0c08] p-3 rounded text-sm text-[#d3c8b8] border border-[#3c3224]">
                Drinking an alcoholic beverage in combat is now an instant action that doesn't trigger the GCD. Doing so increases your Fear resistance by 50% for 10 seconds, but your camera sways slightly and your chat messages are automatically slurred.
              </div>
            </div>

            {/* Tauren */}
            <div className="bg-[#1a140e] p-5 rounded-lg border border-[#e6cc80]/30 shadow-[0_4px_15px_rgba(230,204,128,0.1)] hover:border-[#e6cc80] transition-colors relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#e6cc80]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#1f1a0e] border border-[#e6cc80] flex items-center justify-center font-bold text-[#e6cc80] text-xs">T</div>
                <h4 className="font-bold text-white">Tauren: <span className="text-[#e6cc80]">Stampeding Herd</span></h4>
              </div>
              <p className="text-xs text-[#a69882] mb-3">Tier 5 — Capstone (1 point)</p>
              <div className="bg-[#0f0c08] p-3 rounded text-sm text-[#d3c8b8] border border-[#3c3224]">
                Replaces War Stomp. You charge forward in a straight line for 15 yards. Any enemy you pass through is knocked down for 1.5 seconds. If you hit a wall, you are stunned for 2 seconds instead.
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
