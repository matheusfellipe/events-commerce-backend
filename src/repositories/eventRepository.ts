import { AppDataSource } from "../db";

import EventBody from "../interfaces/eventCreate";
import UpdateEvents from "../interfaces/updateTicketQuantity";
import EventInterface from "../interfaces/eventInterface";
import Events from "../models/Events";
import { In } from "typeorm";

const datasource = AppDataSource;

interface FindEvent{
    event_id:number;
}

class eventRepository implements EventInterface {
    public async create({name,price,description,tickets,address}: EventBody): Promise<Events> {
        const event = await datasource.manager.create(Events,{
            name,
            price,
            description,
            tickets,
            address

        })
        await event.save();
        return event;
    }

    public async findByName(name:string):Promise<Events | undefined>{
        const findEvent = await datasource.manager.findOne(Events,{
            where: {
                name,
            }
        })
        return findEvent;
    }

    public async findAllById(event: FindEvent[]): Promise<Events[]> {
        const ids = event.map(product=>product.event_id);
        
        const findEvent = await datasource.manager.findBy(Events,{
            event_id:  In([ids])
        })
        return findEvent;
    }

    public async updateQuantity(event: UpdateEvents[]): Promise<Events[]> {
        const eventFind = await this.findAllById(event);

        const updateEvent = eventFind.map(even=>({
            ...even,
            tickets:
            even.tickets - (event.find(e=>even.event_id===e.event_id)?.tickets||0),
        }));

        await datasource.manager.save(updateEvent)
        return 
       
    }
}

export default eventRepository;