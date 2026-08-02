import { Talent } from '../types/talents';

export const RETRIBUTION_TALENTS: any = [
  {
    "id": "imp_judgement",
    "name": "Improved Judgement",
    "icon": "spell_holy_righteousfury",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Decreases the cooldown of your Judgement spell by 1 sec.",
      "2"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "imp_bom",
    "name": "Improved Blessing of Might",
    "icon": "spell_holy_fistofjustice",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases the melee attack power bonus of your Blessing of Might by 5%.",
      "10",
      "15"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "divine_strength",
    "name": "Divine Strength",
    "icon": "spell_nature_strength",
    "maxPoints": 5,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases your Strength by 2%.",
      "4",
      "6",
      "8",
      "10"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "zealous_momentum",
    "name": "Zealous Momentum",
    "icon": "spell_holy_prayerofhealing02",
    "maxPoints": 2,
    "row": 1,
    "col": 0,
    "desc": [
      "After casting any Judgement, your movement speed is increased by 15% for 3 seconds, and you gain 15% resistance to slow effects for the duration.",
      "30 / 30"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "imp_sotc",
    "name": "Improved Seal of the Crusader",
    "icon": "spell_holy_holysmite",
    "maxPoints": 3,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases the melee attack power bonus of your Seal of the Crusader and the Holy damage increase of your Judgement by 10%. In addition, your Holy spells have a 1% increased critical strike chance against targets afflicted by your Judgement of the Crusader.",
      "20 / 2",
      "30 / 3"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "deflection",
    "name": "Deflection",
    "icon": "ability_parry",
    "maxPoints": 5,
    "row": 1,
    "col": 2,
    "desc": [
      "Increases your Parry chance by 1%. After parrying an attack, your next melee swing deals an additional 2% damage as Holy.",
      "2 / 4",
      "3 / 6",
      "4 / 8",
      "5 / 10"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "vindication",
    "name": "Vindication",
    "icon": "spell_holy_vindication",
    "maxPoints": 3,
    "row": 2,
    "col": 0,
    "desc": [
      "Your melee attacks have a chance to reduce the target's Attack Power and Spell Damage by 5% for 10 sec.",
      "10",
      "15"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "0/31/20 Protection AoE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "conviction",
    "name": "Conviction",
    "icon": "spell_holy_retributionaura",
    "maxPoints": 5,
    "row": 2,
    "col": 1,
    "desc": [
      "Increases your chance to get a critical strike with melee weapons by 1%.",
      "2",
      "3",
      "4",
      "5"
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "soc",
    "name": "Seal of Command",
    "icon": "ability_warrior_innerrage",
    "maxPoints": 1,
    "row": 2,
    "col": 2,
    "desc": [
      "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec."
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "poj",
    "name": "Pursuit of Justice",
    "icon": "spell_holy_persuitofjustice",
    "maxPoints": 2,
    "row": 2,
    "col": 3,
    "desc": [
      "Increases movement and mounted movement speed by 4%. Reduces the duration of all Root and Snare effects on you by 10%. This does not stack with other movement speed increasing effects.",
      "8 / 20"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "0/31/20 Protection AoE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "eye_for_an_eye",
    "name": "Eye for an Eye",
    "icon": "spell_holy_eyeforaneye",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "All spell criticals against you cause 15% of the damage taken to the caster as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
      "30"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "0/31/20 Protection AoE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "the_art_of_war",
    "name": "The Art of War",
    "icon": "ability_paladin_artofwar",
    "maxPoints": 2,
    "row": 5,
    "col": 0,
    "desc": [
      "Critical hits with your melee auto-attacks reduce the cast time of your next Flash of Light or Exorcism by 50%.",
      "100%"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "imp_ret_aura",
    "name": "Improved Retribution Aura",
    "icon": "spell_holy_auraoflight",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Increases the damage done by your Retribution Aura by 25%, and causes your Retribution Aura to generate a high amount of threat for the party members it protects.",
      "50"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "two_handed_spec",
    "name": "Two-Handed Weapon Specialization",
    "icon": "inv_hammer_04",
    "maxPoints": 3,
    "row": 3,
    "col": 3,
    "desc": [
      "Increases the damage you deal with two-handed melee weapons by 2%.",
      "4",
      "6"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "crusader_strike",
    "name": "Crusader Strike",
    "icon": "spell_holy_crusaderstrike",
    "maxPoints": 1,
    "row": 4,
    "col": 0,
    "desc": [
      "An instant strike that causes 110% of your weapon damage and refreshes all Judgements on the target."
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "0/31/20 Protection AoE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "sanctity_aura",
    "name": "Sanctity Aura",
    "icon": "spell_holy_mindvision",
    "maxPoints": 1,
    "row": 4,
    "col": 2,
    "desc": [
      "Increases Holy damage done by party members within 30 yards by 10%. Players may only have one Aura on them per Paladin at any one time."
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "imp_sanctity_aura",
    "name": "Improved Sanctity Aura",
    "icon": "spell_holy_mindvision",
    "maxPoints": 2,
    "row": 4,
    "col": 3,
    "requires": {
      "id": "sanctity_aura",
      "points": 1
    },
    "desc": [
      "The amount of damage caused by targets affected by Sanctity Aura is increased by 1%.",
      "2"
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "vengeance",
    "name": "Vengeance",
    "icon": "spell_nature_purge",
    "maxPoints": 5,
    "row": 5,
    "col": 1,
    "requires": {
      "id": "conviction",
      "points": 5
    },
    "desc": [
      "Gives you a 3% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.",
      "6",
      "9",
      "12",
      "15"
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "righteous_vengeance",
    "name": "Righteous Vengeance",
    "icon": "ability_paladin_righteousvengeance",
    "maxPoints": 3,
    "row": 5,
    "col": 2,
    "desc": [
      "Your critical strikes with Judgement and Crusader Strike deal an additional 10% damage as a bleed over 8 seconds.",
      "20%",
      "30%"
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "divine_storm",
    "name": "Divine Storm",
    "icon": "ability_paladin_divinestorm",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "desc": [
      "An instant weapon attack that causes 110% of weapon damage to up to 4 enemies within 8 yards. The Divine Storm heals up to 3 party or raid members totaling 25% of the damage caused."
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  }
];

export const HOLY_TALENTS: any = [
  {
    "id": "spiritual_focus",
    "name": "Spiritual Focus",
    "icon": "spell_arcane_blink",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Gives your Flash of Light and Holy Light spells a 35% chance to not lose casting time when you take damage.",
      "70"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "benediction",
    "name": "Benediction",
    "icon": "spell_frost_windwalkon",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Reduces the mana cost of your Judgement and Seal spells by 5%.",
      "10",
      "15"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "divine_intellect",
    "name": "Divine Intellect",
    "icon": "spell_nature_sleep",
    "maxPoints": 5,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases your total Intellect by 2%.",
      "4",
      "6",
      "8",
      "10"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "pure_of_heart",
    "name": "Pure of Heart",
    "icon": "spell_holy_pureofheart",
    "maxPoints": 2,
    "row": 1,
    "col": 0,
    "desc": [
      "Reduces the duration of all Curse, Disease, and Poison effects on you and your allies by 15%.",
      "30%"
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "0/31/20 Protection AoE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "guiding_light",
    "name": "Guiding Light",
    "icon": "spell_holy_holyguidance",
    "maxPoints": 5,
    "row": 1,
    "col": 1,
    "desc": [
      "Reduces the chance your Holy spells will be resisted by 1%, and reduces the mana cost of your Purify, Cleanse, and Healing spells by 2%.",
      "2 / 4",
      "3 / 6",
      "4 / 8",
      "5 / 10"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "imp_sor",
    "name": "Improved Seal of Righteousness",
    "icon": "ability_thunderbolt",
    "maxPoints": 5,
    "row": 1,
    "col": 2,
    "desc": [
      "Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 3%. In addition, your Judgement of Righteousness increases the Holy damage the target takes by 2% for 10 sec.",
      "6 / 4",
      "9 / 6",
      "12 / 8",
      "15 / 10"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "healing_light",
    "name": "Healing Light",
    "icon": "spell_holy_holybolt",
    "maxPoints": 3,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 4%.",
      "8",
      "12"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "aura_mastery",
    "name": "Aura Mastery",
    "icon": "spell_holy_auramastery",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "Activates your Aura Mastery, increasing the radius of your Auras to 40 yards and increasing the effectiveness of your active Aura by 100% for 6 sec."
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "imp_loh",
    "name": "Improved Lay on Hands",
    "icon": "spell_holy_layonhands",
    "maxPoints": 2,
    "row": 2,
    "col": 2,
    "desc": [
      "Gives the target of your Lay on Hands spell a 15% bonus to their armor value from items for 2 min. In addition, the cooldown for your Lay on Hands spell is reduced by 10 min.",
      "30 / 20"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "0/31/20 Protection AoE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "unyielding_faith",
    "name": "Unyielding Faith",
    "icon": "spell_holy_unyieldingfaith",
    "maxPoints": 2,
    "row": 2,
    "col": 3,
    "desc": [
      "Reduces the duration of all crowd control effects on you by 10%.",
      "20%"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "0/31/20 Protection AoE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "illumination",
    "name": "Illumination",
    "icon": "spell_holy_greaterheal",
    "maxPoints": 3,
    "row": 3,
    "col": 1,
    "desc": [
      "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 20% chance to gain Mana equal to the base cost of the spell.",
      "40%",
      "60%"
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "imp_bow",
    "name": "Improved Blessing of Wisdom",
    "icon": "spell_holy_sealofwisdom",
    "maxPoints": 2,
    "row": 3,
    "col": 2,
    "desc": [
      "Increases the effect of your Blessing of Wisdom spell by 10%.",
      "20"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "divine_favor",
    "name": "Divine Favor",
    "icon": "spell_holy_heal",
    "maxPoints": 1,
    "row": 4,
    "col": 1,
    "requires": {
      "id": "illumination",
      "points": 3
    },
    "desc": [
      "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance."
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "lasting_judgement",
    "name": "Lasting Judgement",
    "icon": "spell_holy_healingaura",
    "maxPoints": 3,
    "row": 4,
    "col": 2,
    "desc": [
      "Increases the duration of your Judgement of Light and Judgement of Wisdom by 10 sec, and your healing spells have a 10% chance to trigger your active Judgement of Light or Wisdom on the healed target.",
      "20 / 20",
      "30 / 30"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "judgements_of_the_pure",
    "name": "Judgements of the Pure",
    "icon": "ability_paladin_judgementofthepure",
    "maxPoints": 5,
    "row": 5,
    "col": 1,
    "desc": [
      "Your Judgement spells increase your spell casting speed by 3% for 1 minute.",
      "6%",
      "9%",
      "12%",
      "15%"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "holy_power",
    "name": "Holy Power",
    "icon": "spell_holy_power",
    "maxPoints": 5,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases the critical effect chance of your Holy spells by 1%.",
      "2",
      "3",
      "4",
      "5"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "holy_shock",
    "name": "Holy Shock",
    "icon": "spell_holy_searinglight",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "judgements_of_the_pure",
      "points": 5
    },
    "desc": [
      "Blasts the target with Holy energy, causing 204 to 220 Holy damage to an enemy, or 204 to 220 healing to an ally. Cooldown reduced to 15 seconds."
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A consecrated aura burns the ground."
  }
];

export const PROTECTION_TALENTS: any = [
  {
    "id": "divinity",
    "name": "Divinity",
    "icon": "spell_holy_blindingheal",
    "maxPoints": 2,
    "row": 0,
    "col": 0,
    "desc": [
      "Increases all healing done by you and all healing received by you by 2%.",
      "4"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "precision",
    "name": "Precision",
    "icon": "ability_rogue_ambush",
    "maxPoints": 3,
    "row": 0,
    "col": 1,
    "desc": [
      "Increases your chance to hit with melee weapons by 1%.",
      "2",
      "3"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "A high-risk, high-reward option for seasoned players.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "redoubt",
    "name": "Redoubt",
    "icon": "ability_defend",
    "maxPoints": 5,
    "row": 0,
    "col": 2,
    "desc": [
      "Increases your chance to block attacks with your shield by 6% after taking a melee attack. Lasts 10 sec or 5 blocks.",
      "12",
      "18",
      "24",
      "30"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A righteous strike used during the cleansing of Stratholme.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "toughness",
    "name": "Toughness",
    "icon": "spell_holy_devotion",
    "maxPoints": 5,
    "row": 1,
    "col": 3,
    "desc": [
      "Increases your armor value from items by 2%, and reduces the casting time lost when taking melee attacks by 10%.",
      "4 / 20",
      "6 / 30",
      "8 / 40",
      "10 / 50"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "righteous_resolve",
    "name": "Righteous Resolve",
    "icon": "spell_holy_righteousfury",
    "maxPoints": 3,
    "row": 1,
    "col": 0,
    "desc": [
      "Reduces the mana cost of your Seals and Judgements by 10%, and blocking an attack has a 33% chance to restore 2% of your base mana.",
      "20 / 66",
      "30 / 100"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "We wanted this talent to feel impactful even at early levels.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "imp_devotion",
    "name": "Improved Devotion Aura",
    "icon": "spell_holy_devotionaura",
    "maxPoints": 2,
    "row": 1,
    "col": 1,
    "desc": [
      "Increases the armor bonus of your Devotion Aura by 10%.",
      "20"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "bos",
    "name": "Blessing of Sanctuary",
    "icon": "spell_nature_lightningshield",
    "maxPoints": 1,
    "row": 2,
    "col": 1,
    "desc": [
      "Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 5 min. In addition, when the target blocks a melee attack the attacker will take 14 Holy damage. Players may only have one Blessing on them per Paladin at any one time."
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Highly effective when used alongside your class tier sets.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "anticipation",
    "name": "Anticipation",
    "icon": "spell_magic_lesserinvisibilty",
    "maxPoints": 5,
    "row": 2,
    "col": 0,
    "desc": [
      "Increases your Defense skill by 2. Whenever you Dodge or Parry a melee attack, the damage absorbed by your next Block is increased by 10%.",
      "4 / 20",
      "6 / 30",
      "8 / 40",
      "10 / 50"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "sacred_duty",
    "name": "Sacred Duty",
    "icon": "spell_holy_divineintervention",
    "maxPoints": 2,
    "row": 2,
    "col": 3,
    "desc": [
      "Increases your total Stamina by 2%, and reduces the cooldown of your Divine Protection and Divine Shield by 30 seconds.",
      "4% / 60 seconds"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "shield_spec",
    "name": "Shield Specialization",
    "icon": "inv_shield_06",
    "maxPoints": 3,
    "row": 3,
    "col": 2,
    "requires": {
      "id": "redoubt",
      "points": 5
    },
    "desc": [
      "Increases the amount of damage absorbed by your shield by 10% and has a 33% chance to reflect 15% of the blocked damage as Holy damage to the attacker.",
      "20 / 66",
      "30 / 100"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "guardians_favor",
    "name": "Guardian's Favor",
    "icon": "spell_holy_sealofprotection",
    "maxPoints": 2,
    "row": 3,
    "col": 0,
    "desc": [
      "Reduces the cooldown of Blessing of Protection by 60 sec, and while Blessing of Freedom is active, the target's movement speed is increased by 10%.",
      "120 / 20"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Combines exceptionally well with your primary cooldowns.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Reduces the cooldown of your leg rune by 2 seconds.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "imp_rf",
    "name": "Improved Righteous Fury",
    "icon": "spell_holy_sealoffury",
    "maxPoints": 3,
    "row": 3,
    "col": 1,
    "desc": [
      "Increases the amount of threat generated by your Righteous Fury spell by 16% and reduces all damage taken while it is active by 2%.",
      "33 / 4",
      "50 / 6"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/31/20 Protection AoE",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Modifies your glove rune to also heal for a minor amount.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "holy_shield",
    "name": "Holy Shield",
    "icon": "spell_holy_blessingofprotection",
    "maxPoints": 1,
    "row": 4,
    "col": 2,
    "requires": {
      "id": "shield_spec",
      "points": 3
    },
    "desc": [
      "Increases chance to block by 30% for 10 sec, and deals 65 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges."
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Perfect for area-of-effect focused builds.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "31/20/0 Deep Holy PvE"
    ],
    "runeInteractions": "Increases the proc chance of your chest rune by 5%.",
    "devCommentary": "This is designed to be the cornerstone of this tree's identity.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  },
  {
    "id": "reckoning",
    "name": "Reckoning",
    "icon": "spell_holy_blessingofstrength",
    "maxPoints": 3,
    "row": 4,
    "col": 1,
    "desc": [
      "Gives you a 4% chance after taking a damaging attack to gain an extra attack.",
      "7",
      "10"
    ],
    "statScaling": "Scales with Strength and Melee Attack Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "ardent_defender",
    "name": "Ardent Defender",
    "icon": "spell_holy_ardentdefender",
    "maxPoints": 3,
    "row": 5,
    "col": 1,
    "desc": [
      "Reduces damage taken when below 35% health by 10%, or prevents death once every 2 minutes.",
      "20%",
      "30%"
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A foundational tenet of the Knights of the Silver Hand.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Intended to smooth out the class's rotation in long fights.",
    "visualEffect": "A blinding flash of holy light."
  },
  {
    "id": "one_handed_spec",
    "name": "One-Handed Weapon Specialization",
    "icon": "inv_sword_20",
    "maxPoints": 5,
    "row": 5,
    "col": 2,
    "desc": [
      "Increases the damage you deal with one-handed melee weapons by 2%.",
      "4",
      "6",
      "8",
      "10"
    ],
    "statScaling": "Holy damage scales with Spell Power.",
    "loreOrigins": "A rigorous devotion taught by the Blood Knights.",
    "synergies": [
      "Creates a feedback loop when paired with rapid attacks.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "31/20/0 Deep Holy PvE",
      "0/20/31 Retribution PvP"
    ],
    "runeInteractions": "Your bracer rune now gains 10% more effectiveness.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "A consecrated aura burns the ground."
  },
  {
    "id": "avengers_shield",
    "name": "Avenger's Shield",
    "icon": "spell_holy_avengersshield",
    "maxPoints": 1,
    "row": 6,
    "col": 1,
    "requires": {
      "id": "ardent_defender",
      "points": 3
    },
    "desc": [
      "Hurls a holy shield at the enemy, dealing 400 to 480 Holy damage, Dazing them and then jumping to additional nearby enemies. Affects 3 total targets. Lasts 10 sec."
    ],
    "statScaling": "Scales with Spell Power and Healing Power.",
    "loreOrigins": "A blessing derived from the Naaru's light.",
    "synergies": [
      "Provides a massive power spike when paired with critical strike rating.",
      "Crucial for optimizing damage or healing output."
    ],
    "recommendedBuilds": [
      "0/20/31 Retribution PvP",
      "Hybrid PvP/PvE"
    ],
    "runeInteractions": "Causes your helm rune to trigger an additional time.",
    "devCommentary": "Players often ignored this, so we added massive scaling to make it viable.",
    "visualEffect": "Your weapon is wreathed in golden fire."
  }
];

export const CHANGELOG: string[] = [
  "General Changes",
  "Design Philosophy: Paladin talents have been heavily reorganized to bring WotLK-level cohesion and specialized utility to the Vanilla baseline. Active abilities have been shifted downwards, ensuring powerful defining traits are unlocked sooner.",
  "Retribution",
  "Identity: Evolves from a passive auto-attacker into a relentless, momentum-driven crusader with an active rotation and potent burst damage capability.",
  "Core Foundation: Improved Blessing of Might, Benediction, Improved Judgement grouped in Tier 1.",
  "Cross-Pollination: Deflection, Improved Retribution Aura, Two-Handed Weapon Specialization organized in Tier 2.",
  "Seal of Command: Moved down to serve as the defining 11-point anchor.",
  "Pursuit of Justice: Provides a solid passive mobility option in Tier 3.",
  "Vengeance: Buffed and compressed to 3 points in Tier 4 to supercharge critical strike scaling.",
  "Repentance: Positioned as the 21-point anchor, providing essential crowd control.",
  "The Active Engine: Judgements of the Wise, Sanctity Aura, Fanaticism organized in Tier 5 to provide crucial mana sustain and damage pacing.",
  "Crusader Strike: Added as the 31-point capstone, providing a fast standard melee strike to weave between auto-attacks.",
  "Holy",
  "Identity: Cements its role as the premier single-target, high-armor triage healer by shifting core throughput talents lower and introducing vital WotLK mechanics.",
  "Core Foundation: Divine Intellect, Spiritual Focus, Improved Seal of Righteousness grouped in Tier 1.",
  "Cross-Pollination: Healing Light, Unyielding Faith, Illumination organized in Tier 2.",
  "Divine Favor: Moved down as the reliable 11-point anchor.",
  "Sanctified Light: Provides a passive boost to Holy Light critical strike chance in Tier 3.",
  "Output & Scaling: Holy Power, Light's Grace fill out Tier 4 to reduce cast times and boost output.",
  "Holy Shock: Positioned as the 21-point anchor, providing crucial instant-cast healing or damage.",
  "The Active Engine: Infusion of Light, Purifying Power organized in Tier 5 for reactive gameplay options.",
  "Beacon of Light: Added as the ultimate 31-point capstone, allowing massive multi-target triage.",
  "Protection",
  "Identity: Transforms from a niche off-tank into an impenetrable, spell-reflecting fortress with vastly improved threat generation and active defensive layers.",
  "Core Foundation: Divinity, Redoubt, and Precision grouped in Tier 1.",
  "Cross-Pollination: Anticipation, Guardian's Favor, Shield Specialization organized in Tier 2.",
  "Blessing of Kings: Moved down to serve as the 11-point anchor, bringing vital raid utility.",
  "Threat & Mitigation: Improved Righteous Fury, Reckoning organized in Tier 3.",
  "Scaling: One-Handed Weapon Specialization, Sacred Duty fill out Tier 4.",
  "Holy Shield: Positioned as the 21-point anchor.",
  "The Active Engine: Ardent Defender, Combat Expertise organized in Tier 5 for profound late-fight survival.",
  "Avenger's Shield: Added as the 31-point capstone to solve initial pull mechanics and provide burst threat."
];
