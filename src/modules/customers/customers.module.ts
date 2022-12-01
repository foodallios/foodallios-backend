import { Module } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Customers } from 'src/models/customers.model';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, { provide: getRepositoryToken(Customers), useValue: Customers}],
  exports: [CustomersService]
})
export class CustomersModule {}
