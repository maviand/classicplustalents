import React from 'react';

export default function PvE() {
  const [activeTab, setActiveTab] = React.useState<'dungeons' | 'raids' | 'legendaries'>('raids');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col items-center border-b border-[#3c3224] pb-6 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#ffd100] wow-title">Player vs Environment</h1>
        <p className="text-[#a69882] mt-2 font-medium tracking-wide">Dungeons, Raids, and The Titanforged Path</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        <button
          onClick={() => setActiveTab('dungeons')}
          className={`px-4 py-2 rounded font-bold transition-all ${
            activeTab === 'dungeons' 
              ? 'bg-[#1a140e] text-[#ffd100] border border-[#ffd100] shadow-[0_0_10px_rgba(255,209,0,0.3)]' 
              : 'bg-[#0f0a07] text-[#a69882] border border-[#3c3224] hover:bg-[#1a140e] hover:text-white'
          }`}
        >
          Dungeons
        </button>
        <button
          onClick={() => setActiveTab('raids')}
          className={`px-4 py-2 rounded font-bold transition-all ${
            activeTab === 'raids' 
              ? 'bg-[#1a140e] text-[#ffd100] border border-[#ffd100] shadow-[0_0_10px_rgba(255,209,0,0.3)]' 
              : 'bg-[#0f0a07] text-[#a69882] border border-[#3c3224] hover:bg-[#1a140e] hover:text-white'
          }`}
        >
          Raids & Endgame
        </button>
        <button
          onClick={() => setActiveTab('legendaries')}
          className={`px-4 py-2 rounded font-bold transition-all ${
            activeTab === 'legendaries' 
              ? 'bg-[#1a140e] text-[#ffd100] border border-[#ffd100] shadow-[0_0_10px_rgba(255,209,0,0.3)]' 
              : 'bg-[#0f0a07] text-[#a69882] border border-[#3c3224] hover:bg-[#1a140e] hover:text-white'
          }`}
        >
          Legendaries
        </button>
      </div>

      {activeTab === 'dungeons' && (
        <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Dungeons</h2>
          <p className="text-[#a69882]">
            Every classic dungeon remains, retuned for the slower curve and the phase caps. New five-player content arrives
            across all phases, including 15-to-20-minute, single-boss-chain "mini-dungeons" that make a zone's story playable
            without demanding a full evening.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
                  <th className="p-3 font-bold">Dungeon</th>
                  <th className="p-3 font-bold">Zone / Phase</th>
                  <th className="p-3 font-bold">Levels</th>
                  <th className="p-3 font-bold w-1/2">Theme</th>
                </tr>
              </thead>
              <tbody className="text-[#a69882] text-sm">
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-white">The Plague Convoy</td>
                  <td className="p-3">Silverpine / P1</td>
                  <td className="p-3">18–20</td>
                  <td className="p-3">Mini-dungeon capstone of the Worgen starting experience.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-white">Bough of Sorrows</td>
                  <td className="p-3">Ashenvale / P1</td>
                  <td className="p-3">24–30</td>
                  <td className="p-3">An ancient of war corrupted by felsludge. Supported by three connected mini-dungeons.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-white">Raven Hill Catacombs</td>
                  <td className="p-3">Duskwood / P2</td>
                  <td className="p-3">32–38</td>
                  <td className="p-3">Beneath the cemetery, Twilight cultists feed the curse that grips Duskwood.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-white">The Syndicate Conclave</td>
                  <td className="p-3">Alterac Mountains / P2</td>
                  <td className="p-3">36–42</td>
                  <td className="p-3">The rot beneath the ruins: Syndicate spymasters, poisoners, and paid steel.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-white">The Sundered Court</td>
                  <td className="p-3">Azshara / P3</td>
                  <td className="p-3">48–54</td>
                  <td className="p-3">The drowned palace district of old Eldarath. Supported by three mini-dungeons.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-white">The Scuttled Fleet</td>
                  <td className="p-3">Tanaris isles / P3</td>
                  <td className="p-3">44–48</td>
                  <td className="p-3">A pirate armada wrecked on the reefs of the new island chain.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-white">The Fel Hollows</td>
                  <td className="p-3">Felwood / P4</td>
                  <td className="p-3">52–56</td>
                  <td className="p-3">A warren of corrupted root-caverns beneath Jaedenar.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-white">Demon Fall Canyon</td>
                  <td className="p-3">Ashenvale / P4</td>
                  <td className="p-3">58–60</td>
                  <td className="p-3">Legion remnants desecrate the monument where Grommash Hellscream fell.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-white">Mazthoril Deeps</td>
                  <td className="p-3">Winterspring / P4</td>
                  <td className="p-3">56–60</td>
                  <td className="p-3">A three-wing dungeon beneath the wyrm caves seeding the Hyjal raid storyline.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Karazhan Crypts</td>
                  <td className="p-3">Deadwind / Post-Naxx</td>
                  <td className="p-3">60</td>
                  <td className="p-3">The inverted catacombs beneath Medivh's tower, companion to the Karazhan raid.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab === 'raids' && (
        <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Raids & Endgame</h2>
          
          <p className="text-[#a69882]">
            The level cap has four phases, but the raid game does not stop at four. Camelot follows the classical pattern: 
            a sequence of post-60 content patches, each opening new raids, honor systems, and world content on top of a stable level cap.
          </p>

          <div className="bg-[#1a140e] p-4 border border-[#3c3224] rounded shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffd100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3 className="text-[#ffd100] font-bold mb-2">The Hourglass Cabal</h3>
            <p className="text-sm text-[#d3c8b8]">
              One antagonist ties every patch together. Agents of the Infinite Dragonflight are working to unmake Camelot from within. 
              Their fingerprints surface in the Scarlet Enclave's fanaticism, in the corruption feeding Hyjal, and in whatever waits at the end of Naxxramas. 
              This is the thread that makes all raids one story.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Raid Release Schedule</h3>
            <p className="text-[#a69882] text-sm mb-4">
              Raid sizes are retooled on the Season of Discovery model. Camelot does not flatten every raid to one size, though: scale is a design tool, 
              and the classical tier sizes are restored and re-used deliberately. Furthermore, <strong>parallel raids</strong> are introduced to the same tiers (e.g., Grim Batol running alongside BWL) so players have multiple avenues of progression with sideways upgrades rather than a strictly vertical climb.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
                    <th className="p-3 font-bold">Content Patch</th>
                    <th className="p-3 font-bold">Raid</th>
                    <th className="p-3 font-bold">Size</th>
                    <th className="p-3 font-bold w-1/2">What Changes</th>
                  </tr>
                </thead>
                <tbody className="text-[#a69882] text-sm">
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-semibold text-white">C1.1</td>
                    <td className="p-3 text-[#ff7d0a]">Molten Core</td>
                    <td className="p-3">10</td>
                    <td className="p-3">The Firelord's lair becomes an intimate 10-player raid, and the roster shrinking makes room for growing: the boss list expands past the original ten.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-semibold text-white">C1.2</td>
                    <td className="p-3 text-[#ff7d0a]">Onyxia's Lair</td>
                    <td className="p-3">20</td>
                    <td className="p-3">The first 20-player raid of the tier earns the bigger roster: two new miniboss encounters are inserted into the approach before Onyxia's chamber.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-semibold text-white">C1.3</td>
                    <td className="p-3 text-[#ff7d0a]">Zul'Gurub</td>
                    <td className="p-3">10</td>
                    <td className="p-3">The troll capital stays intimate. All classic bosses return, retimed for a 10-player roster and reinforced by the Swamp of Sorrows quest hub.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-semibold text-white">C1.4</td>
                    <td className="p-3 text-[#ff7d0a]">Blackwing Lair</td>
                    <td className="p-3">20</td>
                    <td className="p-3">Nefarian's lair holds at 20, alongside its parallel side raid Grim Batol (also 20) and the Crown of the Damned (Stratholme raid, 20).</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-semibold text-white">C1.5</td>
                    <td className="p-3 text-[#ff7d0a]">Ahn'Qiraj</td>
                    <td className="p-3">20, flex 40</td>
                    <td className="p-3">The Ruins run as a 20-player raid; the Temple runs as a 20-player raid with an opt-in 40-player War Mode. The Vault of Uldum runs parallel.</td>
                  </tr>
                  <tr className="border-b border-[#3c3224]/50">
                    <td className="p-3 font-semibold text-white">C1.6</td>
                    <td className="p-3 text-[#ff7d0a]">Naxxramas</td>
                    <td className="p-3">40</td>
                    <td className="p-3">The tier's crescendo and the only permanent 40-player raid in Camelot. The Battle for Hyjal and the Scarlet Enclave run parallel at 20.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">C1.7</td>
                    <td className="p-3 text-[#ff7d0a]">Karazhan</td>
                    <td className="p-3">10</td>
                    <td className="p-3">The post-Naxxramas endgame hub's raid closes the story intimately, the same size it opened at: Medivh's tower unsealed a generation early.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'legendaries' && (
        <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Legendaries: The Titanforged Path</h2>
          
          <p className="text-[#a69882]">
            Camelot gives every playstyle a legendary weapon, and makes earning it mean something. Each legendary opens with a long, raid-spanning questline, not a drop.
          </p>
          <p className="text-[#a69882]">
            Once forged, a legendary does not stay static. It follows a <strong>Titanforged Path</strong>: an upgrade track where the weapon is re-forged at major reputation and raid milestones across later patches rather than replaced by the next tier's drop.
          </p>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
                  <th className="p-3 font-bold w-1/4">Legendary</th>
                  <th className="p-3 font-bold">Role</th>
                  <th className="p-3 font-bold">Source</th>
                  <th className="p-3 font-bold w-1/2">The Questline</th>
                </tr>
              </thead>
              <tbody className="text-[#a69882] text-sm">
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-[#ff8000]">Sulfuras, Hand of Ragnaros</td>
                  <td className="p-3">Melee / Tank</td>
                  <td className="p-3">C1.1, Molten Core</td>
                  <td className="p-3">Restored exactly as legend remembers it: the Bindings drop from the Core's new Fireguard encounters, and the final forging happens over the anvil at the heart of the Firelord's own lair.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-[#ff8000]">Thunderfury, Blessed Blade of the Windseeker</td>
                  <td className="p-3">Melee DPS</td>
                  <td className="p-3">C1.2, Onyxia's Lair</td>
                  <td className="p-3">Bindings now drop from Onyxia's new miniboss pair as well as her own hoard, tying the questline to the raid's expanded approach.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-[#ff8000]">Anathema, Voice of the Loa</td>
                  <td className="p-3">Healer</td>
                  <td className="p-3">C1.3, Zul'Gurub</td>
                  <td className="p-3">A hexer's blessing turned relic. The chain runs through every ZG boss for loa favor tokens, then into the Swamp of Sorrows hub for a binding ritual.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-[#ff8000]">Nefarian's Reckoning</td>
                  <td className="p-3">Ranged DPS</td>
                  <td className="p-3">C1.4, Blackwing Lair</td>
                  <td className="p-3">Forged from a dragonkin war-engine salvaged across Blackwing Lair's phases, calibrated in Grim Batol, and proofed in a solo trial in Stratholme.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-[#ff8000]">The Silithid Monarch's Barb</td>
                  <td className="p-3">Melee / Tank</td>
                  <td className="p-3">C1.5, Ahn'Qiraj</td>
                  <td className="p-3">A Qiraji royal weapon reclaimed rather than forged. Ends in a duel against a Qiraji champion inside the Temple's throne room.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-[#ff8000]">Kel'Thuzad's Last Whisper</td>
                  <td className="p-3">Caster DPS</td>
                  <td className="p-3">C1.6, Naxxramas</td>
                  <td className="p-3">Assembled from four Plague Quarter relics, then unlocked by outlasting a Kel'Thuzad phantom in a solo arcane trial staged in the Scarlet Enclave's ruined chapel.</td>
                </tr>
                <tr className="border-b border-[#3c3224]/50">
                  <td className="p-3 font-semibold text-[#ff8000]">The Hourglass Fang</td>
                  <td className="p-3">Rogue / Agility melee</td>
                  <td className="p-3">C1.6, Battle for Hyjal</td>
                  <td className="p-3">A weapon grown from Infinite Dragonflight sand. Closes with the theft of the blade from a bronze dragon's own hoard, with Nozdormu's blessing granted only after the fact.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#ff8000]">Aldrachi Warder's Aegis</td>
                  <td className="p-3">Tank (shield)</td>
                  <td className="p-3">C1.7, Karazhan</td>
                  <td className="p-3">The coda legendary. Forged across the Deadwind Pass hub's full reputation track and Karazhan itself.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
