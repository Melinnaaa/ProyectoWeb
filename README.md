# ProyectoWeb

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

## Ejecución del Proyecto

Para ejecutar el proyecto y visualizarlo en un navegador web, sigue estos pasos:

- Abre una terminal en la carpeta raíz del proyecto.
- Ejecuta el comando:
   ```
     ionic serve
     ```
 - Ionic compilará el proyecto y lo servirá en `http://localhost:8100`.

¡Ya está listo! Ahora puedes ver y interactuar con tu proyecto en la página web indicada.

   
