import React from 'react';

export default function PvE() {
  const [activeTab, setActiveTab] = React.useState<'dungeons' | 'raids' | 'legendaries'>('raids');

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10">
          Player vs Environment
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-2xl">
          The deepest PvE experience in Warcraft history. Parallel raiding, expansive dungeon crawls, and the legendary Titanforged Path.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap relative z-10">
        {[
          { id: 'dungeons', label: 'Dungeons & Mini-Dungeons' },
          { id: 'raids', label: 'Raids & Endgame' },
          { id: 'legendaries', label: 'The Titanforged Path' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 relative overflow-hidden group ${
              activeTab === tab.id 
                ? 'bg-gradient-to-br from-[#2a1f16] to-[#1a140e] text-[#ffd100] border border-[#ffd100]/60 shadow-[0_0_20px_rgba(255,209,0,0.4)]' 
                : 'bg-[#120e0a] text-[#a69882] border border-[#3c3224] hover:bg-[#1a140e] hover:text-white hover:border-[#ffd100]/30'
            }`}
          >
            {activeTab === tab.id && (
              <span className="absolute inset-0 bg-[#ffd100]/5 animate-pulse rounded-lg" />
            )}
            <span className="relative z-10 drop-shadow-md">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="relative z-10">
        {activeTab === 'dungeons' && (
          <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
              <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-wide">Dungeons & Mini-Dungeons</h2>
            </div>
            
            <p className="text-[#b5a790] text-lg leading-relaxed">
              Every classic dungeon remains, retuned for the slower leveling curve and cap phases. But to make the world feel truly alive, over 20 new five-player instances arrive. This includes massive sprawling crawls, and new 15-to-20-minute, single-boss-chain "mini-dungeons" designed to make a zone's story playable without demanding a full evening.
            </p>
            
            <div className="overflow-x-auto rounded-lg border border-[#3c3224] shadow-inner bg-[#0a0806]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
                    <th className="p-4 font-bold text-[#ffd100]">Dungeon</th>
                    <th className="p-4 font-bold">Zone / Phase</th>
                    <th className="p-4 font-bold">Levels</th>
                    <th className="p-4 font-bold w-1/2">Theme & Bosses</th>
                  </tr>
                </thead>
                <tbody className="text-[#a69882] text-sm">
                  {/* Phase 1 */}
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                    <td className="p-4 font-semibold text-white">The Plague Convoy</td>
                    <td className="p-4">Silverpine / P1</td>
                    <td className="p-4 text-[#ffd100]">18–20</td>
                    <td className="p-4">Mini-dungeon capstone of the Worgen starting experience. Defend a barricade against waves of ghouls before fighting a towering abomination.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                    <td className="p-4 font-semibold text-white">Bough of Sorrows</td>
                    <td className="p-4">Ashenvale / P1</td>
                    <td className="p-4 text-[#ffd100]">24–30</td>
                    <td className="p-4">An ancient of war corrupted by felsludge. Navigate twisted roots, fighting satyrs and tainted dryads. Features 4 bosses, ending with the maddened Ancient itself.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors bg-[#16120e]">
                    <td className="p-4 font-semibold text-white">Cove of the Bloodsail</td>
                    <td className="p-4">Stranglethorn / P1</td>
                    <td className="p-4 text-[#ffd100]">27–30</td>
                    <td className="p-4">Mini-dungeon. Board a flagship anchored off the coast. Fight the captain to secure a stolen naval charter.</td>
                  </tr>

                  {/* Phase 2 */}
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                    <td className="p-4 font-semibold text-white">Raven Hill Catacombs</td>
                    <td className="p-4">Duskwood / P2</td>
                    <td className="p-4 text-[#ffd100]">32–38</td>
                    <td className="p-4">Beneath the cemetery, Twilight cultists feed the curse that grips Duskwood. A massive labyrinth with 5 bosses, including a necromancer manipulating shadows.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                    <td className="p-4 font-semibold text-white">The Syndicate Conclave</td>
                    <td className="p-4">Alterac Mts / P2</td>
                    <td className="p-4 text-[#ffd100]">36–42</td>
                    <td className="p-4">The rot beneath the ruins: Syndicate spymasters, poisoners, and paid steel. Navigate trap-filled halls to assassinate their regional leader.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors bg-[#16120e]">
                    <td className="p-4 font-semibold text-white">Gordunni Outpost</td>
                    <td className="p-4">Feralas / P2</td>
                    <td className="p-4 text-[#ffd100]">38–40</td>
                    <td className="p-4">Mini-dungeon. Assault an ogre mound to disrupt their supply lines, tying into the Ogre allied race unlock.</td>
                  </tr>

                  {/* Phase 3 */}
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                    <td className="p-4 font-semibold text-white">The Scuttled Fleet</td>
                    <td className="p-4">Tanaris / P3</td>
                    <td className="p-4 text-[#ffd100]">44–48</td>
                    <td className="p-4">A pirate armada wrecked on the reefs of the new island chain. Fight through half-sunken galleons against undead buccaneers and sea giants. 4 Bosses.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                    <td className="p-4 font-semibold text-white">The Sundered Court</td>
                    <td className="p-4">Azshara / P3</td>
                    <td className="p-4 text-[#ffd100]">48–54</td>
                    <td className="p-4">The drowned palace district of old Eldarath. Supported by three mini-dungeons. Highborne ghosts and Naga fight for control over ancient titan relics.</td>
                  </tr>

                  {/* Phase 4 */}
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                    <td className="p-4 font-semibold text-white">The Fel Hollows</td>
                    <td className="p-4">Felwood / P4</td>
                    <td className="p-4 text-[#ffd100]">52–56</td>
                    <td className="p-4">A warren of corrupted root-caverns beneath Jaedenar. Eradicate Shadow Council summoners before they pull a pit lord into Azeroth.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                    <td className="p-4 font-semibold text-white">Mazthoril Deeps</td>
                    <td className="p-4">Winterspring / P4</td>
                    <td className="p-4 text-[#ffd100]">56–60</td>
                    <td className="p-4">A three-wing dungeon beneath the wyrm caves. Blue dragonkin driven mad by arcane anomalies. Seeds the Hyjal raid storyline. 6 Bosses.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                    <td className="p-4 font-semibold text-white">Demon Fall Canyon</td>
                    <td className="p-4">Ashenvale / P4</td>
                    <td className="p-4 text-[#ffd100]">58–60</td>
                    <td className="p-4">Legion remnants desecrate the monument where Grommash Hellscream fell. A brutal level 60 challenge requiring a geared, coordinated group.</td>
                  </tr>

                  {/* Post Naxx */}
                  <tr className="hover:bg-[#1a140e]/70 transition-colors bg-[#1a0f0f]">
                    <td className="p-4 font-semibold text-[#ff5050]">Karazhan Crypts</td>
                    <td className="p-4">Deadwind / Post-Naxx</td>
                    <td className="p-4 text-[#ffd100]">60</td>
                    <td className="p-4">The inverted catacombs beneath Medivh's tower. A horrific 5-player test of endurance featuring the infamous Upside-Down Sinners.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'raids' && (
          <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
              <div className="p-2 bg-[#1a140e] rounded border border-[#ff7d0a]/30 text-[#ff7d0a]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-wide">Raids & Endgame</h2>
            </div>
            
            <p className="text-[#b5a790] text-lg leading-relaxed">
              The level cap has four phases, but the raid game does not stop at four. Camelot follows the classical pattern: 
              a sequence of post-60 content patches, each opening new raids on top of a stable level cap. 
            </p>

            <div className="bg-gradient-to-r from-[#1a140e] to-[#241a10] p-6 border-l-4 border-[#ffd100] rounded-r-lg shadow-md relative overflow-hidden">
               <div className="absolute -right-10 -top-10 opacity-5 scale-150">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#ffd100" strokeWidth="1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-[#ffd100] font-bold text-xl mb-3 relative z-10">The Overarching Threat: The Hourglass Cabal</h3>
              <p className="text-[#d3c8b8] leading-relaxed relative z-10">
                One antagonist ties every patch together. Agents of the Infinite Dragonflight are working to unmake Camelot from within. 
                Their fingerprints surface in the Scarlet Enclave's fanaticism, in the corruption feeding Hyjal, and in whatever waits at the end of Naxxramas. 
                This is the thread that makes all raids one continuous, epic narrative. You are not just killing bosses; you are fighting for the timeline.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-[#3c3224]/30 pb-2">Parallel Raiding & Release Schedule</h3>
              <p className="text-[#a69882] mb-6">
                Raid sizes vary deliberately to challenge different guild structures. Furthermore, Camelot introduces <strong>parallel raids</strong> to the same tiers. Instead of just grinding BWL every week, your guild can tackle Grim Batol alongside it for sideways upgrades, different tier-set visuals, and unique trinkets.
              </p>
              
              <div className="grid gap-6">
                {/* Tier 1 */}
                <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ff7d0a]/50 transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#ff7d0a] font-bold text-lg group-hover:text-[#ff9900] transition-colors">C1.1: The Core Awakens</h4>
                    <span className="bg-[#1a140e] text-[#ffd100] px-3 py-1 rounded text-xs font-bold border border-[#3c3224]">10 Player</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-white block mb-1">Molten Core</strong>
                      <p className="text-sm text-[#a69882]">The Firelord's lair becomes an intimate 10-player raid. The roster shrinking makes room for growing: the boss list expands past the original ten with new Fireguard encounters.</p>
                    </div>
                    <div className="border-l border-[#3c3224] pl-4">
                      <strong className="text-[#d3c8b8] block mb-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#ffd100]"></span>Parallel: Lower Karazhan Crypts</strong>
                      <p className="text-sm text-[#a69882]">A 10-player introduction to the deadlier horrors of Deadwind Pass. Drops side-grade tier pieces and heavily features shadow resistance gear.</p>
                    </div>
                  </div>
                </div>

                {/* Tier 2 */}
                <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ff7d0a]/50 transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#ff7d0a] font-bold text-lg group-hover:text-[#ff9900] transition-colors">C1.2: Brood of the Black Dragon</h4>
                    <span className="bg-[#1a140e] text-[#ffd100] px-3 py-1 rounded text-xs font-bold border border-[#3c3224]">20 Player</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-white block mb-1">Onyxia's Lair</strong>
                      <p className="text-sm text-[#a69882]">The first 20-player raid. Two new miniboss encounters are inserted into the cavernous approach before Onyxia's chamber, requiring complex splitting and tank-swapping.</p>
                    </div>
                  </div>
                </div>

                {/* Tier 3 */}
                <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ff7d0a]/50 transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#ff7d0a] font-bold text-lg group-hover:text-[#ff9900] transition-colors">C1.3: The Blood God's Return</h4>
                    <span className="bg-[#1a140e] text-[#ffd100] px-3 py-1 rounded text-xs font-bold border border-[#3c3224]">10 Player</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-white block mb-1">Zul'Gurub</strong>
                      <p className="text-sm text-[#a69882]">The troll capital stays intimate. All classic bosses return, retimed for a 10-player roster and reinforced by a sprawling new Swamp of Sorrows quest hub leading up to the gates.</p>
                    </div>
                  </div>
                </div>

                {/* Tier 4 */}
                <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ff7d0a]/50 transition-colors group relative overflow-hidden">
                   <div className="absolute -left-20 top-0 opacity-10 blur-sm pointer-events-none">
                     <svg width="200" height="200" viewBox="0 0 24 24" fill="red"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                   </div>
                  <div className="flex justify-between items-start mb-3 relative z-10">
                    <h4 className="text-[#ff7d0a] font-bold text-lg group-hover:text-[#ff9900] transition-colors">C1.4: Lords of Blackrock</h4>
                    <span className="bg-[#1a140e] text-[#ffd100] px-3 py-1 rounded text-xs font-bold border border-[#3c3224]">20 Player</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 relative z-10">
                    <div className="md:col-span-1">
                      <strong className="text-white block mb-1">Blackwing Lair</strong>
                      <p className="text-sm text-[#a69882]">Nefarian's lair holds at 20. The suppression room is redesigned to require coordinated team splits rather than just slowing the raid to a crawl.</p>
                    </div>
                    <div className="border-l border-[#3c3224] pl-4 md:col-span-1">
                      <strong className="text-[#d3c8b8] block mb-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#ff7d0a]"></span>Parallel: Grim Batol</strong>
                      <p className="text-sm text-[#a69882]">A massive 20-player raid into the cursed dwarven fortress. Fight corrupted red dragons and deep-earth horrors. Offers alternative 8-piece tier armor.</p>
                    </div>
                     <div className="border-l border-[#3c3224] pl-4 md:col-span-1">
                      <strong className="text-[#d3c8b8] block mb-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#a335ee]"></span>Parallel: Crown of the Damned</strong>
                      <p className="text-sm text-[#a69882]">A 20-player raid situated above Stratholme. This is the raid that canonically unlocks the Death Knight class for the realm.</p>
                    </div>
                  </div>
                </div>

                {/* Tier 5 */}
                <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ff7d0a]/50 transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#ff7d0a] font-bold text-lg group-hover:text-[#ff9900] transition-colors">C1.5: The Shifting Sands</h4>
                    <span className="bg-[#1a140e] text-[#ffd100] px-3 py-1 rounded text-xs font-bold border border-[#3c3224]">20 (Flex 40)</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-white block mb-1">Ahn'Qiraj (Ruins & Temple)</strong>
                      <p className="text-sm text-[#a69882]">The Ruins run as a strict 20-player. The Temple runs as a 20-player raid by default, but guilds can opt-in to a 40-player "War Mode" version for increased loot drops and an exclusive mount.</p>
                    </div>
                     <div className="border-l border-[#3c3224] pl-4">
                      <strong className="text-[#d3c8b8] block mb-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#ffd100]"></span>Parallel: Vault of Uldum</strong>
                      <p className="text-sm text-[#a69882]">Finally opened. A titan facility under siege by Al'Akir's forces. 20-player raid featuring heavy puzzle mechanics and wind-based hazards.</p>
                    </div>
                  </div>
                </div>

                 {/* Tier 6 */}
                 <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ff7d0a]/50 transition-colors group border-x-4 border-x-[#a335ee]">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#ff7d0a] font-bold text-lg group-hover:text-[#ff9900] transition-colors">C1.6: The Dread Citadel</h4>
                    <span className="bg-[#1a140e] text-[#ffd100] px-3 py-1 rounded text-xs font-bold border border-[#3c3224]">40 Player</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <strong className="text-white block mb-1">Naxxramas</strong>
                      <p className="text-sm text-[#a69882]">The tier's crescendo and the only permanent, mandatory 40-player raid in Camelot. The ultimate logistical and mechanical test.</p>
                    </div>
                    <div className="border-l border-[#3c3224] pl-4 md:col-span-1">
                      <strong className="text-[#d3c8b8] block mb-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span>Parallel: Battle for Hyjal</strong>
                      <p className="text-sm text-[#a69882]">A 20-player outdoor raid. Defend the World Tree against the Burning Legion remnants and the Infinite Dragonflight's sabotage.</p>
                    </div>
                     <div className="border-l border-[#3c3224] pl-4 md:col-span-1">
                      <strong className="text-[#d3c8b8] block mb-1 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-600"></span>Parallel: Scarlet Enclave</strong>
                      <p className="text-sm text-[#a69882]">A 20-player raid destroying the fanatical remnants of the Scarlet Crusade, armed with stolen Light-infused titan relics.</p>
                    </div>
                  </div>
                </div>

                {/* Tier 7 */}
                <div className="bg-gradient-to-r from-[#1a0f1a] to-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ff7d0a]/50 transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#ff7d0a] font-bold text-lg group-hover:text-[#ff9900] transition-colors">C1.7: The Master's Tower</h4>
                    <span className="bg-[#1a140e] text-[#ffd100] px-3 py-1 rounded text-xs font-bold border border-[#3c3224]">10 Player</span>
                  </div>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div>
                      <strong className="text-white block mb-1">Karazhan</strong>
                      <p className="text-sm text-[#a69882]">The post-Naxxramas endgame hub. The raid closes the story intimately, the same size it opened at: Medivh's tower unsealed a generation early to confront the true leader of the Hourglass Cabal.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {activeTab === 'legendaries' && (
          <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
              <div className="p-2 bg-[#1a140e] rounded border border-[#ff8000]/50 text-[#ff8000]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h2 className="text-3xl font-bold text-[#ff8000] tracking-wide">Legendaries: The Titanforged Path</h2>
            </div>
            
            <div className="space-y-4 text-[#b5a790] text-lg leading-relaxed">
              <p>
                Camelot gives every playstyle a legendary weapon, and makes earning it mean something. Each legendary opens with a long, raid-spanning questline involving server-wide cooperation, massive material turn-ins, and solo mechanical trials. They are not simple RNG drops.
              </p>
              <p className="bg-[#1a140e] p-4 rounded-lg border-l-4 border-[#ff8000] text-[#d3c8b8] shadow-inner">
                Once forged, a legendary does not stay static. It follows the <strong>Titanforged Path</strong>: an upgrade track where the weapon is re-forged at major reputation and raid milestones across later patches. Your legendary grows with you, rather than being replaced by the next tier's epic drops.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
              {/* Legendary Cards */}
              <div className="bg-[#120e0a] border border-[#ff8000]/30 rounded-lg p-5 hover:bg-[#1a140e] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[#ff8000] font-bold text-lg">Sulfuras, Hand of Ragnaros</h4>
                  <span className="text-xs bg-[#24150b] text-[#ff8000] px-2 py-1 rounded border border-[#ff8000]/50">Melee / Tank</span>
                </div>
                <p className="text-xs text-white mb-3">Origin: C1.1, Molten Core</p>
                <p className="text-sm text-[#a69882]">Restored exactly as legend remembers it: the Bindings drop from the Core's new Fireguard encounters, but the final forging happens over the anvil at the heart of the Firelord's own lair while holding off waves of lava elementals.</p>
              </div>

              <div className="bg-[#120e0a] border border-[#ff8000]/30 rounded-lg p-5 hover:bg-[#1a140e] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[#ff8000] font-bold text-lg">Thunderfury, Blessed Blade of the Windseeker</h4>
                  <span className="text-xs bg-[#24150b] text-[#ff8000] px-2 py-1 rounded border border-[#ff8000]/50">Melee DPS</span>
                </div>
                <p className="text-xs text-white mb-3">Origin: C1.2, Onyxia's Lair</p>
                <p className="text-sm text-[#a69882]">Bindings now drop from Onyxia's new miniboss pair as well as her own hoard. Requires farming materials across the highest level zones and a massive world boss summon in Silithus.</p>
              </div>

              <div className="bg-[#120e0a] border border-[#ff8000]/30 rounded-lg p-5 hover:bg-[#1a140e] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[#ff8000] font-bold text-lg">Anathema, Voice of the Loa</h4>
                  <span className="text-xs bg-[#24150b] text-[#ff8000] px-2 py-1 rounded border border-[#ff8000]/50">Healer</span>
                </div>
                <p className="text-xs text-white mb-3">Origin: C1.3, Zul'Gurub</p>
                <p className="text-sm text-[#a69882]">A hexer's blessing turned relic. The chain runs through every ZG boss for loa favor tokens. The final step is an intense solo-healing scenario where you must keep 5 NPCs alive against waves of Blood Trolls in the Swamp of Sorrows.</p>
              </div>

              <div className="bg-[#120e0a] border border-[#ff8000]/30 rounded-lg p-5 hover:bg-[#1a140e] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[#ff8000] font-bold text-lg">Nefarian's Reckoning</h4>
                  <span className="text-xs bg-[#24150b] text-[#ff8000] px-2 py-1 rounded border border-[#ff8000]/50">Ranged DPS (Hunter)</span>
                </div>
                <p className="text-xs text-white mb-3">Origin: C1.4, Blackwing Lair & Grim Batol</p>
                <p className="text-sm text-[#a69882]">Forged from a dragonkin war-engine salvaged across Blackwing Lair's phases, calibrated with arcane focusing lenses from Grim Batol, and proofed in a solo kiting trial through the burning streets of Stratholme.</p>
              </div>
              
              <div className="bg-[#120e0a] border border-[#ff8000]/30 rounded-lg p-5 hover:bg-[#1a140e] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[#ff8000] font-bold text-lg">The Silithid Monarch's Barb</h4>
                  <span className="text-xs bg-[#24150b] text-[#ff8000] px-2 py-1 rounded border border-[#ff8000]/50">Melee / Feral Tank</span>
                </div>
                <p className="text-xs text-white mb-3">Origin: C1.5, Ahn'Qiraj</p>
                <p className="text-sm text-[#a69882]">A Qiraji royal weapon reclaimed rather than forged. Requires assembling scattered carapace fragments in the Silithus overworld, and ends in a duel against a Qiraji champion inside the Temple's throne room.</p>
              </div>

              <div className="bg-[#120e0a] border border-[#ff8000]/30 rounded-lg p-5 hover:bg-[#1a140e] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[#ff8000] font-bold text-lg">Kel'Thuzad's Last Whisper</h4>
                  <span className="text-xs bg-[#24150b] text-[#ff8000] px-2 py-1 rounded border border-[#ff8000]/50">Caster DPS</span>
                </div>
                <p className="text-xs text-white mb-3">Origin: C1.6, Naxxramas</p>
                <p className="text-sm text-[#a69882]">Assembled from four phylactery shards hidden deep in Naxxramas. Unlocked by outlasting a Kel'Thuzad phantom in a brutal solo arcane survival trial staged in the Scarlet Enclave's ruined chapel.</p>
              </div>

              <div className="bg-[#120e0a] border border-[#ff8000]/30 rounded-lg p-5 hover:bg-[#1a140e] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[#ff8000] font-bold text-lg">The Hourglass Fang</h4>
                  <span className="text-xs bg-[#24150b] text-[#ff8000] px-2 py-1 rounded border border-[#ff8000]/50">Rogue / Agility Melee</span>
                </div>
                <p className="text-xs text-white mb-3">Origin: C1.6, Battle for Hyjal</p>
                <p className="text-sm text-[#a69882]">A pair of daggers grown from Infinite Dragonflight sand. Closes with a heist mission requiring extreme stealth to steal the blades from a bronze dragon's own hoard in the Caverns of Time.</p>
              </div>

              <div className="bg-[#120e0a] border border-[#ff8000]/30 rounded-lg p-5 hover:bg-[#1a140e] transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[#ff8000] font-bold text-lg">Aldrachi Warder's Aegis</h4>
                  <span className="text-xs bg-[#24150b] text-[#ff8000] px-2 py-1 rounded border border-[#ff8000]/50">Tank (Shield)</span>
                </div>
                <p className="text-xs text-white mb-3">Origin: C1.7, Karazhan</p>
                <p className="text-sm text-[#a69882]">The coda legendary. Forged across the Deadwind Pass hub's full reputation track and deep dives into Karazhan and its Crypts. Grants a massive on-use absorb shield that visually projects a holy dome.</p>
              </div>

            </div>
          </section>
        )}
      </div>
    </div>
  );
}
