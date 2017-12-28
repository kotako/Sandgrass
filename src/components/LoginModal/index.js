import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const LoginModal = ({ login, onClick }) => (
  <Modal open={!login}>
    <Modal.Header>
      Login with GitHub!
    </Modal.Header>
    <Modal.Content>
      <p>Login with GitHub and Enjoy!</p>
    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={() => {login=true}}>Skip</Button>
      <Button positive labelPosition='right' icon='checkmark' content='Login' onClick={onClick}/>
    </Modal.Actions>
  </Modal>
);

export default LoginModal;
