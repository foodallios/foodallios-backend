import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { createCustomerDto } from 'src/dto/customers/createCustomerDto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Customers } from 'src/models/customers.model';
import { CustomersService } from './customers.service';

@UseGuards(JwtAuthGuard)
@Controller('customers')
export class CustomersController {

    constructor(private customerService: CustomersService) {}

    @Get()
    async getCustomer(): Promise<Customers[] | undefined> {
        return this.customerService.getCustomers();
    }

    @Get('user-details/:username')
    async getCustomerByUserId(@Param('username') username: string): Promise<Customers | undefined> {
        return this.customerService.getCustomerByUserId(username);
    }

    @Post('new')
    async createCustomer(@Body() jsbody: createCustomerDto): Promise<Customers | undefined> {
        return this.customerService.createCustomer(jsbody)
    }
}
