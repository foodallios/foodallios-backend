import { BaseEntity, Column, Entity, Exclusion, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./products.model";
import { ShopOwner } from "./shopOwner.model";

@Entity({ name: 'shop' })
export class Shop extends BaseEntity {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true })
    shopOwnerId?: string;

    @Column({ unique: true })
    name: string;

    @Column()
    moto: string;

    @Column()
    address: string;

    @Column()
    category: string;

    @Column()
    availableProducts: number;

    @Column()
    wrkHours: string;

    @Column()
    shopImgUrl?: string;

    @Column()
    createdBy: string = 'admin';

    @Column()
    createdAt: Date = new Date();

    @OneToMany(() => Product, product => product.shop, { eager: true, cascade: ['insert', 'update'] })
    @JoinColumn()
    product: Product[];

    @ManyToOne(() => ShopOwner, shop_owner => shop_owner.shop)
    shopOwner: ShopOwner;
}