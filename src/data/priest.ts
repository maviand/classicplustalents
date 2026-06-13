import { Talent } from '../types/talents';

export const PRIEST_DISC_TALENTS: Talent[] = [
  // Tier 1
  { id: 'unbreakable_will', name: 'Unbreakable Will', icon: 'spell_magic_magearmor', maxPoints: 5, row: 0, col: 0, desc: ["Reduces the duration of Stun, Fear, and Silence effects done to you by 3%.", "6%", "9%", "12%", "15%"] },
  { id: 'wand_spec', name: 'Wand Specialization', icon: 'inv_wand_01', maxPoints: 3, row: 0, col: 1, desc: ["Increases your damage with Wands by 8%.", "17%", "25%"] },
  { id: 'imp_pwf', name: 'Improved Power Word: Fortitude', icon: 'spell_holy_wordfortitude', maxPoints: 2, row: 0, col: 2, desc: ["Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by 15%.", "30%"] },

  // Tier 2
  { id: 'imp_pws', name: 'Improved Power Word: Shield', icon: 'spell_holy_powerwordshield', maxPoints: 3, row: 1, col: 0, desc: ["Increases the damage absorbed by your Power Word: Shield by 10%.", "20%", "30%"] },
  { id: 'mental_agility', name: 'Mental Agility', icon: 'ability_hibernation', maxPoints: 3, row: 1, col: 1, desc: ["Reduces the mana cost of your instant cast spells by 4%.", "7%", "10%"] },
  { id: 'martyrdom', name: 'Martyrdom', icon: 'spell_nature_tranquility', maxPoints: 2, row: 1, col: 2, desc: ["Gives you a 50% chance to gain the Focused Casting effect that lasts for 6 seconds after being the victim of a critical strike. The Focused Casting effect prevents you from losing casting time when taking damage.", "100%"] },
  { id: 'imp_inner_fire', name: 'Improved Inner Fire', icon: 'spell_holy_innerfire', maxPoints: 2, row: 1, col: 3, desc: ["Increases the Armor bonus of your Inner Fire spell by 15% and increases the number of charges by 10.", "30% / 20 charges"] },

  // Tier 3
  { id: 'mental_strength', name: 'Mental Strength', icon: 'spell_nature_enchantarmor', maxPoints: 5, row: 2, col: 0, desc: ["Increases your maximum Mana by 2%.", "4%", "6%", "8%", "10%"] },
  { id: 'inner_focus', name: 'Inner Focus', icon: 'spell_frost_windwalkon', maxPoints: 1, row: 2, col: 1, desc: ["When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect. 3 minute cooldown."] },
  { id: 'meditation', name: 'Meditation', icon: 'spell_nature_sleep', maxPoints: 3, row: 2, col: 2, desc: ["Allows 10% of your Mana regeneration to continue while casting.", "20%", "30%"] },

  // Tier 4
  { id: 'soul_warding', name: 'Soul Warding', icon: 'spell_holy_powerwordshield', maxPoints: 2, row: 3, col: 0, desc: ["Reduces the cooldown of your Power Word: Shield by 1 second, and reduces its mana cost by 5%.", "2 seconds / 10%"] },
  { id: 'imp_divine_spirit', name: 'Improved Divine Spirit', icon: 'spell_holy_divinespirit', maxPoints: 2, row: 3, col: 1, desc: ["Your Divine Spirit buff increases spell damage and healing by an amount equal to 5% of your total Spirit.", "10%"] },
  { id: 'focused_power', name: 'Focused Power', icon: 'spell_nature_focusedmind', maxPoints: 3, row: 3, col: 2, desc: ["Increases your chance to hit with all spells by 1% and reduces the cast time of your Mass Dispel by 0.5 seconds.", "2% / 1.0 seconds", "3% / 1.5 seconds"] },

  // Tier 5
  { id: 'absolution', name: 'Absolution', icon: 'spell_holy_absolution', maxPoints: 2, row: 4, col: 0, desc: ["Reduces the mana cost of your Dispel Magic, Cure Disease, and Abolish Disease spells by 10%.", "20%"] },
  { id: 'power_infusion', name: 'Power Infusion', icon: 'spell_holy_powerinfusion', maxPoints: 1, row: 4, col: 1, requires: { id: 'imp_divine_spirit', points: 1 }, desc: ["Infuses the target with power, increasing their spell damage and healing by 20% for 15 seconds. 3 minute cooldown."] },
  { id: 'enlightenment', name: 'Enlightenment', icon: 'spell_nature_enchantarmor', maxPoints: 3, row: 4, col: 2, desc: ["Increases your total Stamina, Intellect, and Spirit by 1%.", "2%", "3%"] },

  // Tier 6
  { id: 'reflective_shield', name: 'Reflective Shield', icon: 'spell_holy_powerwordshield', maxPoints: 3, row: 5, col: 0, requires: { id: 'imp_pws', points: 3 }, desc: ["Causes 10% of the damage you absorb with Power Word: Shield to reflect back at the attacker. This damage causes no threat.", "20%", "30%"] },
  { id: 'aspiration', name: 'Aspiration', icon: 'spell_holy_aspiration', maxPoints: 2, row: 5, col: 1, desc: ["Reduces the cooldown of your Penance, Power Infusion, and Inner Focus spells by 10%.", "20%"] },
  { id: 'rapture', name: 'Rapture', icon: 'spell_holy_rapture', maxPoints: 2, row: 5, col: 2, desc: ["When your Power Word: Shield is completely absorbed or dispelled, you instantly restore 2% of your maximum mana. This effect can only occur once every 12 seconds.", "4%"] },

  // Tier 7
  { id: 'penance', name: 'Penance', icon: 'spell_holy_penance', maxPoints: 1, row: 6, col: 1, requires: { id: 'power_infusion', points: 1 }, desc: ["Launches a volley of holy light at the target, causing X Holy damage to an enemy, or Y healing to an ally, instantly and every 1 second for 2 seconds. 10 second cooldown."] }
];

