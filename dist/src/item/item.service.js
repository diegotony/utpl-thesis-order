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
let ItemService = class ItemService {
    constructor(ItemModel) {
        this.ItemModel = ItemModel;
    }
    async createItem(createItemDto) {
        const createdItem = new this.ItemModel(createItemDto);
        return await createdItem.save();
    }
    async findItems() {
        return await this.ItemModel.find().exec();
    }
    async findItem(idItem) {
        return await this.ItemModel.findById(idItem).exec();
    }
    async deleteItem(idItem) {
        return await this.ItemModel.findByIdAndRemove(idItem);
    }
    async editItem(data) {
        const id = data[0].id;
        const dto = data[0].dto;
        return await this.ItemModel.findByIdAndUpdate(id, dto, { new: true, runValidators: true });
    }
};
ItemService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Item')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map