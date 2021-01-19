import React from "react";
import { Table, Button, Header } from "semantic-ui-react";

export const TransactionTable = (props) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan={4}>
          <Header size="medium" textAlign="center">
            Transactions
          </Header>
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>From</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>To</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {props.data.map((transaction) => (
        <Table.Row key={transaction.id}>
          <Table.Cell>{transaction.fromAccount.name}</Table.Cell>
          <Table.Cell>
            {transaction.amount} {transaction.currency}
          </Table.Cell>
          <Table.Cell>{transaction.toAccount.name}</Table.Cell>
          <Table.Cell>{transaction.date}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
