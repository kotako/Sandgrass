import React from 'react';
import { Statistic, Image, Segment } from 'semantic-ui-react';
import GitHubIcon from '../../assets/GitHub-Mark-Light-120px-plus.png';

const ContributionLabel = ({ commits }) => (
  <Segment inverted color='green' textAlign='center'>
    <Image src={GitHubIcon} size='tiny' inline verticalAlign='bottom' spaced='right'/>
    <Statistic inverted>
      <Statistic.Value>
        {commits ? commits : 0}
      </Statistic.Value>
      <Statistic.Label>Contributions</Statistic.Label>
    </Statistic>
  </Segment>
);

export default ContributionLabel;
