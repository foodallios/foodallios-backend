import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { UsersService } from './modules/users/users.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm'
import { Users } from './models/users.model';
import { Shops } from './models/shops.model';
import { ShopOwner } from './models/shopOwner.model';
import { Customers } from './models/customers.model';
import { Products } from './models/products.model';
import { JwtService } from '@nestjs/jwt';
import { UsersController } from './modules/users/users.controller';
import { ShopsService } from './modules/shops/shops.service';
import { ShopsController } from './modules/shops/shops.controller';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'foodallios-db',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true
    }),
    TypeOrmModule.forFeature([
      Users,
      Shops,
      ShopOwner,
      Customers,
      Products
    ])],
  controllers: [
    AppController, 
    UsersController,
    ShopsController
  ],
  providers: [
    AppService,
    AuthService,
    UsersService,
    ShopsService,
    JwtService
  ],
})
export class AppModule { }
