import React from "react";
import { Container, Button } from "semantic-ui-react";
import { AccountTable } from "../../features/accounts/accountTable/AccountTable";
import { Navbar } from "../../features/nav/NavBar";
import { AddTransactionModal } from "../../features/transactions/addTransactionModal/AddTransactionModal";
import { TransactionTable } from "../../features/transactions/transactionTable/TransactionTable";

const dummyData = {
  transactions: [
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
  ],
  accounts: [
    {
      id: 1,
      name: "Asset",
      increaseBalanceOn: 0,
      balance: 19000,
      parentId: -1,
    },
    {
      id: 7,
      name: "Asset.Checking",
      increaseBalanceOn: 0,
      balance: 19000,
      parentId: 1,
    },
    {
      id: 2,
      name: "Liability",
      increaseBalanceOn: 1,
      balance: 0,
      parentId: -1,
    },
    {
      id: 3,
      name: "Income",
      increaseBalanceOn: 1,
      balance: 25000,
      parentId: -1,
    },
    {
      id: 6,
      name: "Income.Salary",
      increaseBalanceOn: 1,
      balance: 25000,
      parentId: 3,
    },
    {
      id: 4,
      name: "Expense",
      increaseBalanceOn: 0,
      balance: -6000,
      parentId: -1,
    },
    {
      id: 8,
      name: "Expense.Rent",
      increaseBalanceOn: 0,
      balance: -5000,
      parentId: 3,
    },
    {
      id: 9,
      name: "Expense.Insurance",
      increaseBalanceOn: 0,
      balance: -1000,
      parentId: 3,
    },
    {
      id: 5,
      name: "Capital",
      increaseBalanceOn: 1,
      balance: 0,
      parentId: -1,
    },
  ],
};

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
        <Navbar onAddTransactionClicked={this.openModal} />

        <Container
          style={{
            marginTop: "7em",
            padding: "2em",
            backgroundColor: "white",
          }}
        >
          <TransactionTable data={dummyData.transactions} />

          <AddTransactionModal
            opened={this.state.modalOpened}
            onModalSubmitClicked={this.onModalSubmit}
            onModalClosed={this.closeModal}
          />

          <AccountTable data={dummyData.accounts} />
        </Container>
      </div>
    );
  }
}
