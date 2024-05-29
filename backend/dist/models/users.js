"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const User = connection_1.default.define('Usuario', {
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
    }
}, {
    tableName: 'Usuarios',
    timestamps: false // Desactiva las columnas createdAt y updatedAt si no las necesitas
});
exports.default = User;
