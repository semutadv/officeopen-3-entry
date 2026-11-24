// The Office Joke Open — batch3 entry (officeopen)
// This meeting could have been an entry in a comedy contest.
// Writes the office joke to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE_LINE =
  "Our standup now has 14 people, 9 updates, and one man who has said 'circling back' so many times he has achieved orbit.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), JOKE_LINE, "utf8");
}

main();
