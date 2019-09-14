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
const pick_service_1 = require("./pick.service");
const create_pick_dto_1 = require("shared/dto/pick/create-pick.dto");
const microservices_1 = require("@nestjs/microservices");
let PickController = class PickController {
    constructor(pickService) {
        this.pickService = pickService;
    }
    async createPick(dto) {
        return (await this.pickService.createPick(dto));
    }
    async findAll() {
        return (await this.pickService.findPicks())
            .map(v => ({
            _id: v._id, quantify: v.quantify, menu: v.menu, item: v.item,
        }));
    }
    async findPick(idPick) {
        return (await this.pickService.findPick(idPick));
    }
    async editPick(data) {
        return (await this.pickService.editPick(data));
    }
    async deletePick(idPick) {
        return (await this.pickService.deletePick(idPick));
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'createPick' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pick_dto_1.CreatePickDto]),
    __metadata("design:returntype", Promise)
], PickController.prototype, "createPick", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findPicks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PickController.prototype, "findAll", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findPick' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PickController.prototype, "findPick", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'editPick' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PickController.prototype, "editPick", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deletePick' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PickController.prototype, "deletePick", null);
PickController = __decorate([
    common_1.Controller('pick'),
    __metadata("design:paramtypes", [pick_service_1.PickService])
], PickController);
exports.PickController = PickController;
//# sourceMappingURL=pick.controller.js.map