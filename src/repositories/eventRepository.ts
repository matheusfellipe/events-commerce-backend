import { AppDataSource } from "../db";

import EventBody from "../interfaces/eventCreate";
import UpdateEvents from "../interfaces/updateTicketQuantity";
import EventInterface from "../interfaces/eventInterface";
import Events from "../models/Events";
import { In, Repository } from "typeorm";

const datasource = AppDataSource;

interface FindEvent{
    event_id:number;
}

class eventRepository implements EventInterface {
    private ormRepository: Repository<Events>
constructor(){
    this.ormRepository = datasource.manager.getRepository(Events);
}

    public async create({name,price,description,tickets,address}: EventBody): Promise<Events> {


        const event = await this.ormRepository.create({
            name,
            price,
            description,
            tickets,
            address

        })
        await this.ormRepository.save(event);
        return event;
    }

    public async findByName(name:string):Promise<Events | undefined>{
        const findEvent = await this.ormRepository.findOne({
            where: {
                name,
            }
        })
        return findEvent;
    }

    public async findAllById(event: FindEvent[]): Promise<Events[]> {
        const ids = event.map(product=>product.event_id);
        
        const findEvent = await this.ormRepository.findBy({
            event_id:  In([ids])
        })
        return findEvent;
    }

    public async updateQuantity(
        event: UpdateEvents[],
        ): Promise<Events[]> {
        const eventFind = await this.findAllById(event);

        const updateEvent = eventFind.map(even=>({
            ...even,
            tickets:
            even.tickets - (event.find(e=>even.event_id===e.event_id)?.tickets||0),
        }));

        await this.ormRepository.save(updateEvent);
        return updateEvent;
       
    }

    public async getEvent(): Promise<Events> {
        const event = await datasource.manager.query(`SELECT * FROM "EVENT"`);
        console.log(event)
        return event;
    }
}

export default eventRepository;