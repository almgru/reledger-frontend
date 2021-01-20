import React from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Modal, Form, Button } from "semantic-ui-react";

export class AddTransactionModal extends React.Component {
  constructor() {
    super();
    this.state = {
      creditAccountId: -1,
      debitAccountId: -1,
      amount: "",
      date: null,
      description: "",
    };
    this.setCreditAccountId = this.setCreditAccountId.bind(this);
    this.setDebitAccountId = this.setDebitAccountId.bind(this);
    this.setAmount = this.setAmount.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setDescription = this.setDescription.bind(this);
  }

  setCreditAccountId(id) {
    this.setState({ creditAccountId: id });
  }

  setDebitAccountId(id) {
    this.setState({ debitAccountId: id });
  }

  setAmount(amount) {
    this.setState({ amount: amount });
  }

  setDate(date) {
    this.setState({ date: date });
  }

  setDescription(description) {
    this.setState({ description: description });
  }

  render() {
    return (
      <Modal
        open={this.props.opened}
        as={Form}
        onSubmit={() =>
          this.props.onSubmit(
            this.state.creditAccountId,
            this.state.debitAccountId,
            this.state.amount,
            this.state.date,
            this.state.description
          )
        }
      >
        <Modal.Header></Modal.Header>
        <Modal.Content>
          <Form.Group widths="equal">
            <Form.Select
              label="From Account (Credit)"
              fluid
              search
              selection
              required
              options={this.props.accounts.map((account) => ({
                key: account.id,
                text: account.name,
                value: account.id,
              }))}
              onChange={(_, v) => this.setCreditAccountId(v.value)}
            ></Form.Select>
            <Form.Select
              label="To Account (Debit)"
              fluid
              search
              selection
              required
              options={this.props.accounts.map((account) => ({
                key: account.id,
                text: account.name,
                value: account.id,
              }))}
              onChange={(_, v) => this.setCreditAccountId(v.value)}
            ></Form.Select>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Amount (SEK)"
              type="number"
              required
              onChange={(e) => this.setAmount(e.target.value)}
            ></Form.Input>
            <SemanticDatepicker
              label="Date"
              type="date"
              required
              value={this.state.date}
              onChange={(_, v) => this.setDate(v.value)}
            />
          </Form.Group>
          <Form.TextArea
            label="Description"
            onChange={(e) => this.setDescription(e.target.value)}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.props.onModalClosed}>
            Discard
          </Button>
          <Button positive type="submit">
            Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
