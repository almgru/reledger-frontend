import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Navbar } from "../../features/nav/NavBar";
import { AccountsPage } from "./pages/AccountsPage";
import { TransactionsPage } from "./pages/TransactionsPage";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      accounts: [],
    };
    this.onAddNewAccount = this.onAddNewAccount.bind(this);
    this.updateAccountData = this.updateAccountData.bind(this);
  }

  componentDidMount() {
    this.updateAccountData();
  }

  updateAccountData() {
    fetch(`https://reledger-api-demo.azurewebsites.net/api/accounts`)
      .then((response) => response.json())
      .then((data) => this.setState({ accounts: data }));
  }

  onAddNewAccount(name, incBehavior) {
    fetch(`https://reledger-api-demo.azurewebsites.net/api/accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: name,
        increaseBalanceOn: incBehavior,
      }),
    })
      .then(this.updateAccountData)
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <Navbar />

        <Container
          style={{
            marginTop: "7em",
            padding: "2em",
            backgroundColor: "white",
          }}
        >
          <Switch>
            <Route path="/transactions">
              <TransactionsPage
                accounts={this.state.accounts}
                updateAccountData={this.updateAccountData}
              />
            </Route>

            <Route path="/accounts">
              <AccountsPage
                accounts={this.state.accounts}
                onAddNewAccount={this.onAddNewAccount}
              />
            </Route>

            <Redirect from="/" to="/transactions" />
          </Switch>
        </Container>
      </>
    );
  }
}
