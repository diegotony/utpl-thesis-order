"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.PickSchema = new mongoose.Schema({
    quantify: { type: Number, required: true },
    menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
});
//# sourceMappingURL=pick.schema.js.map