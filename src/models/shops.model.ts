import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shops {
    
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