import React from 'react';

export default function Home() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative text-center py-24 px-6 overflow-hidden rounded-2xl border border-[#524430] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#120e0a]/40 via-[#120e0a]/80 to-[#0a0806] z-10" />
          <img 
            src="https://i.imgur.com/9Q04jxz.jpeg" 
            alt="Camelot Background" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
        </div>
        <div className="relative z-20 space-y-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-[#1a140e]/80 border border-[#ffd100]/30 text-[#ffd100] text-sm font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(255,209,0,0.2)]">
            A New Timeline
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] filter drop-shadow-lg">
            World of Warcraft:<br/>Camelot
          </h1>
          <p className="text-2xl text-[#d3c8b8] font-medium tracking-wide drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            Vanilla Warcraft, continued. The old world gets the decade of development it never received. Azeroth is the expansion.
          </p>
        </div>
      </div>

      {/* The Vision */}
      <section className="bg-gradient-to-br from-[#16120e] to-[#0f0c08] border border-[#4a3d2b] rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffd100] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff7d0a] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
        
        <div className="flex items-center gap-4 mb-8 border-b border-[#3c3224]/50 pb-4">
          <div className="w-12 h-12 rounded bg-[#1a140e] border border-[#ffd100]/30 flex items-center justify-center text-[#ffd100]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
          </div>
          <h2 className="text-3xl font-bold text-[#ffd100] tracking-wide">The Vision</h2>
        </div>
        
        <div className="space-y-6 text-[#b5a790] leading-relaxed text-lg">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#ffd100] first-letter:mr-2 first-letter:float-left">
            Camelot is not a remake, not a remaster, and not a rush toward the Dark Portal. The Bronze Dragonflight has pulled a thread loose from the timeways: an Azeroth where the year is still 25 ADP, where Kel'Thuzad still schemes in Naxxramas, and where the war between the Alliance and the Horde never paused to fight someone else's war in Outland.
          </p>
          <p>
            In this timeline, the old world is the sole focus. Because the Bronze Dragonflight anchors the setting, we can bend lore without breaking it. New allied races answer the call to war early. Closed gates finally swing open. Unfinished corners of the 2004 world map—the places every Vanilla player pressed their face against—are built, populated, and plunged into war.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#3c3224]/30">
            <div className="bg-[#1a140e]/50 p-6 rounded-lg border border-[#3c3224] hover:border-[#ffd100]/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffd100] transition-colors">The Grind is the Point</h3>
              <p className="text-sm">Leveling is ~60% slower than Vanilla, with no catch-up mechanics, no heirlooms, and no boosts. Reaching 60 is a monumental journey and the story of your character, not just the tutorial before the "real game" begins.</p>
            </div>
            <div className="bg-[#1a140e]/50 p-6 rounded-lg border border-[#3c3224] hover:border-[#ffd100]/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffd100] transition-colors">Horizontal, Not Vertical</h3>
              <p className="text-sm">Growth comes from a long sequence of post-60 content patches, not a rising level number. New raids run parallel to old ones; gear expands sideways into new niches rather than just scaling up infinitely.</p>
            </div>
            <div className="bg-[#1a140e]/50 p-6 rounded-lg border border-[#3c3224] hover:border-[#ffd100]/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffd100] transition-colors">Every Zone Earns its Place</h3>
              <p className="text-sm">Existing zones grow by roughly 20%, adding new physical subzones, denser quest hubs, and world bosses. No region of Azeroth remains a simple travel corridor; there is war everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-[#ffd100] tracking-wide">At a Glance</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[#3c3224] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Economy & Professions</h4>
                <p className="text-sm text-[#a69882]">12 total professions, including Inscription and Jewelcrafting. Every profession has a specialization tree. Best-in-slot gear is crafted, ensuring relevance forever.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">The Runecarved Path</h4>
                <p className="text-sm text-[#a69882]">Path of the Titans realized. Discover runes in the world, map them to your constellation, and equip 1 Major/2 Minors at rest. No gear engraving inventory tetris.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Expanded World</h4>
                <p className="text-sm text-[#a69882]">4 permanent phases (caps 30/40/50/60). Gilneas opens. Hyjal is a max-level warzone. The Dark Portal is destroyed in a massive event. 14 new class/race combos with deep lore quests.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Parallel Raiding</h4>
                <p className="text-sm text-[#a69882]">7 tier brackets, scaling from 10 to 40 players. Tiers have parallel raids (e.g. BWL and Grim Batol side-by-side) connected by the overarching Hourglass Cabal storyline.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Allied Races</h4>
                <p className="text-sm text-[#a69882]">8 allied races (Worgen, Ogres, Wildhammer, Goblins, etc.). Each features a mid-level starting experience and a 10-point racial talent tree advanced via reputation.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">The Banner War</h4>
                <p className="text-sm text-[#a69882]">A unified PvP campaign spanning 7 world theaters. Hold Stromgarde Keep, fight over Devilsaur leather in Un'Goro, or clash in the new 25v25 Azshara Crater battleground.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
