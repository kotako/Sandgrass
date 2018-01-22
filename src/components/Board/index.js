import React from 'react';
import { Grid, Transition } from 'semantic-ui-react';
import TimerContainer from '../../containers/TimerContainer';
import QiitaCardContainer from '../../containers/QiitaCardContainer';
import AnalyzerCardContainer from '../../containers/AnalyzerCardContainer';
import MusicCardContainer from '../../containers/MusicCardContainer';
import styled from 'styled-components';
import ProgressBoardContainer from '../../containers/ProgressBoardContainer';

const Wrapper=styled.div`
  height: 100vh;
`

const Cell = styled.li`
  margin: 16px;
`

const ScrollList = styled.ul`
  display: flex;
  list-style: none;
  overflow-x: scroll;
  margin: 8px;
  padding: 0;
`

const Board = ({counting}) => (
  <Wrapper>
    <Grid padded columns={2}>
      <Grid.Row color='black' >
        <Grid.Column computer={10} largeScreen={10} tablet={16} widescreen={10} mobile={16} >
          <TimerContainer/>
        </Grid.Column>
        <Grid.Column computer={6} largeScreen={6} tablet={16} widescreen={6} mobile={16} >
          <ProgressBoardContainer />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Transition visible={!counting} animation='slide down'>
      <span>
        <ScrollList>
          <Cell>
            <QiitaCardContainer/>
          </Cell>
          <Cell>
            <AnalyzerCardContainer/>
          </Cell>
          <Cell>
            <MusicCardContainer/>
          </Cell>
        </ScrollList>
      </span>
    </Transition>
  </Wrapper>
)

export default Board;
