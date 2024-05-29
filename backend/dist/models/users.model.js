"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('User', {
    Rut: {
        type: sequelize_1.DataTypes.STRING(12),
        primaryKey: true,
        allowNull: false
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Correo_electronico: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Contrasena: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Region: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Comuna: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'Usuarios',
    timestamps: false
});
exports.default = User;
