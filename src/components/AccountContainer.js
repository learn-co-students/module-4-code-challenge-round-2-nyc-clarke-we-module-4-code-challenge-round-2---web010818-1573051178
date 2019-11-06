import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
// import { Celebrate } from "./Celebrate";
// import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  state = { transactions: [], input: "" };

  componentDidMount() {
    fetch(" https://boiling-brook-94902.herokuapp.com/transactions")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          transactions: data
        })
      );
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    // console.log(this.state.transactions);

    return (
      <div>
        {/* <Celebrate /> */}
        <Search handleChange={this.handleChange} input={this.state.input} />
        <TransactionsList
          transactions={this.state.transactions}
          input={this.state.input}
        />
      </div>
    );
  }
}

export default AccountContainer;
