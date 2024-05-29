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
exports.putUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield users_model_1.default.findAll();
    res.json(listUsers);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield users_model_1.default.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con rut ${id}`
        });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield users_model_1.default.findByPk(id);
    if (user) {
        yield user.destroy();
        res.json({
            msg: 'El usuario fue eliminado con exito'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con rut ${id}`
        });
    }
});
exports.deleteUser = deleteUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield users_model_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'Usuario no encontrado'
            });
        }
        yield user.update(body);
        res.json({
            msg: 'Usuario actualizado correctamente',
        });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            msg: 'Error al actualizar el usuario',
            error
        });
    }
});
exports.putUser = putUser;
