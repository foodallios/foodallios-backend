import { Customers } from "src/models/customers.model";
import { Product } from "src/models/products.model";
import { Purchase } from "src/models/purchases.model";

export class createOrderDto {

    productId: Product;
    customerId: Customers;
    purchaseId: Purchase;
    quantity: number;
    orderPrice: number;
    createdAt: Date = new Date();
}