import { Controller, Get, Param } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { createUserDto } from 'src/dto/users/createUserDto';
import { Users } from 'src/models/users.model';
import { UsersService } from 'src/modules/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers() {
        console.log("Lose myself tonight")
        return this.usersService.getAllUsers();
    }

    @Get('orm')
    async testORM(username: string): Promise<any> {
        const user = await this.usersService.findUserByUsername(username);
        return user;
    }

    @Get(':userId')
    async getUserById(@Param("userId") id: string): Promise<any> {
        console.log(id)
        const user = await this.usersService.findUserById(id);
        return user;
    }

    @Post('new')
    async createNewUser(@Body() jsbody: createUserDto) {
        return this.usersService.createUser(jsbody);
    }
}
