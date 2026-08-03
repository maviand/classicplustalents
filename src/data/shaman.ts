import { Talent } from '../types/talents';

export const SHAMAN_ELEMENTAL_TALENTS: any = [
  {
    "id": "concussion",
    "name": "Concussion",
    "icon": "spell_fire_fireball",
    "maxPoints": 5,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 1%.",
      "2%.",
      "3%.",
      "4%.",
      "5%."
    ],
    "visualEffect": "A wave of pure, restorative water washes outwards. This is accompanied by a swift manifestation of Concussion."
  },
  {
    "id": "call_of_flame",
    "name": "Call of Flame",
    "icon": "spell_fire_immolation",
    "maxPoints": 3,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases the damage done by your Fire Totems by 5%, and reduces the mana cost of all Totem spells by 10%.",
      "10%, 20%",
      "15%, 30%"
    ],
    "visualEffect": "The earth sunders, revealing molten magma beneath. This is accompanied by a swift manifestation of Call of Flame."
  },
  {
    "id": "earth_s_grasp",
    "name": "Earth's Grasp",
    "icon": "spell_nature_stoneclawtotem",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%. In addition, your Earthbind Totem has a 50% chance to root targets in place for 2 seconds when cast.",
      "50% / 20% / 100%"
    ],
    "visualEffect": "Your totems pulse with ancient, elemental power. This is accompanied by a ancient manifestation of Earth's Grasp."
  },
  {
    "id": "reverberation",
    "name": "Reverberation",
    "icon": "spell_frost_frostward",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Reduces the cooldown of your Shock spells by 0.5 sec.",
      "1.0 sec.",
      "1.5 sec."
    ],
    "visualEffect": "A wave of pure, restorative water washes outwards. This is accompanied by a unseen manifestation of Reverberation."
  },
  {
    "id": "elemental_focus",
    "name": "Elemental Focus",
    "icon": "spell_shadow_manaburn",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Your offensive spell critical strikes have a 33% chance to grant you Clearcasting.",
      "66%",
      "100%"
    ],
    "visualEffect": "Your totems pulse with ancient, elemental power. This is accompanied by a lethal manifestation of Elemental Focus."
  },
  {
    "id": "elemental_warding",
    "name": "Elemental Warding",
    "icon": "spell_nature_spiritarmor",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Reduces the damage you take from Fire, Frost, and Nature effects by 5%, and reduces the chance you will be critically hit by melee attacks by 2%.",
      "10% / 4%"
    ],
    "visualEffect": "Lightning violently arcs between your hands and the sky. This is accompanied by a forbidden manifestation of Elemental Warding."
  },
  {
    "id": "storm_reach",
    "name": "Storm Reach",
    "icon": "spell_nature_stormreach",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases the range of your Lightning Bolt, Chain Lightning, and Shock spells by 3 yards.",
      "6 yards"
    ],
    "visualEffect": "Lightning violently arcs between your hands and the sky. This is accompanied by a brutal manifestation of Storm Reach."
  },
  {
    "id": "elemental_devastation",
    "name": "Elemental Devastation",
    "icon": "classic_spell_fire_elementaldevastation",
    "maxPoints": 3,
    "row": 2,
    "col": 0,
    "desc": [
      "Your offensive spell crits increase your chance to get a critical strike with melee attacks by 2% for 10 sec.",
      "4%",
      "6%"
    ],
    "visualEffect": "Winds whip up a localized tornado around the target. This is accompanied by a devastating manifestation of Elemental Devastation."
  },
  {
    "id": "call_of_thunder",
    "name": "Call of Thunder",
    "icon": "spell_nature_callstorm",
    "maxPoints": 5,
    "row": 2,
    "col": 1,
    "desc": [
      "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 1%.",
      "2%.",
      "3%.",
      "4%.",
      "5%."
    ],
    "visualEffect": "A spectral wolf howls into the elements. This is accompanied by a divine manifestation of Call of Thunder."
  },
  {
    "id": "elemental_fury",
    "name": "Elemental Fury",
    "icon": "spell_fire_volcano",
    "maxPoints": 1,
    "row": 2,
    "col": 2,
    "desc": [
      "Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells by 100%."
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a devastating manifestation of Elemental Fury."
  },
  {
    "id": "eye_of_the_storm",
    "name": "Eye of the Storm",
    "icon": "spell_shadow_soulleech_3",
    "maxPoints": 3,
    "row": 3,
    "col": 0,
    "desc": [
      "When you are struck by a melee or ranged attack, you have a 33% chance to resist spell pushback for 6 seconds.",
      "66%",
      "100%"
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a swift manifestation of Eye of the Storm."
  },
  {
    "id": "lava_flows",
    "name": "Lava Flows",
    "icon": "spell_fire_volcano",
    "maxPoints": 3,
    "row": 3,
    "col": 3,
    "desc": [
      "Increases the critical strike damage bonus of your Flame Shock and Fire Totems by 8%, and when your Flame Shock is dispelled you gain 10% spell haste for 6 seconds.",
      "16% / 20%",
      "24% / 30%"
    ],
    "visualEffect": "The earth sunders, revealing molten magma beneath. This is accompanied by a primal manifestation of Lava Flows."
  },
  {
    "id": "sef",
    "name": "Storm, Earth, and Fire",
    "icon": "spell_shaman_stormearthfire",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Reduces the cooldown of your Chain Lightning by 1 sec, and increases the periodic damage of your Flame Shock by 10%.",
      "2 sec / 20%"
    ],
    "visualEffect": "Your totems pulse with ancient, elemental power. This is accompanied by a chaotic manifestation of Storm, Earth, and Fire."
  },
  {
    "id": "lightning_mastery",
    "name": "Lightning Mastery",
    "icon": "spell_lightning_lightningbolt01",
    "maxPoints": 5,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "call_of_thunder",
      "points": 5
    },
    "desc": [
      "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.1 sec.",
      "0.2 sec.",
      "0.3 sec.",
      "0.4 sec.",
      "0.5 sec."
    ],
    "visualEffect": "A fiery eruption blasts from the earth. This is accompanied by a unseen manifestation of Lightning Mastery."
  },
  {
    "id": "thunderstorm",
    "name": "Thunderstorm",
    "icon": "spell_shaman_thunderstorm",
    "maxPoints": 1,
    "row": 4,
    "col": 2,
    "desc": [
      "You call down a bolt of lightning, energizing you and damaging nearby enemies within 10 yards. Restores 8% mana to you and deals 563 to 643 Nature damage to all nearby enemies, knocking them back 20 yards. Usable while stunned. 45 sec cooldown."
    ],
    "visualEffect": "A fiery eruption blasts from the earth. This is accompanied by a divine manifestation of Thunderstorm."
  },
  {
    "id": "totemic_surge",
    "name": "Totemic Surge",
    "icon": "spell_nature_moonglow",
    "maxPoints": 2,
    "row": 4,
    "col": 0,
    "desc": [
      "Your offensive spell critical strikes cause your active Fire, Water, Earth, and Air totems to pulse, restoring 1% of maximum mana to all party members within 30 yards.",
      "2%"
    ],
    "visualEffect": "Lightning violently arcs between your hands and the sky. This is accompanied by a ancient manifestation of Totemic Surge."
  },
  {
    "id": "lightning_overload",
    "name": "Lightning Overload",
    "icon": "spell_nature_lightningoverload",
    "maxPoints": 3,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "lightning_mastery",
      "points": 5
    },
    "desc": [
      "Gives your Lightning Bolt and Chain Lightning spells a 5% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
      "10%",
      "15%"
    ],
    "visualEffect": "Lightning violently arcs between your hands and the sky. This is accompanied by a chaotic manifestation of Lightning Overload."
  },
  {
    "id": "elemental_precision",
    "name": "Elemental Precision",
    "icon": "spell_nature_elementalprecision_1",
    "maxPoints": 3,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases your spell hit chance by 1% and reduces threat by 10%.",
      "2% / 20%",
      "3% / 30%"
    ],
    "visualEffect": "A wave of pure, restorative water washes outwards. This is accompanied by a devastating manifestation of Elemental Precision."
  },
  {
    "id": "totem_of_wrath",
    "name": "Totem of Wrath",
    "icon": "spell_fire_totemofwrath",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "lightning_overload",
      "points": 3
    },
    "desc": [
      "Summons a Totem of Wrath with 5 health at the feet of the caster. The totem increases the chance to hit and critical strike with spells for all party members within 30 yards by 3%. Lasts 2 min."
    ],
    "visualEffect": "A wave of pure, restorative water washes outwards. This is accompanied by a primal manifestation of Totem of Wrath."
  }
];

