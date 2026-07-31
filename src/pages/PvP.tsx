import React from 'react';

export default function PvP() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
         <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#ff5050] to-[#b30000] wow-title drop-shadow-lg relative z-10">
          Player vs Player
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-2xl">
          The Banner War campaign, massive persistent battlegrounds, and a completely reforged Honor System that respects your time.
        </p>
      </div>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ff5050]/30 text-[#ff5050]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">The Banner War Campaign</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed">
          Every world-PvP objective in Camelot feeds one unified system: <strong>the Banner War</strong>. Zone objectives award War Marks 
          and contribute to a faction-wide campaign track, alongside honor. This isn't just killing players at flight paths; it's a war of logistics, siege, and resource control. The design borrows what the community loved: timed, high-stakes free-for-all windows, persistent progression, and battleground-quality objective clarity in the open world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] hover:border-[#ff5050]/50 transition-colors group relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-[#ff5050]/5 rounded-bl-full pointer-events-none"></div>
            <h3 className="text-[#ff5050] font-bold mb-3 text-xl flex items-center gap-2">
              The Crimson Atoll
            </h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">A dedicated high-level PvP island off the coast of Stranglethorn Vale, run on the Blood Moon model: scheduled events every 3 hours. Escalating stakes, free-for-all mechanics, and Blood Coins that purchase exclusive mounts and epic-quality weapons. A lawless zone where grouping is disabled and nameplates are red.</p>
          </div>
          
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] hover:border-[#ff5050]/50 transition-colors group relative overflow-hidden">
            <h3 className="text-[#ff5050] font-bold mb-3 text-xl">Stromgarde Keep</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">The persistent PvE/PvP warzone hub in Arathi Highlands. Holding the keep unlocks exclusive quests, high-end recipe vendors, and faction-wide PvE buffs in the zone; losing it means organizing a siege to break the doors down and kill the opposing commander.</p>
          </div>
          
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] hover:border-[#ff5050]/50 transition-colors group relative overflow-hidden">
            <h3 className="text-[#ff5050] font-bold mb-3 text-xl">Un'Goro Crater: The Great Hunt</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">Apex-predator objectives with Devilsaur Leather stakes. A resource-driven contest where holding extraction points allows your faction's skinners to harvest massive yields. The economy itself picks a side, leading to massive guild-versus-guild clashes over spawn timers.</p>
          </div>
          
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] hover:border-[#ff5050]/50 transition-colors group relative overflow-hidden">
            <h3 className="text-[#ff5050] font-bold mb-3 text-xl">The Hillsbrad Front</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">Rotating escort, raid-the-town, and hold-the-crossroads objectives with commander NPCs whose deaths swing the front. The skirmish never ends; the front line moves. Participate in massive push-and-pull battles reminiscent of the original Southshore vs Tarren Mill wars, but formalized with rewards.</p>
          </div>

          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] hover:border-[#ff5050]/50 transition-colors group relative overflow-hidden md:col-span-2">
            <h3 className="text-[#ff5050] font-bold mb-3 text-xl">Silithus: The Silithyst Race</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">The classic Silithyst gathering game expanded into a zone-wide convoy escort. Players must defend massive sand-crawlers moving across the desert. Destroying an enemy crawler spills its Silithyst into a free-for-all capture point. Directly ties into the Ahn'Qiraj war effort.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ff5050]/30 text-[#ff5050]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">Battlegrounds & Rated Play</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed">
          Warsong Gulch, Arathi Basin, and Alterac Valley arrive with their respective phases, retuned for Camelot's talent and rune changes. 
          Alterac Valley is restored toward its long-form early design: NPC armies that matter, commanders worth summoning, and a battle measured in hours rather than a 5-minute PvE race to the general.
        </p>

        <div className="space-y-6 mt-6">
          <div className="bg-gradient-to-r from-[#2a1111] to-[#120e0a] p-6 rounded-xl border border-[#ff5050]/40 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10 scale-150">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ff5050" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl text-[#ff5050] font-bold mb-3">NEW: Azshara Crater (25v25)</h3>
              <p className="text-[#d3c8b8] leading-relaxed">
                Built on the terrain Vanilla left on the cutting-room floor. A massive three-lane descent into the crater where teams escort siege wagons, capture ley-pylons that empower their faction's champion NPC, and race to breach the opposing basecamp carved into the crater wall. Matches target 20 to 30 minutes, blending the lane-pushing of a MOBA with classic Warcraft combat.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2a1111] to-[#120e0a] p-6 rounded-xl border border-[#ff5050]/40 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10 scale-150">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ff5050" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl text-[#ff5050] font-bold mb-3">NEW: The Gurubashi Arena Brawl (10v10)</h3>
              <p className="text-[#d3c8b8] leading-relaxed">
                An instanced 10v10 battleground set in a massively expanded Gurubashi Arena. A pure deathmatch with a twist: the arena floor is laced with traps, beasts are periodically released from cages, and a central chest drops game-changing buffs. First team to 50 kills, or the last team standing when the arena floods with poison, wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#120e0a] to-[#0f0c08] border border-[#3c3224] rounded-xl p-8 shadow-2xl space-y-8">
        <div className="flex items-center gap-4 border-b border-[#3c3224] pb-4">
           <div className="p-2 bg-[#1a140e] rounded border border-[#ffd100]/30 text-[#ffd100]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
           </div>
          <h2 className="text-3xl font-bold text-[#ffd100] tracking-wide">The Honor System, Reforged</h2>
        </div>
        
        <p className="text-[#b5a790] text-lg leading-relaxed">
          Vanilla's rank grind was a scheduling contest wearing a PvP system's clothes. Camelot keeps the ranks, the titles, and the 
          gear tiers, but replaces the engine entirely: honor converts to rank progress that accrues like reputation and <strong>never decays</strong>. 
          A soft weekly contribution cap keeps the race humane. High Warlord is a marathon anyone can finish, not a shift schedule only the unemployed survive.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] shadow-inner">
            <h3 className="text-[#ffd100] font-bold mb-3 text-xl">PvP Armor Questlines</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">
              Rank-purchased armor no longer simply appears on a vendor. Each of the four PvP armor tiers is capped 
              by a short, rank-gated questline set in that tier's home theater (e.g. a Stromgarde field commission for the early sets), 
              ending in the set's signature piece. You earn the rank, you do the quest, you get the gear. The lore of the war is embedded in the rewards.
            </p>
          </div>
          <div className="bg-[#1a140e] p-6 rounded-lg border border-[#3c3224] shadow-inner">
            <h3 className="text-[#ffd100] font-bold mb-3 text-xl">Warcrimes & Dishonor</h3>
            <p className="text-sm text-[#d3c8b8] leading-relaxed">
              Dishonorable Kills return, but with teeth. Repeatedly killing civilian NPCs or camping low-level towns results in an escalating "Bounty" debuff, broadcasting your location on the world map to the opposing faction and offering a massive honor reward to whoever claims your head.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
