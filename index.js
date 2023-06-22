require('dotenv').config() //HABILITO A LEER UN ARCHIVO .ENV. INSTALAR npm install dotenv
const {EXPRESS_PORT} = process.env

const server = require('./src/server')
const {sequelize} =require('./src/db')


//sincronizo todos los models de una sola vez
sequelize.sync({ force: false }).then(()=>{


  server.listen(EXPRESS_PORT, () => {
    console.log(`Se inicio correctamente el servidor en puerto ${EXPRESS_PORT}`)
  }) //ESCUCHO EL SERVIDOR LOCALHOST EN EL PUERTO QUE PUSE
})











// SERVIDOR BACKEND CON EXPRESS - - - PERN (Posgres(Base de datos) Express(servidor) React(Front) Node(entorno de ejecucion)) / MERN (MongoDB)
// const express = require('express')
// const server = express() //Guardamos express en una variable; Puede llamarse app o server
//CONEXION A BASE DE DATOS
// const {Pool} =require('pg') //import Pool de pg
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'dvd_rental',
//   password: '22Shmuack',
//   port: 5432, // Puerto por defecto de PostgreSQL
// });


// server.get('/', (req, res) => {
//   console.log('Entre a la peticion de GET /')
//   res.status(200).send('GET de prueba a / sola')
// })

// server.get('/welcome', (req, res) => {
//   console.log('Entre a la peticion GET de /saludo')
//   try {
//     console.log('Estoy dentro del TRY')
//     res.status(200).send('GET de prueba a / sola, BIENVENIDO!')
//   } catch(error) {
//     console.log('Estoy dentro del CATCH', error)
//     res.status(400).json('error en la ruta welcome')
//   }
// })

// server.get('/films', (req, res) => {
//   const order = req.query.order;

//   let querySQL = `SELECT * FROM film ORDER BY film_id`;

//   if (order) {
//     querySQL = `SELECT * FROM film ORDER BY film_id ${order}`;
//   }

//   pool.query(querySQL, (error, result) => {
//     if (error) {
//       res.status(500).send("error al conectar o enviar la petición:", error);
//     } else {
//       res.status(200).json(result.rows);
//     }
//   });
// });

// server.get('/films/:id', (req, res) => {
//   const film_id = req.params.id

//   let querySQL = `SELECT * FROM film WHERE film_id = ${film_id}`;

//   pool.query(querySQL,(error,result)=>{
//     if (error) {
//       res.status(500).send('error al conectar o enviar la peticion:',error)
//     }else{
//       res.status(200).json(result.rows[0])
//     }
//   })
// })


//Por implementar
// server.delete('/films/:id',(req,res)=>{
//   const film_id = req.params.id

//   let querySQL = `DELETE FROM film WHERE film_id = ${film_id}`;

//   pool.query(querySQL,(error,result)=>{
//     if (error) {
//       res.status(500).send('error al conectar o enviar la peticion:',error)
//     }else{
//       res.status(200).json('La pelicula se eliminó correctamente')
//     }
//   })
// })

