export const PROF_CATS = {
  PRIMARY_CRAFTING: 'Primary: Crafting',
  PRIMARY_GATHERING: 'Primary: Gathering',
  SECONDARY: 'Secondary Skills'
};

export const professionsData = {
  [PROF_CATS.PRIMARY_CRAFTING]: [
    {
      id: 'Engineering',
      name: 'Engineering',
      icon: '⚙️',
      description: 'The pinnacle of utility. Engineers now build full siege vehicles for Battlegrounds, personal flying prototypes, and dangerous combat augmentations.',
      recipes: [
        { name: 'Goblin Rocket-Pack', type: 'Cloak', effect: 'Use: Launches the user 30 yards in the air and deploys a parachute. (3 Min Cooldown)', mats: '8x Mithril Bar, 4x Goblin Rocket Fuel, 2x Bolt of Runecloth' },
        { name: 'Gnomish Portable Defibrillator', type: 'Trinket', effect: 'Use: Zaps a dead target, returning them to life with 10% health and mana. 60% chance to electrocute the user instead, dealing 1500 Nature damage.', mats: '4x Thorium Widget, 2x Fused Wiring, 1x Essence of Air' },
        { name: 'Schematic: Timbermaw Shredder', type: 'Vehicle', effect: 'Constructs a pilotable shredder in Azshara Crater. Deals massive siege damage to wooden structures.', mats: '20x Ironwood Plank, 10x Mithril Tube, 1x Goblin Brainbox' },
        { name: 'Arcane Reflector Core', type: 'Shield Attachment', effect: 'Attaches to a shield. 5% chance when hit by a spell to reflect it back at the caster.', mats: '2x Arcanite Bar, 4x Blue Sapphire, 1x Delicate Arcanite Converter' },
        { name: 'Thorium-Plated Decoy', type: 'Device', effect: 'Drops a mechanical decoy with 5000 health that taunts all nearby enemies for 10 seconds.', mats: '5x Thorium Bar, 2x Truesilver Transformer, 1x Star Ruby' },
        { name: 'Gnomish X-Ray Goggles', type: 'Head', effect: 'Equip: Increases stealth detection by 20. Use: Allows the wearer to see through walls for 5 seconds.', mats: '2x Mithril Tube, 2x Aquamarine, 1x Inlaid Mithril Cylinder' },
        { name: 'Goblin Sapper Charge MK II', type: 'Explosive', effect: 'Deals 1500-2000 Fire damage to all enemies within 10 yards, and 1000 damage to you. Bypasses 50% of armor.', mats: '3x Goblin Rocket Fuel, 2x Solid Blasting Powder, 1x Unstable Trigger' },
        { name: 'Dimensional Ripper - Uldum', type: 'Trinket', effect: 'Teleports the user safely to the Maker\'s Terrace in Uldum. Small chance to teleport into a holding cell instead.', mats: '1x Dimension Ripper - Gadgetzan, 4x Titansteel Bar, 2x Essence of Earth' },
        { name: 'Ultrasafe Transporter: Grim Batol', type: 'Trinket', effect: 'Teleports the user to the Dragonmaw Gates. Small chance to be transformed into a Red Whelp for 1 hour.', mats: '1x Ultrasafe Transporter: Everlook, 4x Dark Iron Bar, 2x Essence of Fire' },
        { name: 'Mechanized Lockpick', type: 'Utility', effect: 'Opens locks requiring up to 300 lockpicking skill. Consumed on use. Has a 10% chance to permanently jam the lock.', mats: '2x Truesilver Bar, 1x Gold Contact, 1x Gyrochronatom' },
        { name: 'Field Repair Bot 110G', type: 'Device', effect: 'Deploys a repair bot that also sells phase 4 exclusive reagents and ammunition for 10 minutes.', mats: '8x Thorium Bar, 2x Fused Wiring, 1x Arcanite Bar' },
        { name: 'Sniper Scope', type: 'Bow Enchant', effect: 'Permanently adds +10 Ranged Damage and +1% Critical Strike chance to a bow or gun.', mats: '1x Mithril Tube, 1x Star Ruby, 2x Truesilver Bar' },
        { name: 'World-Enlarger', type: 'Toy', effect: 'Use: Shrinks the user to 10% of their normal size for 5 minutes. Does not persist in combat.', mats: '1x Mithril Casing, 1x Unstable Trigger, 1x Flask of Oil' },
        { name: 'Adamantite Net', type: 'Device', effect: 'Use: Roots the target for 10 seconds. Deals 50 physical damage every second they are netted.', mats: '4x Heavy Silk Bandage, 2x Ironweb Spider Silk' }
      ]
    },
    {
      id: 'Blacksmithing',
      name: 'Blacksmithing',
      icon: '🔨',
      description: 'The absolute masters of the endgame economy. They forge the keys to the new raids and craft legendary weapons that rival Naxxramas drops.',
      recipes: [
        { name: 'Arcanite Dragon-Buster', type: '2H Mace', effect: 'Equip: Increases attack power by 150 against Dragonkin. Chance on hit: Shatters dragon scales, reducing armor by 500.', mats: '30x Arcanite Bar, 10x Enchanted Elementium Blood, 5x Red Dragonscale' },
        { name: 'Dark Iron Plate of the Emperor', type: 'Chest', effect: 'Equip: +40 Fire Resistance. Use: Envelops the caster in magma, dealing 50 Fire damage to attackers for 20 sec.', mats: '40x Dark Iron Bar, 8x Core Leather, 4x Fiery Core' },
        { name: 'Void-Forged Bulwark', type: 'Shield', effect: 'Equip: 10% chance on block to absorb the next shadow spell cast against you.', mats: '20x Thorium Bar, 5x Essence of Undeath, 1x Fragment of the Nightmare' },
        { name: 'Skeleton Key of Karazhan', type: 'Utility', effect: 'Unlocks the rusted grates leading to the Lower Karazhan Crypts.', mats: '1x Truesilver Skeleton Key, 3x Demonic Rune, 1x Medivh\'s Journal Page' },
        { name: 'Titansteel Decapitator', type: '2H Axe', effect: 'Equip: +2% Critical Strike. Chance on hit: Instantly executes a non-elite target below 10% health.', mats: '20x Titansteel Bar, 4x Arcanite Bar, 2x Blood of the Mountain' },
        { name: 'Gauntlets of the Silver Hand', type: 'Gloves', effect: 'Equip: Increases healing done by Holy spells by up to 55. +1% Spell Crit.', mats: '12x Truesilver Bar, 4x Righteous Orb, 2x Essence of Light' },
        { name: 'Helm of the Emerald Dream', type: 'Head', effect: 'Equip: +25 Nature Resistance. Immunity to the "Slumber" mechanic in the Emerald Nightmare raid.', mats: '15x Thorium Bar, 4x Nightmare Vine, 1x Nexus Crystal' },
        { name: 'Blades of the Hakkari', type: '1H Sword', effect: 'Equip: Dual wielding this set grants a 5% chance on hit to siphon 100 health from the target.', mats: '10x Arcanite Bar, 2x Hakkari Blood, 1x Primal Hakkari Idol' },
        { name: 'Thorium Shield Spike', type: 'Shield Enchant', effect: 'Permanently attaches a spike to a shield, dealing 20-30 physical damage every time a block occurs.', mats: '4x Thorium Bar, 2x Solid Grinding Stone' },
        { name: 'Dark Iron Bomb', type: 'Explosive', effect: 'Use: Stuns all targets in a 5 yard radius for 4 seconds and deals 400 Fire damage.', mats: '2x Dark Iron Bar, 1x Blasting Powder' },
        { name: 'Breastplate of the Blood Knight', type: 'Chest', effect: 'Equip: Increases spell damage by 30 and melee attack power by 40.', mats: '20x Thorium Bar, 4x Bloodruby, 2x Essence of Fire' },
        { name: 'Boots of the Juggernaut', type: 'Feet', effect: 'Equip: You cannot be slowed below 70% of your normal movement speed.', mats: '15x Dark Iron Bar, 4x Core Leather, 1x Lava Core' }
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
        { name: 'Liquid Fire of Elune', type: 'Thrown', effect: 'Use: Throws a vial of concentrated moonlight, blinding undead targets in a 10 yard radius for 4 seconds.', mats: '2x Moon Glow (New), 1x Firebloom' },
        { name: 'Flask of the Titan\'s Blood', type: 'Flask', effect: 'Increases maximum health by 2500 and reduces physical damage taken by 5%. Persists through death.', mats: '1x Black Lotus, 20x Stonescale Oil, 10x Mountain Silversage' },
        { name: 'Potion of the Shadow-Walker', type: 'Potion', effect: 'Use: Grants stealth for 15 seconds. Usable only out of combat. Cannot be used in Battlegrounds.', mats: '2x Fadeleaf, 1x Grave Moss, 1x Crystal Vial' },
        { name: 'Elixir of the Naga', type: 'Elixir', effect: 'Use: Increases swim speed by 150% and allows underwater breathing for 1 hour.', mats: '2x Stranglekelp, 1x Fish Oil, 1x Crystal Vial' },
        { name: 'Transmute: Elemental Earth to Fire', type: 'Transmute', effect: 'Transforms 1x Essence of Earth into 1x Essence of Fire. 24 hour cooldown.', mats: '1x Essence of Earth, 1x Philosopher\'s Stone' },
        { name: 'Major Rejuvenation Potion', type: 'Potion', effect: 'Use: Restores 1500 to 2000 health and 1500 to 2000 mana.', mats: '1x Major Healing Potion, 1x Major Mana Potion, 1x Crystal Vial' },
        { name: 'Flask of Pure Magic', type: 'Flask', effect: 'Increases damage done by magical spells and effects by up to 200 for 2 hours. Persists through death.', mats: '1x Black Lotus, 30x Dreamfoil, 10x Icecap' },
        { name: 'Potion of the Mad Alchemist', type: 'Potion', effect: 'Use: Grants a random flask effect for 3 minutes. 10% chance to transform the user into a frog instead.', mats: '1x Crystal Vial, 3x Random Herbs' },
        { name: 'Elixir of Iron Will', type: 'Elixir', effect: 'Use: Immune to Stun and Charm mechanics for 10 seconds.', mats: '2x Blindweed, 1x Crystal Vial' }
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
        { name: 'Bottomless Nether-Bag', type: 'Bag', effect: 'A 20-slot bag that reduces the weight of all items inside by 100%.', mats: '6x Mooncloth, 2x Core of Earth, 1x Nexus Crystal' },
        { name: 'Bloodvine Leggings (Upgraded)', type: 'Legs', effect: 'Equip: +2% Spell Hit. Set Bonus (Tailoring 300): Restores 2% of your maximum mana on a critical spell hit.', mats: '4x Bloodvine, 4x Mooncloth, 4x Ironweb Spider Silk' },
        { name: 'Cloak of the Highborne', type: 'Cloak', effect: 'Equip: +15 Intellect. +15 Stamina. Use: Reduces your threat by 50% for 10 seconds.', mats: '4x Felcloth, 2x Essence of Air, 1x Rune Thread' },
        { name: 'Robe of the Void-Caller', type: 'Chest', effect: 'Equip: Increases Shadow damage by up to 45. Your shadow spells have a 1% chance to summon a minor voidwalker to fight for you.', mats: '10x Felcloth, 6x Essence of Undeath, 2x Nexus Crystal' },
        { name: 'Gloves of the Frost-Weaver', type: 'Gloves', effect: 'Equip: Increases Frost damage by up to 35. Your Frostbolts have a 5% chance to freeze the target in place for 3 sec.', mats: '6x Mooncloth, 4x Essence of Water, 1x Rune Thread' },
        { name: 'Truefaith Vestments (Corrupted)', type: 'Chest', effect: 'Equip: Increases healing done by up to 80. Every time you cast a heal, you take 50 Shadow damage.', mats: '1x Truefaith Vestments, 4x Demonic Rune, 2x Nexus Crystal' },
        { name: 'Sylvan Crown', type: 'Head', effect: 'Equip: +20 Nature Resistance. +30 Healing.', mats: '4x Mooncloth, 2x Living Essence, 1x Cenarion Plant Salve' },
        { name: 'Bag of Infinite Dust', type: 'Bag', effect: 'A 24-slot enchanting bag. Items placed in this bag cannot be traded.', mats: '4x Mooncloth, 10x Illusion Dust' }
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
        { name: 'War-Drums of the Horde', type: 'Consumable', effect: 'Use: Beats the drum, increasing the melee attack power of all party members within 30 yards by 50 for 2 mins. (50 Charges)', mats: '4x Thick Leather, 1x Ironwood Branch' },
        { name: 'Onyxia-Scale Cloak (Reinforced)', type: 'Cloak', effect: 'Equip: +20 Fire Resistance. Prevents being completely engulfed by the Shadowflame. Now grants +1% Dodge.', mats: '1x Onyxia Scale Cloak, 4x Core Leather, 2x Arcanite Bar' },
        { name: 'Belt of the Timbermaw', type: 'Waist', effect: 'Equip: +15 Strength, +15 Agility, +15 Stamina. Use: Summons a Timbermaw Ancestor to fight for you for 30 seconds.', mats: '6x Cured Rugged Hide, 2x Essence of Earth, 1x Timbermaw Ancestral Totem' },
        { name: 'Boots of the Shadow-Cat', type: 'Feet', effect: 'Equip: Increases stealth effectiveness. +20 Agility.', mats: '4x Fel Hide, 2x Cured Rugged Hide, 1x Rune Thread' },
        { name: 'Murloc-Scale Diving Suit', type: 'Chest', effect: 'Equip: You can breathe underwater indefinitely and your swim speed is increased by 50%.', mats: '20x Murloc Scale, 4x Thick Leather, 2x Cured Heavy Hide' },
        { name: 'Corehound Belt', type: 'Waist', effect: 'Equip: +15 Fire Resistance. Melee attackers take 15 Fire damage per hit.', mats: '6x Core Leather, 2x Fiery Core, 1x Cured Rugged Hide' },
        { name: 'Quiver of the Windrunner', type: 'Quiver', effect: 'An 18-slot quiver. Increases ranged attack speed by 15%.', mats: '8x Cured Rugged Hide, 4x Essence of Air, 2x Silithid Chitin' },
        { name: 'Gordok Ogre-Suit', type: 'Toy', effect: 'Use: Disguises the user as a Gordok Ogre for 10 minutes. Breaks upon entering combat.', mats: '4x Rugged Leather, 2x Ogre Tannin, 1x Rune Thread' }
      ]
    },
    {
      id: 'Enchanting',
      name: 'Enchanting',
      icon: '✨',
      description: 'Enchanters can now augment not just weapons and armor, but also mounts, gathering tools, and even the player\'s spellbook.',
      recipes: [
        { name: 'Enchant Mount - Hooves of Zephyr', type: 'Mount', effect: 'Permanently enchants a mount to be able to double-jump and take 50% less fall damage.', mats: '4x Nexus Crystal, 10x Illusion Dust, 2x Essence of Air' },
        { name: 'Enchant Weapon - Felstriker', type: 'Weapon', effect: 'Permanently enchants a melee weapon to occasionally grant 100% critical strike chance for 3 seconds.', mats: '6x Nexus Crystal, 4x Large Brilliant Shard, 1x Demonic Rune' },
        { name: 'Enchant Tool - Swift Harvesting', type: 'Tool', effect: 'Permanently enchants a Mining Pick or Skinning Knife to reduce gathering time by 50%.', mats: '2x Greater Eternal Essence, 4x Dream Dust' },
        { name: 'Enchant Chest - Major Stats', type: 'Chest', effect: 'Permanently enchants a piece of chest armor to grant +5 to all stats.', mats: '4x Large Brilliant Shard, 2x Illusion Dust, 2x Greater Eternal Essence' },
        { name: 'Enchant Gloves - Threat', type: 'Gloves', effect: 'Permanently enchants gloves to increase threat generation by 2%.', mats: '2x Nexus Crystal, 4x Essence of Earth' },
        { name: 'Enchant Boots - Minor Speed', type: 'Feet', effect: 'Permanently enchants boots to grant a minor movement speed increase.', mats: '2x Aquamarine, 1x Lesser Nether Essence' },
        { name: 'Enchant Shield - Spell Reflection', type: 'Shield', effect: 'Permanently enchants a shield to grant a 1% chance to reflect a spell back at the caster.', mats: '4x Nexus Crystal, 2x Essence of Water' },
        { name: 'Enchant Weapon - Lifestealing', type: 'Weapon', effect: 'Permanently enchants a melee weapon to occasionally siphon 30 health from the enemy.', mats: '4x Large Brilliant Shard, 2x Essence of Undeath' },
        { name: 'Enchant Bracer - Superior Stamina', type: 'Bracers', effect: 'Permanently enchants bracers to grant +9 Stamina.', mats: '6x Illusion Dust' },
        { name: 'Enchant Cloak - Stealth', type: 'Cloak', effect: 'Permanently enchants a cloak to increase stealth effectiveness.', mats: '2x Nexus Crystal, 4x Black Lotus' }
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
        { name: 'Titansteel Ore', type: 'Material', effect: 'Found exclusively in the Elite depths of Uldum. Requires 315 Mining.', mats: 'Smelted into Titansteel Bars for raid-tier tanking gear.' },
        { name: 'Obsidian Shards', type: 'Material', effect: 'Chipped off the corpses of Obsidian Destroyers in Uldum.', mats: 'Used by Enchanters to create spell-reflecting wards.' },
        { name: 'Blood-Iron Ore', type: 'Material', effect: 'Found in the cursed soils of the Eastern Plaguelands.', mats: 'Smelted into Blood-Iron Bars, used for anti-undead weaponry.' },
        { name: 'Elementium Veins', type: 'Material', effect: 'Found deep within Blackwing Lair and Grim Batol.', mats: 'Requires the Goblin Sapper Charge to break the rock surrounding the vein before it can be mined.' },
        { name: 'Dark Iron Deposit', type: 'Material', effect: 'Found in Blackrock Depths and Searing Gorge.', mats: 'Smelted in the Black Forge. Used for Fire Resistance gear.' }
      ]
    },
    {
      id: 'Herbalism',
      name: 'Herbalism',
      icon: '🌿',
      description: 'Herbalists are the first line of defense against the Nightmare, harvesting corrupted flora to create potent counter-toxins.',
      recipes: [
        { name: 'Nightmare Vine', type: 'Material', effect: 'Grows only in the corrupted Barrow Dens of Hyjal. Emits a toxic cloud when picked, requiring the herbalist to wear a mask.', mats: 'Primary ingredient for Nature Resistance flasks.' },
        { name: 'Bloodpetal Sprout', type: 'Material', effect: 'Found in Un\'Goro and Gillijim\'s Isle. Can be consumed raw for a random stat buff or debuff.', mats: 'Used by Alchemists for Mutagenic potions.' },
        { name: 'Black Lotus', type: 'Material', effect: 'The rarest herb in Azeroth. Now guarded by Elite level 60 plant-elementals when it spawns.', mats: 'The foundation of all Flasks.' },
        { name: 'Frost Lotus', type: 'Material', effect: 'Found only in the highest peaks of Winterspring.', mats: 'Used for extreme Frost Resistance elixirs.' },
        { name: 'Felweed', type: 'Material', effect: 'Found in Demon Fall Canyon and Felwood.', mats: 'Used for Warlock class mounts and specific Shadow Resistance gear.' }
      ]
    },
    {
      id: 'Skinning',
      name: 'Skinning',
      icon: '🔪',
      description: 'Skinners harvest the beasts of the new islands and the dragons of Grim Batol.',
      recipes: [
        { name: 'Pristine Red Dragonscale', type: 'Material', effect: 'Skinned from the elite drakes surrounding Grim Batol. Extremely low drop rate.', mats: 'Used by Leatherworkers for Fire Resistance epics.' },
        { name: 'Mutated Chimera Hide', type: 'Material', effect: 'Skinned from Doctor Lapidis\'s experiments on his island.', mats: 'Used by Tailors to craft spell-resistant cloaks.' },
        { name: 'Core Leather', type: 'Material', effect: 'Skinned from Core Hounds in Molten Core.', mats: 'Used for Dark Iron and Corehound leather sets.' },
        { name: 'Silithid Chitin', type: 'Material', effect: 'Skinned from elite Silithid in Silithus and Ahn\'Qiraj.', mats: 'Used for Nature Resistance gear.' },
        { name: 'Devilsaur Leather', type: 'Material', effect: 'Skinned from the apex predators of Un\'Goro.', mats: 'Used for the highly sought-after Devilsaur set.' }
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
        { name: 'Dirge\'s Kickin\' Chimaerok Chops', type: 'Food', effect: 'Restores health. Well Fed: +25 Stamina and +25 Intellect for 15 mins.', mats: '1x Chimaerok Tenderloin, 1x Goblin Rocket Fuel, 1x Deeprock Salt' },
        { name: 'Feast of the Red Dragonflight', type: 'Guild Feast', effect: 'Places a massive feast on the ground. Feeds 40 people. Well Fed: +20 Fire Resistance and +15 Stamina.', mats: '10x Tender Crocolisk Meat, 5x Red Dragon Egg, 10x Alterac Swiss' },
        { name: 'Savory Deviate Delight', type: 'Food', effect: 'Transforms the user into a ninja or pirate for 1 hour.', mats: '1x Deviate Fish, 1x Mild Spices' },
        { name: 'Nightmare Truffle Soup', type: 'Food', effect: 'Well Fed: +20 Nature Resistance. Causes minor hallucinations.', mats: '2x Nightmare Vine, 1x Purified Water' },
        { name: 'Blackened Basilisk', type: 'Food', effect: 'Well Fed: +10 Spell Damage and Healing.', mats: '1x Basilisk Meat, 1x Hot Spices' }
      ]
    },
    {
      id: 'Fishing',
      name: 'Fishing',
      icon: '🎣',
      description: 'Fishermen pull up the forgotten secrets of the sea, including sunken lore items and mounts.',
      recipes: [
        { name: 'Sunken Lockbox', type: 'Catch', effect: 'Fished from the wreckage around Gillijim\'s Isle. Contains pirate gold, rum, and a chance at the unique "Salty" title item.', mats: 'Requires 300 Fishing and a specific lure.' },
        { name: 'The Great Sea Turtle', type: 'Mount', effect: 'A very slow aquatic mount that can be fished up in Azshara. Increases swim speed by 150%.', mats: '0.01% Catch Rate in Azshara open water.' },
        { name: 'Deviate Fish', type: 'Catch', effect: 'Caught in the Barrens oases. Used for Savory Deviate Delights.', mats: 'Requires low fishing skill.' },
        { name: 'Oily Blackmouth', type: 'Catch', effect: 'Used by Alchemists for Blackmouth Oil and Free Action Potions.', mats: 'Caught in coastal waters.' },
        { name: 'Firefin Snapper', type: 'Catch', effect: 'Used by Alchemists for Fire Oil and Elixir of Firepower.', mats: 'Caught in warm coastal waters.' }
      ]
    },
    {
      id: 'FirstAid',
      name: 'First Aid',
      icon: '🩹',
      description: 'First Aid expands into field-medic territory, allowing non-healers to perform clutch saves in raids.',
      recipes: [
        { name: 'Runecloth Field Tourniquet', type: 'Bandage', effect: 'Use: Instantly stops all Bleed effects on the target and heals for 500 over 8 sec.', mats: '2x Runecloth, 1x Thorium Needle' },
        { name: 'Adrenaline Syringe', type: 'Consumable', effect: 'Use: Injects a dying ally, restoring 2000 health instantly but preventing them from receiving magical healing for 5 seconds.', mats: '1x Crystal Vial, 1x Mutagenic Extract, 1x Runecloth' },
        { name: 'Heavy Runecloth Bandage', type: 'Bandage', effect: 'Heals 2000 damage over 8 seconds.', mats: '2x Runecloth' },
        { name: 'Anti-Venom', type: 'Consumable', effect: 'Cures poisons up to level 60.', mats: '1x Large Venom Sac' },
        { name: 'Defibrillator Pads', type: 'Utility', effect: 'Use alongside the Gnomish Defibrillator to increase success rate by 20%.', mats: '1x Silk Cloth, 1x Copper Wire' }
      ]
    }
  ]
};
