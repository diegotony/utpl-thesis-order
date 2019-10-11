import * as mongoose from 'mongoose';

var arraySchema = new mongoose.Schema({
  title: String
});


export const OrderSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId },
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
  ids:[{type: String}],
  prices:[{type: Number}],
  quantitys:[{type: Number}],
  date: { type: Date, default: Date.now },

});

OrderSchema.path('ids').validate(function(ids){
  if(!ids){return false}
  else if(ids.length === 0){return false}
  return true;
}, 'Order needs to have at least one plate');

OrderSchema.path('prices').validate(function(prices){
  if(!prices){return false}
  else if(prices.length === 0){return false}
  return true;
}, 'Order needs to have at least one plate');

OrderSchema.path('quantitys').validate(function(quantitys){
  if(!quantitys){return false}
  else if(quantitys.length === 0){return false}
  return true;
}, 'Order needs to have at least one plate');

