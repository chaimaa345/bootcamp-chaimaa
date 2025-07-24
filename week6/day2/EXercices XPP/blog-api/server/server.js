const express = require('express');
const app = express();
const postsRoutes = require('./routes/postsRoutes');



app.use(express.json());
app.use('/posts', postsRoutes);

// Handle 404
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
