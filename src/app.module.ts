import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogModule } from './catalog/catalog.module';
import { TableModule } from './table/table.module';


import config from './config/config';
import { OrderModule } from './order/order.module';

@Module({
imports: [MongooseModule.forRoot(`${config.MONGO_URI}`), ItemModule, CatalogModule, TableModule,OrderModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
