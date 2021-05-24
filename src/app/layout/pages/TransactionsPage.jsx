import React from "react";
import { Button } from "semantic-ui-react";
import { TransactionTable } from "../../../features/transactions/transactionTable/TransactionTable";
import { AddTransactionModal } from "../../../features/transactions/addTransactionModal/AddTransactionModal";

export class TransactionsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      addTransactionModalOpened: false,
    };

    this.openAddTransactionModal = this.openAddTransactionModal.bind(this);
    this.closeAddTransactionModal = this.closeAddTransactionModal.bind(this);
    this.onAddTransactionModalSubmitted = this.onAddTransactionModalSubmitted.bind(
      this
    );
    this._updateTransactionData = this._updateTransactionData.bind(this);
  }

  componentDidMount = () => {
    this._updateTransactionData();
  };

  openAddTransactionModal() {
    this.setState({ addTransactionModalOpened: true });
  }

  closeAddTransactionModal() {
    this.setState({ addTransactionModalOpened: false });
  }

  onAddTransactionModalSubmitted(credits, debits, amount, date, description) {
    const creditAccountName = this.props.accounts.find(
      (account) => account.id === credits
    ).name;
    const debitAccountName = this.props.accounts.find(
      (account) => account.id === debits
    ).name;

    fetch(`http://localhost:5000/api/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        creditAccount: creditAccountName,
        debitAccount: debitAccountName,
        amount: amount,
        currency: "SEK",
        date: date.toISOString(),
        description: description,
      }),
    })
      .then(() => this._updateTransactionData())
      .then(this.props.updateAccountData)
      .then(() => this.closeAddTransactionModal())
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <Button
          positive
          onClick={this.openAddTransactionModal}
          style={{ marginLeft: "0.5em" }}
        >
          Add New Transaction
        </Button>

        <TransactionTable data={this.state.transactions} />

        <AddTransactionModal
          opened={this.state.addTransactionModalOpened}
          onSubmit={this.onAddTransactionModalSubmitted}
          onModalClosed={this.closeAddTransactionModal}
          accounts={this.props.accounts}
        />
      </>
    );
  }

  _updateTransactionData() {
    fetch(`http://localhost:5000/api/transactions`)
      .then((response) => response.json())
      .then((data) => this.setState({ transactions: data }));
  }
}
