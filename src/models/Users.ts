import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity('user')
export class User extends BaseEntity {

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