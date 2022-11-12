import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from 'src/dto/users/createUserDto';
import { Users } from 'src/models/users.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) {}


    async getAllUsers(): Promise<Users[] | undefined> {
        return this.usersRepository.find();
    }



    async findUserByUsername(username: string): Promise<Users | undefined> {
        let user = this.usersRepository.findOne({ where: { username: username }})

        return user;
    }

    // async findUserByEmail(email: string): Promise<Users | undefined> {
    //     let user = this.usersRepository.findOne({ where: { email: email }})
    //     //console.log((await user))
    //     if(!user) {
    //         return undefined;
    //     } 
    //     return user;
    // }


    // async findUserById(id: string): Promise<Users | undefined> {
    //     let en = this.usersRepository.findOne({ where: { id: id }})
    //     console.log((await en))
    //     return en;
    // }

    async createUser(userDetails: createUserDto): Promise<any> {
        const new_user = await this.usersRepository.insert({
            username: userDetails.username,
            password: userDetails.password,
            email: userDetails.email,
            role: userDetails.role,
            active: true,
            createdBy: userDetails.createdBy,
            createdAt: userDetails.createdAt
        })
        
        return new_user;
    }
}
