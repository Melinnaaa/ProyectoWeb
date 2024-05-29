import { Request, Response, NextFunction } from 'express';

export const verifyRole = (requiredRole: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
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
