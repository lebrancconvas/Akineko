import express, { type Request, type Response } from "express";
import router from "./router/router.js";
import dotenv from "dotenv";

import { DB } from "./db/db.js";

dotenv.config();

const PORT = process.env.API_PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`[SUCCESS] Run API at PORT: ${PORT}`);
  DB(); 
});

