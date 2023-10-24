import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import db from "./config/database.js";
db.connect();

import routes from "./routes/userRoutes.js";
app.use("/users", routes);

// Futura implementação de produtos
// import routes from "./routes/productRoutes.js";
// app.use("/products", routes);

export default app;
