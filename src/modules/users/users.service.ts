import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}
    async create(createUserDto: CreateUserDto) {
        return await this.usersRepository.create(createUserDto);
    }

    async findAll() {
        return await this.usersRepository.findAll();
    }

    async findOne(email: string) {
        return await this.usersRepository.findOne(email);
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.usersRepository.update(id, updateUserDto);
    }

    async remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
