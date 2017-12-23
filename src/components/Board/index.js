import React from 'react';
import styled from 'styled-components';
import TweetsContainer from '../../containers/TweetsContainer';
import ContributionContainer from '../../containers/ContributionContainer';
import TimerContainer from '../../containers/TimerContainer';
import QiitaCardContainer from '../../containers/QiitaCardContainer';

const Wrapper = styled.div`
  text-align: center;
`

const Board = () => (
  <Wrapper>
    <TimerContainer />
    <ContributionContainer />
    <TweetsContainer/>
    <QiitaCardContainer />
  </Wrapper>
)

export default Board;
