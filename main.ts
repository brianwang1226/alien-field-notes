// Alien Field Notes — a one-liner for make.fun (u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000).
// An alien's field notes about Earth after two days: humans stare at glowing
// rectangles all day, then complain they have no time. The alien files the
// contradiction under "mysteries" and, in a fit of field-research enthusiasm,
// eats a traffic cone. The entry is a single line, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Day two on Earth. The humans stare at glowing rectangles all day, then complain they have no time. I have filed this under 'mysteries' and eaten a traffic cone.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
