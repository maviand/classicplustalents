export const PVE_CATS = {
  DUNGEONS: 'The New Dungeons (Winged Hubs)',
  RAIDS: 'Parallel Raid Tiers'
};

export const pveData = {
  [PVE_CATS.DUNGEONS]: [
  {
    "id": "StormwindVault",
    "name": "Stormwind Vaults",
    "wings": [
      {
        "name": "The Upper Brig",
        "level": "25-30",
        "desc": "The holding cells.",
        "bosses": [
          "Warden Thelwater",
          "Targorr the Dread"
        ],
        "loot": [
          {
            "name": "Signet of Shattered Souls",
            "type": "Mail",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Amulet of the Forgotten",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Amulet of the Archmage",
            "type": "Trinket",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Sabatons of Shattered Souls",
            "type": "Weapon",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Cloak of the Deep",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Amulet of Bloodletting",
            "type": "Cloth",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Pauldrons of the Crimson King",
            "type": "Mail",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Band of the Unseen",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Amulet of the Crimson King",
            "type": "Trinket",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Cloth",
            "effect": "Equip: +1% Hit chance."
          }
        ]
      },
      {
        "name": "The Deep Cellblocks",
        "level": "45-50",
        "desc": "Where the true enemies are kept.",
        "bosses": [
          "High Cultist Zenn",
          "Dextren Ward"
        ],
        "loot": [
          {
            "name": "Tome of the Forgotten",
            "type": "Cloth",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Signet of the Void",
            "type": "Weapon",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Sabatons of the Forgotten",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Legguards of Shattered Souls",
            "type": "Trinket",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Amulet of the Forgotten",
            "type": "Weapon",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Sabatons of the Void",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Tome of the Betrayer",
            "type": "Weapon",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Cloak of the Forgotten",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Helm of the Archmage",
            "type": "Trinket",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Sabatons of the Void",
            "type": "Ring",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Tome of Shattered Souls",
            "type": "Mail",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Breastplate of the Betrayer",
            "type": "Weapon",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Helm of the Archmage",
            "type": "Plate",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Pauldrons of the Archmage",
            "type": "Trinket",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Signet of the Betrayer",
            "type": "Plate",
            "effect": "Equip: +10 Shadow Resistance."
          }
        ]
      },
      {
        "name": "The Interrogation Levels",
        "level": "55-60",
        "desc": "A descent into madness.",
        "bosses": [
          "Interrogator Vishas",
          "The Flesh-Shaper"
        ],
        "loot": [
          {
            "name": "Cloak of the Forgotten",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "type": "Leather",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Sabatons of Eternal Slumber",
            "type": "Ring",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Band of the Void",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Breastplate of the Unseen",
            "type": "Weapon",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Band of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Tome of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Sabatons of the Crimson King",
            "type": "Trinket",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Pauldrons of the Crimson King",
            "type": "Mail",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Signet of the Void",
            "type": "Trinket",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "type": "Mail",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Sabatons of Eternal Slumber",
            "type": "Leather",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Helm of the Crimson King",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Signet of the Deep",
            "type": "Mail",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Legguards of Eternal Slumber",
            "type": "Cloth",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Legguards of Shattered Souls",
            "type": "Mail",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Leather",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Sabatons of the Crimson King",
            "type": "Weapon",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Helm of Bloodletting",
            "type": "Plate",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Amulet of the Deep",
            "type": "Plate",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Sabatons of the Unseen",
            "type": "Plate",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Signet of the Unseen",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Sabatons of the Betrayer",
            "type": "Ring",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Cloth",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of the Unseen",
            "type": "Cloth",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          }
        ]
      }
    ]
  },
  {
    "id": "KarazhanCrypts",
    "name": "Karazhan Crypts",
    "wings": [
      {
        "name": "The Well of the Forgotten",
        "level": "58-60",
        "desc": "Mass graves.",
        "bosses": [
          "The Caretaker",
          "Amalgam of the Damned"
        ],
        "loot": [
          {
            "name": "Cloak of the Forgotten",
            "type": "Trinket",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Helm of the Unseen",
            "type": "Mail",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Cloak of the Unseen",
            "type": "Weapon",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Tome of Eternal Slumber",
            "type": "Weapon",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Sabatons of the Betrayer",
            "type": "Cloth",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Cloak of the Archmage",
            "type": "Cloth",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Cloak of the Deep",
            "type": "Leather",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Helm of the Deep",
            "type": "Mail",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Helm of the Crimson King",
            "type": "Ring",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Breastplate of the Deep",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Sabatons of the Void",
            "type": "Cloth",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Signet of Bloodletting",
            "type": "Plate",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Breastplate of the Unseen",
            "type": "Weapon",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Tome of the Unseen",
            "type": "Weapon",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Amulet of the Deep",
            "type": "Cloth",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Tome of Shattered Souls",
            "type": "Plate",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Cloak of the Void",
            "type": "Mail",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Legguards of the Archmage",
            "type": "Ring",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Cloak of the Forgotten",
            "type": "Plate",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Legguards of Eternal Slumber",
            "type": "Mail",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Cloth",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Legguards of Eternal Slumber",
            "type": "Ring",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Band of the Crimson King",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Legguards of Shattered Souls",
            "type": "Plate",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          }
        ]
      },
      {
        "name": "The Upside-Down Sinners",
        "level": "60",
        "desc": "Underwater terror.",
        "bosses": [
          "The Drowning Terror",
          "Master of the Sinners"
        ],
        "loot": [
          {
            "name": "Amulet of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Signet of the Void",
            "type": "Mail",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Helm of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Tome of the Forgotten",
            "type": "Trinket",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Cloth",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Amulet of the Crimson King",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Signet of the Crimson King",
            "type": "Trinket",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Signet of the Forgotten",
            "type": "Trinket",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Breastplate of the Deep",
            "type": "Mail",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of the Crimson King",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Amulet of the Forgotten",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Pauldrons of the Betrayer",
            "type": "Ring",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Pauldrons of the Void",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Band of the Crimson King",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Pauldrons of Bloodletting",
            "type": "Mail",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Breastplate of the Forgotten",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Pauldrons of the Crimson King",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Sabatons of the Archmage",
            "type": "Plate",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Band of the Betrayer",
            "type": "Plate",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Amulet of the Crimson King",
            "type": "Trinket",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Sabatons of the Unseen",
            "type": "Leather",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Helm of the Deep",
            "type": "Leather",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Tome of the Crimson King",
            "type": "Weapon",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Helm of the Betrayer",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Helm of the Deep",
            "type": "Cloth",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Weapon",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Cloak of the Archmage",
            "type": "Leather",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Cloak of the Crimson King",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Mail",
            "effect": "Equip: +10 Shadow Resistance."
          }
        ]
      },
      {
        "name": "The Reliquary of Secrets",
        "level": "60",
        "desc": "Forbidden artifacts.",
        "bosses": [
          "The Animated Grimoire",
          "The Void-Sealer"
        ],
        "loot": [
          {
            "name": "Cloak of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Pauldrons of the Unseen",
            "type": "Plate",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Pauldrons of the Crimson King",
            "type": "Plate",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Weapon",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Pauldrons of the Forgotten",
            "type": "Plate",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Signet of the Deep",
            "type": "Leather",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Sabatons of the Crimson King",
            "type": "Weapon",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Tome of Bloodletting",
            "type": "Mail",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Signet of the Archmage",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Sabatons of the Crimson King",
            "type": "Mail",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Legguards of the Void",
            "type": "Ring",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Breastplate of Shattered Souls",
            "type": "Plate",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Helm of the Betrayer",
            "type": "Plate",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Legguards of the Deep",
            "type": "Plate",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Pauldrons of Bloodletting",
            "type": "Mail",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Band of the Unseen",
            "type": "Weapon",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Sabatons of the Unseen",
            "type": "Trinket",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Sabatons of the Archmage",
            "type": "Ring",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Cloak of Eternal Slumber",
            "type": "Mail",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Sabatons of the Crimson King",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Band of the Unseen",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Cloak of Shattered Souls",
            "type": "Mail",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Breastplate of the Crimson King",
            "type": "Trinket",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Pauldrons of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Pauldrons of the Unseen",
            "type": "Leather",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Amulet of Bloodletting",
            "type": "Plate",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Helm of the Crimson King",
            "type": "Mail",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Amulet of the Unseen",
            "type": "Leather",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Sabatons of the Forgotten",
            "type": "Plate",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Band of the Crimson King",
            "type": "Ring",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          }
        ]
      }
    ]
  },
  {
    "id": "TimbermawHold",
    "name": "Timbermaw Hold",
    "wings": [
      {
        "name": "The Corrupted Warrens",
        "level": "48-52",
        "desc": "Besieged hold.",
        "bosses": [
          "Chieftain Bloodmaw",
          "The Rotting Ancient"
        ],
        "loot": [
          {
            "name": "Breastplate of the Crimson King",
            "type": "Leather",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Signet of the Betrayer",
            "type": "Trinket",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Pauldrons of the Unseen",
            "type": "Plate",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Helm of the Forgotten",
            "type": "Plate",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Cloak of the Crimson King",
            "type": "Trinket",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Legguards of the Unseen",
            "type": "Mail",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Signet of the Void",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Helm of Eternal Slumber",
            "type": "Ring",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Trinket",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Legguards of Bloodletting",
            "type": "Plate",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Signet of Eternal Slumber",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Breastplate of the Archmage",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Cloak of the Unseen",
            "type": "Cloth",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Legguards of the Betrayer",
            "type": "Leather",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          }
        ]
      },
      {
        "name": "The Fel-Scar",
        "level": "55-58",
        "desc": "Demonic incursion.",
        "bosses": [
          "Xandros the Fel-Lord",
          "The Summoning Portal"
        ],
        "loot": [
          {
            "name": "Cloak of the Deep",
            "type": "Weapon",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Breastplate of the Betrayer",
            "type": "Leather",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Sabatons of the Betrayer",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Cloak of the Crimson King",
            "type": "Mail",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Helm of the Betrayer",
            "type": "Cloth",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Helm of the Archmage",
            "type": "Leather",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Legguards of the Crimson King",
            "type": "Ring",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Helm of the Archmage",
            "type": "Cloth",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Leather",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Mail",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Cloak of Shattered Souls",
            "type": "Ring",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Band of the Unseen",
            "type": "Mail",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Legguards of Shattered Souls",
            "type": "Trinket",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Tome of Bloodletting",
            "type": "Ring",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Amulet of the Unseen",
            "type": "Trinket",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Mail",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Signet of the Archmage",
            "type": "Weapon",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Amulet of the Forgotten",
            "type": "Plate",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Legguards of the Archmage",
            "type": "Leather",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Cloak of the Crimson King",
            "type": "Leather",
            "effect": "Equip: +20 Attack Power."
          }
        ]
      },
      {
        "name": "The Ancestral Hollow",
        "level": "60",
        "desc": "Defiled burial grounds.",
        "bosses": [
          "The First Chieftain",
          "The Defiler"
        ],
        "loot": [
          {
            "name": "Amulet of Shattered Souls",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Pauldrons of the Unseen",
            "type": "Weapon",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Weapon",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Breastplate of the Betrayer",
            "type": "Trinket",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Amulet of the Forgotten",
            "type": "Weapon",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Cloth",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Amulet of Bloodletting",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Breastplate of the Betrayer",
            "type": "Leather",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Cloak of the Void",
            "type": "Mail",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Legguards of the Archmage",
            "type": "Weapon",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Helm of the Unseen",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Legguards of the Unseen",
            "type": "Trinket",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Signet of the Betrayer",
            "type": "Leather",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Sabatons of the Forgotten",
            "type": "Trinket",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Tome of the Deep",
            "type": "Mail",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Band of the Archmage",
            "type": "Leather",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Sabatons of the Void",
            "type": "Ring",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Band of the Crimson King",
            "type": "Cloth",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Breastplate of the Deep",
            "type": "Trinket",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Breastplate of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Cloak of Eternal Slumber",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Legguards of the Void",
            "type": "Cloth",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Legguards of the Crimson King",
            "type": "Cloth",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Cloak of the Unseen",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Sabatons of the Unseen",
            "type": "Ring",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Tome of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Breastplate of Shattered Souls",
            "type": "Leather",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Signet of the Archmage",
            "type": "Mail",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Amulet of the Deep",
            "type": "Mail",
            "effect": "Equip: +10 Shadow Resistance."
          }
        ]
      }
    ]
  },
  {
    "id": "UldumVaults",
    "name": "The Vaults of Uldum",
    "wings": [
      {
        "name": "The Maker's Terrace",
        "level": "55-58",
        "desc": "Titan facility.",
        "bosses": [
          "High-Executor Norgannon",
          "Matrix-Lord"
        ],
        "loot": [
          {
            "name": "Legguards of the Deep",
            "type": "Trinket",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Signet of Shattered Souls",
            "type": "Weapon",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Helm of the Deep",
            "type": "Weapon",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Band of the Unseen",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Amulet of the Deep",
            "type": "Leather",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Amulet of the Betrayer",
            "type": "Cloth",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Breastplate of Bloodletting",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Cloak of the Unseen",
            "type": "Cloth",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Breastplate of the Forgotten",
            "type": "Weapon",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Band of the Void",
            "type": "Plate",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Sabatons of Shattered Souls",
            "type": "Trinket",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Legguards of the Betrayer",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Sabatons of the Archmage",
            "type": "Plate",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Tome of Bloodletting",
            "type": "Leather",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Signet of the Unseen",
            "type": "Plate",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Legguards of the Unseen",
            "type": "Mail",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Band of the Void",
            "type": "Trinket",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Legguards of the Betrayer",
            "type": "Ring",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Cloak of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Tome of the Crimson King",
            "type": "Ring",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          }
        ]
      },
      {
        "name": "The Obsidian Quarry",
        "level": "58-60",
        "desc": "Construct manufacturing.",
        "bosses": [
          "The Sculptor",
          "The Hive-Mind Incursor"
        ],
        "loot": [
          {
            "name": "Cloak of the Void",
            "type": "Cloth",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Helm of Shattered Souls",
            "type": "Weapon",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Band of Eternal Slumber",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Pauldrons of the Void",
            "type": "Trinket",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Signet of Shattered Souls",
            "type": "Mail",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Amulet of the Void",
            "type": "Leather",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Amulet of the Crimson King",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Breastplate of the Archmage",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Sabatons of the Forgotten",
            "type": "Trinket",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Cloak of the Void",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Tome of the Void",
            "type": "Trinket",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Amulet of the Forgotten",
            "type": "Weapon",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of the Void",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Legguards of the Void",
            "type": "Trinket",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Breastplate of Bloodletting",
            "type": "Weapon",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Cloak of the Forgotten",
            "type": "Cloth",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Sabatons of the Void",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Legguards of the Unseen",
            "type": "Plate",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Tome of the Betrayer",
            "type": "Leather",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Cloak of Eternal Slumber",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Sabatons of the Deep",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Signet of Bloodletting",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Legguards of Bloodletting",
            "type": "Trinket",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Band of Eternal Slumber",
            "type": "Plate",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Helm of the Void",
            "type": "Leather",
            "effect": "Equip: +1% Critical Strike."
          }
        ]
      },
      {
        "name": "The Engine of Origination",
        "level": "60",
        "desc": "The core.",
        "bosses": [
          "General Rajaxx's Vanguard",
          "Avatar of the Makers"
        ],
        "loot": [
          {
            "name": "Cloak of Bloodletting",
            "type": "Leather",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Signet of the Unseen",
            "type": "Cloth",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Signet of the Archmage",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Breastplate of the Unseen",
            "type": "Weapon",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Sabatons of the Betrayer",
            "type": "Plate",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Legguards of the Forgotten",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Helm of Shattered Souls",
            "type": "Leather",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Band of the Deep",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Tome of the Forgotten",
            "type": "Leather",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Tome of the Unseen",
            "type": "Leather",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Tome of Bloodletting",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Breastplate of Bloodletting",
            "type": "Ring",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Breastplate of the Archmage",
            "type": "Leather",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Signet of the Betrayer",
            "type": "Trinket",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Cloak of the Archmage",
            "type": "Plate",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Signet of Shattered Souls",
            "type": "Trinket",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Signet of the Forgotten",
            "type": "Mail",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Cloak of Eternal Slumber",
            "type": "Cloth",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Signet of Bloodletting",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Sabatons of the Deep",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Cloak of the Crimson King",
            "type": "Ring",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Pauldrons of the Void",
            "type": "Trinket",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Helm of the Forgotten",
            "type": "Trinket",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Amulet of Shattered Souls",
            "type": "Leather",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Amulet of the Unseen",
            "type": "Leather",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Amulet of the Archmage",
            "type": "Cloth",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of the Forgotten",
            "type": "Cloth",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Breastplate of Bloodletting",
            "type": "Trinket",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Band of Bloodletting",
            "type": "Weapon",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Breastplate of the Crimson King",
            "type": "Cloth",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Pauldrons of Eternal Slumber",
            "type": "Weapon",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Legguards of Eternal Slumber",
            "type": "Trinket",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Sabatons of the Archmage",
            "type": "Plate",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Amulet of Shattered Souls",
            "type": "Trinket",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Helm of the Archmage",
            "type": "Plate",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Breastplate of the Archmage",
            "type": "Cloth",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Band of the Void",
            "type": "Trinket",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Pauldrons of the Archmage",
            "type": "Leather",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Tome of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Legguards of the Void",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          }
        ]
      }
    ]
  },
  {
    "id": "GrimBatol",
    "name": "Grim Batol Tunnels",
    "wings": [
      {
        "name": "The Dragonmaw Gates",
        "level": "52-55",
        "desc": "Fortified entrance.",
        "bosses": [
          "The Siege Master",
          "Dragonmaw Proto-Drake"
        ],
        "loot": [
          {
            "name": "Breastplate of Shattered Souls",
            "type": "Trinket",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Signet of the Crimson King",
            "type": "Weapon",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Sabatons of Shattered Souls",
            "type": "Plate",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Helm of the Unseen",
            "type": "Weapon",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Pauldrons of the Void",
            "type": "Weapon",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Mail",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Amulet of Shattered Souls",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Band of the Unseen",
            "type": "Mail",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Pauldrons of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "type": "Trinket",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Tome of Shattered Souls",
            "type": "Weapon",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Cloak of the Deep",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Tome of the Deep",
            "type": "Cloth",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Band of the Betrayer",
            "type": "Ring",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          }
        ]
      },
      {
        "name": "The Hatcheries",
        "level": "55-58",
        "desc": "Red Dragonflight breeding.",
        "bosses": [
          "The Broodmother",
          "The Corrupted Whelp-Master"
        ],
        "loot": [
          {
            "name": "Signet of the Void",
            "type": "Weapon",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Helm of the Archmage",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Breastplate of the Archmage",
            "type": "Mail",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Band of the Archmage",
            "type": "Cloth",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Legguards of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Pauldrons of Bloodletting",
            "type": "Mail",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Signet of the Forgotten",
            "type": "Plate",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Legguards of the Void",
            "type": "Cloth",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Amulet of the Betrayer",
            "type": "Trinket",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Tome of Bloodletting",
            "type": "Leather",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Legguards of the Deep",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Tome of Shattered Souls",
            "type": "Leather",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Band of the Deep",
            "type": "Weapon",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "type": "Mail",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Band of the Void",
            "type": "Ring",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Cloak of the Betrayer",
            "type": "Leather",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Legguards of the Void",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Tome of Eternal Slumber",
            "type": "Leather",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Breastplate of the Archmage",
            "type": "Weapon",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Tome of the Crimson King",
            "type": "Plate",
            "effect": "Equip: +1% Critical Strike."
          }
        ]
      },
      {
        "name": "The Deep Forge",
        "level": "60",
        "desc": "Wildhammer forges.",
        "bosses": [
          "The Grand Smith",
          "The Anvil of Doom"
        ],
        "loot": [
          {
            "name": "Breastplate of the Forgotten",
            "type": "Trinket",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Breastplate of Bloodletting",
            "type": "Trinket",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Band of the Void",
            "type": "Plate",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Helm of the Crimson King",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Band of the Betrayer",
            "type": "Cloth",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Band of the Betrayer",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Signet of Bloodletting",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Helm of the Unseen",
            "type": "Cloth",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Amulet of the Unseen",
            "type": "Plate",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "type": "Mail",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Pauldrons of the Void",
            "type": "Trinket",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Signet of the Archmage",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Amulet of the Deep",
            "type": "Weapon",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Tome of the Unseen",
            "type": "Mail",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Band of the Archmage",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Sabatons of Bloodletting",
            "type": "Mail",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Amulet of the Crimson King",
            "type": "Plate",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Amulet of the Crimson King",
            "type": "Mail",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Sabatons of the Deep",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Legguards of the Deep",
            "type": "Mail",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Cloak of the Crimson King",
            "type": "Cloth",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Amulet of the Void",
            "type": "Leather",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Tome of the Archmage",
            "type": "Weapon",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Sabatons of the Archmage",
            "type": "Trinket",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Band of Shattered Souls",
            "type": "Weapon",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Pauldrons of the Archmage",
            "type": "Plate",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Cloak of Bloodletting",
            "type": "Leather",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Breastplate of the Archmage",
            "type": "Leather",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Amulet of Shattered Souls",
            "type": "Leather",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          }
        ]
      }
    ]
  },
  {
    "id": "HyjalBarrowDens",
    "name": "The Barrow Dens",
    "wings": [
      {
        "name": "The Slumbering Halls",
        "level": "58-60",
        "desc": "Nightmare.",
        "bosses": [
          "The Nightmare Stalker",
          "The Waking Terror"
        ],
        "loot": [
          {
            "name": "Pauldrons of the Unseen",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Tome of the Forgotten",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Sabatons of the Unseen",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Legguards of Eternal Slumber",
            "type": "Leather",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Band of the Crimson King",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Pauldrons of Bloodletting",
            "type": "Plate",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Amulet of the Crimson King",
            "type": "Mail",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Helm of the Deep",
            "type": "Leather",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Tome of Eternal Slumber",
            "type": "Leather",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Helm of the Crimson King",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Signet of the Crimson King",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Cloak of the Deep",
            "type": "Weapon",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Band of the Crimson King",
            "type": "Ring",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Breastplate of the Unseen",
            "type": "Cloth",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Legguards of the Crimson King",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Breastplate of the Betrayer",
            "type": "Weapon",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Helm of Eternal Slumber",
            "type": "Plate",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Breastplate of the Archmage",
            "type": "Trinket",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Sabatons of the Void",
            "type": "Weapon",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Helm of the Void",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Band of the Unseen",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Pauldrons of the Unseen",
            "type": "Leather",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Pauldrons of the Unseen",
            "type": "Leather",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Sabatons of the Void",
            "type": "Weapon",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          }
        ]
      },
      {
        "name": "The Roots of Nordrassil",
        "level": "60",
        "desc": "Deep caverns.",
        "bosses": [
          "Archimonde's Echo",
          "The Root-Tender"
        ],
        "loot": [
          {
            "name": "Band of the Forgotten",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Band of the Unseen",
            "type": "Cloth",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Legguards of the Void",
            "type": "Ring",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Legguards of the Forgotten",
            "type": "Leather",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Sabatons of Shattered Souls",
            "type": "Weapon",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Tome of Eternal Slumber",
            "type": "Leather",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Tome of Shattered Souls",
            "type": "Plate",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Band of the Unseen",
            "type": "Weapon",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Tome of Eternal Slumber",
            "type": "Leather",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Sabatons of the Archmage",
            "type": "Leather",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Cloak of Shattered Souls",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Weapon",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Helm of Eternal Slumber",
            "type": "Plate",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Helm of the Archmage",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Cloak of the Crimson King",
            "type": "Leather",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Signet of the Deep",
            "type": "Cloth",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Sabatons of the Archmage",
            "type": "Weapon",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Sabatons of Eternal Slumber",
            "type": "Weapon",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Tome of the Crimson King",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Plate",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Pauldrons of Bloodletting",
            "type": "Weapon",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Band of the Crimson King",
            "type": "Leather",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Amulet of the Forgotten",
            "type": "Plate",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "type": "Trinket",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Cloak of Bloodletting",
            "type": "Weapon",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Helm of the Unseen",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Cloak of the Void",
            "type": "Weapon",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Helm of the Crimson King",
            "type": "Plate",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Helm of the Betrayer",
            "type": "Weapon",
            "effect": "Equip: +10 Shadow Resistance."
          }
        ]
      }
    ]
  },
  {
    "id": "Mazthoril",
    "name": "Mazthoril Deeps",
    "wings": [
      {
        "name": "The Arcane Vaults",
        "level": "55-60",
        "desc": "Blue Dragonflight archive.",
        "bosses": [
          "The Archivist",
          "Haleh's Betrayer"
        ],
        "loot": [
          {
            "name": "Sabatons of the Archmage",
            "type": "Plate",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Band of the Crimson King",
            "type": "Plate",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Legguards of the Deep",
            "type": "Leather",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Signet of the Unseen",
            "type": "Plate",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Legguards of the Forgotten",
            "type": "Cloth",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Breastplate of the Betrayer",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Sabatons of the Deep",
            "type": "Weapon",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of the Void",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Legguards of the Archmage",
            "type": "Weapon",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Helm of the Archmage",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Pauldrons of Eternal Slumber",
            "type": "Cloth",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Cloak of the Crimson King",
            "type": "Plate",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Pauldrons of the Crimson King",
            "type": "Ring",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Helm of the Unseen",
            "type": "Weapon",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Pauldrons of the Crimson King",
            "type": "Leather",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Sabatons of the Betrayer",
            "type": "Ring",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Tome of the Betrayer",
            "type": "Trinket",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Helm of Shattered Souls",
            "type": "Trinket",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Breastplate of the Unseen",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Pauldrons of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Amulet of Eternal Slumber",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Tome of the Deep",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Tome of the Forgotten",
            "type": "Ring",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Tome of the Deep",
            "type": "Leather",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Cloth",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          }
        ]
      }
    ]
  },
  {
    "id": "GilneasCity",
    "name": "Gilneas City (Instanced)",
    "wings": [
      {
        "name": "The Greymane District",
        "level": "45-50",
        "desc": "Burning capital.",
        "bosses": [
          "Lord Godfrey",
          "The Royal Guard"
        ],
        "loot": [
          {
            "name": "Pauldrons of the Deep",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Legguards of the Deep",
            "type": "Weapon",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Sabatons of Shattered Souls",
            "type": "Trinket",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Signet of Bloodletting",
            "type": "Trinket",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Helm of the Forgotten",
            "type": "Cloth",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Signet of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Signet of the Betrayer",
            "type": "Cloth",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Sabatons of the Forgotten",
            "type": "Trinket",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Pauldrons of the Archmage",
            "type": "Weapon",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Helm of Bloodletting",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Signet of the Deep",
            "type": "Ring",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Legguards of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Legguards of Bloodletting",
            "type": "Cloth",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Pauldrons of the Void",
            "type": "Plate",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Band of the Forgotten",
            "type": "Cloth",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Amulet of the Deep",
            "type": "Plate",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Amulet of the Archmage",
            "type": "Weapon",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Signet of the Deep",
            "type": "Weapon",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Pauldrons of the Betrayer",
            "type": "Plate",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Cloak of the Void",
            "type": "Weapon",
            "effect": "Equip: Increases spell damage by up to 15."
          }
        ]
      }
    ]
  },
  {
    "id": "GnomereganDeeps",
    "name": "Gnomeregan Deeps",
    "wings": [
      {
        "name": "The Irradiation Vats",
        "level": "35-45",
        "desc": "Pure toxic sludge.",
        "bosses": [
          "Viscous Fallout",
          "Mekgineer Thermaplugg (Echo)"
        ],
        "loot": [
          {
            "name": "Pauldrons of the Archmage",
            "type": "Trinket",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Amulet of Eternal Slumber",
            "type": "Plate",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Pauldrons of the Betrayer",
            "type": "Cloth",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Cloak of the Unseen",
            "type": "Mail",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Breastplate of the Crimson King",
            "type": "Ring",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Amulet of the Deep",
            "type": "Ring",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Legguards of the Deep",
            "type": "Ring",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "type": "Plate",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Pauldrons of the Deep",
            "type": "Leather",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Pauldrons of Eternal Slumber",
            "type": "Trinket",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Helm of the Unseen",
            "type": "Plate",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Band of the Deep",
            "type": "Mail",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Legguards of the Deep",
            "type": "Leather",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Sabatons of Eternal Slumber",
            "type": "Ring",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Pauldrons of the Forgotten",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Amulet of the Void",
            "type": "Mail",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Helm of the Deep",
            "type": "Plate",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Band of the Archmage",
            "type": "Cloth",
            "effect": "Equip: Restores 4 mana per 5 seconds."
          },
          {
            "name": "Signet of Eternal Slumber",
            "type": "Mail",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Helm of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          }
        ]
      }
    ]
  },
  {
    "id": "ScarletCitadel",
    "name": "The Scarlet Citadel",
    "wings": [
      {
        "name": "The Inquisition",
        "level": "50-55",
        "desc": "Tyr's Hand torture chambers.",
        "bosses": [
          "Grand Inquisitor Isillien",
          "Scarlet Executioner"
        ],
        "loot": [
          {
            "name": "Signet of Eternal Slumber",
            "type": "Mail",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Tome of the Archmage",
            "type": "Trinket",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Tome of the Void",
            "type": "Mail",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Amulet of the Archmage",
            "type": "Cloth",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "type": "Trinket",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          },
          {
            "name": "Sabatons of Eternal Slumber",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Sabatons of the Void",
            "type": "Cloth",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Pauldrons of the Archmage",
            "type": "Cloth",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Tome of the Deep",
            "type": "Trinket",
            "effect": "Equip: Increases spell damage by up to 15."
          },
          {
            "name": "Pauldrons of the Crimson King",
            "type": "Ring",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Breastplate of Eternal Slumber",
            "type": "Weapon",
            "effect": "Equip: Increases healing done by up to 25."
          },
          {
            "name": "Legguards of the Unseen",
            "type": "Plate",
            "effect": "Equip: +1% Hit chance."
          },
          {
            "name": "Amulet of Eternal Slumber",
            "type": "Mail",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Sabatons of the Crimson King",
            "type": "Cloth",
            "effect": "Equip: +20 Attack Power."
          },
          {
            "name": "Sabatons of Shattered Souls",
            "type": "Weapon",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Tome of Bloodletting",
            "type": "Weapon",
            "effect": "Use: Absorbs 500 magic damage for 10 sec."
          },
          {
            "name": "Cloak of Bloodletting",
            "type": "Ring",
            "effect": "Equip: +1% Critical Strike."
          },
          {
            "name": "Legguards of Shattered Souls",
            "type": "Ring",
            "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
          },
          {
            "name": "Cloak of the Deep",
            "type": "Plate",
            "effect": "Equip: +10 Shadow Resistance."
          },
          {
            "name": "Cloak of the Crimson King",
            "type": "Cloth",
            "effect": "Equip: Your attacks have a chance to sunder the target's armor."
          }
        ]
      }
    ]
  }
],
  [PVE_CATS.RAIDS]: [
  {
    "id": "EmeraldNightmare",
    "name": "The Emerald Nightmare",
    "tier": "Tier 1.5 (20 Man)",
    "desc": "Entered through the four great portals in Ashenvale, Feralas, Duskwood, and the Hinterlands. A sprawling, non-linear raid.",
    "bosses": [
      "Lethon",
      "Emeriss",
      "Taerar",
      "Ysondre",
      "Eranikus"
    ],
    "loot": [
      {
        "name": "Sabatons of the Forgotten",
        "type": "Weapon",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Pauldrons of the Void",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Legguards of the Archmage",
        "type": "Trinket",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Sabatons of the Archmage",
        "type": "Trinket",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Cloak of Eternal Slumber",
        "type": "Cloth",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Amulet of the Crimson King",
        "type": "Plate",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Tome of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Helm of the Unseen",
        "type": "Plate",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Legguards of the Deep",
        "type": "Mail",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Cloak of the Betrayer",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Tome of the Void",
        "type": "Mail",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Pauldrons of the Unseen",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Helm of the Forgotten",
        "type": "Cloth",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Helm of Bloodletting",
        "type": "Trinket",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Sabatons of the Deep",
        "type": "Leather",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Tome of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Cloak of the Unseen",
        "type": "Leather",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Legguards of the Betrayer",
        "type": "Ring",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Legguards of the Betrayer",
        "type": "Leather",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Pauldrons of the Forgotten",
        "type": "Plate",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Tome of the Deep",
        "type": "Leather",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Tome of the Crimson King",
        "type": "Leather",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Amulet of the Unseen",
        "type": "Plate",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Pauldrons of the Crimson King",
        "type": "Cloth",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Helm of the Archmage",
        "type": "Cloth",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Tome of the Deep",
        "type": "Trinket",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Signet of the Void",
        "type": "Plate",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Legguards of the Betrayer",
        "type": "Plate",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Legguards of the Deep",
        "type": "Leather",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Band of the Archmage",
        "type": "Cloth",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Legguards of Shattered Souls",
        "type": "Leather",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Legguards of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Signet of the Crimson King",
        "type": "Mail",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Sabatons of the Betrayer",
        "type": "Mail",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Legguards of the Archmage",
        "type": "Plate",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Helm of the Crimson King",
        "type": "Plate",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Pauldrons of the Betrayer",
        "type": "Weapon",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Cloak of Bloodletting",
        "type": "Cloth",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Legguards of Eternal Slumber",
        "type": "Weapon",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Signet of the Unseen",
        "type": "Cloth",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Legguards of the Crimson King",
        "type": "Ring",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Helm of the Void",
        "type": "Cloth",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Legguards of Eternal Slumber",
        "type": "Trinket",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Band of Bloodletting",
        "type": "Trinket",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Pauldrons of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Sabatons of the Deep",
        "type": "Cloth",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Amulet of the Archmage",
        "type": "Plate",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Tome of the Forgotten",
        "type": "Plate",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Amulet of the Unseen",
        "type": "Trinket",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Sabatons of the Betrayer",
        "type": "Weapon",
        "effect": "Equip: +1% Hit chance."
      }
    ]
  },
  {
    "id": "GrimBatolRaid",
    "name": "Grim Batol",
    "tier": "Tier 2 (40 Man)",
    "desc": "The heart of the mountain.",
    "bosses": [
      "Warchief Nek'rosh",
      "The Demon Soul",
      "Alexstrasza (Enslaved)",
      "The Crimson Behemoth"
    ],
    "loot": [
      {
        "name": "Sabatons of the Void",
        "type": "Weapon",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Cloak of the Deep",
        "type": "Cloth",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Helm of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Legguards of the Forgotten",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Breastplate of the Forgotten",
        "type": "Mail",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Breastplate of the Unseen",
        "type": "Leather",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Signet of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Helm of the Unseen",
        "type": "Trinket",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Pauldrons of the Unseen",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Breastplate of the Forgotten",
        "type": "Plate",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Sabatons of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Pauldrons of the Deep",
        "type": "Trinket",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Legguards of the Forgotten",
        "type": "Cloth",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Amulet of the Void",
        "type": "Ring",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Signet of the Unseen",
        "type": "Mail",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Cloak of the Void",
        "type": "Leather",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Sabatons of the Void",
        "type": "Mail",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Signet of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Helm of the Crimson King",
        "type": "Cloth",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Helm of Eternal Slumber",
        "type": "Trinket",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Pauldrons of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Legguards of Shattered Souls",
        "type": "Mail",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Amulet of Bloodletting",
        "type": "Weapon",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Helm of the Betrayer",
        "type": "Plate",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Cloak of the Void",
        "type": "Trinket",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Helm of the Deep",
        "type": "Leather",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Pauldrons of the Unseen",
        "type": "Ring",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Band of Bloodletting",
        "type": "Plate",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Helm of Shattered Souls",
        "type": "Mail",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Pauldrons of the Archmage",
        "type": "Leather",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Tome of Bloodletting",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Tome of the Archmage",
        "type": "Plate",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Signet of the Archmage",
        "type": "Cloth",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Tome of the Unseen",
        "type": "Cloth",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Tome of the Archmage",
        "type": "Plate",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Helm of the Unseen",
        "type": "Leather",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Cloak of the Crimson King",
        "type": "Trinket",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Amulet of the Void",
        "type": "Trinket",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Legguards of the Betrayer",
        "type": "Leather",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Band of the Deep",
        "type": "Ring",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Breastplate of Eternal Slumber",
        "type": "Plate",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Amulet of Shattered Souls",
        "type": "Trinket",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Tome of the Unseen",
        "type": "Ring",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Pauldrons of the Unseen",
        "type": "Ring",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Pauldrons of the Archmage",
        "type": "Cloth",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Band of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Signet of the Void",
        "type": "Weapon",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Signet of Bloodletting",
        "type": "Mail",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Tome of Shattered Souls",
        "type": "Cloth",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Cloak of Bloodletting",
        "type": "Trinket",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Breastplate of Bloodletting",
        "type": "Weapon",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Sabatons of the Deep",
        "type": "Cloth",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Signet of the Unseen",
        "type": "Ring",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Signet of the Betrayer",
        "type": "Ring",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Cloak of the Betrayer",
        "type": "Leather",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Sabatons of Eternal Slumber",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Helm of the Crimson King",
        "type": "Cloth",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Signet of Shattered Souls",
        "type": "Trinket",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Cloak of Shattered Souls",
        "type": "Leather",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Band of the Forgotten",
        "type": "Mail",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Breastplate of the Forgotten",
        "type": "Leather",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Amulet of the Archmage",
        "type": "Cloth",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Legguards of the Void",
        "type": "Plate",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Helm of Eternal Slumber",
        "type": "Leather",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Pauldrons of the Archmage",
        "type": "Plate",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Cloak of the Archmage",
        "type": "Leather",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Signet of the Unseen",
        "type": "Trinket",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Signet of Shattered Souls",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Pauldrons of the Forgotten",
        "type": "Trinket",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Amulet of Shattered Souls",
        "type": "Ring",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Helm of the Crimson King",
        "type": "Weapon",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Cloak of the Unseen",
        "type": "Leather",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Legguards of the Void",
        "type": "Ring",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Band of the Archmage",
        "type": "Plate",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Helm of the Unseen",
        "type": "Trinket",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Legguards of the Crimson King",
        "type": "Plate",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Pauldrons of the Unseen",
        "type": "Trinket",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Sabatons of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Pauldrons of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Signet of the Crimson King",
        "type": "Trinket",
        "effect": "Equip: +1% Hit chance."
      }
    ]
  },
  {
    "id": "CrownOfTheDamned",
    "name": "Crown of the Damned (Stratholme Necropolis)",
    "tier": "Tier 2.5 (20 Man)",
    "desc": "The massive floating ziggurat.",
    "bosses": [
      "Highlord Mograine",
      "The Blood Council",
      "Kel'Thuzad's Phylactery-Guard"
    ],
    "loot": [
      {
        "name": "Signet of the Void",
        "type": "Mail",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Signet of the Crimson King",
        "type": "Cloth",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Legguards of Shattered Souls",
        "type": "Trinket",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Legguards of Bloodletting",
        "type": "Leather",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Band of the Void",
        "type": "Leather",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Legguards of the Archmage",
        "type": "Trinket",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Pauldrons of the Void",
        "type": "Plate",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Band of the Crimson King",
        "type": "Weapon",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Breastplate of Bloodletting",
        "type": "Trinket",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Cloak of the Archmage",
        "type": "Weapon",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Sabatons of the Betrayer",
        "type": "Trinket",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Amulet of the Betrayer",
        "type": "Trinket",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Legguards of the Void",
        "type": "Trinket",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Amulet of the Betrayer",
        "type": "Weapon",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Legguards of the Deep",
        "type": "Trinket",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Helm of the Archmage",
        "type": "Leather",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Amulet of the Deep",
        "type": "Leather",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Signet of Eternal Slumber",
        "type": "Cloth",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Tome of Shattered Souls",
        "type": "Plate",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Sabatons of the Archmage",
        "type": "Trinket",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Pauldrons of the Betrayer",
        "type": "Weapon",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Signet of the Deep",
        "type": "Trinket",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Band of the Unseen",
        "type": "Mail",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Band of Bloodletting",
        "type": "Trinket",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Amulet of the Crimson King",
        "type": "Weapon",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Helm of the Forgotten",
        "type": "Ring",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Amulet of Eternal Slumber",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Pauldrons of the Forgotten",
        "type": "Leather",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Legguards of the Void",
        "type": "Weapon",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Band of the Crimson King",
        "type": "Trinket",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Cloak of Eternal Slumber",
        "type": "Cloth",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Band of the Void",
        "type": "Cloth",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Sabatons of the Archmage",
        "type": "Plate",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Sabatons of the Archmage",
        "type": "Leather",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Cloak of the Unseen",
        "type": "Ring",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Cloak of the Deep",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Legguards of the Deep",
        "type": "Weapon",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Legguards of Bloodletting",
        "type": "Trinket",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Breastplate of Bloodletting",
        "type": "Weapon",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Tome of Shattered Souls",
        "type": "Plate",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Cloak of Eternal Slumber",
        "type": "Weapon",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Signet of the Void",
        "type": "Cloth",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Signet of Eternal Slumber",
        "type": "Trinket",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Cloak of the Crimson King",
        "type": "Mail",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Breastplate of the Forgotten",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Legguards of Eternal Slumber",
        "type": "Leather",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Signet of the Forgotten",
        "type": "Ring",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Helm of Bloodletting",
        "type": "Mail",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Band of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Legguards of the Forgotten",
        "type": "Leather",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      }
    ]
  },
  {
    "id": "KarazhanRaid",
    "name": "Karazhan (Upper Tower)",
    "tier": "Tier 3 (40 Man)",
    "desc": "The unreleased Vanilla version of Karazhan.",
    "bosses": [
      "Attumen",
      "Moroes",
      "The Curator",
      "Shade of Aran",
      "Prince Malchezaar",
      "Nightbane"
    ],
    "loot": [
      {
        "name": "Helm of Bloodletting",
        "type": "Leather",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Helm of the Forgotten",
        "type": "Plate",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Amulet of the Unseen",
        "type": "Cloth",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Cloak of the Unseen",
        "type": "Plate",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Band of the Forgotten",
        "type": "Cloth",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Signet of the Archmage",
        "type": "Plate",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Helm of the Unseen",
        "type": "Trinket",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Band of Bloodletting",
        "type": "Ring",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Pauldrons of the Archmage",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Signet of Eternal Slumber",
        "type": "Weapon",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Sabatons of Eternal Slumber",
        "type": "Leather",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Signet of the Void",
        "type": "Plate",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Legguards of the Unseen",
        "type": "Weapon",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Breastplate of the Archmage",
        "type": "Mail",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Breastplate of the Unseen",
        "type": "Trinket",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Band of the Crimson King",
        "type": "Weapon",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Band of the Forgotten",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Helm of Shattered Souls",
        "type": "Mail",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Pauldrons of the Void",
        "type": "Trinket",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Tome of the Void",
        "type": "Cloth",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Cloak of the Forgotten",
        "type": "Plate",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Legguards of Bloodletting",
        "type": "Leather",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Legguards of the Void",
        "type": "Mail",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Helm of the Void",
        "type": "Plate",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Signet of the Unseen",
        "type": "Mail",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Cloak of Bloodletting",
        "type": "Weapon",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Cloak of the Deep",
        "type": "Ring",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Signet of the Void",
        "type": "Trinket",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Sabatons of the Forgotten",
        "type": "Ring",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Tome of the Unseen",
        "type": "Mail",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Cloak of the Betrayer",
        "type": "Weapon",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Cloak of the Void",
        "type": "Cloth",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Cloak of the Forgotten",
        "type": "Cloth",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Pauldrons of the Archmage",
        "type": "Weapon",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Band of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Band of Shattered Souls",
        "type": "Leather",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Legguards of the Betrayer",
        "type": "Mail",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Signet of the Void",
        "type": "Leather",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Breastplate of the Unseen",
        "type": "Mail",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Legguards of the Deep",
        "type": "Cloth",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Signet of the Void",
        "type": "Trinket",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Helm of the Deep",
        "type": "Ring",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Cloak of the Void",
        "type": "Cloth",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Breastplate of the Crimson King",
        "type": "Plate",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Amulet of the Unseen",
        "type": "Weapon",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Band of Shattered Souls",
        "type": "Ring",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Signet of the Archmage",
        "type": "Plate",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Pauldrons of Eternal Slumber",
        "type": "Cloth",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Signet of Bloodletting",
        "type": "Trinket",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Breastplate of the Betrayer",
        "type": "Ring",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Cloak of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Pauldrons of the Forgotten",
        "type": "Cloth",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Legguards of the Void",
        "type": "Trinket",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Tome of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Helm of the Deep",
        "type": "Trinket",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Signet of the Void",
        "type": "Ring",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Band of Bloodletting",
        "type": "Cloth",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Pauldrons of the Deep",
        "type": "Plate",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Sabatons of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Legguards of Eternal Slumber",
        "type": "Leather",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Cloak of Eternal Slumber",
        "type": "Plate",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Helm of Bloodletting",
        "type": "Weapon",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Amulet of the Unseen",
        "type": "Leather",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Breastplate of the Void",
        "type": "Plate",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Helm of Eternal Slumber",
        "type": "Leather",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Helm of the Forgotten",
        "type": "Plate",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Tome of the Crimson King",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Breastplate of the Betrayer",
        "type": "Ring",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Tome of the Crimson King",
        "type": "Ring",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Legguards of the Archmage",
        "type": "Mail",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Breastplate of the Deep",
        "type": "Mail",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Legguards of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Pauldrons of Shattered Souls",
        "type": "Plate",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Pauldrons of the Unseen",
        "type": "Ring",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Band of Eternal Slumber",
        "type": "Weapon",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Cloak of the Betrayer",
        "type": "Mail",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Signet of the Archmage",
        "type": "Ring",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Signet of Bloodletting",
        "type": "Weapon",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Pauldrons of the Unseen",
        "type": "Mail",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Sabatons of the Unseen",
        "type": "Trinket",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Breastplate of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Amulet of the Unseen",
        "type": "Trinket",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Amulet of the Crimson King",
        "type": "Mail",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Amulet of the Crimson King",
        "type": "Leather",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Amulet of the Void",
        "type": "Mail",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Signet of the Archmage",
        "type": "Plate",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Cloak of the Void",
        "type": "Mail",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Sabatons of the Betrayer",
        "type": "Weapon",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Band of the Unseen",
        "type": "Trinket",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Tome of the Void",
        "type": "Mail",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Signet of Eternal Slumber",
        "type": "Cloth",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Legguards of the Crimson King",
        "type": "Plate",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Amulet of Bloodletting",
        "type": "Weapon",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Band of the Unseen",
        "type": "Weapon",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Amulet of the Unseen",
        "type": "Leather",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Sabatons of the Unseen",
        "type": "Plate",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Sabatons of Bloodletting",
        "type": "Trinket",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Sabatons of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Pauldrons of the Crimson King",
        "type": "Cloth",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Tome of Shattered Souls",
        "type": "Plate",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      }
    ]
  },
  {
    "id": "DragonIslesRaid",
    "name": "Temple of the Old Gods (Dragon Isles)",
    "tier": "Tier 3.5 (40 Man)",
    "desc": "The absolute pinnacle of Vanilla progression.",
    "bosses": [
      "The Devolved Aspect",
      "The Faceless General",
      "Avatar of the Old God"
    ],
    "loot": [
      {
        "name": "Amulet of the Crimson King",
        "type": "Leather",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Helm of the Unseen",
        "type": "Leather",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Amulet of Eternal Slumber",
        "type": "Trinket",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Helm of the Unseen",
        "type": "Weapon",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Cloak of the Void",
        "type": "Weapon",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Signet of Eternal Slumber",
        "type": "Weapon",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Band of the Archmage",
        "type": "Cloth",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Signet of the Betrayer",
        "type": "Mail",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Sabatons of the Deep",
        "type": "Ring",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Band of the Crimson King",
        "type": "Leather",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Legguards of the Forgotten",
        "type": "Plate",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Cloak of the Crimson King",
        "type": "Cloth",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Signet of the Deep",
        "type": "Leather",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Band of Shattered Souls",
        "type": "Ring",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Helm of Shattered Souls",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Amulet of Bloodletting",
        "type": "Mail",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Helm of the Archmage",
        "type": "Mail",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Breastplate of the Void",
        "type": "Trinket",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Sabatons of the Archmage",
        "type": "Trinket",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Legguards of Bloodletting",
        "type": "Leather",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Breastplate of Shattered Souls",
        "type": "Plate",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Legguards of Eternal Slumber",
        "type": "Trinket",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Pauldrons of the Deep",
        "type": "Cloth",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Sabatons of the Crimson King",
        "type": "Ring",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Amulet of the Forgotten",
        "type": "Trinket",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Amulet of Bloodletting",
        "type": "Leather",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Helm of Shattered Souls",
        "type": "Leather",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Cloak of the Betrayer",
        "type": "Leather",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Tome of Bloodletting",
        "type": "Trinket",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Signet of Eternal Slumber",
        "type": "Trinket",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Signet of the Void",
        "type": "Leather",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Cloak of the Betrayer",
        "type": "Plate",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Sabatons of the Unseen",
        "type": "Mail",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Breastplate of the Betrayer",
        "type": "Cloth",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Cloak of Shattered Souls",
        "type": "Ring",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Signet of the Deep",
        "type": "Ring",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Sabatons of the Archmage",
        "type": "Trinket",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Sabatons of Eternal Slumber",
        "type": "Trinket",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Band of the Crimson King",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Sabatons of the Unseen",
        "type": "Leather",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Legguards of the Deep",
        "type": "Ring",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Helm of the Void",
        "type": "Leather",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Tome of Bloodletting",
        "type": "Mail",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Legguards of the Archmage",
        "type": "Plate",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Band of the Unseen",
        "type": "Weapon",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Cloak of the Unseen",
        "type": "Trinket",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Amulet of the Deep",
        "type": "Leather",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Cloak of the Void",
        "type": "Mail",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Band of the Deep",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Signet of the Forgotten",
        "type": "Cloth",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Signet of Shattered Souls",
        "type": "Cloth",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Helm of the Void",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Band of Eternal Slumber",
        "type": "Ring",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Tome of the Betrayer",
        "type": "Cloth",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Sabatons of Shattered Souls",
        "type": "Cloth",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Sabatons of the Crimson King",
        "type": "Plate",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Breastplate of the Void",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Band of the Deep",
        "type": "Plate",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Helm of the Betrayer",
        "type": "Leather",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Band of Bloodletting",
        "type": "Plate",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Band of Eternal Slumber",
        "type": "Cloth",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Amulet of the Unseen",
        "type": "Leather",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Legguards of the Crimson King",
        "type": "Ring",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Legguards of Shattered Souls",
        "type": "Leather",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Band of Bloodletting",
        "type": "Ring",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Tome of Eternal Slumber",
        "type": "Weapon",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Sabatons of Shattered Souls",
        "type": "Trinket",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Breastplate of the Unseen",
        "type": "Leather",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Pauldrons of Bloodletting",
        "type": "Mail",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Signet of the Void",
        "type": "Trinket",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Helm of Shattered Souls",
        "type": "Cloth",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Sabatons of Shattered Souls",
        "type": "Cloth",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Breastplate of the Void",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Signet of Shattered Souls",
        "type": "Ring",
        "effect": "Equip: Restores 4 mana per 5 seconds."
      },
      {
        "name": "Signet of the Crimson King",
        "type": "Ring",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Band of the Void",
        "type": "Weapon",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Pauldrons of the Void",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Signet of Eternal Slumber",
        "type": "Cloth",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Sabatons of Bloodletting",
        "type": "Leather",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Breastplate of the Deep",
        "type": "Mail",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Amulet of the Void",
        "type": "Mail",
        "effect": "Equip: Increases healing done by up to 25."
      },
      {
        "name": "Helm of the Unseen",
        "type": "Mail",
        "effect": "Equip: Increases your chance to block attacks with a shield by 2%."
      },
      {
        "name": "Helm of the Deep",
        "type": "Cloth",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Breastplate of the Crimson King",
        "type": "Ring",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Pauldrons of the Forgotten",
        "type": "Cloth",
        "effect": "Equip: Increases spell damage by up to 15."
      },
      {
        "name": "Pauldrons of the Archmage",
        "type": "Plate",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Pauldrons of Bloodletting",
        "type": "Plate",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Amulet of the Unseen",
        "type": "Plate",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Cloak of Bloodletting",
        "type": "Plate",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Pauldrons of the Crimson King",
        "type": "Leather",
        "effect": "Equip: +1% Critical Strike."
      },
      {
        "name": "Signet of the Deep",
        "type": "Leather",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Helm of the Crimson King",
        "type": "Cloth",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Cloak of Eternal Slumber",
        "type": "Ring",
        "effect": "Equip: +20 Attack Power."
      },
      {
        "name": "Sabatons of the Void",
        "type": "Mail",
        "effect": "Equip: +10 Shadow Resistance."
      },
      {
        "name": "Tome of the Void",
        "type": "Weapon",
        "effect": "Equip: +1% Hit chance."
      },
      {
        "name": "Legguards of the Unseen",
        "type": "Mail",
        "effect": "Equip: Your attacks have a chance to sunder the target's armor."
      },
      {
        "name": "Helm of Shattered Souls",
        "type": "Leather",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Sabatons of the Unseen",
        "type": "Weapon",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Breastplate of the Forgotten",
        "type": "Cloth",
        "effect": "Use: Absorbs 500 magic damage for 10 sec."
      },
      {
        "name": "Amulet of the Deep",
        "type": "Mail",
        "effect": "Equip: +10 Shadow Resistance."
      }
    ]
  }
]
};
