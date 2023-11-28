export class User {
    readonly id: string;
    name: string;
    email: string;
    phone: string;
    cep?: string;
    cpf?: string;
    birthdate: Date;
    document: string[];
    createdAt: Date;
    updatedAt: Date;
}
