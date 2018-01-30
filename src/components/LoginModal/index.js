import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const LoginModal = ({ open, onClick }) => (
  <Modal open={open} size='mini'>
    <Modal.Header>
      Login to Sandglass
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>About : <a target="_new" href="https://github.com/Takorras/Sandglass">GitHub/Sandglass</a></p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button fluid positive icon='github' labelPosition='left' content='Login with GitHub' onClick={onClick}/>
    </Modal.Actions>
  </Modal>
);

export default LoginModal;
