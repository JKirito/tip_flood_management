import axios from 'axios'; // Or your HTTP client of choice
import mongoose from 'mongoose';
import UserModel, { UserType } from '@models/User';
import config from '@config/config';

// Function to generate dummy user data
// function generateUserData(): UserType {
//   return {
//     // Your data generation logic here
//     name: 'John Doe',
//   };
// }

async function populateDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.dbUri);

    // Loop to create multiple users (if needed)
    for (let i = 0; i < 10; i++) {
      //   const userData = generateUserData();

      // Make POST request to your endpoint
      const response = await axios.post(
        'http://localhost:3000/users'
        // userData
      );

      console.log('User created:', response.data);
    }
  } catch (error) {
    console.error('Population error:', error);
  } finally {
    mongoose.disconnect();
  }
}

populateDatabase();
