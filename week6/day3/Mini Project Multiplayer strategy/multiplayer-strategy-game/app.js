const express = require('express');
const bodyParser = require('body-parser');
const gameRoutes = require('./routes/game');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve index.html etc.
app.use('/api', gameRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
