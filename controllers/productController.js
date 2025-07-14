const { Product } = require("../models/product");

// Controladores

// Devuelve todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

// Devuelve un producto por su código
const getProductByCode = async (req, res) => {
  const { code } = req.params;
  try {
    const intCode = parseInt(code); // convertimos a entero
    const product = await Product.findOne({ codigo: intCode });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener producto" });
  }
};

// Agrega un nuevo producto al catálogo
const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res
      .status(201)
      .json({ message: "Producto agregado con éxito", product: savedProduct });
  } catch (error) {
    res.status(400).json({
      error:
        "No se pudo agregar el producto. El cuerpo de la solicitud es inválido o el código ya existe.",
    });
  }
};

// Modifica un producto existente
const updateProduct = async (req, res) => {
  try {
    const codigo = parseInt(req.params.codigo)
    const updatedProduct = await Product.findOneAndUpdate(
        { codigo: codigo },
        req.body,
        { new: true }
        )
    res
      .status(200)
      .json({
        message: "Producto actualizado con éxito",
        product: updatedProduct,
      })
  } catch (error) {
    res.status(404).json({ error: "Producto no encontrado" })
  }
}

module.exports = {
  getProducts,
  getProductByCode,
  addProduct,
  updateProduct,
};
