import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const TimerWrapper = styled.div`
  text-align: center;
`

const Dial = styled.h1`
  color: #F1F1F1;
  font-size: 8.8em;
`

const Timer = ({remain, counting, onClick, onResetClick}) => (
  <TimerWrapper>
    <Dial>
      {moment.unix(remain).format('mm:ss')}
    </Dial>
    <Button color={counting ? 'red' : 'blue'} onClick={onClick}>
      {counting ? 'Pause' : 'Start'}
    </Button>
    <Button color='yellow' onClick={onResetClick}>
      Reset
    </Button>
  </TimerWrapper>
);

Timer.propstype = {
  start: PropTypes.number,
  end: PropTypes.number,
  remain: PropTypes.number,
  counting: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Timer;
