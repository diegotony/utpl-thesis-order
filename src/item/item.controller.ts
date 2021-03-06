import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body } from '@nestjs/common';
import { CreateItemDto} from '../../shared/dto/item/create-item.dto';
import { Item} from '../../shared/dto/item/item.dto';
import { ItemService } from './item.service';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';



@ApiUseTags('item')
@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) { }
    
    @Post()
    @HttpCode(200)
    async createItem(@Body() dto: CreateItemDto) {
      return (await this.itemService.createItem(dto));
    }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<any[]> {
      return (await this.itemService.findItems());
    }

    
    @Get(':id')
    @ApiImplicitParam({name:'id'})
    @HttpCode(200)
    async findItem(@Param() params): Promise<any[]> {
      return (await this.itemService.findItem(params.id));
    }

    @Put(':id')
    @ApiImplicitParam({name:'id'})
    async editItem(@Param() params, @Body() dto: CreateItemDto) {
      return (await this.itemService.editItem(params.id, dto));
    }

    @Delete(':id')
    @ApiImplicitParam({name:'id'})
    async deleteUser(@Param() params): Promise<Item[]> {
      return (await this.itemService.deleteItem(params.id));
    }

}
