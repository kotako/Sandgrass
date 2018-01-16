import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button, Icon } from 'semantic-ui-react';

const TimerWrapper = styled.div`
  text-align: center;
`

const Dial = styled.h1`
  color: #F1F1F1;
  font-size: 12.0em;

  @media only screen and (max-width: 760px) {
    font-size: 7.0em;
  }
`

const Timer = ({remain, counting, startedAt, onStartClick, onResetClick, onAdjustClick}) => (
  <TimerWrapper>
    <Dial>
      {moment.unix(remain).format('mm:ss')}
    </Dial>
    <Button inverted color='orange' onClick={onAdjustClick} size='huge' disabled={startedAt ? true : false}>
      <Icon name='wait'/>
      Adjust
    </Button>
    <Button inverted color={counting ? 'red' : 'blue'} onClick={onStartClick} size='huge' disabled={remain===0 ? true : false}>
      <Icon name={counting ? 'pause' : 'play'}/>
      {counting ? 'Pause' : 'Start'}
    </Button>
    <Button inverted color='yellow' onClick={onResetClick} size='huge'>
      <Icon name='refresh'/>
      Reset
    </Button>
  </TimerWrapper>
);

Timer.propstype = {
  start: PropTypes.number,
  end: PropTypes.number,
  remain: PropTypes.number,
  counting: PropTypes.bool,
  onStartClick: PropTypes.func,
  onResetClick: PropTypes.func,
  onAdjustClick: PropTypes.func,
}

export default Timer;
