import * as mongoose from 'mongoose';
export const CatalogSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 1, maxlength: 40},
  date: { type: Date, default: Date.now },
  item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
});
