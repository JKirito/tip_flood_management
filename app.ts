// Import express module
import express from 'express';
import config from '@config/config';
import UserRouter from '@routes/user.routes';
import AlertRouter from '@routes/alert.routes';
import mlRouter from '@routes/ml.routes';
import uploadRouter from '@routes/upload.routes';
import evacuationRouter from '@routes/evacuation.routes';
import PredictionRouter from '@routes/predictions.routes';
import ProximityZoneRouter from '@routes/proximityzone.routes';
import floodzoneRouter from '@routes/floodzone.route';
import cors from 'cors';

// This is the place where Express application set up
// Create an instance of express
const app = express();

// Define the port to run the server on
const PORT = config.port;

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route for GET requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/users', UserRouter);
app.use('/alerts', AlertRouter);
app.use('/ml', mlRouter);
app.use('/upload', uploadRouter);
app.use('/evacuation', evacuationRouter);
app.use('/predictions', PredictionRouter);
app.use('/proximityzone', ProximityZoneRouter);
app.use('/floodzone', floodzoneRouter);

export default app;
