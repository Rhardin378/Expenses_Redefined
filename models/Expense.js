const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Expense', ExpenseSchema)
