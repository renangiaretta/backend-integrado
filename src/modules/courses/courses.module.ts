import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CoursesRepository } from './repositories/courses.repository';
import { CoursesPrismaRepository } from './repositories/courses-prisma.repository';

@Module({
    controllers: [CoursesController],
    providers: [
        CoursesService,
        PrismaService,
        { provide: CoursesRepository, useClass: CoursesPrismaRepository },
    ],
})
export class CoursesModule {}
