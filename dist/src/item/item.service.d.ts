import { Model } from 'mongoose';
import { CreateItemDto } from '../../shared/dto/item/create-item.dto';
import { Item } from '../../shared/dto/item/item.dto';
export declare class ItemService {
    private readonly ItemModel;
    constructor(ItemModel: Model<Item>);
    createItem(createItemDto: CreateItemDto): Promise<Item>;
    findItems(): Promise<Item[]>;
    findItem(idItem: string): Promise<Item[]>;
    deleteItem(idItem: string): Promise<Item[]>;
    editItem(data: any): Promise<any>;
}
