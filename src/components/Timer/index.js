import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const TimerWrapper = styled.div`
  text-align: center;
`

const Dial = styled.h1`
  font-size: 5.5em;
`

const Timer = ({now, counting, onClick}) => (
  <TimerWrapper>
    <Dial>
      {now}
    </Dial>
    <Button color={counting ? 'red' : 'blue'} onClick={onClick}>
      {counting ? 'Stop' : 'Start'}
    </Button>
  </TimerWrapper>
);

export default Timer;
