import { Controller, Request } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { Product } from 'src/models/products.model';
import { Shop } from 'src/models/shops.model';
import { ShopsService } from './shops.service';

@Controller('shop')
export class ShopsController {

    constructor(private shopService: ShopsService) {}

    @Get()
    getShops() {
        return this.shopService.getAllShops();
    }

    @Get(':shopId')
    getShopById(@Param("shopId") id: string): Promise<Shop | undefined> {
        return this.shopService.getShopById(id);
    }

    @Get(':shopId/product-list')
    getShopProductList(@Param("shopId") id: string): Promise<Product[] | undefined> {
        return this.shopService.getShopsProductList(id)
    }

}
