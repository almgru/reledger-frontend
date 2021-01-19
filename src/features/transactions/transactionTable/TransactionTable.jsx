import React from "react";
import { Table } from "semantic-ui-react";

export default function TransactionTable(props) {
  return (
    <Table celled>
      <Table.Header>
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
            <Table.Cell>{transaction.from}</Table.Cell>
            <Table.Cell>
              {transaction.amount} {transaction.currency}
            </Table.Cell>
            <Table.Cell>{transaction.to}</Table.Cell>
            <Table.Cell>{transaction.date}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
