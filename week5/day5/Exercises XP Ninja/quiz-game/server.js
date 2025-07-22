const express = require("express");
const path = require("path");
const questions = require("./questions");

const app = express();
const PORT = 8000;

app.use(express.json());

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API route to get all questions
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

// API route to check an answer
app.post("/api/answer", (req, res) => {
  const { questionIndex, selected } = req.body;
  const isCorrect = questions[questionIndex].correct === selected;
  res.json({ correct: isCorrect });
});

app.listen(PORT, () => {
  console.log(`Quiz running at http://localhost:${PORT}`);
});