export const PRIEST_HOLY_TALENTS: Talent[] = [
  // Tier 1
  { id: 'healing_focus', name: 'Healing Focus', icon: 'spell_holy_healingfocus', maxPoints: 2, row: 0, col: 0, desc: ["Gives you a 35% chance to avoid interruption caused by damage while casting any healing spell.", "70%"] },
  { id: 'imp_renew', name: 'Improved Renew', icon: 'spell_holy_renew', maxPoints: 3, row: 0, col: 1, desc: ["Increases the amount healed by your Renew spell by 5%.", "10%", "15%"] },
  { id: 'spiritual_guidance', name: 'Spiritual Guidance', icon: 'spell_holy_spiritualguidence', maxPoints: 5, row: 0, col: 2, desc: ["Increases spell damage and healing by up to 5% of your total Spirit.", "10%", "15%", "20%", "25%"] },

  // Tier 2
  { id: 'spell_warding', name: 'Spell Warding', icon: 'spell_holy_spellwarding', maxPoints: 2, row: 1, col: 0, desc: ["Reduces all spell damage taken by 5%.", "10%"] },
  { id: 'divine_fury', name: 'Divine Fury', icon: 'spell_holy_sealofwrath', maxPoints: 5, row: 1, col: 1, desc: ["Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.1 seconds.", "0.2 seconds", "0.3 seconds", "0.4 seconds", "0.5 seconds"] },
  { id: 'holy_specialization', name: 'Holy Specialization', icon: 'spell_holy_sealofsalvation', maxPoints: 3, row: 1, col: 2, desc: ["Increases the critical effect chance of your Holy spells by 2%.", "4%", "6%"] },

  // Tier 3
  { id: 'holy_nova', name: 'Holy Nova', icon: 'spell_holy_holynova', maxPoints: 1, row: 2, col: 0, desc: ["Causes an explosion of holy light around the caster, causing Holy damage to all enemies within 10 yards and healing all party members within 10 yards. These effects cause no threat."] },
  { id: 'imp_healing', name: 'Improved Healing', icon: 'spell_holy_heal02', maxPoints: 3, row: 2, col: 1, desc: ["Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by 5%.", "10%", "15%"] },
  { id: 'inspiration', name: 'Inspiration', icon: 'spell_holy_layonhands', maxPoints: 3, row: 2, col: 2, requires: { id: 'holy_specialization', points: 3 }, desc: ["Increases your target's armor by 8% for 15 seconds after getting a critical effect from your Flash Heal, Heal, Greater Heal, or Prayer of Healing.", "16%", "25%"] },
  { id: 'holy_concentration', name: 'Holy Concentration', icon: 'spell_holy_fanaticism', maxPoints: 3, row: 2, col: 3, desc: ["Gives you a 5% chance to enter a Clearcasting state after casting Flash Heal or Greater Heal.", "10%", "15%"] },

  // Tier 4
  { id: 'holy_reach', name: 'Holy Reach', icon: 'spell_holy_purify', maxPoints: 2, row: 3, col: 0, desc: ["Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by 10%.", "20%"] },
  { id: 'spiritual_healing', name: 'Spiritual Healing', icon: 'spell_nature_moonglow', maxPoints: 5, row: 3, col: 1, desc: ["Increases the amount healed by your healing spells by 2%.", "4%", "6%", "8%", "10%"] },

  // Tier 5
  { id: 'blessed_resilience', name: 'Blessed Resilience', icon: 'spell_holy_blessedresillience', maxPoints: 2, row: 4, col: 0, desc: ["Critical hits made against you have a 50% chance to prevent you from being critically hit again for 6 seconds.", "100%"] },
  { id: 'spirit_of_redemption', name: 'Spirit of Redemption', icon: 'inv_enchant_essenceeternallarge', maxPoints: 1, row: 4, col: 1, requires: { id: 'spiritual_healing', points: 5 }, desc: ["Upon death, the priest becomes the Spirit of Redemption for 15 seconds. The Spirit cannot move, attack, be attacked, or be targeted by any spells. While in this form, the priest can cast any healing spell free of cost. When the effect ends, the priest dies."] },
  { id: 'surge_of_light', name: 'Surge of Light', icon: 'spell_holy_surgeoflight', maxPoints: 3, row: 4, col: 2, desc: ["Your spell critical strikes have a 33% chance to cause your next Smite or Flash Heal to be instant cast, cost no mana, but be incapable of a critical hit.", "66%", "100%"] },

  // Tier 6
  { id: 'test_of_faith', name: 'Test of Faith', icon: 'spell_holy_testoffaith', maxPoints: 2, row: 5, col: 0, desc: ["Increases healing by 5% on friendly targets at or below 50% health.", "10%"] },
  { id: 'empowered_healing', name: 'Empowered Healing', icon: 'spell_holy_greaterheal', maxPoints: 3, row: 5, col: 1, desc: ["Your Greater Heal spell gains an additional 10% and your Flash Heal gains an additional 5% of your bonus healing effects.", "20% / 10%", "30% / 15%"] },
  { id: 'serendipity', name: 'Serendipity', icon: 'spell_holy_serendipity', maxPoints: 3, row: 5, col: 2, desc: ["When you heal with Flash Heal, the cast time of your next Greater Heal or Prayer of Healing spell is reduced by 4%, stacking up to 3 times. Lasts 20 seconds.", "8%", "12%"] },

  // Tier 7
  { id: 'circle_of_healing', name: 'Circle of Healing', icon: 'spell_holy_circleofrenewal', maxPoints: 1, row: 6, col: 1, requires: { id: 'spirit_of_redemption', points: 1 }, desc: ["Heals up to 5 friendly party members within 15 yards of the target for X. 6 second cooldown."] }
];

