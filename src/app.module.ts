import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogModule } from './catalog/catalog.module';
import { TableModule } from './table/table.module';
import { PickModule } from './pick/pick.module';
import { MenuModule } from './menu/menu.module';
import config from './config/config';

@Module({
imports: [MongooseModule.forRoot(`${config.MONGO_URI}`), ItemModule, CatalogModule, TableModule, PickModule, MenuModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
