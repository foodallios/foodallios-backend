import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createOrderDto } from 'src/dto/table_orders/createOrderDto';
import { editOrderDto } from 'src/dto/table_orders/editOrderDto';
import { TableOrder } from 'src/models/tableOrders.model';
import { Repository } from 'typeorm';

@Injectable()
export class TableOrderService {

    constructor(
        @InjectRepository(TableOrder) private orderRepository: Repository<TableOrder>
    ) {}

    async getOrder(): Promise<TableOrder[] | undefined> {
        return this.orderRepository.find();
    }

    getOrderById(id: string) {
        return this.orderRepository.findOne({ where: { id: id }})
    }

    createOrder(orderDetails: createOrderDto): Promise<any> {
        const new_order = this.orderRepository.insert({
            customer: orderDetails.customerId,
            product: orderDetails.productId,
            purchase: orderDetails.purchaseId,
            quantity: orderDetails.quantity,
            orderPrice: orderDetails.orderPrice,
            createdAt: orderDetails.createdAt
        })

        return new_order;
    }

    // async updateOrder(id: string, editDetails: editOrderDto) {
        
    //     let update_order;

    //     return update_order;
    // }

    // deleteOrder() {}
}
