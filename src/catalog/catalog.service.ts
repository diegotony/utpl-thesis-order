import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {CreateCatalogDto} from '../../shared/dto/catalog/create-catalog.dto';
import {Catalog} from '../../shared/dto/catalog/catalog.dto';

@Injectable()
export class CatalogService {
    constructor(@InjectModel('Catalog') private readonly catalogModel: Model<Catalog>){}

    async createCatalog(createCatalogDto: CreateCatalogDto): Promise<Catalog> {
        const createdCatalog = new this.catalogModel(createCatalogDto);
        return await  createdCatalog.save();
      }
      async findCatalogs(): Promise<Catalog[]> {
        return await this.catalogModel.find().exec();
      }
      async findCatalog(idCatalog: string): Promise<Catalog[]> {
        return await this.catalogModel.findById(idCatalog).exec();
      }
      async deleteCatalog(idCatalog: string): Promise<Catalog[]> {
        return await this.catalogModel.findByIdAndRemove(idCatalog);
      }
      async editCatalog(idCatalog: string, dto: CreateCatalogDto) {
        return await this.catalogModel.findByIdAndUpdate(idCatalog, dto, {new: true, runValidators: true});
      }
}
