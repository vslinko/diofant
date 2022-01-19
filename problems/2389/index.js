const fs = require("fs");

const primes = fs
  .readFileSync(__dirname + "/primes.txt", "utf-8")
  .trim()
  .split("\n");

const numbers = [
  new Int8Array([1, 1, 1, 0, 1, 1, 1]),
  new Int8Array([0, 0, 1, 0, 0, 1, 0]),
  new Int8Array([1, 0, 1, 1, 1, 0, 1]),
  new Int8Array([1, 0, 1, 1, 0, 1, 1]),
  new Int8Array([0, 1, 1, 1, 0, 1, 0]),
  new Int8Array([1, 1, 0, 1, 0, 1, 1]),
  new Int8Array([1, 1, 0, 1, 1, 1, 1]),
  new Int8Array([1, 1, 1, 0, 0, 1, 0]),
  new Int8Array([1, 1, 1, 1, 1, 1, 1]),
  new Int8Array([1, 1, 1, 1, 0, 1, 1]),
];

const clockSize = 8;
const lampSize = 7;
const seqSize = 4;
const clockArraySize = clockSize * lampSize;

const maxClockState = new Int8Array(clockArraySize);
const seq = new Int8Array(seqSize * clockArraySize + 1);

const gray = (s) => `\x1b[38;5;237m${s}\x1b[0m`;
const green = (s) => `\x1b[92m${s}\x1b[0m`;
const gg = (symbol, value) => (value ? green(symbol) : gray(symbol));
const h = (value) => gg("_", value);
const v = (value) => gg("|", value);

function renderLamp(lamp) {
  return [
    ` ${h(lamp[0])} `,
    `${v(lamp[1])}${h(lamp[3])}${v(lamp[2])}`,
    `${v(lamp[4])}${h(lamp[6])}${v(lamp[5])}`,
  ];
}

function printLamp(lamp) {
  console.log(renderLamp(lamp).join("\n"));
}

function renderClock(clock) {
  const clockLines = ["", "", ""];
  for (let i = 0; i < clockSize; i++) {
    const lampLines = renderLamp(clock.slice(i * lampSize, (i + 1) * lampSize));
    clockLines[0] += lampLines[0];
    clockLines[1] += lampLines[1];
    clockLines[2] += lampLines[2];
  }
  return clockLines;
}

function printClock(c) {
  console.log(renderClock(c).join("\n"));
}

function renderSeq(seq) {
  const seqSize = seq[0];
  let seqLines = [];
  for (let clockIndex = 0; clockIndex < seqSize; clockIndex++) {
    const clock = seq.slice(
      clockIndex * clockArraySize + 1,
      (clockIndex + 1) * clockArraySize + 1
    );
    seqLines = seqLines.concat(renderClock(clock));
  }
  return seqLines;
}

function printSeq(seq) {
  console.log(renderSeq(seq).join("\n"));
}

function stringToClock(numberString, clock) {
  const stringLength = numberString.length;
  const delta = clockSize - stringLength;
  for (let charIndex = 0; charIndex < stringLength; charIndex++) {
    const number = numberString.charCodeAt(charIndex) - 48;
    clock.set(numbers[number], (charIndex + delta) * lampSize);
  }
}

function calculateSeq(numberString, seq) {
  seq.fill(0);

  stringToClock(
    numberString,
    seq.subarray(seq[0] * clockArraySize + 1, (seq[0] + 1) * clockArraySize + 1)
  );
  seq[0]++;

  while (numberString.length > 1) {
    let nextNumber = 0;
    const stringLength = numberString.length;
    for (let charIndex = 0; charIndex < stringLength; charIndex++) {
      const number = numberString.charCodeAt(charIndex) - 48;
      nextNumber += number;
    }
    numberString = nextNumber.toString();

    stringToClock(
      numberString,
      seq.subarray(
        seq[0] * clockArraySize + 1,
        (seq[0] + 1) * clockArraySize + 1
      )
    );
    seq[0]++;
  }
}

function calculateSamClockOperations(seq) {
  const seqSize = seq[0];
  const readTillIndex = seqSize * clockArraySize;
  let operations = 0;
  for (let i = 1; i <= readTillIndex; i++) {
    operations += seq[i];
  }
  return operations * 2;
}

function calculateMaxClockOperations(seq) {
  const seqSize = seq[0];
  let operations = 0;

  for (let clockIndex = 0; clockIndex < seqSize; clockIndex++) {
    const delta = clockIndex * clockArraySize + 1;

    for (
      let lampPartIndex = 0;
      lampPartIndex < clockArraySize;
      lampPartIndex++
    ) {
      const i = lampPartIndex + delta;
      if (maxClockState[lampPartIndex] !== seq[i]) {
        maxClockState[lampPartIndex] = seq[i];
        operations++;
      }
    }
  }

  for (let lampPartIndex = 0; lampPartIndex < clockArraySize; lampPartIndex++) {
    if (maxClockState[lampPartIndex] !== 0) {
      maxClockState[lampPartIndex] = 0;
      operations++;
    }
  }

  return operations;
}

let result = 0;

for (const prime of primes) {
  calculateSeq(prime, seq);
  const samOps = calculateSamClockOperations(seq);
  const maxOps = calculateMaxClockOperations(seq);
  const economy = samOps - maxOps;
  result += economy;

  // console.log(prime);
  // printSeq(seq);
  // console.log(samOps);
  // console.log(maxOps);
  // console.log(economy);
  // console.log("===");
}

console.log(result);
