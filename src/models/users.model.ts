
export class Users {

    id: string;

    username: string;

    password: string;

    email: string;

    role?: string;

    active: string;

    createdBy: string = 'admin';

    isDeleted: boolean = false;
}