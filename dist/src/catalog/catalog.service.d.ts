import { Model } from 'mongoose';
import { CreateCatalogDto } from '../../shared/dto/catalog/create-catalog.dto';
import { Catalog } from '../../shared/dto/catalog/catalog.dto';
export declare class CatalogService {
    private readonly catalogModel;
    constructor(catalogModel: Model<Catalog>);
    createCatalog(createCatalogDto: CreateCatalogDto): Promise<Catalog>;
    findCatalogs(): Promise<Catalog[]>;
    findCatalog(idCatalog: string): Promise<Catalog[]>;
    deleteCatalog(idCatalog: string): Promise<Catalog[]>;
    editCatalog(data: any): Promise<any>;
}
