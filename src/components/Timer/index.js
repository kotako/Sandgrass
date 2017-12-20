import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const TimerWrapper = styled.div`
  text-align: center;
  display: inline-block;
  margin: 1.6em;
`

const Dial = styled.h1`
  font-size: 6.4em;
`

const Timer = ({remain, counting, onClick}) => (
  <TimerWrapper>
    <Dial>
      {moment.unix(remain).format('mm:ss')}
    </Dial>
    <Button color={counting ? 'red' : 'blue'} onClick={onClick}>
      {counting ? 'Stop' : 'Start'}
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
