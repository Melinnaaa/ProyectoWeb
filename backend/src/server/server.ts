import express, { Application } from 'express';
import corsMiddleware from '../middlewares/cors.middleware';
import rootRoutes from '../routes/root.routes';
import userRoutes from '../routes/users.routes';
import registerRoutes from '../routes/register.routes'
import loginRoutes from '../routes/login.routes'
import logoutRoutes from '../routes/logout.routes'
import db from '../db/connection';
import sessionMiddleware from '../middlewares/session.middleware';


class Server {
  private app: Application;
  private port: string;

  constructor(port: string) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.routes();
    this.dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Aplicación corriendo en el puerto ${this.port}`);
    });
  }

  private routes() {
    this.app.use('/', rootRoutes);
    this.app.use('/api/users', userRoutes);
    this.app.use('/api/signup', registerRoutes);
    this.app.use('/api/signin', loginRoutes);
    this.app.use('/api/logout', logoutRoutes);
  }

  private middlewares() {
    // Parseamos el body
    this.app.use(express.json());

    // CORS
    this.app.use(corsMiddleware);

    // Configuración de express-session
    this.app.use(sessionMiddleware);
  }

  private async dbConnection() {
    try {
      await db.authenticate();
      console.log('Base conectada');
    } catch (error) {
      console.log(error);
    }
  }
}

export default Server;