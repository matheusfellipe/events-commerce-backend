import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany, UpdateDateColumn } from "typeorm";

import  User  from "./Users";
import OrdersEvents from "./OrdersEvents";

@Entity('order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  orders_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => OrdersEvents, orderEvents => orderEvents.order, {
    cascade: true,
  })
  order_events: OrdersEvents[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Order