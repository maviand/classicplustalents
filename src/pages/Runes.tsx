import React from 'react';

export default function Runes() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10">
          Rune Engraving
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-2xl">
          Discover hidden power across Azeroth. True horizontal progression without replacing your tier sets.
        </p>
      </div>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">The Engraving System</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed">
          The Rune system from Season of Discovery returns, but strictly curated. Runes do not provide passive percentage-based stat increases; 
          they provide <strong className="text-white">new abilities, mechanical transformations, and role-defining passives</strong>. 
          Furthermore, they are not tied to core armor slots like Chest or Legs, ensuring they never conflict with your Tier Sets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] shadow-inner text-center">
            <div className="w-16 h-16 mx-auto bg-[#120e0a] border-2 border-[#a335ee] rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(163,53,238,0.3)]">
              <span className="text-[#a335ee] font-bold">Neck</span>
            </div>
            <h3 className="text-[#ffd100] font-bold mb-2">Amulet Engraving</h3>
            <p className="text-sm text-[#d3c8b8]">Houses major rotational or cooldown-modifying runes. Usually alters how your core class mechanic functions.</p>
          </div>
          
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] shadow-inner text-center">
            <div className="w-16 h-16 mx-auto bg-[#120e0a] border-2 border-[#0070dd] rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,112,221,0.3)]">
              <span className="text-[#0070dd] font-bold">Ring 1</span>
            </div>
            <h3 className="text-[#ffd100] font-bold mb-2">Signet Engraving</h3>
            <p className="text-sm text-[#d3c8b8]">Dedicated to utility, movement, and defensive runes. Shared pool across both ring slots.</p>
          </div>
          
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] shadow-inner text-center">
             <div className="w-16 h-16 mx-auto bg-[#120e0a] border-2 border-[#0070dd] rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,112,221,0.3)]">
              <span className="text-[#0070dd] font-bold">Ring 2</span>
            </div>
            <h3 className="text-[#ffd100] font-bold mb-2">Band Engraving</h3>
            <p className="text-sm text-[#d3c8b8]">You may equip two different Ring runes simultaneously. Stacking the same rune provides no additional benefit.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffd100]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4 relative z-10">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">Rune Examples</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed relative z-10">
          Runes are designed to bridge the gap between Vanilla's rigid class design and the dynamic combat of later expansions, without relying on infinite scaling power. Here are examples of class-defining Neck runes:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 relative z-10">
          {/* Warrior */}
          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded hover:border-[#c79c6e] transition-colors flex gap-4">
            <div className="w-12 h-12 rounded bg-[#c79c6e] flex items-center justify-center shrink-0 border-2 border-[#120e0a] shadow-[0_0_10px_#c79c6e]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#120e0a" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-[#c79c6e]">Rune of the Gladiator (Warrior)</h4>
              <p className="text-xs text-[#a69882] mb-1">Necklace Slot</p>
              <p className="text-sm text-[#d3c8b8]">While equipping a shield, your damage dealt is increased by 10% and your block value is increased by your Strength. Replaces Shield Block with Shield Charge.</p>
            </div>
          </div>
          
          {/* Warlock */}
          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded hover:border-[#9482c9] transition-colors flex gap-4">
            <div className="w-12 h-12 rounded bg-[#9482c9] flex items-center justify-center shrink-0 border-2 border-[#120e0a] shadow-[0_0_10px_#9482c9]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#120e0a" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-[#9482c9]">Rune of Metamorphosis (Warlock)</h4>
              <p className="text-xs text-[#a69882] mb-1">Necklace Slot</p>
              <p className="text-sm text-[#d3c8b8]">Transform into a Demon, increasing Armor by 500%, reducing the chance you will be critically hit by 6%, and changing your spell properties to function as a tank.</p>
            </div>
          </div>

          {/* Rogue */}
          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded hover:border-[#fff569] transition-colors flex gap-4">
            <div className="w-12 h-12 rounded bg-[#fff569] flex items-center justify-center shrink-0 border-2 border-[#120e0a] shadow-[0_0_10px_#fff569]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#120e0a" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-[#fff569]">Rune of the Duelist (Rogue)</h4>
              <p className="text-xs text-[#a69882] mb-1">Necklace Slot</p>
              <p className="text-sm text-[#d3c8b8]">Allows you to tank. Blade Dance now grants Parry chance equal to your Dodge chance. Sinister Strike generates additional threat. Feint becomes a Taunt.</p>
            </div>
          </div>

          {/* Shaman */}
          <div className="bg-[#1a140e] border border-[#3c3224] p-4 rounded hover:border-[#0070de] transition-colors flex gap-4">
            <div className="w-12 h-12 rounded bg-[#0070de] flex items-center justify-center shrink-0 border-2 border-[#120e0a] shadow-[0_0_10px_#0070de]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#120e0a" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-[#0070de]">Rune of Earth Shield (Shaman)</h4>
              <p className="text-xs text-[#a69882] mb-1">Necklace Slot</p>
              <p className="text-sm text-[#d3c8b8]">Protects the target with an earthen shield. Whenever the target takes damage, they are healed. 6 charges. Only one Elemental Shield can be active on a target.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">Methods of Discovery</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed">
          Runes are not handed out by class trainers. They are hidden across the world, requiring exploration, puzzle-solving, and community cooperation.
          Camelot avoids the "grind 200 mobs for a 1% drop rate" mechanic; instead, runes are deterministic rewards for completing unique content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224]">
            <h3 className="text-[#ffd100] font-bold mb-3 text-xl">The Cartographer's Cipher</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">
              Inscribers craft Sigil Vellums that project glowing runes onto specific, unmarked stone tablets found deep in hostile territory (e.g., inside the Elite section of Jintha'Alor). Two players—one Inscriber and one of the target class—must channel the vellum simultaneously to extract the rune.
            </p>
          </div>
          
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224]">
            <h3 className="text-[#ffd100] font-bold mb-3 text-xl">The Wandering Spirits</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">
              Using the <span className="text-[#a335ee]">Eye of the Dead</span> (a mid-level quest item), players can see otherwise invisible spectral NPCs that wander vast paths across zones like Desolace and the Plaguelands. Listening to their un-voiced dialogue hints at unmarked graves that must be dug up.
            </p>
          </div>
          
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224]">
            <h3 className="text-[#ffd100] font-bold mb-3 text-xl">Dungeon Anomalies</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">
              Certain runes require interacting with the environment inside dungeons in unintended ways. For example, kiting a specific fire-elemental mob in Blackrock Depths into the freezing water of the elemental wing causes it to harden, dropping a rune fragment when shattered.
            </p>
          </div>

          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224]">
            <h3 className="text-[#ffd100] font-bold mb-3 text-xl">The Blood Moon Echoes</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">
              During the Crimson Atoll PvP event, "Echoes" spawn randomly across the island. Escorting an Echo back to your faction's staging area while flagged for Free-For-All PvP rewards a cache that has a high chance to contain PvP-centric utility runes for the ring slots.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
