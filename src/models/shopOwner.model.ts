import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "./shops.model";
import { Users } from "./users.model";

@Entity({ name: 'shop_owner' })
export class ShopOwner extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    userId: string;

    @OneToOne(() => Users, { eager: true, cascade: true })
    @JoinColumn()
    user: Users;

    @Column()
    createdBy: string = 'admin';

    @Column()
    createdAt: Date = new Date();

    @OneToMany(() => Shop, (shop) => shop.shopOwner, { eager: true })
    @JoinColumn()
    shop: Shop[];
}