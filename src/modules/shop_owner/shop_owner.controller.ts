import { Controller, Get } from '@nestjs/common';
import { ShopOwnerService } from './shop_owner.service';

@Controller('shop-owner')
export class ShopOwnerController {

    constructor(private ownerService: ShopOwnerService) {}


    @Get()
    async getOwners() {
        return this.ownerService.getShopOwners();
    }
}
