const router = require("express").Router()
const { getProducts} = require("../controllers/productController")

// Rutas
router.get("/", getProducts)

module.exports = router