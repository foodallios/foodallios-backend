import { Test, TestingModule } from '@nestjs/testing';
import { ShopOwnerController } from './shop_owner.controller';

describe('ShopOwnerController', () => {
  let controller: ShopOwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopOwnerController],
    }).compile();

    controller = module.get<ShopOwnerController>(ShopOwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
