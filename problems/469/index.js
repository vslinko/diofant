function sumChars(str) {
  const l = str.length;
  let r = 0;
  for (let i = 0; i < l; i++) {
    const c = str.charCodeAt(i) - 48;
    r += c;
  }
  return r;
}

const arrSize = 9 * 8 + 1;
const unique = new Int32Array(arrSize).fill(0);

for (let i = 1; i <= 99999999; i++) {
  unique[sumChars(i.toString())]++;
}

let result = 0;
for (let i = 0; i < arrSize; i++) {
  result += unique[i] * unique[i];
}

console.log(result);
