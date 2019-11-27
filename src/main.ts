import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {OPTIONS} from './main-optinos';
async function bootstrap() {

  // const redis = await NestFactory.createMicroservice(AppModule, OPTIONS);


  // redis.listen(() => console.log('Microservice is listening'));


  const web = await NestFactory.create(AppModule);
  let cors = require('cors');
  web.use(cors());

  const options = new DocumentBuilder()
    .setTitle('Order Service')
    .setDescription('The order API description')
    .setVersion('1.0')
    .addTag('order')
    .build();
  const document = SwaggerModule.createDocument(web, options);
  SwaggerModule.setup('api/order', web, document);

  await web.listen(config.PORT);
  // 3037



}
bootstrap();
