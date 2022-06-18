import { Request,response,Response } from "express";

import CreateEventService from "../services/CreateEventService";

import { container } from "tsyringe";

export default class eventsController {
    public async create(req:Request,res:Response):Promise<Response>{
        const {name,price,tickets,description,address} = req.body;
const eventService = container.resolve(CreateEventService);

const event = await eventService.execute({
    name,
    price,
    tickets,
    description,
    address
});
return res.json(event);
    }
}