import { Module } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ShopOwner } from 'src/models/shopOwner.model';
import { ShopOwnerController } from './shop_owner.controller';
import { ShopOwnerService } from './shop_owner.service';

@Module({
    controllers: [ShopOwnerController],
    providers: [ShopOwnerService, { provide: getRepositoryToken(ShopOwner), useValue: ShopOwner}],
    exports: [ShopOwnerService]
})
export class ShopOwnerModule {}
