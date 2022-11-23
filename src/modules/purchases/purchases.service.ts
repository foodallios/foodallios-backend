import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createPurchaseDto } from 'src/dto/purchase/createPurchaseDto';
import { Purchase } from 'src/models/purchases.model';
import { Repository } from 'typeorm';

@Injectable()
export class PurchasesService {

    constructor(
        @InjectRepository(Purchase) private purchaseRepository: Repository<Purchase>
    ) 
    {}

    async getPurchases(): Promise<Purchase[] | undefined> {

        return this.purchaseRepository.find();
    }

    async getPurchaseById(id: string): Promise<Purchase | undefined> {

        return this.purchaseRepository.findOne({ where: { id: id }})
    }

    async postPurchase(newPurchase: createPurchaseDto): Promise<any> {

        const new_purchase = await this.purchaseRepository.insert({
            customer: newPurchase.customer,
            totalPrice: newPurchase.totalPrice,
            description: newPurchase.description,
            isValid: newPurchase.isValid,
            createdAt: newPurchase.createdAt
        })

        return new_purchase;
    }
}
