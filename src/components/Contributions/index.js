import React from 'react';
import styled from 'styled-components';

const ContributionsWrapper = styled.div`
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

const Contributions = () => (
  <ContributionsWrapper>
    <Figure>25</Figure>
    <Statement>Contributions</Statement>
  </ContributionsWrapper>
)

export default Contributions;
