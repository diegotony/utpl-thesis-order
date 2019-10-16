import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';
import * as helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let cors = require('cors');
  app.use(cors());
  app.use(helmet());

  const options = new DocumentBuilder()
    .setTitle('Order Service')
    .setDescription('The order API description')
    .setVersion('1.0')
    .addTag('order')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/order', app, document);

  await app.listen(config.PORT);
}
bootstrap();
