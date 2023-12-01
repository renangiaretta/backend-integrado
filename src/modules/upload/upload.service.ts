import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { unlink } from 'fs';
@Injectable()
export class UploadService {
    async upload(images: Express.Multer.File) {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        });
        const uploadImages = await cloudinary.uploader.upload(
            images.path,
            { resource_type: 'image' },
            (error, result) => {
                error ? console.error(error) : undefined;
                return result;
            },
        );
        unlink(images.path, (error) => {
            if (error) {
                console.error(error);
            }
        });
        return uploadImages.secure_url;
    }
}
