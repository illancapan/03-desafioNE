import express from "express";
import cors from "cors";
import postsRouter from "./src/routes/posts.routes.js"
// import { getAllPost } from "./src/controllers/posts.controllers.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/', postsRouter);



app.listen(PORT, () => {
    console.log(`🔥 Servidor en el puerto 🔥 http://localhost:${PORT}`);
});
