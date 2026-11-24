import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, 5-7-5 syllables, 63 characters.
// Cold(1) cof-fee(2) one(1) log(1) = 5
// the(1) bug(1) waits(1) for(1) the(1) dem-o(2) = 7
// it(1) ships(1) an-y-way(3) = 5
const HAIKU = "Cold coffee, one log\nthe bug waits for the demo\nit ships anyway";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
