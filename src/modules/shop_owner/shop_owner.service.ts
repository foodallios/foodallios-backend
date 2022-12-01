import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createShopOwnerDto } from 'src/dto/shop_owner/createShopOwnerDto';
import { ShopOwner } from 'src/models/shopOwner.model';
import { Repository } from 'typeorm';

@Injectable()
export class ShopOwnerService {

    constructor(
        @InjectRepository(ShopOwner) private ownerRepository: Repository<ShopOwner>
    ) {}

    getShopOwners(): Promise<ShopOwner[] | undefined> {
        return this.ownerRepository.find();
    }

    createShopOwner(shopOwnerDetails: createShopOwnerDto): Promise<any> {
        const new_owner = this.ownerRepository.insert({
            user: shopOwnerDetails.user as unknown, //set as uknown because it doesn't allow to put string in DeepPartialQuery
            createdBy: shopOwnerDetails.createdBy,
            createdAt: shopOwnerDetails.createdAt,
            shop: [],
            
        })

        return new_owner;
    }
}
