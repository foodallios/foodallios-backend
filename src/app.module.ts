import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './services/auth/auth.service';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './services/users/users.service';
import { CustomersModule } from './modules/customers/customers.module';
import { ShopsModule } from './modules/shops/shops.module';

@Module({
  imports: [AuthModule, UsersModule, CustomersModule, ShopsModule],
  controllers: [AppController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {}
