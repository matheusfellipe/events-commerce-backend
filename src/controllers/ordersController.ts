import { Request,Response } from "express";


import {container} from 'tsyringe';

import CreateOrderService from '../services/CreateOrderService';
import FindOrderService from '../services/FindOrderService';

export default class OrdersController{
   
    public async show(request,response:Response): Promise<Response>{
        const {event_id} = request.params;
        const findOrderService = container.resolve(FindOrderService);
        const order = await findOrderService.execute({
            event_id
        });
        return response.json(order);
    }
    
    public async create(request:Request,response:Response): Promise<Response>{
        const {user_id,event} = request.body;

        const createOrderService = container.resolve(CreateOrderService);
        const orders = await createOrderService.execute({
            user_id,
            event
        });
        return response.json(orders);
    }
}