# ng-library

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.
Para la API Rest "fake" se ha usado https://github.com/typicode/json-server ('npm install -g json-server' para instalar)
Para ejecutar la build se ha usado https://github.com/johnpapa/lite-server ('npm install --global lite-server' para instalar)

En el repositorio está todo el código fuente y la build de la app.

## Ejecución ##

Proyecto.

1. Ubicarse en el directorio de la app **'cd ng-library'**
2. Poner en marcha json-server ejecutando **'json-server --watch ./src/assets/mediaDataBase.json'**. Se habilita **http://localhost:3000**
3. En otro terminal: Paso 1 y jecutar **'ng serve'** y navegar a **http://localhost:4200**. La aplicación se recargará automáticamente si se realiza algún cambio.

También se puede ejecutar directamente la build de la app ubicada en \dist\ng-library. 
Para ello:

1. Ubicarse en el directorio dist\ng-library.
2. Ejecutar **'npm run api'** o **'json-server --watch ./src/assets/mediaDataBase.json'**
3. En otro terminal: Paso 1 y ejecutar** 'npm run dev'** o **'lite-server -c bs-config.json'** y navegar a **http://localhost:4200** para acceder a la app.
