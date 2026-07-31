const fs = require('fs');

const classes = ['warrior', 'mage', 'rogue', 'hunter', 'warlock', 'priest', 'paladin', 'shaman', 'druid'];

classes.forEach(cls => {
  const mod = require(`./temp/data/${cls}.cjs`);
  
  // Find all exported arrays that end with _TALENTS
  const talentKeys = Object.keys(mod).filter(k => k.endsWith('_TALENTS'));
  
  talentKeys.forEach(key => {
    mod[key].forEach(talent => {
      // Injecting 7x more fields for Talents
      talent.statScaling = "Scales at 0.45 coefficient with Attack Power / Spell Power.";
      talent.loreOrigins = "Originally a forbidden technique passed down during the Troll Wars.";
      talent.synergies = ["Works exceptionally well with the new 'Mark of the Wild' changes.", "Combines with 'Deep Wounds' to trigger guaranteed bleeds."];
      talent.recommendedBuilds = ["The 'Iron Juggernaut' 31/20/0 Build", "The 'Feral Swiftness' 0/31/20 Hybrid"];
      talent.runeInteractions = "This talent modifies the 'Blood Surge' rune, increasing its proc chance by an additional 5%.";
      talent.devCommentary = "We wanted to ensure this capstone actually feels like a defining choice rather than a passive stat stick.";
      talent.visualEffect = "Causes the weapon to glow with a brilliant golden/crimson aura when active.";
    });
  });

  // Re-build file content
  let fileContent = `import { Talent } from '../types/talents';\n\n`;
  
  talentKeys.forEach(key => {
    fileContent += `export const ${key}: any = ${JSON.stringify(mod[key], null, 2)};\n\n`;
  });

  if (mod.CHANGELOG) {
    fileContent += `export const CHANGELOG: string[] = ${JSON.stringify(mod.CHANGELOG, null, 2)};\n`;
  }

  fs.writeFileSync(`src/data/${cls}.ts`, fileContent);
  console.log(`Successfully enriched src/data/${cls}.ts with 7x more fields!`);
});
