import { Body, Controller, Get, Param, Patch, Post, Delete, UseGuards } from '@nestjs/common';
import { createPurchaseDto } from 'src/dto/purchase/createPurchaseDto';
import { ValidatePurchaseDto } from 'src/dto/purchase/validatePurchaseDto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Purchase } from 'src/models/purchases.model';
import { PurchasesService } from './purchases.service';

@UseGuards(JwtAuthGuard)
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

    @Patch('validate')
    async validatePurchase(@Body() jsBody: ValidatePurchaseDto) {
        return this.purchaseService.putValidatePurchase(jsBody);
    }

    @Post('new')
    async postPurchase(@Body() jsBody: createPurchaseDto) {
        return this.purchaseService.postPurchase(jsBody);
    }

    @Delete(':purchaseId/delete')
    async deletePurchase(@Param("purchaseId") id: string) {
        return this.purchaseService.deletePurchase(id)
    }

    // @Get('qr')
    // async qrGen() {
    //     return this.purchaseService.qrGenerator();
    // }

}
