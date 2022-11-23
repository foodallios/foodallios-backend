import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Users } from 'src/models/users.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService

    ) {
        super();
    }

    //Fix this. It is duplicating in both here and the service. Here put an if for calid user and pass to return the user.
    async validate(username: string, password: string): Promise<Users> {

        const validUser = await this.authService.validateUser(username);
        if (!validUser) {
          throw new NotFoundException(`${username} does not exist`);
    
        }

        const passwordValid = await this.authService.validatePassword(password, validUser)

        if(!passwordValid) {
          throw new Error("Invalid Password");
        }

        return validUser;

    }
}