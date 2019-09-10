import { Controller } from '@nestjs/common';
import { PickService } from './pick.service';
import { CreatePickDto } from 'shared/dto/pick/create-pick.dto';
import { Pick } from 'shared/dto/pick/pick.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('pick')
export class PickController {
    constructor(private readonly pickService: PickService){}

    @MessagePattern({ cmd: 'createPick' })
    async createPick(dto: CreatePickDto) {
        return (await this.pickService.createPick(dto));
    }

    @MessagePattern({ cmd: 'findPicks' })
    async findAll(): Promise<Pick[]> {
        return (await this.pickService.findPicks())
            .map(v => ({
                _id: v._id, quantify: v.quantify, menu: v.menu, item: v.item,
            }));
    }

    @MessagePattern({ cmd: 'findPick' })
    async findPick(idPick): Promise<Pick> {
        return (await this.pickService.findPick(idPick));
    }

    @MessagePattern({ cmd: 'editPick' })
    async editPick(data) {
        return (await this.pickService.editPick.(data));
    }

    @MessagePattern({ cmd: 'deletePick' })
    async deletePick(idPick): Promise<Pick[]> {
        return (await this.pickService.deletePick(idPick));
    }

}
