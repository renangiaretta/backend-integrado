import { Course } from '../entities/course.entity';

export abstract class CoursesRepository {
    abstract findAll(): Promise<Course[]>;
}
