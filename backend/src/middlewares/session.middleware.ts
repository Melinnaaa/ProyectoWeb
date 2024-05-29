import session from 'express-session';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const sessionSecret = process.env.SESSION_SECRET_KEY;
const MemoryStore = session.MemoryStore;

if (!sessionSecret) {
  throw new Error('Session secret key is missing');
}

const sessionMiddleware = session({
  secret: sessionSecret,
  resave: false,
  cookie: {maxAge: 1000*60*60*24, 
          sameSite: 'lax',
          secure: false,
          httpOnly: true}, 
  saveUninitialized: true,
  store: new MemoryStore()
});

export const verifySession = (req: Request, res: Response, next: NextFunction) => {
  console.log('Session:', req.session);
  if (req.session.authenticated) {
    return next();
  } else {
    res.status(401).send('No autorizado');
  }
};

export default sessionMiddleware;
