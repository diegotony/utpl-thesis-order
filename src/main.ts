import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {

  const redis = await NestFactory.createMicroservice(AppModule, 
    {
      transport: Transport.REDIS,
      options:{
        url:'redis://'+config.REDIS_HOST+':6379',
      }
    }
    );
  redis.listen(() => console.log('Order-Microservice is listening'));

  
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
  SwaggerModule.setup('swagger/order', web, document);

  await web.listen(config.PORT);



}
bootstrap();
