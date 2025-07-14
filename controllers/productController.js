const { Product } = require("../models/product")

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" })
    }
}

const getProductByCode = async (req, res) => {
    const { code } = req.params
    try {
        const intCode = parseInt(code) // convertimos a entero
        const product = await Product.findOne({ codigo: intCode })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener producto" })
    }
}



module.exports = { 
    getProducts,
    getProductByCode
 }