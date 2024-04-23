// Import express module
import express from 'express';
import dotenv from 'dotenv';

// Create an instance of express
const app = express();

// Define the port to run the server on
const PORT = 3000;

// Define a route for GET requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server listening on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
