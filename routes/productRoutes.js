const router = require("express").Router()
const { 
    getProducts, 
    getProductByCode,
    addProduct,
    updateProduct,
     } = require("../controllers/productController")

// Rutas
router.get("/", getProducts)
router.get("/:code", getProductByCode)
router.post("/", addProduct)
router.put("/:codigo", updateProduct)


module.exports = router