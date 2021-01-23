import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Icon } from "semantic-ui-react";

export const Navbar = (props) => (
  <Menu inverted fixed="top" color="blue">
    <Container>
      <Menu.Item as={NavLink} to="/" exact>
        <Icon name="book" size="large" />
        Reledger
      </Menu.Item>
      <Menu.Item as={NavLink} to="/accounts" name="Accounts" />
      <Menu.Item as={NavLink} to="/transactions" name="Transactions" />
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/register" name="Register" />
        <Menu.Item as={NavLink} to="/login" name="Login" />
      </Menu.Menu>
    </Container>
  </Menu>
);
