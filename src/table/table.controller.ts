import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from '../../shared/dto/table/create-table.dto';
import { Table } from '../../shared/dto/table/table.dto';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

@ApiUseTags('table')
@Controller('table')
export class TableController {
    constructor(private readonly tableService: TableService) { }
    @Post()
    @HttpCode(204)
    async createTable(@Body() dto: CreateTableDto) {
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

    @Get('check/:id')
    @ApiImplicitParam({ name: 'id' })
    @HttpCode(200)
    @HttpCode(200)
    async check(@Param() params): Promise<any[]> {
        console.log(params)
        return (await this.tableService.checkTable(params.id));
    }

    @Get(':id')
    @ApiImplicitParam({ name: 'id' })
    @HttpCode(200)
    async findTable(@Param() params): Promise<Table[]> {
        return (await this.tableService.findTable(params.id));
    }

    @Put(':id')
    @ApiImplicitParam({ name: 'id' })
    async editTable(@Param() params, @Body() dto: CreateTableDto): Promise<Table> {
        return (await this.tableService.editTable(params.id, dto));
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    async deleteTable(@Param() idTable): Promise<Table[]> {
        return (await this.tableService.deleteTable(idTable));
    }
}
