import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'shops' })
export class Shops extends BaseEntity {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    name: string;

    @Column()
    address: string;

    @Column()
    category: string;

    @Column()
    availableProducts: number;

    @Column()
    createdBy: string = 'admin';

    @Column()
    createdAt: Date = new Date();
}