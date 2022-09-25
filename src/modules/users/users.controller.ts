import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    getUsers() {
        console.log("Lose myself tonight")
        return "Hello Users"
    }
}