export const PRIEST_SHADOW_TALENTS: Talent[] = [
  // Tier 1
  { id: 'spirit_tap', name: 'Spirit Tap', icon: 'spell_shadow_requiem', maxPoints: 2, row: 0, col: 0, desc: ["Gives you a 50% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. Your Mana may regenerate at a 50% rate while casting.", "100%"] },
  { id: 'imp_swp', name: 'Improved Shadow Word: Pain', icon: 'spell_shadow_shadowwordpain', maxPoints: 3, row: 0, col: 1, desc: ["Increases the duration of your Shadow Word: Pain spell by 2 seconds.", "4 seconds", "6 seconds"] },
  { id: 'shadow_focus', name: 'Shadow Focus', icon: 'spell_shadow_burningspirit', maxPoints: 5, row: 0, col: 2, desc: ["Reduces your target's chance to resist your Shadow spells by 2%.", "4%", "6%", "8%", "10%"] },

  // Tier 2
  { id: 'shadow_affinity', name: 'Shadow Affinity', icon: 'spell_shadow_shadowward', maxPoints: 3, row: 1, col: 0, desc: ["Reduces the threat generated by your Shadow spells by 8%.", "16%", "25%"] },
  { id: 'imp_mind_blast', name: 'Improved Mind Blast', icon: 'spell_shadow_unholyfrenzy', maxPoints: 2, row: 1, col: 1, desc: ["Reduces the cooldown of your Mind Blast spell by 1 second.", "2 seconds"] },
  { id: 'darkness', name: 'Darkness', icon: 'spell_shadow_twilight', maxPoints: 5, row: 1, col: 2, desc: ["Increases your Shadow spell damage by 2%.", "4%", "6%", "8%", "10%"] },

  // Tier 3
  { id: 'imp_psychic_scream', name: 'Improved Psychic Scream', icon: 'spell_shadow_psychicscream', maxPoints: 2, row: 2, col: 0, desc: ["Reduces the cooldown of your Psychic Scream spell by 2 seconds.", "4 seconds"] },
  { id: 'mind_flay', name: 'Mind Flay', icon: 'spell_shadow_siphonmana', maxPoints: 1, row: 2, col: 1, requires: { id: 'imp_mind_blast', points: 2 }, desc: ["Assault the target's mind with Shadow energy, causing damage over 3 seconds and slowing their movement speed by 50%."] },
  { id: 'shadow_weaving', name: 'Shadow Weaving', icon: 'spell_shadow_blackplague', maxPoints: 5, row: 2, col: 2, desc: ["Your Shadow damage spells have a 20% chance to cause your target to be vulnerable to Shadow damage. This vulnerability increases the Shadow damage dealt to your target by 3% and lasts 15 seconds. Stacks up to 5 times.", "40%", "60%", "80%", "100%"] },

  // Tier 4
  { id: 'shadow_reach', name: 'Shadow Reach', icon: 'spell_shadow_chilltouch', maxPoints: 2, row: 3, col: 0, desc: ["Increases the range of your offensive Shadow spells by 10%.", "20%"] },
  { id: 'imp_shadowform', name: 'Improved Shadowform', icon: 'spell_shadow_improvedshadowform', maxPoints: 2, row: 3, col: 1, desc: ["Reduces the casting time lost when taking damage while in Shadowform by 35%, and your Fade ability has a 50% chance to remove all movement impairing effects when used.", "70% / 100%"] },
  { id: 'mind_melt', name: 'Mind Melt', icon: 'spell_shadow_skull', maxPoints: 3, row: 3, col: 2, desc: ["Increases the critical strike chance of your Mind Blast and Shadow Word: Death spells by 2%.", "4%", "6%"] },

  // Tier 5
  { id: 'focused_mind', name: 'Focused Mind', icon: 'spell_nature_focusedmind', maxPoints: 2, row: 4, col: 0, desc: ["Reduces the mana cost of your Mind Blast, Mind Flay, and Mind Control spells by 10%.", "20%"] },
  { id: 'shadowform', name: 'Shadowform', icon: 'spell_shadow_shadowform', maxPoints: 1, row: 4, col: 1, requires: { id: 'mind_flay', points: 1 }, desc: ["Assume a Shadowform, increasing your Shadow damage by 15% and reducing Physical damage done to you by 15%. However, you may not cast Holy spells while in this form."] },
  { id: 'vampiric_embrace', name: 'Vampiric Embrace', icon: 'spell_shadow_unsummonbuilding', maxPoints: 3, row: 4, col: 2, desc: ["Passive. Fills you with the embrace of Shadow energy, causing you to heal all party members for 5% of any single-target Shadow damage you deal.", "10%", "15%"] },

  // Tier 6
  { id: 'shadow_power', name: 'Shadow Power', icon: 'spell_shadow_shadowpower', maxPoints: 2, row: 5, col: 0, desc: ["Increases the critical strike damage bonus of your Mind Blast and Shadow Word: Death spells by 50%.", "100%"] },
  { id: 'pain_and_suffering', name: 'Pain and Suffering', icon: 'spell_shadow_painandsuffering', maxPoints: 3, row: 5, col: 1, desc: ["Your Mind Flay ticks have a 33% chance to refresh the duration of your Shadow Word: Pain on the target.", "66%", "100%"] },
  { id: 'misery', name: 'Misery', icon: 'spell_shadow_misery', maxPoints: 3, row: 5, col: 2, desc: ["Your Shadow Word: Pain, Mind Flay, and Vampiric Touch spells also increase the spell damage taken by the target by 1%.", "2%", "3%"] },

  // Tier 7
  { id: 'vampiric_touch', name: 'Vampiric Touch', icon: 'spell_holy_stoicism', maxPoints: 1, row: 6, col: 1, requires: { id: 'shadowform', points: 1 }, desc: ["Causes Shadow damage over 15 seconds to your target and causes all party members to gain mana equal to 5% of any Shadow damage you deal."] }
];

