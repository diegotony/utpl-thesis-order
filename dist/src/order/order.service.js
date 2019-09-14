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
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async createOrder(createOrderDto) {
        const createdOrder = new this.orderModel(createOrderDto);
        return await createdOrder.save();
    }
    async findOrders() {
        return await this.orderModel.find().exec();
    }
    async findOrder(idOrder) {
        return await this.orderModel.findById(idOrder).exec();
    }
    async deleteOrder(idOrder) {
        return await this.orderModel.findByIdAndRemove(idOrder);
    }
    async editOrder(data) {
        const id = data[0].id;
        const dto = data[0].dto;
        return await this.orderModel.findByIdAndUpdate(id, dto, { new: true, runValidators: true });
    }
};
OrderService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Order')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map