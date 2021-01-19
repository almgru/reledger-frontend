import React from "react";
import { Menu, Container, Icon, Button } from "semantic-ui-react";

export const Navbar = (props) => (
  <Menu inverted fixed="top" color="blue">
    <Container>
      <Menu.Item header>
        <Icon name="book" size="large" />
        Reledger
      </Menu.Item>
      <Menu.Item name="Accounts" />
      <Menu.Item name="Transactions" />
      <Menu.Item position="right">
        <Button positive onClick={props.onAddTransactionClicked}>
          Add New Transaction
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
);
