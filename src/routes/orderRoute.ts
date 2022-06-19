import { Router } from "express";

import OrdersController from "../controllers/ordersController";

const route = Router();

const ordersController = new OrdersController;

route.post('/orders',ordersController.create);
route.get('/orders/:id',ordersController.show);

export default route;