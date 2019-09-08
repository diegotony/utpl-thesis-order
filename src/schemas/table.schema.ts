import * as mongoose from 'mongoose';
export const TableSchema = new mongoose.Schema({
  name: {type: String, required: true},
  date: { type: Date, default: Date.now },

});
