const mongoose = require('mongoose')
const { Product } = require('./models/product.js')
const productsData = require('./data/prendas.json')

process.loadEnvFile()
const MONGODB_URI = process.env.MONGODB_URI

const poblarDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Conectado a MongoDB para poblar la base de datos...")

        // Verificamos si la colección ya tiene documentos
        const count = await Product.countDocuments()
        if (count > 0) {
            console.log("La base de datos ya está poblada. No se hará nada.")
            return // Termina el script si ya hay datos
        }

        // Se insertan los datos del archivo JSON
        console.log("Poblando la base de datos con datos iniciales...")
        await Product.insertMany(productsData)
        console.log("¡Base de datos poblada con éxito! ✅")

    } catch (error) {
        console.error("Error durante el seeding de la base de datos:", error)
    } finally {
        // Desconección de la base de datos
        await mongoose.disconnect()
        console.log("Desconectado de MongoDB.")
    }
}

poblarDB()