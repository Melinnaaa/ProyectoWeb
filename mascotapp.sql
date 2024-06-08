CREATE DATABASE IF NOT EXISTS mascotapp;
USE mascotapp;

CREATE TABLE Usuarios (
    Rut VARCHAR(12) PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Correo_electronico VARCHAR(255) NOT NULL UNIQUE,
    Contrasena VARCHAR(255) NOT NULL,
    Region VARCHAR(255) NOT NULL,
    Comuna VARCHAR(255) NOT NULL,
    role INT DEFAULT 0
);

-- Creación de la tabla Robots
CREATE TABLE Robots (
    numSerie VARCHAR(255) PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    urlStream VARCHAR(255) UNIQUE,
    usuario_rut VARCHAR(12) NOT NULL,
    FOREIGN KEY (usuario_rut) REFERENCES Usuarios(Rut)
);

-- Creación de la tabla Sensores
CREATE TABLE Sensores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    robot_numSerie VARCHAR(255) NOT NULL,
    FOREIGN KEY (robot_numSerie) REFERENCES Robots(numSerie)
);

-- Creación de la tabla Lecturas
CREATE TABLE Lecturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    valor VARCHAR(255) NOT NULL,
    fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    sensor_id INT NOT NULL,
    FOREIGN KEY (sensor_id) REFERENCES Sensores(id)
); 