export const CHANGELOG: string[] = [
  "General Changes",
  "Design Philosophy: By restructuring defensive engines and sliding Shadowform into the mid-game, Priests become highly dynamic masters of light and void.",
  "Lightwell: This profound healing utility has been made a baseline ability for all Priests.",
  "Divine Spirit: This essential group buff has been made baseline for all Priests.",
  "Discipline",
  "Identity: Officially becomes the premier mitigation and single-target triage spec by moving massive cooldowns earlier and introducing Penance and Rapture.",
  "Core Foundation: Unbreakable Will, Wand Specialization, Improved Power Word: Fortitude grouped in Tier 1.",
  "Cross-Pollination: Improved Power Word: Shield, Mental Agility, Martyrdom, Improved Inner Fire organized in Tier 2.",
  "Inner Focus: Positioned as 11-point anchor.",
  "Mana Pool: Mental Strength, Meditation organized in Tier 3.",
  "Raid Viability: Improved Divine Spirit, Focused Power fill out Tier 4.",
  "Power Infusion: Positioned as 21-point anchor.",
  "Stats & Cost: Enlightenment, Absolution organized in Tier 5.",
  "Sustain & Mastery: Reflective Shield, Rapture organized in Tier 6.",
  "Penance: Added as the 31-point capstone.",
  "Holy",
  "Identity: holy transforms into a highly reactive, output-heavy guardian via instant-cast procs and mid-game mobility.",
  "Core Foundation: Spiritual Guidance (moved to Tier 1!), Improved Renew, Healing Focus grouped in Tier 1.",
  "Cross-Pollination: Divine Fury, Holy Specialization, Spell Warding organized in Tier 2.",
  "Holy Nova: Positioned as 11-point anchor.",
  "Procs & Costs: Inspiration, Improved Healing organized in Tier 3.",
  "Output & Scaling: Spiritual Healing, Holy Reach fill out Tier 4.",
  "Spirit of Redemption: Positioned as 21-point anchor.",
  "The Active Engine: Surge of Light, Blessed Resilience organized in Tier 5.",
  "Sustain & Mastery: Empowered Healing, Test of Faith organized in Tier 6.",
  "Circle of Healing: Added as the 31-point capstone.",
  "Shadow",
  "Identity: Becomes the ultimate vampiric mana-battery by sliding Shadowform down to 21 points and implementing Vampiric Touch at 31.",
  "Core Foundation: Shadow Focus, Improved Shadow Word: Pain, Spirit Tap organized in Tier 1.",
  "Cross-Pollination: Darkness, Shadow Affinity, Improved Mind Blast organized in Tier 2.",
  "Mind Flay: Positioned as 11-point anchor.",
  "The Crossroads: Shadow Weaving, Improved Psychic Scream organized in Tier 3.",
  "Output & Scaling: Mind Melt, Shadow Reach fill out Tier 4.",
  "Shadowform: Positioned as 21-point anchor (Moved down!).",
  "The Active Engine: Vampiric Embrace (now passive), Focused Mind organized in Tier 5.",
  "Sustain & Mastery: Misery, Shadow Power organized in Tier 6.",
  "Vampiric Touch: Added as the 31-point capstone."
];
