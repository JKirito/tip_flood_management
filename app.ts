// Import express module
import express from 'express';
import config from './src/config';

// Create an instance of express
const app = express();

// Define the port to run the server on
const PORT = config.port;

app.use(express.json());

// Define a route for GET requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default app;
