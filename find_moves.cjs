const fs = require('fs');

const diffText = fs.readFileSync('diffs.txt', 'utf8');
const lines = diffText.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('-') && !lines[i].startsWith('---') && lines[i].includes('row:') && lines[i].includes('col:')) {
    if (i + 1 < lines.length && lines[i+1].startsWith('+') && lines[i+1].includes('row:') && lines[i+1].includes('col:')) {
      const match1 = lines[i].match(/id:\s*'([^']+)'/);
      const match2 = lines[i+1].match(/id:\s*'([^']+)'/);
      if (match1 && match2 && match1[1] === match2[1]) {
        const row1 = lines[i].match(/row:\s*(\d+)/)[1];
        const col1 = lines[i].match(/col:\s*(\d+)/)[1];
        const row2 = lines[i+1].match(/row:\s*(\d+)/)[1];
        const col2 = lines[i+1].match(/col:\s*(\d+)/)[1];
        if (row1 !== row2 || col1 !== col2) {
          console.log(`MOVED: ${match1[1]} from [${row1}, ${col1}] to [${row2}, ${col2}]`);
        }
      }
    }
  }
}
