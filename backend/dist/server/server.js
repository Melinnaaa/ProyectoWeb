"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_middleware_1 = require("../middlewares/cors.middleware");
const root_routes_1 = __importDefault(require("../routes/root.routes"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
const register_routes_1 = __importDefault(require("../routes/register.routes"));
const login_routes_1 = __importDefault(require("../routes/login.routes"));
const logout_routes_1 = __importDefault(require("../routes/logout.routes"));
const connection_1 = __importDefault(require("../db/connection"));
const session_middleware_1 = __importDefault(require("../middlewares/session.middleware"));
const sensor_routes_1 = __importDefault(require("../routes/sensor.routes"));
class Server {
    constructor(port) {
        this.app = (0, express_1.default)();
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
    routes() {
        this.app.use('/', root_routes_1.default);
        this.app.use('/api/users', users_routes_1.default);
        this.app.use('/api/signup', register_routes_1.default);
        this.app.use('/api/signin', login_routes_1.default);
        this.app.use('/api/logout', logout_routes_1.default);
        this.app.use('/api/sensors', sensor_routes_1.default);
    }
    middlewares() {
        // CORS
        this.app.use(cors_middleware_1.setupCors);
        // Configuración de express-session
        this.app.use(session_middleware_1.default);
        // Parseamos el body
        this.app.use(express_1.default.json());
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base conectada');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = Server;
