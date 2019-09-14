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
const menu_service_1 = require("./menu.service");
const create_menu_dto_1 = require("shared/dto/menu/create-menu.dto");
const microservices_1 = require("@nestjs/microservices");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    async createMenu(dto) {
        return (await this.menuService.createMenu(dto));
    }
    async findAll() {
        return (await this.menuService.findMenus())
            .map(v => ({
            _id: v._id, name: v.name,
        }));
    }
    async findMenu(idMenu) {
        return (await this.menuService.findMenu(idMenu));
    }
    async editMenu(data) {
        return (await this.menuService.editMenu(data));
    }
    async deleteMenu(idMenu) {
        return (await this.menuService.deleteMenu(idMenu));
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'createMenu' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "createMenu", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findMenus' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findAll", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findMenu' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findMenu", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'editMenu' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "editMenu", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deleteMenu' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "deleteMenu", null);
MenuController = __decorate([
    common_1.Controller('menu'),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuController);
exports.MenuController = MenuController;
//# sourceMappingURL=menu.controller.js.map