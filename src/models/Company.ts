import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Company extends BaseEntity {

    @PrimaryGeneratedColumn()
    company_id: number;

    @Column()
    name: string;

    @Column()
    cnpj: number;

    @Column()
    email: string;

}