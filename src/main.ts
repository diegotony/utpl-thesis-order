import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import {OPTIONS} from './main.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, OPTIONS);
  app.listen(() => console.log(' Order-Microservice is listening'));
}
bootstrap();
