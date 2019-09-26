import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {CreateItemDto} from '../../shared/dto/item/create-item.dto';
import {Item} from '../../shared/dto/item/item.dto';

@Injectable()
export class ItemService {
    constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>){}

    async createItem(createItemDto: CreateItemDto): Promise<Item> {
        const createdItem = new this.ItemModel(createItemDto);
        return await createdItem.save();
      }
      async findItems(): Promise<any[]> {
        return await this.ItemModel.find({}).populate('catalog').exec();
      }
      async findItem(idItem: string): Promise<any[]> {
        return await this.ItemModel.findById(idItem).populate('catalog').exec();
      }
      async deleteItem(idItem: string): Promise<Item[]> {
        return await this.ItemModel.findByIdAndRemove(idItem);
      }
      async editItem(idItem: string, dto: CreateItemDto) {
        return await this.ItemModel.findByIdAndUpdate(idItem, dto, {new: true, runValidators: true});
      }
}
