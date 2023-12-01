import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CoursesModule } from './modules/courses/courses.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
    imports: [UsersModule, CoursesModule, UploadModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
