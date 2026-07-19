import React from 'react';

export default function Races() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Playable Races & Allied Races</h2>
      <p className="text-[#a69882]">
        Eight allied races join the war across the four phases, four per faction. Each starts mid-level in a bespoke starting
        zone neighboring a region tied to its story, in the manner of modern allied races, and each is earned through an
        unlock questline rooted in the world rather than a storefront.
      </p>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1a140e] text-white border-b border-[#3c3224]">
              <th className="p-3 font-bold">Race (Faction)</th>
              <th className="p-3 font-bold">Phase</th>
              <th className="p-3 font-bold">Levels</th>
              <th className="p-3 font-bold w-1/2">Starting Zone & Experience</th>
            </tr>
          </thead>
          <tbody className="text-[#a69882]">
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50">
              <td className="p-3 font-semibold text-white">Worgen (A)</td>
              <td className="p-3">1</td>
              <td className="p-3">12–20</td>
              <td className="p-3"><strong>The Greymane Wall (Southern Silverpine).</strong> Players spawn atop the barricades defending against a localized Forsaken siege, push the blight back through Pyrewood Village, and learn shapeshifting and custom mechanics.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50">
              <td className="p-3 font-semibold text-white">Ogres (H)</td>
              <td className="p-3">2</td>
              <td className="p-3">35–40</td>
              <td className="p-3"><strong>The Broken Tables (Feralas/Desolace border).</strong> A dedicated unlock questline rooted in Feralas and Desolace lets players earn their place among, or against, the Gordunni, Dreadmaul, and Mosh'Ogg clans.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50">
              <td className="p-3 font-semibold text-white">Wildhammer Dwarves (A)</td>
              <td className="p-3">3</td>
              <td className="p-3">40–45</td>
              <td className="p-3"><strong>The Overlook (High Hinterlands).</strong> Cliffs above Aerie Peak. Players secure gryphon roosts from aggressive Forest Trolls and establish aerial supply lines.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50">
              <td className="p-3 font-semibold text-white">Forest Trolls (H)</td>
              <td className="p-3">3</td>
              <td className="p-3">40–45</td>
              <td className="p-3"><strong>The Sunken Altars (Eastern Hinterlands coast).</strong> Off Revantusk Village, players reclaim submerged tribal altars from rogue Naga and hostile Wildhammer scouts.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50">
              <td className="p-3 font-semibold text-white">Goblins (H)</td>
              <td className="p-3">3</td>
              <td className="p-3">45–50</td>
              <td className="p-3"><strong>The Shattered Strand (Coastal Azshara).</strong> A crashed zeppelin on the beach. Salvage, explosives, and a Steamwheedle beachhead against Naga and giants.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50">
              <td className="p-3 font-semibold text-white">Thorium Brotherhood Dark Irons (H)</td>
              <td className="p-3">3</td>
              <td className="p-3">45–50</td>
              <td className="p-3"><strong>The Lower Slag Pits (Searing Gorge).</strong> A phased, subterranean rebellion: sabotaging the Emperor's forges, stealing weapon caches, assassinating Ragnaros loyalists.</td>
            </tr>
            <tr className="border-b border-[#3c3224]/50 hover:bg-[#1a140e]/50">
              <td className="p-3 font-semibold text-white">Timbermaw Furbolg (A)</td>
              <td className="p-3">4</td>
              <td className="p-3">48–54</td>
              <td className="p-3"><strong>The Inner Barrows (Felwood/Winterspring border).</strong> Awakening in the uncorrupted heart of Timbermaw Hold, players purge the Deadwood corruption leaking into the tunnels.</td>
            </tr>
            <tr className="hover:bg-[#1a140e]/50">
              <td className="p-3 font-semibold text-white">High Elves (A)</td>
              <td className="p-3">4</td>
              <td className="p-3">53–58</td>
              <td className="p-3"><strong>Quel'Lithien Vanguard (Eastern Plaguelands).</strong> A fiercely contested, phased lodge on the Plaguelands border. Players cleanse a corrupted ley-line to establish a permanent Alliance foothold.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#16120e] p-4 border border-[#3c3224] rounded mt-6">
        <h4 className="text-[#ffd100] font-bold mb-1">Racial Talents</h4>
        <p className="text-sm text-[#a69882]">
          Every race, core and allied, gains a 10-point racial talent tree layered on top of the three class trees.
          Points are earned through reputation and questlines rather than levels, so the grind extends sideways.
        </p>
      </div>
    </div>
  );
}
