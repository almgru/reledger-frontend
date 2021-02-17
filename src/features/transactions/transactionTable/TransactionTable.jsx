import React from "react";
import { Table, Header } from "semantic-ui-react";

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
        <Table.HeaderCell>Credit (From)</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Debit (To)</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {props.data.map((transaction) => (
        <Table.Row key={transaction.id}>
          <Table.Cell>{transaction.creditAccount.name}</Table.Cell>
          <Table.Cell>
            {transaction.amount} {transaction.currency}
          </Table.Cell>
          <Table.Cell>{transaction.debitAccount.name}</Table.Cell>
          <Table.Cell>{transaction.date}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
