import React from "react";
import AddTransactionModal from "../../features/transactions/addTransactionModal/AddTransactionModal";
import TransactionTable from "../../features/transactions/transactionTable/TransactionTable";

const dummyData = [
  {
    id: 1,
    from: "Income.Salary",
    amount: 25_000,
    currency: "SEK",
    to: "Asset.Checking",
    date: "2021-10-25",
  },
  {
    id: 2,
    from: "Asset.Checking",
    amount: 5000,
    currency: "SEK",
    to: "Expense.Rent",
    date: "2021-10-29",
  },
  {
    id: 3,
    from: "Asset.Checking",
    amount: 1000,
    currency: "SEK",
    to: "Expense.Insurance",
    date: "2021-10-30",
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpened: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalOpened: true });
  }

  closeModal() {
    this.setState({ modalOpened: false });
  }

  onModalSubmit(submitEvent) {
    console.log("modal submitted:");
    console.log(submitEvent);
    this.closeModal();
  }

  render() {
    return (
      <div className="App">
        <h1>Reledger</h1>

        <TransactionTable
          data={dummyData}
          onAddTransactionClicked={this.openModal}
        />
        <AddTransactionModal
          opened={this.state.modalOpened}
          onModalSubmitClicked={this.onModalSubmit}
          onModalClosed={this.closeModal}
        />
      </div>
    );
  }
}
