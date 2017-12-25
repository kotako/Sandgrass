import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import TimerContainer from '../../containers/TimerContainer';
import ProgressBoard from '../ProgressBoard';
import QiitaCardContainer from '../../containers/QiitaCardContainer';

const Wrapper = styled.div`
  padding: 1.5em;
  background-color: #2c3e50;
`

const Board = () => (
  <Wrapper>
    <Grid columns={2} padded>
      <Grid.Row>
        <Grid.Column>
          <TimerContainer/>
        </Grid.Column>
        <Grid.Column width='5' floated='right'>
          <ProgressBoard />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Wrapper>
)

export default Board;
