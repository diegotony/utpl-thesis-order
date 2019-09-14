"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CatalogSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1, maxlength: 40 },
    date: { type: Date, default: Date.now },
});
//# sourceMappingURL=catalog.schema.js.map