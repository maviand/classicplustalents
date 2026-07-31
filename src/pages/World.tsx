import React from 'react';

export default function World() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10">
          The Living World
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-2xl">
          Azeroth expanded. Unfinished zones realized, dead zones revitalized, and epic questlines that span continents.
        </p>
      </div>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">Zone Expansions</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed">
          Vanilla WoW shipped with massive swaths of empty geography—zones that were meant to be endgame hubs but were left bare due to time constraints. Camelot finishes the map.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#120e0a] border border-[#3c3224] p-6 rounded-lg hover:border-[#ffd100]/30 transition-all group">
            <h3 className="text-[#ffd100] font-bold text-2xl mb-3 flex items-center gap-2">
              <span className="w-4 h-4 bg-[#ff7d0a] rounded rotate-45 inline-block group-hover:animate-pulse"></span>
              Azshara: The Shattered Coast
            </h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed mb-4">
              Transformed from a barren cliffside into a bustling level 45-55 hub. 
            </p>
            <ul className="text-sm text-[#a69882] space-y-2 list-disc pl-4">
              <li><strong className="text-white">Bilgewater Port:</strong> A neutral Goblin settlement carved into the cliffs, serving as the main quest hub.</li>
              <li><strong className="text-white">The Timbermaw War:</strong> A massive reputation grind fighting back corrupt Furbolgs in the north.</li>
              <li><strong className="text-white">Azshara Crater:</strong> The entrance to the new 25v25 MOBA-style Battleground.</li>
            </ul>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-6 rounded-lg hover:border-[#ffd100]/30 transition-all group">
            <h3 className="text-[#ffd100] font-bold text-2xl mb-3 flex items-center gap-2">
              <span className="w-4 h-4 bg-[#40c7eb] rounded rotate-45 inline-block group-hover:animate-pulse"></span>
              Winterspring: The Frostwhisper Gorge
            </h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed mb-4">
              The southern half of Winterspring is now a sprawling endgame zone leading up to Mount Hyjal.
            </p>
            <ul className="text-sm text-[#a69882] space-y-2 list-disc pl-4">
              <li><strong className="text-white">Mazthoril Deeps:</strong> The new 5-player dungeon exploring the blue dragonflight's corrupted sanctum.</li>
              <li><strong className="text-white">Darkwhisper Pass:</strong> Transformed into an elite farming zone for highly sought-after crafting materials (Phase 4).</li>
              <li><strong className="text-white">Starfall Village:</strong> Expanded with a flight path and high-level daily quests.</li>
            </ul>
          </div>

          <div className="bg-[#120e0a] border border-[#3c3224] p-6 rounded-lg hover:border-[#ffd100]/30 transition-all group xl:col-span-2 relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-5 scale-150 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
             </div>
            <h3 className="text-[#ffd100] font-bold text-2xl mb-3 flex items-center gap-2 relative z-10">
              <span className="w-4 h-4 bg-[#c41f3b] rounded rotate-45 inline-block group-hover:animate-pulse"></span>
              The Deadwind Pass: Crypts of Karazhan
            </h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed mb-4 relative z-10">
              The forgotten connector zone is now the focal point of Phase 3 and 4, hosting one of the most chilling environments in the game.
            </p>
            <div className="grid md:grid-cols-2 gap-4 relative z-10">
               <div>
                  <ul className="text-sm text-[#a69882] space-y-2 list-disc pl-4">
                    <li><strong className="text-white">The Lower Karazhan Crypts:</strong> Fully realized as a massive 10-player mini-raid exploring the Upside-Down Sinners and the dark history of Medivh.</li>
                    <li><strong className="text-white">Ariden's Camp:</strong> A neutral hub for outcast mages and warlocks.</li>
                  </ul>
               </div>
               <div className="bg-[#1a140e] p-3 border border-[#3c3224] rounded">
                 <strong className="text-[#ffd100] text-xs block mb-1">Environmental Hazard</strong>
                 <p className="text-xs text-[#a69882]">The zone applies a creeping debuff called "Medivh's Paranoia". Players must craft special shadow-warding torches to survive deep exploration.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">Epic Questlines</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed">
          The best moments in Vanilla WoW were not sitting in a capital city waiting for a queue to pop. They were embarking on world-spanning journeys like the Onyxia Attunement or the Scepter of the Shifting Sands. Camelot introduces dozens of new, deeply narrative quest chains.
        </p>

        <div className="space-y-6 mt-6">
          <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-6 rounded-lg border-l-4 border-[#0070dd] shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-[#0070dd] text-xl">The Ashbringer's Shadow</h3>
              <span className="text-xs text-[#a69882] bg-[#120e0a] px-2 py-1 rounded border border-[#3c3224]">Requires Level 60</span>
            </div>
            <p className="text-sm text-[#d3c8b8] mb-3">
              A paladin and warrior-exclusive chain that begins with a drop from the Four Horsemen. It tasks the player with tracing the history of Alexandros Mograine, leading to a solo scenario where you must defend the Scarlet Monastery from a Scourge assault.
            </p>
            <p className="text-xs text-[#a69882]"><strong>Reward:</strong> <span className="text-[#a335ee]">Corrupted Ashbringer</span> (if crafted via Blacksmithing) and the title <span className="text-white">"The Lightbringer"</span>.</p>
          </div>

          <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-6 rounded-lg border-l-4 border-[#a335ee] shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-[#a335ee] text-xl">The Missing Diplomat, Concluded</h3>
              <span className="text-xs text-[#a69882] bg-[#120e0a] px-2 py-1 rounded border border-[#3c3224]">Requires Level 50</span>
            </div>
            <p className="text-sm text-[#d3c8b8] mb-3">
              The infamous unfinished Vanilla questline is finally resolved. Players must infiltrate Alcaz Island, uncover the Defias/Naga conspiracy, and rescue King Varian Wrynn. This is a massive, multi-part stealth and combat operation requiring a dedicated 5-player group.
            </p>
            <p className="text-xs text-[#a69882]"><strong>Reward:</strong> Choice of a powerful Phase 3 Epic Ring, and the <span className="text-[#0070dd]">Stormwind Royal Signet</span> (teleports the user to Stormwind).</p>
          </div>
          
          <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-6 rounded-lg border-l-4 border-[#1eff00] shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-[#1eff00] text-xl">The Emerald Dreamway</h3>
              <span className="text-xs text-[#a69882] bg-[#120e0a] px-2 py-1 rounded border border-[#3c3224]">Requires Level 60 (Druid/Hunter/Shaman)</span>
            </div>
            <p className="text-sm text-[#d3c8b8] mb-3">
              A chain that tasks nature-attuned classes with restoring the corrupted Dream Portals across Azeroth (Ashenvale, Duskwood, Feralas, Hinterlands). Involves phasing into mini-versions of the Emerald Dream to defeat Nightmare horrors.
            </p>
            <p className="text-xs text-[#a69882]"><strong>Reward:</strong> Permanent access to the Dreamway, allowing fast-travel between the four portals across the world.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
