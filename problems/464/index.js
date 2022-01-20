const boardSize = 8 * 8;
const ids = {
  move: 1,
  king: 2,
  queen: 3,
  rook: 4,
  bishop: 5,
  knight: 6,
};
const printMap = [".", "x", "K", "Q", "r", "b", "k"];
const allPossibleMoves = [];
const initialPieces = ["king", "knight", "rook", "bishop", "queen"];
const initialPiecesWoKnight = initialPieces.filter((p) => p !== "knight");
const cache = new Set();

class PossibleMove {
  constructor(board, piece, x, y) {
    this.board = board;
    this.piece = piece;
    this.x = x;
    this.y = y;
  }
}

function index(x, y) {
  return y * 8 + x;
}

function set(board, v, x, y) {
  if (x < 0 || x >= 8 || y < 0 || y >= 8) {
    return;
  }
  board[index(x, y)] = v;
}

function printBoard(board) {
  let res = "";
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const i = y * 8 + x;
      res += printMap[board[i]];
    }
    res += "\n";
  }
  console.log(res);
}

function calculateRookMoves(board, rx, ry) {
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (x === rx || y === ry) {
        set(board, ids.move, x, y);
      }
    }
  }
  set(board, ids.rook, rx, ry);
}

function calculateKingMoves(board, kx, ky) {
  set(board, ids.move, kx - 1, ky - 1);
  set(board, ids.move, kx, ky - 1);
  set(board, ids.move, kx + 1, ky - 1);
  set(board, ids.move, kx - 1, ky);
  set(board, ids.move, kx + 1, ky);
  set(board, ids.move, kx - 1, ky + 1);
  set(board, ids.move, kx, ky + 1);
  set(board, ids.move, kx + 1, ky + 1);
  set(board, ids.king, kx, ky);
}

function calculateBishopMoves(board, bx, by) {
  for (let y = by - 1, x = bx - 1; y >= 0, x >= 0; y--, x--) {
    set(board, ids.move, x, y);
  }
  for (let y = by - 1, x = bx + 1; y >= 0, x < 8; y--, x++) {
    set(board, ids.move, x, y);
  }
  for (let y = by + 1, x = bx - 1; y < 8, x >= 0; y++, x--) {
    set(board, ids.move, x, y);
  }
  for (let y = by + 1, x = bx + 1; y < 8, x < 8; y++, x++) {
    set(board, ids.move, x, y);
  }
  set(board, ids.bishop, bx, by);
}

function calculateQueenMoves(board, qx, qy) {
  calculateBishopMoves(board, qx, qy);
  calculateRookMoves(board, qx, qy);
  set(board, ids.queen, qx, qy);
}

function calculateKnightMoves(board, kx, ky) {
  set(board, ids.move, kx - 1, ky - 2);
  set(board, ids.move, kx - 2, ky - 1);
  set(board, ids.move, kx - 1, ky + 2);
  set(board, ids.move, kx - 2, ky + 1);
  set(board, ids.move, kx + 1, ky + 2);
  set(board, ids.move, kx + 2, ky + 1);
  set(board, ids.move, kx + 1, ky - 2);
  set(board, ids.move, kx + 2, ky - 1);
  set(board, ids.knight, kx, ky);
}

function calculatePossibleMoves(cb, piece) {
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const board = new Int8Array(boardSize);
      cb(board, x, y);
      allPossibleMoves.push(new PossibleMove(board, piece, x, y));
    }
  }
}

function possibleToMove(board, move) {
  if (board[index(move.x, move.y)] > 0) {
    return false;
  }
  for (let i = 0; i < boardSize; i++) {
    if (board[i] > 1 && move.board[i] > 0) {
      return false;
    }
  }
  return true;
}

function apply(boardA, boardB) {
  for (let i = 0; i < boardSize; i++) {
    if (boardA[i] === 0) {
      boardA[i] = boardB[i];
    }
  }
}

function random(from, to) {
  return Math.round(Math.random() * (to - from)) + from;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

calculatePossibleMoves(calculateKingMoves, "king");
calculatePossibleMoves(calculateRookMoves, "rook");
calculatePossibleMoves(calculateBishopMoves, "bishop");
calculatePossibleMoves(calculateQueenMoves, "queen");
calculatePossibleMoves(calculateKnightMoves, "knight");

function calculateVariant(board) {
  let piecesCount = 0;
  let availableMoves = allPossibleMoves.concat();

  const _apply = (move) => {
    // console.log("apply move", move.piece, move.x, move.y);
    apply(board, move.board);
    piecesCount++;
    for (let i = 0; i < availableMoves.length; ) {
      if (possibleToMove(board, availableMoves[i])) {
        i++;
      } else {
        availableMoves.splice(i, 1);
      }
    }
  };

  shuffle(initialPiecesWoKnight);
  shuffle(availableMoves);
  for (let p = 0; p < initialPiecesWoKnight.length; p++) {
    const piece = initialPiecesWoKnight[p];

    for (let i = 0; i < availableMoves.length; i++) {
      const move = availableMoves[i];

      if (move.piece === piece) {
        _apply(move);
        break;
      }
    }

    if (piecesCount === p) {
      return -1;
    }
  }

  const hash = board.toString();
  if (cache.has(hash)) {
    return -1;
  } else {
    cache.add(hash);
  }

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const isYEven = y % 2 === 0;
      const isXEven = x % 2 === 0;
      const here = isYEven ? isXEven : !isXEven;
      if (here) {
        for (const move of availableMoves) {
          if (move.piece === "knight" && move.x === x && move.y === y) {
            _apply(move);
            break;
          }
        }
      }
    }
  }

  while (availableMoves.length > 0) {
    _apply(availableMoves[random(0, availableMoves.length - 1)]);
  }

  return piecesCount;
}

const board = new Int8Array(boardSize);
let maxPiecesCount = 0;
while (true) {
  board.fill(0);
  const piecesCount = calculateVariant(board);
  if (piecesCount > maxPiecesCount) {
    printBoard(board);
    console.log(piecesCount);
    maxPiecesCount = piecesCount;
  }
}
