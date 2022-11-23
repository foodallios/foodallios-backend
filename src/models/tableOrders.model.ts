import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customers } from "./customers.model";
import { Product } from "./products.model";
import { Purchase } from "./purchases.model";

@Entity({ name: 'table_order' })
export class TableOrder extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Customers, customer => customer.tableOrder, { eager: true })
    @JoinColumn()
    customer: Customers;

    @ManyToOne(() => Product, product => product.tableOrder, { eager: true })
    @JoinColumn()
    product: Product;
    
    @Column()
    quantity: number;

    @Column()
    orderPrice: number;

    @Column()
    createdAt: Date;

    @ManyToOne(() => Purchase, purchase => purchase.tableOrder)
    purchase: Purchase;

}