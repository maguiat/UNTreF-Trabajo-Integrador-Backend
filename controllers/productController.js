const { Product } = require("../models/product")

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" })
    }
}


module.exports = { 
    getProducts
 }