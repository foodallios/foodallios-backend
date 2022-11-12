import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'shop' })
export class Shop extends BaseEntity {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

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
    createdBy: string = 'admin';

    @Column()
    createdAt: Date = new Date();
}