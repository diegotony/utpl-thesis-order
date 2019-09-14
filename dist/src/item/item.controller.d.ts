import { CreateItemDto } from '../../shared/dto/item/create-item.dto';
import { Item } from '../../shared/dto/item/item.dto';
import { ItemService } from './item.service';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    createItem(dto: CreateItemDto): Promise<Item>;
    findAll(): Promise<Item[]>;
    findItem(idItem: any): Promise<Item[]>;
    editItem(data: any): Promise<any>;
    deleteUser(idItem: any): Promise<Item[]>;
}
