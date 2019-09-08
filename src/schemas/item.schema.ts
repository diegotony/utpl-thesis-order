import * as mongoose from 'mongoose';
export const ItemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  date: { type: Date, default: Date.now },
  catalog: {type: mongoose.Schema.Types.ObjectId, ref: 'Catalog'},
 
});
