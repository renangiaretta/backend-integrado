import { CreateUserDto } from './../dto/create-user.dto';
import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UsersRepository } from './users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { UpdateUserDto } from '../dto/update-user.dto';

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
            const cepRegex: RegExp = /^\d{5}-?\d{3}$/;
            const validCep: boolean = cepRegex.test(data.cep);
            if (!validCep) {
                throw new BadRequestException('CEP inválido.');
            }
        }
        const newUser = await this.prisma.user.create({
            data: { ...data },
        });
        return plainToInstance(User, newUser);
    }
    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return plainToInstance(User, users);
    }
    async findOne(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { email: email },
        });
        if (!user) {
            throw new NotFoundException('Usuário não encontrado.');
        }
        return plainToInstance(User, user);
    }
    async update(id: string, data: UpdateUserDto) {
        const userExists = await this.prisma.user.findUnique({ where: { id } });
        if (!userExists) {
            throw new ConflictException('Usuário não encontrado');
        }
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: { ...data },
        });
        return plainToInstance(User, updatedUser);
    }
    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    }
}
