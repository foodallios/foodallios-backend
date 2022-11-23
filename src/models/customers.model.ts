import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Purchase } from "./purchases.model";
import { TableOrder } from "./tableOrders.model";
import { Users } from "./users.model";

@Entity({ name: 'customer'})
export class Customers extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => Users , { eager: true, cascade: true })
    @JoinColumn({ name: "userId", referencedColumnName: "id"})
    user: Users;

    @Column()
    firstName?: string;

    @Column()
    lastName?: string;

    @Column()
    address?: string;

    @Column()
    dateOfBirth?: Date;

    @Column()
    createdBy: string = 'admin';

    @Column()
    createdAt: Date;

    @OneToMany(() => TableOrder, table_order => table_order.customer)
    @JoinColumn()
    tableOrder: TableOrder[];

    @OneToMany(() => Purchase, purchase => purchase.customer)
    @JoinColumn()
    purchase: Purchase[];
}