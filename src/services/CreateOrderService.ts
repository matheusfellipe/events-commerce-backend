import { injectable,inject } from "tsyringe";
import "reflect-metadata";

import Order from "../models/Orders";
import {internalServerError,badRequest,noContent,notFound,ok} from "../utils/generics.responses"


import orderRepository from "../repositories/orderRepository";
import eventRepository from "../repositories/eventRepository";
import userRepository from "../repositories/userRepository";


interface Event{
    event_id:number,
    tickets:number,
}

interface Request{
    user_id:number;
    event: Event[];
}

@injectable()
class CreateOrderService {

    constructor(
        @inject('OrdersRepository')
    private orderRepository:orderRepository,

    @inject('EventRepository')
    private eventRepository:eventRepository,

    @inject('UserRepository')
    private userRepository:userRepository
    ){}

public async execute({user_id,event}:Request):Promise<Order>{
    const user = await this.userRepository.findById(user_id);

    if(!user){
        throw new Error('User not found');
    }

    const eventFind = await this.eventRepository.findAllById(
event.map(event=>({event_id:event.event_id})),
    );
console.log(event)
    if(event.length !== eventFind.length){
        throw new Error('Event not found')
    }

    event.forEach(event=>{
        const findTickets = eventFind.find(({event_id})=>event_id===event.event_id)
        ?.tickets;

        if((findTickets||0)<event.tickets){
            throw new Error('Ticket invalid')
        }
    });

    try {
        const order = await this.orderRepository.create({
            user,
            event:event.map(event=>({
                event_id:event.event_id,
                price:eventFind.find(({event_id})=>event_id===event.event_id)?.price||0,
                tickets:event.tickets,
            })),
        });
    
        await this.eventRepository.updateQuantity(event);
    
        return order;
    } catch (error) {
        console.log(error.name + ":" + error.message + internalServerError);
    }
  
}
}

export default CreateOrderService;
