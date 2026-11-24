// One-Sentence Absurd Invention Pitch — u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
// One sentence (196 characters): the SorryPrinter prints a heartfelt
// apology every time it jams, then immediately jams on the apology
// letter, so the complaint is stuck in the same queue as the document.
// Setup promises sympathy; the twist is the apology itself jamming.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_CHARS = 220;

const LINE =
  "The SorryPrinter is a printer that prints a heartfelt apology every time it jams, then immediately jams on the apology letter, so your complaint is always stuck in the same queue as your document.";

// The sealed scorer only accepts 1–220 characters, one sentence, UTF-8.
if ([...LINE].length > MAX_CHARS || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error(`entry line violates the ${MAX_CHARS}-character single-sentence rule`);
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(LINE);
