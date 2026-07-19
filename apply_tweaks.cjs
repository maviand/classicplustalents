const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'src');
const appTsxPath = path.join(rootDir, 'App.tsx');
const tooltipTsxPath = path.join(rootDir, 'components', 'Tooltip.tsx');
const talentTreeTsxPath = path.join(rootDir, 'components', 'TalentTree.tsx');
const indexCssPath = path.join(rootDir, 'index.css');

// 1. Remove Toggles from App.tsx
let appTsx = fs.readFileSync(appTsxPath, 'utf8');

appTsx = appTsx.replace(/\s*const \[sepiaActive[\s\S]*?setCompactMode\(false\);/, '');

appTsx = appTsx.replace(/\s*\/\/ Apply sepia filter class to body[\s\S]*?}, \[highContrast\]\);/, '');

const togglesRegex = /\s*\{\/\* Settings \/ Styling Toggles \*\/\}[\s\S]*?<\/div>/;
appTsx = appTsx.replace(togglesRegex, '');

// Shrink title
appTsx = appTsx.replace('text-3xl md:text-5xl font-bold tracking-tight text-white m-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-tight wow-header', 'text-2xl md:text-4xl font-bold tracking-tight text-white m-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-tight wow-header');

// Remove compact prop usage in Tooltip call
appTsx = appTsx.replace(/compact=\{compactMode\}\s*/, '');
fs.writeFileSync(appTsxPath, appTsx, 'utf8');

// 2. Remove compact from Tooltip.tsx
let tooltipTsx = fs.readFileSync(tooltipTsxPath, 'utf8');
tooltipTsx = tooltipTsx.replace(/compact\?: boolean;\s*/g, '');
tooltipTsx = tooltipTsx.replace(/compact = false/g, '');
tooltipTsx = tooltipTsx.replace(/,\s*:\s*TooltipProps/g, ': TooltipProps'); 
tooltipTsx = tooltipTsx.replace(/\{\!compact && /g, '{');
// Wait, replacing {!compact && ( with { might break JSX if it was {!compact && (...)}
// Better regex:
tooltipTsx = tooltipTsx.replace(/\{\!compact && \(/g, '{true && (');
tooltipTsx = tooltipTsx.replace(/\{\!compact && pts > 0/g, '{pts > 0');
tooltipTsx = tooltipTsx.replace(/\{\!compact && talent\.maxPoints > 1/g, '{talent.maxPoints > 1');
fs.writeFileSync(tooltipTsxPath, tooltipTsx, 'utf8');

// 3. Make every talent slightly smaller in TalentTree.tsx
let talentTreeTsx = fs.readFileSync(talentTreeTsxPath, 'utf8');
talentTreeTsx = talentTreeTsx.replace(/w-12 h-12/g, 'w-[42px] h-[42px]'); 
// Update offsets if necessary, 48px -> 42px means shifted by 3px. Let's add 3px to left/top to keep centered
talentTreeTsx = talentTreeTsx.replace(/left: `\$\{24 \+/g, 'left: `${27 +');
talentTreeTsx = talentTreeTsx.replace(/top: `\$\{24 \+/g, 'top: `${27 +');
fs.writeFileSync(talentTreeTsxPath, talentTreeTsx, 'utf8');

// 4. Update index.css
let indexCss = fs.readFileSync(indexCssPath, 'utf8');
const sepiaHighContrastRegex = /\/\* Sepia Theme \*\/[\s\S]*?--panel-border: #80705c;\n}/;
indexCss = indexCss.replace(sepiaHighContrastRegex, '');

// Make fonts slightly smaller
indexCss = indexCss.replace(/--font-size-base: clamp\(16px, 1.1vw \+ 12px, 20px\);/, '--font-size-base: clamp(14px, 1vw + 10px, 18px);');
indexCss = indexCss.replace(/--font-size-title: clamp\(2.5rem, 5vw \+ 1rem, 4.5rem\);/, '--font-size-title: clamp(2rem, 4vw + 1rem, 3.5rem);');
indexCss = indexCss.replace(/--font-size-header: clamp\(1.2rem, 2vw \+ 0.8rem, 2.2rem\);/, '--font-size-header: clamp(1rem, 1.5vw + 0.8rem, 1.8rem);');
indexCss = indexCss.replace(/--font-size-normal: clamp\(0.85rem, 1vw \+ 0.6rem, 1.1rem\);/, '--font-size-normal: clamp(0.75rem, 0.9vw + 0.5rem, 0.95rem);');
indexCss = indexCss.replace(/--font-size-small: clamp\(0.75rem, 0.8vw \+ 0.5rem, 0.95rem\);/, '--font-size-small: clamp(0.65rem, 0.7vw + 0.4rem, 0.85rem);');

fs.writeFileSync(indexCssPath, indexCss, 'utf8');

console.log('Modifications applied.');
