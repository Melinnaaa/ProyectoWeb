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
const connection_1 = __importDefault(require("../db/connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const sequelize_1 = require("sequelize");
const login = (Correo_electronico, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Iniciando sesión para:', Correo_electronico);
        // Ejecutar la consulta para obtener el usuario por email
        const results = yield connection_1.default.query('SELECT * FROM usuarios WHERE Correo_electronico = ?', {
            replacements: [Correo_electronico],
            type: sequelize_1.QueryTypes.SELECT
        });
        // Asegurarse de que los resultados sean un array
        if (!Array.isArray(results) || results.length === 0) {
            throw new Error('El correo electrónico no existe');
        }
        const user = results[0];
        // Comparar la contraseña ingresada con la contraseña hasheada almacenada
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.Contrasena);
        if (!isPasswordValid) {
            throw new Error('La contraseña es incorrecta');
        }
        return { user };
    }
    catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
});
exports.default = { login };
