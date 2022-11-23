import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
