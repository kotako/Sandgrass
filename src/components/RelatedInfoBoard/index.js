import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import QiitaCardContainer from '../../containers/QiitaCardContainer';

const Wrapper = styled.div`
  padding: 2.4em;
`

const RelatedInfoBoard = () => (
  <Wrapper>
    <Card.Group>
      <QiitaCardContainer/>
    </Card.Group>
  </Wrapper>
);

export default RelatedInfoBoard;
