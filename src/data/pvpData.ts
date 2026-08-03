// AUTO-GENERATED MASSIVE PVP CONTENT
// 15,000% scale implementation - Battlegrounds, World PvP, and Arenas.
// Deep Dive Update: 7x more information fields.

export const PVP_MODES = {
  BATTLEGROUNDS: 'New Battlegrounds',
  WORLD_PVP: 'World PvP & Banner Wars',
  ARENA: 'The Gurubashi Arena System'
};

export interface PvPItem {
  id: string;
  name: string;
  size: string;
  type: string;
  description: string;
  mechanics: string[];
  lore: string;
  mapLayout: string;
  powerUps: string[];
  factionHistory: string;
  topMetaComps: string[];
  achievements: string[];
  associatedReputations: string[];
  uniqueRewards: any[];
}

export const pvpData: Record<string, PvPItem[]> = {
  "New Battlegrounds": [
    {
      "id": "AzsharaCrater",
      "name": "Azshara Crater",
      "size": "25v25",
      "type": "MOBA-Style Siege",
      "description": "The legendary unused Vanilla battleground is finally open. Situated in the mountains above Azshara, this battleground features three distinct lanes connecting the Horde and Alliance bases.",
      "mechanics": [
        "Minion Waves: NPCs spawn and push down the three lanes. Players must escort them to break base defenses.",
        "Mercenary Camps: Defeating neutral Timbermaw or Naga camps in the \"jungle\" recruits them to push a lane.",
        "Siege Engines: Players can farm lumber and iron within the BG to construct pilotable shredders and glaive throwers."
      ],
      "lore": "The Horde seeks to expand their logging operations from Ashenvale, while the Alliance attempts to secure the high ground to protect their naval assets in the bay below.",
      "mapLayout": "Swampy terrain with thick fog and hidden traps.",
      "powerUps": [
        "Speed Boots (150% movement speed)",
        "Flame Wreath (Burns nearby enemies)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "Once a peaceful region, it is now scarred by endless conflict. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Rogue/Warlock/Shaman (RLS)",
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Death Knight/Warlock/Shaman (Shadowcleave)"
      ],
      "achievements": [
        "Ruthless Conqueror",
        "Hero of Azshara Crater"
      ],
      "associatedReputations": [
        "Cenarion Circle",
        "Timbermaw Hold"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Blade of Azshara",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Axe",
          "stats": [
            "+37 Stamina",
            "+30 Mana per 5 sec",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Collar of the Crater",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Neck",
          "type": "Necklace",
          "stats": [
            "+29 Stamina",
            "+24 Strength",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "GillijimIsle",
      "name": "Gillijim's Isle",
      "size": "15v15",
      "type": "Naval Supremacy",
      "description": "Set on the restored Alpha island off the coast of Stranglethorn. This battleground is entirely focused on controlling the coastline and naval bombardment.",
      "mechanics": [
        "Galleon Control: Two massive ships circle the island. Teams must capture rowboats to board them and seize the cannons.",
        "Coastal Bombardment: Holding a ship allows the controlling team to call down devastating artillery fire on island control points.",
        "Buried Treasure: Random chests spawn containing powerful, temporary pirate-themed buffs (e.g., Rum-Soaked: Immune to fear but movement is erratic)."
      ],
      "lore": "The Bloodsail Buccaneers and the Steamwheedle Cartel have hired the Alliance and Horde as privateers to secure the island's hidden pirate coves.",
      "mapLayout": "Symmetrical 3-lane design with destructible environment hazards.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Frost Armor (Reflects 30% damage)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Mage/Warlock/Shaman (MLD)",
        "Hunter/Ret/Priest (Cupid Cleave)"
      ],
      "achievements": [
        "Relentless Defender",
        "Hero of Gillijim's Isle"
      ],
      "associatedReputations": [
        "Warsong Outriders",
        "Cenarion Circle"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Bow of Gillijim's",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Staff",
          "stats": [
            "+22 Stamina",
            "+17 Strength"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Spaulders of the Isle",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Shoulder",
          "type": "Plate",
          "stats": [
            "+17 Stamina",
            "+13 Defense"
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    },
    {
      "id": "HyjalFront",
      "name": "The Hyjal Front",
      "size": "40v40",
      "type": "Asymmetrical Siege",
      "description": "A massive, multi-stage siege battle taking place on the slopes of Mount Hyjal. Similar to Strand of the Ancients, but on a much larger, 40-player scale.",
      "mechanics": [
        "Attack vs Defense: One faction attacks up the mountain, the other defends barricades. Roles swap after the round.",
        "Destructible Environment: Attackers can burn down ancient trees to create new flanking routes.",
        "The Horn of Cenarius: Defenders can summon massive Ancient Protectors to stomp the attacking siege vehicles."
      ],
      "lore": "A proxy war. The Alliance (backed by the Night Elves) attempts to hold the sacred mountain, while the Horde (backed by rogue Goblin cartels) seeks to harvest the magically dense lumber.",
      "mapLayout": "Open plains with scattered cover and watchtowers.",
      "powerUps": [
        "Swamp Camouflage (Invisibility for 20s)",
        "Flame Wreath (Burns nearby enemies)",
        "Berserker Buff (100% damage increase)"
      ],
      "factionHistory": "Both factions seek the hidden titan artifacts buried here. The discovery of rich resources sparked this brutal war.",
      "topMetaComps": [
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Rogue/Warlock/Shaman (RLS)"
      ],
      "achievements": [
        "Flawless Hero",
        "Hero of The Hyjal Front"
      ],
      "associatedReputations": [
        "Argent Dawn",
        "Warsong Outriders"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Dagger of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Axe",
          "stats": [
            "+22 Stamina",
            "+17 Mana per 5 sec",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 132 for 15 sec.",
          "requiresLevel": 29
        },
        {
          "name": "Gladiator's Robes of the Front",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Mail",
          "stats": [
            "+17 Stamina",
            "+13 Intellect",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    },
    {
      "id": "StromgardeSiege",
      "name": "Stromgarde Siege",
      "size": "20v20",
      "type": "Urban Warfare",
      "description": "The ruins of Stromgarde in Arathi Highlands have been turned into a dense, multi-level urban battleground.",
      "mechanics": [
        "Verticality: The ruins have three vertical levels (Sewers, Streets, Ramparts). Controlling the high ground provides a massive damage buff to ranged attacks.",
        "Relic Running: A hybrid of CTF and King of the Hill. Players must steal Syndicate relics and hold them in specific zones to score points.",
        "Trap Doors: Thieves' Guild mechanics allow Rogues and Engineers to manipulate the battlefield, dropping bridges and locking gates."
      ],
      "lore": "The Syndicate has abandoned the city, leaving a massive power vacuum. Danath Trollbane's loyalists fight to reclaim their home against the Forsaken who seek to expand their borders south.",
      "mapLayout": "Dense canopy with rope bridges and grappling hooks.",
      "powerUps": [
        "Frost Armor (Reflects 30% damage)",
        "Berserker Buff (100% damage increase)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "An ancient curse haunts the battlefield, but the war rages on. Tensions have simmered in this region since the Second War.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)",
        "Warlock/Shadow Priest/Druid (Shadowplay)"
      ],
      "achievements": [
        "Iron Champion",
        "Hero of Stromgarde Siege"
      ],
      "associatedReputations": [
        "League of Arathor",
        "Thorium Brotherhood"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Greatsword of Stromgarde",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Dagger",
          "stats": [
            "+22 Stamina",
            "+17 Shield Block"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Vest of the Siege",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Leather",
          "stats": [
            "+17 Stamina",
            "+13 Mana per 5 sec"
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    },
    {
      "id": "PlunderIsleSkirmish",
      "name": "Plunder Isle Skirmish",
      "size": "10v10",
      "type": "Payload Delivery",
      "description": "A fast-paced battleground set in the hidden pirate coves of Plunder Isle.",
      "mechanics": [
        "Gunpowder Carts: Teams must push explosive carts to the enemy stronghold.",
        "Sabotage: Rogues and stealth classes can defuse the cart to stall the push.",
        "Pirate King's Wrath: The first team to deliver triggers a massive explosion, winning the match."
      ],
      "lore": "The Steamwheedle Cartel pays top dollar for the destruction of Bloodsail hidden caches.",
      "mapLayout": "Dense canopy with rope bridges and grappling hooks.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Titan Surge (Immunity to crowd control)",
        "Frost Armor (Reflects 30% damage)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive. A former stronghold of the Burning Legion, now contested territory.",
      "topMetaComps": [
        "Rogue/Mage/Priest (RMP)",
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Hunter/Ret/Priest (Cupid Cleave)"
      ],
      "achievements": [
        "Vindictive Gladiator",
        "Hero of Plunder Isle Skirmish"
      ],
      "associatedReputations": [
        "Thorium Brotherhood",
        "League of Arathor"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Greatsword of Plunder",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Sword",
          "stats": [
            "+22 Stamina",
            "+17 Defense"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Greaves of the Skirmish",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Plate",
          "stats": [
            "+17 Stamina",
            "+13 Dodge"
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    },
    {
      "id": "AlteracValleyRevamp",
      "name": "Alterac Valley Revamp",
      "size": "40v40",
      "type": "Epic Battleground",
      "description": "Restore the old Korrak the Bloodrager and massive NPC pushes.",
      "mechanics": [
        "Korrak is Back: The Bloodrager returns to the center of the map.",
        "NPC Pushes: Collecting supplies significantly empowers NPC assaults."
      ],
      "lore": "The Frostwolf and Stormpike clans continue their endless war.",
      "mapLayout": "Open plains with scattered cover and watchtowers.",
      "powerUps": [
        "Titan Surge (Immunity to crowd control)",
        "Berserker Buff (100% damage increase)",
        "Frost Armor (Reflects 30% damage)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)",
        "Rogue/Warlock/Shaman (RLS)"
      ],
      "achievements": [
        "Iron Slayer",
        "Hero of Alterac Valley Revamp"
      ],
      "associatedReputations": [
        "Timbermaw Hold",
        "Argent Dawn"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Blade of Alterac",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Dagger",
          "stats": [
            "+27 Stamina",
            "+21 Strength"
          ],
          "effect": "",
          "requiresLevel": 49
        },
        {
          "name": "Veteran's Gauntlets of the Revamp",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Hands",
          "type": "Mail",
          "stats": [
            "+21 Stamina",
            "+16 Intellect"
          ],
          "effect": "",
          "requiresLevel": 49
        }
      ]
    },
    {
      "id": "BGMatchmaking",
      "name": "Battleground Matchmaking",
      "size": "Global System",
      "type": "Matchmaking Update",
      "description": "Implement hidden MMR to prevent premades from stomping pugs.",
      "mechanics": [
        "Premade vs Premade: Groups of 5+ are strongly preferred to match against other groups.",
        "Hidden MMR: Ensures closer games."
      ],
      "lore": "A fair fight brings true honor.",
      "mapLayout": "Open plains with scattered cover and watchtowers.",
      "powerUps": [
        "Swamp Camouflage (Invisibility for 20s)",
        "Speed Boots (150% movement speed)",
        "Restoration Buff (Heals 10% per second)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Feral/Hunter/Priest (Kitty Cleave)"
      ],
      "achievements": [
        "Fierce Hero",
        "Hero of Battleground Matchmaking"
      ],
      "associatedReputations": [
        "Timbermaw Hold",
        "Thorium Brotherhood"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gavel of Battleground",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Axe",
          "stats": [
            "+37 Stamina",
            "+30 Shield Block",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Sabatons of the Matchmaking",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Feet",
          "type": "Leather",
          "stats": [
            "+29 Stamina",
            "+24 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "WSGFlagDebuff",
      "name": "Warsong Gulch Flag Debuff",
      "size": "10v10",
      "type": "Mechanic Update",
      "description": "In WSG, the flag carrier takes 10% more damage every 2 minutes.",
      "mechanics": [
        "Focused Assault: Prevents endless stalling by tanks or druids hiding with the flag."
      ],
      "lore": "The longer you hold the enemy's colors, the harder they hunt you.",
      "mapLayout": "Ruined city streets with rooftop sniping positions.",
      "powerUps": [
        "Titan Surge (Immunity to crowd control)",
        "Speed Boots (150% movement speed)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "Once a peaceful region, it is now scarred by endless conflict. A former stronghold of the Burning Legion, now contested territory.",
      "topMetaComps": [
        "Rogue/Warlock/Shaman (RLS)",
        "Warrior/Paladin/Priest (TSG)",
        "Death Knight/Warlock/Shaman (Shadowcleave)"
      ],
      "achievements": [
        "Fierce Conqueror",
        "Hero of Warsong Gulch Flag Debuff"
      ],
      "associatedReputations": [
        "Silverwing Sentinels",
        "Frostwolf Clan"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Blade of Warsong",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Mace",
          "stats": [
            "+27 Stamina",
            "+21 Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 162 for 15 sec.",
          "requiresLevel": 39
        },
        {
          "name": "Gladiator's Grips of the Debuff",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Hands",
          "type": "Cloth",
          "stats": [
            "+21 Stamina",
            "+16 Intellect",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    }
  ],
  "World PvP & Banner Wars": [
    {
      "id": "BannerWars",
      "name": "The Banner War System",
      "size": "World PvP",
      "type": "Dynamic Zone Objectives",
      "description": "Classic Plus introduces dynamic PvP objectives in heavily contested leveling zones (Hillsbrad, Stranglethorn, Ashenvale, Blackrock Mountain).",
      "mechanics": [
        "Supply Caravans: Unannounced, un-instanced escort quests. A faction caravan will spawn and slowly march across a zone. Successfully escorting it buffs the entire faction in that zone for 2 hours.",
        "Bounty Board: Killing players of the opposing faction grants Dishonorable marks. Accumulate enough, and your location is broadcast to the zone map for bounty hunters.",
        "Capital City Raids: Defeating a faction leader now provides a server-wide buff and drops a unique, phase-relevant legendary token."
      ],
      "lore": "The drums of war never truly stopped. The Banner Wars represent the skirmishes that occur away from the front lines, driven by local commanders and mercenary greed.",
      "mapLayout": "Asymmetrical layout with dense vertical elements.",
      "powerUps": [
        "Swamp Camouflage (Invisibility for 20s)",
        "Speed Boots (150% movement speed)",
        "Restoration Buff (Heals 10% per second)"
      ],
      "factionHistory": "The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties. The discovery of rich resources sparked this brutal war.",
      "topMetaComps": [
        "Rogue/Mage/Priest (RMP)",
        "Rogue/Warlock/Shaman (RLS)",
        "Warrior/Paladin/Priest (TSG)"
      ],
      "achievements": [
        "Vindictive Victory",
        "Hero of The Banner War System"
      ],
      "associatedReputations": [
        "The Defilers",
        "Cenarion Circle"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Greatsword of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Sword",
          "stats": [
            "+22 Stamina",
            "+17 Defense",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 132 for 15 sec.",
          "requiresLevel": 29
        },
        {
          "name": "Gladiator's Handguards of the System",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Hands",
          "type": "Leather",
          "stats": [
            "+17 Stamina",
            "+13 Strength",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    },
    {
      "id": "CrimsonAtoll",
      "name": "The Crimson Atoll Event",
      "size": "Free-For-All",
      "type": "Scheduled Bloodbath",
      "description": "An island off the coast of Stranglethorn that becomes active every 3 hours. Inspired by the Blood Moon event, but designed for level 60.",
      "mechanics": [
        "No Factions: Grouping is disabled. Nameplates are hidden. Everyone is red to everyone.",
        "Blood Coins: Kills grant coins. Dying loses coins. Coins are used to purchase the most prestigious PvP mounts and cosmetic auras in the game.",
        "The Crimson Fog: The playable area shrinks over the 30-minute event, forcing players into a brutal final clash in the center arena."
      ],
      "lore": "An ancient troll blood-magic ritual has gone awry, cursing the island. The Loa of Death demands tribute, and the combatants of Azeroth are happy to provide it.",
      "mapLayout": "Asymmetrical layout with dense vertical elements.",
      "powerUps": [
        "Frost Armor (Reflects 30% damage)",
        "Swamp Camouflage (Invisibility for 20s)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "Once a peaceful region, it is now scarred by endless conflict. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Feral/Hunter/Priest (Kitty Cleave)",
        "Rogue/Mage/Priest (RMP)",
        "Warlock/Shadow Priest/Druid (Shadowplay)"
      ],
      "achievements": [
        "Relentless Vanguard",
        "Hero of The Crimson Atoll Event"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "League of Arathor"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Staff of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Bow",
          "stats": [
            "+17 Stamina",
            "+13 Agility"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Pants of the Event",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Plate",
          "stats": [
            "+13 Stamina",
            "+10 Strength"
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    },
    {
      "id": "SilithusSandstorms",
      "name": "Silithus Sandstorms",
      "size": "Zone-Wide",
      "type": "Resource Race",
      "description": "Every 6 hours, massive sandstorms blanket Silithus, revealing ancient Qiraji artifacts.",
      "mechanics": [
        "Artifact Extraction: Requires a channel time of 10 seconds. Any damage interrupts.",
        "Hive Ambush: Extracting an artifact spawns elite bugs that attack the extractor.",
        "Shrine of the Blood God: A central altar where coins can be deposited for massive temporary buffs."
      ],
      "lore": "Hakkar's influence bleeds into the physical world, driving the wildlife and explorers into a blood-crazed frenzy.",
      "mapLayout": "Frozen lake with slippery ice and thermal vents.",
      "powerUps": [
        "Speed Boots (150% movement speed)",
        "Frost Armor (Reflects 30% damage)",
        "Berserker Buff (100% damage increase)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Mage/Warlock/Shaman (MLD)",
        "Rogue/Mage/Priest (RMP)"
      ],
      "achievements": [
        "Vindictive Victory",
        "Hero of Silithus Sandstorms"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Dagger of Silithus",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Staff",
          "stats": [
            "+22 Stamina",
            "+17 Strength"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Amulet of the Sandstorms",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Neck",
          "type": "Necklace",
          "stats": [
            "+17 Stamina",
            "+13 Intellect"
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    },
    {
      "id": "SilithusSand",
      "name": "Silithus Sand Delivery",
      "size": "Zone Event",
      "type": "World PvP",
      "description": "Make the Silithus PvP event grant actual endgame reputation.",
      "mechanics": [
        "Cenarion Rep: Delivering sand now gives substantial Cenarion Circle reputation.",
        "Sand Storms: Periodically reduces visibility."
      ],
      "lore": "The Cenarion Circle needs the silicate for war preparations against C'Thun.",
      "mapLayout": "Steep incline with high-altitude outposts.",
      "powerUps": [
        "Swamp Camouflage (Invisibility for 20s)",
        "Demonic Haste (50% haste for 15s)",
        "Flame Wreath (Burns nearby enemies)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. Once a peaceful region, it is now scarred by endless conflict.",
      "topMetaComps": [
        "Warrior/Enhance/Druid (Turbo Cleave)",
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)"
      ],
      "achievements": [
        "Fierce Champion",
        "Hero of Silithus Sand Delivery"
      ],
      "associatedReputations": [
        "Timbermaw Hold",
        "Stormpike Guard"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Blade of Silithus",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Axe",
          "stats": [
            "+32 Stamina",
            "+25 Intellect",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 192 for 15 sec.",
          "requiresLevel": 49
        },
        {
          "name": "Gladiator's Boots of the Delivery",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Feet",
          "type": "Plate",
          "stats": [
            "+25 Stamina",
            "+20 Defense",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 49
        }
      ]
    },
    {
      "id": "ContestedNodes",
      "name": "Contested Nodes",
      "size": "Global World",
      "type": "Resource System",
      "description": "Specific rich thorium veins that flag you for PvP when mined, regardless of server type.",
      "mechanics": [
        "PvP Flag: Mining instantly flags you.",
        "Bonus Yield: Double the normal ore."
      ],
      "lore": "Some resources are worth dying for.",
      "mapLayout": "Open plains with scattered cover and watchtowers.",
      "powerUps": [
        "Speed Boots (150% movement speed)",
        "Flame Wreath (Burns nearby enemies)",
        "Restoration Buff (Heals 10% per second)"
      ],
      "factionHistory": "An ancient curse haunts the battlefield, but the war rages on. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Death Knight/Warlock/Shaman (Shadowcleave)",
        "Warlock/Shadow Priest/Druid (Shadowplay)"
      ],
      "achievements": [
        "Fierce Conqueror",
        "Hero of Contested Nodes"
      ],
      "associatedReputations": [
        "Thorium Brotherhood",
        "Cenarion Circle"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Gavel of Contested",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Sword",
          "stats": [
            "+17 Stamina",
            "+13 Healing"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Greaves of the Nodes",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Plate",
          "stats": [
            "+13 Stamina",
            "+10 Defense"
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    }
  ],
  "The Gurubashi Arena System": [
    {
      "id": "GurubashiBrawl",
      "name": "The Gurubashi Arena Brawl",
      "size": "10v10",
      "type": "Instanced Deathmatch",
      "description": "Arena in Classic Plus is not 2v2 or 3v3 pillar-humping. It is a chaotic, trap-filled 10v10 deathmatch focused on pure combat and positioning.",
      "mechanics": [
        "No Resurrects: One life per round. First team to wipe the other wins. Best of 5 rounds.",
        "Arena Hazards: The Gurubashi arena is filled with spike traps, pit-falls, and neutral basilisks that will attack anyone who gets too close.",
        "Crowd Favor: Dealing massive damage or scoring killing blows charges the \"Crowd Favor\" meter. When full, the crowd throws beneficial potions and bombs to your team."
      ],
      "lore": "The Steamwheedle Cartel has taken over the Gurubashi Arena, broadcasting the fights via gnomish radio to all of Azeroth. It's brutal, it's unfair, and it's extremely profitable.",
      "mapLayout": "Asymmetrical layout with dense vertical elements.",
      "powerUps": [
        "Demonic Haste (50% haste for 15s)",
        "Shadowmeld (Breaks targeting)",
        "Titan Surge (Immunity to crowd control)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. A strategic chokepoint that neither side can afford to lose.",
      "topMetaComps": [
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Hunter/Ret/Priest (Cupid Cleave)"
      ],
      "achievements": [
        "Ruthless Vanguard",
        "Hero of The Gurubashi Arena Brawl"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Cenarion Circle"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Axe of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Sword",
          "stats": [
            "+17 Stamina",
            "+13 Strength"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Seal of the Brawl",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+13 Stamina",
            "+10 Strength"
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    },
    {
      "id": "GurubashiColiseum",
      "name": "Gurubashi Coliseum (10v10)",
      "size": "10v10",
      "type": "Deathmatch",
      "description": "A brutal 10v10 deathmatch in a massive colosseum environment.",
      "mechanics": [
        "Last Team Standing: No respawns. The last team with members alive wins.",
        "Crowd Favor: The crowd throws in buffs or hazards based on which team is performing better."
      ],
      "lore": "The Gurubashi trolls have opened their arena to larger scale bloodsports.",
      "mapLayout": "Underground tunnel network with multiple chokepoints.",
      "powerUps": [
        "Demonic Haste (50% haste for 15s)",
        "Shadowmeld (Breaks targeting)",
        "Restoration Buff (Heals 10% per second)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)",
        "Warrior/Enhance/Druid (Turbo Cleave)"
      ],
      "achievements": [
        "Iron Champion",
        "Hero of Gurubashi Coliseum (10v10)"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Thorium Brotherhood"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gavel of Gurubashi",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Mace",
          "stats": [
            "+27 Stamina",
            "+21 Strength",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 162 for 15 sec.",
          "requiresLevel": 39
        },
        {
          "name": "Gladiator's Kilt of the (10v10)",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Plate",
          "stats": [
            "+21 Stamina",
            "+16 Shield Block",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    },
    {
      "id": "1v1Arena",
      "name": "1v1 Arena",
      "size": "1v1",
      "type": "Unranked Deathmatch",
      "description": "Introduce an unranked 1v1 arena strictly for bragging rights.",
      "mechanics": [
        "No Rating: Purely for fun and practice.",
        "Spectator Mode: Players can queue to watch live 1v1 matches."
      ],
      "lore": "Gladiators test their individual mettle before stepping into the 3v3 circuit.",
      "mapLayout": "Underground tunnel network with multiple chokepoints.",
      "powerUps": [
        "Titan Surge (Immunity to crowd control)",
        "Frost Armor (Reflects 30% damage)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Both factions seek the hidden titan artifacts buried here. The discovery of rich resources sparked this brutal war.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)",
        "Warlock/Shadow Priest/Druid (Shadowplay)"
      ],
      "achievements": [
        "Flawless Defender",
        "Hero of 1v1 Arena"
      ],
      "associatedReputations": [
        "Silverwing Sentinels",
        "Frostwolf Clan"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Blade of 1v1",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Sword",
          "stats": [
            "+27 Stamina",
            "+21 Dodge"
          ],
          "effect": "",
          "requiresLevel": 49
        },
        {
          "name": "Veteran's Girdle of the Arena",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Waist",
          "type": "Plate",
          "stats": [
            "+21 Stamina",
            "+16 Dodge"
          ],
          "effect": "",
          "requiresLevel": 49
        }
      ]
    },
    {
      "id": "DuelingTournaments",
      "name": "Dueling Tournaments",
      "size": "1v1",
      "type": "Monthly Event",
      "description": "Official monthly tournaments held in Gurubashi Arena.",
      "mechanics": [
        "Bracket System: Automated tournament brackets.",
        "Unique Titles: Winners receive a server-wide temporary title for the month."
      ],
      "lore": "A grand spectacle where the greatest champions are crowned.",
      "mapLayout": "Symmetrical 3-lane design with destructible environment hazards.",
      "powerUps": [
        "Windfury Totem (Extra attacks)",
        "Flame Wreath (Burns nearby enemies)",
        "Swamp Camouflage (Invisibility for 20s)"
      ],
      "factionHistory": "Both factions seek the hidden titan artifacts buried here. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Rogue/Mage/Priest (RMP)",
        "Warlock/Shadow Priest/Druid (Shadowplay)"
      ],
      "achievements": [
        "Bloodthirsty Hero",
        "Hero of Dueling Tournaments"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Frostwolf Clan"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Greatsword of Dueling",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Mace",
          "stats": [
            "+37 Stamina",
            "+30 Intellect",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Brooch of the Tournaments",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Trinket",
          "type": "Trinket",
          "stats": [
            "+29 Stamina",
            "+24 Intellect",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ArenaMechanics",
      "name": "Arena Anti-Stall Mechanics",
      "size": "Global Arena",
      "type": "Mechanic Update",
      "description": "New systems to prevent endless arena matches.",
      "mechanics": [
        "Pillar Hugging Penalty: Standing still for 10 seconds applies a stacking slow debuff.",
        "Dampening: Healing is reduced by 1% every 10 seconds after 5 minutes."
      ],
      "lore": "The crowd demands blood, not endless healing.",
      "mapLayout": "Steep incline with high-altitude outposts.",
      "powerUps": [
        "Windfury Totem (Extra attacks)",
        "Flame Wreath (Burns nearby enemies)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "A former stronghold of the Burning Legion, now contested territory. Tensions have simmered in this region since the Second War.",
      "topMetaComps": [
        "Death Knight/Warlock/Shaman (Shadowcleave)",
        "Warrior/Paladin/Priest (TSG)",
        "Warrior/Enhance/Druid (Turbo Cleave)"
      ],
      "achievements": [
        "Ruthless Defender",
        "Hero of Arena Anti-Stall Mechanics"
      ],
      "associatedReputations": [
        "Frostwolf Clan",
        "Timbermaw Hold"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Axe of Arena",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Staff",
          "stats": [
            "+17 Stamina",
            "+13 Healing"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Band of the Mechanics",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+13 Stamina",
            "+10 Healing"
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    }
  ],
  "Warfront Offensives": [
    {
      "id": "ProcBG_Blackrock",
      "name": "The Blackrock Offensive",
      "size": "Zone-Wide Phase",
      "type": "Vertical Magma Siege",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict deep inside Blackrock Mountain.",
      "mechanics": [
        "Magma Flooding: Control pressure valves to flood enemy tunnels with magma.",
        "Vertical Warfare: No traditional frontlines. Navigate a massive vertical shaft using elevators and precarious catwalks.",
        "Structural Sabotage: Sabotage massive iron pillars to collapse sections of the mountain on the enemy base."
      ],
      "lore": "The Dark Iron dwarves have been pushed back, but now the Alliance and Horde fight over who controls the deepest secrets of the mountain.",
      "mapLayout": "Open plains with scattered cover and watchtowers.",
      "powerUps": [
        "Windfury Totem (Extra attacks)",
        "Demonic Haste (50% haste for 15s)",
        "Swamp Camouflage (Invisibility for 20s)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The discovery of rich resources sparked this brutal war.",
      "topMetaComps": [
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Feral/Hunter/Priest (Kitty Cleave)",
        "Hunter/Feral/Paladin (Jungle Cleave)"
      ],
      "achievements": [
        "Savage Defender",
        "Hero of The Blackrock Offensive"
      ],
      "associatedReputations": [
        "The Defilers",
        "Argent Dawn"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Staff of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Staff",
          "stats": [
            "+27 Stamina",
            "+21 Spell Damage",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 162 for 15 sec.",
          "requiresLevel": 39
        },
        {
          "name": "Gladiator's Treads of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Feet",
          "type": "Mail",
          "stats": [
            "+21 Stamina",
            "+16 Mana per 5 sec",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    },
    {
      "id": "ProcBG_UnGoro",
      "name": "The Un'Goro Offensive",
      "size": "Zone-Wide Phase",
      "type": "Primal Stampede",
      "description": "A chaotic 3-way war where the local dinosaur population is hostile to both factions.",
      "mechanics": [
        "Dinosaur Taming: Teams must capture and tame roaming Devilsaurs, then ride them into battle as massive siege weapons.",
        "Pterrodax Airstrikes: Control the high ground to call in pterrodax drops that stun enemy lines.",
        "Primal Frenzy: Every 10 minutes, all untamed dinosaurs enrage, attacking everything in sight."
      ],
      "lore": "The dense crater holds Titan secrets, but securing them requires surviving the apex predators that rule the jungle.",
      "mapLayout": "Swampy terrain with thick fog and hidden traps.",
      "powerUps": [
        "Demonic Haste (50% haste for 15s)",
        "Berserker Buff (100% damage increase)",
        "Frost Armor (Reflects 30% damage)"
      ],
      "factionHistory": "A strategic chokepoint that neither side can afford to lose. A former stronghold of the Burning Legion, now contested territory.",
      "topMetaComps": [
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Rogue/Mage/Priest (RMP)"
      ],
      "achievements": [
        "Relentless Vanguard",
        "Hero of The Un'Goro Offensive"
      ],
      "associatedReputations": [
        "Timbermaw Hold",
        "Warsong Outriders"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Greatsword of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Axe",
          "stats": [
            "+37 Stamina",
            "+30 Shield Block",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Loop of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+29 Stamina",
            "+24 Healing",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcBG_Winterspring",
      "name": "The Winterspring Offensive",
      "size": "Zone-Wide Phase",
      "type": "Avalanche Warfare",
      "description": "Fought on a steep incline in the freezing peaks of Winterspring.",
      "mechanics": [
        "Trigger Avalanches: Controlling high-altitude outposts allows teams to trigger massive avalanches that instantly wipe out anyone caught in the valleys below.",
        "Thermal Vents: The weather grows colder over time. Players must secure thermal vents or suffer constant freezing damage.",
        "Ice Bridge Sabotage: Destroy ice bridges to cut off enemy supply lines."
      ],
      "lore": "The blue dragonflight has abandoned the region, leaving the Horde and Alliance to war over the ancient magical leylines buried beneath the snow.",
      "mapLayout": "Steep incline with high-altitude outposts.",
      "powerUps": [
        "Restoration Buff (Heals 10% per second)",
        "Flame Wreath (Burns nearby enemies)",
        "Berserker Buff (100% damage increase)"
      ],
      "factionHistory": "A bloody stalemate has persisted here for decades. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Rogue/Warlock/Shaman (RLS)",
        "Warrior/Paladin/Priest (TSG)",
        "Feral/Hunter/Priest (Kitty Cleave)"
      ],
      "achievements": [
        "Flawless Victory",
        "Hero of The Winterspring Offensive"
      ],
      "associatedReputations": [
        "Warsong Outriders",
        "Timbermaw Hold"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Dagger of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Dagger",
          "stats": [
            "+37 Stamina",
            "+30 Healing",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Talisman of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Trinket",
          "type": "Trinket",
          "stats": [
            "+29 Stamina",
            "+24 Spell Damage",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcBG_Desolace",
      "name": "The Desolace Offensive",
      "size": "Zone-Wide Phase",
      "type": "Necromantic Arms Race",
      "description": "A graveyard war fought in the bone-littered wastes of Desolace.",
      "mechanics": [
        "Flesh Golem Construction: Dead players and NPCs leave behind corpses that can be harvested to build Flesh Golems.",
        "Casualty Escalation: The more casualties a team suffers, the bigger the monster the opposing team can build.",
        "Centaur Mercenaries: Bribe roaming centaur clans to ambush the enemy supply carts."
      ],
      "lore": "The Burning Blade have left a wake of death, providing the perfect fuel for a grim war of attrition.",
      "mapLayout": "Swampy terrain with thick fog and hidden traps.",
      "powerUps": [
        "Frost Armor (Reflects 30% damage)",
        "Swamp Camouflage (Invisibility for 20s)",
        "Demonic Haste (50% haste for 15s)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Death Knight/Warlock/Shaman (Shadowcleave)",
        "Hunter/Feral/Paladin (Jungle Cleave)"
      ],
      "achievements": [
        "Flawless Hero",
        "Hero of The Desolace Offensive"
      ],
      "associatedReputations": [
        "Timbermaw Hold",
        "Warsong Outriders"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Dagger of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Axe",
          "stats": [
            "+22 Stamina",
            "+17 Defense",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 132 for 15 sec.",
          "requiresLevel": 29
        },
        {
          "name": "Gladiator's Treads of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Feet",
          "type": "Cloth",
          "stats": [
            "+17 Stamina",
            "+13 Healing",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    },
    {
      "id": "ProcBG_Feralas",
      "name": "The Feralas Offensive",
      "size": "Zone-Wide Phase",
      "type": "Canopy Skirmish",
      "description": "The ground is covered in toxic Emerald Nightmare fog. The entire war is fought in the canopy of the massive trees.",
      "mechanics": [
        "Canopy Traversal: Navigate using grappling hooks, rope bridges, and goblin gliders.",
        "Bridge Destruction: Destroying a rope bridge instantly kills anyone on it. Engineers can repair them.",
        "Toxic updrafts: The Nightmare fog below occasionally erupts upwards, requiring players to grapple higher to avoid damage."
      ],
      "lore": "The Emerald Nightmare has seeped into the soil. The only safe ground is high above, where the night elves and the horde clash for dominance.",
      "mapLayout": "Steep incline with high-altitude outposts.",
      "powerUps": [
        "Flame Wreath (Burns nearby enemies)",
        "Shadowmeld (Breaks targeting)",
        "Berserker Buff (100% damage increase)"
      ],
      "factionHistory": "Once a peaceful region, it is now scarred by endless conflict. Tensions have simmered in this region since the Second War.",
      "topMetaComps": [
        "Warrior/Enhance/Druid (Turbo Cleave)",
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Rogue/Mage/Priest (RMP)"
      ],
      "achievements": [
        "Vindictive Slayer",
        "Hero of The Feralas Offensive"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Frostwolf Clan"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Gavel of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Axe",
          "stats": [
            "+32 Stamina",
            "+26 Mana per 5 sec"
          ],
          "effect": "",
          "requiresLevel": 60
        },
        {
          "name": "Veteran's Band of the Offensive",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+25 Stamina",
            "+20 Healing"
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcBG_Hinterlands",
      "name": "The Hinterlands Offensive",
      "size": "Zone-Wide Phase",
      "type": "Aerial Superiority",
      "description": "Focuses heavily on aerial combat above the peaks of the Hinterlands.",
      "mechanics": [
        "Mount Up: Players mount heavily armored Wildhammer Gryphons and Horde Wyverns to engage in dogfights.",
        "Bombing Runs: Secure explosives from the ground to drop on enemy anti-air turrets.",
        "Mid-Air Boarding: Parachute onto enemy zeppelins/gunships to destroy their engines."
      ],
      "lore": "The Wildhammer dwarves refuse to cede their skies, leading to the most brutal aerial combat of the Third War.",
      "mapLayout": "Steep incline with high-altitude outposts.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Shadowmeld (Breaks targeting)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "A strategic chokepoint that neither side can afford to lose. A former stronghold of the Burning Legion, now contested territory.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)",
        "Feral/Hunter/Priest (Kitty Cleave)"
      ],
      "achievements": [
        "Savage Victory",
        "Hero of The Hinterlands Offensive"
      ],
      "associatedReputations": [
        "Timbermaw Hold",
        "Cenarion Circle"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Gavel of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Axe",
          "stats": [
            "+22 Stamina",
            "+17 Strength"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Pants of the Offensive",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Legs",
          "type": "Cloth",
          "stats": [
            "+17 Stamina",
            "+13 Healing"
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    },
    {
      "id": "ProcBG_BlastedLands",
      "name": "The Blasted Lands Offensive",
      "size": "Zone-Wide Phase",
      "type": "Demonic Sabotage",
      "description": "A three-way war where the demon armies are the main threat.",
      "mechanics": [
        "Ward Sabotage: Horde and Alliance compete to sabotage each other's demonic wards, forcing the Burning Legion to attack the enemy base.",
        "Nether Portals: Close random Nether Portals before Doomguards pour out.",
        "Demon Blood: Collect demon blood to empower your faction commander, granting them massive buffs."
      ],
      "lore": "The Dark Portal hums with energy. Factions must defend their outposts not only from each other, but from the endless demonic tide.",
      "mapLayout": "Frozen lake with slippery ice and thermal vents.",
      "powerUps": [
        "Windfury Totem (Extra attacks)",
        "Berserker Buff (100% damage increase)",
        "Titan Surge (Immunity to crowd control)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Death Knight/Warlock/Shaman (Shadowcleave)",
        "Rogue/Mage/Priest (RMP)"
      ],
      "achievements": [
        "Flawless Vanguard",
        "Hero of The Blasted Lands Offensive"
      ],
      "associatedReputations": [
        "League of Arathor",
        "The Defilers"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Axe of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Mace",
          "stats": [
            "+22 Stamina",
            "+17 Strength",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 132 for 15 sec.",
          "requiresLevel": 29
        },
        {
          "name": "Gladiator's Mantle of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Shoulder",
          "type": "Plate",
          "stats": [
            "+17 Stamina",
            "+13 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    },
    {
      "id": "ProcBG_SearingGorge",
      "name": "The Searing Gorge Offensive",
      "size": "Zone-Wide Phase",
      "type": "Underground Sabotage",
      "description": "Fought in an underground railway system connecting Dark Iron control points.",
      "mechanics": [
        "Mole Machine Hijacking: Teams fight to hijack massive, heavily armed Dark Iron mole machines to drill into the enemy stronghold.",
        "Lava Tides: Sections of the tunnels flood with lava on a set timer, forcing players to fight in chokepoints.",
        "Gunpowder Kegs: Plant massive explosives to collapse enemy drilling tunnels."
      ],
      "lore": "The Thorium Brotherhood has hired mercenaries from both sides to clear out the remaining Dark Iron strongholds, turning the gorge into a warzone.",
      "mapLayout": "Steep incline with high-altitude outposts.",
      "powerUps": [
        "Speed Boots (150% movement speed)",
        "Flame Wreath (Burns nearby enemies)",
        "Windfury Totem (Extra attacks)"
      ],
      "factionHistory": "Once a peaceful region, it is now scarred by endless conflict. A former stronghold of the Burning Legion, now contested territory.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)",
        "Warrior/Enhance/Druid (Turbo Cleave)"
      ],
      "achievements": [
        "Bloodthirsty Conqueror",
        "Hero of The Searing Gorge Offensive"
      ],
      "associatedReputations": [
        "Warsong Outriders",
        "Timbermaw Hold"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gavel of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Axe",
          "stats": [
            "+22 Stamina",
            "+17 Strength",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 132 for 15 sec.",
          "requiresLevel": 29
        },
        {
          "name": "Gladiator's Signet of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+17 Stamina",
            "+13 Strength",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    },
    {
      "id": "ProcBG_Badlands",
      "name": "The Badlands Offensive",
      "size": "Zone-Wide Phase",
      "type": "Titan Excavation",
      "description": "Both factions are unearthing a massive Titan construct piece by piece in the dusty canyons.",
      "mechanics": [
        "Excavation Sites: Teams fight over dig sites to recover Titan fragments.",
        "Construct Assembly: The first team to assemble the construct gains control of it for a final, apocalyptic push.",
        "Uldaman Defenses: Earthen guardians frequently awake to attack anyone near the dig sites."
      ],
      "lore": "Relics of the Titans are buried here. The faction that controls them controls the future of Azeroth.",
      "mapLayout": "Steep incline with high-altitude outposts.",
      "powerUps": [
        "Flame Wreath (Burns nearby enemies)",
        "Speed Boots (150% movement speed)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "The discovery of rich resources sparked this brutal war. A strategic chokepoint that neither side can afford to lose.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Feral/Hunter/Priest (Kitty Cleave)",
        "Hunter/Ret/Priest (Cupid Cleave)"
      ],
      "achievements": [
        "Fierce Hero",
        "Hero of The Badlands Offensive"
      ],
      "associatedReputations": [
        "Argent Dawn",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Greatsword of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Bow",
          "stats": [
            "+22 Stamina",
            "+17 Agility"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Ring of the Offensive",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+17 Stamina",
            "+13 Defense"
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    },
    {
      "id": "ProcBG_Dustwallow",
      "name": "The Dustwallow Offensive",
      "size": "Zone-Wide Phase",
      "type": "Swamp Subterfuge",
      "description": "Fought in the deep muck of Dustwallow Marsh, where visibility is heavily restricted.",
      "mechanics": [
        "Heavy Fog: Deep fog severely limits vision and disables the mini-map.",
        "Scout Towers: Players must build and defend flare towers to see the enemy coming.",
        "Swamp Muck: The water slows movement significantly, making stealth classes and ambushes extremely deadly."
      ],
      "lore": "Theramore's forces clash with the Horde in the treacherous swamps, where shadows and mud are as deadly as the enemy.",
      "mapLayout": "Steep incline with high-altitude outposts.",
      "powerUps": [
        "Frost Armor (Reflects 30% damage)",
        "Swamp Camouflage (Invisibility for 20s)",
        "Windfury Totem (Extra attacks)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Feral/Hunter/Priest (Kitty Cleave)"
      ],
      "achievements": [
        "Flawless Hero",
        "Hero of The Dustwallow Offensive"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Timbermaw Hold"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Staff of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Mace",
          "stats": [
            "+32 Stamina",
            "+26 Spell Damage"
          ],
          "effect": "",
          "requiresLevel": 60
        },
        {
          "name": "Veteran's Band of the Offensive",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+25 Stamina",
            "+20 Intellect"
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    }
  ],
  "Faction Balance & Economy": [
    {
      "id": "MercenaryMode",
      "name": "Mercenary Mode",
      "size": "Global PvP",
      "type": "Queue System",
      "description": "Allow players to queue for battlegrounds as the opposite faction to reduce queue times.",
      "mechanics": [
        "Disguise: You are transformed into a race of the opposing faction.",
        "Bonus Honor: Mercenaries receive a 10% honor buff."
      ],
      "lore": "Mercenaries fight for coin, regardless of allegiance.",
      "mapLayout": "Open plains with scattered cover and watchtowers.",
      "powerUps": [
        "Demonic Haste (50% haste for 15s)",
        "Titan Surge (Immunity to crowd control)",
        "Frost Armor (Reflects 30% damage)"
      ],
      "factionHistory": "The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties. Once a peaceful region, it is now scarred by endless conflict.",
      "topMetaComps": [
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Death Knight/Warlock/Shaman (Shadowcleave)",
        "Mage/Warlock/Shaman (MLD)"
      ],
      "achievements": [
        "Iron Victory",
        "Hero of Mercenary Mode"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Thorium Brotherhood"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Bow of Mercenary",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Mace",
          "stats": [
            "+37 Stamina",
            "+30 Shield Block",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Bindings of the Mode",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Wrist",
          "type": "Cloth",
          "stats": [
            "+29 Stamina",
            "+24 Intellect",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "CrossFactionChat",
      "name": "Cross-Faction Elixir",
      "size": "Global",
      "type": "Consumable",
      "description": "An elixir that allows you to understand the opposing faction's language for 1 hour.",
      "mechanics": [
        "Crafted by Alchemy.",
        "Works in /say and /yell."
      ],
      "lore": "A magical brew that breaks down the barriers of language.",
      "mapLayout": "Swampy terrain with thick fog and hidden traps.",
      "powerUps": [
        "Flame Wreath (Burns nearby enemies)",
        "Speed Boots (150% movement speed)",
        "Berserker Buff (100% damage increase)"
      ],
      "factionHistory": "The discovery of rich resources sparked this brutal war. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Mage/Warlock/Shaman (MLD)",
        "Warrior/Enhance/Druid (Turbo Cleave)",
        "Death Knight/Warlock/Shaman (Shadowcleave)"
      ],
      "achievements": [
        "Vindictive Vanguard",
        "Hero of Cross-Faction Elixir"
      ],
      "associatedReputations": [
        "League of Arathor",
        "Frostwolf Clan"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Dagger of Cross-Faction",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Sword",
          "stats": [
            "+17 Stamina",
            "+13 Mana per 5 sec"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Charm of the Elixir",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Trinket",
          "type": "Trinket",
          "stats": [
            "+13 Stamina",
            "+10 Dodge"
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    },
    {
      "id": "FactionDefectors",
      "name": "Faction Defectors",
      "size": "Global",
      "type": "Questline",
      "description": "A highly complex, one-time questline to permanently swap factions.",
      "mechanics": [
        "Massive Gold Sink: Requires turning in enormous amounts of resources.",
        "Permanent Choice: Cannot be undone."
      ],
      "lore": "Some heroes realize they are fighting for the wrong side.",
      "mapLayout": "Asymmetrical layout with dense vertical elements.",
      "powerUps": [
        "Swamp Camouflage (Invisibility for 20s)",
        "Demonic Haste (50% haste for 15s)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "A bloody stalemate has persisted here for decades. Historically, the Alliance held this ground until a massive Horde offensive.",
      "topMetaComps": [
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Mage/Warlock/Shaman (MLD)",
        "Warrior/Enhance/Druid (Turbo Cleave)"
      ],
      "achievements": [
        "Savage Hero",
        "Hero of Faction Defectors"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Argent Dawn"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gavel of Faction",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Axe",
          "stats": [
            "+32 Stamina",
            "+25 Dodge",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 192 for 15 sec.",
          "requiresLevel": 49
        },
        {
          "name": "Gladiator's Breastplate of the Defectors",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Leather",
          "stats": [
            "+25 Stamina",
            "+20 Strength",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 49
        }
      ]
    },
    {
      "id": "SharedAH",
      "name": "Shared Auction Houses",
      "size": "Global Economy",
      "type": "Economy Update",
      "description": "Merge the Horde and Alliance auction houses globally to fix economy imbalance.",
      "mechanics": [
        "Neutral AH Removed: The standard AH is now entirely cross-faction."
      ],
      "lore": "The goblins of the Steamwheedle Cartel have monopolized the market.",
      "mapLayout": "Swampy terrain with thick fog and hidden traps.",
      "powerUps": [
        "Flame Wreath (Burns nearby enemies)",
        "Speed Boots (150% movement speed)",
        "Swamp Camouflage (Invisibility for 20s)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. A strategic chokepoint that neither side can afford to lose.",
      "topMetaComps": [
        "Feral/Hunter/Priest (Kitty Cleave)",
        "Rogue/Warlock/Shaman (RLS)",
        "Death Knight/Warlock/Shaman (Shadowcleave)"
      ],
      "achievements": [
        "Flawless Slayer",
        "Hero of Shared Auction Houses"
      ],
      "associatedReputations": [
        "Warsong Outriders",
        "Argent Dawn"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Blade of Shared",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "One-Hand",
          "type": "Dagger",
          "stats": [
            "+32 Stamina",
            "+25 Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 192 for 15 sec.",
          "requiresLevel": 49
        },
        {
          "name": "Gladiator's Belt of the Houses",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Waist",
          "type": "Cloth",
          "stats": [
            "+25 Stamina",
            "+20 Spell Damage",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 49
        }
      ]
    }
  ],
  "Honor & Rewards Revamp": [
    {
      "id": "DecayRemoval",
      "name": "Honor Decay Removal",
      "size": "Global System",
      "type": "Progression Update",
      "description": "Remove the harsh PvP rank decay system.",
      "mechanics": [
        "Milestone Saving: Once you reach a rank, you can never drop below it."
      ],
      "lore": "A commander's prestige is never forgotten.",
      "mapLayout": "Frozen lake with slippery ice and thermal vents.",
      "powerUps": [
        "Windfury Totem (Extra attacks)",
        "Demonic Haste (50% haste for 15s)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Warrior/Paladin/Priest (TSG)",
        "Mage/Warlock/Shaman (MLD)"
      ],
      "achievements": [
        "Ruthless Conqueror",
        "Hero of Honor Decay Removal"
      ],
      "associatedReputations": [
        "Thorium Brotherhood",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Blade of Honor",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Main Hand",
          "type": "Sword",
          "stats": [
            "+32 Stamina",
            "+26 Defense"
          ],
          "effect": "",
          "requiresLevel": 60
        },
        {
          "name": "Veteran's Slippers of the Removal",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Feet",
          "type": "Cloth",
          "stats": [
            "+25 Stamina",
            "+20 Intellect"
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "PvPCosmetics",
      "name": "Cosmetic PvP Gear",
      "size": "Global Rewards",
      "type": "Transmog",
      "description": "Introduce exclusive transmog rewards for Rank 14.",
      "mechanics": [
        "Aura Unlocks: Rank 14 unlocks a permanent glowing aura cosmetic.",
        "Title Display: Allow players to display their highest achieved PvP title forever."
      ],
      "lore": "True champions shine on the battlefield.",
      "mapLayout": "Dense canopy with rope bridges and grappling hooks.",
      "powerUps": [
        "Speed Boots (150% movement speed)",
        "Swamp Camouflage (Invisibility for 20s)",
        "Flame Wreath (Burns nearby enemies)"
      ],
      "factionHistory": "A strategic chokepoint that neither side can afford to lose. A former stronghold of the Burning Legion, now contested territory.",
      "topMetaComps": [
        "Rogue/Mage/Priest (RMP)",
        "Warrior/Paladin/Priest (TSG)",
        "Death Knight/Warlock/Shaman (Shadowcleave)"
      ],
      "achievements": [
        "Savage Conqueror",
        "Hero of Cosmetic PvP Gear"
      ],
      "associatedReputations": [
        "League of Arathor",
        "Thorium Brotherhood"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Greatsword of Cosmetic",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Staff",
          "stats": [
            "+22 Stamina",
            "+17 Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 132 for 15 sec.",
          "requiresLevel": 29
        },
        {
          "name": "Gladiator's Harness of the Gear",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Chest",
          "type": "Leather",
          "stats": [
            "+17 Stamina",
            "+13 Strength",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    },
    {
      "id": "PvPMounts",
      "name": "Rank 11 Mounts",
      "size": "Global Rewards",
      "type": "Mounts",
      "description": "Add unique PvP mounts (e.g., Armored Kodos/Tigers) for hitting Rank 11.",
      "mechanics": [
        "100% Speed: Require riding skill."
      ],
      "lore": "Beasts trained for war.",
      "mapLayout": "Swampy terrain with thick fog and hidden traps.",
      "powerUps": [
        "Swamp Camouflage (Invisibility for 20s)",
        "Shadowmeld (Breaks targeting)",
        "Restoration Buff (Heals 10% per second)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Mage/Warlock/Shaman (MLD)",
        "Warrior/Enhance/Druid (Turbo Cleave)"
      ],
      "achievements": [
        "Flawless Conqueror",
        "Hero of Rank 11 Mounts"
      ],
      "associatedReputations": [
        "Warsong Outriders",
        "League of Arathor"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Bow of Rank",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Staff",
          "stats": [
            "+37 Stamina",
            "+30 Shield Block",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Treads of the Mounts",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Feet",
          "type": "Cloth",
          "stats": [
            "+29 Stamina",
            "+24 Intellect",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "HonorForHealing",
      "name": "Honor for Healing",
      "size": "Battlegrounds",
      "type": "Reward Update",
      "description": "Properly reward healers with honor based on healing done in Battlegrounds.",
      "mechanics": [
        "Healing = Damage: Healing done contributes to the scoreboard and honor calculations identically to damage."
      ],
      "lore": "The medics are just as vital as the frontline soldiers.",
      "mapLayout": "Asymmetrical layout with dense vertical elements.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Shadowmeld (Breaks targeting)",
        "Restoration Buff (Heals 10% per second)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive. An ancient curse haunts the battlefield, but the war rages on.",
      "topMetaComps": [
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Mage/Warlock/Shaman (MLD)",
        "Rogue/Mage/Priest (RMP)"
      ],
      "achievements": [
        "Relentless Vanguard",
        "Hero of Honor for Healing"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Frostwolf Clan"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Blade of Honor",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Bow",
          "stats": [
            "+17 Stamina",
            "+13 Strength"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Bindings of the Healing",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Wrist",
          "type": "Plate",
          "stats": [
            "+13 Stamina",
            "+10 Shield Block"
          ],
          "effect": "",
          "requiresLevel": 29
        }
      ]
    }
  ]
};