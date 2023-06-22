const express = require('express') // importo express
const server = express() //Guardamos express en una variable, puede llamarse app o server, o como sea
const routes = require('./routes/index.routes')
const bodyParser = require("body-parser")
require('./db.js')


server.name = 'ecommerceApi' //Nombrar al servidor

// server.get('/', (req,res) => {
//     res.status(200).send('Hola estas conectado correctamente')
// })

//MIDDLEWARE BODY PARSER
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
server.use(bodyParser.json({ limit: "50mb" }))


//CONEXION CON TODAS LAS RUTAS
server.use('/', routes)

// MIDDLEWARE DE CACHEO DE ERRORES
server.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || err
    console.error(err)
    res.status(status).send(message)
})



module.exports = server