export const SHAMAN_ENHANCEMENT_TALENTS: any = [
  {
    "id": "ancstral_knowledge",
    "name": "Ancestral Knowledge",
    "icon": "spell_shadow_grimward",
    "maxPoints": 5,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases your maximum Mana by 1%.",
      "2%.",
      "3%.",
      "4%.",
      "5%."
    ],
    "visualEffect": "A spectral wolf howls into the elements. This is accompanied by a ancient manifestation of Ancestral Knowledge."
  },
  {
    "id": "thundering_strikes",
    "name": "Thundering Strikes",
    "icon": "ability_thunderbolt",
    "maxPoints": 3,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases your chance to get a critical strike with your weapon attacks by 2%.",
      "4%.",
      "6%."
    ],
    "visualEffect": "A wave of pure, restorative water washes outwards. This is accompanied by a radiant manifestation of Thundering Strikes."
  },
  {
    "id": "imp_ghost_wolf",
    "name": "Improved Ghost Wolf",
    "icon": "spell_nature_spiritwolf",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Reduces the cast time of your Ghost Wolf spell by 1 sec.",
      "2 sec."
    ],
    "visualEffect": "Winds whip up a localized tornado around the target. This is accompanied by a ethereal manifestation of Improved Ghost Wolf."
  },
  {
    "id": "mental_quickness",
    "name": "Mental Quickness",
    "icon": "spell_nature_mentalquickness",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Reduces the mana cost of your instant cast Shaman spells by 2% and increases your Spell Damage and Healing by an amount equal to 10% of your Attack Power.",
      "4% / 20%",
      "6% / 30%"
    ],
    "visualEffect": "A wave of pure, restorative water washes outwards. This is accompanied by a lethal manifestation of Mental Quickness."
  },
  {
    "id": "elemental_weapons",
    "name": "Elemental Weapons",
    "icon": "spell_fire_flametounge",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases the melee attack power bonus of your Rockbiter Weapon by 7%, your Windfury Weapon effect by 13% and increases the damage caused by your Flametongue and Frostbrand Weapons by 5%.",
      "14% / 27% / 10%.",
      "20% / 40% / 15%."
    ],
    "visualEffect": "A fiery eruption blasts from the earth. This is accompanied by a phantom manifestation of Elemental Weapons."
  },
  {
    "id": "enhancing_totems",
    "name": "Enhancing Totems",
    "icon": "spell_nature_earthbindtotem",
    "maxPoints": 2,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases the effect of your Strength of Earth and Grace of Air Totems by 8%.",
      "15%."
    ],
    "visualEffect": "Your totems pulse with ancient, elemental power. This is accompanied by a lethal manifestation of Enhancing Totems."
  },
  {
    "id": "imp_lightning_shield",
    "name": "Improved Lightning Shield",
    "icon": "spell_nature_lightningshield",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases the damage done by your Lightning Shield orbs by 15%.",
      "30%."
    ],
    "visualEffect": "A wave of pure, restorative water washes outwards. This is accompanied by a swift manifestation of Improved Lightning Shield."
  },
  {
    "id": "ancestral_mastery",
    "name": "Ancestral Mastery",
    "icon": "ability_dualwield",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "You learn how to Dual Wield. Dual Wielding increases your chance to hit with melee attacks by 5%. Two-Handed Weapons ignore 10% of the target's armor and swing 5% faster."
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a primal manifestation of Ancestral Mastery."
  },
  {
    "id": "flurry",
    "name": "Flurry",
    "icon": "ability_ghoulfrenzy",
    "maxPoints": 5,
    "row": 2,
    "col": 2,
    "requires": {
      "id": "thundering_strikes",
      "points": 3
    },
    "desc": [
      "Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
      "15%.",
      "20%.",
      "25%.",
      "30%."
    ],
    "visualEffect": "The earth sunders, revealing molten magma beneath. This is accompanied by a ancient manifestation of Flurry."
  },
  {
    "id": "unleashed_rage",
    "name": "Unleashed Rage",
    "icon": "spell_nature_unleashedrage",
    "maxPoints": 3,
    "row": 2,
    "col": 3,
    "desc": [
      "Your critical strikes with melee attacks increase all party members' melee attack power within 45 yards by 4% for 10 sec.",
      "7%",
      "10%"
    ],
    "visualEffect": "Winds whip up a localized tornado around the target. This is accompanied by a unseen manifestation of Unleashed Rage."
  },
  {
    "id": "frozen_power",
    "name": "Frozen Power",
    "icon": "spell_frost_glacier",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Increases all damage dealt to targets afflicted by your Frostbrand Weapon by 5%, and your Frost Shock roots targets for 5 seconds.",
      "10%"
    ],
    "visualEffect": "A fiery eruption blasts from the earth. This is accompanied by a lethal manifestation of Frozen Power."
  },
  {
    "id": "weapon_mastery",
    "name": "Weapon Mastery",
    "icon": "ability_hunter_swiftstrike",
    "maxPoints": 5,
    "row": 3,
    "col": 1,
    "requires": {
      "id": "ancestral_mastery",
      "points": 1
    },
    "desc": [
      "Increases the damage you deal with all physical weapons by 2%.",
      "4%.",
      "6%.",
      "8%.",
      "10%."
    ],
    "visualEffect": "A spectral wolf howls into the elements. This is accompanied by a ancient manifestation of Weapon Mastery."
  },
  {
    "id": "imp_weapon_totems",
    "name": "Improved Weapon Totems",
    "icon": "spell_fire_enchantweapon",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Increases the melee attack power bonus of your Windfury Totem by 15% and increases the damage caused by your Flametongue Totem by 6%.",
      "30% / 12%."
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a forbidden manifestation of Improved Weapon Totems."
  },
  {
    "id": "earthen_power",
    "name": "Earthen Power",
    "icon": "spell_nature_strengthofearthtotem02",
    "maxPoints": 2,
    "row": 3,
    "col": 3,
    "desc": [
      "Your Earth Shock has a 50% chance to cleanse snare effects from you and your allies.",
      "100%"
    ],
    "visualEffect": "A spectral wolf howls into the elements. This is accompanied by a ethereal manifestation of Earthen Power."
  },
  {
    "id": "stormstrike",
    "name": "Stormstrike",
    "icon": "ability_shaman_stormstrike",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "weapon_mastery",
      "points": 5
    },
    "desc": [
      "Instantly attack with your weapons. In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%. 8 second cooldown."
    ],
    "visualEffect": "Lightning violently arcs between your hands and the sky. This is accompanied by a corrupted manifestation of Stormstrike."
  },
  {
    "id": "static_shock",
    "name": "Static Shock",
    "icon": "spell_shaman_staticshock",
    "maxPoints": 3,
    "row": 4,
    "col": 2,
    "desc": [
      "You have a 2% chance to hit your target with a Lightning Shield orb charge when you do damage with melee attacks or abilities.",
      "4%",
      "6%"
    ],
    "visualEffect": "Winds whip up a localized tornado around the target. This is accompanied by a corrupted manifestation of Static Shock."
  },
  {
    "id": "shamanistic_focus",
    "name": "Shamanistic Focus",
    "icon": "spell_nature_elementalshields",
    "maxPoints": 2,
    "row": 4,
    "col": 0,
    "desc": [
      "Your melee critical strikes have a 50% chance to regenerate 2% of your maximum mana.",
      "100%"
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a unseen manifestation of Shamanistic Focus."
  },
  {
    "id": "primal_wisdom",
    "name": "Primal Wisdom",
    "icon": "spell_nature_shamanrage",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Reduces all damage taken by 2% and your successful melee attacks have a chance to restore mana equal to 5% of your attack power.",
      "4% / 10%",
      "6% / 15%"
    ],
    "visualEffect": "Lightning violently arcs between your hands and the sky. This is accompanied by a phantom manifestation of Primal Wisdom."
  },
  {
    "id": "imp_stormstrike",
    "name": "Improved Stormstrike",
    "icon": "spell_shaman_improvedstormstrike",
    "maxPoints": 2,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "stormstrike",
      "points": 1
    },
    "desc": [
      "Reduces the cooldown of your Stormstrike by 1 seconds, and your Stormstrike hits refund 10% of their base mana cost.",
      "2 seconds / 20%"
    ],
    "visualEffect": "The earth sunders, revealing molten magma beneath. This is accompanied by a powerful manifestation of Improved Stormstrike."
  },
  {
    "id": "ancestral_power",
    "name": "Ancestral Power",
    "icon": "spell_nature_bloodlust",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases the damage dealt by your off-hand weapon by 10%, or increases the critical strike damage bonus of your Two-Handed weapons by 10%.",
      "20%"
    ],
    "visualEffect": "A spectral wolf howls into the elements. This is accompanied by a divine manifestation of Ancestral Power."
  },
  {
    "id": "feral_spirit",
    "name": "Feral Spirit",
    "icon": "spell_shaman_feralspirit",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "imp_stormstrike",
      "points": 2
    },
    "desc": [
      "Summons two Spirit Wolves under the command of the Shaman for 45 seconds. The wolves deal physical damage, move 30% faster than normal, and heal the Shaman and their party for 100% of the damage they deal. 3 minute cooldown."
    ],
    "visualEffect": "Your totems pulse with ancient, elemental power. This is accompanied by a ancient manifestation of Feral Spirit."
  }
];

