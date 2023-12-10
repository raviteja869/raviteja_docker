const express = require('express');
const cors = require('cors'); // Required for CORS
const app = express();
const port = 7000;

// Middleware to enable CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send("Welcome to the Ravi Teja's Backend!");
});

// New endpoint for frontend to interact with
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
