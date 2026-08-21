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
            In this timeline, the old world is the sole focus. Because the Bronze Dragonflight anchors the setting, we can fulfill Vanilla's unfulfilled promises without breaking core lore. Allied sub-races join the frontlines from Level 1 with 4+ authentic racial traits. Closed gates swing open. Suramar-style urban insurgency campaigns let players reclaim Gilneas City, Stromgarde, and Eldarath. Raids adopt Season of Discovery 10-man and 20-man team sizes with scalable 20/40-man Epic modes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#3c3224]/30">
            <div className="bg-[#1a140e]/50 p-6 rounded-lg border border-[#3c3224] hover:border-[#ffd100]/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffd100] transition-colors">The Journey is the Point</h3>
              <p className="text-sm">Deliberate leveling pacing, with no catch-up mechanics, no heirlooms, and no paid boosts. Reaching 60 is a monumental achievement and the story of your character, accompanied by rich class trials and world milestones.</p>
            </div>
            <div className="bg-[#1a140e]/50 p-6 rounded-lg border border-[#3c3224] hover:border-[#ffd100]/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffd100] transition-colors">SoD Raid Team Scaling</h3>
              <p className="text-sm">Endgame progression follows Season of Discovery raid sizes: flexible 10-man and 20-man baseline raids, scaling up to 20-man and 40-man Epic modes to eliminate roster friction while keeping classic encounters legendary.</p>
            </div>
            <div className="bg-[#1a140e]/50 p-6 rounded-lg border border-[#3c3224] hover:border-[#ffd100]/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffd100] transition-colors">Every Zone Handcrafted</h3>
              <p className="text-sm">Every new zone, dungeon wing, and battleground is meticulously hand-placed with narrative intention. Zero procedural filler—only authentic Vanilla blanks like Hyjal, Uldum, Gilneas, and Karazhan Crypts.</p>
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
                <h4 className="text-lg font-bold text-white mb-1">Deep Crafting & Economy</h4>
                <p className="text-sm text-[#a69882]">Classic trade skills enhanced with rare regional recipe drops, specialized sub-branch specialization quests, and bis crafted armor that keeps crafters essential forever.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Path of the Titans: Class Discoveries</h4>
                <p className="text-sm text-[#a69882]">Ancient tomes, librams, and rites hidden across Azeroth permanently empower your spellbook. Hybrids achieve full tanking and healing viability without gear-swapping tetris.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Suramar-Style Insurgency Campaigns</h4>
                <p className="text-sm text-[#a69882]">Multi-week urban resistance in Gilneas City, Stromgarde Reconstruction, and the Highborne Leylines of Eldarath with disguise mechanics, sewer hubs, and phased district liberation.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">SoD Scaled Parallel Raids (10 / 20 / 40 Man)</h4>
                <p className="text-sm text-[#a69882]">Flexible raid progression across 10-man and 20-man tiers with 20/40-man Epic scaling: Karazhan Crypts, the Upper Tower, Grim Batol, and the Emerald Nightmare.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">16 Playable Heritages (4+ Racials Each)</h4>
                <p className="text-sm text-[#a69882]">All 16 core & allied races start at Level 1 with at least 4 distinctive racial traits and passives, authentic weapon masteries, and active racial abilities.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-5 rounded-lg hover:bg-[#16120e] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1a140e] rounded text-[#ffd100] border border-[#3c3224]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Authentic World PvP & Battlegrounds</h4>
                <p className="text-sm text-[#a69882]">The Banner War brings caravan ambushes to Hillsbrad and Ashenvale, the 25v25 Azshara Crater siege opens, and the 10v10 Gurubashi Brawl delivers gladiatorial mayhem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
