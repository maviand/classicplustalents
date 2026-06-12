import http from 'https';

const checkIcon = (icon) => {
  return new Promise(resolve => {
    http.get(`https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`, (res) => {
      console.log(icon, res.statusCode);
      resolve();
    }).on('error', () => resolve());
  });
}

async function run() {
  await checkIcon('ability_druid_demoralizingroar');
  await checkIcon('spell_nature_timefragment');
  await checkIcon('spell_nature_timestop');
  await checkIcon('spell_shadow_metamorphism'); // Demonology
  await checkIcon('spell_shadow_metamorphosis');
  await checkIcon('spell_fire_windsofdeal'); // Destro Cataclysm
  await checkIcon('spell_fire_windsofjustice');
  await checkIcon('spell_fire_windsofchange');
  await checkIcon('spell_fire_windsofsorrow');
  await checkIcon('spell_fire_wind');
  await checkIcon('inv_weapon_halberd_01'); // Polearm spec.
  await checkIcon('inv_weapon_halberd_02');
  await checkIcon('inv_weapon_halberd_04');
}
run();
