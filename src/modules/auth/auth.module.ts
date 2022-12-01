import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { UsersModule } from 'src/modules/users/users.module';
import { LocalStrategy } from './jwt/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt/constants';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth.controller';
import { CustomersModule } from '../customers/customers.module';
import { ShopOwnerModule } from '../shop_owner/shop_owner.module';

@Module({
    imports: [
        UsersModule,
        CustomersModule,
        ShopOwnerModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.ACCESS_SECRET,
            signOptions: {
                expiresIn: "2m",
            }
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
