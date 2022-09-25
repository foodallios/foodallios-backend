import { Module } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { UsersController } from './users.controller';

@Module({
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
