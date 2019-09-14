import { MenuService } from './menu.service';
import { CreateMenuDto } from 'shared/dto/menu/create-menu.dto';
import { Menu } from 'shared/dto/menu/menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    createMenu(dto: CreateMenuDto): Promise<Menu>;
    findAll(): Promise<Menu[]>;
    findMenu(idMenu: any): Promise<Menu[]>;
    editMenu(data: any): Promise<any>;
    deleteMenu(idMenu: any): Promise<Menu[]>;
}
