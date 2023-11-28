import { CreateUserDto } from './../dto/create-user.dto';
import {
    BadRequestException,
    ConflictException,
    Injectable,
} from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UsersRepository } from './users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
    constructor(private prisma: PrismaService) {}
    async create(data: CreateUserDto): Promise<User> {
        const emailAlreadyRegistered = await this.prisma.user.findUnique({
            where: { email: data.email },
        });
        if (emailAlreadyRegistered) {
            throw new ConflictException('E-mail já cadastrado.');
        }
        if (data.cep) {
            const cepRegex = /^\d{5}-?\d{3}$/;
            const validCep = cepRegex.test(data.cep);
            if (!validCep) {
                throw new BadRequestException('CEP inválido.');
            }
        }
        const newUser = await this.prisma.user.create({
            data: { ...data },
        });
        return plainToInstance(User, newUser);
    }
}
