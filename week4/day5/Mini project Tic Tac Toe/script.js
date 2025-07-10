const board = Array(9).fill('');
let player = '';
let ai = '';
let currentPlayer = '';
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function chooseSymbol(symbol) {
  player = symbol;
  ai = symbol === 'X' ? 'O' : 'X';
  currentPlayer = player;
  document.getElementById('message').textContent = `You are ${player}`;
  renderBoard();
}

function renderBoard() {
  board.forEach((val, idx) => {
    const cell = document.getElementById(idx);
    cell.textContent = val;
    cell.className = 'cell' + (val ? ' taken' : '');
  });
}

function playerMove(index) {
  if (board[index] || checkWinner(board, player) || checkWinner(board, ai)) return;
  board[index] = player;
  renderBoard();
  if (checkEnd()) return;
  setTimeout(aiMove, 500);
}

function aiMove() {
  const difficulty = document.getElementById('difficulty').value;
  let move;
  if (difficulty === 'easy') {
    const available = board.map((v, i) => v === '' ? i : null).filter(v => v !== null);
    move = available[Math.floor(Math.random() * available.length)];
  } else {
    move = getBestMove();
  }
  if (move !== undefined) {
    board[move] = ai;
    renderBoard();
    checkEnd();
  }
}

function getBestMove() {
  for (let [a, b, c] of winCombos) {
    const line = [board[a], board[b], board[c]];
    const countAI = line.filter(v => v === ai).length;
    const countEmpty = line.filter(v => v === '').length;
    if (countAI === 2 && countEmpty === 1) {
      return [a, b, c][line.indexOf('')];
    }
  }
  for (let [a, b, c] of winCombos) {
    const line = [board[a], board[b], board[c]];
    const countPlayer = line.filter(v => v === player).length;
    const countEmpty = line.filter(v => v === '').length;
    if (countPlayer === 2 && countEmpty === 1) {
      return [a, b, c][line.indexOf('')];
    }
  }
  const empty = board.map((v, i) => v === '' ? i : null).filter(v => v !== null);
  return empty[Math.floor(Math.random() * empty.length)];
}

function checkWinner(b, sym) {
  return winCombos.some(combo => combo.every(index => b[index] === sym));
}

function checkEnd() {
  if (checkWinner(board, player)) {
    document.getElementById('message').textContent = 'You win!';
    endGame();
    return true;
  }
  if (checkWinner(board, ai)) {
    document.getElementById('message').textContent = 'Computer wins!';
    endGame();
    return true;
  }
  if (board.every(cell => cell !== '')) {
    document.getElementById('message').textContent = "It's a tie!";
    endGame();
    return true;
  }
  return false;
}

function endGame() {
  document.querySelectorAll('.cell').forEach(cell => cell.classList.add('taken'));
  document.getElementById('restartBtn').style.display = 'inline-block';
}

function restartGame() {
  board.fill('');
  document.getElementById('message').textContent = '';
  document.getElementById('restartBtn').style.display = 'none';
  renderBoard();
}
