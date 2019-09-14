"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    catalog: { type: mongoose.Schema.Types.ObjectId, ref: 'Catalog' },
});
//# sourceMappingURL=item.schema.js.map