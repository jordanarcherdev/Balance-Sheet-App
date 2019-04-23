const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SheetSchema = new Schema({
    transaction: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    amount: {
      type: Number
    },
    transactionType: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
})

module.exports = Sheet = mongoose.model('sheet', SheetSchema);
