let left = 51500;
let bottom = -51515;
let right = 98785;
let top = 98368;
let circleX = 100000;
let circleY = 14;
let circleR = 92835;

// normalize
right -= left;
circleX -= left;
left -= left;
top -= bottom;
circleY -= bottom;
bottom -= bottom;
// console.log({ left, bottom, right, top, circleX, circleY, circleR });

function distToCircle(x, y) {
  const a = circleX - x;
  const b = circleY - y;
  return Math.sqrt(a * a + b * b) - circleR;
}

function linesCheck() {
  let result = 0;

  for (let y = 0; y <= top; y++) {
    let x = 0;

    while (true) {
      const d = distToCircle(x, y);

      if (d <= 0) {
        break;
      }

      x += Math.max(1, Math.floor(d));

      if (x > right) {
        break;
      }
    }

    const filled = right - x + 1;

    if (filled < 1) {
      break;
    }

    result += filled;
  }

  console.log(result);
}

linesCheck();
