import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    role: "CUSTOMER" | "OWNER" | "ADMIN";

    @Column()
    active: boolean = true;

    @Column()
    createdBy: string = 'admin';

    @Column()
    createdAt: Date = new Date();
}