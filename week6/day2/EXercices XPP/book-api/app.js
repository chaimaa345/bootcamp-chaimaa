const express = require('express');
const app = express();
const bookRoutes = require('./server/routes/bookRoutes');

app.use(express.json());
app.use('/api', bookRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
