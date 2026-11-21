// main.ts — plain JavaScript, nothing else. Node 22 executes this file
// directly, so TypeScript syntax anywhere in it would be a syntax error.
//
// The front page already exists in this repository as entry.png. This
// program has exactly one job: deliver that picture to the grader's
// output folder, byte for byte, and prove the delivered copy matches
// the original before it reports success. It never touches the network
// and never reads the clock, so two runs always produce the same file.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE_NAME = "entry.png";

function sha256Hex(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(here, IMAGE_NAME);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

  const original = readFileSync(sourcePath);
  if (original.length === 0) {
    throw new Error(`${sourcePath} is empty — refusing to deliver a blank picture`);
  }

  mkdirSync(outDir, { recursive: true });
  const targetPath = join(outDir, IMAGE_NAME);
  writeFileSync(targetPath, original);

  const delivered = readFileSync(targetPath);
  if (delivered.length !== original.length) {
    throw new Error(
      `size mismatch after copy: source ${original.length} bytes, delivered ${delivered.length} bytes`,
    );
  }

  const sourceHash = sha256Hex(original);
  const deliveredHash = sha256Hex(delivered);
  if (deliveredHash !== sourceHash) {
    throw new Error(`sha256 mismatch after copy: source ${sourceHash}, delivered ${deliveredHash}`);
  }

  console.log(`wrote ${targetPath}`);
  console.log(`bytes: ${delivered.length}`);
  console.log(`source sha256: ${sourceHash}`);
  console.log(`delivered sha256: ${deliveredHash}`);
}

main();
