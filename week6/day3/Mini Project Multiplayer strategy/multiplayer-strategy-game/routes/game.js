const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/games.json');

// Read saved games from file
function readGames() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading games.json:', err);
    return {};
  }
}

// Write updated games to file
function writeGames(games) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(games, null, 2));
  } catch (err) {
    console.error('Error writing to games.json:', err);
  }
}

// Start a new game
router.post('/start', (req, res) => {
  const { player1, player2 } = req.body;

  if (!player1 || !player2) {
    return res.status(400).json({ error: 'Both player names are required' });
  }

  const gameId = Date.now().toString();
  const game = {
    id: gameId,
    board: [...Array(10)].map(() => Array(10).fill(null)),
    players: {
      player1: { name: player1, position: [0, 0], base: [0, 0] },
      player2: { name: player2, position: [9, 9], base: [9, 9] }
    },
    turn: 'player1',
    winner: null
  };

  const games = readGames();
  games[gameId] = game;
  writeGames(games);

  console.log(`Game ${gameId} started: ${player1} vs ${player2}`);
  res.status(201).json({ gameId, game });
});

// Make a move
router.post('/move', (req, res) => {
  const { gameId, player, direction } = req.body;

  if (!gameId || !player || !direction) {
    return res.status(400).json({ error: 'Missing gameId, player, or direction' });
  }

  const games = readGames();
  const game = games[gameId];

  if (!game) {
    return res.status(404).json({ error: 'Game not found' });
  }

  if (game.winner) {
    return res.status(400).json({ error: `Game over. ${game.winner} already won.` });
  }

  if (game.turn !== player) {
    return res.status(400).json({ error: 'Not your turn' });
  }

  const delta = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1]
  };

  const move = delta[direction];
  if (!move) {
    return res.status(400).json({ error: 'Invalid direction' });
  }

  const currentPos = game.players[player].position;
  const newPos = [currentPos[0] + move[0], currentPos[1] + move[1]];

  // Check boundaries
  if (newPos[0] < 0 || newPos[0] > 9 || newPos[1] < 0 || newPos[1] > 9) {
    return res.status(400).json({ error: 'Move out of bounds' });
  }

  const opponent = player === 'player1' ? 'player2' : 'player1';
  const opponentPos = game.players[opponent].position;

  // Prevent moving into opponent's position
  if (newPos[0] === opponentPos[0] && newPos[1] === opponentPos[1]) {
    return res.status(400).json({ error: 'You cannot move into the opponent\'s position' });
  }

  // Update position
  game.players[player].position = newPos;

  // Win condition
  if (newPos[0] === game.players[opponent].base[0] &&
      newPos[1] === game.players[opponent].base[1]) {
    game.winner = player;
    console.log(`Game ${gameId}: ${player} has captured the base and won!`);
  }

  // Switch turn if no winner
  if (!game.winner) {
    game.turn = opponent;
  }

  games[gameId] = game;
  writeGames(games);
  res.json(game);
});

module.exports = router;
