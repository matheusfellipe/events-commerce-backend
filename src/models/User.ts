import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

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
