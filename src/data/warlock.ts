import { Talent } from '../types/talents';

export const WARLOCK_AFFLICTION_TALENTS: any = [
  {
    "id": "suppression",
    "name": "Suppression",
    "icon": "spell_shadow_vampiricaura",
    "maxPoints": 3,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases your chance to hit with Affliction spells by 2%.",
      "4%",
      "6%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Suppression.",
    "devCommentary": "Initially, Suppression was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "imp_corruption",
    "name": "Improved Corruption",
    "icon": "spell_shadow_abominationexplosion",
    "maxPoints": 5,
    "row": 0,
    "col": 1,
    "desc": [
      "Reduces the casting time of your Corruption spell by 0.4 seconds.",
      "0.8 seconds.",
      "1.2 seconds.",
      "1.6 seconds.",
      "2.0 seconds."
    ],
    "statScaling": "Coefficient scales with both spell damage and void mastery.",
    "loreOrigins": "Passed down by Gul'dan, this mastery of Improved Corruption represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Creates a devastating synergy when you weave Improved Corruption between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Improved Corruption.",
    "devCommentary": "Initially, Improved Corruption was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "imp_life_tap",
    "name": "Improved Life Tap",
    "icon": "spell_shadow_burningspirit",
    "maxPoints": 2,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases the amount of Mana awarded by your Life Tap spell by 10%.",
      "20%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Improved Life Tap was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your demonic cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "Initially, Improved Life Tap was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "fel_concentration",
    "name": "Fel Concentration",
    "icon": "spell_shadow_fingerofdeath",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Gives you a 25% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
      "50%",
      "75%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Fel Concentration was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your demonic cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "nightfall",
    "name": "Nightfall",
    "icon": "spell_shadow_twilight",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Gives your Corruption and Drain Life spells a 3% chance to cause you to enter a Shadow Trance state after damaging the opponent.",
      "6%",
      "9%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Nightfall critically hits.",
    "devCommentary": "We wanted Nightfall to define the Affliction playstyle at all levels.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "grim_reach",
    "name": "Grim Reach",
    "icon": "spell_shadow_callofbone",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Increases the range of your Affliction spells by 10%.",
      "20%"
    ],
    "statScaling": "Coefficient scales with both spell damage and void mastery.",
    "loreOrigins": "Passed down by Gul'dan, this mastery of Grim Reach represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Creates a devastating synergy when you weave Grim Reach between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Grim Reach.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "soul_siphon",
    "name": "Soul Siphon",
    "icon": "spell_shadow_lifedrain02",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases the amount drained by your Drain Life and Drain Soul spells by 5% for each Affliction effect on the target, up to a maximum of 15% additional effect.",
      "10% / 30%"
    ],
    "statScaling": "Coefficient scales with both spell damage and void mastery.",
    "loreOrigins": "Passed down by Gul'dan, this mastery of Soul Siphon represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your demonic cooldowns.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Soul Siphon.",
    "devCommentary": "We wanted Soul Siphon to define the Affliction playstyle at all levels.",
    "visualEffect": "A spectral projection of Gul'dan briefly mirrors your attack."
  },
  {
    "id": "shadow_embrace",
    "name": "Shadow Embrace",
    "icon": "spell_shadow_shadowembrace",
    "maxPoints": 2,
    "row": 2,
    "col": 0,
    "desc": [
      "Your Shadow Bolt and Affliction spells apply a debuff reducing physical damage dealt by 2% and increasing periodic Shadow damage taken by 3%.",
      "4% / 6%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Shadow Embrace.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "empowered_corruption",
    "name": "Empowered Corruption",
    "icon": "spell_shadow_abominationexplosion",
    "maxPoints": 3,
    "row": 2,
    "col": 2,
    "desc": [
      "Your Corruption spell gains an additional 12% of your bonus spell damage effects.",
      "24%",
      "36%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Empowered Corruption.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "siphon_life",
    "name": "Siphon Life",
    "icon": "spell_shadow_requiem",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "requires": {
      "id": "nightfall",
      "points": 3
    },
    "desc": [
      "Transfers X health from the target to the caster every 3 seconds for 30 seconds."
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Siphon Life was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Siphon Life was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "everlasting_affliction",
    "name": "Everlasting Affliction",
    "icon": "spell_shadow_chilltouch",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Your Corruption spell has a 33% chance to be automatically refreshed when you cast Drain Life, Drain Soul, or Shadow Bolt.",
      "66%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Everlasting Affliction was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your demonic cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "A spectral projection of Gul'dan briefly mirrors your attack."
  },
  {
    "id": "shadow_mastery",
    "name": "Shadow Mastery",
    "icon": "spell_shadow_shadetruesight",
    "maxPoints": 5,
    "row": 3,
    "col": 1,
    "requires": {
      "id": "siphon_life",
      "points": 1
    },
    "desc": [
      "Increases the damage dealt or life drained by your Shadow spells by 2%.",
      "4%",
      "6%",
      "8%",
      "10%"
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Shadow Mastery.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Shadow Mastery critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "master_of_curses",
    "name": "Master of Curses",
    "icon": "spell_shadow_curseofmannoroth",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Increases the damage done by your Curse of Agony by 5%, and increases the movement speed reduction of your Curse of Exhaustion by an additional 10%.",
      "10% / 20%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Master of Curses critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "contagion",
    "name": "Contagion",
    "icon": "spell_shadow_chilltouch",
    "maxPoints": 3,
    "row": 4,
    "col": 0,
    "desc": [
      "Increases the damage of Curse of Agony, Corruption, and Seed of Corruption by 5%.",
      "10%",
      "15%"
    ],
    "statScaling": "Coefficient scales with both spell damage and void mastery.",
    "loreOrigins": "Passed down by Gul'dan, this mastery of Contagion represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your demonic cooldowns.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Contagion.",
    "devCommentary": "Initially, Contagion was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "dark_pact",
    "name": "Dark Pact",
    "icon": "spell_shadow_darkritual",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "desc": [
      "Drains X of your pet's Mana, returning 100% to you."
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Dark Pact.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "eradication",
    "name": "Eradication",
    "icon": "spell_shadow_blackplague",
    "maxPoints": 2,
    "row": 4,
    "col": 2,
    "desc": [
      "Your Corruption ticks have a 10% chance to increase your spell casting speed by 20% for 8 seconds.",
      "20%"
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Eradication.",
    "synergies": [
      "Creates a devastating synergy when you weave Eradication between auto-attacks.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "deaths_embrace",
    "name": "Deaths Embrace",
    "icon": "spell_shadow_deathsembrace",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Increases the damage of your Shadow spells by 4% when your target is below 35% health.",
      "8%",
      "12%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Deaths Embrace between auto-attacks.",
      "Creates a devastating synergy when you weave Deaths Embrace between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "pandemic",
    "name": "Pandemic",
    "icon": "spell_shadow_unstableaffliction_3",
    "maxPoints": 3,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "dark_pact",
      "points": 1
    },
    "desc": [
      "Allows your Corruption and Unstable Affliction spells to critically hit for 50% of their normal damage.",
      "100%",
      "150%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Pandemic was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Pandemic to define the Affliction playstyle at all levels.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "malediction",
    "name": "Malediction",
    "icon": "spell_shadow_curseofachimonde",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Reduces the cooldown of your Amplify Curse by 1 minute, and increases the damage bonus of your Curse of the Elements and Curse of Shadow by 1%.",
      "2 minutes / 2%"
    ],
    "statScaling": "Coefficient scales with both spell damage and void mastery.",
    "loreOrigins": "Passed down by Gul'dan, this mastery of Malediction represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Creates a devastating synergy when you weave Malediction between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Malediction.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "unstable_affliction",
    "name": "Unstable Affliction",
    "icon": "spell_shadow_unstableaffliction_3",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "pandemic",
      "points": 3
    },
    "desc": [
      "Shadow energy slowly destroys the target, causing X damage over 15 seconds. If the Unstable Affliction is dispelled, it will cause X damage to the dispeller and silence them for 5 seconds."
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Unstable Affliction.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Affliction PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Unstable Affliction critically hits.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  }
];

export const WARLOCK_DEMO_TALENTS: any = [
  {
    "id": "imp_healthstone",
    "name": "Improved Healthstone",
    "icon": "inv_stone_04",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases the amount of Health restored by your Healthstone by 10%.",
      "20%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Improved Healthstone was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your demonic cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "imp_imp",
    "name": "Improved Imp",
    "icon": "spell_shadow_summonimp",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10%.",
      "20%",
      "30%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Improved Imp.",
    "devCommentary": "We wanted Improved Imp to define the Demo playstyle at all levels.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "demonic_embrace",
    "name": "Demonic Embrace",
    "icon": "spell_shadow_demonbreath",
    "maxPoints": 5,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases your total Stamina by 3%.",
      "6%",
      "9%",
      "12%",
      "15%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Demonic Embrace between auto-attacks.",
      "Creates a devastating synergy when you weave Demonic Embrace between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "health_funnel",
    "name": "Health Funnel",
    "icon": "spell_shadow_lifedrain",
    "maxPoints": 2,
    "row": 1,
    "col": 0,
    "desc": [
      "Increases the amount of Health transferred by your Health Funnel spell by 10% and reduces the health cost by 10%.",
      "20% / 20%"
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Health Funnel.",
    "synergies": [
      "Creates a devastating synergy when you weave Health Funnel between auto-attacks.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "fel_domination",
    "name": "Fel Domination",
    "icon": "spell_nature_removecurse",
    "maxPoints": 2,
    "row": 1,
    "col": 1,
    "requires": {
      "id": "imp_imp",
      "points": 3
    },
    "desc": [
      "Reduces the casting time of your Summon Imp, Voidwalker, Succubus, and Felhunter spells by 2.5 seconds and reduces their mana cost by 25%.",
      "5.0 seconds / 50%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Fel Domination.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "imp_voidwalker",
    "name": "Improved Voidwalker",
    "icon": "spell_shadow_summonvoidwalker",
    "maxPoints": 3,
    "row": 1,
    "col": 2,
    "desc": [
      "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 10%.",
      "20%",
      "30%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Improved Voidwalker.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "demonic_intellect",
    "name": "Demonic Intellect",
    "icon": "spell_holy_magicalsentry",
    "maxPoints": 3,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases your total Intellect and your summoned demon's total Intellect by 3%.",
      "6%",
      "10%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Demonic Intellect between auto-attacks.",
      "Creates a devastating synergy when you weave Demonic Intellect between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "unholy_power",
    "name": "Unholy Power",
    "icon": "spell_shadow_shadowworddominate",
    "maxPoints": 2,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases the damage done by your Voidwalker, Succubus, Felhunter, and Felguard's melee attacks by 10%.",
      "20%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Unholy Power.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "soul_link",
    "name": "Soul Link",
    "icon": "spell_shadow_gathershadows",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "requires": {
      "id": "fel_domination",
      "points": 2
    },
    "desc": [
      "When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, or Felhunter demon instead. In addition, both the demon and master will inflict 3% more damage."
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Soul Link.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Soul Link critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "master_demonologist",
    "name": "Master Demonologist",
    "icon": "spell_shadow_shadowpact",
    "maxPoints": 5,
    "row": 2,
    "col": 2,
    "desc": [
      "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\nImp - Reduces threat caused by 4%.\nVoidwalker - Reduces physical damage taken by 2%.\nSuccubus - Increases all damage caused by 2%.\nFelhunter - Increases all resistances by 0.2 per level.\nFelguard - Increases all damage caused by 1% and reduces all damage taken by 1%.",
      "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\nImp - Reduces threat caused by 8%.\nVoidwalker - Reduces physical damage taken by 4%.\nSuccubus - Increases all damage caused by 4%.\nFelhunter - Increases all resistances by 0.4 per level.\nFelguard - Increases all damage caused by 2% and reduces all damage taken by 2%.",
      "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\nImp - Reduces threat caused by 12%.\nVoidwalker - Reduces physical damage taken by 6%.\nSuccubus - Increases all damage caused by 6%.\nFelhunter - Increases all resistances by 0.6 per level.\nFelguard - Increases all damage caused by 3% and reduces all damage taken by 3%.",
      "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\nImp - Reduces threat caused by 16%.\nVoidwalker - Reduces physical damage taken by 8%.\nSuccubus - Increases all damage caused by 8%.\nFelhunter - Increases all resistances by 0.8 per level.\nFelguard - Increases all damage caused by 4% and reduces all damage taken by 4%.",
      "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\nImp - Reduces threat caused by 20%.\nVoidwalker - Reduces physical damage taken by 10%.\nSuccubus - Increases all damage caused by 10%.\nFelhunter - Increases all resistances by 1 per level.\nFelguard - Increases all damage caused by 5% and reduces all damage taken by 5%."
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Master Demonologist critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "demonic_aegis",
    "name": "Demonic Aegis",
    "icon": "spell_shadow_ragingscream",
    "maxPoints": 3,
    "row": 3,
    "col": 0,
    "desc": [
      "Increases the effectiveness of your Demon Armor and Fel Armor spells by 10%.",
      "20%",
      "30%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Demonic Aegis critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "fel_synergy",
    "name": "Fel Synergy",
    "icon": "spell_shadow_felmending",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "You have a 50% chance to heal your pet for 15% of the amount of spell damage done by you.",
      "100%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Fel Synergy.",
    "devCommentary": "Initially, Fel Synergy was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "nemesis",
    "name": "Nemesis",
    "icon": "spell_shadow_blackplague",
    "maxPoints": 2,
    "row": 3,
    "col": 3,
    "desc": [
      "Reduces the cooldown of your Demonic Sacrifice and Fel Domination spells by 15% and increases your summoned demon's Stamina and Intellect by 5%.",
      "30% / 10%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Nemesis critically hits.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "A spectral projection of Gul'dan briefly mirrors your attack."
  },
  {
    "id": "mana_feed",
    "name": "Mana Feed",
    "icon": "spell_shadow_manafeed",
    "maxPoints": 2,
    "row": 4,
    "col": 0,
    "desc": [
      "When you gain mana from Drain Mana or Life Tap, your pet gains 50% of the mana you gain.",
      "100%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Mana Feed was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Mana Feed was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "demonic_sacrifice",
    "name": "Demonic Sacrifice",
    "icon": "spell_shadow_psychicscream",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "soul_link",
      "points": 1
    },
    "desc": [
      "When activated, sacrifices your summoned demon to grant you an effect that lasts 30 minutes. The effect is canceled if any Demon is summoned."
    ],
    "statScaling": "Coefficient scales with both spell damage and void mastery.",
    "loreOrigins": "Passed down by Gul'dan, this mastery of Demonic Sacrifice represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your demonic cooldowns.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Demonic Sacrifice.",
    "devCommentary": "Initially, Demonic Sacrifice was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "demonic_knowledge",
    "name": "Demonic Knowledge",
    "icon": "spell_shadow_requiem",
    "maxPoints": 3,
    "row": 4,
    "col": 2,
    "desc": [
      "Increases your spell damage by an amount equal to 5% of your active demon's total Stamina plus Intellect.",
      "10%",
      "15%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Demonic Knowledge was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "A spectral projection of Gul'dan briefly mirrors your attack."
  },
  {
    "id": "demonic_resilience",
    "name": "Demonic Resilience",
    "icon": "spell_shadow_demonbreath",
    "maxPoints": 3,
    "row": 4,
    "col": 3,
    "desc": [
      "Reduces all damage taken by you and your pet by 1%.",
      "2%",
      "3%"
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Demonic Resilience.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Demonic Resilience critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "master_conjuror",
    "name": "Master Conjuror",
    "icon": "inv_misc_gem_bloodstone_02",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Increases the combat effects of your Firestones and Spellstones by 15%.",
      "30%",
      "45%"
    ],
    "statScaling": "Coefficient scales with both spell damage and void mastery.",
    "loreOrigins": "Passed down by Gul'dan, this mastery of Master Conjuror represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Creates a devastating synergy when you weave Master Conjuror between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Master Conjuror.",
    "devCommentary": "Initially, Master Conjuror was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "demonic_tactics",
    "name": "Demonic Tactics",
    "icon": "spell_shadow_demonictactics",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases melee and spell critical strike chance for you and your summoned demon by 2%.",
      "4%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Demonic Tactics.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "demonic_pact",
    "name": "Demonic Pact",
    "icon": "spell_shadow_demonicpact",
    "maxPoints": 3,
    "row": 5,
    "col": 3,
    "requires": {
      "id": "demonic_tactics",
      "points": 2
    },
    "desc": [
      "Your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 4% of your Spell Damage for 45 sec.",
      "Your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 7% of your Spell Damage for 45 sec.",
      "Your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 10% of your Spell Damage for 45 sec."
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Demonic Pact between auto-attacks.",
      "Creates a devastating synergy when you weave Demonic Pact between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "summon_felguard",
    "name": "Summon Felguard",
    "icon": "spell_shadow_summonfelguard",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "demonic_sacrifice",
      "points": 1
    },
    "desc": [
      "Summons a Felguard under the command of the Warlock. The Felguard can Cleave, Intercept, and acts as a premier physical bruiser."
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Summon Felguard.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Demo PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Summon Felguard critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  }
];

export const WARLOCK_DESTRO_TALENTS: any = [
  {
    "id": "bane",
    "name": "Bane",
    "icon": "spell_shadow_deathpact",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Reduces the casting time of your Immolate and Shadow Bolt spells by 0.2 seconds.",
      "0.5 seconds."
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Bane between auto-attacks.",
      "Creates a devastating synergy when you weave Bane between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "imp_shadow_bolt",
    "name": "Improved Shadow Bolt",
    "icon": "spell_shadow_shadowbolt",
    "maxPoints": 5,
    "row": 0,
    "col": 1,
    "desc": [
      "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 4% until 4 non-periodic damage sources are applied.",
      "8%",
      "12%",
      "16%",
      "20%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Improved Shadow Bolt between auto-attacks.",
      "Creates a devastating synergy when you weave Improved Shadow Bolt between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "cataclysm",
    "name": "Cataclysm",
    "icon": "spell_fire_windsofwoe",
    "maxPoints": 3,
    "row": 0,
    "col": 2,
    "desc": [
      "Reduces the Mana cost of your Destruction spells by 3%.",
      "6%",
      "10%"
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Cataclysm.",
    "synergies": [
      "Creates a devastating synergy when you weave Cataclysm between auto-attacks.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "A spectral projection of Gul'dan briefly mirrors your attack."
  },
  {
    "id": "intensity",
    "name": "Intensity",
    "icon": "spell_fire_lavaspawn",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Gives you a 33% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
      "66%",
      "100%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Intensity critically hits.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "devastation",
    "name": "Devastation",
    "icon": "spell_fire_flameshock",
    "maxPoints": 5,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases the critical strike chance of your Destruction spells by 1%.",
      "2%",
      "3%",
      "4%",
      "5%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Devastation.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "aftermath",
    "name": "Aftermath",
    "icon": "spell_fire_fire",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Gives your Destruction spells a 5% chance to daze the target for 5 seconds.",
      "10%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Aftermath was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "destructive_reach",
    "name": "Destructive Reach",
    "icon": "spell_shadow_corpseexplode",
    "maxPoints": 2,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases the range of your Destruction spells by 10% and reduces threat caused by Destruction spells by 10%.",
      "20% / 20%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Destructive Reach was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your demonic cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum void output."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "Initially, Destructive Reach was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "shadowburn",
    "name": "Shadowburn",
    "icon": "spell_shadow_scourgebuild",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "requires": {
      "id": "devastation",
      "points": 5
    },
    "desc": [
      "Instantly blasts the target for X Shadow damage. Requires 1 Soul Shard. If the target dies within 5 seconds, the Soul Shard is refunded."
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary demonic stats.",
    "loreOrigins": "A forbidden demonic art that utilizes void to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Shadowburn between auto-attacks.",
      "Creates a devastating synergy when you weave Shadowburn between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary void effect.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "A spectral projection of Gul'dan briefly mirrors your attack."
  },
  {
    "id": "imp_immolate",
    "name": "Improved Immolate",
    "icon": "spell_fire_immolation",
    "maxPoints": 5,
    "row": 2,
    "col": 2,
    "desc": [
      "Increases the initial damage of your Immolate spell by 5%.",
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Improved Immolate was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Improved Immolate was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "pyroclasm",
    "name": "Pyroclasm",
    "icon": "spell_fire_volcano",
    "maxPoints": 3,
    "row": 3,
    "col": 0,
    "desc": [
      "Gives your Rain of Fire, Hellfire, and Soul Fire spells an 8% chance to stun the target for 3 seconds.",
      "16%",
      "26%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Pyroclasm critically hits.",
    "devCommentary": "Designed to smooth out the rotation of demonic specs in long encounters.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "fire_and_brimstone",
    "name": "Fire and Brimstone",
    "icon": "spell_fire_soulburn",
    "maxPoints": 5,
    "row": 3,
    "col": 1,
    "desc": [
      "Increases the damage of your Incinerate and Soul Fire spells by 2% on targets afflicted by Immolate.",
      "4%",
      "6%",
      "8%",
      "10%"
    ],
    "statScaling": "Coefficient scales with both spell damage and void mastery.",
    "loreOrigins": "Passed down by Gul'dan, this mastery of Fire and Brimstone represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any demonic oriented build.",
      "Creates a devastating synergy when you weave Fire and Brimstone between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Fire and Brimstone.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "nether_protection",
    "name": "Nether Protection",
    "icon": "spell_shadow_netherprotection",
    "maxPoints": 2,
    "row": 3,
    "col": 3,
    "desc": [
      "After being hit with a Shadow or Fire spell, you have a 10% chance to become immune to Shadow and Fire damage for 4 seconds.",
      "20%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Nether Protection was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "backlash",
    "name": "Backlash",
    "icon": "spell_fire_playingwithfire",
    "maxPoints": 3,
    "row": 4,
    "col": 0,
    "desc": [
      "Increases your critical strike chance with spells by 1% and gives you an 8% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%.",
      "2% / 16%",
      "3% / 25%"
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Backlash.",
    "synergies": [
      "Creates a devastating synergy when you weave Backlash between auto-attacks.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Backlash was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "The ground shatters as demonic power courses through you."
  },
  {
    "id": "imp_firestone",
    "name": "Improved Firestone",
    "icon": "inv_ammo_firetar",
    "maxPoints": 2,
    "row": 4,
    "col": 1,
    "desc": [
      "Increases the bonus Fire damage from Firestones and the Firestone effect by 15%.",
      "30%"
    ],
    "statScaling": "Scales directly with your total void power rating.",
    "loreOrigins": "Originally devised in the Shadow Council, the technique of Improved Firestone was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Dramatically increases the power spike of your demonic cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Improved Firestone was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "conflagrate",
    "name": "Conflagrate",
    "icon": "spell_fire_fireball",
    "maxPoints": 1,
    "row": 4,
    "col": 2,
    "requires": {
      "id": "imp_immolate",
      "points": 5
    },
    "desc": [
      "Consumes an Immolate or Shadowflame effect on the enemy target to instantly deal damage equal to 60% of your Immolate, and causes an additional 40% damage over 6 seconds. 10 second cooldown."
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other corrupt abilities.",
      "Provides unmatched utility when combined with other corrupt abilities."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Conflagrate critically hits.",
    "devCommentary": "Initially, Conflagrate was too weak, so we gave it massive demonic scaling.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  },
  {
    "id": "soul_leech",
    "name": "Soul Leech",
    "icon": "spell_shadow_soulleech_3",
    "maxPoints": 2,
    "row": 5,
    "col": 0,
    "desc": [
      "Your Shadow Bolt, Shadowburn, and Conflagrate critical strikes have a 50% chance to return health equal to 20% of the damage dealt.",
      "100%"
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Soul Leech.",
    "synergies": [
      "Creates a devastating synergy when you weave Soul Leech between auto-attacks.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Soul Leech to define the Destro playstyle at all levels.",
    "visualEffect": "A massive burst of void erupts from the target upon impact."
  },
  {
    "id": "shadow_and_flame",
    "name": "Shadow and Flame",
    "icon": "spell_shadow_siphonmana",
    "maxPoints": 5,
    "row": 5,
    "col": 1,
    "desc": [
      "Your Shadow Bolt and Incinerate spells gain an additional 4% of your bonus spell damage effects, AND increases the critical strike damage bonus of your Destruction spells by 20%.",
      "8% / 40%",
      "12% / 60%",
      "16% / 80%",
      "20% / 100%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as demonic power.",
    "loreOrigins": "An instinctual manifestation of void, allowing you to corrupt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum void output.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with demonic energy upon casting Shadow and Flame.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "bane_of_havoc",
    "name": "Bane of Havoc",
    "icon": "spell_shadow_deathpact",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Your critical strikes have a 50% chance to copy 15% of the damage to a secondary target.",
      "100%"
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Bane of Havoc.",
    "synergies": [
      "Creates a devastating synergy when you weave Bane of Havoc between auto-attacks.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward void ability.",
    "visualEffect": "Leaves a lingering trail of void in your wake."
  },
  {
    "id": "shadowfury",
    "name": "Shadowfury",
    "icon": "spell_shadow_shadowfury",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "shadow_and_flame",
      "points": 5
    },
    "desc": [
      "Shadowfury is unleashed, causing X Shadow damage to all enemies within 8 yards, and stunning them for 3 seconds. 20 second cooldown."
    ],
    "statScaling": "Provides flat scaling independent of your void rating.",
    "loreOrigins": "A lost secret of the Shadow Council that weaponizes the pure essence of Shadowfury.",
    "synergies": [
      "Creates a devastating synergy when you weave Shadowfury between auto-attacks.",
      "Acts as a foundational pillar for any demonic oriented build."
    ],
    "recommendedBuilds": [
      "Deep Destro PvE",
      "Hybrid demonic PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in demonic energy."
  }
];

export const CHANGELOG: string[] = [
  "General Changes",
  "Design Philosophy: Warlock trees have been rigorously structured, giving each specialization a clear thematic identity and a capstone capable of altering their playstyle.",
  "Amplify Curse: This ability has been made baseline for all Warlocks.",
  "Curse of Exhaustion: This curse has been made baseline for all Warlocks.",
  "Affliction",
  "Identity: The master of agonizing rot and self-healing. Plays heavily around maximizing drain effects and multi-target decay.",
  "Core Foundation: Improved Corruption, Suppression, Improved Life Tap grouped in Tier 1.",
  "Cross-Pollination: Nightfall, Fel Concentration, Grim Reach, Soul Siphon organized in Tier 2.",
  "Siphon Life: Positioned as the 11-point anchor, defining the drain-tanking theme.",
  "Output: Empowered Corruption, Shadow Embrace organized in Tier 3.",
  "Scaling: Shadow Mastery, Master of Curses fill out Tier 4.",
  "Dark Pact: Positioned as the 21-point anchor.",
  "The Active Engine: Contagion, Eradication organized in Tier 5.",
  "Sustain & Mastery: Pandemic, Malediction organized in Tier 6.",
  "Unstable Affliction: Added as the 31-point capstone.",
  "Demonology",
  "Identity: A master summoner who synergizes with their demonic pets, leveraging heavy stamina, spell power sharing, and profound physical mitigation.",
  "Core Foundation: Demonic Embrace, Improved Imp, Improved Healthstone grouped in Tier 1.",
  "Cross-Pollination: Fel Domination, Health Funnel, Improved Voidwalker, Demonic Intellect organized in Tier 2.",
  "Soul Link: Moved aggressively down to the 11-point anchor, defining the spec early.",
  "Output: Unholy Power, Master Demonologist organized in Tier 3.",
  "Defenses: Demonic Aegis, Fel Synergy organized in Tier 4.",
  "Demonic Sacrifice: Positioned as the 21-point anchor.",
  "The Active Engine: Demonic Knowledge, Mana Feed organized in Tier 5.",
  "Sustain & Mastery: Master Conjuror, Demonic Tactics, Demonic Pact organized in Tier 6.",
  "Summon Felguard: Added as the 31-point capstone.",
  "Destruction",
  "Identity: A chaotic, explosive spellcaster specializing in rapid immolation, heavy critical strikes, and devastating fire stuns.",
  "Core Foundation: Improved Shadow Bolt, Cataclysm, Bane grouped in Tier 1.",
  "Cross-Pollination: Devastation, Intensity, Aftermath organized in Tier 2.",
  "Shadowburn: Positioned as the 11-point anchor.",
  "Output: Improved Immolate, Destructive Reach organized in Tier 3.",
  "Defenses: Pyroclasm, Nether Protection organized in Tier 4.",
  "Conflagrate: Positioned as the 21-point anchor.",
  "The Active Engine: Backlash, Improved Firestone organized in Tier 5.",
  "Sustain & Mastery: Soul Leech, Shadow and Flame (Including Ruin) organized in Tier 6.",
  "Shadowfury: Added as the 31-point capstone."
];
