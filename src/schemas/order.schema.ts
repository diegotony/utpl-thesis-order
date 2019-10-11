import * as mongoose from 'mongoose';
export const OrderSchema = new mongoose.Schema({
  id_user: {type: mongoose.Schema.Types.ObjectId},
  table: {type: mongoose.Schema.Types.ObjectId, ref: 'Table'},
  // status: {type: Boolean, default: false},
  // payment_method:{},
  items:[{}],
  date: { type: Date, default: Date.now },

});