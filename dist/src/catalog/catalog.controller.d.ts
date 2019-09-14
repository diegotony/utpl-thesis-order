import { CreateCatalogDto } from '../../shared/dto/catalog/create-catalog.dto';
import { Catalog } from '../../shared/dto/catalog/catalog.dto';
import { CatalogService } from './catalog.service';
export declare class CatalogController {
    private readonly catalogService;
    constructor(catalogService: CatalogService);
    createCatalog(dto: CreateCatalogDto): Promise<Catalog>;
    findAll(): Promise<Catalog[]>;
    findCatalog(idCatalog: any): Promise<Catalog[]>;
    editCatalog(data: any): Promise<any>;
    deleteCatalog(idCatalog: any): Promise<Catalog[]>;
}
