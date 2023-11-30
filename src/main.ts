import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(
        cors({
            origin: ['http://localhost:3000'],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        }),
    );
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.listen(8000);
}
bootstrap();
