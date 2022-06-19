import { injectable } from "tsyringe";

import EventRepository from "../repositories/eventRepository";
import Event from "../models/Events";

interface Request{
    name:string;
}

@injectable()
class SearchEventService {
eventRepository:EventRepository;

constructor(eventRepository:EventRepository){
this.eventRepository = eventRepository;
}
public async execute({name}:Request):Promise<Event|undefined>{
const event = await this.eventRepository.findByName(name);
 if(!event){
     throw new Error('Event does not exists!')
 }
 return event;
}
}

export default SearchEventService;
