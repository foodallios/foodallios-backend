import { Module } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/models/users.model';
import { UsersService } from 'src/modules/users/users.service';
import { UsersController } from './users.controller';

@Module({
    providers: [UsersService, { provide: getRepositoryToken(Users), useValue: Users }],
    imports: [],
    exports: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
