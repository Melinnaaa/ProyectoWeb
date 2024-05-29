import { Request } from 'express';
import 'express-session';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any; // Puedes especificar un tipo más específico si tienes una interfaz de usuario definida
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