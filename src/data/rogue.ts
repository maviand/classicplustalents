import { Talent } from '../types/talents';

export const ROGUE_ASSASSINATION_TALENTS: any = [
  {
    "id": "malice",
    "name": "Malice",
    "icon": "ability_racial_bloodrage",
    "maxPoints": 5,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases your critical strike chance with all attacks by 0.6%.",
      "1.2%",
      "1.8%",
      "2.4%",
      "3.0%"
    ],
    "visualEffect": "The sound of a blade unsheathing echoes ominously. This is accompanied by a primal manifestation of Malice."
  },
  {
    "id": "imp_eviscerate",
    "name": "Improved Eviscerate",
    "icon": "ability_rogue_eviscerate",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases the damage done by your Eviscerate ability by 5%.",
      "10%",
      "15%"
    ],
    "visualEffect": "The sound of a blade unsheathing echoes ominously. This is accompanied by a corrupted manifestation of Improved Eviscerate."
  },
  {
    "id": "remorseless_attacks",
    "name": "Remorseless Attacks",
    "icon": "ability_fiegndead",
    "maxPoints": 2,
    "row": 0,
    "col": 2,
    "desc": [
      "After killing an opponent that yields experience or honor, gives you a 20% increased critical strike chance on your next Sinister Strike, Hemorrhage, Backstab, Mutilate, Ambush, or Ghostly Strike.",
      "40%"
    ],
    "visualEffect": "Darkness briefly consumes the area of effect. This is accompanied by a brutal manifestation of Remorseless Attacks."
  },
  {
    "id": "ruthlessness",
    "name": "Ruthlessness",
    "icon": "ability_druid_disembowel",
    "maxPoints": 3,
    "row": 1,
    "col": 2,
    "desc": [
      "Gives your melee finishing moves a 20% chance to add a combo point to your target.",
      "40%",
      "60%"
    ],
    "visualEffect": "You vanish into a puff of thick, choking smoke. This is accompanied by a phantom manifestation of Ruthlessness."
  },
  {
    "id": "puncturing_wounds",
    "name": "Puncturing Wounds",
    "icon": "ability_backstab",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Increases the critical strike chance of your Backstab and Mutilate abilities by 10%, and the critical strike chance of your Garrote ability by 5%.",
      "20% / 10%",
      "30% / 15%"
    ],
    "visualEffect": "You blur into a completely untargetable shadow. This is accompanied by a lethal manifestation of Puncturing Wounds."
  },
  {
    "id": "vile_poisons",
    "name": "Vile Poisons",
    "icon": "ability_poisons",
    "maxPoints": 2,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases the damage dealt by your poisons by 10% and gives your poisons an additional 20% chance to resist dispel effects.",
      "20% / 40%"
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a chaotic manifestation of Vile Poisons."
  },
  {
    "id": "imp_snd",
    "name": "Improved Slice and Dice",
    "icon": "ability_rogue_slicedice",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases the duration of your Slice and Dice ability by 25%.",
      "50%"
    ],
    "visualEffect": "You blur into a completely untargetable shadow. This is accompanied by a ancient manifestation of Improved Slice and Dice."
  },
  {
    "id": "lethality",
    "name": "Lethality",
    "icon": "ability_criticalstrike",
    "maxPoints": 5,
    "row": 2,
    "col": 0,
    "requires": {
      "id": "malice",
      "points": 5
    },
    "desc": [
      "Increases the critical strike damage bonus of your combo-point generating abilities by 6%.",
      "12%",
      "18%",
      "24%",
      "30%"
    ],
    "visualEffect": "Darkness briefly consumes the area of effect. This is accompanied by a lethal manifestation of Lethality."
  },
  {
    "id": "cold_blood",
    "name": "Cold Blood",
    "icon": "spell_ice_magicdamage",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "When activated, increases the critical strike chance of your next offensive ability by 100%. 3 minute cooldown."
    ],
    "visualEffect": "You vanish into a puff of thick, choking smoke. This is accompanied by a divine manifestation of Cold Blood."
  },
  {
    "id": "relentless_strikes",
    "name": "Relentless Strikes",
    "icon": "ability_warrior_decisivestrike",
    "maxPoints": 2,
    "row": 2,
    "col": 2,
    "requires": {
      "id": "ruthlessness",
      "points": 3
    },
    "desc": [
      "Your finishing moves have a 10% chance per combo point to restore 25 Energy.",
      "20%"
    ],
    "visualEffect": "Your eyes flash with a predatory crimson glint. This is accompanied by a ethereal manifestation of Relentless Strikes."
  },
  {
    "id": "find_weakness",
    "name": "Find Weakness",
    "icon": "ability_rogue_findweakness",
    "maxPoints": 3,
    "row": 3,
    "col": 0,
    "desc": [
      "Your offensive finishing moves increase all physical damage dealt by 2% for 10 seconds.",
      "4%",
      "6%"
    ],
    "visualEffect": "You blur into a completely untargetable shadow. This is accompanied by a powerful manifestation of Find Weakness."
  },
  {
    "id": "imp_poisons",
    "name": "Improved Poisons",
    "icon": "ability_poisons",
    "maxPoints": 5,
    "row": 3,
    "col": 1,
    "requires": {
      "id": "cold_blood",
      "points": 1
    },
    "desc": [
      "Increases the chance to apply Deadly Poison, Instant Poison, and Wound Poison to your target by 2%.",
      "4%",
      "6%",
      "8%",
      "10%"
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a divine manifestation of Improved Poisons."
  },
  {
    "id": "fleet_footed",
    "name": "Fleet Footed",
    "icon": "ability_rogue_fleetfooted",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Increases your movement speed by 8% and increases your resistance to movement impairing effects by 5%.",
      "15% / 10%"
    ],
    "visualEffect": "A phantom dagger strikes from the opposite direction. This is accompanied by a primal manifestation of Fleet Footed."
  },
  {
    "id": "seal_fate",
    "name": "Seal Fate",
    "icon": "spell_shadow_chilltouch",
    "maxPoints": 3,
    "row": 4,
    "col": 0,
    "requires": {
      "id": "cold_blood",
      "points": 1
    },
    "desc": [
      "Your critical strikes from abilities that add combo points have a 33% chance to add an additional combo point.",
      "66%",
      "100%"
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a lethal manifestation of Seal Fate."
  },
  {
    "id": "mutilate",
    "name": "Mutilate",
    "icon": "ability_rogue_shadowstrikes",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "desc": [
      "Instantly attacks with both weapons for 100% weapon damage plus an additional X with each weapon. Damage is increased by 20% against Poisoned targets. Awards 2 combo points. Must be dual-wielding daggers."
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a forbidden manifestation of Mutilate."
  },
  {
    "id": "quick_recovery",
    "name": "Quick Recovery",
    "icon": "ability_rogue_quickrecovery",
    "maxPoints": 2,
    "row": 4,
    "col": 2,
    "desc": [
      "All healing effects received are increased by 10%. In addition, your finishing moves cost 40% less Energy when they miss, are dodged, or are parried.",
      "20% / 80%"
    ],
    "visualEffect": "Darkness briefly consumes the area of effect. This is accompanied by a ethereal manifestation of Quick Recovery."
  },
  {
    "id": "master_poisoner",
    "name": "Master Poisoner",
    "icon": "ability_creature_poison_06",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Increases the critical strike chance of all attacks made against targets you have poisoned by 1%, and reduces the duration of all Poison effects applied to you by 17%.",
      "2% / 34%",
      "3% / 50%"
    ],
    "visualEffect": "Venom violently erupts from the wound. This is accompanied by a ethereal manifestation of Master Poisoner."
  },
  {
    "id": "blood_spatter",
    "name": "Blood Spatter",
    "icon": "ability_rogue_garrote",
    "maxPoints": 2,
    "row": 5,
    "col": 3,
    "desc": [
      "Increases the damage caused by your Garrote and Rupture abilities by 15%.",
      "30%"
    ],
    "visualEffect": "A phantom dagger strikes from the opposite direction. This is accompanied by a forbidden manifestation of Blood Spatter."
  },
  {
    "id": "vigor",
    "name": "Vigor",
    "icon": "spell_nature_earthbindtotem",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases your maximum Energy by 5.",
      "10."
    ],
    "visualEffect": "Venom violently erupts from the wound. This is accompanied by a swift manifestation of Vigor."
  },
  {
    "id": "envenom",
    "name": "Envenom",
    "icon": "ability_rogue_disembowel",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "mutilate",
      "points": 1
    },
    "desc": [
      "Finishing move that consumes your Deadly Poison doses on the target to deal instant Nature damage. Following the Envenom attack, you have an additional 15% chance to apply Deadly Poison and a 75% chance to apply Instant Poison for 1 second plus an additional 1 second per combo point."
    ],
    "visualEffect": "You vanish into a puff of thick, choking smoke. This is accompanied by a radiant manifestation of Envenom."
  }
];

