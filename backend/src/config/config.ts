import dotenv from 'dotenv';
dotenv.config();
const config = {
    port: process.env.PORT || '3001',
    db: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'mascotapp'
    }
  };
  
  export default config;
  