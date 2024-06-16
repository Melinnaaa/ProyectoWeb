"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCors = void 0;
// Permitir cualquier origen de localhost
function setupCors(req, res, next) {
    const origin = req.headers.origin;
    if (origin && origin.startsWith('http://localhost')) {
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
