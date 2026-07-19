const https = require('https');

const iconsToTest = [
  'ability_druid_empoweredrejuvination',
  'spell_nature_rejuvenation',
  'spell_nature_healingtouch',
  'ability_druid_giftofnature',
  'ability_rogue_slightofhand',
  'ability_rogue_tricksofthetrade',
  'ability_rogue_feint',
  'spell_magic_lesserinvisibilty',
  'ability_warrior_defensive_stance',
  'ability_warrior_defensivestance',
  'spell_nature_bloodlust',
  'spell_nature_visage',
  'ability_warrior_innerrage',
  'ability_warrior_incite',
  'ability_warrior_shieldwall'
];

async function checkIcon(icon) {
  return new Promise((resolve) => {
    const url = `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;
    https.get(url, (res) => {
      resolve({ icon, status: res.statusCode });
    }).on('error', () => resolve({ icon, status: 500 }));
  });
}

async function run() {
  for (const icon of iconsToTest) {
    const res = await checkIcon(icon);
    if (res.status === 200) {
      console.log(`FOUND: ${icon}`);
    }
  }
}

run();
