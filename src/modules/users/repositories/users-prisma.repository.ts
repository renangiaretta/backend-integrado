import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
    create(): Promise<User> {
        throw new Error('Method not implemented.');
    }
}
