// Import express module
import express from 'express';
import config from '@config/config';
import UserRouter from '@routes/user.routes';
import AlertRouter from '@routes/alert.routes';
import mlRouter from '@routes/ml.routes';
import uploadRouter from '@routes/upload.routes';

// This is the place where Express application set up
// Create an instance of express
const app = express();

// Define the port to run the server on
const PORT = config.port;

app.use(express.json());

// Define a route for GET requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/users', UserRouter);
app.use('/alerts', AlertRouter);
app.use('/ml', mlRouter);
app.use('/upload', uploadRouter);

export default app;
