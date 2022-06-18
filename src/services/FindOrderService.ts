import { injectable } from "tsyringe";

import EventRepository from "../repositories/eventRepository";
import OrderRepository from "../repositories/orderRepository";
import UserRepository from "../repositories/userRepository";
import Order from "../models/Orders";

interface Request{
    event_id:number;
}

@injectable()
class FindOneService{
eventRepository: EventRepository;
orderRepository: OrderRepository;
userRepository:UserRepository;
    constructor(eventRepository:EventRepository,orderRepository:OrderRepository,userRepository:UserRepository){
this.eventRepository = eventRepository;
this.orderRepository = orderRepository;
this.userRepository = userRepository;
    }
    public async execute({event_id}:Request):Promise<Order|undefined>{
        const order = await this.orderRepository.findById(event_id);
        if(!order){
            throw new Error('Order does not exists');
        }
        return order;
    }
}

export default FindOneService;