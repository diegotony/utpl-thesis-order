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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PickService = class PickService {
    constructor(pickModel) {
        this.pickModel = pickModel;
    }
    async createPick(createPickDto) {
        const createdPick = new this.pickModel(createPickDto);
        return await createdPick.save();
    }
    async findPicks() {
        return await this.pickModel.find().exec();
    }
    async findPick(idPick) {
        return await this.pickModel.findById(idPick).exec();
    }
    async deletePick(idPick) {
        return await this.pickModel.findByIdAndRemove(idPick);
    }
    async editPick(data) {
        const id = data[0].id;
        const dto = data[0].dto;
        return await this.pickModel.findByIdAndUpdate(id, dto, { new: true, runValidators: true });
    }
};
PickService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Pick')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], PickService);
exports.PickService = PickService;
//# sourceMappingURL=pick.service.js.map