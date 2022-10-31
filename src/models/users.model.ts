import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({ unique: true })
    username?: string;

    @Column({ length: 50 })
    password?: string;

    @Column({ unique: true })
    email?: string;

    @Column()
    role?: "CUSTOMER" | "OWNER" | "ADMIN";

    @Column()
    active?: boolean = true;

    @Column()
    createdBy?: string = 'admin';

    @Column()
    createdAt?: Date = new Date();
}