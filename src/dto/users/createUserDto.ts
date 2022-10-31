export class createUserDto {
    
    username: string;
    password: string;
    email: string;
    role: "CUSTOMER" | "OWNER" | "ADMIN";
    active: boolean = true;
    createdBy: string = 'admin';
    createdAt: Date = new Date();
}
