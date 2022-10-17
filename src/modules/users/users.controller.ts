import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers() {
        console.log("Lose myself tonight")
        return this.usersService.getAllUsers();
    }

    async testORM(username: string): Promise<any> {
        const user = await this.usersService.findDbOne(username);
        return user;
    }
}
