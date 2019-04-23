import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {

  let deposits = 0;
  let withdrawals = 0;

  transactions.forEach(transaction => {

    if(transaction.transactionType === 'deposit'){
      deposits += transaction.amount;
    }else if (transaction.transactionType === 'withdrawal'){
      withdrawals += transaction.amount
    }

  })

  let balance = deposits - withdrawals;

  if (balance >= 0){
    balance = <div className="ui green header">£{balance.toFixed(2)}</div>
  }else if (balance < 0){
    balance = <div className="ui red header">£{balance.toFixed(2)}</div>
  }

  const renderedList = transactions.map((transaction) => {
    return <Transaction key={transaction._id} transaction={transaction} />
  });

  return (
    <div>
      <div className="ui segment">
        Balance: {balance}
      </div>

      <div className="ui relaxed divided list">
        {renderedList}
      </div>


      <div className="ui segment">
        Total Deposits: £{deposits} <br />
        Total Withdrawals: £{withdrawals}
      </div>

    </div>
  )

}

export default TransactionList;
