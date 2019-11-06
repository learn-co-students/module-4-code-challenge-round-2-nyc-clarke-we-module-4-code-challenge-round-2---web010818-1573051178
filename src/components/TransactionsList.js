import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Posted At</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>

          {this.props.transactions.map(transaction => {
            if (
              transaction.description
                .toLowerCase()
                .includes(this.props.input.toLowerCase()) ||
              transaction.category
                .toLowerCase()
                .includes(this.props.input.toLowerCase())
            ) {
              return <Transaction key={transaction.id} {...transaction} />;
            }
          })}
        </tbody>
      </table>
    );
  }
}

export default TransactionsList;
