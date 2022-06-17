import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import  Order  from "./Orders";
import  Event  from "./Events";

@Entity('orders_events')
class OrdersEvents{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Order)
    @JoinColumn({name:'order_id'})
    order: Order;

    @ManyToOne(()=>Event)
    @JoinColumn({name:'event_id'})
    event: Event;

    @Column()
    product_id: number;

    @Column()
    order_id: number;

    @Column()
    price:number;

    @Column()
    quantity:number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default OrdersEvents;