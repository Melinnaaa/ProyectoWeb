"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
    throw new Error('No existe secret key');
}
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'No se proporcionó un token' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        console.log(decoded);
        req.user = decoded; // Asignar la información decodificada del usuario a req.user
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Token no válido' });
    }
};
exports.verifyToken = verifyToken;
