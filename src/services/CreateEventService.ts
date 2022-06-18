import { injectable } from "tsyringe";

import Event from "../models/Events";
import eventRepository from "../repositories/eventRepository";
import EventRepository from "../repositories/eventRepository";

interface Request {
    name: string;
    price: number;
    tickets: number;
    description: string;
    address: string;
}

@injectable()
class CreateEventService {
    eventRepository : EventRepository;

    constructor(eventRepository:eventRepository){
this.eventRepository = eventRepository
    }

    public async execute({name,price,tickets,description,address}:Request):Promise<Event>
    {
const existsEvent = await this.eventRepository.findByName(name);

if(existsEvent){
    throw new Error('Event already exists');
}

const event = await this.eventRepository.create({
    name,
    price,
    tickets,
    description,
    address
});
return event;
    }
}

export default CreateEventService;