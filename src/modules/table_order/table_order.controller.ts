import { Controller } from '@nestjs/common';
import { Body, Get, Post, UseGuards } from '@nestjs/common/decorators';
import { createOrderDto } from 'src/dto/table_orders/createOrderDto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { TableOrder } from 'src/models/tableOrders.model';
import { TableOrderService } from './table_order.service';

@UseGuards(JwtAuthGuard)
@Controller('table-order')
export class TableOrderController {

    constructor(private orderService: TableOrderService) {}

    @Get()
    async getTableOrder(): Promise<TableOrder[] | undefined> {
        return this.orderService.getOrder();
    }
    
    @Post('new')
    async postTableOrder(@Body() jsBody: createOrderDto): Promise<TableOrder> {

        const new_tableOrder = await this.orderService.createOrder(jsBody);
        console.log(new_tableOrder)

        return new_tableOrder;
    }
}
