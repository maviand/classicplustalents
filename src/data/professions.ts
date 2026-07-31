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
      description: 'The pinnacle of utility. Engineers now build full siege vehicles for Battlegrounds, personal flying prototypes, and dangerous combat augmentations. Displaying 150+ new recipes.',
      recipes: [
  {
    "name": "Gnomish Teleporter",
    "type": "Explosive",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "18x Elementium Ore, 3x Elementium Ore"
  },
  {
    "name": "Volatile Shrink Ray",
    "type": "Trinket",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "24x Black Lotus, 2x Essence of Fire"
  },
  {
    "name": "Gnomish Battle Chicken",
    "type": "Trinket",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "17x Void Crystal, 5x Essence of Fire"
  },
  {
    "name": "Goblin Shrink Ray",
    "type": "Trinket",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "16x Elementium Ore, 4x Elementium Ore"
  },
  {
    "name": "Ultrasafe Battle Chicken",
    "type": "Scope",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "17x Essence of Earth, 4x Black Lotus"
  },
  {
    "name": "Goblin Shrink Ray",
    "type": "Scope",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "23x Core Leather, 2x Black Lotus"
  },
  {
    "name": "Ultrasafe Teleporter",
    "type": "Mount",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "7x Nexus Crystal, 9x Arcanite Bar"
  },
  {
    "name": "Experimental Repair Bot",
    "type": "Gadget",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "14x Essence of Earth, 6x Core Leather"
  },
  {
    "name": "Experimental Defibrillator",
    "type": "Mount",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "14x Core Leather, 6x Arcanite Bar"
  },
  {
    "name": "Ultrasafe Rocket-Pack",
    "type": "Explosive",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "13x Enchanted Leather, 11x Thorium Bar"
  },
  {
    "name": "Ultrasafe Shrink Ray",
    "type": "Scope",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "8x Enchanted Leather, 4x Void Crystal"
  },
  {
    "name": "Goblin Battle Chicken",
    "type": "Explosive",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "23x Thorium Bar, 3x Nexus Crystal"
  },
  {
    "name": "Volatile Net-o-Matic",
    "type": "Trinket",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "21x Arcanite Bar, 11x Essence of Fire"
  },
  {
    "name": "Goblin Battle Chicken",
    "type": "Gadget",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "7x Righteous Orb, 3x Void Crystal"
  },
  {
    "name": "Ultrasafe Battle Chicken",
    "type": "Scope",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "12x Void Crystal, 8x Primal Hakkari Idol"
  },
  {
    "name": "Goblin Net-o-Matic",
    "type": "Explosive",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "11x Core Leather, 4x Nexus Crystal"
  },
  {
    "name": "Gnomish Mind Control Cap",
    "type": "Gadget",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "12x Elementium Ore, 7x Elementium Ore"
  },
  {
    "name": "Gnomish Rocket-Pack",
    "type": "Explosive",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "19x Void Crystal, 9x Righteous Orb"
  },
  {
    "name": "Goblin Shrink Ray",
    "type": "Trinket",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "8x Core Leather, 9x Essence of Fire"
  },
  {
    "name": "Experimental Net-o-Matic",
    "type": "Trinket",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "11x Black Lotus, 10x Dark Iron Bar"
  },
  {
    "name": "Gnomish Death-Ray",
    "type": "Scope",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "16x Primal Hakkari Idol, 9x Nexus Crystal"
  },
  {
    "name": "Volatile Teleporter",
    "type": "Mount",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "17x Arcanite Bar, 2x Essence of Earth"
  },
  {
    "name": "Volatile Mind Control Cap",
    "type": "Mount",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "14x Thorium Bar, 3x Primal Hakkari Idol"
  },
  {
    "name": "Gnomish Teleporter",
    "type": "Mount",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "14x Black Lotus, 8x Primal Hakkari Idol"
  },
  {
    "name": "Gnomish Defibrillator",
    "type": "Scope",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "13x Enchanted Leather, 6x Void Crystal"
  },
  {
    "name": "Ultrasafe Shrink Ray",
    "type": "Scope",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "5x Primal Hakkari Idol, 7x Arcanite Bar"
  },
  {
    "name": "Experimental Teleporter",
    "type": "Gadget",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "11x Essence of Fire, 3x Arcanite Bar"
  },
  {
    "name": "Experimental Battle Chicken",
    "type": "Mount",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "9x Dark Iron Bar, 11x Dark Iron Bar"
  },
  {
    "name": "Experimental Mind Control Cap",
    "type": "Explosive",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "22x Essence of Earth, 11x Core Leather"
  },
  {
    "name": "Volatile Defibrillator",
    "type": "Gadget",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "19x Elementium Ore, 5x Black Lotus"
  },
  {
    "name": "Ultrasafe Rocket-Pack",
    "type": "Gadget",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "22x Enchanted Leather, 5x Black Lotus"
  },
  {
    "name": "Volatile Battle Chicken",
    "type": "Gadget",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "23x Elementium Ore, 5x Nexus Crystal"
  },
  {
    "name": "Experimental Shrink Ray",
    "type": "Mount",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "17x Elementium Ore, 4x Elementium Ore"
  },
  {
    "name": "Experimental Rocket-Pack",
    "type": "Scope",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "9x Essence of Earth, 11x Essence of Earth"
  },
  {
    "name": "Goblin Death-Ray",
    "type": "Gadget",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "22x Enchanted Leather, 6x Essence of Fire"
  },
  {
    "name": "Ultrasafe Battle Chicken",
    "type": "Mount",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "5x Elementium Ore, 4x Righteous Orb"
  },
  {
    "name": "Goblin Teleporter",
    "type": "Mount",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "15x Nexus Crystal, 10x Elementium Ore"
  },
  {
    "name": "Volatile Rocket-Pack",
    "type": "Trinket",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "12x Essence of Fire, 10x Arcanite Bar"
  },
  {
    "name": "Volatile Death-Ray",
    "type": "Trinket",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "7x Essence of Fire, 3x Nexus Crystal"
  },
  {
    "name": "Gnomish Net-o-Matic",
    "type": "Gadget",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "17x Black Lotus, 5x Core Leather"
  },
  {
    "name": "Gnomish Mind Control Cap",
    "type": "Gadget",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "9x Thorium Bar, 11x Righteous Orb"
  },
  {
    "name": "Volatile Battle Chicken",
    "type": "Gadget",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "8x Dark Iron Bar, 10x Arcanite Bar"
  },
  {
    "name": "Gnomish Mind Control Cap",
    "type": "Scope",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "9x Dark Iron Bar, 3x Nexus Crystal"
  },
  {
    "name": "Gnomish Rocket-Pack",
    "type": "Trinket",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "8x Core Leather, 9x Nexus Crystal"
  },
  {
    "name": "Ultrasafe Net-o-Matic",
    "type": "Trinket",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "21x Righteous Orb, 6x Primal Hakkari Idol"
  },
  {
    "name": "Gnomish Shrink Ray",
    "type": "Scope",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "10x Dark Iron Bar, 9x Righteous Orb"
  },
  {
    "name": "Volatile Repair Bot",
    "type": "Trinket",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "22x Nexus Crystal, 11x Elementium Ore"
  },
  {
    "name": "Goblin Teleporter",
    "type": "Explosive",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "23x Elementium Ore, 6x Righteous Orb"
  },
  {
    "name": "Ultrasafe Teleporter",
    "type": "Trinket",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "9x Arcanite Bar, 5x Nexus Crystal"
  },
  {
    "name": "Experimental Shrink Ray",
    "type": "Trinket",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "10x Thorium Bar, 10x Enchanted Leather"
  },
  {
    "name": "Ultrasafe Shrink Ray",
    "type": "Trinket",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "19x Nexus Crystal, 3x Void Crystal"
  },
  {
    "name": "Gnomish Net-o-Matic",
    "type": "Scope",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "6x Thorium Bar, 2x Essence of Earth"
  },
  {
    "name": "Volatile Battle Chicken",
    "type": "Gadget",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "7x Essence of Earth, 3x Black Lotus"
  },
  {
    "name": "Volatile Battle Chicken",
    "type": "Mount",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "6x Essence of Fire, 6x Thorium Bar"
  },
  {
    "name": "Volatile Teleporter",
    "type": "Mount",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "18x Righteous Orb, 8x Nexus Crystal"
  },
  {
    "name": "Experimental Mind Control Cap",
    "type": "Gadget",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "21x Nexus Crystal, 6x Arcanite Bar"
  },
  {
    "name": "Experimental Teleporter",
    "type": "Gadget",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "18x Nexus Crystal, 10x Essence of Earth"
  },
  {
    "name": "Goblin Repair Bot",
    "type": "Trinket",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "7x Core Leather, 4x Essence of Earth"
  },
  {
    "name": "Goblin Shrink Ray",
    "type": "Trinket",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "5x Enchanted Leather, 9x Black Lotus"
  },
  {
    "name": "Gnomish Teleporter",
    "type": "Explosive",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "7x Essence of Earth, 11x Core Leather"
  },
  {
    "name": "Experimental Battle Chicken",
    "type": "Explosive",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "22x Enchanted Leather, 5x Essence of Fire"
  },
  {
    "name": "Volatile Mind Control Cap",
    "type": "Scope",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "14x Black Lotus, 8x Essence of Earth"
  },
  {
    "name": "Experimental Mind Control Cap",
    "type": "Trinket",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "15x Elementium Ore, 3x Core Leather"
  },
  {
    "name": "Experimental Net-o-Matic",
    "type": "Gadget",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "21x Void Crystal, 9x Essence of Fire"
  },
  {
    "name": "Volatile Battle Chicken",
    "type": "Mount",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "22x Arcanite Bar, 9x Essence of Fire"
  },
  {
    "name": "Experimental Shrink Ray",
    "type": "Gadget",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "16x Thorium Bar, 7x Dark Iron Bar"
  },
  {
    "name": "Gnomish Net-o-Matic",
    "type": "Mount",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "13x Essence of Earth, 9x Void Crystal"
  },
  {
    "name": "Goblin Death-Ray",
    "type": "Trinket",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "15x Elementium Ore, 11x Essence of Earth"
  },
  {
    "name": "Experimental Defibrillator",
    "type": "Mount",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "14x Nexus Crystal, 7x Elementium Ore"
  },
  {
    "name": "Ultrasafe Shrink Ray",
    "type": "Mount",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "24x Elementium Ore, 2x Primal Hakkari Idol"
  },
  {
    "name": "Volatile Death-Ray",
    "type": "Explosive",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "9x Primal Hakkari Idol, 7x Essence of Earth"
  },
  {
    "name": "Volatile Defibrillator",
    "type": "Mount",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "9x Essence of Fire, 6x Primal Hakkari Idol"
  },
  {
    "name": "Gnomish Defibrillator",
    "type": "Gadget",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "21x Arcanite Bar, 3x Essence of Fire"
  },
  {
    "name": "Experimental Death-Ray",
    "type": "Explosive",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "18x Thorium Bar, 6x Essence of Earth"
  },
  {
    "name": "Experimental Death-Ray",
    "type": "Trinket",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "13x Righteous Orb, 3x Dark Iron Bar"
  },
  {
    "name": "Goblin Shrink Ray",
    "type": "Explosive",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "21x Righteous Orb, 3x Essence of Fire"
  },
  {
    "name": "Ultrasafe Net-o-Matic",
    "type": "Mount",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "15x Elementium Ore, 7x Nexus Crystal"
  },
  {
    "name": "Experimental Battle Chicken",
    "type": "Explosive",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "24x Arcanite Bar, 6x Dark Iron Bar"
  },
  {
    "name": "Gnomish Net-o-Matic",
    "type": "Gadget",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "10x Core Leather, 5x Black Lotus"
  },
  {
    "name": "Goblin Repair Bot",
    "type": "Scope",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "9x Nexus Crystal, 11x Black Lotus"
  },
  {
    "name": "Ultrasafe Defibrillator",
    "type": "Trinket",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "23x Thorium Bar, 10x Enchanted Leather"
  },
  {
    "name": "Ultrasafe Repair Bot",
    "type": "Explosive",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "12x Dark Iron Bar, 3x Elementium Ore"
  },
  {
    "name": "Ultrasafe Net-o-Matic",
    "type": "Explosive",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "13x Righteous Orb, 3x Enchanted Leather"
  },
  {
    "name": "Goblin Net-o-Matic",
    "type": "Trinket",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "13x Righteous Orb, 11x Thorium Bar"
  },
  {
    "name": "Volatile Rocket-Pack",
    "type": "Explosive",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "18x Core Leather, 9x Essence of Fire"
  },
  {
    "name": "Volatile Battle Chicken",
    "type": "Scope",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "11x Essence of Fire, 7x Righteous Orb"
  },
  {
    "name": "Goblin Defibrillator",
    "type": "Gadget",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "19x Righteous Orb, 4x Thorium Bar"
  },
  {
    "name": "Volatile Shrink Ray",
    "type": "Scope",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "10x Essence of Earth, 2x Elementium Ore"
  },
  {
    "name": "Volatile Rocket-Pack",
    "type": "Scope",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "10x Nexus Crystal, 2x Thorium Bar"
  },
  {
    "name": "Ultrasafe Battle Chicken",
    "type": "Scope",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "20x Elementium Ore, 11x Void Crystal"
  },
  {
    "name": "Gnomish Shrink Ray",
    "type": "Gadget",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "6x Elementium Ore, 7x Black Lotus"
  },
  {
    "name": "Experimental Shrink Ray",
    "type": "Gadget",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "8x Primal Hakkari Idol, 4x Primal Hakkari Idol"
  },
  {
    "name": "Gnomish Repair Bot",
    "type": "Explosive",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "20x Void Crystal, 2x Enchanted Leather"
  },
  {
    "name": "Goblin Defibrillator",
    "type": "Trinket",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "20x Essence of Fire, 4x Arcanite Bar"
  },
  {
    "name": "Goblin Teleporter",
    "type": "Gadget",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "7x Elementium Ore, 3x Void Crystal"
  },
  {
    "name": "Ultrasafe Battle Chicken",
    "type": "Gadget",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "6x Essence of Fire, 8x Arcanite Bar"
  },
  {
    "name": "Goblin Rocket-Pack",
    "type": "Mount",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "8x Arcanite Bar, 11x Primal Hakkari Idol"
  },
  {
    "name": "Gnomish Death-Ray",
    "type": "Trinket",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "14x Righteous Orb, 5x Black Lotus"
  },
  {
    "name": "Ultrasafe Defibrillator",
    "type": "Gadget",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "5x Essence of Earth, 8x Arcanite Bar"
  },
  {
    "name": "Goblin Defibrillator",
    "type": "Trinket",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "10x Dark Iron Bar, 7x Nexus Crystal"
  },
  {
    "name": "Volatile Net-o-Matic",
    "type": "Trinket",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "14x Elementium Ore, 7x Dark Iron Bar"
  },
  {
    "name": "Goblin Shrink Ray",
    "type": "Gadget",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "13x Essence of Earth, 4x Thorium Bar"
  },
  {
    "name": "Experimental Teleporter",
    "type": "Scope",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "15x Nexus Crystal, 7x Elementium Ore"
  },
  {
    "name": "Goblin Defibrillator",
    "type": "Explosive",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "13x Thorium Bar, 3x Enchanted Leather"
  },
  {
    "name": "Goblin Mind Control Cap",
    "type": "Explosive",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "12x Arcanite Bar, 6x Core Leather"
  },
  {
    "name": "Goblin Repair Bot",
    "type": "Explosive",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "18x Essence of Earth, 4x Nexus Crystal"
  },
  {
    "name": "Gnomish Battle Chicken",
    "type": "Gadget",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "24x Dark Iron Bar, 4x Nexus Crystal"
  },
  {
    "name": "Goblin Shrink Ray",
    "type": "Scope",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "23x Righteous Orb, 4x Arcanite Bar"
  },
  {
    "name": "Goblin Teleporter",
    "type": "Explosive",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "21x Primal Hakkari Idol, 10x Righteous Orb"
  },
  {
    "name": "Experimental Shrink Ray",
    "type": "Gadget",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "5x Nexus Crystal, 7x Essence of Earth"
  },
  {
    "name": "Goblin Shrink Ray",
    "type": "Gadget",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "21x Essence of Earth, 3x Nexus Crystal"
  },
  {
    "name": "Experimental Mind Control Cap",
    "type": "Explosive",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "22x Thorium Bar, 7x Black Lotus"
  },
  {
    "name": "Goblin Net-o-Matic",
    "type": "Explosive",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "13x Enchanted Leather, 10x Dark Iron Bar"
  },
  {
    "name": "Goblin Shrink Ray",
    "type": "Mount",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "14x Core Leather, 11x Arcanite Bar"
  },
  {
    "name": "Ultrasafe Shrink Ray",
    "type": "Mount",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "21x Essence of Fire, 11x Nexus Crystal"
  },
  {
    "name": "Gnomish Death-Ray",
    "type": "Mount",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "22x Primal Hakkari Idol, 3x Thorium Bar"
  },
  {
    "name": "Ultrasafe Death-Ray",
    "type": "Mount",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "14x Void Crystal, 8x Thorium Bar"
  },
  {
    "name": "Ultrasafe Net-o-Matic",
    "type": "Gadget",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "23x Thorium Bar, 4x Essence of Fire"
  },
  {
    "name": "Goblin Death-Ray",
    "type": "Trinket",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "18x Dark Iron Bar, 11x Black Lotus"
  },
  {
    "name": "Goblin Net-o-Matic",
    "type": "Explosive",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "15x Essence of Fire, 7x Nexus Crystal"
  },
  {
    "name": "Experimental Mind Control Cap",
    "type": "Gadget",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "19x Black Lotus, 9x Primal Hakkari Idol"
  },
  {
    "name": "Ultrasafe Net-o-Matic",
    "type": "Mount",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "21x Primal Hakkari Idol, 8x Essence of Fire"
  },
  {
    "name": "Experimental Defibrillator",
    "type": "Mount",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "10x Enchanted Leather, 6x Void Crystal"
  },
  {
    "name": "Volatile Repair Bot",
    "type": "Mount",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "6x Arcanite Bar, 4x Primal Hakkari Idol"
  },
  {
    "name": "Ultrasafe Defibrillator",
    "type": "Scope",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "10x Primal Hakkari Idol, 6x Elementium Ore"
  },
  {
    "name": "Ultrasafe Teleporter",
    "type": "Scope",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "7x Nexus Crystal, 8x Essence of Fire"
  },
  {
    "name": "Ultrasafe Death-Ray",
    "type": "Explosive",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "20x Essence of Fire, 4x Core Leather"
  },
  {
    "name": "Goblin Repair Bot",
    "type": "Explosive",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "22x Enchanted Leather, 5x Dark Iron Bar"
  },
  {
    "name": "Volatile Battle Chicken",
    "type": "Gadget",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "21x Arcanite Bar, 9x Nexus Crystal"
  },
  {
    "name": "Goblin Defibrillator",
    "type": "Trinket",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "10x Arcanite Bar, 8x Essence of Fire"
  },
  {
    "name": "Gnomish Teleporter",
    "type": "Trinket",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "19x Essence of Earth, 8x Core Leather"
  },
  {
    "name": "Experimental Teleporter",
    "type": "Trinket",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "19x Arcanite Bar, 2x Void Crystal"
  },
  {
    "name": "Gnomish Net-o-Matic",
    "type": "Explosive",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "19x Void Crystal, 3x Black Lotus"
  },
  {
    "name": "Ultrasafe Mind Control Cap",
    "type": "Mount",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "7x Essence of Fire, 5x Void Crystal"
  },
  {
    "name": "Experimental Defibrillator",
    "type": "Gadget",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "13x Essence of Fire, 2x Thorium Bar"
  },
  {
    "name": "Ultrasafe Net-o-Matic",
    "type": "Trinket",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "17x Elementium Ore, 6x Essence of Fire"
  },
  {
    "name": "Ultrasafe Mind Control Cap",
    "type": "Mount",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "15x Dark Iron Bar, 7x Essence of Earth"
  },
  {
    "name": "Volatile Shrink Ray",
    "type": "Gadget",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "9x Arcanite Bar, 2x Dark Iron Bar"
  },
  {
    "name": "Experimental Mind Control Cap",
    "type": "Mount",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "19x Arcanite Bar, 5x Essence of Earth"
  },
  {
    "name": "Goblin Death-Ray",
    "type": "Mount",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "8x Enchanted Leather, 9x Essence of Earth"
  },
  {
    "name": "Gnomish Net-o-Matic",
    "type": "Scope",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "24x Arcanite Bar, 3x Black Lotus"
  },
  {
    "name": "Experimental Death-Ray",
    "type": "Scope",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "11x Thorium Bar, 2x Void Crystal"
  },
  {
    "name": "Ultrasafe Teleporter",
    "type": "Gadget",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "10x Core Leather, 3x Nexus Crystal"
  },
  {
    "name": "Ultrasafe Teleporter",
    "type": "Scope",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "8x Essence of Fire, 2x Dark Iron Bar"
  },
  {
    "name": "Volatile Mind Control Cap",
    "type": "Gadget",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "24x Elementium Ore, 5x Core Leather"
  },
  {
    "name": "Goblin Death-Ray",
    "type": "Gadget",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "8x Black Lotus, 3x Dark Iron Bar"
  },
  {
    "name": "Goblin Net-o-Matic",
    "type": "Scope",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "8x Nexus Crystal, 7x Elementium Ore"
  },
  {
    "name": "Experimental Rocket-Pack",
    "type": "Mount",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "20x Thorium Bar, 3x Essence of Earth"
  },
  {
    "name": "Ultrasafe Rocket-Pack",
    "type": "Gadget",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "20x Black Lotus, 10x Essence of Earth"
  },
  {
    "name": "Experimental Net-o-Matic",
    "type": "Scope",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "8x Void Crystal, 4x Black Lotus"
  }
]
    },
    {
      id: 'Blacksmithing',
      name: 'Blacksmithing',
      icon: '🔨',
      description: 'The absolute masters of the endgame economy. Displaying 200+ new weapons and armor pieces.',
      recipes: [
  {
    "name": "Elementium Halberd",
    "type": "Shield",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "15x Black Lotus, 10x Essence of Earth"
  },
  {
    "name": "Void-Touched Wand",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "8x Elementium Ore, 3x Righteous Orb"
  },
  {
    "name": "Elementium Staff",
    "type": "Weapon",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "22x Core Leather, 6x Thorium Bar"
  },
  {
    "name": "Emerald Kris",
    "type": "Heavy Armor",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "11x Thorium Bar, 6x Essence of Earth"
  },
  {
    "name": "Titansteel Kris",
    "type": "Weapon",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "6x Essence of Fire, 10x Core Leather"
  },
  {
    "name": "Titansteel Staff",
    "type": "Weapon",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "14x Core Leather, 4x Righteous Orb"
  },
  {
    "name": "Scourge-Bane Staff",
    "type": "Shield",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "9x Enchanted Leather, 5x Essence of Fire"
  },
  {
    "name": "Dragon-Bone Kris",
    "type": "Weapon",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "12x Void Crystal, 9x Elementium Ore"
  },
  {
    "name": "Fel-Infused Staff",
    "type": "Shield",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "22x Elementium Ore, 3x Essence of Earth"
  },
  {
    "name": "Blood-forged Pike",
    "type": "Shield",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "21x Nexus Crystal, 9x Thorium Bar"
  },
  {
    "name": "Elementium Dirk",
    "type": "Heavy Armor",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "11x Elementium Ore, 9x Dark Iron Bar"
  },
  {
    "name": "Fel-Infused Mace",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "22x Primal Hakkari Idol, 7x Essence of Earth"
  },
  {
    "name": "Shadowflame Wand",
    "type": "Shield",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "9x Black Lotus, 6x Dark Iron Bar"
  },
  {
    "name": "Void-Touched Battleaxe",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "16x Righteous Orb, 8x Thorium Bar"
  },
  {
    "name": "Fel-Infused Halberd",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "8x Void Crystal, 3x Dark Iron Bar"
  },
  {
    "name": "Elementium Longsword",
    "type": "Shield",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "5x Void Crystal, 7x Essence of Fire"
  },
  {
    "name": "Shadowflame Blunderbuss",
    "type": "Weapon",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "12x Primal Hakkari Idol, 11x Thorium Bar"
  },
  {
    "name": "Elementium Longsword",
    "type": "Weapon",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "10x Enchanted Leather, 10x Righteous Orb"
  },
  {
    "name": "Fel-Infused Mace",
    "type": "Shield",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "17x Core Leather, 11x Core Leather"
  },
  {
    "name": "Void-Touched Greatsword",
    "type": "Shield",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "16x Core Leather, 11x Righteous Orb"
  },
  {
    "name": "True-Silver Wand",
    "type": "Weapon",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "8x Void Crystal, 11x Primal Hakkari Idol"
  },
  {
    "name": "Dream-Wrought Crossbow",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "7x Essence of Earth, 9x Dark Iron Bar"
  },
  {
    "name": "Void-Touched Staff",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "7x Thorium Bar, 8x Arcanite Bar"
  },
  {
    "name": "Titansteel Dagger",
    "type": "Weapon",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "16x Dark Iron Bar, 11x Arcanite Bar"
  },
  {
    "name": "Elementium Longsword",
    "type": "Shield",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "23x Thorium Bar, 5x Arcanite Bar"
  },
  {
    "name": "Dream-Wrought Greatsword",
    "type": "Heavy Armor",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "22x Dark Iron Bar, 7x Essence of Earth"
  },
  {
    "name": "Blood-forged Kris",
    "type": "Weapon",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "20x Righteous Orb, 9x Thorium Bar"
  },
  {
    "name": "Emerald Dirk",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "8x Arcanite Bar, 10x Essence of Fire"
  },
  {
    "name": "Elementium Dirk",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "6x Essence of Fire, 11x Essence of Earth"
  },
  {
    "name": "Scourge-Bane Warhammer",
    "type": "Weapon",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "7x Essence of Earth, 5x Void Crystal"
  },
  {
    "name": "Dragon-Bone Wand",
    "type": "Shield",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "10x Black Lotus, 11x Arcanite Bar"
  },
  {
    "name": "Dream-Wrought Mace",
    "type": "Shield",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "18x Elementium Ore, 10x Elementium Ore"
  },
  {
    "name": "Titansteel Battleaxe",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "12x Essence of Earth, 6x Void Crystal"
  },
  {
    "name": "Dream-Wrought Warhammer",
    "type": "Heavy Armor",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "17x Black Lotus, 9x Elementium Ore"
  },
  {
    "name": "Arcanite Mace",
    "type": "Weapon",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "24x Dark Iron Bar, 9x Righteous Orb"
  },
  {
    "name": "Void-Touched Greatsword",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "23x Righteous Orb, 9x Void Crystal"
  },
  {
    "name": "Obsidian Greataxe",
    "type": "Shield",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "6x Core Leather, 2x Thorium Bar"
  },
  {
    "name": "Scourge-Bane Dagger",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "14x Primal Hakkari Idol, 5x Void Crystal"
  },
  {
    "name": "Elementium Pike",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "13x Enchanted Leather, 7x Elementium Ore"
  },
  {
    "name": "Obsidian Dirk",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "10x Dark Iron Bar, 10x Black Lotus"
  },
  {
    "name": "Dream-Wrought Kris",
    "type": "Weapon",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "17x Righteous Orb, 5x Elementium Ore"
  },
  {
    "name": "Dark Iron Mace",
    "type": "Shield",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "6x Arcanite Bar, 7x Primal Hakkari Idol"
  },
  {
    "name": "Void-Touched Dirk",
    "type": "Shield",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "14x Core Leather, 8x Primal Hakkari Idol"
  },
  {
    "name": "Obsidian Halberd",
    "type": "Heavy Armor",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "9x Essence of Earth, 9x Thorium Bar"
  },
  {
    "name": "Arcanite Greataxe",
    "type": "Weapon",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "8x Essence of Earth, 7x Void Crystal"
  },
  {
    "name": "Dark Iron Crossbow",
    "type": "Shield",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "18x Essence of Fire, 3x Dark Iron Bar"
  },
  {
    "name": "Dark Iron Halberd",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "7x Enchanted Leather, 10x Righteous Orb"
  },
  {
    "name": "True-Silver Dirk",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "16x Primal Hakkari Idol, 10x Essence of Earth"
  },
  {
    "name": "Shadowflame Wand",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "13x Righteous Orb, 4x Primal Hakkari Idol"
  },
  {
    "name": "Emerald Greataxe",
    "type": "Shield",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "20x Essence of Earth, 10x Void Crystal"
  },
  {
    "name": "Emerald Wand",
    "type": "Weapon",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "20x Core Leather, 10x Dark Iron Bar"
  },
  {
    "name": "True-Silver Pike",
    "type": "Shield",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "21x Primal Hakkari Idol, 9x Essence of Earth"
  },
  {
    "name": "Blood-forged Pike",
    "type": "Heavy Armor",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "17x Nexus Crystal, 11x Void Crystal"
  },
  {
    "name": "Void-Touched Greatsword",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "15x Thorium Bar, 11x Essence of Earth"
  },
  {
    "name": "Shadowflame Kris",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "7x Core Leather, 11x Essence of Fire"
  },
  {
    "name": "Void-Touched Longbow",
    "type": "Weapon",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "5x Nexus Crystal, 9x Essence of Fire"
  },
  {
    "name": "Obsidian Dirk",
    "type": "Shield",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "20x Void Crystal, 3x Primal Hakkari Idol"
  },
  {
    "name": "Obsidian Warhammer",
    "type": "Shield",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "14x Void Crystal, 7x Nexus Crystal"
  },
  {
    "name": "Void-Touched Greatsword",
    "type": "Weapon",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "22x Black Lotus, 9x Enchanted Leather"
  },
  {
    "name": "Emerald Greataxe",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "11x Arcanite Bar, 8x Arcanite Bar"
  },
  {
    "name": "Emerald Longbow",
    "type": "Shield",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "5x Essence of Earth, 8x Black Lotus"
  },
  {
    "name": "Scourge-Bane Claymore",
    "type": "Heavy Armor",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "5x Essence of Earth, 2x Core Leather"
  },
  {
    "name": "Emerald Longbow",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "15x Essence of Fire, 3x Essence of Fire"
  },
  {
    "name": "Obsidian Dirk",
    "type": "Heavy Armor",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "19x Core Leather, 4x Enchanted Leather"
  },
  {
    "name": "Scourge-Bane Longsword",
    "type": "Shield",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "15x Black Lotus, 9x Nexus Crystal"
  },
  {
    "name": "Void-Touched Greataxe",
    "type": "Shield",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "8x Black Lotus, 5x Elementium Ore"
  },
  {
    "name": "Dream-Wrought Claymore",
    "type": "Weapon",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "12x Primal Hakkari Idol, 11x Nexus Crystal"
  },
  {
    "name": "Emerald Warhammer",
    "type": "Weapon",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "12x Black Lotus, 8x Righteous Orb"
  },
  {
    "name": "Shadowflame Claymore",
    "type": "Shield",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "7x Core Leather, 9x Nexus Crystal"
  },
  {
    "name": "Arcanite Greatsword",
    "type": "Shield",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "17x Enchanted Leather, 9x Dark Iron Bar"
  },
  {
    "name": "Emerald Blunderbuss",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "12x Elementium Ore, 10x Elementium Ore"
  },
  {
    "name": "Fel-Infused Longsword",
    "type": "Weapon",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "20x Essence of Fire, 4x Essence of Fire"
  },
  {
    "name": "Scourge-Bane Pike",
    "type": "Shield",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "10x Void Crystal, 8x Thorium Bar"
  },
  {
    "name": "Scourge-Bane Dagger",
    "type": "Weapon",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "19x Thorium Bar, 9x Dark Iron Bar"
  },
  {
    "name": "Dragon-Bone Wand",
    "type": "Shield",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "22x Righteous Orb, 11x Enchanted Leather"
  },
  {
    "name": "Dragon-Bone Warhammer",
    "type": "Weapon",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "22x Black Lotus, 7x Nexus Crystal"
  },
  {
    "name": "Elementium Staff",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "13x Essence of Earth, 7x Elementium Ore"
  },
  {
    "name": "Scourge-Bane Staff",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "5x Arcanite Bar, 2x Core Leather"
  },
  {
    "name": "Dream-Wrought Halberd",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "11x Righteous Orb, 7x Black Lotus"
  },
  {
    "name": "Elementium Greataxe",
    "type": "Shield",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "6x Black Lotus, 11x Righteous Orb"
  },
  {
    "name": "Fel-Infused Kris",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "10x Arcanite Bar, 5x Primal Hakkari Idol"
  },
  {
    "name": "Emerald Crossbow",
    "type": "Weapon",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "21x Righteous Orb, 10x Black Lotus"
  },
  {
    "name": "Scourge-Bane Dagger",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "14x Elementium Ore, 7x Elementium Ore"
  },
  {
    "name": "Dark Iron Dirk",
    "type": "Shield",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "6x Enchanted Leather, 9x Elementium Ore"
  },
  {
    "name": "Dream-Wrought Longbow",
    "type": "Shield",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "18x Essence of Earth, 11x Primal Hakkari Idol"
  },
  {
    "name": "Elementium Wand",
    "type": "Shield",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "24x Core Leather, 2x Arcanite Bar"
  },
  {
    "name": "Dark Iron Dagger",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "13x Righteous Orb, 9x Core Leather"
  },
  {
    "name": "Dream-Wrought Dagger",
    "type": "Weapon",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "11x Enchanted Leather, 3x Core Leather"
  },
  {
    "name": "Dream-Wrought Warhammer",
    "type": "Shield",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "14x Dark Iron Bar, 10x Void Crystal"
  },
  {
    "name": "Titansteel Dirk",
    "type": "Shield",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "17x Thorium Bar, 10x Core Leather"
  },
  {
    "name": "Elementium Crossbow",
    "type": "Heavy Armor",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "12x Essence of Earth, 9x Arcanite Bar"
  },
  {
    "name": "Emerald Greataxe",
    "type": "Shield",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "7x Thorium Bar, 7x Thorium Bar"
  },
  {
    "name": "Scourge-Bane Crossbow",
    "type": "Weapon",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "15x Nexus Crystal, 4x Arcanite Bar"
  },
  {
    "name": "Dragon-Bone Halberd",
    "type": "Shield",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "20x Void Crystal, 6x Primal Hakkari Idol"
  },
  {
    "name": "True-Silver Kris",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "12x Elementium Ore, 8x Dark Iron Bar"
  },
  {
    "name": "Void-Touched Greataxe",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "13x Enchanted Leather, 2x Black Lotus"
  },
  {
    "name": "Void-Touched Dagger",
    "type": "Shield",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "10x Primal Hakkari Idol, 2x Primal Hakkari Idol"
  },
  {
    "name": "Dream-Wrought Wand",
    "type": "Weapon",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "13x Essence of Earth, 7x Enchanted Leather"
  },
  {
    "name": "Emerald Staff",
    "type": "Shield",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "20x Arcanite Bar, 5x Arcanite Bar"
  },
  {
    "name": "Titansteel Kris",
    "type": "Heavy Armor",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "24x Primal Hakkari Idol, 8x Thorium Bar"
  },
  {
    "name": "Dragon-Bone Crossbow",
    "type": "Shield",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "5x Primal Hakkari Idol, 7x Essence of Earth"
  },
  {
    "name": "Obsidian Greatsword",
    "type": "Shield",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "22x Nexus Crystal, 5x Void Crystal"
  },
  {
    "name": "Fel-Infused Mace",
    "type": "Shield",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "24x Arcanite Bar, 4x Black Lotus"
  },
  {
    "name": "Shadowflame Dagger",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "5x Black Lotus, 8x Nexus Crystal"
  },
  {
    "name": "Shadowflame Greataxe",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "16x Elementium Ore, 9x Essence of Fire"
  },
  {
    "name": "Elementium Pike",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "13x Core Leather, 5x Core Leather"
  },
  {
    "name": "Dark Iron Longbow",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "17x Righteous Orb, 11x Primal Hakkari Idol"
  },
  {
    "name": "Dream-Wrought Halberd",
    "type": "Weapon",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "10x Void Crystal, 9x Righteous Orb"
  },
  {
    "name": "Fel-Infused Wand",
    "type": "Shield",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "10x Enchanted Leather, 7x Enchanted Leather"
  },
  {
    "name": "Blood-forged Greatsword",
    "type": "Weapon",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "14x Thorium Bar, 6x Dark Iron Bar"
  },
  {
    "name": "Obsidian Halberd",
    "type": "Weapon",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "5x Primal Hakkari Idol, 3x Essence of Fire"
  },
  {
    "name": "Titansteel Blunderbuss",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "16x Essence of Earth, 6x Essence of Fire"
  },
  {
    "name": "Dragon-Bone Staff",
    "type": "Weapon",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "12x Essence of Fire, 6x Black Lotus"
  },
  {
    "name": "Elementium Crossbow",
    "type": "Shield",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "21x Nexus Crystal, 11x Nexus Crystal"
  },
  {
    "name": "Dragon-Bone Warhammer",
    "type": "Shield",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "5x Thorium Bar, 9x Essence of Earth"
  },
  {
    "name": "Emerald Pike",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "20x Elementium Ore, 7x Elementium Ore"
  },
  {
    "name": "Dragon-Bone Greatsword",
    "type": "Shield",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "23x Black Lotus, 7x Primal Hakkari Idol"
  },
  {
    "name": "Titansteel Staff",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "11x Core Leather, 8x Void Crystal"
  },
  {
    "name": "Titansteel Halberd",
    "type": "Shield",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "22x Nexus Crystal, 5x Essence of Earth"
  },
  {
    "name": "Dream-Wrought Crossbow",
    "type": "Shield",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "14x Black Lotus, 11x Black Lotus"
  },
  {
    "name": "Dream-Wrought Pike",
    "type": "Shield",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "17x Arcanite Bar, 4x Void Crystal"
  },
  {
    "name": "Dragon-Bone Dirk",
    "type": "Weapon",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "14x Elementium Ore, 4x Enchanted Leather"
  },
  {
    "name": "Obsidian Wand",
    "type": "Shield",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "18x Essence of Fire, 5x Essence of Earth"
  },
  {
    "name": "Elementium Dagger",
    "type": "Heavy Armor",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "15x Void Crystal, 7x Thorium Bar"
  },
  {
    "name": "Shadowflame Staff",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "9x Thorium Bar, 8x Primal Hakkari Idol"
  },
  {
    "name": "Elementium Dagger",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "22x Black Lotus, 2x Enchanted Leather"
  },
  {
    "name": "Dream-Wrought Staff",
    "type": "Shield",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "16x Elementium Ore, 6x Thorium Bar"
  },
  {
    "name": "Dream-Wrought Warhammer",
    "type": "Shield",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "12x Arcanite Bar, 11x Core Leather"
  },
  {
    "name": "Shadowflame Warhammer",
    "type": "Shield",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "9x Primal Hakkari Idol, 8x Thorium Bar"
  },
  {
    "name": "Blood-forged Pike",
    "type": "Shield",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "20x Primal Hakkari Idol, 3x Essence of Fire"
  },
  {
    "name": "Emerald Pike",
    "type": "Shield",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "21x Black Lotus, 10x Core Leather"
  },
  {
    "name": "Dark Iron Crossbow",
    "type": "Weapon",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "7x Primal Hakkari Idol, 7x Nexus Crystal"
  },
  {
    "name": "Titansteel Halberd",
    "type": "Heavy Armor",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "19x Thorium Bar, 6x Core Leather"
  },
  {
    "name": "Fel-Infused Greataxe",
    "type": "Shield",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "24x Primal Hakkari Idol, 11x Essence of Earth"
  },
  {
    "name": "Dream-Wrought Blunderbuss",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "9x Elementium Ore, 11x Core Leather"
  },
  {
    "name": "Void-Touched Longsword",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "5x Enchanted Leather, 4x Void Crystal"
  },
  {
    "name": "Arcanite Claymore",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "20x Essence of Earth, 2x Void Crystal"
  },
  {
    "name": "Scourge-Bane Crossbow",
    "type": "Weapon",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "8x Black Lotus, 11x Arcanite Bar"
  },
  {
    "name": "Dragon-Bone Battleaxe",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "17x Dark Iron Bar, 11x Essence of Fire"
  },
  {
    "name": "Dream-Wrought Staff",
    "type": "Shield",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "12x Arcanite Bar, 5x Core Leather"
  },
  {
    "name": "Titansteel Warhammer",
    "type": "Shield",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "13x Essence of Earth, 5x Arcanite Bar"
  },
  {
    "name": "Emerald Kris",
    "type": "Shield",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "22x Primal Hakkari Idol, 2x Essence of Fire"
  },
  {
    "name": "Shadowflame Halberd",
    "type": "Heavy Armor",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "14x Enchanted Leather, 11x Black Lotus"
  },
  {
    "name": "Void-Touched Pike",
    "type": "Weapon",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "17x Core Leather, 11x Enchanted Leather"
  },
  {
    "name": "Obsidian Halberd",
    "type": "Heavy Armor",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "18x Primal Hakkari Idol, 2x Void Crystal"
  },
  {
    "name": "Void-Touched Kris",
    "type": "Heavy Armor",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "22x Enchanted Leather, 7x Essence of Earth"
  },
  {
    "name": "Titansteel Longbow",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "14x Nexus Crystal, 11x Arcanite Bar"
  },
  {
    "name": "Dream-Wrought Battleaxe",
    "type": "Heavy Armor",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "14x Arcanite Bar, 4x Thorium Bar"
  },
  {
    "name": "Blood-forged Staff",
    "type": "Weapon",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "22x Thorium Bar, 7x Righteous Orb"
  },
  {
    "name": "True-Silver Kris",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "9x Black Lotus, 5x Void Crystal"
  },
  {
    "name": "Dragon-Bone Crossbow",
    "type": "Weapon",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "6x Essence of Fire, 9x Nexus Crystal"
  },
  {
    "name": "True-Silver Crossbow",
    "type": "Heavy Armor",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "12x Essence of Fire, 9x Dark Iron Bar"
  },
  {
    "name": "Dragon-Bone Battleaxe",
    "type": "Weapon",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "17x Righteous Orb, 5x Righteous Orb"
  },
  {
    "name": "Elementium Longbow",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "19x Arcanite Bar, 9x Essence of Earth"
  },
  {
    "name": "Dragon-Bone Kris",
    "type": "Weapon",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "6x Void Crystal, 5x Elementium Ore"
  },
  {
    "name": "Dark Iron Kris",
    "type": "Weapon",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "13x Nexus Crystal, 2x Essence of Fire"
  },
  {
    "name": "Dragon-Bone Greatsword",
    "type": "Shield",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "20x Essence of Fire, 5x Dark Iron Bar"
  },
  {
    "name": "Dream-Wrought Battleaxe",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "10x Nexus Crystal, 2x Nexus Crystal"
  },
  {
    "name": "Void-Touched Longbow",
    "type": "Weapon",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "8x Essence of Earth, 4x Enchanted Leather"
  },
  {
    "name": "Dream-Wrought Longsword",
    "type": "Shield",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "12x Enchanted Leather, 9x Essence of Earth"
  },
  {
    "name": "Scourge-Bane Battleaxe",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "11x Enchanted Leather, 5x Righteous Orb"
  },
  {
    "name": "Emerald Dirk",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "24x Black Lotus, 4x Essence of Earth"
  },
  {
    "name": "Shadowflame Warhammer",
    "type": "Heavy Armor",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "16x Nexus Crystal, 4x Elementium Ore"
  },
  {
    "name": "Elementium Longsword",
    "type": "Shield",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "21x Thorium Bar, 8x Essence of Earth"
  },
  {
    "name": "True-Silver Longbow",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "10x Nexus Crystal, 6x Black Lotus"
  },
  {
    "name": "Shadowflame Battleaxe",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "13x Elementium Ore, 7x Core Leather"
  },
  {
    "name": "Shadowflame Longsword",
    "type": "Weapon",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "9x Black Lotus, 9x Righteous Orb"
  },
  {
    "name": "Dream-Wrought Warhammer",
    "type": "Weapon",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "7x Enchanted Leather, 4x Arcanite Bar"
  },
  {
    "name": "Void-Touched Longsword",
    "type": "Shield",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "7x Void Crystal, 7x Primal Hakkari Idol"
  },
  {
    "name": "Void-Touched Staff",
    "type": "Heavy Armor",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "22x Thorium Bar, 10x Thorium Bar"
  },
  {
    "name": "Dream-Wrought Longsword",
    "type": "Heavy Armor",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "6x Elementium Ore, 2x Thorium Bar"
  },
  {
    "name": "Dark Iron Halberd",
    "type": "Weapon",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "17x Dark Iron Bar, 9x Arcanite Bar"
  },
  {
    "name": "Titansteel Crossbow",
    "type": "Heavy Armor",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "22x Arcanite Bar, 7x Enchanted Leather"
  },
  {
    "name": "Emerald Greataxe",
    "type": "Weapon",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "22x Enchanted Leather, 4x Primal Hakkari Idol"
  },
  {
    "name": "Titansteel Dirk",
    "type": "Shield",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "22x Enchanted Leather, 5x Enchanted Leather"
  },
  {
    "name": "Scourge-Bane Claymore",
    "type": "Heavy Armor",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "20x Essence of Fire, 7x Essence of Fire"
  },
  {
    "name": "Dragon-Bone Warhammer",
    "type": "Shield",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "11x Black Lotus, 9x Dark Iron Bar"
  },
  {
    "name": "Elementium Wand",
    "type": "Weapon",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "7x Essence of Earth, 6x Essence of Earth"
  },
  {
    "name": "Shadowflame Greatsword",
    "type": "Shield",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "18x Righteous Orb, 3x Void Crystal"
  },
  {
    "name": "Obsidian Claymore",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "7x Core Leather, 11x Enchanted Leather"
  },
  {
    "name": "Scourge-Bane Blunderbuss",
    "type": "Weapon",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "14x Primal Hakkari Idol, 3x Arcanite Bar"
  },
  {
    "name": "Titansteel Blunderbuss",
    "type": "Shield",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "20x Black Lotus, 11x Nexus Crystal"
  },
  {
    "name": "Arcanite Claymore",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "21x Enchanted Leather, 2x Arcanite Bar"
  },
  {
    "name": "Scourge-Bane Longsword",
    "type": "Weapon",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "20x Essence of Earth, 7x Thorium Bar"
  },
  {
    "name": "Dark Iron Longbow",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "5x Enchanted Leather, 11x Core Leather"
  },
  {
    "name": "Dragon-Bone Longsword",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "6x Enchanted Leather, 5x Righteous Orb"
  },
  {
    "name": "Emerald Blunderbuss",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "12x Void Crystal, 8x Arcanite Bar"
  },
  {
    "name": "Titansteel Claymore",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "5x Arcanite Bar, 8x Essence of Earth"
  },
  {
    "name": "Arcanite Warhammer",
    "type": "Weapon",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "5x Core Leather, 5x Core Leather"
  },
  {
    "name": "Elementium Battleaxe",
    "type": "Shield",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "6x Thorium Bar, 11x Nexus Crystal"
  },
  {
    "name": "Arcanite Blunderbuss",
    "type": "Heavy Armor",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "9x Elementium Ore, 10x Thorium Bar"
  },
  {
    "name": "Obsidian Halberd",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "14x Dark Iron Bar, 4x Dark Iron Bar"
  },
  {
    "name": "Shadowflame Kris",
    "type": "Weapon",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "22x Dark Iron Bar, 3x Dark Iron Bar"
  },
  {
    "name": "Emerald Kris",
    "type": "Weapon",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "10x Dark Iron Bar, 9x Core Leather"
  },
  {
    "name": "Emerald Warhammer",
    "type": "Shield",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "7x Core Leather, 3x Thorium Bar"
  },
  {
    "name": "Scourge-Bane Claymore",
    "type": "Heavy Armor",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "24x Essence of Fire, 7x Essence of Fire"
  },
  {
    "name": "Titansteel Dagger",
    "type": "Heavy Armor",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "12x Essence of Fire, 7x Thorium Bar"
  },
  {
    "name": "Obsidian Warhammer",
    "type": "Weapon",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "22x Righteous Orb, 3x Thorium Bar"
  },
  {
    "name": "Emerald Battleaxe",
    "type": "Weapon",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "12x Elementium Ore, 9x Nexus Crystal"
  },
  {
    "name": "Arcanite Staff",
    "type": "Shield",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "18x Dark Iron Bar, 8x Righteous Orb"
  }
]
    },
    {
      id: 'Alchemy',
      name: 'Alchemy',
      icon: '🧪',
      description: 'Alchemists delve into forbidden mutagenesis. Displaying 150+ new experimental concoctions.',
      recipes: [
  {
    "name": "Elixir of True Sight",
    "type": "Elixir",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "5x Nexus Crystal, 6x Elementium Ore"
  },
  {
    "name": "Elixir of the Emerald Dream",
    "type": "Transmute",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "8x Essence of Earth, 6x Elementium Ore"
  },
  {
    "name": "Potion of True Sight",
    "type": "Transmute",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "20x Elementium Ore, 11x Essence of Earth"
  },
  {
    "name": "Potion of Berserker's Rage",
    "type": "Potion",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "7x Primal Hakkari Idol, 6x Dark Iron Bar"
  },
  {
    "name": "Vial of the Emerald Dream",
    "type": "Elixir",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "7x Dark Iron Bar, 4x Essence of Fire"
  },
  {
    "name": "Elixir of Iron Will",
    "type": "Potion",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "8x Essence of Earth, 4x Arcanite Bar"
  },
  {
    "name": "Vial of Shadow-Walking",
    "type": "Flask",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "24x Dark Iron Bar, 9x Enchanted Leather"
  },
  {
    "name": "Vial of the Naga",
    "type": "Flask",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "17x Essence of Fire, 11x Void Crystal"
  },
  {
    "name": "Flask of Pure Magic",
    "type": "Elixir",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "18x Black Lotus, 8x Core Leather"
  },
  {
    "name": "Elixir of the Naga",
    "type": "Flask",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "5x Void Crystal, 5x Nexus Crystal"
  },
  {
    "name": "Flask of Berserker's Rage",
    "type": "Flask",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "13x Black Lotus, 11x Dark Iron Bar"
  },
  {
    "name": "Potion of Shadow-Walking",
    "type": "Flask",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "5x Arcanite Bar, 5x Elementium Ore"
  },
  {
    "name": "Elixir of True Sight",
    "type": "Potion",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "18x Arcanite Bar, 9x Enchanted Leather"
  },
  {
    "name": "Elixir of the Emerald Dream",
    "type": "Transmute",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "5x Primal Hakkari Idol, 7x Void Crystal"
  },
  {
    "name": "Potion of the Titan",
    "type": "Transmute",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "21x Enchanted Leather, 11x Elementium Ore"
  },
  {
    "name": "Flask of the Titan",
    "type": "Transmute",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "13x Enchanted Leather, 11x Essence of Fire"
  },
  {
    "name": "Potion of the Titan",
    "type": "Flask",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "13x Essence of Earth, 10x Void Crystal"
  },
  {
    "name": "Elixir of the Titan",
    "type": "Transmute",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "22x Void Crystal, 4x Arcanite Bar"
  },
  {
    "name": "Vial of Liquid Fire",
    "type": "Transmute",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "6x Core Leather, 3x Nexus Crystal"
  },
  {
    "name": "Elixir of the Naga",
    "type": "Transmute",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "19x Essence of Earth, 8x Nexus Crystal"
  },
  {
    "name": "Elixir of the Titan",
    "type": "Flask",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "13x Dark Iron Bar, 8x Primal Hakkari Idol"
  },
  {
    "name": "Potion of the Emerald Dream",
    "type": "Transmute",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "24x Primal Hakkari Idol, 4x Black Lotus"
  },
  {
    "name": "Vial of Iron Will",
    "type": "Flask",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "23x Essence of Fire, 9x Core Leather"
  },
  {
    "name": "Potion of Iron Will",
    "type": "Transmute",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "22x Elementium Ore, 2x Essence of Earth"
  },
  {
    "name": "Elixir of Berserker's Rage",
    "type": "Elixir",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "19x Core Leather, 2x Dark Iron Bar"
  },
  {
    "name": "Flask of the Titan",
    "type": "Elixir",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "19x Arcanite Bar, 3x Core Leather"
  },
  {
    "name": "Flask of the Emerald Dream",
    "type": "Elixir",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "24x Enchanted Leather, 8x Righteous Orb"
  },
  {
    "name": "Potion of the Titan",
    "type": "Elixir",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "21x Enchanted Leather, 8x Essence of Earth"
  },
  {
    "name": "Elixir of True Sight",
    "type": "Potion",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "15x Core Leather, 3x Enchanted Leather"
  },
  {
    "name": "Flask of Liquid Fire",
    "type": "Potion",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "8x Essence of Earth, 4x Primal Hakkari Idol"
  },
  {
    "name": "Potion of Berserker's Rage",
    "type": "Transmute",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "16x Nexus Crystal, 5x Core Leather"
  },
  {
    "name": "Vial of Pure Magic",
    "type": "Potion",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "12x Righteous Orb, 2x Primal Hakkari Idol"
  },
  {
    "name": "Vial of True Sight",
    "type": "Transmute",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "17x Primal Hakkari Idol, 3x Arcanite Bar"
  },
  {
    "name": "Potion of the Titan",
    "type": "Flask",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "10x Elementium Ore, 8x Essence of Earth"
  },
  {
    "name": "Flask of True Sight",
    "type": "Transmute",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "21x Black Lotus, 8x Enchanted Leather"
  },
  {
    "name": "Flask of Shadow-Walking",
    "type": "Potion",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "9x Thorium Bar, 10x Righteous Orb"
  },
  {
    "name": "Elixir of Pure Magic",
    "type": "Transmute",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "17x Thorium Bar, 2x Thorium Bar"
  },
  {
    "name": "Potion of Liquid Fire",
    "type": "Transmute",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "18x Essence of Earth, 6x Elementium Ore"
  },
  {
    "name": "Vial of Iron Will",
    "type": "Elixir",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "18x Nexus Crystal, 8x Enchanted Leather"
  },
  {
    "name": "Flask of Iron Will",
    "type": "Flask",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "13x Essence of Earth, 6x Primal Hakkari Idol"
  },
  {
    "name": "Potion of Iron Will",
    "type": "Transmute",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "20x Arcanite Bar, 7x Void Crystal"
  },
  {
    "name": "Potion of Iron Will",
    "type": "Potion",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "6x Essence of Earth, 5x Arcanite Bar"
  },
  {
    "name": "Potion of Berserker's Rage",
    "type": "Transmute",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "9x Essence of Earth, 10x Arcanite Bar"
  },
  {
    "name": "Potion of Iron Will",
    "type": "Flask",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "22x Enchanted Leather, 7x Essence of Fire"
  },
  {
    "name": "Potion of Liquid Fire",
    "type": "Transmute",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "10x Void Crystal, 5x Enchanted Leather"
  },
  {
    "name": "Flask of Pure Magic",
    "type": "Elixir",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "13x Primal Hakkari Idol, 10x Enchanted Leather"
  },
  {
    "name": "Vial of Shadow-Walking",
    "type": "Transmute",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "11x Enchanted Leather, 6x Primal Hakkari Idol"
  },
  {
    "name": "Vial of Shadow-Walking",
    "type": "Potion",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "22x Core Leather, 7x Thorium Bar"
  },
  {
    "name": "Vial of the Titan",
    "type": "Flask",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "6x Dark Iron Bar, 5x Essence of Fire"
  },
  {
    "name": "Vial of the Mad Alchemist",
    "type": "Elixir",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "16x Righteous Orb, 6x Void Crystal"
  },
  {
    "name": "Vial of the Naga",
    "type": "Elixir",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "14x Elementium Ore, 8x Dark Iron Bar"
  },
  {
    "name": "Vial of Liquid Fire",
    "type": "Transmute",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "22x Essence of Earth, 10x Enchanted Leather"
  },
  {
    "name": "Flask of Shadow-Walking",
    "type": "Transmute",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "17x Essence of Earth, 3x Elementium Ore"
  },
  {
    "name": "Potion of True Sight",
    "type": "Potion",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "7x Essence of Fire, 4x Primal Hakkari Idol"
  },
  {
    "name": "Vial of True Sight",
    "type": "Potion",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "5x Enchanted Leather, 10x Void Crystal"
  },
  {
    "name": "Potion of Iron Will",
    "type": "Potion",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "9x Primal Hakkari Idol, 10x Void Crystal"
  },
  {
    "name": "Vial of the Naga",
    "type": "Potion",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "24x Black Lotus, 5x Righteous Orb"
  },
  {
    "name": "Flask of Shadow-Walking",
    "type": "Flask",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "11x Elementium Ore, 6x Essence of Earth"
  },
  {
    "name": "Vial of Iron Will",
    "type": "Transmute",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "16x Black Lotus, 10x Black Lotus"
  },
  {
    "name": "Vial of True Sight",
    "type": "Flask",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "20x Dark Iron Bar, 7x Nexus Crystal"
  },
  {
    "name": "Potion of the Titan",
    "type": "Elixir",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "14x Primal Hakkari Idol, 7x Righteous Orb"
  },
  {
    "name": "Vial of Shadow-Walking",
    "type": "Elixir",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "22x Righteous Orb, 7x Core Leather"
  },
  {
    "name": "Potion of Berserker's Rage",
    "type": "Elixir",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "13x Nexus Crystal, 3x Elementium Ore"
  },
  {
    "name": "Potion of Liquid Fire",
    "type": "Elixir",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "15x Enchanted Leather, 7x Arcanite Bar"
  },
  {
    "name": "Vial of Shadow-Walking",
    "type": "Flask",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "12x Righteous Orb, 9x Void Crystal"
  },
  {
    "name": "Potion of Shadow-Walking",
    "type": "Potion",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "16x Essence of Earth, 11x Essence of Earth"
  },
  {
    "name": "Potion of the Naga",
    "type": "Transmute",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "5x Thorium Bar, 10x Thorium Bar"
  },
  {
    "name": "Elixir of the Titan",
    "type": "Flask",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "18x Enchanted Leather, 5x Righteous Orb"
  },
  {
    "name": "Potion of Berserker's Rage",
    "type": "Transmute",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "15x Nexus Crystal, 2x Thorium Bar"
  },
  {
    "name": "Elixir of Iron Will",
    "type": "Potion",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "5x Core Leather, 7x Arcanite Bar"
  },
  {
    "name": "Flask of Shadow-Walking",
    "type": "Transmute",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "22x Dark Iron Bar, 10x Nexus Crystal"
  },
  {
    "name": "Vial of Berserker's Rage",
    "type": "Flask",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "8x Primal Hakkari Idol, 7x Elementium Ore"
  },
  {
    "name": "Potion of Liquid Fire",
    "type": "Elixir",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "8x Void Crystal, 4x Black Lotus"
  },
  {
    "name": "Elixir of Pure Magic",
    "type": "Flask",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "7x Arcanite Bar, 7x Arcanite Bar"
  },
  {
    "name": "Potion of Pure Magic",
    "type": "Transmute",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "17x Essence of Earth, 10x Essence of Fire"
  },
  {
    "name": "Elixir of Shadow-Walking",
    "type": "Elixir",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "5x Core Leather, 6x Dark Iron Bar"
  },
  {
    "name": "Flask of the Titan",
    "type": "Potion",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "9x Core Leather, 4x Black Lotus"
  },
  {
    "name": "Flask of Liquid Fire",
    "type": "Flask",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "20x Righteous Orb, 2x Enchanted Leather"
  },
  {
    "name": "Elixir of the Emerald Dream",
    "type": "Potion",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "8x Elementium Ore, 10x Void Crystal"
  },
  {
    "name": "Potion of the Mad Alchemist",
    "type": "Transmute",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "18x Elementium Ore, 6x Thorium Bar"
  },
  {
    "name": "Vial of Liquid Fire",
    "type": "Elixir",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "14x Primal Hakkari Idol, 3x Essence of Fire"
  },
  {
    "name": "Flask of Pure Magic",
    "type": "Potion",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "18x Arcanite Bar, 3x Void Crystal"
  },
  {
    "name": "Vial of the Emerald Dream",
    "type": "Potion",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "12x Essence of Fire, 7x Black Lotus"
  },
  {
    "name": "Elixir of Liquid Fire",
    "type": "Transmute",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "15x Elementium Ore, 10x Dark Iron Bar"
  },
  {
    "name": "Vial of the Titan",
    "type": "Potion",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "19x Nexus Crystal, 6x Core Leather"
  },
  {
    "name": "Vial of the Mad Alchemist",
    "type": "Transmute",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "14x Nexus Crystal, 8x Dark Iron Bar"
  },
  {
    "name": "Potion of Iron Will",
    "type": "Flask",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "18x Primal Hakkari Idol, 4x Black Lotus"
  },
  {
    "name": "Flask of the Titan",
    "type": "Elixir",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "19x Essence of Fire, 3x Arcanite Bar"
  },
  {
    "name": "Vial of the Emerald Dream",
    "type": "Flask",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "20x Enchanted Leather, 11x Primal Hakkari Idol"
  },
  {
    "name": "Flask of Shadow-Walking",
    "type": "Transmute",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "15x Void Crystal, 9x Arcanite Bar"
  },
  {
    "name": "Flask of the Titan",
    "type": "Potion",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "7x Righteous Orb, 5x Arcanite Bar"
  },
  {
    "name": "Vial of Iron Will",
    "type": "Flask",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "6x Dark Iron Bar, 5x Black Lotus"
  },
  {
    "name": "Elixir of Pure Magic",
    "type": "Transmute",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "7x Enchanted Leather, 4x Thorium Bar"
  },
  {
    "name": "Elixir of the Emerald Dream",
    "type": "Potion",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "7x Essence of Fire, 7x Void Crystal"
  },
  {
    "name": "Elixir of the Titan",
    "type": "Transmute",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "23x Nexus Crystal, 6x Void Crystal"
  },
  {
    "name": "Elixir of Berserker's Rage",
    "type": "Potion",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "17x Dark Iron Bar, 3x Nexus Crystal"
  },
  {
    "name": "Potion of Iron Will",
    "type": "Elixir",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "11x Primal Hakkari Idol, 7x Enchanted Leather"
  },
  {
    "name": "Potion of Liquid Fire",
    "type": "Transmute",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "7x Nexus Crystal, 6x Elementium Ore"
  },
  {
    "name": "Potion of the Mad Alchemist",
    "type": "Transmute",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "11x Essence of Earth, 4x Righteous Orb"
  },
  {
    "name": "Elixir of True Sight",
    "type": "Flask",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "8x Enchanted Leather, 7x Thorium Bar"
  },
  {
    "name": "Elixir of Iron Will",
    "type": "Transmute",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "24x Core Leather, 8x Core Leather"
  },
  {
    "name": "Elixir of the Naga",
    "type": "Transmute",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "22x Dark Iron Bar, 4x Nexus Crystal"
  },
  {
    "name": "Vial of the Naga",
    "type": "Flask",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "9x Essence of Fire, 9x Primal Hakkari Idol"
  },
  {
    "name": "Elixir of the Mad Alchemist",
    "type": "Elixir",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "7x Primal Hakkari Idol, 9x Essence of Earth"
  },
  {
    "name": "Vial of the Emerald Dream",
    "type": "Potion",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "10x Primal Hakkari Idol, 5x Essence of Fire"
  },
  {
    "name": "Vial of Liquid Fire",
    "type": "Transmute",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "21x Primal Hakkari Idol, 11x Essence of Earth"
  },
  {
    "name": "Elixir of Pure Magic",
    "type": "Elixir",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "5x Nexus Crystal, 4x Arcanite Bar"
  },
  {
    "name": "Flask of Shadow-Walking",
    "type": "Elixir",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "8x Black Lotus, 8x Essence of Fire"
  },
  {
    "name": "Flask of the Naga",
    "type": "Potion",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "15x Primal Hakkari Idol, 9x Void Crystal"
  },
  {
    "name": "Potion of True Sight",
    "type": "Elixir",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "21x Void Crystal, 7x Primal Hakkari Idol"
  },
  {
    "name": "Elixir of True Sight",
    "type": "Potion",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "6x Core Leather, 2x Core Leather"
  },
  {
    "name": "Potion of True Sight",
    "type": "Transmute",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "19x Primal Hakkari Idol, 8x Void Crystal"
  },
  {
    "name": "Vial of Iron Will",
    "type": "Transmute",
    "effect": "Chance on hit: Silences the target for 3 sec.",
    "mats": "11x Primal Hakkari Idol, 5x Core Leather"
  },
  {
    "name": "Potion of Liquid Fire",
    "type": "Elixir",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "5x Primal Hakkari Idol, 6x Essence of Fire"
  },
  {
    "name": "Elixir of Berserker's Rage",
    "type": "Potion",
    "effect": "Equip: Increases critical strike chance by 2%.",
    "mats": "16x Essence of Fire, 11x Thorium Bar"
  },
  {
    "name": "Potion of Liquid Fire",
    "type": "Potion",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "17x Elementium Ore, 8x Black Lotus"
  },
  {
    "name": "Vial of True Sight",
    "type": "Flask",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "23x Essence of Earth, 11x Enchanted Leather"
  },
  {
    "name": "Vial of the Mad Alchemist",
    "type": "Potion",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "11x Righteous Orb, 11x Elementium Ore"
  },
  {
    "name": "Potion of the Titan",
    "type": "Flask",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "11x Core Leather, 2x Enchanted Leather"
  },
  {
    "name": "Potion of the Naga",
    "type": "Elixir",
    "effect": "Equip: Reduces armor of the target by 100 on hit.",
    "mats": "24x Core Leather, 4x Enchanted Leather"
  },
  {
    "name": "Potion of Shadow-Walking",
    "type": "Potion",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "21x Elementium Ore, 3x Elementium Ore"
  },
  {
    "name": "Flask of True Sight",
    "type": "Transmute",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "24x Essence of Fire, 9x Primal Hakkari Idol"
  },
  {
    "name": "Flask of Berserker's Rage",
    "type": "Transmute",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "10x Elementium Ore, 7x Essence of Fire"
  },
  {
    "name": "Potion of the Titan",
    "type": "Elixir",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "19x Essence of Earth, 8x Essence of Fire"
  },
  {
    "name": "Potion of the Emerald Dream",
    "type": "Flask",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "21x Enchanted Leather, 9x Void Crystal"
  },
  {
    "name": "Vial of the Naga",
    "type": "Flask",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "18x Thorium Bar, 5x Essence of Fire"
  },
  {
    "name": "Flask of the Titan",
    "type": "Transmute",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "11x Core Leather, 5x Enchanted Leather"
  },
  {
    "name": "Elixir of Pure Magic",
    "type": "Transmute",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "11x Enchanted Leather, 2x Void Crystal"
  },
  {
    "name": "Potion of Berserker's Rage",
    "type": "Potion",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "22x Essence of Fire, 5x Nexus Crystal"
  },
  {
    "name": "Elixir of the Naga",
    "type": "Elixir",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "17x Essence of Fire, 11x Primal Hakkari Idol"
  },
  {
    "name": "Flask of the Naga",
    "type": "Potion",
    "effect": "Chance on hit: Blasts the target for 150 Fire damage.",
    "mats": "6x Arcanite Bar, 10x Enchanted Leather"
  },
  {
    "name": "Elixir of the Mad Alchemist",
    "type": "Potion",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "10x Primal Hakkari Idol, 6x Thorium Bar"
  },
  {
    "name": "Potion of Berserker's Rage",
    "type": "Elixir",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "18x Core Leather, 3x Core Leather"
  },
  {
    "name": "Flask of the Emerald Dream",
    "type": "Transmute",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "21x Primal Hakkari Idol, 8x Black Lotus"
  },
  {
    "name": "Flask of Pure Magic",
    "type": "Potion",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "18x Righteous Orb, 10x Nexus Crystal"
  },
  {
    "name": "Elixir of the Mad Alchemist",
    "type": "Transmute",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "9x Enchanted Leather, 3x Essence of Earth"
  },
  {
    "name": "Flask of Pure Magic",
    "type": "Transmute",
    "effect": "Equip: Increases damage done to Undead by 5%.",
    "mats": "8x Righteous Orb, 8x Righteous Orb"
  },
  {
    "name": "Potion of Berserker's Rage",
    "type": "Transmute",
    "effect": "Equip: Your attacks ignore 10% of the target's armor.",
    "mats": "24x Dark Iron Bar, 6x Enchanted Leather"
  },
  {
    "name": "Potion of the Mad Alchemist",
    "type": "Potion",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "18x Essence of Fire, 2x Righteous Orb"
  },
  {
    "name": "Vial of Liquid Fire",
    "type": "Transmute",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "19x Arcanite Bar, 7x Black Lotus"
  },
  {
    "name": "Vial of the Mad Alchemist",
    "type": "Transmute",
    "effect": "Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.",
    "mats": "11x Righteous Orb, 3x Righteous Orb"
  },
  {
    "name": "Flask of Shadow-Walking",
    "type": "Flask",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "14x Void Crystal, 11x Thorium Bar"
  },
  {
    "name": "Vial of the Emerald Dream",
    "type": "Potion",
    "effect": "Equip: +40 Resistance to all magic.",
    "mats": "6x Elementium Ore, 8x Void Crystal"
  },
  {
    "name": "Vial of the Titan",
    "type": "Elixir",
    "effect": "Chance on hit: Increases melee haste by 10% for 10 sec.",
    "mats": "19x Dark Iron Bar, 10x Righteous Orb"
  },
  {
    "name": "Flask of the Mad Alchemist",
    "type": "Transmute",
    "effect": "Equip: Increases attack power by 50.",
    "mats": "15x Enchanted Leather, 9x Thorium Bar"
  },
  {
    "name": "Vial of the Mad Alchemist",
    "type": "Elixir",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "10x Black Lotus, 8x Void Crystal"
  },
  {
    "name": "Flask of the Naga",
    "type": "Transmute",
    "effect": "Chance on hit: Siphons 50 health from the target.",
    "mats": "11x Righteous Orb, 7x Core Leather"
  },
  {
    "name": "Vial of Berserker's Rage",
    "type": "Elixir",
    "effect": "Equip: Grants immunity to Fear for the first 5 seconds of combat.",
    "mats": "14x Essence of Earth, 6x Elementium Ore"
  },
  {
    "name": "Elixir of Iron Will",
    "type": "Transmute",
    "effect": "Equip: Reduces physical damage taken by 5%.",
    "mats": "23x Arcanite Bar, 11x Righteous Orb"
  },
  {
    "name": "Flask of Liquid Fire",
    "type": "Flask",
    "effect": "Chance on hit: Freezes the target to the ground for 5 sec.",
    "mats": "8x Thorium Bar, 4x Core Leather"
  }
]
    }
  ]
};
