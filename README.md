# boilerPlateSequalize
Tener en cuenta que se usó NODE > 18.16.0 para este boilerplate

#Paso 1
Creamos un repositorio en GitHub y lo clonamos en nuestra PC. Se crea la carpeta src y el archivo index.js

#Paso 2
Utilizamos el comando `npm init` para crear un package.json

#Paso 3
Creamos un script en el package.json llamado start que nos dirige a correr el archivo index:
`  "start": "node --watch ./src/index.js"  `

#Paso 4
Instalamos express y pg (mas adelante body-parser paraconvertir a JSON e ingresar al body)
`npm install express`
`npm install pg`
`npm install body-parser`

