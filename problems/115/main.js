const assert = require('assert');

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function linkLevels(top, bottom) {
	assert(top.length === bottom.length - 1);

	top.forEach((topNode, index) => {
		topNode.left = bottom[index];
		topNode.right = bottom[index + 1];
	});
}

function parseTree(str) {
	const levels = str
		.split('\n')
		.map(row => row.trim())
		.filter(row => row.length > 0)
		.map(row => row.split(' ').map(v => new Node(Number(v))));

	for (let i = 0; i < levels.length - 1; i++) {
		linkLevels(levels[i], levels[i + 1]);
	}

	return levels;
}

const levels = parseTree(`
                     5
                   95 64
                  17 47 82
                18 35 87 10
               20 04 82 47 65
             19 01 23 75 03 34
            88 02 77 73 07 63 67
          99 65 04 28 06 16 70 92
         41 41 26 56 83 40 80 70 33
       41 48 72 33 47 32 37 16 94 29
      53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73 17 78 39 68 17 57
   91 71 52 38 17 14 91 43 58 50 27 29 48
 63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
`);

function traverse(node, visiter, depth = 5) {
	function _traverse(node, path) {
		const newPath = path.concat(node);

		if (newPath.length === depth) {
			visiter(newPath);
			return;
		}

		if (node.left) {
			_traverse(node.left, newPath);
		}

		if (node.right) {
			_traverse(node.right, newPath);
		}
	}

	_traverse(node, []);
}

let maxMul = 0;

for (let i = 0; i < levels.length - 4; i++) {
	const level = levels[i];

	for (let n = 0; n < level.length; n++) {
		const node = level[n];

		traverse(node, path => {
			const mul = path.map(n => n.value).reduce((acc, n) => acc * n, 1);
			console.log(path.map(n => n.value), mul);
			if (mul > maxMul) {
				maxMul = mul;
			}
		});
	}
}

console.log(maxMul);
