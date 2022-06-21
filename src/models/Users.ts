import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User  {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column({nullable:true})
    isAdmin: boolean;

}

export default User