import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'products' })
export class Products extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    shopId: string;

    @Column()
    title: string;

    @Column()
    category: string;

    @Column()
    quantity: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    createdBy: string = 'admin';

    @Column()
    createdAt: Date = new Date();
}