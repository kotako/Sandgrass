import React from 'react';
import styled from 'styled-components';
import TweetsContainer from '../../containers/TweetsContainer';
import ContributionContainer from '../../containers/ContributionContainer';
import TimerContainer from '../../containers/TimerContainer';

const Wrapper = styled.div`
  text-align: center;
`

const Board = () => (
  <Wrapper>
    <ContributionContainer />
    <TimerContainer />
    <TweetsContainer/>
  </Wrapper>
)

export default Board;
