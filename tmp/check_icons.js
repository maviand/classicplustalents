import http from 'https';
import fs from 'fs';

const files = [
  'src/data/druid.ts',
  'src/data/hunter.ts',
  'src/data/mage.ts',
  'src/data/paladin.ts',
  'src/data/priest.ts',
  'src/data/rogue.ts',
  'src/data/shaman.ts',
  'src/data/warlock.ts',
  'src/data/warrior.ts'
];

let icons = [];

for (const file of files) {
  const data = fs.readFileSync(file, 'utf8');
  const matches = data.match(/icon:\s*'([^']+)'/g);
  if (matches) {
    matches.forEach(m => {
      const idx = m.indexOf("'") + 1;
      const icon = m.substring(idx, m.lastIndexOf("'"));
      icons.push(icon.toLowerCase());
    });
  }
}

// deduplicate
icons = [...new Set(icons)];

console.log(`Checking ${icons.length} icons...`);

async function checkIcon(icon) {
  return new Promise(resolve => {
    const url = `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;
    http.get(url, (res) => {
      resolve({ icon, status: res.statusCode });
    }).on('error', () => resolve({ icon, status: 0 }));
  });
}

async function run() {
  const bad = [];
  for (let i = 0; i < icons.length; i += 10) {
    const chunk = icons.slice(i, i + 10);
    const results = await Promise.all(chunk.map(checkIcon));
    for (const r of results) {
      if (r.status !== 200) {
        bad.push(r.icon);
        console.log(`Missing: ${r.icon} (${r.status})`);
      }
    }
  }
  console.log(`Done. ${bad.length} missing icons.`);
  fs.writeFileSync('/tmp/bad_icons.json', JSON.stringify(bad, null, 2));
}

run();
