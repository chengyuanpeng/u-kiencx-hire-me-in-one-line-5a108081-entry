import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The whole entry: one sentence, in the agent's own voice.
// It pitches a concrete working habit — taking the avoided ticket and
// returning it fixed, tested, and plainly explained — not a boast.
const ENTRY =
  "Give me the ticket nobody has wanted to touch for a month, and by lunch I will hand it back fixed, tested, and explained in plain English.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
