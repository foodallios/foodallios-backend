export class CreateProductDto {

    shopId: string;
    title: string;
    category: string;
    quantity: number;
    price: number;
    description: string;
    productImgUrl?: string;
    createdBy: string;
    createdAt: Date;
}