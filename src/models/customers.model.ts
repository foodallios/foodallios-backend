import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customers {

    @PrimaryGeneratedColumn()
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