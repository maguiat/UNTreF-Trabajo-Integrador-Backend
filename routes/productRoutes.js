const router = require("express").Router()
const { 
    getProducts, 
    getProductByCode,
    addProduct,
     } = require("../controllers/productController")

// Rutas
router.get("/", getProducts)
router.get("/:code", getProductByCode)
router.post("/", addProduct)


module.exports = router