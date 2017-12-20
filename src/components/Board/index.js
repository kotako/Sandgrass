import React from 'react';
import styled from 'styled-components';
import Contributions from '../Contributions';
import Tweets from '../Tweets';
import TimerContainer from '../../containers/TimerContainer';

const Wrapper = styled.div`
  text-align: center;
`

const Board = () => (
  <Wrapper>
    <Contributions />
    <TimerContainer />
    <Tweets />
  </Wrapper>
)

export default Board;
