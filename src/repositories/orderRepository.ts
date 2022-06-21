import { AppDataSource } from "../db";

import Order from "../models/Orders";
import OrderInterface from "../interfaces/orderInterface";
import OrderBody from "../interfaces/orderCreate";
import { Repository } from "typeorm";



class OrderRepository implements OrderInterface{
private ormRepository : Repository<Order>

constructor(){
    this.ormRepository = AppDataSource.manager.getRepository(Order)
}

 public async create({user,event}:OrderBody):Promise<Order>{
     const order = await this.ormRepository.create({
         user,
    order_events:event,
     });

     await this.ormRepository.save(order);
     return order;
 }

 public async findById(order_id: number): Promise<Order | undefined> {
     
     const order = await this.ormRepository.findOne({

 relations: ['order_events','user'],
 where:{
      orders_id:order_id
 }
     })

     return order;
 }
}

export default OrderRepository;