import Server from './server/server';
import config from './config/config';

const server = new Server(config.port);
server.listen();
