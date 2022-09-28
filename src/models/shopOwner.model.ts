import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShopOwner {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    userId: string;

    @Column()
    shopId: string;

    @Column()
    createdBy: string = 'admin';

    @Column()
    createdAt: Date = new Date();
}