import { Request,Response } from "express";
import Order from "../models/Orders";
import usersController from "../controllers/usersController";

interface Event {
    event_id: number;
    ticket: number;
}

interface Request {
    user_id: number;
    event: Event[];
}

