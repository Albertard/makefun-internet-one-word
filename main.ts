// The Internet in One Word — make.fun entry
// Writes exactly one word to /output/entry.txt: the word that describes
// the whole internet.
//
// The word: "Paywall"
// Why it wins: it reframes the entire internet as a toll road — the
// news, the video, the article, the recipe, all of it sitting behind a
// little box asking for your card. It is funny because it is true,
// it fits the internet as a whole (not one corner of it), and it is
// surprising: nobody's first guess for "the internet in one word" is
// the thing that stops you reading it. Checked against the field:
// Doomscrolling, Procrastination, Buffering, Clickbait, Captcha,
// Unsubscribe, Cookies and Lurking are all already taken — Paywall
// is not.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Paywall";

// Gate: the entry must be exactly one word — UTF-8 text, no whitespace
// at all, 1 or more characters, letters only (no digits or punctuation
// smuggled in as a "word"). No trailing newline: the scorer counts
// every character in the file, so the file holds the word alone.
function validateWord(word: string): void {
  if (word.length < 1) {
    throw new Error("entry must be at least 1 character");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word (no whitespace)");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("entry must be exactly one word (letters only)");
  }
}

validateWord(WORD);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(`wrote ${JSON.stringify(WORD)} to ${outPath}`);
