import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Menu } from 'shared/dto/menu/menu.dto';
import { CreateMenuDto } from 'shared/dto/menu/create-menu.dto';

@Injectable()
export class MenuService {
    constructor(@InjectModel('Menu') private readonly menuModel: Model<Menu>){}

    async createMenu(createMenuDto: CreateMenuDto): Promise<Menu> {
        const createdMenu = new this.MenuModel(createMenuDto);
        return await createdMenu.save();
      }
      async findMenus(): Promise<Menu[]> {
        return await this.menuModel.find().exec();
      }
      async findMenu(idMenu: string): Promise<Menu[]> {
        return await this.menuModel.findById(idMenu).exec();
      }
      async deleteMenu(idMenu: string): Promise<Menu[]> {
        return await this.menuModel.findByIdAndRemove(idMenu);
      }
      async editMenu(data) {
        const id = data[0].id;
        const dto = data[0].dto;
        return await this.menuModel.findByIdAndUpdate(id, dto, { new: true, runValidators: true });
      }
}
