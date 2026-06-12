const base1 = "Gives you a 3% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.";
const snip1 = "6%";

const base2 = "Reduces the chance the opponent can resist your Arcane spells by 2%, and increases your chance to hit with Arcane spells by 1%.";
const snip2 = "4% / 2%";

const base3 = "Reduces your target's spell resistance to all your spells by 5, and reduces the threat caused by your Arcane spells by 20%.";
const snip3 = "10 / 40%";

const base4 = "Increases your your 2 weapons 33% by 1.";
const snip4 = "2 ranks"; // "2 ranks" -> wait, 2 ranks is a snippet? Let's check Riposte.

function gen(baseText, snippetText) {
  const snippetParts = snippetText.split(/\s*\/\s*/);
  const regex = /(\d+(?:\.\d+)?%?)/g;
  
  let i = 0;
  const res = baseText.replace(regex, (match) => {
    // If we've exhausted snippet parts, we only replace if there's only one snippet part 
    // AND it's a simple case? No, if we have 1 snippet part, do we replace all?
    // No, usually just the first one if there's 1 snippet part and multiple numbers.
    // e.g. "Gives you a 3% chance..." -> "6%". The "100%" stays "100%".
    if (i < snippetParts.length) {
       const replacement = snippetParts[i];
       i++;
       return replacement;
    }
    return match; // keep original like "100%"
  });
  return res;
}

console.log(gen(base1, snip1));
console.log(gen(base2, snip2));
console.log(gen(base3, snip3));
console.log(gen(base4, snip4));

