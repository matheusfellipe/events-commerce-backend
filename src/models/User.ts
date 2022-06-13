import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({type: "float",width: 11})
    cpf: number;

    @Column()
    email: string;

}
