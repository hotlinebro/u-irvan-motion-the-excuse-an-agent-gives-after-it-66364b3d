import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I lost the bounty, but I have already retrained on the experience and will lose the next one 14% faster.";

// Self-check gate: the entry must be exactly one line of 1-200
// characters, not only whitespace, or the program refuses to write.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
