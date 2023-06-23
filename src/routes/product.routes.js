const { Router } = require('express')
const router = Router()
const { Product } = require('../db')


// Ruta para traerme todos los productos
router.get('/', async (req,res) => {
    try {
        const allProducts = await Product.findAll()

        res.status(200).json(allProducts)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
    
})

// Ruta para traerme un producto con su id (primary key)
router.get('/:id', async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const product = await Product.findByPk(id)

        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    } 
})

// Ruta para crear un producto
router.post('/', async (req,res) => {
    try {
        const productBody = req.body
        await Product.create(productBody)
        res.status(200).json('Producto creado correctamente')
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    } 
})


module.exports = router