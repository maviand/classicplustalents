import React, { useState } from 'react';

const PROF_CATS = {
  PRIMARY_CRAFTING: 'Primary: Crafting',
  PRIMARY_GATHERING: 'Primary: Gathering',
  SECONDARY: 'Secondary Skills'
};

export default function Systems() {
  const [activeCategory, setActiveCategory] = useState(PROF_CATS.PRIMARY_CRAFTING);
  const [activeProf, setActiveProf] = useState('Engineering');

  const professions = {
    [PROF_CATS.PRIMARY_CRAFTING]: [
      {
        id: 'Engineering',
        name: 'Engineering',
        icon: '⚙️',
        description: 'The pinnacle of Classic Plus utility. Engineers now build full siege vehicles for Battlegrounds, personal flying prototypes, and dangerous combat augmentations.',
        recipes: [
          { name: 'Goblin Rocket-Pack', type: 'Cloak', effect: 'Use: Launches the user 30 yards in the air and deploys a parachute. (3 Min Cooldown)', mats: '8x Mithril Bar, 4x Goblin Rocket Fuel, 2x Bolt of Runecloth' },
          { name: 'Gnomish Portable Defibrillator', type: 'Trinket', effect: 'Use: Zaps a dead target, returning them to life with 10% health and mana. 60% chance to electrocute the user instead, dealing 1500 Nature damage.', mats: '4x Thorium Widget, 2x Fused Wiring, 1x Essence of Air' },
          { name: 'Schematic: Timbermaw Shredder', type: 'Vehicle', effect: 'Constructs a pilotable shredder in Azshara Crater. Deals massive siege damage to wooden structures.', mats: '20x Ironwood Plank, 10x Mithril Tube, 1x Goblin Brainbox' },
          { name: 'Arcane Reflector Core', type: 'Shield Attachment', effect: 'Attaches to a shield. 5% chance when hit by a spell to reflect it back at the caster.', mats: '2x Arcanite Bar, 4x Blue Sapphire, 1x Delicate Arcanite Converter' }
        ]
      },
      {
        id: 'Blacksmithing',
        name: 'Blacksmithing',
        icon: '🔨',
        description: 'Blacksmiths are the absolute masters of the endgame economy. They forge the keys to the new raids and craft legendary weapons that rival Naxxramas drops.',
        recipes: [
          { name: 'Arcanite Dragon-Buster', type: '2H Mace', effect: 'Equip: Increases attack power by 150 against Dragonkin. Chance on hit: Shatters dragon scales, reducing armor by 500.', mats: '30x Arcanite Bar, 10x Enchanted Elementium Blood, 5x Red Dragonscale' },
          { name: 'Dark Iron Plate of the Emperor', type: 'Chest', effect: 'Equip: +40 Fire Resistance. Use: Envelops the caster in magma, dealing 50 Fire damage to attackers for 20 sec.', mats: '40x Dark Iron Bar, 8x Core Leather, 4x Fiery Core' },
          { name: 'Void-Forged Bulwark', type: 'Shield', effect: 'Equip: 10% chance on block to absorb the next shadow spell cast against you.', mats: '20x Thorium Bar, 5x Essence of Undeath, 1x Fragment of the Nightmare' },
          { name: 'Skeleton Key of Karazhan', type: 'Utility', effect: 'Unlocks the rusted grates leading to the Lower Karazhan Crypts.', mats: '1x Truesilver Skeleton Key, 3x Demonic Rune, 1x Medivh\'s Journal Page' }
        ]
      },
      {
        id: 'Alchemy',
        name: 'Alchemy',
        icon: '🧪',
        description: 'Alchemists delve into forbidden mutagenesis and mix elixirs that fundamentally alter the rules of combat and exploration.',
        recipes: [
          { name: 'Flask of the Emerald Dream', type: 'Flask', effect: 'Places the imbiber in a waking dream. Increases Nature Resistance by 100, but reduces movement speed by 10%. Persists through death.', mats: '1x Black Lotus, 30x Dreamfoil, 10x Felweed (New)' },
          { name: 'Mutagenic Potion of the Berserker', type: 'Potion', effect: 'Use: Increases attack speed by 30% and damage taken by 20% for 15 seconds. You are silenced for the duration.', mats: '2x Gromsblood, 1x Vile Ooze, 1x Crystal Vial' },
          { name: 'Elixir of True Sight', type: 'Elixir', effect: 'Use: Allows you to see invisible creatures and hidden nightmare-stalkers in Hyjal for 1 hour.', mats: '1x Blindweed, 1x Eye of the Basilisk, 1x Crystal Vial' },
          { name: 'Liquid Fire of Elune', type: 'Thrown', effect: 'Use: Throws a vial of concentrated moonlight, blinding undead targets in a 10 yard radius for 4 seconds.', mats: '2x Moon Glow (New), 1x Firebloom' }
        ]
      },
      {
        id: 'Tailoring',
        name: 'Tailoring',
        icon: '🧵',
        description: 'Tailors weave the very fabric of magic. They are essential for crafting the resistance gear needed for the Emerald Nightmare and Grim Batol.',
        recipes: [
          { name: 'Mantle of the Waking Dream', type: 'Shoulders', effect: 'Equip: Increases damage and healing done by magical spells and effects by up to 29. +15 Nature Resistance.', mats: '8x Mooncloth, 4x Nightmare Vine, 2x Essence of Water' },
          { name: 'Spellfire Robes of Azshara', type: 'Chest', effect: 'Equip: +40 Arcane Damage. Use: Teleports the caster 15 yards forward. (5 Min Cooldown)', mats: '12x Felcloth, 4x Rune Thread, 1x Ley-Line Fragment' },
          { name: 'Bottomless Nether-Bag', type: 'Bag', effect: 'A 20-slot bag that reduces the weight of all items inside by 100%.', mats: '6x Mooncloth, 2x Core of Earth, 1x Nexus Crystal' }
        ]
      },
      {
        id: 'Leatherworking',
        name: 'Leatherworking',
        icon: '✂️',
        description: 'Masters of beast-craft. Leatherworkers utilize the scales and hides of the new raid bosses to create unparalleled physical DPS gear.',
        recipes: [
          { name: 'Chimaerok Hide Cuirass', type: 'Chest', effect: 'Equip: +2% Critical Strike. +40 Attack Power. Immune to Nature damage for the first 3 seconds of combat.', mats: '10x Chimaerok Scale, 4x Rugged Leather, 2x Cured Rugged Hide' },
          { name: 'Devilsaur King\'s Grips', type: 'Gloves', effect: 'Equip: +1% Hit. +1% Crit. Set Bonus: Your melee attacks have a chance to sunder the target\'s armor.', mats: '12x Devilsaur Leather, 4x Rune Thread, 1x King Mosh\'s Fang' },
          { name: 'War-Drums of the Horde', type: 'Consumable', effect: 'Use: Beats the drum, increasing the melee attack power of all party members within 30 yards by 50 for 2 mins. (50 Charges)', mats: '4x Thick Leather, 1x Ironwood Branch' }
        ]
      },
      {
        id: 'Enchanting',
        name: 'Enchanting',
        icon: '✨',
        description: 'Enchanters can now augment not just weapons and armor, but also mounts, gathering tools, and even the player\'s spellbook.',
        recipes: [
          { name: 'Enchant Mount - Hooves of Zephyr', type: 'Mount Enchant', effect: 'Permanently enchants a mount to be able to double-jump and take 50% less fall damage.', mats: '4x Nexus Crystal, 10x Illusion Dust, 2x Essence of Air' },
          { name: 'Enchant Weapon - Felstriker', type: 'Weapon Enchant', effect: 'Permanently enchants a melee weapon to occasionally grant 100% critical strike chance for 3 seconds.', mats: '6x Nexus Crystal, 4x Large Brilliant Shard, 1x Demonic Rune' },
          { name: 'Enchant Tool - Swift Harvesting', type: 'Tool Enchant', effect: 'Permanently enchants a Mining Pick or Skinning Knife to reduce gathering time by 50%.', mats: '2x Greater Eternal Essence, 4x Dream Dust' }
        ]
      }
    ],
    [PROF_CATS.PRIMARY_GATHERING]: [
      {
        id: 'Mining',
        name: 'Mining',
        icon: '⛏️',
        description: 'Miners map the deep places of the world. New ores required for Uldum and Grim Batol craftables are found in the most dangerous elite zones.',
        recipes: [
          { name: 'Titansteel Ore', type: 'Material', effect: 'Found exclusively in the Elite depths of Uldum. Requires 315 Mining (requires enchanted pick or gloves).', mats: 'Smelted into Titansteel Bars for raid-tier tanking gear.' },
          { name: 'Obsidian Shards', type: 'Material', effect: 'Chipped off the corpses of Obsidian Destroyers in Uldum.', mats: 'Used by Enchanters to create spell-reflecting wards.' }
        ]
      },
      {
        id: 'Herbalism',
        name: 'Herbalism',
        icon: '🌿',
        description: 'Herbalists are the first line of defense against the Nightmare, harvesting corrupted flora to create potent counter-toxins.',
        recipes: [
          { name: 'Nightmare Vine', type: 'Material', effect: 'Grows only in the corrupted Barrow Dens of Hyjal. Emits a toxic cloud when picked, requiring the herbalist to wear a specialized mask.', mats: 'Primary ingredient for Nature Resistance flasks.' },
          { name: 'Bloodpetal Sprout', type: 'Material', effect: 'Found in Un\'Goro and Gillijim\'s Isle. Can be consumed raw for a random stat buff or debuff.', mats: 'Used by Alchemists for Mutagenic potions.' }
        ]
      },
      {
        id: 'Skinning',
        name: 'Skinning',
        icon: '🔪',
        description: 'Skinners harvest the beasts of the new islands and the dragons of Grim Batol.',
        recipes: [
          { name: 'Pristine Red Dragonscale', type: 'Material', effect: 'Skinned from the elite drakes surrounding Grim Batol. Extremely low drop rate.', mats: 'Used by Leatherworkers for Fire Resistance epics.' },
          { name: 'Mutated Chimera Hide', type: 'Material', effect: 'Skinned from Doctor Lapidis\'s experiments on his island.', mats: 'Used by Tailors to craft spell-resistant cloaks.' }
        ]
      }
    ],
    [PROF_CATS.SECONDARY]: [
      {
        id: 'Cooking',
        name: 'Cooking',
        icon: '🥩',
        description: 'Cooking is no longer just for stamina buffs. Gourmet meals provide massive group utility and unique raid-prep mechanics.',
        recipes: [
          { name: 'Dirge\'s Kickin\' Chimaerok Chops', type: 'Food', effect: 'Restores health. Well Fed: +25 Stamina and +25 Intellect for 15 mins. (The first dual-stat food).', mats: '1x Chimaerok Tenderloin, 1x Goblin Rocket Fuel, 1x Deeprock Salt' },
          { name: 'Feast of the Red Dragonflight', type: 'Guild Feast', effect: 'Places a massive feast on the ground. Feeds 40 people. Well Fed: +20 Fire Resistance and +15 Stamina.', mats: '10x Tender Crocolisk Meat, 5x Red Dragon Egg, 10x Alterac Swiss' }
        ]
      },
      {
        id: 'Fishing',
        name: 'Fishing',
        icon: '🎣',
        description: 'Fishermen pull up the forgotten secrets of the sea, including sunken lore items and mounts.',
        recipes: [
          { name: 'Sunken Lockbox', type: 'Catch', effect: 'Fished from the wreckage around Gillijim\'s Isle. Contains pirate gold, rum, and a chance at the unique "Salty" title item.', mats: 'Requires 300 Fishing and a specific lure.' },
          { name: 'The Great Sea Turtle', type: 'Mount', effect: 'A very slow aquatic mount that can be fished up in Azshara. Increases swim speed by 150%.', mats: '0.01% Catch Rate in Azshara open water.' }
        ]
      },
      {
        id: 'FirstAid',
        name: 'First Aid',
        icon: '🩹',
        description: 'First Aid expands into field-medic territory, allowing non-healers to perform clutch saves in raids.',
        recipes: [
          { name: 'Runecloth Field Tourniquet', type: 'Bandage', effect: 'Use: Instantly stops all Bleed effects on the target and heals for 500 over 8 sec.', mats: '2x Runecloth, 1x Thorium Needle' },
          { name: 'Adrenaline Syringe', type: 'Consumable', effect: 'Use: Injects a dying ally, restoring 2000 health instantly but preventing them from receiving magical healing for 5 seconds.', mats: '1x Crystal Vial, 1x Mutagenic Extract, 1x Runecloth' }
        ]
      }
    ]
  };

  const allProfs = [...professions[PROF_CATS.PRIMARY_CRAFTING], ...professions[PROF_CATS.PRIMARY_GATHERING], ...professions[PROF_CATS.SECONDARY]];
  const selectedProfData = allProfs.find(p => p.id === activeProf);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col items-center border-b border-[#3c3224]/50 pb-8 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent z-0 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#ff8000] to-[#ffd100] wow-title drop-shadow-lg relative z-10 text-center">
          Professions & Itemization
        </h1>
        <p className="text-[#d3c8b8] mt-3 text-lg font-medium tracking-wide relative z-10 drop-shadow-md text-center max-w-3xl">
          Every profession expanded. Thousands of new recipes. The economy of Azeroth is completely revitalized with powerful raid-tier crafting and wild utility.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-1/3 space-y-6">
          {Object.entries(professions).map(([category, profList]) => (
            <div key={category} className="bg-[#120e0a] border border-[#3c3224] rounded-lg overflow-hidden shadow-lg mb-4">
              <div className="bg-gradient-to-r from-[#1a140e] to-[#120e0a] p-4 border-b border-[#3c3224] border-l-2 border-l-[#ff8000]">
                <h3 className="font-bold text-[#ff8000] uppercase tracking-widest text-[11px] leading-tight">{category}</h3>
              </div>
              <div className="flex flex-col">
                {profList.map(prof => (
                  <button
                    key={prof.id}
                    onClick={() => { setActiveCategory(category); setActiveProf(prof.id); }}
                    className={`text-left p-3 text-sm transition-all border-l-4 flex items-center gap-2 ${
                      activeProf === prof.id 
                        ? 'border-[#39ff14] bg-[#1a140e] text-white font-bold' 
                        : 'border-transparent text-[#a69882] hover:bg-[#16120e] hover:text-[#d3c8b8]'
                    }`}
                  >
                    <span>{prof.icon}</span> {prof.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:w-2/3">
          {selectedProfData && (
            <div className="bg-gradient-to-br from-[#120e0a] to-[#0b0907] border border-[#3c3224] rounded-xl p-8 shadow-2xl animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 opacity-5 scale-150 pointer-events-none text-[#ff8000]">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 border-b border-[#3c3224]/50 pb-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
                      <span className="text-4xl">{selectedProfData.icon}</span> 
                      {selectedProfData.name}
                    </h2>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[#d3c8b8] leading-relaxed text-lg border-l-4 border-[#3c3224] pl-4 italic">
                      "{selectedProfData.description}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[#a69882] text-xs font-bold uppercase tracking-wider border-b border-[#3c3224] pb-2">Notable New Recipes & Items</h4>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProfData.recipes.map((recipe, i) => (
                        <div key={i} className="bg-[#1a140e] border border-[#3c3224] p-4 rounded-lg shadow-inner hover:border-[#ff8000]/50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-bold text-[#a335ee] text-lg">{recipe.name}</h5>
                            <span className="text-xs bg-[#120e0a] text-[#a69882] px-2 py-1 rounded border border-[#3c3224]">
                              {recipe.type}
                            </span>
                          </div>
                          <p className="text-[#39ff14] text-sm mb-3 font-medium">
                            {recipe.effect}
                          </p>
                          <div className="text-[#d3c8b8] text-xs flex gap-2 items-start border-t border-[#3c3224]/50 pt-2 mt-2">
                            <span className="font-bold text-[#ff8000] shrink-0">Reagents:</span>
                            <span>{recipe.mats}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
