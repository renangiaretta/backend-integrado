import { CreateUserDto } from './../dto/create-user.dto';
import { ConflictException, Injectable } from '@nestjs/common';
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
        const newUser = await this.prisma.user.create({
            data: { ...data },
        });
        return plainToInstance(User, newUser);
    }
}
