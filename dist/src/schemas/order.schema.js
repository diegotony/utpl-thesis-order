"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.OrderSchema = new mongoose.Schema({
    menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
    table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
    user: { type: mongoose.Schema.Types.ObjectId },
    status: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
});
//# sourceMappingURL=order.schema.js.map