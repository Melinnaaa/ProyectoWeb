import { Request } from 'express';
import 'express-session';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any; 
  }
}

declare module 'express-session' {
    interface SessionData {
      user: {
        id: string;
        username: string;
        role: string;
      };
      authenticated: boolean;
    }
}