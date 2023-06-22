const express = require('express') // importo express

require('./db.js')

const server = express()

server.name = 'ecommerceApi' //Nombrar al servidor

server.get('/', (req,res) => {
    res.status(200).send('Hola estas conectado correctamente')
})




module.exports = server