import { Model } from 'mongoose';
import { Menu } from 'shared/dto/menu/menu.dto';
import { CreateMenuDto } from 'shared/dto/menu/create-menu.dto';
export declare class MenuService {
    private readonly menuModel;
    constructor(menuModel: Model<Menu>);
    createMenu(createMenuDto: CreateMenuDto): Promise<Menu>;
    findMenus(): Promise<Menu[]>;
    findMenu(idMenu: string): Promise<Menu[]>;
    deleteMenu(idMenu: string): Promise<Menu[]>;
    editMenu(data: any): Promise<any>;
}
