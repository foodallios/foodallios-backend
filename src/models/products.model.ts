import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
}