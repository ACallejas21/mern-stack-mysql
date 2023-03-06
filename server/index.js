import express from "express";
import { PORT } from "./config.js";

//*Rutas
import indexRoutes from "./routes/index.routes.js";


const app = express()

app.use(indexRoutes)

app.listen(PORT)

console.log(`server listening on port ${PORT}`);