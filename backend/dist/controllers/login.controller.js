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
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_service_1 = __importDefault(require("../services/user.service"));
const dotenv_1 = __importDefault(require("dotenv"));
const session = require('express-session');
// Cargar las variables de entorno desde el archivo .env
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
    throw new Error('No existe secret key');
}
// Función para crear un token JWT
const createToken = (user) => {
    const payload = {
        id: user.user.Rut,
        username: user.user.Correo_electronico,
        role: user.user.role
    };
    console.log(payload);
    return jsonwebtoken_1.default.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};
// Función de login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_service_1.default.login(email, password);
        if (user) {
            // Guardamos la información del usuario en la sesión
            req.session.user = { id: user.user.Rut, username: user.user.Correo_electronico, role: user.user.role };
            req.session.authenticated = true;
            const session = req.session;
            // Si el login es exitoso, generar un token
            const token = createToken(user);
            console.log(req.session.user);
            res.json({ user, token, session });
        }
        else {
            // Si las credenciales son incorrectas
            res.status(400).json({ message: 'Credenciales incorrectas' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: 'Ocurrió un error desconocido' });
        }
    }
});
exports.login = login;
