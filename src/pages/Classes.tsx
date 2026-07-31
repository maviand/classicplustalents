import React from 'react';

export default function Classes() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#fff5c3] to-[#ffd100] wow-title drop-shadow-lg relative z-10">
          Classes & Specializations
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-2xl">
          Baseline reworks for unfinished specs, 14 new lore-driven class combinations, and the awakening of the Death Knight.
        </p>
      </div>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">Specialization Reworks</h2>
        </div>
        <p className="text-[#b5a790] text-lg leading-relaxed">
          No specialization should exist only as a talent-tree punchline. Camelot reworks the specs Vanilla never finished,
          drawing on designs the community has already play-tested and loved in later seasonal experiments, and baking them directly into the core talent trees.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#1a140e] p-6 border border-[#3c3224] rounded-lg shadow-inner hover:border-[#ff7d0a]/50 transition-colors">
            <h3 className="text-[#ff7d0a] font-bold mb-2 text-xl flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff7d0a]"></span> Guardian Druid
            </h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed mb-3">A new fourth talent tree splits Bear from Cat. Guardian is a real tank spec with its own mitigation kit (Lacerate, Mangle, Survival Instincts). Feral remains dedicated to agility-based melee DPS without having to compromise on threat talents.</p>
            <div className="bg-[#120e0a] p-3 rounded text-xs text-[#a69882] border border-[#3c3224]">
              <strong>Key Talent:</strong> <span className="text-white">Thick Hide (Rank 3)</span> - Increases armor contribution from items by 10% and reduces the chance you will be critically hit by melee attacks by 6%.
            </div>
          </div>
          
          <div className="bg-[#1a140e] p-6 border border-[#3c3224] rounded-lg shadow-inner hover:border-[#aad372]/50 transition-colors">
            <h3 className="text-[#aad372] font-bold mb-2 text-xl flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#aad372]"></span> Survival Hunter
            </h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed mb-3">Full melee redesign. Survival Hunters put away their bows and move to Energy instead of Mana. They fight as spear-and-trap skirmishers; Energy finally ends the punishing mana-management tax on a physical class.</p>
            <div className="bg-[#120e0a] p-3 rounded text-xs text-[#a69882] border border-[#3c3224]">
              <strong>Key Talent:</strong> <span className="text-white">Flanking Strike</span> - A combined attack with your pet dealing instant physical damage. Generates a stack of Mongoose Bite.
            </div>
          </div>
          
          <div className="bg-[#1a140e] p-6 border border-[#3c3224] rounded-lg shadow-inner hover:border-[#ffffff]/50 transition-colors">
            <h3 className="text-[#ffffff] font-bold mb-2 text-xl flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white"></span> Shadow Priest
            </h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed mb-3">Rebuilt in the Burning Crusade mold. Shadow provides sustained caster damage and immense party utility (Vampiric Touch) rather than acting as a self-draining mana battery that runs out of steam 40 seconds into a boss fight.</p>
            <div className="bg-[#120e0a] p-3 rounded text-xs text-[#a69882] border border-[#3c3224]">
              <strong>Key Talent:</strong> <span className="text-white">Vampiric Touch</span> - Causes Shadow damage over 15 sec. When you deal Mind Blast damage, party members gain mana equal to 5% of the damage dealt.
            </div>
          </div>
          
          <div className="bg-[#1a140e] p-6 border border-[#3c3224] rounded-lg shadow-inner hover:border-[#f58cba]/50 transition-colors">
            <h3 className="text-[#f58cba] font-bold mb-2 text-xl flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#f58cba]"></span> Protection & Retribution Paladin
            </h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed mb-3">Significant redesigns. Protection is now a recruited main tank with active mitigation (Avenger's Shield, Redoubt) and a taunt. Retribution gains a full melee rotation (Crusader Strike, Divine Storm) so the spec is picked for its damage, not just to supply blessings to the raid.</p>
             <div className="bg-[#120e0a] p-3 rounded text-xs text-[#a69882] border border-[#3c3224]">
              <strong>Key Talent (Ret):</strong> <span className="text-white">Divine Storm</span> - An instant weapon attack that strikes up to 4 enemies, healing up to 3 party members.
            </div>
          </div>
          
          <div className="bg-[#1a140e] p-6 border border-[#3c3224] rounded-lg shadow-inner hover:border-[#40c7eb]/50 transition-colors">
            <h3 className="text-[#40c7eb] font-bold mb-2 text-xl flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#40c7eb]"></span> Arcane Mage
            </h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed mb-3">Full rework. Arcane becomes a rotation-driven spec (Arcane Blast, Arcane Barrage) with mana as a strategic resource to be spent and recovered, rather than relying entirely on Frostbolt spam until a single cooldown is ready.</p>
             <div className="bg-[#120e0a] p-3 rounded text-xs text-[#a69882] border border-[#3c3224]">
              <strong>Key Talent:</strong> <span className="text-white">Arcane Blast</span> - Cast time and mana cost increase with each stack, increasing damage significantly. Stacks clear upon casting Arcane Barrage.
            </div>
          </div>
        </div>

        {/* Death Knight Reveal */}
        <div className="mt-12 bg-gradient-to-r from-[#2a1111] via-[#1a0f12] to-[#120e0a] p-8 border border-[#c41f3b] rounded-xl relative overflow-hidden shadow-[0_0_30px_rgba(196,31,59,0.2)]">
          <div className="absolute top-0 right-0 opacity-10 scale-150 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#c41f3b" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          </div>
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-[#c41f3b]/20 border border-[#c41f3b] text-[#ff7380] text-xs font-bold uppercase tracking-wider rounded mb-3">
              Phase 4 Hero Class
            </div>
            <h3 className="text-3xl font-extrabold text-[#c41f3b] mb-4 drop-shadow-md">
              The Death Knight
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4 text-[#d3c8b8] leading-relaxed">
                <p>
                  One new class enters Camelot, and it enters through the story, not the character creation screen. 
                  When the <strong className="text-white">Crown of the Damned</strong> raid tier (C1.4) opens above Stratholme, the Death Knight becomes playable.
                </p>
                <p>
                  They are a plate-wearing melee class wielding runeblades and unholy power, torn directly from the Scourge by the events of that raid. Unlike Wrath of the Lich King, there is no separate Death Knight starting zone: you unlock the class account-wide by completing the raid attunement and the subsequent "Fall of the Crimson Legion" questline.
                </p>
                <p>
                  <strong>Specs:</strong> Blood (Tanking via self-healing and vampiric shields), Frost (Dual-wield fast melee DPS), Unholy (Two-handed melee DPS with a permanent ghoul pet and diseases).
                </p>
              </div>
              <div className="md:col-span-1 border-l border-[#c41f3b]/30 pl-6 flex flex-col justify-center space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#ff0000] rounded shadow-[0_0_10px_#ff0000]"></div>
                  <span className="text-white font-bold">Blood Runes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#00ffff] rounded shadow-[0_0_10px_#00ffff]"></div>
                  <span className="text-white font-bold">Frost Runes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#00ff00] rounded shadow-[0_0_10px_#00ff00]"></div>
                  <span className="text-white font-bold">Unholy Runes</span>
                </div>
                <p className="text-xs text-[#a69882] mt-2 italic">Death Knights use a 6-rune resource system combined with Runic Power for spending on abilities like Death Coil and Frost Strike.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">New Class Combinations</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed">
          Fourteen new core-race pairings arrive across the phases. None of them are simply checked boxes on a character creation screen: every combination is unlocked account-wide through an epic questline that explains, in the world, why this people now walks this path. You must complete the quest on an existing character to unlock the combo.
        </p>
        
        <div className="overflow-x-auto rounded-lg border border-[#3c3224] shadow-inner bg-[#0a0806] mt-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
                <th className="p-4 font-bold w-1/4 text-[#ffd100]">Combination</th>
                <th className="p-4 font-bold">Phase</th>
                <th className="p-4 font-bold w-2/3">The Unlock Questline</th>
              </tr>
            </thead>
            <tbody className="text-[#a69882] text-sm">
              <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                <td className="p-4 font-semibold text-white">Undead Paladin</td>
                <td className="p-4">Phase 2</td>
                <td className="p-4">
                  <strong className="text-[#d3c8b8]">The Smoldering Faith.</strong> Under Leonid Barthalomew the Revered and the Argent Dawn, Forsaken candidates endure the Light that burns them to prove devotion outlasts death. Requires a 5-player escort deep into the Eastern Plaguelands.
                </td>
              </tr>
              <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                <td className="p-4 font-semibold text-white">Dwarf Shaman</td>
                <td className="p-4">Phase 3</td>
                <td className="p-4">
                  <strong className="text-[#d3c8b8]">Stone-Blood Awakening.</strong> Wildhammer emissaries from the Overlook carry the old ways to Ironforge; the chain ends in a Hinterlands ritual where you must commune with the earth elementals to wake the titan-forged stone in Bronzebeard veins.
                </td>
              </tr>
              <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors bg-[#16120e]">
                <td className="p-4 font-semibold text-white">Human Hunter</td>
                <td className="p-4">Phase 1</td>
                <td className="p-4">
                  <strong className="text-[#d3c8b8]">The Stromgarde Trackers.</strong> Veteran huntsmen of fallen Stromgarde train marksmen in the Arathi warzone's shadow. A solo tracking trial requiring you to hunt a rare beast across the Arathi Highlands without being detected by the Syndicate.
                </td>
              </tr>
              <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                <td className="p-4 font-semibold text-white">Night Elf Warlock</td>
                <td className="p-4">Phase 4</td>
                <td className="p-4">
                  <strong className="text-[#d3c8b8]">The Unspoken Vigil.</strong> A hidden cell studies fel magic to fight it, running infiltrations into Jaedenar. Sanctioned by no one; tolerated by Darnassus only after the chain's tribunal finale where you must present a slain Dreadlord's core.
                </td>
              </tr>
              <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                <td className="p-4 font-semibold text-white">Night Elf Mage</td>
                <td className="p-4">Phase 3</td>
                <td className="p-4">
                  <strong className="text-[#d3c8b8]">The Shen'dralar Petition.</strong> The Highborne of Dire Maul seek readmission to kaldorei society. A massive server-wide material turn-in effort in Feralas, followed by a solo lore-quiz trial in Moonglade.
                </td>
              </tr>
              <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors bg-[#16120e]">
                <td className="p-4 font-semibold text-white">Tauren Rogue</td>
                <td className="p-4">Phase 2</td>
                <td className="p-4">
                  <strong className="text-[#d3c8b8]">The Grimtotem Defectors.</strong> Assist a cell of Grimtotem assassins who have defected to Thunder Bluff. Learn their shadow-stalking techniques in a stealth-only espionage mission inside a centaur stronghold.
                </td>
              </tr>
              <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/70 transition-colors">
                <td className="p-4 font-semibold text-white">Orc Mage</td>
                <td className="p-4">Phase 1</td>
                <td className="p-4">
                  <strong className="text-[#d3c8b8]">The Echoes of Draenor.</strong> Following Thrall's decree, Orcs re-examine the arcane texts seized from Dalaran mages during the Third War to find a path to magic uncorrupted by Fel.
                </td>
              </tr>
              <tr className="hover:bg-[#1a140e]/70 transition-colors">
                <td className="p-4 font-semibold text-white text-xs italic">...and more!</td>
                <td className="p-4"></td>
                <td className="p-4 text-xs italic">Dwarf Mage, Dwarf Warlock, Gnome Priest, Gnome Hunter, Troll Druid, Troll Warlock, Undead Hunter.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
