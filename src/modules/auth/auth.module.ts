import { Module } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { UsersModule } from 'src/modules/users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [UsersModule, PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
