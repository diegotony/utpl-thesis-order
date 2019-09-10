import * as mongoose from 'mongoose';
export const PickSchema = new mongoose.Schema({
  quantify: {type: Int8Array, required: true},
  menu: {type: mongoose.Schema.Types.ObjectId, ref: 'Menu'},
  item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
});
