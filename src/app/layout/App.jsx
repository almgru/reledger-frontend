import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { AccountTable } from "../../features/accounts/accountTable/AccountTable";
import { Navbar } from "../../features/nav/NavBar";
import { AddTransactionModal } from "../../features/transactions/addTransactionModal/AddTransactionModal";
import { TransactionTable } from "../../features/transactions/transactionTable/TransactionTable";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      accounts: [],
      transactions: [],
      modalOpened: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
  }

  componentDidMount = () => {
    fetch("http://localhost:5000/api/accounts")
      .then((response) => response.json())
      .then((data) => this.setState({ accounts: data }));
    fetch("http://localhost:5000/api/transactions")
      .then((response) => response.json())
      .then((data) => this.setState({ transactions: data }));
  };

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
      <>
        <Navbar onAddTransactionClicked={this.openModal} />

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

          <AddTransactionModal
            opened={this.state.modalOpened}
            onModalSubmitClicked={this.onModalSubmit}
            onModalClosed={this.closeModal}
            accounts={this.state.accounts}
          />
        </Container>
      </>
    );
  }
}
