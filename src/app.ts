import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import { ProductRoutes } from "./app/routes/product.routes";
import { OrderRoutes } from "./app/routes/order.routes";

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1/products", ProductRoutes);
app.use("/api/v1/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Assignment Two!");
});

export default app;
