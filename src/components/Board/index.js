import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import TimerBoard from '../../containers/TimerBoard';
import ProgressBoard from '../ProgressBoard';

const Wrapper = styled.div`
  padding: 2.4em;
  background-color: #2c3e50;
`

const Board = () => (
  <Wrapper>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <TimerBoard/>
        </Grid.Column>
        <Grid.Column widescreen='8' largeScreen='8' computer='7' tablet='15' mobile='16' floated='right'>
          <ProgressBoard />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Wrapper>
)

export default Board;
