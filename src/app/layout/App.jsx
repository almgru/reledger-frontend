import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { AccountTable } from "../../features/accounts/accountTable/AccountTable";
import { Navbar } from "../../features/nav/NavBar";
import { AddAccountModal } from "../../features/transactions/addAccountModal/AddAccountModal";
import { AddTransactionModal } from "../../features/transactions/addTransactionModal/AddTransactionModal";
import { TransactionTable } from "../../features/transactions/transactionTable/TransactionTable";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      accounts: [],
      transactions: [],
      addTransactionModalOpened: false,
      addAccountModalOpened: false,
    };
    this.openAddTransactionModal = this.openAddTransactionModal.bind(this);
    this.closeAddTransactionModal = this.closeAddTransactionModal.bind(this);
    this.onAddTransactionModalSubmitted = this.onAddTransactionModalSubmitted.bind(
      this
    );
    this.openAddAccountModal = this.openAddAccountModal.bind(this);
    this.closeAddAccountModal = this.closeAddAccountModal.bind(this);
    this.onAddAccountModalSubmitted = this.onAddAccountModalSubmitted.bind(
      this
    );
    this.updateAccountData = this.updateAccountData.bind(this);
    this.updateTransactionData = this.updateTransactionData.bind(this);
  }

  componentDidMount = () => {
    this.updateAccountData();
    this.updateTransactionData();
  };

  updateAccountData() {
    fetch("http://localhost:5000/api/accounts")
      .then((response) => response.json())
      .then((data) => this.setState({ accounts: data }));
  }

  updateTransactionData() {
    fetch("http://localhost:5000/api/transactions")
      .then((response) => response.json())
      .then((data) => this.setState({ transactions: data }));
  }

  openAddTransactionModal() {
    this.setState({ addTransactionModalOpened: true });
  }

  openAddAccountModal() {
    this.setState({ addAccountModalOpened: true });
  }

  closeAddTransactionModal() {
    this.setState({ addTransactionModalOpened: false });
  }

  closeAddAccountModal() {
    this.setState({ addAccountModalOpened: false });
  }

  onAddTransactionModalSubmitted(credits, debits, amount, date, description) {
    const creditAccountName = this.state.accounts.find(
      (account) => account.id === credits
    ).name;
    const debitAccountName = this.state.accounts.find(
      (account) => account.id === debits
    ).name;

    fetch("http://localhost:5000/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        fromAccount: creditAccountName,
        toAccount: debitAccountName,
        amount: amount,
        currency: "SEK",
        date: date.toISOString(),
        description: description,
      }),
    })
      .then(() => this.updateTransactionData())
      .then(() => this.updateAccountData())
      .then(() => this.closeAddTransactionModal())
      .catch((error) => console.log(error));
  }

  onAddAccountModalSubmitted(name, incBehavior) {
    fetch("http://localhost:5000/api/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: name,
        increaseBalanceOn: incBehavior,
      }),
    })
      .then(() => this.updateAccountData())
      .then(() => this.closeAddAccountModal())
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <Navbar
          onAddTransactionClicked={this.openAddTransactionModal}
          onAddAccountClicked={this.openAddAccountModal}
        />

        <Container
          style={{
            marginTop: "7em",
            padding: "2em",
            backgroundColor: "white",
          }}
        >
          <Switch>
            <Route path="/transactions">
              <TransactionTable data={this.state.transactions} />
            </Route>

            <Route path="/accounts">
              <AccountTable data={this.state.accounts} />
            </Route>

            <Redirect from="/" to="/transactions" />
          </Switch>

          <AddAccountModal
            opened={this.state.addAccountModalOpened}
            onSubmit={this.onAddAccountModalSubmitted}
            onModalClosed={this.closeAddAccountModal}
            accounts={this.state.accounts}
          />

          <AddTransactionModal
            opened={this.state.addTransactionModalOpened}
            onSubmit={this.onAddTransactionModalSubmitted}
            onModalClosed={this.closeAddTransactionModal}
            accounts={this.state.accounts}
          />
        </Container>
      </>
    );
  }
}
