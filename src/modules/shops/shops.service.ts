import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shops } from 'src/models/shops.model';
import { Repository } from 'typeorm';

@Injectable()
export class ShopsService {

    constructor(@InjectRepository(Shops) private shopRepository: Repository<Shops>) {}

    async getAllShops(): Promise<Shops[] | undefined> {
        return this.shopRepository.find();
    }

    async getShopById(id: string): Promise<Shops | undefined> {
        return this.shopRepository.findOne({ where: { id: id }});
    }


}
