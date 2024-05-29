"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Error al cerrar sesión' });
        }
        res.clearCookie('connect.sid');
        res.json({ message: 'Cierre de sesión exitoso' });
    });
};
exports.logout = logout;
