import { BadRequestException, Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: './tmp',
                filename: (_, file, cb) => {
                    cb(null, file.originalname);
                },
            }),
            fileFilter: (_, file, cb) => {
                if (
                    file.mimetype === 'image/jpeg' ||
                    file.mimetype === 'image/png' ||
                    file.mimetype === 'image/webp'
                ) {
                    cb(null, true);
                } else {
                    cb(
                        new BadRequestException('Only jpeg format allowed'),
                        false,
                    );
                }
            },
        }),
    ],
    controllers: [UploadController],
    providers: [UploadService],
})
export class UploadModule {}
