import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { UsersService } from './modules/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from './models/users.model';
import { Shop } from './models/shops.model';
import { ShopOwner } from './models/shopOwner.model';
import { Customers } from './models/customers.model';
import { Product } from './models/products.model';
import { JwtService } from '@nestjs/jwt';
import { UsersController } from './modules/users/users.controller';
import { ShopsService } from './modules/shops/shops.service';
import { ShopsController } from './modules/shops/shops.controller';
import { AuthController } from './modules/auth/auth.controller';
import { ProductsService } from './modules/products/products.service';
import { ProductsController } from './modules/products/products.controller';
import { TableOrder } from './models/tableOrders.model';
import { TableOrderController } from './modules/table_order/table_order.controller';
import { TableOrderService } from './modules/table_order/table_order.service';
import { PurchasesController } from './modules/purchases/purchases.controller';
import { PurchasesService } from './modules/purchases/purchases.service';
import { Purchase } from './models/purchases.model';
import { ShopOwnerController } from './modules/shop_owner/shop_owner.controller';
import { ShopOwnerService } from './modules/shop_owner/shop_owner.service';
import { CustomersController } from './modules/customers/customers.controller';
import { CustomersService } from './modules/customers/customers.service';
import { QrController } from './modules/qr/qr.controller';
import { QrService } from './modules/qr/qr.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'foodallios',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([
      Users,
      Shop,
      ShopOwner,
      Customers,
      Product,
      TableOrder,
      Purchase
    ]),
  ],
  controllers: [
    AppController,
    CustomersController,
    UsersController,
    ShopsController,
    ProductsController,
    AuthController,
    TableOrderController,
    PurchasesController,
    ShopOwnerController,
    QrController
  ],
  providers: [
    AppService,
    CustomersService,
    AuthService,
    UsersService,
    ShopsService,
    ProductsService,
    JwtService,
    TableOrderService,
    PurchasesService,
    ShopOwnerService,
    QrService
  ],
})
export class AppModule { }
