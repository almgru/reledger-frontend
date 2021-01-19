import React from "react";
import { Table, Header } from "semantic-ui-react";

export default function AccountTable(props) {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan={2}>
            <Header size="medium" textAlign="center">
              Accounts
            </Header>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Balance</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.data.map((account) => (
          <Table.Row key={account.id}>
            <Table.Cell>{account.name}</Table.Cell>
            <Table.Cell>{account.balance} SEK</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