export const ROGUE_COMBAT_TALENTS: any = [
  {
    "id": "deflection",
    "name": "Deflection",
    "icon": "ability_parry",
    "maxPoints": 5,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases your chance to Parry by 1%.",
      "2%",
      "3%",
      "4%",
      "5%"
    ],
    "visualEffect": "Venom violently erupts from the wound. This is accompanied by a powerful manifestation of Deflection."
  },
  {
    "id": "imp_ss",
    "name": "Improved Sinister Strike",
    "icon": "spell_shadow_ritualofsacrifice",
    "maxPoints": 2,
    "row": 0,
    "col": 1,
    "desc": [
      "Reduces the Energy cost of your Sinister Strike ability by 3.",
      "5."
    ],
    "visualEffect": "Venom violently erupts from the wound. This is accompanied by a ancient manifestation of Improved Sinister Strike."
  },
  {
    "id": "imp_gouge",
    "name": "Improved Gouge",
    "icon": "ability_gouge",
    "maxPoints": 3,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases the effect duration of your Gouge ability by 0.5 seconds.",
      "1.0 seconds",
      "1.5 seconds"
    ],
    "visualEffect": "A phantom dagger strikes from the opposite direction. This is accompanied by a brutal manifestation of Improved Gouge."
  },
  {
    "id": "precision",
    "name": "Precision",
    "icon": "ability_marksmanship",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Increases your chance to hit with melee weapons by 1%.",
      "2%",
      "3%"
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a phantom manifestation of Precision."
  },
  {
    "id": "dual_wield_spec",
    "name": "Dual Wield Specialization",
    "icon": "ability_dualwield",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases the damage done by your offhand weapon by 17%.",
      "34%",
      "50%"
    ],
    "visualEffect": "A phantom dagger strikes from the opposite direction. This is accompanied by a unseen manifestation of Dual Wield Specialization."
  },
  {
    "id": "imp_sprint",
    "name": "Improved Sprint",
    "icon": "ability_rogue_sprint",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Gives a 50% chance to remove all movement impairing effects when you activate your Sprint ability.",
      "100%"
    ],
    "visualEffect": "Your eyes flash with a predatory crimson glint. This is accompanied by a ethereal manifestation of Improved Sprint."
  },
  {
    "id": "endurance",
    "name": "Endurance",
    "icon": "spell_nature_reincarnation",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Reduces the cooldown of your Sprint and Evasion abilities by 45 seconds.",
      "90 seconds"
    ],
    "visualEffect": "Darkness briefly consumes the area of effect. This is accompanied by a radiant manifestation of Endurance."
  },
  {
    "id": "weapon_expertise",
    "name": "Weapon Expertise",
    "icon": "spell_holy_blessingofstrength",
    "maxPoints": 5,
    "row": 2,
    "col": 0,
    "requires": {
      "id": "precision",
      "points": 3
    },
    "desc": [
      "Increases your skill with Swords, Maces, Daggers, and Fist Weapons by 1.",
      "2.",
      "3.",
      "4.",
      "5."
    ],
    "visualEffect": "The sound of a blade unsheathing echoes ominously. This is accompanied by a chaotic manifestation of Weapon Expertise."
  },
  {
    "id": "blade_flurry",
    "name": "Blade Flurry",
    "icon": "ability_warrior_punishingblow",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "Increases your attack speed by 20%. In addition, attacks strike an additional nearby opponent. Lasts 15 seconds. 2 minute cooldown."
    ],
    "visualEffect": "Your eyes flash with a predatory crimson glint. This is accompanied by a ethereal manifestation of Blade Flurry."
  },
  {
    "id": "riposte",
    "name": "Riposte",
    "icon": "ability_warrior_challange",
    "maxPoints": 1,
    "row": 2,
    "col": 2,
    "requires": {
      "id": "deflection",
      "points": 5
    },
    "desc": [
      "A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 seconds."
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a corrupted manifestation of Riposte."
  },
  {
    "id": "throwing_spec",
    "name": "Throwing Specialization",
    "icon": "ability_rogue_throwingspecialization",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Increases the range of your Throwing weapons by 3 yards, and gives your Throwing attacks a 50% chance to daze the target for 3 seconds.",
      "6 yards / 100%"
    ],
    "visualEffect": "A phantom dagger strikes from the opposite direction. This is accompanied by a phantom manifestation of Throwing Specialization."
  },
  {
    "id": "aggression",
    "name": "Aggression",
    "icon": "ability_racial_avatar",
    "maxPoints": 5,
    "row": 3,
    "col": 3,
    "desc": [
      "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 2%.",
      "4%",
      "6%",
      "8%",
      "10%"
    ],
    "visualEffect": "Venom violently erupts from the wound. This is accompanied by a divine manifestation of Aggression."
  },
  {
    "id": "vitality",
    "name": "Vitality",
    "icon": "spell_nature_natureblessing",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Increases your total Stamina by 2% and your total Agility by 1%.",
      "4% / 2%"
    ],
    "visualEffect": "Darkness briefly consumes the area of effect. This is accompanied by a lethal manifestation of Vitality."
  },
  {
    "id": "lightning_reflexes",
    "name": "Lightning Reflexes",
    "icon": "spell_nature_invisibilty",
    "maxPoints": 3,
    "row": 4,
    "col": 0,
    "desc": [
      "Increases your Dodge chance by 2% and your melee haste by 1%.",
      "4% / 2%",
      "6% / 3%"
    ],
    "visualEffect": "A phantom dagger strikes from the opposite direction. This is accompanied by a devastating manifestation of Lightning Reflexes."
  },
  {
    "id": "adrenaline_rush",
    "name": "Adrenaline Rush",
    "icon": "spell_shadow_shadowworddominate",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "blade_flurry",
      "points": 1
    },
    "desc": [
      "Increases your Energy regeneration rate by 100% for 15 seconds. 3 minute cooldown."
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a unseen manifestation of Adrenaline Rush."
  },
  {
    "id": "combat_potency",
    "name": "Combat Potency",
    "icon": "inv_sword_48",
    "maxPoints": 2,
    "row": 4,
    "col": 2,
    "desc": [
      "Gives your successful off-hand melee attacks a 10% chance to generate 15 Energy.",
      "20%"
    ],
    "visualEffect": "You blur into a completely untargetable shadow. This is accompanied by a phantom manifestation of Combat Potency."
  },
  {
    "id": "surprise_attacks",
    "name": "Surprise Attacks",
    "icon": "ability_rogue_surpriseattack",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Your finishing moves can no longer be dodged, and the damage dealt by your Sinister Strike, Backstab, Shiv, Hemorrhage, and Gouge abilities is increased by 4%.",
      "8%",
      "12%"
    ],
    "visualEffect": "Your eyes flash with a predatory crimson glint. This is accompanied by a primal manifestation of Surprise Attacks."
  },
  {
    "id": "unfair_advantage",
    "name": "Unfair Advantage",
    "icon": "ability_rogue_unfairadvantage",
    "maxPoints": 2,
    "row": 5,
    "col": 3,
    "desc": [
      "Whenever you dodge an attack, you gain a counter-strike dealing 50% weapon damage (can only occur once every 1 second).",
      "100%"
    ],
    "visualEffect": "Your eyes flash with a predatory crimson glint. This is accompanied by a phantom manifestation of Unfair Advantage."
  },
  {
    "id": "blade_twisting",
    "name": "Blade Twisting",
    "icon": "ability_rogue_bladetwisting",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Your damaging melee attacks have a 10% chance to daze the target for 4 seconds.",
      "20%"
    ],
    "visualEffect": "Your eyes flash with a predatory crimson glint. This is accompanied by a devastating manifestation of Blade Twisting."
  },
  {
    "id": "killing_spree",
    "name": "Killing Spree",
    "icon": "ability_rogue_murderspree",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "adrenaline_rush",
      "points": 1
    },
    "desc": [
      "Step through the shadows from enemy to enemy within 10 yards, attacking an enemy every 0.5 seconds with both weapons until 5 assaults are made, and increasing all damage done by 20% for the duration. Can hit the same target multiple times. Cannot be hit by crowd control during the effect. 2 minute cooldown."
    ],
    "visualEffect": "Your eyes flash with a predatory crimson glint. This is accompanied by a powerful manifestation of Killing Spree."
  }
];

