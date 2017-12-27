import React from 'react';
import { Segment, Statistic, Image } from 'semantic-ui-react';
import TimerIcon from '../../assets/timer-128.png'

const FlipLabel = ({ flips }) => (
  <Segment inverted color='purple' textAlign='center'>
    <Image src={TimerIcon} size='tiny' inline verticalAlign='bottom' spaced='right'/>
    <Statistic inverted>
      <Statistic.Value>
        {flips ? Object.keys(flips).length : 0}
      </Statistic.Value>
      <Statistic.Label>SandGlass Flips</Statistic.Label>
    </Statistic>
  </Segment>
);

export default FlipLabel;
