import * as mongoose from 'mongoose';
export const PickSchema = new mongoose.Schema({
  quantify: {type: Number, required: true},
  menu: {type: mongoose.Schema.Types.ObjectId, ref: 'Menu'},
  item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
});