export const ROGUE_SUBTLETY_TALENTS: any = [
  {
    "id": "master_of_deception",
    "name": "Master of Deception",
    "icon": "spell_shadow_charm",
    "maxPoints": 5,
    "row": 0,
    "col": 2,
    "desc": [
      "Reduces the chance enemies have to detect you while in Stealth mode.",
      "Rank 2",
      "Rank 3",
      "Rank 4",
      "Rank 5"
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a unseen manifestation of Master of Deception."
  },
  {
    "id": "opportunity",
    "name": "Opportunity",
    "icon": "ability_warrior_warcry",
    "maxPoints": 3,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 5%.",
      "10%",
      "15%"
    ],
    "visualEffect": "The sound of a blade unsheathing echoes ominously. This is accompanied by a corrupted manifestation of Opportunity."
  },
  {
    "id": "camouflage",
    "name": "Camouflage",
    "icon": "ability_stealth",
    "maxPoints": 2,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases your speed while stealthed by 5% and reduces the cooldown of your Stealth ability by 3 seconds.",
      "10% / 6 seconds"
    ],
    "visualEffect": "You vanish into a puff of thick, choking smoke. This is accompanied by a ethereal manifestation of Camouflage."
  },
  {
    "id": "initiative",
    "name": "Initiative",
    "icon": "spell_shadow_fumble",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "requires": {
      "id": "opportunity",
      "points": 3
    },
    "desc": [
      "Gives you a 25% chance to add an additional combo point to your target when using Ambush, Garrote, or Cheap Shot.",
      "50%",
      "75%"
    ],
    "visualEffect": "Venom violently erupts from the wound. This is accompanied by a phantom manifestation of Initiative."
  },
  {
    "id": "elusiveness",
    "name": "Elusiveness",
    "icon": "spell_magic_lesserinvisibilty",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "requires": {
      "id": "camouflage",
      "points": 2
    },
    "desc": [
      "Reduces the cooldown of your Vanish and Blind abilities by 30 seconds.",
      "60 seconds",
      "90 seconds"
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a primal manifestation of Elusiveness."
  },
  {
    "id": "imp_ambush",
    "name": "Improved Ambush",
    "icon": "ability_rogue_ambush",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Increases the critical strike chance of your Ambush ability by 25%.",
      "50%"
    ],
    "visualEffect": "You vanish into a puff of thick, choking smoke. This is accompanied by a unseen manifestation of Improved Ambush."
  },
  {
    "id": "dirty_tricks",
    "name": "Dirty Tricks",
    "icon": "ability_sap",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases the range of your Blind and Sap abilities by 2 yards and reduces the Energy cost of your Sap and Blind by 25%.",
      "5 yards / 50%"
    ],
    "visualEffect": "Your eyes flash with a predatory crimson glint. This is accompanied by a chaotic manifestation of Dirty Tricks."
  },
  {
    "id": "serrated_blades",
    "name": "Serrated Blades",
    "icon": "inv_sword_17",
    "maxPoints": 5,
    "row": 2,
    "col": 0,
    "desc": [
      "Causes your attacks to ignore X of your target's Armor and increases the damage dealt by your Rupture ability by 10%.",
      "20%",
      "30%",
      "40%",
      "50%"
    ],
    "visualEffect": "The sound of a blade unsheathing echoes ominously. This is accompanied by a phantom manifestation of Serrated Blades."
  },
  {
    "id": "hemorrhage",
    "name": "Hemorrhage",
    "icon": "spell_shadow_lifedrain",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "An instant strike that deals 110% weapon damage and causes the target to hemorrhage, increasing any physical damage dealt to the target by up to X. Lasts 15 seconds or 10 charges. Awards 1 combo point."
    ],
    "visualEffect": "A phantom dagger strikes from the opposite direction. This is accompanied by a unseen manifestation of Hemorrhage."
  },
  {
    "id": "setup",
    "name": "Setup",
    "icon": "spell_nature_mirrorimage",
    "maxPoints": 2,
    "row": 2,
    "col": 2,
    "desc": [
      "Increases your Dodge chance by 1% and gives you a 50% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
      "2% / 100%"
    ],
    "visualEffect": "Darkness briefly consumes the area of effect. This is accompanied by a phantom manifestation of Setup."
  },
  {
    "id": "sleight_of_hand",
    "name": "Sleight of Hand",
    "icon": "ability_rogue_feint",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Reduces the chance you will be critically hit by melee and ranged attacks by 1%, and reduces the cooldown of your Feint ability by 1.5 seconds.",
      "2% / 3 seconds"
    ],
    "visualEffect": "Venom violently erupts from the wound. This is accompanied by a powerful manifestation of Sleight of Hand."
  },
  {
    "id": "deadliness",
    "name": "Deadliness",
    "icon": "inv_weapon_crossbow_11",
    "maxPoints": 5,
    "row": 3,
    "col": 1,
    "desc": [
      "Increases your Attack Power by 2%.",
      "4%",
      "6%",
      "8%",
      "10%"
    ],
    "visualEffect": "A ghostly silhouette mirrors your lethal strike. This is accompanied by a unseen manifestation of Deadliness."
  },
  {
    "id": "heightened_senses",
    "name": "Heightened Senses",
    "icon": "ability_ambush",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 2%.",
      "4%"
    ],
    "visualEffect": "Darkness briefly consumes the area of effect. This is accompanied by a ancient manifestation of Heightened Senses."
  },
  {
    "id": "dirty_deeds",
    "name": "Dirty Deeds",
    "icon": "spell_shadow_summonsuccubus",
    "maxPoints": 3,
    "row": 4,
    "col": 0,
    "desc": [
      "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10, and your special abilities cause 10% more damage against targets below 35% health.",
      "20 / 20%",
      "30 / 30%"
    ],
    "visualEffect": "Venom violently erupts from the wound. This is accompanied by a lethal manifestation of Dirty Deeds."
  },
  {
    "id": "preparation",
    "name": "Preparation",
    "icon": "spell_shadow_antishadow",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "desc": [
      "When activated, this ability immediately finishes the cooldown on your Evasion, Sprint, Vanish, Cold Blood, and Shadowstep abilities. 5 minute cooldown."
    ],
    "visualEffect": "Darkness briefly consumes the area of effect. This is accompanied by a powerful manifestation of Preparation."
  },
  {
    "id": "enveloping_shadows",
    "name": "Enveloping Shadows",
    "icon": "spell_shadow_shadetruesight",
    "maxPoints": 2,
    "row": 4,
    "col": 2,
    "desc": [
      "Reduces the damage you take from area of effect attacks by 15%.",
      "30%"
    ],
    "visualEffect": "You vanish into a puff of thick, choking smoke. This is accompanied by a lethal manifestation of Enveloping Shadows."
  },
  {
    "id": "cheat_death",
    "name": "Cheat Death",
    "icon": "ability_rogue_cheatdeath",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "You have a 33% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by 90% for 3 seconds. This effect cannot occur more than once per minute.",
      "66%",
      "100%"
    ],
    "visualEffect": "Darkness briefly consumes the area of effect. This is accompanied by a forbidden manifestation of Cheat Death."
  },
  {
    "id": "honor_among_thieves",
    "name": "Honor Among Thieves",
    "icon": "ability_rogue_honoramongstthieves",
    "maxPoints": 3,
    "row": 5,
    "col": 3,
    "desc": [
      "When anyone in your group critically hits, you have a 33% chance to gain a combo point on your current target.",
      "66%",
      "100%"
    ],
    "visualEffect": "A phantom dagger strikes from the opposite direction. This is accompanied by a phantom manifestation of Honor Among Thieves."
  },
  {
    "id": "master_of_subtlety",
    "name": "Master of Subtlety",
    "icon": "ability_rogue_masterofsubtlety",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 5% damage.",
      "10%"
    ],
    "visualEffect": "Venom violently erupts from the wound. This is accompanied by a devastating manifestation of Master of Subtlety."
  },
  {
    "id": "shadowstep",
    "name": "Shadowstep",
    "icon": "ability_rogue_shadowstep",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "preparation",
      "points": 1
    },
    "desc": [
      "Attempts to step through the shadows and reappear behind your enemy, increasing movement speed by 70% for 3 seconds and increasing the damage of your next ability by 20%. The threat caused by your next ability is reduced by 50%. 20 second cooldown."
    ],
    "visualEffect": "You vanish into a puff of thick, choking smoke. This is accompanied by a ancient manifestation of Shadowstep."
  }
];

