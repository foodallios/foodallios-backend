import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/modules/auth/constants';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor
        (
            private usersService: UsersService,
            private jwtService: JwtService
    ) { }

    async validateEntity(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findDbOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        else {
            return UnauthorizedException;
        }
    }
    
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload, jwtConstants),
        };
    }

    async testORM(username: string): Promise<any> {
        const user = await this.usersService.findDbOne(username);
        return user;
    }
}
