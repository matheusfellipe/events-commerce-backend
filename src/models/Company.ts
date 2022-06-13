import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    company_id: number;

    @Column()
    name: string;

    @Column()
    cnpj: number;

    @Column()
    email: string;

}