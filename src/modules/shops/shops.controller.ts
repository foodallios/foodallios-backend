import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { Shops } from 'src/models/shops.model';
import { ShopsService } from './shops.service';

@Controller('shops')
export class ShopsController {

    constructor(private shopService: ShopsService) {}

    @Get()
    getShops() {
        return this.shopService.getAllShops();
    }

    @Get(':shopId')
    getShopByName(@Param("shopId") id: string): Promise<Shops | undefined> {
        return this.shopService.getShopById(id);
    }
}
