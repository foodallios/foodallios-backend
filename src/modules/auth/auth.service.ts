import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/dto/users/createUserDto';
import { loginUserDto } from 'src/dto/users/loginUserDto';
import { Users } from 'src/models/users.model';
import { jwtConstants } from 'src/modules/auth/jwt/constants';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CustomersService } from '../customers/customers.service';
import { createCustomerDto } from 'src/dto/customers/createCustomerDto';
import { createShopOwnerDto } from 'src/dto/shop_owner/createShopOwnerDto';
import { ShopOwnerService } from '../shop_owner/shop_owner.service';


@Injectable()
export class AuthService {

  constructor
    (
      private usersService: UsersService,
      private customerService: CustomersService,
      private ownerService: ShopOwnerService,
      private jwtService: JwtService
    ) 
  { }

  userId: string;


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
    const saltOrRound = 10;
    const hash = await bcrypt.hash(input.password, saltOrRound);

    const reg_user = await this.usersService.createUser(input, hash).then(id => this.userId = id.raw[0].id);

    if (input.role == "CUSTOMER") {
      let customerForm: createCustomerDto = {
        user: this.userId,
        firstName: '',
        lastName: '',
        address: '',
        dateOfBirth: new Date(),
        createdBy: 'signUpForm',
        createdAt: new Date()
      }
      this.customerService.createCustomer(customerForm).then(cust => console.log(cust))
    }

    if (input.role == "OWNER") {
      let shopOwnerForm: createShopOwnerDto = {
        user: this.userId,
        createdBy: 'signUpForm',
        createdAt: new Date()
      }
      this.ownerService.createShopOwner(shopOwnerForm).then(own => console.log(own))
    }
    
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
    
    const isMatch = await bcrypt.compare(password, validUser.password);
    
    if (isMatch ? false : true) {
      throw new Error("Invalid Password");
    }

    return validUser;
  }

}
