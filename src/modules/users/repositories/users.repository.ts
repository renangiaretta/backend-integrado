import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export abstract class UsersRepository {
    abstract create(data: CreateUserDto): Promise<User>;
    abstract findAll(): Promise<User[]>;
    abstract findOne(email: string): Promise<User>;
    abstract update(id: string, data: UpdateUserDto);
    abstract delete(id: string): Promise<void>;
}
