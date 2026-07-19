const https = require('https');

const iconsToTest = [
  'ability_druid_eclipse',
  'spell_holy_divinity',
  'spell_holy_blessingofelune',
  'spell_nature_wispsplode'
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
