import { Customers } from "src/models/customers.model";

export class createPurchaseDto {

    customer: Customers;
    totalPrice: number;
    description: string;
    isValid: boolean;
    createdAt: Date;
}