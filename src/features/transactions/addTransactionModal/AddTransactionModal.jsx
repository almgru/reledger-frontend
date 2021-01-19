import React from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Modal, Form, Button, Icon } from "semantic-ui-react";

export class AddTransactionModal extends React.Component {
  constructor() {
    super();
    this.state = {
      date: null,
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <Modal
        open={this.props.opened}
        as={Form}
        onSubmit={this.props.onModalSubmitClicked}
      >
        <Modal.Header></Modal.Header>
        <Modal.Content>
          <Form.Group widths="equal">
            <Form.Select
              label="From Account (Credit)"
              fluid
              search
              selection
              options={this.props.accounts.map((account) => ({
                key: account.id,
                text: account.name,
                value: account,
              }))}
            ></Form.Select>
            <Form.Select
              label="To Account (Debit)"
              fluid
              search
              selection
              options={this.props.accounts.map((account) => ({
                key: account.id,
                text: account.name,
                value: account,
              }))}
            ></Form.Select>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input label="Amount (SEK)" type="number"></Form.Input>
            <SemanticDatepicker
              label="Date"
              type="date"
              value={this.state.date}
              onChange={(date) => this.setDate(date)}
            />
          </Form.Group>
          <Form.TextArea label="Description" />
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
