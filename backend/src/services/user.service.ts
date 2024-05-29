import connection from '../db/connection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { QueryTypes } from 'sequelize';

const login = async (Correo_electronico: string, password: string) => {
  try {
    console.log('Iniciando sesión para:', Correo_electronico);

    // Ejecutar la consulta para obtener el usuario por email
    const results: any = await connection.query('SELECT * FROM usuarios WHERE Correo_electronico = ?', {
      replacements: [Correo_electronico],
      type: QueryTypes.SELECT
    });

    // Asegurarse de que los resultados sean un array
    if (!Array.isArray(results) || results.length === 0) {
      throw new Error('El correo electrónico no existe');
    }

    const user = results[0];
    
    // Comparar la contraseña ingresada con la contraseña hasheada almacenada
    const isPasswordValid = await bcrypt.compare(password, user.Contrasena);
    if (!isPasswordValid) {
      throw new Error('La contraseña es incorrecta');
    }
    return {user };
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

export default { login };
