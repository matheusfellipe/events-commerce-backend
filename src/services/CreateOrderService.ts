import { injectable } from "tsyringe";

import Order from "../models/Orders";

import EventRepository from "../repositories/eventRepository";
import UserRepository from "../repositories/userRepository";
import OrderRepository from "../repositories/orderRepository";


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
eventRepository:EventRepository;
orderRepository: OrderRepository;
userRepository:UserRepository;

constructor(eventRepository:EventRepository,orderRepository:OrderRepository,userRepository:UserRepository){
this.eventRepository = eventRepository;
this.orderRepository = orderRepository;
this.userRepository = userRepository;
}

public async execute({user_id,event}:Request):Promise<Order>{
    const user = await this.userRepository.findById(user_id);

    if(!user){
        throw new Error('User not found');
    }

    const eventFind = await this.eventRepository.findAllById(
event.map(event=>({event_id:event.event_id})),
    );

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
}
}

export default CreateOrderService;
