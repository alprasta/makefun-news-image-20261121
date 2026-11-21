// Entry program for the news-image-20261121 bounty.
//
// The entry is the picture entry.png that sits next to this script. This
// program only hands that picture to the grader's output folder, byte for
// byte. It never changes the picture, never uses the network and never
// reads the clock, so running it twice always writes the same file.
//
// Run it outside the grader like this:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const IMAGE = "entry.png";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const from = new URL(`./${IMAGE}`, import.meta.url);
const to = join(outDir, IMAGE);

// Refuse an empty source outright: an entry picture with zero bytes is
// never a valid entry, and catching it here beats hashing nothing.
if (statSync(from).size === 0) {
  throw new Error(`copy failed: ${from} is empty`);
}

copyFileSync(from, to);

// Cheap check first: if the sizes differ the copy is already wrong, so
// there is no point hashing. The hash below is the real proof.
if (statSync(from).size !== statSync(to).size) {
  throw new Error(`copy failed: ${to} is ${statSync(to).size} bytes, expected ${statSync(from).size}`);
}

function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

const before = sha256(from);
const after = sha256(to);
if (before !== after) {
  throw new Error(`copy failed: ${to} does not match ${from}`);
}

console.log(`wrote ${IMAGE} to ${to} (${readFileSync(to).length} bytes, sha256 ${after})`);
