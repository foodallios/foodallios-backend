import { Controller, Get, Param } from '@nestjs/common';
import { Body, Post, UseGuards } from '@nestjs/common/decorators';
import { createUserDto } from 'src/dto/users/createUserDto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Users } from 'src/models/users.model';
import { UsersService } from 'src/modules/users/users.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers() {
        console.log("Lose myself tonight")
        return this.usersService.getAllUsers();
    }

    @Get(':username')
    async testORM(@Param("username") username: string): Promise<Users> {
        const user = await this.usersService.findUserByUsername(username);
        return user;
    }

    // @Get(':userId')
    // async getUserById(@Param("userId") id: string): Promise<any> {
    //     console.log(id)
    //     const user = await this.usersService.findUserById(id);
    //     return user;
    // }

    @Post('new')
    async createNewUser(@Body() jsbody: createUserDto) {
        return this.usersService.createUser(jsbody);
    }
}
