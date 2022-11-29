import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createPurchaseDto } from 'src/dto/purchase/createPurchaseDto';
import { ValidatePurchaseDto } from 'src/dto/purchase/validatePurchaseDto';
import { Purchase } from 'src/models/purchases.model';
import { Repository } from 'typeorm';
import QRCode from 'qrcode';

@Injectable()
export class PurchasesService {

    constructor(
        @InjectRepository(Purchase) private purchaseRepository: Repository<Purchase>,
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

    async putValidatePurchase(validatePurchase: ValidatePurchaseDto): Promise<any> {

        const validPurchase = await this.purchaseRepository.update(
            { 
                id: validatePurchase.id 
            }, 
            { 
                isValid: validatePurchase.isValid,
                totalPrice: validatePurchase.totalPrice,
                createdAt: new Date()
            })

        return validPurchase;
    }

    async deletePurchase(id: string) {
        await this.purchaseRepository.createQueryBuilder().delete().where({ id: id })
    }

    async qrGenerator(/*purchase: any*/) {
        var opts: {
            errorCorrectionLevel: 'H',
            type: 'image/png',
            quality: 0.3,
            margin: 1,
            color: {
              dark:"#010599FF",
              light:"#FFBF60FF"
            }
        }

        QRCode.toString("Dummy Text", opts, function  (err, url) {
            if(err) return console.log(err)

            console.log(url);
            
        })
        // this.qr.toCanvas(purchase, opts, function (err, url) {
        //     if(err) throw err;

        //     let container = document.getElementById('container');
        //     container.appendChild(url);
        // })
    }
}
