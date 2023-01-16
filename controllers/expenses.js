const Expense = require('../models/Expense')

module.exports = {
    getExpenses: async (req,res)=>{
        console.log(req.user)
        try{
            const expenses = await Expense.find({userId:req.user.id})
            console.log(expenses)
            res.render('expenses.ejs', {expenses: expenses, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getSingleExpense: async(req, res) => {
        try {
            const expense = await Expense.findById(req.params.id)
            res.render('singleExpense', { expense }
            )
        }
        catch(err){
            console.log(err)
        }
    },
    getSingleExpenseEdit: async(req,res)=> { 
        try {
        const expense = await Expense.findById(req.params.id)
        res.render('editExpense', { expense })
        
        }catch(err){
            console.log(err)
        }
    },

    createExpense: async (req, res)=>{
        try{
            await Expense.create({product: req.body.product,
            price: req.body.price,
            paymentMethod: req.body.paymentMethod,
            location: req.body.location,
            date: req.body.date
                , userId: req.user.id})
            console.log('Expense!')
            res.redirect('/expenses')
        }catch(err){
            console.log(err)
        }
    }, editExpense:
        async(req,res) =>{
        try{ 
        const { id } = req.params;
        await Expense.findByIdAndUpdate(id,{...req.body} )
        res.redirect('/expenses')
        }catch(err) {
        console.log(err)
    }
    },

    deleteExpense: async (req, res)=>{
        try {
            const { id } = req.params;
            await Expense.findByIdAndDelete(id)
            console.log("expense deleted");
            res.redirect("/expenses")
          } catch (err) {
              console.log(err)
            res.redirect("/expenses");
          }
    }
}    