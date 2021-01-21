import React from "react";
import { Button } from "semantic-ui-react";
import { AccountTable } from "../../../features/accounts/accountTable/AccountTable";
import { AddAccountModal } from "../../../features/transactions/addAccountModal/AddAccountModal";

export class AccountsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      addAccountModalOpened: false,
    };

    this.openAddAccountModal = this.openAddAccountModal.bind(this);
    this.closeAddAccountModal = this.closeAddAccountModal.bind(this);
  }

  openAddAccountModal() {
    this.setState({ addAccountModalOpened: true });
  }

  closeAddAccountModal() {
    this.setState({ addAccountModalOpened: false });
  }

  render() {
    return (
      <>
        <Button positive onClick={this.openAddAccountModal}>
          Add New Account
        </Button>

        <AccountTable data={this.props.accounts} />

        <AddAccountModal
          opened={this.state.addAccountModalOpened}
          onSubmit={this.props.onAddNewAccount}
          onModalClosed={this.closeAddAccountModal}
          accounts={this.props.accounts}
        />
      </>
    );
  }
}
