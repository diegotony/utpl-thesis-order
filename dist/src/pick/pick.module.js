"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const pick_controller_1 = require("./pick.controller");
const pick_service_1 = require("./pick.service");
const mongoose_1 = require("@nestjs/mongoose");
const pick_schema_1 = require("src/schemas/pick.schema");
let PickModule = class PickModule {
};
PickModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Pick', schema: pick_schema_1.PickSchema }])],
        controllers: [pick_controller_1.PickController],
        providers: [pick_service_1.PickService],
    })
], PickModule);
exports.PickModule = PickModule;
//# sourceMappingURL=pick.module.js.map