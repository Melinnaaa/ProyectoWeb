import session from 'express-session';
import { Request, Response, NextFunction } from 'express';

import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const secretKey = process.env.SESSION_SECRET_KEY;

if (!secretKey) {
  throw new Error('No existe secret key');
}

const sessionMiddleware = session({
  secret: secretKey, 
  saveUninitialized: true,
  cookie: { secure: true } 
});

export const verifySession = (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.user) {
      next();
    } else {
      res.status(401).json({ message: 'No autorizado' });
    }
  };

export default (req: Request, res: Response, next: NextFunction) => {
  sessionMiddleware(req, res, next);
};
