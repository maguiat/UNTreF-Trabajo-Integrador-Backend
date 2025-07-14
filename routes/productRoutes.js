const router = require("express").Router()
const { 
    getProducts, 
    getProductByCode } = require("../controllers/productController")

// Rutas
router.get("/", getProducts)
router.get("/:code", getProductByCode)

module.exports = router