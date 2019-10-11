import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body } from '@nestjs/common';
import { PickService } from './pick.service';
import { CreatePickDto } from '../../shared/dto/pick/create-pick.dto';
import { Pick } from '../../shared/dto/pick/pick.dto';

@Controller('pick')
export class PickController {
    constructor(private readonly pickService: PickService){}

    @Post()
    @HttpCode(204)
    async createPick(dto: CreatePickDto) {
        return (await this.pickService.createPick(dto));
    }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<Pick[]> {
        return (await this.pickService.findPicks())
            .map(v => ({
                _id: v._id, quantify: v.quantify, menu: v.menu, item: v.item,
            }));
    }

    @Get(':id')
    @HttpCode(200)
    async findPick(@Param() params): Promise<Pick> {
        return (await this.pickService.findPick(params.id));
    }

    @Put(':id')
    async editPick(@Param() params, @Body() dto: CreatePickDto) {
        return (await this.pickService.editPick(params.id, dto));
    }

    @Delete(':id')
    async deletePick(@Param() params): Promise<Pick[]> {
        return (await this.pickService.deletePick(params.id));
    }

}
