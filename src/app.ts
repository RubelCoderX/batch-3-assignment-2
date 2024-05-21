import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import { ProductRoutes } from "./app/routes/product.routes";

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Assignment Two!");
});

export default app;
