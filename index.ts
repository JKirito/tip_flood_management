import app from './app';
import mongoose from 'mongoose';
import config from '@config/config';

// Database connection
mongoose
  .connect(config.dbUri)
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Start the server
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
