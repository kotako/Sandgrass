import React from 'react';
import styled from 'styled-components';
import Tweets from '../Tweets';
import ContributionContainer from '../../containers/ContributionContainer';
import TimerContainer from '../../containers/TimerContainer';

const Wrapper = styled.div`
  text-align: center;
`

const Board = () => (
  <Wrapper>
    <ContributionContainer />
    <TimerContainer />
    <Tweets />
  </Wrapper>
)

export default Board;
