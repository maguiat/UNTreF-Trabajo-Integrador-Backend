// Programa principal

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const productRoutes = require("./routes/productRoutes")
const { connectDB } = require("./config/database")

connectDB()

// Middleware
app.use(express.json())

// Rutas
app.use("/api/productos", productRoutes)

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})