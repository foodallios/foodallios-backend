import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';
import { CustomersModule } from './modules/customers/customers.module';
import { ShopsModule } from './modules/shops/shops.module';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm'
import { Users } from './models/users.model';
import { Shops } from './models/shops.model';
import { ShopOwner } from './models/shopOwner.model';
import { Customers } from './models/customers.model';
import { Products } from './models/products.model';
import { JwtService } from '@nestjs/jwt';
import { UsersController } from './modules/users/users.controller';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CustomersModule,
    ShopsModule,
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
  ],
  providers: [
    AppService,
    AuthService,
    UsersService,
    JwtService
  ],
})
export class AppModule { }
