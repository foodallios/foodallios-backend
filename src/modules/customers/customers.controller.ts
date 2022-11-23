import { Controller, Get } from '@nestjs/common';
import { Customers } from 'src/models/customers.model';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {

    constructor(private customerService: CustomersService) {}

    @Get()
    async getCustomer(): Promise<Customers[] | undefined> {
        return this.customerService.getCustomers();
    }

    @Get('user-details/:userId')
    async getCustomerByUserId(userId: string): Promise<Customers | undefined> {
        return this.customerService.getCustomerByUserId();
    }
}
