import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import {CreateCatalogDto} from '../../shared/dto/catalog/create-catalog.dto';
import {Catalog} from '../../shared/dto/catalog/catalog.dto';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
    constructor(private readonly catalogService: CatalogService){}
    @MessagePattern({ cmd: 'createCatalog' })
    async createCatalog(dto: CreateCatalogDto) {
      return (await this.catalogService.createCatalog(dto));
    }

    @MessagePattern({ cmd: 'findCatalogs' })
    async findAll(): Promise<Catalog[]> {
      return (await this.catalogService.findCatalogs())
      .map(v => ({
        _id: v._id, name: v.name,
      }));
    }

    @MessagePattern({ cmd: 'findCatalog' })
    async findCatalog(idCatalog): Promise<Catalog[]> {
      return (await this.catalogService.findCatalog(idCatalog));
    }

    @MessagePattern({ cmd: 'editCatalog' })
    async editCatalog(data) {
      return (await this.catalogService.editCatalog(data));
    }

    @MessagePattern({ cmd: 'deleteCatalog' })
    async deleteCatalog(idCatalog): Promise<Catalog[]> {
      return (await this.catalogService.deleteCatalog(idCatalog));
    }
}
