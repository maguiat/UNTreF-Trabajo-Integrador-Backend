// Conexión a la base de datos

const mongoose = require("mongoose")
process.loadEnvFile()
const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Conectado a MongoDB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDB }