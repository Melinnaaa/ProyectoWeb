import { Request, Response, NextFunction } from 'express';

// Lista de orígenes permitidos
const allowedOrigins = ['http://localhost:4200', 'http://localhost:8100'];

export function setupCors(req: Request, res: Response, next: NextFunction) {
  const origin = req.headers.origin as string;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
}