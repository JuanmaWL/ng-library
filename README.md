# ng-library

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

Se ha usado Angular Material https://material.angular.io/guide/getting-started (```ng add @angular/material``` para instalar)

Para la API Rest "fake" se ha usado https://github.com/typicode/json-server (```npm install -g json-server``` para instalar)

Para ejecutar la build se ha usado https://github.com/johnpapa/lite-server (```npm install --global lite-server``` para instalar)

## Ejecución ##

Proyecto.

1. Ubicarse en el directorio 'ng-library'
2. Poner en marcha json-server ejecutando ```npm run api``` o ```json-server --watch ./src/assets/mediaDataBase.json```. Se habilita **http://localhost:3000**
3. En otro terminal: Paso 1 y jecutar ```ng serve``` y navegar a **http://localhost:4200**. La aplicación se recargará automáticamente si se realiza algún cambio.

También se puede hacer la build de la app y ejecutarla.

1. Ubicarse en el directorio 'ng-library'
2. Ejecutar ```ng build --watch```
3. Ubicarse en el directorio dist/ng-library
4. Ejecutar ```npm run api``` o ```json-server --watch ./src/assets/mediaDataBase.json```
5. En otro terminal: Paso 3 y ejecutar ```npm run dev``` o ```lite-server -c bs-config.json``` y navegar a **http://localhost:4200** para acceder a la app.
