export class createCustomerDto {

    user: string;
    firstName?: string = '';
    lastName?: string = '';
    address?: string = '';
    dateOfBirth?: Date;
    createdBy: string = '';
    createdAt: Date = new Date();
}