export const PVE_CATS = {
  DUNGEONS: 'The New Dungeons (Winged Hubs)',
  RAIDS: 'Parallel Raid Tiers'
};

export const pveData = {
  [PVE_CATS.DUNGEONS]: [
    {
      id: 'StormwindVault',
      name: 'Stormwind Vaults',
      wings: [
        { name: 'The Upper Brig', level: '25-30', desc: 'The holding cells for the Defias Brotherhood.', bosses: ['Warden Thelwater', 'Targorr the Dread', 'Asaad the Mutineer', 'The Defias Juggernaut'] },
        { name: 'The Deep Cellblocks', level: '45-50', desc: 'Where the true enemies of the state are kept. Twilight Cultists have infiltrated.', bosses: ['High Cultist Zenn', 'The Faceless Lurker', 'Dextren Ward', 'Inquisitor Malyk'] },
        { name: 'The Interrogation Levels', level: '55-60', desc: 'A descent into madness. The Royal Interrogators have been corrupted by an Old God artifact.', bosses: ['Interrogator Vishas (Returned)', 'The Screaming Maiden', 'Lord Victor Nefarius (Illusion)', 'The Flesh-Shaper'] }
      ]
    },
    {
      id: 'KarazhanCrypts',
      name: 'Karazhan Crypts',
      wings: [
        { name: 'The Well of the Forgotten', level: '58-60', desc: 'A horrific descent into the mass graves beneath Karazhan.', bosses: ['The Caretaker', 'Amalgam of the Damned', 'The Restless Peasantry'] },
        { name: 'The Upside-Down Sinners', level: '60', desc: 'The most infamous unreleased area in WoW history. Pure underwater terror.', bosses: ['The Drowning Terror', 'Echo of Medivh', 'The Leviathan of Blood', 'Master of the Sinners'] },
        { name: 'The Reliquary of Secrets', level: '60', desc: 'Where Medivh hid the artifacts too dangerous for the tower above.', bosses: ['The Animated Grimoire', 'Guardian of the Aegis', 'The Void-Sealer'] }
      ]
    },
    {
      id: 'TimbermawHold',
      name: 'Timbermaw Hold',
      wings: [
        { name: 'The Corrupted Warrens', level: '48-52', desc: 'The Deadwood furbolgs have besieged the hold from within.', bosses: ['Chieftain Bloodmaw', 'The Rotting Ancient', 'Shamanistic Echo'] },
        { name: 'The Fel-Scar', level: '55-58', desc: 'Demons from Jaedenar have tunneled into the Hold.', bosses: ['Xandros the Fel-Lord', 'The Summoning Portal', 'Fel-Guard Elite'] },
        { name: 'The Ancestral Hollow', level: '60', desc: 'The sacred burial grounds of the Timbermaw, now defiled.', bosses: ['The First Chieftain', 'Spirit of the Bear', 'Spirit of the Owl', 'The Defiler'] }
      ]
    },
    {
      id: 'UldumVaults',
      name: 'The Vaults of Uldum',
      wings: [
        { name: 'The Maker\'s Terrace', level: '55-58', desc: 'The pristine upper levels of the Titan facility.', bosses: ['High-Executor Norgannon', 'The Antechamber Construct', 'Matrix-Lord'] },
        { name: 'The Obsidian Quarry', level: '58-60', desc: 'Where the Tol\'vir are mass-producing obsidian destroyers.', bosses: ['The Sculptor', 'Unfinished Destroyer', 'The Hive-Mind Incursor'] },
        { name: 'The Engine of Origination', level: '60', desc: 'The core of the facility, currently under assault by the Qiraji.', bosses: ['General Rajaxx\'s Vanguard', 'The Re-Origination Protocol', 'Avatar of the Makers'] }
      ]
    },
    {
      id: 'GrimBatol',
      name: 'Grim Batol Tunnels',
      wings: [
        { name: 'The Dragonmaw Gates', level: '52-55', desc: 'The heavily fortified entrance to the mountain.', bosses: ['Gatekeeper', 'The Siege Master', 'Dragonmaw Proto-Drake'] },
        { name: 'The Hatcheries', level: '55-58', desc: 'Where the Red Dragonflight is being bred for war.', bosses: ['The Broodmother', 'Nek\'rosh', 'The Corrupted Whelp-Master'] },
        { name: 'The Deep Forge', level: '60', desc: 'The old Wildhammer forges, now used to craft dragon-armor.', bosses: ['The Grand Smith', 'Smolder', 'The Anvil of Doom'] }
      ]
    },
    {
      id: 'HyjalBarrowDens',
      name: 'The Barrow Dens',
      wings: [
        { name: 'The Slumbering Halls', level: '58-60', desc: 'Where the Druids sleep. Now a nightmare.', bosses: ['The Nightmare Stalker', 'Corrupted Druid of the Claw', 'The Waking Terror'] },
        { name: 'The Roots of Nordrassil', level: '60', desc: 'The deepest caverns beneath the World Tree.', bosses: ['The Fel-Sap', 'Archimonde\'s Echo', 'The Root-Tender'] }
      ]
    },
    {
      id: 'Mazthoril',
      name: 'Mazthoril Deeps',
      wings: [
        { name: 'The Arcane Vaults', level: '55-60', desc: 'The Blue Dragonflight\'s hidden archive in Winterspring.', bosses: ['The Archivist', 'Cobalt-Scale Drake', 'The Ley-Line Anomaly', 'Haleh\'s Betrayer'] }
      ]
    },
    {
      id: 'GilneasCity',
      name: 'Gilneas City (Instanced)',
      wings: [
        { name: 'The Greymane District', level: '45-50', desc: 'The burning capital of the Gilnean nation.', bosses: ['Lord Godfrey', 'The Bloodfang Alpha', 'Sylvanas\'s Assassin', 'The Royal Guard'] }
      ]
    }
  ],
  [PVE_CATS.RAIDS]: [
    {
      id: 'EmeraldNightmare',
      name: 'The Emerald Nightmare',
      tier: 'Tier 1.5 (20 Man)',
      desc: 'Entered through the four great portals in Ashenvale, Feralas, Duskwood, and the Hinterlands. A sprawling, non-linear raid.',
      bosses: ['Lethon (Corrupted)', 'Emeriss (Corrupted)', 'Taerar (Corrupted)', 'Ysondre (Corrupted)', 'The Nightmare Lord (Eranikus)', 'Hakkar the Houndmaster (Nightmare Illusion)']
    },
    {
      id: 'GrimBatolRaid',
      name: 'Grim Batol',
      tier: 'Tier 2 (40 Man, Parallel to BWL)',
      desc: 'The heart of the mountain. Players must free the Red Dragonflight from the Dragonmaw Clan.',
      bosses: ['Warchief Nek\'rosh Skullcrusher', 'The Demon Soul (Construct)', 'Alexstrasza (Enslaved - Survival Encounter)', 'Deathwing\'s Emissary', 'The Crimson Behemoth']
    },
    {
      id: 'CrownOfTheDamned',
      name: 'Crown of the Damned (Stratholme Necropolis)',
      tier: 'Tier 2.5 (20 Man)',
      desc: 'The massive floating ziggurat hovering over Stratholme. Players must use Argent Dawn gryphons to board it.',
      bosses: ['Highlord Mograine (Death Knight)', 'The Blood Council', 'The Stitch-Abomination', 'Kel\'Thuzad\'s Phylactery-Guard']
    },
    {
      id: 'KarazhanRaid',
      name: 'Karazhan (The Upper Tower)',
      tier: 'Tier 3 (40 Man, Parallel to Naxxramas)',
      desc: 'The unreleased Vanilla version of Karazhan. A sprawling, insane 40-man raid filled with time anomalies and demons.',
      bosses: ['Attumen the Huntsman', 'Moroes (Level 63 Elite)', 'The Curator (Vanilla)', 'Terestian Illhoof', 'Shade of Aran', 'Prince Malchezaar', 'Nightbane', 'Echo of Aegwynn']
    },
    {
      id: 'DragonIslesRaid',
      name: 'Temple of the Old Gods (Dragon Isles)',
      tier: 'Tier 3.5 (40 Man)',
      desc: 'The absolute pinnacle of Vanilla progression. Located on the Dragon Isles, dealing with an unnamed Old God.',
      bosses: ['The Devolved Aspect', 'The Faceless General', 'The Whispering Maw', 'The Eye of the Deep', 'Avatar of the Old God']
    }
  ]
};
