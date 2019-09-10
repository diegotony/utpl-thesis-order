import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {CreateTableDto} from '../../shared/dto/table/create-table.dto';
import {Table} from '../../shared/dto/table/table.dto';

@Injectable()
export class TableService {
    constructor(@InjectModel('Table') private readonly tableModel: Model<Table>){}

    async createTable(createTableDto: CreateTableDto): Promise<Table> {
        const createdTable = new this.tableModel(createTableDto);
        return await createdTable.save();
      }
      async findTables(): Promise<Table[]> {
        return await this.tableModel.find().exec();
      }
      async findTable(idTable: string): Promise<Table[]> {
        return await this.tableModel.findById(idTable).exec();
      }
      async deleteTable(idTable: string): Promise<Table[]> {
        return await this.tableModel.findByIdAndRemove(idTable);
      }
      async editTable(data) {
        const id = data[0].id;
        const dto = data[0].dto;
        return await this.tableModel.findByIdAndUpdate(id, dto, {new: true, runValidators: true});
      }
}
