const mongoose = require("mongoose")

const PrendaSchema = new mongoose.Schema({
    codigo: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: [{ type: String, required: true }],
})

const Product = mongoose.model("Product", PrendaSchema, 'prendas') // 'prendas' es el nombre de la colección en MongoDB

module.exports = { Product }