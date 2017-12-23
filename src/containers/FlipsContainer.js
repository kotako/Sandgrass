import React from 'react';
import { connect } from 'react-redux';
import { Card, Segment, Statistic, Image } from 'semantic-ui-react';
import TimerIcon from '../assets/timer-128.png'

class FlipsContainer extends React.Component {
  render() {
    return (
      <Card centered>
        <Segment inverted color='purple' padded='false'>
          <Image src={TimerIcon} size='tiny' inline verticalAlign='bottom' spaced='right'/>
          <Statistic inverted>
            <Statistic.Value>
              0
            </Statistic.Value>
            <Statistic.Label>SandGlass Flips</Statistic.Label>
          </Statistic>
        </Segment>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state};
};

export default connect(mapStateToProps)(FlipsContainer);
