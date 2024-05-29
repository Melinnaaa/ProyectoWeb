"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootHandler = void 0;
const rootHandler = (req, res) => {
    res.json({
        msg: 'API Working'
    });
};
exports.rootHandler = rootHandler;
