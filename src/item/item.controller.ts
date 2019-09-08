import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateItemDto} from '../../shared/dto/item/create-item.dto';
import { Item} from '../../shared/dto/item/item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) { }
    @MessagePattern({ cmd: 'createItem' })
    async createItem(dto: CreateItemDto) {
      return (await this.itemService.createItem(dto));
    }

    @MessagePattern({ cmd: 'findItems' })
    async findAll(): Promise<Item[]> {
      return (await this.itemService.findItems())
      .map(v => ({
        name: v.name, description: v.description, price: v.price, catalog: v.catalog,
      }));
    }

    @MessagePattern({ cmd: 'findItem' })
    async findItem(idItem): Promise<Item[]> {
      return (await this.itemService.findItem(idItem));
    }

    @MessagePattern({ cmd: 'editItem' })
    async editItem(data) {
      return (await this.itemService.editItem(data));
    }

    @MessagePattern({ cmd: 'deleteItem' })
    async deleteUser(idItem): Promise<Item[]> {
      return (await this.itemService.deleteItem(idItem));
    }

}
