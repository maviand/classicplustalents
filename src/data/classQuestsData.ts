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
          description: 'Teaches Gladiator Stance: Allows sword-and-board offensive DPS combat, increasing physical damage by 20% and transforming Shield Slam into a primary strike.'
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
          description: 'Your Thunder Clap causes your Rend bleed effect to spread to all nearby enemies and increases its AoE threat by 50%.'
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
          description: 'Leap through the air toward a targeted location, slamming all enemies within 8 yards for physical damage. (45 Sec Cooldown)'
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
          name: 'Vanguard\'s Unyielding Resolve',
          type: 'Passive Mastery',
          rarity: 'Epic',
          icon: 'spell_nature_ancestralguardian',
          description: 'Reduces the cooldown of Shield Wall and Last Stand by 50% and allows Intercept to break roots.'
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
          description: 'Equip: Increases holy damage by up to 35 and causes Holy Shock to heal all nearby allies for 20% of its value.'
        },
        {
          name: 'Hand of Reckoning & Crusader Strike',
          type: 'Class Abilities (Permanent)',
          rarity: 'Epic',
          icon: 'spell_holy_blessingofstrength',
          description: 'Unlocks Hand of Reckoning (Holy Taunt) and Crusader Strike (instant holy physical weapon strike).'
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
          name: 'Avenging Wrath',
          type: 'Class Ability (Permanent)',
          rarity: 'Epic',
          icon: 'spell_holy_avengingwrath',
          description: 'Call upon the Light to grow holy wings, increasing all damage and healing done by 20% for 20 sec. (2 Min Cooldown)'
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

  Hunter: [
    {
      id: 'hunt-t1',
      title: 'The Primal Hunt of the Emerald Dream',
      tier: 'Tier 1.5',
      targetClass: 'Hunter',
      levelReq: 60,
      summary: 'Stalk and tame mythical primal beasts across Kalimdor and harvest the horns of the Nightmare Drakes.',
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
          name: 'Flanking Strike & Mongoose Bite Rework',
          type: 'Class Abilities (Permanent)',
          rarity: 'Epic',
          icon: 'ability_hunter_harass',
          description: 'Enables Survival melee combat: Flanking Strike hits simultaneously with your pet, triggering instant Mongoose Bite strikes.'
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
    }
  ],

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
          description: 'Unlocks Blade Dance (converting combo points into 25% Dodge/Parry for evasion tanking) and Deadly Brew (auto-applying Deadly Poison with all poisons).'
        }
      ]
    }
  ],

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
          name: 'Penance & Vampiric Touch',
          type: 'Class Spells (Permanent)',
          rarity: 'Epic',
          icon: 'spell_holy_penance',
          description: 'Unlocks Penance (channeled Holy burst damage / healing) and Vampiric Touch (Shadow DoT that returns 5% of damage done as party mana).'
        }
      ]
    }
  ],

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
          description: 'Unlocks Way of Earth (Shaman tanking stance: 30% increased health, 10% damage reduction, 100% increased threat) and Lava Burst (guaranteed crit with Flame Shock).'
        }
      ]
    }
  ],

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
          name: 'Arcane Barrage & Living Bomb',
          type: 'Class Spells (Permanent)',
          rarity: 'Epic',
          icon: 'spell_arcane_starfire',
          description: 'Unlocks Arcane Barrage (instant arcane nuke consuming Arcane Charges for sustained rotation) and Living Bomb (fire dot detonating for massive AoE).'
        }
      ]
    }
  ],

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
          description: 'Unlocks Metamorphosis (transform into a demon tank with 500% armor, Demonic Charge, and Searing Pain taunt) and Chaos Bolt (unstoppable fire/chaos strike).'
        }
      ]
    }
  ],

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
          name: 'Eclipse & Mangle Mastery',
          type: 'Class Abilities (Permanent)',
          rarity: 'Epic',
          icon: 'spell_nature_starfall',
          description: 'Unlocks Eclipse (alternating Lunar/Solar spell damage cycle for infinite Moonkin mana sustain) and Mangle (feral bleed/shred amplifier for Bear and Cat).'
        }
      ]
    }
  ]
};
