import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTableDto } from '../../shared/dto/table/create-table.dto';
import { Table } from '../../shared/dto/table/table.dto';

@Injectable()
export class TableService {
  constructor(@InjectModel('Table') private readonly tableModel: Model<Table>) { }
  ok: any = { "status": "ok" }
  nope: any = { "status": "false" }


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

  async checkTable(idTable: string): Promise<any[]> {
    try {
      // console.log("service  ", idTable)
      const check = await this.tableModel.exists({ _id: idTable })
      if (check) {
        return this.ok
      }
    } catch (error) {
      console.log(error)
      // throw new HttpException(`Callback createUser ${error.message}`, HttpStatus.BAD_REQUEST);
      return this.nope

    }

  }

  async deleteTable(idTable: string): Promise<Table[]> {
    return await this.tableModel.findByIdAndRemove(idTable);
  }
  async editTable(idTable: string, dto: CreateTableDto) {
    return await this.tableModel.findByIdAndUpdate(idTable, dto, { new: true, runValidators: true });
  }
}
