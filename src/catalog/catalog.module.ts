import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {CatalogSchema} from './../schemas/catalog.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Catalog', schema: CatalogSchema }])],
  providers: [CatalogService],
  controllers: [CatalogController],
})
export class CatalogModule {}
