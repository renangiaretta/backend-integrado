import { Injectable } from '@nestjs/common';
import { CoursesRepository } from './repositories/courses.repository';

@Injectable()
export class CoursesService {
    constructor(private coursesRepository: CoursesRepository) {}
    async findAll() {
        const users = await this.coursesRepository.findAll();
        return users;
    }
}
