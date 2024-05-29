"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const connection = new sequelize_1.Sequelize(config_1.default.db.database, config_1.default.db.user, config_1.default.db.password, {
    host: config_1.default.db.host,
    dialect: 'mysql',
});
exports.default = connection;
