import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Products {

    @PrimaryGeneratedColumn()
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