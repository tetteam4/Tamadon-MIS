import express from 'express';

const app = express();
const PORT = 3000; // Change the port if needed

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Additional Route (optional)
app.get('/about', (req, res) => {
  res.send('This is the About page');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
