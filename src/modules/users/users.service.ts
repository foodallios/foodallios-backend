import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/models/users.model';
import { Repository } from 'typeorm';

export type User = any;

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) {}

    private readonly users = [
        {
            userId: 1,
            username: "johnxgh",
            password: "changeme"
        },
        {
            userId: 2,
            username: "maria",
            password: "changeme"
        }
    ];

    async getAllUsers(): Promise<Users[] | undefined> {
        return this.usersRepository.find();
    }

    async findDbOne(username: string): Promise<any> {
        let en = this.usersRepository.findOne({ where: { username: username }})
        console.log(en)
        return en;
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
