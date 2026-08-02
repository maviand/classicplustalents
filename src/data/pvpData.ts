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
        "Frost Armor (Reflects 30% damage)",
        "Demonic Haste (50% haste for 15s)",
        "Swamp Camouflage (Invisibility for 20s)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The discovery of rich resources sparked this brutal war.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Feral/Hunter/Priest (Kitty Cleave)"
      ],
      "achievements": [
        "Iron Vanguard",
        "Hero of Azshara Crater"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "The Defilers"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Mace of Azshara",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Mace",
          "stats": [
            "+17 Stamina",
            "+13 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Ring of the Crater",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+13 Stamina",
            "+10 Intellect/Spirit"
          ],
          "effect": "",
          "requiresLevel": 29
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
      "mapLayout": "Open plains with scattered cover and watchtowers.",
      "powerUps": [
        "Frost Armor (Reflects 30% damage)",
        "Titan Surge (Immunity to crowd control)",
        "Swamp Camouflage (Invisibility for 20s)"
      ],
      "factionHistory": "An ancient curse haunts the battlefield, but the war rages on. Tensions have simmered in this region since the Second War.",
      "topMetaComps": [
        "Rogue/Mage/Priest (RMP)",
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Warlock/Shaman (RLS)"
      ],
      "achievements": [
        "Savage Defender",
        "Hero of Gillijim's Isle"
      ],
      "associatedReputations": [
        "Silverwing Sentinels",
        "Argent Dawn"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Dagger of Gillijim's",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Dagger",
          "stats": [
            "+22 Stamina",
            "+17 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Cloak of the Isle",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Cloak",
          "type": "Cloak",
          "stats": [
            "+17 Stamina",
            "+13 Intellect/Spirit"
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
      "mapLayout": "Dense canopy with rope bridges and grappling hooks.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Swamp Camouflage (Invisibility for 20s)"
      ],
      "factionHistory": "Both factions seek the hidden titan artifacts buried here. An ancient curse haunts the battlefield, but the war rages on.",
      "topMetaComps": [
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Rogue/Mage/Priest (RMP)",
        "Rogue/Warlock/Shaman (RLS)"
      ],
      "achievements": [
        "Relentless Hero",
        "Hero of The Hyjal Front"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Frostwolf Clan"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Mace of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Mace",
          "stats": [
            "+37 Stamina",
            "+30 Strength/Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Helm of the Front",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Helm",
          "type": "Helm",
          "stats": [
            "+29 Stamina",
            "+24 Intellect/Spirit",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
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
      "mapLayout": "Symmetrical 3-lane design with destructible environment hazards.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Frost Armor (Reflects 30% damage)"
      ],
      "factionHistory": "The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Rogue/Mage/Priest (RMP)",
        "Warrior/Paladin/Priest (TSG)",
        "Hunter/Feral/Paladin (Jungle Cleave)"
      ],
      "achievements": [
        "Flawless Champion",
        "Hero of Stromgarde Siege"
      ],
      "associatedReputations": [
        "Thorium Brotherhood",
        "Cenarion Circle"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Dagger of Stromgarde",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Dagger",
          "stats": [
            "+37 Stamina",
            "+30 Strength/Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Cloak of the Siege",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Cloak",
          "type": "Cloak",
          "stats": [
            "+29 Stamina",
            "+24 Intellect/Spirit",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
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
      "mapLayout": "Asymmetrical layout with dense vertical elements.",
      "powerUps": [
        "Flame Wreath (Burns nearby enemies)",
        "Berserker Buff (100% damage increase)",
        "Windfury Totem (Extra attacks)"
      ],
      "factionHistory": "A bloody stalemate has persisted here for decades. Historically, the Alliance held this ground until a massive Horde offensive.",
      "topMetaComps": [
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Hunter/Ret/Priest (Cupid Cleave)"
      ],
      "achievements": [
        "Relentless Conqueror",
        "Hero of Plunder Isle Skirmish"
      ],
      "associatedReputations": [
        "Timbermaw Hold",
        "The Defilers"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Bow of Plunder",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Bow",
          "stats": [
            "+22 Stamina",
            "+17 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Helm of the Skirmish",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Helm",
          "type": "Helm",
          "stats": [
            "+17 Stamina",
            "+13 Intellect/Spirit"
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
      "mapLayout": "Swampy terrain with thick fog and hidden traps.",
      "powerUps": [
        "Titan Surge (Immunity to crowd control)",
        "Windfury Totem (Extra attacks)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Once a peaceful region, it is now scarred by endless conflict. Both factions seek the hidden titan artifacts buried here.",
      "topMetaComps": [
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Rogue/Mage/Priest (RMP)"
      ],
      "achievements": [
        "Vindictive Champion",
        "Hero of The Banner War System"
      ],
      "associatedReputations": [
        "Timbermaw Hold",
        "Thorium Brotherhood"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Staff of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Staff",
          "stats": [
            "+22 Stamina",
            "+17 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Ring of the System",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+17 Stamina",
            "+13 Intellect/Spirit"
          ],
          "effect": "",
          "requiresLevel": 39
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
      "mapLayout": "Swampy terrain with thick fog and hidden traps.",
      "powerUps": [
        "Windfury Totem (Extra attacks)",
        "Berserker Buff (100% damage increase)",
        "Titan Surge (Immunity to crowd control)"
      ],
      "factionHistory": "Once a peaceful region, it is now scarred by endless conflict. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Rogue/Warlock/Shaman (RLS)",
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Mage/Warlock/Shaman (MLD)"
      ],
      "achievements": [
        "Savage Slayer",
        "Hero of The Crimson Atoll Event"
      ],
      "associatedReputations": [
        "League of Arathor",
        "Timbermaw Hold"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Mace of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Mace",
          "stats": [
            "+32 Stamina",
            "+25 Strength/Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 192 for 15 sec.",
          "requiresLevel": 49
        },
        {
          "name": "Gladiator's Ring of the Event",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+25 Stamina",
            "+20 Intellect/Spirit",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 49
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
        "War Effort: Turning in artifacts grants massive reputation and PvP honor."
      ],
      "lore": "The shifting sands reveal what the Cenarion Circle desperately wants to keep buried.",
      "mapLayout": "Underground tunnel network with multiple chokepoints.",
      "powerUps": [
        "Titan Surge (Immunity to crowd control)",
        "Windfury Totem (Extra attacks)",
        "Berserker Buff (100% damage increase)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Death Knight/Warlock/Shaman (Shadowcleave)",
        "Rogue/Warlock/Shaman (RLS)",
        "Mage/Warlock/Shaman (MLD)"
      ],
      "achievements": [
        "Iron Conqueror",
        "Hero of Silithus Sandstorms"
      ],
      "associatedReputations": [
        "Warsong Outriders",
        "Stormpike Guard"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Mace of Silithus",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Mace",
          "stats": [
            "+27 Stamina",
            "+21 Strength/Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 162 for 15 sec.",
          "requiresLevel": 39
        },
        {
          "name": "Gladiator's Cloak of the Sandstorms",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Cloak",
          "type": "Cloak",
          "stats": [
            "+21 Stamina",
            "+16 Intellect/Spirit",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 39
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
      "mapLayout": "Symmetrical 3-lane design with destructible environment hazards.",
      "powerUps": [
        "Restoration Buff (Heals 10% per second)",
        "Berserker Buff (100% damage increase)",
        "Flame Wreath (Burns nearby enemies)"
      ],
      "factionHistory": "An ancient curse haunts the battlefield, but the war rages on. A strategic chokepoint that neither side can afford to lose.",
      "topMetaComps": [
        "Warrior/Enhance/Druid (Turbo Cleave)",
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Warlock/Shadow Priest/Druid (Shadowplay)"
      ],
      "achievements": [
        "Fierce Gladiator",
        "Hero of The Gurubashi Arena Brawl"
      ],
      "associatedReputations": [
        "Thorium Brotherhood",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Bow of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Bow",
          "stats": [
            "+22 Stamina",
            "+17 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 39
        },
        {
          "name": "Veteran's Trinket of the Brawl",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Trinket",
          "type": "Trinket",
          "stats": [
            "+17 Stamina",
            "+13 Intellect/Spirit"
          ],
          "effect": "",
          "requiresLevel": 39
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
      "mapLayout": "Ruined city streets with rooftop sniping positions.",
      "powerUps": [
        "Frost Armor (Reflects 30% damage)",
        "Speed Boots (150% movement speed)",
        "Swamp Camouflage (Invisibility for 20s)"
      ],
      "factionHistory": "A former stronghold of the Burning Legion, now contested territory. Both factions seek the hidden titan artifacts buried here.",
      "topMetaComps": [
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Feral/Hunter/Priest (Kitty Cleave)"
      ],
      "achievements": [
        "Iron Hero",
        "Hero of The Blackrock Offensive"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Thorium Brotherhood"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Mace of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Mace",
          "stats": [
            "+17 Stamina",
            "+13 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Ring of the Offensive",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+13 Stamina",
            "+10 Intellect/Spirit"
          ],
          "effect": "",
          "requiresLevel": 29
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
      "mapLayout": "Ruined city streets with rooftop sniping positions.",
      "powerUps": [
        "Shadowmeld (Breaks targeting)",
        "Swamp Camouflage (Invisibility for 20s)",
        "Berserker Buff (100% damage increase)"
      ],
      "factionHistory": "A bloody stalemate has persisted here for decades. Both factions seek the hidden titan artifacts buried here.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)",
        "Warlock/Shadow Priest/Druid (Shadowplay)"
      ],
      "achievements": [
        "Bloodthirsty Slayer",
        "Hero of The Un'Goro Offensive"
      ],
      "associatedReputations": [
        "Cenarion Circle",
        "Thorium Brotherhood"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Dagger of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Dagger",
          "stats": [
            "+32 Stamina",
            "+26 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 60
        },
        {
          "name": "Veteran's Trinket of the Offensive",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Trinket",
          "type": "Trinket",
          "stats": [
            "+25 Stamina",
            "+20 Intellect/Spirit"
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
      "mapLayout": "Circular arena with shifting walls and lava pits.",
      "powerUps": [
        "Restoration Buff (Heals 10% per second)",
        "Windfury Totem (Extra attacks)",
        "Flame Wreath (Burns nearby enemies)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Warrior/Enhance/Druid (Turbo Cleave)",
        "Rogue/Warlock/Shaman (RLS)",
        "Hunter/Ret/Priest (Cupid Cleave)"
      ],
      "achievements": [
        "Ruthless Gladiator",
        "Hero of The Winterspring Offensive"
      ],
      "associatedReputations": [
        "Cenarion Circle",
        "Thorium Brotherhood"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Staff of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Staff",
          "stats": [
            "+17 Stamina",
            "+13 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Necklace of the Offensive",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Neck",
          "type": "Necklace",
          "stats": [
            "+13 Stamina",
            "+10 Intellect/Spirit"
          ],
          "effect": "",
          "requiresLevel": 29
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
      "mapLayout": "Underground tunnel network with multiple chokepoints.",
      "powerUps": [
        "Speed Boots (150% movement speed)",
        "Flame Wreath (Burns nearby enemies)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. Once a peaceful region, it is now scarred by endless conflict.",
      "topMetaComps": [
        "Hunter/Ret/Priest (Cupid Cleave)",
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)"
      ],
      "achievements": [
        "Bloodthirsty Vanguard",
        "Hero of The Desolace Offensive"
      ],
      "associatedReputations": [
        "Thorium Brotherhood",
        "Cenarion Circle"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Staff of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Staff",
          "stats": [
            "+32 Stamina",
            "+25 Strength/Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 192 for 15 sec.",
          "requiresLevel": 49
        },
        {
          "name": "Gladiator's Cloak of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Cloak",
          "type": "Cloak",
          "stats": [
            "+25 Stamina",
            "+20 Intellect/Spirit",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 49
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
      "mapLayout": "Symmetrical 3-lane design with destructible environment hazards.",
      "powerUps": [
        "Titan Surge (Immunity to crowd control)",
        "Speed Boots (150% movement speed)",
        "Restoration Buff (Heals 10% per second)"
      ],
      "factionHistory": "The discovery of rich resources sparked this brutal war. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Rogue/Mage/Priest (RMP)",
        "Feral/Hunter/Priest (Kitty Cleave)",
        "Warrior/Paladin/Priest (TSG)"
      ],
      "achievements": [
        "Iron Victory",
        "Hero of The Feralas Offensive"
      ],
      "associatedReputations": [
        "Frostwolf Clan",
        "Stormpike Guard"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Greatsword of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Greatsword",
          "stats": [
            "+37 Stamina",
            "+30 Strength/Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Cloak of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Cloak",
          "type": "Cloak",
          "stats": [
            "+29 Stamina",
            "+24 Intellect/Spirit",
            "Equip: Increases your hit rating by 1%."
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
        "Speed Boots (150% movement speed)",
        "Frost Armor (Reflects 30% damage)",
        "Shadowmeld (Breaks targeting)"
      ],
      "factionHistory": "Once a peaceful region, it is now scarred by endless conflict. A former stronghold of the Burning Legion, now contested territory.",
      "topMetaComps": [
        "Rogue/Mage/Priest (RMP)",
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Warrior/Enhance/Druid (Turbo Cleave)"
      ],
      "achievements": [
        "Vindictive Champion",
        "Hero of The Hinterlands Offensive"
      ],
      "associatedReputations": [
        "Timbermaw Hold",
        "Stormpike Guard"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Staff of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Staff",
          "stats": [
            "+17 Stamina",
            "+13 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Ring of the Offensive",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+13 Stamina",
            "+10 Intellect/Spirit"
          ],
          "effect": "",
          "requiresLevel": 29
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
      "mapLayout": "Dense canopy with rope bridges and grappling hooks.",
      "powerUps": [
        "Frost Armor (Reflects 30% damage)",
        "Flame Wreath (Burns nearby enemies)",
        "Windfury Totem (Extra attacks)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Hunter/Feral/Paladin (Jungle Cleave)",
        "Rogue/Warlock/Shaman (RLS)",
        "Mage/Warlock/Shaman (MLD)"
      ],
      "achievements": [
        "Vindictive Champion",
        "Hero of The Blasted Lands Offensive"
      ],
      "associatedReputations": [
        "Frostwolf Clan",
        "Stormpike Guard"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Dagger of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Dagger",
          "stats": [
            "+22 Stamina",
            "+17 Strength/Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 132 for 15 sec.",
          "requiresLevel": 29
        },
        {
          "name": "Gladiator's Ring of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+17 Stamina",
            "+13 Intellect/Spirit",
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
      "mapLayout": "Dense canopy with rope bridges and grappling hooks.",
      "powerUps": [
        "Speed Boots (150% movement speed)",
        "Swamp Camouflage (Invisibility for 20s)",
        "Windfury Totem (Extra attacks)"
      ],
      "factionHistory": "A former stronghold of the Burning Legion, now contested territory. An ancient curse haunts the battlefield, but the war rages on.",
      "topMetaComps": [
        "Warlock/Shadow Priest/Druid (Shadowplay)",
        "Rogue/Mage/Priest (RMP)",
        "Feral/Hunter/Priest (Kitty Cleave)"
      ],
      "achievements": [
        "Savage Gladiator",
        "Hero of The Searing Gorge Offensive"
      ],
      "associatedReputations": [
        "Warsong Outriders",
        "The Defilers"
      ],
      "uniqueRewards": [
        {
          "name": "Bloodthirsty Mace of The",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Mace",
          "stats": [
            "+17 Stamina",
            "+13 Strength/Agility"
          ],
          "effect": "",
          "requiresLevel": 29
        },
        {
          "name": "Veteran's Helm of the Offensive",
          "rarity": "Rare",
          "bindType": "Binds when picked up",
          "slot": "Helm",
          "type": "Helm",
          "stats": [
            "+13 Stamina",
            "+10 Intellect/Spirit"
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
      "mapLayout": "Asymmetrical layout with dense vertical elements.",
      "powerUps": [
        "Speed Boots (150% movement speed)",
        "Windfury Totem (Extra attacks)",
        "Restoration Buff (Heals 10% per second)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive. A bloody stalemate has persisted here for decades.",
      "topMetaComps": [
        "Death Knight/Warlock/Shaman (Shadowcleave)",
        "Warrior/Paladin/Priest (TSG)",
        "Warrior/Enhance/Druid (Turbo Cleave)"
      ],
      "achievements": [
        "Fierce Conqueror",
        "Hero of The Badlands Offensive"
      ],
      "associatedReputations": [
        "Stormpike Guard",
        "Frostwolf Clan"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Greatsword of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Greatsword",
          "stats": [
            "+37 Stamina",
            "+30 Strength/Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 225 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Gladiator's Cloak of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Cloak",
          "type": "Cloak",
          "stats": [
            "+29 Stamina",
            "+24 Intellect/Spirit",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
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
      "mapLayout": "Frozen lake with slippery ice and thermal vents.",
      "powerUps": [
        "Swamp Camouflage (Invisibility for 20s)",
        "Titan Surge (Immunity to crowd control)",
        "Frost Armor (Reflects 30% damage)"
      ],
      "factionHistory": "Tensions have simmered in this region since the Second War. The Horde claims ancestral rites, while the Alliance points to pre-sundering treaties.",
      "topMetaComps": [
        "Warrior/Paladin/Priest (TSG)",
        "Rogue/Mage/Priest (RMP)",
        "Feral/Hunter/Priest (Kitty Cleave)"
      ],
      "achievements": [
        "Flawless Hero",
        "Hero of The Dustwallow Offensive"
      ],
      "associatedReputations": [
        "Silverwing Sentinels",
        "League of Arathor"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Bow of The",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Weapon",
          "type": "Bow",
          "stats": [
            "+27 Stamina",
            "+21 Strength/Agility",
            "Equip: Improves your chance to get a critical strike by 1%."
          ],
          "effect": "Use: Increases attack power by 162 for 15 sec.",
          "requiresLevel": 39
        },
        {
          "name": "Gladiator's Cloak of the Offensive",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Cloak",
          "type": "Cloak",
          "stats": [
            "+21 Stamina",
            "+16 Intellect/Spirit",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 39
        }
      ]
    }
  ]
};