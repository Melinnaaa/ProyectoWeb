import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('User', {
  Rut: {
    type: DataTypes.STRING(12),
    primaryKey: true,
    allowNull: false
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Region: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Comuna: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'Usuarios',
  timestamps: false
});

export default User;