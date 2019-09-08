import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogModule } from './catalog/catalog.module';
@Module({
imports: [MongooseModule.forRoot('mongodb://localhost/order'), ItemModule, CatalogModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
