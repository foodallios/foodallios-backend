import { Controller, Get, Param } from '@nestjs/common';
import { Product } from 'src/models/products.model';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {

    constructor(private productService: ProductsService) {}

    @Get()
    async getProduct(): Promise<Product[] | undefined> {
        return this.productService.getAllProducts();
    }

    @Get(':productId')
    getProductById(@Param("productId") id: string): Promise<Product | undefined> {
        return this.productService.getProductById(id);
    }

}
