import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from '../../shared/dto/table/create-table.dto';
import { Table } from '../../shared/dto/table/table.dto';

@Controller('api/order/v1/table')
export class TableController {
    constructor(private readonly tableService: TableService) { }
    @Post()
    @HttpCode(204)
    async createTable( @Body() dto: CreateTableDto) {
        return (await this.tableService.createTable(dto));
    }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<Table[]> {
        return (await this.tableService.findTables())
            .map(v => ({
                _id: v._id, name: v.name,
            }));
    }

    @Get(':id')
    @HttpCode(200)
    async findTable( @Param() params ): Promise<Table[]> {
        return (await this.tableService.findTable(params.id));
    }

    @Put(':id')
    async editTable(@Param() params, @Body() dto: CreateTableDto): Promise<Table> {
        return (await this.tableService.editTable(params.id, dto));
    }

    @Delete(':id')
    async deleteTable(@Param() idTable): Promise<Table[]> {
        return (await this.tableService.deleteTable(idTable));
    }
}
