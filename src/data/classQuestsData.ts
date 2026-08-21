export interface QuestStep {
  stepNumber: number;
  title: string;
  zone: string;
  type: 'Open World' | 'Dungeon' | 'Raid' | 'Solo Trial' | 'Espionage';
  description: string;
}

export interface QuestReward {
  name: string;
  type: string;
  rarity: 'Rare' | 'Epic' | 'Legendary';
  icon: string;
  description: string;
}

export interface ClassQuest {
  id: string;
  title: string;
  tier: 'Tier 1.5' | 'Tier 2' | 'Tier 2.5' | 'Tier 3' | 'Tier 3.5';
  targetClass: string;
  levelReq: number;
  summary: string;
  flavorQuote: string;
  locations: string[];
  steps: QuestStep[];
  rewards: QuestReward[];
}

export const CLASS_QUESTS_DATA: Record<string, ClassQuest[]> = {
  // ==========================================
  // WARRIOR
  // ==========================================
  Warrior: [
    {
      id: 'war-t1',
      title: 'The Rebirth of the Bulwark of Arathor',
      tier: 'Tier 1.5',
      targetClass: 'Warrior',
      levelReq: 60,
      summary: 'Reclaim the shattered shield of King Thoradin\'s champions, forge it in the heart of Blackrock Mountain, and quench it in the pure tears of the Emerald Dream.',
      flavorQuote: '"A warrior is not defined by the weight of their steel, but by the will to hold the line when all others break." — Danath Trollbane',
      locations: ['Arathi Highlands', 'Stormwind Vaults', 'Upper Blackrock Spire', 'The Emerald Nightmare'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Scattered Shards of Arathor',
          zone: 'Arathi Highlands (Ruins of Stromgarde)',
          type: 'Open World',
          description: 'Slay Spirefang Ogre Chieftains in the ruins of Stromgarde to recover 3 ancient adamantine shield fragments.'
        },
        {
          stepNumber: 2,
          title: 'The Defias Metalmaster',
          zone: 'Stormwind Vaults (The Deep Cellblocks)',
          type: 'Dungeon',
          description: 'Infiltrate the high-security cellblocks to interrogate the imprisoned master blacksmith Dextren Ward and acquire the ancient tempering blueprints.'
        },
        {
          stepNumber: 3,
          title: 'The Dragon\'s Hearth',
          zone: 'Upper Blackrock Spire',
          type: 'Dungeon',
          description: 'Use the intense thermal heat of Rend Blackhand\'s Great Anvil to reforge the adamantine fragments into a solid crest.'
        },
        {
          stepNumber: 4,
          title: 'Quenched in the Dream',
          zone: 'The Emerald Nightmare (Ysondre Encounter)',
          type: 'Raid',
          description: 'Immerse the hot-forged crest into the Tears of the Dreamer pool after defeating Ysondre to bind the shield with unyielding vigor.'
        }
      ],
      rewards: [
        {
          name: 'Bulwark of the Arathor King',
          type: 'Shield (Epic)',
          rarity: 'Epic',
          icon: 'inv_shield_05',
          description: 'Equip: Increases defense rating by 20. When struck in melee, grants a 15% chance to reflect all incoming physical damage for 4 sec.'
        },
        {
          name: 'Gladiator Stance Mastery',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'ability_warrior_shieldslam',
          description: 'Teaches Gladiator Stance: An aggressive sword-and-board stance that increases physical damage done by 20% and converts Shield Slam into a primary DPS strike.'
        }
      ]
    },
    {
      id: 'war-t2',
      title: 'The Dragonmaw Dragonslayer',
      tier: 'Tier 2',
      targetClass: 'Warrior',
      levelReq: 60,
      summary: 'Forge an enormous dragon-penetrating lance from the core of Blackwing Lair and defeat Warchief Nek\'rosh in the depths of Grim Batol.',
      flavorQuote: '"Let the skies rain red fire. We stand on the mountain, and the dragons shall fall." — Falstad Wildhammer',
      locations: ['Northeron', 'Blackwing Lair', 'Grim Batol Tunnels', 'Grim Batol Raid'],
      steps: [
        {
          stepNumber: 1,
          title: 'Schematic of the Great Harpoon',
          zone: 'Northeron & Twilight Ridge',
          type: 'Open World',
          description: 'Recover the ancient dwarven siege blueprints from the Dragonmaw encampments on the Twilight Ridge.'
        },
        {
          stepNumber: 2,
          title: 'Blackwing Elementium Ingots',
          zone: 'Blackwing Lair',
          type: 'Raid',
          description: 'Harvest 3 refined Elementium bars from Master Elemental Shaper Krixix in Blackwing Lair.'
        },
        {
          stepNumber: 3,
          title: 'The Dragonmaw Hatchery Sabotage',
          zone: 'Grim Batol Tunnels (The Hatcheries)',
          type: 'Dungeon',
          description: 'Destroy the corrupt incubator pumps and slay the Broodmother to clear the lower passage.'
        },
        {
          stepNumber: 4,
          title: 'Slayer of Warchief Nek\'rosh',
          zone: 'Grim Batol (Raid)',
          type: 'Raid',
          description: 'Confront and execute Warchief Nek\'rosh atop the Red Dragonflight caldera, driving the dragonslayer lance through his dark throne.'
        }
      ],
      rewards: [
        {
          name: 'Dragonmaw Dragonslayer Pike',
          type: 'Two-Hand Polearm / Greatsword (Epic)',
          rarity: 'Epic',
          icon: 'inv_weapon_halberd_01',
          description: 'Chance on hit: Inflicts 300 to 450 bleed damage over 6 sec and increases your attack power against dragonkin and beasts by 120.'
        },
        {
          name: 'Blood & Thunder Mastery',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'spell_nature_thunderclap',
          description: 'Your Thunder Clap causes your Rend bleed effect to spread to all nearby enemies and increases its AoE threat generation by 50%.'
        }
      ]
    },
    {
      id: 'war-t25',
      title: 'The Colossus of the Shifting Sands',
      tier: 'Tier 2.5',
      targetClass: 'Warrior',
      levelReq: 60,
      summary: 'Harness the titan mechanics of Uldum and the crystalline armor of the Silithid hives to become an immovable mountain of iron.',
      flavorQuote: '"The earth bends, but the warrior remains unmoved." — Brann Bronzebeard',
      locations: ['Silithus Hives', 'The Vaults of Uldum', 'Crown of the Damned'],
      steps: [
        {
          stepNumber: 1,
          title: 'Heart of the Hive Guardian',
          zone: 'Silithus (Hive\'Ashi)',
          type: 'Open World',
          description: 'Solo-hunt a massive Hive Colossus deep in the subterranean tunnels of Hive\'Ashi.'
        },
        {
          stepNumber: 2,
          title: 'The Titan Matrix Resonator',
          zone: 'The Vaults of Uldum (Maker\'s Terrace)',
          type: 'Dungeon',
          description: 'Defeat High-Executor Norgannon to activate the Titan Matrix Resonator.'
        },
        {
          stepNumber: 3,
          title: 'Shattering the Scourge Vanguard',
          zone: 'Crown of the Damned (Stratholme Necropolis)',
          type: 'Raid',
          description: 'Withstand the relentless Bone Storm of the Blood Council while holding the center sanctum.'
        }
      ],
      rewards: [
        {
          name: 'Heart of the Sand Colossus',
          type: 'Trinket (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_gem_stone_02',
          description: 'Use: Increases total health by 1500 and armor by 1000 for 20 sec. (3 Min Cooldown)'
        },
        {
          name: 'Heroic Leap',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'ability_heroicleap',
          description: 'Leap through the air toward a targeted location, slamming all enemies within 8 yards for physical weapon damage. (45 Sec Cooldown)'
        }
      ]
    },
    {
      id: 'war-t3',
      title: 'Medivh\'s Astral Vanguard',
      tier: 'Tier 3',
      targetClass: 'Warrior',
      levelReq: 60,
      summary: 'Venture into the dimensional rifts of Deadwind Pass and Karazhan\'s Upper Tower to master astral combat stances.',
      flavorQuote: '"Even time bends beneath the fury of the vanguard." — Medivh\'s Echo',
      locations: ['Deadwind Pass', 'Karazhan Crypts', 'Naxxramas', 'Karazhan (Upper Tower)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Vice of Deadwind',
          zone: 'Deadwind Pass (Expanded)',
          type: 'Open World',
          description: 'Craft an Alchemical Warded Torch and survive the suffocating shadow fog in the Deadwind Vice.'
        },
        {
          stepNumber: 2,
          title: 'The Crypt of the Drowned',
          zone: 'Karazhan Crypts (Upside-Down Sinners)',
          type: 'Dungeon',
          description: 'Defeat the Master of Sinners and claim Medivh\'s discarded Astral Vanguard Greatshield.'
        },
        {
          stepNumber: 3,
          title: 'Unholy Binding of the Four',
          zone: 'Naxxramas (Military Quarter)',
          type: 'Raid',
          description: 'Defeat the Four Horsemen and bind their spectral reins into the armor straps.'
        },
        {
          stepNumber: 4,
          title: 'The Chessmaster\'s Gambit',
          zone: 'Karazhan (Upper Tower)',
          type: 'Raid',
          description: 'Inhabit the King\'s Guardian piece and lead the celestial chess match to flawless victory.'
        }
      ],
      rewards: [
        {
          name: 'Astral Greatblade of the Guardian',
          type: 'Two-Hand Sword (Epic)',
          rarity: 'Epic',
          icon: 'inv_sword_39',
          description: 'Equip: Increases critical strike chance by 2% and your attacks ignore 200 of your target\'s armor.'
        },
        {
          name: 'War Banners (Skull & Mocking)',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'inv_banner_03',
          description: 'Unlocks War Banners. Skull Banner increases party/raid critical strike damage by 20% for 10 sec. Mocking Banner taunts all nearby enemies within 15 yards to attack the banner. (Does not stack with Bloodlust/Heroism)'
        }
      ]
    },
    {
      id: 'war-t35',
      title: 'The World-Breaker\'s Legacy',
      tier: 'Tier 3.5',
      targetClass: 'Warrior',
      levelReq: 60,
      summary: 'Journey to the mythical Dragon Isles to shatter the ancient proto-dragon brood and forge the weapon that will sunder the Old Gods.',
      flavorQuote: '"Before the Titans shaped the earth, we broke it." — Ancient Proto-Warrior',
      locations: ['The Dragon Isles', 'Temple of the Old Gods'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Feral Roost Trial',
          zone: 'The Dragon Isles (The Feral Roost)',
          type: 'Solo Trial',
          description: 'Solo-defeat three feral proto-drakes on the windswept cliffs without receiving healing spells.'
        },
        {
          stepNumber: 2,
          title: 'Severing the Faceless Mind',
          zone: 'Temple of the Old Gods (The Faceless General)',
          type: 'Raid',
          description: 'Strike the killing blow against the Faceless General while under the effects of Mind Flay.'
        }
      ],
      rewards: [
        {
          name: 'World-Breaker\'s Sunder-Axe',
          type: 'Two-Hand Axe (Legendary Quality)',
          rarity: 'Epic',
          icon: 'inv_axe_22',
          description: 'Chance on hit: Sunder the very fabric of reality, dealing 600 Shadowflame damage and causing all physical attacks to hit for 10% more damage for 12 sec.'
        },
        {
          name: 'Title: The Indomitable Vanguard',
          type: 'Prestige Title',
          rarity: 'Epic',
          icon: 'inv_misc_ribbon_01',
          description: 'Permanently unlocks the in-game title: "The Indomitable Vanguard".'
        }
      ]
    }
  ],

  // ==========================================
  // PALADIN
  // ==========================================
  Paladin: [
    {
      id: 'pal-t1',
      title: 'The Purification of the Silver Hand',
      tier: 'Tier 1.5',
      targetClass: 'Paladin',
      levelReq: 60,
      summary: 'Journey to the sacred shrines of the Silver Hand across Lordaeron and cleanse the corrupted Dream-portal in Ashenvale.',
      flavorQuote: '"The Light does not demand perfection; it demands perseverance." — Uther the Lightbringer',
      locations: ['Western Plaguelands', 'Scarlet Citadel (Tyr\'s Hand)', 'The Emerald Nightmare'],
      steps: [
        {
          stepNumber: 1,
          title: 'Vigil at the Tomb of Uther',
          zone: 'Western Plaguelands (Uther\'s Tomb)',
          type: 'Solo Trial',
          description: 'Kneel at Uther\'s tomb for 5 uninterrupted minutes while repelling waves of wandering Scourge ghouls.'
        },
        {
          stepNumber: 2,
          title: 'The Censer of High Inquisitor Isillien',
          zone: 'The Scarlet Citadel (The Inquisition)',
          type: 'Dungeon',
          description: 'Recover the stolen Silver Hand reliquary from Grand Inquisitor Isillien in Tyr\'s Hand.'
        },
        {
          stepNumber: 3,
          title: 'Cleansing the Nightmare Spire',
          zone: 'The Emerald Nightmare (Ysondre & Taerar)',
          type: 'Raid',
          description: 'Consecrate the dreamwell beneath the corrupted Great Tree in Ashenvale.'
        }
      ],
      rewards: [
        {
          name: 'Libram of the Silver Hand Paragon',
          type: 'Paladin Relic (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_book_11',
          description: 'Equip: Increases spell power by up to 35 and causes Holy Shock to heal all nearby allies for 20% of its value.'
        },
        {
          name: 'Divine Sacrifice',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'spell_holy_powerwordbarrier',
          description: '30% of all damage taken by party members within 30 yards is redirected to the Paladin for 10 sec (up to the Paladin\'s total health). If the Paladin drops below 20% health, the effect breaks early. (2 Min Cooldown) (Does not stack with Bloodlust/Heroism)'
        }
      ]
    },
    {
      id: 'pal-t2',
      title: 'The Red Dawn of Alexstrasza',
      tier: 'Tier 2',
      targetClass: 'Paladin',
      levelReq: 60,
      summary: 'Soothe the tortured dragonkin in Grim Batol and forge a hammer infused with the life-giving essence of the Red Dragonflight.',
      flavorQuote: '"Even in the darkest mountain, the flame of life shall burn away the shadow." — Alexstrasza the Life-Binder',
      locations: ['Wetlands', 'Blackwing Lair', 'Grim Batol Raid'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Wounded Brood in the Marshes',
          zone: 'Wetlands (Grim Batol Border)',
          type: 'Open World',
          description: 'Use your Cleanse spell to cure 10 poisoned red whelps trapped in Dragonmaw cages.'
        },
        {
          stepNumber: 2,
          title: 'Purified Dragon-Essence',
          zone: 'Blackwing Lair (Nefarian\'s Sanctum)',
          type: 'Raid',
          description: 'Purify a canister of Nefarian\'s chromatic blood using Holy Light.'
        },
        {
          stepNumber: 3,
          title: 'Breaking the Demon Soul\'s Chains',
          zone: 'Grim Batol (The Demon Soul)',
          type: 'Raid',
          description: 'Channel your Lay on Hands ability directly into the Life-Binder during the final raid confrontation.'
        }
      ],
      rewards: [
        {
          name: 'Ash-Hammer of the Red Dawn',
          type: 'Two-Hand Mace (Epic)',
          rarity: 'Epic',
          icon: 'inv_hammer_16',
          description: 'Equip: Increases spell power by 30 and attack power by 60. Chance on hit: Bursts in a nova of Holy Fire.'
        },
        {
          name: 'Aura of the Zealot',
          type: 'Class Aura (Permanent)',
          rarity: 'Epic',
          icon: 'spell_holy_auramastery',
          description: 'Grants your party within 30 yards 10% increased melee and ranged attack haste.'
        }
      ]
    },
    {
      id: 'pal-t25',
      title: 'The Light in the Darkness',
      tier: 'Tier 2.5',
      targetClass: 'Paladin',
      levelReq: 60,
      summary: 'Venture into the floating ziggurat of Stratholme and forge the Beacon of Light.',
      flavorQuote: '"Where darkness reigns, we become the sunrise."',
      locations: ['Crown of the Damned (Stratholme Necropolis)', 'The Vaults of Uldum'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Soul-Cages of Mograine',
          zone: 'Crown of the Damned (The Blood Council)',
          type: 'Raid',
          description: 'Cleanse the corrupted soul-crystals dropped by the death knight captains.'
        },
        {
          stepNumber: 2,
          title: 'The Solar Prisms of Origination',
          zone: 'The Vaults of Uldum (Engine of Origination)',
          type: 'Dungeon',
          description: 'Refract the Titan solar beam through your holy libram to awaken the Beacon.'
        }
      ],
      rewards: [
        {
          name: 'Shield of the Dawnbringer',
          type: 'Shield (Epic)',
          rarity: 'Epic',
          icon: 'inv_shield_06',
          description: 'Equip: Increases healing done by up to 45 and grants +12 MP5.'
        },
        {
          name: 'Beacon of Light',
          type: 'Class Spell (Permanent)',
          rarity: 'Epic',
          icon: 'ability_paladin_beaconoflight',
          description: 'Designate a party member as a Beacon of Light. All heals cast on other allies also heal the Beacon for 100% of the amount.'
        }
      ]
    },
    {
      id: 'pal-t3',
      title: 'The Celestial Judgment of Medivh',
      tier: 'Tier 3',
      targetClass: 'Paladin',
      levelReq: 60,
      summary: 'Infiltrate the highest tower of Karazhan to master celestial retribution against the Burning Legion.',
      flavorQuote: '"The stars themselves bow before righteous judgment."',
      locations: ['Karazhan Crypts', 'Naxxramas', 'Karazhan (Upper Tower)'],
      steps: [
        {
          stepNumber: 1,
          title: 'Relics of the Forgotten Chapel',
          zone: 'Karazhan Crypts (Reliquary of Secrets)',
          type: 'Dungeon',
          description: 'Recover the ancient Silver Hand chalice from the Void-Sealer in the crypts.'
        },
        {
          stepNumber: 2,
          title: 'The Judgment of Kel\'Thuzad',
          zone: 'Naxxramas (Frostwyrm Lair)',
          type: 'Raid',
          description: 'Survive Kel\'Thuzad\'s Frost Blast and strike his phylactery with Holy Wrath.'
        },
        {
          stepNumber: 3,
          title: 'The Celestial Observatory',
          zone: 'Karazhan (Upper Tower)',
          type: 'Raid',
          description: 'Defeat Medivh\'s Echo in the highest chamber of the tower while maintaining Consecration across the floor.'
        }
      ],
      rewards: [
        {
          name: 'Greatsword of the Celestial Justiciar',
          type: 'Two-Hand Sword (Epic)',
          rarity: 'Epic',
          icon: 'inv_sword_33',
          description: 'Equip: Increases critical strike chance by 2% and adds 45 Holy damage to all melee weapon strikes.'
        },
        {
          name: 'Sacred Cleansing & Holy Ward',
          type: 'Passive Mastery',
          rarity: 'Epic',
          icon: 'spell_holy_purifyingpower',
          description: 'Your Cleanse ability also grants the target a sacred ward absorbing 500 damage for 6 sec.'
        }
      ]
    },
    {
      id: 'pal-t35',
      title: 'The Aegis of the Sunwell',
      tier: 'Tier 3.5',
      targetClass: 'Paladin',
      levelReq: 60,
      summary: 'Restore the ancient Sunwell beacon on the Dragon Isles to banish Old God madness forever.',
      flavorQuote: '"By the Sunwell, we endure."',
      locations: ['Quel\'Thalas Exterior (Dead Scar)', 'The Dragon Isles', 'Temple of the Old Gods'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Dead Scar Consecration',
          zone: 'Quel\'Thalas Exterior (Windrunner Spire)',
          type: 'Open World',
          description: 'Consecrate the burned scar leading into Quel\'Thalas against waves of Scourge banshees.'
        },
        {
          stepNumber: 2,
          title: 'The Old God Temple Purge',
          zone: 'Temple of the Old Gods (Avatar of the Old God)',
          type: 'Raid',
          description: 'Maintain the holy ward against the Avatar\'s madness aura, protecting your entire raid.'
        }
      ],
      rewards: [
        {
          name: 'Aegis of the Sunwell Eternal',
          type: 'Paladin Relic (Legendary Quality)',
          rarity: 'Epic',
          icon: 'inv_misc_gem_pearl_04',
          description: 'Equip: Reduces the mana cost of all Blessings by 50% and increases the duration of Divine Shield by 2 sec.'
        },
        {
          name: 'Golden Charger of the Sun',
          type: 'Epic Paladin Mount',
          rarity: 'Epic',
          icon: 'ability_mount_charger',
          description: 'Summons a majestic armored golden warhorse radiating holy light (100% speed).'
        }
      ]
    }
  ],

  // ==========================================
  // HUNTER
  // ==========================================
  Hunter: [
    {
      id: 'hunt-t1',
      title: 'The Primal Hunt of the Emerald Dream',
      tier: 'Tier 1.5',
      targetClass: 'Hunter',
      levelReq: 60,
      summary: 'Stalk and tranquilize mythical primal beasts across Kalimdor and harvest the horns of the Nightmare Drakes.',
      flavorQuote: '"A true hunter does not kill for glory; they kill to keep the balance." — Hemet Nesingwary Jr.',
      locations: ['Feralas', 'Ashenvale', 'The Emerald Nightmare'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Four Shadows of Kalimdor',
          zone: 'Feralas, Winterspring, Stranglethorn',
          type: 'Open World',
          description: 'Track and tranquilize four rare wilderness beasts without pet assistance.'
        },
        {
          stepNumber: 2,
          title: 'Horns of the Corrupted Drake',
          zone: 'The Emerald Nightmare (Emeriss & Taerar)',
          type: 'Raid',
          description: 'Harvest pristine dragon horns to craft the bowstring of the Dream-Strung Longbow.'
        }
      ],
      rewards: [
        {
          name: 'Dream-Strung Greatbow / Harpoon',
          type: 'Ranged Bow / Polearm (Epic)',
          rarity: 'Epic',
          icon: 'inv_weapon_bow_08',
          description: 'Equip: Increases ranged attack power by 55 and your shots have a 5% chance to trigger Nature Dream-Bursts.'
        },
        {
          name: 'Flanking Strike Mastery',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'ability_hunter_harass',
          description: 'Enables Survival melee combat: You and your pet strike simultaneously for 100% weapon damage, building substantial cooperative threat and triggering Mongoose Bite.'
        }
      ]
    },
    {
      id: 'hunt-t2',
      title: 'The Red Drake Wyrm-Stalker',
      tier: 'Tier 2',
      targetClass: 'Hunter',
      levelReq: 60,
      summary: 'Defeat the elite Dragonmaw handlers in Grim Batol and master the craft of dragon-piercing ammunition.',
      flavorQuote: '"If it has wings, we can bring it down."',
      locations: ['Northeron', 'Grim Batol Tunnels', 'Grim Batol Raid'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Slaver\'s Whistle',
          zone: 'Northeron (The Dragonmaw Gates)',
          type: 'Open World',
          description: 'Steal the whistle of the master handler in Northeron.'
        },
        {
          stepNumber: 2,
          title: 'Harvesting Red Dragon Sinew',
          zone: 'Grim Batol (Raid)',
          type: 'Raid',
          description: 'Harvest ancient dragon sinew after freeing Alexstrasza\'s enslaved drakes.'
        }
      ],
      rewards: [
        {
          name: 'Wyrm-Stalker\'s Dragon-Bone Recurve',
          type: 'Ranged Bow (Epic)',
          rarity: 'Epic',
          icon: 'inv_weapon_bow_03',
          description: 'Equip: Increases ranged hit chance by 2% and increases damage against Dragonkin by 15%.'
        },
        {
          name: 'Exotic Munitions',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'inv_ammo_bullet_03',
          description: 'Allows crafting and loading of elemental ammunition (Incendiary, Frost-Biting, or Void-Piercing) that ignores heavy boss armor.'
        }
      ]
    },
    {
      id: 'hunt-t25',
      title: 'The Stalker of the Silithid Hive',
      tier: 'Tier 2.5',
      targetClass: 'Hunter',
      levelReq: 60,
      summary: 'Infiltrate Hive\'Zora undetected to harvest the pheromone gland of the Hive Queen and forge the Camouflage Cloak.',
      flavorQuote: '"To hunt the insect, one must become the sand."',
      locations: ['Silithus Hives', 'The Vaults of Uldum', 'Crown of the Damned'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Queen\'s Pheromone Gland',
          zone: 'Silithus (Hive\'Zora)',
          type: 'Espionage',
          description: 'Solo-sneak past Hive sentries to extract the pheromone gland without triggering hive alarms.'
        },
        {
          stepNumber: 2,
          title: 'The Air-Commanders of the Scourge',
          zone: 'Crown of the Damned (Stratholme Necropolis)',
          type: 'Raid',
          description: 'Shoot down 3 flying Frostwyrm gargoyles during the aerial ziggurat bombardment phase.'
        }
      ],
      rewards: [
        {
          name: 'Silithid Chitin Harpoon',
          type: 'Polearm (Epic)',
          rarity: 'Epic',
          icon: 'inv_spear_05',
          description: 'Equip: Increases agility by 42, stamina by 28, and chance to critically hit with melee abilities by 2%.'
        },
        {
          name: 'Camouflage Stride',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'ability_hunter_camouflage',
          description: 'Blend into the surroundings out of combat, reducing enemy detection radius and making you invisible to ranged tracking.'
        }
      ]
    },
    {
      id: 'hunt-t3',
      title: 'The Menagerie Phantom-Huntsman',
      tier: 'Tier 3',
      targetClass: 'Hunter',
      levelReq: 60,
      summary: 'Track the spectral predators roaming Medivh\'s astral menagerie and harvest necrotic sinew from Naxxramas.',
      flavorQuote: '"Even ghosts leave tracks if you know where to look."',
      locations: ['Karazhan Crypts', 'Naxxramas', 'Karazhan (Upper Tower)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Spectral Pack of the Crypts',
          zone: 'Karazhan Crypts (Well of the Forgotten)',
          type: 'Dungeon',
          description: 'Solo-track and defeat the ghost pack-leader in the dark flooded crypts.'
        },
        {
          stepNumber: 2,
          title: 'The Necrotic Sinew of Gluth',
          zone: 'Naxxramas (Construct Quarter)',
          type: 'Raid',
          description: 'Harvest pristine undead sinew from Gluth before he can consume his minions.'
        },
        {
          stepNumber: 3,
          title: 'The Celestial Menagerie',
          zone: 'Karazhan (Upper Tower)',
          type: 'Raid',
          description: 'Defeat the Curator and claim the Astral Huntsman Musket.'
        }
      ],
      rewards: [
        {
          name: 'Menagerie Huntsman\'s Astral Musket',
          type: 'Ranged Gun (Epic)',
          rarity: 'Epic',
          icon: 'inv_weapon_rifle_07',
          description: '2.90 Speed. Equip: Increases ranged attack power by 68 and your auto-shots ignore 150 of your target\'s armor.'
        },
        {
          name: 'Aspect of the Fox',
          type: 'Class Aspect (Permanent)',
          rarity: 'Epic',
          icon: 'ability_hunter_aspectofthefox',
          description: 'The Hunter adopts the aspect of a fox, empowering all party and raid members within 40 yards to cast all spells and ranged abilities while moving for 6 sec. (3 Min Cooldown) (Does not stack with Bloodlust/Heroism)'
        }
      ]
    },
    {
      id: 'hunt-t35',
      title: 'The Ancient Beast-Lord of the Isles',
      tier: 'Tier 3.5',
      targetClass: 'Hunter',
      levelReq: 60,
      summary: 'Journey to the mythical Dragon Isles to tame an untamed proto-dragon and shatter the Old God mind-corruptors.',
      flavorQuote: '"The primal beasts answered no master, until today."',
      locations: ['The Dragon Isles', 'Temple of the Old Gods'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Proto-Drake Bond',
          zone: 'The Dragon Isles (The Feral Roost)',
          type: 'Solo Trial',
          description: 'Survive a 10-minute battle of wills with an ancient proto-drake alpha without using tranquilizers.'
        },
        {
          stepNumber: 2,
          title: 'The Eye of the Void-Beast',
          zone: 'Temple of the Old Gods (The Aspect Council)',
          type: 'Raid',
          description: 'Sever the void-link connecting the Old God corruptor to the corrupted aspect brood.'
        }
      ],
      rewards: [
        {
          name: 'Feral Aspect\'s Wrath',
          type: 'Ranged Crossbow (Legendary Quality)',
          rarity: 'Epic',
          icon: 'inv_weapon_crossbow_08',
          description: 'Equip: Increases ranged critical strike chance by 3% and your shots have a chance to summon a spectral proto-whelp to strike the target.'
        },
        {
          name: 'Companion: Ancient Proto-Drake Companion',
          type: 'Exotic Pet / Companion',
          rarity: 'Epic',
          icon: 'ability_mount_drake_proto',
          description: 'Unlocks the ability to tame and summon exotic ancient Proto-Drake beasts.'
        }
      ]
    }
  ],

  // ==========================================
  // ROGUE
  // ==========================================
  Rogue: [
    {
      id: 'rog-t1',
      title: 'The Shadows of Ravenholdt',
      tier: 'Tier 1.5',
      targetClass: 'Rogue',
      levelReq: 60,
      summary: 'Prove your mastery of espionage by pickpocketing syndicate warlords, infiltrating Stormwind Vaults, and extracting dream-venom.',
      flavorQuote: '"The best blade is the one the enemy never sees coming." — Lord Jorach Ravenholdt',
      locations: ['Alterac Mountains', 'Stormwind Vaults', 'The Emerald Nightmare'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Syndicate Ciphers',
          zone: 'Alterac Valleys & Peaks',
          type: 'Espionage',
          description: 'Pickpocket 25 unique Syndicate lieutenants in the mountains without ever breaking stealth.'
        },
        {
          stepNumber: 2,
          title: 'Assassination in the Deep Brig',
          zone: 'Stormwind Vaults (The Interrogation Levels)',
          type: 'Dungeon',
          description: 'Silently eliminate Interrogator Vishas and steal his secret dossier.'
        },
        {
          stepNumber: 3,
          title: 'Extraction of Lethon\'s Venom',
          zone: 'The Emerald Nightmare (Lethon Encounter)',
          type: 'Raid',
          description: 'Extract concentrated shadow-venom directly from Lethon\'s fangs during combat.'
        }
      ],
      rewards: [
        {
          name: 'Ravenholdt Master\'s Stiletto',
          type: 'Dagger (Epic)',
          rarity: 'Epic',
          icon: 'inv_knife_04',
          description: '1.40 Speed. Equip: Increases your chance to critically hit by 1% and applies Instant Poison VI on hit.'
        },
        {
          name: 'Blade Dance & Deadly Brew',
          type: 'Class Abilities (Permanent)',
          rarity: 'Epic',
          icon: 'ability_rogue_feint',
          description: 'Unlocks Blade Dance (converting combo points into up to 25% Dodge/Parry for evasion tanking) and Deadly Brew (auto-applying Deadly Poison with all poisons).'
        }
      ]
    },
    {
      id: 'rog-t2',
      title: 'The Dragonmaw Heist',
      tier: 'Tier 2',
      targetClass: 'Rogue',
      levelReq: 60,
      summary: 'Infiltrate the heavily fortified mountain vaults of Grim Batol to steal the master Dragonmaw siege key.',
      flavorQuote: '"Locks are just suggestions to a master of Ravenholdt."',
      locations: ['Northeron', 'Grim Batol Tunnels', 'Blackwing Lair'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Vault Key of the Slaver',
          zone: 'Northeron & Thundermar',
          type: 'Espionage',
          description: 'Pick the master lock of the Dragonmaw supply cart without alerting the sentry gryphons.'
        },
        {
          stepNumber: 2,
          title: 'Disarming Blackwing Security',
          zone: 'Blackwing Lair (Suppression Room)',
          type: 'Raid',
          description: 'Disarm all suppression devices in Blackwing Lair in under 3 minutes.'
        }
      ],
      rewards: [
        {
          name: 'Fang of the Red Brood',
          type: 'One-Hand Sword / Dagger (Epic)',
          rarity: 'Epic',
          icon: 'inv_sword_27',
          description: 'Chance on hit: Inflicts 250 Fire damage and reduces the target\'s armor by 100 for 15 sec.'
        },
        {
          name: 'Smoke Bomb Mastery',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'ability_rogue_smoke',
          description: 'Throws a smoke bomb creating a thick cloud for 5 sec. Enemies outside cannot target players inside with ranged spells.'
        }
      ]
    },
    {
      id: 'rog-t25',
      title: 'The Whisper in the Crypt',
      tier: 'Tier 2.5',
      targetClass: 'Rogue',
      levelReq: 60,
      summary: 'Pickpocket the phylactery key from Kel\'Thuzad\'s guard in Crown of the Damned without triggering combat.',
      flavorQuote: '"Death itself did not notice my shadow."',
      locations: ['Karazhan Crypts', 'Crown of the Damned (Stratholme Necropolis)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Spectral Key-Master',
          zone: 'Karazhan Crypts (Reliquary of Secrets)',
          type: 'Dungeon',
          description: 'Steal the spectral skeleton key from the Void-Sealer in the lowest crypt level.'
        },
        {
          stepNumber: 2,
          title: 'The Phylactery Pickpocket',
          zone: 'Crown of the Damned',
          type: 'Raid',
          description: 'Pickpocket the Phylactery-Guard in the center ziggurat room without being revealed by True Sight.'
        }
      ],
      rewards: [
        {
          name: 'Shadow-Stitcher\'s Kris',
          type: 'Dagger (Epic)',
          rarity: 'Epic',
          icon: 'inv_knife_03',
          description: '1.50 Speed. Equip: Increases attack power by 34 and your Ambush strikes ignore 25% armor.'
        },
        {
          name: 'Fan of Knives',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'ability_rogue_fanofknives',
          description: 'Instantly throw knives at all enemies within 8 yards, dealing 100% weapon damage and applying your active weapon poisons.'
        }
      ]
    },
    {
      id: 'rog-t3',
      title: 'The Master Thief of the Nether Tower',
      tier: 'Tier 3',
      targetClass: 'Rogue',
      levelReq: 60,
      summary: 'Infiltrate Medivh\'s private celestial observatory to steal the Astral Glass and master the Cloak of Shadows.',
      flavorQuote: '"Even magic cannot touch what cannot be caught."',
      locations: ['Karazhan Crypts', 'Naxxramas', 'Karazhan (Upper Tower)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Inverted Library Infiltration',
          zone: 'Karazhan (Upper Tower - Library)',
          type: 'Espionage',
          description: 'Steal the Astral Glass from the floating bookshelf while gravity is inverted.'
        },
        {
          stepNumber: 2,
          title: 'The Shade of Aran\'s Secret Tome',
          zone: 'Karazhan (Upper Tower)',
          type: 'Raid',
          description: 'Interrupt the Shade of Aran\'s Flame Wreath with Kick and claim his research notes.'
        }
      ],
      rewards: [
        {
          name: 'Ethereal Astral Dagger',
          type: 'Dagger (Epic)',
          rarity: 'Epic',
          icon: 'inv_knife_07',
          description: '1.80 Speed. Equip: Increases critical strike chance by 2% and your finishing moves refund 25 energy.'
        },
        {
          name: 'Cloak of Shadows',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'spell_shadow_nethercloak',
          description: 'Instant. Instantly removes all existing harmful spell effects and increases your chance to resist all spells by 90% for 5 sec. (1.5 Min Cooldown)'
        }
      ]
    },
    {
      id: 'rog-t35',
      title: 'The Faceless Assassin',
      tier: 'Tier 3.5',
      targetClass: 'Rogue',
      levelReq: 60,
      summary: 'Slay the shadow-constructs of the Old Gods on the Dragon Isles and claim the Edge of the Void-Strider.',
      flavorQuote: '"We were born in the dark; the void is just another alleyway."',
      locations: ['The Dragon Isles', 'Temple of the Old Gods'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Old God Shadow Stalkers',
          zone: 'The Dragon Isles (The Shattered Beachhead)',
          type: 'Solo Trial',
          description: 'Solo-eliminate 5 elite Void-Stalkers without being pulled out of Stealth.'
        },
        {
          stepNumber: 2,
          title: 'The Execution of the Avatar\'s Eye',
          zone: 'Temple of the Old Gods',
          type: 'Raid',
          description: 'Land the fatal Eviscerate strike on the Avatar of the Old God from behind.'
        }
      ],
      rewards: [
        {
          name: 'Edge of the Void-Strider',
          type: 'One-Hand Dagger / Sword (Legendary Quality)',
          rarity: 'Epic',
          icon: 'inv_weapon_shortblade_21',
          description: 'Chance on hit: Enter Void-Stealth for 3 sec, allowing an immediate out-of-combat opener during active raid combat.'
        },
        {
          name: 'Title: Master of the Unseen',
          type: 'Prestige Title',
          rarity: 'Epic',
          icon: 'inv_misc_ribbon_01',
          description: 'Permanently unlocks the in-game title: "Master of the Unseen".'
        }
      ]
    }
  ],

  // ==========================================
  // PRIEST
  // ==========================================
  Priest: [
    {
      id: 'pri-t1',
      title: 'Benediction and Anathema: The Awakening',
      tier: 'Tier 1.5',
      targetClass: 'Priest',
      levelReq: 60,
      summary: 'Deepen the bond between Holy and Shadow magic by cleansing the spirits of Stratholme and purifying the Emerald Dream.',
      flavorQuote: '"In the balance between light and shadow lies absolute dominion."',
      locations: ['Western Plaguelands', 'Karazhan Crypts', 'The Emerald Nightmare'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Wandering Souls of Stratholme',
          zone: 'Western & Eastern Plaguelands',
          type: 'Solo Trial',
          description: 'Escort 50 fleeing peasant spirits to safety while repelling Scourge death-knights.'
        },
        {
          stepNumber: 2,
          title: 'The Reliquary of Secrets',
          zone: 'Karazhan Crypts',
          type: 'Dungeon',
          description: 'Solve the shadow-torch puzzle in the crypts to awaken the staff\'s dormant eye.'
        },
        {
          stepNumber: 3,
          title: 'Purification of the Dreamer',
          zone: 'The Emerald Nightmare',
          type: 'Raid',
          description: 'Heal Ysera back to sanity from the threshold of death.'
        }
      ],
      rewards: [
        {
          name: 'Awakened Benediction & Anathema',
          type: 'Staff (Epic)',
          rarity: 'Epic',
          icon: 'inv_staff_30',
          description: 'Equip: Increases healing by up to 106 and spell damage by up to 55. Use: Transform into Anathema or Benediction.'
        },
        {
          name: 'Prayer of Mending & Mind Sear',
          type: 'Class Spells (Permanent)',
          rarity: 'Epic',
          icon: 'spell_holy_prayerofmendingtga',
          description: 'Unlocks Prayer of Mending (bouncing reactive Holy heal) and Mind Sear (channeled Shadow AoE pulsing around target).'
        }
      ]
    },
    {
      id: 'pri-t2',
      title: 'The Fire of Redemption',
      tier: 'Tier 2',
      targetClass: 'Priest',
      levelReq: 60,
      summary: 'Channel Holy Light into Alexstrasza\'s enslaved brood to alleviate their torture and extinguish the shadow-fire in Grim Batol.',
      flavorQuote: '"Even a dragon\'s fiery heart requires the soothe of the spirit."',
      locations: ['Grim Batol Tunnels', 'Blackwing Lair', 'Grim Batol Raid'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Soothing of the Whelps',
          zone: 'Grim Batol Tunnels (The Hatcheries)',
          type: 'Dungeon',
          description: 'Cast Flash Heal on 20 tortured dragonkin while avoiding Dragonmaw slaver strikes.'
        },
        {
          stepNumber: 2,
          title: 'The Spirit of the Life-Binder',
          zone: 'Grim Batol (Raid)',
          type: 'Raid',
          description: 'Channel your Divine Hymn during the Demon Soul shattering to shield the Queen.'
        }
      ],
      rewards: [
        {
          name: 'Censer of the Life-Binder',
          type: 'Off-Hand (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_urn_01',
          description: 'Equip: Increases healing done by up to 48 and your critical heals grant the target 10% bonus armor.'
        },
        {
          name: 'Guardian Spirit',
          type: 'Class Spell (Permanent)',
          rarity: 'Epic',
          icon: 'spell_holy_guardianspirit',
          description: 'Calls upon a guardian spirit to watch over an ally, increasing healing received by 40% and sacrificing itself to prevent death. (3 Min Cooldown)'
        }
      ]
    },
    {
      id: 'pri-t25',
      title: 'The Light in the Necropolis',
      tier: 'Tier 2.5',
      targetClass: 'Priest',
      levelReq: 60,
      summary: 'Shatter the necrotic soul-cages inside Crown of the Damned to release the trapped citizens of Lordaeron.',
      flavorQuote: '"No soul is beyond the reach of grace."',
      locations: ['Crown of the Damned (Stratholme Necropolis)', 'The Vaults of Uldum'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Phylactery Light-Burst',
          zone: 'Crown of the Damned',
          type: 'Raid',
          description: 'Dispel the Frostwyrm Breath using Mass Dispel.'
        },
        {
          stepNumber: 2,
          title: 'Solar Alignment of Origination',
          zone: 'The Vaults of Uldum',
          type: 'Dungeon',
          description: 'Refract the Maker\'s solar prism through your holy symbol.'
        }
      ],
      rewards: [
        {
          name: 'Lightwell Beacon of Hope',
          type: 'Priest Relic (Epic)',
          rarity: 'Epic',
          icon: 'spell_holy_summonlightwell',
          description: 'Equip: Your Power Word: Shield absorbs an additional 300 damage and restores 100 mana to the target upon breaking.'
        },
        {
          name: 'Pain Suppression',
          type: 'Class Spell (Permanent)',
          rarity: 'Epic',
          icon: 'spell_holy_painsupression',
          description: 'Instantly reduces all damage taken by an ally by 40% for 8 sec and reduces their threat by 5%. Castable while stunned. (2 Min Cooldown)'
        }
      ]
    },
    {
      id: 'pri-t3',
      title: 'The Echo of Medivh\'s Divinity',
      tier: 'Tier 3',
      targetClass: 'Priest',
      levelReq: 60,
      summary: 'Commune with the ghost of Medivh in Karazhan\'s upper observatory and master Shadow Word: Death.',
      flavorQuote: '"Life and death are but two verses of the same psalm."',
      locations: ['Karazhan Crypts', 'Naxxramas', 'Karazhan (Upper Tower)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Spectral Garden Meditation',
          zone: 'Karazhan (Upper Tower)',
          type: 'Solo Trial',
          description: 'Meditate in the floating celestial arboretum for 3 minutes without succumbing to arcane vertigo.'
        },
        {
          stepNumber: 2,
          title: 'Cleansing the Four Horsemen',
          zone: 'Naxxramas (Military Quarter)',
          type: 'Raid',
          description: 'Shackle the undead minions of Lady Blaumeux and survive the void zones.'
        }
      ],
      rewards: [
        {
          name: 'Staff of the Astral Seraph',
          type: 'Staff (Epic)',
          rarity: 'Epic',
          icon: 'inv_staff_32',
          description: 'Equip: Increases spell power by up to 85 and your direct heals have a 10% chance to grant the target a 500 absorption shield.'
        },
        {
          name: 'Shadow Word: Death',
          type: 'Class Spell (Permanent)',
          rarity: 'Epic',
          icon: 'spell_shadow_demonicfortitude',
          description: 'A word of dark binding that inflicts massive Shadow damage to the target. If the target does not die, the caster takes equal damage.'
        }
      ]
    },
    {
      id: 'pri-t35',
      title: 'The Void Weaver\'s Ascension',
      tier: 'Tier 3.5',
      targetClass: 'Priest',
      levelReq: 60,
      summary: 'Withstand the mind-flay of the Old God Avatar on the Dragon Isles and transmute its dark energy into celestial light.',
      flavorQuote: '"I looked into the void, and the void bowed."',
      locations: ['The Dragon Isles', 'Temple of the Old Gods'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Mind of the Proto-Old God',
          zone: 'The Dragon Isles (Old God Temple)',
          type: 'Solo Trial',
          description: 'Resist 10 stacks of Old God Madness without losing mental composure.'
        },
        {
          stepNumber: 2,
          title: 'Transmutation of the Black Empire',
          zone: 'Temple of the Old Gods',
          type: 'Raid',
          description: 'Purify the core of the Avatar of the Old God using Holy Nova.'
        }
      ],
      rewards: [
        {
          name: 'Scepter of the Cosmic Balance',
          type: 'Main-Hand Mace (Legendary Quality)',
          rarity: 'Epic',
          icon: 'inv_mace_28',
          description: 'Equip: Increases healing by up to 120 and spell damage by up to 75. Grants +25 MP5.'
        },
        {
          name: 'Title: High Priest of the Timeways',
          type: 'Prestige Title',
          rarity: 'Epic',
          icon: 'inv_misc_ribbon_01',
          description: 'Permanently unlocks the in-game title: "High Priest of the Timeways".'
        }
      ]
    }
  ],

  // ==========================================
  // SHAMAN
  // ==========================================
  Shaman: [
    {
      id: 'sha-t1',
      title: 'The Elemental Unification of Azeroth',
      tier: 'Tier 1.5',
      targetClass: 'Shaman',
      levelReq: 60,
      summary: 'Commune with the primal elementals of Earth, Wind, Fire, and Water to awaken the Way of Earth and master the fury of Lava Burst.',
      flavorQuote: '"The earth hears our call; the storms answer our rage." — Farseer Nobundo',
      locations: ['Silithus', 'The Hinterlands', 'The Emerald Nightmare'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Whispering Earth',
          zone: 'Silithus (Crystal Vale)',
          type: 'Solo Trial',
          description: 'Commune with the ancient earth spirit in the Crystal Vale and survive its tremors.'
        },
        {
          stepNumber: 2,
          title: 'The Storm atop Aerie Peak',
          zone: 'The Hinterlands (Aerie Peak Heights)',
          type: 'Open World',
          description: 'Channel lightning bolts through your totems during a thunderstorm.'
        },
        {
          stepNumber: 3,
          title: 'Purging the Roots',
          zone: 'The Emerald Nightmare',
          type: 'Raid',
          description: 'Cleanse the corrupted water springs feeding the World Tree roots.'
        }
      ],
      rewards: [
        {
          name: 'Totem of the Primal Earth-Warder',
          type: 'Shaman Relic (Epic)',
          rarity: 'Epic',
          icon: 'spell_nature_strengthofearthtotem02',
          description: 'Equip: Increases armor while Way of Earth is active by 20% and increases threat generated by Earth Shock by 50%.'
        },
        {
          name: 'Way of Earth & Lava Burst',
          type: 'Class Abilities (Permanent)',
          rarity: 'Epic',
          icon: 'spell_shaman_lavasurge',
          description: 'Unlocks Way of Earth (Shaman tanking stance: 30% increased health, 10% damage reduction, 100% threat) and Lava Burst (guaranteed crit when target has Flame Shock).'
        }
      ]
    },
    {
      id: 'sha-t2',
      title: 'The Storm of the Wildhammer Peaks',
      tier: 'Tier 2',
      targetClass: 'Shaman',
      levelReq: 60,
      summary: 'Summon a catastrophic lightning storm atop Aerie Peak and strike the Dragonmaw forge in Grim Batol with elemental fury.',
      flavorQuote: '"The mountain speaks in thunder."',
      locations: ['Northeron', 'Grim Batol Raid', 'Blackrock Mountain'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Thunder Altar of Northeron',
          zone: 'Northeron (Kirthaven)',
          type: 'Open World',
          description: 'Activate the four Wildhammer storm totems on the mountain ridge.'
        },
        {
          stepNumber: 2,
          title: 'The Forge-Shattering Lightning',
          zone: 'Grim Batol (The Forgemaster)',
          type: 'Raid',
          description: 'Strike the Forgemaster\'s master anvil with Chain Lightning during his enrage.'
        }
      ],
      rewards: [
        {
          name: 'Tempest-Caller\'s Storm-Mace',
          type: 'One-Hand Mace (Epic)',
          rarity: 'Epic',
          icon: 'inv_mace_13',
          description: '2.60 Speed. Equip: Increases spell damage by 35 and chance on hit to strike the target for 200 Nature damage.'
        },
        {
          name: 'Shamanistic Rage',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'spell_nature_shamanrage',
          description: 'Reduces all damage taken by 30% and gives your successful melee attacks a chance to regenerate mana equal to 15% of your attack power for 15 sec. (2 Min Cooldown)'
        }
      ]
    },
    {
      id: 'sha-t25',
      title: 'The Earth-Mother\'s Guidance',
      tier: 'Tier 2.5',
      targetClass: 'Shaman',
      levelReq: 60,
      summary: 'Harmonize the tectonic plates of Uldum and banish the unholy frost-storms of Stratholme Necropolis.',
      flavorQuote: '"The spirits never abandon their children."',
      locations: ['The Vaults of Uldum', 'Crown of the Damned (Stratholme Necropolis)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Titan Earth-Resonator',
          zone: 'The Vaults of Uldum (Obsidian Quarry)',
          type: 'Dungeon',
          description: 'Align the seismic stabilizers in the quarry to quell the rogue earth elementals.'
        },
        {
          stepNumber: 2,
          title: 'Quelling the Frost-Wyrms',
          zone: 'Crown of the Damned',
          type: 'Raid',
          description: 'Plant your Fire Resistance Totem in the center sanctum to protect the raid from Frostwyrm Breath.'
        }
      ],
      rewards: [
        {
          name: 'Pillar of the Earthen Guardian',
          type: 'Two-Hand Staff (Epic)',
          rarity: 'Epic',
          icon: 'inv_staff_13',
          description: 'Equip: Increases healing done by up to 72 and grants +15 MP5.'
        },
        {
          name: 'Ancestral Guidance',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'spell_nature_healingtouch',
          description: 'For the next 10 sec, 30% of all direct damage and healing you deal is converted into smart heals across up to 3 nearby injured allies.'
        }
      ]
    },
    {
      id: 'sha-t3',
      title: 'The Rift-Weaver\'s Totem',
      tier: 'Tier 3',
      targetClass: 'Shaman',
      levelReq: 60,
      summary: 'Channel astral storms through your totems to close Medivh\'s nether-rift in Karazhan\'s Upper Tower.',
      flavorQuote: '"Let the winds of fury blow across the realms."',
      locations: ['Karazhan Crypts', 'Naxxramas', 'Karazhan (Upper Tower)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Nether-Totem Inscription',
          zone: 'Karazhan Crypts (Reliquary of Secrets)',
          type: 'Dungeon',
          description: 'Carve astral runes into your totems using essence from the Void-Sealer.'
        },
        {
          stepNumber: 2,
          title: 'The Celestial Lightning Storm',
          zone: 'Karazhan (Upper Tower - Prince Malchezaar)',
          type: 'Raid',
          description: 'Channel your Lightning Shield to absorb falling astral meteors during the roof encounter.'
        }
      ],
      rewards: [
        {
          name: 'Staff of the Astral Elementalist',
          type: 'Staff (Epic)',
          rarity: 'Epic',
          icon: 'inv_staff_21',
          description: 'Equip: Increases Nature, Fire, and Frost spell damage by up to 75 and spell critical strike chance by 2%.'
        },
        {
          name: 'Bloodlust & Heroism Rite',
          type: 'Class Rite (Permanent)',
          rarity: 'Epic',
          icon: 'spell_nature_bloodlust',
          description: 'Increases melee, ranged, and spell casting speed for all party members by 30% for 40 sec. (5 Min Cooldown)'
        }
      ]
    },
    {
      id: 'sha-t35',
      title: 'The Primal Avatar of the Elements',
      tier: 'Tier 3.5',
      targetClass: 'Shaman',
      levelReq: 60,
      summary: 'Harness the raw primordial storms of the Dragon Isles and cleanse the Old God corruption from the world\'s core.',
      flavorQuote: '"I am the storm, the flame, and the immovable stone."',
      locations: ['The Dragon Isles', 'Temple of the Old Gods'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Primordial Storm Gathering',
          zone: 'The Dragon Isles (The Feral Roost)',
          type: 'Solo Trial',
          description: 'Channel the primordial hurricane atop the Dragon Isles summit without being blown off.'
        },
        {
          stepNumber: 2,
          title: 'Shattering the Void Aspect',
          zone: 'Temple of the Old Gods',
          type: 'Raid',
          description: 'Strike down the Aspect Council using ancestral elementals.'
        }
      ],
      rewards: [
        {
          name: 'Doomhammer of the Elements',
          type: 'Main-Hand Mace (Legendary Quality)',
          rarity: 'Epic',
          icon: 'inv_hammer_18',
          description: '2.60 Speed. Equip: Increases attack power by 70 and spell power by 55. Windfury Weapon triggers an additional attack and inflicts 150 bonus Nature damage.'
        },
        {
          name: 'Title: The Storm-Caller',
          type: 'Prestige Title',
          rarity: 'Epic',
          icon: 'inv_misc_ribbon_01',
          description: 'Permanently unlocks the in-game title: "The Storm-Caller".'
        }
      ]
    }
  ],

  // ==========================================
  // MAGE
  // ==========================================
  Mage: [
    {
      id: 'mag-t1',
      title: 'The Lost Arcanum of Tirisfal',
      tier: 'Tier 1.5',
      targetClass: 'Mage',
      levelReq: 60,
      summary: 'Recover the forgotten spellbook of the Council of Tirisfal from the Whispering Shore, Mazthoril Deeps, and the Emerald Dream.',
      flavorQuote: '"Magic is not just an art; it is the fundamental code of creation." — Archmage Khadgar',
      locations: ['Tirisfal Glades (Whispering Shore)', 'Mazthoril Deeps', 'The Emerald Nightmare'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Sunken Highborne Relics',
          zone: 'Tirisfal Coast & Whispering Shore',
          type: 'Open World',
          description: 'Dive deep into the submerged ruins off Tirisfal to retrieve 3 arcane focusing lenses.'
        },
        {
          stepNumber: 2,
          title: 'The Crystalline Core of Haleh',
          zone: 'Mazthoril Deeps (The Arcane Vaults)',
          type: 'Dungeon',
          description: 'Defeat Haleh\'s Betrayer in the deepest vault of Mazthoril to claim the pure Ley-Crystal.'
        },
        {
          stepNumber: 3,
          title: 'Stabilizing the Dream Rift',
          zone: 'The Emerald Nightmare',
          type: 'Raid',
          description: 'Channel your Arcane Explosion into the dimensional rift during the Emeriss encounter to seal it.'
        }
      ],
      rewards: [
        {
          name: 'Staff of the Tirisfal Arcane-Master',
          type: 'Staff (Epic)',
          rarity: 'Epic',
          icon: 'inv_staff_29',
          description: 'Equip: Increases spell power by up to 60 and spell critical strike chance by 2%.'
        },
        {
          name: 'Arcane Barrage & Frostfire Bolt',
          type: 'Class Spells (Permanent)',
          rarity: 'Epic',
          icon: 'spell_arcane_starfire',
          description: 'Unlocks Arcane Barrage (instant Arcane nuke for mobile rotation) and Frostfire Bolt (elemental bolt piercing fire/frost resistances).'
        }
      ]
    },
    {
      id: 'mag-t2',
      title: 'The Breath of the Red Dragonflight',
      tier: 'Tier 2',
      targetClass: 'Mage',
      levelReq: 60,
      summary: 'Capture the pure fiery breath of an uncorrupted Red Drake and weave it into a flaming spell-matrix atop Grim Batol.',
      flavorQuote: '"Fire burns only what is impure."',
      locations: ['Northeron', 'Grim Batol Raid', 'Blackwing Lair'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Flame-Vial of the Mountain',
          zone: 'Northeron (The Dragonmaw Gates)',
          type: 'Open World',
          description: 'Capture dragonfire in an enchanted glass vial during a Dragonmaw aerial raid.'
        },
        {
          stepNumber: 2,
          title: 'Weaving the Red Matrix',
          zone: 'Grim Batol (Raid)',
          type: 'Raid',
          description: 'Channel your Evocation atop the mountain summit while Alexstrasza is freed.'
        }
      ],
      rewards: [
        {
          name: 'Pyromancer\'s Crimson Focus',
          type: 'Off-Hand (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_gem_ruby_01',
          description: 'Equip: Increases Fire spell damage by up to 45 and your Fireballs have a 10% chance to refund their mana cost.'
        },
        {
          name: 'Dragon\'s Breath',
          type: 'Class Spell (Permanent)',
          rarity: 'Epic',
          icon: 'spell_fire_fireball02',
          description: 'Targets in a cone in front of the caster take massive Fire damage and are disoriented for 3 sec. (20 Sec Cooldown)'
        }
      ]
    },
    {
      id: 'mag-t25',
      title: 'The Titan Geometry of Uldum',
      tier: 'Tier 2.5',
      targetClass: 'Mage',
      levelReq: 60,
      summary: 'Solve the Maker\'s Terrace constellation puzzle and master the art of Spellsteal.',
      flavorQuote: '"Titan architecture is mathematics given form."',
      locations: ['The Vaults of Uldum', 'Crown of the Damned (Stratholme Necropolis)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Constellation Alignment',
          zone: 'The Vaults of Uldum (Maker\'s Terrace)',
          type: 'Dungeon',
          description: 'Decode the Titan constellation glyphs in under 2 minutes.'
        },
        {
          stepNumber: 2,
          title: 'Stealing the Scourge Shield',
          zone: 'Crown of the Damned',
          type: 'Raid',
          description: 'Steal the Frost Armor buff from the Blood Council necro-lords.'
        }
      ],
      rewards: [
        {
          name: 'Tome of the Celestial Matrix',
          type: 'Mage Relic / Off-Hand (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_book_06',
          description: 'Equip: Increases Arcane spell damage by up to 40 and reduces the cast time of Arcane Blast by 0.2 sec.'
        },
        {
          name: 'Spellsteal Mastery',
          type: 'Class Spell (Permanent)',
          rarity: 'Epic',
          icon: 'spell_arcane_arcane02',
          description: 'Steals a beneficial magical effect from the target and applies it to the Mage for up to 2 minutes.'
        }
      ]
    },
    {
      id: 'mag-t3',
      title: 'The Archmage of Karazhan\'s Celestial Rift',
      tier: 'Tier 3',
      targetClass: 'Mage',
      levelReq: 60,
      summary: 'Traverse the Inverted Castle in Karazhan and outwit the Shade of Aran in an arcane counterspell duel.',
      flavorQuote: '"Time is a river; a true mage can build a dam." — Medivh',
      locations: ['Karazhan Crypts', 'Naxxramas', 'Karazhan (Upper Tower)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Counterspell Duel',
          zone: 'Karazhan (Upper Tower - Shade of Aran)',
          type: 'Raid',
          description: 'Successfully Counterspell the Shade of Aran 3 times during his blizzard casting.'
        },
        {
          stepNumber: 2,
          title: 'The Celestial Chrono-Anchor',
          zone: 'Karazhan (Upper Tower)',
          type: 'Raid',
          description: 'Anchor the temporal rift on the tower roof using Atiesh\'s resonating crystal.'
        }
      ],
      rewards: [
        {
          name: 'Atiesh\'s Astral Resonator',
          type: 'Wand / Off-Hand (Epic)',
          rarity: 'Epic',
          icon: 'inv_wand_06',
          description: 'Equip: Increases spell damage by up to 50 and your direct spell crits reduce the remaining cooldown of Combustion by 2 sec.'
        },
        {
          name: 'Chrono-Compression (The "Fast-Forward" Engine)',
          type: 'Class Spell (Permanent)',
          rarity: 'Epic',
          icon: 'ability_mage_timewarp',
          description: 'Bends local space-time so that for 15 sec, all party or raid members experience time at 200% speed: Cooldowns recover twice as fast (1s ticks 2s of CD), DoTs/HoTs/channels resolve twice as fast without losing duration or total output, and Resource generation (Energy, Rage, Mana ticks) occurs at double rate. (5 Min Cooldown) (Does not stack with Bloodlust/Heroism)'
        }
      ]
    },
    {
      id: 'mag-t35',
      title: 'The Master of the Timeways',
      tier: 'Tier 3.5',
      targetClass: 'Mage',
      levelReq: 60,
      summary: 'Mend a shattered Bronze Dragonflight time-anomaly on the Dragon Isles and seal the Old God temporal rift.',
      flavorQuote: '"The timeline is restored. Eternity is ours."',
      locations: ['The Dragon Isles', 'Temple of the Old Gods'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Shattered Hourglass',
          zone: 'The Dragon Isles (Old God Temple Entrance)',
          type: 'Solo Trial',
          description: 'Solve the Bronze dragon temporal paradox puzzle within 90 seconds.'
        },
        {
          stepNumber: 2,
          title: 'Sealing the Void Paradox',
          zone: 'Temple of the Old Gods',
          type: 'Raid',
          description: 'Channel your Blizzard to freeze the spawning void-ripples before they merge into the Avatar.'
        }
      ],
      rewards: [
        {
          name: 'Scepter of the Timeless Archmage',
          type: 'Two-Hand Staff (Legendary Quality)',
          rarity: 'Epic',
          icon: 'inv_staff_33',
          description: 'Equip: Increases spell damage and healing by up to 110 and spell critical strike chance by 3%. Chance on cast: Freezes time for 2 sec.'
        },
        {
          name: 'Title: Grand Magister of Azeroth',
          type: 'Prestige Title',
          rarity: 'Epic',
          icon: 'inv_misc_ribbon_01',
          description: 'Permanently unlocks the in-game title: "Grand Magister of Azeroth".'
        }
      ]
    }
  ],

  // ==========================================
  // WARLOCK
  // ==========================================
  Warlock: [
    {
      id: 'war-warlock-t1',
      title: 'The Pact of the Demonic Metamorphosis',
      tier: 'Tier 1.5',
      targetClass: 'Warlock',
      levelReq: 60,
      summary: 'Subjugate a colossal demon lord in the fel-scarred barrows of Felwood and bind its essence into a dark transformation soul-gem.',
      flavorQuote: '"Why summon a demon when you can become one?"',
      locations: ['Felwood (Jaedenar)', 'Timbermaw Hold (The Fel-Scar)', 'The Emerald Nightmare'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Shadow Hold Infiltration',
          zone: 'Felwood (Shadow Hold)',
          type: 'Solo Trial',
          description: 'Infiltrate the deepest sanctum of Shadow Hold in Jaedenar and summon a high-ranking Dreadlord using 5 Soul Shards.'
        },
        {
          stepNumber: 2,
          title: 'The Fel-Lord\'s Binding',
          zone: 'Timbermaw Hold (The Fel-Scar)',
          type: 'Dungeon',
          description: 'Defeat Xandros the Fel-Lord and trap his soul inside the Soul-Carved Orb.'
        },
        {
          stepNumber: 3,
          title: 'Corrupting the Dreamer\'s Core',
          zone: 'The Emerald Nightmare (Corrupted Ysera)',
          type: 'Raid',
          description: 'Harvest the corrupted nightmare heart to finalize the binding ceremony.'
        }
      ],
      rewards: [
        {
          name: 'Grimoire of the Demon Core',
          type: 'Off-Hand (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_book_09',
          description: 'Equip: Increases spell damage by up to 35 and increases armor by 300 while in Metamorphosis.'
        },
        {
          name: 'Metamorphosis & Chaos Bolt',
          type: 'Class Abilities (Permanent)',
          rarity: 'Epic',
          icon: 'spell_shadow_demonform',
          description: 'Unlocks Metamorphosis (transform into a demon tank with 500% armor bonus, Demonic Charge, and Searing Pain taunt) and Chaos Bolt (unstoppable chaos fire blast).'
        }
      ]
    },
    {
      id: 'war-warlock-t2',
      title: 'The Demon Soul\'s Dark Echo',
      tier: 'Tier 2',
      targetClass: 'Warlock',
      levelReq: 60,
      summary: 'Harvest residue from the shattered Demon Soul in Grim Batol and siphon draconic vitality to empower your shadow curses.',
      flavorQuote: '"Power does not belong to the worthy; it belongs to the bold."',
      locations: ['Northeron', 'Grim Batol Tunnels', 'Grim Batol Raid'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Twilight Shadow-Runes',
          zone: 'Northeron (Twilight Ridge)',
          type: 'Open World',
          description: 'Siphon dark magic from 3 Twilight Hammer ritual circles.'
        },
        {
          stepNumber: 2,
          title: 'The Dragon Soul Residue',
          zone: 'Grim Batol (Raid)',
          type: 'Raid',
          description: 'Extract the dark residue from the shattered Demon Soul artifact after Nek\'rosh is slain.'
        }
      ],
      rewards: [
        {
          name: 'Skull of the Dragonmaw Warlock',
          type: 'Off-Hand (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_bone_skull_02',
          description: 'Equip: Increases Shadow and Fire spell damage by up to 42 and increases spell hit chance by 2%.'
        },
        {
          name: 'Haunt & Seed of Corruption',
          type: 'Class Spells (Permanent)',
          rarity: 'Epic',
          icon: 'ability_warlock_haunt',
          description: 'Unlocks Haunt (deals shadow damage and increases your Shadow damage over time by 20%) and Seed of Corruption (detonating shadow AoE dot).'
        }
      ]
    },
    {
      id: 'war-warlock-t25',
      title: 'The Necrotic Soul-Harvest',
      tier: 'Tier 2.5',
      targetClass: 'Warlock',
      levelReq: 60,
      summary: 'Infiltrate Kel\'Thuzad\'s floating ziggurat and siphon the necrotic souls of the Scourge Council to master Demonic Teleportation.',
      flavorQuote: '"Even death bows to the siphon of a master warlock."',
      locations: ['Crown of the Damned (Stratholme Necropolis)', 'The Vaults of Uldum'],
      steps: [
        {
          stepNumber: 1,
          title: 'Siphoning the Blood Council',
          zone: 'Crown of the Damned',
          type: 'Raid',
          description: 'Channel Drain Soul on the Blood Council commanders in the aerial necropolis.'
        },
        {
          stepNumber: 2,
          title: 'The Titan Power Matrix Siphon',
          zone: 'The Vaults of Uldum (Engine of Origination)',
          type: 'Dungeon',
          description: 'Infuse your soul-stones with the raw energy of the Engine of Origination.'
        }
      ],
      rewards: [
        {
          name: 'Orb of the Scourge-Binder',
          type: 'Off-Hand (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_gem_bloodstone_02',
          description: 'Equip: Increases spell damage by up to 45 and causes your Life Tap to grant 20% bonus spirit for 10 sec.'
        },
        {
          name: 'Demonic Circle: Teleport',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'spell_shadow_demoniccirclesummon',
          description: 'Place a demonic circle on the ground for 6 min. Cast again to instantly teleport to the circle and remove all movement slowing effects. (30 Sec Cooldown)'
        }
      ]
    },
    {
      id: 'war-warlock-t3',
      title: 'The Nether-Lord of Medivh\'s Spire',
      tier: 'Tier 3',
      targetClass: 'Warlock',
      levelReq: 60,
      summary: 'Summon a Legion vanguard commander through Medivh\'s nether portal in Karazhan and compel them to surrender their Dreadsteed.',
      flavorQuote: '"The Burning Legion thought they were the masters of fel. They were mistaken."',
      locations: ['Karazhan Crypts', 'Naxxramas', 'Karazhan (Upper Tower)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Nether-Rift Ritual',
          zone: 'Karazhan (Upper Tower - Dimensional Rift)',
          type: 'Solo Trial',
          description: 'Solo-defeat an elite Pit Lord summoned through Medivh\'s open nether rift.'
        },
        {
          stepNumber: 2,
          title: 'The Phylactery Siphon of Kel\'Thuzad',
          zone: 'Naxxramas',
          type: 'Raid',
          description: 'Siphon the cold necrotic energy from Kel\'Thuzad\'s chamber.'
        }
      ],
      rewards: [
        {
          name: 'Staff of the Burning Nether',
          type: 'Two-Hand Staff (Epic)',
          rarity: 'Epic',
          icon: 'inv_staff_20',
          description: 'Equip: Increases Shadow and Fire spell damage by up to 88 and spell critical strike chance by 2%.'
        },
        {
          name: 'Mount: Fel-Fire Dreadsteed of Karazhan',
          type: 'Epic Warlock Mount',
          rarity: 'Epic',
          icon: 'spell_nature_swiftness',
          description: 'Summons a blazing, armor-clad demonic dreadsteed trailing green nether-fire (100% speed).'
        }
      ]
    },
    {
      id: 'war-warlock-t35',
      title: 'The Voice of the Old God Void',
      tier: 'Tier 3.5',
      targetClass: 'Warlock',
      levelReq: 60,
      summary: 'Bind the maddening whispers of the Old God Avatar on the Dragon Isles into a dark soul-stone.',
      flavorQuote: '"You speak of madness as if it were a weakness. To me, it is power."',
      locations: ['The Dragon Isles', 'Temple of the Old Gods'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Void-Whisper Binding',
          zone: 'The Dragon Isles (The Feral Roost)',
          type: 'Solo Trial',
          description: 'Absorb 5 dark void rifts along the Dragon Isles coastline without losing your soul.'
        },
        {
          stepNumber: 2,
          title: 'Subjugation of the Avatar',
          zone: 'Temple of the Old Gods',
          type: 'Raid',
          description: 'Strike the killing blow on the Avatar of the Old God using Drain Soul.'
        }
      ],
      rewards: [
        {
          name: 'Void-Caller\'s Dark Grimoire',
          type: 'Two-Hand Staff / Off-Hand (Legendary Quality)',
          rarity: 'Epic',
          icon: 'inv_misc_book_10',
          description: 'Equip: Increases spell damage by up to 115. Your Corruption and Immolate spells tick 20% faster.'
        },
        {
          name: 'Title: Lord of the Shadow Council',
          type: 'Prestige Title',
          rarity: 'Epic',
          icon: 'inv_misc_ribbon_01',
          description: 'Permanently unlocks the in-game title: "Lord of the Shadow Council".'
        }
      ]
    }
  ],

  // ==========================================
  // DRUID
  // ==========================================
  Druid: [
    {
      id: 'dru-t1',
      title: 'The Restoration of Nordrassil\'s Roots',
      tier: 'Tier 1.5',
      targetClass: 'Druid',
      levelReq: 60,
      summary: 'Awaken the ancient sleeping druids in the Barrow Dens of Hyjal and cleanse the nightmare roots beneath the Great Trees of Azeroth.',
      flavorQuote: '"The Dream sleeps no longer. We awaken to save the waking world." — Archdruid Malfurion Stormrage',
      locations: ['Moonglade', 'The Barrow Dens (Hyjal)', 'The Emerald Nightmare'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Ritual of the Great Barrow',
          zone: 'Moonglade (The Great Barrow)',
          type: 'Solo Trial',
          description: 'Commune with the spirit of Remulos and gather 10 pure Moonwell tears.'
        },
        {
          stepNumber: 2,
          title: 'Awakening the Hibernating Druids',
          zone: 'The Barrow Dens (The Roots of Nordrassil)',
          type: 'Dungeon',
          description: 'Defeat Archimonde\'s Echo and cleanse the Root-Tender in the deepest caverns.'
        },
        {
          stepNumber: 3,
          title: 'Cleansing the Four Emerald Dragons',
          zone: 'The Emerald Nightmare',
          type: 'Raid',
          description: 'Cleanse Lethon, Emeriss, Taerar, and Ysondre to restore the balance of the Dream.'
        }
      ],
      rewards: [
        {
          name: 'Staff of the Emerald Dream-Walker',
          type: 'Staff (Epic)',
          rarity: 'Epic',
          icon: 'inv_staff_09',
          description: 'Equip: Increases healing done by up to 64 and increases spell critical strike chance by 2%.'
        },
        {
          name: 'Eclipse & Savage Roar Mastery',
          type: 'Class Abilities (Permanent)',
          rarity: 'Epic',
          icon: 'spell_nature_starfall',
          description: 'Unlocks Eclipse (alternating Lunar/Solar spell damage cycle for infinite Moonkin mana sustain) and Savage Roar (finishing move in Cat Form that increases physical damage done by 30%).'
        }
      ]
    },
    {
      id: 'dru-t2',
      title: 'The Fury of the Red Dragon-Binder',
      tier: 'Tier 2',
      targetClass: 'Druid',
      levelReq: 60,
      summary: 'Channel nature magic to soothe the tortured whelps in Grim Batol and restore the scorched soil of the mountain.',
      flavorQuote: '"From blackened ashes, the green world rises renewed."',
      locations: ['Northeron', 'Grim Batol Tunnels', 'Grim Batol Raid'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Rebirth of Northeron Flora',
          zone: 'Northeron & Kirthaven',
          type: 'Open World',
          description: 'Plant 10 enchanted acorn seeds in the scorched Dragonmaw war-camps.'
        },
        {
          stepNumber: 2,
          title: 'Restoration of the Life-Binder',
          zone: 'Grim Batol (Raid)',
          type: 'Raid',
          description: 'Cast Rejuvenation on the enslaved Red Dragonflight during the final encounter.'
        }
      ],
      rewards: [
        {
          name: 'Idol of the Wild Life-Binder',
          type: 'Druid Relic (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_idol_02',
          description: 'Equip: Increases healing done by Rejuvenation and Regrowth by up to 40 and grants +10 MP5.'
        },
        {
          name: 'Lifebloom',
          type: 'Class Spell (Permanent)',
          rarity: 'Epic',
          icon: 'spell_nature_protectionformnature',
          description: 'Heals the target for Nature damage over 7 sec. Stacks up to 3 times on a single target. When it expires, the target is instantly healed for a large amount and the druid regains 50% mana cost.'
        }
      ]
    },
    {
      id: 'dru-t25',
      title: 'The Sands of the Ancient Wardens',
      tier: 'Tier 2.5',
      targetClass: 'Druid',
      levelReq: 60,
      summary: 'Awaken the dormant earthen guardians beneath the Tanaris sands and cleanse the blight from Stratholme Necropolis.',
      flavorQuote: '"Even in the desert, the roots run deep."',
      locations: ['The Vaults of Uldum', 'Crown of the Damned (Stratholme Necropolis)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Titan Verdant Matrix',
          zone: 'The Vaults of Uldum (Maker\'s Terrace)',
          type: 'Dungeon',
          description: 'Activate the ancient botanical incubator in the Titan vault.'
        },
        {
          stepNumber: 2,
          title: 'Purging the Aerial Blight',
          zone: 'Crown of the Damned',
          type: 'Raid',
          description: 'Dispel the necrotic blight clouds in the ziggurat using Abolish Poison.'
        }
      ],
      rewards: [
        {
          name: 'Seed of the Titan Bloom',
          type: 'Trinket (Epic)',
          rarity: 'Epic',
          icon: 'inv_misc_herb_01',
          description: 'Use: Increases spell power by 150 or attack power in animal forms by 300 for 20 sec. (2 Min Cooldown)'
        },
        {
          name: 'Typhoon',
          type: 'Class Spell (Permanent)',
          rarity: 'Epic',
          icon: 'ability_druid_typhoon',
          description: 'You summon a violent Typhoon that inflicts Nature damage when in contact with hostile targets, knocking them back and dazing them for 6 sec. (20 Sec Cooldown)'
        }
      ]
    },
    {
      id: 'dru-t3',
      title: 'The Astral Guardian of the Ivory Spire',
      tier: 'Tier 3',
      targetClass: 'Druid',
      levelReq: 60,
      summary: 'Meditate in Medivh\'s celestial garden under the stars and purge the necrotic plague from Naxxramas.',
      flavorQuote: '"The stars and the earth are of one cloth."',
      locations: ['Karazhan Crypts', 'Naxxramas', 'Karazhan (Upper Tower)'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Celestial Arboretum',
          zone: 'Karazhan (Upper Tower)',
          type: 'Solo Trial',
          description: 'Commune with the astral ancients in Medivh\'s floating garden.'
        },
        {
          stepNumber: 2,
          title: 'Cleansing the Necrotic Spider-Wing',
          zone: 'Naxxramas (Arachnid Quarter)',
          type: 'Raid',
          description: 'Cleanse Maexxna\'s poison glands using pure Moonwell water.'
        }
      ],
      rewards: [
        {
          name: 'Greatstaff of the Celestial Arch-Druid',
          type: 'Staff (Epic)',
          rarity: 'Epic',
          icon: 'inv_staff_15',
          description: 'Equip: Increases spell power by up to 75 and increases feral attack power by 350. Chance on cast to summon a spectral treant.'
        },
        {
          name: 'Barkskin of the Ancients',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'spell_nature_stoneclawtotem',
          description: 'Allows Barkskin to be cast while stunned, frozen, incapacitated, or asleep, and increases its damage reduction by an additional 10%.'
        }
      ]
    },
    {
      id: 'dru-t35',
      title: 'The Arch-Druid of the Dragon Isles',
      tier: 'Tier 3.5',
      targetClass: 'Druid',
      levelReq: 60,
      summary: 'Commune with the primal proto-drakes and heal the ancient Old God scars on the mythical Dragon Isles.',
      flavorQuote: '"We are the caretakers of the earth, from the first seed to the final star."',
      locations: ['The Dragon Isles', 'Temple of the Old Gods'],
      steps: [
        {
          stepNumber: 1,
          title: 'The Primal Flight Awakening',
          zone: 'The Dragon Isles (The Feral Roost)',
          type: 'Solo Trial',
          description: 'Soar through the ancient titan sky-rings atop the Dragon Isles without touching the ground.'
        },
        {
          stepNumber: 2,
          title: 'Healing the Wounded World-Soul',
          zone: 'Temple of the Old Gods',
          type: 'Raid',
          description: 'Channel your Tranquility to heal the slumbering titan seed during the Old God Avatar defeat.'
        }
      ],
      rewards: [
        {
          name: 'Avatar of the Timeless Forest',
          type: 'Two-Hand Staff (Legendary Quality)',
          rarity: 'Epic',
          icon: 'inv_staff_23',
          description: 'Equip: Increases healing done by up to 110, spell damage by up to 65, and feral attack power by 420.'
        },
        {
          name: 'Stampeding Roar',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'spell_druid_stampedingroar_cat',
          description: 'The Druid lets loose a ferocious roar, increasing the movement speed of all party and raid members within 20 yards by 60% for 8 sec. Usable in Bear Form, Cat Form, or Humanoid Form. (2 Min Cooldown) (Does not stack with Bloodlust/Heroism)'
        },
        {
          name: 'Title: Arch-Druid of the Timeways',
          type: 'Prestige Title',
          rarity: 'Epic',
          icon: 'inv_misc_ribbon_01',
          description: 'Permanently unlocks the in-game title: "Arch-Druid of the Timeways".'
        }
      ]
    }
  ]
};
