import {
    IsArray,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'O nome deve ser preenchido.' })
    @MaxLength(50, { message: 'O nome deve ter no máximo 50 caracteres.' })
    name: string;
    @IsEmail()
    @IsNotEmpty({ message: 'O e-mail deve ser preenchido.' })
    email: string;
    @IsString()
    @IsNotEmpty({ message: 'O telefone deve ser preenchido.' })
    phone: string;
    @IsOptional()
    @IsString()
    cep: string;
    @IsOptional()
    @IsString()
    cpf: string;
    @IsOptional()
    @IsString()
    birthDate: string;
    @IsOptional()
    @IsArray()
    document: string[];
}
