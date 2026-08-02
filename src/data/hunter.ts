import { Talent } from '../types/talents';

export const HUNTER_BM_TALENTS: any = [
  {
    "id": "imp_aspect_hawk",
    "name": "Improved Aspect of the Hawk",
    "icon": "spell_nature_ravenform",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Gives your normal ranged attacks a 10% chance to increase ranged attack speed by 30% for 12 seconds.",
      "20%",
      "30%"
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Improved Aspect of the Hawk.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Improved Aspect of the Hawk critically hits.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Improved Aspect of the Hawk attack."
  },
  {
    "id": "endurance_training",
    "name": "Endurance Training",
    "icon": "spell_nature_reincarnation",
    "maxPoints": 5,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases the Health of your pets by 2%.",
      "4%",
      "6%",
      "8%",
      "10%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Endurance Training critically hits.",
    "devCommentary": "We wanted Endurance Training to define the Bm playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Endurance Training attack."
  },
  {
    "id": "thick_hide",
    "name": "Thick Hide",
    "icon": "inv_misc_pelt_bear_03",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases the armor rating of your pets by 10% and your armor contribution from items by 5%.",
      "20% / 10%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Thick Hide.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "A massive burst of wilds erupts from the target upon the impact of Thick Hide."
  },
  {
    "id": "focused_fire",
    "name": "Focused Fire",
    "icon": "ability_hunter_sickem",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "All damage caused by you is increased by 1% while your pet is active, and the critical strike chance of your pet's basic attacks is increased by 5%.",
      "2% / 10%",
      "3% / 15%"
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Focused Fire.",
    "synergies": [
      "Creates a devastating synergy when you weave Focused Fire between auto-attacks.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Focused Fire attack."
  },
  {
    "id": "imp_revive_pet",
    "name": "Improved Revive Pet",
    "icon": "ability_hunter_beastsoothe",
    "maxPoints": 2,
    "row": 1,
    "col": 1,
    "desc": [
      "Reduces the casting time of your Revive Pet spell by 3 seconds, reduces the Focus cost by 25%, and increases the health your pet returns with by 15%.",
      "6 sec / 50% / 30%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Improved Revive Pet was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Improved Revive Pet leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "bestial_discipline",
    "name": "Bestial Discipline",
    "icon": "spell_nature_abolishmagic",
    "maxPoints": 3,
    "row": 1,
    "col": 2,
    "desc": [
      "Increases the Focus regeneration of your pets by 10%.",
      "20%",
      "30%"
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Bestial Discipline.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Bestial Discipline critically hits.",
    "devCommentary": "We wanted Bestial Discipline to define the Bm playstyle at all levels.",
    "visualEffect": "A massive burst of wilds erupts from the target upon the impact of Bestial Discipline."
  },
  {
    "id": "pathfinding",
    "name": "Pathfinding",
    "icon": "ability_mount_jungletiger",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 4%.",
      "8%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Pathfinding represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Creates a devastating synergy when you weave Pathfinding between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Pathfinding.",
    "devCommentary": "We wanted Pathfinding to define the Bm playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Pathfinding attack."
  },
  {
    "id": "intimidation",
    "name": "Intimidation",
    "icon": "ability_devour",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 seconds. 1 minute cooldown."
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Intimidation.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Intimidation critically hits.",
    "devCommentary": "Initially, Intimidation was too weak, so we gave it massive primal scaling.",
    "visualEffect": "Casting Intimidation temporarily wreathes your character in primal energy."
  },
  {
    "id": "unleashed_fury",
    "name": "Unleashed Fury",
    "icon": "ability_bullrush",
    "maxPoints": 5,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases the damage done by your pets by 4%.",
      "8%",
      "12%",
      "16%",
      "20%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Unleashed Fury.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "Your Unleashed Fury leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "ferocity",
    "name": "Ferocity",
    "icon": "inv_misc_monsterclaw_04",
    "maxPoints": 2,
    "row": 2,
    "col": 2,
    "desc": [
      "Increases the critical strike chance of your pets by 5%.",
      "10%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Ferocity represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Ferocity.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Ferocity leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "frenzy",
    "name": "Frenzy",
    "icon": "inv_misc_monsterclaw_03",
    "maxPoints": 5,
    "row": 3,
    "col": 2,
    "requires": {
      "id": "ferocity",
      "points": 2
    },
    "desc": [
      "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 seconds after dealing a critical strike.",
      "40%",
      "60%",
      "80%",
      "100%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Frenzy represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Creates a devastating synergy when you weave Frenzy between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Frenzy.",
    "devCommentary": "We wanted Frenzy to define the Bm playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Frenzy attack."
  },
  {
    "id": "animal_handler",
    "name": "Animal Handler",
    "icon": "ability_hunter_animalhandler",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Increases your pet's chance to hit by 3% and reduces the cooldown of your Master's Call by 10 seconds.",
      "6% / 20 sec"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Animal Handler represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Creates a devastating synergy when you weave Animal Handler between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Animal Handler.",
    "devCommentary": "Initially, Animal Handler was too weak, so we gave it massive primal scaling.",
    "visualEffect": "The ground shatters as the primal power of Animal Handler courses through you."
  },
  {
    "id": "longevity",
    "name": "Longevity",
    "icon": "ability_hunter_longevity",
    "maxPoints": 3,
    "row": 3,
    "col": 3,
    "desc": [
      "Reduces the cooldown of your Bestial Wrath, Intimidation, and pet special abilities by 10%.",
      "20%",
      "30%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Longevity was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Longevity temporarily wreathes your character in primal energy."
  },
  {
    "id": "bestial_wrath",
    "name": "Bestial Wrath",
    "icon": "ability_druid_ferociousbite",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "intimidation",
      "points": 1
    },
    "desc": [
      "Send your pet into a rage causing 50% additional damage for 18 seconds. While your pet is enraged, you also go into a rage causing 10% additional damage and reducing the Focus cost of all shots and strikes by 50% for 18 seconds. While enraged, neither you nor your pet feel pity, remorse, or fear, and you are both immune to all movement impairing and loss of control effects. 2 minute cooldown."
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Bestial Wrath.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Bestial Wrath temporarily wreathes your character in primal energy."
  },
  {
    "id": "ferocious_inspiration",
    "name": "Ferocious Inspiration",
    "icon": "ability_hunter_ferociousinspiration",
    "maxPoints": 3,
    "row": 4,
    "col": 2,
    "desc": [
      "When your pet scores a critical hit, all party members have all damage increased by 1% for 10 seconds.",
      "2%",
      "3%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Ferocious Inspiration.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "Your Ferocious Inspiration leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "spirit_bond",
    "name": "Spirit Bond",
    "icon": "ability_druid_demoralizingroar",
    "maxPoints": 2,
    "row": 4,
    "col": 0,
    "desc": [
      "While your pet is active, you and your pet regenerate 1% of total health every 10 seconds.",
      "2%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Spirit Bond.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Spirit Bond temporarily wreathes your character in primal energy."
  },
  {
    "id": "serpents_swiftness",
    "name": "Serpent's Swiftness",
    "icon": "ability_hunter_serpentswiftness",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Increases ranged melee attack speed by 4% and your pet's melee attack speed by 4%.",
      "7% / 7%",
      "10% / 10%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Serpent's Swiftness was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Serpent's Swiftness attack."
  },
  {
    "id": "invigoration",
    "name": "Invigoration",
    "icon": "spell_nature_healingway",
    "maxPoints": 2,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "bestial_wrath",
      "points": 1
    },
    "desc": [
      "When your pet scores a critical hit with a special ability, you instantly regenerate 4 Focus.",
      "8 Focus"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Invigoration represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Creates a devastating synergy when you weave Invigoration between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Invigoration.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Invigoration attack."
  },
  {
    "id": "bestial_resolve",
    "name": "Bestial Resolve",
    "icon": "ability_hunter_bestialdiscipline",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Reduces the damage your pet takes from area of effect abilities by 25%.",
      "50%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Bestial Resolve represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Bestial Resolve.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "Your Bestial Resolve leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "cobra_strikes",
    "name": "Cobra Strikes",
    "icon": "ability_hunter_cobrastrikes",
    "maxPoints": 3,
    "row": 5,
    "col": 3,
    "desc": [
      "Your critical hits with Arcane Shot, Aimed Shot, or Multi-Shot have a 20% chance to make your pet's next 2 special attacks critical strikes.",
      "40%",
      "60%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Cobra Strikes was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Cobra Strikes leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "beast_mastery",
    "name": "Beast Mastery",
    "icon": "ability_hunter_beastmastery",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "invigoration",
      "points": 2
    },
    "desc": [
      "You master the true art of Beast training, granting you the ability to tame Exotic Pets. In addition, your total amount of Pet Skill Points is increased by 5."
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Beast Mastery was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Bm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "The ground shatters as the primal power of Beast Mastery courses through you."
  }
];

export const HUNTER_MM_TALENTS: any = [
  {
    "id": "efficiency",
    "name": "Efficiency",
    "icon": "spell_frost_wizardmark",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Reduces the Focus cost of your Shots and Stings by 3%.",
      "6%",
      "10%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Efficiency represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Efficiency.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "A massive burst of wilds erupts from the target upon the impact of Efficiency."
  },
  {
    "id": "lethal_shots",
    "name": "Lethal Shots",
    "icon": "ability_searingarrow",
    "maxPoints": 5,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases your critical strike chance with ranged weapons by 1%.",
      "2%",
      "3%",
      "4%",
      "5%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Lethal Shots between auto-attacks.",
      "Creates a devastating synergy when you weave Lethal Shots between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Lethal Shots attack."
  },
  {
    "id": "imp_hunters_mark",
    "name": "Improved Hunter's Mark",
    "icon": "ability_hunter_snipershot",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Causes 50% of your Hunter's Mark ability's base ranged attack power to apply to melee attack power as well.",
      "100%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Improved Hunter's Mark.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Improved Hunter's Mark temporarily wreathes your character in primal energy."
  },
  {
    "id": "go_for_the_throat",
    "name": "Go for the Throat",
    "icon": "ability_hunter_goforthethroat",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Your ranged critical hits cause your pet to generate 8 Focus.",
      "16 Focus",
      "25 Focus"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Go for the Throat between auto-attacks.",
      "Creates a devastating synergy when you weave Go for the Throat between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "Initially, Go for the Throat was too weak, so we gave it massive primal scaling.",
    "visualEffect": "The ground shatters as the primal power of Go for the Throat courses through you."
  },
  {
    "id": "hawk_eye",
    "name": "Hawk Eye",
    "icon": "ability_townwatch",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases the range of your ranged weapons by 2 yards.",
      "4 yards.",
      "6 yards."
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Hawk Eye was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Hawk Eye temporarily wreathes your character in primal energy."
  },
  {
    "id": "rapid_killing",
    "name": "Rapid Killing",
    "icon": "ability_hunter_rapidkilling",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Reduces the cooldown of your Rapid Fire ability by 1 minute.",
      "2 minutes"
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Rapid Killing.",
    "synergies": [
      "Creates a devastating synergy when you weave Rapid Killing between auto-attacks.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "Your Rapid Killing leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "imp_arcane_shot",
    "name": "Improved Arcane Shot",
    "icon": "ability_impalingbolt",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Reduces the cooldown of your Arcane Shot by 0.5 seconds.",
      "1 second"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Improved Arcane Shot.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "A massive burst of wilds erupts from the target upon the impact of Improved Arcane Shot."
  },
  {
    "id": "imp_stings",
    "name": "Improved Stings",
    "icon": "ability_hunter_snipershot",
    "maxPoints": 3,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases the damage done by your Serpent Sting by 10% and reduces the Focus cost of all Stings by 10%.",
      "20% / 20%",
      "30% / 30%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Improved Stings.",
    "devCommentary": "We wanted Improved Stings to define the Mm playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Improved Stings attack."
  },
  {
    "id": "aimed_shot",
    "name": "Aimed Shot",
    "icon": "inv_spear_07",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "requires": {
      "id": "hawk_eye",
      "points": 3
    },
    "desc": [
      "An aimed shot that increases ranged damage. 3-second cast time."
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Aimed Shot represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Creates a devastating synergy when you weave Aimed Shot between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Aimed Shot.",
    "devCommentary": "We wanted Aimed Shot to define the Mm playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Aimed Shot attack."
  },
  {
    "id": "mortal_shots",
    "name": "Mortal Shots",
    "icon": "ability_piercedamage",
    "maxPoints": 5,
    "row": 2,
    "col": 2,
    "desc": [
      "Increases your ranged weapon critical strike damage bonus by 6%.",
      "12%",
      "18%",
      "24%",
      "30%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Mortal Shots was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "Your Mortal Shots leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "concussive_barrage",
    "name": "Concussive Barrage",
    "icon": "spell_frost_stun",
    "maxPoints": 2,
    "row": 2,
    "col": 3,
    "desc": [
      "Your successful Auto Shot attacks have a 3% chance to Daze the target for 4 seconds.",
      "6%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Concussive Barrage represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Creates a devastating synergy when you weave Concussive Barrage between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Concussive Barrage.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "Your Concussive Barrage leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "barrage",
    "name": "Barrage",
    "icon": "ability_upgrademoonglaive",
    "maxPoints": 3,
    "row": 3,
    "col": 1,
    "desc": [
      "Increases the damage done by your Multi-Shot and Volley spells by 5%.",
      "10%",
      "15%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Barrage.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Barrage temporarily wreathes your character in primal energy."
  },
  {
    "id": "combat_experience",
    "name": "Combat Experience",
    "icon": "ability_hunter_combatexperience",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Increases your total Agility by 2%.",
      "4%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Combat Experience was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Combat Experience leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "wild_quiver",
    "name": "Wild Quiver",
    "icon": "ability_hunter_wildquiver",
    "maxPoints": 3,
    "row": 4,
    "col": 0,
    "desc": [
      "Gives your ranged auto-attacks a 4% chance to trigger an additional physical shot dealing 60% weapon damage.",
      "8%",
      "12%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Wild Quiver was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "The ground shatters as the primal power of Wild Quiver courses through you."
  },
  {
    "id": "trueshot_aura",
    "name": "Trueshot Aura",
    "icon": "ability_trueshot",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "barrage",
      "points": 3
    },
    "desc": [
      "Increases the attack power of party members within 45 yards by 10%. Lasts 30 minutes."
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Trueshot Aura critically hits.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Casting Trueshot Aura temporarily wreathes your character in primal energy."
  },
  {
    "id": "master_marksman",
    "name": "Master Marksman",
    "icon": "ability_hunter_mastermarksman",
    "maxPoints": 3,
    "row": 4,
    "col": 2,
    "desc": [
      "Increases your critical strike chance by 1%, and reduces the Focus cost of your Aimed Shot and Multi-Shot by 5%.",
      "2% / 10%",
      "3% / 15%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Master Marksman represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Master Marksman.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "The ground shatters as the primal power of Master Marksman courses through you."
  },
  {
    "id": "rapid_recuperation",
    "name": "Rapid Recuperation",
    "icon": "spell_nature_healingtouch",
    "maxPoints": 2,
    "row": 4,
    "col": 3,
    "requires": {
      "id": "concussive_barrage",
      "points": 2
    },
    "desc": [
      "While under the effect of Rapid Fire, the Focus cost of all your abilities is reduced by 25%.",
      "50%"
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Rapid Recuperation.",
    "synergies": [
      "Creates a devastating synergy when you weave Rapid Recuperation between auto-attacks.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Rapid Recuperation to define the Mm playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Rapid Recuperation attack."
  },
  {
    "id": "piercing_shots",
    "name": "Piercing Shots",
    "icon": "ability_hunter_piercingshots",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Your critical strikes with Aimed Shot, Steady Shot, and Chimera Shot cause the target to bleed for 10% of the damage dealt over 8 seconds.",
      "20%",
      "30%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Piercing Shots.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Piercing Shots attack."
  },
  {
    "id": "sniper_training",
    "name": "Sniper Training",
    "icon": "ability_hunter_snipertraining",
    "maxPoints": 2,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "trueshot_aura",
      "points": 1
    },
    "desc": [
      "When you stand still for 6 seconds, you gain a 3% damage increase to your ranged attacks. Effect lasts 15 seconds or until you move.",
      "6%"
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Sniper Training.",
    "synergies": [
      "Creates a devastating synergy when you weave Sniper Training between auto-attacks.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Sniper Training was too weak, so we gave it massive primal scaling.",
    "visualEffect": "Casting Sniper Training temporarily wreathes your character in primal energy."
  },
  {
    "id": "marked_for_death",
    "name": "Marked for Death",
    "icon": "ability_hunter_markedfordeath",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases the damage you deal to targets afflicted by your Hunter's Mark by 2%.",
      "4%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Marked for Death represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Marked for Death.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "A massive burst of wilds erupts from the target upon the impact of Marked for Death."
  },
  {
    "id": "chimera_shot",
    "name": "Chimera Shot",
    "icon": "ability_hunter_chimerashot2",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "sniper_training",
      "points": 2
    },
    "desc": [
      "You deal 125% weapon damage, refreshing the current Sting on your target and triggering an effect: Serpent Sting - Instantly deals 40% of the Sting's total damage. Viper Sting - Instantly restores 15 Focus. Scorpid Sting - Attempts to Disarm the target for 10 sec. 10 second cooldown."
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Chimera Shot.",
    "synergies": [
      "Creates a devastating synergy when you weave Chimera Shot between auto-attacks.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Mm PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Chimera Shot attack."
  }
];

export const HUNTER_SURVIVAL_TALENTS: any = [
  {
    "id": "savage_strikes",
    "name": "Savage Strikes",
    "icon": "ability_racial_bloodrage",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases the critical strike chance of your Raptor Strike and Mongoose Bite by 10%.",
      "20%",
      "30%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Savage Strikes was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Savage Strikes to define the Survival playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Savage Strikes attack."
  },
  {
    "id": "deflection",
    "name": "Deflection",
    "icon": "ability_parry",
    "maxPoints": 5,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases your chance to Parry by 1%, and reduces the duration of all movement impairing effects on you by 4%.",
      "2% / 8%",
      "3% / 12%",
      "4% / 16%",
      "5% / 20%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Deflection.",
    "devCommentary": "We wanted Deflection to define the Survival playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Deflection attack."
  },
  {
    "id": "imp_tracking",
    "name": "Improved Tracking",
    "icon": "ability_hunter_pathfinding",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases all damage caused to targets that are being tracked by 2%.",
      "4%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Improved Tracking between auto-attacks.",
      "Creates a devastating synergy when you weave Improved Tracking between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "Initially, Improved Tracking was too weak, so we gave it massive primal scaling.",
    "visualEffect": "The ground shatters as the primal power of Improved Tracking courses through you."
  },
  {
    "id": "clever_traps",
    "name": "Clever Traps",
    "icon": "spell_nature_timestop",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Increases the damage of your Immolation and Explosive Traps by 10%, and the duration of your Freezing and Frost Traps by 10%.",
      "20% / 20%",
      "30% / 30%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Clever Traps was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Clever Traps to define the Survival playstyle at all levels.",
    "visualEffect": "A massive burst of wilds erupts from the target upon the impact of Clever Traps."
  },
  {
    "id": "survivalist",
    "name": "Survivalist",
    "icon": "spell_shadow_twilight",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases your total Health by 3%.",
      "6%",
      "10%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Survivalist critically hits.",
    "devCommentary": "We wanted Survivalist to define the Survival playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Survivalist attack."
  },
  {
    "id": "entrapment",
    "name": "Entrapment",
    "icon": "spell_nature_stranglevines",
    "maxPoints": 2,
    "row": 1,
    "col": 2,
    "desc": [
      "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 13% chance to entrap the target, preventing them from moving for 4 seconds.",
      "25%"
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Entrapment.",
    "synergies": [
      "Creates a devastating synergy when you weave Entrapment between auto-attacks.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Initially, Entrapment was too weak, so we gave it massive primal scaling.",
    "visualEffect": "The ground shatters as the primal power of Entrapment courses through you."
  },
  {
    "id": "surefooted",
    "name": "Surefooted",
    "icon": "ability_kick",
    "maxPoints": 2,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases your hit chance by 1% and increases your resistance to movement impairing effects by an additional 10%.",
      "2% / 20%"
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Creates a devastating synergy when you weave Surefooted between auto-attacks.",
      "Creates a devastating synergy when you weave Surefooted between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "Initially, Surefooted was too weak, so we gave it massive primal scaling.",
    "visualEffect": "Casting Surefooted temporarily wreathes your character in primal energy."
  },
  {
    "id": "scatter_shot",
    "name": "Scatter Shot",
    "icon": "ability_golemstormbolt",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "requires": {
      "id": "survivalist",
      "points": 3
    },
    "desc": [
      "A short-range shot that deals 50% weapon damage and disorients the target for 4 seconds. Any damage caused will remove the effect. Turns off your attack when used. 30 second cooldown."
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Scatter Shot critically hits.",
    "devCommentary": "We wanted Scatter Shot to define the Survival playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Scatter Shot attack."
  },
  {
    "id": "survival_instincts",
    "name": "Survival Instincts",
    "icon": "ability_hunter_survivalinstincts",
    "maxPoints": 5,
    "row": 2,
    "col": 0,
    "desc": [
      "Reduces all damage taken by 1% and increases your Attack Power by 1%.",
      "2% / 2%",
      "3% / 3%",
      "4% / 4%",
      "5% / 5%"
    ],
    "statScaling": "Provides flat scaling independent of your wilds rating.",
    "loreOrigins": "A lost secret of the Stranglethorn jungles that weaponizes the pure essence of Survival Instincts.",
    "synergies": [
      "Creates a devastating synergy when you weave Survival Instincts between auto-attacks.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "The ground shatters as the primal power of Survival Instincts courses through you."
  },
  {
    "id": "trap_mastery",
    "name": "Trap Mastery",
    "icon": "ability_ensnare",
    "maxPoints": 2,
    "row": 2,
    "col": 2,
    "requires": {
      "id": "entrapment",
      "points": 2
    },
    "desc": [
      "Reduces the cooldown of all traps by 2 seconds.",
      "4 seconds"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Trap Mastery represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Trap Mastery.",
    "devCommentary": "Initially, Trap Mastery was too weak, so we gave it massive primal scaling.",
    "visualEffect": "Casting Trap Mastery temporarily wreathes your character in primal energy."
  },
  {
    "id": "lock_and_load",
    "name": "Lock and Load",
    "icon": "ability_hunter_lockandload",
    "maxPoints": 3,
    "row": 3,
    "col": 0,
    "desc": [
      "Gives your Trap activation hits a 33% chance to cause your next 2 Arcane Shot or Explosive Shot spells to trigger no cooldown and cost no Focus. Lasts 12 seconds.",
      "66%",
      "100%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Lock and Load represents the pinnacle of the class.",
    "synergies": [
      "Acts as a foundational pillar for any primal oriented build.",
      "Creates a devastating synergy when you weave Lock and Load between auto-attacks."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Lock and Load.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Lock and Load attack."
  },
  {
    "id": "killer_instinct",
    "name": "Killer Instinct",
    "icon": "spell_holy_blessingofstamina",
    "maxPoints": 3,
    "row": 3,
    "col": 1,
    "requires": {
      "id": "scatter_shot",
      "points": 1
    },
    "desc": [
      "Increases your critical strike chance with all attacks by 1%.",
      "2%",
      "3%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Killer Instinct critically hits.",
    "devCommentary": "We wanted Killer Instinct to define the Survival playstyle at all levels.",
    "visualEffect": "A massive burst of wilds erupts from the target upon the impact of Killer Instinct."
  },
  {
    "id": "counterattack",
    "name": "Counterattack",
    "icon": "ability_warrior_challange",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "A strike that becomes active after parrying an opponent's attack. This attack deals damage and immobilizes the target for 5 seconds. Counterattack cannot be blocked, dodged, or parried."
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Acts as a foundational pillar for any primal oriented build."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Enhances your chest rune to pulse with primal energy upon casting Counterattack.",
    "devCommentary": "We wanted Counterattack to define the Survival playstyle at all levels.",
    "visualEffect": "A massive burst of wilds erupts from the target upon the impact of Counterattack."
  },
  {
    "id": "wyvern_sting",
    "name": "Wyvern Sting",
    "icon": "inv_spear_02",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "killer_instinct",
      "points": 3
    },
    "desc": [
      "A stinging shot that puts the target to sleep for 12 seconds. Any damage will cancel the effect. Cuando the target wakes up, the Sting causes Nature damage over 12 seconds. 1 minute cooldown."
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Wyvern Sting was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "A community favorite that we brought back and modernized for Classic+.",
    "visualEffect": "Your Wyvern Sting leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "lightning_reflexes",
    "name": "Lightning Reflexes",
    "icon": "spell_nature_invisibilty",
    "maxPoints": 3,
    "row": 4,
    "col": 2,
    "desc": [
      "Increases your total Agility by 5%.",
      "10%",
      "15%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Lightning Reflexes was perfected over centuries.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Your glove rune now gains an additional 10% effectiveness passively.",
    "devCommentary": "We wanted Lightning Reflexes to define the Survival playstyle at all levels.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Lightning Reflexes attack."
  },
  {
    "id": "resourcefulness",
    "name": "Resourcefulness",
    "icon": "ability_hunter_resourcefulness",
    "maxPoints": 2,
    "row": 4,
    "col": 0,
    "desc": [
      "Reduces the Focus cost of all traps and melee abilities by 10%.",
      "20%"
    ],
    "statScaling": "Scales directly with your total wilds power rating.",
    "loreOrigins": "Originally devised in the Stranglethorn jungles, the technique of Resourcefulness was perfected over centuries.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Pairs flawlessly with high critical strike rating for maximum wilds output."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger a secondary wilds effect.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Resourcefulness attack."
  },
  {
    "id": "expose_weakness",
    "name": "Expose Weakness",
    "icon": "ability_rogue_findweakness",
    "maxPoints": 3,
    "row": 5,
    "col": 0,
    "desc": [
      "Your ranged critical strikes have a 33% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the Attack Power of all attackers against that target by 25% of your total Agility for 7 seconds.",
      "66%",
      "100%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Expose Weakness critically hits.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "A spectral projection of Rexxar briefly mirrors your Expose Weakness attack."
  },
  {
    "id": "thrill_of_the_hunt",
    "name": "Thrill of the Hunt",
    "icon": "ability_hunter_thrillofthehunt",
    "maxPoints": 2,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "wyvern_sting",
      "points": 1
    },
    "desc": [
      "Your critical strikes with abilities that cost Focus have a 50% chance to immediately restore 10 Focus.",
      "100%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Thrill of the Hunt represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Thrill of the Hunt.",
    "devCommentary": "This serves as the ultimate high-risk, high-reward wilds ability.",
    "visualEffect": "Your Thrill of the Hunt leaves a lingering trail of wilds in your wake."
  },
  {
    "id": "master_tactician",
    "name": "Master Tactician",
    "icon": "spell_nature_enchantarmor",
    "maxPoints": 2,
    "row": 5,
    "col": 2,
    "desc": [
      "Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 5% for 8 seconds.",
      "10%"
    ],
    "statScaling": "Inherits 50% of your weapon's base damage as primal power.",
    "loreOrigins": "An instinctual manifestation of wilds, allowing you to hunt your foes effortlessly.",
    "synergies": [
      "Provides unmatched utility when combined with other hunt abilities.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds whenever Master Tactician critically hits.",
    "devCommentary": "Designed to smooth out the rotation of primal specs in long encounters.",
    "visualEffect": "The ground shatters as the primal power of Master Tactician courses through you."
  },
  {
    "id": "noxious_stings",
    "name": "Noxious Stings",
    "icon": "spell_nature_corrosivebreath",
    "maxPoints": 3,
    "row": 5,
    "col": 3,
    "desc": [
      "Increases all damage done to targets afflicted by your Wyvern Sting or Serpent Sting by 1%.",
      "2%",
      "3%"
    ],
    "statScaling": "Coefficient scales with both spell damage and wilds mastery.",
    "loreOrigins": "Passed down by Rexxar, this mastery of Noxious Stings represents the pinnacle of the class.",
    "synergies": [
      "Dramatically increases the power spike of your primal cooldowns.",
      "Provides unmatched utility when combined with other hunt abilities."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Noxious Stings.",
    "devCommentary": "Initially, Noxious Stings was too weak, so we gave it massive primal scaling.",
    "visualEffect": "Casting Noxious Stings temporarily wreathes your character in primal energy."
  },
  {
    "id": "explosive_shot",
    "name": "Explosive Shot",
    "icon": "ability_hunter_explosiveshot",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "thrill_of_the_hunt",
      "points": 2
    },
    "desc": [
      "You fire an explosive charge into the enemy target, dealing massive Fire damage. The charge will blast the target every second for an additional 2 seconds. 6 second cooldown."
    ],
    "statScaling": "Gains a 15% bonus scaling from your primary primal stats.",
    "loreOrigins": "A forbidden primal art that utilizes wilds to overwhelm enemies.",
    "synergies": [
      "Pairs flawlessly with high critical strike rating for maximum wilds output.",
      "Dramatically increases the power spike of your primal cooldowns."
    ],
    "recommendedBuilds": [
      "Deep Survival PvE",
      "Hybrid primal PvP"
    ],
    "runeInteractions": "Modifies your bracer rune to synergize directly with Explosive Shot.",
    "devCommentary": "We wanted Explosive Shot to define the Survival playstyle at all levels.",
    "visualEffect": "A massive burst of wilds erupts from the target upon the impact of Explosive Shot."
  }
];

export const CHANGELOG: string[] = [
  "General Changes",
  "Design Philosophy: The trees push deep synergies, enabling the elusive 'melee hunter' and making pets significantly more dangerous.",
  "Traps In Combat: Traps can now be used naturally in combat without requiring Feign Death for all Hunters.",
  "Pet Scaling: Hunter pets now inherently scale with the player's core stats.",
  "Beast Mastery",
  "Identity: A feral tactician coordinating massive burst damage alongside a drastically empowered companion.",
  "Core Foundation: Improved Aspect of the Hawk, Endurance Training, Focused Fire grouped in Tier 1.",
  "Cross-Pollination: Thick Hide, Improved Revive Pet, Pathfinding organized in Tier 2.",
  "Bestial Swiftness: Moved down to act as the 11-point anchor.",
  "Output: Unleashed Fury, Improved Mend Pet, Ferocity organized in Tier 3.",
  "Intimidation: Acts as the definitive Tier 4 control talent.",
  "Bestial Wrath: Positioned as the 21-point anchor.",
  "The Active Engine: Frenzy, Animal Handler organized in Tier 5.",
  "Mastery: Serpent's Swiftness, The Beast Within organized in Tier 6.",
  "Beast Mastery: Added as the 31-point capstone, enabling exotic tames and bonus pet talent points.",
  "Marksmanship",
  "Identity: A deadly, methodical sniper excelling at extreme ranges, sustained physical damage, and heavy burst combinations.",
  "Core Foundation: Improved Concussive Shot, Lethal Shots, Improved Hunter's Mark grouped in Tier 1.",
  "Cross-Pollination: Efficiency, Go for the Throat, Improved Arcane Shot organized in Tier 2.",
  "Aimed Shot: Moved down to serve as the 11-point anchor.",
  "Output: Rapid Killing, Mortal Shots, Concussive Barrage organized in Tier 3.",
  "Scatter Shot: Acts as the definitive Tier 4 control talent.",
  "Trueshot Aura: Positioned as the 21-point anchor.",
  "The Active Engine: Ranged Weapon Specialization, Careful Aim organized in Tier 5.",
  "Mastery: Master Marksman, Combat Experience organized in Tier 6.",
  "Chimera Shot: Added as the 31-point capstone.",
  "Survival",
  "Identity: A rugged skirmisher and trapper, heavily favoring Agility scaling, high-explosive traps, and potent melee strike capabilities.",
  "Core Foundation: Monster Slaying, Humanoid Slaying, Deflection, Savage Strikes grouped in Tier 1.",
  "Cross-Pollination: Entrapment, Survivalist, Improved Wing Clip organized in Tier 2.",
  "Deterrence: Moved down to serve as the 11-point anchor.",
  "Output: Trap Mastery, Surefooted, Improved Feign Death organized in Tier 3.",
  "Killer Instinct: Acts as the definitive Tier 4 combat modifier.",
  "Wyvern Sting: Positioned as the 21-point anchor.",
  "The Active Engine: Lightning Reflexes, Resourcefulness organized in Tier 5.",
  "Mastery: Expose Weakness, Master Tactical organized in Tier 6.",
  "Explosive Shot: Added as the 31-point capstone."
];
