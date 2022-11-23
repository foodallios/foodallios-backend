import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/products.model';
import { Shop } from 'src/models/shops.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

    constructor(
        //@InjectRepository(Shop) private shopRepository: Repository<Shop>,
        @InjectRepository(Product) private productRepository: Repository<Product>
        ) {}

    async getAllProducts(): Promise<Product[] | undefined> {
        return this.productRepository.find();
    }

    async getProductById(id: string): Promise<Product | undefined> {
        return this.productRepository.findOne({ where: { id: id }});
    }

}
