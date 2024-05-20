import mongoose from 'mongoose';
import config from '@config/config';
import { GridFSBucket } from 'mongodb';
import app from './app';

// This is where the application server started
let gfsBucket: any = null;

mongoose
  .connect(config.dbUri)
  .then(() => {
    console.log('Database connected successfully.');
    const { connection } = mongoose; // Use existing connection
    connection.once('open', () => {
      gfsBucket = new GridFSBucket(connection.db);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export const getGfsBucket = () => gfsBucket;
