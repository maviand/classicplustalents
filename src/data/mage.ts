import { Talent } from '../types/talents';

export const MAGE_ARCANE_TALENTS: any = [
  {
    "id": "arcane_concentration",
    "name": "Arcane Concentration",
    "icon": "spell_shadow_manaburn",
    "maxPoints": 3,
    "row": 0,
    "col": 0,
    "desc": [
      "Gives you a 3% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
      "6%",
      "10%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Arcane Concentration.",
    "synergies": [
      "Creates a devastating synergy when you weave Arcane Concentration between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "arcane_focus",
    "name": "Arcane Focus",
    "icon": "spell_holy_devotion",
    "maxPoints": 5,
    "row": 0,
    "col": 1,
    "desc": [
      "Reduces the chance the opponent can resist your Arcane spells by 2%, and increases your chance to hit with Arcane spells by 1%.",
      "4% / 2%",
      "6% / 3%",
      "8% / 4%",
      "10% / 5%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Arcane Focus critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "arcane_subtlety",
    "name": "Arcane Subtlety",
    "icon": "spell_holy_dispelmagic",
    "maxPoints": 2,
    "row": 0,
    "col": 2,
    "desc": [
      "Reduces your target's spell resistance to all your spells by 5, and reduces the threat caused by your Arcane spells by 20%.",
      "10 / 40%"
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Arcane Subtlety was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Arcane Subtlety to define the Arcane playstyle at all levels.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "arcane_meditation",
    "name": "Arcane Meditation",
    "icon": "spell_shadow_siphonmana",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Allows 10% of your Mana regeneration to continue while casting.",
      "20%",
      "30%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum arcane output.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Arcane Meditation.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "wand_spec",
    "name": "Wand Specialization",
    "icon": "inv_wand_01",
    "maxPoints": 2,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases your damage with Wands by 13%.",
      "25%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Wand Specialization represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Creates a devastating synergy when you weave Wand Specialization between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Wand Specialization.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "magic_absorption",
    "name": "Magic Absorption",
    "icon": "spell_nature_astralrecal",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Increases all resistances by 5 and causes all spells you fully resist to restore 2% of your total mana.",
      "10 / 4%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum arcane output.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Magic Absorption.",
    "devCommentary": "Initially, Magic Absorption was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "imp_arcane_missiles",
    "name": "Improved Arcane Missiles",
    "icon": "spell_nature_starfall",
    "maxPoints": 3,
    "row": 1,
    "col": 3,
    "desc": [
      "Gives you a 33% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
      "66%",
      "100%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Improved Arcane Missiles critically hits.",
    "devCommentary": "Initially, Improved Arcane Missiles was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "presence_of_mind",
    "name": "Presence of Mind",
    "icon": "spell_nature_enchantarmor",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "When activated, your next Mage spell with a casting time less than 10 seconds becomes an instant cast spell. 3 minute cooldown."
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Presence of Mind was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Presence of Mind was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "arcane_impact",
    "name": "Arcane Impact",
    "icon": "spell_nature_wispsplode",
    "maxPoints": 3,
    "row": 2,
    "col": 2,
    "desc": [
      "Increases the critical strike chance of your Arcane Explosion and Arcane Missiles spells by 2%.",
      "4%",
      "6%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Arcane Impact.",
    "synergies": [
      "Creates a devastating synergy when you weave Arcane Impact between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "imp_counterspell",
    "name": "Improved Counterspell",
    "icon": "spell_frost_iceshock",
    "maxPoints": 2,
    "row": 2,
    "col": 0,
    "desc": [
      "Gives your Counterspell a 50% chance to silence the target for 4 seconds.",
      "100%"
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Improved Counterspell was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "arcane_flow",
    "name": "Arcane Flow",
    "icon": "spell_holy_mindvision",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Reduces the cooldown of your Presence of Mind and Evocation spells by 15%.",
      "30%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Arcane Flow represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Arcane Flow.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "arcane_mind",
    "name": "Arcane Mind",
    "icon": "spell_shadow_charm",
    "maxPoints": 5,
    "row": 3,
    "col": 1,
    "requires": {
      "id": "presence_of_mind",
      "points": 1
    },
    "desc": [
      "Increases your maximum Mana by 2%.",
      "4%",
      "6%",
      "8%",
      "10%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Arcane Mind critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "arcane_resilience",
    "name": "Arcane Resilience",
    "icon": "spell_arcane_arcaneresilience",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Increases your armor by an amount equal to 25% of your Intellect, and reduces the mana cost of your Mana Shield, Frost Ward, and Fire Ward by 25%.",
      "50% / 50%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum arcane output.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Arcane Resilience.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "arcane_blast",
    "name": "Arcane Blast",
    "icon": "spell_arcane_blast",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "arcane_mind",
      "points": 5
    },
    "desc": [
      "Blasts the target with energy, dealing X Arcane damage. Each time you cast Arcane Blast, the damage of your Arcane spells is increased by 15% and the mana cost of your Arcane Blast is increased by 175%. Effect stacks up to 3 times and lasts 8 seconds. Casting Arcane Missiles or Arcane Explosion consumes this effect."
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Arcane Blast represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Creates a devastating synergy when you weave Arcane Blast between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Arcane Blast.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "arcane_instability",
    "name": "Arcane Instability",
    "icon": "spell_shadow_teleport",
    "maxPoints": 3,
    "row": 4,
    "col": 2,
    "requires": {
      "id": "arcane_resilience",
      "points": 2
    },
    "desc": [
      "Increases your spell damage and critical strike chance by 1%.",
      "2%",
      "3%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Arcane Instability critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "prismatic_cloak",
    "name": "Prismatic Cloak",
    "icon": "spell_arcane_prismaticcloak",
    "maxPoints": 2,
    "row": 4,
    "col": 0,
    "desc": [
      "Reduces all damage taken by 2% and reduces the casting time lost when taking damage by 25%.",
      "4% / 50%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Prismatic Cloak represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Prismatic Cloak.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "netherwind_presence",
    "name": "Netherwind Presence",
    "icon": "spell_nature_windfury",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Increases your spell haste by 2%.",
      "4%",
      "6%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Netherwind Presence.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum arcane output."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Netherwind Presence critically hits.",
    "devCommentary": "Initially, Netherwind Presence was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "mind_mastery",
    "name": "Mind Mastery",
    "icon": "spell_holy_magicalsentry",
    "maxPoints": 3,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "arcane_blast",
      "points": 1
    },
    "desc": [
      "Increases your spell damage by an amount equal to 10% of your total Intellect.",
      "20%",
      "30%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Mind Mastery represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Mind Mastery.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "arcane_potency",
    "name": "Arcane Potency",
    "icon": "spell_arcane_arcanepotency",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "requires": {
      "id": "arcane_instability",
      "points": 3
    },
    "desc": [
      "Increases the critical strike chance of your next spell by 15% when you gain Clearcasting.",
      "30%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Arcane Potency.",
    "synergies": [
      "Creates a devastating synergy when you weave Arcane Potency between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Arcane Potency to define the Arcane playstyle at all levels.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "arcane_power",
    "name": "Arcane Power",
    "icon": "spell_nature_lightning",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "mind_mastery",
      "points": 3
    },
    "desc": [
      "When activated, you radiate Arcane Power for 15 seconds. You and all party members within 30 yards deal 15% increased spell damage. During this time, 50% of the mana you spend is evenly distributed to affected party members. 3 minute cooldown."
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum arcane output.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Arcane PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Arcane Power.",
    "devCommentary": "We wanted Arcane Power to define the Arcane playstyle at all levels.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  }
];

export const MAGE_FIRE_TALENTS: any = [
  {
    "id": "ignite",
    "name": "Ignite",
    "icon": "spell_fire_incinerate",
    "maxPoints": 3,
    "row": 0,
    "col": 0,
    "desc": [
      "Your critical strikes from Fire damage spells burn the target for an additional 13% of your spell's damage over 4 seconds.",
      "26%",
      "40%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Ignite represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Creates a devastating synergy when you weave Ignite between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Ignite.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "imp_fireball",
    "name": "Improved Fireball",
    "icon": "spell_fire_flamebolt",
    "maxPoints": 5,
    "row": 0,
    "col": 1,
    "desc": [
      "Reduces the casting time of your Fireball spell by 0.1 seconds.",
      "0.2 seconds",
      "0.3 seconds",
      "0.4 seconds",
      "0.5 seconds"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Improved Fireball represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Creates a devastating synergy when you weave Improved Fireball between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Improved Fireball.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "flame_throwing",
    "name": "Flame Throwing",
    "icon": "spell_fire_flare",
    "maxPoints": 2,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases the range of your Fire spells by 3 yards.",
      "6 yards"
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Flame Throwing was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum arcane output."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary arcane effect.",
    "devCommentary": "Initially, Flame Throwing was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "impact",
    "name": "Impact",
    "icon": "spell_fire_meteorstorm",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Gives your Fire spells a 3% chance to stun the target for 2 seconds.",
      "6%",
      "10%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum arcane output.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Impact.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "incineration",
    "name": "Incineration",
    "icon": "spell_fire_volcano",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases the critical strike chance of your Fire Blast and Scorch spells by 2%.",
      "4%",
      "6%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Incineration represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Incineration.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "burning_soul",
    "name": "Burning Soul",
    "icon": "spell_fire_fire",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Gives your Fire spells a 35% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 15%.",
      "70% / 30%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Burning Soul.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum arcane output."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Burning Soul critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "imp_fire_blast",
    "name": "Improved Fire Blast",
    "icon": "spell_fire_fireball",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Reduces the cooldown of your Fire Blast spell by 1 second.",
      "2 seconds"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Improved Fire Blast represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Creates a devastating synergy when you weave Improved Fire Blast between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Improved Fire Blast.",
    "devCommentary": "Initially, Improved Fire Blast was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "combustion",
    "name": "Combustion",
    "icon": "spell_fire_sealoffire",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "requires": {
      "id": "incineration",
      "points": 3
    },
    "desc": [
      "Each of your Fire damage spell hits increases your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 3 critical strikes with Fire spells. 3 minute cooldown."
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Combustion between auto-attacks.",
      "Creates a devastating synergy when you weave Combustion between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary arcane effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "master_of_elements",
    "name": "Master of Elements",
    "icon": "spell_fire_masterofelements",
    "maxPoints": 3,
    "row": 2,
    "col": 2,
    "desc": [
      "Your Fire and Frost spell critical strikes will refund 10% of their base mana cost.",
      "20%",
      "30%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Master of Elements.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum arcane output."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Master of Elements critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "critical_mass",
    "name": "Critical Mass",
    "icon": "spell_nature_wispheal",
    "maxPoints": 3,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases the critical strike chance of your Fire spells by 2%.",
      "4%",
      "6%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Critical Mass between auto-attacks.",
      "Creates a devastating synergy when you weave Critical Mass between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary arcane effect.",
    "devCommentary": "We wanted Critical Mass to define the Fire playstyle at all levels.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "pyromaniac",
    "name": "Pyromaniac",
    "icon": "spell_fire_burnout",
    "maxPoints": 3,
    "row": 3,
    "col": 0,
    "desc": [
      "Increases your spell critical strike chance by 1% and reduces the mana cost of all Fire spells by 1%.",
      "2% / 2%",
      "3% / 3%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Pyromaniac.",
    "synergies": [
      "Creates a devastating synergy when you weave Pyromaniac between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "fire_power",
    "name": "Fire Power",
    "icon": "spell_fire_immolation",
    "maxPoints": 3,
    "row": 3,
    "col": 1,
    "requires": {
      "id": "combustion",
      "points": 1
    },
    "desc": [
      "Increases the damage done by your Fire spells by 3%.",
      "6%",
      "10%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Fire Power between auto-attacks.",
      "Creates a devastating synergy when you weave Fire Power between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary arcane effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "imp_scorch",
    "name": "Improved Scorch",
    "icon": "spell_fire_soulburn",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "requires": {
      "id": "master_of_elements",
      "points": 3
    },
    "desc": [
      "Your Scorch spells have a 50% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 seconds. Stacks up to 5 times.",
      "100%"
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Improved Scorch was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Improved Scorch to define the Fire playstyle at all levels.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "blast_wave",
    "name": "Blast Wave",
    "icon": "spell_holy_excorcism_02",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "fire_power",
      "points": 3
    },
    "desc": [
      "A wave of flame radiates outward from the caster, dealing Fire damage to all enemies caught within and dazing them, reducing movement speed by 50% for 6 seconds."
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Blast Wave.",
    "synergies": [
      "Creates a devastating synergy when you weave Blast Wave between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Blast Wave to define the Fire playstyle at all levels.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "playing_with_fire",
    "name": "Playing with Fire",
    "icon": "spell_fire_playingwithfire",
    "maxPoints": 3,
    "row": 4,
    "col": 2,
    "desc": [
      "Increases all spell damage caused by 1% and increases all spell damage taken by 1%.",
      "2% / 2%",
      "3% / 3%"
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Playing with Fire was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum arcane output."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary arcane effect.",
    "devCommentary": "We wanted Playing with Fire to define the Fire playstyle at all levels.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "blazing_speed",
    "name": "Blazing Speed",
    "icon": "spell_fire_burnout",
    "maxPoints": 2,
    "row": 4,
    "col": 0,
    "desc": [
      "Gives you a 5% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects. Lasts 8 seconds.",
      "10%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Blazing Speed critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "empowered_fire",
    "name": "Empowered Fire",
    "icon": "spell_fire_flamebolt",
    "maxPoints": 3,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "blast_wave",
      "points": 1
    },
    "desc": [
      "Increases the damage of your Fireball and Pyroblast spells by an amount equal to 5% of your bonus spell damage.",
      "10%",
      "15%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Empowered Fire represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Creates a devastating synergy when you weave Empowered Fire between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Empowered Fire.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "fiery_payback",
    "name": "Fiery Payback",
    "icon": "spell_fire_masterofelements",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "When your health drops below 35%, all damage taken is reduced by 10% and the cast time of your Pyroblast spell is reduced by 1.75 seconds.",
      "20% / 3.5 seconds"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Fiery Payback represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Fiery Payback.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "hot_streak",
    "name": "Hot Streak",
    "icon": "ability_mage_hotstreak",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Any time you score 2 spell critical strikes in a row with your Fireball, Fire Blast, Scorch, or Pyroblast spells, you have a 33% chance to cause your next Pyroblast spell cast within 10 sec to be instant cast.",
      "66%",
      "100%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum arcane output.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Hot Streak.",
    "devCommentary": "We wanted Hot Streak to define the Fire playstyle at all levels.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "living_bomb",
    "name": "Living Bomb",
    "icon": "ability_mage_livingbomb",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "empowered_fire",
      "points": 3
    },
    "desc": [
      "The target becomes a Living Bomb, taking Fire damage over 12 seconds. After 12 seconds or when the spell is dispelled, the target explodes dealing Fire damage to all enemies within 10 yards."
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Living Bomb represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Fire PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Living Bomb.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  }
];

export const MAGE_FROST_TALENTS: any = [
  {
    "id": "permafrost",
    "name": "Permafrost",
    "icon": "spell_frost_wisp",
    "maxPoints": 3,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases the duration of your Chill effects by 1 second, and reduces the target's speed by an additional 4%.",
      "2 seconds / 7%",
      "3 seconds / 10%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Permafrost.",
    "synergies": [
      "Creates a devastating synergy when you weave Permafrost between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "imp_frostbolt",
    "name": "Improved Frostbolt",
    "icon": "spell_frost_frostbolt02",
    "maxPoints": 5,
    "row": 0,
    "col": 1,
    "desc": [
      "Reduces the casting time of your Frostbolt spell by 0.1 seconds.",
      "0.2 seconds",
      "0.3 seconds",
      "0.4 seconds",
      "0.5 seconds"
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Improved Frostbolt was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Improved Frostbolt was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "ice_floes",
    "name": "Ice Floes",
    "icon": "spell_frost_icefloes",
    "maxPoints": 2,
    "row": 0,
    "col": 2,
    "desc": [
      "Reduces the cooldown of your Frost Nova, Cone of Cold, and Ice Block spells by 10%.",
      "20%"
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Ice Floes was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum arcane output."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary arcane effect.",
    "devCommentary": "We wanted Ice Floes to define the Frost playstyle at all levels.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "shatter",
    "name": "Shatter",
    "icon": "spell_frost_frostshock",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Increases the critical strike chance of all your spells against frozen targets by 10%.",
      "20%",
      "30%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum arcane output.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Shatter.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "ice_shards",
    "name": "Ice Shards",
    "icon": "spell_frost_iceshard",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "requires": {
      "id": "imp_frostbolt",
      "points": 5
    },
    "desc": [
      "Increases the critical strike damage bonus of your Frost spells by 33%.",
      "66%",
      "100%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Ice Shards.",
    "synergies": [
      "Creates a devastating synergy when you weave Ice Shards between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Ice Shards to define the Frost playstyle at all levels.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "frostbite",
    "name": "Frostbite",
    "icon": "spell_frost_frostarmor",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Gives your Chill effects an 8% chance to freeze the target for 5 seconds.",
      "15%"
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Frostbite was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum arcane output."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary arcane effect.",
    "devCommentary": "Initially, Frostbite was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "piercing_ice",
    "name": "Piercing Ice",
    "icon": "spell_frost_frostbolt",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases the damage done by your Frost spells by 3%.",
      "6%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Piercing Ice.",
    "synergies": [
      "Creates a devastating synergy when you weave Piercing Ice between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "ice_block",
    "name": "Ice Block",
    "icon": "spell_frost_frost",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "requires": {
      "id": "ice_shards",
      "points": 3
    },
    "desc": [
      "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 seconds, but during that time you cannot attack, move, or cast spells. 5 minute cooldown."
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Ice Block was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "imp_blizzard",
    "name": "Improved Blizzard",
    "icon": "spell_frost_icestorm",
    "maxPoints": 3,
    "row": 2,
    "col": 2,
    "desc": [
      "Adds a chilling effect to your Blizzard spell. This effect lowers the target's movement speed by 30%. Lasts 1.5 seconds.",
      "50%",
      "70%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Improved Blizzard.",
    "synergies": [
      "Creates a devastating synergy when you weave Improved Blizzard between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "arctic_reach",
    "name": "Arctic Reach",
    "icon": "spell_shadow_darkritual",
    "maxPoints": 2,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
      "20%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum arcane output.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Arctic Reach.",
    "devCommentary": "Initially, Arctic Reach was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "Your character is temporarily wreathed in mystical energy."
  },
  {
    "id": "winters_chill",
    "name": "Winter's Chill",
    "icon": "spell_frost_chillingblast",
    "maxPoints": 3,
    "row": 3,
    "col": 2,
    "desc": [
      "Gives your Frost damage spells a 33% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 seconds. Stacks up to 5 times.",
      "66%",
      "100%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Winter's Chill.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum arcane output."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Winter's Chill critically hits.",
    "devCommentary": "Initially, Winter's Chill was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "arctic_winds",
    "name": "Arctic Winds",
    "icon": "spell_frost_windwalkon",
    "maxPoints": 3,
    "row": 3,
    "col": 3,
    "desc": [
      "Increases all Frost damage you deal by 1% and reduces the chance you will be hit by physical attacks by 1%.",
      "2% / 2%",
      "3% / 3%"
    ],
    "statScaling": "Provides flat scaling independent of your arcane rating.",
    "loreOrigins": "A lost secret of the Dalaran archives that weaponizes the pure essence of Arctic Winds.",
    "synergies": [
      "Creates a devastating synergy when you weave Arctic Winds between auto-attacks.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "A spectral projection of Antonidas briefly mirrors your attack."
  },
  {
    "id": "channeling_ice",
    "name": "Channeling Ice",
    "icon": "spell_frost_stun",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Reduces the mana cost of all Frost spells by 5% and reduces the threat generated by Frost spells by 10%.",
      "10% / 20%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Channeling Ice represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Creates a devastating synergy when you weave Channeling Ice between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Channeling Ice.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "ice_barrier",
    "name": "Ice Barrier",
    "icon": "spell_ice_lament",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "ice_block",
      "points": 1
    },
    "desc": [
      "Instantly shields you, absorbing X damage. Lasts 1 minute. While the shield holds, spells will not be interrupted. 30 second cooldown."
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary mystical stats.",
    "loreOrigins": "A forbidden mystical art that utilizes arcane to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Ice Barrier between auto-attacks.",
      "Creates a devastating synergy when you weave Ice Barrier between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary arcane effect.",
    "devCommentary": "Initially, Ice Barrier was too weak, so we gave it massive mystical scaling.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "shattered_barrier",
    "name": "Shattered Barrier",
    "icon": "spell_frost_wisp",
    "maxPoints": 2,
    "row": 4,
    "col": 2,
    "requires": {
      "id": "ice_barrier",
      "points": 1
    },
    "desc": [
      "When your Ice Barrier is destroyed or dispelled, it triggers a localized frost nova, freezing all enemies within 10 yards for 4 seconds.",
      "8 seconds"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum arcane output.",
      "Acts as a foundational pillar for any mystical oriented build."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Shattered Barrier.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "brain_freeze",
    "name": "Brain Freeze",
    "icon": "spell_frost_wizardmark",
    "maxPoints": 3,
    "row": 4,
    "col": 0,
    "desc": [
      "Your Frost damage spells with chilling effects have a 5% chance to cause your next Fireball or Arcane Missiles spell to be instant cast and cost no mana.",
      "10%",
      "15%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Brain Freeze represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any mystical oriented build.",
      "Creates a devastating synergy when you weave Brain Freeze between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with mystical energy upon casting Brain Freeze.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "enduring_winter",
    "name": "Enduring Winter",
    "icon": "spell_frost_summonwaterelemental",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Gives your Frostbolt critical strikes a 33% chance to restore 1% of maximum mana to 10 party or raid members. Effect lasts 15 sec.",
      "66%",
      "100%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Enduring Winter critically hits.",
    "devCommentary": "Designed to smooth out the rotation of mystical specs in long encounters.",
    "visualEffect": "The ground shatters as mystical power courses through you."
  },
  {
    "id": "empowered_frostbolt",
    "name": "Empowered Frostbolt",
    "icon": "spell_frost_frostbolt02",
    "maxPoints": 3,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "ice_barrier",
      "points": 1
    },
    "desc": [
      "Your Frostbolt spell gains an additional 5% of your bonus spell damage effects, and its critical strike chance is increased by 2%.",
      "10% / 4%",
      "15% / 6%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as mystical power.",
    "loreOrigins": "An instinctual manifestation of arcane, allowing you to incinerate your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Empowered Frostbolt critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "A massive burst of arcane erupts from the target upon impact."
  },
  {
    "id": "chilled_to_the_bone",
    "name": "Chilled to the Bone",
    "icon": "spell_frost_glacier",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases the damage caused by your Frostbolt and Cone of Cold spells by 3% and reduces the movement speed of all your chilled targets by an additional 5%.",
      "6% / 10%"
    ],
    "statScaling": "Coefficient scales with both spell damage and arcane mastery.",
    "loreOrigins": "Passed down by Antonidas, this mastery of Chilled to the Bone represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your mystical cooldowns.",
      "Provides unmatched utility when combined with other incinerate abilities."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Chilled to the Bone.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  },
  {
    "id": "summon_water_elemental",
    "name": "Summon Water Elemental",
    "icon": "spell_frost_summonwaterelemental",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "empowered_frostbolt",
      "points": 3
    },
    "desc": [
      "Summons a Water Elemental to fight for the caster for 45 seconds. The elemental casts Waterbolts and has the 'Water Elemental Freeze' ability, which acts as a ranged Frost Nova. 3 minute cooldown."
    ],
    "statScaling": "Scales directly with your total arcane power rating.",
    "loreOrigins": "Originally devised in the Dalaran archives, the technique of Summon Water Elemental was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other incinerate abilities.",
      "Dramatically increases the power spike of your mystical cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Frost PvE",
      "Hybrid mystical PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward arcane ability.",
    "visualEffect": "Leaves a lingering trail of arcane in your wake."
  }
];

export const CHANGELOG: string[] = [
  "General Changes",
  "Design Philosophy: Spec trees have been streamlined, giving each school distinct output triggers and defensive tools without massive point bloat.",
  "Evocation: This ability has been made baseline for all Mages.",
  "Arcane Brilliance: This buff has been made baseline for all Mages.",
  "Arcane",
  "Identity: A high-risk, mana-hungry glass cannon capable of extreme burst windows and high utility.",
  "Core Foundation: Arcane Subtlety, Arcane Focus, Improved Arcane Missiles grouped in Tier 1.",
  "Cross-Pollination: Wand Specialization, Magic Absorption, Arcane Concentration organized in Tier 2.",
  "Presence of Mind: Moved down to serve as the 11-point anchor.",
  "Output: Arcane Impact, Arcane Resilience, Improved Counterspell organized in Tier 3.",
  "Clearcasting: Arcane Meditation, Improved Mana Shield fill out Tier 4.",
  "Arcane Power: Positioned as the 21-point anchor.",
  "The Active Engine: Spell Power, Mind Mastery organized in Tier 5 for huge intellect scaling.",
  "Sustain & Burst: Arcane Potency, Prismatic Cloak organized in Tier 6.",
  "Arcane Barrage: Added as the 31-point capstone for instant mobility damage.",
  "Fire",
  "Identity: A rampant, crit-oriented pyromancer relying on DoT stacking and enormous explosive procs.",
  "Core Foundation: Improved Fireball, Impact, Ignite grouped in Tier 1.",
  "Cross-Pollination: Flame Throwing, Improved Fire Blast, Incineration organized in Tier 2.",
  "Pyroblast: Moved down to serve as the 11-point anchor.",
  "Output: Burning Soul, Master of Elements, Playing with Fire organized in Tier 3.",
  "Blast Wave: Positioned as the 21-point anchor.",
  "The Active Engine: Fire Power, Pyromaniac organized in Tier 5.",
  "Reaction: Combustion (now an active cooldown), Molten Fury organized in Tier 6.",
  "Dragon's Breath: Added as the 31-point capstone for heavy frontal burst control.",
  "Frost",
  "Identity: The absolute master of kiting, control, and shatter-combos, provided with a more reliable Water Elemental.",
  "Core Foundation: Frost Warding, Improved Frostbolt, Elemental Precision grouped in Tier 1.",
  "Cross-Pollination: Ice Shards, Frostbite, Improved Frost Nova organized in Tier 2.",
  "Cold Snap: Moved down to serve as the 11-point anchor.",
  "Output: Piercing Ice, Icy Veins, Blizzard Mastery organized in Tier 3.",
  "Shatter: Extracted and isolated in Tier 4 to guarantee its power is accessible.",
  "Ice Block: Positioned as the 21-point anchor.",
  "The Active Engine: Frost Channeling, Winter's Chill organized in Tier 5.",
  "Reaction: Brain Freeze, Empowered Frostbolt organized in Tier 6.",
  "Summon Water Elemental: Added as the 31-point capstone."
];
