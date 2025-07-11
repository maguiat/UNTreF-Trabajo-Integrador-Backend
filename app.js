const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const { connectDB } = require("./config/database")

connectDB()


// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})