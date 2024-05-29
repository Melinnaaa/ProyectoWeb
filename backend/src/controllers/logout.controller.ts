import { Request, Response } from 'express';

export const logout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error al cerrar sesión' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Cierre de sesión exitoso' });
  });
};
