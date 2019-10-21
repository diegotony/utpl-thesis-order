import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, required:true },
  id_table: { type: mongoose.Schema.Types.ObjectId ,required:true},
  date: { type: Date, default: Date.now,required:true },
  order : {type: Array,required:true}
});
