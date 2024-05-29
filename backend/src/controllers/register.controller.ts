import { Request, Response } from 'express';
import User from '../models/users.model';
import bcrypt from 'bcrypt';
import axios from 'axios';

export const postUser = async (req: Request, res: Response) => {
    const { Rut, Contrasena, captchaToken, ...restoDatos } = req.body;

    // Verificar el token de reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    try {
        const response = await axios.post(verificationUrl);
        const { success, score } = response.data;

        // Define un umbral mínimo de puntuación para considerar una interacción como válida
        const scoreThreshold = 0.5;

        if (!success || score < scoreThreshold) {
            return res.status(400).json({ msg: 'Captcha inválido o interacción sospechosa' });
        }

        // Hashea la contraseña antes de guardar el usuario
        const hashedPassword = await bcrypt.hash(Contrasena, 10);

        const [user, created] = await User.findOrCreate({
            where: { Rut },
            defaults: {
                ...restoDatos,
                Contrasena: hashedPassword // Guarda la contraseña hasheada
            }
        });

        if (created) {
            res.status(201).json({
                msg: 'Usuario creado exitosamente',
            });
        } else {
            res.status(200).json({
                msg: 'El usuario ya existe',
            });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            msg: 'Error creando al usuario',
            error
        });
    }
};
