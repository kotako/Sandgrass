import React from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  text-align: center;
`

const Timer = () => (
  <TimerWrapper>
    <h2>25:00</h2>
    <button>Start</button>
  </TimerWrapper>
);

export default Timer;
