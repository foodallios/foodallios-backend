import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { editOrderDto } from 'src/dto/table_orders/editOrderDto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Product } from 'src/models/products.model';
import { ProductsService } from './products.service';

@UseGuards(JwtAuthGuard)
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

    @Patch('/update')
    updateProductById(@Body() jsBody: editOrderDto) {
        return this.productService.updateProduct(jsBody);
    }

}
