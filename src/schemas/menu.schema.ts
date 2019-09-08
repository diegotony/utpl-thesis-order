import * as mongoose from 'mongoose';
export const MenuSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
});