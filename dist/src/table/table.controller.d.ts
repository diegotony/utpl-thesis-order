import { TableService } from './table.service';
import { CreateTableDto } from '../../shared/dto/table/create-table.dto';
import { Table } from '../../shared/dto/table/table.dto';
export declare class TableController {
    private readonly tableService;
    constructor(tableService: TableService);
    createTable(dto: CreateTableDto): Promise<Table>;
    findAll(): Promise<Table[]>;
    findTable(idTable: any): Promise<Table[]>;
    editTable(data: any): Promise<any>;
    deleteTable(idTable: any): Promise<Table[]>;
}
