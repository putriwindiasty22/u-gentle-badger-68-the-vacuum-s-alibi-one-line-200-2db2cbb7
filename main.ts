// The Vacuum's Alibi: One Line, 200 Characters
// Entry program for make.fun competition
// u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
//
// Writes one line — the excuse a robot vacuum gives for missing a spot —
// to /output/entry.txt. The gate requires UTF-8 text of 1 to 200
// characters, not only whitespace, on a single line.
//
// Runs on Node 22.18+ (the grader runs Node 22.23.4, which runs
// TypeScript as it is). No dependencies, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse. Deadpan machine voice, a specific surprise (squatter's
// rights, court order), punch at the end. 179 characters, one line.
const ENTRY =
  "My lidar flagged the crumb as load-bearing, so I granted it squatter's rights under the rug. Eviction requires a court order, and per my schedule I am only a vacuum, not a lawyer.";

const OUT = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

const line = ENTRY.replace(/\s+/g, " ").trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, line, "utf8");
console.log(`wrote ${line.length} characters to ${OUT}`);
