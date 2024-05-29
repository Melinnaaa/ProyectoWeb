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
const secretKey = process.env.SESSION_SECRET_KEY;
if (!secretKey) {
    throw new Error('No existe secret key');
}
const sessionMiddleware = (0, express_session_1.default)({
    secret: secretKey,
    saveUninitialized: true,
    cookie: { secure: true }
});
const verifySession = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    }
    else {
        res.status(401).json({ message: 'No autorizado' });
    }
};
exports.verifySession = verifySession;
exports.default = (req, res, next) => {
    sessionMiddleware(req, res, next);
};
