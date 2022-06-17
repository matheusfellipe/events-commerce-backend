import { Router } from "express";

import {createEvent} from "../controllers/eventsController";

const router = Router();

router.post("/events",createEvent);


export default router;