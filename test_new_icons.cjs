const https = require('https');

const iconsToTest = [
  'spell_shaman_elementalprecision_1',
  'spell_nature_elementalprecision_1',
  'spell_shaman_elementalprecision',
  'spell_nature_elementalprecision',
  'spell_nature_cleansespirit',
  'ability_shaman_cleansespirit',
  'ability_druid_empoweredrejuv',
  'ability_druid_empoweredrejuvenation',
  'ability_rogue_sleightofhand',
  'ability_rogue_honoramongstthieves',
  'ability_rogue_honoramongthieves',
  'ability_warrior_defiance',
  'spell_nature_visageofanger' // wait, why did Visage of Anger break?
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
    console.log(`${icon}: ${res.status}`);
  }
}

run();
