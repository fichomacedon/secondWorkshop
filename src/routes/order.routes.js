import { Router } from "express";
import { OrderController } from "../controllers/order.controller.js";

export const ordersRouter = Router();

ordersRouter.get("/", OrderController.getAllOrders);
ordersRouter.get("/:id", OrderController.getOrderById);
ordersRouter.post("/", OrderController.createOrder);
