import React from 'react';
import { Card, Feed, Icon } from 'semantic-ui-react';

const Issue = ({issue}) => (
  <Feed.Event>
    <Feed.Label>
      <img src={issue ? issue.user.profile_image_url : null} alt='profile_image_url'/>
    </Feed.Label>
    <Feed.Content>
      <Feed.Summary>
        <a href={issue ? issue.url : ''} target='_blank'>{issue ? issue.title : ''}</a>
      </Feed.Summary>
      <Feed.Meta>
        <Icon name={issue ? 'tag' : null}/>
        {
          issue
            ? issue.tags.map((tag, index, array) => {return tag.name}).join(', ')
            : null
        }
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
);

const QiitaCard = ({issues}) => (
  <Card style={{minWidth: "400px"}}>
    <Card.Content>
      <Card.Header>
        Qiita
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Issue issue={issues ? issues[0] : null} />
        <Issue issue={issues ? issues[1] : null} />
        <Issue issue={issues ? issues[2] : null} />
      </Feed>
    </Card.Content>
  </Card>
)

export default QiitaCard;
