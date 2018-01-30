import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Grid } from 'semantic-ui-react';
import ContributionLabel from '../components/ContributionLabel';
import WorkTimeLabel from '../components/WorkTimeLabel';
import { modalClose, setBreak, start } from '../actions/timer.js';

class FinishModalContainer extends React.Component {

  close = () => { this.props.dispatch(modalClose()) }

  render() {
    return (
      <Modal size='small' open={this.props.modalOpen}>
        <Modal.Header>Let's have a break!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <h3>This Flip</h3>
            <Grid columns={2} >
              <Grid.Row>
                <Grid.Column>
                  <WorkTimeLabel
                    working_time={this.props.latestFlip ? this.props.latestFlip.working_time : 0}/>
                </Grid.Column>
                <Grid.Column>
                  <ContributionLabel
                    commits={this.props.latestFlip ? this.props.latestFlip.commits : 0}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => this.close()}>Close</Button>
          <Button color="green"
            onClick={() => {
              this.close();
              this.props.dispatch(setBreak(300));
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
    latestFlip: state.user.latestFlip,
    modalOpen: state.timer.finishModalOpen
  }
}

export default connect(mapStateToProps)(FinishModalContainer);
