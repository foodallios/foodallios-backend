import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/products.model';
import { Shop } from 'src/models/shops.model';
import { Repository } from 'typeorm';

@Injectable()
export class ShopsService {

    constructor(
        @InjectRepository(Shop) private shopRepository: Repository<Shop>,
        @InjectRepository(Product) private productRepository: Repository<Product>
        ) {}

    async getAllShops(): Promise<Shop[] | undefined> {
        return this.shopRepository.find();
    }

    async getShopById(id: string): Promise<Shop | undefined> {
        return this.shopRepository.findOne({ where: { id: id }});
    }

    async getShopsProductList(id: string): Promise<Product[] | undefined> {
        return this.productRepository.find({ where: { shopId: id}});
    }


}
