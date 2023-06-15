// SERVIDOR BACKEND CON EXPRESS - - - PERN (Posgres(Base de datos) Express(servidor) React(Front) Node(entorno de ejecucion)) / MERN (MongoDB)
const express = require('express')
const {Pool} =require('pg')
const server = express() //Guardamos express en una variable; Puede llamarse app o server
const PORT = 3000

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvd_rental',
  password: '22Shmuack',
  port: 5432, // Puerto por defecto de PostgreSQL
});

server.listen(PORT, () => {
  console.log(`Se inicio correctamente el servidor en puerto ${PORT}`)
}) //ESCUCHO EL SERVIDOR LOCALHOST EN EL PUERTO QUE PUSE

server.get('/', (req, res) => {
  console.log('Entre a la peticion de GET /')
  res.status(200).send('GET de prueba a / sola')
})


server.get("/films", (req, res) => {
  const order = req.query.order;

  let querySQL = `SELECT * FROM film ORDER BY film_id`;

  if (order) {
    querySQL = `SELECT * FROM film ORDER BY film_id ${order}`;
  }

  pool.query(querySQL, (error, result) => {
    if (error) {
      res.status(500).send("error al conectar o enviar la petición:", error);
    } else {
      res.status(200).json(result.rows);
    }
  });
});

server.get('/films/:id', (req, res) => {
  const film_id = req.params.id

  let querySQL = `SELECT * FROM film WHERE film_id = ${film_id}`;

  pool.query(querySQL,(error,result)=>{
    if (error) {
      res.status(500).send('error al conectar o enviar la peticion:',error)
    }else{
      res.status(200).json(result.rows[0])
    }
  })
})

