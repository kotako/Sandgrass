import React from 'react';
import { Grid, Transition } from 'semantic-ui-react';
import TimerContainer from '../../containers/TimerContainer';
import QiitaCardContainer from '../../containers/QiitaCardContainer';
import AnalyzerCardContainer from '../../containers/AnalyzerCardContainer';
import TodosCardContainer from '../../containers/TodosCardContainer';
import styled from 'styled-components';
import ProgressBoardContainer from '../../containers/ProgressBoardContainer';

const Cell = styled.li`
  margin-top: 4px;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
`

const ScrollList = styled.ul`
  display: flex;
  list-style: none;
  overflow-x: scroll;
  margin-left: 8px;
  margin-right: 8px;
  padding: 0;
`

const Board = ({ counting, breaking }) => (
  <div>
    <Grid inverted columns={2}>
      <Grid.Row>
        <Grid.Column computer={10} largeScreen={10} tablet={16} widescreen={10} mobile={16} >
          <TimerContainer/>
        </Grid.Column>
        <Grid.Column computer={6} largeScreen={6} tablet={16} widescreen={6} mobile={16} >
          <ProgressBoardContainer />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Transition visible={!counting === !breaking} animation='slide down'>
      <span>
        <ScrollList>
          <Cell>
            <QiitaCardContainer/>
          </Cell>
          <Cell>
            <AnalyzerCardContainer/>
          </Cell>

        </ScrollList>
      </span>
    </Transition>
  </div>
)

export default Board;
