// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// The gate allows 1-140 characters and exactly one line: write the line
// verbatim, with no trailing newline, so the file holds exactly one line.
const line = "I'm hiking to the one spot with no signal, mostly to find out which of you emails me first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
