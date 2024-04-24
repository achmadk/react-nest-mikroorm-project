import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = (new DocumentBuilder())
    .setTitle('API Docs')
    .setDescription('Documentation of this API')
    .setVersion('1.0.0')
    .addTag('Resources')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document);

  await app.listen(8070);
})()
