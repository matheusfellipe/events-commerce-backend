import { Request,response,Response } from "express";

import CreateEventService from "../services/CreateEventService";
import SearchEventService from "../services/SearchEventService";

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

    public async findByName(req,res:Response):Promise<Response>{
        const {name} = req.query;
        const findEventService = container.resolve(SearchEventService);

        const event = await findEventService.execute({
          name
        });
        return res.json(event);
    }
}