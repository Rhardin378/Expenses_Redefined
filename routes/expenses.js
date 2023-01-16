const express = require('express')
const router = express.Router()
const expensesController = require('../controllers/expenses') 
const { ensureAuth } = require('../middleware/auth')
const Expense = require('../models/Expense')

router.get('/', ensureAuth, expensesController.getExpenses)

router.get('/:id', expensesController.getSingleExpense)

router.get('/:id/edit', expensesController.getSingleExpenseEdit)

router.put('/:id', ensureAuth, expensesController.editExpense)

router.post('/createExpense', expensesController.createExpense)

router.delete('/:id', expensesController.deleteExpense)

module.exports = router