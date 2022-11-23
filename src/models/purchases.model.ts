import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customers } from "./customers.model";
import { Shop } from "./shops.model";
import { TableOrder } from "./tableOrders.model";

@Entity({ name: 'purchase'})
export class Purchase extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    totalPrice?: number;

    @Column()
    description?: string;

    @Column()
    isValid: boolean;

    @Column()
    createdAt: Date;

    @OneToMany(()=> TableOrder, tableOrder => tableOrder.purchase, { eager: true })
    @JoinColumn()
    tableOrder: TableOrder[];

    @ManyToOne(() => Customers, customer => customer.purchase, { eager: true, cascade: true })
    customer: Customers;

}