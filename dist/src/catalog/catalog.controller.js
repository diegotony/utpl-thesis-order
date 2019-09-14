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
const create_catalog_dto_1 = require("../../shared/dto/catalog/create-catalog.dto");
const catalog_service_1 = require("./catalog.service");
let CatalogController = class CatalogController {
    constructor(catalogService) {
        this.catalogService = catalogService;
    }
    async createCatalog(dto) {
        return (await this.catalogService.createCatalog(dto));
    }
    async findAll() {
        return (await this.catalogService.findCatalogs())
            .map(v => ({
            _id: v._id, name: v.name,
        }));
    }
    async findCatalog(idCatalog) {
        return (await this.catalogService.findCatalog(idCatalog));
    }
    async editCatalog(data) {
        return (await this.catalogService.editCatalog(data));
    }
    async deleteCatalog(idCatalog) {
        return (await this.catalogService.deleteCatalog(idCatalog));
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'createCatalog' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_catalog_dto_1.CreateCatalogDto]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "createCatalog", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findCatalogs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "findAll", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findCatalog' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "findCatalog", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'editCatalog' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "editCatalog", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deleteCatalog' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "deleteCatalog", null);
CatalogController = __decorate([
    common_1.Controller('catalog'),
    __metadata("design:paramtypes", [catalog_service_1.CatalogService])
], CatalogController);
exports.CatalogController = CatalogController;
//# sourceMappingURL=catalog.controller.js.map