import fs from 'fs';
import https from 'https';

https.get('https://raw.githubusercontent.com/brotalnia/talent-calc/master/data/talents.json', (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    fs.writeFileSync('talents.json', body);
    console.log('Downloaded talents.json');
  });
}).on('error', (e) => {
  console.error(e);
});
