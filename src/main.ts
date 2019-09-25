import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';
import * as helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let cors = require('cors');
  app.use(cors());
  app.use(helmet());
  await app.listen(config.PORT);
}
bootstrap();
