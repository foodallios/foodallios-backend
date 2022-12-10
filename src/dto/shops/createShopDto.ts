export class CreateShopDto {

    shopOwnerId: string;
    name: string;
    moto: string;
    address: string;
    category: string;
    availableProducts?: number;
    wrkHours: string;
    shopImgUrl?: string;
    createdBy: string;
    createdAt: Date;
}