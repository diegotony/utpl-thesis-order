import * as mongoose from 'mongoose';
let start = Date.now();

export const MenuSchema = new mongoose.Schema({
  name: {type: String, default:`Orden del ${start}`},
  date: { type: Date, default: Date.now },
});
