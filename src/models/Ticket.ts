import { Entity, Column, CreateDateColumn, PrimaryColumn,BaseEntity } from "typeorm";

@Entity("ticket")
export class Ticket extends BaseEntity {
  @PrimaryColumn()
  ticket_id: string;

  @Column({nullable: false,type: "float",default: 0.0})
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  sold: boolean;
}