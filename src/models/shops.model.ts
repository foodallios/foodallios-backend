
export class Shops {
    
    id: string;

    ownerId: string;

    address: string;

    category: string;

    availableProducts: [];

    createdBy: string = 'admin';

    createdAt: Date = new Date();
}