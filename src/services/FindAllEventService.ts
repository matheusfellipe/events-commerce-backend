import { injectable } from "tsyringe";

import EventRepository from "../repositories/eventRepository";
import Event from "../models/Events";


@injectable()
class FindAllEventsService{
    eventRepository:EventRepository;

    constructor(eventRepository:EventRepository){
this.eventRepository = eventRepository;
    }
    public async execute():Promise<Event|undefined>{
        const event = await this.eventRepository.getEvent()        
        if(!event){
            throw new Error('Does not have events avaliable!')
        }
        return;
    }
}

export default FindAllEventsService;