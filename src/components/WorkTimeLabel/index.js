import React from 'react';
import { Statistic, Image, Segment } from 'semantic-ui-react';
import Moment from 'moment';
import TimerIcon from '../../assets/timer-128.png'

const WorkTimeLabel = ({ working_time }) => (
  <Segment inverted color='orange' textAlign='center'>
    <Image src={TimerIcon} size='tiny' inline verticalAlign='bottom' spaced='right'/>
    <Statistic inverted>
      <Statistic.Value>
        {working_time ? Moment.unix(working_time-32400).format('HH:mm') : '0:00'}
      </Statistic.Value>
      <Statistic.Label>Working time</Statistic.Label>
    </Statistic>
  </Segment>
);

export default WorkTimeLabel;
