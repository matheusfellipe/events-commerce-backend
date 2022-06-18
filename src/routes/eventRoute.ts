import { Router } from "express";

import EventsController from "../controllers/eventsController";


const router = Router();
const eventsController = new EventsController();
router.post("/events",eventsController.create);


export default router;