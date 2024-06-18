"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCors = void 0;
// Lista de orígenes permitidos
const allowedOrigins = ['http://localhost:4200', 'http://localhost:8100', 'http://186.78.106.238:8100'];
function setupCors(req, res, next) {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        next();
    }
}
exports.setupCors = setupCors;
