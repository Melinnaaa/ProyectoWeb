"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*export const iniciarSesion = async (req: Request, res: Response): Promise<void> => {
    const { nombreUsuario, contrasena } = req.body;
    try {
        const usuario = await User.findOne({ nombreUsuario, contrasena });
        if (usuario) {
            const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token, mensaje: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const cerrarSesion = (req: Request, res: Response): void => {
    res.status(200).json({ mensaje: 'Sesión cerrada exitosamente' });
};*/ 
