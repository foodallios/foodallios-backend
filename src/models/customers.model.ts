import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'customer'})
export class Customers extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    userId: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column()
    dateOfBirth: Date = new Date();

    @Column()
    createdBy: string = 'admin';

    @Column()
    createdAt: Date = new Date();
}