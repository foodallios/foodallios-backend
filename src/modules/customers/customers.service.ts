import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createCustomerDto } from 'src/dto/customers/createCustomerDto';
import { Customers } from 'src/models/customers.model';
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

    async getCustomerByUserId(): Promise<Customers | undefined> {
        return this.customerRepository.createQueryBuilder('customer').leftJoinAndSelect('user.id', 'user').getOne();
    }

    async createCustomer(customerDetails: createCustomerDto): Promise<any> {
        const new_customer = this.customerRepository.insert({
            user: customerDetails,
            firstName: customerDetails.firstName,
            lastName: customerDetails.lastName,
            address: customerDetails.address,
            dateOfBirth: customerDetails.dateOfBirth,
            createdAt: customerDetails.createdAt
        })

        return new_customer;
    }
}
