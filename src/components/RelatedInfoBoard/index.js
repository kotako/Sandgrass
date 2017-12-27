import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import QiitaCardContainer from '../../containers/QiitaCardContainer';
import AnalyzerCardContainer from '../../containers/AnalyzerCardContainer';

const Wrapper = styled.div`
  padding: 2.4em;
`

const RelatedInfoBoard = () => (
  <Wrapper>
    <Card.Group itemsPerRow={2}>
      <QiitaCardContainer/>
      <AnalyzerCardContainer/>
    </Card.Group>
  </Wrapper>
);

export default RelatedInfoBoard;
