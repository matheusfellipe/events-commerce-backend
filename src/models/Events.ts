import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    BaseEntity,
   
   
  } from "typeorm";

  import OrdersEvents from "./OrdersEvents";
 

  @Entity("event")
export default class Event extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  event_id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  tickets: number

  @Column()
  description: string;

  @Column()
  address: string;

  @OneToMany(()=>OrdersEvents,orderEvents => orderEvents.order)
  order_events: OrdersEvents[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  
 
}