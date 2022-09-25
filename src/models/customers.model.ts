
export class Customers {

    id: string;

    userId: string;

    firstName: string;

    lastName: string;

    address: string;

    dateOfBirth: Date = new Date();

    createdBy: string = 'admin';

    isDeleted: boolean = false;
}