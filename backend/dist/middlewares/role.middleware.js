"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRole = void 0;
const verifyRole = (requiredRole) => {
    return (req, res, next) => {
        const user = req.user;
        if (!user) {
            return res.status(401).json({ message: 'No autorizado' });
        }
        if (user.role !== requiredRole) {
            return res.status(403).json({ message: 'No tienes permiso para acceder a este recurso' });
        }
        next();
    };
};
exports.verifyRole = verifyRole;
