import React from 'react';

export default function Systems() {
  const [activeTab, setActiveTab] = React.useState<'professions' | 'roadmap'>('professions');

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10">
          Systems & Roadmap
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-2xl">
          Deep profession specializations, robust itemization, and a living release roadmap that evolves the world.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap relative z-10">
        {[
          { id: 'professions', label: 'Professions & Itemization' },
          { id: 'roadmap', label: 'Release Roadmap' }
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
        {activeTab === 'professions' && (
          <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
              <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-wide">Professions Deep Dive</h2>
            </div>
            
            <p className="text-[#b5a790] text-lg leading-relaxed">
              Every system in the game receives a full touch-up pass under Camelot's horizontal philosophy. Professions are the flagship: 91% of surveyed players asked for professions that matter at endgame, and Camelot's answer is that a profession should matter at every level, in every phase, for the life of the game.
            </p>

            <div className="bg-[#1a140e] p-6 rounded-lg border-l-4 border-[#ffd100] shadow-md mt-6">
              <h3 className="text-[#ffd100] font-bold mb-3 text-xl">Profession Specialization Trees</h3>
              <p className="text-sm text-[#d3c8b8] leading-relaxed mb-4">
                Beyond just skill points, reaching 225 skill unlocks a dedicated Specialization Tree for every primary profession. You earn Knowledge Points by discovering rare recipes in the world, completing crafting commissions, and deconstructing epic items. You cannot max the whole tree; you must choose your market. Every single primary and secondary profession is highlighted below:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
              
              {/* Engineering */}
              <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">Engineering</h4>
                <p className="text-xs text-[#a69882] mb-4">Branches: Demolitions, Gadgetry, Aeronautics.</p>
                <div className="space-y-3">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Aeronautics Capstone</strong>
                    <p className="text-xs text-[#d3c8b8]">Unlocks the recipe for the <span className="text-[#a335ee]">X-51 Nether-Rocket</span>, the first flying mount prototype, usable only in specific outdoor warzones.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Demolitions Node</strong>
                    <p className="text-xs text-[#d3c8b8]">Sapper charges no longer deal damage to the user and their blast radius is increased by 20%.</p>
                  </div>
                </div>
              </div>

              {/* Blacksmithing */}
              <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">Blacksmithing</h4>
                <p className="text-xs text-[#a69882] mb-4">Branches: Weaponsmith, Armorsmith, Runesmith.</p>
                <div className="space-y-3">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Runesmith Capstone</strong>
                    <p className="text-xs text-[#d3c8b8]">Can forge <span className="text-[#a335ee]">Sockets</span> into Belt and Bracer slot items, allowing Jewelcrafters to augment them.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Weaponsmith Highlight</strong>
                    <p className="text-xs text-[#d3c8b8]">Crafts <span className="text-[#ff8000]">Lionheart Champion</span>, a legendary two-handed sword that rivals early Naxxramas drops.</p>
                  </div>
                </div>
              </div>

              {/* Jewelcrafting */}
              <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">Jewelcrafting (NEW)</h4>
                <p className="text-xs text-[#a69882] mb-4">Branches: Faceting, Metallurgy, Figurine Carving.</p>
                <div className="space-y-3">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Faceting Mastery</strong>
                    <p className="text-xs text-[#d3c8b8]">Allows cutting of unique, BoP Epic gems (limit 2 equipped) that provide massive single-stat boosts.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Figurine Highlight</strong>
                    <p className="text-xs text-[#d3c8b8]">Crafts <span className="text-[#a335ee]">Figurine - Black Diamond Boar</span>, a powerful tanking trinket that summons a boar to absorb the next physical attack.</p>
                  </div>
                </div>
              </div>

              {/* Inscription */}
              <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">Inscription (NEW)</h4>
                <p className="text-xs text-[#a69882] mb-4">Branches: Cartography, Illumination, Darkmoon Binding.</p>
                <div className="space-y-3">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Cartography Capstone</strong>
                    <p className="text-xs text-[#d3c8b8]">Crafts <span className="text-white">Sigil Vellums</span>. When used in specific overworld locations, these reveal hidden paths to discover new Runes.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Darkmoon Binding</strong>
                    <p className="text-xs text-[#d3c8b8]">Crafts individual Darkmoon Faire cards, reducing RNG, and allows the creation of powerful off-hand tomes.</p>
                  </div>
                </div>
              </div>

              {/* Tailoring */}
              <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">Tailoring</h4>
                <p className="text-xs text-[#a69882] mb-4">Branches: Spellfire, Shadoweave, Mooncloth.</p>
                <div className="space-y-3">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">True Shadoweave</strong>
                    <p className="text-xs text-[#d3c8b8]">Unlocks the complete True Shadoweave 3-piece set, which is mathematical Best-in-Slot for Warlocks and Shadow Priests until Tier 2.5.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Mooncloth Mastery</strong>
                    <p className="text-xs text-[#d3c8b8]">Bypasses the Moonwell cooldown entirely and grants a chance to craft double yields of Mooncloth.</p>
                  </div>
                </div>
              </div>

              {/* Alchemy */}
              <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">Alchemy</h4>
                <p className="text-xs text-[#a69882] mb-4">Branches: Mutagenics, Transmutation, Elixir Mastery.</p>
                <div className="space-y-3">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Mutagenics Capstone</strong>
                    <p className="text-xs text-[#d3c8b8]">Brews <span className="text-[#39ff14]">Flask of the Chimera</span>. Grants a massive stat buff but applies a random, harmless visual mutation (e.g. glowing eyes, increased size) for 2 hours.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Elixir Mastery</strong>
                    <p className="text-xs text-[#d3c8b8]">Allows you to drink one Battle Elixir and one Guardian Elixir simultaneously, pushing beyond the normal buff cap.</p>
                  </div>
                </div>
              </div>

              {/* Leatherworking */}
              <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">Leatherworking</h4>
                <p className="text-xs text-[#a69882] mb-4">Branches: Dragonscale, Elemental, Tribal.</p>
                <div className="space-y-3">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Tribal Capstone</strong>
                    <p className="text-xs text-[#d3c8b8]">Crafts the <span className="text-[#a335ee]">Devilsaur King's Mantle</span>, providing an exclusive attack power set bonus that perfectly complements the standard Devilsaur set.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Drums of War</strong>
                    <p className="text-xs text-[#d3c8b8]">Leatherworkers can craft Drums to give group-wide buffs, rebalanced to not be mandatory for every single raider.</p>
                  </div>
                </div>
              </div>

               {/* Enchanting */}
               <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">Enchanting</h4>
                <p className="text-xs text-[#a69882] mb-4">Branches: Disenchanting, Imbuement, Warding.</p>
                <div className="space-y-3">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Imbuement Focus</strong>
                    <p className="text-xs text-[#d3c8b8]">Allows the Enchanter to apply permanent, self-only enchants to their Rings for a massive stat advantage.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Disenchanting Mastery</strong>
                    <p className="text-xs text-[#d3c8b8]">Grants a 15% chance to extract <span className="text-[#a335ee]">Nexus Crystals</span> from rare (blue) quality items, breaking the monopoly of raid-only drops.</p>
                  </div>
                </div>
              </div>

              {/* Gathering (Mining/Skinning/Herbalism) */}
              <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">The Gathering Professions</h4>
                <p className="text-xs text-[#a69882] mb-4">Mining, Skinning, Herbalism</p>
                <div className="space-y-3">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Gathering Passives</strong>
                    <p className="text-xs text-[#d3c8b8]">Mining grants <span className="text-white">Toughness</span> (Stamina). Skinning grants <span className="text-white">Anatomy</span> (Crit chance). Herbalism grants <span className="text-white">Lifeblood</span> (HoT).</p>
                  </div>
                   <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Over-harvesting</strong>
                    <p className="text-xs text-[#d3c8b8]">Max-level gatherers can occasionally trigger an 'Over-harvest', yielding double materials and a temporary movement speed buff.</p>
                  </div>
                </div>
              </div>
              
              {/* Secondary Professions (Cooking/Fishing/First Aid) */}
              <div className="bg-[#120e0a] border border-[#3c3224] rounded-lg p-5 hover:border-[#ffd100]/50 transition-colors group md:col-span-2 xl:col-span-3">
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#ffd100]">Secondary Professions</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Cooking</strong>
                    <p className="text-xs text-[#d3c8b8]">Introducing <strong>Feasts</strong>. Master chefs can lay down grand feasts that provide the 'Well Fed' buff to an entire 40-man raid, saving precious prep time.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">Fishing</strong>
                    <p className="text-xs text-[#d3c8b8]">Dynamic fishing pools. Following specific currents around Azeroth can lead to 'Whirlpools' that yield rare, bind-on-pickup raid consumables.</p>
                  </div>
                  <div className="bg-[#1a140e] p-3 rounded border border-[#3c3224]">
                    <strong className="text-xs text-[#ffd100] block mb-1">First Aid</strong>
                    <p className="text-xs text-[#d3c8b8]">Triage mastery allows the crafting of <span className="text-[#0070dd]">Combat Tourniquets</span>, instantly removing a bleed effect and restoring health over time. Usable in combat.</p>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="mt-12 bg-gradient-to-r from-[#16120e] to-[#0f0a07] p-6 border border-[#3c3224] rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-[#3c3224]/50 pb-2">Itemization Philosophy</h3>
              <p className="text-[#a69882] text-sm leading-relaxed mb-4">
                Item stats, iLvl ranges, and mob HP get a comprehensive touch-up. For example, Molten Core now drops iLvl 63-68 gear, while Blackwing Lair drops iLvl 67-71. This flattened scaling ensures that new parallel raids and dungeons remain relevant longer without trivializing previous tiers.
              </p>
              <p className="text-[#a69882] text-sm leading-relaxed">
                <strong>Tier Sets:</strong> Set bonuses scale with the raid-size curve. 10-player tiers carry tighter 2-and-4-piece bonuses, 20-player tiers carry the traditional 2/4/6 spread, and Naxxramas's 40-player set is the only tier with a full 8-piece bonus.
              </p>
            </div>
          </section>
        )}

        {activeTab === 'roadmap' && (
          <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
              <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-wide">Release Roadmap: The Living World</h2>
            </div>
            
            <p className="text-[#b5a790] text-lg leading-relaxed">
              Two tracks, not one. Phases 1 through 4 gate the level cap and arrive via massive, world-altering events. The content patches (C1.1+) begin only once a character reaches 60, and continue for the rest of the game's life.
            </p>

            <div className="space-y-6 mt-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#3c3224] before:to-transparent">
              
              {/* Phase 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#120e0a] bg-[#ffd100] text-[#120e0a] font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_#ffd100]">1</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1a140e] p-5 rounded-lg border border-[#ffd100]/50 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-[#ffd100] text-xl">Phase 1: The Gathering Storm</h3>
                    <span className="text-xs bg-[#24150b] text-[#ffd100] px-2 py-1 rounded">Cap: 30</span>
                  </div>
                  <p className="text-sm text-[#d3c8b8] mb-3">The Worgen erupt from behind the Greymane Wall. The Horde solidifies its grip on the Barrens. The Banner War officially begins with skirmishes in Ashenvale.</p>
                  <ul className="text-xs text-[#a69882] list-disc pl-4 space-y-1">
                    <li>Launch of Worgen allied race.</li>
                    <li>Bough of Sorrows & The Plague Convoy mini-dungeons open.</li>
                    <li>Professions capped at 150.</li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#120e0a] bg-[#ff7d0a] text-[#120e0a] font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#120e0a] p-5 rounded-lg border border-[#3c3224] hover:border-[#ff7d0a]/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-[#ff7d0a] text-xl">Phase 2: Drums of War</h3>
                    <span className="text-xs bg-[#24150b] text-[#ff7d0a] px-2 py-1 rounded">Cap: 40</span>
                  </div>
                  <p className="text-sm text-[#d3c8b8] mb-3">Triggered by a massive server-wide resource drive. The Ogres march from Feralas. Stromgarde Keep becomes a persistent bloodbath.</p>
                   <ul className="text-xs text-[#a69882] list-disc pl-4 space-y-1">
                    <li>Launch of Ogre allied race.</li>
                    <li>Stromgarde Keep warzone opens.</li>
                    <li>Profession Specialization trees unlock at skill 225.</li>
                  </ul>
                </div>
              </div>

               {/* Phase 3 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#120e0a] bg-[#40c7eb] text-[#120e0a] font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">3</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#120e0a] p-5 rounded-lg border border-[#3c3224] hover:border-[#40c7eb]/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-[#40c7eb] text-xl">Phase 3: The Expanding Front</h3>
                    <span className="text-xs bg-[#112435] text-[#40c7eb] px-2 py-1 rounded">Cap: 50</span>
                  </div>
                  <p className="text-sm text-[#d3c8b8] mb-3">Four new races join the fray simultaneously. Azshara is fully realized as a high-level hub and battleground. Guilds establish halls in capital cities.</p>
                   <ul className="text-xs text-[#a69882] list-disc pl-4 space-y-1">
                    <li>Wildhammer, Forest Troll, Goblin, Dark Iron races unlock.</li>
                    <li>Azshara Crater (25v25) battleground opens.</li>
                    <li>Pirate armada world bosses invade Tanaris.</li>
                  </ul>
                </div>
              </div>

              {/* Phase 4.1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#120e0a] bg-[#c41f3b] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_#c41f3b]">4</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-r from-[#2a1111] to-[#120e0a] p-5 rounded-lg border border-[#c41f3b]/50 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-white text-xl">Phase 4.1: The Shattered Gate</h3>
                    <span className="text-xs bg-[#300909] text-[#ff7380] px-2 py-1 rounded border border-[#c41f3b]">Cap: 60</span>
                  </div>
                  <p className="text-sm text-[#d3c8b8] mb-3">
                    The level cap hits 60. In a one-time, server-crashing world event, the Bronze Dragonflight intervenes in the Blasted Lands. The Dark Portal is <strong>destroyed</strong> to prevent the timeline from merging with the Outland campaign. Azeroth is sealed.
                  </p>
                   <ul className="text-xs text-[#a69882] list-disc pl-4 space-y-1">
                    <li>Fresh level 60 cap.</li>
                    <li>Mazthoril Deeps and Demon Fall Canyon dungeons open.</li>
                    <li>The C1.X raid patches begin.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
