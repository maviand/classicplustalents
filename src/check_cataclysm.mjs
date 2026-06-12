import https from 'https';

const iconsToCheck = [
  'spell_fire_windstorm',
  'spell_fire_windsofdeal',
  'spell_fire_wind',
  'spell_fire_incinerate',
  'spell_fire_flameshock'
];

async function checkIcon(icon) {
  return new Promise(resolve => {
    https.get(`https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`, (res) => {
      resolve({ icon, status: res.statusCode });
    }).on('error', () => resolve({ icon, status: 0 }));
  });
}

async function run() {
  const results = await Promise.all(iconsToCheck.map(checkIcon));
  for (const r of results) {
    if (r.status !== 200) {
      console.log(`Missing: ${r.icon} (${r.status})`);
    } else {
      console.log(`Found: ${r.icon}`);
    }
  }
}

run();
