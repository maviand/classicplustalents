import { Talent } from '../types/talents';

export const DRUID_BALANCE_TALENTS: any = [
  {
    "id": "sun_and_moon",
    "name": "Starfire Wrath",
    "icon": "ability_druid_eclipse",
    "maxPoints": 5,
    "row": 0,
    "col": 0,
    "desc": [
      "Reduces the cast time of your Wrath and Starfire spells by 0.1 sec.",
      "0.2",
      "0.3",
      "0.4",
      "0.5"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "natural_weapons",
    "name": "Natural Weapons",
    "icon": "inv_staff_01",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases the damage you deal with physical attacks in all forms by 3%.",
      "6%",
      "10%"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "natures_reach",
    "name": "Nature's Reach",
    "icon": "spell_nature_naturetouchgrow",
    "maxPoints": 2,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases the range of your Balance spells and Faerie Fire by 10%, and increases the radius of your Demoralizing Roar and challenging spells by 10%.",
      "20 / 20"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "control_of_nature",
    "name": "Control of Nature",
    "icon": "spell_nature_stranglevines",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Gives you a 40% chance to avoid interruption caused by damage while casting Entangling Roots.",
      "70",
      "100"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "imp_moonfire",
    "name": "Improved Moonfire",
    "icon": "spell_nature_starfall",
    "maxPoints": 2,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
      "10"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "brambleguard",
    "name": "Brambleguard",
    "icon": "spell_nature_thorns",
    "maxPoints": 3,
    "row": 1,
    "col": 2,
    "desc": [
      "Increases the damage caused by your Thorns by 25%. Targets striking you or your allies with Thorns active have a 10% chance to be afflicted by Nature's Grasp, rooting them in place for 3 seconds.",
      "50 / 20",
      "75 / 30"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "moonglow",
    "name": "Moonglow",
    "icon": "spell_nature_sentinal",
    "maxPoints": 3,
    "row": 2,
    "col": 0,
    "desc": [
      "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 3%, and your spell critical strikes regenerate mana equal to 15% of the spell's base cost.",
      "6 / 30",
      "9 / 45"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "conjure_moonwell",
    "name": "Conjure Moonwell",
    "icon": "spell_nature_wispsplode",
    "maxPoints": 1,
    "row": 2,
    "col": 2,
    "desc": [
      "Conjures a Moonwell at the caster's feet for 15 seconds. You and all party members standing within 10 yards of the Moonwell gain Elune's Blessing, which reduces the cast time of all spells by 0.5 seconds and restores 2% of maximum mana every 3 seconds. 3 minute cooldown."
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "imp_faerie_fire",
    "name": "Improved Faerie Fire",
    "icon": "spell_nature_faeriefire",
    "maxPoints": 3,
    "row": 2,
    "col": 3,
    "desc": [
      "Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by 1%.",
      "2%",
      "3%"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "gale_winds",
    "name": "Gale Winds",
    "icon": "ability_druid_galewinds",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Reduces pushback suffered from damaging attacks while casting Hurricane by 50%, and increases the damage of your Hurricane spell by 15%.",
      "100% / 30%"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "vengeance",
    "name": "Vengeance",
    "icon": "spell_nature_purge",
    "maxPoints": 5,
    "row": 3,
    "col": 1,
    "requires": {
      "id": "imp_moonfire",
      "points": 2
    },
    "desc": [
      "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 20%.",
      "40",
      "60",
      "80",
      "100"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "celestial_focus",
    "name": "Celestial Focus",
    "icon": "spell_arcane_starfire",
    "maxPoints": 3,
    "row": 3,
    "col": 2,
    "desc": [
      "Reduces the pushback suffered from damaging attacks while casting Wrath and Starfire by 25%. In addition, your Wrath critical strikes reduce the cast time of your next Starfire by 0.5 seconds.",
      "50 / 1.0",
      "75 / 1.5"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "dreamstate",
    "name": "Dreamstate",
    "icon": "ability_druid_dreamstate",
    "maxPoints": 3,
    "row": 4,
    "col": 0,
    "desc": [
      "Allows 5% of your mana regeneration to continue while casting, scaling based on your total Intellect.",
      "10%",
      "15%"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "moonkin_form",
    "name": "Moonkin Form",
    "icon": "spell_nature_forceofnature",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "desc": [
      "Transforms the Druid into Moonkin Form. Increases armor by 360% and grants all party members within 30 yards 3% Spell Critical strike chance. While in this form, your melee attacks regenerate 2% of your maximum mana, and 1% of your party's maximum mana. Cannot cast healing spells."
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "force_of_nature",
    "name": "Force of Nature",
    "icon": "ability_druid_forceofnature",
    "maxPoints": 1,
    "row": 4,
    "col": 2,
    "desc": [
      "Summons 3 Treants to assist you in combat for 30 seconds. The Treants deal Physical damage and each of their attacks has a 15% chance to reduce the target's resistance to Nature and Arcane spells by 10 (Stacks up to 3 times). 3 minute cooldown."
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "owlkin_frenzy",
    "name": "Owlkin Frenzy",
    "icon": "ability_druid_owlkinfrenzy",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Attacks done to you while in Moonkin form have a 5% chance to send you into a Frenzy, increasing your damage by 10% and making you immune to pushback while casting Balance spells. Lasts 10 sec.",
      "10%",
      "15%"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "moonfury",
    "name": "Moonfury",
    "icon": "spell_nature_moonglow",
    "maxPoints": 5,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "moonkin_form",
      "points": 1
    },
    "desc": [
      "Increases the damage done by your Starfire, Moonfire and Wrath spells by 2%.",
      "4",
      "6",
      "8",
      "10"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "lunar_guidance",
    "name": "Lunar Guidance",
    "icon": "ability_druid_lunarguidance",
    "maxPoints": 3,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases your spell damage and healing by an amount equal to 8% of your total Intellect.",
      "16%",
      "25%"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "starfall",
    "name": "Starfall",
    "icon": "ability_druid_starfall",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "moonfury",
      "points": 5
    },
    "desc": [
      "You summon a flurry of stars from the sky on all targets within 30 yards of the caster, each dealing Arcane damage. Lasts 10 sec. 3 min cooldown."
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Your form shifts with a phantom roar."
  }
];

export const DRUID_FERAL_TALENTS: any = [
  {
    "id": "ferocity",
    "name": "Ferocity",
    "icon": "ability_hunter_pet_hyena",
    "maxPoints": 5,
    "row": 0,
    "col": 0,
    "desc": [
      "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
      "2",
      "3",
      "4",
      "5"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "thick_hide",
    "name": "Thick Hide",
    "icon": "inv_misc_pelt_bear_03",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases your Armor contribution from items by 4%, and reduces the chance you will be critically hit by melee attacks by 2%.",
      "8 / 4",
      "12 / 6"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "feral_aggression",
    "name": "Feral Aggression",
    "icon": "ability_druid_demoralizingroar",
    "maxPoints": 2,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases the threat generated by your Bear Form abilities by 8%, and increases the damage caused by your Ferocious Bite by 8%.",
      "15 / 15"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "fluid_form",
    "name": "Fluid Form",
    "icon": "spell_nature_healingway",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "After shifting out of Dire Bear, Bear, or Cat form, the cast time of your next Nature or Arcane spell is reduced by 20%.",
      "40%",
      "60%"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "survival_instincts",
    "name": "Survival Instincts",
    "icon": "ability_hunter_survivalinstincts",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases your movement speed in Bear, Cat, and Travel forms by 5%. Whenever you Dodge an attack in any form, you regenerate 1% of your maximum mana.",
      "10 / 2",
      "15 / 3"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "brutal_impact",
    "name": "Brutal Impact",
    "icon": "ability_druid_bash",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec. Spells cast against targets stunned by your Bash or Pounce have a 25% increased critical strike chance.",
      "1 / 50"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "primal_focus",
    "name": "Primal Focus",
    "icon": "spell_nature_healingtouch",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "When you critically hit with a melee attack in Bear or Cat form, the mana cost of your next Healing Touch, Regrowth, or Rejuvenation is reduced by 25%.",
      "50"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "predatory_strikes",
    "name": "Predatory Strikes",
    "icon": "ability_hunter_pet_cat",
    "maxPoints": 3,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases your melee attack power in Cat, Bear and Dire Bear Forms by 50% of your level. Your Shred and Ravage abilities ignore 10% of the target's armor.",
      "100 / 20",
      "150 / 30"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "feral_charge",
    "name": "Feral Charge",
    "icon": "ability_hunter_pet_bear",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec."
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "sharpened_claws",
    "name": "Sharpened Claws",
    "icon": "inv_misc_monsterclaw_04",
    "maxPoints": 3,
    "row": 2,
    "col": 2,
    "desc": [
      "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 2%.",
      "4",
      "6"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "imp_shred",
    "name": "Improved Shred",
    "icon": "spell_shadow_vampiricaura",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Reduces the Energy cost of your Shred ability by 6.",
      "12"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "nurturing_instinct",
    "name": "Nurturing Instinct",
    "icon": "ability_druid_healinginstincts",
    "maxPoints": 2,
    "row": 3,
    "col": 1,
    "desc": [
      "Increases your healing spells by 50% of your Agility.",
      "100%"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "primal_synergy",
    "name": "Primal Synergy",
    "icon": "ability_racial_cannibalize",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "requires": {
      "id": "sharpened_claws",
      "points": 3
    },
    "desc": [
      "Your physical critical strikes have a 50% chance to add an additional combo point in Cat Form, or generate 5 additional Rage in Bear Form.",
      "100"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "primal_frenzy",
    "name": "Primal Frenzy",
    "icon": "ability_mount_jungletiger",
    "maxPoints": 2,
    "row": 3,
    "col": 3,
    "requires": {
      "id": "sharpened_claws",
      "points": 3
    },
    "desc": [
      "Reduces the cooldown of your Enrage and Tiger's Fury abilities by 15 seconds. In addition, using Tiger's Fury instantly restores 15 Energy, and the armor penalty of your Enrage is reduced by 50%.",
      "30 / 30 / 100"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "savage_fury",
    "name": "Savage Fury",
    "icon": "ability_druid_ravage",
    "maxPoints": 2,
    "row": 4,
    "col": 0,
    "desc": [
      "Increases the damage caused by your Claw, Rake, Maul and Swipe abilities by 10%.",
      "20"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "leader_of_the_pack",
    "name": "Leader of the Pack",
    "icon": "spell_nature_unyeildingstamina",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "desc": [
      "While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party members within 45 yards by 3%."
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "primal_flurry",
    "name": "Primal Flurry",
    "icon": "ability_ghoulfrenzy",
    "maxPoints": 3,
    "row": 4,
    "col": 2,
    "desc": [
      "Your critical strikes from melee attacks increase your attack speed by 10% for your next 3 swings. In addition, each of these accelerated swings generates 1 extra Rage or 2 extra Energy on a successful hit.",
      "20 / 2 / 4",
      "30 / 3 / 6"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "heart_of_the_wild",
    "name": "Heart of the Wild",
    "icon": "spell_holy_blessingofagility",
    "maxPoints": 5,
    "row": 5,
    "col": 0,
    "desc": [
      "Increases your Intellect by 4%. In addition, while in Bear Form your Stamina is increased by 4%, and while in Cat Form your Attack Power is increased by 2%.",
      "8 / 8 / 4",
      "12 / 12 / 6",
      "16 / 16 / 8",
      "20 / 20 / 10"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "survival_of_the_fittest",
    "name": "Survival of the Fittest",
    "icon": "ability_druid_enrage",
    "maxPoints": 3,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases your total Strength, Agility, and Stamina by 2%.",
      "4%",
      "6%"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "mangle",
    "name": "Mangle",
    "icon": "ability_druid_mangle2",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "leader_of_the_pack",
      "points": 1
    },
    "desc": [
      "Mangle the target, inflicting damage and causing the target to take 30% additional damage from bleed effects and Shred for 1 min. Awards 1 combo point. This ability replaces Claw."
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A column of moonlight strikes the earth."
  }
];

export const DRUID_RESTORATION_TALENTS: any = [
  {
    "id": "gift_of_nature",
    "name": "Gift of Nature",
    "icon": "spell_nature_protectionformnature",
    "maxPoints": 5,
    "row": 0,
    "col": 0,
    "desc": [
      "Reduces the cast time of your Healing Touch by 0.1 seconds, and reduces the mana cost of all healing spells by 2%.",
      "0.2 / 4",
      "0.3 / 6",
      "0.4 / 8",
      "0.5 / 10"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "imp_motw",
    "name": "Improved Mark of the Wild",
    "icon": "spell_nature_regeneration",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 15%.",
      "30",
      "45"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "furor",
    "name": "Furor",
    "icon": "spell_holy_ashestoashes",
    "maxPoints": 2,
    "row": 0,
    "col": 2,
    "desc": [
      "Gives you a 50% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or retain up to 40 Energy when you shapeshift into Cat Form.",
      "100"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "subtlety",
    "name": "Subtlety",
    "icon": "ability_druid_naturalperfection",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Reduces the threat generated by your healing spells by 10%. Whenever you take damage, you have a 10% chance to regenerate 2% of your total mana and health over 4 seconds.",
      "20 / 20",
      "30 / 30"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "natural_shapeshifter",
    "name": "Natural Shapeshifter",
    "icon": "spell_nature_wispheal",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Reduces the mana cost of all shapeshifting by 10%. Whenever you shift into a new form, you regenerate 1% of your total mana over 3 seconds.",
      "20 / 2",
      "30 / 3"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "natures_focus",
    "name": "Nature's Focus",
    "icon": "spell_nature_healingwavegreater",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Gives you a 35% chance to avoid interruption caused by damage while casting Healing Touch, Regrowth, or Tranquility.",
      "70"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "imp_enrage",
    "name": "Improved Enrage",
    "icon": "ability_druid_enrage",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "The Enrage ability now instantly generates 5 Rage.",
      "10"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "reflection",
    "name": "Reflection",
    "icon": "spell_frost_windwalkon",
    "maxPoints": 3,
    "row": 2,
    "col": 0,
    "desc": [
      "Allows 5% of your Mana regeneration to continue while casting.",
      "10",
      "15"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "natures_swiftness",
    "name": "Nature's Swiftness",
    "icon": "spell_nature_ravenform",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "When activated, your next Nature spell with a casting time less than 10 sec becomes an instant cast spell. 3 min cooldown."
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "imp_rejuv",
    "name": "Improved Rejuvenation",
    "icon": "spell_nature_rejuvenation",
    "maxPoints": 3,
    "row": 2,
    "col": 3,
    "desc": [
      "Increases the effect of your Rejuvenation spell by 5%, and allows your Rejuvenation ticks to critically heal for 150% of their normal amount.",
      "10",
      "15"
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "tranquil_spirit",
    "name": "Tranquil Spirit",
    "icon": "spell_holy_elunesgrace",
    "maxPoints": 3,
    "row": 3,
    "col": 0,
    "desc": [
      "Reduces the mana cost of your Healing Touch, Regrowth, and Tranquility spells by 4%.",
      "7%",
      "10%"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "empowered_rejuvenation",
    "name": "Empowered Rejuvenation",
    "icon": "ability_druid_empoweredrejuvination",
    "maxPoints": 5,
    "row": 3,
    "col": 1,
    "desc": [
      "Increases the effect of your heal-over-time spells by 4% of your bonus healing effects.",
      "8%",
      "12%",
      "16%",
      "20%"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "sanctuary",
    "name": "Sanctuary",
    "icon": "spell_nature_tranquility",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Reduces the cooldown of your Tranquility by 50% and reduces the threat it generates by 100%. Tranquility can now be channeled while moving.",
      "100"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "natures_bounty",
    "name": "Nature's Bounty",
    "icon": "spell_nature_resistnature",
    "maxPoints": 5,
    "row": 4,
    "col": 0,
    "desc": [
      "Increases the critical effect chance of your Regrowth and Healing Touch spells by 10%.",
      "20",
      "30",
      "40",
      "50"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A column of moonlight strikes the earth."
  },
  {
    "id": "tree_of_life",
    "name": "Tree of Life Form",
    "icon": "ability_druid_treeoflife",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "empowered_rejuvenation",
      "points": 5
    },
    "desc": [
      "Transforms the Druid into a Tree of Life. While in this form, healing received by all party members within 45 yards is increased by 10% and you can only cast Restoration spells."
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "swiftmend",
    "name": "Swiftmend",
    "icon": "inv_relics_idolofrejuvenation",
    "maxPoints": 1,
    "row": 4,
    "col": 2,
    "desc": [
      "Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them for an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth."
    ],
    "statScaling": "Scales at 1.0 coefficient with Healing Power.",
    "loreOrigins": "A restorative bloom from the glades of Moonglade.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "24/0/27 Moonglow Resto"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "living_seed",
    "name": "Living Seed",
    "icon": "spell_nature_naturetouchgrow",
    "maxPoints": 2,
    "row": 4,
    "col": 3,
    "requires": {
      "id": "imp_rejuv",
      "points": 3
    },
    "desc": [
      "When you critically heal your target with Healing Touch or Regrowth, you plant a Living Seed on the target for 15% of the amount healed. The Living Seed will bloom when the target is next attacked, healing them.",
      "30"
    ],
    "statScaling": "Scales with Agility and Strength in forms.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "Your form shifts with a phantom roar."
  },
  {
    "id": "empowered_touch",
    "name": "Empowered Touch",
    "icon": "spell_nature_healingway",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Your Healing Touch spell gains an additional 10% of your bonus healing effects.",
      "20",
      "30"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A lunar strike taught by the keepers of Hyjal.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "gift_of_the_earthmother",
    "name": "Gift of the Earthmother",
    "icon": "ability_druid_giftoftheearthmother",
    "maxPoints": 2,
    "row": 5,
    "col": 1,
    "desc": [
      "Reduces the global cooldown of your Rejuvenation and Wild Growth spells by 10%.",
      "20%"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "An ancient tradition of the Cenarion Circle.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "24/0/27 Moonglow Resto",
      "30/0/21 Balance PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "overgrowth",
    "name": "Overgrowth",
    "icon": "spell_nature_stranglevines",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Your Rejuvenation ticks have a 5% chance to spread a copy of the Rejuvenation effect to another injured party member within 15 yards.",
      "10"
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "14/32/5 Feral DPS/Tank",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Leaves flutter around the target."
  },
  {
    "id": "wild_growth",
    "name": "Wild Growth",
    "icon": "ability_druid_flourish",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "gift_of_the_earthmother",
      "points": 2
    },
    "desc": [
      "Heals up to 5 friendly party members within 15 yards of the target for X over 7 sec. The amount healed is applied quickly at first, and slows down as the Wild Growth reaches its full duration. 8 second cooldown."
    ],
    "statScaling": "Scales with Arcane and Nature Spell Power.",
    "loreOrigins": "A feral instinct originating from the Emerald Dream.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "30/0/21 Balance PvP",
      "14/32/5 Feral DPS/Tank"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Leaves flutter around the target."
  }
];

export const CHANGELOG: string[] = [
  "General Changes",
  "Design Philosophy: A comprehensive modernization bringing TBC/WotLK coherence to the Druid toolkits.",
  "Omen of Clarity: This ability has been made baseline for all Druids.",
  "Nature's Grasp: This ability has been made baseline for all Druids.",
  "Balance",
  "Identity: Transforms into an astrally-empowered, crit-scaling caster capable of robust multi-dotting and devastating eclipse phases.",
  "Core Foundation: Improved Wrath, Starlight Wrath, Nature's Grasp improved in Tier 1.",
  "Cross-Pollination: Control of Nature, Improved Moonfire, Brambles organized in Tier 2.",
  "Insect Swarm: Moved down to serve as the defining 11-point anchor.",
  "Reach & Cost: Nature's Reach, Moonglow, and Conjure Moonwell organized in Tier 3.",
  "Vengeance: Compressed to 3 points in Tier 4 to supercharge spell critical strike scaling.",
  "Moonkin Form: Positioned as the 21-point anchor, providing the necessary armor and aura.",
  "The Active Engine: Lunar Guidance, Dreamstate organized in Tier 5 for massive mana sustain and spell power scaling.",
  "Sustain: Balance of Power, Improved Faerie Fire organized in Tier 6.",
  "Starfall: Added as the 31-point capstone, providing a spectacular cooldown for burst damage.",
  "Feral Combat",
  "Identity: Becomes a highly fluid shapeshifter with distinct Cat auto-attack engines and Bear mitigation tools unlocked early in the tree.",
  "Core Foundation: Ferocity, Feral Aggression, Thick Hide grouped in Tier 1.",
  "Cross-Pollination: Feral Swiftness, Brutal Impact, Sharpened Claws organized in Tier 2.",
  "Feral Charge: Moved down to serve as the 11-point anchor.",
  "Output & Mitigation: Predatory Strikes, Blood Frenzy, Primal Fury organized in Tier 3.",
  "Savage Fury: Provides a powerful damage modifier for core abilities in Tier 4.",
  "Faerie Fire (Feral): Positioned as the 21-point anchor.",
  "The Active Engine: Heart of the Wild, Survival of the Fittest organized in Tier 5 for immense statistical scaling.",
  "Sustain: Leader of the Pack, Improved Mangle organized in Tier 6.",
  "Mangle: Added as the 31-point capstone, replacing Claw and drastically smoothing the rotation.",
  "Restoration",
  "Identity: Solidifies as the ultimate reactive, heal-over-time master by compressing throughput talents and introducing lifebloom mechanics.",
  "Core Foundation: Improved Mark of the Wild, Furor, Naturalist grouped in Tier 1.",
  "Cross-Pollination: Nature's Focus, Natural Shapeshifter, Subtlety organized in Tier 2.",
  "Nature's Swiftness: Moved down to serve as the 11-point anchor.",
  "Output: Gift of Nature, Improved Rejuvenation organized in Tier 3.",
  "Nature's Bounty: Provides critical strike benefits for Regrowth and Nourish in Tier 4.",
  "Swiftmend: Positioned as the 21-point anchor.",
  "The Active Engine: Living Spirit, Empowered Rejuvenation organized in Tier 5 for profound HoT synergy.",
  "Sustain: Natural Perfection, Empowered Touch organized in Tier 6.",
  "Tree of Life: Added as the 31-point capstone, boosting group healing and armor."
];
