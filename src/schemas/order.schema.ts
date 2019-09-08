import * as mongoose from 'mongoose';
export const OrderSchema = new mongoose.Schema({
  menu: {type: mongoose.Schema.Types.ObjectId, ref: 'Menu'},
  table: {type: mongoose.Schema.Types.ObjectId, ref: 'Table'},
  user: {type: mongoose.Schema.Types.ObjectId},
  date: { type: Date, default: Date.now },
});