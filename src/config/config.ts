import dotenv from 'dotenv';
interface Config {
  dbUri: string;
  port: number;
  secretKey: string;
}

// Configure dotenv to load the environment variables
dotenv.config();

const config: Config = {
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/floodRiskManagement',
  port: parseInt(process.env.PORT || '3000', 10),
  secretKey: process.env.SECRET_KEY || 'default_secret_key',
};

export default config;
