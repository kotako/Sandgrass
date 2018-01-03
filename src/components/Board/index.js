import React from 'react';
import { Grid, Transition } from 'semantic-ui-react';
import TimerContainer from '../../containers/TimerContainer';
import QiitaCardContainer from '../../containers/QiitaCardContainer';
import AnalyzerCardContainer from '../../containers/AnalyzerCardContainer';
import styled from 'styled-components';
import ProgressBoardContainer from '../../containers/ProgressBoardContainer';

const Wrapper=styled.div`
  height: 100vh;
  vertical-align: middle;
`

const Board = ({counting}) => (
  <Wrapper>
    <Grid padded columns={2}>
      <Grid.Row color='black' >
        <Grid.Column computer={10} largeScreen={10} tablet={16} widescreen={8} mobile={16} >
          <TimerContainer/>
        </Grid.Column>
        <Grid.Column computer={6} largeScreen={6} tablet={16} widescreen={8} mobile={16} >
          <ProgressBoardContainer />
        </Grid.Column>
      </Grid.Row>

      <Transition visible={!counting} animation='slide down'>
      <Grid.Row>
        <Grid.Column computer={8} largeScreen={8} tablet={16} widescreen={8} mobile={16}>
          <QiitaCardContainer/>
        </Grid.Column>
        <Grid.Column computer={8} largeScreen={8} tablet={16} widescreen={8} mobile={16}>
          <AnalyzerCardContainer />
        </Grid.Column>
        <Grid.Column stretched/>
      </Grid.Row>
      </Transition>
    </Grid>
  </Wrapper>
)

export default Board;
