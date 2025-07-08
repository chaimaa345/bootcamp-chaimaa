const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

// 1. Usernames with "!"
const usernames = [];
gameInfo.forEach(player => {
  usernames.push(player.username + "!");
});
console.log("Usernames with '!':", usernames);

// 2. Usernames with score > 5
const winners = [];
gameInfo.forEach(player => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});
console.log("Winners with score > 5:", winners);

// 3. Total score
const totalScore = gameInfo.reduce((sum, player) => sum + player.score, 0);
console.log("Total score of all players:", totalScore);
