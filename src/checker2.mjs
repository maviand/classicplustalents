import fs from 'fs';

const cands = [
  'spell_fire_windsofdeal',
  'spell_fire_flameshock',
  'spell_fire_incinerate',
  'spell_fire_fireball'
];

async function checkIcon(icon) {
  try {
    const res = await fetch(`https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`);
    console.log(`${icon}: ${res.status}`);
  } catch (e) {
    console.log(`Error on ${icon}`);
  }
}

async function run() {
  for (const item of cands) {
    await checkIcon(item);
  }
}

run();
