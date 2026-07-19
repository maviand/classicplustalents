import React from 'react';

export default function Classes() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Classes & Specializations</h2>
      <p className="text-[#a69882]">
        No specialization should exist only as a talent-tree punchline. Camelot reworks the specs Vanilla never finished,
        drawing on designs the community has already play-tested and loved in later seasonal experiments.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="bg-[#1a140e] p-4 border border-[#3c3224] rounded shadow-sm">
          <h3 className="text-[#ffd100] font-bold mb-2">Guardian Druid</h3>
          <p className="text-sm text-[#d3c8b8]">New fourth tree splitting bear from cat. A real tank spec with its own mitigation kit; Feral keeps its claws.</p>
        </div>
        <div className="bg-[#1a140e] p-4 border border-[#3c3224] rounded shadow-sm">
          <h3 className="text-[#ffd100] font-bold mb-2">Survival Hunter</h3>
          <p className="text-sm text-[#d3c8b8]">Melee redesign; all Hunters move to Energy. Spear-and-trap skirmisher; Energy ends the mana-management tax on a physical class.</p>
        </div>
        <div className="bg-[#1a140e] p-4 border border-[#3c3224] rounded shadow-sm">
          <h3 className="text-[#ffd100] font-bold mb-2">Shadow Priest</h3>
          <p className="text-sm text-[#d3c8b8]">Rebuilt in the Burning Crusade mold. Sustained caster damage with party utility, not a self-draining mana battery.</p>
        </div>
        <div className="bg-[#1a140e] p-4 border border-[#3c3224] rounded shadow-sm">
          <h3 className="text-[#ffd100] font-bold mb-2">Protection & Retribution Paladin</h3>
          <p className="text-sm text-[#d3c8b8]">Significant redesign. Prot is a recruited main tank: active mitigation, threat tools. Ret is a full melee rotation so the spec is picked for its damage, not its blessings.</p>
        </div>
        <div className="bg-[#1a140e] p-4 border border-[#3c3224] rounded shadow-sm">
          <h3 className="text-[#ffd100] font-bold mb-2">Arcane Mage</h3>
          <p className="text-sm text-[#d3c8b8]">Full rework. A rotation-driven spec with mana as a strategic resource instead of one button.</p>
        </div>
        <div className="bg-[#1a140e] p-4 border border-[#3c3224] rounded shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-red-900/10 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-[#ffd100] font-bold mb-2 flex items-center gap-2">
              <span className="text-red-400">NEW CLASS:</span> The Death Knight
            </h3>
            <p className="text-sm text-[#d3c8b8]">
              One new class enters Camelot, and it enters through the story. When the Stratholme raid tier opens, the Death Knight becomes playable: a plate melee class wielding runeblades and unholy power, torn from the Scourge by the events of that raid.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-white mb-4 border-b border-[#3c3224] pb-2">New Class Combinations</h3>
        <p className="text-[#a69882] mb-4 text-sm">Fourteen new core-race pairings arrive across the phases, and none of them is a checkbox: every combination is unlocked account-wide through a questline that explains, in the world, why this people now walks this path.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
                <th className="p-3 font-bold w-1/3">Combination</th>
                <th className="p-3 font-bold">Unlock Questline</th>
              </tr>
            </thead>
            <tbody className="text-[#a69882] text-sm">
              <tr className="border-b border-[#3c3224]/50">
                <td className="p-3 font-semibold text-white">Undead Paladin</td>
                <td className="p-3"><em>The Smoldering Faith.</em> Under Leonid Barthalomew the Revered and the Argent Dawn, Forsaken candidates endure the Light that burns them to prove devotion outlasts death.</td>
              </tr>
              <tr className="border-b border-[#3c3224]/50">
                <td className="p-3 font-semibold text-white">Dwarf Shaman</td>
                <td className="p-3"><em>Stone-Blood Awakening.</em> Wildhammer emissaries from the Overlook carry the old ways to Ironforge; the chain ends in a Hinterlands ritual that wakes the titan-forged stone in Bronzebeard veins.</td>
              </tr>
              <tr className="border-b border-[#3c3224]/50">
                <td className="p-3 font-semibold text-white">Human Hunter</td>
                <td className="p-3"><em>The Stromgarde Trackers.</em> Veteran huntsmen of fallen Stromgarde train marksmen in the Arathi warzone's shadow.</td>
              </tr>
              <tr className="border-b border-[#3c3224]/50">
                <td className="p-3 font-semibold text-white">Night Elf Warlock</td>
                <td className="p-3"><em>The Unspoken Vigil.</em> A hidden cell studies fel magic to fight it, running infiltrations into Jaedenar. Sanctioned by no one; tolerated by Darnassus only after the chain's tribunal finale.</td>
              </tr>
              <tr className="border-b border-[#3c3224]/50">
                <td className="p-3 font-semibold text-white">Night Elf Mage</td>
                <td className="p-3"><em>The Shen'dralar Petition.</em> The Highborne of Dire Maul seek readmission to kaldorei society.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white text-xs italic">...and more!</td>
                <td className="p-3 text-xs italic">Dwarf Mage, Dwarf Warlock, Gnome Priest, Gnome Hunter, Tauren Rogue, Troll Druid, Orc Mage, Troll Warlock, Undead Hunter.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
