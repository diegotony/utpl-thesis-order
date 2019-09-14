import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import config from './config/config';

const PORT = config.PORT;
const HOST = config.HOST;

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: `redis://${HOST}:${PORT}`,
    },
  });
  await app.listen(() => console.log(`Order-Microservice is listening ${PORT}`));
}
bootstrap();
