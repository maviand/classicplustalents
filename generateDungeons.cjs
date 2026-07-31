const fs = require('fs');

const dPrefixes = ['Band of', 'Helm of', 'Pauldrons of', 'Breastplate of', 'Legguards of', 'Sabatons of', 'Amulet of', 'Signet of', 'Cloak of', 'Tome of'];
const dSuffixes = ['the Crimson King', 'the Unseen', 'Eternal Slumber', 'the Archmage', 'Shattered Souls', 'the Forgotten', 'the Void', 'Bloodletting', 'the Deep', 'the Betrayer'];
const dEffects = [
  'Equip: Increases healing done by up to 25.',
  'Equip: +1% Critical Strike.',
  'Equip: +1% Hit chance.',
  'Equip: +20 Attack Power.',
  'Equip: Restores 4 mana per 5 seconds.',
  'Equip: Increases your chance to block attacks with a shield by 2%.',
  'Equip: +10 Shadow Resistance.',
  'Equip: Increases spell damage by up to 15.',
  'Equip: Your attacks have a chance to sunder the target\'s armor.',
  'Use: Absorbs 500 magic damage for 10 sec.'
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateLoot(count) {
  const loot = [];
  for (let i = 0; i < count; i++) {
    loot.push({
      name: `${getRandom(dPrefixes)} ${getRandom(dSuffixes)}`,
      type: getRandom(['Plate', 'Mail', 'Leather', 'Cloth', 'Ring', 'Trinket', 'Weapon']),
      effect: getRandom(dEffects)
    });
  }
  return loot;
}

const dungeons = [
  {
    id: 'StormwindVault',
    name: 'Stormwind Vaults',
    wings: [
      { name: 'The Upper Brig', level: '25-30', desc: 'The holding cells.', bosses: ['Warden Thelwater', 'Targorr the Dread'], loot: generateLoot(10) },
      { name: 'The Deep Cellblocks', level: '45-50', desc: 'Where the true enemies are kept.', bosses: ['High Cultist Zenn', 'Dextren Ward'], loot: generateLoot(15) },
      { name: 'The Interrogation Levels', level: '55-60', desc: 'A descent into madness.', bosses: ['Interrogator Vishas', 'The Flesh-Shaper'], loot: generateLoot(25) }
    ]
  },
  {
    id: 'KarazhanCrypts',
    name: 'Karazhan Crypts',
    wings: [
      { name: 'The Well of the Forgotten', level: '58-60', desc: 'Mass graves.', bosses: ['The Caretaker', 'Amalgam of the Damned'], loot: generateLoot(25) },
      { name: 'The Upside-Down Sinners', level: '60', desc: 'Underwater terror.', bosses: ['The Drowning Terror', 'Master of the Sinners'], loot: generateLoot(30) },
      { name: 'The Reliquary of Secrets', level: '60', desc: 'Forbidden artifacts.', bosses: ['The Animated Grimoire', 'The Void-Sealer'], loot: generateLoot(30) }
    ]
  },
  {
    id: 'TimbermawHold',
    name: 'Timbermaw Hold',
    wings: [
      { name: 'The Corrupted Warrens', level: '48-52', desc: 'Besieged hold.', bosses: ['Chieftain Bloodmaw', 'The Rotting Ancient'], loot: generateLoot(15) },
      { name: 'The Fel-Scar', level: '55-58', desc: 'Demonic incursion.', bosses: ['Xandros the Fel-Lord', 'The Summoning Portal'], loot: generateLoot(20) },
      { name: 'The Ancestral Hollow', level: '60', desc: 'Defiled burial grounds.', bosses: ['The First Chieftain', 'The Defiler'], loot: generateLoot(30) }
    ]
  },
  {
    id: 'UldumVaults',
    name: 'The Vaults of Uldum',
    wings: [
      { name: 'The Maker\'s Terrace', level: '55-58', desc: 'Titan facility.', bosses: ['High-Executor Norgannon', 'Matrix-Lord'], loot: generateLoot(20) },
      { name: 'The Obsidian Quarry', level: '58-60', desc: 'Construct manufacturing.', bosses: ['The Sculptor', 'The Hive-Mind Incursor'], loot: generateLoot(25) },
      { name: 'The Engine of Origination', level: '60', desc: 'The core.', bosses: ['General Rajaxx\'s Vanguard', 'Avatar of the Makers'], loot: generateLoot(40) }
    ]
  },
  {
    id: 'GrimBatol',
    name: 'Grim Batol Tunnels',
    wings: [
      { name: 'The Dragonmaw Gates', level: '52-55', desc: 'Fortified entrance.', bosses: ['The Siege Master', 'Dragonmaw Proto-Drake'], loot: generateLoot(15) },
      { name: 'The Hatcheries', level: '55-58', desc: 'Red Dragonflight breeding.', bosses: ['The Broodmother', 'The Corrupted Whelp-Master'], loot: generateLoot(20) },
      { name: 'The Deep Forge', level: '60', desc: 'Wildhammer forges.', bosses: ['The Grand Smith', 'The Anvil of Doom'], loot: generateLoot(30) }
    ]
  },
  {
    id: 'HyjalBarrowDens',
    name: 'The Barrow Dens',
    wings: [
      { name: 'The Slumbering Halls', level: '58-60', desc: 'Nightmare.', bosses: ['The Nightmare Stalker', 'The Waking Terror'], loot: generateLoot(25) },
      { name: 'The Roots of Nordrassil', level: '60', desc: 'Deep caverns.', bosses: ['Archimonde\'s Echo', 'The Root-Tender'], loot: generateLoot(30) }
    ]
  },
  {
    id: 'Mazthoril',
    name: 'Mazthoril Deeps',
    wings: [
      { name: 'The Arcane Vaults', level: '55-60', desc: 'Blue Dragonflight archive.', bosses: ['The Archivist', 'Haleh\'s Betrayer'], loot: generateLoot(25) }
    ]
  },
  {
    id: 'GilneasCity',
    name: 'Gilneas City (Instanced)',
    wings: [
      { name: 'The Greymane District', level: '45-50', desc: 'Burning capital.', bosses: ['Lord Godfrey', 'The Royal Guard'], loot: generateLoot(20) }
    ]
  },
  {
    id: 'GnomereganDeeps',
    name: 'Gnomeregan Deeps',
    wings: [
      { name: 'The Irradiation Vats', level: '35-45', desc: 'Pure toxic sludge.', bosses: ['Viscous Fallout', 'Mekgineer Thermaplugg (Echo)'], loot: generateLoot(20) }
    ]
  },
  {
    id: 'ScarletCitadel',
    name: 'The Scarlet Citadel',
    wings: [
      { name: 'The Inquisition', level: '50-55', desc: 'Tyr\'s Hand torture chambers.', bosses: ['Grand Inquisitor Isillien', 'Scarlet Executioner'], loot: generateLoot(20) }
    ]
  }
];

const raids = [
  {
    id: 'EmeraldNightmare',
    name: 'The Emerald Nightmare',
    tier: 'Tier 1.5 (20 Man)',
    desc: 'Entered through the four great portals in Ashenvale, Feralas, Duskwood, and the Hinterlands. A sprawling, non-linear raid.',
    bosses: ['Lethon', 'Emeriss', 'Taerar', 'Ysondre', 'Eranikus'],
    loot: generateLoot(50)
  },
  {
    id: 'GrimBatolRaid',
    name: 'Grim Batol',
    tier: 'Tier 2 (40 Man)',
    desc: 'The heart of the mountain.',
    bosses: ['Warchief Nek\'rosh', 'The Demon Soul', 'Alexstrasza (Enslaved)', 'The Crimson Behemoth'],
    loot: generateLoot(80)
  },
  {
    id: 'CrownOfTheDamned',
    name: 'Crown of the Damned (Stratholme Necropolis)',
    tier: 'Tier 2.5 (20 Man)',
    desc: 'The massive floating ziggurat.',
    bosses: ['Highlord Mograine', 'The Blood Council', 'Kel\'Thuzad\'s Phylactery-Guard'],
    loot: generateLoot(50)
  },
  {
    id: 'KarazhanRaid',
    name: 'Karazhan (Upper Tower)',
    tier: 'Tier 3 (40 Man)',
    desc: 'The unreleased Vanilla version of Karazhan.',
    bosses: ['Attumen', 'Moroes', 'The Curator', 'Shade of Aran', 'Prince Malchezaar', 'Nightbane'],
    loot: generateLoot(100)
  },
  {
    id: 'DragonIslesRaid',
    name: 'Temple of the Old Gods (Dragon Isles)',
    tier: 'Tier 3.5 (40 Man)',
    desc: 'The absolute pinnacle of Vanilla progression.',
    bosses: ['The Devolved Aspect', 'The Faceless General', 'Avatar of the Old God'],
    loot: generateLoot(100)
  }
];

const tsFile = `export const PVE_CATS = {
  DUNGEONS: 'The New Dungeons (Winged Hubs)',
  RAIDS: 'Parallel Raid Tiers'
};

export const pveData = {
  [PVE_CATS.DUNGEONS]: ${JSON.stringify(dungeons, null, 2)},
  [PVE_CATS.RAIDS]: ${JSON.stringify(raids, null, 2)}
};
`;

fs.writeFileSync('./src/data/dungeons.ts', tsFile);
console.log('Successfully wrote 30 dungeons and massive loot tables to dungeons.ts');
