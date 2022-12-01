import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createCustomerDto } from 'src/dto/customers/createCustomerDto';
import { Customers } from 'src/models/customers.model';
import { Users } from 'src/models/users.model';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {

    constructor(
        @InjectRepository(Customers) private customerRepository: Repository<Customers>
    ) {}

    async getCustomers(): Promise<Customers[] | undefined> {
        return this.customerRepository.find();
    }

    async getCustomerById(id: string): Promise<Customers | undefined> {
        return this.customerRepository.findOne({ where: { id: id }})
    }

    async getCustomerByUserId(username: string): Promise<Customers | undefined> {
        return await this.customerRepository.createQueryBuilder('c')
        .select(['c.id'])
        .leftJoin('c.user', 'u')
        .where('u.username = :username', { username: username}).getOne();
    }

    async createCustomer(customerDetails: createCustomerDto): Promise<any> {
        const new_customer = this.customerRepository.insert({
            user: customerDetails.user as unknown, //set as uknown because it doesn't allow to put string in DeepPartialQuery
            firstName: customerDetails.firstName,
            lastName: customerDetails.lastName,
            address: customerDetails.address,
            dateOfBirth: customerDetails.dateOfBirth,
            createdAt: customerDetails.createdAt,
            createdBy: customerDetails.createdBy
        })

        // const new_customer = this.customerRepository.createQueryBuilder()
        //                         .insert()
        //                         .into(Customers)
        //                         .values(customerDetails)

        return new_customer;
    }
}
