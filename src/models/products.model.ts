import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "./shops.model";
import { TableOrder } from "./tableOrders.model";


@Entity({ name: 'product' })
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    shopId: string;

    @Column()
    title: string;

    @Column()
    category: string;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    createdBy: string = 'admin';

    @Column()
    createdAt: Date = new Date();

    @ManyToOne(() => Shop, (shop) => shop.product)
    shop: Shop;

    @OneToMany(() => TableOrder, tableOrder => tableOrder.product)
    tableOrder: TableOrder[];
}