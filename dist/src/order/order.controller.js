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
const order_service_1 = require("./order.service");
const create_order_dto_1 = require("shared/dto/order/create-order.dto");
const microservices_1 = require("@nestjs/microservices");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async createPick(dto) {
        return (await this.orderService.createOrder(dto));
    }
    async findAll() {
        return (await this.orderService.findOrders())
            .map(v => ({
            _id: v._id, menu: v.menu, table: v.table, user: v.user, status: v.status
        }));
    }
    async findOrder(idOrder) {
        return (await this.orderService.findOrder(idOrder));
    }
    async editOrder(data) {
        return (await this.orderService.editOrder(data));
    }
    async deleteOrder(idOrder) {
        return (await this.orderService.deleteOrder(idOrder));
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'createOrder' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createPick", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findOrders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findAll", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findOrder' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findOrder", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'editOrder' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "editOrder", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deleteOrder' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteOrder", null);
OrderController = __decorate([
    common_1.Controller('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map