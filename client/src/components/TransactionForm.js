import React from 'react';

class TransactionForm extends React.Component {

  state = { transaction: '', description: '', amount: '', transactionType: 'withdrawal' }

  onSubmit = (e) => {
    e.preventDefault();

    let newTransaction = {
      transaction: this.state.transaction,
      description: this.state.description,
      amount: this.state.amount,
      transactionType: this.state.transactionType
    }

    this.props.onSubmit(newTransaction);
    this.setState({
      transaction: '',
      description: '',
      amount: '',
      transactionType: 'withdrawal'
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Transaction Title</label>
            <input
              name="transaction"
              type="text"
              value={this.state.transaction}
              onChange={this.onChange}
             />
          </div>

          <div className="field">
            <label>Description</label>
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>

          <div className="field">
            <label>Amount</label>
            <input
              name="amount"
              type="text"
              value={this.state.amount}
              onChange={this.onChange}
            />
          </div>

          <div className="field">
            <label>Transaction Type</label>
             <select name="transactionType" onChange={this.onChange}>
               <option value="withdrawal">Withdrawal</option>
               <option value="deposit">Deposit</option>
             </select>
          </div>

          <div className="field">
            <button className="positive ui button">Add Transaction</button>
          </div>

        </form>

      </div>
    );
  }


}

export default TransactionForm;
