import express from "express";
import cors from "cors";
import imagesRoutes from "./src/routes/images.routes.js";

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/',imagesRoutes)

app.listen(PORT, () => {
    console.log(`🔥 Server on 🔥 http://localhost:${PORT}`)
})