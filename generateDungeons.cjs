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
    const isEpic = Math.random() > 0.7;
    const rarity = isEpic ? 'Epic' : 'Rare';
    const type = getRandom(['Plate', 'Mail', 'Leather', 'Cloth', 'Ring', 'Trinket', 'Weapon', 'Shield']);
    
    let slot = '';
    if (type === 'Ring') slot = 'Finger';
    else if (type === 'Trinket') slot = 'Trinket';
    else if (type === 'Weapon') slot = getRandom(['Main Hand', 'One-Hand', 'Two-Hand', 'Ranged']);
    else if (type === 'Shield') slot = 'Off Hand';
    else slot = getRandom(['Head', 'Shoulder', 'Chest', 'Wrist', 'Hands', 'Waist', 'Legs', 'Feet']);

    const stats = [];
    if (type !== 'Trinket') {
      const statTypes = ['Stamina', 'Intellect', 'Agility', 'Strength', 'Spirit'];
      stats.push(`+${Math.floor(Math.random() * 20 + 5)} ${getRandom(statTypes)}`);
      if (Math.random() > 0.5) {
        stats.push(`+${Math.floor(Math.random() * 15 + 5)} ${getRandom(statTypes)}`);
      }
    }

    loot.push({
      name: `${getRandom(dPrefixes)} ${getRandom(dSuffixes)}`,
      rarity,
      bindType: 'Binds when picked up',
      slot,
      type: type === 'Weapon' ? getRandom(['Sword', 'Mace', 'Axe', 'Staff', 'Dagger', 'Bow']) : type,
      stats,
      effect: getRandom(dEffects),
      requiresLevel: 60,
      sellPrice: `${Math.floor(Math.random() * 10 + 1)}g ${Math.floor(Math.random() * 99)}s`
    });
  }
  return loot;
}

