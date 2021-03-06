import { Router } from "express";

import EventsController from "../controllers/eventsController";


const router = Router();
const eventsController = new EventsController();
router.post("/events",eventsController.create);
router.get('/events',eventsController.findByName);
router.get('/events/all',eventsController.findAllEvent)


export default router;