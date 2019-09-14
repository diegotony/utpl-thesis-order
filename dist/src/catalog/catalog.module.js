"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const catalog_service_1 = require("./catalog.service");
const catalog_controller_1 = require("./catalog.controller");
const mongoose_1 = require("@nestjs/mongoose");
const catalog_schema_1 = require("./../schemas/catalog.schema");
let CatalogModule = class CatalogModule {
};
CatalogModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Catalog', schema: catalog_schema_1.CatalogSchema }])],
        providers: [catalog_service_1.CatalogService],
        controllers: [catalog_controller_1.CatalogController],
    })
], CatalogModule);
exports.CatalogModule = CatalogModule;
//# sourceMappingURL=catalog.module.js.map