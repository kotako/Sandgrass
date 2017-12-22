import React from 'react';
import styled from 'styled-components';
import { Card, Feed } from 'semantic-ui-react';

const Wrapper = styled.div`
  margin: 1.6em;
`

const Issue = ({issue}) => (
  <Feed.Content>
    <Feed.Summary>
      <a>{issue ? issue.title : ''}</a>
    </Feed.Summary>
  </Feed.Content>
)

const QiitaCard = ({issues}) => (
  <Wrapper>
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
  </Wrapper>
)

export default QiitaCard;
