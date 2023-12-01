import {
    Controller,
    Post,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}
    @Post('')
    @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 10 }]))
    async uploadFile(
        @UploadedFiles() files: { images?: Express.Multer.File[] },
    ) {
        const { images } = files;
        const urls: string[] = [];
        for (const img of images) {
            const url: string = await this.uploadService.upload(img);
            urls.push(url);
        }
        return urls;
    }
}
