export class User {
    userid!:number;
    username!: string;
    password: string | undefined;
    email!: string;
    firstname!: string;
    lastname!: string;
    mobileno!: string;
    addr!: {
        country: string;
        state: string;
        city: string;
    };
 }