export const CHANGELOG: string[] = [
  "General Changes",
  "Design Philosophy: Rogue trees focus deeply on hyper-specialization, drastically enhancing dual-wielding, poison execution, and high-mobility bursts.",
  "Assassination",
  "Identity: Finally realizes its fantasy as a dual-dagger, poison-bursting executioner by sliding Cold Blood down and introducing Mutilate and Envenom.",
  "Core Foundation: Malice, Improved Eviscerate, Remorseless Attacks grouped in Tier 1.",
  "Cross-Pollination: Ruthlessness, Puncturing Wounds, Vile Poisons, Improved Slice and Dice organized in Tier 2.",
  "Cold Blood: Positioned as 11-point anchor.",
  "Output: Lethality, Relentless Strikes organized in Tier 3.",
  "Scaling: Improved Poisons, Fleet Footed fill out Tier 4.",
  "Mutilate: Positioned as 21-point anchor.",
  "Combos & Sustain: Seal Fate, Quick Recovery organized in Tier 5.",
  "Mastery: Master Poisoner, Vigor organized in Tier 6.",
  "Envenom: Added as the 31-point capstone.",
  "Combat",
  "Identity: Becomes an incredibly fast, unrelenting swashbuckler by consolidating weapon specializations and moving Adrenaline Rush into the mid-game.",
  "Core Foundation: Deflection, Improved Sinister Strike, Improved Gouge grouped in Tier 1.",
  "Cross-Pollination: Precision, Dual Wield Specialization, Improved Sprint, Endurance organized in Tier 2.",
  "Blade Flurry: Positioned as 11-point anchor.",
  "Weapon Expertise: Consolidates all four weapon specializations into one single node in Tier 3.",
  "Scaling: Aggression, Vitality fill out Tier 4.",
  "Adrenaline Rush: Positioned as 21-point anchor.",
  "The Active Engine: Lightning Reflexes, Combat Potency organized in Tier 5.",
  "Sustain & Mastery: Surprise Attacks, Blade Twisting organized in Tier 6.",
  "Killing Spree: Added as the 31-point capstone.",
  "Subtlety",
  "Identity: Becomes a highly mobile, high-control ninja capable of devastating burst by aggressively repositioning Hemorrhage and Preparation.",
  "Core Foundation: Master of Deception, Opportunity, Camouflage grouped in Tier 1.",
  "Cross-Pollination: Initiative, Elusiveness, Improved Ambush, Dirty Tricks organized in Tier 2.",
  "Hemorrhage: Positioned as 11-point anchor.",
  "The Crossroads: Serrated Blades, Setup organized in Tier 3.",
  "Scaling: Deadliness, Heightened Senses fill out Tier 4.",
  "Preparation: Positioned as 21-point anchor.",
  "The Active Engine: Dirty Deeds, Enveloping Shadows organized in Tier 5.",
  "Sustain & Mastery: Cheat Death, Master of Subtlety organized in Tier 6.",
  "Shadowstep: Added as the 31-point capstone."
];
