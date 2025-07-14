const router = require("express").Router()
const { 
    getProducts, 
    getProductByCode,
    addProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
     } = require("../controllers/productController")

// Rutas
router.get("/", getProducts)
router.get("/buscar", searchProducts)
router.get("/:code", getProductByCode)
router.post("/", addProduct)
router.put("/:codigo", updateProduct)
router.delete("/:codigo", deleteProduct)


module.exports = router