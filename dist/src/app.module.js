"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const item_module_1 = require("./item/item.module");
const mongoose_1 = require("@nestjs/mongoose");
const catalog_module_1 = require("./catalog/catalog.module");
const table_module_1 = require("./table/table.module");
const pick_module_1 = require("./pick/pick.module");
const menu_module_1 = require("./menu/menu.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb://localhost/order'), item_module_1.ItemModule, catalog_module_1.CatalogModule, table_module_1.TableModule, pick_module_1.PickModule, menu_module_1.MenuModule,
        ],
        controllers: [],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map