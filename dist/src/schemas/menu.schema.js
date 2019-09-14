"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let start = Date.now();
exports.MenuSchema = new mongoose.Schema({
    name: { type: String, default: `Orden del ${start}` },
    date: { type: Date, default: Date.now },
});
//# sourceMappingURL=menu.schema.js.map