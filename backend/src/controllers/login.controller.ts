import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import userService from '../services/user.service';
import dotenv from 'dotenv';
const session = require('express-session');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('No existe secret key');
}

// Función para crear un token JWT
const createToken = (user: any) => {
  const payload = {
    id: user.user.Rut,
    username: user.user.Correo_electronico, 
    role: user.user.role
  };
  console.log(payload)

  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

// Función de login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await userService.login(email, password);
    if (user) {
      // Guardamos la información del usuario en la sesión
      req.session.user = { id: user.user.Rut, username: user.user.Correo_electronico, role: user.user.role };
      req.session.authenticated = true;
      const session = req.session;
      // Si el login es exitoso, generar un token
      const token = createToken(user);
      console.log(req.session.user)
      res.json({ user , token, session});
    } else {
      // Si las credenciales son incorrectas
      res.status(400).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Ocurrió un error desconocido' });
    }
  }
};

