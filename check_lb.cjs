const https = require('https');

function check(icon) {
  const url = `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;
  https.get(url, (res) => {
    console.log(`${icon}: ${res.statusCode}`);
  });
}

check('ability_mage_livingbomb');
check('ability_mage_arcanepower');
