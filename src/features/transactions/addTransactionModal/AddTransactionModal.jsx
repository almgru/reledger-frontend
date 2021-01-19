import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";

export default function AddTransactionModal(props) {
  return (
    <Modal open={props.opened} as={Form} onSubmit={props.onModalSubmitClicked}>
      <Modal.Header></Modal.Header>
      <Modal.Content>
        <Form.Input label="From account" required type="text" />
      </Modal.Content>
      <Modal.Actions>
        <Button type="submit" color="green">
          Submit
        </Button>
        <Button color="red" onClick={props.onModalClosed}>
          Discard
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
