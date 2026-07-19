const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'data');

const replacements = [
  { file: 'hunter.ts', id: 'imp_stings', oldIcon: 'ability_hunter_quickshot', newIcon: 'ability_hunter_snipershot' },
  { file: 'hunter.ts', id: 'noxious_stings', oldIcon: 'ability_hunter_potentvenom', newIcon: 'spell_nature_corrosivebreath' },
  { file: 'mage.ts', id: 'arcane_flow', oldIcon: 'ability_mage_arcane_flow', newIcon: 'spell_nature_enchantarmor' },
  { file: 'priest.ts', id: 'imp_shadowform', oldIcon: 'spell_shadow_shadowform', newIcon: 'spell_shadow_antishadow' },
  { file: 'rogue.ts', id: 'blood_spatter', oldIcon: 'ability_rogue_bloodsplatter', newIcon: 'ability_rogue_garrote' },
  { file: 'shaman.ts', id: 'lava_flows', oldIcon: 'spell_shaman_lavaflow', newIcon: 'spell_fire_volcano' },
  { file: 'shaman.ts', id: 'frozen_power', oldIcon: 'spell_fire_bluecano', newIcon: 'spell_frost_glacier' },
  { file: 'shaman.ts', id: 'earthen_power', oldIcon: 'spell_nature_earthelemental_totem', newIcon: 'spell_nature_strengthofearthtotem02' },
  { file: 'shaman.ts', id: 'cleanse_spirit', oldIcon: 'ability_shaman_cleansespirit', newIcon: 'spell_nature_cleansespirit' },
  { file: 'shaman.ts', id: 'tidal_reach', oldIcon: 'spell_nature_healingwavegreater', newIcon: 'spell_nature_naturetouchgrow' },
  { file: 'warlock.ts', id: 'everlasting_affliction', oldIcon: 'ability_warlock_everlastingaffliction', newIcon: 'spell_shadow_chilltouch' },
  { file: 'warlock.ts', id: 'nemesis', oldIcon: 'spell_shadow_demonicempathy', newIcon: 'spell_shadow_blackplague' },
  { file: 'warlock.ts', id: 'fire_and_brimstone', oldIcon: 'ability_warlock_fireandbrimstone', newIcon: 'spell_fire_soulburn' },
  { file: 'warlock.ts', id: 'bane_of_havoc', oldIcon: 'ability_warlock_baneofhavoc', newIcon: 'spell_shadow_deathpact' },
  { file: 'warlock.ts', id: 'demonic_resilience', oldIcon: 'spell_shadow_demonicfortitude', newIcon: 'spell_shadow_demonbreath' }
];

for (const r of replacements) {
  const filePath = path.join(srcDir, r.file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Create a regex to match the specific talent object's icon
  const regex = new RegExp(`(id:\\s*['"]${r.id}['"][\\s\\S]*?icon:\\s*['"])${r.oldIcon}(['"])`, 'g');
  
  if (regex.test(content)) {
    content = content.replace(regex, `$1${r.newIcon}$2`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced icon for ${r.id} in ${r.file}`);
  } else {
    console.log(`Could not find old icon for ${r.id} in ${r.file}`);
  }
}
