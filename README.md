Este repositorio contiene un proyecto de IONIC. Para configurar y ejecutar este proyecto localmente, sigue los pasos detallados a continuación.

## Pre-requisitos

Antes de comenzar, necesitarás tener instalado Node.js en tu máquina. Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/en/download/).

## Configuración del entorno

1. **Instalación de Node.js**:
   - Descarga e instala Node.js desde el sitio web oficial.
   - Reinicia tu computador después de instalar para asegurar que los cambios tomen efecto.

2. **Instalación de Ionic CLI**:
   - Abre Visual Studio Code (VS Code) y abre una terminal.
   - Ejecuta el siguiente comando para instalar Ionic CLI globalmente:
     ```
     npm i -g @ionic/cli
     ```
3. **Intalación de Xampp**
   - - XAMPP (para gestionar MySQL y Apache en Windows), puedes instalarlo desde acá [xampp](https://www.apachefriends.org/es/download.html)

## Creación del Proyecto

1. **Iniciar un nuevo proyecto de Ionic**:
   - En la terminal de VS Code, ejecuta:
     ```
     ionic start
     ```
   - Responde 'N' cuando se te pregunte si deseas integrar tu nuevo proyecto con Capacitor.
   - Selecciona 'Angular' como framework.
   - Asigna `ProyectoWeb` como nombre del proyecto.
   - Elige 'blank' como plantilla del proyecto.
   - Selecciona NGModules cuando se solicite.

2. **Espera a que finalice la instalación del proyecto**.
   - Ionic CLI configurará todos los archivos y dependencias necesarias.

3. **Integración de los archivos del proyecto**:
   - Una vez finalizada la instalación, copia los archivos de este repositorio en la carpeta raíz del nuevo proyecto creado.
4. **Instalación de dependencias**
   - Backend
      * cd backend
      * npm install
   - Frontend
      * cd ../frontend
      * npm install
5. **Configurar la base de datos** 
   - Abre XAMPP y asegúrate de que apache y MySQL esten en funcionamiento.
   - Abre phpMyAdmin, accede a la pestaña sql en la parte superior y copia el contenido de mascotapp.sql.

## Ejecución del Proyecto

### 1. Iniciar el backend
* cd backend
* npm install -g nodemon
* nodemon dist/index.js
* En otra terminal en backend
  * tsc --watch
El backend se ejecutará en el puerto 3000.

### 2. Iniciar el frontend
* cd ../frontend
* ionic serve
