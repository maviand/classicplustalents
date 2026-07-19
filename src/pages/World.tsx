import React from 'react';

export default function World() {
  const [activeTab, setActiveTab] = React.useState<'leveling' | 'zones'>('leveling');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col items-center border-b border-[#3c3224] pb-6 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#ffd100] wow-title">The World</h1>
        <p className="text-[#a69882] mt-2 font-medium tracking-wide">Leveling, Pacing, and Zone Expansions</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('leveling')}
          className={`px-6 py-2 rounded font-bold transition-all ${
            activeTab === 'leveling' 
              ? 'bg-[#1a140e] text-[#ffd100] border border-[#ffd100] shadow-[0_0_10px_rgba(255,209,0,0.3)]' 
              : 'bg-[#0f0a07] text-[#a69882] border border-[#3c3224] hover:bg-[#1a140e] hover:text-white'
          }`}
        >
          Leveling & Pacing
        </button>
        <button
          onClick={() => setActiveTab('zones')}
          className={`px-6 py-2 rounded font-bold transition-all ${
            activeTab === 'zones' 
              ? 'bg-[#1a140e] text-[#ffd100] border border-[#ffd100] shadow-[0_0_10px_rgba(255,209,0,0.3)]' 
              : 'bg-[#0f0a07] text-[#a69882] border border-[#3c3224] hover:bg-[#1a140e] hover:text-white'
          }`}
        >
          Zone by Zone
        </button>
      </div>

      {activeTab === 'leveling' && (
        <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Leveling & Pacing</h2>
          
          <p className="text-[#a69882]">
            Experience required per level increases by roughly 60% over Vanilla values, scaling hardest between 40 and 60. Mob
            and quest experience values are untouched; the curve itself stretches. Rested experience works exactly as it always
            has, and remains the only accelerant in the game.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224]">
              <h3 className="text-[#ffd100] font-bold mb-2">Phase Caps</h3>
              <p className="text-sm text-[#a69882]">The level cap opens at 30 (Phase 1), then 40, 50, and finally 60. Each cap period lasts months, not weeks, and each brings its own capped endgame.</p>
            </div>
            <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224]">
              <h3 className="text-[#ffd100] font-bold mb-2">No Catch-Up</h3>
              <p className="text-sm text-[#a69882]">No experience buffs, no boosted characters, no dungeon spam meta. Elite quests stay elite. Group quests assume a group.</p>
            </div>
            <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224]">
              <h3 className="text-[#ffd100] font-bold mb-2">Endgame at Every Cap</h3>
              <p className="text-sm text-[#a69882]">Each phase cap arrives with content tuned to it: dungeon loot tables, attunements, PvP brackets, and elite outdoor chains.</p>
            </div>
            <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224]">
              <h3 className="text-[#ffd100] font-bold mb-2">Slower Travel, Smarter Travel</h3>
              <p className="text-sm text-[#a69882]">Classic starting regions gain guided cart and tram travel systems, smoothing the earliest hours without shrinking the world.</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Phase Brackets</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
                    <th className="p-3 font-bold">Bracket</th>
                    <th className="p-3 font-bold">Camelot Target</th>
                    <th className="p-3 font-bold">Cap Period Endgame</th>
                  </tr>
                </thead>
                <tbody className="text-[#a69882]">
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-semibold text-white">1–30</td>
                    <td className="p-3">~4 days played</td>
                    <td className="p-3">Phase 1: capped dungeons, Ashenvale hub, the Banner War opens.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-semibold text-white">30–40</td>
                    <td className="p-3">~3.5 days played</td>
                    <td className="p-3">Phase 2: Stromgarde warzone, Raven Hill, profession trees open.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-semibold text-white">40–50</td>
                    <td className="p-3">~4.5 days played</td>
                    <td className="p-3">Phase 3: Azshara hub and battleground, allied-race wave two.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">50–60</td>
                    <td className="p-3">~6 days played</td>
                    <td className="p-3">Phase 4: full raid spine plus parallel raids.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#16120e] p-4 border border-[#3c3224] rounded mt-6">
            <h4 className="text-[#ffd100] font-bold mb-1">The Mentor System & Veteran's Path</h4>
            <p className="text-sm text-[#a69882]">
              A max-level character can mentor a leveling character, scaling down to their effective level for shared content and earning a Mentor's Mark currency for cosmetics. 
              The Veteran's Path allows new or returning characters to auto-complete earlier phase story quests and gain rested XP at double the rate while offline, compressing content without skipping it.
            </p>
          </div>
        </section>
      )}

      {activeTab === 'zones' && (
        <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Zone by Zone</h2>
          <p className="text-[#a69882]">Every existing zone grows by roughly 20%: new physical subzones where the terrain allows it, denser quest coverage, new hubs, and repaired pacing everywhere else.</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-[#1a140e] px-3 py-1 rounded inline-block border border-[#3c3224]">Eastern Kingdoms Highlights</h3>
              <ul className="list-disc pl-5 space-y-3 text-[#a69882]">
                <li><strong className="text-[#d3c8b8]">Silverpine & Gilneas:</strong> Gilneas opens as a contested zone beyond the Greymane Wall.</li>
                <li><strong className="text-[#d3c8b8]">Duskwood:</strong> A new flight path better connects the zone, and a new dungeon delves into the curse gripping Raven Hill.</li>
                <li><strong className="text-[#d3c8b8]">Arathi Highlands:</strong> Stromgarde Keep becomes a persistent PvE/PvP warzone hub.</li>
                <li><strong className="text-[#d3c8b8]">Blasted Lands:</strong> The Dark Portal is destroyed in a world event. The zone becomes a persistent event space with recurring demonic invasions.</li>
                <li><strong className="text-[#d3c8b8]">Quel'Thalas:</strong> A post-launch zone rebuilt on its Warcraft III geography (Scourge-scarred Eversong, the dead scar).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3 bg-[#1a140e] px-3 py-1 rounded inline-block border border-[#3c3224]">Kalimdor Highlights</h3>
              <ul className="list-disc pl-5 space-y-3 text-[#a69882]">
                <li><strong className="text-[#d3c8b8]">Ashenvale & Azshara:</strong> Both receive massive overhauls, dedicated quest hubs, and connected mini-dungeons. Azshara gets a dedicated PvP battleground.</li>
                <li><strong className="text-[#d3c8b8]">Winterspring & Hyjal:</strong> Darkwhisper Gorge opens at last: the gateway into a new Hyjal outdoor zone for levels 58 to 60.</li>
                <li><strong className="text-[#d3c8b8]">Thousand Needles:</strong> Splits into two subzones: the Highstone Mesas (vertical tauren sky-bridges) and the Rustwake Basin (goblin/gnome speed cults and salt pirates).</li>
                <li><strong className="text-[#d3c8b8]">Tanaris:</strong> A new subzone in the abandoned southeastern reaches: a chain of forgotten islands steeped in piracy, smuggling, and buried treasure.</li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
