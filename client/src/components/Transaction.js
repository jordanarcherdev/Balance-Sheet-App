import React from 'react';

const Transaction = ({ transaction }) => {

  let amount = <div></div>
  if (transaction.transactionType === 'withdrawal'){
    amount = <div className="ui red header">-£{transaction.amount}</div>
  } else if (transaction.transactionType === 'deposit') {
    amount = <div className="ui green header">+£{transaction.amount}</div>
  }

  return (
    <div className="item">
      <div className="content">
        <div className="header">{transaction.transaction}</div>
        <div className="content">{transaction.description}</div>
          {amount}
      </div>
    </div>
  )

}

export default Transaction;
