const fs = require('fs');

const weapons = ['Longsword', 'Battleaxe', 'Warhammer', 'Greatsword', 'Halberd', 'Dagger', 'Mace', 'Staff', 'Wand', 'Crossbow', 'Blunderbuss', 'Longbow', 'Dirk', 'Claymore', 'Kris', 'Pike', 'Greataxe'];
const prefixes = ['Arcanite', 'Dark Iron', 'Titansteel', 'Obsidian', 'Blood-forged', 'Void-Touched', 'Shadowflame', 'True-Silver', 'Fel-Infused', 'Emerald', 'Dream-Wrought', 'Scourge-Bane', 'Dragon-Bone', 'Elementium'];
const effects = [
  'Chance on hit: Blasts the target for 150 Fire damage.',
  'Equip: Increases attack power by 50.',
  'Chance on hit: Siphons 50 health from the target.',
  'Equip: Increases critical strike chance by 2%.',
  'Equip: Reduces armor of the target by 100 on hit.',
  'Equip: Grants immunity to Fear for the first 5 seconds of combat.',
  'Chance on hit: Increases melee haste by 10% for 10 sec.',
  'Equip: +40 Resistance to all magic.',
  'Equip: Your attacks ignore 10% of the target\'s armor.',
  'Chance on hit: Silences the target for 3 sec.',
  'Equip: Increases damage done to Undead by 5%.',
  'Chance on hit: Summons a fiery familiar to fight by your side for 15 sec.',
  'Equip: Reduces physical damage taken by 5%.',
  'Chance on hit: Freezes the target to the ground for 5 sec.'
];
const materials = ['Arcanite Bar', 'Thorium Bar', 'Dark Iron Bar', 'Nexus Crystal', 'Righteous Orb', 'Essence of Fire', 'Essence of Earth', 'Core Leather', 'Enchanted Leather', 'Black Lotus', 'Elementium Ore', 'Void Crystal', 'Primal Hakkari Idol'];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRecipes(count, typeGen, nameGen) {
  const recipes = [];
  for (let i = 0; i < count; i++) {
    recipes.push({
      name: nameGen(),
      type: typeGen(),
      effect: getRandom(effects),
      mats: `${Math.floor(Math.random() * 20 + 5)}x ${getRandom(materials)}, ${Math.floor(Math.random() * 10 + 2)}x ${getRandom(materials)}`
    });
  }
  return recipes;
}

const bsRecipes = generateRecipes(200, () => getRandom(['Weapon', 'Heavy Armor', 'Shield']), () => `${getRandom(prefixes)} ${getRandom(weapons)}`);
const alchRecipes = generateRecipes(150, () => getRandom(['Flask', 'Elixir', 'Potion', 'Transmute']), () => `${getRandom(['Flask of', 'Elixir of', 'Potion of', 'Vial of'])} ${getRandom(['the Titan', 'True Sight', 'Shadow-Walking', 'the Emerald Dream', 'Liquid Fire', 'Iron Will', 'the Naga', 'Pure Magic', 'the Mad Alchemist', 'Berserker\'s Rage'])}`);
const engRecipes = generateRecipes(150, () => getRandom(['Gadget', 'Explosive', 'Scope', 'Trinket', 'Mount']), () => `${getRandom(['Gnomish', 'Goblin', 'Ultrasafe', 'Experimental', 'Volatile'])} ${getRandom(['Rocket-Pack', 'Defibrillator', 'Death-Ray', 'Shrink Ray', 'Net-o-Matic', 'Mind Control Cap', 'Battle Chicken', 'Repair Bot', 'Teleporter'])}`);


const tsFile = `export const PROF_CATS = {
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
      recipes: ${JSON.stringify(engRecipes, null, 2)}
    },
    {
      id: 'Blacksmithing',
      name: 'Blacksmithing',
      icon: '🔨',
      description: 'The absolute masters of the endgame economy. Displaying 200+ new weapons and armor pieces.',
      recipes: ${JSON.stringify(bsRecipes, null, 2)}
    },
    {
      id: 'Alchemy',
      name: 'Alchemy',
      icon: '🧪',
      description: 'Alchemists delve into forbidden mutagenesis. Displaying 150+ new experimental concoctions.',
      recipes: ${JSON.stringify(alchRecipes, null, 2)}
    }
  ]
};
`;

fs.writeFileSync('./src/data/professions.ts', tsFile);
console.log('Successfully wrote 500+ recipes to professions.ts');
