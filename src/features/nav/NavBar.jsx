import React from "react";
import { Menu, Container, Icon } from "semantic-ui-react";

export const Navbar = () => (
  <Menu inverted fixed="top" color="blue">
    <Container>
      <Menu.Item header>
        <Icon name="book" size="large" />
        Reledger
      </Menu.Item>
      <Menu.Item name="Accounts" />
      <Menu.Item name="Transactions" />
    </Container>
  </Menu>
);
