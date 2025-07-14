const { Product } = require("../models/product")

// Controladores

// Devuelve todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" })
  }
}

// Devuelve un producto por su código
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

// Agrega un nuevo producto al catálogo
const addProduct = async (req, res) => {
  const newProduct = new Product(req.body)
  try {
    const savedProduct = await newProduct.save()
    res
      .status(201)
      .json({ message: "Producto agregado con éxito", product: savedProduct })
  } catch (error) {
    res.status(400).json({
      error:
        "No se pudo agregar el producto. El cuerpo de la solicitud es inválido o el código ya existe.",
    })
  }
}

// Modifica un producto existente
const updateProduct = async (req, res) => {
  try {
    const codigo = parseInt(req.params.codigo)
    const updatedProduct = await Product.findOneAndUpdate(
      { codigo: codigo },
      req.body,
      { new: true }
    )
    res.status(200).json({
      message: "Producto actualizado con éxito",
      product: updatedProduct,
    })
  } catch (error) {
    res.status(404).json({ error: "Producto no encontrado" })
  }
}

// Elimina un producto
const deleteProduct = async (req, res) => {
  try {
    const codigo = parseInt(req.params.codigo)
    const deletedProduct = await Product.findOneAndDelete({ codigo: codigo })
    res.status(200).json({
      message: "Producto eliminado con éxito",
      product: deletedProduct,
    })
  } catch (error) {
    res.status(404).json({ error: "Producto no encontrado" })
  }
}

// Buscar un producto por término
// GET /productos/buscar?q={termino}
const searchProducts = async (req, res) => {
  try {
    const { q } = req.query
    if (!q) {
      return res.status(400).json({
        error:
          "Se requiere un término de búsqueda. Ejemplo: /productos/buscar?q=notebook",
      })
    }

    const regex = new RegExp(q, "i")
    const products = await Product.find({
      $or: [{ nombre: { $regex: regex } }, { descripcion: { $regex: regex } }],
    })
    res.status(200).json(products)
  } catch (error) {
    console.error("Error en la búsqueda de productos:", error)
    res.status(500).json({ error: "Error interno del servidor" })
  }
}

// Buscar productos por categoría
// GET /productos/categoria/:nombre
const searchByCategory = async (req, res) => {
    try {
        const { nombre } = req.params
        const categoryRegex = new RegExp(`^${nombre}$`, 'i')
        const products = await Product.find({ categoria: categoryRegex })
        res.status(200).json(products)

    } catch (error) {
        console.error("Error al filtrar por categoría:", error)
        res.status(500).json({ error: "Error interno del servidor" })
    }
}

// Productos en rango de precio 
// GET /productos/precio/:min-:max
const getProductsByPrice = async (req, res) => {
    try {
        const { min, max } = req.params

        const minPrice = parseFloat(min)
        const maxPrice = parseFloat(max)

        if (isNaN(minPrice) || isNaN(maxPrice)) {
            return res.status(400).json({ 
                error: "Los valores de precio mínimo y máximo deben ser números." 
            })
        }
        const query = {
            precio: {
                $gte: minPrice, // Mayor o igual que minPrice
                $lte: maxPrice  // Menor o igual que maxPrice
            }
        }
        const products = await Product.find(query)
        res.status(200).json(products)

    } catch (error) {
        console.error("Error al filtrar por rango de precio:", error)
        res.status(500).json({ error: "Error interno del servidor" })
    }
}

// POST /productos/masivo
const postProductsMasivo = async (req, res) => {
    const productsToAdd = req.body
    if (!Array.isArray(productsToAdd) || productsToAdd.length === 0) {
        return res.status(400).json({
            error: "El cuerpo de la solicitud debe ser un array de productos."
        })
    }
    try {
        const createdProducts = await Product.insertMany(productsToAdd)
        res.status(201).json({
            message: "Todos los productos fueron agregados con éxito.",
            productosAgregados: createdProducts
        })

    } catch (error) {
        console.error("Error en carga masiva:", error) 
        res.status(400).json({
            error: "No se pudieron agregar los productos. Revisa que todos los datos sean válidos y que los códigos no estén duplicados."
        })
    }
}
module.exports = {
  getProducts,
  getProductByCode,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  searchByCategory,
  getProductsByPrice,
  postProductsMasivo
}
