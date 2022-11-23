import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/dto/users/createUserDto';
import { loginUserDto } from 'src/dto/users/loginUserDto';
import { Users } from 'src/models/users.model';
import { jwtConstants } from 'src/modules/auth/jwt/constants';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

  constructor
    (
      private usersService: UsersService,
      private jwtService: JwtService
    ) { }

  async login(user: loginUserDto) {

    // const validUser = await this.validateUser(user);
    // if (!validUser) {
    //   throw new NotFoundException(`${user.email} does not exist`);

    // }
    
    // const passwordValid = await this.validatePassword(user, validUser)

    // if(!passwordValid) {
    //   throw new Error("Invalid Password");
    // }

    return {
      access_token: this.jwtService.sign({ username: user.email, password: user.password }, jwtConstants),
    };
  }

  async register(input: createUserDto): Promise<Users> {

    // const found = this.usersService.findUserByUsername(input.username);
    // if (found) {
    //   throw new BadRequestException(`Cannot register '${input.username}'. User already exists.`)

    // }

    const reg_user = await this.usersService.createUser(input);


    return reg_user;
  }

  //Check if username exists when user is Logging in
  async validateUser(username: string): Promise<Users> {
    const validUser = await this.usersService.findUserByUsername(username);

    if (!validUser) {
      throw new NotFoundException(`${username} does not exist`);
    }

    //console.log(user)
    return validUser;

  }

  async validatePassword(password: string, validUser: Users): Promise<Users> {

    
    if (password === validUser.password ? false : true) {
      throw new Error("Invalid Password");
    }

    return validUser;
  }

}