export const SHAMAN_RESTORATION_TALENTS: any = [
  {
    "id": "imp_reincarnation",
    "name": "Improved Reincarnation",
    "icon": "spell_nature_reincarnation",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Reduces the cooldown of your Reincarnation spell by 10 min and increases the amount of health and mana recovered when reincarnating by 10%.",
      "20 min / 20%."
    ],
    "visualEffect": "A fiery eruption blasts from the earth. This is accompanied by a unseen manifestation of Improved Reincarnation."
  },
  {
    "id": "tidal_focus",
    "name": "Tidal Focus",
    "icon": "spell_frost_manarecharge",
    "maxPoints": 5,
    "row": 0,
    "col": 1,
    "desc": [
      "Reduces the Mana cost of your healing spells by 1%.",
      "2%.",
      "3%.",
      "4%.",
      "5%."
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a swift manifestation of Tidal Focus."
  },
  {
    "id": "imp_healing_wave",
    "name": "Improved Healing Wave",
    "icon": "spell_nature_magicimmunity",
    "maxPoints": 3,
    "row": 0,
    "col": 2,
    "desc": [
      "Reduces the casting time of your Healing Wave spell by 0.1 sec.",
      "0.3 sec.",
      "0.5 sec."
    ],
    "visualEffect": "A spectral wolf howls into the elements. This is accompanied by a chaotic manifestation of Improved Healing Wave."
  },
  {
    "id": "natures_guidance",
    "name": "Nature's Guidance",
    "icon": "spell_frost_stun",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Increases your chance to hit with melee attacks and spells by 1%.",
      "2%.",
      "3%."
    ],
    "visualEffect": "The earth sunders, revealing molten magma beneath. This is accompanied by a powerful manifestation of Nature's Guidance."
  },
  {
    "id": "ancestral_healing",
    "name": "Ancestral Healing",
    "icon": "spell_nature_healingway",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases your target's armor value by 8% for 15 sec after getting a critical effect from one of your healing spells.",
      "16%.",
      "25%."
    ],
    "visualEffect": "A fiery eruption blasts from the earth. This is accompanied by a corrupted manifestation of Ancestral Healing."
  },
  {
    "id": "totemic_recall",
    "name": "Totemic Recall",
    "icon": "spell_magic_lesserinvisibilty",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Returns your totems to the earth, refunding 25% of the mana cost of the destroyed totems.",
      "50%"
    ],
    "visualEffect": "Winds whip up a localized tornado around the target. This is accompanied by a brutal manifestation of Totemic Recall."
  },
  {
    "id": "healing_grace",
    "name": "Healing Grace",
    "icon": "spell_nature_healingtouch",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Reduces the threat generated by your healing spells by 15% and reduces the chance your helpful spells and damage over time effects will be dispelled by 15%.",
      "30% / 30%"
    ],
    "visualEffect": "Winds whip up a localized tornado around the target. This is accompanied by a unseen manifestation of Healing Grace."
  },
  {
    "id": "natures_swiftness",
    "name": "Nature's Swiftness",
    "icon": "spell_nature_ravenform",
    "maxPoints": 1,
    "row": 2,
    "col": 0,
    "desc": [
      "When activated, your next Nature spell with a casting time less than 10 sec. becomes an instant cast spell."
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a corrupted manifestation of Nature's Swiftness."
  },
  {
    "id": "tidal_mastery",
    "name": "Tidal Mastery",
    "icon": "spell_nature_tranquility",
    "maxPoints": 5,
    "row": 2,
    "col": 1,
    "requires": {
      "id": "ancestral_healing",
      "points": 3
    },
    "desc": [
      "Increases the critical effect chance of your healing and lightning spells by 1%.",
      "2%.",
      "3%.",
      "4%.",
      "5%."
    ],
    "visualEffect": "Winds whip up a localized tornado around the target. This is accompanied by a primal manifestation of Tidal Mastery."
  },
  {
    "id": "restorative_totems",
    "name": "Restorative Totems",
    "icon": "spell_nature_manaregentotem",
    "maxPoints": 3,
    "row": 2,
    "col": 2,
    "desc": [
      "Increases the effect of your Mana Spring and Healing Stream totems by 5%.",
      "10%.",
      "15%."
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a radiant manifestation of Restorative Totems."
  },
  {
    "id": "cleanse_spirit",
    "name": "Cleanse Spirit",
    "icon": "ability_shaman_cleansespirit",
    "maxPoints": 1,
    "row": 2,
    "col": 3,
    "requires": {
      "id": "restorative_totems",
      "points": 3
    },
    "desc": [
      "Cleanse toxins from your ally, removing poisons and diseases."
    ],
    "visualEffect": "A wave of pure, restorative water washes outwards. This is accompanied by a forbidden manifestation of Cleanse Spirit."
  },
  {
    "id": "purification",
    "name": "Purification",
    "icon": "spell_frost_wizardmark",
    "maxPoints": 3,
    "row": 3,
    "col": 0,
    "desc": [
      "Increases the effectiveness of your healing spells by 2%.",
      "4%.",
      "6%."
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a devastating manifestation of Purification."
  },
  {
    "id": "healing_way",
    "name": "Healing Way",
    "icon": "spell_nature_healingway",
    "maxPoints": 3,
    "row": 3,
    "col": 1,
    "desc": [
      "Your Healing Wave spells have a 33% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec. This effect will stack up to 3 times.",
      "66%.",
      "100%."
    ],
    "visualEffect": "Lightning violently arcs between your hands and the sky. This is accompanied by a lethal manifestation of Healing Way."
  },
  {
    "id": "tidal_waves",
    "name": "Tidal Waves",
    "icon": "spell_shaman_tidalwaves",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "When you cast Healing Wave or Lesser Healing Wave, you have a 50% chance to reduce the cast time of your next Lesser Healing Wave by 30%.",
      "100%"
    ],
    "visualEffect": "Winds whip up a localized tornado around the target. This is accompanied by a swift manifestation of Tidal Waves."
  },
  {
    "id": "tidal_reach",
    "name": "Tidal Reach",
    "icon": "spell_nature_naturetouchgrow",
    "maxPoints": 2,
    "row": 3,
    "col": 3,
    "desc": [
      "Increases the range of your Healing Wave, Lesser Healing Wave, and Chain Heal spells by 10%.",
      "20%"
    ],
    "visualEffect": "A spectral wolf howls into the elements. This is accompanied by a ethereal manifestation of Tidal Reach."
  },
  {
    "id": "mana_tide_totem",
    "name": "Mana Tide Totem",
    "icon": "spell_frost_summonwaterelemental",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "healing_way",
      "points": 3
    },
    "desc": [
      "Summons a Mana Tide Totem with 5 Health at the feet of the caster for 12 sec that restores 170 mana every 3 seconds to group members within 20 yards."
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a phantom manifestation of Mana Tide Totem."
  },
  {
    "id": "imp_chain_heal",
    "name": "Improved Chain Heal",
    "icon": "spell_nature_healingway",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases the amount healed by your Chain Heal spell by 10%.",
      "20%"
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a brutal manifestation of Improved Chain Heal."
  },
  {
    "id": "natures_blessing",
    "name": "Nature's Blessing",
    "icon": "spell_nature_natureblessing",
    "maxPoints": 3,
    "row": 4,
    "col": 0,
    "desc": [
      "Increases your spell damage and healing by an amount equal to 10% of your Intellect.",
      "20%",
      "30%"
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a phantom manifestation of Nature's Blessing."
  },
  {
    "id": "earth_shield",
    "name": "Earth Shield",
    "icon": "spell_nature_skinofearth",
    "maxPoints": 1,
    "row": 5,
    "col": 0,
    "desc": [
      "Protects the target with an earthen shield, reducing casting time lost from taking damage by 30% and causing attacks to heal the shielded target. 6 charges."
    ],
    "visualEffect": "The earth sunders, revealing molten magma beneath. This is accompanied by a ethereal manifestation of Earth Shield."
  },
  {
    "id": "ancestral_awakening",
    "name": "Ancestral Awakening",
    "icon": "spell_shaman_ancestralawakening",
    "maxPoints": 3,
    "row": 5,
    "col": 1,
    "desc": [
      "When you critically heal with your Healing Wave or Lesser Healing Wave, you summon an ancestral spirit to aid you, instantly healing the lowest percentage health party member within 40 yards for 10% of the amount healed.",
      "20%",
      "30%"
    ],
    "visualEffect": "A wave of pure, restorative water washes outwards. This is accompanied by a primal manifestation of Ancestral Awakening."
  },
  {
    "id": "imp_mana_tide",
    "name": "Improved Mana Tide",
    "icon": "spell_frost_summonwaterelemental",
    "maxPoints": 2,
    "row": 4,
    "col": 2,
    "requires": {
      "id": "mana_tide_totem",
      "points": 1
    },
    "desc": [
      "Reduces the cooldown of your Mana Tide Totem by 1 minute.",
      "2 minutes"
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a devastating manifestation of Improved Mana Tide."
  },
  {
    "id": "riptide",
    "name": "Riptide",
    "icon": "spell_nature_riptide",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "ancestral_awakening",
      "points": 3
    },
    "desc": [
      "Heals a friendly target for X instantly and another Y over 15 sec. Your next Chain Heal cast on that primary target has a 25% increased effect and consumes the healing over time effect. 6 second cooldown."
    ],
    "visualEffect": "Frost crackles and rapidly freezes the area. This is accompanied by a swift manifestation of Riptide."
  }
];

export const CHANGELOG: string[] = [
  "General Changes",
  "Design Philosophy: The Hybrid Tax has been eliminated. The trees have been injected with distinct elemental combos, powerful new tier anchors, and definitive active capstone abilities.",
  "Totemic Mastery: The benefit of this talent has been made baseline for all Shamans, ensuring totems cover large areas effortlessly.",
  "Elemental",
  "Identity: A devastating storm-caller commanding massive ranged burst potential and unprecedented group-wide offensive utility.",
  "Core Foundation: Convection, Concussion, Call of Flame grouped in Tier 1.",
  "Cross-Pollination: Earth's Grasp, Elemental Warding, Elemental Focus organized in Tier 2.",
  "Elemental Fury: Positioned as the critical 11-point anchor.",
  "Output: Improved Fire Totems, Eye of the Storm, Storm Reach organized in Tier 3.",
  "Control: Storm, Earth, and Fire, Lightning Mastery established in Tier 4.",
  "Thunderstorm: Positioned as the 21-point anchor.",
  "The Active Engine: Totemic Surge, Lightning Overload organized in Tier 5.",
  "Totem of Wrath: Added as the 31-point capstone, providing unmatched group offensive buffs.",
  "Enhancement",
  "Identity: A ruthless, dual-wielding battlemage weaving elemental shocks between massive melee strikes.",
  "Core Foundation: Ancestral Knowledge, Shield Specialization, Thundering Strikes grouped in Tier 1.",
  "Cross-Pollination: Improved Ghost Wolf, Improved Lightning Shield, Enhancing Totems organized in Tier 2.",
  "Ancestral Mastery: Positioned as the 11-point anchor, enabling Dual Wielding.",
  "Output: Flurry, Toughness, Elemental Weapons organized in Tier 3.",
  "Utility: Anticipation, Unleashed Rage established in Tier 4.",
  "Stormstrike: Positioned as the 21-point anchor (Reduced to 1 point, 8s cd).",
  "The Active Engine: Mental Quickness, Weapon Mastery organized in Tier 5.",
  "Burst Mechanics: Shamanistic Focus, Static Shock organized in Tier 6.",
  "Feral Spirit: Added as the 31-point capstone, summoning massive Spirit Wolves for burst and utility.",
  "Restoration",
  "Identity: The unrivaled king of multi-target throughput and massive regenerative tides.",
  "Core Foundation: Improved Healing Wave, Tidal Focus, Improved Reincarnation grouped in Tier 1.",
  "Cross-Pollination: Ancestral Healing, Totemic Focus, Nature's Guidance organized in Tier 2.",
  "Nature's Swiftness: Moved down to the 11-point anchor.",
  "Output: Healing Grace, Tidal Mastery, Healing Way organized in Tier 3.",
  "Sustain: Restorative Totems, Purification established in Tier 4.",
  "Mana Tide Totem: Positioned as the 21-point anchor.",
  "The Active Engine: Nature's Blessing, Ancestral Awakening organized in Tier 5.",
  "Mechanics: Earth Shield, Improved Chain Heal organized in Tier 6.",
  "Riptide: Added as the 31-point capstone, offering massive instant triage and HoT capability."
];
