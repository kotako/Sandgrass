import React from 'react';
import { Card, Feed } from 'semantic-ui-react';

const Issue = ({issue}) => (
  <Feed.Content>
    <Feed.Summary>
      <a href={issue ? issue.url : ''} target='_blank'>{issue ? issue.title : ''}</a>
    </Feed.Summary>
    <Feed.Meta>
    </Feed.Meta>
  </Feed.Content>
);

const QiitaCard = ({issues}) => (
  <Card>
    <Card.Content>
      <Card.Header>
        Relevant Issues
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Issue issue={issues ? issues[0] : null} />
      <Issue issue={issues ? issues[1] : null} />
      <Issue issue={issues ? issues[2] : null} />
    </Card.Content>
  </Card>
)

export default QiitaCard;
