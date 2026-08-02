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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Starfire Wrath was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "Your Starfire Wrath leaves a lingering trail of nature in your wake."
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
    "statScaling": "Provides flat scaling independent of your nature rating.",
    "loreOrigins": "A lost secret of the Moonglade that weaponizes the pure essence of Natural Weapons.",
    "synergies": [
      "Creates a devastating synergy when you weave Natural Weapons between auto-attacks.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Natural Weapons leaves a lingering trail of nature in your wake."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Nature's Reach was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum nature output."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary nature effect.",
    "devCommentary": "We wanted Nature's Reach to define the Balance playstyle at all levels.",
    "visualEffect": "A spectral projection of Malfurion briefly mirrors your Nature's Reach attack."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Control of Nature represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Control of Nature.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "Your Control of Nature leaves a lingering trail of nature in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Improved Moonfire represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Improved Moonfire.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Improved Moonfire."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Brambleguard.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "Your Brambleguard leaves a lingering trail of nature in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Moonglow represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any feral oriented build.",
      "Creates a devastating synergy when you weave Moonglow between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Moonglow.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Moonglow temporarily wreathes your character in feral energy."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Conjure Moonwell critically hits.",
    "devCommentary": "We wanted Conjure Moonwell to define the Balance playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Conjure Moonwell."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Improved Faerie Fire between auto-attacks.",
      "Creates a devastating synergy when you weave Improved Faerie Fire between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary nature effect.",
    "devCommentary": "Initially, Improved Faerie Fire was too weak, so we gave it massive feral scaling.",
    "visualEffect": "Casting Improved Faerie Fire temporarily wreathes your character in feral energy."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Gale Winds represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Gale Winds.",
    "devCommentary": "Initially, Gale Winds was too weak, so we gave it massive feral scaling.",
    "visualEffect": "The ground shatters as the feral power of Gale Winds courses through you."
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
    "statScaling": "Provides flat scaling independent of your nature rating.",
    "loreOrigins": "A lost secret of the Moonglade that weaponizes the pure essence of Vengeance.",
    "synergies": [
      "Acts as a foundational pillar for any feral oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum nature output."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Vengeance critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "Your Vengeance leaves a lingering trail of nature in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Celestial Focus represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any feral oriented build.",
      "Creates a devastating synergy when you weave Celestial Focus between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Celestial Focus.",
    "devCommentary": "We wanted Celestial Focus to define the Balance playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Celestial Focus."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Dreamstate was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum nature output."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary nature effect.",
    "devCommentary": "We wanted Dreamstate to define the Balance playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Dreamstate."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Moonkin Form critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Moonkin Form leaves a lingering trail of nature in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Force of Nature critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Force of Nature leaves a lingering trail of nature in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Owlkin Frenzy represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any feral oriented build.",
      "Creates a devastating synergy when you weave Owlkin Frenzy between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Owlkin Frenzy.",
    "devCommentary": "Initially, Owlkin Frenzy was too weak, so we gave it massive feral scaling.",
    "visualEffect": "Casting Owlkin Frenzy temporarily wreathes your character in feral energy."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Moonfury between auto-attacks.",
      "Creates a devastating synergy when you weave Moonfury between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary nature effect.",
    "devCommentary": "Initially, Moonfury was too weak, so we gave it massive feral scaling.",
    "visualEffect": "The ground shatters as the feral power of Moonfury courses through you."
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
    "statScaling": "Provides flat scaling independent of your nature rating.",
    "loreOrigins": "A lost secret of the Moonglade that weaponizes the pure essence of Lunar Guidance.",
    "synergies": [
      "Acts as a foundational pillar for any feral oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum nature output."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Lunar Guidance critically hits.",
    "devCommentary": "Designed to smooth out the rotation of feral specs in long encounters.",
    "visualEffect": "A spectral projection of Malfurion briefly mirrors your Lunar Guidance attack."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Starfall between auto-attacks.",
      "Creates a devastating synergy when you weave Starfall between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Balance PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary nature effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Starfall leaves a lingering trail of nature in your wake."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Ferocity represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Ferocity.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Ferocity leaves a lingering trail of nature in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Thick Hide.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Thick Hide."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Feral Aggression was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Feral Aggression to define the Feral playstyle at all levels.",
    "visualEffect": "A spectral projection of Malfurion briefly mirrors your Feral Aggression attack."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Fluid Form.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Fluid Form temporarily wreathes your character in feral energy."
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
    "statScaling": "Provides flat scaling independent of your nature rating.",
    "loreOrigins": "A lost secret of the Moonglade that weaponizes the pure essence of Survival Instincts.",
    "synergies": [
      "Creates a devastating synergy when you weave Survival Instincts between auto-attacks.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of feral specs in long encounters.",
    "visualEffect": "The ground shatters as the feral power of Survival Instincts courses through you."
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
    "statScaling": "Provides flat scaling independent of your nature rating.",
    "loreOrigins": "A lost secret of the Moonglade that weaponizes the pure essence of Brutal Impact.",
    "synergies": [
      "Acts as a foundational pillar for any feral oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum nature output."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Brutal Impact critically hits.",
    "devCommentary": "Designed to smooth out the rotation of feral specs in long encounters.",
    "visualEffect": "The ground shatters as the feral power of Brutal Impact courses through you."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Primal Focus was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Primal Focus was too weak, so we gave it massive feral scaling.",
    "visualEffect": "The ground shatters as the feral power of Primal Focus courses through you."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Predatory Strikes represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any feral oriented build.",
      "Creates a devastating synergy when you weave Predatory Strikes between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Predatory Strikes.",
    "devCommentary": "Designed to smooth out the rotation of feral specs in long encounters.",
    "visualEffect": "A spectral projection of Malfurion briefly mirrors your Predatory Strikes attack."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Feral Charge was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Feral Charge to define the Feral playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Feral Charge."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Sharpened Claws between auto-attacks.",
      "Creates a devastating synergy when you weave Sharpened Claws between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary nature effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Sharpened Claws."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Improved Shred was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum nature output."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary nature effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Improved Shred temporarily wreathes your character in feral energy."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Nurturing Instinct was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Nurturing Instinct."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Primal Synergy.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Primal Synergy."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Primal Frenzy was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum nature output."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary nature effect.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Primal Frenzy."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Savage Fury.",
    "devCommentary": "We wanted Savage Fury to define the Feral playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Savage Fury."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Leader of the Pack was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Leader of the Pack to define the Feral playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Leader of the Pack."
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
    "statScaling": "Provides flat scaling independent of your nature rating.",
    "loreOrigins": "A lost secret of the Moonglade that weaponizes the pure essence of Primal Flurry.",
    "synergies": [
      "Creates a devastating synergy when you weave Primal Flurry between auto-attacks.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of feral specs in long encounters.",
    "visualEffect": "The ground shatters as the feral power of Primal Flurry courses through you."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Heart of the Wild represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Heart of the Wild.",
    "devCommentary": "Designed to smooth out the rotation of feral specs in long encounters.",
    "visualEffect": "A spectral projection of Malfurion briefly mirrors your Heart of the Wild attack."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Survival of the Fittest was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum nature output."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary nature effect.",
    "devCommentary": "We wanted Survival of the Fittest to define the Feral playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Survival of the Fittest."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Feral PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Mangle critically hits.",
    "devCommentary": "We wanted Mangle to define the Feral playstyle at all levels.",
    "visualEffect": "A spectral projection of Malfurion briefly mirrors your Mangle attack."
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
    "statScaling": "Provides flat scaling independent of your nature rating.",
    "loreOrigins": "A lost secret of the Moonglade that weaponizes the pure essence of Gift of Nature.",
    "synergies": [
      "Creates a devastating synergy when you weave Gift of Nature between auto-attacks.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Gift of Nature to define the Restoration playstyle at all levels.",
    "visualEffect": "A spectral projection of Malfurion briefly mirrors your Gift of Nature attack."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Improved Mark of the Wild.",
    "devCommentary": "We wanted Improved Mark of the Wild to define the Restoration playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Improved Mark of the Wild."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Furor.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Furor."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Subtlety.",
    "devCommentary": "We wanted Subtlety to define the Restoration playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Subtlety."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Natural Shapeshifter.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Natural Shapeshifter leaves a lingering trail of nature in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Nature's Focus.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Nature's Focus leaves a lingering trail of nature in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Improved Enrage critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "Your Improved Enrage leaves a lingering trail of nature in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Reflection.",
    "devCommentary": "Designed to smooth out the rotation of feral specs in long encounters.",
    "visualEffect": "The ground shatters as the feral power of Reflection courses through you."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Nature's Swiftness represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your feral cooldowns.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Nature's Swiftness.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "Your Nature's Swiftness leaves a lingering trail of nature in your wake."
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
    "statScaling": "Provides flat scaling independent of your nature rating.",
    "loreOrigins": "A lost secret of the Moonglade that weaponizes the pure essence of Improved Rejuvenation.",
    "synergies": [
      "Acts as a foundational pillar for any feral oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum nature output."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Improved Rejuvenation critically hits.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Improved Rejuvenation."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Tranquil Spirit critically hits.",
    "devCommentary": "Initially, Tranquil Spirit was too weak, so we gave it massive feral scaling.",
    "visualEffect": "The ground shatters as the feral power of Tranquil Spirit courses through you."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Empowered Rejuvenation.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "Your Empowered Rejuvenation leaves a lingering trail of nature in your wake."
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
    "statScaling": "Provides flat scaling independent of your nature rating.",
    "loreOrigins": "A lost secret of the Moonglade that weaponizes the pure essence of Sanctuary.",
    "synergies": [
      "Creates a devastating synergy when you weave Sanctuary between auto-attacks.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of feral specs in long encounters.",
    "visualEffect": "The ground shatters as the feral power of Sanctuary courses through you."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Nature's Bounty was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Nature's Bounty."
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
    "statScaling": "Coefficient scales with both spell damage and nature mastery.",
    "loreOrigins": "Passed down by Malfurion, this mastery of Tree of Life Form represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any feral oriented build.",
      "Creates a devastating synergy when you weave Tree of Life Form between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Tree of Life Form.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward nature ability.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Tree of Life Form."
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
    "statScaling": "Gains a 15% bonus scaling from your primary feral stats.",
    "loreOrigins": "A forbidden feral art that utilizes nature to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Swiftmend.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Swiftmend leaves a lingering trail of nature in your wake."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Provides unmatched utility when combined with other restore abilities."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Living Seed critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Living Seed temporarily wreathes your character in feral energy."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Empowered Touch was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Empowered Touch was too weak, so we gave it massive feral scaling.",
    "visualEffect": "Casting Empowered Touch temporarily wreathes your character in feral energy."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Gift of the Earthmother was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Gift of the Earthmother was too weak, so we gave it massive feral scaling.",
    "visualEffect": "Casting Gift of the Earthmother temporarily wreathes your character in feral energy."
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
    "statScaling": "Inherits 50% of your weapon's base damage as feral power.",
    "loreOrigins": "An instinctual manifestation of nature, allowing you to restore your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum nature output.",
      "Acts as a foundational pillar for any feral oriented build."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with feral energy upon casting Overgrowth.",
    "devCommentary": "Designed to smooth out the rotation of feral specs in long encounters.",
    "visualEffect": "The ground shatters as the feral power of Overgrowth courses through you."
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
    "statScaling": "Scales directly with your total nature power rating.",
    "loreOrigins": "Originally devised in the Moonglade, the technique of Wild Growth was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other restore abilities.",
      "Dramatically increases the power spike of your feral cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Restoration PvE",
      "Hybrid feral PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Wild Growth to define the Restoration playstyle at all levels.",
    "visualEffect": "A massive burst of nature erupts from the target upon the impact of Wild Growth."
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
