import { AppDataSource } from "../db";

import Order from "../models/Orders";
import OrderInterface from "../interfaces/orderInterface";
import OrderBody from "../interfaces/orderCreate";

const dataSource = AppDataSource;

class OrderRepository implements OrderInterface{
 public async create({user,event}:OrderBody):Promise<Order>{
     const order = await dataSource.manager.create(Order,{
         user,
    order_events:event,
     });

     await order.save();
     return order;
 }

 public async findById(order_id: number): Promise<Order | undefined> {
     
     const order = await Order.findOne({

 relations: ['order_events','user'],
     })

     return order;
 }
}

export default OrderRepository;