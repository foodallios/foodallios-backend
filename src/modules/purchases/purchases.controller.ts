import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createPurchaseDto } from 'src/dto/purchase/createPurchaseDto';
import { Purchase } from 'src/models/purchases.model';
import { PurchasesService } from './purchases.service';

@Controller('purchases')
export class PurchasesController {

    constructor (private purchaseService: PurchasesService) {}

    @Get()
    async getPurchase() {
        return this.purchaseService.getPurchases();
    }

    @Get(':purchaseId')
    async getPurchaseById(@Param("purchaseId") id: string): Promise<Purchase | undefined> {
        return this.purchaseService.getPurchaseById(id)
    }

    @Post('new')
    async postPurchase(@Body() jsBody: createPurchaseDto) {
        console.log("HELO")
        return this.purchaseService.postPurchase(jsBody);
    }
}
