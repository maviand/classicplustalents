import React from 'react';

export default function Runes() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#ffd100] border-b border-[#3c3224] pb-2">The Runecarved Path</h2>
      <p className="text-[#a69882]">
        The Season of Discovery proved two things at once. Players loved discovering runes: the puzzles, the secrets, the
        server-wide detective work of launch week. Players did not love wearing them: engraving abilities onto individual
        gear slots turned a discovery system into an inventory chore, with runes swapped like trinkets between pulls.
      </p>
      <p className="text-[#a69882]">
        Camelot keeps the discovery and rebuilds the interface on a design Blizzard drew up and never shipped: Cataclysm's
        Path of the Titans.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-[#1a140e] p-5 rounded border border-[#3c3224] shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffd100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 22h20L12 2z"/><path d="M12 10v4"/><path d="M12 18h.01"/></svg>
          </div>
          <h3 className="text-[#ffd100] font-bold mb-3 text-lg">Discovery First</h3>
          <p className="text-sm text-[#d3c8b8] leading-relaxed">
            Runes are found, not bought: exploration puzzles, class questlines, dungeon secrets, and
            reputation unlocks scattered across all four phases. The hunt is the content, and new runes arrive with each phase
            to keep the detectives employed.
          </p>
        </div>

        <div className="bg-[#1a140e] p-5 rounded border border-[#3c3224] shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffd100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
          </div>
          <h3 className="text-[#ffd100] font-bold mb-3 text-lg">The Path Window</h3>
          <p className="text-sm text-[#d3c8b8] leading-relaxed">
            A character-level progression screen, not a gear enchant. Each class offers three Paths
            named for the titanic keepers whose disciplines shaped it; a discovered rune is carved permanently into its
            constellation. You walk one Path at a time, but nothing learned is ever lost.
          </p>
        </div>

        <div className="bg-[#1a140e] p-5 rounded border border-[#3c3224] shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffd100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
          </div>
          <h3 className="text-[#ffd100] font-bold mb-3 text-lg">Loadouts, Not Engravings</h3>
          <p className="text-sm text-[#d3c8b8] leading-relaxed">
            At 60 a character activates <strong>1 Major rune and 2 Minor runes</strong>, swappable only at rest in
            an inn or city. No mid-raid re-engraving, no carrying four chestpieces.
          </p>
        </div>

        <div className="bg-[#1a140e] p-5 rounded border border-[#3c3224] shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffd100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 className="text-[#ffd100] font-bold mb-3 text-lg">Restraint by Design</h3>
          <p className="text-sm text-[#d3c8b8] leading-relaxed">
            Roughly 12 to 16 runes per class, against the Season's 32-plus. Runes augment; they never
            decide your role. Role-defining redesigns live in the baseline specializations, so a Guardian Druid is a Druid,
            not a chestpiece.
          </p>
        </div>
      </div>
    </div>
  );
}
