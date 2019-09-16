const MIN = 0x10000;
const MAX = 0xfffff;

const fifthDigit = number => number.toString(16)[4];

let accepted = 0;

let a = MIN;

for (let b = a + 1; b <= MAX; b++) {
	const c = a + b;

	if (c > MAX) {
		break;
	}

	if (fifthDigit(c) == '1') {
		accepted += 1;
	}
}

let possible = accepted;

while (possible > 0) {
	a += 1;

	if (['1', '9'].includes(fifthDigit(a))) {
		possible -= 1;
	}

	accepted += possible;
}

console.log(accepted);
