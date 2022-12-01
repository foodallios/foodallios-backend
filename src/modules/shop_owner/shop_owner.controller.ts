import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { createShopOwnerDto } from 'src/dto/shop_owner/createShopOwnerDto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ShopOwnerService } from './shop_owner.service';

@UseGuards(JwtAuthGuard)
@Controller('shop-owner')
export class ShopOwnerController {

    constructor(private ownerService: ShopOwnerService) {}


    @Get()
    async getOwners() {
        return this.ownerService.getShopOwners();
    }

    @Post('new')
    async newOwner(@Body() jsBody: createShopOwnerDto) {
        return this.ownerService.createShopOwner(jsBody);
    }
}
