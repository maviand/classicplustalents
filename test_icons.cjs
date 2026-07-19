const https = require('https');

const iconsToTest = [
  "ability_hunter_quickshot", // imp_stings
  "ability_hunter_potentvenom", // noxious_stings
  "ability_mage_arcane_flow", // arcane_flow
  "spell_shadow_unsummonbuilding", // vampiric_embrace
  "ability_rogue_bloodsplatter", // blood_spatter
  "spell_shaman_lavaflow", // lava_flows
  "spell_fire_bluecano", // frozen_power
  "spell_nature_earthelemental_totem", // earthen_power
  "spell_nature_healingwavegreater", // tidal_reach
  "ability_shaman_cleansespirit", // cleanse_spirit
  "ability_warlock_everlastingaffliction", // everlasting_affliction
  "spell_shadow_demonicempathy", // nemesis
  "ability_warlock_fireandbrimstone", // fire_and_brimstone
  "ability_warlock_baneofhavoc", // bane_of_havoc
  "spell_shadow_demonicfortitude" // demonic_resilience
];

async function checkIcon(icon) {
  return new Promise((resolve) => {
    const url = `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;
    https.get(url, (res) => {
      resolve({ icon, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ icon, status: 'Error', message: e.message });
    });
  });
}

async function testAll() {
  const results = await Promise.all(iconsToTest.map(icon => checkIcon(icon)));
  for (const res of results) {
    if (res.status !== 200) {
      console.log(`BROKEN: ${res.icon} -> ${res.status}`);
    } else {
      console.log(`OK: ${res.icon}`);
    }
  }
}

testAll();
