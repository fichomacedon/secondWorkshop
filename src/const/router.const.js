import { Router } from "express";
import { productsRouter } from "../routes/product.routes.js";
// import { coursesRouter } from "../routes/course.routes.js";

export const globalRouter = Router();

globalRouter.use("/products", productsRouter);
// globalRouter.use("/orders", coursesRouter);
