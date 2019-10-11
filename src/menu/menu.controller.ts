import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from '../../shared/dto/menu/create-menu.dto';
import { Menu } from 'shared/dto/menu/menu.dto';

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) { }

    @Post()
    @HttpCode(204)
    async createMenu(@Body() dto: CreateMenuDto) {
        return (await this.menuService.createMenu(dto));
    }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<Menu[]> {
        return (await this.menuService.findMenus())
            .map(v => ({
                _id: v._id, name: v.name,
            }));
    }

    @Get(':id')
    @HttpCode(200)
    async findMenu(@Param() params): Promise<Menu[]> {
        return (await this.menuService.findMenu(params.id));
    }

    @Put(':id')
    async editMenu(@Param() params, @Body() dto: CreateMenuDto) {
        return (await this.menuService.editMenu(params.id, dto));
    }

    @Delete(':id')
    async deleteMenu(@Param() params): Promise<Menu[]> {
        return (await this.menuService.deleteMenu(params.id));
    }
}
