import React from 'react';

export default function Systems() {
  const [activeTab, setActiveTab] = React.useState<'professions' | 'roadmap'>('professions');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col items-center border-b border-[#3c3224] pb-6 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#ffd100] wow-title">Systems & Roadmap</h1>
        <p className="text-[#a69882] mt-2 font-medium tracking-wide">Professions, Itemization, and the Future</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('professions')}
          className={`px-6 py-2 rounded font-bold transition-all ${
            activeTab === 'professions' 
              ? 'bg-[#1a140e] text-[#ffd100] border border-[#ffd100] shadow-[0_0_10px_rgba(255,209,0,0.3)]' 
              : 'bg-[#0f0a07] text-[#a69882] border border-[#3c3224] hover:bg-[#1a140e] hover:text-white'
          }`}
        >
          Professions & Itemization
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-6 py-2 rounded font-bold transition-all ${
            activeTab === 'roadmap' 
              ? 'bg-[#1a140e] text-[#ffd100] border border-[#ffd100] shadow-[0_0_10px_rgba(255,209,0,0.3)]' 
              : 'bg-[#0f0a07] text-[#a69882] border border-[#3c3224] hover:bg-[#1a140e] hover:text-white'
          }`}
        >
          Release Roadmap
        </button>
      </div>

      {activeTab === 'professions' && (
        <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Professions, Itemization & Systems</h2>
          <p className="text-[#a69882]">
            Every system in the game receives a full touch-up pass under Camelot's horizontal philosophy. Professions are the flagship: 91% of surveyed players asked for professions that matter at endgame, and Camelot's answer is that a profession should matter at every level, in every phase, for the life of the game.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#1a140e] p-5 rounded border border-[#3c3224] shadow-md relative overflow-hidden">
              <h3 className="text-[#ffd100] font-bold mb-3 text-lg">Profession Talent Trees</h3>
              <p className="text-sm text-[#d3c8b8] leading-relaxed">
                Each profession gains its own specialization tree, unlocked at 225 skill and advanced through crafting quests, rare recipes, and world discovery. An Engineer chooses between Demolitions, Gadgetry, and Aeronautics. Every branch ships with at least one exclusive the server economy will actually want.
              </p>
            </div>

            <div className="bg-[#1a140e] p-5 rounded border border-[#3c3224] shadow-md relative overflow-hidden">
              <h3 className="text-[#ffd100] font-bold mb-3 text-lg">Two New Professions</h3>
              <ul className="text-sm text-[#d3c8b8] space-y-2">
                <li><strong>Jewelcrafting:</strong> Prospecting, crafted rings, amulets, and trinkets, plus Fittings (cut-stone augments applied to rings/necklaces).</li>
                <li><strong>Inscription:</strong> Bound to the Runecarved Path. Scribes craft Sigil Vellums that aid rune discovery, weapon/shoulder inks, and Darkmoon card sets.</li>
              </ul>
            </div>

            <div className="bg-[#1a140e] p-5 rounded border border-[#3c3224] shadow-md relative overflow-hidden">
              <h3 className="text-[#ffd100] font-bold mb-3 text-lg">Relevance at Every Level</h3>
              <p className="text-sm text-[#d3c8b8] leading-relaxed">
                The slowed curve makes leveling gear a real market again. Best-in-slot crafting returns: every tier ships crafted pieces that stand at or near the top table in specific slots (like the Lionheart Helm), so raiders need crafters.
              </p>
            </div>

            <div className="bg-[#1a140e] p-5 rounded border border-[#3c3224] shadow-md relative overflow-hidden">
              <h3 className="text-[#ffd100] font-bold mb-3 text-lg">Tier Set Philosophy</h3>
              <p className="text-sm text-[#d3c8b8] leading-relaxed">
                Set bonuses scale with the raid-size curve. 10-player tiers carry tighter 2-and-4-piece bonuses, 20-player tiers carry the traditional 2/4/6 spread, and Naxxramas's 40-player set is the only tier with a full 8-piece bonus.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-[#16120e] p-5 border border-[#3c3224] rounded shadow-md">
            <h3 className="text-xl font-bold text-white mb-4">Quality of Life: Community Mandated</h3>
            <p className="text-[#a69882] text-sm mb-4">
              The survey data is unambiguous, and Camelot adopts its winners. The boundaries are equally clear: no flying mounts, no transmog, world buffs curtailed in raids, GDKP banned.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#d3c8b8]">
              <li className="flex items-center gap-2"><span className="text-[#ffd100]">✓</span> Guild banks (86.1% support)</li>
              <li className="flex items-center gap-2"><span className="text-[#ffd100]">✓</span> Summoning stones at dungeons (73.8%)</li>
              <li className="flex items-center gap-2"><span className="text-[#ffd100]">✓</span> Separated collections for mounts (73.7%)</li>
              <li className="flex items-center gap-2"><span className="text-[#ffd100]">✓</span> Achievements (72.3%)</li>
              <li className="flex items-center gap-2"><span className="text-[#ffd100]">✓</span> AoE looting (62.0%)</li>
              <li className="flex items-center gap-2"><span className="text-[#ffd100]">✓</span> Group-listing board (no teleports)</li>
              <li className="flex items-center gap-2"><span className="text-[#ffd100]">✓</span> Dual specialization at 40</li>
              <li className="flex items-center gap-2"><span className="text-[#ffd100]">✓</span> Barbershop & Bag search</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 'roadmap' && (
        <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Release Roadmap</h2>
          <p className="text-[#a69882]">
            Two tracks, not one. Phases 1 through 4 gate the level cap and land once each; the content patches below begin only once a character can reach 60, and continue for the rest of the game's life.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-white mb-4 bg-[#1a140e] px-3 py-1 rounded inline-block border border-[#3c3224]">The Phases (Leveling)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
                    <th className="p-3 font-bold w-1/6">Phase</th>
                    <th className="p-3 font-bold w-1/6">Cap</th>
                    <th className="p-3 font-bold">Headline Content</th>
                  </tr>
                </thead>
                <tbody className="text-[#a69882] text-sm">
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-bold text-white">Phase 1</td>
                    <td className="p-3 font-bold text-[#ffd100]">30</td>
                    <td className="p-3">Worgen unlock; Gnome/Troll starting zones; Ashenvale hub; Bough of Sorrows; Banner War opens.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-bold text-white">Phase 2</td>
                    <td className="p-3 font-bold text-[#ffd100]">40</td>
                    <td className="p-3">Ogre unlock; Raven Hill Catacombs; The Syndicate Conclave; Stromgarde Keep warzone; profession talent tiers; neutral AH opens.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-bold text-white">Phase 3</td>
                    <td className="p-3 font-bold text-[#ffd100]">50</td>
                    <td className="p-3">Wildhammer, Forest Troll, Goblin, Dark Iron allied races; Azshara hub & BG; Tanaris pirate isles; guild halls unlock.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-bold text-white">Phase 4</td>
                    <td className="p-3 font-bold text-[#ffd100]">60</td>
                    <td className="p-3">Furbolg and High Elf allied races; Hyjal zone opens; Dark Portal destroyed; Crimson Atoll PvP island; Mazthoril Deeps; Demon Fall Canyon.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
