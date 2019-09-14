"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let TableService = class TableService {
    constructor(tableModel) {
        this.tableModel = tableModel;
    }
    async createTable(createTableDto) {
        const createdTable = new this.tableModel(createTableDto);
        return await createdTable.save();
    }
    async findTables() {
        return await this.tableModel.find().exec();
    }
    async findTable(idTable) {
        return await this.tableModel.findById(idTable).exec();
    }
    async deleteTable(idTable) {
        return await this.tableModel.findByIdAndRemove(idTable);
    }
    async editTable(data) {
        const id = data[0].id;
        const dto = data[0].dto;
        return await this.tableModel.findByIdAndUpdate(id, dto, { new: true, runValidators: true });
    }
};
TableService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Table')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], TableService);
exports.TableService = TableService;
//# sourceMappingURL=table.service.js.map