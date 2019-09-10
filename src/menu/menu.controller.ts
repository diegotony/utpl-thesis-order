import { Controller } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from 'shared/dto/menu/create-menu.dto';
import { Menu } from 'shared/dto/menu/menu.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) { }
    @MessagePattern({ cmd: 'createMenu' })
    async createMenu(dto: CreateMenuDto) {
        return (await this.menuService.createMenu(dto));
    }

    @MessagePattern({ cmd: 'findMenus' })
    async findAll(): Promise<Menu[]> {
        return (await this.menuService.findMenus())
            .map(v => ({
                _id: v._id, name: v.name,
            }));
    }

    @MessagePattern({ cmd: 'findMenu' })
    async findMenu(idMenu): Promise<Menu[]> {
        return (await this.menuService.findMenu(idMenu));
    }

    @MessagePattern({ cmd: 'editMenu' })
    async editMenu(data) {
        return (await this.menuService.editMenu(data));
    }

    @MessagePattern({ cmd: 'deleteMenu' })
    async deleteMenu(idMenu): Promise<Menu[]> {
        return (await this.menuService.deleteMenu(idMenu));
    }
}

