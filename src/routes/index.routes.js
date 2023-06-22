const { Router } = require('express')
const router = Router()
const { Product } = require('../db')
// const productRouter = require()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)

router.get('/', (req,res) => {
     res.status(200).send('Hola estas conectado correctamente')
})

// Ruta para traerme todos los productos
router.get('/products', async (req,res) => {
    try {
        const allProducts = await Product.findAll()

        res.status(200).json(allProducts)
    } catch (error) {
        res.status(400).json(error)
    }
    
})

router.get('/products/:id', async (req,res) => {
    try {
        const id = req.params.id
        const product = await Product.findByPk(id)

        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)
    } 
})

// router.use('/products', productRouter)



module.exports = router