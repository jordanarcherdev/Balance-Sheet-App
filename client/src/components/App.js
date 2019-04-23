import React from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import balancesheet from '../apis/balancesheet';

class App extends React.Component {

    state = { transactions: [] }

    onSubmit = async (transaction) => {
      const response = await balancesheet.post('/api/sheet/', transaction);

      let newTransactions = this.state.transactions;
      newTransactions.unshift(response.data);

      this.setState({ transactions: newTransactions });
    }

    getTransactions = async () => {
      const response = await balancesheet.get('/api/sheet/');

      this.setState({ transactions: response.data });
    }

    componentDidMount(){
      this.getTransactions();
    }

    render() {
      return (

        <div className="ui container">
          <br />
        <h2 className="ui center aligned icon header">
          <i className="circular money bill alternate outline icon"></i>
          Balance Sheet
        </h2>

          <TransactionForm onSubmit={this.onSubmit} />
          <TransactionList transactions={this.state.transactions} />
        </div>
      );
    }
}

export default App;
