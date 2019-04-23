const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Sheet Model
const Sheet = require('../../models/Sheet');

//Transaction validation
const validateTransactionInput = require('../../validation/transaction');

//Get all transactions
router.get('/', (req, res) => {
  Sheet.find()
    .sort({ date: -1 })
    .then(transactions => res.json(transactions))
    .catch(err => res.status(404).json({ notransactionsfound: 'No Transactions Found' }));
});

//Add new transaction
router.post('/', (req, res) => {
  const {errors, isValid} = validateTransactionInput(req.body);
  console.log(req.body)

  if(!isValid){
    return res.status(400).json(errors)
  }

  const newTransaction = new Sheet({
    transaction: req.body.transaction,
    description: req.body.description,
    amount: req.body.amount,
    transactionType: req.body.transactionType
  });

  newTransaction.save().then(transaction => res.json(transaction));
});



module.exports = router;
