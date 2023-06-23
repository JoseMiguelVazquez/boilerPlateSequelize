const { Router } = require('express')
const router = Router()
const productRouter = require('./product.routes')
const categoryRouter = require('./category.routes')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)

router.get('/', (req,res) => {
     res.status(200).send('GET de prueba / sola')
})

router.use('/products', productRouter)
router.use('/categories', categoryRouter)



module.exports = router