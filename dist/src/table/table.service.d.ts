import { Model } from 'mongoose';
import { CreateTableDto } from '../../shared/dto/table/create-table.dto';
import { Table } from '../../shared/dto/table/table.dto';
export declare class TableService {
    private readonly tableModel;
    constructor(tableModel: Model<Table>);
    createTable(createTableDto: CreateTableDto): Promise<Table>;
    findTables(): Promise<Table[]>;
    findTable(idTable: string): Promise<Table[]>;
    deleteTable(idTable: string): Promise<Table[]>;
    editTable(data: any): Promise<any>;
}
