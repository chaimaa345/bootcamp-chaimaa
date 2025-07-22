const express = require('express');
const path = require('path');
const emojis = require('./emojis');

const app = express();
app.use(express.static('public'));
app.use(express.json());

let score = 0;
let currentEmoji = null;

function getQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = new Set([correct.name]);

  while (options.size < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    options.add(random.name);
  }

  currentEmoji = correct;

  return {
    emoji: correct.emoji,
    options: Array.from(options).sort(() => Math.random() - 0.5),
    emojiId: correct.emoji, // used as key to track answer
    score
  };
}

app.get('/api/question', (req, res) => {
  const question = getQuestion();
  res.json(question);
});

app.post('/api/guess', (req, res) => {
  const { guess, emojiId } = req.body;
  const correctEmoji = emojis.find(e => e.emoji === emojiId);

  const isCorrect = correctEmoji && correctEmoji.name === guess;

  if (isCorrect) score++;

  res.json({
    correct: isCorrect,
    correctAnswer: correctEmoji.name,
    score
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});








