import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
    throw new Error('No existe secret key');
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No se proporcionó un token' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log(decoded);
        req.user = decoded; // Asignar la información decodificada del usuario a req.user
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token no válido' });
    }
};