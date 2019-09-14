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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const table_service_1 = require("./table.service");
const create_table_dto_1 = require("../../shared/dto/table/create-table.dto");
const microservices_1 = require("@nestjs/microservices");
let TableController = class TableController {
    constructor(tableService) {
        this.tableService = tableService;
    }
    async createTable(dto) {
        return (await this.tableService.createTable(dto));
    }
    async findAll() {
        return (await this.tableService.findTables())
            .map(v => ({
            _id: v._id, name: v.name,
        }));
    }
    async findTable(idTable) {
        return (await this.tableService.findTable(idTable));
    }
    async editTable(data) {
        return (await this.tableService.editTable(data));
    }
    async deleteTable(idTable) {
        return (await this.tableService.deleteTable(idTable));
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'createTable' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_table_dto_1.CreateTableDto]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "createTable", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findTables' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TableController.prototype, "findAll", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findTable' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "findTable", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'editTable' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "editTable", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deleteTable' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "deleteTable", null);
TableController = __decorate([
    common_1.Controller('table'),
    __metadata("design:paramtypes", [table_service_1.TableService])
], TableController);
exports.TableController = TableController;
//# sourceMappingURL=table.controller.js.map