let gameId = null;
let currentPlayer = 'player1';
let gameState = null;

function startGame() {
  const player1 = prompt("Enter name for Player 1:");
  const player2 = prompt("Enter name for Player 2:");

  fetch('/api/start', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ player1, player2 })
  })
    .then(res => res.json())
    .then(data => {
      gameId = data.gameId;
      gameState = data.game;
      renderBoard();
      alert("Game started! Player 1 goes first.");
    });
}

function move(direction) {
  if (!gameId) return alert("Game not started yet.");

  fetch('/api/move', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ gameId, player: currentPlayer, direction })
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) return alert(data.error);
      gameState = data;
      renderBoard();

      if (data.winner) {
        alert(`${currentPlayer} wins!`);
      } else {
        currentPlayer = data.turn;
      }
    });
}

function renderBoard() {
  const boardDiv = document.getElementById('board');
  boardDiv.innerHTML = '';

  const board = Array(10).fill(null).map(() => Array(10).fill(''));

  const { player1, player2 } = gameState.players;

  board[player1.base[0]][player1.base[1]] = '🏠P1';
  board[player2.base[0]][player2.base[1]] = '🏠P2';
  board[player1.position[0]][player1.position[1]] = '🧍‍♂️';
  board[player2.position[0]][player2.position[1]] = '🧍‍♀️';

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = board[i][j];
      row.appendChild(cell);
    }
    boardDiv.appendChild(row);
  }

  renderControls();
}

function renderControls() {
  const boardDiv = document.getElementById('board');

  const controls = document.createElement('div');
  controls.className = 'controls';

  ['up', 'down', 'left', 'right'].forEach(dir => {
    const btn = document.createElement('button');
    btn.textContent = dir.toUpperCase();
    btn.onclick = () => move(dir);
    controls.appendChild(btn);
  });

  boardDiv.appendChild(controls);
}
