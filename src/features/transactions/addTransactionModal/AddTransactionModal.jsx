import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";

export const AddTransactionModal = (props) => (
  <Modal open={props.opened} as={Form} onSubmit={props.onModalSubmitClicked}>
    <Modal.Header></Modal.Header>
    <Modal.Content>
      <Form.Input label="From account" required type="text" />
    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={props.onModalClosed}>
        Discard
      </Button>
      <Button positive type="submit">
        Submit
      </Button>
    </Modal.Actions>
  </Modal>
);
