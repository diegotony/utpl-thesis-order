import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {CreateItemDto} from '../../shared/dto/item/create-item.dto';
import {Item} from '../../shared/dto/item/item.dto';

@Injectable()
export class ItemService {
    constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>){}

    async createItem(createItemDto: CreateItemDto): Promise<Item> {
      try {
        const createdItem = new this.ItemModel(createItemDto);
        if(!createdItem){
          throw new HttpException('Upps error ...', HttpStatus.BAD_REQUEST);
        }
        return await createdItem.save();
      } catch (error) {
        throw new HttpException(`Callback postItem ${error.message}`, HttpStatus.BAD_REQUEST);
      }

      }
      async findItems(): Promise<any[]> {
        return await this.ItemModel.find({}).populate('catalog').exec();
      }
      async findItem(idItem: string): Promise<any[]> {
        return await this.ItemModel.findById(idItem).populate('catalog').exec();
      }
      async deleteItem(idItem: string): Promise<Item[]> {
        try {
          const editIem = this.ItemModel;
          if(!editIem){
            throw new HttpException('Upps error ...', HttpStatus.BAD_REQUEST);
          }
          return await editIem.findByIdAndRemove(idItem);
        } catch (error) {
          throw new HttpException(`Callback editItem ${error.message}`, HttpStatus.BAD_REQUEST);
        }
      
      }
      async editItem(idItem: string, dto: CreateItemDto) {
        return await this.ItemModel.findByIdAndUpdate(idItem, dto, {new: true, runValidators: true});
      }
}
