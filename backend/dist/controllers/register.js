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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = void 0;
const users_1 = __importDefault(require("../models/users"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const axios_1 = __importDefault(require("axios"));
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { Rut, Contrasena, captchaToken } = _a, restoDatos = __rest(_a, ["Rut", "Contrasena", "captchaToken"]);
    // Verificar el token de reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    console.log(secretKey);
    console.log(captchaToken);
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
    try {
        const response = yield axios_1.default.post(verificationUrl);
        const { success, score } = response.data;
        // Define un umbral mínimo de puntuación para considerar una interacción como válida
        const scoreThreshold = 0.5;
        if (!success || score < scoreThreshold) {
            return res.status(400).json({ msg: 'Captcha inválido o interacción sospechosa' });
        }
        // Hashea la contraseña antes de guardar el usuario
        const hashedPassword = yield bcrypt_1.default.hash(Contrasena, 10);
        const [user, created] = yield users_1.default.findOrCreate({
            where: { Rut },
            defaults: Object.assign(Object.assign({}, restoDatos), { Contrasena: hashedPassword // Guarda la contraseña hasheada
             })
        });
        if (created) {
            res.status(201).json({
                msg: 'Usuario creado exitosamente',
            });
        }
        else {
            res.status(200).json({
                msg: 'El usuario ya existe',
            });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            msg: 'Error creando al usuario',
            error
        });
    }
});
exports.postUser = postUser;
