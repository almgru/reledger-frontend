import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Icon, Button } from "semantic-ui-react";

export const Navbar = (props) => (
  <Menu inverted fixed="top" color="blue">
    <Container>
      <Menu.Item as={NavLink} to="/" exact>
        <Icon name="book" size="large" />
        Reledger
      </Menu.Item>
      <Menu.Item as={NavLink} to="/accounts" name="Accounts" />
      <Menu.Item as={NavLink} to="/transactions" name="Transactions" />
      <Menu.Item position="right">
        <Button positive onClick={props.onAddAccountClicked}>
          Add New Account
        </Button>
        <Button
          positive
          onClick={props.onAddTransactionClicked}
          style={{ marginLeft: "0.5em" }}
        >
          Add New Transaction
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
);