const dungeons = [
  {
    id: 'StormwindVault',
    name: 'Stormwind Vaults',
    loreHistory: 'Hidden deep beneath the canals of Stormwind, this maximum-security prison houses the most dangerous criminals, defected nobles, and dark magic practitioners the kingdom has ever captured.',
    strategyGuide: 'Crowd control is mandatory. The tight corridors mean pulling multiple packs is fatal. Utilize corner pulls to break line of sight on the Defias marksmen.',
    trashMobs: ['Corrupt Noble Guard', 'Vault Warden', 'Defias Infiltrator', 'Bound Voidwalker'],
    associatedQuests: ['The King\'s Justice (Dungeon)', 'Missing Diplomat: The Interrogation', 'A Noble\'s Treachery'],
    speedrunStrats: 'A Rogue can pick the lock to the old sewer grates, bypassing the entire first wing and going straight to Dextren Ward.',
    environmentalHazards: 'Triggering the alarm bells will cause infinite waves of guards to spawn until a player channels on the bell for 10 seconds to disable it.',
    secrets: ['A hidden tunnel behind a loose brick leads back to the Stockades.', 'Pickpocketing the Head Jailer yields the "Sewer Key".'],
    wings: [
      { name: 'The Upper Brig', level: '25-30', desc: 'The holding cells.', bosses: ['Warden Thelwater', 'Targorr the Dread'], loot: generateLoot(10) },
      { name: 'The Deep Cellblocks', level: '45-50', desc: 'Where the true enemies are kept.', bosses: ['High Cultist Zenn', 'Dextren Ward'], loot: generateLoot(15) },
      { name: 'The Interrogation Levels', level: '55-60', desc: 'A descent into madness.', bosses: ['Interrogator Vishas', 'The Flesh-Shaper'], loot: generateLoot(25) }
    ]
  },
  {
    id: 'KarazhanCrypts',
    name: 'Karazhan Crypts',
    loreHistory: 'The dark, forgotten underbelly of Medivh\'s tower. These crypts hold the restless souls of those who died during the tower\'s chaotic construction and the subsequent magical fallout.',
    strategyGuide: 'Shadow and Frost resistance are incredibly valuable here. Healers must dispel the "Suffocating Dread" debuff immediately.',
    trashMobs: ['Drowned Noble', 'Sin-Eater', 'Crypt Stalker', 'Restless Spirit'],
    associatedQuests: ['Echoes of the Guardian', 'The Upside-Down Sinners', 'Cleansing the Crypts'],
    speedrunStrats: 'Warlocks can use Eye of Kilrogg to trigger the portcullis switches remotely, saving minutes of walking.',
    environmentalHazards: 'In the Upside-Down Sinners wing, the water level slowly rises during boss encounters, threatening to drown the entire party.',
    secrets: ['A hidden tome grants the party a permanent +10 Shadow Resistance buff for the dungeon.', 'A neutral ghost vendor sells unique tailoring patterns.'],
    wings: [
      { name: 'The Well of the Forgotten', level: '58-60', desc: 'Mass graves.', bosses: ['The Caretaker', 'Amalgam of the Damned'], loot: generateLoot(25) },
      { name: 'The Upside-Down Sinners', level: '60', desc: 'Underwater terror.', bosses: ['The Drowning Terror', 'Master of the Sinners'], loot: generateLoot(30) },
      { name: 'The Reliquary of Secrets', level: '60', desc: 'Forbidden artifacts.', bosses: ['The Animated Grimoire', 'The Void-Sealer'], loot: generateLoot(30) }
    ]
  },
  {
    id: 'TimbermawHold',
    name: 'Timbermaw Hold',
    loreHistory: 'Once a sanctuary for the uncorrupted Timbermaw furbolgs, deep elements of the Legion\'s taint have seeped into the lower burrows, driving the chieftains mad.',
    strategyGuide: 'Cleanse the corrupted totems scattered around the boss rooms before pulling, or the bosses will enrage at 30% health.',
    trashMobs: ['Fel-crazed Furbolg', 'Corrupted Ancient', 'Legion Vanguard', 'Shadow-weaver'],
    associatedQuests: ['Purging the Hold', 'The Chieftain\'s Fall', 'A Debt Repaid'],
    speedrunStrats: 'Having Exalted reputation with Timbermaw Hold allows you to skip the first two bosses entirely by speaking to a friendly NPC.',
    environmentalHazards: 'Puddles of fel-sludge slow movement speed and apply a stacking nature damage DoT.',
    secrets: ['A hidden path behind a waterfall leads to a neutral vendor selling unique enchantments for Nature Resistance.'],
    wings: [
      { name: 'The Corrupted Warrens', level: '48-52', desc: 'Besieged hold.', bosses: ['Chieftain Bloodmaw', 'The Rotting Ancient'], loot: generateLoot(15) },
      { name: 'The Fel-Scar', level: '55-58', desc: 'Demonic incursion.', bosses: ['Xandros the Fel-Lord', 'The Summoning Portal'], loot: generateLoot(20) },
      { name: 'The Ancestral Hollow', level: '60', desc: 'Defiled burial grounds.', bosses: ['The First Chieftain', 'The Defiler'], loot: generateLoot(30) }
    ]
  },
  {
    id: 'UldumVaults',
    name: 'The Vaults of Uldum',
    loreHistory: 'An ancient Titan research facility buried beneath the sands of Tanaris. It houses the Engine of Origination, a device capable of resetting all life on Azeroth.',
    strategyGuide: 'Physical damage dealers must interrupt the Earthen Constructs\' "Stone Skin" cast, or they become completely immune to physical attacks.',
    trashMobs: ['Earthen Custodian', 'Anubisath Sentinel', 'Tol\'vir Spellweaver'],
    associatedQuests: ['The Secrets of the Makers', 'Disarming the Engine', 'Brann\'s Expedition'],
    speedrunStrats: 'Bypassing the primary security grid by solving the constellation puzzle in under 2 minutes opens a shortcut directly to the final boss.',
    environmentalHazards: 'Lasers sweep the corridors. Touching them instantly kills the player and alerts nearby trash.',
    secrets: ['An archaeology puzzle in the Maker\'s Terrace rewards a unique epic mount.', 'Hidden Titan discs reveal lore about the Old Gods.'],
    wings: [
      { name: 'The Maker\'s Terrace', level: '55-58', desc: 'Titan facility.', bosses: ['High-Executor Norgannon', 'Matrix-Lord'], loot: generateLoot(20) },
      { name: 'The Obsidian Quarry', level: '58-60', desc: 'Construct manufacturing.', bosses: ['The Sculptor', 'The Hive-Mind Incursor'], loot: generateLoot(25) },
      { name: 'The Engine of Origination', level: '60', desc: 'The core.', bosses: ['General Rajaxx\'s Vanguard', 'Avatar of the Makers'], loot: generateLoot(40) }
    ]
  },
  {
    id: 'GrimBatol',
    name: 'Grim Batol Tunnels',
    loreHistory: 'The ancient mountain fortress of the Wildhammer dwarves, later claimed by the Dragonmaw Orcs to enslave the Red Dragonflight. Now, Twilight Cultists and Dark Irons fight for control.',
    strategyGuide: 'Kite the Molten Elementals away from the Twilight Cultists; if they merge, they form an unstoppable boss-level mob.',
    trashMobs: ['Dragonmaw Slaver', 'Twilight Corruptor', 'Dark Iron Saboteur', 'Enslaved Whelp'],
    associatedQuests: ['The Legacy of the Wildhammer', 'Freeing the Brood', 'Twilight\'s Hammer Cult'],
    speedrunStrats: 'Engineers can repair a broken minecart to ride it past the entire second wing\'s trash packs.',
    environmentalHazards: 'Searing magma vents periodically erupt, dealing massive fire damage and launching players into the air.',
    secrets: ['A secret Wildhammer stash requires all 5 players to stand on pressure plates simultaneously.'],
    wings: [
      { name: 'The Dragonmaw Gates', level: '52-55', desc: 'Fortified entrance.', bosses: ['The Siege Master', 'Dragonmaw Proto-Drake'], loot: generateLoot(15) },
      { name: 'The Hatcheries', level: '55-58', desc: 'Red Dragonflight breeding.', bosses: ['The Broodmother', 'The Corrupted Whelp-Master'], loot: generateLoot(20) },
      { name: 'The Deep Forge', level: '60', desc: 'Wildhammer forges.', bosses: ['The Grand Smith', 'The Anvil of Doom'], loot: generateLoot(30) }
    ]
  },
  {
    id: 'HyjalBarrowDens',
    name: 'The Barrow Dens',
    loreHistory: 'The sacred underground hibernation chambers of the druids in Mount Hyjal. The Emerald Nightmare has begun seeping through the roots of Nordrassil, corrupting the sleeping druids.',
    strategyGuide: 'Dispel "Slumbering Poison" immediately. If it expires, the player is put to sleep for 30 seconds and cannot be woken by damage.',
    trashMobs: ['Nightmare Terror', 'Corrupted Druid', 'Root-Bound Horror', 'Satyr Infiltrator'],
    associatedQuests: ['Waking the Dreamer', 'The Nightmare\'s Grasp', 'Cleansing the Roots'],
    speedrunStrats: 'Druids in the party can use Hibernate on the elite Nightmare Terrors to easily bypass the hardest trash packs.',
    environmentalHazards: 'Pockets of Nightmare gas disorient players and slowly drain mana.',
    secrets: ['Awakening a specific druid grants the party the "Blessing of Cenarius", increasing all stats by 5%.'],
    wings: [
      { name: 'The Slumbering Halls', level: '58-60', desc: 'Nightmare.', bosses: ['The Nightmare Stalker', 'The Waking Terror'], loot: generateLoot(25) },
      { name: 'The Roots of Nordrassil', level: '60', desc: 'Deep caverns.', bosses: ['Archimonde\'s Echo', 'The Root-Tender'], loot: generateLoot(30) }
    ]
  },
  {
    id: 'Mazthoril',
    name: 'Mazthoril Deeps',
    loreHistory: 'A sprawling cavern system in Winterspring used by the Blue Dragonflight to horde and protect arcane artifacts and dangerous magic.',
    strategyGuide: 'Magic damage is incredibly high here. Mages with Dampen Magic are extremely useful. Interrupt the "Arcane Volley" at all costs.',
    trashMobs: ['Arcane Anomaly', 'Blue Dragonkin', 'Spell-Thief', 'Crystalline Golem'],
    associatedQuests: ['The Blue Flight\'s Secret', 'Retrieving the Arcanum', 'Haleh\'s Request'],
    speedrunStrats: 'Reflecting the Arcane Anomalies\' spells back at them causes them to instantly shatter.',
    environmentalHazards: 'Wild magic zones randomly silence or disarm players standing in them.',
    secrets: ['A locked arcane chest contains a rare enchant recipe, but requires a Mage to decode the runes.'],
    wings: [
      { name: 'The Arcane Vaults', level: '55-60', desc: 'Blue Dragonflight archive.', bosses: ['The Archivist', 'Haleh\'s Betrayer'], loot: generateLoot(25) }
    ]
  },
  {
    id: 'GilneasCity',
    name: 'Gilneas City (Instanced)',
    loreHistory: 'The capital city of Gilneas is in flames. A massive worgen outbreak has overrun the streets, and Lord Godfrey has initiated a brutal martial law lockdown.',
    strategyGuide: 'The streets are packed with fast-moving Worgen. Use the city\'s cannons to break through barricades and thin out the hordes.',
    trashMobs: ['Feral Worgen', 'Gilnean Royal Guard', 'Crazed Citizen', 'Bloodfang Lurker'],
    associatedQuests: ['The Fall of Gilneas', 'Lord Godfrey\'s Treason', 'Evacuating the Uninfected'],
    speedrunStrats: 'A rogue can stealth through the rooftops, dropping rope ladders down for the rest of the party to skip the street fighting.',
    environmentalHazards: 'Burning buildings randomly collapse, causing massive AoE fire damage.',
    secrets: ['Saving a hidden group of civilians rewards a unique Gilnean tabard.'],
    wings: [
      { name: 'The Greymane District', level: '45-50', desc: 'Burning capital.', bosses: ['Lord Godfrey', 'The Royal Guard'], loot: generateLoot(20) }
    ]
  },
  {
    id: 'GnomereganDeeps',
    name: 'Gnomeregan Deeps',
    loreHistory: 'The lowest, most irradiated levels of the fallen gnome capital. The troggs here have mutated into horrific, glowing monstrosities.',
    strategyGuide: 'Radiation poisoning requires constant cleansing. Do not step in the green sludge.',
    trashMobs: ['Irradiated Trogg', 'Sludge Monstrosity', 'Malfunctioning Cleaner Bot'],
    associatedQuests: ['The Ultimate Cure', 'Thermaplugg\'s Final Echo', 'Data Retrieval'],
    speedrunStrats: 'Using a Goblin Jumper Cable on a broken elevator immediately drops the party to the final boss room.',
    environmentalHazards: 'Radiation vents periodically expel toxic gas. Players must use decontamination showers scattered throughout the instance.',
    secrets: ['A rare engineering schematic drops from a hidden, un-targetable gnome ninja if you reveal him with a flare.'],
    wings: [
      { name: 'The Irradiation Vats', level: '35-45', desc: 'Pure toxic sludge.', bosses: ['Viscous Fallout', 'Mekgineer Thermaplugg (Echo)'], loot: generateLoot(20) }
    ]
  },
  {
    id: 'ScarletCitadel',
    name: 'The Scarlet Citadel',
    loreHistory: 'The ultimate fanatic stronghold located in Tyr\'s Hand. The highest ranking members of the Scarlet Crusade coordinate their holy war from within these heavily fortified walls.',
    strategyGuide: 'The Crusade healers must be CC\'d or killed instantly. They will chain-heal each other and cast massive holy novas.',
    trashMobs: ['Scarlet Inquisitor', 'Crusade Commander', 'Holy Zealot', 'Crimson Hound'],
    associatedQuests: ['The Grand Inquisitor', 'Purging the Fanatics', 'The Ashbringer\'s Legacy'],
    speedrunStrats: 'Mind Controlling a Scarlet Inquisitor allows you to use their "Open Gates" spell, bypassing the massive courtyard fight.',
    environmentalHazards: 'Holy fire rains from the parapets during the outdoor sections. Players must move between covered corridors.',
    secrets: ['Finding the true Ashbringer\'s hidden reliquary triggers an entirely unique roleplay event with Highlord Mograine\'s ghost.'],
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
    loreHistory: 'The four great trees of Azeroth have fully succumbed to the Nightmare. Ysera\'s greatest lieutenants have been twisted into horrific shadows of their former selves.',
    strategyGuide: 'A non-linear raid where the raid must frequently split into 2 or 4 groups to tackle portals simultaneously. Communication is paramount.',
    trashMobs: ['Nightmare Drake', 'Corrupted Keeper', 'Shadow-Bough Treant', 'Dream-Eater'],
    associatedQuests: ['The Waking Nightmare (Raid)', 'Tears of the Dreamer'],
    speedrunStrats: 'Defeating all four dragons within 45 minutes triggers a secret hard-mode encounter against Eranikus.',
    environmentalHazards: 'The Nightmare Fog constantly shifts. Standing in it too long mind-controls the player.',
    secrets: ['Collecting the hidden Dream Fragments allows you to forge a unique Nature Resistance epic trinket.'],
    bosses: ['Lethon', 'Emeriss', 'Taerar', 'Ysondre', 'Eranikus'],
    loot: generateLoot(50)
  },
  {
    id: 'GrimBatolRaid',
    name: 'Grim Batol',
    tier: 'Tier 2 (40 Man)',
    desc: 'The heart of the mountain where the Dragonmaw Clan enslaves the Red Dragonflight.',
    loreHistory: 'Using the Demon Soul, the orcs have broken the will of Alexstrasza. The raid must navigate the mountain to destroy the artifact and free the Life-Binder.',
    strategyGuide: 'The Red Dragonflight is enslaved; killing dragons destroys their loot and reduces your end-of-raid rewards. The raid must use massive CC and kiting strategies to save them instead.',
    trashMobs: ['Dragonmaw Handler', 'Enslaved Red Drake', 'Twilight Warlock', 'Blackrock Mercenary'],
    associatedQuests: ['The Demon Soul (Raid)', 'Freeing the Queen'],
    speedrunStrats: 'Freeing specific dragons early allows them to breathe fire on later trash packs, instantly clearing them.',
    environmentalHazards: 'Massive blast furnaces periodically erupt, requiring the raid to hide behind forge anvils.',
    secrets: ['A secret blacksmithing forge allows players with Exalted Thorium Brotherhood rep to craft legendary-tier fire resistance gear.'],
    bosses: ['Warchief Nek\'rosh', 'The Demon Soul', 'Alexstrasza (Enslaved)', 'The Crimson Behemoth'],
    loot: generateLoot(80)
  },
  {
    id: 'CrownOfTheDamned',
    name: 'Crown of the Damned (Stratholme Necropolis)',
    tier: 'Tier 2.5 (20 Man)',
    desc: 'The massive floating ziggurat hovering above Stratholme.',
    loreHistory: 'Before Naxxramas arrived, Kel\'Thuzad tested his aerial necropolises. This is the command center of the Scourge\'s Lordaeron operations.',
    strategyGuide: 'Undying Necromancers will instantly resurrect dead raid members as hostile, massively buffed ghouls. Nobody can die.',
    trashMobs: ['Undying Necromancer', 'Flesh Titan', 'Banshee Wailer', 'Death Knight Captain'],
    associatedQuests: ['The Crown Falls (Raid)', 'Retrieving the Phylactery'],
    speedrunStrats: 'Paladins using Holy Wrath can completely lock down the undead Gauntlet, saving over 10 minutes.',
    environmentalHazards: 'Plague Cauldrons slowly fill the room with toxic gas during boss fights.',
    secrets: ['Using the Corrupted Ashbringer here triggers hidden dialogue from Highlord Mograine.'],
    bosses: ['Highlord Mograine', 'The Blood Council', 'Kel\'Thuzad\'s Phylactery-Guard'],
    loot: generateLoot(50)
  },
  {
    id: 'KarazhanRaid',
    name: 'Karazhan (Upper Tower)',
    tier: 'Tier 3 (40 Man)',
    desc: 'The unreleased Vanilla version of Karazhan, balanced for 40 players.',
    loreHistory: 'Medivh\'s tower transcends time and space. The upper levels are caught in a dimensional rift where the Burning Legion and anomalous entities fight for control.',
    strategyGuide: 'The Chess Event requires players to literally inhabit the pieces, completely replacing their hotbars with unique movesets.',
    trashMobs: ['Spectral Patron', 'Phantom Guardsman', 'Demonic Invader', 'Ethereal Thief'],
    associatedQuests: ['The Master\'s Key (Raid)', 'Closing the Rift'],
    speedrunStrats: 'Invisibility potions are mandatory to skip the massive pack of Demonic Invaders before Prince Malchezaar.',
    environmentalHazards: 'Gravity reverses in the Nether Spire, requiring the raid to fight on the ceiling while dodging falling debris.',
    secrets: ['Solving the Library\'s book puzzle unlocks a hidden boss fight against a corrupted Guardian.'],
    bosses: ['Attumen', 'Moroes', 'The Curator', 'Shade of Aran', 'Prince Malchezaar', 'Nightbane'],
    loot: generateLoot(100)
  },
  {
    id: 'DragonIslesRaid',
    name: 'Temple of the Old Gods (Dragon Isles)',
    tier: 'Tier 3.5 (40 Man)',
    desc: 'The absolute pinnacle of Vanilla progression, located on the mythical Dragon Isles.',
    loreHistory: 'A forgotten island where the Old Gods first corrupted the proto-dragons. The architecture is impossibly ancient, pre-dating the Titans.',
    strategyGuide: 'Requires a fully coordinated 40-man raid with maximum Shadow Resistance. The Sanity mechanic causes players to hallucinate and attack each other if it drops to zero.',
    trashMobs: ['Faceless Corruptor', 'Devolved Proto-Drake', 'Tentacle Horror', 'Mind-Flayer'],
    associatedQuests: ['The Final Nightmare (Raid)', 'Whispers in the Dark'],
    speedrunStrats: 'There are no speedruns here. Survival is the only metric.',
    environmentalHazards: 'The geometry of the temple physically shifts and changes layout every week, making memorization impossible.',
    secrets: ['A completely hidden 4th Old God encounter is accessible only if a player in the raid wields the Scepter of the Shifting Sands.'],
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
