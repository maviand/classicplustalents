import React from 'react';

export default function PvP() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col items-center border-b border-[#3c3224] pb-6 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#ffd100] wow-title">Player vs Player</h1>
        <p className="text-[#a69882] mt-2 font-medium tracking-wide">The Banner War, Battlegrounds, and World Conflict</p>
      </div>

      <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">The Banner War Campaign</h2>
        <p className="text-[#a69882]">
          Every world-PvP objective in Camelot feeds one unified system: <strong>the Banner War</strong>. Zone objectives award War Marks 
          and contribute to a faction-wide campaign track, alongside honor. The design borrows what the community has 
          voted for with its feet: the Blood Moon event's timed, high-stakes free-for-all windows, Alterac-style persistent 
          progression, and battleground-quality objective clarity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224]">
            <h3 className="text-[#ffd100] font-bold mb-2">The Crimson Atoll</h3>
            <p className="text-sm text-[#d3c8b8]">A dedicated high-level PvP island off the coast of Stranglethorn Vale, run on the Blood Moon model: scheduled events, escalating stakes, and rewards worth returning to the jungle to settle old scores.</p>
          </div>
          <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224]">
            <h3 className="text-[#ffd100] font-bold mb-2">Stromgarde Keep</h3>
            <p className="text-sm text-[#d3c8b8]">The persistent PvE/PvP warzone hub in Arathi Highlands. Holding the keep unlocks quests, vendors, and faction rewards; losing it means taking it back.</p>
          </div>
          <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224]">
            <h3 className="text-[#ffd100] font-bold mb-2">Un'Goro Crater</h3>
            <p className="text-sm text-[#d3c8b8]">Apex-predator objectives with Devilsaur Leather stakes: a resource-driven contest where the economy itself picks a side.</p>
          </div>
          <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224]">
            <h3 className="text-[#ffd100] font-bold mb-2">The Hillsbrad Front</h3>
            <p className="text-sm text-[#d3c8b8]">Rotating escort, raid-the-town, and hold-the-crossroads objectives with commander NPCs whose deaths swing the front. The skirmish never ends; the front line moves.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">Battlegrounds & Rated Play</h2>
        <p className="text-[#a69882]">
          Warsong Gulch, Arathi Basin, and Alterac Valley arrive with their phases, retuned for Camelot's talent and rune changes. 
          Alterac Valley is restored toward its long-form early design: NPC armies that matter, commanders worth summoning, and a battle measured in hours rather than a race to the general.
        </p>

        <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224] flex gap-4 mt-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffd100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-xl text-[#ffd100] font-bold mb-2">NEW: Azshara Crater</h3>
            <p className="text-sm text-[#d3c8b8]">
              Ships as a 25-versus-25 battleground built on the terrain Vanilla left on the cutting-room floor: a 
              three-lane descent into the crater where teams escort siege wagons, capture ley-pylons that empower their 
              faction's champion NPC, and race to breach the opposing basecamp carved into the crater wall. Matches target 20 
              to 30 minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#120e0a] border border-[#3c3224] rounded p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">The Honor System, Reforged</h2>
        <p className="text-[#a69882]">
          Vanilla's rank grind was a scheduling contest wearing a PvP system's clothes. Camelot keeps the ranks, the titles, and the 
          gear tiers, and replaces the engine: honor converts to rank progress that accrues like reputation and never decays. 
          A soft weekly contribution cap keeps the race humane. High Warlord is a marathon anyone can finish, not a shift schedule only the unemployed survive.
        </p>
        
        <div className="bg-[#1a140e] p-4 rounded border border-[#3c3224] mt-4">
          <h3 className="text-[#ffd100] font-bold mb-2">PvP Armor Questlines</h3>
          <p className="text-sm text-[#d3c8b8]">
            Rank-purchased armor no longer simply appears on a vendor at the right rank. Each of the four PvP armor tiers is capped 
            by a short, rank-gated questline set in that tier's home theater (e.g. a Stromgarde field commission for the early sets), 
            ending in the set's signature piece. The gold and honor cost stays the same; the tier now has a story to go with the shopping list.
          </p>
        </div>
      </section>
    </div>
  );
}
