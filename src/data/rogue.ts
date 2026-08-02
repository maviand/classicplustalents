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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Malice.",
    "synergies": [
      "Acts as a foundational pillar for any lethal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Malice critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Acts as a foundational pillar for any lethal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with lethal energy upon casting Improved Eviscerate.",
    "devCommentary": "Initially, Improved Eviscerate was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Remorseless Attacks.",
    "synergies": [
      "Acts as a foundational pillar for any lethal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Remorseless Attacks critically hits.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Ruthlessness was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Puncturing Wounds.",
    "synergies": [
      "Acts as a foundational pillar for any lethal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Puncturing Wounds critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Vile Poisons represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Vile Poisons.",
    "devCommentary": "Initially, Vile Poisons was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Improved Slice and Dice critically hits.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Lethality critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Cold Blood.",
    "synergies": [
      "Creates a devastating synergy when you weave Cold Blood between auto-attacks.",
      "Acts as a foundational pillar for any lethal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Cold Blood was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Relentless Strikes represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Relentless Strikes.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Find Weakness critically hits.",
    "devCommentary": "Initially, Find Weakness was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Improved Poisons.",
    "synergies": [
      "Acts as a foundational pillar for any lethal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Improved Poisons critically hits.",
    "devCommentary": "We wanted Improved Poisons to define the Assassination playstyle at all levels.",
    "visualEffect": "A massive burst of shadows erupts from the target upon impact."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Fleet Footed represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Fleet Footed.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Seal Fate between auto-attacks.",
      "Creates a devastating synergy when you weave Seal Fate between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Mutilate between auto-attacks.",
      "Creates a devastating synergy when you weave Mutilate between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "Initially, Mutilate was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Quick Recovery was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "We wanted Quick Recovery to define the Assassination playstyle at all levels.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Master Poisoner between auto-attacks.",
      "Creates a devastating synergy when you weave Master Poisoner between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward shadows ability.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Blood Spatter.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Vigor.",
    "devCommentary": "We wanted Vigor to define the Assassination playstyle at all levels.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Envenom represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Assassination PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Envenom.",
    "devCommentary": "We wanted Envenom to define the Assassination playstyle at all levels.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Deflection.",
    "devCommentary": "We wanted Deflection to define the Combat playstyle at all levels.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Improved Sinister Strike represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Improved Sinister Strike.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Improved Gouge represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Improved Gouge.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Precision.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Dual Wield Specialization between auto-attacks.",
      "Creates a devastating synergy when you weave Dual Wield Specialization between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "Initially, Dual Wield Specialization was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Improved Sprint.",
    "synergies": [
      "Acts as a foundational pillar for any lethal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Improved Sprint critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Endurance critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward shadows ability.",
    "visualEffect": "A massive burst of shadows erupts from the target upon impact."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Weapon Expertise represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any lethal oriented build.",
      "Creates a devastating synergy when you weave Weapon Expertise between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with lethal energy upon casting Weapon Expertise.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward shadows ability.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Blade Flurry was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Riposte.",
    "synergies": [
      "Creates a devastating synergy when you weave Riposte between auto-attacks.",
      "Acts as a foundational pillar for any lethal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Riposte was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Throwing Specialization was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Throwing Specialization was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Aggression represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Aggression.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward shadows ability.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Vitality was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Vitality was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Lightning Reflexes was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Lightning Reflexes to define the Combat playstyle at all levels.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Adrenaline Rush.",
    "synergies": [
      "Creates a devastating synergy when you weave Adrenaline Rush between auto-attacks.",
      "Acts as a foundational pillar for any lethal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward shadows ability.",
    "visualEffect": "A massive burst of shadows erupts from the target upon impact."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Acts as a foundational pillar for any lethal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with lethal energy upon casting Combat Potency.",
    "devCommentary": "Initially, Combat Potency was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Surprise Attacks between auto-attacks.",
      "Creates a devastating synergy when you weave Surprise Attacks between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Unfair Advantage was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward shadows ability.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Blade Twisting was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Killing Spree represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Combat PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Killing Spree.",
    "devCommentary": "Initially, Killing Spree was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Master of Deception.",
    "synergies": [
      "Creates a devastating synergy when you weave Master of Deception between auto-attacks.",
      "Acts as a foundational pillar for any lethal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward shadows ability.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Opportunity was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Camouflage represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Camouflage.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Initiative.",
    "devCommentary": "Initially, Initiative was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Elusiveness critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward shadows ability.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Acts as a foundational pillar for any lethal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with lethal energy upon casting Improved Ambush.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Dirty Tricks.",
    "synergies": [
      "Acts as a foundational pillar for any lethal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Dirty Tricks critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Serrated Blades was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Serrated Blades was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Coefficient scales with both spell damage and shadows mastery.",
    "loreOrigins": "Passed down by Valeera, this mastery of Hemorrhage represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any lethal oriented build.",
      "Creates a devastating synergy when you weave Hemorrhage between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with lethal energy upon casting Hemorrhage.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward shadows ability.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Setup between auto-attacks.",
      "Creates a devastating synergy when you weave Setup between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "We wanted Setup to define the Subtlety playstyle at all levels.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Sleight of Hand.",
    "synergies": [
      "Creates a devastating synergy when you weave Sleight of Hand between auto-attacks.",
      "Acts as a foundational pillar for any lethal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Deadliness critically hits.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Heightened Senses critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Dirty Deeds.",
    "devCommentary": "Designed to smooth out the rotation of lethal specs in long encounters.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Provides unmatched utility when combined with other assassinate abilities."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Preparation critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Enveloping Shadows was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your lethal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary shadows effect.",
    "devCommentary": "We wanted Enveloping Shadows to define the Subtlety playstyle at all levels.",
    "visualEffect": "A spectral projection of Valeera briefly mirrors your attack."
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
    "statScaling": "Provides flat scaling independent of your shadows rating.",
    "loreOrigins": "A lost secret of the Ravenholdt manor that weaponizes the pure essence of Cheat Death.",
    "synergies": [
      "Acts as a foundational pillar for any lethal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum shadows output."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Cheat Death critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in lethal energy."
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
    "statScaling": "Scales directly with your total shadows power rating.",
    "loreOrigins": "Originally devised in the Ravenholdt manor, the technique of Honor Among Thieves was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other assassinate abilities.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Honor Among Thieves was too weak, so we gave it massive lethal scaling.",
    "visualEffect": "The ground shatters as lethal power courses through you."
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
    "statScaling": "Inherits 50% of your weapon's base damage as lethal power.",
    "loreOrigins": "An instinctual manifestation of shadows, allowing you to assassinate your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Acts as a foundational pillar for any lethal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with lethal energy upon casting Master of Subtlety.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
    "statScaling": "Gains a 15% bonus scaling from your primary lethal stats.",
    "loreOrigins": "A forbidden lethal art that utilizes shadows to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum shadows output.",
      "Dramatically increases the power spike of your lethal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Subtlety PvE",
      "Hybrid lethal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Shadowstep.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of shadows in your wake."
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
