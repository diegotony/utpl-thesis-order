import { Controller } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from '../../shared/dto/table/create-table.dto';
import { Table } from '../../shared/dto/table/table.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('table')
export class TableController {
    constructor(private readonly tableService: TableService) { }
    @MessagePattern({ cmd: 'createTable' })
    async createTable(dto: CreateTableDto) {
        return (await this.tableService.createTable(dto));
    }

    @MessagePattern({ cmd: 'findTables' })
    async findAll(): Promise<Table[]> {
        return (await this.tableService.findTables())
            .map(v => ({
                _id: v._id, name: v.name,
            }));
    }

    @MessagePattern({ cmd: 'findTable' })
    async findTable(idTable): Promise<Table[]> {
        return (await this.tableService.findTable(idTable));
    }

    @MessagePattern({ cmd: 'editTable' })
    async editTable(data) {
        return (await this.tableService.editTable.(data));
    }

    @MessagePattern({ cmd: 'deleteTable' })
    async deleteTable(idTable): Promise<Table[]> {
        return (await this.tableService.deleteTable(idTable));
    }
}
