const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTransactionInput(data) {
  let errors = {};

  data.transaction = !isEmpty(data.transaction) ? data.transaction : '';

  if (Validator.isEmpty(data.transaction)){
    errors.transaction = 'Transaction Name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
