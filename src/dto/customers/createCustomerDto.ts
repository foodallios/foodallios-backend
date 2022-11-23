export class createCustomerDto {

    userId: string;
    firstName?: string = '';
    lastName?: string = '';
    address?: string = '';
    dateOfBirth?: Date;
    createdBy: string = 'admin';
    createdAt: Date = new Date();
}