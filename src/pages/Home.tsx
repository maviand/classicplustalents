import React from 'react';

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-4 py-8 relative">
        <div className="absolute inset-0 z-[-1] opacity-30 bg-[url('https://i.imgur.com/9Q04jxz.jpeg')] bg-cover bg-center rounded-lg border border-[#3c3224]" />
        <h1 className="text-4xl md:text-5xl font-bold text-[#ffd100] wow-title drop-shadow-md">
          World of Warcraft: Camelot
        </h1>
        <p className="text-xl text-[#d3c8b8] font-medium tracking-wide">A Classic+ Vision</p>
      </div>

      <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-[#ffd100] mb-4 border-b border-[#3c3224] pb-2">1. The Vision</h2>
        <div className="space-y-4 text-[#a69882] leading-relaxed">
          <p>
            Camelot is Vanilla World of Warcraft, continued. Not remade, not modernized, not rushed toward the Dark Portal.
            The Bronze Dragonflight has pulled a thread loose from the timeways: an Azeroth where the year is still 25 ADP,
            where Kel'Thuzad still schemes in Naxxramas, and where the war between the Alliance and the Horde never paused
            to fight someone else's war. In this timeline, the old world gets the years of development it never received. The Dark
            Portal may never reopen. Azeroth is the expansion.
          </p>
          <p>
            Because the Bronze Dragonflight anchors the setting, we can bend lore without breaking it. New races answer the
            call to war early. Closed gates open. Unfinished corners of the 2004 world map, the places every Vanilla player
            pressed their face against, finally get built.
          </p>
          
          <h3 className="text-lg font-bold text-white mt-6 mb-2">Three principles govern every system:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-[#ffd100]">The grind is the point.</strong> Leveling is substantially slower than Vanilla, with no catch-up mechanics, no heirlooms, and no boosts. Reaching 60 is the story of your character, not the tutorial before it.</li>
            <li><strong className="text-[#ffd100]">Horizontal, not vertical.</strong> The level cap arrives in four phases (30, 40, 50, 60) and, once capped, further growth comes from a longer sequence of post-60 content patches, not a rising number. New endgame content runs parallel to existing raids rather than invalidating them; the cap itself stays at 60.</li>
            <li><strong className="text-[#ffd100]">Every zone earns its place.</strong> Existing zones grow by roughly 20%, through both new physical subzones and denser quest content, so that no region of Azeroth remains a travel corridor.</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg overflow-x-auto">
        <h2 className="text-2xl font-bold text-[#ffd100] mb-4 border-b border-[#3c3224] pb-2">At a Glance</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
              <th className="p-3 font-bold w-1/4">Pillar</th>
              <th className="p-3 font-bold">In Short</th>
            </tr>
          </thead>
          <tbody className="text-[#a69882]">
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">Premise</td>
              <td className="p-3">The Bronze Dragonflight preserves a timeline where Vanilla Azeroth gets a real live-service future and the Dark Portal may never reopen.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">Leveling</td>
              <td className="p-3">4 permanent phases (caps 30/40/50/60), ~60% slower than Vanilla, no catch-up. The grind is the point.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">Endgame structure</td>
              <td className="p-3">Once at 60, growth comes from post-60 content patches (C1.1–C1.7), not a rising level cap.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">Races</td>
              <td className="p-3">8 allied races (4 per faction), each with a 10-point racial talent tree and a mid-level start.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">Classes</td>
              <td className="p-3">14 new lore-questline class combinations, 6 baseline spec reworks, 1 new class (Death Knight, unlocked via raid).</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">Runes</td>
              <td className="p-3">The Runecarved Path: discovery-driven, Path-of-the-Titans-style progression, never gear engraving.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">Raids</td>
              <td className="p-3">7 raid tiers, sizes 10→20→10→20→20(flex 40)→40→10. A hidden villain (the Hourglass Cabal) ties them into one story.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">Legendaries</td>
              <td className="p-3">8 weapons, one per major role per tier, each a long questline, each upgradable on the Titanforged Path.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">PvP</td>
              <td className="p-3">One unified Banner War campaign across 7 world theaters, 4 battlegrounds, a reforged honor system, and 3 realm types.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">Professions</td>
              <td className="p-3">12 professions including new Jewelcrafting and Inscription, each with specialization trees and best-in-slot crafted gear.</td>
            </tr>
            <tr className="hover:bg-[#1a140e]/50 transition-colors">
              <td className="p-3 font-semibold text-white">World</td>
              <td className="p-3">Every zone +20%, several new zones and world events, all cross-checked against the community's own top-voted requests.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
