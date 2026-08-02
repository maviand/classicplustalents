// AUTO-GENERATED MASSIVE PVP CONTENT\n// 15,000% scale implementation - Battlegrounds, World PvP, and Arenas.\n// Deep Dive Update: 7x more information fields.\n\nexport const PVP_MODES = {\n  BATTLEGROUNDS: 'New Battlegrounds',\n  WORLD_PVP: 'World PvP & Banner Wars',\n  ARENA: 'The Gurubashi Arena System'\n};\n\nexport interface PvPItem {\n  id: string;\n  name: string;\n  size: string;\n  type: string;\n  description: string;\n  mechanics: string[];\n  lore: string;\n  mapLayout: string;\n  powerUps: string[];\n  factionHistory: string;\n  topMetaComps: string[];\n  achievements: string[];\n  associatedReputations: string[];\n  uniqueRewards: any[];\n}\n\nexport const pvpData: Record<string, PvPItem[]> = {
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
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 0",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 0",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
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
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 1",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 1",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
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
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 2",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 2",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
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
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 3",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 3",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
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
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 4",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 4",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
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
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 0",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 0",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
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
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 1",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 1",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
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
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 2",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 2",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_0",
      "name": "Dynamic Encounter 0",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 3",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 3",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_1",
      "name": "Dynamic Encounter 1",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 4",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 4",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_2",
      "name": "Dynamic Encounter 2",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 5",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 5",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_3",
      "name": "Dynamic Encounter 3",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 6",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 6",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_4",
      "name": "Dynamic Encounter 4",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 7",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 7",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_5",
      "name": "Dynamic Encounter 5",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 8",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 8",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_6",
      "name": "Dynamic Encounter 6",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 9",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 9",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_7",
      "name": "Dynamic Encounter 7",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 10",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 10",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_8",
      "name": "Dynamic Encounter 8",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 11",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 11",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcWorld_9",
      "name": "Dynamic Encounter 9",
      "size": "World PvP",
      "type": "Free-For-All",
      "description": "A spontaneous event occurring in the open world.",
      "mechanics": [
        "Combat",
        "Objective"
      ],
      "lore": "Local conflict.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 12",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 12",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
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
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 0",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 0",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    }
  ],
  "Warfront Offensives": [
    {
      "id": "ProcBG_Blackrock",
      "name": "The Blackrock Offensive",
      "size": "Zone-Wide Phase",
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Blackrock.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Blackrock as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 0",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 0",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
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
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Desolace.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Desolace as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 1",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 1",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcBG_Feralas",
      "name": "The Feralas Offensive",
      "size": "Zone-Wide Phase",
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Feralas.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Feralas as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 2",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 2",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
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
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Hinterlands.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Hinterlands as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 3",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 3",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcBG_Badlands",
      "name": "The Badlands Offensive",
      "size": "Zone-Wide Phase",
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Badlands.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Badlands as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 4",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 4",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
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
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Winterspring.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Winterspring as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 5",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 5",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcBG_BlastedLands",
      "name": "The Blasted Lands Offensive",
      "size": "Zone-Wide Phase",
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Blasted Lands.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Blasted Lands as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 6",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 6",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcBG_SearingGorge",
      "name": "The Searing Gorge Offensive",
      "size": "Zone-Wide Phase",
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Searing Gorge.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Searing Gorge as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 7",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 7",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    },
    {
      "id": "ProcBG_UnGoro",
      "name": "The Un'Goro Offensive",
      "size": "Zone-Wide Phase",
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Un'Goro.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Un'Goro as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 8",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 8",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
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
      "type": "Phased Warfront",
      "description": "A massive, phased war-style environment where you join the front lines of an eternally locked conflict in Dustwallow.",
      "mechanics": [
        "Endless Reinforcements: NPCs from both factions constantly spawn and clash at the front lines.",
        "Objective Conquest: Push the frontline forward by destroying enemy barricades and capturing forward command posts.",
        "Commander Assassination: Winning requires drawing out and defeating the opposing faction's Supreme Commander."
      ],
      "lore": "The skirmishes of the Third War echo across Dustwallow as factions desperately secure borders and vital ley lines in a brutal war of attrition.",
      "mapLayout": "Asymmetrical layout featuring 3 main lanes and dense, vertical jungle in the center.",
      "powerUps": [
        "Berserker Buff (100% damage increase)",
        "Restoration Buff (Heals 10% per second)",
        "Speed Boots (150% movement speed)"
      ],
      "factionHistory": "Historically, the Alliance held this ground until a massive Horde offensive during the Third War forced a bloody stalemate.",
      "topMetaComps": [
        "3 Healers, 2 Warriors, 1 Mage (Peel Comp)",
        "5 Stealth Burst (Rogue/Druid)"
      ],
      "achievements": [
        "Flawless Victory (Win without losing a single player)",
        "Iron Defender (Defend 5 nodes in one match)"
      ],
      "associatedReputations": [
        "The Defilers",
        "League of Arathor",
        "Silverwing Sentinels"
      ],
      "uniqueRewards": [
        {
          "name": "Vicious Gladiator's Greatsword 9",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Two-Hand",
          "type": "Sword",
          "stats": [
            "+35 Stamina",
            "+30 Strength",
            "Equip: Improves your chance to get a critical strike by 2%."
          ],
          "effect": "Use: Increases attack power by 200 for 15 sec.",
          "requiresLevel": 60
        },
        {
          "name": "Bloodthirsty Ring of the Justiciar 9",
          "rarity": "Epic",
          "bindType": "Binds when picked up",
          "slot": "Finger",
          "type": "Ring",
          "stats": [
            "+15 Stamina",
            "+20 Agility",
            "Equip: Increases your hit rating by 1%."
          ],
          "effect": "",
          "requiresLevel": 60
        }
      ]
    }
  ]
};