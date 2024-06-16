"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySession = void 0;
const express_session_1 = __importDefault(require("express-session"));
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar las variables de entorno desde el archivo .env
dotenv_1.default.config();
const sessionSecret = process.env.SESSION_SECRET_KEY;
const MemoryStore = express_session_1.default.MemoryStore;
if (!sessionSecret) {
    throw new Error('Session secret key is missing');
}
const sessionMiddleware = (0, express_session_1.default)({
    secret: sessionSecret,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24,
        sameSite: 'lax',
        secure: false,
        httpOnly: true },
    saveUninitialized: true,
    store: new MemoryStore()
});
const verifySession = (req, res, next) => {
    console.log('Session:', req.session);
    if (req.session.authenticated) {
        return next();
    }
    else {
        res.status(401).send('No autorizado');
    }
};
exports.verifySession = verifySession;
exports.default = sessionMiddleware;
