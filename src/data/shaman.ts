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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Concussion was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Call of Flame represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Call of Flame.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Earth's Grasp was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Reverberation represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Reverberation.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Elemental Focus.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Elemental Focus critically hits.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Elemental Warding was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Storm Reach represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Creates a devastating synergy when you weave Storm Reach between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Storm Reach.",
    "devCommentary": "Initially, Storm Reach was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Elemental Devastation.",
    "devCommentary": "Initially, Elemental Devastation was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Call of Thunder.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Call of Thunder critically hits.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Elemental Fury.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Elemental Fury critically hits.",
    "devCommentary": "Initially, Elemental Fury was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Eye of the Storm critically hits.",
    "devCommentary": "Initially, Eye of the Storm was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Lava Flows was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Storm, Earth, and Fire.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Lightning Mastery was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Thunderstorm.",
    "synergies": [
      "Creates a devastating synergy when you weave Thunderstorm between auto-attacks.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Thunderstorm was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Totemic Surge.",
    "devCommentary": "We wanted Totemic Surge to define the Elemental playstyle at all levels.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Lightning Overload critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Elemental Precision critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Elemental PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Totem of Wrath.",
    "devCommentary": "Initially, Totem of Wrath was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Ancestral Knowledge.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "A massive burst of elements erupts from the target upon impact."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Thundering Strikes.",
    "devCommentary": "Initially, Thundering Strikes was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Improved Ghost Wolf represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Creates a devastating synergy when you weave Improved Ghost Wolf between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Improved Ghost Wolf.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Mental Quickness represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Creates a devastating synergy when you weave Mental Quickness between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Mental Quickness.",
    "devCommentary": "Initially, Mental Quickness was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Elemental Weapons.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Elemental Weapons critically hits.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Enhancing Totems was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Enhancing Totems was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Improved Lightning Shield.",
    "synergies": [
      "Creates a devastating synergy when you weave Improved Lightning Shield between auto-attacks.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Ancestral Mastery critically hits.",
    "devCommentary": "Initially, Ancestral Mastery was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Flurry.",
    "devCommentary": "Initially, Flurry was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Unleashed Rage.",
    "synergies": [
      "Creates a devastating synergy when you weave Unleashed Rage between auto-attacks.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Frozen Power.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Frozen Power critically hits.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Weapon Mastery represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Creates a devastating synergy when you weave Weapon Mastery between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Weapon Mastery.",
    "devCommentary": "Initially, Weapon Mastery was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Improved Weapon Totems was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "We wanted Improved Weapon Totems to define the Enhancement playstyle at all levels.",
    "visualEffect": "A massive burst of elements erupts from the target upon impact."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Earthen Power.",
    "devCommentary": "We wanted Earthen Power to define the Enhancement playstyle at all levels.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Stormstrike.",
    "synergies": [
      "Creates a devastating synergy when you weave Stormstrike between auto-attacks.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in stormy energy."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Static Shock between auto-attacks.",
      "Creates a devastating synergy when you weave Static Shock between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "We wanted Static Shock to define the Enhancement playstyle at all levels.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Shamanistic Focus.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Shamanistic Focus critically hits.",
    "devCommentary": "Initially, Shamanistic Focus was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Primal Wisdom.",
    "devCommentary": "We wanted Primal Wisdom to define the Enhancement playstyle at all levels.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Improved Stormstrike between auto-attacks.",
      "Creates a devastating synergy when you weave Improved Stormstrike between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Ancestral Power between auto-attacks.",
      "Creates a devastating synergy when you weave Ancestral Power between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Feral Spirit between auto-attacks.",
      "Creates a devastating synergy when you weave Feral Spirit between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Enhancement PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Improved Reincarnation.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "A massive burst of elements erupts from the target upon impact."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Tidal Focus.",
    "synergies": [
      "Creates a devastating synergy when you weave Tidal Focus between auto-attacks.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Improved Healing Wave represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Improved Healing Wave.",
    "devCommentary": "We wanted Improved Healing Wave to define the Restoration playstyle at all levels.",
    "visualEffect": "A massive burst of elements erupts from the target upon impact."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Nature's Guidance between auto-attacks.",
      "Creates a devastating synergy when you weave Nature's Guidance between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "Initially, Nature's Guidance was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Ancestral Healing represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Creates a devastating synergy when you weave Ancestral Healing between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Ancestral Healing.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "A massive burst of elements erupts from the target upon impact."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Totemic Recall critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Healing Grace was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Nature's Swiftness represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Nature's Swiftness.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Acts as a foundational pillar for any stormy oriented build."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Tidal Mastery.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "A massive burst of elements erupts from the target upon impact."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Restorative Totems.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Cleanse Spirit was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "We wanted Cleanse Spirit to define the Restoration playstyle at all levels.",
    "visualEffect": "A massive burst of elements erupts from the target upon impact."
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
    "statScaling": "Gains a 15% bonus scaling from your primary stormy stats.",
    "loreOrigins": "A forbidden stormy art that utilizes elements to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum elements output.",
      "Dramatically increases the power spike of your stormy cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Purification.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Healing Way represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Creates a devastating synergy when you weave Healing Way between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Healing Way.",
    "devCommentary": "We wanted Healing Way to define the Restoration playstyle at all levels.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Tidal Waves was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Tidal Reach.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Tidal Reach critically hits.",
    "devCommentary": "Initially, Tidal Reach was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Coefficient scales with both spell damage and elements mastery.",
    "loreOrigins": "Passed down by Thrall, this mastery of Mana Tide Totem represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Creates a devastating synergy when you weave Mana Tide Totem between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with stormy energy upon casting Mana Tide Totem.",
    "devCommentary": "Designed to smooth out the rotation of stormy specs in long encounters.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Improved Chain Heal was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "Initially, Improved Chain Heal was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Scales directly with your total elements power rating.",
    "loreOrigins": "Originally devised in the Earthen Ring, the technique of Nature's Blessing was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your stormy cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary elements effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Earth Shield.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Earth Shield critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward elements ability.",
    "visualEffect": "A massive burst of elements erupts from the target upon impact."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Ancestral Awakening critically hits.",
    "devCommentary": "Initially, Ancestral Awakening was too weak, so we gave it massive stormy scaling.",
    "visualEffect": "The ground shatters as stormy power courses through you."
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
    "statScaling": "Provides flat scaling independent of your elements rating.",
    "loreOrigins": "A lost secret of the Earthen Ring that weaponizes the pure essence of Improved Mana Tide.",
    "synergies": [
      "Acts as a foundational pillar for any stormy oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum elements output."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Improved Mana Tide critically hits.",
    "devCommentary": "We wanted Improved Mana Tide to define the Restoration playstyle at all levels.",
    "visualEffect": "A spectral projection of Thrall briefly mirrors your attack."
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
    "statScaling": "Inherits 50% of your weapon's base damage as stormy power.",
    "loreOrigins": "An instinctual manifestation of elements, allowing you to shock your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other shock abilities.",
      "Provides unmatched utility when combined with other shock abilities."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid stormy PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Riptide critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of elements in your wake."
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
