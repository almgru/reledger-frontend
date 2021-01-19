import React from "react";
import { Modal, Form, Button, Label } from "semantic-ui-react";

export class AddAccountModal extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      increaseBehavior: "",
    };
  }

  setName(name) {
    this.setState({ name: name });
  }

  setIncreaseBehavior(increaseBehavior) {
    this.setState({ increaseBehavior: increaseBehavior });
  }

  render() {
    return (
      <Modal open={this.props.opened} as={Form} onSubmit={this.props.onSubmit}>
        <Modal.Header></Modal.Header>
        <Modal.Content>
          <Form.Input label="Name" type="text" required></Form.Input>
          <Form.Group inline>
            <label>Increase Behavior</label>
            <Form.Radio
              label="Increase on Debit"
              value={0}
              required
              checked={this.state.increaseBehavior === 0}
              onChange={() => this.setIncreaseBehavior(0)}
            />
            <Form.Radio
              label="Increase on Credit"
              value={1}
              required
              checked={this.state.increaseBehavior === 1}
              onChange={() => this.setIncreaseBehavior(1)}
            />
          </Form.Group>
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
