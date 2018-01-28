import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import ContributionLabel from '../components/ContributionLabel';
import WorkTimeLabel from '../components/WorkTimeLabel';
import { modalClose, setBreak, start } from '../actions/timer.js';

class FinishModalContainer extends React.Component {

  close = () => { this.props.dispatch(modalClose()) }

  render() {
    return (
      <Modal open={this.props.modalOpen}>
        <Modal.Header>Let's have a break!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>This Flip...</p>
            <WorkTimeLabel working_time={0}/>
            <ContributionLabel commits={0}/>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => this.close()}>Close</Button>
          <Button color="green"
            onClick={() => {
              this.close();
              this.props.dispatch(setBreak(30));
              this.props.dispatch(start());
            }}>Have a break 5 mins</Button>
          <Button color="green"
            onClick={() => {
              this.close();
              this.props.dispatch(setBreak(1500));
              this.props.dispatch(start());
            }}>Have a break 25 mins</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalOpen: state.timer.finishModalOpen
  }
}

export default connect(mapStateToProps)(FinishModalContainer);
