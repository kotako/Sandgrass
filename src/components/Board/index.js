import React from 'react';
import { Grid } from 'semantic-ui-react';
import TimerContainer from '../../containers/TimerContainer';
import ProgressBoard from '../ProgressBoard';
import QiitaCardContainer from '../../containers/QiitaCardContainer';
import AnalyzerCardContainer from '../../containers/AnalyzerCardContainer';

const Board = () => (
    <Grid padded columns={2} stretched>
      <Grid.Row color='black'>
        <Grid.Column computer={8} largeScreen={8} tablet={16} widescreen={8} mobile={16} >
          <TimerContainer/>
        </Grid.Column>
        <Grid.Column computer={8} largeScreen={8} tablet={16} widescreen={8} mobile={16} >
          <ProgressBoard />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row reversed>
        <Grid.Column computer={8} largeScreen={8} tablet={16} widescreen={8} mobile={16}>
          <QiitaCardContainer/>
        </Grid.Column>
        <Grid.Column computer={8} largeScreen={8} tablet={16} widescreen={8} mobile={16}>
          <AnalyzerCardContainer />
        </Grid.Column>
        <Grid.Column stretched/>
      </Grid.Row>
    </Grid>
)

export default Board;
