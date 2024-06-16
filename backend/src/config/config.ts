import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || '3001',
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mascotapp'
  }
};
  
  export default config;
  