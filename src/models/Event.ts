import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";

  import { Ticket } from "./Ticket";

  @Entity("event")
export class Event {
  @PrimaryGeneratedColumn("increment")
  event_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  ticket_id: number;

  @ManyToOne(() => Ticket,ticket=>ticket.ticket_id)
  @JoinColumn({ name: "ticket_id" })
  ticket: Ticket;

  @CreateDateColumn()
  created_at: Date;

  @Column({type:'timestamp with local time zone'})
  show: Date;
 
}