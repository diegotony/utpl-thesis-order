import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  id_client: { type: mongoose.Schema.Types.ObjectId, required:true },
  id_table: { type: mongoose.Schema.Types.ObjectId ,required:true},
  date: { type: Date, default: Date.now,required:true },
  order : {type: Array,required:true},
  pago : {type: String,required:true, default:"No Pagado"},
  entrega : {type: String,required:true, default:"Pendiente"},
  total : {type: Number,required:true},


});
