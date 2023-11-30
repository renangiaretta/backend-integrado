import { Injectable } from '@nestjs/common';
import { CoursesRepository } from './courses.repository';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { Course } from '../entities/course.entity';

@Injectable()
export class CoursesPrismaRepository implements CoursesRepository {
    constructor(private prisma: PrismaService) {}
    async findAll(): Promise<Course[]> {
        const courses = await this.prisma.course.findMany();
        return plainToInstance(Course, courses);
    }
}
