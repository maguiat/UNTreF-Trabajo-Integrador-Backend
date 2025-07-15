// Rutas de la API de productos de las prendas

const router = require("express").Router()
const { 
    getProducts, 
    getProductByCode,
    addProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    searchByCategory,
    getProductsByPrice,
    postProductsMasivo
     } = require("../controllers/productController")

// Rutas
router.get("/", getProducts)
router.get("/buscar", searchProducts)
router.get("/categoria/:nombre", searchByCategory)
router.get("/:codigo", getProductByCode)
router.post("/", addProduct)
router.put("/:codigo", updateProduct)
router.delete("/:codigo", deleteProduct)
router.get("/precio/:min-:max", getProductsByPrice)
router.post("/masivo", postProductsMasivo)


module.exports = router