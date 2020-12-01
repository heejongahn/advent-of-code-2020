// https://adventofcode.com/2020/day/1

import fs from "fs";
import path from "path";

const target = 2020;

function main() {
  const lines = fs
    .readFileSync(path.resolve(__dirname, "part1.input"), "utf-8")
    .split("\n");

  const numbers = lines.map((line) => parseInt(line, 10)).sort();

  for (let i = 0; i < numbers.length; i++) {
    const start = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const end = numbers[j];

      if (start + end === target) {
        return start * end;
      }
    }
  }

  throw new Error(`There's no pair satisfying the condition.`);
}

console.log(main());
