import React from 'react';
import { Grid } from 'semantic-ui-react';
import ContributionContainer from '../../containers/ContributionContainer';
import FlipsContainer from '../../containers/FlipsContainer';

const ProgressBoard = () => (
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <FlipsContainer />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <ContributionContainer />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ProgressBoard;
