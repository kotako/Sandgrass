import React from 'react';
import styled from 'styled-components';

const TweetsWrapper = styled.div`
  text-align: center;
  display: inline-block;
  margin: 1.6em;
`

const Figure = styled.h1`
  font-size: 6.4em;
`

const Statement = styled.h1`
  font-size: 2.4em;
`

const Tweets = () => (
  <TweetsWrapper>
    <Figure>25</Figure>
    <Statement>Tweets</Statement>
  </TweetsWrapper>
)

export default Tweets;
