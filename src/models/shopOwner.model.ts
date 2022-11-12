import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'shop_owner' })
export class ShopOwner extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
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