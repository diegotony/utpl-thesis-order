import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body } from '@nestjs/common';
import {CreateCatalogDto} from '../../shared/dto/catalog/create-catalog.dto';
import {Catalog} from '../../shared/dto/catalog/catalog.dto';
import { CatalogService } from './catalog.service';

@Controller('api-order/catalog')
export class CatalogController {
    constructor(private readonly catalogService: CatalogService){}
    @Post()
    @HttpCode(204)
    async createCatalog(@Body() dto: CreateCatalogDto) {
      return (await this.catalogService.createCatalog(dto));
    }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<any[]> {
      return (await this.catalogService.findCatalogs());
      // .map(v => ({
      //   _id: v._id, name: v.name,
      // }));
    }

    @Get(':id')
    @HttpCode(200)
    async findCatalog(@Param() params): Promise<any[]> {
      return (await this.catalogService.findCatalog(params.id));
    }

    @Put(':id')
    async editCatalog(@Param() params, @Body() dto: CreateCatalogDto) {
      return (await this.catalogService.editCatalog(params.id, dto));
    }

    @Delete(':id')
    async deleteCatalog(@Param() params): Promise<Catalog[]> {
      return (await this.catalogService.deleteCatalog(params.id));
    }
}
