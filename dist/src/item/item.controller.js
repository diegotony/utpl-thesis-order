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
const microservices_1 = require("@nestjs/microservices");
const create_item_dto_1 = require("../../shared/dto/item/create-item.dto");
const item_service_1 = require("./item.service");
let ItemController = class ItemController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    async createItem(dto) {
        return (await this.itemService.createItem(dto));
    }
    async findAll() {
        return (await this.itemService.findItems())
            .map(v => ({
            name: v.name, description: v.description, price: v.price, catalog: v.catalog,
        }));
    }
    async findItem(idItem) {
        return (await this.itemService.findItem(idItem));
    }
    async editItem(data) {
        return (await this.itemService.editItem(data));
    }
    async deleteUser(idItem) {
        return (await this.itemService.deleteItem(idItem));
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'createItem' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItemDto]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "createItem", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findItems' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "findAll", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findItem' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "findItem", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'editItem' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "editItem", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deleteItem' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "deleteUser", null);
ItemController = __decorate([
    common_1.Controller('item'),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemController);
exports.ItemController = ItemController;
//# sourceMappingURL=item.controller.js.map