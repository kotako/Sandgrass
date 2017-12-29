import React from 'react';
import { Card } from 'semantic-ui-react';
import Chart from '../Chart';

const AnalyzerCard = () => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        Analyze
      </Card.Header>
    </Card.Content>
    <Card.Content>
      {Chart([{name: 'Page A', uv: 4000, pv: 9000},
      {name: 'Page B', uv: 3000, pv: 7222},
      {name: 'Page C', uv: 2000, pv: 6222},
      {name: 'Page D', uv: 1223, pv: 5400},
      {name: 'Page E', uv: 1890, pv: 3200},
      {name: 'Page F', uv: 2390, pv: 2500},
      {name: 'Page G', uv: 3490, pv: 1209},], 'name', 'uv', '#88848d8' )}
    </Card.Content>
  </Card>
);

export default AnalyzerCard;
