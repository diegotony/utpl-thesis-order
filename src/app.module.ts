import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogModule } from './catalog/catalog.module';
import { TableModule } from './table/table.module';
import { PickModule } from './pick/pick.module';
import { MenuModule } from './menu/menu.module';
@Module({
imports: [MongooseModule.forRoot('mongodb://localhost/order'), ItemModule, CatalogModule, TableModule, PickModule, MenuModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
